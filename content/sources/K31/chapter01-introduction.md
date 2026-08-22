---
type: source
title: "Chapter 1 (K31) — Data Science và Tư duy Phân tích Dữ liệu"
title_en: "Chapter 1 (K31) — Data Science and Data-Analytic Thinking"
tags: [chapter-1, k31, foundations, course-admin]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter01_Introduction_2025.pdf"
---

## Metadata

- **Môn học**: Introduction to Data Science and Applications, University of
  Economics Ho Chi Minh City — Vietnam-Netherlands Programme.
  <br><span class="en">**Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City — Vietnam-
  Netherlands Programme.</span>
- **Khóa**: K31 (2025).
  <br><span class="en">**Cohort**: K31 (2025).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: 38.
  <br><span class="en">**Slide count**: 38.</span>
- **Vị trí trong môn**: chương mở đầu — gồm phần course admin (slide 2-9)
  và nội dung học thuật đầu tiên (slide 10-38).
  <br><span class="en">**Position in the course**: the opening chapter —
  contains course admin (slides 2-9) and the first academic content
  (slides 10-38).</span>

## Tóm tắt - <span class="en">Summary</span>

- Slide 2-9 là course admin: mục tiêu học tập, cấu trúc môn học, công cụ
  (Python 3.10 + Jupyter Notebook/Spyder), tài liệu, cách tính điểm.
  <br><span class="en">Slides 2-9 are course admin: learning objectives,
  course structure, tools (Python 3.10 + Jupyter Notebook/Spyder),
  materials, grading.</span>
- Slide 10 trở đi là nội dung Chapter 1 thật sự, theo 4 phần: (1) dữ liệu
  trong thế giới hiện nay, (2) khoa học dữ liệu là gì, (3) khoa học dữ
  liệu và ra quyết định dựa trên dữ liệu, (4) tư duy phân tích dữ liệu.
  <br><span class="en">Slide 10 onward is the actual Chapter 1 content,
  in 4 parts: (1) data in today's world, (2) what is data science, (3)
  data science and data-driven decision making, (4) data-analytic
  thinking.</span>
- Bản slide 2025 này khá ngắn gọn — nhiều slide chỉ có tiêu đề + hình ảnh
  minh họa, không có văn bản trích xuất được (đã ghi rõ trong mục Nội dung
  chính bên dưới, không suy diễn thêm nội dung không có trong slide).
  <br><span class="en">This 2025 slide deck is fairly terse — several
  slides have only a title + illustrative image, with no extractable text
  (flagged explicitly in Nội dung chính below; no content is invented
  beyond what the slide actually contains).</span>

## Nội dung chính - <span class="en">Key content</span>

### Course admin (slide 2-9) - <span class="en">Course admin (slides 2-9)</span>

- **Mục tiêu học tập** (slide 3): nhận diện vai trò chiến lược của dữ
  liệu/năng lực khoa học dữ liệu; nhận biết cách khoa học dữ liệu hỗ trợ ra
  quyết định kinh doanh; biết một số kỹ thuật học máy cơ bản để giải bài
  toán kinh doanh; biết Python — ngôn ngữ dùng phổ biến trong phân tích dữ
  liệu; biết ứng dụng thực tế của khoa học dữ liệu.
  <br><span class="en">**Learning objectives** (slide 3): identify the
  strategic role of data/data science capability; recognize how data
  science supports business decision-making; know some basic machine
  learning techniques for business problems; know Python, widely used in
  data analytics; know real-world applications of data science.</span>
- **Cấu trúc môn học** (slide 4): tổng quan khoa học dữ liệu & tư duy phân
  tích dữ liệu → giới thiệu Python → một số thuật toán học máy phổ biến
  với Python → ứng dụng thực tế của học máy.
  <br><span class="en">**Course structure** (slide 4): overview of data
  science & data-analytic thinking → introducing Python → some popular
  machine learning algorithms with Python → real-world applications of
  machine learning.</span>
