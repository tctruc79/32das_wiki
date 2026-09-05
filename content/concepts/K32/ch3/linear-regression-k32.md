---
type: concept
title: "Hồi quy tuyến tính (K32)"
title_en: "Linear Regression (K32)"
tags: [chapter-3, k32, regression, ols, supervised-learning]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Trong học máy, hồi quy là bài toán học quan hệ giữa một số biến đầu vào
(định tính hoặc định lượng) x = [x₁, x₂, …, x_p] và một biến đầu ra
**định lượng** y:
<br><span class="en">In machine learning, regression is the problem of
learning the relationship between input variables (qualitative or
quantitative) x = [x₁,…,x_p] and a **quantitative** output y:</span>

y = f(x₁, x₂, …, x_p) + u

trong đó u là số hạng nhiễu/sai số, mô tả mọi thứ mà mô hình không nắm
bắt được. Hồi quy **tuyến tính** là trường hợp f có dạng
y = β₀ + β₁x₁ + β₂x₂ + … + β_k x_k, với β₀,…,β_k là các tham số cần học
từ tập dữ liệu huấn luyện.
<br><span class="en">where u is the noise/error term describing
everything the model cannot capture. **Linear** regression is the case
where f takes the form y = β₀ + β₁x₁ + … + β_k x_k, with β₀,…,β_k the
parameters to be learned from the training data.</span>

## Diễn giải - <span class="en">Explanation</span>

### Cùng một khung với phân loại - <span class="en">The same frame as classification</span>

Điều quan trọng nhất cần nắm trước khi học bất kỳ công thức hồi quy nào:
hồi quy dùng **đúng cùng một khung** với phân loại — **chỉ kiểu của y
thay đổi**, từ phạm trù sang số. Mọi thứ đã học ở phần đánh giá mô hình
— chia tập huấn luyện/kiểm tra, kiểm định chéo, chẩn đoán quá khớp/chưa
khớp — **áp dụng nguyên vẹn**, không cần học lại từ đầu. Đây chính là lý
do chương này gộp phân loại và hồi quy vào một mạch trình bày duy nhất
thay vì tách thành các chương riêng biệt: chúng không phải hai chủ đề
độc lập, mà là hai ứng dụng của cùng một phương pháp luận.
<br><span class="en">The most important thing to grasp before learning
any regression formula: regression uses **exactly the same frame** as
classification — **only the type of y changes**, from category to
number. Everything already learned in the model-evaluation section —
train/test splitting, cross-validation, diagnosing over/underfitting —
**applies unchanged**, with nothing to relearn from scratch. This is
exactly why this chapter merges classification and regression into a
single narrative rather than splitting them into separate chapters: they
are not two independent topics, but two applications of one shared
methodology.</span>

### Hai mục đích khác nhau của cùng một mô hình - <span class="en">Two different purposes for one model</span>

Cùng một mô hình hồi quy tuyến tính có thể phục vụ 2 mục đích khác hẳn
nhau:
<br><span class="en">The same linear regression model can serve 2 quite
different purposes:</span>

- **Thống kê cổ điển** — mô tả quan hệ: diễn giải hệ số, kiểm định giả
  thuyết.
  <br><span class="en">**Classical statistics** — describing
  relationships: interpreting coefficients, hypothesis testing.</span>
- **Học máy** — dự đoán đầu ra tương lai: độ chính xác **ngoài mẫu**.
  <br><span class="en">**Machine learning** — predicting future outputs:
  **out-of-sample** accuracy.</span>

Phân biệt này **quan trọng** vì một mô hình có thể xuất sắc để giải
thích mà tầm thường để dự đoán, và ngược lại — 2 tiêu chí đánh giá "tốt"
hoàn toàn khác nhau. Điều chuẩn (Phần 7) minh họa rõ nhất hệ quả của
phân biệt này: nó **cố tình đánh đổi một chút tính không chệch để lấy
nhiều độ chính xác dự đoán hơn** — một sự đánh đổi chỉ hợp lý nếu mục
đích thực sự là dự đoán, chứ vô nghĩa nếu mục đích là diễn giải hệ số
một cách khách quan. Đây cũng chính là sự phân biệt statsmodels vs
`scikit-learn` đã gặp ở Chapter 2 K32, nay được đặt trên một nền lý
thuyết vững chắc hơn.
<br><span class="en">This distinction **matters** because a model can be
excellent for explanation and mediocre for prediction, and vice versa —
two entirely different criteria for "good". Regularization (Section 7)
best illustrates the consequence: it **deliberately trades a little
unbiasedness for more predictive accuracy** — a trade-off that only
makes sense if the goal is genuinely prediction, and is meaningless if
the goal is objectively interpreting coefficients. This is also the
statsmodels vs `scikit-learn` distinction encountered in Chapter 2 K32,
now given firmer theoretical grounding.</span>

