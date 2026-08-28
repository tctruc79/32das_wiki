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
- **5 loại phân tích** (mức độ phức tạp/giá trị tăng dần), trình bày
  dưới dạng bảng câu hỏi / phương pháp điển hình / lỗi đặc trưng:

  | Loại | Câu hỏi | Phương pháp điển hình | Lỗi đặc trưng |
  |---|---|---|---|
  | Mô tả (Descriptive) | Điều gì đã xảy ra? | Tổng hợp, phân đoạn, trực quan hóa | Đo lường không rõ định nghĩa; so sánh sai kỳ |
  | Chẩn đoán (Diagnostic) | Vì sao nó xảy ra? | Drill-down, so sánh cohort, tương quan | Báo cáo 1 tương quan gây nhiễu như thể là lời giải thích |
  | Dự đoán (Predictive) | Điều gì có khả năng xảy ra? | Học có giám sát | Giả định dự đoán vẫn đúng sau khi hành động dựa trên nó |
  | **Nhân quả (Causal, mới)** | Nếu ta can thiệp thì sao? | Thực nghiệm; A/B test | Khẳng định quan hệ nhân quả từ so sánh quan sát |
  | Đề xuất (Prescriptive) | Nên làm gì? | Kỳ vọng giá trị, tối ưu hóa | Tối ưu 1 chỉ số thống kê thay vì mục tiêu kinh doanh |

  **5 types of analytics** (increasing complexity/
  value), as a question / typical method / characteristic error
  table.

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
