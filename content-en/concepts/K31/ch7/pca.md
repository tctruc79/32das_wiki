---
type: concept
title: "Principal Component Analysis (PCA)"
tags: [chapter-7, k31, machine-learning, unsupervised-learning, dimension-reduction]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

PCA is a dimension-reduction method: summarizing p
original variables with k composite variables (principal components) that
capture as much of the data's variation as possible, with k < p.

## Explanation

- **Core idea**: rotate the coordinate system so the
  new axes align with the data's directions of maximum variation. PC1
  captures the direction of maximum spread; PC2 the maximum spread
  perpendicular to PC1; and so on.
- **Mathematical foundation**: based on the
  **covariance matrix** among the original variables. Its **eigenvalues
  and eigenvectors** determine the principal components — eigenvalue =
  variance explained by that axis, eigenvector = each original variable's
  "contribution" to it. Sum of eigenvalues = trace of the covariance
  matrix = total data variance. Rule of thumb: axes with eigenvalue > 1
  are worth keeping.
- **5-step procedure**: (1) get data, (2) subtract
  the mean/standardize, (3) calculate the covariance matrix, (4)
  calculate its eigenvectors/eigenvalues, (5) choose components from
  them. **Standardization matters**: a high-variance variable dominates
  the PCs unless standardized to unit variance/zero mean first.
- **Applications**: face recognition (each pixel is
  a variable → very high-dimensional, PCA simplifies); image de-noising;
  image compression; visualizing high-dimensional data down to 2-3
  dimensions.

## Appears in

- [[chapter07-pca]] — full definition, covariance,
  eigenvalue/eigenvector, the 5-step procedure, application
  examples.

## Related concepts

- [[pca-combined-with-other-algorithms]] — using
  PCA as a preprocessing step for other algorithms taught in the
  course.
- [[clustering]] — dimension reduction (PCA) and
  clustering are the course's 2 main unsupervised branches.
