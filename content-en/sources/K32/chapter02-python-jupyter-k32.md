---
type: source
title: "Chapter 2 (K32) — Python and Jupyter Notebook"
tags: [chapter-2, k32, tooling, python, data-analysis]
created: 2026-08-24
updated: 2026-08-28
status: complete
source_file: "raw/Lecture Notes/K32/Chapter02/VNP_DataScience_Chapter02_Python_and_Jupyter_Notebook_2026.pdf"
---

## Metadata

- **Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City — Vietnam-
  Netherlands Programme.
- **Cohort**: K32 (2026, current cohort).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: 78 (matches the PDF's physical
  page count exactly — no gap unlike Chapter 1 K32).
- **Position in the course**: the tooling chapter —
  preparing Python/Jupyter before the algorithm chapters. Versus the K31
  (2025) version (41 slides), the K32 version is **almost twice as
  long** and adds 2 entirely new sections: "Python Essentials by
  Example" (Python syntax) and "Python for Data Analysis" (NumPy/pandas/
  matplotlib/seaborn/statsmodels/scikit-learn) — the K31 version stopped
  at introducing Python + installing/using Jupyter + Markdown, with no
  syntax or data-analysis-library teaching at all. **Per the cohort
  separation rule** (CLAUDE.md), this page does not link directly to the
  K31 source page.
- **Companion practice dataset**: `raw/Lecture
  Notes/K32/Chapter02/Data2.csv` — used as the worked example for the pandas
  section (4.3, slide 60). See the dedicated section below for its
  structure.

## Summary

- 6-part structure (slide 4): (1) Introduction to
  Python, (2) Jupyter Notebook: How to Use, (3) Python Essentials by
  Example, (4) Python for Data Analysis, (5) Documenting and Sharing
  Your Notebook, (6) Practice and exercises.
- Sections 1-2 (Python intro + Jupyter guide) keep
  roughly the same spirit as K31 but add much more operational detail: a
  Python vs R/Stata/Excel comparison table, how the kernel works, 3 cell
  types, 2 modes (edit/command), a full keyboard-shortcut table, magic
  commands, and common beginner traps.
- Section 3 (Python Essentials) is **entirely new**
  content: teaches Python syntax from scratch — variables, data types,
  operators, strings, f-strings, lists/tuples/sets/dictionaries,
  conditions, loops, list comprehensions, functions, lambdas, try/except
  error handling, a common-errors reference table, modules/libraries,
  and PEP 8 style.
- Section 4 (Python for Data Analysis) is also
  **entirely new**: introduces the full data-analysis library stack used
  throughout the rest of the course — NumPy, pandas (import/filter/group
  data, using `Data2.csv` as a real example), matplotlib, seaborn,
  statsmodels (simple and multiple OLS regression), and a scikit-learn
  "first taste" (train/test split, prediction, R²).
- Sections 5-6 keep K31's Markdown + notebook-
  sharing + exercises spirit, but the "Tasks in Pairs" list grows from 8
  to 10 items — 2 new items tie directly to Section 4's content (write a
  function returning a list's mean/std; import a CSV with pandas and
  display `head()`/`info()`/`describe()`).

## Key content

### Warm-up: 5 Python quiz questions (slides 6-16)

Nearly identical to K31's warm-up (only the slide
numbers shift because "Overview"/"Outline" take 1 extra slide): Python
was first released in **1991** (Q1); it was created to be easy to read
and teach (Q2); it was created by **Guido van Rossum** (Q3, distinguished
from Dennis Ritchie/Larry Page/Bill Gates); its design philosophy is
**all of the above**: readability counts, less is more, simplicity is
the key to success (Q4); the name "Python" was inspired by the BBC
comedy **"Monty Python's Flying Circus"** (Q5, not the snake). Slide 14
adds the "Zen of Python" (type `import this` in a Jupyter cell) — 5 of
its 19 guiding principles are quoted: "Beautiful is better than ugly",
"Simple is better than complex", "Readability counts", "Errors should
never pass silently", "There should be one — and preferably only one —
obvious way to do it".

### 1. Introduction to Python (slides 17-23)

- **What is Python?** (slide 17): a programming
  language created in 1991 by Guido van Rossum, a **4th-generation
  language** (non-procedural, enables database access — same group as
  SQL, R, Matlab), unlike 3rd-generation procedural languages (C, C++,
  Pascal, FORTRAN, COBOL, Java). Slide 18 lists all 5 generations (same
  as K31).
