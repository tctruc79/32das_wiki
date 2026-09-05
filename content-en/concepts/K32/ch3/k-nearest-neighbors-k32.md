---
type: concept
title: "K-Nearest Neighbours (K32)"
tags: [chapter-3, k32, knn, classification, algorithm]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

K-Nearest Neighbours (KNN) is a distance-based
supervised algorithm built on a single assumption: **similar things are
near each other**. To predict for a new observation it finds the K
closest training observations and returns the **mode** of their labels
(classification) or their **mean** (regression).

## Explanation

### The algorithm

KNN directly executes its founding assumption: load
the data and **standardise the features**, choose K, then for each new
query x* — compute the distance to **every** training observation, sort
and keep the K nearest, read their labels, and return the mode
(classification) or mean (regression) as the prediction. A point easily
misunderstood about execution order: **selecting** the K nearest
neighbours happens **after** all distances to every observation have
been computed — it is not a filtering step that happens inside the loop
over observations.

### 4 distance measures

With x = (x₁,…,x_p) and z = (z₁,…,z_p):

| Khoảng cách | Công thức | Khi nào dùng |
|---|---|---|
| Euclid | √Σ(xⱼ − zⱼ)² | Mặc định |
| Manhattan (ô bàn cờ) | Σ\|xⱼ − zⱼ\| | Bền hơn trước giá trị ngoại lai |
| Minkowski | (Σ\|xⱼ − zⱼ\|^q)^(1/q) | Dạng tổng quát: q = 2 ⇒ Euclid, q = 1 ⇒ Manhattan |
| Hamming | Số vị trí khác nhau | Cho đặc trưng phân loại |

Euclidean (the default), Manhattan (city
block, more robust to outliers), Minkowski (the general form — q = 2
gives Euclidean, q = 1 gives Manhattan) and Hamming (for categorical
features, counting differing positions). Minkowski and Hamming are **new
in the 2026 version**.

### Why scaling is compulsory

Because distance is the algorithm's whole
foundation, each feature's unit of measurement directly affects the
result — an example predicting credit default from 2 features
illustrates this clearly:

| Đặc trưng | Khách hàng A | Khách hàng B |
|---|---|---|
| Tuổi (năm) | 30 | 35 |
| Thu nhập (triệu đồng) | 20.000 | 20.050 |

A numeric example, **new** in this cohort: the
Euclidean distance √(5² + 50²) ≈ 50.2 between two credit customers is
**almost entirely driven by income**, simply because income is measured
in bigger numbers — not because it matters more. **Rule**: always
standardise (z = (x − x̄)/s) or min–max scale before KNN, and **fit the
scaler on the training set only**.

### Choosing K

Choosing K requires running KNN over several
values of K and picking the one **minimising the cross-validated
error**, **not** the training error — since training error is always
lowest at K = 1 (every point is its own nearest neighbour, so it
"predicts" perfectly on data it has already seen). A few accompanying
rules:

- No single optimal number of neighbours suits
  every dataset.
- **Small K** ⇒ noise dominates: low bias but high
  variance (overfitting).
- **Large K** ⇒ more computationally expensive: low
  variance but high bias (underfitting).
- For binary problems, prefer an **odd K** to avoid
  tied votes.

### Pros and cons

**Pros**: simple and easy to implement; no model to
build, few parameters to tune, no distributional assumptions; the
decision boundary can be highly non-linear.

**Cons**: significantly slower as features grow
(the **curse of dimensionality**); prediction is computationally
intensive as observations grow, since all distances are recomputed each
time; it is **lazy learning** — nothing is learned at training time and
the whole training set must be stored; sensitive to feature scaling and
to irrelevant features.

### Example 3.1 — the IRIS dataset

The workflow uses `iris.csv` (150 rows, 50 of each
species; 4 features in cm — the dataset Fisher used for his linear
discriminant): load → split → scatter plot → `StandardScaler` (fit on
train, transform on test) → `KNeighborsClassifier(n_neighbors=5)` →
predict → confusion matrix and classification report → best-K search
with `GridSearchCV(cv=5)` over `range(1, 26, 2)` → **evaluate once** on
the test set → predict a new flower.

**Important**: the exercise states that **the
errors in the code are intentional** — the 4 planted bugs are listed in
[[chapter03-supervised-learning-k32]].

## Appears in

[[chapter03-supervised-learning-k32]] — slides 31-38
(theory), 39-48 (Example 3.1), 49-50 (spam and fraud applications), 110
(summary table: both tasks, key hyperparameter K, **scaling needed**),
111 (review question 1).

## Related

- [[classification-k32]] — KNN is the chapter's
  first classification algorithm (though it also does regression).
- [[train-test-split-and-cross-validation]] — the
  mechanism for choosing K, and why the scaler is fitted on the training
  set only.
- [[overfitting-underfitting-k32]] — small vs large
  K is the chapter's most intuitive instance of the bias–variance
  trade-off.
- [[decision-tree-k32]] — the next classification
  algorithm, representing the rule-based family (versus KNN's
  distance-based one) and needing **no scaling**.
- [[regularization-ridge-lasso-elastic-net-k32]] —
  also requires standardisation, for the same reason: the result depends
  on the absolute size of the numbers.

## Notes

Example 3.1 uses the `iris.csv` file, **not**
`scikit-learn`'s built-in IRIS, so the column names follow the file:
`sepal.length` (with a dot), and the label column is `variety`, not
`species`. The slide code deliberately writes `species` — one of the 4
planted bugs.
