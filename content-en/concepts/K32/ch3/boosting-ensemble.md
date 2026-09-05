---
type: concept
title: "Boosting and the Ensemble Families"
tags: [chapter-3, k32, boosting, ensemble, xgboost]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

Boosting is the second ensemble family alongside
bagging. The core difference is the **order in which trees are built**:
bagging builds them **in parallel and independently**; boosting builds
them **sequentially**, each new tree **correcting the previous ones'
errors**. This entire section is **new** in the 2026 cohort — it does not
exist in the 2025 material.

## Explanation

### The 3 named variants

The "sequential error correction" idea of boosting is
realised in 3 increasingly sophisticated ways: **AdaBoost**, the
earliest version, **re-weights misclassified observations** so the next
tree focuses more on them; **gradient boosting** generalises this by
having each new tree **fit the residuals** (in essence, the gradient of
the loss function) of the current model, rather than just reweighting
observations; and **XGBoost / LightGBM / CatBoost** are fast, modern,
regularised implementations of gradient boosting — the family that
typically **wins competitions** on structured tabular business data, by
combining gradient boosting's power with speed and anti-overfitting
optimisations.

### The trade-off

Boosting is usually **more accurate** than a random
forest, but the price is being **more sensitive to hyperparameters** and
**able to overfit** if the learning rate is too high or there are too
many rounds — each new tree tries to correct the previous ones' errors,
so without careful control that "correction" process can start fitting
random noise instead. The practical way to think about it: random forest
as the "solid, easy-to-tune baseline", boosting as the tool for when top
accuracy is needed and a longer tuning process is an acceptable
trade-off.

### Bagging vs boosting

Comparing the two ensemble families directly on 6
criteria:

| Tiêu chí | Đóng bao (rừng ngẫu nhiên) | Tăng cường (XGBoost) |
|---|---|---|
| Cách xây cây | Song song, độc lập | Tuần tự, cây sau sửa cây trước |
| Đặc điểm cây | Sâu; độ chệch thấp, phương sai cao | Cây cụt nông; độ chệch cao |
| Chủ yếu giảm | **Phương sai** | **Độ chệch** |
| Rủi ro quá khớp | Thấp | Trung bình, cần tinh chỉnh |
| Tốc độ tinh chỉnh | Nhanh, ít núm vặn | Chậm hơn, nhiều núm vặn |
| Dùng điển hình | Mốc so sánh vững chắc | Vắt kiệt độ chính xác tối đa |

Comparing the two directly on 6 criteria: bagging builds
trees in parallel and independently while boosting builds them
sequentially with each fixing the last; bagging's trees are deep (low
bias, high variance) versus boosting's shallow stumps (high bias);
bagging mainly reduces **variance**, boosting reduces **bias**;
overfitting risk is low versus moderate-and-needs-tuning; bagging is fast
to tune with few knobs, boosting slower with many; bagging is the solid
baseline, boosting squeezes out top accuracy.

**How to read this table for the exam**: the
"mainly reduces" row is the crucial one — it connects straight back to
the bias–variance decomposition. Bagging takes many
high-variance trees and averages away the variance; boosting takes many
high-bias stumps and chains them to cut the bias. Two routes attacking
**two different terms of the same formula**.

### Teamwork 2

This section's teamwork exercise asks 3 things:
list other decision tree extensions besides random forests; list as many
business/real-world applications of classification as possible; and,
most importantly, **explain in your own words why averaging many trees
reduces variance but averaging many identical trees would not**. The
third question is the real comprehension test: answering it means
understanding why a random forest needs **two** sources of randomness
(bagging and feature subsampling), not one — if only one were needed,
this question would have no satisfying answer.

## Appears in

[[chapter03-supervised-learning-k32]] — slide 84
(Section 5.2: the 3 variants and the trade-off), 85 (the comparison
table), 86 (Teamwork 2), 110 (summary table: both tasks, learning rate
and rounds, **no scaling**, highest accuracy on tabular data).

## Related

- [[random-forest-k32]] — the bagging family's
  representative, the other side of the comparison table.
- [[decision-tree-k32]] — the building block of both
  ensemble families.
- [[overfitting-underfitting-k32]] — the
  bias–variance decomposition is the theory explaining why the two
  families differ.
- [[classification-k32]] — the problem setting;
  gradient boosting/XGBoost also appear in slide 30's algorithm
  list.

## Notes

The boosting section has **no Python example** in
the chapter — unlike KNN (Example 3.1), decision trees (Examples
4.1-4.2), random forests (Example 5.1) and regularization (Example 7.1).
The slides give concepts and the comparison table only. A source gap: to
practise boosting you must find the syntax yourself
(`GradientBoostingClassifier` in `scikit-learn`, or the separate
`xgboost` library) outside the course material.