- **What is Python used for?** (slide 19): AI & ML,
  data analytics, **econometrics & forecasting** (new vs K31 — fitting
  given the course is in an economics programme), web development,
  SEO, blockchain, game/software development, automation, GUI apps, web
  scraping, multimedia.
- **Why Python?** (slides 21-23): key features —
  free, open source, accessible, versatile, powerful, strong community,
  **interpreted**, 500,000+ packages on PyPI. **The comparison table**
  (slide 22, entirely new vs K31) puts Python, R, Stata/EViews and Excel
  side by side:

  | Công cụ | Điểm mạnh | Hạn chế |
  |---|---|---|
  | Python | Đa dụng, khoa học dữ liệu, ML, tự động hóa, miễn phí | Chậm hơn C với vòng lặp nặng |
  | R | Thống kê, kinh tế lượng, đồ họa, miễn phí | Ít đa dụng hơn |
  | Stata, EViews | Kinh tế lượng dựng sẵn, cú pháp dễ | Bản quyền thương mại, kém linh hoạt |
  | Excel | Quen thuộc, nhanh với dữ liệu nhỏ | Khó tái lập, giới hạn kích thước |

  Conclusion: Python and R are **complements**, not
  substitutes. Tools: CPython interpreter; IDEs — PyCharm, Spyder,
  **VS Code** (new), Jupyter/JupyterLab; Git/GitHub; online platforms —
  **Google Colab, Kaggle Notebooks, Binder** (new — K31 only mentioned
  Jupyter Notebook as an online platform).

### 2. Jupyter Notebook: How to Use? (slides 24-34)

- **What is Jupyter?** (slide 25): Julia+Python+R,
  linked to Galileo's Jupiter notebooks, free/open source, 40+ languages.
  **Why it suits data work** (new): interactive, reproducible, literate
  programming, visual — ideal for teaching, exploratory analysis,
  empirical research, term papers/theses. **How it works** (new, slide
  26): the browser sends code to a kernel; the kernel executes it and
  returns the result to display in the notebook.
