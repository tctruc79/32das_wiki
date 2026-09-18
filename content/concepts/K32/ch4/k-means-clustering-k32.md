---
type: concept
title: "K-Means"
title_en: "K-Means Clustering"
tags: [chapter-4, k32, k-means, clustering, kmeans-plus-plus]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

K-Means là thuật toán phân cụm phân hoạch: cho trước số cụm K, nó tìm
phân hoạch `C1, ..., CK` **cực tiểu hóa tổng bình phương khoảng cách từ
mỗi điểm tới tâm cụm của nó**, tức cực tiểu hóa WCSS. Bài toán này
**NP-khó** trong trường hợp tổng quát, nên thực tế dùng một heuristic lặp
gọi là **thuật toán Lloyd**.
<br><span class="en">K-Means is a partitional clustering algorithm: given
the number of clusters K, it seeks the partition `C1, ..., CK`
**minimising the summed squared distance from each point to its
centroid**, i.e. minimising WCSS. That problem is **NP-hard** in general,
so in practice an iterative heuristic known as **Lloyd's algorithm** is
used.</span>

## Diễn giải - <span class="en">Explanation</span>

### Hàm mục tiêu trước, thuật toán sau - <span class="en">Objective first, algorithm second</span>

Cách trình bày của bản 2026 rất đáng chú ý: slide 22 nói rõ **K-Means
đang giải bài toán gì** trước khi mô tả nó làm thế nào. Điều này quan
trọng vì nó giải thích mọi giới hạn phía sau: vì hàm mục tiêu là tổng
bình phương khoảng cách **tới một tâm**, các cụm mà K-Means tìm được
**luôn là các khối lồi quanh một điểm** - không có cách nào để nó trả về
một hình lưỡi liềm.
<br><span class="en">The 2026 presentation is notable: slide 22 states
**what problem K-Means solves** before describing how. This matters
because it explains every limitation that follows: since the objective is
the summed squared distance **to a centre**, the clusters K-Means can
find are **always convex blobs around a point** - there is no way for it
to return a crescent.</span>

Thuật toán Lloyd gồm 3 bước: (1) **khởi tạo** K tâm cụm ban đầu; (2)
**lặp tới khi hội tụ**, luân phiên **bước gán** (tính khoảng cách từ mỗi
điểm tới K tâm, gán điểm vào tâm gần nhất) và **bước cập nhật** (dịch mỗi
tâm về trung bình của các điểm thuộc nó); (3) **dừng** khi không còn thay
đổi gán, hoặc mức giảm WCSS nhỏ hơn ngưỡng `tol`. Bảo đảm toán học: mỗi
bước **chỉ có thể làm WCSS giảm**, nên thuật toán **luôn hội tụ** - nhưng
về một **cực tiểu địa phương**, không nhất thiết là toàn cục.
<br><span class="en">Lloyd's algorithm has 3 steps: (1) **initialise** K
centres; (2) **iterate to convergence**, alternating the **assignment
step** (compute each point's distance to the K centres, assign it to the
nearest) and the **update step** (move each centre to the mean of its
members); (3) **stop** when no assignment changes, or the WCSS decrease
falls below the tolerance `tol`. The mathematical guarantee: each step
**can only decrease WCSS**, so the algorithm **always converges** - but to
a **local optimum**, not necessarily the global one.</span>

### Vì sao dạng theo tâm cụm quan trọng - <span class="en">Why the centroid form matters</span>

Slide 17 cho hai công thức tương đương của biến động trong cụm: dạng
**theo cặp** (trung bình bình phương khoảng cách giữa mọi cặp điểm trong
cụm) và dạng **theo tâm cụm** (2 lần tổng bình phương khoảng cách từ mỗi
điểm tới `mu_k`). Sự tương đương này là lý do K-Means chạy nhanh: nó chỉ
cần giữ **K tâm cụm** và tính `n x K` khoảng cách mỗi vòng lặp, thay vì
lập ma trận khoảng cách `n x n` như phân cụm thứ bậc. Đó là gốc của độ
phức tạp xấp xỉ `O(n K p I)`.
<br><span class="en">Slide 17 gives two equivalent formulas for
within-cluster variation: the **pairwise** form (the average squared
distance between all pairs in the cluster) and the **centroid** form
(twice the summed squared distance from each point to `mu_k`). That
equivalence is why K-Means is fast: it only needs to hold **K centroids**
and compute `n x K` distances per iteration, instead of forming an
`n x n` distance matrix as hierarchical clustering does. This is the
source of its roughly `O(n K p I)` complexity.</span>

