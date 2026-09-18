---
type: concept
title: "DBSCAN and Gaussian Mixture Models"
tags: [chapter-4, k32, dbscan, gmm, clustering, density-based]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

Beyond K-Means and hierarchical clustering, the
chapter names two more methods. **DBSCAN** defines clusters by
**density**: a cluster is a dense region, and points in sparse regions
are labelled **noise**. A **Gaussian mixture model (GMM)** models the
data as a **mixture of K Gaussians**, giving **soft assignments** as
probabilities `P(cluster k | x)` rather than a hard label.

## Explanation

### DBSCAN: the three problems it solves

DBSCAN has two parameters: `epsilon` (the
neighbourhood radius) and `minPts` (the minimum number of points in that
neighbourhood). It solves exactly three of K-Means'
limitations:

1. **It does not need K.** The number of clusters
   follows from the density parameters, not from the user.
2. **It finds clusters of any shape.** K-Means
   assigns each point to the nearest centre so its clusters are always
   convex; DBSCAN follows the shape of the dense region, so it handles
   crescents and rings.
3. **It has an explicit place for outliers.**
   K-Means must put every point somewhere, so outliers drag centroids
   towards themselves; DBSCAN calls them noise - exactly what fraud or
   anomaly work needs.

The price: **two parameters to tune** instead of one
K, and the slide notes DBSCAN **struggles when clusters have very
different densities** - a single `epsilon` cannot be both wide enough for
a sparse cluster and narrow enough for a dense one. It also still relies
on a distance, so it degrades in high dimensions.

### GMM: soft assignment and information-criterion model choice

GMM is fitted by the **EM** (expectation-
maximisation) algorithm and has three memorable properties. First, **soft
assignment**: each point receives a probability of belonging to each
cluster, so a customer can be "70% segment A, 30% segment B" - something
K-Means cannot express. Second, **elliptical clusters of differing size
and orientation**, because each component has its own covariance matrix;
**K-Means is exactly the special case** of GMM with spherical, equal
covariance across clusters. Third, and this is the biggest
methodological advantage: **K can be chosen by BIC or AIC**, i.e. a
**genuine model-selection criterion** rather than a visual heuristic like
the elbow.

### How to choose among the four methods

Slide 44's closing line is the chapter's most
compact decision guide:

| Situation | Method |
|---|---|
| Spherical blobs and large n | K-Means |
| Odd shapes, or expected noise | DBSCAN |
| Overlapping groups, probabilities wanted | GMM |
| Small n, you want to **see** the structure | Hierarchical |

### Why PCA helps both

Slide 76 notes: for DBSCAN and GMM, PCA
**stabilises density estimation**, which degrades badly in high p. The
reason is the curse of dimensionality: as p grows, all pairwise distances
become nearly equal, so both the notion of a "dense region" (DBSCAN) and
the estimation of each component's covariance matrix (GMM) lose meaning.
Reducing to 2-10 principal components restores the conditions under which
these methods work.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slide 44
(both methods and the choice table), 20 (DBSCAN in the do-not-fix-K
family), 25 (the K-Means limitations these two fix), 76 (PCA stabilising
density estimation), 82 (discussion question 3 asks you to describe
another clustering method and say what problem it solves).

**A source-gap note**: DBSCAN and GMM get **one
conceptual slide** (44) and **no code example** in the chapter. The syntax
must be found elsewhere (`sklearn.cluster.DBSCAN`,
`sklearn.mixture.GaussianMixture`).

## Related

- [[k-means-clustering-k32]] - the method whose
  limitations both are introduced to fix.
- [[hierarchical-clustering-k32]] - the fourth
  method in the choice table.
- [[choosing-k-elbow-silhouette]] - GMM's BIC/AIC is
  a more rigorous answer to the same question of choosing K.
- [[pca-combined-with-other-algorithms-k32]] - why
  PCA usually precedes these two.
- [[clustering-pitfalls-checklist]] - item 5 (is the
  distance appropriate) bears directly on method choice.
