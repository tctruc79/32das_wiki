---
type: source
title: "Chapter 6 (K32) - Large Language Models: Attention, the Transformer and ChatGPT"
tags: [chapter-6, k32, llm, transformer, attention, tokenization, chatgpt, deep-learning]
created: 2026-09-28
updated: 2026-09-28
status: complete
source_file: "raw/Lecture Notes/K32/Chapter06/VNP_LLMs_finaltex.pdf"
---

## Metadata

- **Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City -
  Vietnam-Netherlands Programme.
- **Cohort**: K32 (2026, current cohort).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: the PDF has **71 physical pages**
  and the **footer number equals the physical page number** exactly. But
  the **footer denominator reads `/ 75`**, four more than the real total -
  a stale figure left in the LaTeX source, not a sign of missing slides.
  Five pages carry **no footer**: the title page (1), three section title
  pages (2, 42, 57) and the closing page (71).
- **PDF metadata**: authored in LaTeX with the Beamer
  class, produced by MiKTeX pdfTeX-1.40.27, created 2026-09-28 at 17:12
  (+07) - the **same day as this ingest**, about an hour earlier. Page
  size 453.5 x 255.1 pt, 16:9, 11.2 MB.
- **Place in the course**: K32's **sixth** chapter,
  following [[chapter05-deep-learning-k32]]. It is a chapter **outside the
  recorded plan**: as of 2026-09-27 the theory was confirmed finished at
  Chapter 5, with two sessions left - an expert talk and the group
  presentations. This deck's content and depth match the **expert-talk
  session**, but the instructor authored it herself (the PDF metadata
  names TRAN THI TUAN ANH), so it is ingested as a regular chapter.
- **Relation to Chapter 5**: this chapter **continues
  directly** from lecture A2's self-attention material. Chapter 5 built the
  attention "brick" and stopped, stating outright that no slide draws a
  complete Transformer block. **Chapter 6 fills exactly that gap**: it
  builds the decoder-only Transformer, then carries on to a real product,
  ChatGPT.

## Summary

The chapter answers a single question at three levels
of magnification: **what does a large language model actually do?**

The short answer is on slide 3 and never changes across
71 pages: **a large language model is a sophisticated mathematical function
that predicts what word comes next for any piece of text**. Everything else -
attention, the Transformer, ChatGPT - is scaffolding around that one
operation.

The chapter's three parts are those three levels:

| Part | Slides | Question | Answered with |
|---|---|---|---|
| 1. LLMs and attention | 3-41 | How can a machine know that a word's meaning depends on context? | Building the `attention pattern` from queries, keys and values |
| 2. How LLMs use Transformers | 43-56 | How do those blocks assemble into a model? | Six steps from text to the next token |
| 3. How ChatGPT uses an LLM | 58-70 | Why is the chat app not the model? | `ChatGPT = LLM + wrapper` |

A notable teaching choice: **the same attention
mechanism is explained twice for two different purposes**. Part 1 builds it
from intuition, slowly and with many pictures. Part 2 rebuilds it as a tidy
sequence of operations with formulas. Read both: part 1 gives the *why*,
part 2 the *how*.

## Main content

### What an LLM is

**Definition (slide 3)**: a sophisticated mathematical
function that **predicts the next word** for any piece of text.

**An important correction on slide 4**: the model does
**not** predict one word with certainty. It **assigns a probability to all
possible next words**. This is the most misunderstood point about LLMs, and
it explains much of the behaviour discussed in part 3.

**Parameters and the word "large" (slide 5)**:

- Models learn to predict by **processing an enormous
  amount of text**, typically pulled from the internet.
- **The memorable figure**: to read the text used to
  train GPT-3, a human would need to read **non-stop, 24-7, for over 2,600
  years**.
- Training is like **tuning the dials on a really big
  machine**. The model's behaviour is **entirely determined** by those
  continuous values, called **parameters** or **weights**.
- **The "large" in "large language model" is that
  parameter count**: hundreds of billions.
- **No human sets those parameters.** They begin at
  random, then are repeatedly refined on many example pieces of text.

