---
type: concept
title: "K-Means Clustering"
tags: [chapter-4, k32, k-means, clustering, kmeans-plus-plus]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

K-Means is a partitional clustering algorithm: given
the number of clusters K, it seeks the partition `C1, ..., CK`
**minimising the summed squared distance from each point to its
centroid**, i.e. minimising WCSS. That problem is **NP-hard** in general,
so in practice an iterative heuristic known as **Lloyd's algorithm** is
used.

## Explanation

### Objective first, algorithm second

The 2026 presentation is notable: slide 22 states
**what problem K-Means solves** before describing how. This matters
because it explains every limitation that follows: since the objective is
the summed squared distance **to a centre**, the clusters K-Means can
find are **always convex blobs around a point** - there is no way for it
to return a crescent.

Lloyd's algorithm has 3 steps: (1) **initialise** K
centres; (2) **iterate to convergence**, alternating the **assignment
step** (compute each point's distance to the K centres, assign it to the
nearest) and the **update step** (move each centre to the mean of its
members); (3) **stop** when no assignment changes, or the WCSS decrease
falls below the tolerance `tol`. The mathematical guarantee: each step
**can only decrease WCSS**, so the algorithm **always converges** - but to
a **local optimum**, not necessarily the global one.

### Why the centroid form matters

Slide 17 gives two equivalent formulas for
within-cluster variation: the **pairwise** form (the average squared
distance between all pairs in the cluster) and the **centroid** form
(twice the summed squared distance from each point to `mu_k`). That
equivalence is why K-Means is fast: it only needs to hold **K centroids**
and compute `n x K` distances per iteration, instead of forming an
`n x n` distance matrix as hierarchical clustering does. This is the
source of its roughly `O(n K p I)` complexity.

### Initialisation: k-means++

The problem with random initialisation: two starting
centres landing inside **the same true cluster** can trap the algorithm
in a poor local optimum - and **you would never know**, because it still
converges and still returns a plausible-looking figure. **k-means++**
(Arthur and Vassilvitskii, 2007; now the `scikit-learn` default) fixes
this by spreading the initial centres out: (1) pick the first centre
uniformly at random from the data; (2) pick each subsequent centre with
**probability proportional to `D(x)^2`**, where `D(x)` is the distance
from x to the nearest centre already chosen - the further a point is from
the existing centres, the likelier it is to be picked; (3) repeat until K
centres are chosen, then run standard K-Means.

The attached practical rule: **always restart
several times** via `n_init`, keeping the solution with the lowest WCSS.
A version note: from `scikit-learn` 1.4 the `n_init` default is
`"auto"`, so **set it explicitly** if you want reproducible
results.

### Strengths and limitations

| Strengths | Limitations |
|---|---|
| Simple, easy to explain to non-technical stakeholders | K must be chosen before running it |
| Fast, roughly `O(n K p I)` per run | Only finds spherical, similarly-sized clusters |
| Scales to large n (mini-batch variants scale further) | Sensitive to scale and to outliers |
| Centroids read directly as "typical" profiles | Converges to a local optimum, depends on initialisation |
| | Assumes all variables are numeric and Euclidean distance is meaningful |

Two limitations have memorable concrete
consequences: because it can only find spherical, similarly-sized
clusters, K-Means will **split one elongated cluster in two** and **merge
two thin clusters lying close together**; and because the mean is not
robust to outliers, a few extreme points suffice to **drag a centroid
off**, in which case K-Medoids/PAM is preferable, using a real data point
as the representative instead of a mean.

Slide 25's key idea, and the most memorable sentence
about this algorithm: **K-Means does not test whether clusters exist - it
imposes K spherical clusters on whatever you give it.**

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 22
(the objective, NP-hardness, Lloyd's algorithm), 23 (one pass
illustrated), 24 (k-means++), 25 (strengths and limitations), 26-29
(illustrations and interactive demos), 30-31 (the Python example with
scaling and silhouette), 32-33 (the logistics and agriculture
applications), 41 (the comparison table with hierarchical clustering), 17
(the centroid form it optimises), 44 (K-Means as the special case of GMM
with spherical covariance).

Four of the chapter's seven shipped scripts are
about K-Means: `Example3.7_KMeans.py`,
`Example3.7_KMeans_GenerateData_and_Clustering.py`,
`Example3.7_KMeans_Elbow.py` and
`Example3.7_KMeans_ReduceColors.py`.

## Related

- [[choosing-k-elbow-silhouette]] - how to justify
  the K the algorithm demands up front.
- [[distance-measures]] - K-Means uses Euclidean
  distance, hence the standardisation requirement.
- [[hierarchical-clustering-k32]] - the alternative
  when K is unknown or n is small.
- [[dbscan-and-gaussian-mixture]] - the two
  alternatives for odd shapes and for soft assignment.
- [[clustering-pitfalls-checklist]] - the 7 checks,
  most of which come from slide 25's limitations.
- [[clustering-k32]] - the general problem
  frame.
