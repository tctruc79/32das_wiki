---
type: synthesis
title: "Exam Prep"
tags: [synthesis, exam-prep]
created: 2026-08-22
updated: 2026-08-28
status: complete
---

The single compounding exam-prep page — updated
MANDATORY every time a new chapter is ingested (see CLAUDE.md, INGEST
section).

## Quick lookup table

| Chương | Khóa | Chủ đề | Ghi chú |
|---|---|---|---|
| [[chapter01-introduction]] | K31 | Khoa học dữ liệu là gì, kim tự tháp DIKW, 4 loại phân tích, tư duy phân tích dữ liệu | Bản slide 2025 khá sơ lược — nhiều slide chỉ có hình, không có định nghĩa chi tiết cho các thuật ngữ ở slide 23 |
| [[chapter02-python-jupyter]] | K31 | Python (lịch sử, 5 thế hệ ngôn ngữ, ứng dụng), Jupyter Notebook (cài đặt, Markdown, chia sẻ) | Thuần công cụ, không có lý thuyết ML |
| [[chapter03-machine-learning-knn]] | K31 | Tổng quan ML, lịch sử AI, overfitting/underfitting, Classification, KNN + ví dụ IRIS | Outline slide 3 nhắc Regression/Clustering/Dimension reduction/Association nhưng đó là dàn ý cả cụm Chapter 3-7, không phải nội dung file này |
| [[chapter04-decision-tree-random-forest]] | K31 | Cây quyết định (ID3/C4.5/CART, purity measures) + Rừng ngẫu nhiên (ensemble) | |
| [[chapter05-ridge-lasso]] | K31 | Hồi quy tuyến tính, quá khớp trong hồi quy, Ridge/Lasso, MAPE | Dữ liệu thực hành `regression.csv` không còn trong `raw/` |
| [[chapter06-clustering]] | K31 | Học không giám sát: phân cụm, thước đo khoảng cách, K-Means, Hierarchical | Slide linkage methods chỉ có hình |
| [[chapter07-pca]] | K31 | PCA: hiệp phương sai, trị riêng/véc-tơ riêng, quy trình, kết hợp với Clustering/Classification/Regression | Mật độ cross-reference cao nhất trong 8 chương |
| [[chapter08-deep-learning]] | K31 | Lịch sử học sâu, perceptron, lan truyền tiến/lùi, ANN/CNN/RNN | Gap: chưa có nguồn giảng Logistic Regression chi tiết |
| [[chapter01-introduction-k32]] | K32 | 5 V's, định nghĩa vận hành, DS vs Analytics vs BI, 5 loại phân tích (thêm Causal), checklist 7 điều kiện | Tách cụm — không link chéo K31 |
| [[chapter02-python-jupyter-k32]] | K32 | Python (cú pháp đầy đủ), Jupyter (kernel/cell/magic commands), Python for Data Analysis (NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn) dùng `Data2.csv` | Gần gấp đôi bản K31 (78 vs 41 slide) — thêm 2 phần hoàn toàn mới; tách cụm — không link chéo K31 |
| [[chapter03-supervised-learning-k32]] | K32 | Trọn nhánh học có giám sát: nền tảng ML, đánh giá mô hình (chỉ số hồi quy + phân loại, kiểm định chéo, độ chệch–phương sai), phân loại + KNN, cây quyết định, rừng ngẫu nhiên + tăng cường, hồi quy, Ridge/Lasso/Elastic Net | 112 slide — chương lớn nhất; gộp nội dung mà khóa 2025 chia làm 3 chương. Mã Ví dụ 3.1 **cố ý có lỗi** (slide 41-42 ghi rõ). Bài tập nhóm 3 cần `Income.csv` chưa có trong `raw/`. Tách cụm — không link chéo K31 |

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

### K. K32 — Chapter 3: Supervised Learning Foundations and Methodology

_A separate cluster for K32, isolated from clusters
A-J per the separation rule._

[[supervised-learning-framework]] (labelled data →
f̂; category ⇒ classification, number ⇒ regression; the 4 ML types; the
parameter vs hyperparameter vocabulary),
[[train-test-split-and-cross-validation]] (splitting, data leakage,
LOOCV/K-fold/stratified), [[model-evaluation-metrics-k32]] (regression
plus classification metrics) and [[overfitting-underfitting-k32]]
(over/underfitting + the bias–variance decomposition) — the 4
methodological concepts that apply to **every algorithm** in the
chapter, all from [[chapter03-supervised-learning-k32]] (K32).

### L. K32 — Chapter 3: Classification and Ensemble Algorithms

_A separate cluster for K32._

[[classification-k32]] (binary/multi-class/
multi-label, the 4 build steps), [[k-nearest-neighbors-k32]]
(distance-based; 4 distances, compulsory scaling, choosing K by CV, lazy
learning), [[decision-tree-k32]] (rule-based; ID3 vs CART, the 3 purity
measures, information gain, pruning), [[random-forest-k32]] (bagging +
feature subsampling, OOB error) and [[boosting-ensemble]] (AdaBoost/
gradient/XGBoost, the bagging vs boosting table) — the chapter's main
algorithmic spine, from [[chapter03-supervised-learning-k32]]
(K32).

### M. K32 — Chapter 3: Regression and Regularization

_A separate cluster for K32._

[[linear-regression-k32]] (regression inside the
supervised frame, OLS/LAD/MLE/MM, polynomials, dummies, explanation vs
prediction) and [[regularization-ridge-lasso-elastic-net-k32]] (the 3
loss functions, Elastic Net, Ridge's closed form, the geometric reason
Lasso zeroes coefficients, choosing λ by CV) — the regression branch,
from [[chapter03-supervised-learning-k32]] (K32).

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

K31 vs K32 (Chapter 3): this is a **curriculum
structure** difference, not just a length one. The 2025 cohort split the
supervised branch across **3 separate chapters**; the 2026 cohort merges
all three into **one 112-slide file** titled "Supervised Learning" and
adds much that never existed before: the classification metric set,
cross-validation (LOOCV/K-fold/stratified), the bias–variance
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

## Concept → source map

| Khái niệm | Nguồn | Khóa |
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

### The instructor's own 5 review questions (K32, Chapter 3, slide 111)

_These are printed directly on the slide — the
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
- (K32) Write the bias–variance decomposition and
  explain each term, including the irreducible one.
- (K32) Given ages 30 vs 35 and incomes 20,000 vs
  20,050 — compute the Euclidean distance and explain why KNN requires
  scaling.
- (K32) Compare ID3 and CART on 4 points: splitting
  criterion, split type, handling of numeric data, and applicable tasks.
  Which one does `scikit-learn` implement?
- (K32) Distinguish pre-pruning from post-pruning.
  What does `ccp_alpha` penalise?
- (K32) A random forest has 2 sources of randomness
  — name them and explain why **both** are needed. Why would averaging
  identical trees not reduce variance?
- (K32) How is the out-of-bag error computed, and
  why is it called a "free validation estimate"?
- (K32) Compare bagging and boosting: how trees are
  built, what the trees look like, and which term of the error
  decomposition each mainly reduces.
- (K32) Explain **geometrically** why Lasso sets
  coefficients exactly to zero while Ridge does not — the role of the
  diamond and the circle.
- (K32) What Lasso problem does Elastic Net solve
  when predictors are strongly correlated? Which models do α = 1 and
  α = 0 give?
- (K32) Why can Ridge handle the k > n case? Point
  to the role of λI in β̂ = (X'X + λI)⁻¹X'y.
- (K32) The same linear regression model serves 2
  different purposes — name them and explain why a model can be good for
  one and mediocre for the other.
