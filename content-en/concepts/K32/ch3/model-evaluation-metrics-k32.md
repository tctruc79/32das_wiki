---
type: concept
title: "Model Evaluation Metrics (K32)"
tags: [chapter-3, k32, model-evaluation, metrics]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

The metrics used to score a learned model, split in
two by the target's type: **regression metrics** (y is a number — MAE,
MSE, RMSE, MAPE, R²) and **classification metrics** (y is a category —
accuracy, precision, recall, F1, ROC-AUC). The 2026 version is the first
in this course to give **both sets** together, with guidance on *which
metric when* — the 2025 version had only the first three regression
metrics.

## Explanation

### Regression metrics

Với n quan sát, giá trị thực yᵢ, giá trị dự đoán ŷᵢ và sai số
uᵢ = yᵢ − ŷᵢ (slide 17-18):

| Metric | Formula | Characteristic |
|---|---|---|
| MAE | (1/n)Σ\|yᵢ − ŷᵢ\| | Treats all errors equally |
| MSE | (1/n)Σ(yᵢ − ŷᵢ)² | Punishes large errors; units are y squared |
| RMSE | √MSE | **Back in y's own units** |
| MAPE | (100/n)Σ\|yᵢ − ŷᵢ\|/\|yᵢ\| | Scale-free, easy to communicate |
| R² | 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)² | Share of y's variation explained by the model |

Các tiêu chí khác được slide nêu tên nhưng không khai triển: RSE (sai số
bình phương tương đối), RAE (sai số tuyệt đối tương đối), RMSE chuẩn hóa,
RMSE tương đối.
<span class="en">**Regression metrics** (slides 17-18), with error
uᵢ = yᵢ − ŷᵢ: MAE treats all errors equally; MSE punishes large errors and
is in squared units; RMSE = √MSE brings the error **back into y's units**;
MAPE is scale-free and easy to communicate; R² is the share of y's
variation the model explains. Other criteria named but not expanded: RSE,
RAE, Normalised RMSE, Relative RMSE.</span>

**How to choose** (slide 18): MAE treats all errors
equally; **RMSE punishes large errors more**, so use it when big mistakes
are costly; **MAPE is undefined when some yᵢ = 0** and is asymmetric.

### Classification metrics

Toàn bộ mục này là **nội dung mới của bản 2026** (slide 19):

- **Accuracy** — **misleading on imbalanced data**:
  if 99% of transactions are legitimate, an always-"legitimate" model is
  99% accurate and completely useless.
- **Precision** — of those we flagged, how many were
  right. Use when **false alarms are expensive** (e.g. blocking a valid
  email).
- **Recall (sensitivity)** — of the true cases, how
  many did we catch. Use when **misses are expensive** (e.g. missing a
  fraud or a disease).
- **F1** — the harmonic mean of precision and
  recall, when you need to balance both.
- **ROC-AUC** — ranking quality across all
  thresholds, useful when the decision threshold is not fixed in
  advance.

In the chapter's Python code the whole set comes at
once from `classification_report(y_test, y_pred)`, with
`confusion_matrix(y_test, y_pred)` giving the raw counts they are
computed from.

## Appears in

[[chapter03-supervised-learning-k32]] — slides 17-18
(regression metrics), 19 (classification metrics), 44 and 74 (printing
`confusion_matrix` + `classification_report` in Examples 3.1 and 4.1),
106-107 (MAE/MSE/MAPE/RMSE restated with their `scikit-learn`
functions), 111 (review question 3: why RMSE ≥ MAE always holds).

## Related

- [[train-test-split-and-cross-validation]] — every
  metric here only means anything when computed **on the test
  set**.
- [[overfitting-underfitting-k32]] — the gap between
  the training and test values of these metrics is the diagnostic.
- [[classification-k32]] — where choosing the metric
  by application context is discussed (Teamwork 1 asks for exactly
  that).
- [[regularization-ridge-lasso-elastic-net-k32]] —
  Section 7.5 uses this regression metric set to compare regularized
  models against the OLS baseline.

## Notes

Slide 17 carries a **"Corrected from earlier
versions"** box stating that MSE and RMSE **both** contain the 1/n
factor, and RMSE = √MSE. This is an explicit correction by the instructor
versus earlier decks — worth remembering, since an MSE formula missing
the 1/n is a common presentation error.
