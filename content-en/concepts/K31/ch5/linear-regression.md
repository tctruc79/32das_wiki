---
type: concept
title: "Linear Regression"
tags: [chapter-5, k31, machine-learning, regression]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Regression is the problem of learning the
relationship between input variables and a quantitative output; linear
regression assumes that relationship is linear: y = β₀ + β₁x₁ + ... +
βₖxₖ + u.

## Explanation

- **2 uses of the model**: **classical statistics**
  — describe relationships between variables; **machine learning** —
  predict future outputs. Same math, different usage goals.
- **4 ways to learn parameters** from training data:
  **OLS** (most common), **LAD**, **MLE**, **MM**.
- **Special cases**: **polynomial regression** —
  adds powers of x (x², x³...) to capture nonlinear relationships within
  a model that's linear in parameters. **Dummy variables** — how to bring
  a qualitative input into the model: a 2-valued variable → 1 dummy; an
  m-valued variable → m−1 dummies.
- **Overfitting in regression**: happens when a
  model has too many parameters relative to observations — makes
  coefficients, p-values, R-squared misleading. See
  [[regularization-ridge-lasso]] for how to handle it.

## Appears in

- [[chapter05-ridge-lasso]] — regression definition,
  4 parameter-learning methods, polynomial, dummy variables.

## Related concepts

- [[regularization-ridge-lasso]] — the solution to
  linear regression's overfitting problem when there are too many
  parameters.
- [[machine-learning-overview]] — Regression is one
  of the 2 main supervised learning branches, alongside
  [[classification]].
