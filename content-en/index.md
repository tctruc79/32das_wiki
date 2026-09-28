---
aliases: ['overview']
type: overview
title: "Course Map"
tags: [overview]
created: 2026-08-22
updated: 2026-09-28
---

## The course

**Introduction to Data Science and Applications** -
University of Economics Ho Chi Minh City, Vietnam-Netherlands Programme.
Instructor: [[tran-thi-tuan-anh]].

## Two cohorts

This wiki tracks two fully separated cohorts (see
CLAUDE.md, "Tách cụm K31/K32"): K31 (2025, all 8 chapters already in
`raw/`) and K32 (2026, the current cohort, complete at 5/5 chapters - the
theory is finished).

### K31 (2025) - 8 Chapters

1. Introduction: Data Science and Data-Analytic Thinking
2. Python and Jupyter Notebook
3. Machine Learning with Python (KNN)
4. Decision Tree & Random Forest
5. Ridge and Lasso Regression
6. Clustering in Unsupervised Learning
7. Principal Component Analysis (PCA)
8. Deep Learning

### K32 (2026 - Current Cohort)

The wiki holds all 5 K32 chapters (Chapters 1-5) -
**this is the entire theory component of the 2026 cohort; there is no
Chapter 6-8**. After Chapter 5 exactly two sessions remain: an expert talk
on machine learning/deep learning, and the group presentations.

- **Chapter 1** - the 5 V's, a working definition,
  5 types of analytics (adding Causal), the 7-condition checklist.
- **Chapter 2** - nearly double the 2025 version,
  adding a whole "Python for Data Analysis" section and the `Data2.csv`
  practice dataset.
- **Chapter 3** ("Supervised Learning", 112 slides -
  the wiki's largest chapter) - the entire supervised branch that the
  2025 cohort split across 3 chapters: ML foundations, model evaluation,
  classification + KNN, decision trees, random forests + boosting,
  regression, and Ridge/Lasso/Elastic Net. Comes with 2 Python scripts
  and 5 data files.

- **Chapter 4** ("Unsupervised Learning: Clustering
  & PCA", 86 slides) - the entire unsupervised branch that the 2025
  cohort split across 2 chapters: clustering (distance measures, K-Means
  and k-means++, hierarchical clustering with its 4 linkages and the
  dendrogram, DBSCAN/GMM, the 7-point pitfalls checklist) and PCA
  (covariance, eigenvalues/eigenvectors, the SVD, choosing m, loadings,
  image compression), plus an entirely new Part 3 on chaining PCA with
  clustering/classification/regression (PCR included) and data leakage.
  Comes with 7 Python scripts and 2 images - the first time the course
  uses images as practice data.

- **Chapter 5** ("Introduction to Deep Learning", 90
  slides comprising **3 lectures merged into one file**) - lecture A1 on
  perceptrons and neural networks (activations, dense layers, losses,
  gradient descent and backpropagation, dropout and early stopping);
  lecture A2 on sequence modeling (RNNs, backpropagation through time,
  vanishing gradients, LSTMs, self-attention and the Transformer); lecture
  A3 on computer vision (images as number matrices, convolution, CNNs with
  conv/ReLU/pooling, object detection, segmentation, continuous control).
  Two departures from every earlier chapter: it is the first **rebuilt from
  another university's course** rather than from the course's two base
  textbooks (slide 1 says so), and the first K32 chapter with **no code or
  data files at all** - the `Chapter05/` folder holds exactly one
  PDF.

## Exam prep

[[on-thi]] - the single compounding exam-prep
page.

## Publish

- Bilingual Quartz site:
  [tctruc79.github.io/32das_wiki](https://tctruc79.github.io/32das_wiki/)
  (default `/bi/` fully bilingual, `/en/` fully English). Repo:
  [github.com/tctruc79/32das_wiki](https://github.com/tctruc79/32das_wiki).
- Interactive bilingual Mindmap Artifact:
  [claude.ai/code/artifact/b8658df9-a364-400c-9505-144a96fd639d](https://claude.ai/code/artifact/b8658df9-a364-400c-9505-144a96fd639d)
  - each chapter tab displays full-width, with 2 default-open groups:
  **📄 Full slide walkthrough** and **🔎 Concept deep-dives** (every
  concept page's complete content, nothing condensed). A uniform
  `K31 ·`/`K32 ·` prefix stays on every tab (K31 Ch.1-8 + K32 Ch.1-5
  separate, no cross-cluster links). Two tabs, "K31 · All chapters" and
  "K32 · All chapters", group each cohort's concepts into cross-chapter
  thematic clusters for an overview - every concept there is a
  default-closed card that expands into three parts: a definition, a "Quick
  summary" section, and a "Full text" section reproducing the matching
  concept card from its chapter tab verbatim, so the detail is studiable
  without leaving the synthesis tab. The "Self-test" tab has exam questions
  with suggested answers.
