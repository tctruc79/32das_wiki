---
type: concept
title: "Regularization: Ridge, Lasso and Elastic Net (K32)"
tags: [chapter-3, k32, regularization, ridge, lasso, elastic-net, regression]
created: 2026-08-28
updated: 2026-09-05
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

An overfit regression model typically has **too
many parameters for the number of observations available** to estimate
reliably — coefficients, p-values, and even R² can all become
**misleading**: the model looks like it fits very well on training data,
but those numbers don't reflect the true relationship. Regularization is
the most direct way to address this at the source, by changing the loss
function the model minimises.

### The three loss functions

With λ as the parameter tuning the penalty's
strength:

| Mô hình | Hàm mất mát cần tối thiểu hóa |
|---|---|
| OLS | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² |
| Ridge | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼβⱼ²** |
| Lasso | Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² **+ λΣⱼ\|βⱼ\|** |

**Important note**: the intercept β₀ is **never
penalised**.

The OLS, Ridge (+λΣβⱼ²) and Lasso (+λΣ|βⱼ|) losses
share the same residual sum of squares, with λ the tuning parameter, and
the intercept β₀ is **never penalised**. Elastic Net combines both
penalties in one loss, with **α = 1 giving exactly Lasso and α = 0
giving exactly Ridge** — the other two are simply special cases of
Elastic Net. It is especially useful when predictors are strongly
correlated, where Lasso alone tends to arbitrarily pick one variable
from the group and drop the rest (an unstable behaviour when variables
measure nearly the same thing), while Elastic Net keeps the whole group
with shared weight.

### Ridge's closed form

Ridge has a notable mathematical advantage Lasso
lacks: the closed form β̂_ridge = (X'X + λI)⁻¹X'y. Adding λI makes the
matrix **invertible even when X'X is singular** — exactly why Ridge
handles **multicollinearity** and the **k > n** case, where X'X is
guaranteed non-invertible. Lasso has **no closed form**, since its loss
contains an absolute value non-differentiable at 0, and must be solved
numerically.

### Why Lasso sets coefficients exactly to zero

This seemingly technical question has a very
intuitive **geometric** explanation, and is the most worth-memorising
part of the section.

Both methods minimise the residual sum of squares
subject to a **budget on the coefficients**, and the budget's **shape**
is what actually decides the outcome:

- Ridge's budget is a **circle**: β₁² + β₂² ≤ t —
  no corners, so the RSS contours touch it at an arbitrary point on the
  circle ⇒ coefficients **shrink towards zero but never reach it**.
- Lasso's budget is a **diamond**: |β₁| + |β₂| ≤ t
  — with **corners sitting right on the axes**. The RSS contours usually
  touch the diamond **at a corner**, and touching at a corner means
  **one coefficient is exactly zero**.

### Ridge vs Lasso

Summarising every difference between the two
methods across 6 criteria:

| Tiêu chí | Ridge (L2) | Lasso (L1) |
|---|---|---|
| Hình phạt | λΣβⱼ² | λΣ\|βⱼ\| |
| Hệ số | Co về gần 0, **không bao giờ đúng bằng 0** | **Một số bị đưa về đúng 0** |
| Chọn biến | Không | **Có, tự động** |
| Biến dự báo tương quan | Chia đều trọng số cho cả nhóm | Chọn 1 biến, bỏ các biến còn lại |
| Hợp nhất khi | **Nhiều** biến dự báo, mỗi biến ảnh hưởng **nhỏ** | **Ít** biến dự báo, mỗi biến ảnh hưởng **lớn** |
| Nghiệm | Dạng hiển (đóng) | Bằng phương pháp số |

Summarising all the differences between the two on 6
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
is applied **unfairly**.

### The tuning parameter λ

λ controls the penalty's **strength**, and its two
extremes show the role clearly: at λ = 0, Ridge and Lasso **exactly
match** plain least squares (the penalty vanishes); as λ → ∞, **all
slope parameters are forced to 0** (only the intercept remains). The
ideal penalty therefore lies **somewhere between these two extremes** —
and should **never be chosen by eye or by intuition**: the correct
approach is to fit over a **grid** of λ values and pick the one with the
**lowest cross-validated error**, the same hyperparameter-selection
principle learned in model evaluation. In `scikit-learn` this is
automated by `RidgeCV` and `LassoCV`. One easy syntax confusion:
**`scikit-learn` calls this parameter `alpha`, not λ**.

### In Python

A full worked example, using `Regression.csv`
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
sample, their added complexity is **not justified**.

### Teamwork 3

In pairs, using `Income.csv` with income
as the dependent variable: load; create arrays for inputs and output;
compute descriptive statistics; **plot the coefficient path against the
tuning parameter**; create train and test sets; build, predict and
evaluate Ridge and Lasso; **report MAE, RMSE and R² on the test set, and
state which variables the Lasso eliminated**. One notebook cell per
task.

## Worked example — 400 predictors, 120 observations: which to pick?

This is the instructor's review question 5, and it
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
feature carries some information).

**Practical conclusion**: choose **Lasso** (or
Elastic Net if the predictors are suspected to be strongly correlated,
to avoid Lasso arbitrarily dropping members of a correlated group) —
because the real goal here is not just prediction, but **reducing 400
variables to a small, interpretable set**, precisely the one strength
Ridge lacks.

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

Teamwork 3 asks for `Income.csv`, but **that file is
not in `raw/`**. The Chapter03 folder only has `TeleCustomers.csv` with
an `income` column (plus 7 explanatory variables) — most likely the
substitute, or `Income.csv` will be released later. The exercise can be
done in full on `TeleCustomers.csv`.

Also, the coefficient path (slide
103) and the Lasso vs Ridge illustration (slide 101) are image-only.
