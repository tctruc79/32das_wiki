---
type: source
title: "Chapter 3 (K32) — Supervised Learning"
tags: [chapter-3, k32, supervised-learning, classification, regression, knn, decision-tree, random-forest, boosting, regularization]
created: 2026-08-28
updated: 2026-08-28
status: complete
source_file: "raw/Lecture Notes/K32/Chapter03/VNP_DataScience_SupervisedLearning_2026.pdf"
---

## Metadata

- **Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City — Vietnam-
  Netherlands Programme.
- **Cohort**: K32 (2026, current cohort).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: 112 (matches the PDF's physical
  page count; the footer numbers up to `112 / 112`). PDF metadata
  creation date: 2026-08-27 — the newest version at ingest time.
- **Position in the course**: this is K32's **first
  algorithm chapter** and the largest deck so far — a single file
  covering the whole **supervised learning** branch: ML foundations,
  model evaluation, classification + KNN, decision trees, ensemble
  methods (random forest + boosting), regression, and Ridge/Lasso/
  Elastic Net regularization. In the 2025 cohort the same material was
  split across **3 separate chapters**; the 2026 cohort merges them into
  one and adds entirely new sections (classification metrics,
  cross-validation, the bias–variance trade-off, boosting, Elastic Net).
  **Per the cohort separation rule** (CLAUDE.md), this page does not link
  to any K31 page — comparisons are stated in plain text only.
- **Filename does not follow the chapter-number
  pattern**: the file is `VNP_DataScience_SupervisedLearning_2026.pdf`
  (no `Chapter03` string unlike the previous two), but the user placed it
  in `raw/Lecture Notes/K32/Chapter03/` — so this wiki treats it as
  K32's Chapter 3.
- **Companion files in the same folder**: 2 Python
  scripts (`Example3.1_Iris_New.py`, `Example3.2_DecisionTree_New.py`)
  and 5 data files (`iris.csv`, `Nationality.csv`, `Regression.csv`,
  `Regression.xlsx`, `TeleCustomers.csv`). See the dedicated section
  below.

## Summary

- **The key idea** (slide 2): given labelled data
  {(xᵢ, yᵢ)}ⁿᵢ₌₁, learn a function f̂ that predicts y for new inputs x. If
  y is a **category** ⇒ classification; if y is a **number** ⇒
  regression. All 112 slides are just different ways of learning that
  f̂.
- **8-part outline** (slide 3): (1) Introduction to
  Machine Learning, (2) Core Concepts and Model Evaluation, (3)
  Classification and K-Nearest Neighbours, (4) Decision Trees, (5)
  Ensemble Methods, (6) Regression in Supervised Learning, (7)
  Regularization: Ridge, Lasso and Elastic Net, (8) Summary.
- **Section 2 is the most important new content**:
  the 2025 version only touched on over/underfitting and 3 regression
  metrics. The 2026 version builds a full sub-chapter on evaluation
  methodology: data splitting + a **data leakage** warning, the complete
  regression metric set (adding MAPE, R²) with guidance on *which metric
  when*, the **classification** metric set (accuracy, precision, recall,
  F1, ROC-AUC — entirely new), **cross-validation** (LOOCV, K-fold,
  stratified K-fold), and the **bias–variance** decomposition
  formula.
- **Sections 3-5 (classification)**: keep the 2025
  spine of KNN → decision tree → random forest, but add: 4 distance
  measures (adding Minkowski, Hamming), a concrete numeric example of
  *why scaling is compulsory* for KNN, **multi-label** classification,
  classification vs regression trees, pre-/post-pruning and
  cost-complexity pruning (`ccp_alpha`), the random forest's 2 sources of
  randomness (bagging + feature subsampling), the **out-of-bag (OOB)**
  error, and an entirely new section on **boosting** (AdaBoost/Gradient
  Boosting/XGBoost) with a bagging-vs-boosting comparison table.
- **Sections 6-7 (regression)**: regression is
  placed back inside the supervised-learning frame ("only the type of y
  changes — everything from Section 2 applies unchanged"), sharply
  distinguishing **classical statistics** (explanation, testing) from
  **machine learning** (out-of-sample prediction). Regularization adds
  **Elastic Net** (absent in 2025), the geometric explanation of *why
  Lasso sets coefficients exactly to zero* (the diamond constraint has
  corners on the axes), Ridge's closed form β̂ = (X'X + λI)⁻¹X'y, and a
  full 6-criterion Ridge-vs-Lasso table.
- **Section 8 (summary)**: one table comparing 7
  algorithms on 4 criteria (task, key hyperparameter, scaling needed,
  main strength) + 5 review questions. That table is the chapter's best
  single revision tool.

## Key content

### Opening: the chapter's shared problem (slides 2-3)

