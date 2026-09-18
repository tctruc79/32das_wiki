---
type: concept
title: "Hierarchical Clustering, Linkage and the Dendrogram"
tags: [chapter-4, k32, hierarchical-clustering, linkage, dendrogram]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

Hierarchical clustering builds **the whole family of
nested partitions for every K in one run**, instead of returning a single
partition. The agglomerative version (bottom-up, the standard) starts by
treating each observation as its own cluster, then repeatedly **merges
the two closest clusters** until only one remains. The result is
displayed as a **dendrogram**, and the number of clusters is read off by
**cutting the tree at a chosen height**.

## Explanation

### Why it is needed

Slide 34 gives 3 reasons, all of them K-Means'
limitations: K-Means **demands the number of clusters up front**; its
result **depends on K randomly initialised centroids**; and in many
situations **it is not clear how many clusters are needed**. Hierarchical
clustering answers all three: one run, one picture, every K. The
trade-off is cost: `O(n^2)` memory and `O(n^2 log n)` time, so it is
**impractical beyond a few tens of thousands of points**.

### The algorithm and irreversibility

The agglomerative algorithm: start with n clusters
(one per observation); repeat two steps - (1) identify the two closest
clusters, (2) merge them - until all observations are in one cluster. The
opposite direction is **divisive** (top-down: start with one cluster and
split), rarely used because it is more expensive.

The key note, and the deepest difference from
K-Means: **merges are irreversible**. A point placed in the wrong branch
early **can never move**, whereas K-Means **reassigns everything every
iteration**. This is why one noisy point sitting between two groups can
corrupt the whole upper structure of the tree, especially under single
linkage.

### The four linkages

"The two closest clusters" needs a definition, and
that definition is the **linkage**:

| Linkage | Behaviour | Watch out for |
|---|---|---|
| Single (nearest pair) | Finds long, chained shapes | "Chaining": one bridge point merges two genuinely separate groups |
| Complete (farthest pair) | Compact, roughly equal-sized clusters | Breaks up genuinely elongated clusters |
| Average (mean of all pairs) | A compromise between the two above | Less interpretable geometry |
| Ward (minimum WCSS increase) | Close to K-Means' behaviour | Requires Euclidean distance; the usual default |

Worth remembering: **Ward linkage optimises the same
quantity K-Means optimises** (the increase in WCSS), so it produces the
same compact, round clusters - which is why it is the default, but also
why it **does not** help if your problem is oddly shaped clusters.

### Reading and cutting a dendrogram

Four things to know (slide 39): **the height of a
horizontal bar is the distance at which those two clusters merged**; a
**horizontal cut at height h** gives one clustering, and **the number of
vertical lines it crosses is K**; in the slide's example, cutting at 3.3
gives `{A, B, C}` and `{D, E}`, while cutting at 2.0 gives `{A, B}`,
`{C}`, `{D, E}`; and you should look for a **tall vertical gap**, because
a large jump in merge height means the two branches are **genuinely far
apart** - the dendrogram's equivalent of the elbow on the K-Means
side.

The important attached warning: **do not over-read
the horizontal order**. The tree can be **flipped at any node** without
changing its content, so two leaves adjacent along the bottom axis **do
not thereby resemble each other**. Only the heights carry
information.

### The comparison with K-Means

| Criterion | K-Means | Hierarchical |
|---|---|---|
| Number of clusters | Fixed in advance | Decided afterwards, by cutting the tree |
| Output | One flat partition | A full nested tree |
| Reproducible? | No - depends on initialisation | Yes - deterministic |
| Complexity | Roughly `O(nKpI)`, scales well | `O(n^2)` memory; poor beyond 10-50 thousand points |
| Reassignment | Points can change cluster | Merges are irreversible |
| Cluster shape | Spherical, similar sizes | Depends on the linkage |
| Outliers | Distort the centroids | Often isolated as singleton branches |
| Best for | Large n, known K | Small n, exploring structure |

The **outliers** row is an under-mentioned advantage
of hierarchical clustering: an extreme point usually shows up as **a
singleton branch merging very late**, so the dendrogram is itself an
outlier-detection tool - whereas in K-Means the same point merely drags a
centroid off in silence.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 34
(why it is needed), 35 (the agglomerative algorithm and irreversibility),
36 (the four linkages), 37-38 (the hand-worked complete-linkage example),
39 (reading and cutting a dendrogram), 40 (the example's dendrogram), 41
(the comparison table with K-Means), 20 (its place in the do-not-fix-K
family), 76 (it runs much faster in a PCA-reduced space).

**A source-gap note**: hierarchical clustering is
taught across 7 slides but **the chapter ships no code for it** - all 7
`.py` files are K-Means or PCA. Practising it requires finding
`scipy.cluster.hierarchy.linkage` with `dendrogram`, or
`sklearn.cluster.AgglomerativeClustering`, yourself.

## Related

- [[k-means-clustering-k32]] - the method it is
  compared against on slide 41, and the behaviour Ward linkage
  mimics.
- [[distance-measures]] - linkage lifts a distance
  between two **points** to a distance between two **clusters**.
- [[choosing-k-elbow-silhouette]] - a tall vertical
  gap in the tree plays the role of the elbow.
- [[clustering-k32]] - the general frame;
  hierarchical clustering belongs to the do-not-fix-K family.
- [[dbscan-and-gaussian-mixture]] - the other two
  methods in slide 44's set of four.
