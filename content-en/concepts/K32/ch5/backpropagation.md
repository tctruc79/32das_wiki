---
type: concept
title: "Backpropagation"
tags: [chapter-5, k32, deep-learning, backpropagation, chain-rule]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Backpropagation is how `∂J(W)/∂w` is computed for
**every** weight `w` in a network, by applying the chain rule from the
output back towards the input. The question it answers is stated concretely
on slide 22: *how does a small change in one weight affect the final
loss?*

## Explanation

### The chain rule, written out for a two-weight network

For the chain `x -> z1 -> ŷ -> J(W)` through weights
`w1` and `w2`:

```
∂J(W)/∂w2 = (∂J(W)/∂ŷ) · (∂ŷ/∂w2)
∂J(W)/∂w1 = (∂J(W)/∂ŷ) · (∂ŷ/∂z1) · (∂z1/∂w1)
```

Weight `w2` sits near the output so its chain has
**two** factors; `w1` sits one step deeper so its chain has **three**. The
general rule: the further a weight is from the output, the longer its
chain.

### The thing to see: factors get reused

The factor `∂J/∂ŷ` **appears on both lines**. That is
no coincidence: every weight in the network shares that factor, and every
weight in layer `k` shares the factors already computed for layer `k + 1`.
It is that **reuse** that makes gradients "flow backwards" through the
layers, and why the algorithm is named backpropagation rather than
"differentiate each weight".

The consequence for cost is large, though the slide
gives no figure: computing each weight's derivative independently would
cost the number of weights times the depth; thanks to reuse, a single
backward pass yields gradients for the **whole** network. That is why a
network with millions of parameters can be trained at all.

### Two passes, and what libraries do for you

One training step comprises a **forward pass** (push
the data through the network to get `ŷ` and `J`) then a **backward pass**
(backpropagate to obtain gradients), after which
[[gradient-descent]] updates the weights. Slide 22 closes with a short
line of large practical import: **frameworks do this automatically**.
TensorFlow and PyTorch users do not write the chain rule by hand; they
define the network and the loss, and automatic differentiation builds the
graph and walks it backwards. Understanding the mechanism still matters,
because the two failure modes on slide 50 - exploding and vanishing
gradients - follow directly from multiplying these factors
together.

### In an RNN the "layers" are time steps

Slide 48 summarises backpropagation in two steps
(take the derivative of the loss with respect to each parameter; shift the
parameters to minimise the loss) then states the extension: **in a
recurrent network the "layers" are time steps**, so the gradient must also
flow back through time. That is
[[backpropagation-through-time]], where the chain of factors is as long as
the data sequence - which is why vanishing gradients are a far more serious
problem in RNNs than in feed-forward networks.

## Appears in

[[chapter05-deep-learning-k32]] - slides 22 (the
question, the two chain-rule formulas, the reuse of `∂J/∂ŷ`, frameworks
doing it automatically), 5 (backpropagation and the MLP dating to 1986), 30
(the summary: optimisation through backpropagation), 48 (restated in two
steps, plus the RNN extension), 49 (forward and backward passes on the
unrolled graph), 50 (multiplying many `Whh` factors producing the two
failure modes).

## Related

- [[gradient-descent]] - consumes the gradients
  backpropagation produces.
- [[loss-functions-and-empirical-risk]] - `J(W)` is
  where the derivative chain starts.
- [[activation-functions]] - the derivative `g'(z)` is
  a factor in the chain.
- [[dense-layers-and-deep-networks]] - the chain is as
  long as the number of layers.
- [[backpropagation-through-time]] - the same
  algorithm with time steps as layers.
