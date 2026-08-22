---
type: concept
title: "PCA Combined with Other Algorithms"
tags: [chapter-7, k31, machine-learning, unsupervised-learning, dimension-reduction, pca]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

PCA is often used as a preprocessing step before
other algorithms (Clustering, Classification, Regression) to remove
correlations, reduce noise, and speed things up — rarely used alone.

## Explanation

- **Why combine**: high-dimensional data causes
  multicollinearity, noise/redundancy, high computational cost. PCA
  addresses all 3 at once by compressing data into fewer dimensions while
  keeping most of the information.
- **+ Clustering**: reduce data to 2-10 PCs before
  clustering. K-Means gets more compact clusters; Hierarchical works
  better on reduced spaces. Applications: customer segmentation,
  grouping documents/images.
- **+ Classification**: improves supervised learning
  by reducing noise and collinearity. Logistic Regression avoids
  multicollinearity; distance-based classifiers like SVM/KNN benefit from
  PCA in high dimensions. Classic example: MNIST digit classification
  using PCA before SVM.
- **+ Regression — Principal Component Regression
  (PCR)**: Step 1 — apply PCA to predictors X; Step 2 — regress y on the
  selected PCs (y ≈ Zγ, Z = XVₘ). Useful when predictors are highly
  correlated — this is an **alternative** to
  [[regularization-ridge-lasso|Ridge/Lasso]] for multicollinearity, but
  the mechanism differs: Ridge/Lasso directly penalizes original
  coefficient magnitude, while PCR transforms the variable space first
  then regresses on the new space. PCR's risk: discarded PCs may still
  hold predictive information (unlike Ridge/Lasso, which keeps all
  original variables, only shrinking coefficients).

## Appears in

- [[chapter07-pca]] — all of section 7.4: why
  combine, PCA+Clustering, PCA+Classification, PCA+Regression
  (PCR).

## Related concepts

- [[pca]] — the mathematical foundation of the
  transform.
- [[regularization-ridge-lasso]] — another
  multicollinearity solution, same problem but a different mechanism than
  PCR.
- [[clustering]], [[classification]] — the 2
  algorithm branches directly supported by PCA.
