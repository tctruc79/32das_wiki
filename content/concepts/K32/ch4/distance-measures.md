---
type: concept
title: "Thước đo khoảng cách và vai trò của chuẩn hóa"
title_en: "Distance Measures and the Role of Standardisation"
tags: [chapter-4, k32, distance, standardization, clustering]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Thước đo khoảng cách (hay độ bất tương đồng) `d(xi, xj)` là hàm định
lượng **mức khác nhau giữa hai quan sát**, và là thành phần đầu tiên
trong bốn thứ cần có để phân cụm. Vì mọi thuật toán phân cụm trong chương
đều làm việc trên khoảng cách, **chọn khoảng cách là chọn luôn kết quả**:
đổi thước đo là đổi các cụm.
<br><span class="en">A distance (or dissimilarity) measure `d(xi, xj)` is
a function quantifying **how different two observations are**, and is the
first of the four requirements for clustering. Because every clustering
algorithm in the chapter works on a distance, **choosing the distance
chooses the result**: change the measure and you change the
clusters.</span>

## Diễn giải - <span class="en">Explanation</span>

### Ba khoảng cách trong họ Minkowski - <span class="en">Three distances in the Minkowski family</span>

**Khoảng cách Euclid** (chuẩn L2, đường thẳng) là căn bậc hai của tổng
bình phương hiệu từng biến. **Khoảng cách Manhattan** (chuẩn L1, đi theo
ô phố) là tổng trị tuyệt đối của hiệu từng biến. Cả hai là trường hợp
riêng của **khoảng cách Minkowski bậc q**, bằng căn bậc q của tổng các
`|xih - xjh|^q`: `q = 1` cho Manhattan, `q = 2` cho Euclid, và `q` tiến
tới vô cùng cho **Chebyshev** - khoảng hở lớn nhất theo một tọa độ duy
nhất.
<br><span class="en">**Euclidean distance** (L2, straight line) is the
square root of the summed squared per-variable differences. **Manhattan
distance** (L1, city block) is the sum of absolute differences. Both are
special cases of the **Minkowski distance of order q**, the q-th root of
the summed `|xih - xjh|^q`: `q = 1` gives Manhattan, `q = 2` Euclidean,
and `q` to infinity gives **Chebyshev** - the largest gap along a single
coordinate.</span>

### Bảng chọn theo loại dữ liệu - <span class="en">The data-type table</span>

| Loại dữ liệu | Lựa chọn thông dụng |
|---|---|
| Liên tục | Euclid |
| Nhiều điểm ngoại lai | Manhattan |
| Văn bản, tài liệu | Cosin |
| Nhị phân | Jaccard, Hamming |
| Trộn nhiều loại | Gower |
| Biến tương quan mạnh | Mahalanobis |

Lý do đằng sau vài dòng: Manhattan ít bị điểm ngoại lai chi phối hơn
Euclid vì nó không bình phương độ lệch; khoảng cách cosin đo **góc** giữa
hai véc-tơ chứ không đo độ dài, nên hai tài liệu cùng chủ đề nhưng khác
độ dài vẫn gần nhau; Gower xử lý được bảng vừa có biến số vừa có biến hạng
mục; và Mahalanobis chuẩn hóa theo ma trận hiệp phương sai nên không bị
tính trùng phần thông tin của các biến tương quan.
<br><span class="en">The reasoning behind a few rows: Manhattan is less
dominated by outliers than Euclidean because it does not square
deviations; cosine distance measures the **angle** between two vectors
rather than their length, so two documents on the same topic but of
different lengths stay close; Gower handles tables with both numeric and
categorical variables; and Mahalanobis normalises by the covariance
matrix so it does not double-count the shared information of correlated
variables.</span>

### Lỗi phổ biến nhất: quên chuẩn hóa - <span class="en">The most common mistake: forgetting to standardise</span>

Slide 15 dựng một ví dụ số rất sắc, đáng nhớ nguyên văn. Hai khách hàng
được mô tả bằng thu nhập tháng (triệu đồng) và số lần ghé cửa hàng: A có
(20, 2), B có (22, 14). Theo đơn vị gốc, khoảng cách Euclid là căn của
`2^2 + 12^2`, tức **12.17** - khác biệt về **số lần ghé** chi phối. Bây
giờ chỉ cần đổi đơn vị thu nhập sang đồng (20.000.000 so với 22.000.000):
khoảng cách nhảy lên xấp xỉ **2.000.000**, và **số lần ghé trở nên vô
hình**. Không có gì về hai khách hàng thay đổi - chỉ có đơn vị đo đổi.
<br><span class="en">Slide 15 builds a very sharp numerical example,
worth remembering verbatim. Two customers described by monthly income
(VND million) and number of visits: A is (20, 2), B is (22, 14). In the
original units the Euclidean distance is the root of `2^2 + 12^2`, i.e.
**12.17** - the difference in **visits** dominates. Now merely switch the
income unit to VND (20,000,000 versus 22,000,000): the distance jumps to
roughly **2,000,000**, and **visits become invisible**. Nothing about the
two customers changed - only the measurement unit did.</span>

