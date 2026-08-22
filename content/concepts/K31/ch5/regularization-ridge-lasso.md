---
type: concept
title: "Điều chuẩn: Ridge và Lasso"
title_en: "Regularization: Ridge and Lasso"
tags: [chapter-5, chapter-7, k31, machine-learning, regression, regularization]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Điều chuẩn (regularization) thêm 1 số hạng phạt vào loss function của hồi
quy để kiểm soát độ lớn của hệ số, giúp tránh quá khớp. Ridge phạt theo
tổng bình phương hệ số (chuẩn L2), Lasso phạt theo tổng trị tuyệt đối hệ
số (chuẩn L1).
<br><span class="en">Regularization adds a penalty term to a regression's
loss function to control coefficient magnitude, helping avoid
overfitting. Ridge penalizes the sum of squared coefficients (L2 norm),
Lasso penalizes the sum of absolute coefficients (L1 norm).</span>

## Diễn giải - <span class="en">Explanation</span>

- **Công thức loss**:
  <br><span class="en">**Loss formulas**:</span>
  - OLS: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² → min
  - Ridge: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² + λΣβⱼ² → min
  - Lasso: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² + λΣ|βⱼ| → min
- **Vai trò của λ (tham số điều chỉnh)**: kiểm soát độ mạnh của số hạng
  phạt. λ = 0 → Ridge/Lasso bằng OLS thường; λ = ∞ → mọi tham số tiến về
  0. Mức phạt lý tưởng nằm giữa 2 thái cực đó — không có công thức đóng,
  cần thực nghiệm (cross-validation, xem [[model-evaluation-metrics]]).
  <br><span class="en">**The role of λ (tuning parameter)**: controls the
  penalty's strength. λ = 0 → Ridge/Lasso equals ordinary OLS; λ = ∞ → all
  parameters tend to 0. The ideal penalty lies between these extremes —
  no closed form, needs experimentation (cross-validation, see
  [[model-evaluation-metrics]]).</span>
- **Ridge vs Lasso**: cả hai đều giảm độ lớn hệ số, nhưng khác cơ chế —
  chuẩn L2 (Ridge) co hệ số về gần 0 nhưng hiếm khi đưa về đúng 0; chuẩn
  L1 (Lasso) có thể đưa hệ số về đúng 0, do đó Lasso có thể dùng để chọn
  biến (loại bỏ hẳn 1 số biến khỏi mô hình) trong khi Ridge thì không
  (slide chỉ trình bày công thức, không đi sâu chứng minh tính chất
  này).
  <br><span class="en">**Ridge vs Lasso**: both shrink coefficient
  magnitude, but via different mechanisms — the L2 norm (Ridge) shrinks
  coefficients toward but rarely exactly 0; the L1 norm (Lasso) can push
  coefficients exactly to 0, so Lasso can act as variable selection
  (dropping some variables entirely) while Ridge cannot (the slide only
  presents the formulas, without proving this property in depth).</span>
- Code Python (`sklearn.linear_model`): `Ridge(alpha=0.01)` và
  `Lasso(alpha=0.01)` — tham số `alpha` trong sklearn tương ứng với λ
  trong công thức loss.
  <br><span class="en">Python code (`sklearn.linear_model`):
  `Ridge(alpha=0.01)` and `Lasso(alpha=0.01)` — sklearn's `alpha`
  parameter corresponds to λ in the loss formula.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter05-ridge-lasso]] — định nghĩa, công thức loss, vai trò λ, code
  Python.
  <br><span class="en">[[chapter05-ridge-lasso]] — definition, loss
  formulas, the role of λ, Python code.</span>
- [[chapter07-pca]] — mục 7.4 liên hệ Ridge/Lasso với Principal Component
  Regression (PCR) như 2 giải pháp khác nhau cho cùng vấn đề đa cộng
  tuyến.
  <br><span class="en">[[chapter07-pca]] — section 7.4 relates Ridge/
  Lasso to Principal Component Regression (PCR) as 2 different solutions
  to the same multicollinearity problem.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[linear-regression]] — điều chuẩn là giải pháp cho vấn đề quá khớp của
  hồi quy tuyến tính.
  <br><span class="en">[[linear-regression]] — regularization is the
  solution to linear regression's overfitting problem.</span>
- [[overfitting-underfitting]] — cùng vấn đề gốc, khác cơ chế xử lý so
  với KNN (chọn K) và Random Forest (tổ hợp cây).
  <br><span class="en">[[overfitting-underfitting]] — the same root
  problem, a different handling mechanism than KNN (choosing K) and
  Random Forest (tree ensembling).</span>
