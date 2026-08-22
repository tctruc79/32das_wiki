---
type: source
title: "Chapter 3 (K31) — Machine Learning with Python (KNN)"
tags: [chapter-3, k31, machine-learning, classification, knn]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter03_Machine Learning_2025.pdf"
---

## Metadata

- **Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 44.
- **Position in the course**: the first ML chapter —
  lays down theoretical foundations (basic ML concepts, model evaluation)
  then goes deep into the first algorithm (KNN). Practice data: IRIS
  (`iris.csv`).

## Summary

- The chapter has 3 major parts: (1) ML overview +
  AI history, (2) basic concepts (model evaluation, cross-validation,
  overfitting/underfitting), (3) Classification going deep into
  K-Nearest Neighbours.
- The chapter's original outline (slide 3) lists 7
  items: Introduction to ML, Some basic concepts, Classification,
  **Regression**, **Clustering**, **Dimension reduction**, **Association**
  — but slide 3 is the overall outline for the WHOLE ML block (Chapters
  3-7), not this chapter's own content. This PDF file's actual content
  (44 slides) stops at Classification/KNN — Regression/Clustering/
  Dimension reduction/Association are NOT in this file (those topics
  have their own PDF in Chapters 4-7).
- **Gap**: "Association" (unsupervised) is named in
  the outline but no chapter among the 8 in `raw/` actually teaches this
  content — no source to create an `association-rule-learning` concept
  page.

## Key content

### 1. Introduction to Machine Learning (slides 4-12)

- **Definition**: machine learning is a subset of
  artificial intelligence which deals with a machine's ability to learn.
  The technology aims to make machines smarter and more efficient.
- **History of Artificial Intelligence** (slide 5):
  early concepts in the 1950s — Alan Turing is the pioneer (the Turing
  Test to determine a machine's ability to exhibit intelligent behavior
  like a human); the term "artificial intelligence" appeared at the
  Dartmouth Conference in 1956; Expert Systems (1980s) — the resurgence
  of interest in AI after the AI winter (1960s-1970s), designed to mimic
  decision-making processes in specific domains; the rise of machine
  learning techniques in the 1990s, which could learn from data; the
  rapid development of deep learning, revolutionizing AI by enabling
  training of complex neural networks on big data (2000s-2010s); current
  advances — ChatGPT and many significant AI breakthroughs.
- **What is machine learning** (slide 7): a set of
  tools that allow computers to learn from data and perform tasks based
  on the learned model. ML methods are often divided into 2 phases:
  **Training** — a model is learned from a collection of training data;
  **Application** — the model is tested and then used to make decisions.
  Example 1 (spam filter): training data is email messages labeled ham or
  spam; for each new email, the model classifies whether it's spam.
  Example 2 (Facebook Face Recognition): people train the system by
  tagging friends in photos; as photos are uploaded, Facebook
  automatically detects people and suggests tagging them.
- **3 main types of ML** (slide 11): **Supervised
  Learning** — training data is labeled with correct answers; the 2 most
  common types: Classification (discrete label outputs) and Regression
  (numeric outputs). **Unsupervised Learning** — given a collection of
  unlabeled data, wish to analyze and discover patterns within:
  Clustering, Dimension reduction, Association. **Reinforcement
  Learning**.

### 2. Some basic concepts in machine learning (slides 13-20)

- **Validation for regression problems** (slides
  13-14): Mean Absolute Error (MAE) = average of |Actual − Predicted|;
  Mean Squared Error (MSE) = sum of (Actual − Predicted)²; Root Mean
  Squared Error (RMSE) = square root of MSE. Other criteria: Relative
  Squared Error (RSE), Relative Absolute Error (RAE), Normalized RMSE
  (Norm RMSEP), Relative RMSE (RRMSEP).
- **Cross-validation** (slides 16-17): the technique
  used to test the effectiveness of an ML model, based on a training set
  and a testing set. 2 common methods: **Leave-one-out** — training set
  has N−1 observations, testing set only 1 observation; **K-folds** —
  data split into K parts.
