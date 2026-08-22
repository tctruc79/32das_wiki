---
type: concept
title: "Hierarchical Clustering"
tags: [chapter-6, k31, machine-learning, unsupervised-learning, clustering]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Hierarchical clustering starts by treating each
observation as its own cluster, then repeatedly merges the 2 closest/
most similar clusters until everything merges into one — no need to know
K in advance.

## Explanation

- **Why needed**: K-Means requires knowing the
  cluster count upfront and its results depend on random initial
  centroids. When the right number of clusters is unclear, Hierarchical
  clustering fits better.
- **Algorithm**: treat each observation as its own
  cluster; repeat (1) find the 2 closest clusters, (2) merge them —
  until everything is one cluster.
- **Linkage methods**: determine how to measure
  "distance" between 2 clusters (not just 2 points) — the original slide
  only has an image, no extractable detail on single/complete/average
  linkage; need to view the original slide for the distinction.
- **Dendrogram**: a tree diagram showing the full
  merge history. Determine the final cluster count by drawing a
  horizontal line through the dendrogram — cutting at different heights
  gives different cluster counts.

## Appears in

- [[chapter06-clustering]] — why needed, the
  algorithm, dendrogram.
- [[chapter07-pca]] — works better on a space
  already dimension-reduced by PCA.

## Related concepts

- [[clustering]] — the general concept
  framework.
- [[k-means-clustering]] — the alternative when K is
  known and speed matters more.
