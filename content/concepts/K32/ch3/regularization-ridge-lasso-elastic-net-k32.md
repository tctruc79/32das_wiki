---
type: concept
title: "Điều chuẩn: Ridge, Lasso và Elastic Net (K32)"
title_en: "Regularization: Ridge, Lasso and Elastic Net (K32)"
tags: [chapter-3, k32, regularization, ridge, lasso, elastic-net, regression]
created: 2026-08-28
updated: 2026-09-05
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

Một mô hình hồi quy quá khớp thường có **quá nhiều tham số so với số
quan sát sẵn có** để ước lượng đáng tin cậy — hệ quả là các hệ số hồi
quy, giá trị p và cả R² đều có thể trở nên **gây hiểu lầm**: mô hình
trông như khớp rất tốt trên dữ liệu huấn luyện, nhưng các con số đó
không phản ánh đúng quan hệ thật. Điều chuẩn là cách hữu ích và trực
tiếp nhất để xử lý vấn đề này ngay từ gốc, bằng cách thay đổi chính hàm
mất mát mà mô hình tối thiểu hóa.
<br><span class="en">An overfit regression model typically has **too
many parameters for the number of observations available** to estimate
reliably — coefficients, p-values, and even R² can all become
**misleading**: the model looks like it fits very well on training data,
but those numbers don't reflect the true relationship. Regularization is
the most direct way to address this at the source, by changing the loss
function the model minimises.</span>

### Ba hàm mất mát - <span class="en">The three loss functions</span>

Với λ là tham số điều chỉnh cường độ hình phạt:
<br><span class="en">With λ as the parameter tuning the penalty's
strength:</span>

| Mô hình | Hàm mất mát cần tối thiểu hóa |
|---|---|
| OLS | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² |
| Ridge | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼβⱼ²** |
| Lasso | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼ\|βⱼ\|** |

**Ghi chú quan trọng**: hệ số chặn β₀ **không bao giờ bị phạt**.
<br><span class="en">**Important note**: the intercept β₀ is **never
penalised**.</span>

Elastic Net kết hợp cả hai hình phạt trong cùng một hàm mất mát:
Loss = Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² + λ[ αΣⱼ|βⱼ| + ((1−α)/2)Σⱼβⱼ² ] → min,
trong đó **α = 1 cho ra đúng Lasso; α = 0 cho ra đúng Ridge** — 2 mô
hình kia thực chất chỉ là 2 trường hợp riêng của Elastic Net. Elastic
Net đặc biệt hữu ích khi các biến dự báo **tương quan mạnh** với nhau:
Lasso đơn thuần có xu hướng chọn **tùy tiện 1 biến** trong nhóm tương
quan rồi bỏ hết phần còn lại (một hành vi bất ổn khi các biến gần như
đo cùng một thứ), trong khi Elastic Net **giữ nguyên cả nhóm** lại với
trọng số san sẻ đều.
<br><span class="en">The OLS, Ridge (+λΣβⱼ²) and Lasso (+λΣ|βⱼ|) losses
share the same residual sum of squares, with λ the tuning parameter, and
the intercept β₀ is **never penalised**. Elastic Net combines both
penalties in one loss, with **α = 1 giving exactly Lasso and α = 0
giving exactly Ridge** — the other two are simply special cases of
Elastic Net. It is especially useful when predictors are strongly
correlated, where Lasso alone tends to arbitrarily pick one variable
from the group and drop the rest (an unstable behaviour when variables
measure nearly the same thing), while Elastic Net keeps the whole group
with shared weight.</span>

### Nghiệm hiển của Ridge - <span class="en">Ridge's closed form</span>

