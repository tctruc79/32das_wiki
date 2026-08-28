---
type: concept
title: "Classification (K32)"
tags: [chapter-3, k32, classification, supervised-learning]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

Classification is the technique of **categorising
data into a given number of classes** — the branch of supervised learning
where the target y is a category rather than a number. The algorithm that
maps input data to a specific category is called a **classifier**.

## Explanation

- **3 kinds of classification problem** (slide
  27):

  | Dạng | Định nghĩa | Ví dụ |
  |---|---|---|
  | Phân loại nhị phân | Đúng 2 kết quả có thể | Thư rác / thư sạch |
  | Phân loại đa lớp | Nhiều hơn 2 lớp; mỗi quan sát nhận **một và chỉ một** nhãn | 3 loài hoa diên vĩ trong Ví dụ 3.1 |
  | Phân loại đa nhãn | Mỗi quan sát có thể mang **nhiều nhãn cùng lúc** | 1 bài báo vừa gắn thẻ "tài chính" vừa gắn thẻ "công nghệ" |

  The third kind (multi-label) is **new in the 2026
  version**; the 2025 version listed only binary and multi-class.
- **4 steps to build a classification model** (slide
  29): initialize the classifier → train it on labelled data → predict
  the target (`predict(X)` returns the predicted label) → evaluate on
  held-out data. These map 1-to-1 onto the four `scikit-learn` lines used
  throughout the chapter: instantiate → `.fit()` → `.predict()` →
  `classification_report()`.
- **Popular classification algorithms** (slide 30):
  Naive Bayes, decision tree, logistic regression, KNN, SVM, random
  forest, gradient boosting/XGBoost, neural networks. The lecture picks
  **KNN** (distance-based), **decision trees** (rule-based) and **tree
  ensembles** — together, per the slide, the main families of ideas used
  in practice.
- **Choosing the metric by context — the most
  applied part**: slide 19 teaches that accuracy misleads on imbalanced
  data, and **Teamwork 1** (slide 51) asks students to apply exactly
  that: for each classification application in a real-life domain, state
  **which metric matters most — precision, recall or accuracy — and
  justify why**. This is the archetypal applied exam question.
- **2 illustrative applications** (slides 49-50): a
  KNN spam email classifier and KNN fraud detection on transaction data.
  Both are textbook imbalanced-data cases — so they double as live
  illustrations of slide 19's accuracy warning.

## Appears in

[[chapter03-supervised-learning-k32]] — slide 27
(definition and the 3 kinds), 29 (the 4 steps), 30 (algorithm list),
49-51 (applications and Teamwork 1); indirectly slide 19 (classification
metrics) and 55 (classification vs regression trees).

## Related

- [[supervised-learning-framework]] —
  classification is one of the frame's two branches, split by the type of
  y.
- [[linear-regression-k32]] — the other branch;
  slide 89 stresses that both share the same evaluation
  methodology.
- [[k-nearest-neighbors-k32]] — the first
  classification algorithm taught in detail.
- [[decision-tree-k32]], [[random-forest-k32]],
  [[boosting-ensemble]] — the chapter's remaining classification
  algorithms.
- [[model-evaluation-metrics-k32]] — the metric set
  used to score a classifier.

## Notes

Logistic regression is named in the algorithm list
(slide 30) but is **never taught in detail anywhere in this chapter** — a
source gap for the 2026 cohort at ingest time, mirroring the same gap
recorded for the 2025 cohort.
