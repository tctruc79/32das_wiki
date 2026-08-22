---
type: concept
title: "Random Forest"
tags: [chapter-4, k31, machine-learning, classification, ensemble]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Random Forest is an ensemble learning algorithm:
builds many small, weak decision trees in parallel, then combines them
into one strong learner by averaging or majority vote.

## Explanation

- **Randomization mechanism**: finding the root node
  and splitting feature nodes runs randomly — each tree only uses a
  random subset of k features (k ≪ m total features), unlike a single
  decision tree which uses all features.
- **Why it works**: enough trees → the classifier
  won't overfit; handles missing values; more trees → more accurate;
  models categorical values well.
- **2 operating stages**: (1) **Forest creation** —
  randomly select k features, split using the best point among them,
  repeat to build n trees; (2) **Prediction** — each tree predicts
  independently, votes are tallied, the highest-voted outcome is the
  final prediction.
- This is the second overfitting-control mechanism
  taught in the course (after choosing K in [[k-nearest-neighbors]]) —
  but works differently: instead of tuning a single model's parameter,
  Random Forest combines many weak models to cancel out each tree's
  individual noise.

## Appears in

- [[chapter04-decision-tree-random-forest]] —
  definition, rationale, 2 operating stages, Python implementation.

## Related concepts

- [[decision-tree]] — Random Forest is an ensemble
  of many single decision trees.
- [[overfitting-underfitting]] — the ensemble
  mechanism reduces overfitting compared to a single decision
  tree.
