---
type: concept
title: "Model Evaluation Metrics"
tags: [chapter-3, chapter-5, k31, machine-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Model evaluation metrics measure how far predicted
values are from actual values (for regression problems), combined with
cross-validation to check whether a model generalizes well to unseen
data.

## Explanation

- **3 main metrics for regression problems**:
  - **Mean Absolute Error (MAE)** = average of
    |Actual − Predicted|.
  - **Mean Squared Error (MSE)** = sum of (Actual −
    Predicted)².
  - **Root Mean Squared Error (RMSE)** = square root
    of MSE.
  - Other metrics (not detailed in the slide): RSE,
    RAE, Normalized RMSE (Norm RMSEP), Relative RMSE (RRMSEP).
  - **Mean Absolute Percentage Error (MAPE)** —
    added in Chapter 5: (1/n)Σ|Yᵢ−Ŷᵢ|/|Yᵢ| × 100. Unlike MAE/MSE/RMSE,
    MAPE is a **relative** metric (in %), so it's comparable across
    problems with different scales — something MAE/MSE/RMSE (absolute
    metrics) can't do.
- **Cross-validation**: the technique for testing
  model effectiveness by splitting data into a training set and a testing
  set. 2 common methods: **Leave-one-out** (train on N−1 observations,
  test on 1) and **K-folds** (split data into K parts).

## Appears in

- [[chapter03-machine-learning-knn]] — the 3
  MAE/MSE/RMSE metrics, cross-validation (leave-one-out, K-folds); reused
  identically for evaluating KNN Regression (slide 39).
- [[chapter05-ridge-lasso]] — adds MAPE (new,
  absent from Chapter 3) to the regression evaluation metric set.

## Related concepts

- [[overfitting-underfitting]] — cross-validation is
  the main tool for detecting overfitting.
- [[k-nearest-neighbors]] — uses these metrics when
  KNN is applied to a regression problem.