- **Công cụ** (slide 5): ngôn ngữ Python 3.10; IDE là Jupyter Notebook
  hoặc Spyder (dùng trong môn này). Slide 6 ("Vì sao chọn Python?") chỉ có
  hình minh họa, không có văn bản trích xuất được.
  <br><span class="en">**Tools** (slide 5): Python 3.10; IDE is Jupyter
  Notebook or Spyder (used in this course). Slide 6 ("Why Python?") has
  only an illustrative image, no extractable text.</span>
- **Tài liệu** (slide 7): slide bài giảng, ebook, website
  (sites.google.com/site/anhttt/), khóa học online (coursera.org,
  udemy.com, datacamp.com, hoặc youtube.com).
  <br><span class="en">**Materials** (slide 7): slides, ebooks, website
  (sites.google.com/site/anhttt/), online courses (coursera.org,
  udemy.com, datacamp.com, or youtube.com).</span>
- **Sách giáo khoa** (slide 8): Provost & Fawcett (2013) *Data Science for
  Business: What You Need to Know about Data Mining and Data-Analytic
  Thinking* (1st ed.); Jake VanderPlas (2016) *Python Data Science
  Handbook — Essential Tools for Working with Data*. Tài liệu khác: Cathy
  O'Neil & Rachel Schutt (2013) *Doing Data Science: Straight Talk from
  the Frontline*; Lillian Pierson & Jake Porway (2015) *Data Science for
  Dummies*.
  <br><span class="en">**Textbooks** (slide 8): Provost & Fawcett (2013)
  *Data Science for Business* (1st ed.); Jake VanderPlas (2016) *Python
  Data Science Handbook*. Others: Cathy O'Neil & Rachel Schutt (2013)
  *Doing Data Science*; Lillian Pierson & Jake Porway (2015) *Data Science
  for Dummies*.</span>
- **Cách tính điểm** (slide 9): Điểm = Tham gia lớp (10%) + Bài tập nhóm
  (30%) + Mini project nhóm (60%).
  <br><span class="en">**Grading** (slide 9): Grade = Participation (10%)
  + Group Assignments (30%) + Mini Group Project (60%).</span>

### 1. Dữ liệu trong thế giới hiện nay (slide 13-20) - <span class="en">1. Data in today's world (slides 13-20)</span>

- Slide 13 ("Dữ liệu trong thế giới hiện nay") chỉ có 1 trích dẫn nguồn
  (The Economist, 6/5/2017), không có văn bản trích xuất được. Slide 14
  ("Dữ liệu lớn là gì?") và slide 15 ("Dữ liệu lớn đến từ đâu?") cũng chỉ
  có tiêu đề + hình minh họa, không có nội dung văn bản.
  <br><span class="en">Slide 13 ("Data in today's world") has only a
  source citation (The Economist, May 6 2017), no extractable text. Slide
  14 ("What is Big data?") and slide 15 ("Where does Big data come from?")
  likewise have only a title + illustration, no text content.</span>
- **Dữ liệu lớn** (slide 16): về bản chất, dữ liệu lớn là tập dữ liệu quá
  lớn cho các hệ thống xử lý dữ liệu truyền thống, do đó cần công nghệ xử
  lý mới. Công nghệ dữ liệu lớn được dùng cho nhiều tác vụ, kể cả kỹ thuật
  dữ liệu. Đôi khi công nghệ dữ liệu lớn được dùng trực tiếp để thực hiện
  kỹ thuật khai phá dữ liệu, nhưng phổ biến hơn nhiều là dùng để **xử lý
  dữ liệu nhằm hỗ trợ** cho khai phá dữ liệu và các hoạt động khoa học dữ
  liệu khác — chứ không phải tự nó là khai phá dữ liệu.
  <br><span class="en">**Big data** (slide 16): essentially means
  datasets that are too large for traditional data processing systems,
  and therefore require new processing technologies. Big data
  technologies are used for many tasks, including data engineering.
  Occasionally they're used for implementing data mining techniques
  directly, but much more often for data processing **in support of**
  data mining and other data science activities — not data mining
  itself.</span>
- Slide 17 ("Mức độ liên quan") chỉ có tiêu đề, không có nội dung văn bản.
  <br><span class="en">Slide 17 ("The relevance") has only a title, no
  text content.</span>
