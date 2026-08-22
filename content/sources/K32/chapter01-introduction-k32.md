---
type: source
title: "Chapter 1 (K32) — Khoa học Dữ liệu và Tư duy Phân tích"
title_en: "Chapter 1 (K32) — Data Science and Data-Analytic Thinking"
tags: [chapter-1, k32, foundations, course-admin]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K32/VNP_DataScience_Chapter01_Introduction_2026.pdf"
---

## Metadata

- **Môn học**: Introduction to Data Science and Applications, University
  of Economics Ho Chi Minh City — Vietnam-Netherlands Programme.
  <br><span class="en">**Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City — Vietnam-
  Netherlands Programme.</span>
- **Khóa**: K32 (2026, khóa hiện tại).
  <br><span class="en">**Cohort**: K32 (2026, current cohort).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: 41 (theo số trang chân trang gốc; file PDF có 45 trang
  vật lý — chênh lệch do 1 số trang tiêu đề/section-divider không đánh
  số).
  <br><span class="en">**Slide count**: 41 (per the original footer
  numbering; the PDF has 45 physical pages — the gap is from title/
  section-divider pages without a footer number).</span>
- **Vị trí trong môn**: chương mở đầu — cùng đề mục 4 phần như bản K31
  (2025) của chương này, nhưng nội dung mở rộng đáng kể với nhiều
  framework mới. **Theo quy tắc tách cụm khóa học** (CLAUDE.md, mục
  "Tách cụm K31/K32"), trang này KHÔNG link trực tiếp tới trang nguồn K31
  — mọi so sánh với K31 chỉ ghi bằng chữ thường, không phải wikilink.
  <br><span class="en">**Position in the course**: the opening chapter —
  same 4-part outline as the K31 (2025) version of this chapter, but
  content substantially expanded with new frameworks. **Per the cohort
  separation rule** (CLAUDE.md, "Tách cụm K31/K32"), this page does NOT
  link directly to the K31 source page — any K31 comparisons are noted in
  plain text only, never as a wikilink.</span>

## Tóm tắt - <span class="en">Summary</span>

- Slide 1-10 là course admin: mục tiêu học tập (6 mục), cấu trúc môn học
  (4 phần, không đổi), công cụ (Python 3.13 + Jupyter/Spyder + **Google
  Colab mới**), tài liệu (thêm 1 sách mới: *An Introduction to
  Statistical Learning with Applications in Python*, 2023), cách tính
  điểm theo công thức Individual Assessment 50% + Group Assessment 50%.
  <br><span class="en">Slides 1-10 are course admin: learning objectives
  (6 items), course structure (4 parts, unchanged), tools (Python 3.13 +
  Jupyter/Spyder + **new Google Colab**), materials (1 new book: *An
  Introduction to Statistical Learning with Applications in Python*,
  2023), grading via Individual Assessment 50% + Group Assessment
  50%.</span>
- Slide 11 trở đi là nội dung Chapter 1, theo 4 phần: (1) dữ liệu trong
  thế giới hiện nay, (2) khoa học dữ liệu là gì, (3) khoa học dữ liệu và
  ra quyết định dựa trên dữ liệu, (4) tư duy phân tích dữ liệu.
  <br><span class="en">Slide 11 onward is the Chapter 1 content, in 4
  parts: (1) data in today's world, (2) what is data science, (3) data
  science and data-driven decision making, (4) data-analytic
  thinking.</span>
- Nhiều framework mới xuất hiện ở bản này: khung 5 V's của dữ liệu lớn,
  1 "định nghĩa vận hành" riêng của giảng viên, bảng so sánh khoa học dữ
  liệu vs phân tích dữ liệu vs business intelligence, bảng vai trò trong
  ngành, ví dụ ứng dụng tại Việt Nam, loại phân tích thứ 5 (Causal, chen
  giữa Predictive và Prescriptive), quy trình 5 bước tư duy phân tích cụ
  thể, chuỗi "bài toán kinh doanh → bài toán khoa học dữ liệu", và
  checklist 7 điều kiện để đánh giá 1 bài toán có phù hợp làm khoa học dữ
  liệu hay không.
  <br><span class="en">Many new frameworks appear in this version: a 5
  V's framework for big data, the instructor's own "working definition,"
  a Data Science vs Data Analytics vs Business Intelligence comparison
  table, an industry-roles table, Vietnam-specific application examples,
  a 5th type of analytics (Causal, between Predictive and Prescriptive),
  a concrete 5-step analytic thinking process, a "business problem → data
  science problem" chain, and a 7-condition checklist for assessing
  whether a problem suits data science.</span>

## Nội dung chính - <span class="en">Key content</span>

