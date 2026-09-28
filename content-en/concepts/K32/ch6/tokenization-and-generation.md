---
type: concept
title: "Tokens, Vocabulary and Decoding Rules"
tags: [chapter-6, k32, tokenization, vocabulary, sampling, decoding, autoregressive]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Definition

A **token** is the unit the model actually works on: **a
whole word or a piece of a word**, and **each token gets an ID number from a
fixed vocabulary** (slide 62).

A **decoding rule** is how the system selects a token
from the probability distribution the model outputs - for example
**sampling**. Slide 52 stresses: **it does not always choose the most probable
token**.

## Explanation

### Why tokens are needed

The reason is stated plainly: **the LLM only understands
numbers** (slide 62). The same point appears more technically on slide 12:
**the training process only works with continuous values**.

Slide 44's three steps are the path from letters to
numbers:

1. Split the text into tokens.
2. Look up each token in a learned embedding
   table.
3. Incorporate information about token positions.

The slide's example table maps those four tokens to four
vectors.

**Steps 2 and 3 are different jobs.** The table says
**what the token is**; the position says **where it stands**. Chapter 5
explains why step 3 is mandatory.

### The one-token-per-word caveat

Slide 44 is explicit: **one token per word is a
simplification; real tokenization may split a word into several tokens**.
Slide 62 shows it: `Chat | G | PT | is | fun`.

Slide 52 repeats it: **the table uses words for
readability, while the model predicts tokens**.

The chapter repeating this **three times** marks it as
the commonest confusion. The practical consequence: **counting words is not
counting tokens**.

### Decoding: where randomness enters

The model outputs **a probability for every possible next
token**, as in those two examples.

Then **the system selects a token using a decoding rule,
such as sampling**, and **does not always choose the most probable token**
(slide 52). Slide 63 puts it plainly: **the app picks one with a little
randomness**.

**This fully answers review question 3**, in two
layers:

- **At the model level**: the output is **a
  distribution**, not an answer.
- **At the app level**: the decoding rule **deliberately
  samples**. Always taking the top token would make the same prompt give the
  same answer.

In other words, **the randomness is an application design
choice, not a model defect**.

### The generation loop and its stopping condition

Slides 53 and 63 describe one loop at two levels:

1. Read all tokens so far.
2. Output a probability for every possible next
   token.
3. Pick one.
4. Append it and repeat.
5. Stop at a special "end of answer" token, or more
   generally at a stopping condition.

Note on step 5: **the end token is just another token in
the vocabulary**, predicted like any other. There is no separate "knows it has
finished" mechanism.

### Why the reply seems to type itself

Slide 65: the app **converts chosen token IDs back into
words**, and **words are streamed to your screen as they are generated**.
**That's why the reply seems to "type itself out."**

A small but valuable detail: ChatGPT's most familiar
visual effect **follows directly from the autoregressive architecture**, and
is not a cosmetic flourish.

## Appears in

The slides above.

## Related

- the embedding table step 2 looks into.
- steps 1, 5 and 6 of the architecture.
- the output is a distribution, not an answer.
- the app is where the decoding rule is chosen.
- softmax turns scores into probabilities.

## Caveats

**The chapter names no decoding rule beyond
"sampling".** There is no temperature, top-k, top-p or beam search. Do not
attribute those to it.

**Nor does it say how a tokenizer is built** - only that
the result is whole words or word pieces, and that **real tokenizers
vary**.