### Hai bước - <span class="en">Two steps</span>

Học một mô hình hồi quy tuyến tính, dù dùng phương pháp ước lượng nào,
luôn đi qua đúng 2 bước: **học tham số** — tìm β₀,…,β_k từ tập huấn
luyện sao cho mô hình khớp tốt với dữ liệu, qua một trong 4 phương pháp
**OLS** (bình phương tối thiểu thông thường, phổ biến nhất), **LAD**
(độ lệch tuyệt đối tối thiểu), **MLE** (ước lượng hợp lý cực đại), hoặc
**MM** (phương pháp mô-men); rồi **dự đoán** — dùng mô hình đã huấn
luyện để tính đầu ra cho dữ liệu mới: ŷ = β̂₀ + β̂₁x₁* + β̂₂x₂* + … +
β̂_k x_k*.
<br><span class="en">Fitting a linear regression model, whatever
estimation method is used, always passes through exactly 2 steps:
**learning the parameters** β₀,…,β_k from the training set via OLS
(the most common), LAD, MLE, or MM; then **predicting** for new data:
ŷ = β̂₀ + β̂₁x₁* + … + β̂_k x_k*.</span>

### Hai trường hợp đặc biệt - <span class="en">Two special cases</span>

Mô hình tuyến tính cơ bản mở rộng theo 2 hướng đáng chú ý: **hồi quy đa
thức**, y = β₀ + β₁x + β₂x² + … + β_p x^p + u, vẫn được gọi là "tuyến
tính" vì nó **tuyến tính theo tham số** dù phi tuyến theo biến x — và
việc tăng bậc p chính là con đường kinh điển nhất để đi từ chưa khớp
sang quá khớp, đúng sự đánh đổi đã học ở phần đánh giá mô hình. Hướng
thứ hai là xử lý **biến đầu vào định tính** bằng **biến giả**: nếu biến
định tính chỉ nhận 2 giá trị khác nhau thì tạo đúng **1** biến giả; nếu
nhận m giá trị khác nhau thì tạo **m − 1** biến giả (không phải m) — quy
tắc trừ đi 1 này tồn tại chính xác để tránh **bẫy biến giả** (đa cộng
tuyến hoàn hảo giữa các biến giả và hệ số chặn).
<br><span class="en">The basic linear model extends in 2 notable
directions: **polynomial regression**, y = β₀ + β₁x + … + β_p x^p + u,
is still called "linear" because it is **linear in the parameters**
though nonlinear in the variable x — and raising the degree p is the
classic route from underfitting to overfitting, the same trade-off
learned in model evaluation. The second direction is handling
**qualitative inputs** via **dummy variables**: a variable with 2
possible values gets exactly **1** dummy; one with m values gets
**m − 1** dummies (not m) — this minus-one rule exists precisely to
avoid the **dummy variable trap** (perfect collinearity between the
dummies and the intercept).</span>

### Trong Python - <span class="en">In Python</span>

Trong thực hành, `LinearRegression()` từ `sklearn.linear_model`, khớp
bằng `lr.fit(X_train, y_train)` và chấm điểm bằng `lr.score(X_test,
y_test)` (trả về R² trên tập kiểm tra), đóng vai trò **mốc so sánh** bắt
buộc cho mọi mô hình có điều chuẩn ở Phần 7: nếu Ridge hay Lasso không
thắng được OLS thuần ngoài mẫu, độ phức tạp tăng thêm của chúng là không
đáng.
<br><span class="en">In practice, `LinearRegression()` from
`sklearn.linear_model`, fitted with `lr.fit(X_train, y_train)` and
scored with `lr.score(X_test, y_test)` (test-set R²), serves as the
mandatory **baseline** for every regularized model in Section 7: if
Ridge or Lasso doesn't beat plain OLS out of sample, their added
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
