---
type: concept
title: "The Learning Rate and Adaptive Optimisers"
tags: [chapter-5, k32, deep-learning, learning-rate, optimizers, adam]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

The learning rate `eta` is the coefficient that
decides the **step length** in the update `W <- W - eta · ∂J(W)/∂W`. The
gradient says **which direction**; `eta` says **how far**. Slide 24 reduces
every difficulty in training a neural network to that one choice.

## Explanation

### Three cases

| `eta` | Consequence |
|---|---|
| Too small | Converges slowly and **gets stuck in false local minima** |
| Too large | **Overshoots the target**, becomes unstable and diverges |
| Just right | Converges smoothly and escapes local minima |

The first two rows deserve care because they are less
symmetric than they look. Too small an `eta` is not merely slow - it also
**cannot escape** a small pit in the landscape, so the final result is
worse, not just later. Too large an `eta` is not merely imprecise - it
**diverges**, meaning the loss rises instead of falling and the model is
ruined. The "stable" band in between is not wide, and it depends on the
problem, so no single default is right everywhere.

### Two ideas, and which one is actually used

Slide 25 offers two routes. **Idea 1**: try many
values and see which is "just right" - valid but costly, and it must be
redone for each new problem. **Idea 2**, what is actually done: design an
**adaptive learning rate** that follows the landscape, changing with three
things the slide lists - how large the gradient is, how fast learning is
happening, and the size of particular weights. That last point matters: an
adaptive optimiser does not use **one** `eta` for the whole network but
tunes it **per weight**.

### The chapter's five optimisers

| Algorithm | TensorFlow (`tf.keras.optimizers.*`) | PyTorch (`torch.optim.*`) | Source |
|---|---|---|---|
| SGD | `SGD` | `SGD` | Kiefer & Wolfowitz, 1952 |
| Adam | `Adam` | `Adam` | Kingma et al., 2014 |
| Adadelta | `Adadelta` | `Adadelta` | Zeiler, 2012 |
| Adagrad | `Adagrad` | `Adagrad` | Duchi et al., 2011 |
| RMSProp | `RMSprop` | `RMSprop` | Hinton, 2012 |

Two things in the table deserve attention. First,
**SGD dates to 1952** - six years before the perceptron itself (1958);
stochastic gradient descent is not a deep learning invention but a
borrowed statistical tool. Second, **the other four all appeared between
2011 and 2014**, exactly during deep learning's rise; they are the
"software" among the three conditions named on slide 5. The chapter does
not rank the five nor say which to use - in practice Adam is the most
common default, but that is information beyond the slide. The slide only
adds one further reading: `ruder.io/optimizing-gradient-descent`.

### The link to mini-batches

The two choices are not independent. Slide 26 states
that a more accurate gradient **allows larger learning rates**, so batch
size and `eta` must be chosen together: a large batch gives a less noisy
gradient, so a longer step stays safe. That is why raising the batch size
usually comes with raising `eta`.

## Appears in

[[chapter05-deep-learning-k32]] - slides 24 (the
rugged landscape, the three cases for `eta`), 25 (the two ideas, the table
of five optimisers, the further reading), 21 (`eta` in the update rule), 26
(a more accurate gradient allowing a larger `eta`), 30 (the summary:
adaptive learning rates as one of three "training in practice" items), 5
(software and toolboxes as one of the three conditions).

## Related

- [[gradient-descent]] - `eta` is the parameter of
  that very update rule.
- [[mini-batch-gradient-descent]] - batch size and
  `eta` must be chosen together.
- [[backpropagation]] - the source of the gradient
  `eta` scales.
- [[backpropagation-through-time]] - gradient clipping
  is another intervention on step length.
- [[supervised-learning-framework]] - `eta` is a
  hyperparameter, not a learned parameter, per Chapter 3's
  distinction.
