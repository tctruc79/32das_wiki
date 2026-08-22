---
type: source
title: "Chapter 6 (K31) — Clustering in Unsupervised Learning"
tags: [chapter-6, k31, machine-learning, unsupervised-learning, clustering]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter06_Clustering.pdf"
---

## Metadata

- **Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 27.
- **Position in the course**: the first
  **unsupervised learning** chapter — a full shift to the unlabeled
  branch, after 4 chapters of supervised learning (Chapters 3-5).

## Summary

- 4 parts: clustering definition, distance/cluster
  evaluation measures, K-Means algorithm, Hierarchical Clustering
  algorithm.
- The linkage methods slide (slide 23) has only an
  image, no detailed text extractable.

## Key content

### 6.1 What is clustering (slides 3-5)

- **Definition** (slide 3): the organization of
  unlabeled data into similarity groups called clusters. In other words,
  we need to assign n observations into K clusters. A cluster is a
  collection of data items "similar" to each other and "dissimilar" to
  items in other clusters. **Requirements**: **Mutually exclusive** —
  each observation cannot belong to more than one cluster; **Exhaustive**
  — all clusters together cover all observations.
- **Classification vs Clustering** (slide 4): the
  slide has only a comparison image, no extractable text — but the core
  difference (implied throughout the chapter) is Classification needs
  labels (supervised), while Clustering doesn't (unsupervised).
- **What clustering needs** (slide 5): **proximity
  measure** — similarity S(xᵢ,xⱼ) large if similar; dissimilarity/
  distance D(xᵢ,xⱼ) small if similar; **criterion function** to evaluate
  a clustering; **algorithm** to carry out clustering.

### 6.2 Distance (dissimilarity) measures (slides 6-12)

- **3 distance measures** (slide 6): **Euclidean
  distance** — d(xᵢ,xⱼ) = √Σ(xᵢₕ−xⱼₕ)²; **Manhattan distance** —
  d(xᵢ,xⱼ) = Σ|xᵢₕ−xⱼₕ|; both are special cases of the **Minkowski
  distance** — d(xᵢ,xⱼ) = (Σ|xᵢₕ−xⱼₕ|ᵖ)^(1/p), p a positive
  integer.
- **Cluster evaluation** (slide 7): **Intra-cluster
  cohesion (compactness)** — measures how near data points in a cluster
  are to the centroid; SSE is a commonly used measure. **Inter-cluster
  separation (isolation)** — different cluster centroids should be far
  apart.
- **Within-cluster variation W(.)** (slide 8): based
  on distances between observation pairs. With Euclidean distance dᵢⱼ
  between xᵢ and xⱼ in a cluster, W(Cₖ) is the squared average distance
  between each pair of observations: W(Cₖ) = (1/|Cₖ|)ΣΣ(xᵢₖ−xⱼₖ)².
- **Defining the number of clusters** (slide 11): 2
  approaches — fix the number of clusters to K; or find the best
  clustering per the criterion function (don't fix the count).

### 6.3 K-Means clustering (slides 13-20)

- **An iterative algorithm** (slide 13):
  **Initialize** — pick K random points as cluster centers; **Iterate**
  — compute distance from each point to K centroids, assign points to
  the closest center, change each center to the average of its assigned
  points; **Stop** when no points' assignments change.
- **Python code** (slide 17): `import
  matplotlib.pyplot as plt; from sklearn.datasets import make_blobs;
  from sklearn.cluster import KMeans; km = KMeans(n_clusters=2,
  init='random', n_init=10, max_iter=300, tol=1e-04,
  random_state=0)`.
- **Real-world applications** (slides 19-20): a
  hotel supply chain (618 hotel locations, 5-30 service suppliers) — the
  algorithm uses real-time data to find the optimum transportation
  network with lowest real cost; diagnosis and recognition of grape leaf
  diseases.

### 6.4 Hierarchical Clustering (slides 21-25)

- **Why needed** (slide 21): K-Means requires the
  number of clusters at the start. K-Means' results depend on the
  initial (random) centroids. But in many situations it's unclear how
  many clusters are needed → Hierarchical clustering is more suitable.
  Results can be shown via a **dendrogram** — used to decide how many
  clusters to take.
- **Algorithm** (slide 22): starts by treating each
  observation as a separate cluster. Repeat 2 steps: (1) identify the 2
  closest clusters, (2) merge the 2 most similar clusters. This
  continues until all clusters are merged together.
- **Linkage methods** (slide 23): only an image, no
  detailed content extractable — need to view the original slide for
  single/complete/average linkage distinctions.
- **Dendrogram** (slide 24): observations are
  allocated to clusters by drawing a horizontal line through the
  dendrogram.
- **Other clustering applications** (slide 25):
  identifying fake news based on content (clustering words to determine
  genuine vs fake pieces); marketing and sales (based on a person's
  specific characteristics, share campaigns successful with similar
  people); document analysis (cluster and organize similar
  documents).
- **Group discussion** (slide 26): list similarities/
  differences between Clustering and Classification; applications of
  Hierarchical Clustering vs K-Means; are there other clustering methods
  besides K-Means and Hierarchical?

## Links

- [[clustering]] — the overview concept page:
  definition, distance measures, cluster evaluation.
- [[k-means-clustering]] — the K-Means
  algorithm.
- [[hierarchical-clustering]] — the hierarchical
  algorithm + dendrogram.
- [[machine-learning-overview]] — Clustering is the
  first unsupervised branch taught in detail in the course.
- [[classification]] — the supervised vs
  unsupervised contrast point, directly posed as a comparison question in
  this slide.
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter06_Clustering.pdf`, slides 1-27.
