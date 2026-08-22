---
type: source
title: "Chapter 7 (K31) — Phân tích Thành phần Chính (PCA)"
title_en: "Chapter 7 (K31) — Principal Component Analysis (PCA)"
tags: [chapter-7, k31, machine-learning, unsupervised-learning, dimension-reduction, pca]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter07_PCA.pdf"
---

## Metadata

- **Khóa**: K31 (2025). **Giảng viên**: [[tran-thi-tuan-anh]]. **Số
  slide**: 33.
  <br><span class="en">**Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 33.</span>
- **Vị trí trong môn**: nhánh **giảm chiều (dimension reduction)** của
  học không giám sát (sau [[chapter06-clustering]]) — chương lý thuyết
  nặng nhất về toán (hiệp phương sai, trị riêng/véc-tơ riêng).
  <br><span class="en">**Position in the course**: the **dimension
  reduction** branch of unsupervised learning (after
  [[chapter06-clustering]]) — the most math-heavy chapter (covariance,
  eigenvalue/eigenvector).</span>

## Tóm tắt - <span class="en">Summary</span>

- 4 phần: (1) PCA là gì, (2) cách chọn thành phần chính (hiệp phương sai,
  trị riêng/véc-tơ riêng), (3) quy trình 5 bước + các ví dụ ứng dụng
  (nhận diện khuôn mặt, khử nhiễu, nén ảnh), (4) kết hợp PCA với các
  thuật toán khác (Clustering/Classification/Regression) — phần này có
  mật độ liên hệ chéo cao nhất trong toàn môn, tự tổng hợp lại hầu hết
  các thuật toán đã học trước đó.
  <br><span class="en">4 parts: (1) what is PCA, (2) how to choose
  principal components (covariance, eigenvalue/eigenvector), (3) the
  5-step procedure + application examples (face recognition, de-noising,
  image compression), (4) combining PCA with other algorithms
  (Clustering/Classification/Regression) — the highest density of
  cross-references in the whole course, synthesizing back into most
  algorithms taught before it.</span>

## Nội dung chính - <span class="en">Key content</span>

### 7.1 PCA là gì (slide 3-10) - <span class="en">7.1 What is PCA (slides 3-10)</span>

- **Định nghĩa** (slide 3): phát minh bởi Pearson (1901) và Hotelling
  (1933). Có lẽ là phương pháp đa biến "chuẩn" được dùng rộng rãi và nổi
  tiếng nhất. Tóm tắt dữ liệu có p biến (p thường lớn) bằng 1 tập nhỏ hơn
  k biến tổng hợp. p biến được coi là p chiều (dimension). k biến tổng
  hợp được coi là k **thành phần chính (principal components — PCs)**.
  Mục tiêu của PCA là giảm số chiều mà không mất nhiều thông tin — bằng
  cách xây dựng các PC để nắm bắt càng nhiều biến thiên trong dữ liệu
  càng tốt.
  <br><span class="en">**Definition** (slide 3): invented by Pearson
  (1901) and Hotelling (1933). Probably the most widely-used and
  well-known of the "standard" multivariate methods. Summarizes data with
  p variables (often large) by a smaller set of k composite variables. p
  variables = p dimensions; k composite variables = k **principal
  components (PCs)**. PCA's goal is to reduce dimensions without much
  loss of information — by developing PCs to capture as much variation as
  possible.</span>
- **PCA dùng để làm gì** (slide 4): giảm số chiều trong dữ liệu; tìm mẫu
  hình trong dữ liệu nhiều chiều; trực quan hóa dữ liệu nhiều chiều.
  <br><span class="en">**What PCA can be used for** (slide 4): reduce the
  number of dimensions; find patterns in high-dimensional data; visualize
  high-dimensional data.</span>
