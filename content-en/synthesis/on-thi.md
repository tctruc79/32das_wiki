---
type: synthesis
title: "Exam Prep"
tags: [synthesis, exam-prep]
created: 2026-08-22
updated: 2026-08-24
status: complete
---

The single compounding exam-prep page — updated
MANDATORY every time a new chapter is ingested (see CLAUDE.md, INGEST
section).

## Quick lookup table

| Chapter | Cohort | Topic | Notes |
|---|---|---|---|
| [[chapter01-introduction]] | K31 | What is data science, the DIKW pyramid, 4 types of analytics, data-analytic thinking | The 2025 slide deck is fairly terse — several slides have only images, no detailed definitions for the terms in slide 23 |
| [[chapter02-python-jupyter]] | K31 | Python (history, 5 language generations, applications), Jupyter Notebook (install, Markdown, sharing) | Pure tooling, no ML theory |
| [[chapter03-machine-learning-knn]] | K31 | ML overview, AI history, overfitting/underfitting, Classification, KNN + IRIS example | Slide 3's outline mentions Regression/Clustering/Dimension reduction/Association, but that's the outline for the whole Chapter 3-7 block, not this file's own content |
| [[chapter04-decision-tree-random-forest]] | K31 | Decision Tree (ID3/C4.5/CART, purity measures) + Random Forest (ensemble) | |
| [[chapter05-ridge-lasso]] | K31 | Linear regression, overfitting in regression, Ridge/Lasso, MAPE | Practice data `regression.csv` no longer in `raw/` |
| [[chapter06-clustering]] | K31 | Unsupervised learning: clustering, distance measures, K-Means, Hierarchical | The linkage methods slide is image-only |
| [[chapter07-pca]] | K31 | PCA: covariance, eigenvalue/eigenvector, procedure, combined with Clustering/Classification/Regression | The highest cross-reference density among the 8 chapters |
| [[chapter08-deep-learning]] | K31 | History of deep learning, perceptron, forward/backward propagation, ANN/CNN/RNN | Gap: no source yet teaches Logistic Regression in detail |
| [[chapter01-introduction-k32]] | K32 | 5 V's, working definition, DS vs Analytics vs BI, 5 types of analytics (adds Causal), 7-condition checklist | Separate cluster — no cross-links to K31 |
| [[chapter02-python-jupyter-k32]] | K32 | Python (full syntax), Jupyter (kernel/cell/magic commands), Python for Data Analysis (NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn) using `Data2.csv` | Nearly double K31's length (78 vs 41 slides) — adds 2 entirely new sections; separate cluster — no cross-links to K31 |

## Topic clusters

### A. Foundations: data, data science, DIKW

[[big-data]], [[dikw-pyramid]],
[[data-science-definition]] — the 3 most foundational concepts of the
course, all originating from [[chapter01-introduction]] (K31).

### B. Decision-making & analytic thinking

[[data-driven-decision-making]] (4 types of
analytics) and [[data-analytic-thinking]] (compass/movement metaphor) — a
complementary pair, both from [[chapter01-introduction]] (K31).

### C. Tooling

[[python-jupyter-tooling]] — the hands-on
infrastructure (Python + Jupyter Notebook) used throughout Chapters
3-8.

### D. ML foundations & Classification/KNN

[[machine-learning-overview]] (AI/ML history, 3 ML
types), [[overfitting-underfitting]] + [[model-evaluation-metrics]] (a
theme running through Chapters 3-5), [[classification]] +
[[k-nearest-neighbors]] (the first algorithm) — all from
[[chapter03-machine-learning-knn]] (K31).

### E. Regression & Regularization

[[linear-regression]] + [[regularization-ridge-lasso]]
— the Regression branch of supervised learning, from
[[chapter05-ridge-lasso]] (K31).

### F. Unsupervised Learning: Clustering

[[clustering]] (definition, distance measures,
evaluation), [[k-means-clustering]] + [[hierarchical-clustering]] (the 2
main algorithms) — from [[chapter06-clustering]] (K31).

### G. Dimension Reduction: PCA

[[pca]] (covariance, eigenvalue/eigenvector, the
5-step procedure) + [[pca-combined-with-other-algorithms]] (PCA+
Clustering/Classification/Regression) — from [[chapter07-pca]] (K31). The
course's most synthesizing chapter — back-links to [[clustering]],
[[k-means-clustering]], [[hierarchical-clustering]], [[classification]],
[[k-nearest-neighbors]], [[regularization-ridge-lasso]].

### H. Deep Learning

[[deep-learning-neural-networks]] — history,
perceptron, forward/backward propagation, ANN/CNN/RNN — from
[[chapter08-deep-learning]] (K31), K31's final chapter.

### I. K32 — Chapter 1 (2026)

_A separate cluster for K32, fully isolated from
clusters A-H (K31) per the separation rule — no cross wikilinks, cohort
names in plain text only when comparison is needed._

