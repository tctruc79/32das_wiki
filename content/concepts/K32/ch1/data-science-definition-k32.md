---
type: concept
title: "Khoa học Dữ liệu — Định nghĩa & Vai trò (K32)"
title_en: "Data Science — Definition & Roles (K32)"
tags: [chapter-1, k32, foundations]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Khoa học dữ liệu là thực hành trích xuất tri thức có liên quan tới quyết
định từ dữ liệu, kết hợp lập luận thống kê, phương pháp tính toán và tri
thức lĩnh vực, được đánh giá bằng việc quyết định có được cải thiện hay
không.
<br><span class="en">Data science is the practice of extracting
decision-relevant knowledge from data, combining statistical reasoning,
computational method and domain knowledge, judged by whether a decision
improves.</span>

## Diễn giải - <span class="en">Explanation</span>

- **3 khối định nghĩa được trích dẫn** (không còn gắn tên trường/nền
  tảng cụ thể): **Provost & Fawcett** (giáo trình môn học); **"một công
  thức tổng quát chung"**: "một lĩnh vực nghiên cứu sử dụng phương pháp,
  quy trình và hệ thống khoa học để trích xuất tri thức và hiểu biết từ
  dữ liệu"; **"một công thức liên ngành"**: "một lĩnh vực liên ngành,
  dùng thuật toán, quy trình và tiến trình để xem xét lượng lớn dữ liệu
  nhằm khám phá mẫu hình ẩn, tạo hiểu biết, và định hướng ra quyết định."
  <br><span class="en">**3 definition blocks cited** (no longer tied to
  specific university/platform names): **Provost & Fawcett** (course
  textbook); **"a common general formulation"**: "a field of study that
  uses scientific methods, processes and systems to extract knowledge and
  insight from data"; **"an interdisciplinary formulation"**: "an
  interdisciplinary field using algorithms, procedures and processes to
  examine large amounts of data, in order to uncover patterns, generate
  insight and direct decision-making."</span>
- **"Định nghĩa vận hành" của giảng viên** — định nghĩa tổng hợp riêng,
  nhấn mạnh 3 tiêu chí: **liên quan tới quyết định** (loại trừ phân tích
  không thay đổi được gì); **kết hợp** (không thành phần nào một mình là
  đủ — thống kê + tính toán + tri thức lĩnh vực); **đánh giá bằng việc
  quyết định có cải thiện** (cũng là tiêu chí chấm mini project của môn
  học).
  <br><span class="en">**The instructor's "working definition"** — a
  synthesized definition emphasizing 3 criteria: **decision-relevant**
  (excludes analysis that changes nothing); **combining** (no single
  ingredient suffices — statistics + computing + domain knowledge);
  **judged by whether a decision improves** (also the course's mini
  project grading criterion).</span>
- **Phân biệt thuật ngữ** (bảng định nghĩa 1 dòng/thuật ngữ, chi tiết
  hơn hẳn cách chỉ liệt kê tên): Khoa học dữ liệu (toàn bộ thực hành, từ
  đặt câu hỏi tới hỗ trợ quyết định), Phân tích dữ liệu — analysis (khảo
  sát 1 tập dữ liệu để trả lời câu hỏi cụ thể), Phân tích dữ liệu —
  analytics (hoạt động tổ chức dùng phân tích để ra quyết định, thường
  là báo cáo/dashboard), Khai phá dữ liệu (trích xuất mẫu hình từ tập dữ
  liệu lớn), Kỹ thuật dữ liệu (xây dựng pipeline/kho lưu trữ), Thao tác
  dữ liệu (làm sạch/định dạng lại/join dữ liệu thô), Trực quan hóa dữ
  liệu, Kho dữ liệu (có cấu trúc, mô hình hóa cho báo cáo), Hồ dữ liệu
  (lưu dữ liệu thô mọi định dạng, chỉ mô hình hóa khi dùng), Tích hợp dữ
  liệu (gộp nhiều nguồn thành 1 view nhất quán).
  <br><span class="en">**Distinguishing terminology** (a 1-line
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
  view).</span>
- **Bảng so sánh Khoa học dữ liệu vs Phân tích dữ liệu vs Business
  Intelligence** (5 tiêu chí — câu hỏi/dữ liệu/phương pháp/đầu ra/công
  cụ điển hình):

  | Tiêu chí | Business Intelligence | Data Analytics | Data Science |
  |---|---|---|---|
  | Câu hỏi | Điều gì đã xảy ra? | Điều gì đã xảy ra, và vì sao? | Điều gì sẽ xảy ra, và nên làm gì? |
  | Dữ liệu | Có cấu trúc, nội bộ, đã biết | Chủ yếu có cấu trúc | Cấu trúc + phi cấu trúc, thường có nguồn mới |
  | Phương pháp | Báo cáo, tổng hợp | Phân tích thống kê, kiểm định | Mô hình hóa, học máy, lập trình |
  | Đầu ra | Dashboard, báo cáo | Hiểu biết, đề xuất | Mô hình, dự đoán, sản phẩm dữ liệu |
  | Công cụ điển hình | Power BI, Tableau, SQL | Excel, SQL, R | Python, R, thư viện học máy |

  <br><span class="en">**Data Science vs Data Analytics vs Business
  Intelligence table** (5 criteria — question/data/methods/output/typical
  tools). Conclusion: overlapping practices, not rival
  professions.</span>
