---
type: concept
title: "Phân cụm thứ bậc, liên kết và sơ đồ cây"
title_en: "Hierarchical Clustering, Linkage and the Dendrogram"
tags: [chapter-4, k32, hierarchical-clustering, linkage, dendrogram]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Phân cụm thứ bậc dựng **cả họ phân hoạch lồng nhau cho mọi K trong một
lần chạy**, thay vì trả về một phân hoạch duy nhất. Bản gộp dần (bottom
up, bản chuẩn) bắt đầu bằng cách coi mỗi quan sát là một cụm riêng, rồi
lặp việc **gộp hai cụm gần nhau nhất** cho tới khi còn một cụm duy nhất.
Kết quả được trình bày bằng **sơ đồ cây (dendrogram)**, và số cụm được đọc
ra bằng cách **cắt cây ở một độ cao**.
<br><span class="en">Hierarchical clustering builds **the whole family of
nested partitions for every K in one run**, instead of returning a single
partition. The agglomerative version (bottom-up, the standard) starts by
treating each observation as its own cluster, then repeatedly **merges
the two closest clusters** until only one remains. The result is
displayed as a **dendrogram**, and the number of clusters is read off by
**cutting the tree at a chosen height**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Vì sao cần nó - <span class="en">Why it is needed</span>

Slide 34 nêu 3 lý do, đều là giới hạn của K-Means: K-Means **đòi số cụm
ngay từ đầu**; kết quả của nó **phụ thuộc K tâm khởi tạo ngẫu nhiên**; và
trong rất nhiều tình huống **không rõ cần bao nhiêu cụm**. Phân cụm thứ
bậc giải quyết cả ba: một lần chạy, một bức tranh, mọi K. Đánh đổi là chi
phí: `O(n^2)` bộ nhớ và `O(n^2 log n)` thời gian, nên **không khả thi khi
vượt vài chục nghìn điểm**.
<br><span class="en">Slide 34 gives 3 reasons, all of them K-Means'
limitations: K-Means **demands the number of clusters up front**; its
result **depends on K randomly initialised centroids**; and in many
situations **it is not clear how many clusters are needed**. Hierarchical
clustering answers all three: one run, one picture, every K. The
trade-off is cost: `O(n^2)` memory and `O(n^2 log n)` time, so it is
**impractical beyond a few tens of thousands of points**.</span>

### Thuật toán và tính không đảo lại - <span class="en">The algorithm and irreversibility</span>

Thuật toán gộp dần: bắt đầu với n cụm (mỗi quan sát một cụm); lặp hai
bước - (1) tìm hai cụm gần nhau nhất, (2) gộp chúng thành một - tới khi
mọi quan sát nằm trong một cụm. Hướng ngược lại là **chia dần** (top down:
bắt đầu từ một cụm rồi tách), ít dùng vì đắt hơn.
<br><span class="en">The agglomerative algorithm: start with n clusters
(one per observation); repeat two steps - (1) identify the two closest
clusters, (2) merge them - until all observations are in one cluster. The
opposite direction is **divisive** (top-down: start with one cluster and
split), rarely used because it is more expensive.</span>

Ghi chú then chốt, và là điểm khác biệt sâu nhất so với K-Means: **các
lần gộp là không thể đảo lại**. Một điểm bị xếp sai nhánh từ sớm **không
bao giờ chuyển đi được**, trong khi K-Means **gán lại toàn bộ mỗi vòng
lặp**. Đó là lý do một điểm nhiễu nằm giữa hai nhóm có thể làm hỏng cả cấu
trúc phía trên của cây, đặc biệt với liên kết đơn.
<br><span class="en">The key note, and the deepest difference from
K-Means: **merges are irreversible**. A point placed in the wrong branch
early **can never move**, whereas K-Means **reassigns everything every
iteration**. This is why one noisy point sitting between two groups can
corrupt the whole upper structure of the tree, especially under single
linkage.</span>

### Bốn kiểu liên kết - <span class="en">The four linkages</span>

