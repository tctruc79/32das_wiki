---
type: concept
title: "Python Data Analysis Stack"
tags: [chapter-2, k32, python, data-analysis, pandas, numpy]
created: 2026-08-24
updated: 2026-09-05
status: complete
---

> <br><span class="en">**How to read this page**: the 6 libraries split
> into 2 very different purposes — NumPy/pandas/matplotlib/seaborn are
> **infrastructure** (used in every later chapter), while statsmodels/
> scikit-learn embody **2 opposing modelling philosophies** (explanation
> vs prediction) that recur throughout Chapter 3. Understanding this
> opposition here makes it immediately clear why Chapter 3 separates
> "judged by statistical significance" from "judged by predictive
> accuracy".</span>

## Definition

The 6 Python libraries used throughout the course's
hands-on work: NumPy (numerical arrays), pandas (DataFrames), matplotlib
and seaborn (visualization), statsmodels (econometrics), scikit-learn
(machine learning) — first introduced as a full set in Chapter 2 K32
("Python for Data Analysis"), using the `Data2.csv` Vietnamese provincial
dataset as a running example.

## Explanation

- **NumPy (`np`)**: efficient numerical arrays —
  element-wise operations, fast stats, matrix algebra, reproducible
  random number generation.
- **pandas (`pd`)**: tabular data structures
  (DataFrame). Standard workflow: import → inspect immediately → select/
  filter → group/aggregate → clean. Key advice: most empirical-research
  mistakes come from *not looking at the data first*.
- **matplotlib (`plt`) and seaborn (`sns`)**:
  matplotlib for fine-grained control; seaborn for statistical charts on
  tabular data plus a **correlation heatmap**.
- **statsmodels (`sm`)**: oriented towards
  **explanation** — simple or formula-based OLS regression, full
  coefficient/test tables, categorical variables, robust standard
  errors.
- **scikit-learn (`sklearn`)**: oriented towards
  **prediction** — train/test split, fit, predict, evaluate. Core
  distinction: statsmodels asks "is this coefficient significant",
  scikit-learn asks "how well does this predict unseen data".
- **`Data2.csv`** (the example dataset): 63
  Vietnamese provinces, year 2014, 13 socioeconomic columns. Used as the
  real-data example for the full pandas workflow. Full structure
  documented in [[chapter02-python-jupyter-k32]].

## Worked code + real output

What sets NumPy apart from an ordinary Python list
shows most clearly through 2 capabilities: applying an operation to an
**entire array at once** rather than looping element by element, and
generating **reproducible** random numbers via a seed — a prerequisite
for an analysis result that others can re-run and get the exact same
numbers:

```python
import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a * 2)              # phép toán áp dụng lên MỌI phần tử cùng lúc
print(a.mean(), a.std(), a.sum())

M = np.array([[1, 2], [3, 4]])          # ma trận 2x2
print(M.shape)
print(M @ M)                            # nhân ma trận

np.random.seed(2026)
x = np.random.normal(loc=0, scale=1, size=1000)   # 1000 số ngẫu nhiên N(0,1)
print(round(x.mean(), 4), round(x.std(), 4))
```

Printed output:

```
[ 2 4 6 8 10]
3.0 1.4142135623730951 15
(2, 2)
[[ 7 10]
 [15 22]]
-0.0315 0.9621
```

**Key point to remember**: `x.mean()` ≈ −0.0315 and
`x.std()` ≈ 0.9621 — close to 0 and 1 (`loc=0, scale=1`) but **not
exact**, since this is only 1,000 random draws, not the full theoretical
distribution. `np.random.seed(2026)` is why these two numbers reproduce
identically on every re-run; without it, each run would give a slightly
different result.

## Appears in

- [[chapter02-python-jupyter-k32]] — all of Section
  4 "Python for Data Analysis" (slides 58-68).

## Related concepts

- [[python-jupyter-tooling-k32]] — the prerequisite:
  core Python syntax and Jupyter mechanics, taught right before this
  section in the same chapter.
- The linear regression model and train/test
  workflow shown here are only a preview — the K31 cohort teaches linear
  regression and Ridge/Lasso in much more depth in its own chapter
  (Chapter 5). Per the K31/K32 separation rule, no cross-cluster
  wikilink is created here — noted in plain text only.
