---
type: concept
title: "Loss Functions and the Empirical Loss"
tags: [chapter-5, k32, deep-learning, loss-function, cross-entropy, mse]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

The **loss** of one example is the **cost incurred
from an incorrect prediction**: `L(f(x^(i); W), y^(i))`, where
`f(x^(i); W)` is the network's prediction and `y^(i)` the truth. Averaging
over all `n` observations gives the **empirical loss**:

```
J(W) = (1/n) · sum_{i=1..n} L( f(x^(i); W), y^(i) )
```

The same quantity is also called the **objective
function**, the **cost function**, or the **empirical risk** - slide 17
lists all three names.

## Explanation

### The key point: `J` is a function of the weights, not of the data

Slide 17 sets out on its own line the statement the
whole training section rests on: **`J` is a function of the weights `W`**.
The data is fixed - we cannot change `x` or `y`; the only thing we can
change is the weights. That view turns machine learning into a pure
optimisation problem: find the `W` that minimises `J(W)`.
[[gradient-descent]] is merely one way to solve it, and it works precisely
because `J` is differentiable in `W`.

### Two losses, chosen by output type

| Loss function | Use when | Formula |
|---|---|---|
| Binary cross-entropy | The output is a probability in `(0, 1)` | `J(W) = -(1/n) sum_i [ y^(i) log fi + (1 - y^(i)) log(1 - fi) ]` |
| Mean squared error (MSE) | The output is a real number, for example a final exam score | `J(W) = (1/n) sum_i ( y^(i) - f(x^(i); W) )^2` |

with `fi = f(x^(i); W)`. Slide 18 states each one's
character, and that is the part more worth remembering than the
formula.

**Cross-entropy heavily penalises confident but
wrong predictions.** The reason is the `log`: if the true label is 1 and
the network predicts `0.001`, the term `y log f = log(0.001)` is a large
negative number, so the loss is large. A prediction of `0.6` for a label
of 1 is penalised only mildly. The function therefore does not merely
reward being right, it **punishes misplaced confidence** - a property
well suited to problems where a confident wrong answer is
costly.

**MSE counts large errors far more than small
ones**, because it squares the deviation: being off by 10 units is
penalised 100 times as much as being off by 1, not 10 times. This is the
same MSE metric taught in Chapter 3 for evaluating regression models; what
is new here is that it is not only used to **report** model quality but is
**the thing training minimises**.

### Why both exist and cannot be swapped

The loss must match the **range of the output**.
Cross-entropy takes `log f`, so it only makes sense when `f` lies in
`(0, 1)` - i.e. when the final layer uses a sigmoid or a softmax. Using
cross-entropy for a network predicting a final grade from 0 to 10 is
meaningless, since the log of a number above 1 or of a negative number is
no use here. Conversely, MSE on a classification problem runs but performs
poorly, because it does not punish misplaced confidence hard enough. That
is why slide 18 lays them out as two parallel columns rather than one
list.

### The loss in the chapter's code

Slide 54 gives the chapter's only line of loss code,
for the sentiment classification task - the multi-class version of
cross-entropy:

```python
loss = tf.nn.softmax_cross_entropy_with_logits(y, predicted)
```

Another loss appears on slide 89, notable for
belonging to neither of the two types above: the continuous-control task
trains with `L = -log P(theta | I, M)`, i.e. **minimising the negative log
likelihood** of the steering angle under a mixture of Gaussians. That is
the same maximum-likelihood principle met in Chapter 3, placed inside a
neural network.

## Appears in

[[chapter05-deep-learning-k32]] - slides 17 (the
definition of a single example's loss, the empirical loss, three other
names, and the statement that `J` is a function of `W`), 18 (binary
cross-entropy and MSE, each one's character), 16 (the 0.1-versus-1 example
that motivates needing a measure), 20 (`J(W)` inside the `argmin`
problem), 41 (an RNN's total loss as the sum of the `Lt`), 54
(`softmax_cross_entropy_with_logits`), 89 (negative log likelihood for
continuous control).

## Related

- [[gradient-descent]] - the algorithm that minimises
  this very `J(W)`.
- [[backpropagation]] - how `∂J(W)/∂W` is computed
  for each weight.
- [[mini-batch-gradient-descent]] - three ways to
  estimate `J`'s gradient at different costs.
- [[perceptron]] - `f(x; W)` is exactly the network
  of those perceptrons.
- [[activation-functions]] - the final layer's
  activation decides which loss is usable.
- [[model-evaluation-metrics-k32]] - in Chapter 3 MSE
  was a reporting metric; here it is what gets minimised.
- [[dropout-and-early-stopping]] - these two do
  **not** modify `J`; they modify the training procedure.
