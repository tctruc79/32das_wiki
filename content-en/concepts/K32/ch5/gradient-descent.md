---
type: concept
title: "Gradient Descent and the Loss Landscape"
tags: [chapter-5, k32, deep-learning, gradient-descent, optimization]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Gradient descent is the algorithm that finds the
weights minimising the loss:
`W* = argmin_W (1/n) sum_i L(f(x^(i); W), y^(i)) = argmin_W J(W)`. It does
so by **walking against the gradient** in small steps:

```
W  <-  W  -  eta · ∂J(W)/∂W
```

where `eta` is the **learning rate**. The mental
picture is given explicitly on slide 20: **the loss is a landscape over
weight space**, and we are looking for its lowest point.

## Explanation

### Four steps, and why the minus sign

Slide 20 breaks the algorithm into four steps: (1)
randomly pick a starting `(w0, w1)`; (2) compute the gradient
`∂J(W)/∂W`, the **direction of steepest ascent**; (3) take a small step
in the **opposite** direction; (4) repeat until convergence.

The minus sign in the update rule comes from step 3
and is a detail easy to skip but worth understanding: a function's
gradient **always points in the direction of fastest increase**, so to
decrease the function you must move in its negative direction. All the
"learning" a neural network does is packed into that one line.

### The full algorithm, in five lines

Slide 21 writes it compactly:

1. Initialise the weights randomly from
   `N(0, sigma^2)`.
2. Loop until convergence:
3. Compute the gradient `∂J(W)/∂W`.
4. Update `W <- W - eta · ∂J(W)/∂W`.
5. Return the weights.

Step 1 is worth noting: **the weights are initialised
randomly**, not at zero. Initialise them all at zero and every neuron in a
layer receives the same gradient and keeps the same value forever - the
whole layer collapses into one neuron. Slide 50 notes that **weight
initialisation** is one of three remedies for vanishing gradients, so the
choice in step 1 is no minor technicality.

### No closed form, unlike Chapters 3 and 4

This is a difference in kind from the two previous
chapters. Linear regression has a closed-form OLS solution; ridge
regression has one; PCA has one via the eigenvalues of the covariance
matrix. A neural network has **none** - `J(W)` is non-linear, non-convex
and riddled with local minima, so the only route is **to feel your way
step by step**. The practical consequence: training the same network twice
on the same data can give two different weight sets, because the random
starting point differs.

### Real landscapes are rugged

Slide 24 states that real loss landscapes are
**rugged, with many local minima and steep cliffs**, then reduces every
difficulty to one question: what should `eta` be? The "ball rolling down a
valley" picture is right in principle but misleading about difficulty,
because the real valley has millions of dimensions and is full of small
pits. How this is handled is covered in
[[learning-rate-and-optimizers]] and
[[mini-batch-gradient-descent]].

## Appears in

[[chapter05-deep-learning-k32]] - slides 20 (the
`argmin` problem, the loss landscape, the four steps), 21 (the five-line
algorithm, `N(0, sigma^2)` initialisation, the learning rate `eta`), 2
(the lecture's goal: "minimise it with gradient descent"), 5 (stochastic
gradient descent dating to 1952), 24 (the rugged landscape and the `eta`
question), 48 (backpropagation as step 2, "shift parameters in order to
minimise loss").

## Related

- [[loss-functions-and-empirical-risk]] - `J(W)` is
  what this algorithm minimises.
- [[backpropagation]] - how `∂J(W)/∂W` at step 3 is
  computed.
- [[learning-rate-and-optimizers]] - choosing `eta`,
  and the adaptive optimisers.
- [[mini-batch-gradient-descent]] - how many points
  the gradient is computed on per step.
- [[backpropagation-through-time]] - the same
  algorithm applied to a graph unrolled over time.
- [[regularization-ridge-lasso-elastic-net-k32]] - for
  contrast: ridge has a closed form, a neural network does not.
