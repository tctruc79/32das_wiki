---
type: source
title: "Chapter 6 (K31) — Phân cụm trong Học không giám sát"
title_en: "Chapter 6 (K31) — Clustering in Unsupervised Learning"
tags: [chapter-6, k31, machine-learning, unsupervised-learning, clustering]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter06_Clustering.pdf"
---

## Metadata

- **Khóa**: K31 (2025). **Giảng viên**: [[tran-thi-tuan-anh]]. **Số
  slide**: 27.
  <br><span class="en">**Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 27.</span>
- **Vị trí trong môn**: chương **học không giám sát** đầu tiên — chuyển
  hẳn sang nhánh không có nhãn, sau 4 chương học có giám sát (Chapter
  3-5).
  <br><span class="en">**Position in the course**: the first
  **unsupervised learning** chapter — a full shift to the unlabeled
  branch, after 4 chapters of supervised learning (Chapters 3-5).</span>

## Tóm tắt - <span class="en">Summary</span>

- 4 phần: định nghĩa phân cụm, các thước đo khoảng cách/đánh giá cụm,
  thuật toán K-Means, thuật toán phân cụm phân cấp (Hierarchical
  Clustering).
  <br><span class="en">4 parts: clustering definition, distance/cluster
  evaluation measures, K-Means algorithm, Hierarchical Clustering
  algorithm.</span>
- Slide về phương pháp liên kết (linkage methods, slide 23) chỉ có hình,
  không trích xuất được text chi tiết.
  <br><span class="en">The linkage methods slide (slide 23) has only an
  image, no detailed text extractable.</span>

## Nội dung chính - <span class="en">Key content</span>

### 6.1 Phân cụm là gì (slide 3-5) - <span class="en">6.1 What is clustering (slides 3-5)</span>

- **Định nghĩa** (slide 3): tổ chức dữ liệu không nhãn thành các nhóm
  tương đồng gọi là cụm (cluster). Nói cách khác, cần gán n quan sát vào
  K cụm. 1 cụm là tập hợp các mục dữ liệu "tương tự" nhau, và "khác biệt"
  với các mục dữ liệu ở cụm khác. **Yêu cầu**: **Loại trừ lẫn nhau
  (Mutually exclusive)** — mỗi quan sát không được thuộc nhiều hơn 1 cụm;
  **Đầy đủ (Exhaustive)** — tất cả các cụm gộp lại phải phủ hết mọi quan
  sát.
  <br><span class="en">**Definition** (slide 3): the organization of
  unlabeled data into similarity groups called clusters. In other words,
  we need to assign n observations into K clusters. A cluster is a
  collection of data items "similar" to each other and "dissimilar" to
  items in other clusters. **Requirements**: **Mutually exclusive** —
  each observation cannot belong to more than one cluster; **Exhaustive**
  — all clusters together cover all observations.</span>
- **Classification vs Clustering** (slide 4): slide chỉ có hình so sánh,
  không có văn bản trích xuất được — nhưng khác biệt cốt lõi (đã ngụ ý
  xuyên suốt chương) là Classification cần nhãn (học có giám sát), còn
  Clustering không cần nhãn (học không giám sát).
  <br><span class="en">**Classification vs Clustering** (slide 4): the
  slide has only a comparison image, no extractable text — but the core
  difference (implied throughout the chapter) is Classification needs
  labels (supervised), while Clustering doesn't (unsupervised).</span>
- **Cần gì để phân cụm** (slide 5): **thước đo mức độ gần (proximity
  measure)** — thước đo tương đồng S(xᵢ,xⱼ) lớn nếu xᵢ,xⱼ tương tự nhau;
  thước đo khác biệt/khoảng cách D(xᵢ,xⱼ) nhỏ nếu xᵢ,xⱼ tương tự nhau;
  **hàm tiêu chí (criterion function)** để đánh giá 1 cách phân cụm;
  **thuật toán** để thực hiện phân cụm.
  <br><span class="en">**What clustering needs** (slide 5): **proximity
  measure** — similarity S(xᵢ,xⱼ) large if similar; dissimilarity/
  distance D(xᵢ,xⱼ) small if similar; **criterion function** to evaluate
  a clustering; **algorithm** to carry out clustering.</span>

### 6.2 Thước đo khoảng cách (slide 6-12) - <span class="en">6.2 Distance (dissimilarity) measures (slides 6-12)</span>

