---
type: concept
title: "Large Language Models"
tags: [chapter-6, k32, llm, next-token-prediction, parameters, gpu]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Definition

A **large language model (LLM)** is **a sophisticated
mathematical function that predicts what word comes next for any piece of
text** (slide 3).

But slide 4 immediately qualifies this: instead of
predicting one word with certainty, what it does is **assign a probability to
all possible next words**.

## Explanation

### Why slide 4 matters more than slide 3

"Predicts the next word" sounds as if the model **knows**
the answer. Slide 4 says it does not: its output is **a probability
distribution over the whole vocabulary**, not an answer.

Three real behaviours the chapter later explains all
follow from exactly this:

- **The same question gives different answers** - because
  there is a distribution to sample from.
- **The model can be confidently wrong** - high
  probability means "fits the text", not "is true".
- **There is no lookup step inside** - it is all
  arithmetic over parameters.

### Parameters: where the "large" lives

The chapter describes training as **tuning the dials on
a really big machine**. A language model's behaviour is **entirely
determined** by those continuous values, called **parameters** or **weights**
(slide 5).

All four of slide 5's claims are worth remembering,
because each blocks a different misconception:

| Claim | The misconception it blocks |
|---|---|
| The **large** in LLM means **hundreds of billions of parameters** | That "large" refers to the data volume or the file size |
| **No human sets those parameters** | That engineers write grammar rules into the model |
| They **begin at random** | That the model starts from a knowledge base |
| They are **repeatedly refined on many example texts** | That the model "reads for meaning" the way a person does |

### Scale, in one memorable figure

To read the text used to train GPT-3, **a standard human
would need to read non-stop, 24-7, for over 2,600 years** (slide 5).

The figure matters not for effect but because it makes
one thing clear: **the model cannot be looking its training data up**. That
text is not inside the model; only the parameters it shaped are.

### Training, and why it is familiar backpropagation

Changing parameters changes **the probabilities the model
gives for the next word** (slide 6). **Backpropagation** tweaks all the
parameters so the model becomes **a little more likely to choose the true word
and a little less likely to choose the others** (slide 8).

No new algorithm appears here. It is the mechanism from
[[chapter05-deep-learning-k32]]; only the **problem setup** differs: the label
`y` is not assigned by a person but **is the next word already present in the
text**. That is why the internet can be used as training data without
labelling.

Over **trillions of examples** the model not only fits
the training data better but **makes more reasonable predictions on text it
has never seen** (slide 9) - generalisation in the sense of
[[overfitting-underfitting-k32]].

### GPUs and the 2017 turning point

That scale of computation **is only made possible by
special chips optimised for running many operations in parallel, GPUs**
(slides 9-10).

But slide 9 states the condition: **not all language
models can be easily parallelized**. **Prior to 2017, most processed text one
word at a time.** Then a team at Google introduced the **Transformer**.

This deserves the longest pause in part 1, because it
shows **hardware shaping architecture**. GPUs already existed; what was
missing was a model that could use them. The recurrent network of
[[recurrent-neural-network]] could not, because step `t` waits for step `t-1`.
The Transformer arrived not because it was more accurate on paper but because
it **parallelises**, and only a parallelisable model can grow to hundreds of
billions of parameters.

## Appears in

The slides above.

## Related

- the architecture modern LLMs use.
- the operation that makes a Transformer.
- the "next word" is really the "next token".
- an LLM is not a chat app.
- the training algorithm, unchanged from Chapter 5.
- the pre-2017 approach, one word at a time.
- the same GPU parallelism advantage.

## Caveats

**The chapter alternates between "word" and "token".**
Part 1 says "next word" for readability; parts 2 and 3 say "next token", which
is accurate. Slides 44 and 52 both note this. In an exam answer use **token**,
and say that "word" is the simplification.

**The chapter gives no parameter count for any specific
model** beyond "hundreds of billions", and **names no model other than GPT-3**
(in the 2,600-year example) **and GPT generally**. Do not attribute specific
figures to it.
