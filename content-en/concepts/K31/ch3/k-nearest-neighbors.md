---
type: concept
title: "K-Nearest Neighbours (KNN)"
tags: [chapter-3, k31, machine-learning, classification, knn]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

KNN is a classification algorithm based on the
assumption that similar things are near each other — it predicts a new
observation's label by taking the mode of the labels among its K nearest
observations.

## Explanation

- **Algorithm steps**: (1) load the data, (2) choose
  K, (3) for each observation — calculate distances to the query
  observation, pick the K nearest, get their labels, return the mode as
  the prediction.
- **Choosing K**: run several times with different K
  values, choose the K that reduces errors. No universally optimal K —
  small K → noise has more influence (low bias, high variance, prone to
  [[overfitting-underfitting|overfitting]]); large K → more computation
  but lower variance, higher bias (prone to underfitting).
- **Advantages**: simple, easy to implement; no
  model-building, parameter tuning, or extra assumptions needed.
  **Disadvantages**: significantly slower as predictors increase;
  computation-heavy as observations increase; it is **lazy learning** —
  it doesn't really "learn," just stores data and computes at prediction
  time (unlike **eager learning** such as Decision Tree, which builds a
  model at training time).
- **IRIS example** (`iris.csv`): 3 Iris species
  (setosa, virginica, versicolor), 4 features (sepal/petal length/width).
  KNN classifies the species for each observation, with multiple K values
  triable to find the optimum.
- **Real-world applications**: spam email filters,
  transaction fraud detection.

## Appears in

- [[chapter03-machine-learning-knn]] — the full
  algorithm, pros/cons, IRIS example, real-world applications.
- [[chapter07-pca]] — distance-based classifiers
  like KNN benefit from PCA in high dimensions.

## Related concepts

- [[classification]] — KNN is one of the 5 popular
  classification algorithms listed.
- [[overfitting-underfitting]] — the K parameter
  directly trades off bias vs variance.
- [[model-evaluation-metrics]] — MAE/MSE/RMSE used
  when KNN is applied to regression.
