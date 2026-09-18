---
type: concept
title: "Covariance, Eigenvalues, Eigenvectors and the SVD"
tags: [chapter-4, k32, pca, covariance-matrix, eigenvalue, eigenvector, svd]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

This is the algebraic machinery that turns PCA's
geometric idea into an actual computation. The **covariance matrix** `S`
holds the covariance between every pair of variables; its **eigenvalues**
`lambda_m` are the variances along the m-th principal axis; the
corresponding **eigenvectors** `v_m` are that axis' direction, and their
entries are the **loadings**. In practice software does not form `S` at
all but applies the **singular value decomposition (SVD)** directly to
the centred data.

## Explanation

### Covariance, and why it is not correlation

The sample covariance between two variables is the
sum of `(Xi - Xbar)(Yi - Ybar)` divided by `n - 1`. It measures **linear
co-movement**: zero means no linear association, positive means they move
together, negative the opposite. Slide 54's warning: **the size of a
covariance depends on the units**, so it **cannot be compared across
variable pairs**. The correlation `r = cov(X, Y) / (sX sY)` is the
unit-free version, bounded in `[-1, 1]`. This is exactly why PCA on
standardised data - i.e. on the correlation matrix - **is usually
preferred**.

### The covariance matrix and its three key properties

To describe the association between 2 variables we
use the covariance; for p variables we use the matrix `S` whose `(i, j)`
entry is `cov(xi, xj)`. Three properties: (1) `S` is **symmetric** and
**positive semi-definite**; (2) **its diagonal holds the variances** and
**its trace is the total variance** in the data; (3) **its eigenvalues
and eigenvectors give us the principal components**. Symmetry has a
consequence that is exactly what PCA needs: `S`'s eigenvalues are
**real** and its eigenvectors can be chosen **mutually orthogonal** - the
"uncorrelated axes" property.

### Eigenvalues and eigenvectors

Given a covariance matrix `A`: the solutions of
`det(A - lambda I) = 0` are the **eigenvalues**; solving
`(A - lambda_m I) v = 0` for each `lambda_m` gives the **eigenvector**
`v_m`. Four things to remember:

- The eigenvalues in decreasing order
  `lambda_1 >= ... >= lambda_p` **are the variances of the scores on each
  principal axis**.
- **The eigenvalues sum to A's trace**, i.e. to the
  total variance. This makes the m-th component's explained variance
  ratio `EVR_m = lambda_m / sum of lambda_j`.
- Each eigenvector holds p values - the
  **loadings** - the contribution of each original variable to that
  axis.
- In matrix form `A = V Λ V'`, with V holding the
  eigenvectors in columns and Λ the diagonal eigenvalue matrix. The
  component scores are `Z = Xc V`.

### The SVD: the route software actually takes

Slide 62 states it plainly: in practice software
**does not form the covariance matrix**. It applies the SVD directly to
the centred data matrix `Xc` (`n x p`): `Xc = U D V'`, where the columns
of **V** are the loading vectors (eigenvectors of `Xc' Xc`), **UD** is
the score matrix `Z`, and `D = diag(d1, ..., dp)` holds the **singular
values**, related to the eigenvalues by
`lambda_m = d_m^2 / (n - 1)`.

Three reasons this matters: the SVD is **numerically
more stable** because it **never squares the data** (forming `S` requires
multiplying `Xc'` by `Xc`, which loses precision when variables are near
collinear); it **works when p is greater than n**, where `S` is
singular; and it is what `sklearn.decomposition.PCA` and R's `prcomp()`
use underneath - knowing this also explains why `prcomp()` is preferred
to the older `princomp()`.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 54
(covariance and the not-correlation warning), 55 (the illustration), 56
(the two objective statements, both solved by S's eigenvectors), 57 (the
covariance matrix and its 3 properties), 58 (eigenvalues, eigenvectors,
the `V Λ V'` form), 59 (loadings and the explained variance ratio), 62
(the SVD), 9 (the notation `lambda_m`, `v_m`, `Z`, `S`, `R`), 64
(`trace(R) = p` and the origin of Kaiser's rule).

## Related

- [[pca-k32]] - the method this machinery
  serves.
- [[choosing-number-of-components]] - the
  eigenvalues feed all three rules for choosing m.
- [[pca-loadings-interpretation]] - the eigenvectors
  are the loadings to be interpreted.
- [[principal-component-regression]] - uses `Z` as
  the regressors, mapping back via `Vm gamma`.
- [[distance-measures]] - Mahalanobis is the
  distance built on this same covariance matrix.
