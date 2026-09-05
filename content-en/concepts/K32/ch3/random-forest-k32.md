---
type: concept
title: "Random Forest (K32)"
tags: [chapter-3, k32, random-forest, ensemble, bagging]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

A random forest is an **ensemble** learning
algorithm: build many small, weak decision trees and combine them into a
single strong learner by **averaging** (regression) or **majority vote**
(classification). It exists to fix exactly one weakness of a single tree:
its **instability** (high variance).

## Explanation

### Two sources of randomness

The whole trick behind a random forest lies in 2
mechanisms that keep the trees different: **bagging** — each tree is
trained on a **bootstrap sample** of the observations (drawn with
replacement), not the full original dataset; and **feature
subsampling** — at **each split**, only a random subset of k out of m
features is considered, not all m. Thanks to these two mechanisms, the
trees in the forest become **decorrelated**, and averaging decorrelated
trees cancels away most of a single tree's inherent variance. The key
point to understand: remove both sources of randomness — i.e. every
tree trains on the exact same data and considers the exact same feature
set — and every tree would be identical, so averaging them reduces
**no** variance at all, since there is nothing to "average away".

### The two-stage algorithm

Growing a random forest is a simple loop, repeated
n times to build n trees: draw a bootstrap sample from the training
data → randomly select k of the m features (**k ≪ m**) → find the best
split among those k → split the node → repeat until the stopping rule.
The typical default is **k = √m for classification** and **k = m/3 for
regression** — small enough for the trees to genuinely differ, large
enough for each tree to still learn something meaningful. When
predicting for a new observation, each tree in the forest casts its own
prediction; for classification the forest counts votes and takes the
most-voted target; for regression, voting is replaced by the
**average** of the n predictions.

### Why use it

Compared with growing one very deep single tree, a
random forest brings a stack of compounding benefits: with enough trees
it is **very resistant to overfitting**; it handles missing values and
mixed data types without elaborate preprocessing; it provides ready-made
**feature importance** scores, aiding interpretation despite being an
ensemble "black box"; and, notably, it gives an almost-free
**out-of-bag (OOB)** error — since each tree only sees one bootstrap
sample, roughly **one third** of the data is left out of each tree, and
that leftover portion serves as a natural validation set for that tree,
with no separate validation split needed. One thing worth remembering to
avoid wasted resources: "more trees, more accurate" is **only true until
the curve flattens** — beyond that point, extra trees cost computing
time without further benefit (though unlike deepening a single tree,
they also do no harm).

### In Python

In practice, a typical configuration is
`RandomForestClassifier(n_estimators=500, max_features="sqrt",
oob_score=True, random_state=42, n_jobs=-1)` — `max_features="sqrt"` is
simply `scikit-learn`'s way of writing the k = √m rule, `oob_score=True`
turns on the free validation score discussed above, and `n_jobs=-1`
parallelises across all CPU cores (a practical convenience a single tree
doesn't need, since it already trains fast). After fitting, printing
`rf.oob_score_` **next to** `rf.score(X_test, y_test)` allows directly
comparing the two performance estimates — if they are close, that is
evidence the OOB score is as trustworthy as a real validation set; then
rank the top 10 features with `rf.feature_importances_`.

## Appears in

[[chapter03-supervised-learning-k32]] — slides 77-83
(Section 5.1), 85 (the bagging vs boosting table), 86 (Teamwork 2), 110
(summary table: both tasks, `n_estimators`/`max_features`, **no
scaling**, a strong stable baseline).

## Related

- [[decision-tree-k32]] — the forest's building
  block, and the problem it was created to solve.
- [[boosting-ensemble]] — the other ensemble family;
  slide 85 compares the two head to head on 6 criteria.
- [[overfitting-underfitting-k32]] — random forests
  mainly attack the **variance** term of the error decomposition.
- [[train-test-split-and-cross-validation]] — the
  OOB error is an "automatic" form of validation that substitutes for a
  separate validation split.

## Notes

The random forest diagram (slide 78) and the
original-code screenshot (slide 83) are image-only. The slide 82 code
also has a broken line-wrap in its `# free validation score` comment when
extracted — the parameters themselves are fully readable.