- **Installation** (slide 27): 3 ways — Anaconda
  (recommended); manual `pip`; or **use online with no install at all —
  Google Colab** (new option not in K31's installation section).
- **Creating your first notebook** (slides 28-29):
  run Jupyter → "New" → "Python 3" → opens a new tab. 2 examples:
  `print('Hello World!')` and another command via Ctrl+Enter. **Unlike
  K31**, there are no 8 "Practical Exercises" (guess-the-output images) —
  K32 instead goes deeper into cell mechanics and the keyboard.
- **3 cell types** (slide 30, new): Code, Markdown,
  Raw. Reading the prompt: `In [ ]` not run, `In [*]` running, `In [5]`
  the 5th cell executed this session, `Out[5]` its return value — **the
  numbers show execution order, not screen order** (a common beginner
  trap).
- **2 modes** (slide 31, new): Edit mode (green
  border) vs Command mode (blue border, Esc to enter). 3 ways to run a
  cell: Ctrl+Enter, Shift+Enter, Alt+Enter.
- **Keyboard shortcuts table** (slide 32, new): A/B
  insert above/below; D,D delete; Z undo; Y/M change to code/Markdown;
  C/X/V copy/cut/paste; Shift+Up/Down select; Shift+M merge; Ctrl+S
  save; 0,0 restart kernel; H show all shortcuts. Edit mode: Tab
  autocomplete, Shift+Tab help, Ctrl+/ comment.
- **Magic commands** (slide 33, new): line magics
  (`%`) vs cell magics (`%%`) — `%matplotlib inline`, `%pwd`, `%ls`,
  `%who`, `%timeit`, `%reset -f`, `%lsmagic`, `%%time`.
- **The kernel & troubleshooting** (slide 34, new):
  Interrupt / Restart / Restart & Run All. 3 common beginner traps:
  out-of-order execution, forgetting to re-run the import cell after a
  restart, naming a file `pandas.py`. Golden rule: always Restart & Run
  All before sharing.

### 3. Python Essentials by Example (slides 36-56)

This entire section **does not exist in K31** —
teaches Python syntax from scratch via short annotated code examples.

- **First lines of code** (slide 36): `#` comments,
  `print()`, Python as a calculator, `"""..."""` multi-line comments. In
  a notebook, the last line's value displays even without
  `print()`.
- **Variables** (slide 37): `str`/`int`/`float`/
  `bool`; `type()`; updating a variable. Naming rules: start with a
  letter/`_`; no spaces; case-sensitive; avoid Python keywords;
  meaningful names.
- **Arithmetic operators** (slide 38): `+ - * /`
  (always float), `//` floor division, `%` modulo, `**` power; the
  `math` module.
- **Strings** (slide 39): concatenation, `.upper()`,
  `len()`, `.replace()`, indexing/slicing — **Python counts from 0**.
  **f-strings** (slide 40): `f"..."` with `{expr}` inside, formatting
  options for %, decimals, thousands separators.
- **`input()` and type conversion** (slide 41):
  `input()` always returns text; frequent error mixing `str` and
  `int`.
- **Comparison & logical operators** (slide 42):
  `> == != >=`; `and`/`or`/`not`; chained comparisons; `in`. Note:
  `=` assigns, `==` compares.
- **Lists** (slide 43): ordered, mutable —
  indexing, `.append()`, `.insert()`, `.remove()`, `.sort()`.
  **Tuples & sets** (slide 44): tuples are immutable; sets have no
  duplicates/order, support `&` intersection and `|` union.
- **Dictionaries** (slide 45): key-value pairs,
  `.items()`, safe access via `.get()`.
- **Conditions** (slide 46): `if`/`elif`/`else` —
  the colon `:` and 4-space indentation (indentation defines the block
  in Python, not decoration).
- **`for` loops** (slide 47): iterating over lists,
  `range()`, `enumerate()`. **`while`, `break`, `continue`** (slide 48):
  infinite-loop warning — use Kernel > Interrupt.
- **List comprehensions** (slide 49): a Pythonic
  one-liner replacing the classic `for` loop, optionally with a
  condition or transformation.
- **Functions** (slide 50): `def`, default
  parameters, docstrings, keyword arguments, multiple return values.
  **Lambdas & local variables** (slide 51): one-line anonymous
  functions with `map()`/`sorted(key=...)`; local vs global scope.
- **`try`/`except` error handling** (slide 52):
  catching specific errors so the program doesn't crash; a `while True`
  retry-until-valid pattern.
- **Checking the installation** (slide 53, section
  "2.2 Installation" reappears — see "Gaps/notes" below): `sys.version`;
  checking `numpy`/`pandas` versions; `!pip install ...` runs a system
  command from a notebook cell.
- **Most common error table** (slide 54):
  `SyntaxError`, `IndentationError`, `NameError`, `TypeError`,
  `ValueError`, `IndexError`, `KeyError`, `ZeroDivisionError`,
  `ModuleNotFoundError`, `FileNotFoundError`. Advice: read the last
  line of the error message first, then find the arrow pointing to the
  error line.
- **Modules and libraries** (slide 55): standard
  aliases `np`, `pd`, `plt`, `sns`, `sm`; `random.seed()` for
  reproducibility.
- **PEP 8 style** (slide 56): 4-space indentation,
  `lower_case_with_underscores`, spacing around operators, ~79-char
  lines, comments explain *why* not *what*, units in variable names.
  Guido van Rossum: "Code is read much more often than it is
  written."

### 4. Python for Data Analysis (slides 58-68)

An **entirely new** section, absent from K31 —
introduces the library stack used throughout the rest of the course. →
[[python-data-analysis-stack]]

- **Libraries table** (slide 58): NumPy, pandas,
  matplotlib, seaborn, statsmodels, scikit-learn — with their aliases
  and roles.
- **NumPy** (slide 59): element-wise operations,
  `.mean()`/`.std()`/`.sum()`, matrix `@` multiplication,
  `np.random.normal()` with a seed.
- **pandas — importing & inspecting** (4.3, slide
  60): `pd.read_csv("E:/data2.csv", encoding="cp1258")` — **this is
  `Data2.csv`** in `raw/`, see the dedicated section below.
  `head()`/`tail()`/`shape`/`columns`/`info()`/`describe()`/
  `value_counts()`/`isnull().sum()`. Advice: always run `head()`,
  `info()`, `describe()` right after importing.
- **pandas — selecting & filtering** (4.4, slide
  61): `.loc[]`/`.iloc[]`, conditional filtering with `&`/`|` (not
  `and`/`or`), `.sort_values()`.
- **pandas — grouping, aggregating, cleaning**
  (4.5, slide 62): `groupby().agg()`, `.dropna()`, `.fillna()`,
  `.rename()`, `.drop_duplicates()`.
- **matplotlib** (4.6-4.7, slides 63-64): a first
  line chart, `plt.savefig()`, scatter + histogram +
  `plt.subplots(1, 2)` for multi-panel figures.
- **seaborn** (4.8, slide 65): `sns.load_dataset
  ("tips")`, `histplot`/`boxplot`/`scatterplot`/`regplot`, a correlation
  **heatmap**.
- **statsmodels — simple regression** (4.9, slide
  66): `sm.OLS(...).fit()`, `model.summary()`. **Multiple regression
  with a formula** (4.10, slide 67, Stata/R-style syntax):
  `smf.ols("tip ~ total_bill + size + C(sex)", data=tips).fit()`,
  robust standard errors, fitted values/residuals.
- **scikit-learn — a first taste of ML** (4.11,
  slide 68): `train_test_split()`, `LinearRegression()`, `r2_score`.
  Key note: **statsmodels is oriented towards explanation**;
  **scikit-learn is oriented towards prediction**.

### 5. Documenting and Sharing Your Notebook (slides 70-75)

- **Markdown** (slides 70-73): headings, emphasis,
  bullet/numbered lists, indented sub-lists. Practice: title, **Author:**
  /**Date:** bullets, favorite foods, a 2-column table, a link, and the
  mean formula in LaTeX.
- **Sharing notebooks** (slides 74-75): standard
  before-sharing checklist, exporting, GitHub/nbviewer/Colab. **PDF
  export** (slide 75) — a **different procedure than K31**: export to
  HTML then browser print-to-PDF (K31 used the `nbconvert --to webpdf`
  command line instead).

### 6. Practice (slides 76-77)

- **6 solo tasks** (6.2, slide 76 — identical to
  K31's slide 33 list): sum of two numbers; rectangle area; guess-the-
  number game; first 10 Fibonacci numbers; Celsius→Fahrenheit; a simple
  linear regression.
- **10 pair tasks** (6.4, slide 77 — **the first 8
  match K31's slide 40, the last 2 are NEW**): items 4 and 7 are new —
  writing a mean/std function, and importing a CSV with pandas to show
  `head()`/`info()`/`describe()` — both tying directly to the new
  Sections 3-4 content. Submit the Jupyter file or PDF on Classroom.

## Practice dataset: Data2.csv

- **Path**: `raw/Lecture Notes/K32/Chapter02/Data2.csv` — the
  real-data example for 4.3-4.5 (pandas). It is **Vietnamese
  provincial socioeconomic data for 2014**: 63 rows (provinces), 13
  columns, covering 2 regions in this file — the **Red River Delta**
  and the **Northern Midlands and Mountain Areas** (a subset of
  Vietnam's regions, not all 6).
- **13 columns**: province name, region, year
  (2014 only), birth rate, % trained labor, urban population, area,
  current-price GDP, constant-2010-price GDP, population, population
  growth, current-price investment, constant-2010-price investment.
- **How the slide loads it** (slide 60):
  `pd.read_csv("E:/data2.csv", encoding="cp1258")` — `E:/data2.csv` is
  the instructor's own local path; students must substitute their own.
  See the encoding note under "Gaps/notes" below.

## Gaps / notes

- **Numbering jumps in the original slides**: slide
  53 revisits "2.2 Installation" mid-way through Python Essentials —
  likely a late insert; sections 3.20 and 4.2 are also skipped in the
  original numbering (3.19→3.21, 4.1→4.3) — this page keeps the
  original section numbers to match the slides rather than
  renumbering.
- **`Data2.csv` encoding**: the slide uses
  `encoding="cp1258"` (a legacy Vietnamese Windows codepage), but the
  actual file in `raw/` today is **UTF-8 with a BOM** (reads correctly
  with `encoding="utf-8-sig"`, `cp1258` not needed) — possibly re-saved
  after the slide was authored. Students following the slide literally
  with `cp1258` on today's file may hit a decode error or garbled
  Vietnamese text — try `utf-8-sig` first if that happens.
- Some content is image-only, not extractable via
  `pdftotext`: the Python ecosystem graphic (slide 20), Jupyter/"New"
  button screenshots (slides 28-29), the "usual first cell" image
  (slide 58), and the Markdown formatting example (slide 72).

## Links

- [[python-jupyter-tooling-k32]] — core Python +
  Jupyter usage (Sections 1-3, 5-6).
- [[python-data-analysis-stack]] — NumPy/pandas/
  matplotlib/seaborn/statsmodels/scikit-learn (Section 4).
- [[chapter01-introduction-k32]] — Chapter 1
  already named Python 3.13 + Jupyter/Spyder + Google Colab as the
  course's main tools.
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K32/Chapter02/
VNP_DataScience_Chapter02_Python_and_Jupyter_Notebook_2026.pdf`, slides
1-78; `raw/Lecture Notes/K32/Chapter02/Data2.csv` (the 4.3-4.5 practice
dataset).