Slide 2 defines the problem once for the whole
chapter: given labelled data, learn f̂ predicting y from x. The split is
by the type of y (category ⇒ classification; number ⇒ regression). The
list of popular supervised algorithms is given immediately: k-Nearest
Neighbors, Decision Tree, Random Forest, Logistic Regression, Linear
Regression, Regularized Regression (Ridge/LASSO), Support Vector Machine.
→ [[supervised-learning-framework]]

### 1. Introduction to Machine Learning (slides 5-14)

- **What is machine learning** (slide 5): a subset
  of artificial intelligence dealing with a machine's ability to learn;
  the aim is to make machines smarter and more efficient.
- **A short history of AI** (slide 6): 1950s —
  early concepts, Alan Turing and the Turing Test; the term "artificial
  intelligence" appears at the **1956** Dartmouth Conference; 1980s —
  expert systems after the AI winter; 1990s — ML techniques learning
  *from data* rather than hand-coded rules; 2000s-2010s — deep learning
  on big data; **2017 onwards** — the Transformer architecture leads to
  large language models (ChatGPT, Claude, Gemini), multimodal and
  generative AI; today — AI handles text, images, voice, video and
  multi-step tasks, increasingly acting as a copilot or agent alongside
  humans.
- **Two phases of every ML project** (slide 8):
  **training** (learn a model from training data) and **application**
  (test the model, then use it to make decisions). The slide's 5-step
  diagram: labelled data → features x, label y → learn f̂ → validate &
  tune → predict new x*.
- **Two everyday examples** (slide 9): a spam filter
  (training data are emails labelled ham/spam; the model classifies each
  new message) and face recognition on social networks (users train the
  system by tagging friends in photos; new uploads get automatic
  detection and tag suggestions). The slide's note: **both are
  supervised — the machine only learns because a human supplied the
  correct answer (the label)**.
- **4 main types of ML** (slide 12): **supervised**
  (labelled training data — the lecture's focus; split into
  classification [discrete outputs] and regression [numeric outputs]);
  **unsupervised** (unlabelled data, discover patterns — clustering,
  dimension reduction, association); **reinforcement** (an agent learns
  by interacting with an environment for rewards/penalties);
  **self-supervised** (labels generated from the data itself, e.g.
  next-word prediction — how modern LLMs are pre-trained). The 4th type
  is **entirely new** versus the 2025 version, which listed only 3.
- **Bảng thuật ngữ dùng xuyên suốt** (slide 14) — bảng tra cứu quan
  trọng nhất để đọc phần còn lại:

  | Thuật ngữ | Ý nghĩa |
  |---|---|
  | Quan sát / thể hiện (observation / instance) | 1 hàng dữ liệu, (xᵢ, yᵢ) |
  | Đặc trưng / đầu vào / biến dự báo / biến / chiều / thuộc tính | 1 cột dữ liệu, xⱼ |
  | Nhãn / mục tiêu / đầu ra (label / target / output) | Đại lượng cần dự đoán, y |
  | Mô hình (model) | Hàm đã học được, f̂ |
  | Tham số (parameter) | Học được từ dữ liệu (vd βⱼ) |
  | Siêu tham số (hyperparameter) | Do người dùng chọn trước khi huấn luyện (vd K, λ, độ sâu cây) |

  **Vocabulary table** (slide 14) — the most
  important reference for reading the rest of the deck: observation =
  one row (xᵢ, yᵢ); feature/input/predictor/variable/dimension/attribute
  = one column xⱼ; label/target/output = the quantity to predict, y;
  model = the learned f̂; parameter = learned from data (e.g. βⱼ);
  hyperparameter = chosen before training (e.g. K, λ, tree depth). The
  slide's takeaway: **parameters are estimated by the algorithm;
  hyperparameters are selected by you, usually with
  cross-validation**.

### 2. Core Concepts and Model Evaluation (slides 16-25)

- **Splitting the data** (slide 16): never judge a
  model on the data it was trained on. The training set estimates
  parameters; the **test set is touched once**, at the very end, for an
  honest performance figure. The **data leakage** warning — *the most
  common beginner mistake*: any transformation learned from data
  (scaling, imputation, feature selection) must be fitted on the training
  part only, then applied to validation and test; otherwise test
  performance is optimistic. →
  [[train-test-split-and-cross-validation]]
- **Regression metrics** (slides 17-18): with error
  uᵢ = yᵢ − ŷᵢ — MAE, MSE, RMSE = √MSE (back in y's units), MAPE
  (scale-free), and R² = 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)². Other criteria
  named: RSE, RAE, Normalised RMSE, Relative RMSE. **How to choose**: MAE
  treats all errors equally; RMSE punishes large errors, so use it when
  big mistakes are costly; MAPE is undefined when some yᵢ = 0 and is
  asymmetric. → [[model-evaluation-metrics-k32]]
