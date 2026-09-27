---
type: concept
title: "Sequence Modeling Design Criteria"
tags: [chapter-5, k32, deep-learning, sequence-modeling, rnn]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Slide 44 sets out **four things a sequence model must
be able to do**, and uses them as the yardstick for every sequence
architecture:

1. Handle **variable-length** sequences.
2. Track **long-term dependencies**.
3. Maintain information about **order**.
4. **Share parameters** across the sequence.

## Explanation

### Why sequences need a framework of their own

Slide 34 builds the reason with a very compact
illustration: from **one** still image of a ball there is no way to know
where it will go; from **a sequence** of its past positions the answer is
obvious. The general conclusion: sequences are everywhere - audio, text,
stock prices, video, DNA, ECG signals, climate data, motion - and in every
case **the order of the data carries information a single sample
cannot**.

### Four shapes of sequence problem

Slide 35 classifies by the number of inputs and
outputs:

| Shape | Name of the task | Example |
|---|---|---|
| One to one | Binary classification | "Will I pass this course?" |
| Many to one | Sentiment classification | A tweet → positive / negative |
| One to many | Image captioning | Image → "A baseball player throws a ball." |
| Many to many | Machine translation | Sentence → sentence |

How to read the diagram is spelled out: blue circles
are inputs, orange circles outputs, boxes are recurrent cells, and arrows
between boxes **pass state along the sequence**. Worth noting: the "one to
one" shape is exactly lecture A1's problem - the plain network is **the
simplest special case** of this framework, not a different kind of model
altogether.

### The first three criteria, illustrated with real sentences

Slide 46 gives exactly one example per criterion, and
all three are worth remembering verbatim because they are the fastest way
to explain the problem in an exam answer.

**Variable length**: *"The food was great"* (4 words),
*"We visited a restaurant for lunch"* (6), *"We were hungry but cleaned the
house before eating"* (9). The model must accept all three, so it cannot be
designed with a fixed number of input slots.

**Long-term dependencies**: *"France is where I grew
up, but I now live in Boston. I speak fluent ___."* The missing word
depends on a piece of information far back at the start, and
[[backpropagation-through-time]] shows why RNNs typically fail on exactly
this kind of sentence.

**Order**: *"The food was good, not bad at all."*
versus *"The food was bad, not good at all."* **The same words, opposite
meanings.** The example is sharp because it immediately refutes any model
treating a sentence as a bag of words: counting word occurrences makes the
two identical.

**Parameter sharing**: the same `W` at every step
means the model applies **at any position, for any sequence length**. This
fourth criterion is in fact what makes the first feasible: only with shared
parameters can one model process a 3-step and a 300-step sequence with the
same weights.

### Using the four criteria as a yardstick

The list's greatest value is that it gets reused to
**eliminate** candidates. Slide 44 asserts RNNs meet all four. But slide 55
returns to that same list to show RNNs still fall short on criterion 2 in
practice (no long memory, because gradients vanish), and slide 55 also uses
it to reject the "feed everything into a dense network" option: that
removes recurrence but **loses order** (criterion 3), is **not scalable**
(criterion 1), and still has **no long memory** (criterion 2). Finally
[[self-attention]] is offered as the option that meets all four without
recurrence.

## Appears in

[[chapter05-deep-learning-k32]] - slides 44 (the four
criteria, the claim that RNNs meet all four, the "took my cat for a ___"
example), 46 (three example sentences for the first three criteria, plus the
argument for the fourth), 34 (the ball: why sequences need this), 35 (the
four sequence shapes), 37 (a per-step feed-forward net violating criteria 2
and 3), 55 (using the four criteria to reject the dense network and expose
the RNN's limits).

## Related

- [[recurrent-neural-network]] - the architecture
  designed to meet all four criteria.
- [[word-embedding]] - the mandatory step before any
  criterion means anything: turning words into numbers.
- [[backpropagation-through-time]] - why criterion 2 is
  hard to meet in practice.
- [[lstm-gated-cells]] - the remedy for criterion 2,
  and the three remaining limits.
- [[self-attention]] - meets all four criteria without
  recurrence.
- [[dense-layers-and-deep-networks]] - the option
  rejected on slide 55.