- **3 thước đo khoảng cách** (slide 6): **Khoảng cách Euclid** —
  d(xᵢ,xⱼ) = căn bậc hai của Σ(xᵢₕ−xⱼₕ)²; **Khoảng cách Manhattan** —
  d(xᵢ,xⱼ) = Σ|xᵢₕ−xⱼₕ|; cả hai là trường hợp đặc biệt của **khoảng cách
  Minkowski** — d(xᵢ,xⱼ) = (Σ|xᵢₕ−xⱼₕ|ᵖ)^(1/p), với p là số nguyên dương.
  <br><span class="en">**3 distance measures** (slide 6): **Euclidean
  distance** — d(xᵢ,xⱼ) = √Σ(xᵢₕ−xⱼₕ)²; **Manhattan distance** —
  d(xᵢ,xⱼ) = Σ|xᵢₕ−xⱼₕ|; both are special cases of the **Minkowski
  distance** — d(xᵢ,xⱼ) = (Σ|xᵢₕ−xⱼₕ|ᵖ)^(1/p), p a positive
  integer.</span>
- **Đánh giá cụm** (slide 7): **Độ gắn kết trong cụm (Intra-cluster
  cohesion/compactness)** — đo mức độ gần của các điểm dữ liệu trong 1
  cụm tới tâm cụm (centroid); tổng bình phương sai số (SSE) là thước đo
  thường dùng. **Độ tách biệt giữa các cụm (Inter-cluster separation/
  isolation)** — nghĩa là tâm các cụm khác nhau nên ở xa nhau.
  <br><span class="en">**Cluster evaluation** (slide 7): **Intra-cluster
  cohesion (compactness)** — measures how near data points in a cluster
  are to the centroid; SSE is a commonly used measure. **Inter-cluster
  separation (isolation)** — different cluster centroids should be far
  apart.</span>
- **Biến thiên trong cụm W(.)** (slide 8): dựa trên khoảng cách giữa các
  cặp quan sát. Với khoảng cách Euclid dᵢⱼ giữa xᵢ và xⱼ trong 1 cụm,
  W(Cₖ) của cụm Cₖ là bình phương khoảng cách trung bình giữa mỗi cặp
  quan sát trong cụm: W(Cₖ) = (1/|Cₖ|)ΣΣ(xᵢₖ−xⱼₖ)².
  <br><span class="en">**Within-cluster variation W(.)** (slide 8): based
  on distances between observation pairs. With Euclidean distance dᵢⱼ
  between xᵢ and xⱼ in a cluster, W(Cₖ) is the squared average distance
  between each pair of observations: W(Cₖ) = (1/|Cₖ|)ΣΣ(xᵢₖ−xⱼₖ)².</span>
