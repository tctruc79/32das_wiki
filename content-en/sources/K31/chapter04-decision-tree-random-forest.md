---
type: source
title: "Chapter 4 (K31) — Decision Tree & Random Forest"
tags: [chapter-4, k31, machine-learning, classification, decision-tree, random-forest]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter04_DecisionTree_2025.pdf"
---

## Metadata

- **Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 34.
- **Position in the course**: the second
  classification algorithm after [[k-nearest-neighbors]], also
  introducing ensemble learning via Random Forest.

## Summary

- 2 major parts: (1) Decision Tree — definition, how
  to build, purity measures, Python implementation on IRIS data; (2)
  Random Forest — why use it, how it works in 2 stages.

## Key content

### 4.1 Decision Tree (slides 3-26)

- **What is a decision tree** (slide 3): a technique
  to classify observations into classes by sorting them down the tree
  from the root to a leaf node. Concepts: **Node/Decision Node** —
  attribute/variable/feature; **Branch/Sub-tree** — a tree formed by
  splitting; **Root node** — where the decision tree starts; **Leaf
  node** — final outputs; **Splitting** — dividing a decision/root node
  into sub-nodes per given conditions; **Pruning** — removing unwanted
  branches from the tree.
- **Classification trees vs regression trees**
  (slide 5): **Classification trees** — qualitative output, use Gini
  index/entropy/classification error to find the best splitting
  attribute, predict by the majority category at the leaf node.
  **Regression trees** — quantitative output, use variance reduction/MSE/
  similar metrics, predict by the mean/median at the leaf node.
- **Illustrative examples** (slides 6-7): deciding
  whether to accept a job offer; classifying low/high risk of heart
  attack.
- **How to build a decision tree** (slides 8-12):
  (1) start from an empty tree, (2) split on the next best attribute, (3)
  recurse. Algorithms: **ID3**, **C4.5** (successor of ID3), **CART**,
  **CHAID**... ID3 is one of the core algorithms.
  - **ID3**: one of the earliest, simplest decision tree algorithms. Uses
    entropy and information gain to decide node splitting. Works well
    with categorical data but doesn't handle numerical data. May lead to
    overfitting and biased trees.
  - **C4.5**: an improvement over ID3, developed by Ross Quinlan. Usable
    for both classification and regression. Uses gain ratio instead of
    information gain to handle bias toward multi-valued attributes.
    Reduces overfitting, handles missing data.
  - **CART**: usable for both classification and regression. Uses Gini
    impurity for classification trees and MSE for regression trees.
    Handles large datasets.
- **Measuring leaf node purity** (slides 13-16): 3
  ways — **Classification error**: Em = 1 − max(pᵢ), pᵢ = proportion of
  class i in the node; lower error = more pure. **Gini impurity**: Gini =
  Σpᵢ(1−pᵢ) = 1 − Σpᵢ²; lower Gini = more pure. **Entropy**: Entropy =
  −Σpᵢlog₂(pᵢ); lower entropy = more pure. All 3 illustrated with the
  same example: a leaf node with 16 class-A, 13 class-B, 1 class-C
  observations.
- **Entropy/Information gain rules** (slides 17-19):
  a branch with entropy 0 is a leaf node; entropy > 0 needs further
  splitting; if zero entropy isn't achievable, decide by simple majority.
  **Information gain** = the decrease in entropy after splitting on an
  attribute — building a tree is essentially finding the attribute with
  highest information gain. Note: more uncertainty, more entropy! **When
  to stop**: all records in the current subset share the same output; or
  the same input attributes; or a minimum observations-per-leaf is set;
  or a maximum depth (longest root-to-leaf path) is set.
- **More detailed build steps** (slide 20): (1)
  compute entropy for the dataset, (2) for every attribute — calculate
  entropy for all categorical values, take average information entropy,
  calculate gain, (3) pick the highest-gain attribute, (4) repeat until
  the desired tree.
- **Python implementation** (slides 22-26): example
  4.1 (basic decision tree code + result visualization); example 4.2
  (decision tree on IRIS data — results + tree diagram); example 4.3
  (another Python snippet for decision tree on IRIS).

### 4.2 Random Forests (slides 27-32)

- **What is Random Forest** (slide 27): an ensemble
  learning algorithm. Builds many small, weak decision trees in parallel,
  then combines them into one strong learner by averaging or majority
  vote. Direct relationship between number of trees and result accuracy:
  more trees, more accurate. In Random Forest, finding the root node and
  splitting feature nodes runs randomly.
- **Why Random Forest** (slide 29): with enough
  trees, the classifier won't overfit; handles missing values; direct
  tree-count↔accuracy relationship; can be modeled for categorical
  values.
- **How it works** (slides 30-31), 2 stages:
  **Stage 1 (forest creation)** — randomly select k features from total m
  features (k ≪ m); among k features, compute node d using the best split
  point; split into daughter nodes using the best split; repeat 1-3 until
  the desired number of nodes; build the forest by repeating 1-4 n times
  for n trees. **Stage 2 (prediction)** — take test features, use each
  randomly created tree's rules to predict and store the outcome;
  calculate votes for each predicted outcome; the highest-voted outcome
  is the final prediction.
- **Python implementation** (slide 32): a Random
  Forest code example.
- **Group exercise** (slide 33): list other
  extensions of decision trees (besides Random Forest); list as many
  potential real-world/business applications of Classification as
  possible.

## Links

- [[decision-tree]] — the full concept page: purity
  measures, ID3/C4.5/CART.
- [[random-forest]] — the ensemble learning concept
  page.
- [[k-nearest-neighbors]] — the previous
  classification algorithm, contrasting lazy learning (KNN) vs eager
  learning (Decision Tree).
- [[overfitting-underfitting]] — pruning and the
  number of trees in Random Forest are 2 concrete overfitting-control
  mechanisms in this chapter.
- [[classification]] — Decision Tree is one of the 5
  classification algorithms listed in Chapter 3.
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter04_DecisionTree_2025.pdf`, slides 1-34.
