---
type: concept
title: "Choosing m: Kaiser, Scree, Cumulative Variance, Cross-Validation"
tags: [chapter-4, k32, pca, kaiser-rule, scree-plot, cross-validation]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

m is the number of principal components retained,
PCA's key parameter - exactly the role K plays on the clustering side.
The chapter gives **four standard answers** (slide 59): **Kaiser's
rule**, the **scree plot**, **cumulative variance**, and
**cross-validation**.

## Explanation

### The four rules

1. **Kaiser's rule** - on **standardised** data,
   keep components with `lambda_m > 1`, since they explain **more than a
   single original variable would**. The threshold is not arbitrary:
   after standardisation `trace(R) = p`, so **the average eigenvalue is
   exactly 1** - a component below 1 summarises worse than keeping one
   original variable.
2. **The scree plot** - plot the eigenvalues in
   order and **keep the components before the "elbow"**. The same visual
   heuristic as the WCSS elbow, with the same weakness: two people can
   read two different break points.
3. **Cumulative variance** - keep enough components
   to reach a target, e.g. **80% or 90%**. The easiest rule to report,
   and the one the syntax
   `PCA(n_components=0.80, svd_solver="full")` implements
   directly.
4. **Cross-validation** - if PCA feeds a predictive
   model, **choose the m that minimises validation error**. This is the
   only one of the four with an **external** criterion, and slide 79 says
   plainly that it is the right rule whenever a target exists: **m is a
   hyperparameter: tune it against validation error, not a scree
   plot**.

### The example where all three rules agree

Slide 60 uses 8 correlated socio-economic
indicators, `n = 200`, standardised. The eigenvalues: PC1 is 4.281
(53.5%), PC2 is 2.029 (25.4%, cumulative 78.9%), then PC3 drops sharply
to 0.474 (5.9%), with the rest at 0.310, 0.276, 0.236, 0.229, 0.165.
Kaiser keeps 2 (only PC1 and PC2 exceed 1); the scree plot breaks clearly
at PC3; cumulative variance reaches 78.9% with 2. **All three agree: keep
2 components, cutting the dimension from 8 to 2.**

This is a **model** example, and it should be
remembered as one: on real data the three rules **often disagree**, and
then choosing m becomes a decision that must be argued in words in the
report - exactly what items (i) and (ii) of the slide-83 assignment
require.

### Reading an eigenvalue table like an economist

Two signals worth noticing beyond counting
components. First, **a very large first eigenvalue** (more than half the
total) usually means **a single general size factor** dominates -
useful if the goal is a composite index, but suspicious if the goal is
finer structure. Second, **near-zero final eigenvalues** are not noise
but a sign of **near collinearity**: one or more variables carry almost
no information the others do not already hold - exactly the situation in
which PCA is most valuable as preprocessing before a regression.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 59
(the four rules, the `EVR_m` formula), 60 (the 8-indicator example, the
eigenvalue table, all three rules agreeing), 63 (step 5 of the 7-step
workflow), 64 (`trace(R) = p` as the origin of Kaiser's rule), 71 (the
`n_components=0.80` syntax), 79 (m as a hyperparameter tuned by
`GridSearchCV`), 81 (the summary table: m chosen by Kaiser, scree,
cumulative percentage).

**A note on the shipped code**:
`Example3.8_PCA_Diabetes.py` hard-codes `n_components = 2` and **draws no
scree plot**, although slides 59-60 devote two pages to choosing m.
Likewise `Example3.8_PCA_CompressImage.py` hard-codes
`n_components = 20` with no justification.

## Related

- [[pca-k32]] - step 5 within the 7-step
  workflow.
- [[eigenvalues-and-eigenvectors]] - the eigenvalues
  feed every rule here.
- [[choosing-k-elbow-silhouette]] - the parallel
  problem on the clustering side, with the same visual-heuristic
  difficulty.
- [[pca-combined-with-other-algorithms-k32]] - where
  the fourth rule (cross-validation) becomes the right one.
- [[train-test-split-and-cross-validation]] - the
  fourth rule's tool, taught in Chapter 3.
