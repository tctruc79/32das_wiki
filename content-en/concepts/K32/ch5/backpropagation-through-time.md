---
type: concept
title: "Backpropagation Through Time, Exploding and Vanishing Gradients"
tags: [chapter-5, k32, deep-learning, bptt, vanishing-gradient, rnn]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Backpropagation through time (BPTT) is how recurrent
networks are trained: **errors are backpropagated at each individual time
step and then across all time steps**, from the end of the sequence back to
the beginning (slide 49, citing Mozer, *Complex Systems* 1989). The
extension over ordinary backpropagation is put concisely on slide 48: **in
an RNN the "layers" are time steps**.

## Explanation

### Two passes over the unrolled graph

Slide 49 draws the unrolled graph with arrows both ways:
a **forward pass** from `x0` to `xt` computing the states, the outputs `ŷt`
and the losses `Lt`; a **backward pass** in reverse to obtain the gradients.
Because the total loss `L` is the sum of the `Lt` (slide 41), each weight's
gradient is the sum of contributions from every time step - which is what "and
then across all time steps" means.

### The root cause: multiplying `Whh` many times

Slide 50 gives one sentence that explains everything:
computing the gradient with respect to `h0` involves **multiplying many
factors of `Whh`** together, along with repeated gradient computation. This
is a direct consequence of parameter sharing - precisely because `Whh` is
re-used at every step, the derivative chain contains it many times. The chain
is as long as the data sequence, so a 50-word sentence gives roughly 50
factors multiplied together.

That produces two symmetric failure modes:

| Failure mode | Cause | Remedy |
|---|---|---|
| **Exploding gradients** | Many values **larger than 1** | **Gradient clipping**, to shrink oversized gradients |
| **Vanishing gradients** | Many values **smaller than 1** | (1) change the **activation function**; (2) change the **weight initialisation**; (3) change the **network architecture**, use gated cells |

The arithmetic behind it is simple and worth checking
yourself: `1.5^50` is about 6 billion, while `0.5^50` is about `10^-15`.
There is no safe band in between - factors need deviate only slightly from 1
for the result to explode or disappear after a few dozen steps.

The three remedies for vanishing gradients in the right
column are not arbitrary alternatives but three levels of intervention:
changing the activation is the lightest (ReLU's derivative is 1 on the
positive domain, see [[activation-functions]]); changing weight
initialisation acts on the starting point; and changing the architecture to a
gated cell is the strongest, leading directly to
[[lstm-gated-cells]].

### Why vanishing gradients matter, rather than merely annoy

Slide 51 explains with a three-step chain: multiply many
small numbers together → errors from further-back time steps carry smaller
and smaller gradients → **the parameters get biased towards capturing only
short-term dependencies**.

The third step is the important one. The network does
not merely **learn distant dependencies slowly**; it **learns a skewed
model**, because the weights receive useful signal only from nearby steps.
The result is a model that appears to work (the loss falls) but is in truth
only good at short-range relations.

The slide illustrates with two contrasting sentences,
and the pair is worth remembering verbatim. **Short gap**: *"The clouds are
in the ___"* - the relevant words `x0`, `x1` sit right beside the prediction
`ŷ3`, so it is easy. **Long gap**: *"I grew up in France, ... and I speak
fluent ___"* - the clue is many steps back and **its gradient signal has all
but vanished** by the time it reaches there. That second sentence is exactly
criterion 2's example in [[sequence-modeling-design-criteria]]: RNNs are
**designed** to track long-term dependencies but **in practice often fail
to**, and that tension is what LSTMs exist to resolve.

## Appears in

[[chapter05-deep-learning-k32]] - slides 49 (BPTT, the
two passes, citing Mozer 1989), 48 (recalling backpropagation and the "layers
are time steps" extension), 50 (multiplying many `Whh`, the two-failure-mode
table, gradient clipping, the three remedies), 51 (the three-step consequence
chain, the short-gap and long-gap example sentences), 41 (`L` as the sum of
the `Lt` - why gradients accumulate across steps), 55 (no long memory as the
RNN's third limitation), 62 (the summary: train with BPTT, watch for the two
failure modes).

## Related

- [[recurrent-neural-network]] - `Whh` is the matrix
  multiplied repeatedly.
- [[backpropagation]] - the base algorithm; BPTT is it
  applied to a time-unrolled graph.
- [[lstm-gated-cells]] - the third and strongest remedy:
  change the architecture.
- [[activation-functions]] - the first remedy; ReLU's
  derivative is 1 on the positive domain.
- [[sequence-modeling-design-criteria]] - criterion 2 is
  the one this problem breaks.
- [[self-attention]] - abandoning recurrence abandons the
  long factor chain too.
