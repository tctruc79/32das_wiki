---
type: concept
title: "Computer Vision Tasks and the Feature Hierarchy"
tags: [chapter-5, k32, deep-learning, computer-vision, object-detection, segmentation]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Definition

Computer vision's goal is set in a quotation on slide 64:
*"To know what is where by looking"* - from images, discover **what** is present
in the world, **where**, **what actions** are taking place, and predict events.
The precondition for doing any of that is a very simple realisation (slide 67):
to a computer **an image is just a matrix of numbers in `[0, 255]`** -
`1080 × 1080 × 3` for an RGB colour image, with three colour
channels.

## Explanation

### Two kinds of task, and four heads

Slide 68 distinguishes two basic kinds: **regression**,
where the output takes a continuous value (e.g. a steering angle), and
**classification**, where it takes a class label - the network then returning
**the probability of each class** (Lincoln 0.80, Washington 0.10, Jefferson
0.05, Obama 0.05). Slide 87 expands this into four heads attached to **one and
the same** `CONV + RELU + POOL × N` feature-learning block:

| Output | Task | Example in the chapter |
|---|---|---|
| Classification | Image → label | Breast cancer screening, beating expert radiologists (McKinney et al., *Nature* 2020) |
| Object detection | Image → label **and** bounding box | R-CNN, Faster R-CNN (slide 88) |
| Segmentation | Image → a label for **every single pixel** | Fully convolutional networks (Long et al., CVPR 2015) |
| Probabilistic control | Image → a distribution over control commands | End-to-end navigation (Amini et al., ICRA 2019) |

Slide 87's key point is that **the front half does not
change**: one feature extractor serves all four problems, only the part attached
at the end differs. That follows directly from the two-half split on slide 85 -
see [[convolutional-neural-network]].

### Why hand-engineered features fail: six sources of variation

Slide 69 draws the old three-step pipeline - domain
knowledge → define features → detect features to classify - then lists six
things that make it brittle:

| Source of variation | Content |
|---|---|
| Viewpoint variation | The same object seen from another direction |
| Scale variation | The same object at another size |
| Deformation | The object is soft and changes shape |
| Occlusion | Part of the object is hidden |
| Illumination conditions | Different lighting |
| Background clutter | The object blends into the background |
| Intra-class variation | There are a great many different kinds of chair |

The list matters because it is the whole case for the deep
learning approach: not that hand-engineered features are **wrong**, but that
covering those six (in fact seven) sources of variation with human-written rules
makes the number of rules explode uncontrollably. The replacement question at
the bottom repeats slide 4 verbatim: can we **learn a hierarchy of features
directly from the data**?

### The feature hierarchy: the chapter's spine

This idea recurs three times at widely separated points,
and the three occurrences form one complete argument:

| Slide | Role |
|---|---|
| 4 | **States it**: edges → eyes, nose, ears → facial structure; "nobody programmed any of these layers"; and that stacking of levels is what the word **deep** means |
| 69 | **Repeats it as the motive**: exactly those three levels, but put as the question that arises once hand-made features have failed (Lee et al., ICML 2009) |
| 84 | **Proves it**: the convolutional filters that were learned really do stack into exactly those three levels - layer 1 edges and dark blobs, layer 2 eyes, ears and noses, layer 3 facial structure |

Reading those three slides together is the fastest way to
see why the chapter is ordered as it is. Slide 4 promises, slide 69 explains why
the promise is needed, slide 84 shows it delivered. And the mechanism that makes
it work is the **receptive field widening with depth** - see
[[convolutional-neural-network]].

### Object detection: three approaches, one evolution

Slide 88 separates the two problems clearly:
**classification** is `image → CNN → label` ("taxi"); **detection** is
`image → CNN → label plus a bounding box (x, y, w, h)`, and with several objects
a whole list. Three approaches:

| Approach | Content | Problem |
|---|---|---|
| Naive | Classify every box at every scale, position and size | **Far too many inputs** |
| R-CNN | Extract about 2000 region proposals, compute CNN features on each warped region, classify the regions | Slow and brittle, because the **region proposals are hand-made** (Girshick et al., CVPR 2014) |
| Faster R-CNN | The image **passes through the feature extractor only once**; a **region proposal network** learns the candidate regions itself | Fast, and learnable end to end (Ren et al., 2016) |

That evolution repeats the lecture's whole message:
**replace the hand-made part with a learned part**. On slide 78 it was filters
replacing hand-engineered features; here it is a region proposal network
replacing region proposal rules. The same principle applied at two different
levels of one system.

### The two remaining heads

**Semantic segmentation** (slide 89): label **every pixel**
(cow, grass, sky). All layers are convolutional, downsampling to low-resolution
features then **upsampling** back to `H × W` predictions
(`tf.keras.layers.Conv2DTranspose`, `torch.nn.ConvTranspose2d`; Long et al.,
CVPR 2015). The architectural difference: no fully connected layer at the end,
because the output is not one label but **an image of labels**.

**Continuous control** (slide 89): inputs are raw
perception `I` (camera) and a coarse map `M` (GPS); output is a **probability
distribution over control commands** (steering). Convolutional features from the
cameras and the map are **concatenated** and mapped to a mixture of Gaussians
over steering, trained end to end with `L = -log P(theta | I, M)`, **without any
human labelling** (Amini et al., ICRA 2019). That last detail is worth noting:
this is the chapter's only example where training **needs no human-labelled
data**, putting it closer to unsupervised learning than the other three
heads.

### How far computer vision has come

Slide 66 names four application groups: **facial
recognition** (locating eye, nose and mouth landmarks then identifying a
person); **self-driving cars** (camera image in, steering commands out);
**medicine and biology** (breast cancer in mammograms, COVID-19 from chest
X-rays, skin cancer - Esteva 2017, McKinney 2020, Wang 2020); **accessibility**
(a phone camera detecting a running track's guideline so a blind runner can run
unassisted - Google Project Guideline). The closing line names the common
thread: in every case the pipeline is **eye → neural network →
decision**.

## Appears in

[[chapter05-deep-learning-k32]] - slides 64 (the "to know
what is where by looking" goal), 66 (the four application groups, "eye → network
→ decision"), 67 (images as number matrices, `1080 × 1080 × 3`), 68 (regression
versus classification, per-class probabilities, high-level feature detection),
69 (the three-step manual pipeline, the seven sources of variation, the
hierarchy question - Lee ICML 2009), 4 (the hierarchy first stated), 84 (the
hierarchy proven with learned filters), 87 (four heads on one backbone, McKinney
*Nature* 2020), 88 (classification versus detection, R-CNN and Faster R-CNN), 89
(semantic segmentation and continuous control), 90 (the A3
summary).

## Related

- [[convolutional-neural-network]] - the architecture that
  realises this hierarchy.
- [[convolution-operation]] - the operation whose filters
  each level learns.
- [[dense-layers-and-deep-networks]] - why an image cannot
  go straight into a dense layer.
- [[classification-k32]] - the classification problem from
  Chapter 3, now with images as input.
- [[self-attention]] - Vision Transformers are a second way
  to solve these same problems.
- [[loss-functions-and-empirical-risk]] - each head comes
  with its own loss.