- **Ý tưởng qua ví dụ đơn giản** (slide 5-10): 100 sinh viên với điểm
  Physics và Statistics — câu hỏi đặt ra là điểm nào phân biệt sinh viên
  tốt hơn. Khi dữ liệu trải theo 1 đường chéo (hướng biến thiên lớn nhất
  là đường xiên), nên lấy tổ hợp tuyến tính của 2 điểm số để có kết quả
  tốt nhất. Tổ hợp tuyến tính này chính là 1 ví dụ của "thành phần
  chính" — có thể xoay hệ tọa độ để chọn trục tọa độ mới cho dữ liệu; trục
  ngang mới trùng với đường xiên đó. Các thành phần chính là các véc-tơ
  đơn vị dọc theo trục mới: **thành phần chính thứ nhất** cho hướng trải
  rộng lớn nhất của dữ liệu; **thành phần chính thứ hai** cho hướng trải
  rộng lớn nhất vuông góc với hướng thứ nhất.
  <br><span class="en">**The idea via a simple example** (slides 5-10):
  100 students with Physics and Statistics grades — which grade better
  discriminates among students? When data spreads along a slanted line
  (the direction of maximum variation), take a linear combination of the
  2 grades for the best result. This linear combination is an example of
  a "principal component" — the coordinate system can be rotated to a
  new one for the data; the new horizontal axis coincides with that
  slanted line. Principal components are unit vectors along the new
  axes: **the 1st PC** gives the direction of maximum spread; **the 2nd
  PC** gives the direction of maximum spread perpendicular to the
  1st.</span>

### 7.2 Cách chọn thành phần chính (slide 11-16) - <span class="en">7.2 How to choose the principal component (slides 11-16)</span>

- **Hiệp phương sai (Covariance)** (slide 11): phụ thuộc vào hiệp phương
  sai (hoặc tương quan) giữa 2 biến gốc. cov(X,Y) = Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/(n−1).
  cov(X,Y) = 0 → không tương quan; cov(X,Y) > 0 → X,Y cùng chiều biến
  động; cov(X,Y) < 0 → X,Y ngược chiều biến động.
  <br><span class="en">**Covariance** (slide 11): depends on the
  covariance (or correlation) between 2 original variables. cov(X,Y) =
  Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/(n−1). cov(X,Y) = 0 → no correlation; cov(X,Y) > 0 →
  X,Y move together; cov(X,Y) < 0 → X,Y move opposite.</span>
- **Trường hợp tổng quát nhiều chiều** (slide 13-14): mục tiêu của PCA là
  xoay các trục của không gian p chiều tới vị trí mới (trục chính) có
  tính chất: trục chính 1 có phương sai cao nhất; trục chính 2 có phương
  sai cao thứ nhì; ... trục p có phương sai thấp nhất; hiệp phương sai
  giữa mỗi cặp trục chính bằng 0 (các trục chính không tương quan). Lấy k
  thành phần chính đầu tiên sẽ xác định "siêu phẳng" (hyperplane) k chiều
  khớp tốt nhất với dữ liệu. Với p > 2 thuộc tính, dùng **ma trận hiệp
  phương sai** C thay vì 1 giá trị cov đơn — ví dụ ma trận 3×3 cho 3
  thuộc tính (x,y,z). Trong đại số tuyến tính, **trị riêng và véc-tơ
  riêng** của ma trận hiệp phương sai giúp tìm ra các thành phần chính.
  <br><span class="en">**General high-dimensional case** (slides 13-14):
  PCA's objective is to rotate the axes of the p-dimensional space to new
  positions (principal axes) with: axis 1 has the highest variance; axis
  2 the next highest; ...; axis p the lowest; covariance among each pair
  of principal axes is zero (uncorrelated). Taking the first k PCs
  defines the k-dimensional "hyperplane" of best fit. For p > 2
  attributes, use the **covariance matrix** C instead of a single cov
  value — e.g. a 3×3 matrix for 3 attributes (x,y,z). In linear algebra,
  the **eigenvalues and eigenvectors** of the covariance matrix help find
  the principal components.</span>
