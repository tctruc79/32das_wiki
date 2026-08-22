---
type: concept
title: "Decision Tree"
tags: [chapter-4, k31, machine-learning, classification]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

A decision tree classifies observations into
classes by sorting them down the tree from the root to a leaf node, based
on attributes chosen for splitting at each node.

## Explanation

- **Core concepts**: Node/Decision Node (attribute),
  Branch/Sub-tree, Root node, Leaf node (final output), Splitting
  (dividing per condition), Pruning (removing unneeded branches).
- **Leaf node purity measures** — 3 metrics, all
  measuring class "mixedness" in a node: **Classification error** = 1 −
  max(pᵢ); **Gini impurity** = 1 − Σpᵢ²; **Entropy** = −Σpᵢlog₂(pᵢ). Lower
  = purer (single class).
- **3 main tree-building algorithms**: **ID3**
  (earliest, uses entropy/information gain, doesn't handle numeric data,
  prone to overfitting); **C4.5** (improves ID3, uses gain ratio, reduces
  overfitting, handles missing data); **CART** (Gini impurity for
  classification/MSE for regression, handles large datasets).
- **Information gain** = the entropy decrease after
  splitting on an attribute — building a tree is essentially finding the
  highest-gain attribute repeatedly, until entropy = 0 (or another
  stopping criterion: min observations/node, max depth).
- The first example in the course of **eager
  learning** (builds the model at training time) — contrasting
  [[k-nearest-neighbors]] (lazy learning, no upfront model, computes only
  at prediction time).

## Appears in

- [[chapter04-decision-tree-random-forest]] — full
  definition, 3 algorithms, 3 purity metrics, build process, Python
  implementation on IRIS.

## Related concepts

- [[random-forest]] — combines many decision trees
  to reduce overfitting.
- [[k-nearest-neighbors]] — contrasts eager learning
  (Decision Tree) vs lazy learning (KNN).
- [[overfitting-underfitting]] — pruning is the
  concrete overfitting-control mechanism for decision trees.
