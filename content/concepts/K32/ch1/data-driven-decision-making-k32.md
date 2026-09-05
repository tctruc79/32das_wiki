---
type: concept
title: "Ra quyết định dựa trên Dữ liệu — 5 loại phân tích (K32)"
title_en: "Data-Driven Decision Making — 5 Types of Analytics (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-09-05
status: complete
---

> **Cách đọc trang này**: bảng 5 loại phân tích ở dưới là bảng hay được
> hỏi nhất của Chapter 1 dưới dạng "cho 1 phát biểu, đây là loại phân
> tích nào?" — xem ví dụ có đáp án ở cuối trang trước khi thi, đặc biệt
> chú ý bẫy Mô tả-bị-nói-như-Nhân quả.
> <br><span class="en">**How to read this page**: the 5-types-of-
> analytics table below is Chapter 1's most commonly tested table, in the
> form "given this statement, which type of analytics is it?" — study the
> worked example with answers at the bottom before the exam, paying
> special attention to the descriptive-reported-as-causal trap.</span>

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
  <br><span class="en">**5 types of analytics** (increasing complexity/
  value), as a question / typical method / characteristic error
  table:</span>

  | Loại | Câu hỏi | Phương pháp điển hình | Lỗi đặc trưng |
  |---|---|---|---|
  | Mô tả (Descriptive) | Điều gì đã xảy ra? | Tổng hợp, phân đoạn, trực quan hóa | Đo lường không rõ định nghĩa; so sánh sai kỳ |
  | Chẩn đoán (Diagnostic) | Vì sao nó xảy ra? | Drill-down, so sánh cohort, tương quan | Báo cáo 1 tương quan gây nhiễu như thể là lời giải thích |
  | Dự đoán (Predictive) | Điều gì có khả năng xảy ra? | Học có giám sát | Giả định dự đoán vẫn đúng sau khi hành động dựa trên nó |
  | **Nhân quả (Causal, mới)** | Nếu ta can thiệp thì sao? | Thực nghiệm; A/B test | Khẳng định quan hệ nhân quả từ so sánh quan sát |
  | Đề xuất (Prescriptive) | Nên làm gì? | Kỳ vọng giá trị, tối ưu hóa | Tối ưu 1 chỉ số thống kê thay vì mục tiêu kinh doanh |

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

## Ví dụ có đáp án - <span class="en">Worked example</span>

Cách chắc chắn nhất để phân biệt 5 loại phân tích trong thực hành là thử
phân loại các phát biểu thật, vì ranh giới giữa chúng thường mờ hơn định
nghĩa lý thuyết gợi ý. Xét 5 phát biểu sau, đều rút ra từ dữ liệu của 1
nhà bán lẻ:
<br><span class="en">The surest way to tell the 5 types of analytics
apart in practice is to try classifying real statements, since the
boundary between them is often blurrier than the definitions suggest.
Consider the following 5 statements, all drawn from one retailer's
data:</span>

1. *"Doanh số vùng Đồng bằng sông Cửu Long giảm 8% so với cùng kỳ năm
   trước."* → **Mô tả**: câu này chỉ báo cáo điều đã xảy ra, không đặt
   câu hỏi vì sao hay điều gì sẽ xảy ra tiếp theo.
   <br><span class="en">*"Sales in the Mekong Delta fell 8% year on
   year."* → **Descriptive**: it only reports what happened, without
   asking why or what comes next.</span>