- **Trị riêng & véc-tơ riêng** (slide 15-16): với ma trận hiệp phương sai
  A — nghiệm của phương trình det(A−λI) = 0 gọi là trị riêng của A; giải
  (A−λI)x = 0 cho mỗi λ để có véc-tơ riêng x. Tổng các phần tử trên
  đường chéo của ma trận hiệp phương sai gọi là **trace**, đại diện cho
  tổng phương sai của dữ liệu. Các trị riêng λ₁,λ₂,...,λₚ là phương sai
  của tọa độ trên mỗi trục thành phần chính; tổng p trị riêng bằng trace
  của ma trận hiệp phương sai. Mỗi véc-tơ riêng gồm p giá trị thể hiện
  "đóng góp" của mỗi biến vào trục thành phần chính đó; trị riêng thể
  hiện phương sai được giải thích bởi trục thứ k; tổng k trị riêng đầu
  tiên là phương sai được giải thích bởi không gian k chiều. **Cần bao
  nhiêu thành phần chính?**: quy tắc kinh nghiệm phổ biến khi PCA dựa
  trên tương quan — trục có trị riêng > 1 mới đáng diễn giải.
  <br><span class="en">**Eigenvalues & eigenvectors** (slides 15-16):
  given covariance matrix A — solutions of det(A−λI) = 0 are the
  eigenvalues; solve (A−λI)x = 0 for each λ to get eigenvector x. The sum
  of the covariance matrix's diagonal is the **trace**, representing
  total variance. Eigenvalues λ₁,...,λₚ are the variances along each
  principal axis; the sum of all p eigenvalues equals the trace. Each
  eigenvector has p values showing each variable's "contribution" to that
  axis; the eigenvalue is the variance explained by the kth axis; the sum
  of the first k eigenvalues is the variance explained by the
  k-dimensional ordination. **How many PCs are needed?**: a common rule
  of thumb when PCA is based on correlations — axes with eigenvalue > 1
  are worth interpreting.</span>

### 7.3 Các bước thực hiện PCA (slide 17-27) - <span class="en">7.3 Steps to conduct PCA (slides 17-27)</span>

- **Quy trình 5 bước** (slide 17): (1) lấy dữ liệu, (2) trừ trung bình
  hoặc chuẩn hóa (standardize) dữ liệu, (3) tính ma trận hiệp phương sai,
  (4) tính trị riêng và véc-tơ riêng của ma trận hiệp phương sai, (5)
  chọn thành phần từ các trị riêng và véc-tơ riêng.
  <br><span class="en">**5-step procedure** (slide 17): (1) get data, (2)
  subtract the mean or standardize the data, (3) calculate the covariance
  matrix, (4) calculate eigenvectors and eigenvalues, (5) choose
  components from the eigenvalues and eigenvectors.</span>
- **Ghi chú về chuẩn hóa** (slide 18): dùng hiệp phương sai giữa các biến
  chỉ có ý nghĩa nếu chúng được đo cùng đơn vị; ngay cả khi vậy, biến có
  phương sai lớn sẽ lấn át các thành phần chính. Vấn đề này thường được
  tránh bằng cách chuẩn hóa mỗi biến về phương sai đơn vị và trung bình
  0: X'ᵢₘ = (Xᵢₘ − X̄ᵢ)/SDᵢ. Hiệp phương sai giữa các biến đã chuẩn hóa
  chính là hệ số tương quan. Sau chuẩn hóa, mỗi biến có phương sai bằng
  1.
  <br><span class="en">**Note on standardization** (slide 18): using
  covariances only makes sense if variables are measured in the same
  units; even then, high-variance variables dominate the PCs. This is
  generally avoided by standardizing each variable to unit variance and
  zero mean: X'ᵢₘ = (Xᵢₘ − X̄ᵢ)/SDᵢ. Covariances between standardized
  variables are correlations. After standardization, each variable has
  variance 1.</span>
