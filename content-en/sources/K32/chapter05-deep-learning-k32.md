---
type: source
title: "Chapter 5 (K32) - Introduction to Deep Learning: Perceptrons, Recurrent Networks and Convolutional Networks"
tags: [chapter-5, k32, deep-learning, neural-networks, perceptron, backpropagation, rnn, lstm, attention, transformer, cnn, computer-vision]
created: 2026-09-27
updated: 2026-09-27
status: complete
source_file: "raw/Lecture Notes/K32/Chapter05/intro_deep_learning.pdf"
---

## Metadata

- **Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City -
  Vietnam-Netherlands Programme.
- **Cohort**: K32 (2026, current cohort).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: 90 by the footer (`... / 90`),
  but the PDF has **91 physical pages**. The gap is **physical page 86:
  entirely blank** - no text, no image, no footer. From there on the
  footer number is the physical page minus one (physical page 87 carries
  `86 / 90`). Every citation in this wiki uses the **footer number**,
  i.e. the slide number a reader sees when presenting.
- **PDF metadata**: authored in LaTeX with the
  Beamer class, produced by MiKTeX pdfTeX-1.40.27, created 2026-09-25 at
  16:37 (+07) - released two days before this ingest. Page size 453.5 x
  255.1 pt, a 16:9 ratio.
