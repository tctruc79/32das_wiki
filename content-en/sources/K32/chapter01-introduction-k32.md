---
type: source
title: "Chapter 1 (K32) — Data Science and Data-Analytic Thinking"
tags: [chapter-1, k32, foundations, course-admin]
created: 2026-08-22
updated: 2026-09-05
status: complete
source_file: "raw/Lecture Notes/K32/Chapter01/VNP_DataScience_Chapter01_Introduction_2026.pdf"
---

## Metadata

- **Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City — Vietnam-
  Netherlands Programme.
- **Cohort**: K32 (2026, current cohort).
- **Instructor**: [[tran-thi-tuan-anh]].
- **Slide count**: 41 (per the original footer
  numbering; the PDF has 45 physical pages — the gap is from title/
  section-divider pages without a footer number).
- **Position in the course**: the opening chapter —
  same 4-part outline as the K31 (2025) version of this chapter, but
  content substantially expanded with new frameworks. **Per the cohort
  separation rule** (CLAUDE.md, "Tách cụm K31/K32"), this page does NOT
  link directly to the K31 source page — any K31 comparisons are noted in
  plain text only, never as a wikilink.

## Summary

- Slides 1-10 are course admin: learning objectives
  (6 items), course structure (4 parts, unchanged), tools (Python 3.13 +
  Jupyter/Spyder + **new Google Colab**), materials (1 new book: *An
  Introduction to Statistical Learning with Applications in Python*,
  2023), grading via Individual Assessment 50% + Group Assessment
  50%.
- Slide 11 onward is the Chapter 1 content, in 4
  parts: (1) data in today's world, (2) what is data science, (3) data
  science and data-driven decision making, (4) data-analytic
  thinking.
- Many new frameworks appear in this version: a 5
  V's framework for big data, the instructor's own "working definition,"
  a Data Science vs Data Analytics vs Business Intelligence comparison
  table, an industry-roles table, Vietnam-specific application examples,
  a 5th type of analytics (Causal, between Predictive and Prescriptive),
  a concrete 5-step analytic thinking process, a "business problem → data
  science problem" chain, and a 7-condition checklist for assessing
  whether a problem suits data science.

## Key content

### Course admin (slides 2-10)

- **Learning objectives** (6 items, slide 4): the
  first 5 keep the familiar spirit (data's strategic role, supporting
  business decisions, basic ML techniques, Python, real-world
  applications); **new 6th item**: judge whether a business problem is
  suitable for data science at all, and what evidence would be needed —
  directly mapping to the 7-condition checklist on slide 35.
- **Tools** (slide 6): Python 3.13, Jupyter
  Notebook/Spyder, **+ Google Colab** (runs in the browser, no
  installation needed).
- **Main materials** (slide 9): keeps Provost &
  Fawcett (2013), VanderPlas (2016); **adds** James, Witten, Hastie,
  Tibshirani & Taylor (2023) *An Introduction to Statistical Learning
  with Applications in Python* (free from the authors). Materials also
  include the instructor's own website (anhttt.edu.vn).
- **Grading** (slide 10): **Individual Assessment
  50%** (in-class quizzes/assignments 10% + Individual Mini Case 40%) +
  **Group Assessment 50%** (in-class group discussion 10% + Group Data
  Science Project 40%).

### 1. Data in today's world (slides 13-20)

- **The 5 V's of big data** (slide 16): **Volume**,
  **Velocity**, **Variety**, **Veracity**, **Value**. Key point: big data
  is about size/complexity, not necessarily evidence quality — the
  *right* data is often more valuable than *more* data. →
  [[big-data-k32]]
- **The DIKW pyramid** (slide 20): keeps the
  Data→Information→Knowledge→Wisdom framework, adds a summary line: each
  step upward requires a human choice — what to record, how to organise
  it, what it means, and what to do about it. → [[dikw-pyramid-k32]]

### 2. What is data science (slides 21-28)

- **3 definition blocks** (slide 21): Provost &
  Fawcett (textbook), "a common general formulation" (matches K31's
  "Harvard" definition almost word for word), "an interdisciplinary
  formulation" (matches K31's "Coursera" definition) — no longer tied to
  specific university/platform names like the K31 version.
- **The instructor's "working definition"** (slide
  22, new): "the practice of extracting decision-relevant knowledge from
  data — combining statistical reasoning, computational method and domain
  knowledge — judged by whether a decision improves." → [[data-science-definition-k32]]