- **Động lực bùng nổ dữ liệu lớn** (slide 18): lượng dữ liệu khổng lồ hiện
  có; dữ liệu lớn đã vượt xa khả năng phân tích thủ công (dữ liệu có cấu
  trúc, dữ liệu phi cấu trúc, dữ liệu bán cấu trúc); máy tính mạnh hơn
  nhiều (Định luật Moore: số transistor trên 1 chip vi xử lý tăng gấp đôi
  mỗi 2 năm); Internet có mặt khắp nơi và Internet vạn vật (IoT); thuật
  toán ngày càng phát triển. → Những yếu tố này dẫn tới việc ứng dụng
  ngày càng rộng rãi các nguyên lý khoa học dữ liệu và kỹ thuật khai phá
  dữ liệu trong kinh doanh.
  <br><span class="en">**Drivers behind the big data boom** (slide 18):
  vast amounts of data now available; big data has far outstripped the
  capacity of manual analysis (structured, unstructured, semi-structured
  data); computers have become far more powerful (Moore's Law: the number
  of transistors on a microchip doubles every two years); the internet is
  everywhere and the internet of things (IoT); algorithms have been
  developed. → These lead to the increasingly widespread business
  application of data science principles and data-mining
  techniques.</span>
- **Kim tự tháp DIKW** (slide 19-20): Dữ liệu (Data) — dữ kiện thô, chưa
  qua xử lý, không có ngữ cảnh hay ý nghĩa; Thông tin (Information) — dữ
  liệu đã được tổ chức, cấu trúc hóa để có ý nghĩa; Tri thức (Knowledge) —
  thông tin kết hợp với kinh nghiệm và sự diễn giải, cho phép hiểu biết và
  nhận thức sâu sắc; Trí tuệ (Wisdom) — khả năng vận dụng tri thức để ra
  quyết định. Slide 19 chỉ có hình minh họa (nguồn:
  jeffwinterinsights.com), định nghĩa đầy đủ nằm ở slide 20.
  <br><span class="en">**The DIKW pyramid** (slides 19-20): Data — raw,
  unprocessed facts and figures without context or meaning; Information —
  data that has been organized and structured so that it has meaning;
  Knowledge — information combined with experience and interpretation,
  allowing understanding and insight; Wisdom — the ability to apply
  knowledge to make decisions. Slide 19 has only an illustration (source:
  jeffwinterinsights.com), the full definitions are on slide 20.</span>

### 2. Khoa học dữ liệu là gì? (slide 21-29) - <span class="en">2. What is data science? (slides 21-29)</span>

- **3 định nghĩa được trích dẫn** (slide 21, build-animation 3 lượt trong
  cùng 1 slide nên PDF lặp lại 3 trang — gộp lại thành 1 mục ở đây):
  <br><span class="en">**3 definitions cited** (slide 21, a
  build-animation revealed across 3 duplicate PDF pages of the same
  slide — merged into one entry here):</span>
  - **Đại học Harvard**: "Khoa học dữ liệu là một lĩnh vực nghiên cứu sử
    dụng các phương pháp, quy trình và hệ thống khoa học để trích xuất
    tri thức và hiểu biết từ dữ liệu."
    <br><span class="en">**Harvard University**: "Data science is a
    field of study that uses scientific methods, processes, and systems
    to extract knowledge and insights from data."</span>
  - **Đại học Michigan**: "Khoa học dữ liệu là lĩnh vực nghiên cứu trích
    xuất hiểu biết liên quan và xây dựng chiến lược từ dữ liệu cho kinh
    doanh và công nghiệp."
    <br><span class="en">**Michigan University**: "Data science is the
    field of study that extracts relevant insights and develops strategy
    from data for business and industry."</span>
  - **Coursera**: "Khoa học dữ liệu là một lĩnh vực liên ngành, sử dụng
    thuật toán, quy trình và tiến trình để xem xét lượng lớn dữ liệu nhằm
    khám phá các mẫu hình ẩn, tạo ra hiểu biết, và định hướng việc ra
    quyết định."
    <br><span class="en">**Coursera**: "Data science is an
    interdisciplinary field that uses algorithms, procedures, and
    processes to examine large amounts of data in order to uncover hidden
    patterns, generate insights, and direct decision-making."</span>
