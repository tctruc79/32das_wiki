---
type: concept
title: "Phân cụm"
title_en: "Clustering"
tags: [chapter-4, k32, clustering, unsupervised-learning]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Phân cụm là việc **tổ chức dữ liệu không nhãn thành các nhóm tương đồng
gọi là cụm**. Về hình thức: gán n quan sát vào K cụm `C1, ..., CK`, sao
cho các phần tử trong cùng một cụm giống nhau và khác biệt với phần tử ở
cụm khác. Một phân hoạch hợp lệ phải **loại trừ lẫn nhau** (`Ck` giao
`Ck'` là rỗng khi k khác k' - không quan sát nào thuộc hai cụm) và **đầy
đủ** (hợp của mọi `Ck` là toàn bộ tập chỉ số - mọi quan sát đều được
gán).
<br><span class="en">Clustering is **the organisation of unlabelled data
into similarity groups called clusters**. Formally: assign the n
observations into K clusters `C1, ..., CK` so that items in the same
cluster are similar to each other and dissimilar to items in other
clusters. A valid partition must be **mutually exclusive** (`Ck`
intersect `Ck'` is empty for k not equal k' - no observation belongs to
two clusters) and **exhaustive** (the union of all `Ck` is the whole
index set - every observation is assigned).</span>

## Diễn giải - <span class="en">Explanation</span>

### Khác phân loại ở đúng một điểm - <span class="en">One difference from classification</span>

Phân loại là **có giám sát**: các lớp **tồn tại trước khi phân tích**, và
việc của mô hình là học biên phân chia giữa chúng. Phân cụm là **không
giám sát**: các nhóm **chỉ tồn tại sau khi phân tích** - và chúng **có thể
chỉ là sản phẩm phụ của thuật toán**. Từ đó suy ra một loạt hệ quả: số cụm
K là lựa chọn của người phân tích chứ không do bài toán ấn định; nhãn cụm
không có ý nghĩa bên ngoài (đổi tên cụm 1 thành cụm 2 không thay đổi gì);
và không có độ chính xác nào để đo, nên phải dùng thước đo nội tại như
silhouette cộng với kiểm tra tính bền vững.
<br><span class="en">Classification is **supervised**: the classes
**exist before the analysis**, and the model's job is to learn the
boundary between them. Clustering is **unsupervised**: the groups **only
exist after it** - and they **may be an artefact**. A chain of
consequences follows: K is the analyst's choice rather than something the
problem fixes; cluster labels have no external meaning (swapping the
names of cluster 1 and cluster 2 changes nothing); and there is no
accuracy to measure, so you must use internal measures such as the
silhouette plus a stability check.</span>

### Bốn thứ phải có để phân cụm - <span class="en">The 4 requirements</span>

Slide 13 liệt kê đủ bốn thành phần, và chúng đáng học thuộc vì mỗi thành
phần là một quyết định riêng:
<br><span class="en">Slide 13 lists all four components, and they are
worth memorising because each is a separate decision:</span>

1. **Một thước đo gần gũi** - độ tương đồng `S(xi, xj)` lớn khi hai điểm
   giống nhau, hoặc độ bất tương đồng (khoảng cách) `d(xi, xj)` nhỏ khi
   hai điểm giống nhau.
   <br><span class="en">**A proximity measure** - similarity
   `S(xi, xj)`, large when two points are alike, or dissimilarity
   (distance) `d(xi, xj)`, small when they are alike.</span>
2. **Một hàm tiêu chí** để cho điểm một phương án phân cụm, ví dụ tổng
   bình phương trong cụm.
   <br><span class="en">**A criterion function** to score a candidate
   clustering, e.g. the within-cluster sum of squares.</span>
3. **Một thuật toán** để tìm phương án tốt theo tiêu chí đó.
   <br><span class="en">**An algorithm** to search for a good clustering
   under that criterion.</span>
4. **Một quy tắc quyết định K**.
   <br><span class="en">**A decision rule for K**.</span>

Ý chính kèm theo: **đổi khoảng cách là đổi luôn các cụm.** Thước đo gần
gũi là một **lựa chọn mô hình hóa**, không phải một chi tiết kỹ thuật -
nên nó phải được biện luận trong báo cáo giống như mọi lựa chọn mô hình
khác.
<br><span class="en">The attached key idea: **change the distance and you
change the clusters.** The proximity measure is a **modelling choice**,
not a technical detail - so it belongs in the report's justification like
any other modelling choice.</span>

### Ứng dụng - <span class="en">Applications</span>

Chương liệt kê 7 ứng dụng (slide 42) cộng 2 ứng dụng được trình bày sâu
(slide 32-33): **phân khúc khách hàng** theo RFM (độ mới, tần suất, giá
trị tiền) - ứng dụng thương mại phổ biến nhất; **phát hiện tin giả** bằng
cách phân cụm bài báo theo véc-tơ từ; **marketing và bán hàng**, tìm người
giống nhóm đã phản hồi chiến dịch trước; **phân tích tài liệu**, tổ chức
kho tài liệu thành chủ đề mà không cần hệ thống phân loại sẵn; **phát
hiện bất thường và gian lận**, xem lại các điểm xa mọi tâm cụm hoặc nằm
trong cụm rất nhỏ; **kinh tế vùng**, nhóm các tỉnh theo chỉ số kinh tế xã
hội; **xây dựng danh mục đầu tư**, phân cụm tài sản theo tương quan lợi
suất; **hậu cần**, phân cụm 618 địa điểm của một chuỗi cung ứng khách sạn
để định nghĩa vùng giao hàng, mỗi tâm cụm là một ứng viên đặt kho; và
**nông nghiệp**, phân vùng ảnh lá nho thành mô lành, vết bệnh và nền, rồi
đưa vùng vết bệnh cho một mô hình phân loại có giám sát.
<br><span class="en">The chapter lists 7 applications (slide 42) plus 2
presented in depth (slides 32-33): **customer segmentation** by RFM
(recency, frequency, monetary value) - the most common commercial use;
**fake news detection** by clustering articles on their word vectors;
**marketing and sales**, finding people similar to those who responded to
a past campaign; **document analysis**, organising collections into
topics without a taxonomy; **anomaly and fraud detection**, revisiting
points far from every centroid or inside very small clusters; **regional
economics**, grouping provinces by socio-economic indicators;
**portfolio construction**, clustering assets by return correlation;
**logistics**, clustering a hotel supply chain's 618 locations to define
delivery zones, each centroid a candidate depot; and **agriculture**,
segmenting a grape leaf image into healthy tissue, lesion and background,
then passing the lesion region to a supervised classifier.</span>

### Hai họ phương pháp - <span class="en">The two families</span>

Slide 20 chia theo cách xử lý K. Họ **ấn định K trước**: các phương pháp
phân hoạch gồm K-Means, K-Medoids, mô hình hỗn hợp Gauss - nhanh, mở rộng
tốt, nhưng phải biện luận K. Họ **không ấn định K**: phương pháp thứ bậc
dựng cả họ lồng nhau cho mọi K trong một lần chạy; phương pháp theo mật
độ như DBSCAN suy ra số cụm từ dữ liệu; và ta chọn K **sau khi** đã thấy
cấu trúc.
<br><span class="en">Slide 20 splits them by how they treat K. The
**fix K in advance** family: partitional methods - K-Means, K-Medoids,
Gaussian mixtures - fast and scalable, but K must be justified. The **do
not fix K** family: hierarchical methods build the whole nested family
for every K in one run; density methods such as DBSCAN infer the number
from the data; and you choose K **after** seeing the structure.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 11 (định nghĩa, 2 điều
kiện phân hoạch), 12 (khác biệt với phân loại), 13 (4 thứ phải có), 20
(hai họ phương pháp), 42-43 (ứng dụng), 32-33 (2 ứng dụng chi tiết), 81
(bảng tổng kết: phân cụm giảm số dòng).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 11
(the definition and the 2 partition conditions), 12 (the difference from
classification), 13 (the 4 requirements), 20 (the two families), 42-43
(applications), 32-33 (2 detailed applications), 81 (the summary table:
clustering reduces rows).</span>

## Liên quan - <span class="en">Related</span>

- [[distance-measures]] - thành phần thứ nhất trong 4 thứ phải có.
  <br><span class="en">[[distance-measures]] - the first of the 4
  requirements.</span>
- [[k-means-clustering-k32]] - thuật toán phân hoạch chính của chương.
  <br><span class="en">[[k-means-clustering-k32]] - the chapter's main
  partitional algorithm.</span>
- [[hierarchical-clustering-k32]] - họ không cần ấn định K trước.
  <br><span class="en">[[hierarchical-clustering-k32]] - the family that
  does not need K in advance.</span>
- [[choosing-k-elbow-silhouette]] - thành phần thứ tư: quy tắc quyết định
  K.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - the fourth
  requirement: the decision rule for K.</span>
- [[dbscan-and-gaussian-mixture]] - hai phương pháp ngoài hai phương pháp
  chính.
  <br><span class="en">[[dbscan-and-gaussian-mixture]] - two methods
  beyond the main two.</span>
- [[clustering-pitfalls-checklist]] - những gì phải kiểm tra trước khi
  tin vào các cụm.
  <br><span class="en">[[clustering-pitfalls-checklist]] - what to check
  before believing the clusters.</span>
- [[classification-k32]] - bài toán đối chiếu; slide 12 và 82 câu 1 đều
  yêu cầu so sánh hai bài toán này.
  <br><span class="en">[[classification-k32]] - the contrasting problem;
  both slide 12 and slide 82's question 1 ask for this
  comparison.</span>