### Khởi tạo: k-means++ - <span class="en">Initialisation: k-means++</span>

Vấn đề của khởi tạo ngẫu nhiên: hai tâm ban đầu rơi vào **cùng một cụm
thật** có thể giam thuật toán ở một cực tiểu địa phương tệ - và **người
dùng không thể biết**, vì thuật toán vẫn hội tụ bình thường và vẫn trả ra
một hình trông hợp lý. Thuật toán **k-means++** (Arthur và Vassilvitskii,
2007; nay là mặc định của `scikit-learn`) chữa bằng cách rải các tâm ban
đầu ra xa nhau: (1) chọn tâm đầu tiên ngẫu nhiên đều từ dữ liệu; (2) chọn
mỗi tâm tiếp theo với **xác suất tỉ lệ `D(x)^2`**, trong đó `D(x)` là
khoảng cách từ x tới tâm gần nhất đã chọn - điểm càng xa các tâm hiện có
thì càng dễ được chọn; (3) lặp tới khi có K tâm, rồi chạy K-Means chuẩn.
<br><span class="en">The problem with random initialisation: two starting
centres landing inside **the same true cluster** can trap the algorithm
in a poor local optimum - and **you would never know**, because it still
converges and still returns a plausible-looking figure. **k-means++**
(Arthur and Vassilvitskii, 2007; now the `scikit-learn` default) fixes
this by spreading the initial centres out: (1) pick the first centre
uniformly at random from the data; (2) pick each subsequent centre with
**probability proportional to `D(x)^2`**, where `D(x)` is the distance
from x to the nearest centre already chosen - the further a point is from
the existing centres, the likelier it is to be picked; (3) repeat until K
centres are chosen, then run standard K-Means.</span>

Quy tắc thực hành kèm theo: **luôn chạy lại nhiều lần** qua tham số
`n_init` và giữ phương án có WCSS thấp nhất. Lưu ý phiên bản: từ
`scikit-learn` 1.4, `n_init` mặc định là `"auto"`, nên phải **đặt tường
minh** nếu muốn kết quả tái lập được.
<br><span class="en">The attached practical rule: **always restart
several times** via `n_init`, keeping the solution with the lowest WCSS.
A version note: from `scikit-learn` 1.4 the `n_init` default is
`"auto"`, so **set it explicitly** if you want reproducible
results.</span>

### Điểm mạnh và giới hạn - <span class="en">Strengths and limitations</span>

| Điểm mạnh | Giới hạn |
|---|---|
| Đơn giản, dễ giải thích cho người không chuyên | K phải chọn trước khi chạy |
| Nhanh, xấp xỉ `O(n K p I)` mỗi lần chạy | Chỉ tìm được cụm hình cầu, kích thước tương đương |
| Mở rộng tốt với n lớn (bản mini-batch còn xa hơn) | Nhạy với thang đo và với điểm ngoại lai |
| Tâm cụm đọc được trực tiếp như hồ sơ "điển hình" | Hội tụ về cực tiểu địa phương, phụ thuộc khởi tạo |
| | Giả định mọi biến là số và khoảng cách Euclid có nghĩa |