- Slide 22 ("Khoa học dữ liệu là gì?") chỉ có hình minh họa, không có văn
  bản.
  <br><span class="en">Slide 22 ("What is data science?") has only an
  illustration, no text.</span>
- **Phân biệt thuật ngữ** (slide 23): slide chỉ liệt kê TÊN các thuật ngữ
  cần phân biệt, không kèm định nghĩa chi tiết trong chính slide này —
  Khoa học dữ liệu (Data science), Phân tích dữ liệu ở cấp tổ chức (Data
  analytics), Phân tích 1 tập dữ liệu cụ thể (Data analysis), Khai phá dữ
  liệu (Data mining), Thao tác dữ liệu (Data manipulation, xuất hiện 2
  lần trong danh sách gốc), Kỹ thuật dữ liệu (Data engineering), Trực
  quan hóa dữ liệu (Data visualization), Kho dữ liệu / Hồ dữ liệu (Data
  warehouse / Data lake), Tích hợp dữ liệu (Data integration).
  <br><span class="en">**Distinguishing terminology** (slide 23): the
  slide only lists the term NAMES to be distinguished, without detailed
  definitions in this slide itself — Data science, Data analytics, Data
  analysis, Data mining, Data manipulation (appears twice in the original
  list), Data engineering, Data visualization, Data warehouse / Data
  lake, Data integration.</span>