**The training mechanism (slides 6, 8, 9)**: changing
parameters changes **the probabilities the model gives for the next word**.
**Backpropagation** tweaks every parameter so the model becomes **a little
more likely to choose the true word** and a little less likely to choose the
others. Done over **trillions of examples**, the model not only predicts the
training data better but also **generalises to unseen text**.

**Why GPUs, and why the Transformer appeared (slides
9-10)**: the scale of computation is only possible with **chips optimised for
many parallel operations, GPUs**. But **not all language models parallelise**:
**prior to 2017 most processed text one word at a time**. Then a team at
Google introduced the **Transformer**.

This is where the chapter joins
[[chapter05-deep-learning-k32]]: the three limits of recurrent networks named
there are exactly why this paragraph exists.

### The Transformer from a distance

**The defining property (slide 12)**: Transformers
**don't read text from start to finish, they soak it all in at once, in
parallel**.

**The first step (slides 12-13)**: associate each word
with **a long list of numbers**. The reason is practical: **training only
works with continuous values**, so language must be encoded numerically. Each
list must somehow **encode the meaning** of its word.

**The two fundamental operations (slide 14)**:

| Operation | Role |
|---|---|
| **Attention** | Gives the lists of numbers a chance to **communicate with one another** and refine the meanings they encode based on the surrounding context, all **in parallel** |
| **Feed-forward network / MLP** | Gives the model **extra capacity to store patterns about language** learned during training |

**The chapter's classic example (slide 15)**: the
numbers encoding *bank* may change based on surrounding context such as
*river* and *jumped into*, to encode the more specific notion of a
**riverbank**.

**The loop and the last step (slides 16-17)**: data
**flows repeatedly through many iterations of those two operations**. At the
end, **one final function is performed on the last vector in the sequence** -
updated by all the input context and everything learned in training - to
produce the next-word prediction, as **a probability for every possible next
word**.

### Attention, built from intuition

**The motivating example: the word *mole* (slide
18)**. Three phrases:

1. *American shrew mole* - the small burrowing mammal.
2. *One mole of carbon dioxide* - the chemistry unit.
3. *Take a biopsy of the mole* - the mark on the skin.

A reader knows the three meanings differ **from
context**. The slide's question: **how can the machine know?**

**The answer has two halves, and the first is the
important one (slide 19)**: after embedding, **the vector for *mole* is
identical in all three cases**. Embedding knows nothing about context.

**Only at the next step, the attention block (slides
20-21)**, do the surrounding embeddings get to **pass information into the
*mole* embedding and update its values**. A well-trained model can associate
**multiple distinct directions in embedding space** with a word's multiple
meanings; **the attention block's job is to compute what to add to the generic
embedding, as a function of context, to move it to one of those
directions**.

**Range (slide 22)**: this transfer can occur **over
potentially large distances** and can involve information **much richer than
just a single word**.

### The attention pattern, step by step

The chapter describes **a single head of attention**
first (slide 23), with one running example.

**The initial embedding (slide 24)**: a high-dimensional
vector containing **no reference to context**, but **encoding the word's
position**. Its entries tell you both **what the word is** and **where it
sits**. Denoted `E`.

**The goal (slide 25)**: produce refined embeddings `E'`
in which **the nouns have ingested the meaning of their adjectives**.

**Queries (slides 26-29)**: each noun asks *"are there
any adjectives sitting in front of me?"*, encoded as a vector called the
**query**. Three details to remember:

- The query vector has a **much smaller dimension** than
  the embedding vector.
- Computing a query is **multiplying a matrix `WQ` by
  the word's embedding**, applied to **all** embeddings in the context.
- **The entries of `WQ` are the model's parameters**,
  so its true behaviour is **learned from data**.

**Keys (slides 30-32)**: a second matrix `WK`, equally
full of tunable parameters, produces the **keys**, understood as **potential
answers to the queries**, mapped into **the same smaller space**. In the
example, **the key produced by *fluffy* is closely aligned to the query
produced by *creature***.

**From dot products to the attention pattern (slides
33-35)**:

1. Compute **all key-query dot products**, giving a grid
   from `−∞` to `∞` scoring **how relevant each word is to updating the
   meaning of every other word**.
