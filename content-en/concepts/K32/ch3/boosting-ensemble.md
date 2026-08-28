---
type: concept
title: "Boosting and the Ensemble Families"
tags: [chapter-3, k32, boosting, ensemble, xgboost]
created: 2026-08-28
updated: 2026-08-28
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

Slide 84:

- **AdaBoost** — **gán lại trọng số** cho các quan sát bị phân loại sai,
  để cây kế tiếp tập trung vào chúng.
- **Tăng cường gradient (Gradient boosting)** — mỗi cây mới được **khớp
  vào phần dư** (gradient của hàm mất mát) của mô hình hiện tại.
- **XGBoost / LightGBM / CatBoost** — các bản cài đặt **nhanh, có điều
  chuẩn** của tăng cường gradient. Theo slide, đây thường là các thuật
  toán **thắng các cuộc thi** trên dữ liệu bảng có cấu trúc trong kinh
  doanh.

<span class="en">Slide 84: **AdaBoost** re-weights misclassified
observations so the next tree focuses on them; **gradient boosting** fits
each new tree to the residuals (the gradient of the loss) of the current
model; **XGBoost / LightGBM / CatBoost** are fast, regularised
implementations of gradient boosting — per the slide, typically the
algorithms that **win competitions** on structured tabular business
data.</span>

### The trade-off

Boosting is usually **more accurate** than a random
forest, but **more sensitive to hyperparameters** and **can overfit** if
the learning rate is too high or there are too many rounds. Hence the
slide's framing: random forest as the "solid baseline", boosting as the
tool for "squeezing out top accuracy".

### Bagging vs boosting

Slide 85 — bảng đối chiếu 6 tiêu chí:

| Criterion | Bagging (random forest) | Boosting (XGBoost) |
|---|---|---|
| How trees are built | In parallel, independently | Sequentially, each fixes the last |
| Tree characteristics | Deep; low bias, high variance | Shallow stumps; high bias |
| Mainly reduces | **Variance** | **Bias** |
| Overfitting risk | Low | Moderate, needs tuning |
| Tuning speed | Fast, few knobs | Slower, many knobs |
| Typical use | Solid baseline | Squeezing out top accuracy |

<span class="en">Slide 85 compares the two on 6 criteria: bagging builds
trees in parallel and independently while boosting builds them
sequentially with each fixing the last; bagging's trees are deep (low
bias, high variance) versus boosting's shallow stumps (high bias);
bagging mainly reduces **variance**, boosting reduces **bias**;
overfitting risk is low versus moderate-and-needs-tuning; bagging is fast
to tune with few knobs, boosting slower with many; bagging is the solid
baseline, boosting squeezes out top accuracy.</span>

**How to read this table for the exam**: the
"mainly reduces" row is the crucial one — it connects straight back to
the bias–variance decomposition on slide 25. Bagging takes many
high-variance trees and averages away the variance; boosting takes many
high-bias stumps and chains them to cut the bias. Two routes attacking
**two different terms of the same formula**.

### Teamwork 2

Slide 86 asks students to list other decision tree
extensions besides random forests; list as many business/real-world
applications of classification as possible; and **explain in their own
words why averaging many trees reduces variance but averaging many
identical trees would not**. The third question is the comprehension
test — answering it means understanding why a random forest needs **two**
sources of randomness, not one. Submitted via the Google Form on the
slide.

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