- **Ví dụ: Nhận diện khuôn mặt** (slide 21-22): 1 trong những ứng dụng
  điển hình của PCA, chủ yếu để giảm số biến. Xét trường hợp 2D — có 1
  ảnh đầu vào, muốn so sánh với 1 tập ảnh trong cơ sở dữ liệu để tìm khớp
  tốt nhất. Giả sử các ảnh cùng độ phân giải và cùng khung hình. Mỗi
  pixel được coi là 1 biến → bài toán rất nhiều chiều, PCA giúp đơn giản
  hóa. Các pixel nền liền kề tương quan gần như hoàn toàn. PCA cũng tốt
  khi: ít mẫu nhưng nhiều biến; ảnh có tỷ lệ khác nhau.
  <br><span class="en">**Example: Face Recognition** (slides 21-22): one
  of PCA's classic applications, mainly for reducing the number of
  variables. Consider the 2D case — an input image compared against a
  database to find the best match. Assume same resolution, same framing.
  Each pixel is a variable → a very high-dimensional problem PCA
  simplifies. Adjacent background pixels are nearly perfectly correlated.
  PCA is also good when: few samples but many variables; images at
  different scales.</span>
- **Ví dụ khác** (slide 23-27): áp dụng PCA cho chữ số viết tay (digits);
  khử nhiễu ảnh (giữ lại thành phần chính quan trọng nhất, bỏ thành phần
  ít quan trọng); nén ảnh — chuyển ảnh 2D thành ma trận (mỗi hàng 1
  pixel, mỗi cột 1 kênh màu), chuẩn hóa dữ liệu gốc, xác định các "thành
  phần chính" có phương sai lớn nhất, bỏ thông tin ít quan trọng nhất để
  giảm kích thước dữ liệu, tái tạo lại ảnh từ biểu diễn đã nén. Ví dụ
  3.8: code Python cho PCA.
  <br><span class="en">**Other examples** (slides 23-27): applying PCA to
  handwritten digits; de-noising images (keeping the most important PCs,
  discarding less significant ones); image compression — convert the 2D
  image to a matrix (each row a pixel, each column a color channel),
  standardize, identify the highest-variance PCs, omit the least
  important information to shrink data size, reconstruct the image from
  the compressed representation. Example 3.8: PCA Python code.</span>

### 7.4 Kết hợp PCA với các thuật toán khác (slide 28-31) - <span class="en">7.4 Combine PCA with other algorithms (slides 28-31)</span>

- **Vì sao kết hợp** (slide 28): dữ liệu nhiều chiều gây ra: đa cộng
  tuyến (multicollinearity), nhiễu và dư thừa, chi phí tính toán cao. PCA
  đóng vai trò bước tiền xử lý: loại bỏ tương quan, giữ lại phương sai
  nhiều thông tin nhất, tăng tốc thuật toán.
  <br><span class="en">**Why combine** (slide 28): high-dimensional data
  causes: multicollinearity, noise and redundancy, high computational
  cost. PCA acts as a preprocessing step: removes correlations, keeps the
  most informative variance, speeds up algorithms.</span>
- **PCA + Phân cụm (Clustering)** (slide 29): ý tưởng — giảm dữ liệu về
  2-10 thành phần chính rồi mới phân cụm. K-Means: PCA giúp cụm gọn hơn.
  Hierarchical Clustering: hoạt động tốt hơn trên không gian đã giảm
  chiều. DBSCAN/GMM: PCA giúp ổn định ước lượng mật độ. Ứng dụng: phân
  khúc khách hàng; nhóm tài liệu/hình ảnh.
  <br><span class="en">**PCA + Clustering** (slide 29): idea — reduce
  data to 2-10 PCs, then cluster. K-Means: PCA makes clusters more
  compact. Hierarchical Clustering: works better on reduced spaces.
  DBSCAN/GMM: PCA stabilizes density estimation. Applications: customer
  segmentation; grouping documents or images.</span>
- **PCA + Phân loại (Classification)** (slide 30): mục tiêu — cải thiện
  học có giám sát bằng cách giảm nhiễu và đa cộng tuyến. Logistic
  Regression: PCA tránh được vấn đề đa cộng tuyến. SVM và KNN: bộ phân
  loại dựa trên khoảng cách hưởng lợi từ PCA khi dữ liệu nhiều chiều.
  Naive Bayes: PCA giúp các đặc trưng độc lập hơn. Ví dụ: phân loại chữ
  số viết tay (MNIST) thường dùng PCA trước SVM.
  <br><span class="en">**PCA + Classification** (slide 30): goal —
  improve supervised learning by reducing noise and collinearity.
  Logistic Regression: PCA avoids multicollinearity issues. SVM and KNN:
  distance-based classifiers benefit from PCA in high dimensions. Naive
  Bayes: PCA can make features more independent. Example: handwritten
  digit classification (MNIST) often uses PCA before SVM.</span>
