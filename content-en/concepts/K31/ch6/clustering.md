---
type: concept
title: "Clustering"
tags: [chapter-6, k31, machine-learning, unsupervised-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Clustering is the organization of unlabeled data
into similarity groups called clusters — each observation belongs to
exactly one cluster (mutually exclusive), and all clusters together cover
all the data (exhaustive).

## Explanation

- **Required components**: a proximity measure
  (similarity or distance), a criterion function to evaluate a
  clustering, and an algorithm to carry it out.
- **3 distance measures** (special/general cases of
  each other): **Euclidean** (square root of sum of squared differences),
  **Manhattan** (sum of absolute differences), **Minkowski** (the general
  form, p a positive integer — p=2 gives Euclidean, p=1 gives
  Manhattan).
- **Cluster evaluation**: **intra-cluster cohesion**
  — data points close to the centroid is better (measured by SSE);
  **inter-cluster separation** — different centroids far apart is
  better. A good clustering maximizes both cohesion and separation at
  once.
- **Difference from Classification**: Clustering
  needs no labels (unsupervised), Classification needs correct labels to
  train (supervised) — same "grouping" goal but entirely different input
  data.

## Appears in

- [[chapter06-clustering]] — definition, distance
  measures, cluster evaluation.
- [[chapter07-pca]] — section 7.4 uses PCA as a
  preprocessing step before clustering.

## Related concepts

- [[k-means-clustering]] — a clustering algorithm
  needing K known in advance.
- [[hierarchical-clustering]] — a clustering
  algorithm that doesn't need K known in advance.
- [[classification]] — the supervised vs
  unsupervised contrast.