2. We want each column **between 0 and 1 and summing to
   1**, like a probability distribution, so **apply softmax down each
   column**.
3. That normalised grid is the **attention
   pattern**.

**The formula (slide 36)**: `softmax(Kᵀ Q / ...)`, where
`Q` and `K` are **the full arrays** of query and key vectors. **The numerator
`Kᵀ Q` is a very compact way to represent the grid of all key-query dot
products.**

**A number worth remembering (slide 38)**: **the size of
the attention pattern is equal to the square of the context size**. This is
why context windows are expensive, and it connects directly to the **context
limit** in part 3.

**Values (slides 40-41)**: the most straightforward
update uses **a third matrix, the value matrix `WV`**: multiply it by the
first word's embedding to get a **value vector**, and **add that to the second
word's embedding**. The same **weighted sum is applied across all
columns**.

### Six steps from text to next token

Part 2 rebuilds the mechanism as a procedure. **The scope
is stated (slide 43)**: this focuses on **autoregressive, decoder-only
Transformers**; other architectures exist.

**Four crisp definitions (slide 43)**:

- An **LLM** is a language model trained on large
  amounts of data.
- A **Transformer** is a neural network architecture
  used by many LLMs.
- Its layers turn **token vectors into contextual
  representations**.
- A **GPT-style** model uses those representations to
  **predict the next token**.

**Step 1 - convert text into vectors (slide 44)**: split
into **tokens**, look each up in a **learned embedding table**, and
**incorporate position**. The note is explicit: **one token per word is a
simplification; real tokenizers may split a word into several
tokens**.

**Step 2 - attention gathers context (slide 45)**:
create **Query, Key and Value at each position**, compare the Query at
*creature* with **the allowed Keys**, **softmax** the scores into attention
weights, and **combine the Values**.

**New relative to Chapter 5 - the causal mask**: **each
position attends only to itself and earlier positions**. This is what turns a
generic attention block into a model that can **generate**: if a position
could see the future, next-token prediction would be meaningless.

**The Query-Key-Value table (slide 46)**, the chapter's
tidiest formulation:

| Symbol | The question it answers |
|---|---|
| **Query** `q` | What information is this position **looking for**? |
| **Key** `k` | **What features** allow other positions to match it? |
| **Value** `v` | What information does this position **contribute**? |

The slide is candid: **those three questions are
intuitive analogies; `Q`, `K` and `V` are numerical vectors**. Within a head
**positions share the learned projection matrices**, and the equations are
simplified.

**An illustrative pattern (slide 47)**, with those four
weights and that weighted sum.

Two accompanying notes matter more than the numbers:
**attention combines Value vectors, not the words themselves**; and the
weights are **illustrative only**.

**Multiple heads and residual updates (slide 48)**:
heads learn different combinations, outputs are concatenated and projected,
and a **residual connection** adds the result. The note matters: **humans do
not assign a fixed semantic task to each head**.

**Step 3 - the MLP transforms each position (slide
49)**:

| Component | Role |
|---|---|
| **Attention** | **Gathers and combines** information **across positions** |
| **MLP** | **Further transforms** the vector **at each position separately** |

The MLP processes **each position separately** with
**weights shared across positions within the layer**, and **its input already
carries the context gathered by attention**.

**Step 4 - repeat through many layers (slide 50)**, with
separate parameters per layer and the caution that **layer roles are
distributed and overlapping, not a fixed sequence**.

**Step 5 - predict the next token (slide 51)**: take the
final-layer vector at the last position, project it to a score for every token
in the vocabulary, and softmax.

**A hypothetical distribution (slide 52)**, and the
slide's key sentence: **the system selects a token using a decoding rule such
as sampling, and it does not always choose the most probable token**.

**Step 6 - continue generating (slide 53)**, with the
implementation note that **earlier Keys and Values can be cached**.

**How training teaches the Transformer (slide 54)**, and
the note that **next-token prediction is a foundation of pretraining, with
further training improving instruction following**.

**Part 2's most important distinction (slide 55)**:

| Learned during training | Computed for the current input |
|---|---|
| Embedding table | Token representations |
| `Q`, `K` and `V` projection matrices | Query, Key and Value vectors |
| MLP and output weights | Attention weights and hidden vectors |
| | Next-token probabilities |