"Hai cụm gần nhau nhất" cần một định nghĩa, và định nghĩa đó gọi là **liên
kết**:
<br><span class="en">"The two closest clusters" needs a definition, and
that definition is the **linkage**:</span>

| Liên kết | Hành vi | Điều phải đề phòng |
|---|---|---|
| Đơn (cặp gần nhất) | Tìm ra các hình dài, xâu chuỗi | "Xâu chuỗi": một điểm cầu nối gộp hai nhóm vốn riêng biệt |
| Đầy đủ (cặp xa nhất) | Cụm chặt, kích thước khá đều | Làm vỡ những cụm thực sự dài |
| Trung bình (trung bình mọi cặp) | Dung hòa giữa hai cái trên | Hình học khó diễn giải hơn |
| Ward (cực tiểu mức tăng WCSS) | Gần với hành vi của K-Means | Yêu cầu khoảng cách Euclid; là mặc định thường dùng |

Điểm đáng nhớ: **liên kết Ward tối ưu cùng một đại lượng mà K-Means tối
ưu** (mức tăng WCSS), nên nó cho ra các cụm chặt và tròn giống K-Means -
đó là lý do nó là mặc định, nhưng cũng là lý do nó **không** giúp gì nếu
vấn đề của bạn là cụm có hình dạng lạ.
<br><span class="en">Worth remembering: **Ward linkage optimises the same
quantity K-Means optimises** (the increase in WCSS), so it produces the
same compact, round clusters - which is why it is the default, but also
why it **does not** help if your problem is oddly shaped clusters.</span>

### Đọc và cắt sơ đồ cây - <span class="en">Reading and cutting a dendrogram</span>

Bốn điều phải biết (slide 39): **chiều cao của một thanh ngang là khoảng
cách tại đó hai cụm được gộp**; một **nhát cắt ngang ở độ cao h** cho ra
một phương án phân cụm, và **số đường dọc mà nhát cắt đi qua chính là K**;
ví dụ trên slide, cắt ở 3.3 cho `{A, B, C}` và `{D, E}`, còn cắt ở 2.0 cho
`{A, B}`, `{C}`, `{D, E}`; và nên tìm một **khoảng trống dọc lớn**, vì một
cú nhảy lớn về chiều cao gộp nghĩa là hai nhánh **thật sự cách xa nhau** -
đây chính là thứ tương đương với "khuỷu tay" ở phía K-Means.
<br><span class="en">Four things to know (slide 39): **the height of a
horizontal bar is the distance at which those two clusters merged**; a
**horizontal cut at height h** gives one clustering, and **the number of
vertical lines it crosses is K**; in the slide's example, cutting at 3.3
gives `{A, B, C}` and `{D, E}`, while cutting at 2.0 gives `{A, B}`,
`{C}`, `{D, E}`; and you should look for a **tall vertical gap**, because
a large jump in merge height means the two branches are **genuinely far
apart** - the dendrogram's equivalent of the elbow on the K-Means
side.</span>

Cảnh báo quan trọng kèm theo: **không được đọc quá nhiều vào thứ tự
ngang**. Cây có thể bị **lật tại bất kỳ nút nào** mà không thay đổi nội
dung, nên hai lá nằm cạnh nhau trên trục đáy **không có nghĩa là chúng
giống nhau**. Chỉ chiều cao mới mang thông tin.
<br><span class="en">The important attached warning: **do not over-read
the horizontal order**. The tree can be **flipped at any node** without
changing its content, so two leaves adjacent along the bottom axis **do
not thereby resemble each other**. Only the heights carry
information.</span>

### Bảng so sánh với K-Means - <span class="en">The comparison with K-Means</span>

| Tiêu chí | K-Means | Thứ bậc |
|---|---|---|
| Số cụm | Ấn định trước | Quyết định sau, bằng cách cắt cây |
| Đầu ra | Một phân hoạch phẳng | Một cây lồng nhau đầy đủ |
| Tái lập được? | Không - phụ thuộc khởi tạo | Có - tất định |
| Độ phức tạp | Xấp xỉ `O(nKpI)`, mở rộng tốt | `O(n^2)` bộ nhớ; kém khi vượt 10-50 nghìn điểm |
| Gán lại | Điểm có thể chuyển cụm | Các lần gộp không đảo lại |
| Hình dạng cụm | Cầu, kích thước tương đương | Tùy liên kết |
| Điểm ngoại lai | Làm lệch tâm cụm | Thường bị tách thành nhánh đơn lẻ |
| Phù hợp nhất | n lớn, đã biết K | n nhỏ, đang khám phá cấu trúc |

