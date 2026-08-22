---
type: concept
title: "Ra quyết định dựa trên Dữ liệu — 5 loại phân tích (K32)"
title_en: "Data-Driven Decision Making — 5 Types of Analytics (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Ra quyết định dựa trên dữ liệu là việc dùng kết quả từ 5 loại phân tích —
Mô tả, Chẩn đoán, Dự đoán, Nhân quả, Đề xuất — để hiểu quá khứ, giải
thích nguyên nhân, dự đoán tương lai, ước lượng tác động của hành động,
và đề xuất hành động tối ưu.
<br><span class="en">Data-driven decision making uses results from 5
types of analytics — Descriptive, Diagnostic, Predictive, Causal,
Prescriptive — to understand the past, explain causes, predict the
future, estimate the effect of an action, and recommend optimal
action.</span>

## Diễn giải - <span class="en">Explanation</span>

- Lý do ra quyết định dựa trên khoa học dữ liệu: biến dữ liệu →thông
  tin→tri thức→trí tuệ; hiểu quá khứ; giải thích lý do; dự đoán tương
  lai; **ước lượng tác động của 1 hành động cụ thể (mới)**; đề xuất hành
  động; hỗ trợ quyết định thời gian thực; giảm thiên lệch chủ quan.
  <br><span class="en">Reasons for data-driven decisions: turning data
  into information→knowledge→wisdom; understanding the past; explaining
  why; predicting the future; **estimating the effect of a specific
  action (new)**; recommending actions; supporting real-time decisions;
  reducing subjective bias.</span>
- **5 loại phân tích** (mức độ phức tạp/giá trị tăng dần), trình bày
  dưới dạng bảng câu hỏi / phương pháp điển hình / lỗi đặc trưng:

  | Loại | Câu hỏi | Phương pháp điển hình | Lỗi đặc trưng |
  |---|---|---|---|
  | Mô tả (Descriptive) | Điều gì đã xảy ra? | Tổng hợp, phân đoạn, trực quan hóa | Đo lường không rõ định nghĩa; so sánh sai kỳ |
  | Chẩn đoán (Diagnostic) | Vì sao nó xảy ra? | Drill-down, so sánh cohort, tương quan | Báo cáo 1 tương quan gây nhiễu như thể là lời giải thích |
  | Dự đoán (Predictive) | Điều gì có khả năng xảy ra? | Học có giám sát | Giả định dự đoán vẫn đúng sau khi hành động dựa trên nó |
  | **Nhân quả (Causal, mới)** | Nếu ta can thiệp thì sao? | Thực nghiệm; A/B test | Khẳng định quan hệ nhân quả từ so sánh quan sát |
  | Đề xuất (Prescriptive) | Nên làm gì? | Kỳ vọng giá trị, tối ưu hóa | Tối ưu 1 chỉ số thống kê thay vì mục tiêu kinh doanh |

  <br><span class="en">**5 types of analytics** (increasing complexity/
  value), as a question / typical method / characteristic error
  table.</span>

- Đây là bản có **5 loại phân tích**, thêm loại **Nhân quả (Causal)**
  (chen giữa Dự đoán và Đề xuất) so với khung 4 loại kinh điển hơn
  (Descriptive/Diagnostic/Predictive/Prescriptive). Causal tách riêng
  việc "ước lượng tác động nếu can thiệp" (dùng thực nghiệm/A-B test)
  khỏi Predictive (chỉ dự đoán, không nhất thiết suy ra nhân quả) — khớp
  với lỗi đặc trưng của Predictive: nhầm dự đoán với kết quả sau khi hành
  động.
  <br><span class="en">This version has **5 types of analytics**, adding
  **Causal** (between Predictive and Prescriptive) vs the more classic
  4-type framework. Causal separates "estimating the effect of an
  intervention" (via experiments/A-B tests) from Predictive (mere
  prediction, not necessarily causal) — matching Predictive's
  characteristic error: confusing a prediction with the outcome after
  acting on it.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter01-introduction-k32]] — đầy đủ 5 loại phân tích + bảng
  phương pháp/lỗi đặc trưng.
  <br><span class="en">[[chapter01-introduction-k32]] — the full 5 types
  of analytics + the method/error table.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[data-analytic-thinking-k32]] — tư duy phân tích là bước đi trước
  việc chọn đúng loại phân tích và diễn giải đúng kết quả.
  <br><span class="en">[[data-analytic-thinking-k32]] — analytic thinking
  precedes choosing the right analytics type and interpreting results
  correctly.</span>
- [[data-science-definition-k32]] — Predictive analytics gắn với Khoa
  học dữ liệu; Descriptive/Diagnostic gần với Business Intelligence/Data
  Analytics hơn.
  <br><span class="en">[[data-science-definition-k32]] — Predictive
  analytics ties to Data Science; Descriptive/Diagnostic sit closer to
  Business Intelligence/Data Analytics.</span>
