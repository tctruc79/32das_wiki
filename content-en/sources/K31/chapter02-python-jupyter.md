---
type: source
title: "Chapter 2 (K31) — Python and Jupyter Notebook"
tags: [chapter-2, k31, tooling, python]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter02_Python and Jupyter Notebook_2025.pdf"
---

## Metadata

- **Cohort**: K31 (2025).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: 41.
- **Position in the course**: the tooling chapter —
  preparing Python/Jupyter before the machine learning algorithms in
  Chapters 3-8.

## Summary

- This chapter is purely about **tooling**, no
  statistics/ML theory content. It opens with 5 warm-up multiple-choice
  quiz questions about Python's history, then moves to introducing Python
  and a Jupyter Notebook hands-on guide.
- The 8 "Practical Exercises" (slides 25-32) and the
  "Tasks in Pairs" section (slide 40) are coding exercises — the specific
  program content is an image, not extractable via `pdftotext`.

## Key content

### Warm-up: 5 Python quiz questions (slides 5-14)

- **Q1**: What year was Python first released? →
  **1991**. Other languages of the era: Assembly (1940s), FORTRAN (1957,
  first compiler), Pascal (1970), C (1972)/C# (2001), Java/JavaScript/
  Delphi (1995).
- **Q2**: Main reason Python was created? (the
  specific answer isn't in the extracted text — the slide only shows 4
  choices: replace C, develop web apps, create a beginner-friendly
  language, build operating systems).
- **Q3**: Who is credited with creating Python? →
  **Guido van Rossum** (distinguished from Dennis Ritchie — created C/
  UNIX; Larry Page — Google's search engine; Bill Gates — co-founder of
  Microsoft).
- **Q4**: Python's design philosophy? → **All of the
  above**: readability counts (clear, understandable, easy to comprehend);
  less is more (achieve more with fewer lines); simplicity is the key to
  success (reduced complexity, faster development cycles).
- **Q5**: Where did the name "Python" come from? →
  **The BBC comedy series "Monty Python's Flying Circus"** (not the
  snake, not a Greek mythological figure).

### 1. Introduction to Python (slides 15-20)

- **What is Python?** (slide 15): a programming
  language, created in 1991 by Dutch programmer Guido van Rossum. Aims to
  limit code blocks and a less busy appearance. Can be placed as a
  fourth-generation programming language.
- **5 generations of programming languages** (slide
  16): 1st gen — machine languages (binary, machine-dependent); 2nd gen —
  assembly languages (human-readable, needs an assembler to convert to
  machine code); 3rd gen — procedural languages (C, C++, Pascal, FORTRAN,
  COBOL, Java...); 4th gen — non-procedural, enables database access
  (SQL, R, **Python**, Matlab...); 5th gen — based on the concept of
  artificial intelligence (PROLOG, LISP, Mercury...).
- **What is Python used for?** (slide 17): AI &
  machine learning; data analytics; web development (YouTube, Instagram,
  Dropbox...); search engine optimization (SEO); blockchain; game/
  software development; automation; GUI applications (Kivy, Tkinter,
  PyQt...); web scraping (Scrapy, BeautifulSoup, Selenium); multimedia;
  and more.
- **Why Python?** (slides 18-20): **Key features**:
  free; open source; accessible (people of all ages can learn); versatile
  (solves problems across many fields); powerful (from simple to complex
  tasks); strong community support. **Commonly used software/tools**:
  Python interpreter — CPython; IDEs — PyCharm, Spyder, Jupyter Notebook
  and JupyterLab; version control — Git (and GitHub); online platforms —
  Jupyter Notebook.

### 2. Jupyter Notebook: How to Use? (slides 21-40)

- **What is Jupyter Notebook?** (slide 21): Jupyter
  = acronym of Julia + Python + R, and symbolically linked to Galileo's
  Jupiter notebooks. Jupyter Notebooks are completely free and open
  source. Nowadays it has multi-language support (40+ languages).
  Notebooks can be easily shared as HTML, PDF, or via GitHub, nbviewer,
  Google Colab. Can be extended with plugins (e.g. JupyterLab,
  JupyterHub).
- **Installation** (slide 22): 2 ways — (1) install
  Anaconda (download the latest version for Python 3.10, follow the
  instructions, Jupyter is included); (2) install manually via `pip` (for
  advanced users) — update pip
  (`python -m pip install --upgrade pip`), install Jupyter
  (`python -m pip install jupyter`), launch
  (`jupyter notebook`).
- **Creating your first notebook** (slides 23-33):
  run Jupyter → click "New" top-right, select "Python 3" → notebook opens
  in a new tab. Example 1: type `print('Hello World!')` then run (Run
  button or Ctrl+Enter). 8 "Practical Exercises" (slides 25-32) ask you to
  find the output of given Python programs — the program content is an
  image, not extractable. Slide 33 assigns 6 more self-written coding
  tasks: sum of two numbers; area of a rectangle; a "guess the number"
  game; first 10 Fibonacci numbers; Celsius-to-Fahrenheit converter; run a
  simple linear regression.
- **Markdown** (slides 34-37): used to format
  documentation in the notebook's Markdown cells. Headings: `#` followed
  by a space (`#` title, `##` major heading, `###` subheading, `####`
  4th-level subheading). Emphasis: bold `__text__` or `**text**`; italic
  `_text_` or `*text*`. Bullets: `-` followed by 1-2 spaces, or `*`.
  Numbered lists: type `1.` followed by a space for each entry (Jupyter
  auto-renumbers correctly on run). Practice: create a new Markdown cell
  with the notebook's title, a bullet list with **Author:** and
  **Date:**, and another Markdown cell listing your top 3 favorite
  foods.
- **Sharing notebooks** (slides 38-39): before
  sharing — "Cell > All Output > Clear" then "Kernel > Restart and Run
  All"; export via "File > Download As". Export to PDF via `nbconvert`: 2
  options — via LaTeX, or via HTML (recommended): run Anaconda prompt,
  install `pip install nbconvert[webpdf]`, then run
  `jupyter nbconvert --to webpdf --allow-chromium-download
  your-notebook-file.ipynb`.
- **Tasks in pairs** (slide 40): create a list of
  favorite fruits and print each; print the first 10 even numbers; check
  if a number is positive/negative/zero; generate a scatter plot with
  random data; generate a histogram; run a simple linear regression on a
  small dataset; create a heatmap of correlation between variables;
  create multiple plots in one figure (subplots).

## Links

- [[python-jupyter-tooling]] — the concept page
  synthesizing Python + Jupyter Notebook tooling.
- [[chapter01-introduction]] — Chapter 1 already
  named Python as the course's main language (Tools section, slide
  5).
- [[tran-thi-tuan-anh]] — course instructor.

## Citation

`raw/Lecture Notes/K31/
VNP_DataScience_Chapter02_Python and Jupyter Notebook_2025.pdf`, slides
1-41.
