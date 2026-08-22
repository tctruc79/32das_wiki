---
type: source
title: "Chapter 5 (K31) — Hồi quy Ridge và Lasso"
title_en: "Chapter 5 (K31) — Ridge and Lasso Regression"
tags: [chapter-5, k31, machine-learning, regression, regularization]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter05_Ridge and Lasso.pdf"
---

## Metadata

- **Khóa**: K31 (2025). **Giảng viên**: [[tran-thi-tuan-anh]]. **Số
  slide**: 19 (chương ngắn nhất trong 8 chương).
  <br><span class="en">**Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 19 (the shortest of the 8
  chapters).</span>
- **Vị trí trong môn**: nhánh **Regression** của học có giám sát (nhánh
  Classification đã học ở Chapter 3-4). Dữ liệu thực hành `regression.csv`
  — **không còn nằm trong `raw/`** sau lần dọn dẹp cấu trúc thư mục gần
  đây (chỉ còn ở `Lecture Notes/Chapter5_Ridge and Lasso regression/
  Chapter5_Data/Regression.csv` ngoài `raw/`, xem CLAUDE.md mục "Kiến
  trúc 3 lớp" — không ingest).
  <br><span class="en">**Position in the course**: the **Regression**
  branch of supervised learning (the Classification branch already
  covered in Chapters 3-4). Practice data `regression.csv` — **no longer
  in `raw/`** after a recent folder cleanup (only remains at
  `Lecture Notes/Chapter5_Ridge and Lasso regression/Chapter5_Data/
  Regression.csv` outside `raw/`, see CLAUDE.md "Kiến trúc 3 lớp" — not
  ingested).</span>

## Tóm tắt - <span class="en">Summary</span>

- 3 phần: (1) Regression trong học có giám sát — định nghĩa, hồi quy
  tuyến tính, cách học tham số, trường hợp đặc biệt (đa thức, biến giả);
  (2) vấn đề quá khớp và điều chuẩn (regularization) — Ridge/Lasso, công
  thức loss, vai trò tham số λ; (3) code Python + các chỉ số đánh giá dự
  báo (bổ sung MAPE so với Chapter 3).
  <br><span class="en">3 parts: (1) Regression in supervised learning —
  definition, linear regression, parameter learning, special cases
  (polynomial, dummy variables); (2) the overfitting problem &
  regularization — Ridge/Lasso, loss formulas, the λ parameter's role; (3)
  Python code + forecast evaluation metrics (adds MAPE vs Chapter 3).</span>

## Nội dung chính - <span class="en">Key content</span>

### 5.1 Regression trong học có giám sát (slide 3-7) - <span class="en">5.1 Regression in supervised learning (slides 3-7)</span>

- **Regression là gì** (slide 4): trong học máy, regression là bài toán
  học quan hệ giữa các biến đầu vào x = [x₁, x₂, ..., xₚ] (định tính hoặc
  định lượng) và 1 biến đầu ra định lượng y. Mô hình: y = f(x₁,...,xₚ) +
  u, với u là số hạng nhiễu/sai số — mô tả mọi thứ mô hình không nắm bắt
  được. 2 loại: hồi quy tuyến tính (linear) và phi tuyến tính (nonlinear).
  <br><span class="en">**What is regression** (slide 4): in ML,
  regression is the problem of learning the relationship between input
  variables x = [x₁, x₂, ..., xₚ] (qualitative or quantitative) and a
  quantitative output y. Model: y = f(x₁,...,xₚ) + u, where u is a noise/
  error term describing everything the model can't capture. 2 types:
  linear and nonlinear regression.</span>
- **Hồi quy tuyến tính** (slide 5): y = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ + u,
  với β₀...βₖ là các tham số. Bài toán là học các tham số này từ tập dữ
  liệu huấn luyện. Mô hình hồi quy tuyến tính dùng cho 2 mục đích khác
  nhau: **thống kê cổ điển** — mô tả quan hệ; **học máy** — dự đoán đầu
  ra tương lai.
  <br><span class="en">**Linear regression** (slide 5): y = β₀ + β₁x₁ +
  β₂x₂ + ... + βₖxₖ + u, with β₀...βₖ as parameters. The problem is
  learning these parameters from training data. Used for 2 different
  purposes: **classical statistics** — describe relationships; **machine
  learning** — predict future outputs.</span>
- **Học mô hình từ dữ liệu huấn luyện** (slide 6): tìm các giá trị tham
  số sao cho mô hình khớp tốt với dữ liệu. 4 cách: **OLS** (Bình phương
  tối thiểu thông thường — phổ biến nhất), **LAD** (Độ lệch tuyệt đối tối
  thiểu), **MLE** (Ước lượng hợp lý cực đại), **MM** (Phương pháp mô
  men). Sau khi học, dùng mô hình để dự đoán đầu ra cho dữ liệu mới: ŷ =
  β̂₀ + β̂₁x₁* + ... + β̂ₖxₖ*.
  <br><span class="en">**Learning the model from training data** (slide
  6): find parameter values that fit the data well. 4 methods: **OLS**
  (Ordinary Least Squares — most common), **LAD** (Least Absolute
  Deviation), **MLE** (Maximum Likelihood Estimator), **MM** (Method of
  Moments). Then use the trained model to predict for new data: ŷ = β̂₀ +
  β̂₁x₁* + ... + β̂ₖxₖ*.</span>
- **Trường hợp đặc biệt** (slide 7): **hồi quy đa thức (polynomial)** — y
  = β₀ + β₁x + β₂x² + ... + βₚxᵖ + u. **Biến đầu vào định tính** — dùng
  biến giả (dummy variables): nếu biến định tính chỉ có 2 giá trị, tạo 1
  biến giả; nếu có m giá trị khác nhau, tạo m−1 biến giả.
  <br><span class="en">**Special cases** (slide 7): **polynomial
  regression** — y = β₀ + β₁x + β₂x² + ... + βₚxᵖ + u. **Qualitative
  input variables** — use dummy variables: if a variable has only 2
  values, create 1 dummy variable; if it has m values, create m−1 dummy
  variables.</span>

### 5.2 Vấn đề quá khớp và điều chuẩn (slide 8-14) - <span class="en">5.2 The problem of overfitting and regularization (slides 8-14)</span>

- **Quá khớp trong hồi quy** (slide 8): mô hình hồi quy quá khớp có quá
  nhiều tham số so với số quan sát. Mô hình quá khớp có thể khiến hệ số
  hồi quy, p-value, và R-squared trở nên gây hiểu lầm. Cách tiếp cận hữu
  ích để xử lý quá khớp là **điều chuẩn (regularization)**.
  <br><span class="en">**Overfitting in regression** (slide 8): overfit
  regression models have too many parameters for the number of
  observations. An overfit model can cause the regression coefficients,
  p-values, and R-squared to be misleading. A useful approach to handle
  overfitting is **regularization**.</span>
- **Điều chuẩn (Regularization)** (slide 10): 1 cách phạt (penalty) cho
  mỗi tham số đưa vào mô hình. Trong hồi quy điều chuẩn, độ lớn của hệ số
  cũng như độ lớn của số hạng sai số đều bị phạt. Mô hình phức tạp bị
  không khuyến khích, giúp tránh quá khớp. 2 loại điều chuẩn phổ biến
  nhất: **Ridge regression** và **Lasso regression**.
  <br><span class="en">**Regularization** (slide 10): a way to give a
  penalty for each parameter in the model. In regularized regression, the
  magnitude of coefficients and of the error term are both penalized.
  Complex models are discouraged, helping avoid overfitting. The 2 most
  common types: **Ridge regression** and **Lasso regression**.</span>
- **Công thức loss** (slide 11): **OLS**: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² →
  min. **Ridge**: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² + λΣβⱼ² → min (phạt theo
  **tổng bình phương** hệ số — chuẩn L2). **Lasso**: Loss = Σ(yᵢ − β₀ −
  Σβⱼxⱼᵢ)² + λΣ|βⱼ| → min (phạt theo **tổng trị tuyệt đối** hệ số —
  chuẩn L1). λ là tham số điều chỉnh (tuning parameter).
  <br><span class="en">**Loss formulas** (slide 11): **OLS**: Loss =
  Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² → min. **Ridge**: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² +
  λΣβⱼ² → min (penalizes the **sum of squared** coefficients — L2 norm).
  **Lasso**: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² + λΣ|βⱼ| → min (penalizes the
  **sum of absolute** coefficients — L1 norm). λ is the tuning
  parameter.</span>
- **Vai trò của λ** (slide 13): tham số điều chỉnh kiểm soát độ mạnh của
  số hạng phạt. Khi λ = 0, hồi quy Ridge/Lasso bằng hồi quy bình phương
  tối thiểu thông thường; khi λ = ∞, mọi tham số có xu hướng về 0. Mức
  phạt lý tưởng nằm đâu đó giữa 0 và ∞. Slide không nêu công thức đóng để
  tìm λ tối ưu — cần thực nghiệm (liên hệ [[model-evaluation-metrics]]).
  <br><span class="en">**The role of λ** (slide 13): the tuning parameter
  controls the strength of the penalty. When λ = 0, Ridge/Lasso equals
  ordinary least squares; when λ = ∞, all parameters tend to 0. The ideal
  penalty lies somewhere between 0 and ∞. The slide gives no closed-form
  for the optimal λ — needs experimentation (see
  [[model-evaluation-metrics]]).</span>

### 5.3 Code Python cho Ridge và Lasso (slide 15-18) - <span class="en">5.3 Python code for Ridge and Lasso (slides 15-18)</span>

- **Code mẫu** (slide 15): hồi quy tuyến tính —
  `from sklearn.linear_model import LinearRegression; lr =
  LinearRegression(); lr.fit(X_train, y_train)`. Ridge —
  `from sklearn.linear_model import Ridge; ridge = Ridge(alpha=0.01);
  ridge.fit(X_train, y_train)`. Lasso —
  `from sklearn.linear_model import Lasso; lasso = Lasso(alpha=0.01);
  lasso.fit(X_train, y_train)`.
  <br><span class="en">**Sample code** (slide 15): linear regression —
  `from sklearn.linear_model import LinearRegression; lr =
  LinearRegression(); lr.fit(X_train, y_train)`. Ridge —
  `from sklearn.linear_model import Ridge; ridge = Ridge(alpha=0.01);
  ridge.fit(X_train, y_train)`. Lasso —
  `from sklearn.linear_model import Lasso; lasso = Lasso(alpha=0.01);
  lasso.fit(X_train, y_train)`.</span>
- **Đánh giá độ chính xác dự báo** (slide 16-17): MAE và MSE (định nghĩa
  giống Chapter 3, kèm code
  `sklearn.metrics.mean_absolute_error`/`mean_squared_error`). **Mới ở
  chương này**: **Sai số phần trăm tuyệt đối trung bình (MAPE)** =
  (1/n)Σ|uᵢ|/|Yᵢ| × 100 = (1/n)Σ|Yᵢ−Ŷᵢ|/|Yᵢ| × 100. **RMSE** = √MSE.
  <br><span class="en">**Evaluating forecast accuracy** (slides 16-17):
  MAE and MSE (same definitions as Chapter 3, with
  `sklearn.metrics.mean_absolute_error`/`mean_squared_error` code).
  **New in this chapter**: **Mean Absolute Percentage Error (MAPE)** =
  (1/n)Σ|uᵢ|/|Yᵢ| × 100 = (1/n)Σ|Yᵢ−Ŷᵢ|/|Yᵢ| × 100. **RMSE** =
  √MSE.</span>
- **Teamwork 3** (slide 18, làm theo cặp): dùng file `regression.csv`
  (x₁-x₄ là input, y là output) — nạp dữ liệu; tạo mảng cho biến đầu vào/
  đầu ra; thống kê mô tả cho biến độc lập/phụ thuộc; vẽ đồ thị hệ số theo
  tham số điều chỉnh; tạo tập huấn luyện/kiểm tra; xây dựng, dự đoán, và
  đánh giá hồi quy Ridge và Lasso. Tạo Python markdown, mỗi ô cho mỗi tác
  vụ.
  <br><span class="en">**Teamwork 3** (slide 18, in pairs): using
  `regression.csv` (x₁-x₄ inputs, y output) — load the data; create
  arrays for inputs/output; descriptive statistics for independent/
  dependent variables; plot coefficients vs the tuning parameter; create
  training/test datasets; build, predict, evaluate Ridge and Lasso
  regression. Create a Python markdown, one cell per task.</span>

## Liên kết - <span class="en">Links</span>

- [[linear-regression]] — trang khái niệm về regression, OLS/LAD/MLE/MM,
  hồi quy đa thức, biến giả.
  <br><span class="en">[[linear-regression]] — the regression concept
  page, OLS/LAD/MLE/MM, polynomial regression, dummy variables.</span>
- [[regularization-ridge-lasso]] — trang khái niệm Ridge/Lasso.
  <br><span class="en">[[regularization-ridge-lasso]] — the Ridge/Lasso
  concept page.</span>
- [[overfitting-underfitting]] — vấn đề gốc mà điều chuẩn giải quyết,
  tiếp nối trực tiếp từ cách KNN/Decision Tree xử lý quá khớp.
  <br><span class="en">[[overfitting-underfitting]] — the root problem
  regularization solves, continuing directly from how KNN/Decision Tree
  handled overfitting.</span>
- [[model-evaluation-metrics]] — bổ sung MAPE vào bộ chỉ số đã có từ
  Chapter 3.
  <br><span class="en">[[model-evaluation-metrics]] — adds MAPE to the
  metric set from Chapter 3.</span>
- [[machine-learning-overview]] — Regression là nhánh thứ 2 của học có
  giám sát, hoàn thiện bức tranh cùng Classification.
  <br><span class="en">[[machine-learning-overview]] — Regression is the
  2nd branch of supervised learning, completing the picture alongside
  Classification.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter05_Ridge and Lasso.pdf`,
slide 1-19.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter05_Ridge and Lasso.pdf`, slides 1-19.</span>
