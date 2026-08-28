---
type: concept
title: "Overfitting, Underfitting and the Bias–Variance Trade-off (K32)"
tags: [chapter-3, k32, overfitting, bias-variance, model-evaluation]
created: 2026-08-28
updated: 2026-08-28
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

| | Underfitting (slide 23) | Overfitting (slide 24) |
|---|---|---|
| Problem | Model too simple | Model too complex, learns the noise |
| On the training set | Poor | Excellent |
| On the test / forecast set | Poor | Poor |
| Symptom | Training error high, test error high, **the two close together** | Training error very low, test error much higher — **a large gap** |
| Fix | A more complex model; add or improve features; **less** regularization | A simpler model; less complexity; more data; **apply** regularization; prune |

<span class="en">**Underfitting** (slide 23): too simple; poor on both
training and test data; symptom is high training error *and* high test
error, close together; fix with a more complex model, better features, or
*less* regularization. **Overfitting** (slide 24): too complex, learns
the noise; excellent on training data but poor on test/forecast data and
cannot generalise; symptom is very low training error but much higher
test error — a large gap; fix with a simpler model, less complexity, more
data, regularization, or pruning.</span>

The key to diagnosis: **one number is not enough**.
High training error may mean underfitting; low training error *by itself*
says nothing. You must look at the **pair** (training, test) and the gap
between them. This is exactly the instructor's review question 4: 98%
training accuracy and 71% test accuracy — a 27-point gap is the textbook
overfitting signature.

### The bias–variance trade-off

Slide 25 (**hoàn toàn mới** so với bản 2025) đưa ra công thức phân rã.
Với hàm mất mát bình phương sai số, sai số dự đoán kỳ vọng tách thành 3
phần:

E[(y − f̂(x))²] = **Độ chệch²[f̂(x)]** + **Phương sai[f̂(x)]** + **σ²**

- **Độ chệch²** — thành phần "quá đơn giản": mô hình sai một cách có hệ
  thống vì không đủ khả năng biểu diễn quy luật thật.
- **Phương sai** — thành phần "quá linh hoạt": dự đoán thay đổi mạnh khi
  tập huấn luyện thay đổi một chút.
- **σ²** — **sai số không thể giảm được**: nhiễu vốn có trong dữ liệu,
  không thuật toán nào loại bỏ được.

Slide 25 (**entirely new** versus 2025) gives the
decomposition: for a squared-error loss, E[(y − f̂(x))²] = Bias²[f̂(x)] +
Var[f̂(x)] + σ² — the "too simple" term, the "too flexible" term, and the
**irreducible** noise no algorithm can remove. On the complexity axis,
**underfitting lives on the left** (high bias, low variance),
**overfitting on the right** (low bias, high variance), and **the best
model sits at the minimum of the total-error curve**.

### The same trade-off, recurring across the chapter

- **KNN** (slide 37): K nhỏ ⇒ độ chệch thấp, phương sai cao (quá khớp);
  K lớn ⇒ phương sai thấp, độ chệch cao (chưa khớp).
- **Cây quyết định** (slide 72): 1 cây sâu là mô hình **phương sai cao**
  — thay đổi nhỏ trong dữ liệu tạo ra cây rất khác.
- **Rừng ngẫu nhiên** (slide 85): chủ yếu **giảm phương sai** bằng cách
  trung bình hóa nhiều cây đã được khử tương quan.
- **Tăng cường** (slide 85): chủ yếu **giảm độ chệch** bằng cách nối tiếp
  nhiều cây cụt nông.
- **Hồi quy đa thức** (slide 92): tăng bậc p là cách kinh điển để đi từ
  chưa khớp sang quá khớp.
- **Điều chuẩn** (slide 90, 96): cố tình đánh đổi **một chút tính không
  chệch để lấy nhiều độ chính xác dự đoán** — chính là cố ý dịch mô hình
  sang trái trên trục độ phức tạp.

<span class="en">The same trade-off recurs everywhere: KNN's small vs
large K; a deep single tree as a **high-variance** model; random forests
mainly cutting **variance** by averaging decorrelated trees; boosting
mainly cutting **bias** by chaining shallow stumps; polynomial degree p
as the classic route from underfitting to overfitting; and regularization
deliberately trading **a little unbiasedness for a lot of predictive
accuracy** — i.e. deliberately moving left on the complexity axis.</span>

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