- **Where the content comes from - this chapter's
  single biggest difference**: slide 1 states outright *"Based on the
  MIT's course about Introduction to Deep Learning"*. This is **K32's
  first chapter not built from the course's two base textbooks** (Provost
  & Fawcett, VanderPlas) but rebuilt from another university's course.
  The consequences are immediately visible: the mathematical notation
  (`W`, `g`, `J(W)`, `fW`), the running example (*"will I pass this
  class?"*), the "outline - part - summary" structure of each lecture,
  and the entire citation list (Vaswani 2017, Kingma 2014, Lee ICML 2009,
  Girshick CVPR 2014, Long CVPR 2015, McKinney Nature 2020, Amini ICRA
  2019) all follow the MIT course rather than those two books.
- **Three lectures merged into one file**: the file
  is not one continuous lecture but **three consecutive ones**, each with
  its own title page and outline page, while the 17 "Parts" are numbered
  continuously from start to finish. Lecture A1 *Perceptrons & Neural
  Networks* covers slides 1-30 (Parts 1-6); lecture A2 *Deep Sequence
  Modeling - Recurrent Neural Networks & Attention* covers slides 31-62
  (Parts 7-12); the third, *Deep Computer Vision: Convolutional Neural
  Networks*, covers slides 63-90 (Parts 13-17). A1 and A2 are labelled
  "A 1"/"A 2" on their title pages while the third is labelled "Part 3" -
  a small naming inconsistency inside the material itself.
- **No companion code or data files**: the folder
  `raw/Lecture Notes/K32/Chapter05/` contains exactly **one PDF**. That
  is a marked change from Chapter 3 (2 scripts, 5 data files) and Chapter
  4 (7 scripts, 2 images). The code in this chapter lives **on the slides
  themselves**, as one- to three-line TensorFlow/PyTorch snippets, and
  slide 30 points to a lab notebook (*"open the notebook and fill in the
  #TODOs"*) that is **not in `raw/`**.
- **Filename carries no chapter number**: the file is
  `intro_deep_learning.pdf`, with no `Chapter05` string. This is the third
  chapter in a row whose filename omits the chapter number (as with
  Chapters 3 and 4); the user placed it in
  `raw/Lecture Notes/K32/Chapter05/`, so this wiki treats it as K32's
  Chapter 5. It is also the first file **without the `VNP_` prefix** and
  without a year in its name - one more sign that it was rebuilt from an
  outside source.
- **Position in the course**: this is K32's **third
  algorithm chapter** and the one that closes the methodological trilogy.
  Chapter 3 covered the whole supervised branch (a label `y` exists),
  Chapter 4 the whole unsupervised branch (`x` only); Chapter 5 **cuts
  across both**: most networks here are trained with supervision, yet
  what distinguishes them belongs to the unsupervised side - **they learn
  their own features** instead of being handed features a human designed.
  In the 2025 cohort deep learning was taught in **a single chapter**
  (the last one) at a general level; the 2026 version expands it into
  **three full lectures** and adds self-attention and the Transformer
  architecture outright - material entirely absent from the 2025 version.
  **Per the cohort separation rule** (CLAUDE.md), this page links to no
  K31 page - comparisons are stated in plain text only.

## Summary

This chapter answers a question the previous three
deliberately left open: **if choosing the features is the hard part, why
not have the machine learn that too?** Slide 4 opens with exactly that
question, and all 90 slides are the extended answer.

**One spine: the feature hierarchy.** Slide 4 draws
it first with a human face - low layers learn edges and light-dark
patches, middle layers compose edges into eyes, nose and ears, high
layers compose those into facial structure - and stresses that **nobody
programmed any of those stages**. Slide 69 reproduces the same picture
when exposing the weakness of hand-engineered features in computer
vision, and slide 84 closes the loop by showing that learned
convolutional filters really do arrange themselves into those three
levels. The word **deep** in "deep learning" is precisely this
composition, and nothing else.

**One technical thread runs through all three
lectures.** The perceptron on slide 7 - a weighted sum plus a bias, then
a non-linearity - is the entire foundation. Place several perceptrons
side by side and you get a layer (slide 12); stack layers and you get a
deep network (slide 14). Define a loss to measure how wrong it is (slides
17-18) and walk down that loss's gradient to fix the weights (slides
20-22). Lecture A2 keeps that same perceptron but adds a state carried
from one time step to the next (`ht = fW(xt, ht-1)`, slide 38), then
finally discards sequential recurrence altogether in favour of
self-attention (slides 57-60). Lecture A3 also keeps that same perceptron
but restricts it to a local patch of an image and shares its weights
across every position (slide 81 says it outright: *"exactly the
perceptron from Lecture 1"*). Three architectures that sound very
different are the same brick laid three different ways.

**Three "why" questions get decisive answers.** *Why
non-linearity?* Because a composition of linear maps is still linear, so
without a non-linear activation a 100-layer network is mathematically one
linear layer (slide 9). *Why did deep learning take off now rather than
in 1986?* Because the ideas are old; only three conditions are new: big
data, GPU hardware, and open-source software (slide 5). *Why are RNNs not
enough?* Because they squeeze all history into a single state vector,
cannot be parallelised, and lose distant dependencies to vanishing
gradients (slide 55) - and those three points are exactly what gave birth
to attention.

**Overfitting returns, but with two entirely new
tools.** Chapter 3 taught regularisation as an L1/L2 penalty added to the
loss. This chapter meets the same problem (slide 27) but offers two
answers specific to neural networks: **dropout** - each iteration
randomly switches off about half the units, forcing the network not to
depend on any single one (slide 28); and **early stopping** - watch the
loss on a held-out set and stop at the moment it turns upward (slide 29).
Neither touches the loss function; both change the **training
procedure**.

## Key content

### Lecture A1: Perceptrons and Neural Networks (slides 1-30)

#### A1.0 Goal and roadmap (slide 2)

The outline page lists six items: (1) why deep
learning, why now; (2) the perceptron; (3) building neural networks; (4)
applying networks and quantifying loss; (5) training with gradient descent
and backpropagation; (6) neural networks in practice.

The goal is stated in a single sentence worth
remembering verbatim: *"Teach computers to learn a task directly from raw
data: build a network from perceptrons, define a loss, and minimise it
with gradient descent."* The three verbs in it - **build**, **define**,
**minimise** - are precisely the rest of the lecture.

#### A1.1 Why deep learning, why now (slides 4-5)

**The problem with hand-engineered features.** Slide
4 gives three adjectives for the old way: time-consuming, brittle, and
not scalable. The replacement question: can we **learn the underlying
features directly from data**? The illustration is three levels of facial
features - lines and edges low, eyes/nose/ears in the middle, facial
structure high - with three claims: each layer of a deep network
**composes** the features of the layer below; **nobody programmed** any
of these stages; and that composition is what the word **deep**
means.

**Why now?** Slide 5 splits the answer in two. The
left half is a timeline showing the ideas are decades old:

| Year | Idea |
|---|---|
| 1952 | Stochastic gradient descent |
| 1958 | Perceptron, learnable weights |
| 1986 | Backpropagation, MLP |
| 1995 | Deep CNN, digit recognition |

The right half is three **new** conditions, and this
is the real answer: (1) **big data** - larger datasets such as ImageNet
and Wikipedia, easier to collect and store; (2) **hardware** - GPUs, and
the massively parallelisable nature of the computation; (3) **software** -
improved techniques, new models, and the TensorFlow, PyTorch, Keras and
JAX toolboxes. Put differently: nothing in the four rows above is new;
only the conditions for running them are.

#### A1.2 The perceptron (slides 7-10)

**Forward propagation.** Slide 7 builds the
foundational brick of the whole chapter. The inputs `x1, ..., xm` are
multiplied by learnable weights `w1, ..., wm`, a **bias weight** `w0` is
added (the weight on a constant input of 1, which shifts the activation
point), and the sum passes through a non-linear activation `g`:

```
ŷ = g(w0 + sum_{i=1..m} xi wi)  =  g(w0 + X' W)
```

The second form uses `X = [x1 ... xm]'` and
`W = [w1 ... wm]'`: what is inside the brackets is just a **dot product**
plus a constant. Every neural network that follows, however deep, is this
operation repeated.

**Common activation functions.** Slide 8 lists
exactly three, each with its derivative and its name in the two
libraries:

| Function | Formula | Derivative | TensorFlow / PyTorch |
|---|---|---|---|
| Sigmoid | `g(z) = 1 / (1 + e^-z)` | `g'(z) = g(z)(1 - g(z))` | `tf.math.sigmoid` / `torch.sigmoid` |
| Hyperbolic tangent | `g(z) = (e^z - e^-z)/(e^z + e^-z)` | `g'(z) = 1 - g(z)^2` | `tf.math.tanh` / `torch.tanh` |
| ReLU | `g(z) = max(0, z)` | `1` if `z > 0`, `0` otherwise | `tf.nn.relu` / `torch.nn.ReLU` |

The slide closes with one bold line: **all
activation functions are non-linear**. That line is not a throwaway note -
it is the bridge to the next slide.

**Why non-linearity is mandatory.** Slide 9 is the
most important of the first six, and its argument is short enough to
memorise. If the activation is linear then a composition of two layers is
still linear: `W2(W1 x) = (W2 W1) x`, i.e. still a single matrix. The
consequence: **a 100-layer network with linear activations is
mathematically one linear layer**, and it can only draw **straight
decision boundaries** however large it is. By contrast
`g(W2 g(W1 x))` lets the network approximate arbitrarily complex
functions and trace curved boundaries between classes.

**A worked example.** Slide 10 sets `w0 = 1` and
`W = [3, -2]'`, i.e. `ŷ = g(1 + 3x1 - 2x2)`. The bracketed expression is
**the equation of a line in the plane**. For the input `X = [-1, 2]'`:
`1 + 3(-1) - 2(2) = -6`, and `g(-6) ≈ 0.002`. How to read that: the line
splits the plane into two half-spaces, and the sigmoid maps the **signed
distance from the point to the line** into a score in `(0, 1)`. The
`z > 0` side gives `ŷ > 0.5`, the `z < 0` side gives `ŷ < 0.5`. A single
perceptron is therefore **a linear classifier** - nothing more.

#### A1.3 Building neural networks from perceptrons (slides 12-14)

**The multi-output perceptron, i.e. the dense
layer.** Slide 12 compresses the notation to `z = w0 + sum_j xj wj` and
`y = g(z)`, then places several perceptrons side by side over the same
inputs: output `i` has `zi = w0,i + sum_{j=1..m} xj wj,i`. Because
**every input connects to every output**, such a layer is called a Dense
(fully connected) layer. Computationally the whole layer is **one matrix
multiply plus an activation** - which is why it runs fast on a GPU.

```python
layer = tf.keras.layers.Dense(units=2)                  # TensorFlow
layer = nn.Linear(in_features=m, out_features=2)        # PyTorch
```

**A single hidden layer network.** Slide 13 inserts
one layer in the middle. The hidden layer computes
`zi = w0,i^(1) + sum_{j=1..m} xj wj,i^(1)` and the output computes
`ŷi = g(w0,i^(2) + sum_{j=1..d1} g(zj) wj,i^(2))`. The word **hidden** is
literal: **we never observe or supervise those values directly**. The
training data says only what `x` is and what `y` should be; no row of it
says what the middle layer ought to contain. Each hidden unit is a
perceptron over the inputs; each output is a perceptron over the
activated hidden units.

```python
model = tf.keras.Sequential([Dense(n), Dense(2)])
```

**A deep network.** Slide 14 does one thing: stack
more hidden layers. Layer `k` takes the activated outputs of layer
`k - 1`: `zk,i = w0,i^(k) + sum_{j=1..n(k-1)} g(z(k-1),j) wj,i^(k)`. The
full parameter set is `W = {W^(1), W^(2), ...}`, and **training adjusts
all of them at once**. The formula is no different from slide 13's - which
is exactly the point: depth requires no new mechanism, only the same
operation repeated.

#### A1.4 Applying networks and quantifying loss (slides 16-18)

**The running example: "will I pass this class?"**
Slide 16 builds a two-feature model: `x1` is the number of lectures
attended, `x2` the hours spent on the final project. Feeding one student
`x = [4, 5]` through a network with 3 hidden units, the network predicts
**0.1** while the truth is **1**: it says this student will almost
certainly fail, and in fact they passed.

The answer to "why is it wrong?" is simple enough to
be underrated: **the network has not been trained**. Its weights are
still random numbers and it has never seen any data. This slide exists to
motivate the rest of the lecture - we need a way to **measure** the error,
then a way to **reduce** it.

**The loss of one example, and the empirical loss.**
Slide 17 defines the loss as the **cost incurred from an incorrect
prediction**: `L(f(x^(i); W), y^(i))`, where `f(x^(i); W)` is the
prediction and `y^(i)` the truth. Averaging over all `n` observations
gives the **empirical loss**:

```
J(W) = (1/n) * sum_{i=1..n} L(f(x^(i); W), y^(i))
```

The slide lists three other names for the same
quantity: objective function, cost function, empirical risk. And it makes
one key point on its own line: **`J` is a function of the weights `W`**.
The data is fixed; the weights are what we can change. The whole training
section that follows rests on this view.

**Two concrete losses.** Slide 18 places them side
by side by output type:

| Loss function | Use when | Formula |
|---|---|---|
| Binary cross-entropy | The output is a probability in `(0, 1)` | `J(W) = -(1/n) sum_i [ y^(i) log fi + (1 - y^(i)) log(1 - fi) ]` |
| Mean squared error (MSE) | The output is a real number, for example a final exam score | `J(W) = (1/n) sum_i ( y^(i) - f(x^(i); W) )^2` |

With `fi = f(x^(i); W)`. The slide states each one's
character: cross-entropy **heavily penalises confident but wrong
predictions** (because the log of a near-zero number goes to minus
infinity), while MSE **counts large errors much more than small ones**
(because of the square).

#### A1.5 Training: gradient descent and backpropagation (slides 20-22)

**The optimisation problem.** Slide 20 states the
goal: `W* = argmin_W (1/n) sum_i L(f(x^(i); W), y^(i)) = argmin_W J(W)`.
The mental picture is given explicitly: **the loss is a landscape over
weight space** and we are looking for its lowest point. Four steps: (1)
randomly pick a starting `(w0, w1)`; (2) compute the gradient
`∂J(W)/∂W`, the **direction of steepest ascent**; (3) take a small step
in the **opposite** direction; (4) repeat until convergence.

**The gradient descent algorithm.** Slide 21 writes
it as five lines: initialise the weights randomly from `N(0, sigma^2)`;
loop until convergence; compute the gradient `∂J(W)/∂W`; update
`W <- W - eta * ∂J(W)/∂W`; return the weights. The parameter `eta` is the
**learning rate**, and slide 24 will be devoted to choosing it.

**Backpropagation.** Slide 22 answers a concrete
question: *how does a small change in one weight, say `w2`, affect the
final loss `J(W)`?* For the chain `x -> z1 -> ŷ -> J(W)` through weights
`w1` and `w2`, the chain rule gives:

```
∂J(W)/∂w2 = (∂J(W)/∂ŷ) · (∂ŷ/∂w2)
∂J(W)/∂w1 = (∂J(W)/∂ŷ) · (∂ŷ/∂z1) · (∂z1/∂w1)
```

The thing to notice in those two lines: the factor
`∂J/∂ŷ` **reappears** in the second. That **reuse** of already-computed
factors is why gradients "flow backwards" through the layers and why the
algorithm is named backpropagation. Repeat for every weight in the
network, each layer borrowing the gradients of the layers after it;
modern frameworks do this **automatically**.

#### A1.6 Neural networks in practice (slides 24-30)

**Why training is hard.** Slide 24 states that real
loss landscapes are **rugged, with many local minima and steep cliffs**,
then reduces every difficulty to one practical question: what should
`eta` be? Three cases:

| `eta` | Consequence |
|---|---|
| Too small | Converges slowly and gets stuck in false local minima |
| Too large | Overshoots the target, becomes unstable and diverges |
| Just right | Converges smoothly and escapes local minima |

**Adaptive learning rates.** Slide 25 offers two
ideas. Idea 1: try many values and see which is "just right". Idea 2 -
what is actually done: design an **adaptive learning rate** that follows
the landscape, changing with how large the gradient is, how fast learning
is happening, and the size of particular weights. The slide carries a
table of five algorithms with their names in both libraries:

| Algorithm | TensorFlow (`tf.keras.optimizers.*`) | PyTorch (`torch.optim.*`) | Source |
|---|---|---|---|
| SGD | `SGD` | `SGD` | Kiefer & Wolfowitz, 1952 |
| Adam | `Adam` | `Adam` | Kingma et al., 2014 |
| Adadelta | `Adadelta` | `Adadelta` | Zeiler, 2012 |
| Adagrad | `Adagrad` | `Adagrad` | Duchi et al., 2011 |
| RMSProp | `RMSprop` | `RMSprop` | Hinton, 2012 |

The slide also points to further reading:
`ruder.io/optimizing-gradient-descent`.

**Mini-batches while training.** Slide 26 compares
three ways of computing the gradient:

| Approach | Gradient used | Assessment |
|---|---|---|
| Full gradient descent | `∂J(W)/∂W` over all `n` points | Accurate but very heavy computationally |
| Stochastic gradient descent (SGD) | `∂Ji(W)/∂W` at **one single** point `i` | Easy to compute but very noisy |
| Mini-batch SGD | `(1/B) sum_{k=1..B} ∂Jk(W)/∂W` over `B` points | Fast, and a far better estimate of the true gradient |

The slide's two closing lines explain why mini-batch
beats both extremes: a more accurate gradient **allows smoother
convergence and larger learning rates**; at the same time the points in a
batch **run in parallel on GPUs**, so training is fast. This is exactly
where the "hardware" condition from slide 5 pays off.

**Overfitting returns.** Slide 27 rebuilds the
familiar triple - underfitting (the model lacks capacity to learn the
data), the ideal fit (captures the trend and generalises to new points),
overfitting (too complex, extra parameters, generalises poorly) - then
redefines **regularisation** in its own box: *what is it?* a technique
that **constrains the optimisation problem to discourage complex
models**; *why?* to improve generalisation on unseen data.

**Regularisation 1: dropout.** Slide 28 makes five
points. During training, **randomly set some activations to 0**;
typically drop about **50%** of a layer's activations; **a different
random subset is dropped every iteration**; this **forces the network not
to rely on any single node**, so it learns redundant, robust
representations; and **at test time all units are active again**.

```python
tf.keras.layers.Dropout(rate=0.5)
torch.nn.Dropout(p=0.5)
```

**Regularisation 2: early stopping.** Slide 29
describes a two-curve plot: training loss and testing loss against
training iterations. Early on **both fall** - the model is still
underfitting. Later, the training loss **keeps falling** while the testing
loss **turns upward**: that is the moment the model starts memorising the
training set. The rule: **stop at the iteration where testing loss is
lowest, and keep those weights**.

**Lecture A1 summary.** Slide 30 collects everything
into three columns: **the perceptron** (the structural building block,
weighted sum plus bias, non-linear activation, one perceptron draws a
line); **neural networks** (stacking perceptrons into dense layers,
hidden layers and depth, cross-entropy and MSE losses, optimisation
through backpropagation); **training in practice** (adaptive learning
rates, mini-batching, dropout, early stopping). It ends with a pointer to
the lab: *"Deep Learning in Python and music generation with RNNs - open
the notebook and fill in the #TODOs."*

### Lecture A2: Deep Sequence Modeling - Recurrent Networks and Attention (slides 31-62)

#### A2.0 Goal and roadmap (slide 32)

Six items: (1) sequences and why they need new
models; (2) neurons with recurrence, i.e. RNNs; (3) sequence modeling
design criteria; (4) backpropagation through time and gradient issues;
(5) RNN applications and limitations; (6) *"attention is all you need"*.
The goal: **build models that process data in order - from a recurrent
cell with memory, to self-attention, the building block of the
Transformer.**

#### A2.1 Sequences in the wild (slides 34-35)

**Where will the ball go next?** Slide 34 builds a
very compact illustration: from **one** still image of a ball there is no
way to know where it goes; from **a sequence** of its past positions the
answer is obvious. The conclusion is stated generally: sequences are
everywhere - audio, text, stock prices, video, DNA, ECG signals, climate
data, motion - and in every case **the order of the data carries
information a single sample cannot**.

**Four shapes of sequence problem.** Slide 35
classifies by the number of inputs and outputs:

| Shape | Example | Description |
|---|---|---|
| One to one | Binary classification | "Will I pass this course?" |
| Many to one | Sentiment classification | A tweet → positive / negative |
| One to many | Image captioning | Image → "A baseball player throws a ball." |
| Many to many | Machine translation | Sentence → sentence |

How to read the diagram is spelled out: blue circles
are inputs, orange circles outputs, boxes are recurrent cells, and arrows
between boxes **pass state along the sequence**. The "one to one" shape is
exactly lecture A1's problem - the plain network is simply the simplest
special case of this framework.

#### A2.2 Neurons with recurrence: RNNs (slides 37-42)

**From feed-forward networks to time steps.** Slide
37 places two approaches side by side. The first: take a feed-forward net
`x ∈ R^m -> network -> ŷ ∈ R^n` and apply it **independently at every
time step**, i.e. `ŷt = f(xt)`. The problem is stated bluntly: `ŷ2` then
**depends only on `x2`**; the information in `x0` and `x1` is thrown away
and the model has **no notion of order or memory**. The second fixes
exactly that: `ŷt = f(xt, ht-1)` - each step additionally receives
`ht-1`, **the past memory passed on from the previous step**. Folded up,
that is a cell with a loop: **a recurrent cell**.

**The definition of an RNN.** Slide 38 states the
recurrence relation applied at every time step:

```
ht = fW(xt, ht-1)
|    |    |    |
|    |    |    +-- old state
|    |    +------- input
|    +------------ function with weights W
+----------------- cell state
```

**Two properties are stressed**: an RNN **has a
state `ht` updated at each step** as the sequence is processed; and **the
same function and the same parameters `W` are used at every step**. That
second property is precisely the answer to design criterion four on slide
44.

**The intuition in pseudocode.** Slide 39 writes the
four steps out in plain Python:

```python
my_rnn = RNN()
hidden_state = [0, 0, 0, 0]

sentence = ["I", "love", "recurrent", "neural"]

for word in sentence:
    prediction, hidden_state = my_rnn(word, hidden_state)

next_word_prediction = prediction
# >>> "networks!"
```

Four steps: (1) initialise the hidden state to
zeros; (2) loop over the sequence, each step the cell taking the current
word **and** the previous hidden state; (3) it returns an output **and**
an updated hidden state, which is fed back into the loop; (4) the final
prediction is the next word.

**Three weight matrices.** Slide 40 writes out the
two equations of an RNN cell in full:

```
ht  = tanh( Whh' · ht-1  +  Wxh' · xt )     # update the hidden state
ŷt  = Why' · ht                              # the output vector
```

The three matrices have distinct roles: `Wxh` (input
→ hidden), `Whh` (hidden → hidden), `Why` (hidden → output). The `tanh`
non-linearity is chosen for a stated reason: **it keeps the state
bounded**, preventing state values from blowing up across steps.

**The computational graph across time.** Slide 41
draws the RNN **unrolled**: at each step `t` there is an input `xt`, an
output `ŷt` and a loss `Lt`; **the total loss `L` is the sum of the
`Lt`**. The thing to see: the three matrices `Wxh`, `Whh`, `Why` are
**re-used unchanged at every step**, and training backpropagates through
this entire graph.

**From scratch, and in one line.** Slide 42 places a
hand-written `MyRNNCell` class (initialising the three matrices `W_xh`,
`W_hh`, `W_hy` plus a zero state `h`; its `call` method updating `h` with
exactly the `tanh` equation, then computing the output) next to two
library calls:

```python
from tf.keras.layers import SimpleRNN
model = SimpleRNN(rnn_units)

from torch.nn import RNN
model = RNN(input_size, rnn_units)
```

The slide's closing note: the `call` method is
**exactly the two equations from the previous slide** - update `h`, then
compute the output. Nothing is hidden inside the library.

#### A2.3 Sequence modeling design criteria (slides 44-46)

**Four criteria.** Slide 44 lists four things a
sequence model must be able to do: (1) handle **variable-length**
sequences; (2) track **long-term dependencies**; (3) maintain information
about **order**; (4) **share parameters** across the sequence. Then it
asserts that RNNs meet all four. The running example across the following
slides is next-word prediction: *"This morning I took my cat for a
___"*.

**Encoding language for a neural network.** Slide 45
opens with a flat statement: **neural networks cannot interpret words**;
`"deep" -> network -> "learning"` simply does not work, because networks
require **numerical** inputs. The answer is an **embedding**, in three
steps:

| Step | Content |
|---|---|
| 1. Vocabulary | The set of every word in the corpus: this, morning, I, took, my, cat, for, a, walk, ... |
| 2. Indexing | Give each word a number: a → 1, cat → 2, ..., walk → N |
| 3. Embedding | Turn that index into a fixed-size vector |

Step 3 has two forms. **One-hot**:
`"cat" = [0, 1, 0, 0, 0, 0]`, a single 1 at index `i` and zeros
elsewhere. **A learned embedding**: a dense vector in which **similar
words end up close together** (dog near cat). The difference between the
two is the difference between "merely marking which word it is" and
"encoding what the word means".

**The first three criteria, illustrated with real
sentences.** Slide 46 gives exactly one example per criterion, and all
three are worth remembering:

- **Variable length**: *"The food was great"* versus
  *"We visited a restaurant for lunch"* versus *"We were hungry but
  cleaned the house before eating"*. The model must accept any
  length.
- **Long-term dependencies**: *"France is where I
  grew up, but I now live in Boston. I speak fluent ___."* The missing
  word depends on a piece of information far back at the start.
- **Order**: *"The food was good, not bad at all."*
  versus *"The food was bad, not good at all."* **The same words,
  opposite meanings** - a model that ignores order treats the two as
  identical.
- **Parameter sharing**: the same `W` at every step
  means the model applies **at any position, for any sequence
  length**.

#### A2.4 Backpropagation through time (slides 48-52)

**Recalling ordinary backpropagation.** Slide 48
summarises the algorithm in two steps: (1) take the derivative of the
loss with respect to each parameter; (2) shift the parameters to minimise
the loss. The gradient flows from the output layer back to the input
layer. Then it states the RNN difference: **in an RNN the "layers" are
time steps**, so the gradient must also flow backwards **through
time**.

**BPTT.** Slide 49 draws the unrolled graph with
arrows in both directions: a forward pass from `x0` to `xt`, a backward
pass in reverse. The precise description: **errors are backpropagated at
each individual time step and then across all time steps**, from the end
of the sequence back to the beginning. The slide credits the algorithm's
origin: Mozer, *Complex Systems* 1989.

**Exploding and vanishing gradients.** Slide 50
identifies the root cause: computing the gradient with respect to `h0`
involves **multiplying many factors of `Whh`** together, along with
repeated gradient computation. That produces two symmetric failure
modes:

| Failure mode | Cause | Remedy |
|---|---|---|
| Exploding gradients | Many values larger than 1 | Gradient clipping, to shrink oversized gradients |
| Vanishing gradients | Many values smaller than 1 | (1) change the activation function; (2) change the weight initialisation; (3) change the network architecture, use gated cells |

**Why vanishing gradients matter.** Slide 51
explains with a three-step chain: multiply many small numbers together →
errors from further-back time steps carry smaller and smaller gradients →
**the parameters get biased towards capturing only short-term
dependencies**. It then contrasts two sentences: *"The clouds are in the
___"* - a **short** gap, the relevant words `x0`, `x1` sit right beside
the prediction `ŷ3`, so it is easy; and *"I grew up in France, ... and I
speak fluent ___"* - a **long** gap, the clue is many steps earlier and
**its gradient signal has all but vanished** by the time it reaches
back.

**Gated cells: LSTMs.** Slide 52 states the fix:
**use gates to selectively add or remove information within each
recurrent unit**. The mechanism is explained with two operations: a
**sigmoid neural net layer** outputs numbers in `(0, 1)`, and a
**pointwise multiplication** by those numbers lets between 0% and 100% of
the information through - and **that amount is learned**. **LSTM** (Long
Short-Term Memory) networks rely on such a gated cell to track information
across many time steps, thereby **mitigating the vanishing-gradient
problem**.

#### A2.5 RNN applications and limitations (slides 54-55)

**Two example tasks.** Slide 54 places a
many-to-many problem next to a many-to-one problem:

- **Music generation (many to many)**: input is
  sheet music, output the next character of it. `E → F#`, `F# → G`,
  `G → C`, `C → A`: each prediction is **fed back as the next input**, so
  the network composes note by note.
- **Sentiment classification (many to one)**: input
  a sequence of words, output the probability of positive sentiment. *"I
  love this class!"* → `<positive>`. Two tweet examples are given: *"The
  MIT Introduction to Deep Learning is definitely one of the best courses
  ..."* → positive; *"I wouldn't mind a bit of snow right now ... :("* →
  negative.

```python
loss = tf.nn.softmax_cross_entropy_with_logits(y, predicted)
```

**Three limitations of recurrent models.** Slide 55
is the lecture's hinge: it names three weaknesses, and each one is a
reason attention exists in the next part.

| Limitation | Content |
|---|---|
| Encoding bottleneck | The whole history is squeezed into **one single state vector** |
| Slow, not parallelisable | Step `t` **must wait** for step `t - 1` to finish before it can run |
| No long memory | Vanishing gradients lose the long-range dependencies |

Three desired capabilities for an ideal sequence
model: handle a **continuous stream**, be **parallelisable**, and have
**long memory**. The slide tries one alternative and rejects it
immediately: feeding everything into a dense network does remove
recurrence, but it is **not scalable, has no order, and still no long
memory**. The right idea is stated on the last line: **identify and
attend to what's important**.

#### A2.6 Attention is all you need (slides 57-62)

**Intuition: attention as search.** Slide 57
defines attention as **attending to the most important parts of an
input**, instead of scanning every pixel or word equally. Two steps: (1)
identify **which parts to attend to** - much like a search problem; (2)
**extract the features with high attention**. The analogy used is
searching YouTube for "deep learning":

| Symbol | Role in the analogy |
|---|---|
| Query `Q` | What you are looking for: "deep learning" |
| Key `K` | The title of each video (sea turtles, MIT 6.S191, Kobe Bryant) |
| Value `V` | The video itself |

The two matching steps: (1) **compute the attention
mask** - how similar is each key to the query; (2) **extract values based
on attention** - return the values with the highest attention.

**The four steps of self-attention.** Slides 58 and
59 break the mechanism into four steps, listed on both:

1. **Encode position information.** Because the data
   is fed in **all at once** rather than sequentially, order must be
   supplied explicitly: add position information `p0, ..., p6` to the word
   embeddings. The example sentence is *"He tossed the tennis ball to
   serve"*. Notation: `encoding_i = embedding_i ⊕ pi`.
2. **Extract query, key, value.** Three **separate**
   linear layers applied to the **same** positional embedding `E`:
   `Q = E WQ`, `K = E WK`, `V = E WV`.
3. **Compute the attention weighting.** The
   attention score is the **pairwise similarity between each query and
   each key**, measured by the dot product (cosine similarity), then
   passed through a softmax: `softmax( (Q · K') / scaling )`. The softmax
   turns scores into **weights that sum to 1**, i.e. where to attend. The
   example given: in that sentence *"tennis"* attends strongly to *"ball"*
   and *"serve"*.
4. **Extract features with high attention.**
   Multiply those weights by the values:
   `A(Q, K, V) = softmax( (Q · K') / scaling ) · V`.

**A self-attention head.** Slide 60 draws all four
steps as one computational block: three linear layers producing
query/key/value from the same positional encoding → `MatMul` → `Scale` →
`Softmax` → `Matmul`. Three accompanying claims: this block is **one
self-attention head** that can plug into a larger network; **multiple
heads** each attend to a different part of the input (the main object,
the background, a small detail); and attention is **the foundational
building block of the Transformer** (Vaswani et al., 2017).

**Where self-attention is applied.** Slide 61 names
three domains, each with references:

| Field | Application | Source |
|---|---|---|
| Language processing | Transformers: BERT, GPT; text generation, machine translation, question answering, text-to-image generation ("an armchair in the shape of an avocado") | Devlin et al. 2019; Brown et al. 2020 |
| Biological sequences | Protein structure models: predicting the three-dimensional structure from an amino acid sequence | Jumper et al., *Nature* 2021; Lin et al., *Science* 2023 |
| Computer vision | Vision Transformer: cut the image into patches and treat that run of patches as a sequence | Dosovitskiy et al., ICLR 2020 |

The slide's closing line connects directly to what
students use daily: **self-attention is the basis for many large language
models (LLMs)** - the same `Q`, `K`, `V` mechanism, scaled up to billions
of parameters.

**Lecture A2 summary.** Slide 62 gathers six points:
(1) RNNs suit sequence modeling tasks; (2) model sequences via the
recurrence `ht = fW(xt, ht-1)`; (3) train RNNs with backpropagation
through time, watching for exploding and vanishing gradients (clipping,
LSTM-style gated cells); (4) models for music generation, classification,
machine translation and more; (5) self-attention models sequences
**without recurrence**: position encoding, query/key/value, softmax
weighting, weighted values; (6) self-attention is the basis for many
large language models.

### Lecture A3: Deep Computer Vision - Convolutional Neural Networks (slides 63-90)

#### A3.0 Goal and roadmap (slide 64)

Six items: (1) why computer vision, and what
computers "see"; (2) learning visual features; (3) feature extraction with
convolution; (4) convolutional neural networks (CNNs); (5) an architecture
for many applications; (6) summary and lab. The goal is set in a quotation:
*"To know what is where by looking"* - from images, discover **what** is
present in the world, **where**, **what actions** are taking place, and
predict events, by letting a network **learn visual features from pixels
itself**.

#### A3.1 What computers see (slides 66-69)

**How far computer vision has come.** Slide 66 names
four application groups, each with sources: **facial detection and
recognition** (locating eye, nose and mouth landmarks, then using them to
identify a person); **self-driving cars** (a camera image into a network,
steering commands out - end-to-end autonomous navigation); **medicine and
biology** (breast-cancer detection in mammograms, COVID-19 from chest
X-rays, skin-cancer classification - Esteva 2017, McKinney 2020, Wang
2020); and **accessibility** (a phone camera detecting the guideline on a
running track so a blind runner can run unassisted - Google Project
Guideline). The slide closes by naming the common thread: in every case
the pipeline is **eye → neural network → decision**.

**Images are numbers.** Slide 67 is the lecture's
foundation, and its point is one sentence: to a computer **an image is
just a matrix of numbers in `[0, 255]`**. The slide places the grayscale
image a human sees beside the number matrix the computer "sees" (`157 153
174 168 ...`). For an RGB colour image the shape is three-dimensional,
e.g. `1080 × 1080 × 3` - three **colour channels**. Everything else in
the lecture is arithmetic on that matrix.

**Two kinds of vision task.** Slide 68 distinguishes
**regression**, where the output variable takes a continuous value (e.g. a
steering angle), from **classification**, where it takes a class label -
in which case the network can output **the probability of each class**
(e.g. Lincoln 0.80, Washington 0.10, Jefferson 0.05, Obama 0.05). The
slide adds a box on **high-level feature detection**: to classify, you
must identify each category's key features - a face has a nose, eyes and
mouth; a car has wheels, a licence plate and headlights; a house has a
door, windows and steps.

**Why hand-engineered features fail.** Slide 69
draws the old three-step pipeline - domain knowledge → define features →
detect features to classify - then lists **six sources of variation** that
make human-defined features brittle:

| Source of variation | Content |
|---|---|
| Viewpoint variation | The same object seen from another direction |
| Scale variation | The same object at another size |
| Deformation | The object is soft and changes shape |
| Occlusion | Part of the object is hidden |
| Illumination conditions | Different lighting |
| Background clutter | The object blends into the background |
| Intra-class variation | There are a great many different kinds of chair |

The replacement question at the bottom repeats slide
4's point verbatim: can we **learn a hierarchy of features directly from
the data** instead of engineering it? Low level: edges, dark spots. Mid
level: eyes, ears, nose. High level: facial structure (Lee et al., ICML
2009).

#### A3.2 Learning visual features (slides 71-73)

**Fully connected networks lose spatial structure.**
Slide 71 shows why lecture A1's network cannot be used directly on
images. If you flatten a 2D image into a vector of pixel values and
connect every hidden neuron to every input neuron, there are two
consequences. First: **all spatial information is lost** - neighbouring
pixels are treated **no differently** from distant ones. Second: **an
enormous parameter count** - a `1080 × 1080 × 3` image gives **3.5 million
inputs per neuron**. The closing question: how can we use the input's
spatial structure to inform the architecture?

**Using spatial structure.** Slide 72 gives the fix:
**connect patches of the input to neurons in the next layer**, instead of
everything to everything. Each hidden neuron then **only "sees"** the
values in its region. Three concrete steps: connect a patch of the input
layer to a single neuron in the next layer; use a **sliding window** to
define the connections; and the remaining question - how do we weight the
patch so as to detect a particular feature?

**Convolution, in three sentences.** Slide 73
answers that question and names the operation. With a `4 × 4` filter -
i.e. **16 distinct weights** - we apply **that same filter** to `4 × 4`
patches of the input, shifting by **2 pixels** for the next patch. That
"patchy" operation is **convolution**. Three points get their own box:
(1) apply a set of weights, a **filter**, to extract local features; (2)
use **multiple filters** to extract different features; (3) **spatially
share each filter's parameters**.

#### A3.3 Case study: recognising an X (slides 75-78)

**Computers are literal.** Slide 75 sets up the
problem with a line that is funny and exact: the image is represented as a
matrix of pixel values (`+1` white, `-1` black), **and computers are
literal**. We want to classify an X as an X **even when it is shifted,
shrunk, rotated or deformed** - whereas matrix-to-matrix comparison makes
those two images different. The answer is given at once: both images
**share the same local patterns** - a diagonal going down-right, a
diagonal going down-left, and a central crossing. The principle: **detect
the parts, not the whole**.

**Three filters for three features.** Slide 76 gives
three `3 × 3` filters, each catching one feature: the down-right diagonal,
the central cross, the down-left diagonal. The convolution operation is
defined precisely: **place the filter on a patch of the image, multiply
element-wise, and add the outputs**. The number to remember: on a matching
patch of an X **every product is +1, so the sum is 9** - a perfect match;
elsewhere the sum is smaller. That is exactly how a filter "detects" a
feature: with a large number.

**A fully worked example.** Slide 77 carries out a
complete convolution with a `5 × 5` image and a `3 × 3` filter:

```
 1 1 1 0 0                          4 3 4
 0 1 1 1 0      1 0 1               2 4 3
 0 0 1 1 1  ⊛   0 1 0      =        2 3 4
 0 0 1 1 0      1 0 1
 0 1 1 0 0     filter          feature map
    image
```

The top-left patch gives
`1·1 + 1·0 + 1·1 + 0·0 + 1·1 + 1·0 + 0·1 + 0·0 + 1·1 = 4`. Sliding one
pixel at a time (**stride 1**) over a `5 × 5` image with a `3 × 3` filter
yields a **`3 × 3` feature map**. That `4` is the feature map's first
entry.

**Different filters, different features.** Slide 78
gives three classical filters to show that the filter decides which
feature gets extracted:

| Filter | Matrix | Effect |
|---|---|---|
| Sharpen | `[0 -1 0; -1 5 -1; 0 -1 0]` | Boosts the centre pixel against its neighbours |
| Edge detection | `[0 1 0; 1 -4 1; 0 1 0]` | Responds only where the intensity changes; flat regions give 0 |
| Strong edge detection | `[-1 -2 -1; 0 0 0; 1 2 1]` | A Sobel-type filter, stressing horizontal edges |

The slide's most important closing line: in a CNN
**the values in these filters are not hand-designed - they are learned
from data**. The three matrices above merely illustrate what a filter can
do; the network works out for itself which filters are useful.

#### A3.4 Convolutional neural networks (slides 80-85)

**Three operations, one architecture.** Slide 80
draws the whole pipeline: `input image → convolution (feature maps) → max
pooling → (repeat N times) → fully connected → class probabilities`. The
three operations that make a CNN are numbered explicitly: (1)
**convolution**: apply filters to generate feature maps; (2)
**non-linearity**: usually ReLU; (3) **pooling**: a downsampling operation
on each feature map. The closing line: **train the model with image data,
and what is learned is the weights of the filters in the convolutional
layers**.

```python
# TensorFlow
tf.keras.layers.Conv2D / tf.keras.activations.* / tf.keras.layers.MaxPool2D
# PyTorch
torch.nn.Conv2d / torch.nn.ReLU / torch.nn.MaxPool2d
```

**A convolutional layer is just a restricted
perceptron.** Slide 81 is the slide that bolts lecture A3 onto lecture
A1, and deserves careful reading. A hidden-layer neuron does exactly three
things: take inputs from a patch, compute a **weighted sum**, and add a
**bias**:

```
sum_{i=1..4} sum_{j=1..4} w_ij · x_{i+p, j+q}  +  b
```

for hidden-layer neuron `(p, q)` with a `4 × 4`
filter whose weight matrix is `w_ij`. The three steps get named again: (1)
apply a **window of weights**; (2) compute a **linear combination**; (3)
**activate with a non-linear function**. And the conclusion says it
outright: this is **exactly the perceptron from Lecture 1**, differing in
only two respects - restricted to a local patch, and with its **weights
shared across all positions**.

**Three geometric parameters of a convolutional
layer.** Slide 82 defines:

| Concept | Meaning |
|---|---|
| Layer size `h × w × d` | `h`, `w` are the two spatial dimensions; `d` is the **depth**, that is the **number of filters** |
| Stride | The filter's step length: how far the window moves between two patches |
| Receptive field | The positions in the input image that one node is connected to |

```python
tf.keras.layers.Conv2D(filters=d, kernel_size=(h, w), strides=s)
torch.nn.Conv2d(in_channels=3, out_channels=d, kernel_size=(h, w), stride=s)
```

A confusion worth recording: **the output layer's
depth `d` is the number of filters**, not the input image's number of
colour channels (`in_channels=3` is the input, `out_channels=d` the
output).

**Non-linearity and pooling.** Slide 83 handles the
remaining two operations. **ReLU** is applied **after every convolution**;
it is a pixel-by-pixel operation that **replaces all negative values by
zero**: `g(z) = max(0, z)`. The input feature map (black negative, white
positive) becomes a rectified map with only non-negative values. **Max
pooling** with `2 × 2` filters and stride 2:

```
 1 1 2 4
 5 6 7 8        6 8
 3 2 1 0   ->   3 4
 1 2 3 4
```

Two purposes are stated: (1) **reduced
dimensionality**; (2) **spatial invariance** - a small shift of the
feature within the patch does not change the maximum. Point (2) is
precisely the answer to the shifted-X problem from slide 75.

```python
tf.keras.layers.MaxPool2D(pool_size=(2, 2), strides=2)
torch.nn.MaxPool2d(kernel_size=(2, 2), stride=2)
```

**Representation learning in deep CNNs.** Slide 84
closes the circle opened on slide 4. Each convolutional layer builds on
the previous layer's feature maps; the first learns **simple, generic**
filters, deeper ones learn **parts and then whole objects**. The result is
exactly the three levels promised on slide 4: conv layer 1 gives edges and
dark spots, layer 2 eyes/ears/nose, layer 3 facial structure. The closing
line: **this is the hierarchy from Lecture 1, now realised by learned
filters** (Lee et al., ICML 2009).

**The whole classification CNN, read left to
right.** Slide 85 draws the full pipeline and **cuts it into two named
halves**:

```
INPUT → [CONV + RELU → POOL] → [CONV + RELU → POOL] → FLATTEN → FULLY CONN. → SOFTMAX
        |_____________ feature learning _____________|   |____ classification ___|
```

The **feature learning** half does three things: (1)
learn features in the input image through convolution; (2) introduce
non-linearity through an activation function (real-world data is
non-linear); (3) reduce dimensionality and preserve spatial invariance
with pooling. The **classification** half makes three points: the CONV and
POOL layers output **high-level features** of the input; a fully connected
layer uses those features to classify; and the output is expressed as a
probability with the **softmax**:
`softmax(yi) = e^(yi) / sum_j e^(yj)`.

#### A3.5 One feature extractor, many heads (slides 86-90)

**One backbone, four applications.** Slide 87 states
the general architecture: a `CONV + RELU + POOL × N` block does **feature
learning**, and depending on the head attached you get four different
problems: **classification**, **object detection**, **segmentation**, and
**probabilistic control**. The classification example is given in detail:
a CNN-based breast-cancer screening system **outperformed expert
radiologists** at detecting breast cancer from mammograms (higher
sensitivity at equal specificity), including cases the radiologist missed
and the AI caught (McKinney et al., *Nature* 2020).

**Object detection.** Slide 88 separates the two
problems clearly: **classification** is `image → CNN → label` ("taxi");
**detection** is `image → CNN → label plus a bounding box (x, y, w, h)`,
and with several objects a whole list: taxi `(x1, y1, w1, h1)`, person
`(x2, y2, w2, h2)`, ... Three approaches are laid out in order of
evolution:

| Approach | Content | Problem |
|---|---|---|
| Naive | Classify every box at every scale, position and size with a CNN | **Far too many inputs** |
| R-CNN | (1) input image; (2) extract about 2000 region proposals; (3) compute CNN features on each region warped to a common size; (4) classify the regions | Slow (many regions) and brittle (the region proposals are hand-made) - Girshick et al., CVPR 2014 |
| Faster R-CNN | The image **passes through the convolutional feature extractor only once**; a **region proposal network** learns the candidate regions itself, and those regions are then classified | Fast, and learnable end to end - Ren et al., 2016 |

That evolution repeats the lecture's whole message:
**replace the hand-made part with a learned part**, exactly as
convolutional filters replaced hand-engineered features.

**Semantic segmentation and continuous control.**
Slide 89 covers the two remaining heads:

- **Semantic segmentation with fully convolutional
  networks**: label **every pixel** (cow, grass, sky). All layers are
  convolutional, downsampling to low-resolution features and
  **upsampling** back to `H × W` predictions. The upsampling functions:
  `tf.keras.layers.Conv2DTranspose`, `torch.nn.ConvTranspose2d` (Long et
  al., CVPR 2015).
- **Continuous control - navigation from vision**:
  inputs are raw perception `I` (camera) and a coarse map `M` (GPS);
  output is a **probability distribution over control commands**
  (steering). Convolutional features from the cameras and from the map are
  **concatenated** and mapped to a mixture of Gaussians over steering,
  trained end to end with `L = -log P(theta | I, M)`, **without any human
  labelling** (Amini et al., ICRA 2019).

**Lecture A3 summary.** Slide 90 gathers it into
three columns: **foundations** (why computer vision, representing images
as matrices of numbers, convolutions for feature extraction); **CNNs**
(the conv - ReLU - pooling architecture, application to classification,
learned filter hierarchies); **applications** (detection, segmentation,
captioning, control; security, medicine, robotics).

## Gaps / notes

- **No code files, data files or lab notebook in
  `raw/`.** Slide 30 instructs *"open the notebook and fill in the
  #TODOs"* and slide 64 mentions "summary and lab", but the `Chapter05/`
  folder holds only the one PDF. All the code in the chapter consists of
  one- to three-line snippets printed on slides, not runnable programs.
  This is the first K32 chapter shipped without practice material.
- **Physical page 86 of the PDF is entirely blank** -
  no text, no image, no footer. That is why 91 physical pages produce only
  90 numbered slides. Most likely a stray page emitted by LaTeX at the
  Part 17 break rather than missing content: slide 85 completes the CNN
  section cleanly and slide 86 (physical page 87) opens Part 17
  normally.
- **No exercises, discussion questions or group
  assignments.** Chapter 3 carried the instructor's 5 review questions
  (slide 111) and 3 group assignments; Chapter 4 had 6 group discussion
  topics (slide 82) plus the slide-83 assignment. This chapter has **no
  slide of that kind** - each of the three lectures ends on its summary
  slide and stops. Nor is there any exam date, deadline or grade
  weight.
- **LSTMs are named but not opened up.** Slide 52
  explains the gating idea with two operations (a sigmoid layer, a
  pointwise multiply) and says LSTMs rely on a gated cell, but **no slide
  writes out the forget/input/output gates, nor the cell-state equation
  for `ct`**. GRUs appear once, in brackets. Anyone needing the full LSTM
  equations must look elsewhere.
- **The Transformer is presented only at the level of
  one attention head.** Slide 60 builds a complete self-attention head and
  notes that multiple heads look at different parts, but **no slide draws
  the full Transformer block** - no residual connections, layer
  normalisation, position-wise feed-forward network, or encoder/decoder
  structure. The chapter stops at the brick and does not raise the whole
  building.
- **A gap between this chapter's mathematical level
  and the earlier ones.** The three lectures use partial derivatives, the
  chain rule, transpose notation and gradients as if already familiar,
  whereas Chapters 3 and 4 largely stopped at sums, means and covariance
  matrices. Slides 22 and 50 are the two steepest points. No revision
  slide bridges that gap.
- **Nothing on computational cost or data
  requirements.** Slide 5 names GPUs and big data as the conditions for
  deep learning's rise, but nowhere does the chapter say **how much data**
  or **how many machine-hours** a usable network needs, nor when **not**
  to use deep learning in favour of the simpler models from Chapter
  3.

## Links

- [[perceptron]] - the foundational brick: weighted
  sum, bias, dot product, the worked example on slide 10.
- [[activation-functions]] - sigmoid, tanh, ReLU, and
  the argument that a 100-layer linear network is one layer.
- [[dense-layers-and-deep-networks]] - from the
  multi-output perceptron to hidden layers and deep networks.
- [[loss-functions-and-empirical-risk]] - the loss of
  one example, the empirical loss, binary cross-entropy versus MSE.
- [[gradient-descent]] - the loss landscape, the
  five-line algorithm, the role of the learning rate.
- [[backpropagation]] - the chain rule, factor reuse,
  why gradients flow backwards.
- [[learning-rate-and-optimizers]] - the three cases
  for `eta`, adaptive learning rates, the table of 5 optimisers.
- [[mini-batch-gradient-descent]] - full versus
  stochastic versus mini-batch, and the parallelisation argument.
- [[dropout-and-early-stopping]] - the two
  regularisation techniques specific to neural networks.
- [[sequence-modeling-design-criteria]] - the four
  criteria, the four sequence shapes, the three example sentences.
- [[word-embedding]] - vocabulary, indexing, one-hot
  versus a learned embedding.
- [[recurrent-neural-network]] - the recurrence
  relation, the three weight matrices, the unrolled graph.
- [[backpropagation-through-time]] - BPTT, exploding
  and vanishing gradients, the long-term dependency problem.
- [[lstm-gated-cells]] - gates, the pointwise sigmoid
  multiply, and the three remaining RNN limitations.
- [[self-attention]] - the search analogy, `Q`/`K`/
  `V`, positional encoding, the softmax, the Transformer and LLMs.
- [[convolution-operation]] - filters, element-wise
  multiply and add, feature maps, the X example and the `5 × 5`
  example.
- [[convolutional-neural-network]] - the conv - ReLU
  - pooling architecture, stride, receptive field, the learned filter
  hierarchy.
- [[computer-vision-tasks]] - images as number
  matrices, the failure of hand-engineered features, and the four heads on
  one backbone.
- [[chapter03-supervised-learning-k32]] - Chapter 3
  is where overfitting, regularisation, test sets and evaluation metrics
  were first taught; this chapter meets them again with two entirely
  different tools.
- [[chapter04-unsupervised-learning-k32]] - Chapter 4
  reduced dimensions with PCA, a linear transform with a closed-form
  solution; this chapter reduces them by pooling and by learned filters,
  with no closed form at all.
- [[chapter02-python-jupyter-k32]] - Chapter 2 taught
  the Python infrastructure, but **not TensorFlow, PyTorch, Keras or
  JAX** - the four libraries this chapter assumes.
- [[tran-thi-tuan-anh]] - course instructor.

## Citation

`raw/Lecture Notes/K32/Chapter05/
intro_deep_learning.pdf`, slides 1-90 (91 physical pages; physical page 86
is blank, and from there on the footer number is the physical page minus
one). The `Chapter05/` folder contains no other file.
