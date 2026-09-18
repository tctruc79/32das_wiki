---
type: source
title: "Chapter 4 (K32) - Unsupervised Learning: Clustering and Principal Component Analysis"
tags: [chapter-4, k32, unsupervised-learning, clustering, k-means, hierarchical-clustering, dbscan, pca, dimension-reduction, pcr]
created: 2026-09-18
updated: 2026-09-18
status: complete
source_file: "raw/Lecture Notes/K32/Chapter04/VNP_DataScience_Unsupervised_Learning_2026.pdf"
---

## Metadata

- **Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City -
  Vietnam-Netherlands Programme.
- **Cohort**: K32 (2026, current cohort).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: 86 (matches the PDF's physical
  page count; the footer numbers up to `86 / 86`). PDF metadata: authored
  in LaTeX with the Beamer class, created 2026-09-18 - released on the
  very day of this ingest.
- **Position in the course**: this is K32's **second
  algorithm chapter** and the other half of the machine learning picture.
  Chapter 3 covered the whole **supervised** branch (a label `y` exists);
  this one covers the whole **unsupervised** branch (`x` only):
  clustering to reduce the number of **rows**, and principal component
  analysis to reduce the number of **columns**. In the 2025 cohort the
  same material was split across **2 separate chapters** (Clustering and
  PCA); the 2026 cohort merges them into one file, adds an entire Part 3
  on combining PCA with other algorithms, and adds a full list of
  practical pitfalls. **Per the cohort separation rule** (CLAUDE.md),
  this page links to no K31 page - comparisons are stated in plain text
  only.
- **Filename does not follow the chapter-number
  pattern**: the file is `VNP_DataScience_Unsupervised_Learning_2026.pdf`
  (no `Chapter04` string), but the user placed it in
  `raw/Lecture Notes/K32/Chapter04/` - so this wiki treats it as K32's
  Chapter 4. This is the second chapter in a row whose filename carries
  no chapter number, exactly as with Chapter 3.
- **Companion files in the same folder**: **7 Python
  scripts** in `PythonCode/` (4 K-Means, 3 PCA) and **2 image files** in
  `Data/` (`Image1.jpg`, `Image2.jpg`). This is the first time the course
  material uses **images** as practice data instead of numeric tables.
  See the dedicated section below - two of the scripts contain real
  bugs.

## Summary

This chapter answers a single question: **what do
you do when the data has no label?** All 86 slides are organised around
two descriptive tools, and one warning repeated at least four
times.

**Two tools, two directions of reduction.**
Clustering groups similar **observations**, reducing the table's rows into
K groups; principal component analysis (PCA) replaces p correlated
**variables** with m uncorrelated components, reducing its columns.
Clustering works on a **distance** `d(xi, xj)` and returns a label per
observation; PCA works on a **covariance matrix** `S` and returns a score
vector per observation. Both require standardisation first, and both have
one key parameter you must justify yourself: K for clustering, m for
PCA.

**The warning that runs through the chapter.** Slide
8 says it outright: K-Means **always** returns K clusters and PCA
**always** returns components, even from pure noise. The algorithm never
tells you whether the structure it found is real - the analyst must. That
is why the chapter devotes slide 45 to a **7-point checklist to run
before presenting** a clustering, and closes on slide 81 with one
sentence: both tools are **descriptive**; they generate hypotheses about
structure, they do not test them.

**Notable new material in the 2026 version.**
Compared with the 2025 material, this deck adds: K-Means' explicit
objective function with the note that the problem is NP-hard and Lloyd's
algorithm only finds a local optimum (slide 22); the **k-means++**
initialisation with probability proportional to `D(x)^2` (slide 24); a
dedicated section on **DBSCAN** and **Gaussian mixture models (GMM)**
with guidance on choosing between methods (slide 44); the
`TSS = WSS + BSS` decomposition (slide 16); the **SVD** route instead of
forming the covariance matrix (slide 62); the whole of Part 3 on
**combining PCA with clustering, classification and regression** (slides
75-79), including **principal component regression (PCR)** and a **data
leakage** warning with the `Pipeline` fix; and a list of **alternatives**
for when PCA is not enough (Kernel PCA, t-SNE/UMAP, autoencoders, factor
analysis, Sparse PCA, Robust PCA) on slide 73.

**The practical part.** Part 4 holds the one-slide
summary of both tools (slide 81), **6 group discussion topics** (slide
82), the **assignment**: replicate one Kaggle mini project with 4
mandatory report items (slide 83), **5 project ideas using Vietnamese
data** from GSO, PCI and the World Bank (slide 84), and a further-reading
list that makes ISLR chapter 12 the standard reference (slide 85). Slide
85 also sets one task before the next session: run the slide-30 K-Means
code on the `make_blobs` data and bring your elbow plot.

## Key content

### Opening: outcomes and roadmap (slides 2-3)

Slide 2 lists 5 learning outcomes: distinguish
supervised from unsupervised learning and pick the right tool for a
question; compute and interpret distance measures; run and diagnose
K-Means and hierarchical clustering while justifying the number of
clusters; explain PCA both geometrically and algebraically, and read a
scree plot and loadings; and chain PCA with clustering, classification or
regression without leaking information. The roadmap has 5 parts: Part 0
the machine learning landscape, Part 1 clustering, Part 2 PCA, Part 3
combining PCA with other algorithms, Part 4 practice and
assignments.

### 0. The Machine Learning Landscape (slides 5-9)

**The locating diagram (slide 5).** Machine learning
splits into 3 branches: **supervised** (data comes as pairs `(xi, yi)` -
regression when `y` is numeric, classification when `y` is categorical),
**unsupervised** (`xi` only - clustering with K-Means/hierarchical, and
dimension reduction with PCA), and **reinforcement learning** (a reward
signal - policy learning). The slide's key idea: supervised learning
predicts a known target, unsupervised learning describes structure when
no target exists.

**The supervised benchmark (slide 6).** This slide
compresses all of Chapter 3 into one page: data is n pairs `(xi, yi)`
with `xi` in `R^p`; the goal is to learn `f` so that `f(x)` is close to
`y` on new data; the loss is MSE for regression or misclassification
rate/cross-entropy for classification; evaluation uses a hold-out set and
cross-validation. The important note in the right column: PCA is **very
often** used as a preprocessing step for exactly these supervised models
(that is Part 3), and clustering results are frequently turned into a
**feature** for them.

**The same points, two questions (slide 7).** The
illustration puts them side by side: on the left the colours are given
and the question is "where is the boundary?"; on the right there are no
colours and the question is "are there groups at all?" The same `x`; what
differs is whether the colours are given or are what you are trying to
discover.

**The choice table (slide 8).** Six rows: input data
(`(xi, yi)` versus `xi` only); question (predict a known quantity versus
describe unknown structure); ground truth (exists versus does not);
evaluation (external and objective via CV error, versus internal and
partly subjective via silhouette, variance explained, usefulness); main
risk (overfitting versus finding structure that is not there); course
examples (regression, classification versus clustering, PCA). This slide
carries the chapter's strongest warning, repeated on slides 25, 45, 76
and 81.