- **Ai làm việc với khoa học dữ liệu**: **Kỹ sư dữ liệu** (xây dựng/bảo
  trì pipeline + kho dữ liệu), **Nhà phân tích dữ liệu** (mô tả + chẩn
  đoán, tạo báo cáo nền), **Nhà khoa học dữ liệu** (đặt bài toán, xây +
  đánh giá mô hình, diễn giải kết quả), **Kỹ sư học máy** (đưa mô hình
  vào production, duy trì hoạt động), **Chuyên gia kinh doanh/lĩnh vực**
  (cung cấp ý nghĩa biến số + kiểm tra tính hợp lý). Ghi chú riêng cho
  sinh viên VNP: phần lớn sẽ **đặt hàng và đánh giá** phân tích hơn là tự
  xây dựng, nên framing/evaluation/interpretation quan trọng hơn thuật
  toán.
  <br><span class="en">**Who works with data science**: **Data
  engineer**, **Data analyst**, **Data scientist**, **ML engineer**,
  **Business/domain expert**. Note for VNP students: most will
  **commission and evaluate** analysis rather than build it — so framing,
  evaluation, interpretation matter more than algorithms.</span>
- **Sơ đồ AI vs Machine Learning vs Deep Learning vs Khoa học dữ liệu**:
  nhắc tới statistical learning, deep learning, Gen AI/LLM — hình ảnh/
  Venn diagram, phần text trích xuất qua `pdftotext` bị lỗi OCR nặng,
  không đủ tin cậy để mô tả chi tiết quan hệ giữa 4 khái niệm. Cần xem
  slide gốc (`raw/Lecture Notes/K32/
  VNP_DataScience_Chapter01_Introduction_2026.pdf`, slide 24).
  <br><span class="en">**AI vs Machine Learning vs Deep Learning vs Data
  Science diagram**: mentions statistical learning, deep learning, Gen
  AI/LLM — an image/Venn diagram, the `pdftotext` extraction is badly
  OCR-garbled, not reliable enough to describe the relationships in
  detail. See the original slide (`raw/Lecture Notes/K32/
  VNP_DataScience_Chapter01_Introduction_2026.pdf`, slide 24).</span>
- **Ứng dụng thực tế**: kinh doanh (tiếp thị nhắm mục tiêu, chấm điểm tín
  dụng, phát hiện gian lận, dự đoán rời bỏ), y tế (chẩn đoán hình ảnh, y
  tế công cộng), chính phủ (thành phố thông minh, chính phủ điện tử), và
  riêng mục **Việt Nam**: logistics/recommendation cho e-commerce, chấm
  điểm tín dụng tài chính tiêu dùng tại điểm bán, dự đoán rời bỏ khách
  hàng ngân hàng.
  <br><span class="en">**Real-world applications**: business, healthcare,
  government, plus a dedicated **Vietnam** section: e-commerce logistics/
  recommendation, consumer-finance credit scoring at point of sale, bank
  customer churn prediction.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter01-introduction-k32]] — toàn bộ nội dung mục "2. Khoa học dữ
  liệu là gì?": 3 định nghĩa + định nghĩa vận hành, bảng thuật ngữ, bảng
  so sánh DS/Analytics/BI, bảng vai trò, ứng dụng thực tế (kèm mục Việt
  Nam).
  <br><span class="en">[[chapter01-introduction-k32]] — all of section
  "2. What is data science?": 3 definitions + working definition,
  terminology table, DS/Analytics/BI table, roles table, real-world
  applications (incl. the Vietnam section).</span>

## Liên quan - <span class="en">Related concepts</span>

- [[big-data-k32]] — dữ liệu lớn là bối cảnh/tiền đề khiến khoa học dữ
  liệu bùng nổ.
  <br><span class="en">[[big-data-k32]] — big data is the context/premise
  behind the data science boom.</span>
- [[dikw-pyramid-k32]] — khoa học dữ liệu là quá trình có hệ thống để leo
  từ Data lên Wisdom.
  <br><span class="en">[[dikw-pyramid-k32]] — data science is the
  systematic process of climbing from Data to Wisdom.</span>
- [[data-analytic-thinking-k32]] — tư duy phân tích là điều kiện cần để
  áp dụng đúng các định nghĩa/vai trò ở trên vào 1 bài toán cụ thể.
  <br><span class="en">[[data-analytic-thinking-k32]] — analytic thinking
  is the prerequisite for correctly applying the above definitions/roles
  to a concrete problem.</span>
