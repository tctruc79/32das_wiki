---
type: concept
title: "Điều chuẩn: Ridge, Lasso và Elastic Net (K32)"
title_en: "Regularization: Ridge, Lasso and Elastic Net (K32)"
tags: [chapter-3, k32, regularization, ridge, lasso, elastic-net, regression]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Điều chuẩn trong hồi quy là cách **áp một hình phạt cho mỗi tham số** đưa
vào mô hình. Trong hồi quy có điều chuẩn, **độ lớn của các hệ số** — chứ
không chỉ độ lớn của số hạng sai số — cũng bị phạt; mô hình phức tạp vì
thế bị "nản lòng", và đó là cách tránh quá khớp. Chương này dạy 3 dạng:
**Ridge** (hình phạt L2), **Lasso** (hình phạt L1) và **Elastic Net**
(kết hợp cả hai — nội dung mới của khóa 2026).
<br><span class="en">Regularization in regression imposes **a penalty for
each parameter** included in the model. In regularized regression the
**magnitude of the coefficients** — not just of the error term — is
penalised, discouraging complex models and thereby avoiding overfitting.
The chapter teaches three forms: **Ridge** (L2 penalty), **Lasso** (L1
penalty) and **Elastic Net** (both combined — new in the 2026
cohort).</span>

## Diễn giải - <span class="en">Explanation</span>

### Vấn đề cần giải - <span class="en">The problem being solved</span>

Slide 94: mô hình hồi quy quá khớp có **quá nhiều tham số so với số quan
sát**; hệ quả là **các hệ số hồi quy, giá trị p và R² đều có thể trở nên
gây hiểu lầm**. Điều chuẩn là cách hữu ích để xử lý.
<br><span class="en">Slide 94: an overfit regression model has **too many
parameters for the number of observations**, which can make the
coefficients, p-values and R² **misleading**. Regularization is a useful
way to handle it.</span>

### Ba hàm mất mát - <span class="en">The three loss functions</span>

Slide 97, với λ là tham số điều chỉnh:

| Mô hình | Hàm mất mát cần tối thiểu hóa |
|---|---|
| OLS | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² |
| Ridge | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼβⱼ²** |
| Lasso | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼ\|βⱼ\|** |

**Ghi chú quan trọng**: hệ số chặn β₀ **không bao giờ bị phạt**.

**Elastic Net** (slide 98, **mới**):
Loss = Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² + λ[ αΣⱼ|βⱼ| + ((1−α)/2)Σⱼβⱼ² ] → min,
trong đó **α = 1 cho ra Lasso; α = 0 cho ra Ridge**. Elastic Net hữu ích
khi các biến dự báo **tương quan mạnh**: Lasso đơn thuần có xu hướng chọn
**tùy tiện 1 biến** trong nhóm tương quan rồi bỏ hết phần còn lại, còn
Elastic Net **giữ nguyên cả nhóm**.
<br><span class="en">Slide 97 gives OLS, Ridge (+λΣβⱼ²) and Lasso
(+λΣ|βⱼ|), with λ the tuning parameter — and the intercept β₀ is **never
penalised**. **Elastic Net** (slide 98, **new**) combines both penalties
with **α = 1 giving Lasso and α = 0 giving Ridge**; it is useful when
predictors are strongly correlated, where Lasso alone picks one
arbitrarily and drops the rest while Elastic Net keeps the group.</span>

### Nghiệm hiển của Ridge - <span class="en">Ridge's closed form</span>

