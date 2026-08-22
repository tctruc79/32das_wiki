---
type: concept
title: "Hồi quy tuyến tính"
title_en: "Linear Regression"
tags: [chapter-5, k31, machine-learning, regression]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Hồi quy (regression) là bài toán học quan hệ giữa các biến đầu vào và 1
biến đầu ra định lượng; hồi quy tuyến tính giả định quan hệ đó có dạng
tuyến tính: y = β₀ + β₁x₁ + ... + βₖxₖ + u.
<br><span class="en">Regression is the problem of learning the
relationship between input variables and a quantitative output; linear
regression assumes that relationship is linear: y = β₀ + β₁x₁ + ... +
βₖxₖ + u.</span>

## Diễn giải - <span class="en">Explanation</span>

- **2 mục đích dùng mô hình**: **thống kê cổ điển** — mô tả quan hệ giữa
  các biến; **học máy** — dự đoán đầu ra tương lai. Cùng 1 công thức toán
  nhưng mục tiêu sử dụng khác nhau.
  <br><span class="en">**2 uses of the model**: **classical statistics**
  — describe relationships between variables; **machine learning** —
  predict future outputs. Same math, different usage goals.</span>
- **4 cách học tham số** từ dữ liệu huấn luyện: **OLS** (Bình phương tối
  thiểu thông thường — phổ biến nhất), **LAD** (Độ lệch tuyệt đối tối
  thiểu), **MLE** (Ước lượng hợp lý cực đại), **MM** (Phương pháp mô
  men).
  <br><span class="en">**4 ways to learn parameters** from training data:
  **OLS** (most common), **LAD**, **MLE**, **MM**.</span>
- **Trường hợp đặc biệt**: **hồi quy đa thức (polynomial)** — thêm các
  lũy thừa của x (x², x³...) để nắm bắt quan hệ phi tuyến trong khuôn khổ
  mô hình tuyến tính theo tham số. **Biến giả (dummy variables)** — cách
  đưa biến đầu vào định tính vào mô hình: biến có 2 giá trị → 1 biến giả;
  biến có m giá trị → m−1 biến giả.
  <br><span class="en">**Special cases**: **polynomial regression** —
  adds powers of x (x², x³...) to capture nonlinear relationships within
  a model that's linear in parameters. **Dummy variables** — how to bring
  a qualitative input into the model: a 2-valued variable → 1 dummy; an
  m-valued variable → m−1 dummies.</span>
- **Quá khớp trong hồi quy**: xảy ra khi mô hình có quá nhiều tham số so
  với số quan sát — khiến hệ số hồi quy, p-value, R-squared trở nên gây
  hiểu lầm. Xem [[regularization-ridge-lasso]] cho cách xử lý.
  <br><span class="en">**Overfitting in regression**: happens when a
  model has too many parameters relative to observations — makes
  coefficients, p-values, R-squared misleading. See
  [[regularization-ridge-lasso]] for how to handle it.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter05-ridge-lasso]] — định nghĩa regression, 4 phương pháp học
  tham số, đa thức, biến giả.
  <br><span class="en">[[chapter05-ridge-lasso]] — regression definition,
  4 parameter-learning methods, polynomial, dummy variables.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[regularization-ridge-lasso]] — giải pháp cho vấn đề quá khớp của hồi
  quy tuyến tính khi có quá nhiều tham số.
  <br><span class="en">[[regularization-ridge-lasso]] — the solution to
  linear regression's overfitting problem when there are too many
  parameters.</span>
- [[machine-learning-overview]] — Regression là 1 trong 2 nhánh chính của
  học có giám sát, cùng với [[classification]].
  <br><span class="en">[[machine-learning-overview]] — Regression is one
  of the 2 main supervised learning branches, alongside
  [[classification]].</span>
