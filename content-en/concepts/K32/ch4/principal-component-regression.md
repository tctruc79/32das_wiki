---
type: concept
title: "Principal Component Regression (PCR)"
tags: [chapter-4, k32, pcr, pca, regression, multicollinearity, pls]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Definition

Principal component regression is a two-step
procedure: **step 1** applies PCA to the predictors `X`; **step 2**
regresses `y` on the first m principal components, i.e. `y` approximately
equals `Z gamma` with `Z = X Vm`. It is how PCA is used when the target
is a **numeric quantity**, and is the third of Part 3's three ways of
chaining PCA to another algorithm.

## Explanation

### Three situations where PCR helps

1. **Highly correlated predictors.** Under severe
   multicollinearity OLS becomes **unstable** - coefficients have huge
   standard errors and flip sign as observations are added or removed.
   PCR does not, because the components are **orthogonal by
   construction**, so there is no collinearity among the new
   regressors.
2. **p greater than n.** When there are more
   variables than observations OLS has **no unique solution**; PCR still
   works because it regresses on m components with m smaller than
   n.
3. **A form of regularisation is wanted.** PCR
   **trades a little bias for much lower variance**, and the slide notes
   it is **closely related to ridge regression**. The mechanical
   difference: ridge shrinks every coefficient towards zero continuously,
   whereas PCR **drops entirely** the directions with the smallest
   variance - a "discrete" shrinkage along directions rather than along
   coefficients.

### The risk and the cost

**The risk**: the discarded components **may still
contain predictive information**. This is the concrete consequence of the
"PCA is unsupervised" caveat: components are ordered by variance in `X`,
**not** by relevance to `y`, so a low-variance ninth component can still
be the one most correlated with `y`.

**The cost**: the `gamma` coefficients apply to
**the components, not the original variables**, so they are hard to
interpret economically on their own. Mapping back requires computing
`betahat = Vm gammahat` - and the slide states this formula explicitly,
showing that "translating back" is a required step if you want to report
each variable's effect.

### PCR versus PLS

The comparison closing slide 78 is compact and worth
remembering: **PCR chooses components using only `X`; PLS chooses
components maximising covariance with `y`.** The consequence: **PLS
usually needs fewer components for the same accuracy**, because each of
its components was aimed at `y` from the start. In exchange, PLS is more
complex and its components depend on `y`, so they cannot be reused for a
different target - whereas PCR's components are a shared asset,
independent of any target.

### Choosing m for PCR

Because PCR has a target, **the right rule for
choosing m is cross-validation**, not the scree plot (slide 59's rule 4,
restated on slide 79). And because both standardisation and PCA are steps
fitted on data, they **must sit inside a `Pipeline`** so that no test-set
information leaks into the means, standard deviations and
loadings.

## Appears in

[[chapter04-unsupervised-learning-k32]] - slide 78
(all the PCR content, the PLS comparison, the `betahat = Vm gammahat`
formula), 75 (the flow diagram's regression branch), 77 (the unsupervised
caveat, the source of the risk here), 79 (data leakage and choosing m by
cross-validation), 48 (removing multicollinearity before regression as
one of PCA's classic uses), 83 (one of the assignment's 5 mini projects
is Principal Component Regression).

## Related

- [[pca-combined-with-other-algorithms-k32]] - the
  Part 3 context and the leakage warning.
- [[regularization-ridge-lasso-elastic-net-k32]] -
  ridge is PCR's close relative; both trade bias for variance.
- [[linear-regression-k32]] - OLS is the benchmark
  PCR exists to repair when it becomes unstable.
- [[eigenvalues-and-eigenvectors]] - the `Vm` in the
  formula is the eigenvector matrix.
- [[choosing-number-of-components]] - the fourth
  rule is the right one for PCR.
- [[pca-k32]] - step 1 of the two-step
  procedure.