Slide 98 (**mới**): β̂_ridge = (X'X + λI)⁻¹X'y. Việc cộng thêm λI làm ma
trận **khả nghịch ngay cả khi X'X suy biến** — đó chính là lý do Ridge xử
lý được **đa cộng tuyến** và cả trường hợp **k > n** (số biến nhiều hơn
số quan sát). Lasso **không có nghiệm hiển**, phải giải bằng phương pháp
số.
<br><span class="en">Slide 98 (**new**): β̂_ridge = (X'X + λI)⁻¹X'y.
Adding λI makes the matrix **invertible even when X'X is singular** —
which is exactly why Ridge handles **multicollinearity** and the
**k > n** case. Lasso has **no closed form** and is solved
numerically.</span>

### Vì sao Lasso đưa hệ số về đúng 0 - <span class="en">Why Lasso sets coefficients exactly to zero</span>

Slide 99 — lời giải thích **hình học**, hoàn toàn mới ở bản 2026 và là
phần đáng học thuộc nhất của mục này:

Cả 2 phương pháp đều tối thiểu hóa tổng bình phương phần dư **với một
ngân sách ràng buộc trên các hệ số**, và **hình dạng của ngân sách đó mới
là điều quyết định**:

- Ràng buộc Ridge là **hình tròn**: β₁² + β₂² ≤ t — không có góc nhọn,
  nên các đường đồng mức của tổng bình phương phần dư chạm nó ở một điểm
  bất kỳ trên đường tròn ⇒ hệ số **co về gần 0 nhưng không bao giờ chạm
  0**.
- Ràng buộc Lasso là **hình thoi**: |β₁| + |β₂| ≤ t — **có các góc nhọn
  nằm ngay trên trục tọa độ**. Các đường đồng mức thường chạm hình thoi
  **tại một góc**, và chạm tại góc nghĩa là **có một hệ số đúng bằng 0**.

<span class="en">Slide 99 — the **geometric** argument, entirely new in
2026 and the most worth-memorising part of the section. Both methods
minimise the residual sum of squares subject to a **budget on the
coefficients**, and the budget's **shape** is what matters. Ridge's
budget is a **circle** (β₁² + β₂² ≤ t) with no corners, so the RSS
contours touch it anywhere ⇒ coefficients **shrink towards zero but never
reach it**. Lasso's budget is a **diamond** (|β₁| + |β₂| ≤ t) with
**corners sitting on the axes**; the contours usually touch it **at a
corner**, and a corner means **one coefficient is exactly zero**.</span>

### Bảng so sánh Ridge vs Lasso - <span class="en">Ridge vs Lasso</span>

Slide 100 — 6 tiêu chí:

| Tiêu chí | Ridge (L2) | Lasso (L1) |
|---|---|---|
| Hình phạt | λΣβⱼ² | λΣ\|βⱼ\| |
| Hệ số | Co về gần 0, **không bao giờ đúng bằng 0** | **Một số bị đưa về đúng 0** |
| Chọn biến | Không | **Có, tự động** |
| Biến dự báo tương quan | Chia đều trọng số cho cả nhóm | Chọn 1 biến, bỏ các biến còn lại |
| Hợp nhất khi | **Nhiều** biến dự báo, mỗi biến ảnh hưởng **nhỏ** | **Ít** biến dự báo, mỗi biến ảnh hưởng **lớn** |
| Nghiệm | Dạng hiển (đóng) | Bằng phương pháp số |

**Lưu ý bắt buộc**: phải **chuẩn hóa các đặc trưng trước khi khớp** — cả
2 hình phạt đều phụ thuộc độ lớn của hệ số, mà độ lớn hệ số lại phụ thuộc
**đơn vị đo** của từng biến dự báo; không chuẩn hóa thì hình phạt bị áp
một cách **bất công** giữa các biến.
<br><span class="en">Slide 100 compares the two on 6 criteria: Ridge's L2
penalty shrinks coefficients towards but **never to** zero, does no
variable selection, shares weight among correlated predictors, suits
**many** predictors each mattering **a little**, and has a closed form.
Lasso's L1 penalty sets **some coefficients exactly to zero**, performs
**automatic** variable selection, picks one of a correlated group and
drops the rest, suits **few** predictors each mattering **a lot**, and is
solved numerically. **Mandatory note**: always standardise the features
before fitting — both penalties depend on coefficient magnitude, which
depends on each predictor's units, so without standardising the penalty
is applied **unfairly**.</span>

### Tham số điều chỉnh λ - <span class="en">The tuning parameter λ</span>

Slide 102: λ điều khiển **cường độ của số hạng phạt**.

- λ = 0 ⇒ Ridge và Lasso **trùng với** hồi quy bình phương tối thiểu.
- λ → ∞ ⇒ **mọi tham số độ dốc tiến về 0**.
- Do đó hình phạt lý tưởng nằm **đâu đó giữa 0 và ∞**.

**Cách chọn λ trong thực tế** (mới): **đừng chọn bằng mắt** — khớp mô hình
trên một **lưới** các giá trị λ rồi chọn giá trị có **sai số kiểm định
chéo thấp nhất**. Trong `scikit-learn` việc này được làm tự động bởi
`RidgeCV` và `LassoCV`. Lưu ý cú pháp: **`scikit-learn` gọi tham số này
là `alpha`, không phải λ**.
<br><span class="en">Slide 102: λ controls the penalty's strength — at
λ = 0 Ridge and Lasso **equal** least squares; as λ → ∞ **all slopes tend
to 0**; so the ideal penalty lies **between 0 and ∞**. **How to choose λ
in practice** (new): **do not choose by eye** — fit over a **grid** of λ
values and pick the **lowest cross-validated error**; `RidgeCV` and
`LassoCV` do this automatically. Syntax note: **`scikit-learn` calls the
parameter `alpha`, not λ**.</span>

### Trong Python - <span class="en">In Python</span>

Ví dụ 7.1 (slide 104-105) dùng `Regression.csv` (biến phụ thuộc là cột
`y`, 4 biến giải thích `x1`-`x4`):

- `LinearRegression()` — mốc so sánh;
- `Ridge(alpha=10)`;
- `Lasso(alpha=0.01)`;
- `ElasticNet(alpha=0.1, l1_ratio=0.5)` — trong đó **`l1_ratio` đóng vai
  trò α** trong công thức Elastic Net, còn **`alpha` đóng vai trò λ** (một
  điểm dễ nhầm trong cú pháp).

Cuối cùng in R² trên tập kiểm tra của cả 4 mô hình để so sánh trực tiếp.
Mục 7.5 (slide 106-107) nhắc lại MAE, MSE, MAPE, RMSE kèm hàm tương ứng
(`mean_absolute_error`, `mean_squared_error`) và ghi chú **"so sánh cùng
hệ quy chiếu"**: luôn tính trên **tập kiểm tra**, và luôn so mô hình có
điều chuẩn với **mốc OLS thuần** — nếu Ridge và Lasso không thắng OLS
ngoài mẫu thì độ phức tạp tăng thêm là **không đáng**.
<br><span class="en">Example 7.1 (slides 104-105) uses `Regression.csv`
(dependent variable `y`, explanatory `x1`-`x4`) to fit
`LinearRegression()` (the baseline), `Ridge(alpha=10)`,
`Lasso(alpha=0.01)` and `ElasticNet(alpha=0.1, l1_ratio=0.5)` — where
**`l1_ratio` plays the role of α** in the formula and **`alpha` plays the
role of λ**, an easy syntax confusion. All four test-set R² values are
printed side by side. Section 7.5 (slides 106-107) restates MAE, MSE,
MAPE and RMSE with their functions plus the **"compare like with like"**
note: always compute on the **test set**, and always against the **plain
OLS baseline** — if Ridge and Lasso don't beat OLS out of sample, the
extra complexity is **not justified**.</span>

### Bài tập nhóm 3 - <span class="en">Teamwork 3</span>

Slide 108, làm theo cặp, dùng file `Income.csv` với `income` là biến phụ
thuộc: nạp dữ liệu; tạo mảng cho biến đầu vào và đầu ra; tính thống kê mô
tả; **vẽ đồ thị hệ số theo tham số điều chỉnh (đường đi của hệ số)**; tạo
tập huấn luyện và tập kiểm tra; xây dựng, dự đoán và đánh giá hồi quy
Ridge và Lasso; **báo cáo MAE, RMSE và R² trên tập kiểm tra, và nêu rõ
Lasso đã loại bỏ những biến nào**. Yêu cầu tạo một sổ tay Python với
**mỗi ô là một nhiệm vụ**.
<br><span class="en">Slide 108, in pairs, using `Income.csv` with income
as the dependent variable: load; create arrays for inputs and output;
compute descriptive statistics; **plot the coefficient path against the
tuning parameter**; create train and test sets; build, predict and
evaluate Ridge and Lasso; **report MAE, RMSE and R² on the test set, and
state which variables the Lasso eliminated**. One notebook cell per
task.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 94-108 (toàn bộ Phần 7),
110 (bảng tổng kết: Ridge và Lasso đều là bài toán hồi quy, siêu tham số
là λ, **đều cần chuẩn hóa**; điểm mạnh của Ridge là xử lý đa cộng tuyến,
của Lasso là tự động chọn biến), 111 (câu hỏi ôn tập số 5: 400 biến dự
báo và 120 quan sát — chọn Ridge hay Lasso?).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slides
94-108 (all of Section 7), 110 (summary table: both are regression, both
tuned by λ, both **need scaling**; Ridge handles multicollinearity, Lasso
does automatic variable selection), 111 (review question 5: 400
predictors and 120 observations — Ridge or Lasso?).</span>

## Liên quan - <span class="en">Related</span>

- [[linear-regression-k32]] — mô hình nền mà điều chuẩn thêm hình phạt
  vào; OLS cũng là mốc so sánh bắt buộc.
  <br><span class="en">[[linear-regression-k32]] — the base model the
  penalty is added to; OLS is also the mandatory baseline.</span>
- [[overfitting-underfitting-k32]] — vấn đề mà điều chuẩn ra đời để giải;
  điều chuẩn là cách **cố ý** dịch mô hình sang trái trên trục độ phức
  tạp.
  <br><span class="en">[[overfitting-underfitting-k32]] — the problem
  regularization exists to solve; it **deliberately** moves the model
  left on the complexity axis.</span>
- [[train-test-split-and-cross-validation]] — cơ chế chọn λ.
  <br><span class="en">[[train-test-split-and-cross-validation]] — the
  mechanism for choosing λ.</span>
- [[model-evaluation-metrics-k32]] — bộ chỉ số dùng ở mục 7.5 để so sánh
  các mô hình.
  <br><span class="en">[[model-evaluation-metrics-k32]] — the metric set
  used in Section 7.5 to compare the models.</span>
- [[k-nearest-neighbors-k32]] — thuật toán còn lại trong chương **bắt
  buộc chuẩn hóa**, và vì cùng một lý do: kết quả phụ thuộc độ lớn tuyệt
  đối của các con số.
  <br><span class="en">[[k-nearest-neighbors-k32]] — the chapter's other
  algorithm that **requires standardisation**, for the same reason: the
  result depends on the absolute size of the numbers.</span>

## Lưu ý - <span class="en">Notes</span>

Bài tập nhóm 3 yêu cầu file `Income.csv`, nhưng **file này không có trong
`raw/`**. Trong thư mục Chapter03 chỉ có `TeleCustomers.csv` là chứa cột
`income` (cùng 7 biến giải thích: `region`, `tenure`, `age`, `marital`,
`address`, `ed`, `employ`) — nhiều khả năng là file thay thế, hoặc
`Income.csv` sẽ được phát sau. Bài tập vẫn làm được trọn vẹn trên
`TeleCustomers.csv`.

Ngoài ra, đồ thị đường đi của hệ số (slide 103) và minh họa Lasso vs Ridge
(slide 101) chỉ có hình, không trích xuất được văn bản.
<br><span class="en">Teamwork 3 asks for `Income.csv`, but **that file is
not in `raw/`**. The Chapter03 folder only has `TeleCustomers.csv` with
an `income` column (plus 7 explanatory variables) — most likely the
substitute, or `Income.csv` will be released later. The exercise can be
done in full on `TeleCustomers.csv`. Also, the coefficient path (slide
103) and the Lasso vs Ridge illustration (slide 101) are image-only.</span>
