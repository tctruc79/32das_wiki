---
type: concept
title: "Data-Driven Decision Making — 5 Types of Analytics (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-09-05
status: complete
---

> <br><span class="en">**How to read this page**: the 5-types-of-
> analytics table below is Chapter 1's most commonly tested table, in the
> form "given this statement, which type of analytics is it?" — study the
> worked example with answers at the bottom before the exam, paying
> special attention to the descriptive-reported-as-causal trap.</span>

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
- **5 types of analytics** (increasing complexity/
  value), as a question / typical method / characteristic error
  table:

  | Loại | Câu hỏi | Phương pháp điển hình | Lỗi đặc trưng |
  |---|---|---|---|
  | Mô tả (Descriptive) | Điều gì đã xảy ra? | Tổng hợp, phân đoạn, trực quan hóa | Đo lường không rõ định nghĩa; so sánh sai kỳ |
  | Chẩn đoán (Diagnostic) | Vì sao nó xảy ra? | Drill-down, so sánh cohort, tương quan | Báo cáo 1 tương quan gây nhiễu như thể là lời giải thích |
  | Dự đoán (Predictive) | Điều gì có khả năng xảy ra? | Học có giám sát | Giả định dự đoán vẫn đúng sau khi hành động dựa trên nó |
  | **Nhân quả (Causal, mới)** | Nếu ta can thiệp thì sao? | Thực nghiệm; A/B test | Khẳng định quan hệ nhân quả từ so sánh quan sát |
  | Đề xuất (Prescriptive) | Nên làm gì? | Kỳ vọng giá trị, tối ưu hóa | Tối ưu 1 chỉ số thống kê thay vì mục tiêu kinh doanh |

- This version has **5 types of analytics**, adding
  **Causal** (between Predictive and Prescriptive) vs the more classic
  4-type framework. Causal separates "estimating the effect of an
  intervention" (via experiments/A-B tests) from Predictive (mere
  prediction, not necessarily causal) — matching Predictive's
  characteristic error: confusing a prediction with the outcome after
  acting on it.

## Worked example

The surest way to tell the 5 types of analytics
apart in practice is to try classifying real statements, since the
boundary between them is often blurrier than the definitions suggest.
Consider the following 5 statements, all drawn from one retailer's
data:

1. *"Sales in the Mekong Delta fell 8% year on
   year."* → **Descriptive**: it only reports what happened, without
   asking why or what comes next.
2. *"Stores with longer queues have lower customer
   satisfaction."* → This is the most common trap when applying the
   5-type framework: an observed correlation — in essence only
   **Descriptive** — that is habitually interpreted and acted upon as if
   it were a **Causal** relationship ("shortening the queue will raise
   satisfaction"). This is exactly Diagnostic analytics' characteristic
   error: reporting a confounded correlation as if it were an
   explanation. A valid causal conclusion requires an experimental design
   (an A/B test — shorten queues at some stores, leave others unchanged,
   then compare) rather than relying on the observed correlation
   alone.
3. *"This customer has a 71% chance of not returning
   within 60 days."* → **Predictive**: a specific probability about one
   individual's future, the output of a trained model — it says nothing
   yet about causes or what action to take.
4. *"Extending opening hours by two hours would
   raise weekly revenue by 3%."* → **Causal**: it estimates the effect of
   **one specific action** (the opening-hours intervention) on an
   outcome — fundamentally different from merely describing a
   correlation as in statement 2.
5. *"Given the staffing budget, open the Thu Duc
   store earlier and close the District 7 store later."* → **Prescriptive**:
   it goes beyond both prediction and effect-estimation, directly
   recommending one specific action under an explicit constraint (the
   staffing budget).

Read together, statements 1-2 illustrate why
Descriptive and Diagnostic are easily confused (both merely look at
existing data without intervening), while 3-4-5 illustrate 3 increasing
degrees of "agency" — predicting an outcome, estimating the effect of an
intervention, and finally recommending a specific action.

## Appears in

- [[chapter01-introduction-k32]] — the full 5 types
  of analytics + the method/error table (slides 30-31), the 5-statement
  classification exercise (slide 39).

## Related concepts

- [[data-analytic-thinking-k32]] — analytic thinking
  precedes choosing the right analytics type and interpreting results
  correctly.
- [[data-science-definition-k32]] — Predictive
  analytics ties to Data Science; Descriptive/Diagnostic sit closer to
  Business Intelligence/Data Analytics.