- **Classification metrics** (slide 19, **entirely
  new**): **accuracy is misleading on imbalanced data** — with 99%
  legitimate transactions, an always-"legitimate" model is 99% accurate
  and useless. **Precision**: of those flagged, how many were right — use
  when false alarms are expensive. **Recall (sensitivity)**: of the true
  cases, how many did we catch — use when misses are expensive.
  **F1**: the harmonic mean, to balance both. **ROC-AUC**: ranking
  quality across all thresholds, when the decision threshold is not fixed
  in advance.
- **Cross-validation** (slide 21): a technique to
  test model effectiveness and **choose hyperparameters**. LOOCV
  (training on n − 1, testing on exactly 1, repeated n times); K-fold
  (K parts, train on K − 1, rotate, average the K scores; K = 5 or 10 is
  standard); stratified K-fold (preserves class proportions per fold —
  **always prefer this for classification**).
- **Underfitting** (slide 23): the model is too
  simple to capture the underlying patterns; it performs poorly on both
  training and test data. Fix: a more complex model, better features, or
  less regularization. Symptom: training error high, test error high, and
  the two are close. → [[overfitting-underfitting-k32]]
- **Overfitting** (slide 24): the model is too
  complex and learns the noise as well as the pattern; excellent on
  training data, poor on test/forecast data, cannot generalise. Fix: a
  simpler model, less complexity, more data, regularization (Section 7),
  or prune the tree. Symptom: very low training error but much higher
  test error — a large gap between the two curves.
- **The bias–variance trade-off** (slide 25,
  **entirely new**): E[(y − f̂(x))²] = Bias²[f̂(x)] + Var[f̂(x)] + σ² —
  too simple, too flexible, and the **irreducible** error. Underfitting
  lives on the left of the complexity axis, overfitting on the right; the
  best model sits at the minimum of the total-error curve.

### 3. Classification and K-Nearest Neighbours (slides 27-51)

- **What is classification** (slide 27): categorise
  data into a given number of classes. Terms: **classifier**; **binary**
  (two outcomes); **multi-class** (more than two, one and only one label
  per observation); **multi-label** (several labels at once, e.g. an
  article tagged both "finance" and "technology") — the last is **new**
  versus 2025. → [[classification-k32]]
- **4 steps to build a classification model** (slide
  29): initialize the classifier → train on labelled data → predict the
  target (`predict(X)`) → evaluate on held-out data.
- **Popular algorithms** (slide 30): Naive Bayes,
  decision tree (Section 4), logistic regression, KNN, SVM, random forest
  (Section 5), gradient boosting/XGBoost, neural networks. The lecture
  covers KNN (distance-based), decision trees (rule-based) and tree
  ensembles — together the main families of ideas used in
  practice.
- **What is KNN** (slide 31): one of the most
  popular ML algorithms; **assumes similar things are near each other**;
  usable for both classification (vote) and regression (average).
  → [[k-nearest-neighbors-k32]]
- **The KNN algorithm** (slide 32): load and
  standardise → choose K → for a new query x*: compute the distance to
  **every** training observation, sort and keep the K nearest, read their
  labels, return the mode (classification) or mean (regression). **The
  slide's correction note**: selecting the K nearest happens **after**
  all distances are computed — not inside the loop over
  observations.
- **4 distance measures** (slide 34): **Euclidean**
  (default), **Manhattan** (city block, more robust to outliers),
  **Minkowski** (the general form; q = 2 Euclidean, q = 1 Manhattan),
  **Hamming** (for categorical features — the number of positions that
  differ). The last two are **new** versus 2025.
- **Why scaling is compulsory for KNN** (slide 35,
  a **new** numeric example): predicting credit default from age (30 vs
  35) and income (20,000 vs 20,050 VND million) gives a Euclidean
  distance of √(5² + 50²) ≈ 50.2 — **almost entirely driven by income**,
  simply because income is measured in bigger numbers. **Rule**: always
  standardise (z = (x − x̄)/s) or min–max scale before KNN, and **fit the
  scaler on the training set only**.
- **Choosing K** (slide 37): run KNN over several K
  and pick the one minimising the **cross-validated** error, not the
  training error (which is always minimised at K = 1). No optimal K suits
  all datasets; **small K** ⇒ noise dominates, low bias but high variance
  (overfitting); **large K** ⇒ more expensive, low variance but high bias
  (underfitting); for binary problems prefer an **odd K** to avoid tied
  votes.
- **KNN pros and cons** (slide 38): **pros** —
  simple, no model to build, few parameters, no distributional
  assumptions, highly non-linear decision boundary. **Cons** —
  significantly slower as features grow (the **curse of
  dimensionality**); prediction is computationally intensive as
  observations grow; it is **lazy learning** (nothing learned at training
  time, the whole training set must be stored); sensitive to feature
  scaling and irrelevant features.
