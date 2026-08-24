---
type: concept
title: "Python Data Analysis Stack"
tags: [chapter-2, k32, python, data-analysis, pandas, numpy]
created: 2026-08-24
updated: 2026-08-24
status: complete
---

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
