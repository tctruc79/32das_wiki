---
type: concept
title: "The Decoder-Only Transformer Architecture"
tags: [chapter-6, k32, transformer, causal-mask, multi-head, mlp, residual, autoregressive]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Definition

A **Transformer** is **a neural network architecture used
by many LLMs**; **its layers turn token vectors into contextual
representations**, and a **GPT-style** model uses those to **predict the next
token** (slide 43).

Slide 43 states the scope: this focuses on
**autoregressive, decoder-only Transformers**; other language-model
architectures also exist.

## Explanation

### Six steps, read in one pass

| Step | Slide | What happens |
|---|---|---|
| 1 | 44 | **Convert text into vectors**: split into tokens → look up the learned embedding table → incorporate position |
| 2 | 45 | **Attention gathers context**: create `Q`, `K` and `V` at each position → compare the query with the allowed keys → softmax → combine the values |
| 3 | 49 | **The MLP transforms each position** separately |
| 4 | 50 | **Repeat through many layers**, each computing new `Q`, `K` and `V` |
| 5 | 51 | **Predict the next token**: project the last vector to a score for every token → softmax |
| 6 | 53 | **Continue generating**: append the new token to the sequence and repeat |

Read beside part 1: **step 2 is the whole of
[[attention-pattern]] compressed into four lines**. Part 1 builds it from
intuition; part 2 uses it as a known block.

### The causal mask: new relative to Chapter 5

Slide 45 adds a constraint absent from Chapter 5's
[[self-attention]]: **a causal mask allows each position to attend only to
itself and earlier positions**.

This is what turns a generic attention block into a model
that can **generate**, and the reason is simple: if a position could see later
positions, next-token prediction **would be meaningless** - the model would
copy the answer sitting right there. The causal mask keeps the training task
honest.

It also explains the phrase "**the allowed Keys**" in
step 2.

### The Q-K-V table, and its warning

| Symbol | The question it answers | Formula |
|---|---|---|
| **Query** | What information is this position **looking for**? | `qᵢ = WQ xᵢ` |
| **Key** | **What features** allow other positions to match it? | `kᵢ = WK xᵢ` |
| **Value** | What information does this position **contribute**? | `vᵢ = WV xᵢ` |

Slide 46's note matters as much as the table: **these
questions are intuitive analogies; `Q`, `K` and `V` are numerical vectors**.
Within a head, **positions share the learned projection matrices**, and the
**equations are simplified**.

This is a habit worth copying in writing: give the
analogy, then **say that it is one**.

### The weight example, and the line that matters more

At *creature*, one head assigns those four weights
(slide 47).

Two accompanying notes matter more than the
numbers:

- **Attention combines Value vectors, not the words
  themselves.**
- The weights are **illustrative only**; real patterns
  depend on the learned model, layer, head and input.

### Multiple heads and residual updates

Slide 48 packs three things:

1. Multiple heads can learn different ways to combine
   information.
2. The model concatenates their outputs and applies a
   learned projection.
3. A residual connection adds the result to the existing
   representation.

Point 3 links straight back to slide 21: the block
**adds** to the embedding rather than replacing it.

**A note against tidy storytelling**: **humans do not
assign a fixed semantic task to each head**. The slide also notes that
**normalization forms part of the layer, with placement depending on the
architecture**.

### Attention and MLP: a division of labour

| Component | Role |
|---|---|
| **Attention** | **Gathers and combines** information **across positions** |
| **MLP** | **Further transforms** the vector **at each position separately** |

This division is part 2's tidiest idea: **attention is
the only operation that moves information across positions; the MLP never
does**. It processes each position separately with **weights shared across
positions within the layer**, and **its input already contains the context
attention gathered** (slide 49).

MLP stands for **multilayer perceptron**, also called a
feed-forward network - exactly
[[dense-layers-and-deep-networks]] from Chapter 5, in a new position.

### Depth, and a warning about reading it

Slide 50: each layer receives the previous layer's
representations, computes **new** `Q`, `K` and `V`, applies attention, and its
MLP transforms further. **Layers usually have separate parameters.**

Then the warning: **their roles are distributed and
overlapping, rather than a fixed sequence such as words, then grammar, then
meaning**.

Worth contrasting with
[[convolutional-neural-network]] in Chapter 5, where the feature hierarchy
**is** real and **is demonstrated**. For Transformers the chapter **declines**
to offer a tidy equivalent. That is a genuine difference between the
architectures, not an omission.

### Steps 5 and 6: from representation to text

**Prediction** (slide 51), with that formula.

**Continuing** (slide 53), i.e. that conditional
probability.

**An implementation detail worth knowing**:
implementations can **cache earlier Keys and Values** to avoid recomputing
them at every generation step.

### Training, and the key distinction

The four training steps (slide 54) hold nothing new
relative to Chapter 5.

The notable phrase is **multiple positions**: one
training sequence yields **many prediction problems at once**.

**The learned-versus-computed table** (slide 55) is part
2's most memorable item:

| Learned during training | Computed for the current input |
|---|---|
| Embedding table | Token representations |
| `Q`, `K` and `V` projection matrices | Query, Key and Value vectors |
| MLP and output weights | Attention weights and hidden vectors |
| | Next-token probabilities |

**During ordinary inference, model parameters stay fixed
while the computed values change with the context.**

This one line explains three things at once: why the
model **learns nothing from your conversation**, why **memory must be built
outside it**, and why **one model answers differently in different contexts**
without retraining.

## Appears in

The slides above.

## Related

- step 2, built in full from intuition.
- the same block as presented in Chapter 5.
- the MLP is the dense layer.
- the third training step.
- the optimizer in the fourth step.
- steps 1, 5 and 6 seen from the token side.
- a contrast on feature hierarchies.
- why this architecture won.

## Caveats

**The chapter still does not draw a complete Transformer
block.** It goes further than Chapter 5 but **has no full block diagram, no
layer-normalization detail and no encoder-decoder structure**.

**"Decoder-only" does not imply a missing encoder.** The
name is a historical legacy of the 2017 architecture's two halves; GPT-style
models keep one. The chapter does not explain the name.
