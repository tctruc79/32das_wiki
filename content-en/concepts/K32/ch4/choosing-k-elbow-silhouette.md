---
type: concept
title: "Choosing K: Elbow, Silhouette and the Gap Statistic"
tags: [chapter-4, k32, clustering, wcss, elbow-method, silhouette]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

Choosing K is the fourth requirement for clustering:
a **decision rule for the number of clusters**. The central difficulty is
that K cannot be chosen by minimising the objective, because **WCSS
always falls as K rises** and is zero at `K = n`. The chapter therefore
offers three tools: the **elbow method**, the **silhouette score**, and
the **gap statistic**.

## Explanation

### The TSS = WSS + BSS decomposition

A good clustering is both **compact** (points close
to their own centroid) and **well separated** (centroids far apart).
Slide 16 shows these are really one goal, via the identity
`TSS = WSS + BSS`, in which **TSS is a constant** independent of the
partition. Consequence: **reducing WSS is the same as increasing BSS**,
so optimising either suffices - and that is what K-Means does with WSS
(also called WCSS or SSE).

### The elbow method and its limits

`WCSS(K)` is the summed squared distance from each
point to its centroid, over all K clusters. Because WCSS **always falls**
as K rises, it cannot be minimised; instead you look for the **elbow** -
the point after which extra clusters buy little extra compactness. Slide
21's example runs 285, 149, 50 and then only 50, 39, 29: the marginal
gain **collapses after `K = 3`**.

Two important caveats. First, the elbow is a
**visual heuristic**, not an optimality criterion - two people can read
two different elbows off the same plot. Second, **a smooth curve means
there is no elbow, and probably no real cluster structure** - which is
useful information, not a failure of the method.

A common confusion between two quantities used
interchangeably: `scikit-learn`'s `inertia_` is the sum of **squared**
distances (WCSS), whereas the "distortion" in the chapter's shipped
script is the **mean unsquared distance** to the nearest centroid. The
two curves have similar shapes and usually give the same elbow, but they
are **not in the same units** and are not directly comparable.

### The silhouette score

The silhouette is the tool slide 30 and the slide-83
assignment both require **alongside** the elbow. The essential difference
from WCSS: the silhouette **has a maximum**, so it gives a genuine answer
to "which K is best?" rather than a monotonically falling curve. It is
defined per point by comparing the mean distance to points **in the same
cluster** with the mean distance to points in the **nearest neighbouring
cluster**, then averaged over the data. A practical note from slide 30:
the silhouette is **undefined at `K = 1`**, so the loop must start at
`K = 2`, and the argmax must be **offset back** accordingly (`+ 2` in the
slide's code).

### The gap statistic and the null model

Item 4 on slide 45's checklist asks what neither the
elbow nor the silhouette answers by itself: **would random data give the
same picture?** K-Means partitions uniform noise happily, and will return
a perfectly ordinary WCSS value and silhouette score. The **gap
statistic** tests exactly this: it compares the WCSS obtained on the real
data with the **expected** WCSS on structureless reference data, choosing
the K where the gap between the two curves is largest. Practically, this
is why a clustering report should include **the null model's silhouette
level** as a benchmark, not just the result's own silhouette.

### Three tools, three roles

| Tool | Question it answers | Weakness |
|---|---|---|
| Elbow (WCSS) | Do extra clusters still buy compactness? | Always falls; the elbow is a visual judgement |
| Silhouette | Which K gives the most compact, best separated clusters? | Still assumes convex, compact clusters; meaningless for odd shapes |
| Gap statistic | Does this structure beat noise? | Computationally costly; a reference distribution must be chosen |

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 16
(`TSS = WSS + BSS`), 17 (within-cluster variation), 20 (the two
philosophies about K), 21 (the elbow and the smooth-curve warning), 30
(the code with a silhouette and the `best_k` selection), 45 (checklist
items 2 and 4), 81 (the summary table: K chosen by elbow, silhouette, gap
statistic).

The shipped `Example3.7_KMeans_Elbow.py` builds the
elbow curve but **computes no silhouette**, even though slide 30 and the
slide-83 assignment both ask for both.

## Related

- [[k-means-clustering-k32]] - the algorithm that
  demands K up front, hence the need for these tools.
- [[hierarchical-clustering-k32]] - the other way to
  decide K: cutting the dendrogram after seeing the structure.
- [[clustering-pitfalls-checklist]] - where these 3
  tools become reporting requirements.
- [[choosing-number-of-components]] - the parallel
  problem on the PCA side: choosing m instead of K.
- [[dbscan-and-gaussian-mixture]] - GMM allows
  choosing K by BIC/AIC, a genuine model-selection criterion.
- [[train-test-split-and-cross-validation]] -
  cross-validation, the hyperparameter tool from Chapter 3, reused for m
  in Part 3.
