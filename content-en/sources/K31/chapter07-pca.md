---
type: source
title: "Chapter 7 (K31) — Principal Component Analysis (PCA)"
tags: [chapter-7, k31, machine-learning, unsupervised-learning, dimension-reduction, pca]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter07_PCA.pdf"
---

## Metadata

- **Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 33.
- **Position in the course**: the **dimension
  reduction** branch of unsupervised learning (after
  [[chapter06-clustering]]) — the most math-heavy chapter (covariance,
  eigenvalue/eigenvector).

## Summary

- 4 parts: (1) what is PCA, (2) how to choose
  principal components (covariance, eigenvalue/eigenvector), (3) the
  5-step procedure + application examples (face recognition, de-noising,
  image compression), (4) combining PCA with other algorithms
  (Clustering/Classification/Regression) — the highest density of
  cross-references in the whole course, synthesizing back into most
  algorithms taught before it.

## Key content

### 7.1 What is PCA (slides 3-10)

- **Definition** (slide 3): invented by Pearson
  (1901) and Hotelling (1933). Probably the most widely-used and
  well-known of the "standard" multivariate methods. Summarizes data with
  p variables (often large) by a smaller set of k composite variables. p
  variables = p dimensions; k composite variables = k **principal
  components (PCs)**. PCA's goal is to reduce dimensions without much
  loss of information — by developing PCs to capture as much variation as
  possible.
- **What PCA can be used for** (slide 4): reduce the
  number of dimensions; find patterns in high-dimensional data; visualize
  high-dimensional data.
- **The idea via a simple example** (slides 5-10):
  100 students with Physics and Statistics grades — which grade better
  discriminates among students? When data spreads along a slanted line
  (the direction of maximum variation), take a linear combination of the
  2 grades for the best result. This linear combination is an example of
  a "principal component" — the coordinate system can be rotated to a
  new one for the data; the new horizontal axis coincides with that
  slanted line. Principal components are unit vectors along the new
  axes: **the 1st PC** gives the direction of maximum spread; **the 2nd
  PC** gives the direction of maximum spread perpendicular to the
  1st.

### 7.2 How to choose the principal component (slides 11-16)

- **Covariance** (slide 11): depends on the
  covariance (or correlation) between 2 original variables. cov(X,Y) =
  Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/(n−1). cov(X,Y) = 0 → no correlation; cov(X,Y) > 0 →
  X,Y move together; cov(X,Y) < 0 → X,Y move opposite.
- **General high-dimensional case** (slides 13-14):
  PCA's objective is to rotate the axes of the p-dimensional space to new
  positions (principal axes) with: axis 1 has the highest variance; axis
  2 the next highest; ...; axis p the lowest; covariance among each pair
  of principal axes is zero (uncorrelated). Taking the first k PCs
  defines the k-dimensional "hyperplane" of best fit. For p > 2
  attributes, use the **covariance matrix** C instead of a single cov
  value — e.g. a 3×3 matrix for 3 attributes (x,y,z). In linear algebra,
  the **eigenvalues and eigenvectors** of the covariance matrix help find
  the principal components.
- **Eigenvalues & eigenvectors** (slides 15-16):
  given covariance matrix A — solutions of det(A−λI) = 0 are the
  eigenvalues; solve (A−λI)x = 0 for each λ to get eigenvector x. The sum
  of the covariance matrix's diagonal is the **trace**, representing
  total variance. Eigenvalues λ₁,...,λₚ are the variances along each
  principal axis; the sum of all p eigenvalues equals the trace. Each
  eigenvector has p values showing each variable's "contribution" to that
  axis; the eigenvalue is the variance explained by the kth axis; the sum
  of the first k eigenvalues is the variance explained by the
  k-dimensional ordination. **How many PCs are needed?**: a common rule
  of thumb when PCA is based on correlations — axes with eigenvalue > 1
  are worth interpreting.

### 7.3 Steps to conduct PCA (slides 17-27)

