---
type: concept
title: "Activation Functions and the Necessity of Non-linearity"
tags: [chapter-5, k32, deep-learning, activation-functions, relu, sigmoid]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

An activation function `g` is the non-linear
function at the end of each perceptron, turning the weighted sum
`z = w0 + X'W` into the output `y = g(z)`. Its purpose is stated by slide
9 in a single sentence: **to introduce non-linearities into the
network**. Every activation used in deep learning is non-linear, and that
is not a coincidence but the field's condition of existence.

## Explanation

### The chapter's three functions, with derivatives

| Function | Formula | Derivative | Range | TensorFlow / PyTorch |
|---|---|---|---|---|
| Sigmoid | `g(z) = 1 / (1 + e^-z)` | `g'(z) = g(z)(1 - g(z))` | `(0, 1)` | `tf.math.sigmoid` / `torch.sigmoid` |
| Hyperbolic tangent | `g(z) = (e^z - e^-z)/(e^z + e^-z)` | `g'(z) = 1 - g(z)^2` | `(-1, 1)` | `tf.math.tanh` / `torch.tanh` |
| ReLU | `g(z) = max(0, z)` | `1` if `z > 0`, `0` otherwise | `[0, +∞)` | `tf.nn.relu` / `torch.nn.ReLU` |

The derivatives are not decoration:
[[backpropagation]] multiplies them together along the network, so **the
shape of the derivative decides whether a gradient survives or vanishes**
as it flows back through many layers. The sigmoid's derivative peaks at
just 0.25 at `z = 0` and falls quickly to zero on both sides; multiply a
few dozen such numbers and you get roughly zero. ReLU's derivative is
exactly 1 across the whole positive domain, so multiplying it any number
of times still gives 1 - the technical reason ReLU became the default for
hidden layers.

### The central argument: why a linear activation is forbidden

Slide 9 is the most important of the chapter's first
six slides, and its argument is short enough to memorise. If the
activation is linear then a composition of two layers is still
linear:

```
W2 (W1 x) = (W2 W1) x
```

The right-hand side is **a single matrix** times
`x`. Apply the argument repeatedly: a 100-layer network with linear
activations is **mathematically one linear layer**. The visible
consequence on data: such a network can only draw **straight decision
boundaries**, however many layers and neurons it has. By contrast
`g(W2 g(W1 x))` lets the network approximate arbitrarily complex functions
and trace curved boundaries between classes.

This is why depth is not a game of adding layers.
Depth creates power **if and only if** there is a bend between the
layers; remove the activation and a deep network collapses into the
linear model taught in Chapter 3.

### Which function goes where

The chapter has no selection table, but the way the
slides use them says enough. **ReLU** appears in hidden layers, and slides
80 and 83 say outright that in a CNN it is applied **after every
convolution**. **Sigmoid** appears at the output when a probability in
`(0, 1)` is wanted, matching the binary cross-entropy loss on slide 18,
and appears again in the **gates** of an LSTM cell on slide 52 - precisely
because its `(0, 1)` range reads as "what percentage gets through".
**Tanh** appears in the RNN state-update equation on slide 40, for a
stated reason: it **keeps the state bounded** in `(-1, 1)`, preventing
values from blowing up across time steps.

One more function appears on slide 85 but not in the
table of three: **softmax**, `softmax(yi) = e^(yi) / sum_j e^(yj)`, used
at the last layer of a multi-class problem to turn raw scores into a
probability distribution summing to 1. It is also the very function that
turns attention scores into attention weights on slide 59.

## Appears in

[[chapter05-deep-learning-k32]] - slides 8 (the three
functions, formulas, derivatives, library names, and the line "all
activation functions are non-linear"), 9 (the `W2(W1 x) = (W2 W1)x`
argument and its consequence for decision boundaries), 7 (where `g` sits
inside a perceptron), 40 (`tanh` in the RNN cell and the bounded-state
reason), 52 (the sigmoid layer as an LSTM gate), 80 and 83 (ReLU after
every convolution), 85 (softmax at the final layer).

## Related

- [[perceptron]] - the activation is the last of the
  perceptron's four components.
- [[dense-layers-and-deep-networks]] - without
  non-linearity, depth creates no power at all.
- [[backpropagation]] - an activation's derivative
  is a factor multiplied into the gradient chain.
- [[backpropagation-through-time]] - choosing the
  activation is the first remedy listed for vanishing gradients.
- [[lstm-gated-cells]] - a gate is a sigmoid layer
  multiplied pointwise.
- [[convolutional-neural-network]] - ReLU is the
  second of the three operations that make a CNN.
