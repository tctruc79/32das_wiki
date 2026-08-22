---
type: concept
title: "Classification"
tags: [chapter-3, k31, machine-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Classification is a supervised learning technique
that categorizes data into a given number of classes, with discrete
label outputs.

## Explanation

- **Technical terms**: Classifier — an algorithm
  mapping input data to a specific category; Binary Classification — 2
  possible outcomes; Multi-class classification — more than 2 classes,
  each observation gets exactly 1 label.
- **Building process**: initialize the classifier →
  train on labeled data → predict the target (`predict(X)` returns the
  predicted label) → evaluate the model.
- **Popular algorithms**: Naive Bayes, Decision
  Tree, Logistic Regression, K-Nearest Neighbours (KNN), Support Vector
  Machine — the course goes deep into KNN in Chapter 3 (see
  [[k-nearest-neighbors]]) and Decision Tree in Chapter 4.

## Appears in

- [[chapter03-machine-learning-knn]] — definition,
  process, algorithm list, KNN as the detailed example.
- [[chapter07-pca]] — PCA improves Logistic
  Regression/SVM/KNN by reducing noise and collinearity before
  classifying.

## Related concepts

- [[k-nearest-neighbors]] — the first classification
  algorithm taught in detail.
- [[machine-learning-overview]] — classification is
  one of the 2 main branches of supervised learning.