- **Example 3.1 — the IRIS dataset** (slides 39-48):
  using `iris.csv` — 3 species, 4 measured features (sepal/petal length
  and width in cm), the dataset Fisher used for his linear discriminant.
  The slide workflow: load → `train_test_split(test_size=0.3,
  random_state=42, stratify=y)` → scatter plot coloured by species →
  `StandardScaler` (fit on train, transform on test) →
  `KNeighborsClassifier(n_neighbors=5)` → predict → confusion matrix and
  classification report → **find the best K with `GridSearchCV(cv=5)`
  over `range(1, 26, 2)`** → evaluate **once** on the untouched test set
  → predict a new flower via a 1-row `DataFrame`, scaled with the already
  fitted scaler. **Slides 41-42 state explicitly that the errors in the
  code are intentional for learning purposes** — see "Gaps / notes".
- **Applications and group work** (slides 49-51): a
  KNN spam classifier and KNN fraud detection on transaction data.
  **Teamwork 1** (slide 51): each group gets a real-life domain, lists as
  many classification applications and algorithms as possible, and for
  each application **states which metric matters most (precision, recall
  or accuracy) and justifies why**. Submit to the instructor.

### 4. Decision Trees (slides 53-75)

- **What is a decision tree** (slide 53): sorts
  observations down the tree from the root to a leaf. Terms: node /
  decision node, branch / sub-tree, root node, leaf node, splitting,
  pruning, depth (the longest root-to-leaf path).
  → [[decision-tree-k32]]
- **Classification vs regression trees** (slide 55,
  **new**): classification trees have qualitative output, use Gini/
  entropy/classification error to pick splits, and predict the majority
  category in the leaf. Regression trees have quantitative output, use
  variance reduction or MSE, and predict the mean or median in the leaf.
  A single family (CART) covers both.
- **How to build a tree** (slide 58): start from an
  empty tree → split on the next best attribute → recurse. The whole
  difficulty is in the word "best": the split that makes child nodes as
  **pure** as possible.
- **Tree algorithms** (slides 59-61): ID3, C4.5,
  CART, CHAID. **In practice** `scikit-learn` implements an optimised
  CART — `DecisionTreeClassifier`/`DecisionTreeRegressor` are **CART, not
  ID3** — but ID3 is clearest for understanding the idea. **ID3**: uses
  entropy and information gain, works on categorical data, doesn't handle
  numeric data directly, produces multi-way splits, may overfit and
  produce biased trees because information gain favours attributes with
  many distinct values. **CART**: both tasks, Gini for classification and
  MSE for regression, **always binary splits**, handles large datasets,
  supports cost-complexity pruning.
- **3 purity measures** (slides 62-65): with pᵢ the
  proportion of class i in the node — **classification error**
  Eₘ = 1 − max(pᵢ); **Gini impurity** = Σpᵢ(1 − pᵢ) = 1 − Σpᵢ²;
  **entropy** = −Σpᵢlog₂(pᵢ). Lower ⇒ purer. **Entropy's range** (new): 0
  (perfectly pure) to log₂K (all classes equally likely) — with K = 3 the
  maximum is log₂3 ≈ 1.585 bits. All three slides use **the same worked
  example**: a node with class A: 16, B: 13, C: 1.
- **Rules to follow** (slide 66): entropy 0 ⇒ a
  leaf; entropy > 0 ⇒ split further; if zero entropy is unreachable,
  decide by simple majority.
- **Information gain** (slide 69): based on the
  entropy decrease after splitting on an attribute; building a tree is
  all about finding the attribute with the highest gain:
  IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|)·Entropy(S_v). More uncertainty
  means more entropy.
- **When to stop, and pruning** (slide 70): stop
  when all records share the output, or share the same inputs, or
  `min_samples_leaf` / `max_depth` is reached. **Pruning** (new vs 2025):
  **pre-pruning** (early stopping via those rules) and **post-pruning**
  (grow the full tree, then cut back branches that don't improve
  validation performance — in CART, cost-complexity pruning controlled by
  α = `ccp_alpha`, penalising the number of leaves).
- **The 4 detailed steps** (slide 71): compute the
  dataset's entropy → for every attribute, compute the entropy of all its
  categorical values, take the weighted average, compute its gain → pick
  the highest-gain attribute → repeat until stopping criteria are
  met.
- **Single-tree pros and cons** (slide 72, **new**):
  **pros** — highly interpretable, no scaling needed, handles numeric and
  categorical inputs, captures non-linearity and interactions
  automatically. **Cons** — **unstable** (a small data change can produce
  a very different tree — high variance); easily overfits at full depth;
  axis-parallel splits approximate diagonal boundaries by steps. This
  motivates Section 5: averaging many trees removes most of the
  instability.
- **Examples 4.1 and 4.2 — decision trees in
  Python** (slides 73-75): `DecisionTreeClassifier(criterion="gini",
  max_depth=3, min_samples_leaf=5, random_state=42)`, print train and
  test accuracy side by side (an overfitting diagnostic), confusion
  matrix and classification report, draw with `plot_tree(...)`. **Example
  4.2**: which features actually drive predictions, via
  `tree.feature_importances_`.

