---
type: concept
title: "Python and Jupyter Notebook Tooling (K32)"
tags: [chapter-2, k32, tooling, python]
created: 2026-08-24
updated: 2026-09-05
status: complete
---

> <br><span class="en">**How to read this page**: this is the whole
> wiki's most hands-on page — read it with Jupyter open, running each
> snippet as you go. The common-errors table and the PEP 8 checklist at
> the end are quick-reference tools for debugging assignments or the
> project — no need to memorise them, just know they're here.</span>

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

## Common misconceptions about Python's history

A few historical details are commonly misremembered
because they blend with similar milestones from other languages. Python
was **first publicly released in 1991** (version 0.9.0) — not 1989, the
year Guido van Rossum merely *started* writing it. The original goal
behind Python was not to replace C or to build operating systems, but
simply **to create a language easy for beginners to learn** — its
English-like syntax is a direct consequence of that goal. Its credited
author is **Guido van Rossum**, easily confused with Dennis Ritchie
(creator of C and Unix) or Bill Gates (co-founder of Microsoft) — both
major figures in programming history but unrelated to Python. Even the
name "Python" is often mistakenly assumed to come from the snake or
Greek mythology; it was in fact named after the BBC comedy series
*Monty Python's Flying Circus*. The design philosophy — readability,
doing more with fewer lines, favouring simplicity — is distilled in the
"Zen of Python" (type `import this` in any code cell to see it in full),
and explains most of the syntax choices encountered throughout the
course.

## Reading and fixing errors

Most beginner error messages fall into a small,
recurring set of categories, and correctly identifying the category is
usually far faster than re-reading every line of code. `SyntaxError`
usually stems from a missing `:`, bracket, or quotation mark;
`IndentationError` from a block indented incorrectly; `NameError` from a
variable that doesn't exist yet — most commonly because the cell that
created it wasn't re-run after a kernel restart; `TypeError` from mixing
incompatible types; `ValueError` when the type is right but the value is
impossible; `IndexError`/`KeyError` from accessing a position or key that
doesn't exist; `ModuleNotFoundError` from a library that isn't installed;
and `FileNotFoundError` from a wrong filename or working directory. The
effective reading strategy: always read the **last line** of the error
message first — it names the error type and gives a short description —
then trace back up through the traceback to find the specific offending
line.

## Coding style — why it matters

Python does not require PEP 8 compliance to run,
but violating it makes code hard to re-read — even for its own author a
few weeks later. The core rules: indent consistently with 4 spaces
(never mixing spaces and tabs); name variables/functions in
`snake_case`; put spaces around operators; keep lines under about 79
characters; use blank lines to separate logical blocks (2 blank lines
before a function definition); write comments that explain **why**, not
restate **what** the code does; and encode units directly in variable
names (e.g. `gdp_billion_usd`, `rate_pct`) to avoid unit-confusion errors
— a common and costly mistake in quantitative analysis. As the
language's own creator put it: code is read far more often than it is
written.

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
