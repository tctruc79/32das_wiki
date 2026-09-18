---
type: concept
title: "Chọn số cụm K: khuỷu tay, silhouette và thống kê khoảng trống"
title_en: "Choosing K: Elbow, Silhouette and the Gap Statistic"
tags: [chapter-4, k32, clustering, wcss, elbow-method, silhouette]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Chọn K là thành phần thứ tư trong bốn thứ cần có để phân cụm: một **quy
tắc quyết định số cụm**. Vấn đề trung tâm là không thể chọn K bằng cách
cực tiểu hóa hàm mục tiêu, vì **WCSS luôn giảm khi K tăng** và bằng 0 tại
`K = n`. Do đó chương đưa ra ba công cụ: **phương pháp khuỷu tay**, **hệ
số silhouette**, và **thống kê khoảng trống**.
<br><span class="en">Choosing K is the fourth requirement for clustering:
a **decision rule for the number of clusters**. The central difficulty is
that K cannot be chosen by minimising the objective, because **WCSS
always falls as K rises** and is zero at `K = n`. The chapter therefore
offers three tools: the **elbow method**, the **silhouette score**, and
the **gap statistic**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Phân rã TSS = WSS + BSS - <span class="en">The TSS = WSS + BSS decomposition</span>

Một phương án phân cụm tốt vừa **chặt** (các điểm gần tâm cụm của mình)
vừa **tách rời** (các tâm cụm xa nhau). Slide 16 cho thấy hai mục tiêu
này thực chất là một, qua đẳng thức `TSS = WSS + BSS`, trong đó **TSS là
hằng số** không phụ thuộc cách phân cụm. Hệ quả: **giảm WSS đồng nghĩa
tăng BSS**, nên chỉ cần tối ưu một trong hai - và đó là điều K-Means làm
với WSS (còn gọi là WCSS hay SSE).
<br><span class="en">A good clustering is both **compact** (points close
to their own centroid) and **well separated** (centroids far apart).
Slide 16 shows these are really one goal, via the identity
`TSS = WSS + BSS`, in which **TSS is a constant** independent of the
partition. Consequence: **reducing WSS is the same as increasing BSS**,
so optimising either suffices - and that is what K-Means does with WSS
(also called WCSS or SSE).</span>

### Phương pháp khuỷu tay và giới hạn của nó - <span class="en">The elbow method and its limits</span>

`WCSS(K)` là tổng bình phương khoảng cách từ mỗi điểm tới tâm cụm của nó,
tính trên cả K cụm. Vì WCSS **luôn giảm** khi K tăng, ta không thể cực
tiểu hóa nó; thay vào đó tìm **khuỷu tay** - điểm mà sau đó thêm cụm không
mua thêm được bao nhiêu độ chặt. Ví dụ ở slide 21 có dãy WCSS 285, 149,
50 rồi chỉ còn 50, 39, 29: lợi ích cận biên **sụp hẳn sau `K = 3`**.
<br><span class="en">`WCSS(K)` is the summed squared distance from each
point to its centroid, over all K clusters. Because WCSS **always falls**
as K rises, it cannot be minimised; instead you look for the **elbow** -
the point after which extra clusters buy little extra compactness. Slide
21's example runs 285, 149, 50 and then only 50, 39, 29: the marginal
gain **collapses after `K = 3`**.</span>

Hai lưu ý quan trọng. Thứ nhất, khuỷu tay là một **heuristic thị giác**,
không phải một tiêu chí tối ưu - hai người có thể đọc ra hai khuỷu tay
khác nhau trên cùng một biểu đồ. Thứ hai, **một đường cong trơn tru nghĩa
là không có khuỷu tay, và rất có thể không có cấu trúc cụm thật** - đây là
thông tin hữu ích chứ không phải thất bại của phương pháp.
<br><span class="en">Two important caveats. First, the elbow is a
**visual heuristic**, not an optimality criterion - two people can read
two different elbows off the same plot. Second, **a smooth curve means
there is no elbow, and probably no real cluster structure** - which is
useful information, not a failure of the method.</span>

