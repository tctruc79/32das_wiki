---
type: synthesis
title: "Exam Prep"
tags: [synthesis, exam-prep]
created: 2026-08-22
updated: 2026-09-27
status: complete
---

The single compounding exam-prep page - updated
MANDATORY every time a new chapter is ingested (see CLAUDE.md, INGEST
section).

## Quick lookup table

| Chapter | Cohort | Topic | Note |
|---|---|---|---|
| [[chapter01-introduction]] | K31 | What data science is, the DIKW pyramid, the 4 kinds of analytics, data analytic thinking | The 2025 deck is fairly thin - many slides are pictures only, with no detailed definition of the terms on slide 23 |
| [[chapter02-python-jupyter]] | K31 | Python (history, the 5 generations of languages, applications), Jupyter Notebook (installation, Markdown, sharing) | Pure tooling, no ML theory |
| [[chapter03-machine-learning-knn]] | K31 | An ML overview, the history of AI, overfitting/underfitting, classification, KNN + the IRIS example | The outline on slide 3 mentions regression/clustering/dimension reduction/association, but that is the outline of the whole Chapter 3-7 block, not the content of this file |
| [[chapter04-decision-tree-random-forest]] | K31 | Decision trees (ID3/C4.5/CART, purity measures) + random forest (ensembles) | |
| [[chapter05-ridge-lasso]] | K31 | Linear regression, overfitting in regression, Ridge/Lasso, MAPE | The practice data `regression.csv` is no longer in `raw/` |
| [[chapter06-clustering]] | K31 | Unsupervised learning: clustering, distance measures, K-Means, hierarchical | The linkage methods slide is a picture only |
| [[chapter07-pca]] | K31 | PCA: covariance, eigenvalues/eigenvectors, the procedure, combining it with clustering/classification/regression | The highest cross-reference density of the 8 chapters |
| [[chapter08-deep-learning]] | K31 | The history of deep learning, the perceptron, forward and backward propagation, ANN/CNN/RNN | Gap: no source teaches logistic regression in detail |
| [[chapter01-introduction-k32]] | K32 | The 5 V's, an operational definition, DS vs analytics vs BI, 5 kinds of analytics (causal added), the 7-condition checklist | A separate cluster - no cross-links to K31 |
| [[chapter02-python-jupyter-k32]] | K32 | Python (the full syntax), Jupyter (kernel/cell/magic commands), Python for Data Analysis (NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn) using `Data2.csv` | Nearly twice the size of the K31 deck (78 vs 41 slides) - two entirely new parts added; a separate cluster - no cross-links to K31 |
| [[chapter04-unsupervised-learning-k32]] | K32 | The whole unsupervised branch: clustering (distance, K-Means + k-means++, hierarchical + linkage + dendrogram, DBSCAN/GMM, a list of 7 pitfalls) and PCA (covariance, eigenvalues/eigenvectors, SVD, choosing m, loadings, image compression) + Part 3 combining PCA with clustering/classification/regression (PCR) and data leakage | 86 slides. The first use of **images** as practice data (`Image1.jpg`, `Image2.jpg`). 7 code files come with it, of which **2 contain real errors** (`Example3.7_KMeans.py` sets `n_clusters=1` on data with 3 centres - it runs and is silently wrong; `..._GenerateData_and_Clustering.py` stops with a `NameError`); 2 image files need `skimage`/`cv2`, which the course environment does not have. There is no code for hierarchical clustering, DBSCAN or GMM. A separate cluster - no cross-links to K31 |
| [[chapter03-supervised-learning-k32]] | K32 | The whole supervised branch: ML foundations, model evaluation (regression + classification metrics, cross-validation, bias and variance), classification + KNN, decision trees, random forest + boosting, regression, Ridge/Lasso/Elastic Net | 112 slides - the largest chapter; it merges what the 2025 cohort split across 3 chapters. The Example 3.1 code **has a deliberate error** (slides 41-42 say so outright). Group exercise 3 needs `Income.csv`, which is not yet in `raw/`. A separate cluster - no cross-links to K31 |
| [[chapter05-deep-learning-k32]] | K32 | The whole deep learning branch (90 slides, 3 lectures merged): the perceptron, dense layers, deep networks, loss functions, gradient descent + backpropagation, dropout and early stopping; RNN + BPTT + vanishing gradients + LSTM + self-attention/Transformer; an image as a matrix of numbers, convolution, CNN (conv/ReLU/pooling), object detection, segmentation, control | **The first chapter not built from the two base textbooks**: slide 1 says "Based on the MIT's course about Introduction to Deep Learning". **No code file, no data, no lab notebook at all** in `raw/` - quite unlike Ch.3 and Ch.4; the lab on slide 30 ("fill in the #TODOs") is missing. **No exercise and no discussion question at all** from the lecturer. Physical page 86 of the PDF is completely blank (91 pages → 90 slides). LSTM is named but its 3 gates are never written out; the Transformer only reaches one attention head. A separate cluster - no cross-links to K31 |