### 5. Ensemble Methods (slides 77-86)

- **What are random forests** (slide 77): an
  **ensemble** algorithm — build many small, weak trees and combine them
  by averaging (regression) or majority vote (classification). **Two
  sources of randomness**: **bagging** (each tree on a bootstrap sample
  of the observations) and **feature subsampling** (at each split, only a
  random subset of k out of m features). Because the trees are
  **decorrelated**, averaging cancels much of a single tree's variance.
  → [[random-forest-k32]]
- **Why random forests** (slide 79): resistant to
  overfitting versus a single deep tree; handles missing values and mixed
  types; accuracy improves up to a point then plateaus; provides
  **feature importance** scores; the **out-of-bag (OOB)** error gives a
  free validation estimate — each observation is tested on the ~one third
  of trees that did not see it. **The slide's caveat** (new): "the more
  trees, the more accurate" is only true until the curve flattens; beyond
  that, extra trees cost without benefit.
- **Stage 1: growing the forest** (slide 80): draw a
  bootstrap sample → randomly select k of m features (k ≪ m) → find the
  best split among those k → split → repeat until the stopping rule →
  repeat n times for n trees. **Typical defaults** (new): k = √m for
  classification, k = m/3 for regression.
- **Stage 2: prediction** (slide 81): run the test
  features through each tree's rules, store each predicted target → count
  the votes → take the most-voted target. **For regression**: replace the
  vote with the average of the n tree predictions.
- **Example 5.1 — random forest in Python** (slides
  82-83): `RandomForestClassifier(n_estimators=500, max_features="sqrt",
  oob_score=True, random_state=42, n_jobs=-1)`, print `oob_score_` next
  to the test score, then rank the top 10 features.
- **5.2 Boosting — the other big ensemble family**
  (slide 84, **entirely new**): bagging builds trees in *parallel*;
  boosting builds them *sequentially*, each correcting the previous
  ones' errors. **AdaBoost** re-weights misclassified observations;
  **gradient boosting** fits each new tree to the residuals (the gradient
  of the loss); **XGBoost / LightGBM / CatBoost** are fast, regularised
  implementations that typically win competitions on structured tabular
  business data. **Trade-off**: boosting is usually more accurate than a
  random forest, but more sensitive to hyperparameters and can overfit if
  the learning rate is too high or there are too many rounds.
  → [[boosting-ensemble]]
- **Bảng so sánh đóng bao vs tăng cường** (slide 85, **mới**):

  | Tiêu chí | Đóng bao (rừng ngẫu nhiên) | Tăng cường (XGBoost) |
  |---|---|---|
  | Cách xây cây | Song song, độc lập | Tuần tự, cây sau sửa cây trước |
  | Đặc điểm cây | Sâu, độ chệch thấp, phương sai cao | Cây cụt nông, độ chệch cao |
  | Chủ yếu giảm | Phương sai | Độ chệch |
  | Rủi ro quá khớp | Thấp | Trung bình, cần tinh chỉnh |
  | Tốc độ tinh chỉnh | Nhanh, ít núm vặn | Chậm hơn, nhiều núm vặn |
  | Dùng điển hình | Mốc so sánh vững chắc | Vắt kiệt độ chính xác tối đa |

  **Teamwork 2** (slide 86): list other decision
  tree extensions besides random forests; list as many business/real-world
  applications of classification as possible; and **explain in your own
  words why averaging many trees reduces variance but averaging many
  identical trees would not**. Submit via the Google Form on the
  slide.

### 6. Regression in Supervised Learning (slides 88-92)

- **What is regression** (slide 89): learning the
  relationship between inputs x and a **quantitative** output y:
  y = f(x₁,…,x_p) + u, where u is the noise term. Linear and nonlinear
  regression. **Key note** (new): the **same framework** as
  classification — only the type of y changes; everything from Section 2
  applies unchanged. → [[linear-regression-k32]]
- **Linear regression** (slide 90):
  y = β₀ + β₁x₁ + … + β_k x_k + u. The model serves **2 different
  purposes**: **classical statistics** (describing relationships,
  interpretation, hypothesis testing) and **machine learning**
  (predicting future outputs, out-of-sample accuracy). **The slide's
  note** (new): the distinction matters — a model can be excellent for
  explanation and mediocre for prediction, and vice versa; regularization
  (Section 7) deliberately trades a little unbiasedness for a lot of
  predictive accuracy.
- **Two steps** (slide 91): **Step 1** — learn
  β₀,…,β_k from the training set, via OLS, LAD, MLE or MM (**OLS is the
  most commonly used**). **Step 2** — predict for new data:
  ŷ = β̂₀ + β̂₁x₁* + … + β̂_k x_k*.
- **Special cases** (slide 92): **polynomial
  regression** (still linear in the parameters) and **qualitative
  inputs** via dummy variables (2 values ⇒ 1 dummy; m values ⇒ **m − 1**
  dummies, to avoid the dummy variable trap). **The slide's note** (new):
  raising p is the classic way to move from underfitting to
  overfitting.

