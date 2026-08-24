---
type: concept
title: "Python and Jupyter Notebook Tooling (K32)"
tags: [chapter-2, k32, tooling, python]
created: 2026-08-24
updated: 2026-08-24
status: complete
---

## Definition

Python is a 4th-generation programming language,
created in 1991 by Guido van Rossum; Jupyter Notebook is a browser-based,
cell-driven interactive coding environment — together they form the
course's main hands-on infrastructure. The K32 version teaches this
tooling in far more operational depth than K31: the kernel mechanism, 3
cell types, 2 editing modes, a full keyboard-shortcut table, magic
commands, and the entire core Python syntax (variables, data types,
control flow, functions, error handling).

## Explanation

- **Python**: a 4th-generation language (non-
  procedural, database access — same group as SQL, R, Matlab). Key
  traits: free, open source, accessible, versatile, powerful, interpreted,
  a large community (500,000+ PyPI packages). K32 adds a Python vs R vs
  Stata/EViews vs Excel comparison table — concluding Python and R are
  **complements**, not substitutes.
- **Jupyter Notebook**: cell-based — 3 types: Code,
  Markdown, Raw. `In [n]`/`Out[n]` labels show **execution order**, not
  screen order — the most common source of beginner errors. 2 modes:
  Edit vs Command. The kernel remembers all variables — Interrupt stops
  infinite loops; Restart & Run All is the mandatory final check before
  submitting.
- **Core Python syntax** (entirely new vs K31):
  variables and the 4 basic types; arithmetic/comparison/logical
  operators; strings and f-strings; data structures — lists (mutable),
  tuples (immutable), sets (no duplicates), dictionaries (key-value);
  `if`/`elif`/`else`; `for`/`while` loops with `break`/`continue`; list
  comprehensions; functions (including `lambda`, local/global scope);
  `try`/`except` error handling; modules/libraries (standard aliases);
  PEP 8 style.
- **Install & share**: 3 install paths (Anaconda,
  `pip`, or Google Colab with no install); PDF export via HTML + browser
  print (different from K31's `nbconvert --to webpdf` command-line
  route).

## Appears in

- [[chapter01-introduction-k32]] — names Python
  3.13 + Jupyter Notebook/Spyder + Google Colab as the course's main
  tools (Tools section).
- [[chapter02-python-jupyter-k32]] — the main
  content: Sections 1-3 (Python intro, Jupyter guide, Python syntax) and
  Sections 5-6 (Markdown, sharing, exercises).

## Related concepts

- [[python-data-analysis-stack]] — the immediate
  next step after mastering core Python syntax: using it to work with
  NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn, also in
  Chapter 2 K32.
- [[data-science-definition-k32]] — Python/Jupyter
  is the practical tool implementing the data science techniques defined
  in Chapter 1 K32.
