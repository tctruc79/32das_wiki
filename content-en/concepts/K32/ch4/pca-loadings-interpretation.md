---
type: concept
title: "Interpreting Loadings: Size Factors and Contrast Factors"
tags: [chapter-4, k32, pca, loadings, composite-index]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

**Loadings** are the p values in an eigenvector,
each showing **how much one original variable contributes to that
principal component**. Interpreting loadings is step 7 - the last step -
of the PCA workflow, and the point at which **the economics comes back
in** after a chain of algebra: a component only becomes a usable concept
once you can read **what it means**.

## Explanation

### The two basic patterns

Slide 61 teaches the reading with an 8-indicator
socio-economic example (correlation-matrix PCA), whose first two
components illustrate the two most common patterns:

**PC1 (53.5%) - a size or general development
factor.** All loadings **positive and similar**: GRDP per capita 0.37,
industrial output 0.36, FDI inflow 0.39, firm density 0.28, schooling
years 0.35, literacy rate 0.35, health spending 0.39, internet access
0.33. The reading: a province scores high when it **does well on
everything**. The use: take the PC1 score itself as a **composite
development index**.

**PC2 (25.4%) - a contrast factor.** Economic
loadings **negative**, social loadings **positive**: firm density -0.48,
GRDP per capita -0.35, FDI -0.26, while schooling +0.40, literacy +0.38,
health spending +0.29. The reading: this component **separates provinces
that are economically strong but socially lagging** from **the
reverse** - it measures not level but **structural
imbalance**.

The pattern is very common in economic data: **PC1
is size, PC2 onwards is structure.** It is also why slide 82's discussion
question 4 asks for a case where the highest-variance direction is
**not** the most interesting - with data in levels, PC1 usually restates
what everyone already knows (which province is big), while the
interesting question lives in the later components.

### The sign warning

**Eigenvector signs are arbitrary.** Software may
return `-v1` instead of `v1`; the two are **the same component** and the
interpretation is **unchanged**, because a component defines a
**direction**, not an orientation. The practical consequence on slide 61:
**flip signs for readability before reporting** - if PC1 comes out
negative for the developed provinces, multiply the vector by -1 so that
"high score = more developed", and say that you did. Without the flip the
loadings table is still correct but the story you tell comes out
backwards.

### Why interpretability is a genuine limitation

Slide 73 lists "components are often hard to
interpret" as a PCA limitation, and the reason is in the definition: each
component is a **mixture of all p variables**, so when p is large and the
loadings are spread evenly, the component corresponds to no
pre-existing named concept. Slide 61's 8-indicator example is
interpretable **because** its loadings have clear structure (all
positive, or split into two sign groups); if they were jumbled there
would be no story to tell. **Sparse PCA** (also on slide 73) exists
precisely to fix this: it forces most loadings to zero, so each component
involves only a few variables and reads immediately.

### The link to the reporting requirement

Item (iii) of the slide-83 assignment requires **a
profile of each cluster or an interpretation of each component in
words**. On the PCA side, that is exactly this page's job: build the
loadings table (one row per original variable, one column per component,
as the slide-71 code does), read the signs and magnitudes, then **name**
each component. A component you cannot name is like a cluster you cannot
name in checklist item 7: hard to act on.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slide 61
(the loadings table, size and contrast factors, the sign warning), 59
(loadings as the eigenvector's entries), 63 (step 7 of the workflow), 71
(the code building the loadings `DataFrame`), 73 (interpretability as a
limitation; Sparse PCA as the fix), 48 (using PCA to build composite
indices), 82 question 4 (the highest-variance direction not being the
interesting one), 83 item (iii), 84 (the PCI and VHLSS project ideas are
both loadings-interpretation problems).

**A note on the shipped code**: none of the
chapter's `.py` files prints a loadings table -
`Example3.8_PCA.py` prints `components_` as a raw array with no variable
names, and the other two PCA files print nothing about loadings. Only the
slide-71 code does this properly.

## Related

- [[pca-k32]] - step 7 of the 7-step
  workflow.
- [[eigenvalues-and-eigenvectors]] - the loadings
  are the eigenvector's entries.
- [[choosing-number-of-components]] - m must be
  settled before interpreting.
- [[clustering-pitfalls-checklist]] - item 7 is the
  parallel requirement on the clustering side: being able to name each
  cluster.
- [[pca-combined-with-other-algorithms-k32]] - when
  PCA is preprocessing, the loadings are the only way to say what the
  downstream model is using.
