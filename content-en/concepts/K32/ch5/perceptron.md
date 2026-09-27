---
type: concept
title: "The Perceptron - the Building Block of Neural Networks"
tags: [chapter-5, k32, deep-learning, perceptron, neural-networks]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

A perceptron is the smallest computational unit of
any neural network: it takes inputs, **multiplies each by a learnable
weight**, adds them together along with a **bias weight**, and passes the
sum through a **non-linear activation function**:

```
ŷ = g( w0 + sum_{i=1..m} xi wi )  =  g( w0 + X' W )
```

with `X = [x1 ... xm]'` and `W = [w1 ... wm]'`. What
is inside the brackets is just **a dot product plus a constant**. Every
architecture in the chapter - dense, recurrent and convolutional networks
alike - is this operation repeated in different arrangements.

## Explanation

### Four components and what each does

**Inputs** `x1, ..., xm` are raw data or the
previous layer's outputs. **Weights** `w1, ..., wm` are the only thing
training changes; they decide which inputs matter and in which direction.
The **bias weight** `w0` is the weight on a constant input of 1; it
**shifts the activation point**, letting the neuron fire at a threshold
other than zero. The **activation** `g` bends the relationship, and
without it depth is meaningless - see
[[activation-functions]].

### Why one perceptron draws only a line

Slide 10 builds an example worth remembering
verbatim. Take `w0 = 1` and `W = [3, -2]'`, i.e. `ŷ = g(1 + 3x1 - 2x2)`.
The bracketed expression is **the equation of a line in the plane**:
`1 + 3x1 - 2x2 = 0`. For the input `X = [-1, 2]'` we get
`1 + 3(-1) - 2(2) = -6`, and `g(-6) ≈ 0.002`.

How to read that matters more than the number
itself: the line splits the plane in two; the sigmoid maps the **signed
distance from the point to the line** into a score in `(0, 1)`. The
`z > 0` side gives `ŷ > 0.5`, the `z < 0` side gives `ŷ < 0.5`, and the
further a point lies from the line the closer the score gets to 0 or 1. A
single perceptron is therefore **a linear classifier** - nothing more. A
curved boundary requires stacking perceptrons, see
[[dense-layers-and-deep-networks]].

### The same perceptron in all three architectures

The most memorable thing about the perceptron comes
not in the first lecture but the last. Slide 81 writes the formula for a
neuron in a convolutional layer -
`sum_i sum_j w_ij · x_{i+p, j+q} + b` - and then states outright that this
is **exactly the perceptron from Lecture 1**, differing in two respects
only: it is restricted to a local image patch rather than the whole
input, and its weights are **shared across every position** instead of
each position having its own. The recurrent cell is the same story:
`ht = tanh(Whh' ht-1 + Wxh' xt)` is still a weighted sum through a
non-linearity, merely with an extra input arriving from the previous time
step.

### An untrained perceptron is useless

Slide 16 builds an example to drive exactly this
home: a network with three hidden units predicts that student `x = [4,
5]` will almost certainly fail (`0.1`) when in fact they passed (`1`).
The reason is not a wrong architecture but that **the weights are still
random and the network has never seen any data**. Structure gives a
network its representational capacity; only the weight values give it
knowledge, and those come from [[gradient-descent]] and
[[backpropagation]].

### The perceptron in Python

There is no API for a single perceptron, because in
practice nobody uses one. The smallest unit the libraries expose is **a
whole layer** of parallel perceptrons:

```python
layer = tf.keras.layers.Dense(units=2)                  # TensorFlow
layer = nn.Linear(in_features=m, out_features=2)        # PyTorch
```

## Appears in

[[chapter05-deep-learning-k32]] - slides 7 (forward
propagation, the formula and dot-product notation), 10 (the worked
example with `w0 = 1`, `W = [3, -2]'`), 12 (the multi-output perceptron),
16 (an untrained perceptron predicting wrongly), 30 (the summary: one
perceptron draws a line), 40 (the same form inside a recurrent cell), 81
(the convolutional neuron being "exactly the perceptron from Lecture
1").

## Related

- [[activation-functions]] - the `g` component, and
  why it must be non-linear.
- [[dense-layers-and-deep-networks]] - stacking
  perceptrons into layers and layers into deep networks.
- [[gradient-descent]] - how the weights
  `w0, ..., wm` get their values.
- [[convolutional-neural-network]] - the same
  perceptron, restricted to a patch and sharing weights.
- [[recurrent-neural-network]] - the same perceptron
  plus one input from the previous time step.
- [[linear-regression-k32]] - `w0 + X'W` without an
  activation is exactly the linear model taught in Chapter 3.