### Course admin (slide 2-10) - <span class="en">Course admin (slides 2-10)</span>

- **Mục tiêu học tập** (6 mục, slide 4): 5 mục đầu giữ tinh thần quen
  thuộc (vai trò chiến lược của dữ liệu, hỗ trợ ra quyết định kinh
  doanh, học máy cơ bản, Python, ứng dụng thực tế); mục **mới thứ 6**:
  đánh giá 1 bài toán kinh doanh có phù hợp để làm khoa học dữ liệu hay
  không, và cần bằng chứng gì — tương ứng trực tiếp với checklist 7 điều
  kiện ở slide 35.
  <br><span class="en">**Learning objectives** (6 items, slide 4): the
  first 5 keep the familiar spirit (data's strategic role, supporting
  business decisions, basic ML techniques, Python, real-world
  applications); **new 6th item**: judge whether a business problem is
  suitable for data science at all, and what evidence would be needed —
  directly mapping to the 7-condition checklist on slide 35.</span>
- **Công cụ** (slide 6): Python 3.13, Jupyter Notebook/Spyder, **+
  Google Colab** (chạy trên trình duyệt, không cần cài đặt).
  <br><span class="en">**Tools** (slide 6): Python 3.13, Jupyter
  Notebook/Spyder, **+ Google Colab** (runs in the browser, no
  installation needed).</span>
- **Tài liệu chính** (slide 9): giữ nguyên Provost & Fawcett (2013),
  VanderPlas (2016); **thêm mới** James, Witten, Hastie, Tibshirani &
  Taylor (2023) *An Introduction to Statistical Learning with
  Applications in Python* (miễn phí từ tác giả). Materials còn có website
  riêng của giảng viên (anhttt.edu.vn).
  <br><span class="en">**Main materials** (slide 9): keeps Provost &
  Fawcett (2013), VanderPlas (2016); **adds** James, Witten, Hastie,
  Tibshirani & Taylor (2023) *An Introduction to Statistical Learning
  with Applications in Python* (free from the authors). Materials also
  include the instructor's own website (anhttt.edu.vn).</span>
- **Đánh giá** (slide 10): **Individual Assessment 50%** (quiz/bài tập
  trên lớp 10% + Individual Mini Case 40%) + **Group Assessment 50%**
  (thảo luận nhóm trên lớp 10% + Group Data Science Project 40%).
  <br><span class="en">**Grading** (slide 10): **Individual Assessment
  50%** (in-class quizzes/assignments 10% + Individual Mini Case 40%) +
  **Group Assessment 50%** (in-class group discussion 10% + Group Data
  Science Project 40%).</span>

### 1. Dữ liệu trong thế giới hiện nay (slide 13-20) - <span class="en">1. Data in today's world (slides 13-20)</span>

- **Khung 5 V's của dữ liệu lớn** (slide 16): **Volume** (nhiều dữ liệu
  hơn khả năng lưu trữ/xử lý của 1 máy), **Velocity** (đến liên tục,
  thường cần ra quyết định nhanh), **Variety** (dữ liệu có cấu trúc, bán
  cấu trúc, phi cấu trúc trộn lẫn — bảng biểu, văn bản, hình ảnh, log),
  **Veracity** (chất lượng không chắc chắn: thiếu, trùng lặp, đo sai,
  không nhất quán), **Value** (yếu tố duy nhất có giá trị thương mại
  thật, và là yếu tố *không* tự động có được). Key point đi kèm: dữ liệu
  lớn nói về kích thước/độ phức tạp, không nhất thiết nói về chất lượng
  bằng chứng — dữ liệu *đúng* thường có giá trị hơn dữ liệu *nhiều*. →
  [[big-data-k32]]
  <br><span class="en">**The 5 V's of big data** (slide 16): **Volume**,
  **Velocity**, **Variety**, **Veracity**, **Value**. Key point: big data
  is about size/complexity, not necessarily evidence quality — the
  *right* data is often more valuable than *more* data. →
  [[big-data-k32]]</span>
- **Kim tự tháp DIKW** (slide 20): giữ khung Data→Information→
  Knowledge→Wisdom, thêm 1 câu tổng kết: mỗi bước đi lên đều đòi hỏi 1
  lựa chọn của con người — ghi lại cái gì, tổ chức nó ra sao, nó có nghĩa
  là gì, và làm gì với nó. → [[dikw-pyramid-k32]]
  <br><span class="en">**The DIKW pyramid** (slide 20): keeps the
  Data→Information→Knowledge→Wisdom framework, adds a summary line: each
  step upward requires a human choice — what to record, how to organise
  it, what it means, and what to do about it. → [[dikw-pyramid-k32]]</span>

