---
type: source
title: "Chapter 5 (K31) — Ridge and Lasso Regression"
tags: [chapter-5, k31, machine-learning, regression, regularization]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter05_Ridge and Lasso.pdf"
---

## Metadata

- **Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 19 (the shortest of the 8
  chapters).
- **Position in the course**: the **Regression**
  branch of supervised learning (the Classification branch already
  covered in Chapters 3-4). Practice data `regression.csv` — **no longer
  in `raw/`** after a recent folder cleanup (only remains at
  `Lecture Notes/Chapter5_Ridge and Lasso regression/Chapter5_Data/
  Regression.csv` outside `raw/`, see CLAUDE.md "Kiến trúc 3 lớp" — not
  ingested).

## Summary

- 3 parts: (1) Regression in supervised learning —
  definition, linear regression, parameter learning, special cases
  (polynomial, dummy variables); (2) the overfitting problem &
  regularization — Ridge/Lasso, loss formulas, the λ parameter's role; (3)
  Python code + forecast evaluation metrics (adds MAPE vs Chapter 3).

## Key content

### 5.1 Regression in supervised learning (slides 3-7)

- **What is regression** (slide 4): in ML,
  regression is the problem of learning the relationship between input
  variables x = [x₁, x₂, ..., xₚ] (qualitative or quantitative) and a
  quantitative output y. Model: y = f(x₁,...,xₚ) + u, where u is a noise/
  error term describing everything the model can't capture. 2 types:
  linear and nonlinear regression.
- **Linear regression** (slide 5): y = β₀ + β₁x₁ +
  β₂x₂ + ... + βₖxₖ + u, with β₀...βₖ as parameters. The problem is
  learning these parameters from training data. Used for 2 different
  purposes: **classical statistics** — describe relationships; **machine
  learning** — predict future outputs.
- **Learning the model from training data** (slide
  6): find parameter values that fit the data well. 4 methods: **OLS**
  (Ordinary Least Squares — most common), **LAD** (Least Absolute
  Deviation), **MLE** (Maximum Likelihood Estimator), **MM** (Method of
  Moments). Then use the trained model to predict for new data: ŷ = β̂₀ +
  β̂₁x₁* + ... + β̂ₖxₖ*.
- **Special cases** (slide 7): **polynomial
  regression** — y = β₀ + β₁x + β₂x² + ... + βₚxᵖ + u. **Qualitative
  input variables** — use dummy variables: if a variable has only 2
  values, create 1 dummy variable; if it has m values, create m−1 dummy
  variables.

### 5.2 The problem of overfitting and regularization (slides 8-14)

- **Overfitting in regression** (slide 8): overfit
  regression models have too many parameters for the number of
  observations. An overfit model can cause the regression coefficients,
  p-values, and R-squared to be misleading. A useful approach to handle
  overfitting is **regularization**.
- **Regularization** (slide 10): a way to give a
  penalty for each parameter in the model. In regularized regression, the
  magnitude of coefficients and of the error term are both penalized.
  Complex models are discouraged, helping avoid overfitting. The 2 most
  common types: **Ridge regression** and **Lasso regression**.
- **Loss formulas** (slide 11): **OLS**: Loss =
  Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² → min. **Ridge**: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² +
  λΣβⱼ² → min (penalizes the **sum of squared** coefficients — L2 norm).
  **Lasso**: Loss = Σ(yᵢ − β₀ − Σβⱼxⱼᵢ)² + λΣ|βⱼ| → min (penalizes the
  **sum of absolute** coefficients — L1 norm). λ is the tuning
  parameter.
- **The role of λ** (slide 13): the tuning parameter
  controls the strength of the penalty. When λ = 0, Ridge/Lasso equals
  ordinary least squares; when λ = ∞, all parameters tend to 0. The ideal
  penalty lies somewhere between 0 and ∞. The slide gives no closed-form
  for the optimal λ — needs experimentation (see
  [[model-evaluation-metrics]]).

### 5.3 Python code for Ridge and Lasso (slides 15-18)

- **Sample code** (slide 15): linear regression —
  `from sklearn.linear_model import LinearRegression; lr =
  LinearRegression(); lr.fit(X_train, y_train)`. Ridge —
  `from sklearn.linear_model import Ridge; ridge = Ridge(alpha=0.01);
  ridge.fit(X_train, y_train)`. Lasso —
  `from sklearn.linear_model import Lasso; lasso = Lasso(alpha=0.01);
  lasso.fit(X_train, y_train)`.
- **Evaluating forecast accuracy** (slides 16-17):
  MAE and MSE (same definitions as Chapter 3, with
  `sklearn.metrics.mean_absolute_error`/`mean_squared_error` code).
  **New in this chapter**: **Mean Absolute Percentage Error (MAPE)** =
  (1/n)Σ|uᵢ|/|Yᵢ| × 100 = (1/n)Σ|Yᵢ−Ŷᵢ|/|Yᵢ| × 100. **RMSE** =
  √MSE.
- **Teamwork 3** (slide 18, in pairs): using
  `regression.csv` (x₁-x₄ inputs, y output) — load the data; create
  arrays for inputs/output; descriptive statistics for independent/
  dependent variables; plot coefficients vs the tuning parameter; create
  training/test datasets; build, predict, evaluate Ridge and Lasso
  regression. Create a Python markdown, one cell per task.

## Links

- [[linear-regression]] — the regression concept
  page, OLS/LAD/MLE/MM, polynomial regression, dummy variables.
- [[regularization-ridge-lasso]] — the Ridge/Lasso
  concept page.
- [[overfitting-underfitting]] — the root problem
  regularization solves, continuing directly from how KNN/Decision Tree
  handled overfitting.
- [[model-evaluation-metrics]] — adds MAPE to the
  metric set from Chapter 3.
- [[machine-learning-overview]] — Regression is the
  2nd branch of supervised learning, completing the picture alongside
  Classification.
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter05_Ridge and Lasso.pdf`, slides 1-19.
