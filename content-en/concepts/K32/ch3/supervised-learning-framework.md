---
type: concept
title: "The Supervised Learning Framework"
tags: [chapter-3, k32, supervised-learning, foundations]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Definition

Supervised learning is the problem: given
**labelled** data {(xᵢ, yᵢ)}ⁿᵢ₌₁, learn a function f̂ that predicts y for
new inputs x. The type of y names the problem — **y is a category ⇒
classification**; **y is a number ⇒ regression**. This is the shared
frame the whole of K32's Chapter 3 (112 slides) turns on: every algorithm
in the chapter is just a different way of learning that same f̂.

## Explanation

Placing machine learning in historical context shows
it is not an isolated technique but the destination of a long process:
from the 1950s Turing Test, through the term "artificial intelligence"
coined at the 1956 Dartmouth Conference, hand-coded-rule expert systems
in the 1980s, to the 1990s turning point when systems began **learning
from data instead of following pre-written rules** — the true starting
point of modern machine learning. Deep learning on big data followed in
the 2000s-2010s, then the Transformer architecture from 2017 onward led
to large language models. The thread running through this history: the
boundary of "artificial intelligence" keeps shifting, but supervised
learning's core principle — learning a function from labelled examples —
has not.

Every supervised-learning project, whatever
algorithm it uses, passes through exactly 2 phases: **training** —
learning f̂ from a labelled dataset — and **application** — testing that
function, then using it to decide on new data. What makes it
"supervised" lives precisely in the training phase: the machine only
learns because **a human supplied the correct answer (the label)** for
each example. A spam filter learns because people labelled thousands of
emails *ham*/*spam* beforehand; a social-network face-recognition system
learns because users tagged friends in photos themselves. Two seemingly
different examples, one identical mechanism.

Supervised learning is only 1 of 4 types of machine
learning, distinguished by the **kind of learning signal** the algorithm
receives:

| Loại | Tín hiệu học | Ví dụ nhiệm vụ |
|---|---|---|
| Học có giám sát | Nhãn đúng do con người cung cấp | Phân loại (đầu ra rời rạc), hồi quy (đầu ra là số) |
| Học không giám sát | Không có nhãn | Phân cụm, giảm chiều, luật kết hợp |
| Học tăng cường | Phần thưởng/hình phạt từ môi trường | Tác nhân học qua tương tác |
| Học tự giám sát | Nhãn tự sinh ra từ chính cấu trúc dữ liệu | Dự đoán từ kế tiếp — cách tiền huấn luyện các mô hình ngôn ngữ lớn |

Self-supervised learning is the most notable
addition here: it explains why today's large language models don't need
billions of human-labelled examples — labels are generated automatically
by masking part of the text and asking the model to predict it, turning
what looks like an unsupervised problem into a supervised one without
manual labelling effort.

Reading the rest of the chapter requires a
foundational vocabulary: **observation** = one row (xᵢ, yᵢ); **feature**
(input/predictor/variable/dimension/attribute) = one column xⱼ; **label**
(target/output) = what we predict, y; **model** = the learned function f̂.
The most important distinction in this vocabulary is between
**parameters** — numbers (like βⱼ) the algorithm **estimates from data**
— and **hyperparameters** — choices (like K in KNN, λ in Ridge/Lasso,
tree depth) the **user selects before training**, usually via
cross-validation. Confusing the two is the most common conceptual error
for beginners: a parameter is something the model discovers on its own;
a hyperparameter is something the analyst must decide.

Finally, this frame is not only for classification
— it is the shared foundation for **both** classification and
regression, differing only in the type of y (category ⇒ classification;
number ⇒ regression). Everything about train/test splitting,
cross-validation, and over/underfitting applies unchanged to both
branches — precisely why this chapter merges classification and
regression into a single narrative rather than splitting them into
separate chapters.

## Appears in

[[chapter03-supervised-learning-k32]] — slide 2 (the
key idea), 5-14 (all of Section 1), 89 (the frame restated for
regression).

## Related

- [[classification-k32]] and
  [[linear-regression-k32]] — the two branches of this very frame, split
  by the type of y.
- [[train-test-split-and-cross-validation]] — the
  methodology that applies to **both** branches, precisely because they
  share the frame.
- [[model-evaluation-metrics-k32]] — how f̂ is
  scored, differing by the type of y.
- [[chapter02-python-jupyter-k32]] — the previous
  chapter introduced `scikit-learn`, the library that implements this
  entire frame.

## Notes

This frame does **not** cover unsupervised learning
(clustering, dimension reduction) — slide 12 names those tasks but states
that the lecture's focus throughout is supervised learning. The 2026
cohort currently has no unsupervised-branch material in `raw/`.
