---
type: concept
title: "Word Embedding - Encoding Language for a Neural Network"
tags: [chapter-5, k32, deep-learning, embedding, one-hot, nlp]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Slide 45 opens with a flat statement: **neural
networks cannot interpret words**. The chain
`"deep" -> network -> "learning"` simply does not work, because networks
require **numerical** inputs. An **embedding** is the transformation of
each word into a fixed-size numerical vector, in three steps:

| Step | Content |
|---|---|
| 1. Vocabulary | The set of every word in the corpus: this, morning, I, took, my, cat, for, a, walk, ... |
| 2. Indexing | Give each word a number: a → 1, cat → 2, ..., walk → N |
| 3. Embedding | Turn that index into a fixed-size vector |

## Explanation

### Two ways to do step 3, and the difference between them

**One-hot**: `"cat" = [0, 1, 0, 0, 0, 0]`, a single 1
at that word's index `i` and zeros elsewhere. The vector's length equals
the vocabulary size.

**A learned embedding**: a **dense** vector in which
**similar words end up close together** - the slide gives the example of dog
and cat ending up near each other in the embedding space.

The difference between the two is the difference
between **"merely marking which word it is"** and **"encoding what the word
means"**. A one-hot vector carries no information about relations between
words: by it, "cat" and "dog" are exactly as far apart as "cat" and
"aardvark", because every pair of distinct one-hot vectors is equidistant. A
learned embedding does carry that relation, so the network can
**generalise** from words it has seen to near-synonyms it has seen
rarely.

One practical consequence the slide does not state but
which follows at once: with a 50,000-word vocabulary a one-hot vector has
50,000 entries of which 49,999 are zero - very wasteful, whereas a learned
embedding is usually only a few hundred dimensions. That is the second
reason (besides meaning) the second approach is what gets used.

### Why this step cannot be skipped

The four criteria in
[[sequence-modeling-design-criteria]] all concern how a sequence is
processed, but **none of them means anything** until the input is numeric.
An embedding is the mandatory bridge between language data and every
architecture in the chapter - the RNN on slide 40 takes `xt` as a vector,
not a word; the self-attention on slide 58 adds positional encoding **to
those very word embeddings**.

### Embeddings are not only for words

The chapter presents embeddings only for language, but
slide 61 shows the same idea operating elsewhere: protein structure models
treat an amino-acid sequence as a sequence of symbols, and Vision
Transformers cut an image into patches and treat the patch sequence as a
sequence. In both cases the sequence elements must be turned into vectors
before entering the network - still an embedding step, merely on a different
data type.

## Appears in

[[chapter05-deep-learning-k32]] - slides 45 (the claim
that networks cannot read words, the three steps vocabulary/index/embedding,
one-hot versus learned, the dog-and-cat example), 39 (the pseudocode looping
over `["I", "love", "recurrent", "neural"]`), 40 (`xt` as the RNN cell's
input vector), 58 (positional encoding added to word embeddings), 61
(amino-acid sequences and image patches needing the same step).

## Related

- [[sequence-modeling-design-criteria]] - the four
  criteria only mean something once the data is numeric.
- [[recurrent-neural-network]] - the `xt` an RNN cell
  receives is exactly an embedding vector.
- [[self-attention]] - `Q`, `K` and `V` are all built
  from the position-augmented embedding.
- [[distance-measures]] - "similar words end up close
  together" is a statement about distance in the embedding space.
- [[pca-k32]] - the same idea of representing data in
  few dense dimensions rather than many sparse ones.
