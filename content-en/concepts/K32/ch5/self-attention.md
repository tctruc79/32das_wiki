---
type: concept
title: "Self-Attention, Query-Key-Value and the Transformer"
tags: [chapter-5, k32, deep-learning, attention, transformer, llm, qkv]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Self-attention is a mechanism for modelling sequences
**without recurrence**: instead of scanning step by step in order, it
**attends to the most important parts of the input** by comparing each element
with every other. The whole mechanism fits in one formula:

```
A(Q, K, V) = softmax( (Q · K') / scaling ) · V
```

with `Q = E WQ`, `K = E WK`, `V = E WV`, where `E` is the
embedding with position information added.

## Explanation

### The search analogy

Slide 57 explains `Q`, `K`, `V` with a YouTube search for
"deep learning", and this is the fastest way to keep the three symbols
straight:

| Symbol | Role in the analogy | Real role |
|---|---|---|
| Query `Q` | What you are looking for: "deep learning" | The element that is looking for related information |
| Key `K` | The title of each video (sea turtles, MIT 6.S191, Kobe Bryant) | The label matched against the query |
| Value `V` | The video itself | The actual content returned |

The two matching steps: (1) **compute the attention
mask** - how similar is each key to the query; (2) **extract values based on
attention** - return the values with the highest attention. The analogy's core
point: keys and values **are two different things**. You match against titles
but receive videos; separating those roles is what makes the mechanism more
flexible than a plain comparison.

### Four steps, and why step 1 is mandatory

Slides 58 and 59 break the mechanism into four
steps.

**Step 1: encode position information.** Because the data
is fed in **all at once** rather than sequentially, order **must be supplied
explicitly**: add position information `p0, ..., p6` to the word embeddings,
`encoding_i = embedding_i ⊕ pi`. The example sentence is *"He tossed the
tennis ball to serve"*. This step is mandatory, and here is why: an RNN knows
order **for free** because it processes sequentially, whereas self-attention
sees every word at once, so without added positions the sentences *"The food
was good, not bad"* and *"The food was bad, not good"* would be identical to
it - violating criterion 3 in
[[sequence-modeling-design-criteria]].

**Step 2: extract query, key, value.** Three **separate**
linear layers applied to the **same** positional embedding `E`: `Q = E WQ`,
`K = E WK`, `V = E WV`. The **self** in "self-attention" lies exactly here:
all three come from the same input, so the sequence matches against
itself.

**Step 3: compute the attention weighting.** The attention
score is the **pairwise similarity between each query and each key**, measured
by the **dot product** (cosine similarity), then passed through a softmax:
`softmax( (Q · K') / scaling )`. The softmax turns scores into **weights
summing to 1**, i.e. where to attend. The slide's example: in that sentence
*"tennis"* attends strongly to *"ball"* and *"serve"*.

**Step 4: extract features with high attention.**
Multiply those weights by the values:
`A(Q, K, V) = softmax( (Q · K') / scaling ) · V`.

### One attention head, and many

Slide 60 draws all four steps as one computational block:
three linear layers producing query/key/value from the same positional
encoding → `MatMul` → `Scale` → `Softmax` → `Matmul`. Three accompanying
claims: this block is **one self-attention head** that can plug into a larger
network; with **multiple heads** each attends to a different part of the input
(the main object, the background, a small detail); and attention is **the
foundational building block of the Transformer** (Vaswani et al.,
2017).

This is also where the chapter stops. **No slide draws
the full Transformer block** - no residual connections, layer normalisation,
position-wise feed-forward network, or encoder/decoder structure. The chapter
finishes the brick and stops; anyone needing the full architecture must look
elsewhere.

### Why attention solves all three RNN limitations

Read directly against the three-limitation table in
[[lstm-gated-cells]]:

| The RNN limitation | How self-attention handles it |
|---|---|
| Encoding bottleneck | There is no single state; every element **reaches every other one directly** |
| Not parallelisable | There is no sequential dependency; the whole of `Q · K'` is **one matrix multiplication** running in parallel |
| No long memory | The distance between two elements **does not affect** how strongly they are linked |

The third row is the conceptually most important. In an
RNN, `x0`'s influence on `ŷt` must travel through `t` successive
multiplications, so it decays with distance. In self-attention, `x0` and `xt`
are matched **directly by one dot product**, and the distance between them does
not appear in the formula at all - which is why *"I grew up in France, ... I
speak fluent ___"* stops being a hard problem.

### Where self-attention is applied

| Field | Application | Source |
|---|---|---|
| Language processing | Transformers: BERT, GPT; text generation, machine translation, question answering, text-to-image generation ("an armchair in the shape of an avocado") | Devlin et al. 2019; Brown et al. 2020 |
| Biological sequences | Protein structure models: predicting the three-dimensional structure from an amino acid sequence | Jumper et al., *Nature* 2021; Lin et al., *Science* 2023 |
| Computer vision | Vision Transformer: cut the image into patches and treat that run of patches as a sequence | Dosovitskiy et al., ICLR 2020 |

Slide 61's closing line connects straight to what students
use daily: **self-attention is the basis for many large language models
(LLMs)** - the same `Q`, `K`, `V` mechanism, scaled to billions of parameters.
The Vision Transformer row is also notable for breaking the boundary between
two lectures: an image problem solved with a sequence tool, merely by cutting
the image into patches and treating the patch sequence as a
sequence.

## Appears in

[[chapter05-deep-learning-k32]] - slides 57 (the YouTube
search analogy, `Q`/`K`/`V`, the two steps), 58 (step 1 positional encoding,
step 2 the three linear layers), 59 (step 3 attention weighting and the
softmax, step 4 feature extraction, the "tennis" example), 60 (the
single-head diagram, multiple heads, the Transformer - Vaswani 2017), 61 (the
three application domains with references, and LLMs), 55 (the three RNN
limitations that lead to attention), 62 (the summary: self-attention modelling
sequences without recurrence).

## Related

- [[lstm-gated-cells]] - the three limitations attention
  exists to solve.
- [[recurrent-neural-network]] - the mechanism being
  replaced.
- [[word-embedding]] - `Q`, `K`, `V` are all built from
  the position-augmented embedding.
- [[sequence-modeling-design-criteria]] - attention meets
  all four criteria without recurrence.
- [[activation-functions]] - the softmax turns attention
  scores into weights.
- [[mini-batch-gradient-descent]] - GPU parallelism is the
  same advantage attention exploits.
- [[distance-measures]] - the dot product and cosine
  similarity were met in Chapter 4 as distance measures.
