---
type: concept
title: "Gated Cells and LSTMs"
tags: [chapter-5, k32, deep-learning, lstm, gated-cell, rnn]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Slide 52 states the idea in one sentence: **use gates to
selectively add or remove information within each recurrent unit**. An
**LSTM** (Long Short-Term Memory) network relies on such a gated cell to
track information across many time steps, thereby **mitigating the
vanishing-gradient problem**.

## Explanation

### What a gate is, in two operations

Slide 52 explains the gating mechanism with exactly two
components, and the explanation is compact enough to remember
verbatim:

1. **A sigmoid neural net layer** outputs numbers in
   `(0, 1)`.
2. **A pointwise multiplication** by those
   numbers.

Put together: multiplying a value by a number in
`(0, 1)` lets **between 0% and 100% of the information through**. The gate is
fully closed at 0 (nothing passes), fully open at 1 (everything passes), and
partly open in between. The decisive point: **that amount is learned** - a
gate is not a human-written rule but a neuron layer with its own weights,
trained alongside the rest of the network. The network works out for itself
when to remember and when to forget.

### Why gating fixes vanishing gradients

The chapter writes no equations so it does not prove
this, but the argument is readable from two slides placed side by side. Slide
50 gives the root cause: the gradient must pass through **very many `Whh`
factors** multiplied together, and each factor below 1 shrinks the signal. A
gated cell lets information travel a route that is **multiplied into less
often** - when a gate learns that a piece of information should be kept, it
lets that piece pass nearly intact across many steps, so its gradient is not
shrunk the same way. The word the slide uses is "mitigating", not "solving" -
and the choice is exact: LSTMs reduce the problem, they do not abolish
it.

### What this chapter does not say

This gap is worth recording clearly. Slide 52 names
LSTMs, explains the gating idea, and mentions GRUs once in brackets - but **no
slide writes out the forget/input/output gates, nor the cell-state equation
for `ct`**. Anyone needing the full LSTM equations must look elsewhere.
Within this chapter, what must be answerable is: what a gate is (a sigmoid
layer multiplied pointwise), why it is needed (the vanishing gradients of
slides 50-51), and what it achieves (retaining information across many time
steps).

### Three limitations LSTMs do **not** fix

Slide 55 is lecture A2's hinge: it names three remaining
weaknesses of every recurrent model - gated ones included - and each is a
reason [[self-attention]] exists:

| Limitation | Content |
|---|---|
| **Encoding bottleneck** | The whole history is squeezed into **one single state vector** |
| **Slow, not parallelisable** | Step `t` **must wait** for step `t - 1` to finish before it can run |
| **No long memory** | Vanishing gradients lose the long-range dependencies |

Gating helps with the third but **does nothing** for the
first two: an LSTM cell still has exactly one state carried forward, and still
must run sequentially step by step. That is why slide 55 closes with the
question *"Can we eliminate the need for recurrence entirely?"* - the problem
lies not in the kind of cell but in **recurrence itself**.

Slide 55 also names three desired capabilities for an
ideal sequence model - handling a **continuous stream**, being
**parallelisable**, having **long memory** - then tries one alternative and
rejects it at once: feeding everything into a dense network does remove
recurrence, but it is **not scalable, loses order, and still has no long
memory**. The right idea is on the last line: **identify and attend to what's
important**.

## Appears in

[[chapter05-deep-learning-k32]] - slides 52 (the gating
idea, the sigmoid layer and pointwise multiply, LSTMs, GRUs in brackets, the
word "mitigating"), 50 (the third remedy for vanishing gradients being a
gated architecture), 51 (the long-term dependency problem gating exists to
solve), 55 (the three remaining limitations, the three desired capabilities,
the rejected dense option), 62 (the summary: LSTM-style gated cells as one of
the two remedies).

## Related

- [[backpropagation-through-time]] - the problem gating
  exists to mitigate.
- [[recurrent-neural-network]] - the cell LSTMs
  replace.
- [[activation-functions]] - a gate is a sigmoid layer,
  using exactly its `(0, 1)` range.
- [[self-attention]] - the option that addresses all
  three limitations gating cannot.
- [[sequence-modeling-design-criteria]] - gating targets
  criterion 2; the first two limitations belong to other criteria.
