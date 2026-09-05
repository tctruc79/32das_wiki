---
type: concept
title: "Data Science — Definition & Roles (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-09-05
status: complete
---

> <br><span class="en">**How to read this page**: this is Chapter 1's
> central page — every other concept in the chapter (big data, DIKW, the
> 5 types of analytics, analytic thinking) orbits the question "what is
> data science, and how does it differ from neighbouring fields". If you
> only review one page for Chapter 1, read this one first — especially
> the DS/Analytics/BI table and the roles table, since those are the two
> most likely sources of concept-distinction exam questions.</span>

## Definition

Data science is the practice of extracting
decision-relevant knowledge from data, combining statistical reasoning,
computational method and domain knowledge, judged by whether a decision
improves.

## Explanation

- **3 definition blocks cited** (no longer tied to
  specific university/platform names): **Provost & Fawcett** (course
  textbook); **"a common general formulation"**: "a field of study that
  uses scientific methods, processes and systems to extract knowledge and
  insight from data"; **"an interdisciplinary formulation"**: "an
  interdisciplinary field using algorithms, procedures and processes to
  examine large amounts of data, in order to uncover patterns, generate
  insight and direct decision-making."
- **The instructor's "working definition"** — a
  synthesized definition emphasizing 3 criteria: **decision-relevant**
  (excludes analysis that changes nothing); **combining** (no single
  ingredient suffices — statistics + computing + domain knowledge);
  **judged by whether a decision improves** (also the course's mini
  project grading criterion).
- **Distinguishing terminology** (a 1-line
  definition per term, far more detailed than a bare name list): Data
  science (the whole practice, from framing a question to supporting a
  decision), Data analysis (examining a dataset to answer a specific
  question), Data analytics (the organisational activity of using
  analysis to inform decisions, often reporting/dashboards), Data mining
  (extracting patterns from large datasets), Data engineering (building
  pipelines/stores), Data manipulation (cleaning/reshaping/joining raw
  data), Data visualisation, Data warehouse (structured, modelled for
  reporting), Data lake (raw data of all formats, modelled only when
  used), Data integration (combining sources into one consistent
  view).
- **Data Science vs Data Analytics vs Business
  Intelligence comparison** (5 criteria — question/data/methods/output/
  typical tools):

  | Tiêu chí | Business Intelligence | Data Analytics | Data Science |
  |---|---|---|---|
  | Câu hỏi | Điều gì đã xảy ra? | Điều gì đã xảy ra, và vì sao? | Điều gì sẽ xảy ra, và nên làm gì? |
  | Dữ liệu | Có cấu trúc, nội bộ, đã biết | Chủ yếu có cấu trúc | Cấu trúc + phi cấu trúc, thường có nguồn mới |
  | Phương pháp | Báo cáo, tổng hợp | Phân tích thống kê, kiểm định | Mô hình hóa, học máy, lập trình |
  | Đầu ra | Dashboard, báo cáo | Hiểu biết, đề xuất | Mô hình, dự đoán, sản phẩm dữ liệu |
  | Công cụ điển hình | Power BI, Tableau, SQL | Excel, SQL, R | Python, R, thư viện học máy |

  **Common exam trap**: ✅ "Data Science, Data
  Analytics and Business Intelligence are 3 overlapping practices, most
  organisations need all 3." ❌ "Business Intelligence is obsolete, every
  organisation should switch entirely to Data Science" — wrong, because
  BI still answers "what happened" well at a far lower cost, and most
  day-to-day operational decisions don't need a predictive model.
- **Who works with data science**: **Data
  engineer**, **Data analyst**, **Data scientist**, **ML engineer**,
  **Business/domain expert**. Note for VNP students: most will
  **commission and evaluate** analysis rather than build it — so framing,
  evaluation, interpretation matter more than algorithms.
- **AI vs Machine Learning vs Deep Learning vs Data
  Science diagram**: mentions statistical learning, deep learning, Gen
  AI/LLM — an image/Venn diagram, the `pdftotext` extraction is badly
  OCR-garbled, not reliable enough to describe the relationships in
  detail. See the original slide (`raw/Lecture Notes/K32/
  VNP_DataScience_Chapter01_Introduction_2026.pdf`, slide 24).
- **Real-world applications**: business, healthcare,
  government, plus a dedicated **Vietnam** section: e-commerce logistics/
  recommendation, consumer-finance credit scoring at point of sale, bank
  customer churn prediction.

## Appears in

- [[chapter01-introduction-k32]] — all of section
  "2. What is data science?": 3 definitions + working definition,
  terminology table, DS/Analytics/BI table, roles table, real-world
  applications (incl. the Vietnam section).

## Related concepts

- [[big-data-k32]] — big data is the context/premise
  behind the data science boom.
- [[dikw-pyramid-k32]] — data science is the
  systematic process of climbing from Data to Wisdom.
- [[data-analytic-thinking-k32]] — analytic thinking
  is the prerequisite for correctly applying the above definitions/roles
  to a concrete problem.