## Topic clusters

### A. Foundations: data, data science, DIKW

[[big-data]], [[dikw-pyramid]],
[[data-science-definition]] - the 3 most foundational concepts of the
course, all originating from [[chapter01-introduction]] (K31).

### B. Decision-making & analytic thinking

[[data-driven-decision-making]] (4 types of
analytics) and [[data-analytic-thinking]] (compass/movement metaphor) - a
complementary pair, both from [[chapter01-introduction]] (K31).

### C. Tooling

[[python-jupyter-tooling]] - the hands-on
infrastructure (Python + Jupyter Notebook) used throughout Chapters
3-8.

### D. ML foundations & Classification/KNN

[[machine-learning-overview]] (AI/ML history, 3 ML
types), [[overfitting-underfitting]] + [[model-evaluation-metrics]] (a
theme running through Chapters 3-5), [[classification]] +
[[k-nearest-neighbors]] (the first algorithm) - all from
[[chapter03-machine-learning-knn]] (K31).

### E. Regression & Regularization

[[linear-regression]] + [[regularization-ridge-lasso]]
- the Regression branch of supervised learning, from
[[chapter05-ridge-lasso]] (K31).

### F. Unsupervised Learning: Clustering

[[clustering]] (definition, distance measures,
evaluation), [[k-means-clustering]] + [[hierarchical-clustering]] (the 2
main algorithms) - from [[chapter06-clustering]] (K31).

### G. Dimension Reduction: PCA

[[pca]] (covariance, eigenvalue/eigenvector, the
5-step procedure) + [[pca-combined-with-other-algorithms]] (PCA+
Clustering/Classification/Regression) - from [[chapter07-pca]] (K31). The
course's most synthesizing chapter - back-links to [[clustering]],
[[k-means-clustering]], [[hierarchical-clustering]], [[classification]],
[[k-nearest-neighbors]], [[regularization-ridge-lasso]].

### H. Deep Learning

[[deep-learning-neural-networks]] - history,
perceptron, forward/backward propagation, ANN/CNN/RNN - from
[[chapter08-deep-learning]] (K31), K31's final chapter.

### I. K32 - Chapter 1 (2026)

_A separate cluster for K32, fully isolated from
clusters A-H (K31) per the separation rule - no cross wikilinks, cohort
names in plain text only when comparison is needed._

