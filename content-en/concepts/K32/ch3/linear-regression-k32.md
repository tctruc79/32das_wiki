---
type: concept
title: "Linear Regression (K32)"
tags: [chapter-3, k32, regression, ols, supervised-learning]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

Trong học máy, hồi quy là bài toán học quan hệ giữa một số biến đầu vào
(định tính hoặc định lượng) x = [x₁, x₂, …, x_p] và một biến đầu ra
**định lượng** y:

y = f(x₁, x₂, …, x_p) + u

In machine learning, regression is the problem of
learning the relationship between input variables (qualitative or
quantitative) x = [x₁,…,x_p] and a **quantitative** output y:
y = f(x₁,…,x_p) + u, where u is the noise/error term describing
everything the model cannot capture. **Linear** regression is the case
where f takes the form y = β₀ + β₁x₁ + … + β_k x_k, with β₀,…,β_k the
parameters to be learned from the training data.

## Explanation

### The same frame as classification

This section's most important note (slide 89, **new**
in 2026): regression uses the **same framework** as classification —
**only the type of y changes**. Everything from the model-evaluation
section (train/test splitting, cross-validation, over/underfitting)
**applies unchanged**. This is why the 2026 cohort merges classification
and regression into a single chapter instead of separate ones as in
2025.

### Two different purposes for one model

Slide 90 phân biệt rõ (**mới**): mô hình hồi quy tuyến tính phục vụ

- **Thống kê cổ điển** — mô tả quan hệ: diễn giải hệ số, kiểm định giả
  thuyết.
- **Học máy** — dự đoán đầu ra tương lai: độ chính xác **ngoài mẫu**.

Ghi chú của slide: sự phân biệt này **quan trọng** — một mô hình có thể
xuất sắc để giải thích mà tầm thường để dự đoán, và ngược lại. Điều chuẩn
(Phần 7) **cố tình đánh đổi một chút tính không chệch để lấy nhiều độ
chính xác dự đoán** — chỉ hợp lý nếu mục đích là dự đoán.

Slide 90 draws the distinction sharply (**new**):
the linear regression model serves **classical statistics** (describing
relationships — interpretation, hypothesis testing) and **machine
learning** (predicting future outputs — **out-of-sample** accuracy). The
slide's note: the distinction matters — a model can be excellent for
explanation and mediocre for prediction, and vice versa; regularization
deliberately trades a little unbiasedness for a lot of predictive
accuracy, which only makes sense if prediction is the goal. This is the
statsmodels vs `scikit-learn` distinction from Chapter 2 K32 (Section
4.11), now given its theoretical grounding.

### Two steps

Slide 91:

- **Bước 1 — học tham số**: tìm β₀,…,β_k từ tập huấn luyện sao cho mô
  hình khớp tốt với dữ liệu. Có 4 phương pháp được nêu tên: **OLS**
  (bình phương tối thiểu thông thường), **LAD** (độ lệch tuyệt đối tối
  thiểu), **MLE** (ước lượng hợp lý cực đại), **MM** (phương pháp
  mô-men). **OLS được dùng phổ biến nhất.**
- **Bước 2 — dự đoán**: dùng mô hình đã huấn luyện để tính đầu ra cho dữ
  liệu mới: ŷ = β̂₀ + β̂₁x₁* + β̂₂x₂* + … + β̂_k x_k*.

<span class="en">Slide 91: **Step 1 — learn the parameters** β₀,…,β_k
from the training set, via OLS, LAD, MLE or MM (**OLS is the most
commonly used**). **Step 2 — predict** for new data:
ŷ = β̂₀ + β̂₁x₁* + … + β̂_k x_k*.</span>

### Two special cases

Slide 92:

- **Hồi quy đa thức**: y = β₀ + β₁x + β₂x² + … + β_p x^p + u — vẫn là
  **tuyến tính theo tham số**, dù phi tuyến theo biến. Ghi chú của slide
  (mới): **tăng bậc p là cách kinh điển để đi từ chưa khớp sang quá
  khớp** — đúng sự đánh đổi ở phần đánh giá mô hình.
- **Biến đầu vào định tính**: dùng **biến giả** — nếu biến định tính chỉ
  nhận 2 giá trị khác nhau thì tạo **1** biến giả; nếu nhận m giá trị
  khác nhau thì tạo **m − 1** biến giả, để tránh **bẫy biến giả**.

<span class="en">Slide 92: **polynomial regression**
y = β₀ + β₁x + … + β_p x^p + u is still **linear in the parameters**
though nonlinear in the variable — and the slide's note (new): **raising
p is the classic route from underfitting to overfitting**. **Qualitative
inputs** use **dummy variables**: 2 values ⇒ **1** dummy; m values ⇒
**m − 1** dummies, avoiding the **dummy variable trap**.</span>

### In Python

Example 7.1 (slide 104) uses `LinearRegression()`
from `sklearn.linear_model`, fitted with `lr.fit(X_train, y_train)` and
scored with `lr.score(X_test, y_test)` (test-set R²). This plain OLS
model is the **baseline** for Ridge/Lasso/Elastic Net — slide 107 states
that if a regularized model doesn't beat OLS out of sample, the extra
complexity is not justified.

## Appears in

[[chapter03-supervised-learning-k32]] — slides 89-92
(all of Section 6), 104 (the Python code), 107 (OLS as baseline), 110
(summary table: regression, no key hyperparameter, **no scaling**,
interpretable coefficients).

## Related

- [[regularization-ridge-lasso-elastic-net-k32]] —
  the direct continuation: the same model with a penalty added to the
  loss.
- [[supervised-learning-framework]] — regression is
  the frame's second branch, split by the type of y.
- [[classification-k32]] — the other branch; slide
  89 stresses that both share the same evaluation methodology.
- [[model-evaluation-metrics-k32]] — the
  MAE/MSE/RMSE/MAPE/R² set used to score a regression model.
- [[chapter02-python-jupyter-k32]] — the previous
  chapter taught `statsmodels` (explanation-oriented) and `scikit-learn`
  (prediction-oriented), exactly the two purposes slide 90
  distinguishes.

## Notes

The chapter does **not** restate the classical
linear-regression assumptions (no autocorrelation, homoskedasticity,
normally distributed residuals…) nor discuss hypothesis testing — the
slides simply flag that as the "classical statistics" territory and move
to the predictive view. That material must be sought in econometrics
sources outside this course.
