---
type: concept
title: "K-Means Clustering"
tags: [chapter-6, k31, machine-learning, unsupervised-learning, clustering]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

K-Means is an iterative clustering algorithm:
initialize K random centroids, assign each data point to the closest
centroid, update centroids to the average of assigned points, repeat
until stable.

## Explanation

- **Steps**: **Initialize** — pick K random points
  as centroids; **Iterate** — compute distance from each point to K
  centroids, assign to the closest, update centroids to the average of
  assigned points; **Stop** when no assignment changes.
- **Requires K in advance**: unlike
  [[hierarchical-clustering]], K-Means needs the number of clusters K
  known upfront. Results depend on the initial (random) centroids — can
  give different results across runs.
- **Implementation** (`sklearn.cluster.KMeans`): key
  parameters include `n_clusters` (K), `init` (centroid init method),
  `n_init` (runs with different initializations), `max_iter` (max
  iterations), `tol` (convergence tolerance).
- **Real-world applications**: optimizing
  transportation networks in supply chains; diagnosing plant leaf
  diseases from image data.

## Appears in

- [[chapter06-clustering]] — algorithm steps, Python
  code, examples, real-world applications.
- [[chapter07-pca]] — PCA makes K-Means clusters
  more compact when applied first as a preprocessing step.

## Related concepts

- [[clustering]] — the general concept framework,
  the distance measures used to determine "closest."
- [[hierarchical-clustering]] — the alternative when
  the number of clusters is unknown upfront.
