---
type: concept
title: "PCA kết hợp với các thuật toán khác"
title_en: "PCA Combined with Other Algorithms"
tags: [chapter-7, k31, machine-learning, unsupervised-learning, dimension-reduction, pca]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

PCA thường được dùng như 1 bước tiền xử lý trước các thuật toán khác
(Clustering, Classification, Regression) để loại bỏ tương quan, giảm
nhiễu, và tăng tốc — chứ ít khi dùng đơn độc.
<br><span class="en">PCA is often used as a preprocessing step before
other algorithms (Clustering, Classification, Regression) to remove
correlations, reduce noise, and speed things up — rarely used alone.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Vì sao kết hợp**: dữ liệu nhiều chiều gây đa cộng tuyến, nhiễu/dư
  thừa, chi phí tính toán cao. PCA giải quyết cả 3 vấn đề cùng lúc bằng
  cách nén dữ liệu về ít chiều hơn mà vẫn giữ phần lớn thông tin.
  <br><span class="en">**Why combine**: high-dimensional data causes
  multicollinearity, noise/redundancy, high computational cost. PCA
  addresses all 3 at once by compressing data into fewer dimensions while
  keeping most of the information.</span>
- **+ [[clustering|Phân cụm]]**: giảm dữ liệu về 2-10 thành phần chính
  rồi mới phân cụm. [[k-means-clustering|K-Means]] cho cụm gọn hơn;
  [[hierarchical-clustering|Hierarchical]] hoạt động tốt hơn trên không
  gian đã giảm chiều. Ứng dụng: phân khúc khách hàng, nhóm tài liệu/hình
  ảnh.
  <br><span class="en">**+ Clustering**: reduce data to 2-10 PCs before
  clustering. K-Means gets more compact clusters; Hierarchical works
  better on reduced spaces. Applications: customer segmentation,
  grouping documents/images.</span>
- **+ [[classification|Phân loại]]**: cải thiện học có giám sát bằng
  cách giảm nhiễu và đa cộng tuyến. Logistic Regression tránh được đa
  cộng tuyến; các bộ phân loại dựa trên khoảng cách như SVM/
  [[k-nearest-neighbors|KNN]] hưởng lợi từ PCA trong không gian nhiều
  chiều. Ví dụ kinh điển: phân loại chữ số viết tay (MNIST) dùng PCA
  trước SVM.
  <br><span class="en">**+ Classification**: improves supervised learning
  by reducing noise and collinearity. Logistic Regression avoids
  multicollinearity; distance-based classifiers like SVM/KNN benefit from
  PCA in high dimensions. Classic example: MNIST digit classification
  using PCA before SVM.</span>
- **+ Hồi quy — Hồi quy Thành phần Chính (Principal Component Regression,
  PCR)**: Bước 1 — áp PCA lên biến dự báo X; Bước 2 — hồi quy y theo các
  thành phần chính đã chọn (y ≈ Zγ, Z = XVₘ). Hữu ích khi biến dự báo
  tương quan cao — đây là **giải pháp thay thế** cho
  [[regularization-ridge-lasso|Ridge/Lasso]] khi xử lý đa cộng tuyến,
  nhưng cơ chế khác hẳn: Ridge/Lasso phạt trực tiếp độ lớn hệ số hồi quy
  gốc, còn PCR biến đổi không gian biến trước rồi mới hồi quy trên không
  gian mới. Rủi ro của PCR: thành phần chính bị loại bỏ vẫn có thể chứa
  thông tin dự báo có giá trị (khác với Ridge/Lasso, vốn giữ nguyên toàn
  bộ biến gốc, chỉ co hệ số).
  <br><span class="en">**+ Regression — Principal Component Regression
  (PCR)**: Step 1 — apply PCA to predictors X; Step 2 — regress y on the
  selected PCs (y ≈ Zγ, Z = XVₘ). Useful when predictors are highly
  correlated — this is an **alternative** to
  [[regularization-ridge-lasso|Ridge/Lasso]] for multicollinearity, but
  the mechanism differs: Ridge/Lasso directly penalizes original
  coefficient magnitude, while PCR transforms the variable space first
  then regresses on the new space. PCR's risk: discarded PCs may still
  hold predictive information (unlike Ridge/Lasso, which keeps all
  original variables, only shrinking coefficients).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter07-pca]] — toàn bộ mục 7.4: vì sao kết hợp, PCA+Clustering,
  PCA+Classification, PCA+Regression (PCR).
  <br><span class="en">[[chapter07-pca]] — all of section 7.4: why
  combine, PCA+Clustering, PCA+Classification, PCA+Regression
  (PCR).</span>

## Liên quan - <span class="en">Related concepts</span>

- [[pca]] — nền tảng toán học của phép biến đổi.
  <br><span class="en">[[pca]] — the mathematical foundation of the
  transform.</span>
- [[regularization-ridge-lasso]] — giải pháp khác cho đa cộng tuyến,
  cùng vấn đề nhưng khác cơ chế với PCR.
  <br><span class="en">[[regularization-ridge-lasso]] — another
  multicollinearity solution, same problem but a different mechanism than
  PCR.</span>
- [[clustering]], [[classification]] — 2 nhánh thuật toán được PCA hỗ trợ
  trực tiếp.
  <br><span class="en">[[clustering]], [[classification]] — the 2
  algorithm branches directly supported by PCA.</span>
