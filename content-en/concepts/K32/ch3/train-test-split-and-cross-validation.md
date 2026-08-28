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

- **Data leakage — the most common beginner
  mistake** (slide 16): any transformation **learned from data** —
  scaling, imputation, feature selection — must be **fitted on the
  training part only**, then applied to validation and test. Fitting on
  everything leaks test information back into the model and makes the
  reported performance **optimistic**. This is why Example 3.1 writes
  `scaler.fit_transform(X_train)` but only `scaler.transform(X_test)` —
  a one-word difference that decides whether the result is honest.
- **3 forms of cross-validation** (slide 21):

  | Dạng | Cách làm | Ghi chú |
  |---|---|---|
  | Bỏ một quan sát (LOOCV) | Tập huấn luyện n − 1 quan sát, tập kiểm tra đúng 1 quan sát, lặp n lần | Tốn tính toán nhất |
  | K-phần (K-fold) | Chia thành K phần, huấn luyện trên K − 1, kiểm tra trên phần còn lại, xoay vòng rồi lấy trung bình K điểm số | K = 5 hoặc K = 10 là chuẩn |
  | K-phần phân tầng (stratified) | Như K-phần nhưng giữ nguyên tỷ lệ các lớp trong từng phần | **Luôn ưu tiên cho bài toán phân loại** |

- **Why cross-validation and not just one split**:
  hyperparameters (K in KNN, λ in Ridge/Lasso, tree depth) must be chosen
  from a number that **has not seen the test set**. Choosing them on the
  test set destroys its role as referee. Example 3.1 follows this
  exactly: `GridSearchCV(..., cv=5)` picks K on the training set, then
  the model is **evaluated once** on the untouched test set.
- **The split settings used throughout the
  chapter**: every code example uses `train_test_split(X, y,
  test_size=0.3, random_state=42, stratify=y)` — 30% held out, a fixed
  `random_state` for reproducibility, and `stratify=y` preserving class
  proportions in both parts (the same idea as stratified K-fold).
- **Cross-validation is also an overfitting
  control**: slide 22 notes simply that "validation helps control
  overfitting" — it gives an out-of-sample error estimate **before**
  touching the test set, so overfitting can be caught and fixed while
  there is still time.

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