Hai giới hạn có hệ quả cụ thể đáng nhớ: vì chỉ tìm được cụm hình cầu và
đều nhau, K-Means sẽ **chẻ một cụm dài ra làm hai** và **gộp hai cụm mảnh
nằm gần nhau lại**; và vì trung bình không bền vững trước điểm ngoại lai,
một vài điểm cực trị đủ để **kéo lệch tâm cụm** - trường hợp đó nên dùng
K-Medoids/PAM, vốn dùng một điểm dữ liệu thật làm đại diện thay vì trung
bình.
<br><span class="en">Two limitations have memorable concrete
consequences: because it can only find spherical, similarly-sized
clusters, K-Means will **split one elongated cluster in two** and **merge
two thin clusters lying close together**; and because the mean is not
robust to outliers, a few extreme points suffice to **drag a centroid
off**, in which case K-Medoids/PAM is preferable, using a real data point
as the representative instead of a mean.</span>

Ý chính của slide 25, và là câu đáng nhớ nhất về thuật toán này:
**K-Means không kiểm định xem cụm có tồn tại - nó áp đặt K cụm hình cầu
lên bất cứ thứ gì được đưa vào.**
<br><span class="en">Slide 25's key idea, and the most memorable sentence
about this algorithm: **K-Means does not test whether clusters exist - it
imposes K spherical clusters on whatever you give it.**</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 22 (hàm mục tiêu, NP-khó,
thuật toán Lloyd), 23 (một lượt chạy bằng hình), 24 (k-means++), 25 (điểm
mạnh và giới hạn), 26-29 (minh họa và demo tương tác), 30-31 (mã Python
kèm chuẩn hóa và silhouette), 32-33 (ứng dụng hậu cần và nông nghiệp), 41
(bảng so sánh với phân cụm thứ bậc), 17 (dạng theo tâm cụm mà nó tối ưu),
44 (K-Means là trường hợp riêng của GMM với hiệp phương sai cầu).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 22
(the objective, NP-hardness, Lloyd's algorithm), 23 (one pass
illustrated), 24 (k-means++), 25 (strengths and limitations), 26-29
(illustrations and interactive demos), 30-31 (the Python example with
scaling and silhouette), 32-33 (the logistics and agriculture
applications), 41 (the comparison table with hierarchical clustering), 17
(the centroid form it optimises), 44 (K-Means as the special case of GMM
with spherical covariance).</span>

Bốn trong bảy file mã đi kèm chương là về K-Means:
`Example3.7_KMeans.py`, `Example3.7_KMeans_GenerateData_and_
Clustering.py`, `Example3.7_KMeans_Elbow.py` và
`Example3.7_KMeans_ReduceColors.py`.
<br><span class="en">Four of the chapter's seven shipped scripts are
about K-Means: `Example3.7_KMeans.py`,
`Example3.7_KMeans_GenerateData_and_Clustering.py`,
`Example3.7_KMeans_Elbow.py` and
`Example3.7_KMeans_ReduceColors.py`.</span>

## Liên quan - <span class="en">Related</span>

- [[choosing-k-elbow-silhouette]] - cách biện luận tham số K mà thuật
  toán bắt phải cho trước.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - how to justify
  the K the algorithm demands up front.</span>
- [[distance-measures]] - K-Means dùng khoảng cách Euclid, nên bắt buộc
  chuẩn hóa.
  <br><span class="en">[[distance-measures]] - K-Means uses Euclidean
  distance, hence the standardisation requirement.</span>
- [[hierarchical-clustering-k32]] - phương án thay thế khi không biết K
  hoặc khi n nhỏ.
  <br><span class="en">[[hierarchical-clustering-k32]] - the alternative
  when K is unknown or n is small.</span>
- [[dbscan-and-gaussian-mixture]] - hai phương án cho hình dạng lạ và cho
  gán mềm.
  <br><span class="en">[[dbscan-and-gaussian-mixture]] - the two
  alternatives for odd shapes and for soft assignment.</span>
- [[clustering-pitfalls-checklist]] - 7 điều phải kiểm tra, phần lớn sinh
  ra từ các giới hạn ở slide 25.
  <br><span class="en">[[clustering-pitfalls-checklist]] - the 7 checks,
  most of which come from slide 25's limitations.</span>
- [[clustering-k32]] - khung chung của bài toán.
  <br><span class="en">[[clustering-k32]] - the general problem
  frame.</span>
