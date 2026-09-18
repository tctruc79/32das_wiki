---
type: concept
title: "Principal Component Analysis (PCA)"
tags: [chapter-4, k32, pca, dimension-reduction, unsupervised-learning]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

PCA summarises data with p variables by a smaller
set of m **composite variables** called **principal components**, with m
much smaller than p. Each component is a **linear combination** of the
original variables (`z_i1 = v_11 x_i1 + ... + v_p1 x_ip`), and the
components are built so as to **retain as much variance as possible**
while being **mutually uncorrelated**. The method was introduced by
Pearson (1901) and Hotelling (1933) and remains the most widely used
multivariate method.

The foundational assumption, and also the main
limitation: **PCA treats variance as a proxy for information.**

## Explanation

### The geometry: only a rotation

The most intuitive reading (slides 49-52): for a
slanted cloud, no original axis alone captures the direction of greatest
variation, so a linear combination is needed. PCA rotates the axes to new
positions: **PC1 points along the direction of maximum spread**, **PC2 is
the direction of maximum remaining spread constrained to be perpendicular
to PC1**, and so on. The key point: **you are only rotating the axes; no
information is lost until a component is dropped**. In slide 52's
100-student example, PC1 has direction `(0.73, 0.69)` and eigenvalue
2.098, i.e. 94.4% of the variance - so **one number per student retains
94% of the variation**.

### Two statements of one objective

Slide 56 puts **maximise variance** (`max v' S v`
subject to `||v|| = 1`) beside **minimise reconstruction error** (the
summed squared distance between each `xi` and its projection onto the
m-dimensional hyperplane), then states plainly: **both are solved by the
same eigenvectors of S**. This is why PCA serves both to **summarise**
(retain variance) and to **compress** (reduce reconstruction error)
without needing two separate theories. Taking the first m components is
exactly identifying the **m-dimensional hyperplane of best fit** to the
data.

### The 7-step workflow

1. Get the data: `X`, `n x p`.
2. **Standardise** (or at least centre) the
   variables, giving `Xc`.
3. Compute the covariance matrix `S` or the
   correlation matrix `R` (`p x p`).
4. Compute its eigenvalues and eigenvectors
   (eigendecomposition or SVD).
5. **Choose how many components to keep**, m.
6. Project the data: `Z = Xc Vm`, an `n x m`
   matrix.
7. **Interpret the loadings and report.**

Note that step 7 is **inside the workflow**: with
PCA, interpretation is not an optional extra but a required step, since a
component you cannot interpret is a component you cannot tell a story
with.

### Why step 2 is not optional

Using the covariance matrix only makes sense when
**all variables share a unit**; and even then, high-variance variables
**dominate** the components - a variable in VND swamps one in years.
After standardisation every variable has variance 1, so the covariances
**become correlations**: **PCA on standardised data is PCA on the
correlation matrix R**. A very memorable consequence: `trace(R) = p`, so
**the average eigenvalue is exactly 1** - the **origin of Kaiser's
rule**. When **not** to standardise: when all variables share a
meaningful unit and **the differences in variance are themselves
informative** - e.g. returns on assets in one currency, or pixel
intensities on a common scale (which is exactly the case in the chapter's
image compression example).

### Applications

Classic uses: reduce dimensions; find patterns;
visualise in 2-3 dimensions; remove multicollinearity before regression;
compress images and signals; de-noise. Uses in economics and finance:
**building composite indices** (competitiveness, socio-economic status,
financial development) from many correlated indicators; extracting
**common yield-curve factors** (level, slope, curvature); constructing
**risk factors** from large panels of asset returns; and summarising
**survey batteries** into a few latent constructs.

Three applications are covered in depth: **face
recognition**, where each pixel is a variable so a `100 x 100` image
gives `p = 10,000` dimensions, and PCA compresses to a few hundred
eigenfaces (Turk and Pentland, 1991) - the clearest illustration that
**adjacent pixels are almost perfectly correlated so the true
dimensionality is far below p**; **de-noising**, which works because
noise spreads thinly across all components while signal concentrates in
the first few; and **image compression**, with its `m(n + p)` versus `np`
ratio.

### Limitations and alternatives

Where PCA struggles (slide 73): it captures only
**linear structure**; its components are **often hard to interpret**
being mixtures of all p variables; it is **not scale invariant**;
**sensitive to outliers** since variance is a squared quantity; it
**assumes high variance means important**; and it **requires numeric
data**. The alternatives: **Kernel PCA** for non-linear structure;
**t-SNE / UMAP** for 2-D visualisation, with the warning that
**distances between clusters in a t-SNE plot are not meaningful** and
that they **cannot project new points reliably**; **autoencoders**, whose
linear case **recovers PCA exactly**; **factor analysis** when a latent
variable model is wanted; **Sparse PCA** for interpretable components;
and **Robust PCA** when outliers are present.

An important distinction: **PCA is a descriptive
transformation explaining total variance; factor analysis is a
statistical model explaining shared variance that assumes latent factors
exist.** They often give similar answers but **answer different
questions**.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slides 47
(definition, the variance-as-information assumption), 48 (uses, the
factor-analysis distinction), 49-53 (the student-grade example, the
rotation), 56 (the two statements of the objective), 63 (the 7-step
workflow), 64 (why standardisation is required), 65-70 (applications),
71-72 (the Python code), 73 (limitations and alternatives), 81 (the
summary table: PCA reduces columns).

Three of the chapter's seven shipped scripts are
about PCA: `Example3.8_PCA.py`, `Example3.8_PCA_Diabetes.py`,
`Example3.8_PCA_CompressImage.py`.

## Related

- [[eigenvalues-and-eigenvectors]] - the algebraic
  machinery underneath PCA.
- [[choosing-number-of-components]] - step 5 of the
  workflow.
- [[pca-loadings-interpretation]] - step 7 of the
  workflow.
- [[pca-combined-with-other-algorithms-k32]] - PCA
  as a preprocessing step for clustering, classification and
  regression.
- [[clustering-k32]] - the parallel tool: reducing
  rows instead of columns.
- [[distance-measures]] - the same standardisation
  argument on the clustering side.
- [[regularization-ridge-lasso-elastic-net-k32]] -
  the other way to handle multicollinearity, taught in Chapter 3.