**Notation used throughout (slide 9).** Needed to
read the formulas: `n` observations, `p` variables, `xi` observation i (a
vector in `R^p`), `xih` the value of variable h for observation i, `X`
the `n x p` data matrix, `K` the number of clusters, `Ck` the index set
of cluster k, `|Ck|` its size, `mu_k` the centroid (mean vector) of
cluster k, `d(xi, xj)` the distance between two points, `S` the sample
covariance matrix (`p x p`), `R` the sample correlation matrix,
`lambda_m` the m-th eigenvalue, `v_m` the m-th eigenvector (loading
vector), `Z` the matrix of component scores, `m` the number of components
retained. Slide 17 adds a very useful anti-confusion note: **h indexes
variables** (1..p), **k indexes clusters** (1..K).

### 1. Clustering (slides 11-45)

#### 1.1 What is clustering (slides 11-13)

Clustering is the organisation of unlabelled data
into similarity groups called **clusters**; formally, assigning the n
observations into K clusters `C1, ..., CK`. A cluster is a collection of
items similar to each other and dissimilar to items in other clusters. A
valid partition must satisfy two conditions: **mutual exclusivity** (`Ck`
intersect `Ck'` is empty for k not equal k' - no observation belongs to
two clusters) and **exhaustiveness** (the union of all `Ck` is the whole
index set - every observation is assigned).

Slide 12 states the core difference from
classification in one sentence: classification is supervised, **the
classes exist before the analysis**; clustering is unsupervised, **the
groups only exist after it - and they may be an artefact**.

Slide 13 lists the 4 things clustering needs: a
**proximity measure** (similarity `S(xi, xj)`, large when two points are
alike, or dissimilarity i.e. distance `d(xi, xj)`, small when they are
alike); a **criterion function** to score a candidate clustering (e.g.
the within-cluster sum of squares); an **algorithm** to search for a good
clustering under that criterion; and a **decision rule for K**. Key idea:
change the distance and you change the clusters - the proximity measure
is a **modelling choice**, not a technical detail.

#### 1.2 Distance measures (slides 14-19)

**Three distances and a data-type table (slide
14).** Euclidean distance (L2, straight line) is the square root of the
summed squared differences; Manhattan distance (L1, city block) is the
sum of absolute differences. Both are special cases of the Minkowski
distance of order q: `q = 1` gives Manhattan, `q = 2` Euclidean, and `q`
to infinity gives Chebyshev (the largest single-coordinate gap). The
table: continuous data uses Euclidean; outlier-heavy data Manhattan;
text/documents cosine; binary data Jaccard or Hamming; mixed types
Gower; strongly correlated variables Mahalanobis.

**The single most common mistake: forgetting to
standardise (slide 15).** The slide builds a very sharp numerical
example. Two customers described by monthly income (VND million) and
number of visits: A is (20, 2), B is (22, 14). In the original units the
Euclidean distance is the root of `2^2 + 12^2`, i.e. 12.17 - visits
dominate. Merely switching income to VND (20,000,000 versus 22,000,000)
sends the distance to roughly 2,000,000 and **makes visits invisible**.
After standardising each variable via `x' = (x - mean) / sd`, every
variable contributes on a common scale, so the result reflects the
**pattern** in the data rather than the **measurement unit**. The rule in
bold: any distance-based method (K-Means, hierarchical, KNN, SVM)
**requires** standardised inputs unless all variables already share a
meaningful unit.

**Evaluating a clustering (slide 16).** Two opposed
criteria: **intra-cluster cohesion** (are points in the same cluster
close to their centroid, measured by the within-cluster sum of squared
errors - WCSS or SSE) and **inter-cluster separation** (are the
centroids far apart, measured by the between-cluster sum of squares). A
good clustering is both compact and well separated, and one identity ties
the two together: `TSS = WSS + BSS`, where TSS is a constant independent
of the partition. Consequence: **reducing WSS is the same thing as
increasing BSS** - the two goals are one.

**Within-cluster variation W(Ck) (slide 17).** The
slide gives two formulas and states that they are equivalent. The
pairwise definition: `W(Ck)` is the summed squared distance between
**every pair** of points in the cluster, divided by `|Ck|`. The centroid
form (far cheaper to compute, and **this is what K-Means actually
optimises**): `W(Ck)` equals twice the summed squared distance from each
point to the centroid `mu_k`, where `mu_k` is the mean of the cluster's
points. Their equivalence is why K-Means only needs to hold K centroids
rather than an `n x n` distance matrix.

Slides 18-19 are a **hand-worked example** of
distance computation with its solution, presented as images in the
deck.

#### 1.3 How many clusters (slides 20-21)

**Two philosophies (slide 20).** Group (a) **fix K
in advance**: partitional methods - K-Means, K-Medoids, Gaussian
mixtures - fast, scaling well with large n, but you must justify K.
Group (b) **do not fix K**: hierarchical methods build the whole nested
family for every K at once; density methods (DBSCAN) infer the number
from the data; you choose K **after** seeing the structure.

**The elbow method (slide 21).** `WCSS(K)` is the
summed squared distance from each point to its centroid, over all K
clusters. The property that decides how it is used: WCSS **always falls**
as K rises, and at `K = n` it is zero - so you **cannot minimise WCSS**
to choose K. Instead look for the **elbow**: the point after which extra
clusters buy little extra compactness. The slide's example runs 285, 149,
50 and then only 50, 39, 29 - the marginal gain collapses after `K = 3`.
The attached warning: the elbow is a **visual heuristic**; a smooth curve
means there is no elbow, and probably **no real cluster
structure**.

#### 1.4 K-Means (slides 22-31)

