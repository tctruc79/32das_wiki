---
type: concept
title: "Recurrent Neural Networks (RNNs)"
tags: [chapter-5, k32, deep-learning, rnn, sequence-modeling, hidden-state]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

A recurrent neural network applies a **recurrence
relation** at every time step to process a sequence:

```
ht = fW( xt , ht-1 )
|     |    |     |
|     |    |     +-- old state
|     |    +-------- input at step t
|     +------------- function with weights W
+------------------- cell state
```

Two defining properties: an RNN **has a state `ht`
updated at each step** as the sequence is processed; and **the same function
and the same parameters `W` are used at every step**.

## Explanation

### The problem RNNs exist to solve

Slide 37 places two approaches side by side. The first:
take a feed-forward net `x ∈ R^m -> network -> ŷ ∈ R^n` and apply it
**independently at every time step**, i.e. `ŷt = f(xt)`. The problem is
stated bluntly: `ŷ2` then **depends only on `x2`**; the information in `x0`
and `x1` is thrown away and the model has **no notion of order or memory**.
The second fixes exactly that: `ŷt = f(xt, ht-1)` - each step additionally
receives `ht-1`, **the past memory passed on from the previous step**.
Folded up, that is a cell with a loop: **a recurrent cell**.

### Three weight matrices, written out

Slide 40 gives the two equations of an RNN
cell:

```
ht  = tanh( Whh' · ht-1  +  Wxh' · xt )     # update the hidden state
ŷt  = Why' · ht                              # the output vector
```

| Matrix | Role |
|---|---|
| `Wxh` | Input → hidden |
| `Whh` | Hidden → hidden (this is where the memory is carried across) |
| `Why` | Hidden → output |

Two details worth remembering. First, **`tanh` is
chosen for a reason**: it keeps the state bounded in `(-1, 1)`, preventing
state values from blowing up across time steps. Second, **`Whh` is the
matrix that causes all the later trouble**: computing the gradient with
respect to the initial state requires multiplying many copies of `Whh`
together, and that is the root of exploding and vanishing gradients - see
[[backpropagation-through-time]].

### The intuition in pseudocode

Slide 39 writes the four steps out in plain Python, and
this is the fastest way to remember the mechanism:

```python
my_rnn = RNN()
hidden_state = [0, 0, 0, 0]

sentence = ["I", "love", "recurrent", "neural"]

for word in sentence:
    prediction, hidden_state = my_rnn(word, hidden_state)

next_word_prediction = prediction
# >>> "networks!"
```

Four steps: (1) initialise the hidden state to zeros;
(2) loop over the sequence, each step the cell taking the current word **and**
the previous hidden state; (3) it returns an output **and** an updated hidden
state, which is fed back into the loop; (4) the final prediction is the next
word. Worth noticing: the `hidden_state` variable is **overwritten** each
iteration - the sequence's entire past exists in that one vector alone, and
that is exactly the **encoding bottleneck** slide 55 names as the RNN's first
limitation.

### The graph unrolled across time

Slide 41 draws the RNN **unrolled**: at each step `t`
there is an input `xt`, an output `ŷt` and a loss `Lt`; **the total loss `L`
is the sum of the `Lt`**. The thing to see: the three matrices `Wxh`, `Whh`,
`Why` are **re-used unchanged at every step**. This drawing matters because
it turns a loop into an ordinary deep network - which is how
[[backpropagation]] applies with no new algorithm, only the understanding
that a "layer" here is a time step.

### From scratch, and in one line

Slide 42 places a hand-written `MyRNNCell` class
(initialising the three matrices `W_xh`, `W_hh`, `W_hy` and a zero state `h`;
its `call` method updating `h` with exactly the `tanh` equation then
computing the output) next to two library calls. The slide's closing note:
the `call` method is **exactly the two equations from slide 40** - meaning
nothing is hidden inside the library.

```python
from tf.keras.layers import SimpleRNN
model = SimpleRNN(rnn_units)

from torch.nn import RNN
model = RNN(input_size, rnn_units)
```

### Two example applications

Slide 54 gives two problems of different shapes. **Music
generation** (many to many): input is sheet music, output the next character;
`E → F#`, `F# → G`, `G → C`, `C → A`, and each prediction is **fed back as
the next input** so the network composes note by note. **Sentiment
classification** (many to one): input a sequence of words, output the
probability of positive sentiment; *"I love this class!"* →
`<positive>`.

## Appears in

[[chapter05-deep-learning-k32]] - slides 38 (the
definition `ht = fW(xt, ht-1)` with each component annotated, the two
properties), 37 (the problem with a per-step feed-forward net), 39 (the
four-step pseudocode), 40 (the two equations, three matrices, the reason for
`tanh`), 41 (the unrolled graph, `L` as the sum of the `Lt`), 42
(`MyRNNCell` and `SimpleRNN`/`RNN`), 54 (music generation and sentiment
classification), 55 (the three limitations), 62 (the A2
summary).

## Related

- [[sequence-modeling-design-criteria]] - the four
  criteria RNNs are designed to meet.
- [[word-embedding]] - `xt` must be a numeric vector
  before entering the cell.
- [[backpropagation-through-time]] - how it is trained,
  and the two failure modes from multiplying many `Whh`.
- [[lstm-gated-cells]] - the upgraded cell that retains
  long memory.
- [[self-attention]] - the alternative that abandons
  recurrence entirely.
- [[perceptron]] - `tanh(Whh' ht-1 + Wxh' xt)` is still
  a weighted sum through a non-linearity.