- **AI vs Machine Learning vs Deep Learning vs Data
  Science diagram** (slide 24): mentions statistical learning, deep
  learning, Gen AI/LLM, expert system, visualization — an image/Venn
  diagram, the `pdftotext` extraction is badly OCR-garbled, not reliable
  enough to describe in detail.
- **Distinguishing terminology** (slide 25, a
  1-line-definition table per term, more detailed than K31): data
  science, data analytics, data analysis, data mining, data engineering,
  data manipulation, data visualisation, data warehouse, data lake, data
  integration — each with a 1-line definition (K31 only listed
  names).
- **Data Science vs Data Analytics vs Business
  Intelligence table** (slide 26, new): 5 criteria (question/data/
  methods/output/typical tools). Conclusion: overlapping practices, not
  rival professions.
- **Who works with data science** (slide 27, new
  roles table): data engineer, data analyst, data scientist, ML engineer,
  business/domain expert — with a note for VNP students: most will
  **commission and evaluate** analysis rather than build it, so framing/
  evaluation/interpretation matter more than algorithms.
- **Applications** (slide 28): keeps K31's framing
  (business, healthcare, government) + **adds a dedicated "In Vietnam"
  section** (new): e-commerce logistics/recommendation, consumer-finance
  credit scoring at point of sale, bank customer churn prediction.

### 3. Data science and data-driven decision making (slides 29-31)

- **5 types of analytics** (slides 30-31, K31 only
  had 4 — **the most important difference in this chapter**):
  Descriptive, Diagnostic, Predictive, **Causal (new)**, Prescriptive.
  Presented as a 3-column table: question / typical method /
  characteristic error per type. → [[data-driven-decision-making-k32]]

### 4. Data-analytic thinking (slides 32-38)

- The compass/movement metaphor is kept from K31
  (slide 32).
- **5 concrete analytic-thinking steps** (slide 33,
  new): (1) start from the decision, not data/tools; (2) ask where the
  data came from; (3) insist on a baseline; (4) distinguish association/
  prediction/cause; (5) attach a cost to being wrong. → [[data-analytic-thinking-k32]]
- **"Business problem → data science problem"
  chain** (slide 34, new): Problem → Decision → Analytical question →
  Data → Method → Evidence → Decision (closed loop, returns to the
  original decision).
- **7-condition checklist** for whether a problem
  suits data science (slide 35, new, matching Learning Objective #6): all
  7 must hold, any single failure stops the assessment.
- **Key ideas summary** (slide 38, new — K31 has no
  dedicated summary slide): 5 key points, re-emphasizing "judged by
  whether a decision improves," the 3 combined components, the 5 types
  of analytics, and the analytic-thinking steps.
- 2 practice exercises: Warm-up (mentimeter,
  keywords related to data science) and "Exercise — which type of
  analytics?" (5 statements from a retailer's data, classify each; note
  #2 especially — descriptive in form but habitually treated as causal)
  — all 5 with worked answers in
  [[data-driven-decision-making-k32]].

## Gaps / notes

- The "AI vs ML vs Deep Learning vs Data Science"
  diagram (slide 24) is an image/Venn diagram; `pdftotext` extraction is
  fragmented and unreliable for detailed content — view the original
  slide if needed.
- The "Data-driven culture" and "The data-driven
  organisation" slides (36-37) have only titles, content is
  image-only.

## Links

- [[big-data-k32]] — the 5 V's framework.
- [[dikw-pyramid-k32]] — the DIKW pyramid + the new
  summary line.
- [[data-science-definition-k32]] — the working
  definition, terminology table, DS/Analytics/BI comparison table, roles
  table.
- [[data-driven-decision-making-k32]] — 5 types of
  analytics (adds Causal), method/error table.
- [[data-analytic-thinking-k32]] — the 5 concrete
  steps, business→data-science problem chain, 7-condition checklist.
- [[tran-thi-tuan-anh]] — course instructor, the
  same person who teaches K31.

## Citation

`raw/Lecture Notes/K32/
VNP_DataScience_Chapter01_Introduction_2026.pdf`, slides 1-41 per the
original footer numbering (course admin: slides 2-10; chapter content:
slides 11-41). The PDF has 45 physical pages.