**The objective first, the algorithm second (slide
22).** This is the most valuable new item in the 2026 clustering section:
the slide states **what problem K-Means solves** before describing how.
The problem: find the partition `C1, ..., CK` minimising the summed
squared distance from each point to its centroid. That problem is
**NP-hard** in general, so in practice an iterative heuristic is used
(Lloyd's algorithm): (1) initialise K centres; (2) iterate to
convergence, alternating the **assignment step** (compute each point's
distance to the K centroids, assign it to the nearest) and the **update
step** (move each centroid to the mean of its members); (3) stop when no
assignment changes, or the WCSS change falls below a tolerance. The
mathematical guarantee: each step can only decrease WCSS, so the
algorithm **always converges** - but to a **local optimum**, not
necessarily the global one.

**One pass, illustrated (slide 23).** Three panels:
initialise (place K centres, random or via k-means++), assign (each point
takes the colour of its nearest centre), update (centres move to the mean
of their members). Steps 2 and 3 repeat until no point changes
colour.

**Initialisation matters: k-means++ (slide 24).**
The problem with random initialisation: two starting centres inside the
same true cluster can trap the algorithm in a poor local optimum - and
**you would never know**, because it still converges. The k-means++
algorithm (Arthur and Vassilvitskii, 2007; now the `scikit-learn`
default): (1) pick the first centre uniformly at random from the data;
(2) pick each subsequent centre with probability proportional to
`D(x)^2`, where `D(x)` is the distance from x to the nearest centre
already chosen; (3) repeat until K centres are chosen, then run standard
K-Means. The practical rule: spread the initial centres out, and **always
restart several times** (`n_init`), keeping the solution with the lowest
WCSS.

**Strengths and limitations (slide 25).** Strengths:
simple and easy to explain to non-technical stakeholders; fast, roughly
`O(n K p I)` per run; scales to large n (mini-batch variants scale
further); centroids are **directly interpretable** as each group's
"typical" profile. Limitations: K must be chosen first; it only finds
**spherical, similarly-sized** clusters - it will split one elongated
cluster and merge two thin ones; it is sensitive to scale and to outliers
(means are not robust - use K-Medoids/PAM instead); it converges to a
local optimum so results depend on initialisation; and it assumes all
variables are numeric and Euclidean distance is meaningful. Key idea:
K-Means **does not test whether clusters exist** - it **imposes** K
spherical clusters on whatever you give it.

Slides 26-29 are illustration and interactive
practice: an image example (source: ACTEX), the iterations on a real data
set, a small application, and two websites to try yourself - METU's
K-Means simulator and Naftali Harris' "Visualising K-Means Clustering",
the second of which lets you **choose the initialisation and watch the
algorithm fail**.

**The Python example (slides 30-31).** The code uses
the current `scikit-learn` API and **already includes the diagnostics**,
unlike the `.py` files shipped with the chapter: generate data with
`make_blobs` (300 points, 3 centres), **standardise immediately** with
`StandardScaler` (the in-code comment shouts ALWAYS scale first), sweep
`k` from 1 to 8 with `init="k-means++"`, `n_init=20`, `max_iter=300`,
`tol=1e-4`, collecting `inertia_` into a WCSS list and `silhouette_score`
into a silhouette list (only from `k = 2`), pick `best_k` as the
silhouette argmax (plus 2, since silhouette starts at `k = 2`), then
refit and plot. The closing note: from `scikit-learn` 1.4 onwards
`n_init` defaults to `"auto"`, so you must **set it explicitly** for
reproducible results.

#### 1.5 Applications of K-Means (slides 32-33)

**Logistics - hotel supply chain optimisation (slide
32).** A hotel supply chain with 618 locations served by 5 to 30
suppliers. Clustering the locations by geography and demand **defines
delivery zones**, and each centroid becomes a **candidate depot**. The
algorithm uses real-time data to find the transport network with the
lowest real cost.

**Agriculture - diagnosis of grape leaf diseases
(slide 33).** Each pixel is an observation described by its colour
channels (for example in L\*a\*b\* space). K-Means segments the leaf
image into regions: healthy tissue, lesion, background. The extracted
lesion region is then **passed to a supervised classifier** to identify
the specific disease. The value of the unsupervised step: it removes the
need to **hand-label every pixel**. This is the same pattern as the
colour-reduction script shipped with the chapter
(`Example3.7_KMeans_ReduceColors.py`), only with a different end
purpose.

#### 1.6 Hierarchical clustering (slides 34-40)

**Why an alternative to K-Means is needed (slide
34).** Three reasons: K-Means demands the number of clusters up front;
its result depends on the K initial centroids, which are random; and in
many situations **it is not clear how many clusters are needed**. Hence
hierarchical clustering is more suitable: it produces **every value of K
in one run**, the result is displayed as a **dendrogram** - a tree of
nested merges - and you read off the number of clusters by **cutting the
tree at a chosen height**. The trade-off is cost: `O(n^2)` memory and
`O(n^2 log n)` time, so it is impractical beyond a few tens of thousands
of points.

**The agglomerative algorithm (slide 35).** Start by
treating each observation as its own cluster (n clusters); repeat two
steps: (1) identify the two closest clusters, (2) merge them; continue
until all observations are in one cluster. Two directions:
**agglomerative** (bottom-up, the standard) and **divisive** (top-down,
rarely used because it is more expensive). The key note: **merges are
irreversible**. A point placed in the wrong branch early can never move -
unlike K-Means, which reassigns everything every iteration.

**Linkage: how to measure the distance between two
clusters (slide 36).** Three illustrated options - **single** (nearest
pair), **complete** (farthest pair), **average** (mean of all pairs) -
and a 4-row table of behaviour and what to watch for: **single** linkage
finds long, chained shapes and must be watched for "chaining", where one
bridge point merges two genuinely separate groups; **complete** gives
compact, roughly equal-sized clusters but breaks up genuinely elongated
ones; **average** is a compromise with less interpretable geometry; and
**Ward** merges so as to minimise the increase in WCSS, requires
Euclidean distance, and is the **usual default**.

Slides 37-38 are a **hand-worked example** building
a dendrogram with complete linkage, showing the successive
merges.

**Reading and cutting a dendrogram (slide 39).**
Four things to know: the height of a horizontal bar is **the distance at
which those two clusters merged**; a horizontal cut at height h gives one
clustering, and **the number of vertical lines it crosses is K**; for
example cutting at 3.3 gives {A, B, C} and {D, E}, cutting at 2.0 gives
{A, B}, {C}, {D, E}; and you should look for a **tall vertical gap** - a
large jump in merge height means the two branches are genuinely far
apart. The attached warning: **do not over-read the horizontal order**.
The tree can be flipped at any node, so proximity along the bottom axis
**is not meaningful**.

#### 1.7 K-Means versus hierarchical clustering (slide 41)

An 8-row comparison table, the single most
memorisable slide in Part 1:

| Criterion | K-Means | Hierarchical |
|---|---|---|
| Number of clusters | Fixed in advance | Decided afterwards, by cutting the tree |
| Output | One flat partition | A full nested tree |
| Reproducible? | No - depends on initialisation | Yes - deterministic |
| Complexity | Roughly `O(nKpI)`, scales well | `O(n^2)` memory; poor beyond 10-50 thousand points |
| Reassignment | Points can move between iterations | Merges are irreversible |
| Cluster shape | Spherical, similar sizes | Depends on the linkage |
| Outliers | Distort the centroids | Often isolated as singleton branches |
| Best for | Large n, known K | Small n, exploring structure |

#### 1.8 Other applications of clustering (slides 42-43)

Seven applications: **customer segmentation** by RFM
(recency, frequency, monetary value) to target campaigns - the most
common commercial use; **identifying fake news** from content, by
clustering articles by their word vectors and inspecting which clusters
carry unreliable sources; **marketing and sales**, finding people who
share characteristics with those who responded to a past campaign;
**document analysis**, organising large collections into topics without a
taxonomy; **anomaly and fraud detection**, where points far from every
centroid or inside very small clusters deserve a second look; **regional
economics**, grouping provinces by socio-economic indicators to design
differentiated policy; and **portfolio construction**, clustering assets
by return correlation to diversify across genuinely distinct
groups.

#### 1.9 Beyond K-Means and hierarchical (slide 44)

**DBSCAN - density-based.** Two parameters:
`epsilon` (neighbourhood radius) and `minPts`. A cluster is a **dense
region**; points in sparse regions are labelled **noise**. It **finds K
by itself** and handles arbitrary shapes (crescents, rings), but
struggles when clusters have very different densities.

**Gaussian mixture models (GMM).** Models the data
as a mixture of K Gaussians, fitted by the EM algorithm. **Soft
assignment**: each point receives a probability `P(cluster k | x)` rather
than a hard label. It allows **elliptical, differently-sized** clusters -
K-Means is the special case with spherical, equal covariance. K can be
chosen by BIC or AIC, i.e. a **genuine model-selection criterion** rather
than a visual heuristic like the elbow.

**How to choose among the 4 methods** (the slide's
closing line): spherical blobs and large n go to K-Means; odd shapes or
expected noise go to DBSCAN; overlapping groups where you want
probabilities go to GMM; small n where you want to **see** the structure
goes to hierarchical.

#### 1.10 Clustering pitfalls - the 7-point checklist (slide 45)

This slide is the checklist to run **before
presenting** a clustering, and is the most practically valuable slide in
the chapter:

1. **Did you standardise?** Unscaled variables let
   the largest-variance one decide everything.
2. **Did you justify K?** Show the elbow and the
   silhouette, not a number pulled from the air.
3. **Are the clusters stable?** Re-run on bootstrap
   samples or a different seed. If the segments change completely, they
   are not real.
4. **Would random data give the same picture?**
   K-Means partitions uniform noise happily. The gap statistic tests
   exactly this.
5. **Is the distance appropriate?** Euclidean on
   categorical dummies is usually meaningless - use Gower or
   K-Modes.
6. **Did outliers drive the result?** Check for tiny
   clusters of one or two points.
7. **Can you name each cluster?** Profile the
   centroids on the original variables. A segment with no interpretable
   story is unlikely to be actionable.

The slide's key idea: **a clustering is a
hypothesis, not a finding.** Report it with the diagnostics that make it
credible.

### 2. Principal Component Analysis (slides 47-73)

#### 2.1 What is PCA (slides 47-53)

**Definition and goal (slide 47).** PCA was invented
by Pearson (1901) and Hotelling (1933) and is still the most widely used
multivariate method. The idea: summarise data with p variables (p often
large) by a smaller set of m composite variables, with m much smaller
than p. The p original variables are p dimensions; the m composites are
the **principal components**. Each component is a **linear combination**
of the original variables:
`z_i1 = v_11 x_i1 + v_21 x_i2 + ... + v_p1 x_ip`. The goal: reduce
dimensionality without much loss of information - achieved by building
the components so that they **capture as much variance as possible**. The
slide's key idea: PCA treats **variance as a proxy for information**;
that assumption is both its greatest strength and its main
limitation.

**What PCA is used for (slide 48).** Classic uses:
reduce dimensions; find patterns in high-dimensional data; visualise
high-dimensional data in 2-3 dimensions; remove multicollinearity before
regression; compress images and signals; de-noise data. Uses in economics
and finance: **building composite indices** (competitiveness,
socio-economic status, financial development) from many correlated
indicators; extracting **common yield-curve factors** (level, slope,
curvature); constructing **risk factors** from large panels of asset
returns; and summarising **survey batteries** into a few latent
constructs. An important distinction: PCA is a **descriptive
transformation** explaining **total** variance; **factor analysis** is a
**statistical model** explaining **shared (common)** variance that
assumes latent factors exist. They often give similar answers, but they
**answer different questions**.

**The idea through a simple example (slides
49-51).** Take 100 students with Physics and Statistics grades. The
question on slide 49: **which grade discriminates between students
better?** If one subject has far more spread, that subject alone
suffices. Slide 50 changes the picture: now the cloud is slanted, and the
question becomes **what is the best way to compare the students now?**
Slide 51 answers: the direction of maximum variation is a **slanted
line** - neither axis alone captures it - so you must take a **linear
combination** of the two grades to get the best single summary.

**Rotating the coordinate system (slide 52).** The
principal components are unit vectors along the new axes: **PC1 points in
the direction of maximum spread**; **PC2 is the direction of maximum
remaining spread, constrained to be perpendicular to PC1**. The thing to
remember: you are **only rotating the axes** - **no information is lost
until a component is dropped**. For the slide's data: PC1 has direction
`(0.73, 0.69)`, eigenvalue 2.098, 94.4% of the variance; PC2 has
direction `(-0.69, 0.73)`, eigenvalue 0.125, 5.6%. The conclusion: **one
number per student retains 94% of the variation**.

#### 2.2 Choosing the principal components (slides 54-62)

**Everything starts from the covariance (slide
54).** The sample covariance between two variables is the sum of
`(Xi - Xbar)(Yi - Ybar)` divided by `n - 1`. It measures **linear
co-movement**: zero means no linear association, positive means they move
together, negative means opposite directions. The important warning:
**covariance is not correlation**. Its size depends on the units of X and
Y, so it **cannot be compared across variable pairs**. The correlation
`r = cov(X, Y) / (sX sY)` is the unit-free version, bounded in
`[-1, 1]`. **This is exactly why PCA on standardised data (i.e. on the
correlation matrix) is usually preferred.**

**The general p-dimensional case (slide 56).** PCA's
objective is to rotate the axes of the p-dimensional space to new
positions (the **principal axes**) such that: principal axis 1 has the
highest variance; axis 2 the next highest; ... and axis p the lowest; and
**the covariance between every pair of principal axes is zero** - the
principal axes are uncorrelated. Taking the first m components defines
the **m-dimensional hyperplane of best fit** to the data. The slide gives
two statements of the same objective and stresses their equivalence:
**maximise variance** (`max v' S v` subject to `||v|| = 1`) or **minimise
reconstruction error** (the summed squared distance between `xi` and its
projection `Vm Vm' xi`). **Both are solved by the same eigenvectors of
S.**

**The covariance matrix (slide 57).** To describe
the association between 2 variables we use the covariance; for p
variables (p greater than 2) we use the **covariance matrix S**, whose
`(i, j)` entry is `cov(xi, xj)`. Three properties to remember: S is
**symmetric** (`cov(x, y) = cov(y, x)`) and **positive semi-definite**;
**its diagonal holds the variances**, and **its trace (the diagonal sum)
is the total variance** in the data; and in linear algebra, **the
eigenvalues and eigenvectors of S give us the principal components**.
Because S is symmetric its eigenvalues are real and its eigenvectors can
be chosen mutually orthogonal - **exactly the "uncorrelated axes"
property we asked for**.

**Eigenvalues and eigenvectors (slide 58).** Given
the covariance matrix A: the solutions of `det(A - lambda I) = 0` are
A's **eigenvalues**; solving `(A - lambda_m I) v = 0` for each
`lambda_m` gives the corresponding **eigenvector** `v_m`; the diagonal
sum of A is the **trace**, representing total variance in the data; the
eigenvalues in decreasing order
`lambda_1 >= lambda_2 >= ... >= lambda_p` **are the variances of the
scores on each principal axis**; and **the eigenvalues sum to the
trace**. In matrix form `A = V Λ V'`, where V holds the eigenvectors in
its columns and Λ is the diagonal matrix of eigenvalues; the component
scores are then `Z = Xc V`, with `Xc` the centred data.

**Interpreting the pieces (slide 59).** Each
eigenvector contains p values - the **loadings** - representing each
original variable's contribution to that principal axis. The m-th
eigenvalue is **the variance explained by the m-th axis**, and the
proportion explained is `EVR_m = lambda_m / sum of lambda_j`. The sum of
the first m eigenvalues is the variance explained by the m-dimensional
summary. The slide gives **4 standard answers to how many components to
keep**: (1) **Kaiser's rule** - on standardised data, keep components
with `lambda_m > 1`, since they explain more than a single original
variable would; (2) the **scree plot** - keep the components before the
"elbow"; (3) **cumulative variance** - keep enough to reach a target,
e.g. 80% or 90%; (4) **cross-validation** - if PCA feeds a predictive
model, choose the m that minimises validation error.

**Reading a scree plot (slide 60).** The worked
example uses 8 correlated socio-economic indicators, `n = 200`,
standardised. The eigenvalue table: PC1 is 4.281 (53.5%), PC2 is 2.029
(25.4%, cumulative 78.9%), PC3 drops to 0.474 (5.9%), then 0.310, 0.276,
0.236, 0.229, 0.165. **All three rules agree here**: keep 2 components,
retaining 78.9% of the variance while cutting the dimension from 8 to 2.
This is a model example - in practice the three rules often **disagree**,
and then choosing m becomes a decision that must be justified.

**Interpreting loadings - where the economics comes
back in (slide 61).** The loadings table for the same 8-indicator example
(correlation-matrix PCA): PC1 (53.5%) has all loadings **positive and
similar** (GRDP per capita 0.37, industrial output 0.36, FDI inflow 0.39,
firm density 0.28, schooling years 0.35, literacy rate 0.35, health
spending 0.39, internet access 0.33) - a **size or general development
factor**: provinces score high when they do well on everything, so use it
as a **composite development index**. PC2 (25.4%) has **negative**
economic loadings and **positive** social ones (firm density -0.48, GRDP
per capita -0.35, FDI -0.26 versus schooling +0.40, literacy +0.38,
health +0.29) - a **contrast factor** separating provinces that are
economically strong but socially lagging from the reverse. The sign
warning: **eigenvector signs are arbitrary**; software may return `-v1`,
the interpretation is unchanged, but **flip signs for readability before
reporting**.

**An equivalent route: the singular value
decomposition (slide 62).** In practice software **does not form the
covariance matrix**. It applies the SVD directly to the centred data
matrix `Xc` (`n x p`): `Xc = U D V'`, where the columns of **V** are the
loading vectors (eigenvectors of `Xc' Xc`), **UD** is the matrix of
principal component scores Z, and `D = diag(d1, ..., dp)` holds the
**singular values**, related to the eigenvalues by
`lambda_m = d_m^2 / (n - 1)`. Why it matters: the SVD is **numerically
more stable** (it never squares the data), it **works when p is greater
than n**, and it is what `sklearn.decomposition.PCA` and R's `prcomp()`
use underneath. Knowing this also explains why `prcomp()` is preferred to
the older `princomp()`.

#### 2.3 The 7-step workflow and why step 2 is not optional (slides 63-64)

**The seven steps (slide 63).** (1) Get the data -
`X`, `n x p`; (2) **standardise** (or at least centre) the variables,
giving `Xc`; (3) compute the covariance matrix `S` or the correlation
matrix `R`, `p x p`; (4) compute its eigenvalues and eigenvectors (by
eigendecomposition or SVD, giving `Λ` and `V`); (5) **choose how many
components to keep** (scree plot, Kaiser's rule); (6) project the data
`Z = Xc Vm`, giving an `n x m` matrix; (7) **interpret the loadings and
report**. Note that step 7 - interpretation - is inside the workflow, not
an optional extra.

**Why step 2 is not optional (slide 64).** Using
covariances only makes sense if **all variables share the same unit**.
And even then, variables with large variances will **dominate** the
components - a variable in VND will swamp one in years. The fix:
standardise each variable to zero mean and unit variance via
`X' = (X - mean) / sd`. After standardisation every variable has variance
1, so the covariances **become correlations**: **PCA on standardised data
= PCA on the correlation matrix R**. A very memorable consequence:
`trace(R) = p`, so **the average eigenvalue is exactly 1** - and **that
is where Kaiser's rule comes from**. When **not** to standardise: if all
variables share a meaningful common unit and the differences in variance
are **themselves informative** - e.g. returns on assets in the same
currency, or pixel intensities on a common scale.

#### 2.4 Applications of PCA (slides 65-70)

**Face recognition (slides 65-66).** The classic PCA
application, primarily to **reduce the number of variables**. Consider
the 2-D case: an input image is compared with a database of images to
find the best match, assuming the images share resolution and framing.
Because **each pixel is a variable**, a modest `100 x 100` image already
gives `p = 10,000` dimensions. PCA compresses this to a few hundred
**eigenfaces**, and matching happens in that small space. Historical
note: the eigenface method (Turk and Pentland, 1991) was state of the art
for a decade; modern systems use deep convolutional networks, but
eigenfaces remain the clearest illustration of **why dimension reduction
works**: adjacent pixels are almost perfectly correlated, so **the true
dimensionality is far below p**. Slide 66 repeats the point: PCA is
especially valuable when there are **few samples and many variables** (p
much greater than n).

**Handwritten digits (slide 67).** Projecting
784-dimensional digit images onto 2 PCs **already separates several digit
classes visually** - illustrating the visualisation use.

**De-noising (slide 68).** Reduce the dimensionality
by keeping the components that carry the most variation, keep the
important ones, discard the rest, then reconstruct. Why it works:
**noise is spread thinly across all components while signal concentrates
in the first few** - so dropping the tail removes proportionally more
noise than signal.

**Image compression - the 5-step procedure and the
compression ratio (slides 69-70).** The procedure: (1) convert the 2-D
image to a matrix (rows = pixels, columns = colour channels; or treat
each **row of pixels** as an observation); (2) standardise the data; (3)
identify the principal components carrying the most variance; (4) omit
the least important components to reduce the data size; (5) reconstruct
the image from the compressed representation via `Xhat = Zm Vm'`. **The
compression ratio**: storing an `n x p` image with m components costs
`m(n + p)` numbers instead of `np`. For `n = p = 512` and `m = 50`:
51,200 versus 262,144, roughly a 5x reduction. A very memorable practical
note: JPEG does **not** use PCA but the discrete cosine transform (DCT),
because **the DCT basis is fixed and does not need to be transmitted with
the image** - a reminder that **a data-dependent basis has its own
storage cost**.

#### 2.5 PCA in Python (slides 71-72)

The example code does 4 things the chapter's shipped
`.py` files do **not**: read the data with `pandas`, **standardise with
`StandardScaler`** with a comment noting this is "correlation-matrix
PCA"; print the **eigenvalues** (`pca.explained_variance_`) and the
**cumulative percentage** (`explained_variance_ratio_.cumsum()`); use
`PCA(n_components=0.80, svd_solver="full")` to **keep just enough
components to reach 80% of the variance** (instead of counting by hand);
and build a **loadings** `DataFrame` with one row per original variable
and one column per component, so it can be read and interpreted like the
table on slide 61.

#### 2.6 Limitations of PCA and what to use instead (slide 73)

**Where PCA struggles**: it captures only **linear
structure** - it cannot unfold a spiral or a curved manifold; the
components are **often hard to interpret**, being a mix of all p
variables with no natural meaning; it is **not scale invariant** - the
answer depends on your standardisation choice; it is **sensitive to
outliers**, because variance is a squared quantity; it **assumes high
variance means important**, which need not hold; and it **requires
numeric data**, with categorical variables needing MCA or another
approach.

**The alternatives**: **Kernel PCA** for non-linear
structure via the kernel trick; **t-SNE / UMAP**, excellent for 2-D
visualisation but with an important warning - **distances between
clusters in a t-SNE plot are not meaningful**, and they **cannot project
new points reliably**; **autoencoders**, neural non-linear compression,
where a linear autoencoder **recovers PCA exactly**; **factor analysis**
when you want a latent-variable model rather than a rotation; **Sparse
PCA**, which forces most loadings to zero for interpretable components;
and **Robust PCA**, resistant to outliers. The slide's key idea: **PCA
does not know what you are trying to predict.** If the target matters,
see Part 3.

### 3. Combining PCA with Other Algorithms (slides 75-79)

**Why combine (slide 75).** High-dimensional data
causes **multicollinearity**; **noise and redundancy**; **high
computational cost**; and the **curse of dimensionality** - in high p all
pairwise distances become nearly equal, which **breaks every
distance-based method**. PCA acts as a preprocessing step: it **removes
correlations** (components are orthogonal by construction); **keeps the
most informative variance**; **speeds up** downstream algorithms; and
**enables 2-D visualisation** of the result. The slide's flow diagram:
raw data `n x p` → standardise → PCA `n x m` → K-Means / SVM /
regression → result.

**PCA plus clustering (slide 76).** The idea: reduce
the data to 2-10 principal components, then cluster in that space. For
**K-Means**, clusters become more compact once redundant, correlated
dimensions are removed; for **hierarchical clustering**, results are
better and **much faster** in the reduced space; for **DBSCAN and GMM**,
PCA stabilises density estimation, which degrades badly in high p; and as
a bonus, **the first two PCs give a ready-made 2-D plot** in which to
show the clusters. Applications: customer segmentation; grouping
documents or images; provincial typologies. **Two cautions**, both
important: (1) dropping small components **can destroy exactly the
direction that separated two groups** - **separation and variance are not
the same thing**; (2) **do not** run PCA, plot PC1-PC2, and then claim
the visible groups validate your clustering - you clustered **in that
very space**, so of course they look separated. That is **circular**.

**PCA plus classification (slide 77).** The goal:
improve supervised learning by reducing noise and collinearity. For
**logistic regression**, PCA removes multicollinearity and so
**stabilises the coefficient estimates**; for **SVM and KNN**,
distance-based classifiers **benefit greatly** in high dimensions; for
**Naive Bayes**, PCA makes the features **closer to independent**,
exactly what that model assumes. The example: handwritten digit
classification (MNIST) commonly applies PCA before an SVM - retaining
about **150 of 784 dimensions** keeps roughly **95% of the variance** and
cuts training time by **an order of magnitude**. The central caveat:
**PCA is unsupervised.** It chooses directions that maximise variance in
`X` with **no knowledge of `y`**. A low-variance direction **may be the
one that perfectly separates the classes** - and PCA will **throw it away
first**. If prediction is the goal, consider **partial least squares
(PLS)** or **linear discriminant analysis (LDA)**, both of which **use
`y`** when choosing directions.

**PCA plus regression: principal component
regression (slide 78).** PCR has 2 steps: step 1 applies PCA to the
predictors `X`; step 2 regresses `y` on the first m principal
components, i.e. `y` approximately equals `Z gamma` with `Z = X Vm`. Four
properties: it **helps when the predictors are highly correlated** - OLS
becomes unstable, PCR does not; it **works when p is greater than n**,
where OLS has **no unique solution at all**; it **acts as a form of
regularisation**, trading a little bias for much lower variance (**closely
related to ridge regression**). **The risk**: the discarded components
**may still contain predictive information**. **The cost**: the `gamma`
coefficients apply to **the components, not the original variables** - to
map back you must compute `betahat = Vm gammahat`. PCR versus PLS: **PCR
chooses components using only `X`; PLS chooses components maximising
covariance with `y`**, so PLS usually needs **fewer components** for the
same accuracy.

**Doing it correctly: avoid data leakage (slide
79).** **The mistake**: scaling and running PCA on the **full** data set,
then splitting into train and test. The test set has then **already
influenced the means, standard deviations and loadings**, so your
validation error is **optimistic**. **The fix**: put **every step inside
a `Pipeline`**, so it is re-fitted **within each cross-validation fold**.
The slide gives the code: a `Pipeline` of `("scale", StandardScaler())`,
`("pca", PCA())`, `("clf", LogisticRegression(max_iter=2000))`, then
`GridSearchCV` over `pca__n_components` in `[2, 5, 10, 20, 50]` with
`cv=5` and `scoring="accuracy"`, printing `best_params_` and
`best_score_`. Key idea: **when PCA feeds a predictive model, m is a
hyperparameter: tune it against validation error, not a scree
plot.**

### 4. Practice, Discussion and Assignments (slides 81-85)

**Both tools on one slide (slide 81).** This is the
chapter's single most exam-relevant slide:

| Criterion | Clustering | PCA |
|---|---|---|
| Reduces | The number of rows (into K groups) | The number of columns (into m components) |
| Core object | A distance `d(xi, xj)` | A covariance matrix `S` |
| Output | A label for each observation | A score vector for each observation |
| Key parameter | K | m |
| Chosen by | Elbow, silhouette, gap statistic | Kaiser's rule, scree plot, cumulative percentage |
| Preprocessing | Standardise | Standardise |
| Main risk | Imposing groups that do not exist | Discarding the variation that mattered |

Key idea: **both are descriptive tools. They
generate hypotheses about structure; they do not test them. The judgement
stays with the analyst.**

**Six group discussion topics (slide 82).** (1) List
the similarities and differences between clustering and classification.
(2) Compare the applications of hierarchical clustering and K-Means -
when would you prefer each? (3) Are there clustering methods other than
K-Means and hierarchical? Describe one and explain what problem it
solves. (4) PCA maximises variance; give a concrete economics example
where the highest-variance direction is **not** the most interesting one.
(5) You cluster customers and get four segments; your manager asks "how
do we know these are real?" - what evidence would you present? (6) A
colleague reports that PCA raised their model's R squared **on the
training set**; why is this not evidence that PCA helped?

**The assignment (slide 83).** Replicate **one** of
the following mini projects (data from Kaggle): Wine Quality Prediction
with PCA & LDA Algorithms; Customer Segmentation (K-Means Clustering &
PCA); Reducing Features - Principal Component Analysis; Principal
Component Regression; Customer Personality Analysis - PCA and Clustering;
or any other Kaggle dataset suitable for PCA and/or clustering. **The
report must include 4 items**: (i) justification of the scaling decision;
(ii) an elbow and silhouette plot, or a scree plot; (iii) a profile of
each cluster or an interpretation of each component **in words**; (iv)
**one honest limitation** of the result.

**Five project ideas with Vietnamese data (slide
84).** (1) **Provincial typology**: cluster the 63 provinces on GSO
indicators (GRDP per capita, FDI, urbanisation, schooling, health), PCA
first then K-Means; which provinces group together, and does that match
the administrative regions? (2) **PCI composite index**: apply PCA to the
sub-indices of the Provincial Competitiveness Index; how much of the
variation does one component explain - and does that justify a single
ranking? (3) **Retail customer segmentation**: build RFM variables from
any transaction data set and segment the customers, proposing one
campaign per segment. (4) **VN-Index sector structure**: run PCA on daily
returns of listed stocks; does PC1 look like a market factor, and do
later components map onto sectors? (5) **Household living standards**:
use VHLSS-style indicators to construct a socio-economic status index via
PCA, then cluster the households. Data sources: GSO (gso.gov.vn), PCI
(pcivietnam.vn), World Bank Open Data, Kaggle.

**Further reading and the pre-class task (slide
85).** The reading: James, Witten, Hastie and Tibshirani, *An
Introduction to Statistical Learning* - chapter 12 (Unsupervised
Learning), **named as the standard reference** for this material and
freely available; Hastie, Tibshirani and Friedman, *The Elements of
Statistical Learning* - chapter 14, for the mathematical treatment;
Jolliffe and Cadima (2016) on PCA in *Phil. Trans. R. Soc. A*; Arthur and
Vassilvitskii (2007) on k-means++; and the `scikit-learn` user guide
sections on Clustering and on Decomposing signals in components. **The
task before the next session**: install `scikit-learn`, `pandas` and
`matplotlib`, run the slide-30 K-Means code on the `make_blobs` data, and
**bring your elbow plot**.

## Companion code and data files

The folder `raw/Lecture Notes/K32/Chapter04/` has 2
subfolders: `PythonCode/` with 7 scripts and `Data/` with 2 images.
**This is the first time the course material uses images as practice
data.** All 7 scripts were re-run and verified during this ingest -
results are in the "Gaps / notes" section below.

### Python scripts

- **`Example3.7_KMeans.py`** - K-Means on
  `make_blobs` data (150 points, 2 features, 3 centres,
  `cluster_std=0.5`, `random_state=2`), plotting the raw data then the
  clusters and centroids. Uses `init='random'`, `n_init=10`,
  `max_iter=300`, `tol=1e-04`. **Contains a bug**: the data is generated
  with `centers=3` but the model is fitted with `n_clusters=1`, while the
  plotting block still calls 3 `scatter` commands for 3 clusters - the
  script raises no error and produces a plausible-looking figure with
  only 1 cluster and 1 centroid.
- **`Example3.7_KMeans_GenerateData_and_
  Clustering.py`** - the same example rewritten in a cleaner order
  (generate, fit, read labels and centres, plot), 300 points and 4
  centres, `random_state=42`, using the `viridis` colour map and red `X`
  markers for centroids. **Contains a bug**: line 11 calls
  `plt.scatter(..., c=cluster_labels)` **before** `cluster_labels`
  exists (it only appears 8 lines later, from `kmeans.labels_`), so the
  script stops with a `NameError`.
- **`Example3.7_KMeans_Elbow.py`** - builds the
  elbow curve on 4-centre data, sweeping `K` from 1 to 9 and recording
  **two** quantities: `distortion` (the mean Euclidean distance from each
  point to its nearest centroid, via
  `scipy.spatial.distance.cdist`) and `inertia` (`KMeans.inertia_`, i.e.
  WCSS - the sum of **squared** distances). It prints `mapping1` then
  plots distortion. **Two weaknesses**: each iteration fits the same
  model **twice** (`KMeans(...).fit(X)` then `kmeanModel.fit(X)` again),
  and there is **no silhouette score** even though slide 30 and the slide
  83 assignment both ask for elbow and silhouette.
- **`Example3.7_KMeans_ReduceColors.py`** - K-Means
  as **colour quantisation**: read an image, reshape to `(-1, 3)` so each
  row is one pixel and the 3 columns are R, G, B, fit
  `KMeans(n_clusters=6)`, then replace each pixel by its centroid to
  repaint the image with a 6-colour palette. **Two environment issues**:
  it reads from the hard-coded path `E:/Image1.jpg` (the instructor's own
  drive), and it needs the `skimage` library (`skimage.io.imread` and
  `io.imshow`).
- **`Example3.8_PCA.py`** - PCA on correlated 2-D
  data: build 200 points from a random `2 x 2` linear mix of two normals,
  fit `PCA(n_components=2)`, print `components_` and
  `explained_variance_`, draw the two component directions as **arrows**
  with length proportional to the square root of the variance (the
  `draw_vector` helper uses `ax.annotate`), then refit with
  `n_components=1` and use `inverse_transform` to show what the 1-D
  projection throws away. **One dead line**:
  `colors = np.random.rand(len(X))` is computed and never used.
- **`Example3.8_PCA_Diabetes.py`** - PCA on
  `scikit-learn`'s diabetes data (442 patients, 10 features): plot the
  third feature (`bmi`, `feature_index = 2`) against the target, then
  standardise all 10 features with `StandardScaler`, reduce to 2
  components, draw a scatter coloured by target value with a colour bar,
  and print the explained variance ratio. **Two weaknesses**: it calls
  `datasets.load_diabetes()` **twice**, and there is **no scree plot**
  even though slides 59-60 devote two pages to choosing m.
- **`Example3.8_PCA_CompressImage.py`** - PCA image
  compression: read an image in greyscale, treat **each row of pixels**
  as an observation and each column as a feature, fit PCA with
  `n_components = 20`, `inverse_transform` back to the original size,
  show the original and the compressed image, then print the total
  explained variance. **Three issues**: it reads from the hard-coded path
  `E://image1.jpg`; it needs the `cv2` (OpenCV) library with
  `cv2.IMREAD_GRAYSCALE`; and it **skips step 2 of its own slide-70
  procedure** (standardise) and **does not compute the compression
  ratio** even though slide 70 gives the formula `m(n + p)` versus
  `np`.

### Data files

- **`Data/Image1.jpg`** - a `275 x 183` pixel RGB
  colour photo, i.e. 50,325 pixels and **33,933 distinct colours**.
  Content: two rainbow lorikeets on a branch. This is the image the
  colour-reduction script points at (`E:/Image1.jpg`).
- **`Data/Image2.jpg`** - a `680 x 459` pixel RGB
  colour photo. Content: a bouquet of roses. The larger of the two, and
  the better fit for the PCA compression example because its `459 x 680`
  greyscale matrix allows sweeping m into the hundreds.

## Gaps / notes

- **Two of the seven scripts do not run as written,
  and only one of the two announces it.** All 7 were re-run under
  `scikit-learn` 1.9 during this ingest.
  `Example3.7_KMeans_GenerateData_and_Clustering.py` stops with a
  `NameError` - anyone running it sees that at once.
  `Example3.7_KMeans.py` is the opposite: `n_clusters=1` on 3-centre data
  runs to completion, produces a figure, and that figure **looks
  perfectly normal**. This is a live illustration of the warning on
  slides 8 and 25: unsupervised code **cannot fail loudly**, because
  there is no metric to drop.
- **The two image scripts need libraries absent from
  the course environment.** `skimage` (colour reduction) and `cv2` (image
  compression) are not part of the toolkit taught in Chapter 2 (NumPy,
  pandas, matplotlib, seaborn, statsmodels, scikit-learn). Both are
  replaceable with `Pillow` - `Image.open(path)` for colour and
  `Image.open(path).convert("L")` for greyscale - returning exactly the
  same NumPy arrays. This is an **environment gap**, not a content gap:
  a student following the material literally hits
  `ModuleNotFoundError`.
- **A hard-coded `E:/` path appears in both image
  scripts.** Both `E:/Image1.jpg` and `E://image1.jpg` are the
  instructor's Windows drive, and the capitalisation does not match the
  real filename (`Image1.jpg`) either. On macOS and Linux
  (case-sensitive) both the path and the capitalisation need
  fixing.
- **The scripts predate the current `scikit-learn`
  API.** None sets `n_init` explicitly (apart from the first two K-Means
  scripts), while from version 1.4 the `n_init` default changed to
  `"auto"` - exactly the issue **slide 30 itself warns about**. The
  slides were updated; the code files were not.
- **Slide-versus-script mismatch: the diagnostics.**
  The slide-30 code already has `StandardScaler`, `init="k-means++"`,
  `n_init=20` and `silhouette_score`; the slide-71 code already has
  `StandardScaler`, eigenvalues, cumulative percentages and a loadings
  table. **None of the shipped `.py` files has any of that** - none
  standardises, none computes a silhouette, none draws a scree plot, none
  prints loadings. In other words the `.py` files are **pre-upgrade
  artefacts**: doing what the slides teach requires adding those steps
  yourself.
- **Several slides are images with no extractable
  text.** Slides 18-19 (the hand-worked distance example and its
  solution), 37-38 and 40 (building a dendrogram with complete linkage),
  49-51, 53, 55 (the Physics/Statistics grade figures), and 26-28, 31,
  43, 67-69, 72 (illustrations and outputs) are all images embedded in
  Beamer. Their text is **not** in the PDF's text layer, so this page
  describes what they do rather than quoting numbers from inside them.
  Open the PDF for the detail.
- **The chapter ships no code for hierarchical
  clustering, DBSCAN or GMM.** The seven `.py` files cover only K-Means
  (4) and PCA (3). Hierarchical clustering is taught thoroughly across 7
  slides (34-40) but with **no code at all** -
  `scipy.cluster.hierarchy.dendrogram` or
  `sklearn.cluster.AgglomerativeClustering` must be found elsewhere.
  Likewise DBSCAN and GMM get one conceptual slide (44) and no
  code.
- **No exam date, deadline or grade weight** is given
  for the slide-83 assignment in this material - the same situation as in
  the previous chapters.

## Links

- [[unsupervised-learning-framework]] - the
  unsupervised framework, the comparison with supervised learning, the
  spurious-structure warning.
- [[clustering-k32]] - the definition of clustering,
  the partition conditions, the 4 requirements.
- [[distance-measures]] - Euclidean, Manhattan,
  Minkowski, the data-type table, the standardisation mistake.
- [[k-means-clustering-k32]] - the objective,
  Lloyd's algorithm, k-means++, strengths and limitations.
- [[choosing-k-elbow-silhouette]] - WCSS, the
  TSS = WSS + BSS decomposition, the elbow, the silhouette, the gap
  statistic.
- [[hierarchical-clustering-k32]] - the
  agglomerative algorithm, the 4 linkages, reading and cutting a
  dendrogram.
- [[dbscan-and-gaussian-mixture]] - the two
  alternatives, and how to choose among the 4 clustering
  methods.
- [[clustering-pitfalls-checklist]] - the 7-point
  checklist to run before presenting a clustering.
- [[pca-k32]] - what PCA is, the geometry of the
  rotation, the 7-step workflow, limitations and alternatives.
- [[eigenvalues-and-eigenvectors]] - covariance, the
  covariance matrix, eigenvalues, eigenvectors, the SVD.
- [[choosing-number-of-components]] - Kaiser's rule,
  the scree plot, cumulative variance, cross-validation.
- [[pca-loadings-interpretation]] - loadings, size
  factors and contrast factors, the sign warning.
- [[pca-combined-with-other-algorithms-k32]] -
  chaining PCA with clustering, classification and regression; data
  leakage and the `Pipeline` fix.
- [[principal-component-regression]] - PCR, its
  relation to ridge regression, the comparison with PLS.
- [[chapter03-supervised-learning-k32]] - Chapter 3
  is the benchmark this chapter keeps comparing against (slides 6, 8,
  41), and Part 3 here chains PCA into exactly the models taught
  there.
- [[chapter02-python-jupyter-k32]] - Chapter 2
  taught every tool used here, except the two image libraries `skimage`
  and `cv2` that the shipped scripts need.
- [[tran-thi-tuan-anh]] - course instructor.

## Citation

`raw/Lecture Notes/K32/Chapter04/
VNP_DataScience_Unsupervised_Learning_2026.pdf`, slides 1-86; the 7
Python scripts in `PythonCode/` and the 2 image files in `Data/` in the
same folder.
