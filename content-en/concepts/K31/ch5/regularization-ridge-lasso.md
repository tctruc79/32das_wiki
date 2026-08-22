---
type: concept
title: "Regularization: Ridge and Lasso"
tags: [chapter-5, chapter-7, k31, machine-learning, regression, regularization]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Regularization adds a penalty term to a regression's
loss function to control coefficient magnitude, helping avoid
overfitting. Ridge penalizes the sum of squared coefficients (L2 norm),
Lasso penalizes the sum of absolute coefficients (L1 norm).

## Explanation

- **Loss formulas**:
  - **The role of λ (tuning parameter)**: controls the
  penalty's strength. λ = 0 → Ridge/Lasso equals ordinary OLS; λ = ∞ → all
  parameters tend to 0. The ideal penalty lies between these extremes —
  no closed form, needs experimentation (cross-validation, see
  [[model-evaluation-metrics]]).
- **Ridge vs Lasso**: both shrink coefficient
  magnitude, but via different mechanisms — the L2 norm (Ridge) shrinks
  coefficients toward but rarely exactly 0; the L1 norm (Lasso) can push
  coefficients exactly to 0, so Lasso can act as variable selection
  (dropping some variables entirely) while Ridge cannot (the slide only
  presents the formulas, without proving this property in depth).
- Python code (`sklearn.linear_model`):
  `Ridge(alpha=0.01)` and `Lasso(alpha=0.01)` — sklearn's `alpha`
  parameter corresponds to λ in the loss formula.

## Appears in

- [[chapter05-ridge-lasso]] — definition, loss
  formulas, the role of λ, Python code.
- [[chapter07-pca]] — section 7.4 relates Ridge/
  Lasso to Principal Component Regression (PCR) as 2 different solutions
  to the same multicollinearity problem.

## Related concepts

- [[linear-regression]] — regularization is the
  solution to linear regression's overfitting problem.
- [[overfitting-underfitting]] — the same root
  problem, a different handling mechanism than KNN (choosing K) and
  Random Forest (tree ensembling).