- **Xác định số cụm** (slide 11): 2 hướng tiếp cận — cố định số cụm là K;
  hoặc tìm cách phân cụm tốt nhất theo hàm tiêu chí (không cố định số
  cụm).
  <br><span class="en">**Defining the number of clusters** (slide 11): 2
  approaches — fix the number of clusters to K; or find the best
  clustering per the criterion function (don't fix the count).</span>

### 6.3 Phân cụm K-Means (slide 13-20) - <span class="en">6.3 K-Means clustering (slides 13-20)</span>

- **Thuật toán lặp** (slide 13): **Khởi tạo** — chọn ngẫu nhiên K điểm
  làm tâm cụm; **Lặp** — tính khoảng cách từ mỗi điểm dữ liệu tới K tâm
  cụm, gán điểm dữ liệu vào tâm cụm gần nhất, đổi tâm cụm thành trung
  bình của các điểm đã gán vào nó; **Dừng** khi không còn điểm nào đổi
  gán.
  <br><span class="en">**An iterative algorithm** (slide 13):
  **Initialize** — pick K random points as cluster centers; **Iterate**
  — compute distance from each point to K centroids, assign points to
  the closest center, change each center to the average of its assigned
  points; **Stop** when no points' assignments change.</span>
- **Code Python** (slide 17): `import matplotlib.pyplot as plt; from
  sklearn.datasets import make_blobs; from sklearn.cluster import
  KMeans; km = KMeans(n_clusters=2, init='random', n_init=10,
  max_iter=300, tol=1e-04, random_state=0)`.
  <br><span class="en">**Python code** (slide 17): `import
  matplotlib.pyplot as plt; from sklearn.datasets import make_blobs;
  from sklearn.cluster import KMeans; km = KMeans(n_clusters=2,
  init='random', n_init=10, max_iter=300, tol=1e-04,
  random_state=0)`.</span>
- **Ứng dụng thực tế** (slide 19-20): chuỗi cung ứng khách sạn (618 địa
  điểm khách sạn, 5-30 nhà cung cấp dịch vụ) — thuật toán dùng dữ liệu
  thời gian thực để tìm mạng lưới vận chuyển tối ưu với chi phí thực thấp
  nhất; chẩn đoán và nhận diện bệnh trên lá nho.
  <br><span class="en">**Real-world applications** (slides 19-20): a
  hotel supply chain (618 hotel locations, 5-30 service suppliers) — the
  algorithm uses real-time data to find the optimum transportation
  network with lowest real cost; diagnosis and recognition of grape leaf
  diseases.</span>

### 6.4 Phân cụm phân cấp (slide 21-25) - <span class="en">6.4 Hierarchical Clustering (slides 21-25)</span>

- **Vì sao cần** (slide 21): K-Means cần biết trước số cụm khi bắt đầu
  thuật toán. Kết quả K-Means phụ thuộc vào tâm cụm khởi tạo, vốn là ngẫu
  nhiên. Nhưng trong nhiều tình huống, không rõ cần bao nhiêu cụm →
  Hierarchical clustering phù hợp hơn. Kết quả có thể hiển thị bằng
  **dendrogram (biểu đồ cây phân cấp)** — dùng để xác định nên lấy bao
  nhiêu cụm.
  <br><span class="en">**Why needed** (slide 21): K-Means requires the
  number of clusters at the start. K-Means' results depend on the
  initial (random) centroids. But in many situations it's unclear how
  many clusters are needed → Hierarchical clustering is more suitable.
  Results can be shown via a **dendrogram** — used to decide how many
  clusters to take.</span>
- **Thuật toán** (slide 22): bắt đầu bằng cách coi mỗi quan sát là 1 cụm
  riêng. Lặp lại 2 bước: (1) xác định 2 cụm gần nhau nhất, (2) hợp nhất 2
  cụm giống nhau nhất. Quá trình lặp tiếp tục đến khi mọi cụm được hợp
  nhất lại với nhau.
  <br><span class="en">**Algorithm** (slide 22): starts by treating each
  observation as a separate cluster. Repeat 2 steps: (1) identify the 2
  closest clusters, (2) merge the 2 most similar clusters. This
  continues until all clusters are merged together.</span>
- **Phương pháp liên kết (Linkage methods)** (slide 23): chỉ có hình,
  không trích xuất được nội dung chi tiết — cần xem trực tiếp slide gốc
  nếu cần phân biệt single/complete/average linkage.
  <br><span class="en">**Linkage methods** (slide 23): only an image, no
  detailed content extractable — need to view the original slide for
  single/complete/average linkage distinctions.</span>
- **Dendrogram** (slide 24): các quan sát được gán vào cụm bằng cách kẻ 1
  đường ngang qua dendrogram.
  <br><span class="en">**Dendrogram** (slide 24): observations are
  allocated to clusters by drawing a horizontal line through the
  dendrogram.</span>
- **Ứng dụng khác của phân cụm** (slide 25): nhận diện tin giả dựa trên
  nội dung (phân cụm từ trong bài báo để xác định phần nào thật/giả);
  tiếp thị và bán hàng (dựa trên đặc điểm cụ thể của 1 người, chia sẻ
  chiến dịch đã thành công với người tương tự); phân tích tài liệu (phân
  cụm và tổ chức các tài liệu tương tự).
  <br><span class="en">**Other clustering applications** (slide 25):
  identifying fake news based on content (clustering words to determine
  genuine vs fake pieces); marketing and sales (based on a person's
  specific characteristics, share campaigns successful with similar
  people); document analysis (cluster and organize similar
  documents).</span>
- **Thảo luận nhóm** (slide 26): liệt kê điểm giống/khác giữa Clustering
  và Classification; ứng dụng của Hierarchical Clustering vs K-Means; có
  phương pháp phân cụm nào khác ngoài K-Means và Hierarchical không?
  <br><span class="en">**Group discussion** (slide 26): list similarities/
  differences between Clustering and Classification; applications of
  Hierarchical Clustering vs K-Means; are there other clustering methods
  besides K-Means and Hierarchical?</span>

## Liên kết - <span class="en">Links</span>

- [[clustering]] — trang khái niệm tổng quan: định nghĩa, thước đo
  khoảng cách, đánh giá cụm.
  <br><span class="en">[[clustering]] — the overview concept page:
  definition, distance measures, cluster evaluation.</span>
- [[k-means-clustering]] — thuật toán K-Means.
  <br><span class="en">[[k-means-clustering]] — the K-Means
  algorithm.</span>
- [[hierarchical-clustering]] — thuật toán phân cấp + dendrogram.
  <br><span class="en">[[hierarchical-clustering]] — the hierarchical
  algorithm + dendrogram.</span>
- [[machine-learning-overview]] — Clustering là nhánh đầu tiên của học
  không giám sát được giảng chi tiết trong môn.
  <br><span class="en">[[machine-learning-overview]] — Clustering is the
  first unsupervised branch taught in detail in the course.</span>
- [[classification]] — điểm đối chiếu supervised vs unsupervised, được
  chính slide này đặt câu hỏi so sánh trực tiếp.
  <br><span class="en">[[classification]] — the supervised vs
  unsupervised contrast point, directly posed as a comparison question in
  this slide.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter06_Clustering.pdf`, slide
1-27.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter06_Clustering.pdf`, slides 1-27.</span>