Dòng **điểm ngoại lai** là một lợi thế ít được nhắc của phân cụm thứ bậc:
một điểm cực trị thường hiện ra thành **một nhánh đơn lẻ gộp rất muộn**,
tức bản thân sơ đồ cây đã là một công cụ phát hiện điểm ngoại lai - trong
khi ở K-Means cùng điểm đó chỉ âm thầm kéo lệch một tâm cụm.
<br><span class="en">The **outliers** row is an under-mentioned advantage
of hierarchical clustering: an extreme point usually shows up as **a
singleton branch merging very late**, so the dendrogram is itself an
outlier-detection tool - whereas in K-Means the same point merely drags a
centroid off in silence.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 34 (vì sao cần), 35
(thuật toán gộp dần, tính không đảo lại), 36 (bốn kiểu liên kết), 37-38
(ví dụ tính tay với liên kết đầy đủ), 39 (đọc và cắt sơ đồ cây), 40 (sơ
đồ cây của ví dụ), 41 (bảng so sánh với K-Means), 20 (thuộc họ không ấn
định K trước), 76 (chạy nhanh hơn nhiều trên không gian đã giảm chiều bằng
PCA).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 34
(why it is needed), 35 (the agglomerative algorithm and irreversibility),
36 (the four linkages), 37-38 (the hand-worked complete-linkage example),
39 (reading and cutting a dendrogram), 40 (the example's dendrogram), 41
(the comparison table with K-Means), 20 (its place in the do-not-fix-K
family), 76 (it runs much faster in a PCA-reduced space).</span>

**Lưu ý về khoảng trống nguồn**: phân cụm thứ bậc được dạy qua 7 slide
nhưng **chương không có dòng mã nào** cho nó - cả 7 file `.py` đi kèm đều
là K-Means hoặc PCA. Muốn thực hành phải tự tìm
`scipy.cluster.hierarchy.linkage` cùng `dendrogram`, hoặc
`sklearn.cluster.AgglomerativeClustering`.
<br><span class="en">**A source-gap note**: hierarchical clustering is
taught across 7 slides but **the chapter ships no code for it** - all 7
`.py` files are K-Means or PCA. Practising it requires finding
`scipy.cluster.hierarchy.linkage` with `dendrogram`, or
`sklearn.cluster.AgglomerativeClustering`, yourself.</span>

## Liên quan - <span class="en">Related</span>

- [[k-means-clustering-k32]] - phương pháp đối chiếu ở slide 41, và là
  thứ mà liên kết Ward mô phỏng lại.
  <br><span class="en">[[k-means-clustering-k32]] - the method it is
  compared against on slide 41, and the behaviour Ward linkage
  mimics.</span>
- [[distance-measures]] - liên kết là cách nâng khoảng cách giữa hai
  **điểm** lên thành khoảng cách giữa hai **cụm**.
  <br><span class="en">[[distance-measures]] - linkage lifts a distance
  between two **points** to a distance between two **clusters**.</span>
- [[choosing-k-elbow-silhouette]] - khoảng trống dọc trên cây đóng vai
  trò giống khuỷu tay.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - a tall vertical
  gap in the tree plays the role of the elbow.</span>
- [[clustering-k32]] - khung chung; phân cụm thứ bậc thuộc họ không ấn
  định K.
  <br><span class="en">[[clustering-k32]] - the general frame;
  hierarchical clustering belongs to the do-not-fix-K family.</span>
- [[dbscan-and-gaussian-mixture]] - hai phương pháp còn lại trong bộ bốn
  ở slide 44.
  <br><span class="en">[[dbscan-and-gaussian-mixture]] - the other two
  methods in slide 44's set of four.</span>
