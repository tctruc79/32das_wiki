---
type: concept
title: "Combining PCA with Other Algorithms, and Data Leakage"
tags: [chapter-4, k32, pca, pipeline, data-leakage, curse-of-dimensionality]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

The chapter's Part 3 treats PCA as a
**preprocessing step** in front of another algorithm, in the flow: raw
data `n x p` → standardise → PCA `n x m` → clustering / classification /
regression → result. It also names **the methodological error that comes
with it**: if scaling and PCA are fitted on the full data before
splitting, the validation result is **optimistic** - that is **data
leakage**, and the fix is to put every step inside a
`Pipeline`.

## Explanation

### Why combine: four problems, four benefits

High-dimensional data causes
**multicollinearity**, **noise and redundancy**, **high computational
cost**, and the **curse of dimensionality** - as p grows, **all pairwise
distances become nearly equal**, which **breaks every distance-based
method** (KNN, SVM, K-Means, DBSCAN). PCA addresses each: it **removes
correlations** since the components are orthogonal by construction;
**keeps the most informative variance**; **speeds up** downstream
algorithms; and **enables 2-D visualisation** of the result.

### PCA plus clustering, and the circularity trap

The idea: reduce to 2-10 components and cluster
there. For **K-Means** clusters become more compact once redundant
dimensions go; for **hierarchical clustering** results are better and
**much faster** (since `O(n^2)` now runs in m dimensions rather than p);
for **DBSCAN and GMM**, PCA **stabilises density estimation**, which
degrades badly in high p.

Slide 76's two cautions, both important. First,
**dropping small components can destroy exactly the direction that
separated two groups** - **separation and variance are not the same
thing**. Second, and this is the easiest trap to fall into: **do not run
PCA, plot PC1-PC2, and then claim the visible groups validate your
clustering.** You clustered **in that very space**, so of course they
look separated - that is **circular**. Validation requires external
evidence: stability under resampling, a comparison against a null model,
or differences on variables not used in the clustering.

### PCA plus classification, and the central caveat

For **logistic regression**, PCA removes
multicollinearity and thus **stabilises the coefficient estimates**; for
**SVM and KNN**, distance-based classifiers **benefit greatly**; for
**Naive Bayes**, PCA makes the features **closer to independent**,
exactly what that model assumes. The quantitative example: MNIST digit
classification commonly applies PCA before an SVM, keeping about **150 of
784 dimensions** to retain roughly **95% of the variance** and cut
training time by **an order of magnitude**.

The central caveat, and Part 3's most important
sentence: **PCA is unsupervised.** It chooses directions maximising
variance in `X`, with **no knowledge of `y`**. A low-variance direction
**may be the one that separates the classes perfectly** - and PCA will
**discard it first**. If prediction is the goal, consider **partial least
squares (PLS)** or **linear discriminant analysis (LDA)**, both of which
**use `y`** when choosing directions.

### Data leakage and the Pipeline fix

**The mistake** (slide 79): scale and run PCA on the
**full** data set, then split into train and test. The test set has then
**already influenced the means, standard deviations and loadings**, so
the validation error is **optimistic**. The subtle point worth
remembering: the error is not in the formula but in **where the fit
happens** - the same model, only a differently placed `fit`.

**The fix**: put **every step inside a
`Pipeline`**, so each is re-fitted **within every cross-validation
fold**. The slide-79 code builds a `Pipeline` of
`("scale", StandardScaler())`, `("pca", PCA())`,
`("clf", LogisticRegression(max_iter=2000))`, then `GridSearchCV` over
`pca__n_components` in `[2, 5, 10, 20, 50]` with `cv=5`. Key idea:
**when PCA feeds a predictive model, m is a hyperparameter: tune it
against validation error, not a scree plot.**

### Why training R squared is not evidence

Slide 82's discussion question 6 is precisely the
exam on this section. There are three independent reasons. (1)
**Arithmetic**: training R squared **cannot fall** as components are
added, and if all p components are kept PCA is only a **rotation** of the
same column space, so the training R squared **exactly equals** plain
OLS - no information was added. (2) **Leakage**: if scaling and PCA were
fitted on the full data, that number was never an out-of-sample estimate
to begin with. (3) **Unsupervised by nature**: PCA can only help a
predictive model by **reducing variance and noise**; it **cannot add
information about `y`** - so any gain must appear **out of sample**,
never in the fit.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slide 75
(why combine, the flow diagram, the curse of dimensionality), 76 (PCA
plus clustering and the two cautions), 77 (PCA plus classification, the
MNIST example, the unsupervised caveat), 78 (PCR), 79 (data leakage, the
`Pipeline` and `GridSearchCV` code), 6 (PCA very often used as
preprocessing for supervised models), 73 (PCA does not know what you are
predicting), 82 question 6.

## Related

- [[pca-k32]] - the method being used as
  preprocessing.
- [[principal-component-regression]] - the
  regression case, given its own slide.
- [[choosing-number-of-components]] - with a target
  present, m must be chosen by cross-validation.
- [[train-test-split-and-cross-validation]] - data
  leakage was introduced in Chapter 3; this is its PCA variant.
- [[clustering-pitfalls-checklist]] - the
  circularity warning belongs as the checklist's eighth item.
- [[k-nearest-neighbors-k32]] - one of the biggest
  beneficiaries, being entirely distance-based.
