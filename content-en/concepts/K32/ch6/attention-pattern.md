---
type: concept
title: "The Attention Pattern: Queries, Keys and Values"
tags: [chapter-6, k32, attention, query-key-value, softmax, embedding, transformer]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Definition

The **attention pattern** is the **grid of weights**
obtained by taking all key-query dot products and **applying softmax down each
column**. Each cell says **how relevant one word is to updating the meaning of
another** (slides 33-35).

Compactly: `softmax(Kᵀ Q / ...)`, where `Q` and `K` are
**the full arrays** of query and key vectors (slide 36).

## Explanation

### The problem: *mole* and its three meanings

Slide 18 sets three phrases side by side. A reader knows
the meanings differ from context. **How can the machine know?**

**The first half of the answer is the important half**
(slide 19): after embedding, **the vector for *mole* is identical in all three
cases**. Embedding knows nothing about context.

Only at the **attention block** (slide 20) do the
surrounding embeddings get to **pass information into the *mole* embedding and
update its values**.

### The most precise statement of the block's job

Slide 21 puts it geometrically, and it is worth
memorising: a well-trained model may associate **multiple distinct directions
in embedding space** with a word's multiple meanings; **the attention block's
job is to calculate what it needs to add to the generic embedding, as a
function of its context, to move it to one of those specific
directions**.

Note the verb: **add**. The block does **not replace**
the embedding, it **adds a correction** to it. That is exactly why the
architecture uses a **residual connection** (slide 48).

Slide 22 adds the range: the transfer can occur **over
potentially large distances** and can involve information **much richer than
just a single word**.

### The running example

The chapter describes **a single head** first (slide
23).

**The initial embedding `E`** (slide 24) has two opposite
properties, and both matter:

- It **contains no reference to the context**.
- But it **does encode the word's position**, so its
  entries tell you both **what the word is** and **where it exists**.

**The goal** (slide 25): produce refined embeddings `E'`
in which **the nouns have ingested the meaning from their corresponding
adjectives**.

### Queries

Each noun asks *"are there any adjectives sitting in
front of me?"*, encoded as a vector called the **query** (slide 26).

Three technical details, each with a consequence:

| Detail | Slide | Consequence |
|---|---|---|
| The query vector has a **much smaller dimension** than the embedding | 27 | Matching is far cheaper than comparing two embeddings directly |
| `Q = WQ · E`, applied to **every** embedding in the context | 28-29 | One query per **token**, not only per noun |
| **The entries of `WQ` are the model's parameters** | 29 | Its true behaviour is **learned from data**, not designed |

The last row matters most. That question is **not
programmed into the model** - it is a human reading of a matrix that training
discovered. Slide 46 later says so outright: the questions are **intuitive
analogies**.

### Keys

A second matrix `WK`, equally full of tunable parameters,
produces the **keys** (slide 30), understood as **potential answers to the
queries**.

It maps embeddings into **that same smaller-dimensional
space** (slide 31) - necessarily the same, since the next step is a dot
product between them.

In the example, **the key produced by *fluffy* is closely
aligned to the query produced by *creature*** (slide 32).

### From raw grid to attention pattern

1. **Compute all key-query dot products** (slide 33),
   giving a grid from `−∞` to `∞`.
2. **Normalise with a softmax down each column** (slide
   34), so the numbers lie **between 0 and 1 and each column sums to
   1**.
3. That normalised grid **is the attention pattern**
   (slide 35).

**Why normalise by column, not row**: each column is
**one position being updated**, and the contributions to it must be **a
weighted sum adding to 1**. Normalising by row would answer a different
question.

### Two technical figures

**`Kᵀ Q` is a really compact way to represent the grid of
all key-query dot products** (slide 36). Seeing this is seeing why one matrix
multiply replaces a double loop - which is where the Transformer's parallelism
lives.

**The size of the attention pattern is equal to the
square of the context size** (slide 38). Doubling the context window
**quadruples** the attention cost, which is directly why
[[chatgpt-application-layer]] has a context-limit entry.

### Values: updating the embedding

With the pattern in hand, the next step is to **actually
update those embeddings** (slide 39), using **a third matrix, the value matrix
`WV`** (slide 40).

And not for one embedding only: **the same weighted sum
is applied across all of the columns**, producing a sequence of changes (slide
41).

### Why three matrices, not one

The chapter does not ask this directly, but the answer
follows from the three roles. With one matrix, **relevance** and **what gets
transferred** would have to be the same thing. Separating keys from values
allows **matching on one criterion while transferring something else** -
exactly the search analogy in [[self-attention]].

## Appears in

The slides above.

## Related

- the same mechanism as presented in Chapter 5.
- where the pattern sits inside the model.
- the `E` vectors this mechanism consumes.
- softmax, turning scores into weights.
- the dot product, met in Chapter 4 as a similarity
  measure.
- why a parallelisable operation decided everything.

## Caveats

**Slide 36's formula omits the scaling denominator.** It
writes the softmax of `Kᵀ Q` without stating the division by the square root of
the key dimension; Chapter 5 writes `softmax(Q · K′ / scaling)`. Mention the
scaling step in an exam answer.

**`Kᵀ Q` here and `Q · K′` in Chapter 5 are the same
quantity** under column-vector and row-vector conventions. This is not a
contradiction between the chapters.
