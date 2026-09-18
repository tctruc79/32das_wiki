---
type: concept
title: "Distance Measures and the Role of Standardisation"
tags: [chapter-4, k32, distance, standardization, clustering]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

A distance (or dissimilarity) measure `d(xi, xj)` is
a function quantifying **how different two observations are**, and is the
first of the four requirements for clustering. Because every clustering
algorithm in the chapter works on a distance, **choosing the distance
chooses the result**: change the measure and you change the
clusters.

## Explanation

### Three distances in the Minkowski family

**Euclidean distance** (L2, straight line) is the
square root of the summed squared per-variable differences. **Manhattan
distance** (L1, city block) is the sum of absolute differences. Both are
special cases of the **Minkowski distance of order q**, the q-th root of
the summed `|xih - xjh|^q`: `q = 1` gives Manhattan, `q = 2` Euclidean,
and `q` to infinity gives **Chebyshev** - the largest gap along a single
coordinate.

### The data-type table

| Data type | Common choice |
|---|---|
| Continuous | Euclidean |
| Outlier-heavy | Manhattan |
| Text, documents | Cosine |
| Binary | Jaccard, Hamming |
| Mixed types | Gower |
| Strongly correlated variables | Mahalanobis |

The reasoning behind a few rows: Manhattan is less
dominated by outliers than Euclidean because it does not square
deviations; cosine distance measures the **angle** between two vectors
rather than their length, so two documents on the same topic but of
different lengths stay close; Gower handles tables with both numeric and
categorical variables; and Mahalanobis normalises by the covariance
matrix so it does not double-count the shared information of correlated
variables.

### The most common mistake: forgetting to standardise

Slide 15 builds a very sharp numerical example,
worth remembering verbatim. Two customers described by monthly income
(VND million) and number of visits: A is (20, 2), B is (22, 14). In the
original units the Euclidean distance is the root of `2^2 + 12^2`, i.e.
**12.17** - the difference in **visits** dominates. Now merely switch the
income unit to VND (20,000,000 versus 22,000,000): the distance jumps to
roughly **2,000,000**, and **visits become invisible**. Nothing about the
two customers changed - only the measurement unit did.

The fix is to standardise each variable to zero mean
and unit standard deviation via `x' = (x - mean) / sd`. Every variable
then contributes on **a common scale**, so the clustering reflects **the
pattern in the data** rather than **the measurement unit**. The slide's
rule in bold: every distance-based method - K-Means, hierarchical, KNN,
SVM - **requires** standardised inputs, **unless** all variables already
share a meaningful unit.

### The link to evaluation

Distance is used not only to assign clusters but
also to **score** a clustering: intra-cluster cohesion is measured by the
summed squared distance to the centroid, and inter-cluster separation by
the distance between centroids. Because both quantities come from the
same `d`, a wrong distance corrupts **both the result and the metric
judging that result** - which is why the distance must be chosen up front
and justified explicitly.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 14
(the three distances, the Minkowski family, the data-type table), 15 (the
income-and-visits example and the standardisation rule), 16 (cohesion and
separation), 17 (within-cluster variation), 18-19 (the hand-worked
example), 13 (distance as the first of the 4 requirements), 36 (linkage
as the distance between two clusters), 64 (the same standardisation
argument for PCA).

## Related

- [[clustering-k32]] - the context: distance is
  clustering's first component.
- [[k-means-clustering-k32]] - uses Euclidean
  distance, and is therefore scale-sensitive.
- [[hierarchical-clustering-k32]] - additionally
  needs a notion of distance between two **clusters**, i.e.
  linkage.
- [[choosing-k-elbow-silhouette]] - both WCSS and
  the silhouette are computed from the same distance.
- [[k-nearest-neighbors-k32]] - the same scaling
  problem on the supervised side, met in Chapter 3.
- [[pca-k32]] - PCA has a parallel standardisation
  argument (covariance versus correlation).