- Slide 24-27 (bao gồm "Khoa học dữ liệu vs Phân tích dữ liệu" ở slide 25)
  chỉ có hình minh họa/sơ đồ, không có văn bản trích xuất được.
  <br><span class="en">Slides 24-27 (including "Data science vs Data
  analytics" on slide 25) have only illustrations/diagrams, no
  extractable text.</span>
- **Ai có thể dùng khoa học dữ liệu?** (slide 28): Bạn có thể. Tổ chức của
  bạn có thể. Nhà tuyển dụng của bạn có thể. Bất kỳ ai có một chút hiểu
  biết và được đào tạo đều có thể bắt đầu dùng hiểu biết từ dữ liệu để
  cải thiện cuộc sống, sự nghiệp, và sự phát triển của doanh nghiệp mình.
  <br><span class="en">**Who can use data science?** (slide 28): You can.
  Your organization can. Your employer can. Anyone who has a bit of
  understanding and training can begin using data insights to improve
  their lives, their careers, and the well-being of their
  businesses.</span>
- **Ứng dụng khoa học dữ liệu** (slide 29): Trong kinh doanh — tiếp thị
  nhắm mục tiêu, quảng cáo trực tuyến, đề xuất bán chéo; chấm điểm tín
  dụng và giao dịch; phát hiện gian lận. Trong y tế và khoa học sự sống —
  chẩn đoán hình ảnh y tế; y tế công cộng. Trong chính phủ và chính sách
  công — thành phố thông minh; chính phủ điện tử. Và nhiều lĩnh vực khác.
  <br><span class="en">**Applying data science** (slide 29): In business
  — targeted marketing, online advertising, cross-sell recommendations;
  credit scoring and trading; fraud detection. In healthcare and life
  sciences — medical imaging and diagnostics; public health. In
  government and public policy — smart cities; e-government. And many
  other areas.</span>

### 3. Khoa học dữ liệu và ra quyết định dựa trên dữ liệu (slide 30-33) - <span class="en">3. Data science and data-driven decision making (slides 30-33)</span>

- **Vì sao cần ra quyết định dựa trên khoa học dữ liệu?** (slide 30):
  biến dữ liệu thành thông tin → tri thức → trí tuệ; hiểu quá khứ (phân
  tích mô tả); giải thích lý do (phân tích chẩn đoán); dự đoán tương lai
  (phân tích dự đoán); đề xuất hành động (phân tích đề xuất); có thể hỗ
  trợ quyết định theo thời gian thực; gắn liền tính khách quan và giảm
  thiên lệch.
  <br><span class="en">**Why do we need to make decisions based on data
  science?** (slide 30): turning data into Information → Knowledge →
  Wisdom; understanding the past (descriptive analytics); explaining why
  (diagnostic analytics); predicting the future (predictive analytics);
  recommending actions (prescriptive analytics); can support real-time
  decisions; embedding objectivity and reducing bias.</span>
- Slide 31 chỉ lặp lại tiêu đề phần, không có nội dung văn bản mới.
  <br><span class="en">Slide 31 only repeats the section header, no new
  text content.</span>
- **4 loại phân tích** (slide 32): Phân tích mô tả — trả lời câu hỏi "Điều
  gì đã xảy ra?"; Phân tích chẩn đoán — tìm câu trả lời cho câu hỏi "Vì
  sao điều này xảy ra?" hoặc "Điều gì đã sai?"; Phân tích dự đoán — dự
  đoán 1 sự kiện hoặc xu hướng tương lai, "Điều gì có khả năng xảy ra?";
  Phân tích đề xuất — tối ưu hóa quy trình, cấu trúc, và hệ thống thông
  qua hành động có thông tin, dựa trên phân tích dự đoán. Slide 33 (cùng
  tiêu đề) chỉ có hình minh họa, không có văn bản thêm.
  <br><span class="en">**4 types of analytics** (slide 32): Descriptive
  analytics — answers the question "What happened?"; Diagnostic analytics
  — finds answers to "why did this particular something happen?" or
  "what went wrong?"; Predictive analytics — predicts a future event or
  trend, "What is likely to happen?"; Prescriptive analytics — optimizes
  processes, structures, and systems through informed action based on
  predictive analytics. Slide 33 (same title) has only an illustration,
  no additional text.</span>

### 4. Tư duy phân tích dữ liệu (slide 34-36) - <span class="en">4. Data-analytic thinking (slides 34-36)</span>

- **Tư duy phân tích dữ liệu đi trước, ra quyết định dựa trên dữ liệu theo
  sau** (slide 34): tư duy phân tích dữ liệu đóng vai trò "la bàn", còn ra
  quyết định dựa trên dữ liệu đóng vai trò "sự chuyển động".
  <br><span class="en">**Data-analytic thinking comes first, data-driven
  decision making follows** (slide 34): data-analytic thinking provides
  the "compass," then data-driven decision making provides the
  "movement."</span>
- Slide 35 ("Văn hóa dữ liệu-hóa") và slide 36 ("Tổ chức dữ liệu-hóa") chỉ
  có tiêu đề, không có nội dung văn bản trích xuất được — chỉ có hình
  minh họa (nguồn: Internet).
  <br><span class="en">Slide 35 ("Data-driven culture") and slide 36
  ("Data-driven organization") have only titles, no extractable text
  content — only an illustration (source: Internet).</span>

## Liên kết - <span class="en">Links</span>

- [[big-data]] — bối cảnh vì sao khoa học dữ liệu bùng nổ.
  <br><span class="en">[[big-data]] — the context behind the data science
  boom.</span>
- [[dikw-pyramid]] — khung tư duy Data→Wisdom, nhắc lại xuyên suốt phần 3.
  <br><span class="en">[[dikw-pyramid]] — the Data→Wisdom framework,
  recurring throughout part 3.</span>
- [[data-science-definition]] — 3 định nghĩa + phân biệt thuật ngữ liên
  quan.
  <br><span class="en">[[data-science-definition]] — 3 definitions + the
  related terminology distinction.</span>
- [[data-driven-decision-making]] — 4 loại phân tích.
  <br><span class="en">[[data-driven-decision-making]] — the 4 types of
  analytics.</span>
- [[data-analytic-thinking]] — ẩn dụ la bàn/sự chuyển động.
  <br><span class="en">[[data-analytic-thinking]] — the compass/movement
  metaphor.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter01_Introduction_2025.pdf`,
slide 1-38 (course admin: slide 2-9; nội dung chương: slide 10-38).
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter01_Introduction_2025.pdf`, slides 1-38 (course
admin: slides 2-9; chapter content: slides 10-38).</span>
