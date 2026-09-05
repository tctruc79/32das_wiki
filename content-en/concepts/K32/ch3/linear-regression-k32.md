---
type: concept
title: "Linear Regression (K32)"
tags: [chapter-3, k32, regression, ols, supervised-learning]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

In machine learning, regression is the problem of
learning the relationship between input variables (qualitative or
quantitative) x = [x₁,…,x_p] and a **quantitative** output y:

y = f(x₁, x₂, …, x_p) + u

where u is the noise/error term describing
everything the model cannot capture. **Linear** regression is the case
where f takes the form y = β₀ + β₁x₁ + … + β_k x_k, with β₀,…,β_k the
parameters to be learned from the training data.

## Explanation

### The same frame as classification

The most important thing to grasp before learning
any regression formula: regression uses **exactly the same frame** as
classification — **only the type of y changes**, from category to
number. Everything already learned in the model-evaluation section —
train/test splitting, cross-validation, diagnosing over/underfitting —
**applies unchanged**, with nothing to relearn from scratch. This is
exactly why this chapter merges classification and regression into a
single narrative rather than splitting them into separate chapters: they
are not two independent topics, but two applications of one shared
methodology.

### Two different purposes for one model

The same linear regression model can serve 2 quite
different purposes:

- **Classical statistics** — describing
  relationships: interpreting coefficients, hypothesis testing.
- **Machine learning** — predicting future outputs:
  **out-of-sample** accuracy.

This distinction **matters** because a model can be
excellent for explanation and mediocre for prediction, and vice versa —
two entirely different criteria for "good". Regularization (Section 7)
best illustrates the consequence: it **deliberately trades a little
unbiasedness for more predictive accuracy** — a trade-off that only
makes sense if the goal is genuinely prediction, and is meaningless if
the goal is objectively interpreting coefficients. This is also the
statsmodels vs `scikit-learn` distinction encountered in Chapter 2 K32,
now given firmer theoretical grounding.

### Two steps

Fitting a linear regression model, whatever
estimation method is used, always passes through exactly 2 steps:
**learning the parameters** β₀,…,β_k from the training set via OLS
(the most common), LAD, MLE, or MM; then **predicting** for new data:
ŷ = β̂₀ + β̂₁x₁* + … + β̂_k x_k*.

### Two special cases

The basic linear model extends in 2 notable
directions: **polynomial regression**, y = β₀ + β₁x + … + β_p x^p + u,
is still called "linear" because it is **linear in the parameters**
though nonlinear in the variable x — and raising the degree p is the
classic route from underfitting to overfitting, the same trade-off
learned in model evaluation. The second direction is handling
**qualitative inputs** via **dummy variables**: a variable with 2
possible values gets exactly **1** dummy; one with m values gets
**m − 1** dummies (not m) — this minus-one rule exists precisely to
avoid the **dummy variable trap** (perfect collinearity between the
dummies and the intercept).

### In Python

In practice, `LinearRegression()` from
`sklearn.linear_model`, fitted with `lr.fit(X_train, y_train)` and
scored with `lr.score(X_test, y_test)` (test-set R²), serves as the
mandatory **baseline** for every regularized model in Section 7: if
Ridge or Lasso doesn't beat plain OLS out of sample, their added
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
