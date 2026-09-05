---
type: concept
title: "Overfitting, Underfitting and the Bias–Variance Trade-off (K32)"
tags: [chapter-3, k32, overfitting, bias-variance, model-evaluation]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

**Underfitting** happens when a model is **too
simple** to capture the underlying patterns in the training data.
**Overfitting** happens when a model is **too complex**: it learns the
noise as well as the pattern. The two are opposite ends of a single axis
— **model complexity** — and the quantitative relationship between them
is the **bias–variance trade-off**.

## Explanation

### The two states side by side

| | Chưa khớp | Quá khớp |
|---|---|---|
| Vấn đề | Mô hình quá đơn giản | Mô hình quá phức tạp, học cả nhiễu |
| Trên tập huấn luyện | Kém | Cực tốt |
| Trên tập kiểm tra / dự báo | Kém | Kém |
| Dấu hiệu nhận biết | Sai số huấn luyện cao, sai số kiểm tra cao, **hai con số gần nhau** | Sai số huấn luyện rất thấp, sai số kiểm tra cao hơn nhiều — **khoảng cách lớn** |
| Cách xử lý | Mô hình phức tạp hơn; thêm hoặc cải thiện đặc trưng; **giảm** mức điều chuẩn | Mô hình đơn giản hơn; giảm độ phức tạp; thu thập thêm dữ liệu; **áp dụng** điều chuẩn; tỉa cây |

**Underfitting**: too simple; poor on both training and
test data; symptom is high training error *and* high test error, close
together; fix with a more complex model, better features, or *less*
regularization. **Overfitting**: too complex, learns the noise;
excellent on training data but poor on test/forecast data and cannot
generalise; symptom is very low training error but much higher test
error — a large gap; fix with a simpler model, less complexity, more
data, regularization, or pruning.

The key to diagnosis: **one number is not enough**.
High training error may mean underfitting; low training error *by itself*
says nothing. You must look at the **pair** (training, test) and the gap
between them. This is exactly the instructor's review question 4: 98%
training accuracy and 71% test accuracy — a 27-point gap is the textbook
overfitting signature.

### The bias–variance trade-off

The table above describes 2 *symptoms*; the
bias–variance decomposition (**entirely new** versus 2025) is what
actually explains *why* they occur. For a squared-error loss, the
expected prediction error decomposes into 3 parts:

E[(y − f̂(x))²] = **Bias²[f̂(x)]** + **Variance[f̂(x)]** + **σ²**

- **Bias²** — the "too simple" term: the model is
  systematically wrong because it lacks the capacity to represent the
  true pattern.
- **Variance** — the "too flexible" term:
  predictions swing wildly when the training set changes slightly.
- **σ²** — the **irreducible error**: noise
  inherent in the data that no algorithm can remove.

On the complexity axis: **underfitting lives on the
left** (high bias, low variance), **overfitting on the right** (low
bias, high variance), and **the best model sits at the minimum of the
total-error curve**.

### The same trade-off, recurring across the chapter

The real value of the bias–variance frame is that
it is not an isolated abstract theory, but the shared explanation behind
almost every remaining design choice in the chapter: in **KNN**, a small
K gives low bias but high variance (overfitting), a large K the reverse;
a **decision tree** grown to full depth by default is the textbook
high-variance model; **random forests** exist to attack precisely that
variance term by averaging decorrelated trees; **boosting** goes the
opposite direction, attacking the bias term by chaining shallow stumps;
in regression, raising a polynomial's degree is the classic route from
underfitting to overfitting; and **regularization** (Ridge/Lasso) is the
clearest example of a *deliberate* trade — accepting a little more bias
in exchange for more predictive accuracy, i.e. intentionally moving left
on the complexity axis.

## Appears in

[[chapter03-supervised-learning-k32]] — slide 22
(the curves, image only), 23 (underfitting), 24 (overfitting), 25 (the
trade-off), 37 (choosing K), 72 (single-tree instability), 85 (the
bagging vs boosting table), 92 (polynomial degree), 94 (overfitting in
regression), 111 (review questions 1 and 4).

## Related

- [[train-test-split-and-cross-validation]] — the
  mechanism that **detects** both states; without a split there is no gap
  to see.
- [[model-evaluation-metrics-k32]] — the concrete
  numbers used to measure that gap.
- [[regularization-ridge-lasso-elastic-net-k32]] —
  the overfitting remedy specific to regression.
- [[random-forest-k32]] and [[boosting-ensemble]] —
  two ensembling routes attacking two different terms of the
  decomposition (variance and bias).
- [[decision-tree-k32]] — pruning is the
  tree-specific overfitting remedy.

## Notes

Slide 22 (the over/underfitting curves) and slide
25's decomposition plot are images with no extractable text — the formula
above comes from the accompanying prose. Slide 22's only note:
"validation helps control overfitting".
