---
type: concept
title: "Overfitting / Underfitting"
tags: [chapter-3, k31, machine-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Underfitting happens when a model is too simple to
capture patterns in the data; overfitting happens when a model is too
complex, learning noise along with real patterns — both make the model
predict poorly on new data.

## Explanation

- **Underfitting**: model too simple → performs
  poorly on both training and test/forecast data, can't predict
  accurately. Solution: use a more complex model, or improve input
  features to give more information.
- **Overfitting**: model too complex, learns both
  patterns and noise → performs exceptionally well on training data but
  poorly on test/forecast data. Solution: use a simpler model, reduce
  complexity.
- **Cross-validation** helps control overfitting —
  by testing model effectiveness on data it hasn't seen (see
  [[model-evaluation-metrics]]).
- A recurring theme: [[k-nearest-neighbors]]
  controls it via choosing K (small K → high variance/prone to
  overfitting, large K → high bias/prone to underfitting) — the specific
  control mechanism differs per algorithm in later chapters.

## Appears in

- [[chapter03-machine-learning-knn]] — full
  definition + the role of cross-validation.

## Related concepts

- [[model-evaluation-metrics]] — cross-validation is
  the tool for detecting overfitting/underfitting.
- [[k-nearest-neighbors]] — the first concrete
  example of the bias-variance tradeoff via the K parameter.
