---
type: concept
title: "Deep Learning & Neural Networks"
tags: [chapter-8, k31, machine-learning, deep-learning, neural-networks]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Deep learning is a machine learning branch using
multi-layer neural networks, modelled after how the human brain processes
information, to automatically learn features from raw data without
explicit programming.

## Explanation

- **History**: 3 waves — cybernetics (1940s-1960s),
  connectionism (1980s-1990s), and modern deep learning (from 2006). The
  concept isn't new but boomed recently thanks to enough processing power
  and data (see [[big-data]]).
- **Perceptron**: the basic unit, modelled after a
  biological neuron. Each input has a weight; the neuron computes the
  weighted sum of all inputs, then applies an activation function to
  produce the output signal. A single perceptron can be imagined as a
  Logistic Regression model.
- **How it learns**: **Forward Propagation** —
  signal flows from input through the layers to produce a prediction;
  **Backward Propagation** — error is propagated back to update weights.
  Both repeat over many iterations for the network to "learn" (the
  original slide has no detailed math formulas, only illustrations).
- **3 main neural network types**:
  - **ANN** — a group of perceptrons arranged in 3
    layers: Input, Hidden, Output. Each layer learns a set of
    weights.
  - **RNN** — has a recurrent connection on the
    hidden state to capture sequential information; shares parameters
    across time steps (3 weight matrices U, W, V), reducing the number
    of parameters to train.
  - **CNN** — uses automatically learned filters
    (kernels) via convolution to extract relevant features from input
    data (especially popular for images).

## Appears in

- [[chapter08-deep-learning]] — history, perceptron,
  forward/backward propagation, the 3 network types.

## Related concepts

- [[big-data]] — the driver that made deep learning
  feasible (enough data + enough processing power).
- [[classification]] — a single perceptron is
  essentially equivalent to Logistic Regression, a classification
  algorithm.
- [[linear-regression]] — both are "learn parameters
  from data" problems, differing only in the optimization algorithm (OLS
  vs forward/backward propagation).