- **5-step procedure** (slide 17): (1) get data, (2)
  subtract the mean or standardize the data, (3) calculate the covariance
  matrix, (4) calculate eigenvectors and eigenvalues, (5) choose
  components from the eigenvalues and eigenvectors.
- **Note on standardization** (slide 18): using
  covariances only makes sense if variables are measured in the same
  units; even then, high-variance variables dominate the PCs. This is
  generally avoided by standardizing each variable to unit variance and
  zero mean: X'ᵢₘ = (Xᵢₘ − X̄ᵢ)/SDᵢ. Covariances between standardized
  variables are correlations. After standardization, each variable has
  variance 1.
- **Example: Face Recognition** (slides 21-22): one
  of PCA's classic applications, mainly for reducing the number of
  variables. Consider the 2D case — an input image compared against a
  database to find the best match. Assume same resolution, same framing.
  Each pixel is a variable → a very high-dimensional problem PCA
  simplifies. Adjacent background pixels are nearly perfectly correlated.
  PCA is also good when: few samples but many variables; images at
  different scales.
- **Other examples** (slides 23-27): applying PCA to
  handwritten digits; de-noising images (keeping the most important PCs,
  discarding less significant ones); image compression — convert the 2D
  image to a matrix (each row a pixel, each column a color channel),
  standardize, identify the highest-variance PCs, omit the least
  important information to shrink data size, reconstruct the image from
  the compressed representation. Example 3.8: PCA Python code.

### 7.4 Combine PCA with other algorithms (slides 28-31)

- **Why combine** (slide 28): high-dimensional data
  causes: multicollinearity, noise and redundancy, high computational
  cost. PCA acts as a preprocessing step: removes correlations, keeps the
  most informative variance, speeds up algorithms.
- **PCA + Clustering** (slide 29): idea — reduce
  data to 2-10 PCs, then cluster. K-Means: PCA makes clusters more
  compact. Hierarchical Clustering: works better on reduced spaces.
  DBSCAN/GMM: PCA stabilizes density estimation. Applications: customer
  segmentation; grouping documents or images.
- **PCA + Classification** (slide 30): goal —
  improve supervised learning by reducing noise and collinearity.
  Logistic Regression: PCA avoids multicollinearity issues. SVM and KNN:
  distance-based classifiers benefit from PCA in high dimensions. Naive
  Bayes: PCA can make features more independent. Example: handwritten
  digit classification (MNIST) often uses PCA before SVM.
- **PCA + Regression — Principal Component
  Regression (PCR)** (slide 31): Step 1 — apply PCA to predictors X. Step
  2 — regress y on the selected PCs: y ≈ Zγ, Z = XVₘ. Helps when
  predictors are highly correlated. Risk: discarded PCs may still contain
  predictive information.
- **Assignment** (slide 32): replicate a Kaggle
  mini-project applying PCA — Wine Quality Prediction with PCA & LDA;
  Customer Segmentation (K-Means & PCA); Reducing Features with PCA;
  Principal Component Regression; Customer Personality Analysis (PCA &
  Clustering); or any other Kaggle dataset applying PCA.

## Links

- [[pca]] — the main concept page: definition,
  covariance, eigenvalue/eigenvector, procedure.
- [[pca-combined-with-other-algorithms]] — PCA +
  Clustering/Classification/Regression, synthesizing back into every
  algorithm taught in the course.
- [[clustering]], [[k-means-clustering]],
  [[hierarchical-clustering]] — supported by PCA as a preprocessing
  step.
- [[classification]], [[k-nearest-neighbors]] —
  supported by PCA reducing dimensions/noise before classifying.
- [[regularization-ridge-lasso]] — another solution
  to multicollinearity, contrasted with PCR.
- [[machine-learning-overview]] — dimension
  reduction is the 2nd unsupervised branch taught in the course (after
  Clustering).
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter07_PCA.pdf`, slides 1-33.