### 2. Khoa học dữ liệu là gì (slide 21-28) - <span class="en">2. What is data science (slides 21-28)</span>

- **3 khối định nghĩa** (slide 21): Provost & Fawcett (giáo trình), "một
  công thức tổng quát chung" (khớp gần như nguyên văn định nghĩa "Harvard"
  ở K31), "một công thức liên ngành" (khớp định nghĩa "Coursera" ở K31)
  — không còn gắn tên trường/nền tảng cụ thể như bản K31.
  <br><span class="en">**3 definition blocks** (slide 21): Provost &
  Fawcett (textbook), "a common general formulation" (matches K31's
  "Harvard" definition almost word for word), "an interdisciplinary
  formulation" (matches K31's "Coursera" definition) — no longer tied to
  specific university/platform names like the K31 version.</span>
- **"Định nghĩa vận hành" của giảng viên** (slide 22, mới): "thực hành
  trích xuất tri thức có liên quan tới quyết định từ dữ liệu — kết hợp
  lập luận thống kê, phương pháp tính toán và tri thức lĩnh vực — được
  đánh giá bằng việc quyết định có được cải thiện hay không." Nhấn mạnh 3
  tiêu chí: liên quan tới quyết định (loại trừ phân tích không đổi được
  gì); kết hợp (không thành phần nào một mình là đủ); đánh giá bằng việc
  quyết định có cải thiện (dùng để chấm mini project). → [[data-science-definition-k32]]
  <br><span class="en">**The instructor's "working definition"** (slide
  22, new): "the practice of extracting decision-relevant knowledge from
  data — combining statistical reasoning, computational method and domain
  knowledge — judged by whether a decision improves." → [[data-science-definition-k32]]</span>
- **Sơ đồ AI vs Machine Learning vs Deep Learning vs Khoa học dữ liệu**
  (slide 24): nhắc tới statistical learning, deep learning, Gen AI/LLM,
  expert system, visualization — hình ảnh/Venn diagram, phần text trích
  xuất qua `pdftotext` bị lỗi OCR nặng, không đủ tin cậy để mô tả chi
  tiết.
  <br><span class="en">**AI vs Machine Learning vs Deep Learning vs Data
  Science diagram** (slide 24): mentions statistical learning, deep
  learning, Gen AI/LLM, expert system, visualization — an image/Venn
  diagram, the `pdftotext` extraction is badly OCR-garbled, not reliable
  enough to describe in detail.</span>
- **Phân biệt thuật ngữ** (slide 25, bảng định nghĩa 1 dòng/thuật ngữ,
  chi tiết hơn K31): khoa học dữ liệu, phân tích dữ liệu (analytics),
  phân tích 1 tập dữ liệu (analysis), khai phá dữ liệu, kỹ thuật dữ liệu,
  thao tác dữ liệu, trực quan hóa dữ liệu, kho dữ liệu, hồ dữ liệu, tích
  hợp dữ liệu — mỗi thuật ngữ có định nghĩa 1 dòng (K31 chỉ liệt kê tên).
  <br><span class="en">**Distinguishing terminology** (slide 25, a
  1-line-definition table per term, more detailed than K31): data
  science, data analytics, data analysis, data mining, data engineering,
  data manipulation, data visualisation, data warehouse, data lake, data
  integration — each with a 1-line definition (K31 only listed
  names).</span>
- **Bảng so sánh Khoa học dữ liệu vs Phân tích dữ liệu vs Business
  Intelligence** (slide 26, mới): theo 5 tiêu chí (câu hỏi/dữ liệu/
  phương pháp/đầu ra/công cụ điển hình). Kết luận: đây là các thực hành
  chồng lấn nhau, không phải nghề nghiệp đối đầu.
  <br><span class="en">**Data Science vs Data Analytics vs Business
  Intelligence table** (slide 26, new): 5 criteria (question/data/
  methods/output/typical tools). Conclusion: overlapping practices, not
  rival professions.</span>
- **Ai làm việc với khoa học dữ liệu** (slide 27, bảng vai trò mới): kỹ
  sư dữ liệu, nhà phân tích dữ liệu, nhà khoa học dữ liệu, kỹ sư học máy,
  chuyên gia kinh doanh/lĩnh vực — kèm ghi chú riêng cho sinh viên VNP:
  phần lớn sẽ **đặt hàng và đánh giá** phân tích hơn là tự xây dựng, nên
  framing/evaluation/interpretation quan trọng hơn thuật toán.
  <br><span class="en">**Who works with data science** (slide 27, new
  roles table): data engineer, data analyst, data scientist, ML engineer,
  business/domain expert — with a note for VNP students: most will
  **commission and evaluate** analysis rather than build it, so framing/
  evaluation/interpretation matter more than algorithms.</span>
