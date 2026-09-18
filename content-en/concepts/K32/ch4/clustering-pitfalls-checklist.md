---
type: concept
title: "The 7-Point Checklist Before Presenting a Clustering"
tags: [chapter-4, k32, clustering, diagnostics, stability, gap-statistic]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

This checklist (slide 45) is what to run **before
presenting** a clustering result. It exists for the reason given on slide
8: the algorithm always returns K clusters, even from noise, so **no
metric automatically tells you the result is wrong**. The seven checks
are the substitute for that metric, and the slide's key idea is: **a
clustering is a hypothesis, not a finding.**

## Explanation

### The seven items, and what each one fixes

1. **Did you standardise?** Unscaled variables let
   the largest-variance one decide everything. This is the error slide
   15's income/visits example illustrates: merely changing a unit changes
   the whole result.
2. **Did you justify K?** Show the **elbow and the
   silhouette**, not a number pulled from the air.
3. **Are the clusters stable?** Re-run on
   **bootstrap samples** or with a **different seed**. If the segments
   change completely, they are not real. This addresses exactly K-Means'
   "converges to a local optimum, depends on initialisation"
   limitation.
4. **Would random data give the same picture?**
   K-Means **partitions uniform noise happily**. The **gap statistic**
   tests exactly this. It is the most commonly skipped of the seven, and
   the only one that places the result beside an external
   benchmark.
5. **Is the distance appropriate?** Euclidean on
   **categorical dummies** is usually meaningless - use **Gower** or
   **K-Modes**.
6. **Did outliers drive the result?** Check for
   **tiny clusters of one or two points** - the classic sign that a few
   extreme points have captured a centroid of their own.
7. **Can you name each cluster?** **Profile the
   centroids on the original variables.** A segment with no interpretable
   story is unlikely to be actionable.

### The first three are technical, the last four methodological

Items 1-3 check whether the **computational
process** was right. Items 4-7 check a different and harder question:
**whether the result means anything**. Item 4 asks if it beats noise;
item 5 if the measure suits the nature of the data; item 6 if a handful
of observations drove it; item 7 if it can be interpreted. A report doing
only items 1-3 can still present a completely meaningless result without
a single arithmetic error.

### The link to the assignment requirements

The four mandatory report items on slide 83 are
almost a condensed version of this checklist: (i) justify the scaling
decision corresponds to item 1; (ii) an elbow and silhouette plot, or a
scree plot, corresponds to item 2; (iii) a profile of each cluster or an
interpretation of each component in words corresponds to item 7; (iv) one
honest limitation covers the rest. In other words, slide 45 teaches the
practice and slide 83 grades it.

### Discussion question 5 is the exam on this checklist

Slide 82's question 5 sets the scenario: you cluster
customers and get four segments, your manager asks "how do we know these
are real?" - what evidence do you present? A good answer comes straight
from the checklist: show that the data **prefers** K = 4 (item 2), that
the result **reproduces** under resampling (item 3), that it **beats a
structureless null model** (item 4), that the segments **differ on
variables not used in the clustering** (an extension of item 7), and that
each segment **can be described in one sentence** (item 7).

## Appears in

[[chapter04-unsupervised-learning-k32]] - slide 45
(the full checklist), 8 (why it exists), 15 (item 1), 21 and 30 (item 2),
25 (items 3 and 6), 14 (item 5), 81 (both tools only generate
hypotheses), 82 question 5 (the discussion question that examines this
checklist), 83 (the 4 mandatory report items).

## Related

- [[unsupervised-learning-framework]] - slide 8's
  warning, to which this checklist is the practical answer.
- [[choosing-k-elbow-silhouette]] - the tools for
  items 2 and 4.
- [[distance-measures]] - the basis for items 1 and
  5.
- [[k-means-clustering-k32]] - most of the seven
  items arise from this algorithm's limitations.
- [[pca-combined-with-other-algorithms-k32]] - slide
  76's circularity warning is the eighth item to add whenever PCA comes
  first.
