---
type: concept
title: "Model Evaluation Metrics (K32)"
tags: [chapter-3, k32, model-evaluation, metrics]
created: 2026-08-28
updated: 2026-09-05
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

With n observations, true value yᵢ, predicted value
ŷᵢ and error uᵢ = yᵢ − ŷᵢ:

| Chỉ số | Công thức | Đặc điểm |
|---|---|---|
| MAE | (1/n)Σ\|yᵢ − ŷᵢ\| | Coi mọi sai số như nhau |
| MSE | (1/n)Σ(yᵢ − ŷᵢ)² | Phạt nặng sai số lớn; đơn vị là bình phương của y |
| RMSE | √MSE | Đưa sai số **về đúng đơn vị của y** |
| MAPE | (100/n)Σ\|yᵢ − ŷᵢ\|/\|yᵢ\| | Không phụ thuộc thang đo, dễ truyền đạt |
| R² | 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)² | Tỷ lệ biến thiên của y được mô hình giải thích |

Choosing a metric is not arbitrary — it depends
directly on **the business consequence of a large error**. MAE treats
all errors equally regardless of size, so it suits cases where the cost
of error grows linearly with its size. RMSE, by squaring each error
before averaging, **punishes large errors many times more heavily**
than small ones — prefer it when a few severely wrong predictions cause
disproportionate losses (e.g. a badly wrong demand forecast causing a
severe stock-out). MAPE has the advantage of being scale-free — easy to
compare across problems with different units, easy to communicate to a
non-technical audience — but has 2 drawbacks to remember: it is
undefined when an observation has yᵢ = 0, and it is asymmetric
(over-predicting is penalised more heavily than under-predicting, since
the denominator is always the true value). Beyond these 5 metrics, a few
less common criteria exist: Relative Squared Error (RSE), Relative
Absolute Error (RAE), and normalised variants of RMSE.

### Classification metrics

While regression metrics measure "how wrong",
classification metrics must answer a subtler question: "wrong in which
direction, and which direction is more costly". The essential starting
point is recognising that **accuracy is severely misleading on
imbalanced data**: if 99% of transactions in a dataset are legitimate, a
model that *always* predicts "legitimate" — having learned nothing — is
still 99% accurate while being entirely useless for fraud detection. This
is exactly why two further metrics are needed, each measuring a different
kind of mistake: **precision** — of the cases flagged positive, how many
were correct — preferred when **false alarms are expensive**; and
**recall (sensitivity)** — of the true positive cases, how many were
caught — preferred when **misses are expensive**. Because these two
typically trade off against each other, **F1**, their harmonic mean, is
used when a single number must balance both concerns. Finally,
**ROC-AUC** measures ranking quality across *every* possible decision
threshold, useful precisely when the classification threshold has not
yet been fixed before deployment. In practice, the whole classification
metric set comes at once from `classification_report(y_test, y_pred)`,
built from the raw counts in `confusion_matrix(y_test, y_pred)`.

## Worked example — why RMSE always ≥ MAE

This is the instructor's review question 3, and the
answer comes from the structure of the two formulas themselves rather
than from a specific numerical example. Let aᵢ = |yᵢ − ŷᵢ| ≥ 0. MAE is
the **arithmetic mean** of the n values aᵢ, while RMSE is the **square
root of the mean of the squared** aᵢ — in other words, RMSE is exactly
the *quadratic mean* (root mean square) of the same sequence. The
quadratic-mean-≥-arithmetic-mean inequality (a direct consequence of the
Cauchy–Schwarz inequality, equivalently QM–AM) holds for **every**
non-negative sequence, so RMSE ≥ MAE always, regardless of the specific
data.

**When the two are equal**: QM = AM only when every
aᵢ is **exactly equal** — i.e. every error has the same magnitude. The
gap between RMSE and MAE therefore carries diagnostic meaning too: **the
larger RMSE − MAE is, the more unevenly the errors are spread** (a few
badly-missed observations amid an otherwise accurate model) — precisely
the reason to prefer RMSE when "large mistakes are costly," as noted
above.

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