### 7. Regularization: Ridge, Lasso and Elastic Net (slides 94-108)

- **7.1 Overfitting in regression** (slide 94):
  overfit regression models have too many parameters for the number of
  observations, and can make the coefficients, p-values and R²
  misleading. A useful approach is regularization.
- **7.2 Regularization** (slide 96): imposing a
  penalty for each parameter in the model; both the **magnitude of the
  coefficients** and of the error term are penalised, discouraging
  complex models. The two most common are Ridge and Lasso — plus
  **Elastic Net** (new; combines both penalties and is often the safest
  default when predictors are numerous and correlated).
  → [[regularization-ridge-lasso-elastic-net-k32]]
- **The three loss functions** (slide 97): OLS,
  Ridge (+λΣβⱼ²) and Lasso (+λΣ|βⱼ|), where λ is the tuning parameter.
  **Note**: the intercept β₀ is never penalised.
- **Elastic Net** (slide 98, **new**): the combined
  penalty with **α = 1 giving Lasso, α = 0 giving Ridge**; useful with
  strongly correlated predictors, where Lasso alone picks one arbitrarily
  and discards the rest while Elastic Net keeps the group. **Ridge's
  closed form** (new): β̂ = (X'X + λI)⁻¹X'y — adding λI makes the matrix
  invertible even when X'X is singular, which is why Ridge handles
  multicollinearity and the k > n case. Lasso has no closed form and is
  solved numerically.
- **Why Lasso sets coefficients exactly to zero**
  (slide 99, **entirely new — the geometric argument**): both minimise
  the residual sum of squares subject to a budget on the coefficients,
  and the budget's *shape* is what matters. Ridge's budget is a circle
  (β₁² + β₂² ≤ t), Lasso's a diamond (|β₁| + |β₂| ≤ t). **The Lasso
  budget has corners on the axes**; the RSS contours usually touch it at
  a corner, and a corner means one coefficient is exactly zero. The Ridge
  circle has no corners, so coefficients shrink towards zero but never
  reach it.
- **Bảng so sánh Lasso vs Ridge** (slide 100, **mới, 6 tiêu chí**):

  | Tiêu chí | Ridge (L2) | Lasso (L1) |
  |---|---|---|
  | Hình phạt | λΣβⱼ² | λΣ\|βⱼ\| |
  | Hệ số | Co về gần 0, không bao giờ đúng bằng 0 | Một số bị đưa về đúng 0 |
  | Chọn biến | Không | Có, tự động |
  | Biến dự báo tương quan | Chia đều trọng số cho cả nhóm | Chọn 1 biến, bỏ các biến còn lại |
  | Hợp nhất khi | Nhiều biến dự báo cùng có ảnh hưởng nhỏ | Chỉ vài biến dự báo có ảnh hưởng lớn |
  | Nghiệm | Dạng hiển (đóng) | Bằng phương pháp số |

  **Lasso vs Ridge table** (slide 100, **new, 6
  criteria**): Ridge's L2 penalty shrinks coefficients towards but never
  to zero, does no variable selection, shares weight among correlated
  predictors, is best when many predictors each matter a little, and has
  a closed form. Lasso's L1 penalty sets some coefficients exactly to
  zero, performs automatic variable selection, picks one of a correlated
  group and drops the others, is best when few predictors matter a lot,
  and is solved numerically. **Mandatory note**: always standardise the
  features before fitting, otherwise the penalty is applied
  unfairly.
- **7.3 The tuning parameter λ** (slide 102): λ
  controls the penalty's strength. At λ = 0, Ridge and Lasso equal least
  squares; as λ → ∞ all slopes tend to 0; the ideal penalty is somewhere
  between. **How to choose λ in practice** (new): **do not choose by
  eye** — fit over a grid of λ and pick the lowest cross-validated error;
  `RidgeCV` and `LassoCV` do this automatically. Note `scikit-learn`
  calls the parameter `alpha`, not λ.
- **7.4 Example 7.1 — the basic syntax** (slides
  104-105): load `regression.csv`, split X and y, then fit
  `LinearRegression()`, `Ridge(alpha=10)`, `Lasso(alpha=0.01)` and
  `ElasticNet(alpha=0.1, l1_ratio=0.5)` — in the code, `l1_ratio` plays
  the role of α in the formula while `alpha` plays the role of λ. Finally
  print all four test-set R² values side by side.
- **7.5 Evaluating forecast accuracy** (slides
  106-107): MAE, MSE, MAPE, RMSE with their `scikit-learn` functions.
  **The "compare like with like" note** (new): always compute these on
  the test set, and always compare a regularized model against a plain
  OLS baseline — if Ridge and Lasso don't beat OLS out of sample, the
  extra complexity is not justified.
- **7.6 Teamwork 3 — work in pairs** (slide 108):
  using `Income.csv` with income as the dependent variable — load the
  data; create arrays for inputs and output; compute descriptive
  statistics; **plot the coefficient path against the tuning parameter**;
  create train and test sets; build, predict and evaluate Ridge and
  Lasso; **report MAE, RMSE and R² on the test set, and state which
  variables the Lasso eliminated**. Create a Python notebook with **one
  cell per task**.

### 8. Summary (slides 110-111)

**Bảng tổng kết 7 thuật toán** (slide 110) — công cụ ôn thi tốt nhất của
cả chương:

| Algorithm | Task | Key hyperparameter | Scaling needed? | Main strength |
|---|---|---|---|---|
| KNN | Both | K | Yes | Simple, flexible boundary |
| Decision tree | Both | depth, min samples per leaf | No | Interpretable rules |
| Random forest | Both | `n_estimators`, `max_features` | No | Strong, stable baseline |
| Boosting | Both | learning rate, rounds | No | Highest accuracy on tabular data |
| Linear regression | Regression | — | No | Interpretable coefficients |
| Ridge | Regression | λ | Yes | Handles multicollinearity |
| Lasso | Regression | λ | Yes | Automatic variable selection |

<span class="en">**Summary table of the 7 algorithms** (slide 110) — the
chapter's best single revision tool: KNN (both tasks, K, scaling needed,
simple and flexible boundary); decision tree (both, depth/min leaf, no
scaling, interpretable rules); random forest (both, `n_estimators`/
`max_features`, no scaling, strong stable baseline); boosting (both,
learning rate/rounds, no scaling, highest accuracy on tabular data);
linear regression (regression, no key hyperparameter, no scaling,
interpretable coefficients); Ridge (regression, λ, scaling needed,
handles multicollinearity); Lasso (regression, λ, scaling needed,
automatic variable selection).</span>

