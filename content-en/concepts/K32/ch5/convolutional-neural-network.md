---
type: concept
title: "Convolutional Neural Networks (CNNs)"
tags: [chapter-5, k32, deep-learning, cnn, pooling, relu, computer-vision]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

A CNN is a network of **three repeated operations**
closing with a fully connected layer (slide 80):

```
input image → convolution (feature maps) → max pooling → (×N) → fully connected → class probabilities
```

1. **Convolution**: apply filters to generate feature
   maps.
2. **Non-linearity**: usually ReLU.
3. **Pooling**: a downsampling operation on each feature
   map.

And what gets trained is **the weights of the filters in
the convolutional layers**.

## Explanation

### A convolutional layer is a restricted perceptron

Slide 81 is the slide bolting lecture A3 onto lecture A1,
and deserves careful reading. A hidden-layer neuron does exactly three things:
take inputs from a patch, compute a **weighted sum**, add a **bias**:

```
sum_{i=1..4} sum_{j=1..4} w_ij · x_{i+p, j+q}  +  b
```

for neuron `(p, q)` with a `4 × 4` filter whose weight
matrix is `w_ij`. The three steps are named again: (1) apply a **window of
weights**; (2) compute a **linear combination**; (3) **activate with a
non-linear function**. The conclusion says it outright: this is **exactly the
perceptron from Lecture 1**, differing in two respects only - restricted to a
local patch, and with its **weights shared across all positions**.

### Three geometric parameters

| Concept | Meaning |
|---|---|
| Layer size `h × w × d` | `h`, `w` are the two spatial dimensions; `d` is the **depth**, that is the **number of filters** |
| **Stride** | The filter's step length: how far the window moves between two patches |
| **Receptive field** | The positions in the input image that one node is connected to |

```python
tf.keras.layers.Conv2D(filters=d, kernel_size=(h, w), strides=s)
torch.nn.Conv2d(in_channels=3, out_channels=d, kernel_size=(h, w), stride=s)
```

A confusion worth recording: **the output's depth `d` is
the number of filters**, unrelated to the input image's colour channels - in
the PyTorch line, `in_channels=3` is three RGB channels coming in while
`out_channels=d` is `d` feature maps going out. A layer with 64 filters
produces depth 64 even from a single-channel grayscale image.

The **receptive field** is the subtlest of the three and
explains why depth matters: a neuron in the first convolutional layer sees only
a small patch, but one in the third sees a patch of patches of patches - its
receptive field on the original image **widens with depth**. That is the
mechanism by which high layers "see" a whole face while low layers see only
edges.

### ReLU and max pooling

Slide 83 handles the remaining two. **ReLU** is applied
**after every convolution**; it is a pixel-by-pixel operation **replacing all
negative values by zero**: `g(z) = max(0, z)`. The input feature map (black
negative, white positive) becomes a rectified map with only non-negative
values.

**Max pooling** with `2 × 2` filters and stride 2 - take
the largest value in each `2 × 2` block:

```
 1 1 2 4
 5 6 7 8        6 8
 3 2 1 0   ->   3 4
 1 2 3 4
```

Two purposes are stated: (1) **reduced dimensionality**;
(2) **spatial invariance**. The second deserves elaboration because it is
precisely the answer to the shifted-X problem of slide 75: if a feature moves
one pixel within a `2 × 2` block, **the maximum does not change**, so the
pooling layer's output is unchanged. The network therefore recognises the
feature without its needing to sit in exactly the same place.

```python
tf.keras.layers.MaxPool2D(pool_size=(2, 2), strides=2)
torch.nn.MaxPool2d(kernel_size=(2, 2), stride=2)
```

### Representation learning: the circle closes

Slide 84 is where the chapter proves slide 4's promise.
Each convolutional layer builds on the previous layer's feature maps; the first
learns **simple, generic** filters, deeper ones learn **parts and then whole
objects**. The result is exactly the three promised levels: conv layer 1 gives
**edges and dark spots**, layer 2 **eyes, ears, nose**, layer 3 **facial
structure**. The closing line: **this is the hierarchy from Lecture 1, now
realised by learned filters** (Lee et al., ICML 2009).

### The two halves of a classification CNN

Slide 85 draws the full pipeline and **cuts it into two
named halves**:

```
INPUT → [CONV + RELU → POOL] → [CONV + RELU → POOL] → FLATTEN → FULLY CONN. → SOFTMAX
```

The **feature learning** half does three things, exactly
slide 80's three operations: learn features by convolution; introduce
non-linearity through an activation (real data is non-linear); reduce
dimensions and preserve spatial invariance by pooling. The **classification**
half makes three points: the conv and pool layers output **high-level
features**; a fully connected layer uses them to classify; and the output is
expressed as a probability with the **softmax**:
`softmax(yi) = e^(yi) / sum_j e^(yj)`.

This two-half split is lecture A3's most important
architectural idea, because it allows **replacing the second half while keeping
the first** - see [[computer-vision-tasks]] on the four different heads attached
to one backbone.

## Appears in

[[chapter05-deep-learning-k32]] - slides 80 (the three
operations, the pipeline, code in both libraries, "learn the weights of the
filters"), 81 (the convolutional neuron's formula, "exactly the perceptron from
Lecture 1"), 82 (`h × w × d`, stride, receptive field, `Conv2D`/`Conv2d`), 83
(ReLU after every convolution, `2 × 2` max pooling at stride 2, the two
purposes), 84 (the three learned feature levels, Lee ICML 2009), 85 (the full
pipeline, the two halves, the softmax), 5 (deep CNNs for digit recognition
dating to 1995), 90 (the A3 summary).

## Related

- [[convolution-operation]] - the first operation and its
  three principles.
- [[activation-functions]] - ReLU is the second operation;
  the softmax closes the pipeline.
- [[perceptron]] - a convolutional neuron is a restricted,
  weight-sharing perceptron.
- [[dense-layers-and-deep-networks]] - the fully connected
  layer is still where the final decision is made.
- [[computer-vision-tasks]] - four heads attached to the
  same feature-learning half.
- [[self-attention]] - Vision Transformers solve the same
  image problem with a sequence tool.
- [[pca-k32]] - for contrast on dimension reduction: PCA has
  a closed form, pooling and learned filters do not.
