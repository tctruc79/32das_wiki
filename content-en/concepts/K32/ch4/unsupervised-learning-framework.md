---
type: concept
title: "The Unsupervised Learning Framework"
tags: [chapter-4, k32, unsupervised-learning, machine-learning]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

Unsupervised learning is the branch of machine
learning that works with data containing **only `xi`, with no label
`yi`**. The goal is not to predict a known quantity but to **describe
unknown structure** in the data. In this course it comprises two tools:
**clustering** (grouping similar observations, i.e. reducing rows) and
**dimension reduction via PCA** (replacing correlated variables with
fewer uncorrelated components, i.e. reducing columns).

## Explanation

### Position in the machine learning map

Machine learning has 3 branches: **supervised**
(data comes as pairs `(xi, yi)`; split further into regression when `y`
is numeric and classification when `y` is categorical),
**unsupervised** (`xi` only; split further into clustering and dimension
reduction), and **reinforcement learning** (a reward signal, learning a
policy). This cohort's Chapter 3 covers the whole first branch; Chapter 4
covers the whole second; the third is named only to complete the
picture.

### The 6-row comparison

| Criterion | Supervised | Unsupervised |
|---|---|---|
| Input data | `(xi, yi)` | `xi` only |
| Question | Predict a known quantity | Describe unknown structure |
| Ground truth | Exists | Does not exist |
| Evaluation | External and objective (CV error) | Internal and partly subjective (silhouette, variance explained, usefulness) |
| Main risk | Overfitting | Finding structure that is not there |
| Course examples | Regression, classification | Clustering, PCA |

The most memorable row is **ground truth**: because
there is no `y` to compare against, every quality measure in unsupervised
learning is an **internal** one - it measures whether the result is tidy,
not whether the result is **right**. The notion of "right" simply does
not exist here.

### The same points, two questions

The illustration on slide 7 puts two pictures side
by side with **the same set of `x`**. On the left the colour of each
point is given, and the question is "**where is the boundary?**" On the
right there are no colours, and the question is "**are there groups at
all?**" The only difference: whether the colours are **given** or are
**what you are trying to find**.

### The chapter's central warning

Slide 8 states the single most important thing to
remember about unsupervised learning: **K-Means always returns K clusters
and PCA always returns components, even from pure noise.** The algorithm
**never** tells you whether the structure it found is real - the analyst
must. The practical consequence: every unsupervised result must ship with
diagnostics (a justified K, a stability check, a comparison against a
noise model), or it is merely a pretty picture. The warning recurs on
slide 25 (K-Means imposes K spherical clusters on whatever you give it),
slide 45 (the 7-point checklist), slide 76 (the circularity of using
PC1-PC2 to "validate" a clustering) and slide 81 (both tools only
generate hypotheses).

### Why each branch needs the other

The two branches are not separate in practice. Slide
6 says it plainly: PCA is **very often** used as a preprocessing step for
supervised models, and cluster labels are **frequently turned into a
feature** for them. The reverse holds too: the only convincing way to show
a customer segmentation is "real" is usually to show that it
**predicts** something the clustering algorithm never saw - that is,
going back to a supervised problem to validate an unsupervised
result.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 5
(the 3-branch locating diagram), 6 (the supervised benchmark), 7 (the
same points, two questions), 8 (the 6-row choice table and the central
warning), 9 (notation), 81 (the two-tool summary table).

## Related

- [[clustering-k32]] - the branch's first tool:
  reducing rows.
- [[pca-k32]] - the second tool: reducing
  columns.
- [[clustering-pitfalls-checklist]] - the practical
  answer to slide 8's warning.
- [[supervised-learning-framework]] - the opposite
  branch, taught in Chapter 3.
- [[pca-combined-with-other-algorithms-k32]] - where
  the two branches meet.