2. *"Cửa hàng có hàng chờ dài hơn có mức hài lòng khách hàng thấp
   hơn."* → Đây là dạng bẫy phổ biến nhất khi áp dụng khung 5 loại phân
   tích: một tương quan quan sát được — về bản chất chỉ là **Mô tả** —
   nhưng thường bị diễn giải và hành động như thể đó là quan hệ **Nhân
   quả** ("rút ngắn hàng chờ sẽ làm tăng hài lòng"). Đây chính là lỗi đặc
   trưng của phân tích Chẩn đoán: báo cáo một tương quan gây nhiễu như
   thể nó là lời giải thích. Để kết luận nhân quả hợp lệ, cần một thiết
   kế thực nghiệm (A/B test — rút ngắn hàng chờ ở một số cửa hàng, giữ
   nguyên ở số còn lại, rồi so sánh kết quả) thay vì chỉ dựa vào tương
   quan quan sát được.
   <br><span class="en">*"Stores with longer queues have lower customer
   satisfaction."* → This is the most common trap when applying the
   5-type framework: an observed correlation — in essence only
   **Descriptive** — that is habitually interpreted and acted upon as if
   it were a **Causal** relationship ("shortening the queue will raise
   satisfaction"). This is exactly Diagnostic analytics' characteristic
   error: reporting a confounded correlation as if it were an
   explanation. A valid causal conclusion requires an experimental design
   (an A/B test — shorten queues at some stores, leave others unchanged,
   then compare) rather than relying on the observed correlation
   alone.</span>
3. *"Khách hàng này có 71% khả năng không quay lại trong 60 ngày tới."*
   → **Dự đoán**: một xác suất cụ thể cho tương lai của 1 cá nhân, đầu ra
   của 1 mô hình đã huấn luyện — chưa nói gì về nguyên nhân hay hành động
   nên làm.
   <br><span class="en">*"This customer has a 71% chance of not returning
   within 60 days."* → **Predictive**: a specific probability about one
   individual's future, the output of a trained model — it says nothing
   yet about causes or what action to take.</span>
4. *"Kéo dài giờ mở cửa thêm 2 giờ sẽ làm tăng doanh thu tuần 3%."* →
   **Nhân quả**: câu này ước lượng tác động của **1 hành động cụ thể**
   (can thiệp vào giờ mở cửa) lên kết quả — khác về bản chất với việc chỉ
   mô tả 1 tương quan như câu 2.
   <br><span class="en">*"Extending opening hours by two hours would
   raise weekly revenue by 3%."* → **Causal**: it estimates the effect of
   **one specific action** (the opening-hours intervention) on an
   outcome — fundamentally different from merely describing a
   correlation as in statement 2.</span>
5. *"Với ngân sách nhân sự hiện có, nên mở cửa hàng Thủ Đức sớm hơn và
   đóng cửa hàng Quận 7 muộn hơn."* → **Đề xuất**: câu này đi xa hơn cả
   dự đoán lẫn ước lượng tác động, khuyến nghị thẳng 1 hành động cụ thể,
   dưới 1 ràng buộc rõ ràng (ngân sách nhân sự).
   <br><span class="en">*"Given the staffing budget, open the Thu Duc
   store earlier and close the District 7 store later."* → **Prescriptive**:
   it goes beyond both prediction and effect-estimation, directly
   recommending one specific action under an explicit constraint (the
   staffing budget).</span>

Xâu chuỗi cả 5 câu lại: câu 1-2 minh họa vì sao Mô tả và Chẩn đoán dễ bị
nhầm lẫn (cả hai chỉ nhìn vào dữ liệu đã có, không can thiệp gì), còn
câu 3-4-5 minh họa 3 mức độ "chủ động" tăng dần — dự đoán 1 kết quả, ước
lượng tác động của 1 can thiệp, rồi khuyến nghị hành động cụ thể.
<br><span class="en">Read together, statements 1-2 illustrate why
Descriptive and Diagnostic are easily confused (both merely look at
existing data without intervening), while 3-4-5 illustrate 3 increasing
degrees of "agency" — predicting an outcome, estimating the effect of an
intervention, and finally recommending a specific action.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter01-introduction-k32]] — đầy đủ 5 loại phân tích + bảng
  phương pháp/lỗi đặc trưng (slide 30-31), bài tập phân loại 5 phát biểu
  (slide 39).
  <br><span class="en">[[chapter01-introduction-k32]] — the full 5 types
  of analytics + the method/error table (slides 30-31), the 5-statement
  classification exercise (slide 39).</span>

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
