---
type: concept
title: "Clustering"
tags: [chapter-4, k32, clustering, unsupervised-learning]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

Clustering is **the organisation of unlabelled data
into similarity groups called clusters**. Formally: assign the n
observations into K clusters `C1, ..., CK` so that items in the same
cluster are similar to each other and dissimilar to items in other
clusters. A valid partition must be **mutually exclusive** (`Ck`
intersect `Ck'` is empty for k not equal k' - no observation belongs to
two clusters) and **exhaustive** (the union of all `Ck` is the whole
index set - every observation is assigned).

## Explanation

### One difference from classification

Classification is **supervised**: the classes
**exist before the analysis**, and the model's job is to learn the
boundary between them. Clustering is **unsupervised**: the groups **only
exist after it** - and they **may be an artefact**. A chain of
consequences follows: K is the analyst's choice rather than something the
problem fixes; cluster labels have no external meaning (swapping the
names of cluster 1 and cluster 2 changes nothing); and there is no
accuracy to measure, so you must use internal measures such as the
silhouette plus a stability check.

### The 4 requirements

Slide 13 lists all four components, and they are
worth memorising because each is a separate decision:

1. **A proximity measure** - similarity
   `S(xi, xj)`, large when two points are alike, or dissimilarity
   (distance) `d(xi, xj)`, small when they are alike.
2. **A criterion function** to score a candidate
   clustering, e.g. the within-cluster sum of squares.
3. **An algorithm** to search for a good clustering
   under that criterion.
4. **A decision rule for K**.

The attached key idea: **change the distance and you
change the clusters.** The proximity measure is a **modelling choice**,
not a technical detail - so it belongs in the report's justification like
any other modelling choice.

### Applications

The chapter lists 7 applications (slide 42) plus 2
presented in depth (slides 32-33): **customer segmentation** by RFM
(recency, frequency, monetary value) - the most common commercial use;
**fake news detection** by clustering articles on their word vectors;
**marketing and sales**, finding people similar to those who responded to
a past campaign; **document analysis**, organising collections into
topics without a taxonomy; **anomaly and fraud detection**, revisiting
points far from every centroid or inside very small clusters; **regional
economics**, grouping provinces by socio-economic indicators;
**portfolio construction**, clustering assets by return correlation;
**logistics**, clustering a hotel supply chain's 618 locations to define
delivery zones, each centroid a candidate depot; and **agriculture**,
segmenting a grape leaf image into healthy tissue, lesion and background,
then passing the lesion region to a supervised classifier.

### The two families

Slide 20 splits them by how they treat K. The
**fix K in advance** family: partitional methods - K-Means, K-Medoids,
Gaussian mixtures - fast and scalable, but K must be justified. The **do
not fix K** family: hierarchical methods build the whole nested family
for every K in one run; density methods such as DBSCAN infer the number
from the data; and you choose K **after** seeing the structure.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 11
(the definition and the 2 partition conditions), 12 (the difference from
classification), 13 (the 4 requirements), 20 (the two families), 42-43
(applications), 32-33 (2 detailed applications), 81 (the summary table:
clustering reduces rows).

## Related

- [[distance-measures]] - the first of the 4
  requirements.
- [[k-means-clustering-k32]] - the chapter's main
  partitional algorithm.
- [[hierarchical-clustering-k32]] - the family that
  does not need K in advance.
- [[choosing-k-elbow-silhouette]] - the fourth
  requirement: the decision rule for K.
- [[dbscan-and-gaussian-mixture]] - two methods
  beyond the main two.
- [[clustering-pitfalls-checklist]] - what to check
  before believing the clusters.
- [[classification-k32]] - the contrasting problem;
  both slide 12 and slide 82's question 1 ask for this
  comparison.
