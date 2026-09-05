---
type: concept
title: "Data Splitting and Cross-Validation"
tags: [chapter-3, k32, model-evaluation, cross-validation, data-leakage]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

Data splitting separates the dataset into a
**training set** (used to estimate parameters) and a **test set**
(touched once, at the very end, to report honest performance).
Cross-validation rotates the training/validation roles *within* the
training set, and is used to **test model effectiveness and choose
hyperparameters**. The rule that opens Section 2: *never judge a model on
the data it was trained on*.

## Explanation

Perhaps the single most common beginner mistake in
all of machine learning is **data leakage**: any transformation
**learned from data** — scaling, imputation, feature selection — must be
**fitted on the training part only**, then applied to validation and
test. Fitting a transformation on the whole dataset before splitting lets
test-set information leak back into training, making reported
performance **artificially optimistic** — the model looks better than it
will actually be on genuinely new data. The seemingly small difference
between calling `fit_transform()` on the training set and only
`transform()` on the test set, versus calling `fit_transform()` on both,
is exactly the line between an honest result and a self-deceiving
one.

Splitting the data once into train/test only solves
half the problem: it allows honest evaluation, but says nothing about
**which hyperparameter to pick**. Choosing K in KNN or λ in Ridge/Lasso
needs a score that has **never seen the test set** — otherwise the test
set loses its role as a neutral referee the moment it is used for tuning.
Cross-validation solves exactly this by rotating the train/validation
role *inside* the training set, in 3 forms:

| Dạng | Cách làm | Ghi chú |
|---|---|---|
| Bỏ một quan sát (LOOCV) | Tập huấn luyện n − 1 quan sát, tập kiểm tra đúng 1 quan sát, lặp n lần | Tốn tính toán nhất |
| K-phần (K-fold) | Chia thành K phần, huấn luyện trên K − 1, kiểm tra trên phần còn lại, xoay vòng rồi lấy trung bình K điểm số | K = 5 hoặc K = 10 là chuẩn |
| K-phần phân tầng (stratified) | Như K-phần nhưng giữ nguyên tỷ lệ các lớp trong từng phần | **Luôn ưu tiên cho bài toán phân loại** |

The correct workflow, recurring throughout the
chapter's code examples, is: use cross-validation (typically via
`GridSearchCV`) to choose hyperparameters **entirely within the training
set**, then **evaluate exactly once** on the untouched test set — a
clean separation between "model selection" and "final performance
report". The split configuration used throughout is
`train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)`:
30% held out, a fixed `random_state` for reproducibility, and
`stratify=y` preserving class proportions in both parts.

Cross-validation also has a second, less-discussed
but equally important role: it gives an out-of-sample error estimate
**before** touching the test set, so overfitting can be caught and fixed
**while there is still time** — rather than only discovered at the final
evaluation step, when there is no way back to adjust the model without
compromising the test set's integrity.

## Appears in

[[chapter03-supervised-learning-k32]] — slide 16
(splitting and leakage), 21 (cross-validation), 22 (validation controls
overfitting), 37 (choosing K by CV error), 46 (`GridSearchCV` in Example
3.1), 102 (choosing λ with `RidgeCV`/`LassoCV`).

## Related

- [[overfitting-underfitting-k32]] — what splitting
  and cross-validation exist to detect.
- [[model-evaluation-metrics-k32]] — the numbers
  computed *on* those splits.
- [[k-nearest-neighbors-k32]] and
  [[regularization-ridge-lasso-elastic-net-k32]] — the two places
  cross-validation is used directly to pick a hyperparameter (K and
  λ).
- [[supervised-learning-framework]] — where the
  parameter vs hyperparameter distinction is defined.

## Notes

Slide 20 ("Validation for the classification
problem") is image-only with no extractable text, so its train/validation/
test diagram for classification is not recorded here in detail. The
textual content on splitting lives on slides 16 and 21.
