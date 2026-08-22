---
type: source
title: "Chapter 8 (K31) — Deep Learning"
tags: [chapter-8, k31, machine-learning, deep-learning, neural-networks]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter08_Deeplearning.pdf"
---

## Metadata

- **Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 19 (same length as
  [[chapter05-ridge-lasso]]).
- **Position in the course**: the final chapter —
  not strictly supervised or unsupervised (see
  [[machine-learning-overview]]), but a **technique** (model
  architecture) applicable to both, closing out the Chapter 1→8
  roadmap.

## Summary

- 4 parts: (1) history of deep learning, (2) what is
  deep learning + perceptron architecture, (3) how deep learning
  algorithms "learn" — forward/backward propagation, (4) 3 types of
  neural networks — ANN/RNN/CNN.

## Key content

### 1. History of deep learning (slide 3)

- **3 waves of development** (broadly): known as
  **cybernetics** in the 1940s-1960s; known as **connectionism** in the
  1980s-1990s; the current resurgence under the name **deep learning**,
  beginning in 2006.

### 2. What is deep learning (slides 4-7)

- **Definition** (slide 4): deep learning is a
  branch of machine learning that mimics the human brain. In deep
  learning, we don't need to explicitly program everything. The concept
  isn't new — but it's on the hype now because earlier we lacked the
  processing power and data.
- **Perceptron** (slides 6-7): the basic structure
  in a neural network, modelled after neurons in cells. Each input signal
  is assigned a weight; this weight is multiplied by the input value, the
  neuron stores the weighted sum of all inputs; an **activation
  function** is then applied to the weighted sum, producing the neuron's
  output signal.

### 3. How deep learning algorithms "learn" (slides 8-12)

- **Forward Propagation** and **Backward
  Propagation** (slides 8-12): the 2 core mechanisms for a neural network
  to learn. The slides illustrate via images and an example, with no
  detailed math formulas in the extractable text — only the 2 concept
  names and image illustrations.

### 4. Types of deep learning (slides 13-18)

- **3 important types of neural networks** (slide
  13): Artificial Neural Networks (ANN), Convolution Neural Networks
  (CNN), Recurrent Neural Networks (RNN).
- **ANN** (slide 14): a single perceptron (or
  neuron) can be imagined as a Logistic Regression. ANN is a group of
  multiple perceptron neurons at each layer. ANN consists of 3 layers —
  Input, Hidden, Output. The input layer accepts inputs, the hidden layer
  processes them, the output layer produces the result. Essentially, each
  layer tries to learn certain weights.
- **RNN** (slides 15-16): has a recurrent connection
  on the hidden state. This looping constraint ensures sequential
  information is captured in the input data. RNNs share parameters
  across time steps — known as **Parameter Sharing** — resulting in
  fewer parameters to train and lower computational cost. 3 main weight
  matrices: U, W, V.
- **CNN** (slides 17-18): all the rage in the deep
  learning community right now. CNN's building blocks are filters (a.k.a.
  kernels). Kernels extract relevant features from the input via the
  convolution operation. CNN learns the filters automatically without
  explicit specification. These filters help extract the right and
  relevant features from the input data.

## Gaps / notes

- **Logistic Regression** is directly referenced
  (ANN ≈ several Logistic Regressions combined — slide 14) and already
  named in [[classification]] (Chapter 3, among the 5 popular
  algorithms), but no source in the 8 `raw/` chapters ever teaches this
  algorithm in detail — insufficient basis to create a dedicated
  `logistic-regression` concept page.
- Backward Propagation has no math formula in the
  slide (only illustration) — full derivative/gradient descent detail
  would need a source outside `raw/`.

## Links

- [[deep-learning-neural-networks]] — the synthesis
  concept page: perceptron, forward/backward propagation, ANN/CNN/RNN.
- [[big-data]] — the reason deep learning only
  boomed recently (enough compute + enough data), tying back to the
  drivers named in Chapter 1.
- [[machine-learning-overview]] — the deep learning
  timeline is consistent with the AI/ML history from Chapter 3.
- [[classification]] — the ANN/perceptron ≈ Logistic
  Regression connection.
- [[linear-regression]] — comparing the nature of
  "learning parameters from data" (OLS vs forward/backward
  propagation).
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter08_Deeplearning.pdf`, slides 1-19.
