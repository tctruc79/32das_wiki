---
type: concept
title: "Dense Layers, Hidden Layers and Deep Networks"
tags: [chapter-5, k32, deep-learning, dense-layer, hidden-layer, neural-networks]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

A **dense** (fully connected) layer is a set of
perceptrons placed in parallel over the **same** inputs: output `i` has
`zi = w0,i + sum_{j=1..m} xj wj,i`. Because every input connects to every
output, the layer is called dense. Stack such layers, with layer `k`
taking the **activated** outputs of layer `k - 1`, and you have a **deep
network**:

```
zk,i = w0,i^(k) + sum_{j=1..n(k-1)} g( z(k-1),j ) · wj,i^(k)
```

The full parameter set is
`W = {W^(1), W^(2), ...}`, and **training adjusts all of them at
once**.

## Explanation

### A dense layer is one matrix multiply

Slide 12 makes an observation with a large practical
consequence: because every input connects to every output, **the whole
layer is one matrix multiply plus an activation**. That is why neural
networks run fast on GPUs - such hardware exists to multiply matrices, and
a 50-layer network is merely 50 matrix multiplies in sequence. The
"hardware" condition slide 5 names as one of three reasons for deep
learning's rise works precisely because of this property.

```python
layer = tf.keras.layers.Dense(units=2)                  # TensorFlow
layer = nn.Linear(in_features=m, out_features=2)        # PyTorch
```

### What "hidden" literally means

Slide 13 inserts one layer between input and output.
The hidden layer computes `zi = w0,i^(1) + sum_j xj wj,i^(1)`; the output
computes `ŷi = g(w0,i^(2) + sum_j g(zj) wj,i^(2))`. The word **hidden**
should be read in its most literal sense: **we never observe or supervise
those values directly**. The training data says only what `x` is and what
`y` should be; **no row** of it says what the middle layer ought to
contain.

This is where a neural network differs in kind from
every model taught in Chapter 3. In a regression or a decision tree, each
parameter attaches to a variable a human chose and named. In a neural
network the hidden layers **invent their own intermediate variables**, and
nobody knows in advance what they will stand for. That is both the
strength (the network learns features a human would not have thought of)
and the weakness (individual parameters cannot be interpreted - see
[[computer-vision-tasks]] on the learned hierarchy).

### Depth needs no new mechanism

The most notable thing about slide 14 is that **it
introduces no new concept at all**. Layer `k`'s formula is identical to
the first layer's, differing only in that its input is the previous
layer's activated output. Depth is therefore **the same operation
repeated**, not new machinery - which is why one training algorithm
([[backpropagation]]) works for a 2-layer network and a 200-layer network
alike.

```python
model = tf.keras.Sequential([Dense(n), Dense(2)])
```

### Why dense layers fail on images

Slide 71 gives two reasons, both worth remembering
because they are what gave rise to convolutional networks. First, feeding
a 2D image into a dense layer requires **flattening** it into a vector,
and then **all spatial information is lost** - neighbouring pixels are
treated no differently from distant ones. Second, the parameter count
explodes: a `1080 × 1080 × 3` image gives **3.5 million inputs per
neuron**. The fix is to restrict each neuron to a local patch and share
weights, i.e. [[convolution-operation]].

Dense layers are not abolished, only pushed to the
end. Slide 85 shows that in a classification CNN the first half
(convolution and pooling) does **feature learning**, then the features are
**flattened** and fed into **one fully connected layer** to classify. The
dense layer is still where the final decision is made; it is merely no
longer where raw pixels are read.

## Appears in

[[chapter05-deep-learning-k32]] - slides 12 (the
multi-output perceptron, a dense layer as one matrix multiply), 13 (the
single hidden layer network, what "hidden" means), 14 (the deep network,
layer `k`'s formula, `W = {W^(1), W^(2), ...}`), 30 (the summary: stacking
perceptrons into dense layers, hidden layers and depth), 37 (a
feed-forward net applied independently per time step is not enough), 71
(dense layers losing spatial structure, 3.5 million inputs per neuron), 85
(the fully connected layer in a CNN's classification half).

## Related

- [[perceptron]] - the unit placed in parallel to
  form a layer.
- [[activation-functions]] - without it all depth
  collapses into one linear layer.
- [[backpropagation]] - how gradients traverse many
  layers to update `W^(1)`, `W^(2)`, ...
- [[dropout-and-early-stopping]] - dropout randomly
  switches off units in a hidden layer.
- [[convolutional-neural-network]] - the architecture
  that exists because dense layers fail on images.
- [[recurrent-neural-network]] - the same layer plus
  a state carried across time steps.
