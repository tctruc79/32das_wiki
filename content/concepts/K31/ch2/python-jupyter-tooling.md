---
type: concept
title: "Python và Jupyter Notebook"
title_en: "Python and Jupyter Notebook Tooling"
tags: [chapter-2, k31, tooling, python]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Python là ngôn ngữ lập trình thế hệ thứ 4, tạo năm 1991 bởi Guido van
Rossum; Jupyter Notebook là môi trường lập trình tương tác chạy trên
trình duyệt — cả hai hợp thành hạ tầng thực hành chính của môn học.
<br><span class="en">Python is a 4th-generation programming language,
created in 1991 by Guido van Rossum; Jupyter Notebook is a browser-based
interactive coding environment — together they form the main hands-on
infrastructure of the course.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Python**: ngôn ngữ thế hệ thứ 4 (phi thủ tục, cho phép truy cập cơ sở
  dữ liệu — cùng nhóm với SQL, R, Matlab), khác với các ngôn ngữ thủ tục
  thế hệ thứ 3 (C, C++, Java...). Đặc điểm chính khiến Python phù hợp cho
  khoa học dữ liệu: miễn phí, mã nguồn mở, dễ tiếp cận, đa năng, mạnh mẽ,
  cộng đồng hỗ trợ lớn. Tên gọi lấy cảm hứng từ loạt hài kịch BBC "Monty
  Python's Flying Circus", không phải con trăn.
  <br><span class="en">**Python**: a 4th-generation language
  (non-procedural, enables database access — same group as SQL, R,
  Matlab), unlike 3rd-generation procedural languages (C, C++, Java...).
  Key traits that make Python fit for data science: free, open source,
  accessible, versatile, powerful, strong community. The name is inspired
  by the BBC comedy "Monty Python's Flying Circus," not the snake.</span>
- **Jupyter Notebook**: tên ghép từ Julia + Python + R, chạy tương tác
  theo từng ô (cell) — ô code và ô Markdown (dùng để viết tài liệu/giải
  thích ngay trong notebook, hỗ trợ heading, in đậm/nghiêng, danh sách).
  2 cách cài: qua Anaconda (khuyến nghị, đã tích hợp sẵn) hoặc qua `pip`
  thủ công. Notebook chia sẻ được dưới dạng HTML/PDF/qua GitHub/Google
  Colab; xuất PDF khuyến nghị qua `nbconvert --to webpdf`.
  <br><span class="en">**Jupyter Notebook**: name from Julia + Python +
  R, runs interactively cell-by-cell — code cells and Markdown cells
  (used to write documentation/explanation right in the notebook,
  supporting headings, bold/italic, lists). 2 install paths: via Anaconda
  (recommended, bundled in) or manually via `pip`. Notebooks share as
  HTML/PDF/via GitHub/Google Colab; PDF export recommended via
  `nbconvert --to webpdf`.</span>
- Toàn bộ IDE/công cụ khác được nêu trong môn (Spyder, PyCharm, Google
  Colab) đều là lựa chọn thay thế cho cùng 1 việc: viết và chạy code
  Python — Jupyter Notebook là công cụ được môn học chọn làm chính.
  <br><span class="en">All other IDEs/tools named in the course (Spyder,
  PyCharm, Google Colab) are alternatives for the same job: writing and
  running Python code — Jupyter Notebook is the course's chosen main
  tool.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter01-introduction]] — nêu Python 3.10 + Jupyter Notebook/Spyder
  là công cụ chính của môn học (mục Công cụ).
  <br><span class="en">[[chapter01-introduction]] — names Python 3.10 +
  Jupyter Notebook/Spyder as the course's main tools (Tools
  section).</span>
- [[chapter02-python-jupyter]] — toàn bộ nội dung chương: lịch sử Python,
  5 thế hệ ngôn ngữ lập trình, ứng dụng của Python, hướng dẫn cài đặt và
  dùng Jupyter Notebook, cú pháp Markdown.
  <br><span class="en">[[chapter02-python-jupyter]] — the whole chapter's
  content: Python's history, 5 generations of programming languages,
  Python's applications, Jupyter Notebook install/usage guide, Markdown
  syntax.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[data-science-definition]] — Python là công cụ triển khai các kỹ thuật
  khoa học dữ liệu sẽ học ở Chapter 3-8.
  <br><span class="en">[[data-science-definition]] — Python is the tool
  for implementing the data science techniques taught in Chapters
  3-8.</span>
