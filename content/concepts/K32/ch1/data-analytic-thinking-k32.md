---
type: concept
title: "Tư duy Phân tích Dữ liệu (K32)"
title_en: "Data-Analytic Thinking (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Tư duy phân tích dữ liệu là cách tiếp cận 1 bài toán bắt đầu từ quyết
định cần đưa ra — không phải từ dữ liệu hay công cụ sẵn có — rồi truy vấn
ngược nguồn gốc dữ liệu, baseline, loại bằng chứng, chi phí sai số, trước
khi đánh giá bài toán đó có thực sự phù hợp làm khoa học dữ liệu không.
<br><span class="en">Data-analytic thinking approaches a problem starting
from the decision to be made — not from available data or tools — then
traces back the data's origin, a baseline, the evidence type, and the
cost of errors, before assessing whether the problem actually suits data
science.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Ẩn dụ nền tảng** (giữ nguyên tinh thần bản trước): "tư duy phân tích
  dữ liệu cung cấp la bàn; ra quyết định dựa trên dữ liệu cung cấp sự
  chuyển động."
  <br><span class="en">**Foundational metaphor** (kept from the earlier
  version): "data-analytic thinking provides the compass; data-driven
  decision making provides the movement."</span>
- **5 bước tư duy phân tích cụ thể** (framework thao tác được, không chỉ
  là ẩn dụ):
  1. Bắt đầu từ quyết định, không phải từ dữ liệu hay công cụ. Hỏi: sẽ
     làm gì khác đi một khi biết câu trả lời?
  2. Hỏi dữ liệu đến từ đâu — ai ghi lại, khi nào, vì mục đích gì, và ai
     bị thiếu trong dữ liệu đó.
  3. Đòi hỏi 1 **baseline**. "Tốt hơn cái gì?" — 1 mô hình 85% accuracy
     vô nghĩa nếu chỉ đoán ngẫu nhiên đã cho 87%.
  4. Phân biệt rõ bằng chứng đang có thuộc loại nào — association,
     prediction, hay cause — và nói rõ đang có loại nào.
  5. Gắn 1 chi phí cho việc sai, theo từng hướng sai, **trước khi** xây
     mô hình.
  <br><span class="en">**5 concrete analytic-thinking steps** (an
  operational framework, not just a metaphor): (1) start from the
  decision, not data/tools; (2) ask where the data came from; (3) insist
  on a baseline; (4) distinguish association/prediction/cause; (5)
  attach a cost to being wrong, before building the model.</span>
- **Chuỗi "bài toán kinh doanh → bài toán khoa học dữ liệu"**: Problem →
  Decision → Analytical question → Data → Method → Evidence → Decision.
  Chuỗi này khép kín — kết thúc đúng nơi nó bắt đầu, ở 1 quyết định. Nếu
  không đặt tên được ít nhất 2 hành động khả dĩ, thì không có quyết định
  thật — và do đó không có dự án khoa học dữ liệu.
  <br><span class="en">**"Business problem → data science problem"
  chain**: Problem → Decision → Analytical question → Data → Method →
  Evidence → Decision. A closed loop — ends where it began, at a
  decision. If you can't name at least 2 possible actions, there's no
  real decision — and therefore no data science project.</span>
- **Checklist 7 điều kiện** đánh giá "bài toán có phù hợp làm khoa học dữ
  liệu không" — tất cả phải đúng, chỉ cần 1 điều sai là dừng:
  1. Có 1 quyết định thực sự tồn tại và có thể thay đổi.
  2. Quyết định đó lặp lại đủ thường xuyên để đáng công sức đầu tư.
  3. Outcome được định nghĩa rõ, đo lường được, quan sát được trong 1
     khoảng thời gian hữu ích.
  4. Có dữ liệu mô tả đúng tình huống tại thời điểm ra quyết định.
  5. Dữ liệu phân tích giống với các trường hợp sẽ được áp dụng mô hình
     sau này.
  6. Mối quan hệ trong dữ liệu đủ ổn định trong suốt khoảng thời gian sử
     dụng mô hình.
  7. Hành động dựa trên kết quả là khả thi, hợp pháp, và lợi ích vượt
     quá chi phí.
  <br><span class="en">**7-condition checklist** for "does this problem
  suit data science" — all must hold, any single failure stops it: (1) a
  real, changeable decision exists; (2) it recurs often enough to be
  worth the effort; (3) the outcome is well-defined, measurable,
  observable within a useful timeframe; (4) data describing the decision
  moment exists; (5) the analyzed data resembles future application
  cases; (6) the relationship is stable enough over the model's usage
  period; (7) acting on the result is feasible, legal, and the benefit
  exceeds the cost.</span>
- Văn hóa dữ liệu-hóa / tổ chức dữ liệu-hóa: chỉ còn tên slide, nội dung
  chi tiết là hình ảnh, không trích xuất được.
  <br><span class="en">Data-driven culture / data-driven organisation:
  only the slide title remains extractable, detailed content is
  image-only.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter01-introduction-k32]] — ẩn dụ la bàn/chuyển động, 5 bước tư
  duy cụ thể, chuỗi bài toán kinh doanh→khoa học dữ liệu, checklist 7
  điều kiện.
  <br><span class="en">[[chapter01-introduction-k32]] — the compass/
  movement metaphor, the 5 concrete steps, the business→data-science
  problem chain, the 7-condition checklist.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[data-driven-decision-making-k32]] — bước 4 trong quy trình 5 bước
  (phân biệt association/prediction/cause) ánh xạ trực tiếp tới 5 loại
  phân tích ở đó.
  <br><span class="en">[[data-driven-decision-making-k32]] — step 4 of
  the 5-step process (distinguishing association/prediction/cause) maps
  directly onto the 5 types of analytics there.</span>
- [[data-science-definition-k32]] — checklist 7 điều kiện là phiên bản
  vận hành được của "định nghĩa vận hành" (đánh giá bằng việc quyết định
  có cải thiện).
  <br><span class="en">[[data-science-definition-k32]] — the 7-condition
  checklist is the operational version of the "working definition"
  (judged by whether a decision improves).</span>