[[big-data-k32]] (5 V's), [[dikw-pyramid-k32]],
[[data-science-definition-k32]] (working definition, terminology table,
DS/Analytics/BI table, roles table), [[data-driven-decision-making-k32]]
(5 types of analytics, adds Causal), [[data-analytic-thinking-k32]] (5
concrete steps, problem chain, 7-condition checklist) - all from
[[chapter01-introduction-k32]] (K32).

### J. K32 - Chapter 2: Expanded Python Tooling (2026)

_A separate cluster for K32, isolated from clusters
A-I per the separation rule._

[[python-jupyter-tooling-k32]] (core Python +
Jupyter mechanics) and [[python-data-analysis-stack]] (the data-analysis
library stack, using `Data2.csv`) - both from
[[chapter02-python-jupyter-k32]] (K32).

### K. K32 - Chapter 3: Supervised Learning Foundations and Methodology

_A separate cluster for K32, isolated from clusters
A-J per the separation rule._

[[supervised-learning-framework]] (labelled data →
f̂; category ⇒ classification, number ⇒ regression; the 4 ML types; the
parameter vs hyperparameter vocabulary),
[[train-test-split-and-cross-validation]] (splitting, data leakage,
LOOCV/K-fold/stratified), [[model-evaluation-metrics-k32]] (regression
plus classification metrics) and [[overfitting-underfitting-k32]]
(over/underfitting + the bias-variance decomposition) - the 4
methodological concepts that apply to **every algorithm** in the
chapter, all from [[chapter03-supervised-learning-k32]] (K32).

### L. K32 - Chapter 3: Classification and Ensemble Algorithms

_A separate cluster for K32._

[[classification-k32]] (binary/multi-class/
multi-label, the 4 build steps), [[k-nearest-neighbors-k32]]
(distance-based; 4 distances, compulsory scaling, choosing K by CV, lazy
learning), [[decision-tree-k32]] (rule-based; ID3 vs CART, the 3 purity
measures, information gain, pruning), [[random-forest-k32]] (bagging +
feature subsampling, OOB error) and [[boosting-ensemble]] (AdaBoost/
gradient/XGBoost, the bagging vs boosting table) - the chapter's main
algorithmic spine, from [[chapter03-supervised-learning-k32]]
(K32).

### M. K32 - Chapter 3: Regression and Regularization

_A separate cluster for K32._

[[linear-regression-k32]] (regression inside the
supervised frame, OLS/LAD/MLE/MM, polynomials, dummies, explanation vs
prediction) and [[regularization-ridge-lasso-elastic-net-k32]] (the 3
loss functions, Elastic Net, Ridge's closed form, the geometric reason
Lasso zeroes coefficients, choosing λ by CV) - the regression branch,
from [[chapter03-supervised-learning-k32]] (K32).

### N. K32 - Chapter 4: Unsupervised Learning and Clustering

_A separate cluster for K32._

[[unsupervised-learning-framework]] (the 6-row
comparison with supervised learning, the warning that the algorithm
always returns structure even from noise), [[clustering-k32]] (the
definition, the 2 partition conditions, the 4 requirements),
[[distance-measures]] (Euclidean/Manhattan/Minkowski, the data-type
table, the income-versus-visits example proving standardisation is
required), [[k-means-clustering-k32]] (the NP-hard objective, Lloyd's
algorithm, k-means++ with probability proportional to `D(x)^2`, the
strengths and limitations table), [[choosing-k-elbow-silhouette]]
(`TSS = WSS + BSS`, the elbow, the silhouette, the gap statistic),
[[hierarchical-clustering-k32]] (agglomeration, the 4 linkages, reading
and cutting a dendrogram, the 8-row comparison with K-Means),
[[dbscan-and-gaussian-mixture]] (density versus soft assignment, the
4-method choice table) and [[clustering-pitfalls-checklist]] (the 7
checks before presenting) - the clustering branch, from
[[chapter04-unsupervised-learning-k32]] (K32).

### O. K32 - Chapter 4: PCA and Dimension Reduction

_A separate cluster for K32._

[[pca-k32]] (variance as a proxy for information,
the geometry of the rotation, the 7-step workflow, why standardisation is
not optional, limitations and alternatives),
[[eigenvalues-and-eigenvectors]] (covariance is not correlation, the 3
properties of `S`, `A = V Λ V'`, the SVD being more stable and working
when p exceeds n), [[choosing-number-of-components]] (the 4 rules:
Kaiser, scree, cumulative, cross-validation; the 8-indicator example
where all three agree), [[pca-loadings-interpretation]] (size versus
contrast factors, the warning that eigenvector signs are arbitrary),
[[pca-combined-with-other-algorithms-k32]] (the curse of dimensionality,
the PC1-PC2 circularity trap, PCA being unsupervised so it can discard
the very direction that separates classes, data leakage and the
`Pipeline` fix) and [[principal-component-regression]] (PCR, its kinship
with ridge, `betahat = Vm gammahat`, the comparison with PLS) - the
dimension-reduction branch, from
[[chapter04-unsupervised-learning-k32]] (K32).

### P. K32 - Chapter 5: Neural Network Foundations and Training

_A separate cluster for K32._

[[perceptron]] (a weighted sum plus a bias through a
non-linearity; one perceptron draws only a line; the worked example on
slide 10), [[activation-functions]] (sigmoid/tanh/ReLU with derivatives;
the `W2(W1 x) = (W2 W1)x` argument, so a 100-layer linear network is one
layer), [[dense-layers-and-deep-networks]] (a dense layer as one matrix
multiply; what "hidden" literally means; depth needing no new mechanism),
[[loss-functions-and-empirical-risk]] (one example's loss, the empirical
loss, `J` as a function of `W`; binary cross-entropy versus MSE),
[[gradient-descent]] (the loss landscape, the five-line algorithm, no
closed form - unlike Chapters 3 and 4), [[backpropagation]] (the chain
rule, the reuse of `∂J/∂ŷ`, why gradients flow backwards),
[[learning-rate-and-optimizers]] (the three cases for `eta`, adaptive
rates, the table of 5 optimisers from SGD 1952 to Adam 2014),
[[mini-batch-gradient-descent]] (full versus stochastic versus mini-batch;
the two reasons mini-batch wins) and [[dropout-and-early-stopping]] (two
regularisation techniques that **do not modify the loss but the training
procedure**) - the neural network foundations, from
[[chapter05-deep-learning-k32]] (K32), lecture A1.

### Q. K32 - Chapter 5: Sequence Modeling and Attention

_A separate cluster for K32._

[[sequence-modeling-design-criteria]] (the four
criteria: variable length, long-term dependencies, order, parameter
sharing; the four sequence shapes; three example sentences of which "good,
not bad" versus "bad, not good" is the most memorable),
[[word-embedding]] (vocabulary → index → vector; one-hot versus a learned
embedding where similar words sit close), [[recurrent-neural-network]]
(`ht = fW(xt, ht-1)`; the three matrices `Wxh`, `Whh`, `Why`; the reason
for `tanh`; the unrolled graph), [[backpropagation-through-time]] (BPTT;
multiplying many `Whh` producing exploding and vanishing gradients;
`1.5^50` versus `0.5^50`; the "clouds" and "France" sentences),
[[lstm-gated-cells]] (a gate as a sigmoid layer multiplied pointwise, the
amount learned; the three remaining RNN limitations) and
[[self-attention]] (the YouTube search analogy for `Q`/`K`/`V`; the four
steps; why positional encoding is mandatory; the Transformer and LLMs) -
the sequence branch, from [[chapter05-deep-learning-k32]] (K32), lecture
A2.

### R. K32 - Chapter 5: Computer Vision and Convolutional Networks

_A separate cluster for K32._

[[computer-vision-tasks]] (images as matrices of
numbers in `[0, 255]`; the seven sources of variation that defeat
hand-engineered features; the feature hierarchy stated on slide 4, repeated
on 69, proven on 84; four heads on one backbone; R-CNN through Faster
R-CNN), [[convolution-operation]] (filters, element-wise multiply and add;
the number 9 in the X example; the `5 × 5` example giving 4; filters being
**learned rather than hand-designed**) and
[[convolutional-neural-network]] (the three operations conv/ReLU/pooling;
the convolutional neuron being "exactly the perceptron from Lecture 1";
stride and receptive field; max pooling for spatial invariance; the
feature-learning and classification halves) - the vision branch, from
[[chapter05-deep-learning-k32]] (K32), lecture A3.

## Tensions / differences between sources

No real tension within the K31 cluster itself (8/8
chapters). K31 vs K32 (Chapter 1): the 2 versions differ substantially -
K32 (2026) adds the 5 V's framework, its own working definition, a
DS/Analytics/BI comparison table, a roles table, a 5th analytics type
(Causal), a concrete 5-step thinking process, a 7-condition checklist -
none present in K31 (2025). Per the K31/K32 separation rule (CLAUDE.md),
this is **not logged as a "tension"** between 2 pages (they don't
cross-link) - noted here in plain text only as a historical fact (the
instructor updated content across years), with no wikilink between the 2
clusters.

K31 vs K32 (Chapter 2): the gap is even larger than
Chapter 1 - K32 (78 slides) is almost double K31 (41 slides) and adds 2
sections **entirely absent from K31**: "Python Essentials by Example"
(core syntax from scratch) and "Python for Data Analysis" (NumPy/pandas/
matplotlib/seaborn/statsmodels/scikit-learn, using real `Data2.csv`
data). K31's version stopped at introducing Python + installing/using
Jupyter + Markdown, with no syntax or data-analysis-library teaching at
all - the K31 equivalent (where it exists) is scattered across later
algorithm chapters instead of concentrated in one place like K32. Per
the separation rule, noted in plain text only, no cross-cluster
wikilink.

K31 vs K32 (Chapter 3): this is a **curriculum
structure** difference, not just a length one. The 2025 cohort split the
supervised branch across **3 separate chapters**; the 2026 cohort merges
all three into **one 112-slide file** titled "Supervised Learning" and
adds much that never existed before: the classification metric set,
cross-validation (LOOCV/K-fold/stratified), the bias-variance
decomposition, multi-label classification, Minkowski and Hamming
distances, the numeric example proving why KNN needs scaling,
classification vs regression trees, pre-/post-pruning and `ccp_alpha`,
self-supervised learning as a 4th ML type, an entire **boosting**
section with a bagging-vs-boosting table, **Elastic Net**, Ridge's
closed form, and the geometric reason Lasso zeroes coefficients. The
2026 deck also carries **2 self-correction boxes** versus earlier
versions (slide 17: MSE and RMSE both contain the 1/n factor; slide 32:
the K nearest are selected after all distances are computed, not inside
the loop). Per the separation rule, recorded in plain text only, with no
cross-cluster wikilink.

K31 vs K32 (Chapter 4): the 2025 cohort split the
unsupervised material into **2 separate chapters** (Clustering and PCA);
the 2026 cohort merges them into **one 86-slide file** and adds material
absent from the 2025 version: K-Means' explicit objective with the
NP-hardness note, the k-means++ initialisation, the
`TSS = WSS + BSS` decomposition, the DBSCAN and GMM section with its
method-choice table, the 7-point clustering pitfalls checklist, the SVD
route, the whole of Part 3 chaining PCA with clustering/classification/
regression (PCR included), the data-leakage section with its `Pipeline`
fix, and the list of PCA alternatives (Kernel PCA, t-SNE/UMAP,
autoencoders, factor analysis, Sparse PCA, Robust PCA). Per the K31/K32
separation rule this is **not a "tension"** between the clusters -
recorded in plain text, with no cross-cluster wikilink.

One within-K32 note, worth recording because it is a
**slide-versus-script mismatch inside one chapter** (not a
cohort-versus-cohort difference): the slide-30 and slide-71 code already
includes standardisation, the silhouette, eigenvalues, cumulative
percentages and a loadings table, but **none of the chapter's shipped
`.py` files does any of that**, and 2 of the 7 contain real bugs. This is
a practical gap to know about before using those files as
templates.

One further note on Chapter 5 (K32), of the
**cohort-difference** kind rather than a tension: the 2025 cohort taught deep
learning in **a single chapter** at a general level, while the 2026 version
expands it into **three full lectures** and adds self-attention and the
Transformer architecture outright - material entirely absent from the 2025
version. Per the cohort separation rule this is recorded in plain text only,
with no wikilink between the clusters.

And one note **within K32** worth recording: Chapter 5 is
the first chapter **not built from the course's two base textbooks** but
rebuilt from another university's course (slide 1 says so). The practical
consequences are two gaps against the previous four chapters: (a) a **markedly
higher mathematical level** - partial derivatives, the chain rule and gradient
notation used as if familiar, whereas Chapters 3 and 4 largely stopped at sums,
means and covariance matrices, with no revision slide bridging the gap; (b)
**no practice material at all** - no code, no data, no lab notebook, even
though slide 30 instructs the reader to open a notebook and fill in the
`#TODO`s. This is a difference in source material, not a contradiction in
content.

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
| [[supervised-learning-framework]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[train-test-split-and-cross-validation]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[model-evaluation-metrics-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[overfitting-underfitting-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[classification-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[k-nearest-neighbors-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[decision-tree-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[random-forest-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[boosting-ensemble]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[linear-regression-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[regularization-ridge-lasso-elastic-net-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[unsupervised-learning-framework]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[clustering-k32]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[distance-measures]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[k-means-clustering-k32]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[choosing-k-elbow-silhouette]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[hierarchical-clustering-k32]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[dbscan-and-gaussian-mixture]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[clustering-pitfalls-checklist]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[pca-k32]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[eigenvalues-and-eigenvectors]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[choosing-number-of-components]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[pca-loadings-interpretation]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[pca-combined-with-other-algorithms-k32]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[principal-component-regression]] | [[chapter04-unsupervised-learning-k32]] | K32 |
| [[perceptron]] | [[chapter05-deep-learning-k32]] | K32 |
| [[activation-functions]] | [[chapter05-deep-learning-k32]] | K32 |
| [[dense-layers-and-deep-networks]] | [[chapter05-deep-learning-k32]] | K32 |
| [[loss-functions-and-empirical-risk]] | [[chapter05-deep-learning-k32]] | K32 |
| [[gradient-descent]] | [[chapter05-deep-learning-k32]] | K32 |
| [[backpropagation]] | [[chapter05-deep-learning-k32]] | K32 |
| [[learning-rate-and-optimizers]] | [[chapter05-deep-learning-k32]] | K32 |
| [[mini-batch-gradient-descent]] | [[chapter05-deep-learning-k32]] | K32 |
| [[dropout-and-early-stopping]] | [[chapter05-deep-learning-k32]] | K32 |
| [[sequence-modeling-design-criteria]] | [[chapter05-deep-learning-k32]] | K32 |
| [[word-embedding]] | [[chapter05-deep-learning-k32]] | K32 |
| [[recurrent-neural-network]] | [[chapter05-deep-learning-k32]] | K32 |
| [[backpropagation-through-time]] | [[chapter05-deep-learning-k32]] | K32 |
| [[lstm-gated-cells]] | [[chapter05-deep-learning-k32]] | K32 |
| [[self-attention]] | [[chapter05-deep-learning-k32]] | K32 |
| [[convolution-operation]] | [[chapter05-deep-learning-k32]] | K32 |
| [[convolutional-neural-network]] | [[chapter05-deep-learning-k32]] | K32 |
| [[computer-vision-tasks]] | [[chapter05-deep-learning-k32]] | K32 |

## Exam question bank

- Distinguish the 4 types of analytics (descriptive/
  diagnostic/predictive/prescriptive) - given a concrete example, classify
  it.
- Why is big data technology NOT the same as data
  mining?
- Explain the "compass" and "movement" metaphor for
  data-analytic thinking vs data-driven decision making.
- Distinguish overfitting from underfitting - how is
  each addressed?
- Explain the KNN algorithm's steps, and why
  choosing small vs large K trades off bias and variance
  differently.
- Why is KNN called "lazy learning"?
- Compare the 3 decision tree algorithms
  ID3/C4.5/CART.
- How does Random Forest control overfitting, and
  how does that differ from choosing K in KNN?
- Distinguish Ridge (L2) from Lasso (L1) - the
  fundamental difference in the loss formula and its practical
  meaning.
- Why is MAPE more useful than MAE/MSE/RMSE when
  comparing error across problems with different scales?
- Compare K-Means and Hierarchical Clustering - when
  should each be used?
- Explain the relationship between eigenvalues,
  eigenvectors, and principal components in PCA.
- Compare PCR and Ridge/Lasso as 2 ways to handle
  multicollinearity - where do their mechanisms differ?
- Explain why a single perceptron can be seen as
  equivalent to Logistic Regression.
- Distinguish ANN, CNN, RNN - what data does each
  suit?
- (K32) Distinguish the 5 types of analytics,
  especially Causal vs Predictive - what is each type's characteristic
  error?
- (K32) Apply the 7-condition checklist to a
  concrete business problem - does it suit data science?
- (K32) Distinguish the roles of statsmodels and
  scikit-learn when fitting the same regression model - which is
  oriented towards explanation, which towards prediction, and why does
  that distinction matter?
- (K32) Explain why `In [n]`/`Out[n]` in Jupyter
  reflects execution order, not display order - give an example scenario
  where misunderstanding this causes an error.

### The instructor's own 5 review questions (K32, Chapter 3, slide 111)

_These are printed directly on the slide - the
highest revision priority._

1. Why does a very small K in KNN give low bias but
   high variance?
2. A node contains 20 observations of class A and 20
   of class B. Compute its entropy and its Gini impurity. Is it
   pure?
3. Explain why RMSE ≥ MAE always holds.
4. Your model has 98% training accuracy and 71% test
   accuracy. Diagnose the problem and propose two remedies.
5. You have 400 predictors and 120 observations.
   Would you choose Ridge or Lasso, and why?

### Additional questions from K32 Chapter 3

- (K32) What is data leakage? Give a concrete
  example of fitting a scaler in the wrong place, and explain why it
  makes reported performance optimistic.
- (K32) Why is accuracy misleading on imbalanced
  data? For fraud detection, would you prioritise precision or recall,
  and why?
- (K32) Write the bias-variance decomposition and
  explain each term, including the irreducible one.
- (K32) Given ages 30 vs 35 and incomes 20,000 vs
  20,050 - compute the Euclidean distance and explain why KNN requires
  scaling.
- (K32) Compare ID3 and CART on 4 points: splitting
  criterion, split type, handling of numeric data, and applicable tasks.
  Which one does `scikit-learn` implement?
- (K32) Distinguish pre-pruning from post-pruning.
  What does `ccp_alpha` penalise?
- (K32) A random forest has 2 sources of randomness
  - name them and explain why **both** are needed. Why would averaging
  identical trees not reduce variance?
- (K32) How is the out-of-bag error computed, and
  why is it called a "free validation estimate"?
- (K32) Compare bagging and boosting: how trees are
  built, what the trees look like, and which term of the error
  decomposition each mainly reduces.
- (K32) Explain **geometrically** why Lasso sets
  coefficients exactly to zero while Ridge does not - the role of the
  diamond and the circle.
- (K32) What Lasso problem does Elastic Net solve
  when predictors are strongly correlated? Which models do α = 1 and
  α = 0 give?
- (K32) Why can Ridge handle the k > n case? Point
  to the role of λI in β̂ = (X'X + λI)⁻¹X'y.
- (K32) The same linear regression model serves 2
  different purposes - name them and explain why a model can be good for
  one and mediocre for the other.

### The instructor's own 6 group discussion topics (K32, Chapter 4, slide 82)

1. List the similarities and differences between
   clustering and classification.
2. Compare the applications of hierarchical
   clustering and K-Means - when would you prefer each?
3. Are there clustering methods other than K-Means
   and hierarchical? Describe one and explain what problem it
   solves.
4. PCA maximises variance. Give a concrete
   economics example where the highest-variance direction is **not** the
   most interesting one.
5. You cluster customers and get four segments. Your
   manager asks: "How do we know these are real?" What evidence would you
   present?
6. A colleague reports that PCA raised their model's
   R squared **on the training set**. Why is this not evidence that PCA
   helped?

### Additional questions from K32 Chapter 4

- (K32) Why can K not be chosen by minimising WCSS?
  State WCSS at `K = n` and draw the conclusion.
- (K32) Write `TSS = WSS + BSS` and explain why
  "compact clusters" and "well separated clusters" are **one and the same
  objective**.
- (K32) Describe k-means++ and say what problem of
  random initialisation it fixes. The probability of picking the next
  centre is proportional to what quantity?
- (K32) Take the two customers (20, 2) and (22, 14)
  with income in VND million. Compute the Euclidean distance, recompute
  it with income in VND, and state the conclusion about
  standardisation.
- (K32) Why are merges in hierarchical clustering
  irreversible, and how does that differ from K-Means?
- (K32) On a dendrogram, what does a horizontal
  bar's height mean, and how do you read K off a cut? Why must the
  horizontal order of the leaves not be interpreted?
- (K32) Name the 4 linkages and the pitfall of each.
  Which one optimises the same quantity K-Means optimises?
- (K32) Why does `trace(R) = p` lead to the
  threshold of 1 in Kaiser's rule?
- (K32) Distinguish covariance from correlation, then
  explain why correlation-matrix PCA is usually preferred.
- (K32) State PCA's two equivalent objectives
  (maximise variance, minimise reconstruction error) and say why they
  have the same solution.
- (K32) Why does software use the SVD instead of
  forming the covariance matrix? Give 2 reasons and the formula relating
  `lambda_m` to `d_m`.
- (K32) Given a loadings table where PC1 is
  uniformly positive and PC2 has opposite signs for economic versus
  social indicators, name and interpret the two components.
- (K32) Compute PCA's compression ratio for a
  `512 x 512` image keeping `m = 50` components, against storing the full
  image.
- (K32) Why does JPEG use the DCT rather than PCA?
  What does the answer say about the cost of a data-dependent
  basis?
- (K32) Explain the curse of dimensionality and say
  which family of methods it breaks.
- (K32) Why is running PCA, plotting PC1-PC2 and
  saying "the clusters are clearly separated" circular? What evidence
  would actually validate them?
- (K32) Describe the leakage that occurs when
  scaling and PCA are fitted on the full data before splitting, and give
  the fix.
- (K32) How does PCR differ from PLS, and why does
  PLS usually need fewer components? Which formula maps coefficients from
  components back to the original variables?
- (K32) Why can PCA **damage** a classification
  problem, and what should be used instead when prediction is the
  goal?

### Additional questions from K32 Chapter 5

_This chapter carries **no** review questions or
discussion topics from the instructor - unlike Chapter 3 (5 questions, slide
111) and Chapter 4 (6 topics, slide 82). Every question below is synthesised
by this wiki from the slide content._

- (K32) Write a perceptron's formula and state the role
  of the bias `w0`. Why can a single perceptron only classify with a straight
  line?
- (K32) Show that a multi-layer network with linear
  activations is equivalent to a single linear layer. What does that imply
  about its decision boundary?
- (K32) Compare sigmoid, tanh and ReLU by range and
  derivative. Why is `tanh` chosen for the RNN state equation and sigmoid for
  an LSTM gate?
- (K32) What does "hidden layer" mean literally? What
  does the training data say, and not say, about the values in that
  layer?
- (K32) Write the binary cross-entropy and MSE losses.
  Which output type is each for, and how does each behave towards large
  errors?
- (K32) Why is there a minus sign in the update
  `W <- W - eta ∂J/∂W`? And why is `J` regarded as a function of `W` rather
  than of the data?
- (K32) Explain backpropagation via the chain rule for a
  two-weight network. Which factor is reused, and why does that reuse matter
  computationally?
- (K32) Give the three cases for the learning rate and
  each one's consequence. Why does too small an `eta` not merely slow things
  down but give a worse result?
- (K32) Compare full-batch, stochastic and mini-batch
  gradient descent. Give the **two** independent reasons mini-batch is the
  default.
- (K32) In what fundamental respect do dropout and early
  stopping differ from ridge/lasso regularisation? Why must a **different**
  subset be dropped each iteration, and why must all units be active at test
  time?
- (K32) Give the four sequence modeling design criteria.
  Use the pair "The food was good, not bad at all" and "The food was bad, not
  good at all" to explain the third.
- (K32) Why can a neural network not take words as
  input? Compare one-hot with a learned embedding on **two** counts: meaning
  information, and dimensionality.
- (K32) Write the two equations of an RNN cell and state
  the roles of `Wxh`, `Whh`, `Why`. Which matrix causes the gradient problem,
  and why?
- (K32) How do exploding and vanishing gradients differ
  in cause and in remedy? Why is it said that vanishing gradients make the
  model **learn a skewed** rather than merely **a slow** model?
- (K32) Which two operations make up an LSTM gate, and
  why is the `(0, 1)` range essential to the mechanism? What part of a gate is
  **learned**?
- (K32) Give the three limitations of recurrent models.
  Which does gating fix, and which does it **not**?
- (K32) Explain `Q`, `K`, `V` through the search analogy.
  Why must keys and values be two different things?
- (K32) Write the self-attention formula and the four
  steps leading to it. Why is **positional encoding mandatory** for
  self-attention but not for an RNN?
- (K32) Match each RNN limitation against how
  self-attention handles it. Why does the distance between two elements no
  longer affect the strength of the link between them?
- (K32) What is an image to a computer? Give two reasons
  it cannot be fed straight into a fully connected layer.
- (K32) Define the convolution operation precisely. In
  the X example, why does a perfectly matching patch sum to 9? What size
  feature map does an `n × n` image with an `f × f` filter at stride 1
  give?
- (K32) Why do two of the three classical filters on
  slide 78 have entries summing to zero? And what is the fundamental
  difference between those filters and a CNN's?
- (K32) Give the three operations that make a CNN and
  each one's purpose. Which problem from the X example does max pooling
  solve?
- (K32) Why is a convolutional neuron said to be
  "exactly the perceptron from Lecture 1"? What are the two differences, and
  what assumption about the world does the second encode?
- (K32) Distinguish a convolutional layer's depth `d`
  from the input image's colour channels. What is the receptive field, and why
  does it widen with depth?
- (K32) What are the two halves of a classification CNN?
  Why does that split let one feature extractor serve four different
  problems?
- (K32) At which three slides does the feature hierarchy
  appear, and what role does each occurrence play in the chapter's
  argument?
- (K32) Which message of the whole chapter does the
  evolution from the naive approach through R-CNN to Faster R-CNN
  repeat?
- (K32) Of the four heads on slide 87, which trains
  **without human labelling**, and what is its loss?
