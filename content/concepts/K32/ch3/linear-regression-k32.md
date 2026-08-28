---
type: concept
title: "Hồi quy tuyến tính (K32)"
title_en: "Linear Regression (K32)"
tags: [chapter-3, k32, regression, ols, supervised-learning]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Trong học máy, hồi quy là bài toán học quan hệ giữa một số biến đầu vào
(định tính hoặc định lượng) x = [x₁, x₂, …, x_p] và một biến đầu ra
**định lượng** y:

y = f(x₁, x₂, …, x_p) + u

trong đó u là số hạng nhiễu/sai số, mô tả mọi thứ mà mô hình không nắm
bắt được. Hồi quy **tuyến tính** là trường hợp f có dạng
y = β₀ + β₁x₁ + β₂x₂ + … + β_k x_k, với β₀,…,β_k là các tham số cần học
từ tập dữ liệu huấn luyện.
<br><span class="en">In machine learning, regression is the problem of
learning the relationship between input variables (qualitative or
quantitative) x = [x₁,…,x_p] and a **quantitative** output y:
y = f(x₁,…,x_p) + u, where u is the noise/error term describing
everything the model cannot capture. **Linear** regression is the case
where f takes the form y = β₀ + β₁x₁ + … + β_k x_k, with β₀,…,β_k the
parameters to be learned from the training data.</span>

## Diễn giải - <span class="en">Explanation</span>

### Cùng một khung với phân loại - <span class="en">The same frame as classification</span>

Ghi chú quan trọng nhất của mục này (slide 89, **mới** ở bản 2026): hồi
quy dùng **cùng một khung** với phân loại — **chỉ kiểu của y thay đổi**.
Mọi thứ đã học ở phần đánh giá mô hình (chia tập huấn luyện/kiểm tra,
kiểm định chéo, quá khớp/chưa khớp) **áp dụng nguyên vẹn**. Đây là lý do
khóa 2026 gộp phân loại và hồi quy vào một chương duy nhất thay vì tách
thành các chương riêng như khóa 2025.
<br><span class="en">This section's most important note (slide 89, **new**
in 2026): regression uses the **same framework** as classification —
**only the type of y changes**. Everything from the model-evaluation
section (train/test splitting, cross-validation, over/underfitting)
**applies unchanged**. This is why the 2026 cohort merges classification
and regression into a single chapter instead of separate ones as in
2025.</span>

### Hai mục đích khác nhau của cùng một mô hình - <span class="en">Two different purposes for one model</span>

Slide 90 phân biệt rõ (**mới**): mô hình hồi quy tuyến tính phục vụ

- **Thống kê cổ điển** — mô tả quan hệ: diễn giải hệ số, kiểm định giả
  thuyết.
- **Học máy** — dự đoán đầu ra tương lai: độ chính xác **ngoài mẫu**.

Ghi chú của slide: sự phân biệt này **quan trọng** — một mô hình có thể
xuất sắc để giải thích mà tầm thường để dự đoán, và ngược lại. Điều chuẩn
(Phần 7) **cố tình đánh đổi một chút tính không chệch để lấy nhiều độ
chính xác dự đoán** — chỉ hợp lý nếu mục đích là dự đoán.

Đây chính là sự phân biệt statsmodels vs `scikit-learn` đã được nêu ở
Chapter 2 K32 (mục 4.11), nay được đặt trên nền lý thuyết.
<br><span class="en">Slide 90 draws the distinction sharply (**new**):
the linear regression model serves **classical statistics** (describing
relationships — interpretation, hypothesis testing) and **machine
learning** (predicting future outputs — **out-of-sample** accuracy). The
slide's note: the distinction matters — a model can be excellent for
explanation and mediocre for prediction, and vice versa; regularization
deliberately trades a little unbiasedness for a lot of predictive
accuracy, which only makes sense if prediction is the goal. This is the
statsmodels vs `scikit-learn` distinction from Chapter 2 K32 (Section
4.11), now given its theoretical grounding.</span>

### Hai bước - <span class="en">Two steps</span>

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

