---
type: concept
title: "Regularization: Ridge, Lasso and Elastic Net (K32)"
tags: [chapter-3, k32, regularization, ridge, lasso, elastic-net, regression]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

Regularization in regression imposes **a penalty for
each parameter** included in the model. In regularized regression the
**magnitude of the coefficients** — not just of the error term — is
penalised, discouraging complex models and thereby avoiding overfitting.
The chapter teaches three forms: **Ridge** (L2 penalty), **Lasso** (L1
penalty) and **Elastic Net** (both combined — new in the 2026
cohort).

## Explanation

### The problem being solved

Slide 94: an overfit regression model has **too many
parameters for the number of observations**, which can make the
coefficients, p-values and R² **misleading**. Regularization is a useful
way to handle it.

### The three loss functions

Slide 97, với λ là tham số điều chỉnh:

| Model | Loss to minimise |
|---|---|
| OLS | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² |
| Ridge | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼβⱼ²** |
| Lasso | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼ\|βⱼ\|** |

**Ghi chú quan trọng**: hệ số chặn β₀ **không bao giờ bị phạt**.

Slide 97 gives OLS, Ridge (+λΣβⱼ²) and Lasso
(+λΣ|βⱼ|), with λ the tuning parameter — and the intercept β₀ is **never
penalised**. **Elastic Net** (slide 98, **new**) combines both penalties
with **α = 1 giving Lasso and α = 0 giving Ridge**; it is useful when
predictors are strongly correlated, where Lasso alone picks one
arbitrarily and drops the rest while Elastic Net keeps the group.

### Ridge's closed form

Slide 98 (**new**): β̂_ridge = (X'X + λI)⁻¹X'y.
Adding λI makes the matrix **invertible even when X'X is singular** —
which is exactly why Ridge handles **multicollinearity** and the
**k > n** case. Lasso has **no closed form** and is solved
numerically.

### Why Lasso sets coefficients exactly to zero

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

### Ridge vs Lasso

Slide 100 — 6 tiêu chí:

| Criterion | Ridge (L2) | Lasso (L1) |
|---|---|---|
| Penalty | λΣβⱼ² | λΣ\|βⱼ\| |
| Coefficients | Shrink towards 0, **never exactly 0** | **Some driven exactly to 0** |
| Variable selection | No | **Yes, automatic** |
| Correlated predictors | Shares weight across the group | Picks one, drops the rest |
| Best suited when | **Many** predictors, each mattering **a little** | **Few** predictors, each mattering **a lot** |
| Solution | Closed form | Numerical |

Slide 100 compares the two on 6 criteria: Ridge's L2
penalty shrinks coefficients towards but **never to** zero, does no
variable selection, shares weight among correlated predictors, suits
**many** predictors each mattering **a little**, and has a closed form.
Lasso's L1 penalty sets **some coefficients exactly to zero**, performs
**automatic** variable selection, picks one of a correlated group and
drops the rest, suits **few** predictors each mattering **a lot**, and is
solved numerically. **Mandatory note**: always standardise the features
before fitting — both penalties depend on coefficient magnitude, which
depends on each predictor's units, so without standardising the penalty
is applied **unfairly**.

### The tuning parameter λ

Slide 102: λ điều khiển **cường độ của số hạng phạt**.

- λ = 0 ⇒ Ridge và Lasso **trùng với** hồi quy bình phương tối thiểu.
- λ → ∞ ⇒ **mọi tham số độ dốc tiến về 0**.
- Do đó hình phạt lý tưởng nằm **đâu đó giữa 0 và ∞**.

Slide 102: λ controls the penalty's strength — at
λ = 0 Ridge and Lasso **equal** least squares; as λ → ∞ **all slopes tend
to 0**; so the ideal penalty lies **between 0 and ∞**. **How to choose λ
in practice** (new): **do not choose by eye** — fit over a **grid** of λ
values and pick the **lowest cross-validated error**; `RidgeCV` and
`LassoCV` do this automatically. Syntax note: **`scikit-learn` calls the
parameter `alpha`, not λ**.

### In Python

Ví dụ 7.1 (slide 104-105) dùng `Regression.csv` (biến phụ thuộc là cột
`y`, 4 biến giải thích `x1`-`x4`):

- `LinearRegression()` — mốc so sánh;
- `Ridge(alpha=10)`;
- `Lasso(alpha=0.01)`;
- `ElasticNet(alpha=0.1, l1_ratio=0.5)` — trong đó **`l1_ratio` đóng vai
  trò α** trong công thức Elastic Net, còn **`alpha` đóng vai trò λ** (một
  điểm dễ nhầm trong cú pháp).

Example 7.1 (slides 104-105) uses `Regression.csv`
(dependent variable `y`, explanatory `x1`-`x4`) to fit
`LinearRegression()` (the baseline), `Ridge(alpha=10)`,
`Lasso(alpha=0.01)` and `ElasticNet(alpha=0.1, l1_ratio=0.5)` — where
**`l1_ratio` plays the role of α** in the formula and **`alpha` plays the
role of λ**, an easy syntax confusion. All four test-set R² values are
printed side by side. Section 7.5 (slides 106-107) restates MAE, MSE,
MAPE and RMSE with their functions plus the **"compare like with like"**
note: always compute on the **test set**, and always against the **plain
OLS baseline** — if Ridge and Lasso don't beat OLS out of sample, the
extra complexity is **not justified**.

### Teamwork 3

Slide 108, in pairs, using `Income.csv` with income
as the dependent variable: load; create arrays for inputs and output;
compute descriptive statistics; **plot the coefficient path against the
tuning parameter**; create train and test sets; build, predict and
evaluate Ridge and Lasso; **report MAE, RMSE and R² on the test set, and
state which variables the Lasso eliminated**. One notebook cell per
task.

## Appears in

[[chapter03-supervised-learning-k32]] — slides
94-108 (all of Section 7), 110 (summary table: both are regression, both
tuned by λ, both **need scaling**; Ridge handles multicollinearity, Lasso
does automatic variable selection), 111 (review question 5: 400
predictors and 120 observations — Ridge or Lasso?).

## Related

- [[linear-regression-k32]] — the base model the
  penalty is added to; OLS is also the mandatory baseline.
- [[overfitting-underfitting-k32]] — the problem
  regularization exists to solve; it **deliberately** moves the model
  left on the complexity axis.
- [[train-test-split-and-cross-validation]] — the
  mechanism for choosing λ.
- [[model-evaluation-metrics-k32]] — the metric set
  used in Section 7.5 to compare the models.
- [[k-nearest-neighbors-k32]] — the chapter's other
  algorithm that **requires standardisation**, for the same reason: the
  result depends on the absolute size of the numbers.

## Notes

Bài tập nhóm 3 yêu cầu file `Income.csv`, nhưng **file này không có trong
`raw/`**. Trong thư mục Chapter03 chỉ có `TeleCustomers.csv` là chứa cột
`income` (cùng 7 biến giải thích: `region`, `tenure`, `age`, `marital`,
`address`, `ed`, `employ`) — nhiều khả năng là file thay thế, hoặc
`Income.csv` sẽ được phát sau. Bài tập vẫn làm được trọn vẹn trên
`TeleCustomers.csv`.

Teamwork 3 asks for `Income.csv`, but **that file is
not in `raw/`**. The Chapter03 folder only has `TeleCustomers.csv` with
an `income` column (plus 7 explanatory variables) — most likely the
substitute, or `Income.csv` will be released later. The exercise can be
done in full on `TeleCustomers.csv`. Also, the coefficient path (slide
103) and the Lasso vs Ridge illustration (slide 101) are image-only.
