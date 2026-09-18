---
type: synthesis
title: "Quick Warm-up Questions — K32 Chapter 3 (Supervised Learning)"
tags: [chapter-3, k32, warm-up, exam-prep, supervised-learning, classification, regression]
created: 2026-09-11
updated: 2026-09-11
status: complete
---

A set of 20 quick warm-up questions (aim for about 20
seconds each), synthesised from [[chapter03-supervised-learning-k32]] — for
fast review before class or as opener questions the instructor
[[tran-thi-tuan-anh]] might ask. Unlike the deeper question bank already in
[[on-thi]] (which needs reasoning/computation), these favour quick recall
over analysis.

## 1. Foundations & model evaluation

Synthesised from [[supervised-learning-framework]],
[[model-evaluation-metrics-k32]], [[train-test-split-and-cross-validation]]
and [[overfitting-underfitting-k32]].

| # | Question | Quick answer |
|---|---|---|
| 1 | f̂ learns from labelled data — if y is a category, what's the task called? If y is a number? | Classification (category) / Regression (number) |
| 2 | Name one difference between a parameter and a hyperparameter. | Parameters are learned from data; hyperparameters are chosen by the user beforehand |
| 3 | Is RMSE always ≥ or ≤ MAE? | ≥ |
| 4 | Why is accuracy misleading when 99% of the data belongs to one class? | A model that always predicts the majority class still scores 99% while being useless |
| 5 | Does precision answer "of those flagged, how many were right" or "of the true cases, how many did we catch"? | The first — that's precision; the second is recall |
| 6 | What K is standard for K-fold cross-validation? | 5 or 10 |
| 7 | When does data leakage happen? | When a scaler/transform is fit on the whole dataset instead of the training split only |

## 2. KNN & decision trees

Synthesised from [[k-nearest-neighbors-k32]] and
[[decision-tree-k32]].

| # | Question | Quick answer |
|---|---|---|
| 8 | What core assumption does KNN rely on? | Similar things lie near each other |
| 9 | Why is scaling compulsory for KNN? | A feature with a larger scale would dominate the distance |
| 10 | Does a small K give low or high bias? Low or high variance? | Low bias, high variance |
| 11 | Does scikit-learn's `DecisionTreeClassifier` implement CART or ID3? | CART |
| 12 | What is the entropy of a perfectly pure node (100% one class)? | 0 |
| 13 | Does pre-pruning stop early, or does post-pruning grow the full tree then cut back? | Pre-pruning = stop early; post-pruning = grow full, then cut |

## 3. Ensemble methods

Synthesised from [[random-forest-k32]] and
[[boosting-ensemble]].

| # | Question | Quick answer |
|---|---|---|
| 14 | How many sources of randomness does a random forest have? Name them. | 2 — bootstrap sampling and feature subsampling |
| 15 | Does bagging build trees in parallel or sequentially? What about boosting? | Bagging is parallel; boosting is sequential |
| 16 | What is the out-of-bag (OOB) error called? | A free validation estimate |

## 4. Regression & regularization

Synthesised from [[linear-regression-k32]] and
[[regularization-ridge-lasso-elastic-net-k32]].

| # | Question | Quick answer |
|---|---|---|
| 17 | Does Ridge penalise Σβ² or Σ\|β\|? | Σβ² (L2) |
| 18 | Which algorithm can push coefficients exactly to zero? | Lasso |
| 19 | What model does α = 1 give in Elastic Net? | Lasso |
| 20 | What lets Ridge handle the k > n case (more predictors than observations)? | Adding λI, which makes the matrix invertible |

## How to use

Cover the "Quick answer" column, read the question,
answer mentally within about 20 seconds, then check — mirroring the pace
of [[tran-thi-tuan-anh]]'s opener questions. On a miss, jump back to the
matching section of [[chapter03-supervised-learning-k32]] to re-read the
source.

## Source

Synthesised entirely from
[[chapter03-supervised-learning-k32]]; see the deeper question bank at
[[on-thi]].