Một điểm dễ nhầm giữa hai đại lượng thường bị dùng lẫn: `inertia_` của
`scikit-learn` là tổng khoảng cách **bình phương** (WCSS), còn
"distortion" trong script đi kèm chương là **khoảng cách trung bình
không bình phương** tới tâm gần nhất. Hai đường cong có hình dạng tương
tự và thường cho cùng một khuỷu tay, nhưng **không cùng đơn vị** và không
so sánh trực tiếp được.
<br><span class="en">A common confusion between two quantities used
interchangeably: `scikit-learn`'s `inertia_` is the sum of **squared**
distances (WCSS), whereas the "distortion" in the chapter's shipped
script is the **mean unsquared distance** to the nearest centroid. The
two curves have similar shapes and usually give the same elbow, but they
are **not in the same units** and are not directly comparable.</span>

### Hệ số silhouette - <span class="en">The silhouette score</span>

Silhouette là công cụ mà slide 30 và bài tập slide 83 đều yêu cầu **cùng
với** khuỷu tay. Khác biệt cốt yếu so với WCSS: silhouette **có cực đại**,
nên nó cho một câu trả lời thật sự cho câu hỏi "K nào tốt nhất?" thay vì
một đường luôn giảm. Nó được định nghĩa cho từng điểm bằng cách so sánh
khoảng cách trung bình tới các điểm **trong cùng cụm** với khoảng cách
trung bình tới các điểm của **cụm gần nhất kế tiếp**, rồi lấy trung bình
trên toàn bộ dữ liệu. Lưu ý kỹ thuật thực hành ở slide 30: silhouette
**không định nghĩa được tại `K = 1`**, nên vòng lặp phải bắt đầu từ
`K = 2`, và khi tìm vị trí cực đại phải **cộng lại phần bù** đó (`+ 2`
trong mã của slide).
<br><span class="en">The silhouette is the tool slide 30 and the slide-83
assignment both require **alongside** the elbow. The essential difference
from WCSS: the silhouette **has a maximum**, so it gives a genuine answer
to "which K is best?" rather than a monotonically falling curve. It is
defined per point by comparing the mean distance to points **in the same
cluster** with the mean distance to points in the **nearest neighbouring
cluster**, then averaged over the data. A practical note from slide 30:
the silhouette is **undefined at `K = 1`**, so the loop must start at
`K = 2`, and the argmax must be **offset back** accordingly (`+ 2` in the
slide's code).</span>

### Thống kê khoảng trống và mô hình đối chứng - <span class="en">The gap statistic and the null model</span>

Điều thứ 4 trong danh sách kiểm tra ở slide 45 đặt câu hỏi mà cả khuỷu tay
lẫn silhouette đều không tự trả lời: **dữ liệu ngẫu nhiên có cho ra bức
tranh tương tự không?** K-Means phân hoạch nhiễu đều một cách vui vẻ, và
sẽ cho ra một giá trị WCSS cùng một hệ số silhouette hoàn toàn bình
thường. **Thống kê khoảng trống** kiểm định đúng điều này: nó so WCSS thu
được trên dữ liệu thật với WCSS **kỳ vọng** trên dữ liệu tham chiếu không
có cấu trúc, và chọn K ở chỗ khoảng cách giữa hai đường là lớn nhất. Về
mặt thực hành, đây là lý do một báo cáo phân cụm nên kèm **mức silhouette
của mô hình đối chứng** làm mốc so sánh, chứ không chỉ kèm silhouette của
kết quả.
<br><span class="en">Item 4 on slide 45's checklist asks what neither the
elbow nor the silhouette answers by itself: **would random data give the
same picture?** K-Means partitions uniform noise happily, and will return
a perfectly ordinary WCSS value and silhouette score. The **gap
statistic** tests exactly this: it compares the WCSS obtained on the real
data with the **expected** WCSS on structureless reference data, choosing
the K where the gap between the two curves is largest. Practically, this
is why a clustering report should include **the null model's silhouette
level** as a benchmark, not just the result's own silhouette.</span>

### Ba công cụ, ba vai trò - <span class="en">Three tools, three roles</span>

| Công cụ | Trả lời câu hỏi | Điểm yếu |
|---|---|---|
| Khuỷu tay (WCSS) | Thêm cụm còn mua được độ chặt không? | Luôn giảm; khuỷu tay là phán đoán thị giác |
| Silhouette | K nào cho cụm chặt và tách tốt nhất? | Vẫn giả định cụm lồi, gọn; vô nghĩa với hình dạng lạ |
| Thống kê khoảng trống | Cấu trúc này có hơn nhiễu không? | Tốn tính toán; cần chọn phân phối tham chiếu |

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 16 (`TSS = WSS + BSS`),
17 (biến động trong cụm), 20 (hai triết lý về K), 21 (khuỷu tay và cảnh
báo đường cong trơn), 30 (mã có silhouette và cách chọn `best_k`), 45
(điều 2 và điều 4 trong danh sách kiểm tra), 81 (bảng tổng kết: K chọn
bằng khuỷu tay, silhouette, thống kê khoảng trống).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 16
(`TSS = WSS + BSS`), 17 (within-cluster variation), 20 (the two
philosophies about K), 21 (the elbow and the smooth-curve warning), 30
(the code with a silhouette and the `best_k` selection), 45 (checklist
items 2 and 4), 81 (the summary table: K chosen by elbow, silhouette, gap
statistic).</span>

File `Example3.7_KMeans_Elbow.py` đi kèm chương dựng biểu đồ khuỷu tay
nhưng **không tính silhouette**, dù chính slide 30 và bài tập slide 83 đều
đòi cả hai.
<br><span class="en">The shipped `Example3.7_KMeans_Elbow.py` builds the
elbow curve but **computes no silhouette**, even though slide 30 and the
slide-83 assignment both ask for both.</span>

## Liên quan - <span class="en">Related</span>

- [[k-means-clustering-k32]] - thuật toán bắt phải cho K trước, nên cần
  các công cụ này.
  <br><span class="en">[[k-means-clustering-k32]] - the algorithm that
  demands K up front, hence the need for these tools.</span>
- [[hierarchical-clustering-k32]] - cách khác để quyết định K: cắt sơ đồ
  cây sau khi đã thấy cấu trúc.
  <br><span class="en">[[hierarchical-clustering-k32]] - the other way to
  decide K: cutting the dendrogram after seeing the structure.</span>
- [[clustering-pitfalls-checklist]] - nơi 3 công cụ này trở thành yêu cầu
  báo cáo.
  <br><span class="en">[[clustering-pitfalls-checklist]] - where these 3
  tools become reporting requirements.</span>
- [[choosing-number-of-components]] - bài toán song song ở phía PCA: chọn
  m thay vì chọn K.
  <br><span class="en">[[choosing-number-of-components]] - the parallel
  problem on the PCA side: choosing m instead of K.</span>
- [[dbscan-and-gaussian-mixture]] - GMM cho phép chọn K bằng BIC/AIC, tức
  một tiêu chí chọn mô hình thật sự.
  <br><span class="en">[[dbscan-and-gaussian-mixture]] - GMM allows
  choosing K by BIC/AIC, a genuine model-selection criterion.</span>
- [[train-test-split-and-cross-validation]] - kiểm định chéo, công cụ
  chọn siêu tham số đã học ở Chapter 3 và được dùng lại cho m ở Part 3.
  <br><span class="en">[[train-test-split-and-cross-validation]] -
  cross-validation, the hyperparameter tool from Chapter 3, reused for m
  in Part 3.</span>