- **Ứng dụng** (slide 28): giữ khung K31 (kinh doanh, y tế, chính phủ) +
  **thêm mục riêng "Tại Việt Nam"** (mới): logistics/recommendation
  e-commerce, chấm điểm tín dụng tài chính tiêu dùng tại điểm bán, dự
  đoán rời bỏ khách hàng ngân hàng.
  <br><span class="en">**Applications** (slide 28): keeps K31's framing
  (business, healthcare, government) + **adds a dedicated "In Vietnam"
  section** (new): e-commerce logistics/recommendation, consumer-finance
  credit scoring at point of sale, bank customer churn prediction.</span>

### 3. Khoa học dữ liệu và ra quyết định dựa trên dữ liệu (slide 29-31) - <span class="en">3. Data science and data-driven decision making (slides 29-31)</span>

- **5 loại phân tích** (slide 30-31, K31 chỉ có 4 — **khác biệt quan
  trọng nhất chương này**): Mô tả, Chẩn đoán, Dự đoán, **Nhân quả
  (Causal, mới)**, Đề xuất. Trình bày dưới dạng bảng 3 cột: câu hỏi /
  phương pháp điển hình / lỗi đặc trưng cho từng loại — chi tiết hơn hẳn
  K31. Ví dụ lỗi đặc trưng: Predictive — giả định dự đoán vẫn đúng sau
  khi hành động dựa trên nó được thực hiện; Causal — khẳng định quan hệ
  nhân quả từ so sánh quan sát (observational). → [[data-driven-decision-making-k32]]
  <br><span class="en">**5 types of analytics** (slides 30-31, K31 only
  had 4 — **the most important difference in this chapter**):
  Descriptive, Diagnostic, Predictive, **Causal (new)**, Prescriptive.
  Presented as a 3-column table: question / typical method /
  characteristic error per type. → [[data-driven-decision-making-k32]]</span>

### 4. Tư duy phân tích dữ liệu (slide 32-38) - <span class="en">4. Data-analytic thinking (slides 32-38)</span>

- Ẩn dụ la bàn/chuyển động giữ nguyên như K31 (slide 32).
  <br><span class="en">The compass/movement metaphor is kept from K31
  (slide 32).</span>
- **5 bước tư duy phân tích cụ thể** (slide 33, mới): (1) bắt đầu từ
  quyết định chứ không phải từ dữ liệu/công cụ; (2) hỏi nguồn gốc dữ
  liệu (ai ghi, khi nào, vì mục đích gì, ai bị thiếu); (3) đòi hỏi 1
  baseline (mô hình 85% accuracy vô nghĩa nếu đoán ngẫu nhiên đã 87%);
  (4) phân biệt rõ association/prediction/cause; (5) gắn chi phí cho việc
  sai ở từng hướng, trước khi xây mô hình. → [[data-analytic-thinking-k32]]
  <br><span class="en">**5 concrete analytic-thinking steps** (slide 33,
  new): (1) start from the decision, not data/tools; (2) ask where the
  data came from; (3) insist on a baseline; (4) distinguish association/
  prediction/cause; (5) attach a cost to being wrong. → [[data-analytic-thinking-k32]]</span>
- **Chuỗi "bài toán kinh doanh → bài toán khoa học dữ liệu"** (slide 34,
  mới): Problem → Decision → Analytical question → Data → Method →
  Evidence → Decision (khép kín, quay lại đúng quyết định ban đầu).
  <br><span class="en">**"Business problem → data science problem"
  chain** (slide 34, new): Problem → Decision → Analytical question →
  Data → Method → Evidence → Decision (closed loop, returns to the
  original decision).</span>
