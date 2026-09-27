---
type: concept
title: "The Convolution Operation and Filters"
tags: [chapter-5, k32, deep-learning, convolution, filter, feature-map, computer-vision]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

A convolution **places a filter on a patch of the image,
multiplies element-wise, and adds the products** (slide 76). Sliding that
filter over every patch of the image yields a **feature map**. Slide 73 states
the operation's three principles:

1. Apply a set of weights, a **filter**, to extract
   **local** features.
2. Use **multiple filters** to extract different
   features.
3. **Share** each filter's parameters spatially.

## Explanation

### The problem convolution exists to solve

Slide 75 sets up the problem with a line that is funny
and exact: the image is a matrix of pixel values (`+1` white, `-1` black),
**and computers are literal**. We want to classify an X as an X **even when
shifted, shrunk, rotated or deformed** - whereas matrix-to-matrix comparison
makes the two images entirely different.

The answer is given at once and is the lecture's founding
principle: both images **share the same local patterns** - a diagonal going
down-right, a diagonal going down-left, and a central crossing. The principle:
**detect the parts, not the whole**.

### The number 9: how a filter "detects" a feature

Slide 76 gives three `3 × 3` filters, each catching one
feature of an X: the down-right diagonal `[1 -1 -1; -1 1 -1; -1 -1 1]`, the
central cross `[1 -1 1; -1 1 -1; 1 -1 1]`, the down-left diagonal
`[-1 -1 1; -1 1 -1; 1 -1 -1]`.

The number to remember: on a matching patch of an X
**every product is +1 so the sum is 9** - a perfect match; elsewhere the sum
is smaller. That is exactly how a filter detects a feature: **with a large
number**. There is no comparison and no `if` - only a sum, and the larger the
sum the more the patch resembles the feature the filter is
looking for.

### A fully worked example

Slide 77 carries out a complete convolution with a
`5 × 5` image and a `3 × 3` filter:

```
 1 1 1 0 0                          4 3 4
 0 1 1 1 0      1 0 1               2 4 3
 0 0 1 1 1  ⊛   0 1 0      =        2 3 4
 0 0 1 1 0      1 0 1
 0 1 1 0 0     filter          feature map
    image
```

The top-left patch gives
`1·1 + 1·0 + 1·1 + 0·0 + 1·1 + 1·0 + 0·1 + 0·0 + 1·1 = 4` - the feature map's
first entry. Sliding one pixel at a time (**stride 1**) over a `5 × 5` image
with a `3 × 3` filter gives a `3 × 3` feature map. The size relation is worth
remembering: an `n × n` image with an `f × f` filter at stride 1 gives an
`(n - f + 1) × (n - f + 1)` map - i.e. **convolution shrinks the image**, and
that is one of the two ways dimensions are reduced in a CNN (the other being
pooling).

### The filter decides which feature is extracted

Slide 78 gives three classical filters to show
this:

| Filter | Matrix | Effect |
|---|---|---|
| Sharpen | `[0 -1 0; -1 5 -1; 0 -1 0]` | Boosts the centre pixel against its neighbours |
| Edge detection | `[0 1 0; 1 -4 1; 0 1 0]` | Responds only where the intensity changes; flat regions give 0 |
| Strong edge detection | `[-1 -2 -1; 0 0 0; 1 2 1]` | A Sobel-type filter, stressing horizontal edges |

The second and third filters are worth noting
structurally: **their entries sum to zero**. That is why "flat regions give
0" - if every pixel in the patch is equal, the positive and negative
coefficients cancel, so the filter responds only where there is **change**. The
sharpening filter, by contrast, sums to 1 and so preserves the image's overall
brightness.

And the slide's most important closing line: in a CNN
**the values in these filters are not hand-designed - they are learned from
data**. The three matrices above merely illustrate what a filter can do; the
network works out which filters are useful for its problem. This is exactly
where convolution departs from classical image processing, in which filters
like Sobel's are chosen by a human.

### The three principles and the three problems they solve

The three principles on slide 73 are not a loose list;
each targets one specific problem of
[[dense-layers-and-deep-networks]] as set out on slide 71:

| Principle | The problem it solves |
|---|---|
| Local filters | They keep the **spatial structure** - a neuron sees only one patch, so position carries meaning |
| Many filters | One filter catches one feature; many are needed to describe an image |
| Parameter sharing | It cuts the parameter count from millions down to **16 weights for one `4 × 4` filter**, and makes a feature recognisable **at any position** |

The third principle deserves further thought: weight
sharing is not only economical, it **encodes an assumption about the world** -
that an edge in the top-left corner is still an edge when it appears in the
bottom-right. That assumption holds for images, which is why convolution wins
in computer vision but is not the default tool for every data type.

## Appears in

[[chapter05-deep-learning-k32]] - slides 73 (the "patchy"
operation defined, a `4 × 4` filter with 16 weights, shifting by 2 pixels, the
three principles), 75 (the X problem, `+1`/`-1`, "detect the parts"), 76 (three
`3 × 3` filters, the precise definition, the number 9), 77 (the `5 × 5` example
with a `3 × 3` filter, the calculation giving 4, the `3 × 3` feature map), 78
(three classical filters and the closing "they are learned from data"), 72 (the
patch-connection idea and the sliding window), 81 (the convolutional neuron's
formula).

## Related

- [[convolutional-neural-network]] - the architecture
  stacking this with ReLU and pooling.
- [[dense-layers-and-deep-networks]] - the problems the
  three convolution principles target.
- [[perceptron]] - a convolutional neuron is a perceptron
  restricted to a patch.
- [[computer-vision-tasks]] - why hand-engineered features
  fail, and images as number matrices.