**The instructor's 5 review questions** (slide 111):
(1) Why does a very small K in KNN give low bias but high variance? (2) A
node contains 20 observations of class A and 20 of class B — compute its
entropy and Gini impurity; is it pure? (3) Explain why RMSE ≥ MAE always
holds. (4) Your model has 98% training accuracy and 71% test accuracy —
diagnose the problem and propose two remedies. (5) You have 400
predictors and 120 observations — would you choose Ridge or Lasso, and
why?

## Companion code and data files

The folder `raw/Lecture Notes/K32/Chapter03/`
contains 7 files besides the PDF slides.

### Python scripts

- **`Example3.1_Iris_New.py`** — the Example 3.1
  code from slides 41-48 concatenated into one file, sections separated
  by `%-----` lines. Covers all 4 blocks: load + split; scatter plot;
  scale + KNN with K = 5 + evaluation; best-K search with `GridSearchCV`;
  and predicting a new flower. **This file contains exactly the
  intentional errors the slide warned about** — see below.
- **`Example3.2_DecisionTree_New.py`** — the
  Example 4.1 decision tree code (slides 73-74). Two differences from the
  slide: it omits `min_samples_leaf=5`, and it *adds* the
  `y_pred = tree.predict(X_test)` line that slide 73 omits (slide 74 uses
  `y_pred` without ever defining it). It runs only if `X` and `y` were
  defined earlier — it assumes the Example 3.1 loading block was run
  first.

### Data files

| File | Size | Columns | Used where |
|---|---|---|---|
| `iris.csv` | 150 rows, 5 columns | `sepal.length`, `sepal.width`, `petal.length`, `petal.width`, `variety` (50 Setosa / 50 Versicolor / 50 Virginica) | Example 3.1 (KNN), slides 39-48 |
| `Regression.csv` | 104 rows, 5 columns | `x1`, `x2`, `x3`, `x4`, `y` | Example 7.1 (OLS/Ridge/Lasso/Elastic Net), slide 104 |
| `Regression.xlsx` | — | same data, Excel format | The Excel version of the file above |
| `Nationality.csv` | 13 rows, 5 columns | `Age`, `Experience`, `Rank`, `Nationality`, `Go` (7 YES / 6 NO) | Named by no slide — see the notes |
| `TeleCustomers.csv` | 1000 rows, 8 columns | `region`, `tenure`, `age`, `marital`, `address`, `income`, `ed`, `employ` | Named by no slide — see the notes |

<span class="en">**Data files**: `iris.csv` (150 rows, 4 features +
`variety`, 50 of each species) drives Example 3.1; `Regression.csv` (104
rows, `x1`-`x4` and `y`) drives Example 7.1, with `Regression.xlsx` the
same data in Excel form; `Nationality.csv` (13 rows: `Age`,
`Experience`, `Rank`, `Nationality`, `Go` — 7 YES / 6 NO) and
`TeleCustomers.csv` (1000 rows: `region`, `tenure`, `age`, `marital`,
`address`, `income`, `ed`, `employ`) are named by no slide — see the
notes.</span>