- **Checklist 7 điều kiện** đánh giá 1 bài toán có phù hợp làm khoa học
  dữ liệu không (slide 35, mới, tương ứng Learning Objective #6): (1) có
  1 quyết định thực sự tồn tại và có thể thay đổi; (2) quyết định lặp lại
  đủ thường xuyên để đáng công sức; (3) outcome được định nghĩa, đo
  lường được, quan sát được trong thời gian hữu ích; (4) có dữ liệu mô tả
  tình huống tại thời điểm ra quyết định; (5) dữ liệu phân tích giống với
  các case sẽ áp dụng; (6) mối quan hệ đủ ổn định trong khoảng thời gian
  sử dụng; (7) hành động khả thi + hợp pháp + lợi ích vượt chi phí. Tất
  cả 7 điều kiện phải đúng, chỉ cần 1 sai là dừng.
  <br><span class="en">**7-condition checklist** for whether a problem
  suits data science (slide 35, new, matching Learning Objective #6): all
  7 must hold, any single failure stops the assessment.</span>
- **Key ideas summary** (slide 38, mới — K31 không có slide tổng kết
  riêng): 5 ý chính, nhấn mạnh lại "đánh giá bằng việc quyết định có cải
  thiện", 3 thành phần kết hợp, 5 loại phân tích, và các bước tư duy
  phân tích.
  <br><span class="en">**Key ideas summary** (slide 38, new — K31 has no
  dedicated summary slide): 5 key points, re-emphasizing "judged by
  whether a decision improves," the 3 combined components, the 5 types
  of analytics, and the analytic-thinking steps.</span>
- 2 bài tập thực hành: Warm-up (mentimeter, từ khoá liên quan khoa học dữ
  liệu) và "Exercise — loại phân tích nào?" (5 câu phát biểu từ dữ liệu 1
  nhà bán lẻ, yêu cầu phân loại; lưu ý đặc biệt câu #2 — dạng mô tả nhưng
  hay bị báo cáo/hành động như thể là nhân quả).
  <br><span class="en">2 practice exercises: Warm-up (mentimeter,
  keywords related to data science) and "Exercise — which type of
  analytics?" (5 statements from a retailer's data, classify each; note
  #2 especially — descriptive in form but habitually treated as
  causal).</span>

## Khoảng trống / lưu ý - <span class="en">Gaps / notes</span>

- Sơ đồ "AI vs Machine learning vs Deep learning vs Data science" (slide
  24) là hình ảnh/Venn diagram, `pdftotext` trích xuất ra text rời rạc,
  không đủ tin cậy để dựng thành nội dung chi tiết — cần xem trực tiếp
  slide gốc nếu cần.
  <br><span class="en">The "AI vs ML vs Deep Learning vs Data Science"
  diagram (slide 24) is an image/Venn diagram; `pdftotext` extraction is
  fragmented and unreliable for detailed content — view the original
  slide if needed.</span>
- Slide "Data-driven culture" và "The data-driven organisation" (slide
  36-37) chỉ có tiêu đề, nội dung là hình ảnh.
  <br><span class="en">The "Data-driven culture" and "The data-driven
  organisation" slides (36-37) have only titles, content is
  image-only.</span>
- Đây là chương đầu tiên được ingest của K32; còn 7 chương (2-8) chưa có
  file trong `raw/Lecture Notes/K32/` tại thời điểm ingest này.
  <br><span class="en">This is K32's first ingested chapter; 7 more
  chapters (2-8) have no file in `raw/Lecture Notes/K32/` at the time of
  this ingest.</span>

## Liên kết - <span class="en">Links</span>

- [[big-data-k32]] — khung 5 V's.
  <br><span class="en">[[big-data-k32]] — the 5 V's framework.</span>
- [[dikw-pyramid-k32]] — kim tự tháp DIKW + câu tổng kết mới.
  <br><span class="en">[[dikw-pyramid-k32]] — the DIKW pyramid + the new
  summary line.</span>
- [[data-science-definition-k32]] — định nghĩa vận hành, bảng thuật ngữ,
  bảng so sánh DS/Analytics/BI, bảng vai trò.
  <br><span class="en">[[data-science-definition-k32]] — the working
  definition, terminology table, DS/Analytics/BI comparison table, roles
  table.</span>
- [[data-driven-decision-making-k32]] — 5 loại phân tích (thêm Causal),
  bảng phương pháp/lỗi đặc trưng.
  <br><span class="en">[[data-driven-decision-making-k32]] — 5 types of
  analytics (adds Causal), method/error table.</span>
- [[data-analytic-thinking-k32]] — 5 bước cụ thể, chuỗi bài toán kinh
  doanh→khoa học dữ liệu, checklist 7 điều kiện.
  <br><span class="en">[[data-analytic-thinking-k32]] — the 5 concrete
  steps, business→data-science problem chain, 7-condition checklist.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học, cùng người dạy K31.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor, the
  same person who teaches K31.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K32/VNP_DataScience_Chapter01_Introduction_2026.pdf`,
slide 1-41 theo số trang chân trang gốc (course admin: slide 2-10; nội
dung chương: slide 11-41). File PDF có 45 trang vật lý.
<br><span class="en">`raw/Lecture Notes/K32/
VNP_DataScience_Chapter01_Introduction_2026.pdf`, slides 1-41 per the
original footer numbering (course admin: slides 2-10; chapter content:
slides 11-41). The PDF has 45 physical pages.</span>