- **Underfitting** (slide 19): happens when an ML
  model is too simple to capture the underlying patterns in the training
  data. Consequence: an underfit model performs poorly not only on
  training data but also on test/forecast data — it can't make accurate
  predictions. Solution: use a more complex model, or improve the
  features (input data) to give the model more information.
- **Overfitting** (slide 20): happens when an ML
  model is too complex — it learns not only the patterns but also the
  noise in the data. Consequence: an overfit model performs exceptionally
  well on training data but poorly on test/forecast data — it can't make
  accurate predictions. Solution: use a simpler model, reduce model
  complexity. Cross-validation helps control overfitting.

### 3. Classification (slides 21-43)

- **What is Classification** (slide 22): a
  technique that categorizes data into a given number of classes.
  Technical terms: **Classifier** — an algorithm that maps input data to
  a specific category; **Binary Classification** — a task with 2 possible
  outcomes; **Multi-class classification** — more than 2 classes, each
  observation assigned to one and only one target label.
- **Steps to build a classification model** (slide
  24): initialize the classifier to use → train it using labeled training
  data → predict the target (given an unlabeled observation X,
  `predict(X)` returns the predicted label y) → evaluate the classifier
  model.
- **Popular algorithms** (slide 25): Naive Bayes,
  Decision Tree, Logistic Regression, K-Nearest Neighbours (KNN), Support
  Vector Machine.
- **K-Nearest Neighbours (KNN) algorithm** (slides
  26-39): one of the most popular ML algorithms, assumes similar things
  are near each other. **Algorithm steps** (slide 27): (1) load the data,
  (2) choose the value of K, (3) for each observation — calculate the
  distance between the query observation and the current observation,
  pick the K nearest observations, get their labels, return the mode of
  the K labels as the predicted value.
  - **Choosing the right value for K** (slides
    30-31): run KNN several times with different K values, choose the K
    that reduces errors. No optimal number of neighbors suits all
    datasets. Small K → noise has higher influence: low bias but high
    variance. Large K → computationally expensive but lower variance,
    higher bias.
  - **Advantages** (slide 32): simple and easy to
    implement; no need to build a model, tune parameters, or make
    additional assumptions. **Disadvantages**: gets significantly slower
    as the number of predictors increases; intensive computation as
    observations increase; it is **lazy learning** — in other words, it
    learns nothing (just stores data, computes at prediction time).
  - **Python implementation on IRIS data** (slides
    33-38, `iris.csv`): 3 Iris species in the sample — Iris setosa, Iris
    virginica, Iris versicolor. 4 features measured per sample: length/
    width of sepals and petals, in cm. Based on the combination of these
    4 features, Fisher developed a linear discriminant model to
    distinguish the species. The exercise uses KNN to classify the
    species for each observation; after running the model, K can be
    changed to find the optimal value, then re-run to predict.
  - **Evaluating the algorithm for KNN Regression**
    (slide 39): reuses the 3 metrics MAE, MSE, RMSE from part 2.
  - **Real-world applications** (slide 40, 42-43):
    spam email classifier with KNN; fraud detection in transaction data
    using KNN (2 case studies citing towardsdatascience.com and
    kaggle.com). Teamwork 1 (slide 41): group discussion to find more
    real-world applications of Classification, submit results to the
    instructor for evaluation.

## Links

- [[machine-learning-overview]] — ML classification,
  AI/ML history.
- [[overfitting-underfitting]] — a foundational
  concept, recurring in Chapters 4-5.
- [[model-evaluation-metrics]] — MAE/MSE/RMSE,
  cross-validation.
- [[classification]] — the concept framework,
  algorithm list.
- [[k-nearest-neighbors]] — the chapter's main
  algorithm.
- [[chapter02-python-jupyter]] — the hands-on tool
  (Jupyter) already covered.
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter03_Machine Learning_2025.pdf`, slides 1-44.
