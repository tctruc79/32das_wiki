---
type: concept
title: "Mini-batch Gradient Descent"
tags: [chapter-5, k32, deep-learning, sgd, mini-batch, gpu]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Mini-batch gradient descent computes the gradient on
**a subset of `B` observations** at each update step, instead of on all `n`
observations (too heavy) or on exactly one (too noisy):

```
∂J(W)/∂W  =  (1/B) · sum_{k=1..B} ∂Jk(W)/∂W
```

## Explanation

### The three ways, side by side

| Approach | Gradient used | What slide 26 says about it |
|---|---|---|
| Full gradient descent | `∂J(W)/∂W` over all `n` points | **Accurate** but **very heavy computationally** |
| Stochastic gradient descent (SGD) | `∂Ji(W)/∂W` at **one single** point `i` | **Easy to compute** but **very noisy** |
| Mini-batch SGD | `(1/B) sum_k ∂Jk(W)/∂W` over `B` points | **Fast**, and **a far better estimate of the true gradient** |

How to read the table: the first two rows are two
extremes of one trade-off between **gradient accuracy** and **cost per
step**. Full-batch gives the exact gradient but each step scans all the
data; stochastic makes each step very cheap but the direction oscillates
badly because a single observation does not represent the set. Mini-batch
is not a half-hearted compromise but a choice that beats both extremes, for
two independent reasons.

### Reason one: a better gradient allows longer steps

Slide 26 closes with two lines, the first being: **a
more accurate gradient means smoother convergence and larger usable
learning rates**. This link is easy to miss: batch size and `eta` are not
independent choices. A large batch gives a less noisy gradient estimate, so
a long step stays safe; too small a batch forces short steps to compensate
for the noise, and short steps mean slow training. See
[[learning-rate-and-optimizers]].

### Reason two: a batch runs in parallel on a GPU

Slide 26's second line: **training is fast because
batches run in parallel on GPUs**. This is where slide 5's "hardware"
condition pays off concretely. The `B` observations in a batch need not be
processed sequentially - they pass through the network together as rows of a
matrix, and [[dense-layers-and-deep-networks]] noted that a whole layer is
just one matrix multiply. So computing the gradient for 128 observations
**does not cost 128 times** the time of one; on a GPU it costs almost the
same. That property is what makes mini-batching the default rather than a
compromise.

### Noise is not purely harmful

Slide 26 presents noise only as SGD's drawback, but
read beside slide 24 a nuance appears: too small an `eta` leaves the model
**stuck in a false local minimum**, and a slightly noisy gradient can push
it out of such a pit. The chapter does not say so explicitly, so this is an
inference from two slides rather than a quotation - but it explains why
mini-batch rather than full-batch is what gets used in
practice.

## Appears in

[[chapter05-deep-learning-k32]] - slides 26 (the three
ways of computing a gradient, the comparison table, the two closing lines on
larger learning rates and GPU parallelism), 21 (the update rule all three
share), 24 (getting stuck in false local minima), 25 (SGD in the
five-optimiser table, Kiefer & Wolfowitz 1952), 30 (the summary:
mini-batching as one of three "training in practice" items), 5 (GPUs and
parallelisability as the second condition).

## Related

- [[gradient-descent]] - the base algorithm these three
  are variants of.
- [[learning-rate-and-optimizers]] - batch size and
  `eta` must be chosen together.
- [[dense-layers-and-deep-networks]] - a layer is one
  matrix multiply, so a whole batch passes at once.
- [[loss-functions-and-empirical-risk]] - `J` averages
  over `n`; a mini-batch averages over `B`.
- [[self-attention]] - parallelisability is likewise the
  reason attention replaces recurrence.
