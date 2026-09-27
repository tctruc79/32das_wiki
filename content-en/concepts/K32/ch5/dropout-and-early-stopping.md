---
type: concept
title: "Dropout and Early Stopping - Regularisation for Neural Networks"
tags: [chapter-5, k32, deep-learning, regularization, dropout, early-stopping, overfitting]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Slide 27 redefines **regularisation** in its own box:
a technique that **constrains the optimisation problem to discourage
complex models**, so as to improve generalisation on unseen data. The
chapter offers two techniques specific to neural networks, and **neither
modifies the loss function** - both modify the **training
procedure**:

- **Dropout**: during training, randomly set some
  activations to 0.
- **Early stopping**: stop training before the model
  has a chance to overfit.

## Explanation

### How this differs from Chapter 3's regularisation

This is the point most worth stressing. In Chapter 3,
regularisation meant **adding a penalty term to the loss**: an L2 penalty
for ridge, an L1 penalty for lasso. The optimisation problem itself
changed, and its solution shrank the coefficients. The two techniques here
**do not do that**. The loss stays exactly cross-entropy or MSE; what
changes is **how the solution is sought** - dropout perturbs the network at
every step, early stopping cuts the journey short. The same aim
(discouraging complex models) reached by two fundamentally different
routes.

### Dropout: slide 28's five points

1. During training, **randomly set some activations to
   0**.
2. Typically drop about **50%** of a layer's
   activations.
3. **A different random subset is dropped every
   iteration.**
4. This **forces the network not to rely on any single
   node**, so it learns **redundant, robust** representations.
5. **At test time all units are active again.**

Points 3 and 5 are the two most often misremembered.
Dropping the **same** subset every iteration is not regularisation at all,
merely a smaller network - the per-iteration randomness is what creates the
effect. And forgetting to reactivate all units at test time makes
predictions fluctuate randomly between runs. The deeper mechanism is point
4: a network that cannot know which unit will be switched off cannot pile
the whole job onto one unit, so it **must spread** information across many -
which is exactly what "redundant representation" means.

```python
tf.keras.layers.Dropout(rate=0.5)
torch.nn.Dropout(p=0.5)
```

### Early stopping: reading two curves

Slide 29 describes a two-curve plot, training loss and
testing loss against training iterations, and divides it into three
phases:

| Stage | The training curve | The test curve | Diagnosis |
|---|---|---|---|
| Early | Falling | Falling | Still underfitting |
| The optimum | Falling | **At its lowest** | Stop exactly here |
| Later | Still falling | **Rising** | The model is memorising the training set |

The rule: **stop at the iteration where testing loss
is lowest, and keep those weights**. The "keep those weights" detail
matters in implementation: one does not halt the instant the test curve
ticks up (that may be noise) but keeps training and then **returns** to the
best saved weights.

A note on wording: the slide says "test (validation)
set" and labels the second curve "Testing". By Chapter 3's distinction, the
set used to choose the stopping point is the **validation** set, not the
final test set - because once it has been used to decide where to stop it
has taken part in model selection. This chapter does not stress that
distinction; anyone following Chapter 3's convention should read the second
curve as the **validation** curve.

## Appears in

[[chapter05-deep-learning-k32]] - slides 27 (the
underfitting/ideal/overfitting triple and the box redefining
regularisation), 28 (dropout, five points, the 50% rate, code in both
libraries), 29 (early stopping, the three phases of the two curves, the
keep-the-weights rule), 30 (the summary: dropout and early stopping as the
two regularisation items).

## Related

- [[overfitting-underfitting-k32]] - the same problem
  taught in Chapter 3, met again in neural networks.
- [[regularization-ridge-lasso-elastic-net-k32]] - for
  contrast: there regularisation adds a penalty to the loss.
- [[train-test-split-and-cross-validation]] - early
  stopping needs a held-out set, and must not use the final test set for
  it.
- [[dense-layers-and-deep-networks]] - dropout switches
  off units in a hidden layer.
- [[loss-functions-and-empirical-risk]] - neither
  technique changes `J(W)`.
- [[random-forest-k32]] - the same "do not rely on any
  single component" principle as feature subsampling in a random
  forest.