Cách chữa là chuẩn hóa từng biến về trung bình 0, độ lệch chuẩn 1 qua
`x' = (x - trung bình) / độ lệch chuẩn`. Sau đó mỗi biến góp mặt trên
**cùng một thang đo**, nên kết quả phân cụm phản ánh **dạng hình của dữ
liệu** chứ không phản ánh **đơn vị đo**. Quy tắc in đậm của slide: mọi
phương pháp dựa trên khoảng cách - K-Means, phân cụm thứ bậc, KNN, SVM -
**bắt buộc** chuẩn hóa đầu vào, **trừ khi** mọi biến đã cùng một đơn vị có
nghĩa.
<br><span class="en">The fix is to standardise each variable to zero mean
and unit standard deviation via `x' = (x - mean) / sd`. Every variable
then contributes on **a common scale**, so the clustering reflects **the
pattern in the data** rather than **the measurement unit**. The slide's
rule in bold: every distance-based method - K-Means, hierarchical, KNN,
SVM - **requires** standardised inputs, **unless** all variables already
share a meaningful unit.</span>

### Nối sang phần đánh giá - <span class="en">The link to evaluation</span>

Khoảng cách không chỉ dùng để gán cụm mà còn dùng để **cho điểm** phương
án phân cụm: độ chặt trong cụm đo bằng tổng bình phương khoảng cách tới
tâm cụm, còn độ tách giữa các cụm đo bằng khoảng cách giữa các tâm. Vì cả
hai đại lượng đều tính từ cùng một `d`, một thước đo khoảng cách sai sẽ
làm sai **cả kết quả lẫn chỉ số đánh giá kết quả đó** - đây là lý do
khoảng cách phải được chọn trước và biện luận rõ.
<br><span class="en">Distance is used not only to assign clusters but
also to **score** a clustering: intra-cluster cohesion is measured by the
summed squared distance to the centroid, and inter-cluster separation by
the distance between centroids. Because both quantities come from the
same `d`, a wrong distance corrupts **both the result and the metric
judging that result** - which is why the distance must be chosen up front
and justified explicitly.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 14 (ba khoảng cách, họ
Minkowski, bảng chọn theo loại dữ liệu), 15 (ví dụ thu nhập và số lần
ghé, quy tắc bắt buộc chuẩn hóa), 16 (độ chặt và độ tách), 17 (biến động
trong cụm), 18-19 (ví dụ tính tay), 13 (khoảng cách là thành phần thứ
nhất trong 4 thứ phải có), 36 (liên kết là khoảng cách giữa hai cụm), 64
(lập luận chuẩn hóa tương tự cho PCA).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 14
(the three distances, the Minkowski family, the data-type table), 15 (the
income-and-visits example and the standardisation rule), 16 (cohesion and
separation), 17 (within-cluster variation), 18-19 (the hand-worked
example), 13 (distance as the first of the 4 requirements), 36 (linkage
as the distance between two clusters), 64 (the same standardisation
argument for PCA).</span>

## Liên quan - <span class="en">Related</span>

- [[clustering-k32]] - bối cảnh: khoảng cách là thành phần đầu tiên của
  phân cụm.
  <br><span class="en">[[clustering-k32]] - the context: distance is
  clustering's first component.</span>
- [[k-means-clustering-k32]] - dùng khoảng cách Euclid, và vì thế nhạy
  với thang đo.
  <br><span class="en">[[k-means-clustering-k32]] - uses Euclidean
  distance, and is therefore scale-sensitive.</span>
- [[hierarchical-clustering-k32]] - cần thêm một khái niệm khoảng cách
  giữa hai **cụm**, tức liên kết.
  <br><span class="en">[[hierarchical-clustering-k32]] - additionally
  needs a notion of distance between two **clusters**, i.e.
  linkage.</span>
- [[choosing-k-elbow-silhouette]] - WCSS và silhouette đều được tính từ
  cùng thước đo khoảng cách.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - both WCSS and
  the silhouette are computed from the same distance.</span>
- [[k-nearest-neighbors-k32]] - cùng bài toán thang đo trong học có giám
  sát, đã gặp ở Chapter 3.
  <br><span class="en">[[k-nearest-neighbors-k32]] - the same scaling
  problem on the supervised side, met in Chapter 3.</span>
- [[pca-k32]] - PCA cũng có một lập luận chuẩn hóa song song (hiệp phương
  sai so với tương quan).
  <br><span class="en">[[pca-k32]] - PCA has a parallel standardisation
  argument (covariance versus correlation).</span>
