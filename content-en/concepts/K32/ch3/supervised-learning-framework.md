---
type: concept
title: "The Supervised Learning Framework"
tags: [chapter-3, k32, supervised-learning, foundations]
created: 2026-08-28
updated: 2026-08-28
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

- **Two phases of every ML project** (slide 8):
  **training** — learn a model from training data; **application** — test
  it, then use it to decide. The full chain: labelled data → features x
  and label y → learn f̂ → validate and tune → predict new x*.
- **What makes it "supervised"**: the machine only
  learns because **a human supplied the correct answer (the label)** for
  the training examples. Both everyday examples on slide 9 show this: a
  spam filter learns from ham/spam-labelled email; social-network face
  recognition learns from users tagging friends in photos.
- **4 types of machine learning** (slide 12) —
  supervised is one of four:

  | Loại | Dữ liệu | Ví dụ nhiệm vụ |
  |---|---|---|
  | Học có giám sát | Có nhãn đúng | Phân loại (đầu ra rời rạc), hồi quy (đầu ra là số) |
  | Học không giám sát | Không nhãn | Phân cụm, giảm chiều, luật kết hợp |
  | Học tăng cường | Phần thưởng/hình phạt từ môi trường | Tác nhân học qua tương tác |
  | Học tự giám sát | Nhãn sinh ra từ chính dữ liệu | Dự đoán từ kế tiếp — cách tiền huấn luyện mô hình ngôn ngữ lớn |

  The 4th type (self-supervised) is new in the 2026
  version; the 2025 version listed only the first three.
- **The foundational vocabulary table** (slide 14):
  observation = one row; feature (input/predictor/variable/dimension/
  attribute) = one column; label (target/output) = what we predict; model
  = the learned f̂; parameter = learned from data; hyperparameter = chosen
  before training. The core distinction: **parameters are estimated by
  the algorithm; hyperparameters are selected by you, usually with
  cross-validation**.
- **A short history of AI** (slide 6) places ML in
  context: 1950 Turing → 1956 Dartmouth → 1980s expert systems after the
  AI winter → 1990s learning from data → 2000s-2010s deep learning on big
  data → 2017 onwards Transformers and LLMs → today, multi-step tasks and
  AI as a copilot.
- **Why the frame matters for the regression half**:
  slide 89 restates that regression uses the **same framework** — only
  the type of y changes; everything about splitting, cross-validation and
  overfitting applies unchanged. That is why the chapter merges
  classification and regression into one deck instead of splitting them
  as the 2025 version did.

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
that the lecture's focus throughout is supervised learning. At ingest
time the 2026 cohort has no unsupervised-branch material in `raw/`.