## Gaps / notes

- **The errors in the Example 3.1 code are
  INTENTIONAL** — slide 41 states "Challenge: The errors are intentional
  for learning purposes" and slide 42 repeats the note. Checked against
  the real `iris.csv`, there are 4 planted bugs: (1) **two consecutive
  `pd.read_csv` lines**, the first pointing at the instructor's local
  `"E:/iris.csv"`; (2) `columns="species"` / `iris["species"]` — **there
  is no `species` column**, the real label column is `variety` (which the
  later plotting block uses correctly) ⇒ `KeyError`; (3) the plotting
  block uses `df[...]` but **`df` is never defined** (the variable is
  `iris`) ⇒ `NameError`; (4) `GridSearchCV(pipe, ...)` uses a **`pipe`
  object that was never created** — the correct version needs a
  `Pipeline` of `StandardScaler` + `KNeighborsClassifier` for the
  `"knn__n_neighbors"` prefix in `param_grid` to mean anything ⇒
  `NameError`. This is a deliberate debugging exercise, not a document
  defect.
- **Teamwork 3 asks for `Income.csv` — that file is
  NOT in `raw/`**. In the Chapter03 folder only `TeleCustomers.csv` has
  an `income` column (plus 7 explanatory variables), so it is most likely
  the intended substitute (or `Income.csv` will be released separately).
  Logged as a **source gap**: the exercise can be done in full on
  `TeleCustomers.csv` with `income` as the dependent variable.
- **`Nationality.csv` is named by no slide**, but
  its structure (`Age`, `Experience`, `Rank`, `Nationality` → `Go`
  YES/NO) is the classic teaching set for a binary classification tree
  with one categorical variable to encode. It is most likely the data for
  the decision tree section (Example 4.1 on the slides names no data
  file). Recorded as-is, without further inference.
- **Self-correction boxes in the slides**: slide 17
  has a "Corrected from earlier versions" box stating that **MSE and RMSE
  both contain the 1/n factor and RMSE = √MSE**; slide 32 has a similar
  box stating that selecting the K nearest neighbours happens **after**
  all distances are computed, not inside the loop. Both show the
  instructor revising points that were easy to misread in earlier decks —
  worth remembering, as these are exactly the points that get
  examined.
- **Image-only content not extractable via
  `pdftotext`**: the AI/ML/DL diagram (slide 7), application photos
  (slides 10-11), the ML types diagram (slide 13), the classification
  validation diagram (slide 20), the over/underfitting curves (slide 22),
  the classification illustration (slide 28), the KNN illustration (slide
  33), the choose-K plot (slide 36), the IRIS species photos (slide 40),
  screenshots of Example 3.1 output (slides 45, 47), the spam and fraud
  application images (slides 49-50), decision tree illustrations (slides
  54, 56, 57), the worked tree-building and entropy example (slides
  67-68), the random forest diagram (slide 78), the original random
  forest code screenshot (slide 83), the regression opener (slide 88),
  the regression overfitting plot (slide 95), the Lasso vs Ridge
  illustration (slide 101) and the coefficient path (slide 103).
- **Example 3.1 uses `iris.csv`, not
  `scikit-learn`'s built-in IRIS** — so the column names follow the file
  (`sepal.length` with a dot, not the underscored `sepal_length` of
  `sklearn.datasets.load_iris`). A small point that causes real errors
  when students switch between the two sources.

## Links

- [[supervised-learning-framework]] — the shared
  frame: labelled data, the function f̂, the 4 ML types, the vocabulary
  table.
- [[train-test-split-and-cross-validation]] — data
  splitting, leakage, cross-validation.
- [[model-evaluation-metrics-k32]] — regression and
  classification metrics.
- [[overfitting-underfitting-k32]] — over/
  underfitting and the bias–variance trade-off.
- [[classification-k32]] — definition, the 3 problem
  types, the 4-step workflow.
- [[k-nearest-neighbors-k32]] — the KNN algorithm,
  distances, scaling, choosing K.
- [[decision-tree-k32]] — decision trees, ID3/CART,
  purity, pruning.
- [[random-forest-k32]] — random forests, bagging,
  OOB error.
- [[boosting-ensemble]] — boosting, AdaBoost/
  Gradient/XGBoost, versus bagging.
- [[linear-regression-k32]] — linear regression,
  OLS, polynomials, dummies.
- [[regularization-ridge-lasso-elastic-net-k32]] —
  Ridge/Lasso/Elastic Net, the geometry of the penalty, choosing
  λ.
- [[chapter02-python-jupyter-k32]] — Chapter 2
  already taught every tool used here (pandas, matplotlib, and the
  scikit-learn "first taste").
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K32/Chapter03/
VNP_DataScience_SupervisedLearning_2026.pdf`, slides 1-112; the 2 Python
example scripts and the 5 data files in the same folder.
