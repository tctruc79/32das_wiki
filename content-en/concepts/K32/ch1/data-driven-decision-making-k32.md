---
type: concept
title: "Data-Driven Decision Making — 5 Types of Analytics (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Definition

Data-driven decision making uses results from 5
types of analytics — Descriptive, Diagnostic, Predictive, Causal,
Prescriptive — to understand the past, explain causes, predict the
future, estimate the effect of an action, and recommend optimal
action.

## Explanation

- Reasons for data-driven decisions: turning data
  into information→knowledge→wisdom; understanding the past; explaining
  why; predicting the future; **estimating the effect of a specific
  action (new)**; recommending actions; supporting real-time decisions;
  reducing subjective bias.
- **5 types of analytics** (increasing complexity/value), as a question /
  typical method / characteristic error table:

  | Type | Question | Typical method | Characteristic error |
  |---|---|---|---|
  | Descriptive | What happened? | Aggregation, segmentation, visualisation | Undefined measures; comparing unlike periods |
  | Diagnostic | Why did it happen? | Drill-down, cohort comparison, correlation | Reporting a confounded correlation as if it were an explanation |
  | Predictive | What is likely to happen? | Supervised learning | Assuming the prediction survives the action it triggers |
  | **Causal (new)** | What if we intervened? | Experiments; A/B tests | Claiming causation from observational comparison |
  | Prescriptive | What should we do? | Expected value, optimisation | Optimising a statistical metric instead of the business goal |

- This version has **5 types of analytics**, adding
  **Causal** (between Predictive and Prescriptive) vs the more classic
  4-type framework. Causal separates "estimating the effect of an
  intervention" (via experiments/A-B tests) from Predictive (mere
  prediction, not necessarily causal) — matching Predictive's
  characteristic error: confusing a prediction with the outcome after
  acting on it.

## Appears in

- [[chapter01-introduction-k32]] — the full 5 types
  of analytics + the method/error table.

## Related concepts

- [[data-analytic-thinking-k32]] — analytic thinking
  precedes choosing the right analytics type and interpreting results
  correctly.
- [[data-science-definition-k32]] — Predictive
  analytics ties to Data Science; Descriptive/Diagnostic sit closer to
  Business Intelligence/Data Analytics.