- **PCA + Hồi quy — Hồi quy thành phần chính (PCR)** (slide 31): Bước 1 —
  áp dụng PCA cho các biến dự báo X. Bước 2 — hồi quy y theo các thành
  phần chính đã chọn: y ≈ Zγ, với Z = XVₘ. Hữu ích khi các biến dự báo
  tương quan cao. Rủi ro: các thành phần chính bị loại bỏ vẫn có thể
  chứa thông tin dự báo có giá trị.
  <br><span class="en">**PCA + Regression — Principal Component
  Regression (PCR)** (slide 31): Step 1 — apply PCA to predictors X. Step
  2 — regress y on the selected PCs: y ≈ Zγ, Z = XVₘ. Helps when
  predictors are highly correlated. Risk: discarded PCs may still contain
  predictive information.</span>
- **Bài tập** (slide 32): tái hiện 1 trong các mini project áp dụng PCA
  (dữ liệu từ Kaggle) — dự đoán chất lượng rượu vang với PCA & LDA; phân
  khúc khách hàng (K-Means & PCA); giảm đặc trưng bằng PCA; hồi quy thành
  phần chính; phân tích tính cách khách hàng (PCA & Clustering); hoặc bất
  kỳ tập dữ liệu Kaggle nào khác áp dụng được PCA.
  <br><span class="en">**Assignment** (slide 32): replicate a Kaggle
  mini-project applying PCA — Wine Quality Prediction with PCA & LDA;
  Customer Segmentation (K-Means & PCA); Reducing Features with PCA;
  Principal Component Regression; Customer Personality Analysis (PCA &
  Clustering); or any other Kaggle dataset applying PCA.</span>

## Liên kết - <span class="en">Links</span>

- [[pca]] — trang khái niệm chính: định nghĩa, hiệp phương sai, trị
  riêng/véc-tơ riêng, quy trình.
  <br><span class="en">[[pca]] — the main concept page: definition,
  covariance, eigenvalue/eigenvector, procedure.</span>
- [[pca-combined-with-other-algorithms]] — PCA + Clustering/
  Classification/Regression, tổng hợp lại toàn bộ thuật toán đã học
  trong môn.
  <br><span class="en">[[pca-combined-with-other-algorithms]] — PCA +
  Clustering/Classification/Regression, synthesizing back into every
  algorithm taught in the course.</span>
- [[clustering]], [[k-means-clustering]], [[hierarchical-clustering]] —
  được PCA hỗ trợ như bước tiền xử lý.
  <br><span class="en">[[clustering]], [[k-means-clustering]],
  [[hierarchical-clustering]] — supported by PCA as a preprocessing
  step.</span>
- [[classification]], [[k-nearest-neighbors]] — được PCA hỗ trợ giảm
  chiều/nhiễu trước khi phân loại.
  <br><span class="en">[[classification]], [[k-nearest-neighbors]] —
  supported by PCA reducing dimensions/noise before classifying.</span>
- [[regularization-ridge-lasso]] — giải pháp khác cho đa cộng tuyến, đối
  chiếu với PCR.
  <br><span class="en">[[regularization-ridge-lasso]] — another solution
  to multicollinearity, contrasted with PCR.</span>
- [[machine-learning-overview]] — giảm chiều (dimension reduction) là
  nhánh thứ 2 của học không giám sát được giảng chi tiết trong môn (sau
  Clustering).
  <br><span class="en">[[machine-learning-overview]] — dimension
  reduction is the 2nd unsupervised branch taught in the course (after
  Clustering).</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter07_PCA.pdf`, slide 1-33.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter07_PCA.pdf`, slides 1-33.</span>
