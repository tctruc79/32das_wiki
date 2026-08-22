---
type: concept
title: "Phân tích Thành phần Chính (PCA)"
title_en: "Principal Component Analysis (PCA)"
tags: [chapter-7, k31, machine-learning, unsupervised-learning, dimension-reduction]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

PCA là phương pháp giảm chiều dữ liệu: tóm tắt p biến gốc bằng k biến
tổng hợp (thành phần chính) sao cho nắm bắt được càng nhiều biến thiên
của dữ liệu càng tốt, với k < p.
<br><span class="en">PCA is a dimension-reduction method: summarizing p
original variables with k composite variables (principal components) that
capture as much of the data's variation as possible, with k < p.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Ý tưởng cốt lõi**: xoay hệ tọa độ để trục mới trùng với hướng biến
  thiên lớn nhất của dữ liệu. Thành phần chính 1 nắm hướng trải rộng lớn
  nhất; thành phần chính 2 nắm hướng trải rộng lớn nhất vuông góc với
  thành phần 1; và cứ thế.
  <br><span class="en">**Core idea**: rotate the coordinate system so the
  new axes align with the data's directions of maximum variation. PC1
  captures the direction of maximum spread; PC2 the maximum spread
  perpendicular to PC1; and so on.</span>
- **Nền tảng toán học**: dựa trên **ma trận hiệp phương sai** giữa các
  biến gốc. **Trị riêng và véc-tơ riêng** của ma trận này xác định các
  thành phần chính — trị riêng = phương sai giải thích bởi trục đó, véc-
  tơ riêng = "đóng góp" của mỗi biến gốc vào trục đó. Tổng các trị riêng
  = trace của ma trận hiệp phương sai = tổng phương sai dữ liệu. Quy tắc
  kinh nghiệm: trục có trị riêng > 1 mới đáng giữ lại.
  <br><span class="en">**Mathematical foundation**: based on the
  **covariance matrix** among the original variables. Its **eigenvalues
  and eigenvectors** determine the principal components — eigenvalue =
  variance explained by that axis, eigenvector = each original variable's
  "contribution" to it. Sum of eigenvalues = trace of the covariance
  matrix = total data variance. Rule of thumb: axes with eigenvalue > 1
  are worth keeping.</span>
- **Quy trình 5 bước**: (1) lấy dữ liệu, (2) trừ trung bình/chuẩn hóa dữ
  liệu, (3) tính ma trận hiệp phương sai, (4) tính trị riêng/véc-tơ riêng
  của ma trận đó, (5) chọn thành phần từ trị riêng/véc-tơ riêng. **Chuẩn
  hóa quan trọng**: biến có phương sai lớn sẽ lấn át PC nếu không chuẩn
  hóa về phương sai đơn vị/trung bình 0 trước.
  <br><span class="en">**5-step procedure**: (1) get data, (2) subtract
  the mean/standardize, (3) calculate the covariance matrix, (4)
  calculate its eigenvectors/eigenvalues, (5) choose components from
  them. **Standardization matters**: a high-variance variable dominates
  the PCs unless standardized to unit variance/zero mean first.</span>
- **Ứng dụng**: nhận diện khuôn mặt (mỗi pixel là 1 biến → rất nhiều
  chiều, PCA đơn giản hóa); khử nhiễu ảnh; nén ảnh; trực quan hóa dữ liệu
  nhiều chiều xuống 2-3 chiều để quan sát bằng mắt.
  <br><span class="en">**Applications**: face recognition (each pixel is
  a variable → very high-dimensional, PCA simplifies); image de-noising;
  image compression; visualizing high-dimensional data down to 2-3
  dimensions.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter07-pca]] — định nghĩa đầy đủ, hiệp phương sai, trị riêng/véc-
  tơ riêng, quy trình 5 bước, các ví dụ ứng dụng.
  <br><span class="en">[[chapter07-pca]] — full definition, covariance,
  eigenvalue/eigenvector, the 5-step procedure, application
  examples.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[pca-combined-with-other-algorithms]] — dùng PCA làm bước tiền xử lý
  cho các thuật toán khác đã học trong môn.
  <br><span class="en">[[pca-combined-with-other-algorithms]] — using
  PCA as a preprocessing step for other algorithms taught in the
  course.</span>
- [[clustering]] — nhánh giảm chiều (PCA) và nhánh phân cụm là 2 nhánh
  chính của học không giám sát trong môn.
  <br><span class="en">[[clustering]] — dimension reduction (PCA) and
  clustering are the course's 2 main unsupervised branches.</span>