**During ordinary inference the parameters stay fixed
while the computed values change with the context.** This is the tidiest
explanation of why a model does not "learn" from your conversation.

### ChatGPT is not the LLM

This is the chapter's most practical part.

**The founding distinction (slide 58)**:

| | What it is | What it does |
|---|---|---|
| **The LLM (a GPT model)** | "**The brain**" | Does **exactly one thing**: given some text, it predicts the next token |
| **The ChatGPT app** | "**The wrapper**" | Turns your chat into text the LLM can read, and turns the LLM's output back into a reply |

The slide's formula: **`ChatGPT = LLM + prompt building
+ tokenization + a generation loop + extras`**.

**The full pipeline (slide 59)**, with step 3
repeating.

**Step 1 - the app builds the full prompt (slide 60)**:
**the LLM never sees only your message.**

The slide's analogy: **like handing an actor a
script**.

**The assembled chat template (slide 61)**,
simplified:

```
[system]    You are a helpful assistant.
[user]      What is the capital of France?
[assistant] The capital of France is Paris.
[user]      And of Japan?
[assistant] _
```

**The model's job is simply to continue this text from
the blank at the end.** Seeing the template explains why ChatGPT seems to
"remember": **it does not remember, the whole history is pasted back into the
prompt every turn**.

**Step 2 - text becomes tokens (slide 62)**: whole words
or word pieces, each with an ID from a fixed vocabulary.

**Step 3 - one token at a time (slide 63)**, with the
app picking one **with a little randomness** and stopping at a special
end-of-answer token.

**Inside the LLM (slide 64)**, restating parts 1 and 2 in
two sentences and one pipeline.

**Step 4 - tokens become text again (slide 65)**, and
**that is why the reply seems to "type itself out"**.

**Extras built around the LLM (slide 66)** - four of
them, and what they share is the point:

| Extra | How it works |
|---|---|
| **Tools** | The model can **request a web search or a calculation**; the app runs it and **pastes the results into the prompt** |
| **Memory** | **The LLM forgets between chats**; memory features **save notes and add them to future prompts** |
| **Safety checks** | **Separate filters** screen requests and replies |
| **Context limit** | The LLM **reads a limited amount of text at once**, so long chats may be **trimmed or summarized** |

**How a tool call fits the loop (slide 67)**.

**The closing analogy (slide 68)** - worth memorising:
**the LLM is a brilliant writer locked in a room who can only read a page and
write the next word; ChatGPT is the assistant outside who prepares the page,
slides it under the door, collects each new word, slides the page back, and
finally shows you the finished reply.**

### Five takeaways and five review questions

**Five key takeaways (slide 69)**:

1. The LLM is a next-token predictor; ChatGPT is the app
   around it.
2. The app builds a hidden prompt.
3. Text becomes tokens, predicted one at a time, then
   converted back.
4. Inside, attention handles context and MLP layers
   supply stored knowledge.
5. Tools, memory and safety checks work by changing what
   goes into the prompt.

Takeaway 5 sums up part 3: **no extra modifies the model;
they all modify the model's input**.

**Five review questions (slide 70)** - see [[on-thi]] for
worked answers:

1. Why does ChatGPT seem to "remember" earlier
   messages?
2. What is a token, and why is it needed?
3. Why can the same question produce different
   answers?
4. How does a web search result reach the LLM?
5. What happens when a conversation exceeds the context
   limit?

## Links

- definition, parameters, training scale.
- queries, keys, values and the normalised grid.
- the six steps, causal mask, multiple heads, MLP.
- tokens, vocabulary, decoding rules, stopping.
- system prompt, tools, memory, context limit.
- the preceding chapter; this one resumes exactly where
  its self-attention section stopped.
- the same mechanism, seen from Chapter 5.
- the instructor.
- the exam-revision synthesis page.

## Citations

Everything on this page comes from that PDF, cited by
**footer number** (identical to the physical page number). Many slides credit
their figures only as *(Source: Internet)*; the deck carries **no specific
academic citation**, so this wiki does not attribute one.