[[big-data-k32]] (5 V's), [[dikw-pyramid-k32]],
[[data-science-definition-k32]] (working definition, terminology table,
DS/Analytics/BI table, roles table), [[data-driven-decision-making-k32]]
(5 types of analytics, adds Causal), [[data-analytic-thinking-k32]] (5
concrete steps, problem chain, 7-condition checklist) — all from
[[chapter01-introduction-k32]] (K32).

### J. K32 — Chapter 2: Expanded Python Tooling (2026)

_A separate cluster for K32, isolated from clusters
A-I per the separation rule._

[[python-jupyter-tooling-k32]] (core Python +
Jupyter mechanics) and [[python-data-analysis-stack]] (the data-analysis
library stack, using `Data2.csv`) — both from
[[chapter02-python-jupyter-k32]] (K32).

## Tensions / differences between sources

No real tension within the K31 cluster itself (8/8
chapters). K31 vs K32 (Chapter 1): the 2 versions differ substantially —
K32 (2026) adds the 5 V's framework, its own working definition, a
DS/Analytics/BI comparison table, a roles table, a 5th analytics type
(Causal), a concrete 5-step thinking process, a 7-condition checklist —
none present in K31 (2025). Per the K31/K32 separation rule (CLAUDE.md),
this is **not logged as a "tension"** between 2 pages (they don't
cross-link) — noted here in plain text only as a historical fact (the
instructor updated content across years), with no wikilink between the 2
clusters.

K31 vs K32 (Chapter 2): the gap is even larger than
Chapter 1 — K32 (78 slides) is almost double K31 (41 slides) and adds 2
sections **entirely absent from K31**: "Python Essentials by Example"
(core syntax from scratch) and "Python for Data Analysis" (NumPy/pandas/
matplotlib/seaborn/statsmodels/scikit-learn, using real `Data2.csv`
data). K31's version stopped at introducing Python + installing/using
Jupyter + Markdown, with no syntax or data-analysis-library teaching at
all — the K31 equivalent (where it exists) is scattered across later
algorithm chapters instead of concentrated in one place like K32. Per
the separation rule, noted in plain text only, no cross-cluster
wikilink.

## Concept → source map

| Concept | Source | Cohort |
|---|---|---|
| [[big-data]] | [[chapter01-introduction]] | K31 |
| [[dikw-pyramid]] | [[chapter01-introduction]] | K31 |
| [[data-science-definition]] | [[chapter01-introduction]] | K31 |
| [[data-driven-decision-making]] | [[chapter01-introduction]] | K31 |
| [[data-analytic-thinking]] | [[chapter01-introduction]] | K31 |
| [[python-jupyter-tooling]] | [[chapter02-python-jupyter]] | K31 |
| [[machine-learning-overview]] | [[chapter03-machine-learning-knn]] | K31 |
| [[overfitting-underfitting]] | [[chapter03-machine-learning-knn]] | K31 |
| [[model-evaluation-metrics]] | [[chapter03-machine-learning-knn]] | K31 |
| [[classification]] | [[chapter03-machine-learning-knn]] | K31 |
| [[k-nearest-neighbors]] | [[chapter03-machine-learning-knn]] | K31 |
| [[decision-tree]] | [[chapter04-decision-tree-random-forest]] | K31 |
| [[random-forest]] | [[chapter04-decision-tree-random-forest]] | K31 |
| [[linear-regression]] | [[chapter05-ridge-lasso]] | K31 |
| [[regularization-ridge-lasso]] | [[chapter05-ridge-lasso]] | K31 |
| [[clustering]] | [[chapter06-clustering]] | K31 |
| [[k-means-clustering]] | [[chapter06-clustering]] | K31 |
| [[hierarchical-clustering]] | [[chapter06-clustering]] | K31 |
| [[pca]] | [[chapter07-pca]] | K31 |
| [[pca-combined-with-other-algorithms]] | [[chapter07-pca]] | K31 |
| [[deep-learning-neural-networks]] | [[chapter08-deep-learning]] | K31 |
| [[big-data-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[dikw-pyramid-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[data-science-definition-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[data-driven-decision-making-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[data-analytic-thinking-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[python-jupyter-tooling-k32]] | [[chapter02-python-jupyter-k32]] | K32 |
| [[python-data-analysis-stack]] | [[chapter02-python-jupyter-k32]] | K32 |

## Exam question bank

- Distinguish the 4 types of analytics (descriptive/
  diagnostic/predictive/prescriptive) — given a concrete example, classify
  it.
- Why is big data technology NOT the same as data
  mining?
- Explain the "compass" and "movement" metaphor for
  data-analytic thinking vs data-driven decision making.
- Distinguish overfitting from underfitting — how is
  each addressed?
- Explain the KNN algorithm's steps, and why
  choosing small vs large K trades off bias and variance
  differently.
- Why is KNN called "lazy learning"?
- Compare the 3 decision tree algorithms
  ID3/C4.5/CART.
- How does Random Forest control overfitting, and
  how does that differ from choosing K in KNN?
- Distinguish Ridge (L2) from Lasso (L1) — the
  fundamental difference in the loss formula and its practical
  meaning.
- Why is MAPE more useful than MAE/MSE/RMSE when
  comparing error across problems with different scales?
- Compare K-Means and Hierarchical Clustering — when
  should each be used?
- Explain the relationship between eigenvalues,
  eigenvectors, and principal components in PCA.
- Compare PCR and Ridge/Lasso as 2 ways to handle
  multicollinearity — where do their mechanisms differ?
- Explain why a single perceptron can be seen as
  equivalent to Logistic Regression.
- Distinguish ANN, CNN, RNN — what data does each
  suit?
- (K32) Distinguish the 5 types of analytics,
  especially Causal vs Predictive — what is each type's characteristic
  error?
- (K32) Apply the 7-condition checklist to a
  concrete business problem — does it suit data science?
- (K32) Distinguish the roles of statsmodels and
  scikit-learn when fitting the same regression model — which is
  oriented towards explanation, which towards prediction, and why does
  that distinction matter?
- (K32) Explain why `In [n]`/`Out[n]` in Jupyter
  reflects execution order, not display order — give an example scenario
  where misunderstanding this causes an error.