Ridge có một lợi thế toán học đáng chú ý mà Lasso không có: nghiệm hiển
β̂_ridge = (X'X + λI)⁻¹X'y. Việc cộng thêm λI làm ma trận **khả nghịch
ngay cả khi X'X suy biến** — đây chính là lý do Ridge xử lý được **đa
cộng tuyến** (khi các biến dự báo tương quan mạnh khiến X'X gần như
suy biến) và cả trường hợp **k > n** (số biến nhiều hơn số quan sát, khi
X'X chắc chắn không khả nghịch). Lasso **không có nghiệm hiển** do hàm
mất mát chứa trị tuyệt đối không khả vi tại 0, nên phải giải bằng
phương pháp số.
<br><span class="en">Ridge has a notable mathematical advantage Lasso
lacks: the closed form β̂_ridge = (X'X + λI)⁻¹X'y. Adding λI makes the
matrix **invertible even when X'X is singular** — exactly why Ridge
handles **multicollinearity** and the **k > n** case, where X'X is
guaranteed non-invertible. Lasso has **no closed form**, since its loss
contains an absolute value non-differentiable at 0, and must be solved
numerically.</span>

### Vì sao Lasso đưa hệ số về đúng 0 - <span class="en">Why Lasso sets coefficients exactly to zero</span>

Câu hỏi tưởng như kỹ thuật này có một lời giải thích **hình học** rất
trực quan, và là phần đáng nhớ nhất của cả mục.
<br><span class="en">This seemingly technical question has a very
intuitive **geometric** explanation, and is the most worth-memorising
part of the section.</span>

Cả 2 phương pháp đều tối thiểu hóa tổng bình phương phần dư **với một
ngân sách ràng buộc trên các hệ số**, và **hình dạng của ngân sách đó mới
là điều quyết định**:
<br><span class="en">Both methods minimise the residual sum of squares
subject to a **budget on the coefficients**, and the budget's **shape**
is what actually decides the outcome:</span>

- Ràng buộc Ridge là **hình tròn**: β₁² + β₂² ≤ t — không có góc nhọn,
  nên các đường đồng mức của tổng bình phương phần dư chạm nó ở một điểm
  bất kỳ trên đường tròn ⇒ hệ số **co về gần 0 nhưng không bao giờ chạm
  0**.
  <br><span class="en">Ridge's budget is a **circle**: β₁² + β₂² ≤ t —
  no corners, so the RSS contours touch it at an arbitrary point on the
  circle ⇒ coefficients **shrink towards zero but never reach it**.</span>
- Ràng buộc Lasso là **hình thoi**: |β₁| + |β₂| ≤ t — **có các góc nhọn
  nằm ngay trên trục tọa độ**. Các đường đồng mức thường chạm hình thoi
  **tại một góc**, và chạm tại góc nghĩa là **có một hệ số đúng bằng 0**.
  <br><span class="en">Lasso's budget is a **diamond**: |β₁| + |β₂| ≤ t
  — with **corners sitting right on the axes**. The RSS contours usually
  touch the diamond **at a corner**, and touching at a corner means
  **one coefficient is exactly zero**.</span>

### Bảng so sánh Ridge vs Lasso - <span class="en">Ridge vs Lasso</span>

Tổng hợp lại toàn bộ khác biệt giữa 2 phương pháp trên 6 tiêu chí:
<br><span class="en">Summarising every difference between the two
methods across 6 criteria:</span>

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
<br><span class="en">Summarising all the differences between the two on 6
criteria: Ridge's L2
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

λ điều khiển **cường độ của số hạng phạt**, và 2 điểm cực trị của nó cho
thấy rõ vai trò: khi λ = 0, Ridge và Lasso **trùng khít với** hồi quy
bình phương tối thiểu thuần (hình phạt biến mất); khi λ → ∞, **mọi tham
số độ dốc bị ép tiến về 0** (mô hình chỉ còn hệ số chặn). Hình phạt lý
tưởng do đó nằm **đâu đó giữa 2 thái cực** này — và **không nên chọn
bằng mắt hay bằng kinh nghiệm**: cách làm đúng là khớp mô hình trên một
**lưới** các giá trị λ rồi chọn giá trị có **sai số kiểm định chéo thấp
nhất**, đúng nguyên tắc chọn siêu tham số đã học ở phần đánh giá mô
hình. Trong `scikit-learn`, việc này được tự động hóa bởi `RidgeCV` và
`LassoCV`. Một điểm dễ gây nhầm lẫn khi lập trình: **`scikit-learn` gọi
tham số này là `alpha`, không phải λ**.
<br><span class="en">λ controls the penalty's **strength**, and its two
extremes show the role clearly: at λ = 0, Ridge and Lasso **exactly
match** plain least squares (the penalty vanishes); as λ → ∞, **all
slope parameters are forced to 0** (only the intercept remains). The
ideal penalty therefore lies **somewhere between these two extremes** —
and should **never be chosen by eye or by intuition**: the correct
approach is to fit over a **grid** of λ values and pick the one with the
**lowest cross-validated error**, the same hyperparameter-selection
principle learned in model evaluation. In `scikit-learn` this is
automated by `RidgeCV` and `LassoCV`. One easy syntax confusion:
**`scikit-learn` calls this parameter `alpha`, not λ**.</span>

### Trong Python - <span class="en">In Python</span>

Một ví dụ thực hành đầy đủ, dùng `Regression.csv` (biến phụ thuộc là cột
`y`, 4 biến giải thích `x1`-`x4`), khớp cả 4 mô hình để so sánh trực
tiếp: `LinearRegression()` làm mốc so sánh; `Ridge(alpha=10)`;
`Lasso(alpha=0.01)`; và `ElasticNet(alpha=0.1, l1_ratio=0.5)` — trong đó
**`l1_ratio` đóng vai trò α** trong công thức Elastic Net, còn **`alpha`
đóng vai trò λ** (một điểm rất dễ nhầm trong cú pháp, vì tên tham số
`alpha` được dùng lại với 2 ý nghĩa khác nhau ở `Ridge`/`Lasso` so với
`ElasticNet`). Cuối cùng, in R² trên tập kiểm tra của cả 4 mô hình để so
sánh trực tiếp, cùng với MAE, MSE, MAPE, RMSE qua các hàm tương ứng của
`scikit-learn`. Nguyên tắc "so sánh cùng hệ quy chiếu" cần tuân thủ
nghiêm ngặt: luôn tính mọi chỉ số trên **tập kiểm tra** (không phải tập
huấn luyện), và luôn so mô hình có điều chuẩn với **mốc OLS thuần** —
nếu Ridge và Lasso không thắng được OLS ngoài mẫu, độ phức tạp tăng
thêm của chúng là **không đáng**.
<br><span class="en">A full worked example, using `Regression.csv`
(dependent variable `y`, explanatory `x1`-`x4`), fits all 4 models for
direct comparison: `LinearRegression()` as the baseline, `Ridge(
alpha=10)`, `Lasso(alpha=0.01)`, and `ElasticNet(alpha=0.1,
l1_ratio=0.5)` — where **`l1_ratio` plays the role of α** in the
formula and **`alpha` plays the role of λ**, an easy syntax confusion
since the name `alpha` is reused with 2 different meanings between
`Ridge`/`Lasso` and `ElasticNet`. Finally, print the test-set R² of all
4 models side by side, along with MAE, MSE, MAPE, RMSE via their
`scikit-learn` functions. The "compare like with like" principle must be
followed strictly: always compute every metric on the **test set** (not
the training set), and always compare a regularized model against the
**plain OLS baseline** — if Ridge and Lasso don't beat OLS out of
sample, their added complexity is **not justified**.</span>

### Bài tập nhóm 3 - <span class="en">Teamwork 3</span>

Bài tập nhóm cuối chương, làm theo cặp, dùng file `Income.csv` với
`income` là biến phụ thuộc: nạp dữ liệu; tạo mảng cho biến đầu vào và
đầu ra; tính thống kê mô tả; **vẽ đồ thị hệ số theo tham số điều chỉnh
(đường đi của hệ số)**; tạo tập huấn luyện và tập kiểm tra; xây dựng, dự
đoán và đánh giá hồi quy Ridge và Lasso; **báo cáo MAE, RMSE và R² trên
tập kiểm tra, và nêu rõ
Lasso đã loại bỏ những biến nào**. Yêu cầu tạo một sổ tay Python với
**mỗi ô là một nhiệm vụ**.
<br><span class="en">In pairs, using `Income.csv` with income
as the dependent variable: load; create arrays for inputs and output;
compute descriptive statistics; **plot the coefficient path against the
tuning parameter**; create train and test sets; build, predict and
evaluate Ridge and Lasso; **report MAE, RMSE and R² on the test set, and
state which variables the Lasso eliminated**. One notebook cell per
task.</span>

## Ví dụ có đáp án — 400 biến dự báo, 120 quan sát: chọn gì? - <span class="en">Worked example — 400 predictors, 120 observations: which to pick?</span>

Đây là câu hỏi ôn tập số 5 của giảng viên, và là bài toán ứng dụng trực
tiếp bảng so sánh Ridge vs Lasso ở trên. Với k = 400 biến dự báo và
n = 120 quan sát, ta đang ở tình huống **k ≫ n** — số tham số cần ước
lượng vượt xa số quan sát sẵn có, nên một mô hình OLS thuần thậm chí
không giải được (ma trận X'X không khả nghịch khi k > n). Cả Ridge lẫn
Lasso đều giải quyết được vấn đề khả nghịch này nhờ số hạng phạt, nhưng
câu hỏi thực chất nằm ở **giả định về cấu trúc thật của mô hình**: với
400 biến ứng viên mà chỉ có 120 quan sát để phân biệt, giả định hợp lý
nhất gần như luôn là chỉ một **số nhỏ** trong 400 biến đó thực sự có ảnh
hưởng — phần lớn còn lại là nhiễu hoặc dư thừa. Đây đúng là tình huống
Lasso được thiết kế cho: "ít biến dự báo, mỗi biến ảnh hưởng lớn." Ridge,
ngược lại, giả định ngầm rằng **rất nhiều** biến cùng đóng góp một phần
nhỏ — hợp lý hơn nếu có lý do lý thuyết để tin cả 400 biến đều liên quan
theo cách nào đó (ví dụ dữ liệu gen hoặc ảnh, nơi mọi đặc trưng đều mang
một phần thông tin).
<br><span class="en">This is the instructor's review question 5, and it
directly applies the Ridge-vs-Lasso comparison above. With k = 400
predictors and n = 120 observations, this is a **k ≫ n** situation — far
more parameters than observations, so a plain OLS model cannot even be
solved (X'X is not invertible when k > n). Both Ridge and Lasso fix that
invertibility problem via their penalty term, but the real question is
about the **assumed true structure**: with 400 candidate predictors and
only 120 observations to tell them apart, the more plausible assumption
is almost always that only a **small** subset of the 400 actually
matters — the rest being noise or redundant. That is exactly the setting
Lasso is built for: "few predictors matter a lot." Ridge, by contrast,
implicitly assumes **many** variables each contribute a small amount —
more defensible only when there is a theoretical reason to believe all
400 are relevant in some way (e.g. genomic or image data, where every
feature carries some information).</span>

**Kết luận thực dụng**: chọn **Lasso** (hoặc Elastic Net nếu nghi ngờ các
biến dự báo tương quan mạnh với nhau, để tránh Lasso loại bỏ tùy tiện 1
biến trong một nhóm tương quan) — vì mục tiêu thực chất ở đây không chỉ
là dự đoán tốt, mà còn là **thu gọn 400 biến xuống một tập nhỏ diễn giải
được**, đúng thế mạnh duy nhất Ridge không có.
<br><span class="en">**Practical conclusion**: choose **Lasso** (or
Elastic Net if the predictors are suspected to be strongly correlated,
to avoid Lasso arbitrarily dropping members of a correlated group) —
because the real goal here is not just prediction, but **reducing 400
variables to a small, interpretable set**, precisely the one strength
Ridge lacks.</span>

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
<br><span class="en">Teamwork 3 asks for `Income.csv`, but **that file is
not in `raw/`**. The Chapter03 folder only has `TeleCustomers.csv` with
an `income` column (plus 7 explanatory variables) — most likely the
substitute, or `Income.csv` will be released later. The exercise can be
done in full on `TeleCustomers.csv`.</span>

Ngoài ra, đồ thị đường đi của hệ số (slide 103) và minh họa Lasso vs Ridge
(slide 101) chỉ có hình, không trích xuất được văn bản.
<br><span class="en">Also, the coefficient path (slide
103) and the Lasso vs Ridge illustration (slide 101) are image-only.</span>