### Hai trường hợp đặc biệt - <span class="en">Two special cases</span>

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

### Trong Python - <span class="en">In Python</span>

Ví dụ 7.1 (slide 104) dùng `LinearRegression()` từ
`sklearn.linear_model`, khớp bằng `lr.fit(X_train, y_train)` và chấm điểm
bằng `lr.score(X_test, y_test)` (trả về R² trên tập kiểm tra). Mô hình
OLS thuần này đóng vai trò **mốc so sánh** cho Ridge/Lasso/Elastic Net —
slide 107 nói rõ: nếu mô hình có điều chuẩn không thắng OLS ngoài mẫu thì
độ phức tạp tăng thêm là không đáng.
<br><span class="en">Example 7.1 (slide 104) uses `LinearRegression()`
from `sklearn.linear_model`, fitted with `lr.fit(X_train, y_train)` and
scored with `lr.score(X_test, y_test)` (test-set R²). This plain OLS
model is the **baseline** for Ridge/Lasso/Elastic Net — slide 107 states
that if a regularized model doesn't beat OLS out of sample, the extra
complexity is not justified.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 89-92 (toàn bộ Phần 6), 104
(mã Python), 107 (OLS làm mốc so sánh), 110 (bảng tổng kết: bài toán hồi
quy, không có siêu tham số chính, **không cần chuẩn hóa**, điểm mạnh là
hệ số diễn giải được).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slides 89-92
(all of Section 6), 104 (the Python code), 107 (OLS as baseline), 110
(summary table: regression, no key hyperparameter, **no scaling**,
interpretable coefficients).</span>

## Liên quan - <span class="en">Related</span>

- [[regularization-ridge-lasso-elastic-net-k32]] — phần tiếp nối trực
  tiếp: cùng mô hình, thêm một hình phạt vào hàm mất mát.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] —
  the direct continuation: the same model with a penalty added to the
  loss.</span>
- [[supervised-learning-framework]] — hồi quy là nhánh thứ hai của khung
  này, chia theo kiểu của y.
  <br><span class="en">[[supervised-learning-framework]] — regression is
  the frame's second branch, split by the type of y.</span>
- [[classification-k32]] — nhánh còn lại; slide 89 nhấn mạnh cả hai dùng
  chung phương pháp luận đánh giá.
  <br><span class="en">[[classification-k32]] — the other branch; slide
  89 stresses that both share the same evaluation methodology.</span>
- [[model-evaluation-metrics-k32]] — bộ chỉ số MAE/MSE/RMSE/MAPE/R² dùng
  để chấm điểm một mô hình hồi quy.
  <br><span class="en">[[model-evaluation-metrics-k32]] — the
  MAE/MSE/RMSE/MAPE/R² set used to score a regression model.</span>
- [[chapter02-python-jupyter-k32]] — chương trước đã dạy `statsmodels`
  (hướng giải thích) và `scikit-learn` (hướng dự đoán), đúng 2 mục đích
  mà slide 90 phân biệt.
  <br><span class="en">[[chapter02-python-jupyter-k32]] — the previous
  chapter taught `statsmodels` (explanation-oriented) and `scikit-learn`
  (prediction-oriented), exactly the two purposes slide 90
  distinguishes.</span>

## Lưu ý - <span class="en">Notes</span>

Chương này **không** nhắc lại các giả định cổ điển của mô hình hồi quy
tuyến tính (không tự tương quan, phương sai không đổi, phần dư phân phối
chuẩn…), cũng không bàn kiểm định giả thuyết — slide chỉ nêu rằng đó là
địa hạt của "thống kê cổ điển" rồi chuyển sang góc nhìn dự đoán. Nếu cần
phần đó, phải tìm ở tài liệu kinh tế lượng ngoài môn học.
<br><span class="en">The chapter does **not** restate the classical
linear-regression assumptions (no autocorrelation, homoskedasticity,
normally distributed residuals…) nor discuss hypothesis testing — the
slides simply flag that as the "classical statistics" territory and move
to the predictive view. That material must be sought in econometrics
sources outside this course.</span>
