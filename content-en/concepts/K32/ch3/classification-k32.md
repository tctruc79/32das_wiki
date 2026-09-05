---
type: concept
title: "Classification (K32)"
tags: [chapter-3, k32, classification, supervised-learning]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

Classification is the technique of **categorising
data into a given number of classes** — the branch of supervised learning
where the target y is a category rather than a number. The algorithm that
maps input data to a specific category is called a **classifier**.

## Explanation

Classification comes in 3 kinds, distinguished by
the **number and exclusivity of labels**: binary (exactly 2 possible
outcomes, e.g. spam/ham); multi-class (more than 2 classes, but each
observation still gets **one and only one** label — e.g. the 3 Iris
species in Example 3.1); and multi-label (each observation may carry
**several labels at once**, e.g. an article tagged both "finance" and
"technology"). This third kind is the newest perspective, reflecting
that many modern classification problems (content tagging, document
classification) don't fit the "one observation, one label" mould of the
first two.

Building a classification model, whatever the
specific algorithm, always passes through exactly 4 steps: initialize
the classifier, train it on labelled data, predict the target for a new
observation, then evaluate on held-out data — mapping 1-to-1 onto the
four `scikit-learn` lines used throughout the chapter: instantiate →
`.fit()` → `.predict()` → `classification_report()` — a template stable
enough to apply to any classification algorithm, from KNN to random
forests.

Among the many classification algorithms that
exist — Naive Bayes, decision trees, logistic regression, KNN, SVM,
random forests, gradient boosting/XGBoost, neural networks — this
chapter teaches only 3 in depth: **KNN** (distance-based), **decision
trees** (rule-based), and **tree ensembles** (random forests and
boosting). The choice is not arbitrary — together these three families
cover most of the main ideas used in practice, so mastering them
supports reasonable inference about algorithms not covered in
detail.

The chapter's most applied lesson sits here:
choosing an evaluation metric cannot be separated from the application
context, because accuracy misleads on imbalanced data. The associated
teamwork exercise applies exactly this principle: for each
classification application in a real-life domain, state **which metric
matters most — precision, recall, or accuracy — and justify why**. The
chapter's two illustrative applications — a spam filter and transaction
fraud detection, both via KNN — are themselves textbook imbalanced-data
cases (anomalous emails/transactions are always a small minority), so
they double as live evidence for why accuracy alone is not enough.

## Appears in

[[chapter03-supervised-learning-k32]] — slide 27
(definition and the 3 kinds), 29 (the 4 steps), 30 (algorithm list),
49-51 (applications and Teamwork 1); indirectly slide 19 (classification
metrics) and 55 (classification vs regression trees).

## Related

- [[supervised-learning-framework]] —
  classification is one of the frame's two branches, split by the type of
  y.
- [[linear-regression-k32]] — the other branch;
  slide 89 stresses that both share the same evaluation
  methodology.
- [[k-nearest-neighbors-k32]] — the first
  classification algorithm taught in detail.
- [[decision-tree-k32]], [[random-forest-k32]],
  [[boosting-ensemble]] — the chapter's remaining classification
  algorithms.
- [[model-evaluation-metrics-k32]] — the metric set
  used to score a classifier.

## Notes

Logistic regression is named in the algorithm list
(slide 30) but is **never taught in detail anywhere in this chapter** — a
source gap for the 2026 cohort, mirroring the same gap recorded for the
2025 cohort.
