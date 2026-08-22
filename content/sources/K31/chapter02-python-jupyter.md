---
type: source
title: "Chapter 2 (K31) — Python và Jupyter Notebook"
title_en: "Chapter 2 (K31) — Python and Jupyter Notebook"
tags: [chapter-2, k31, tooling, python]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter02_Python and Jupyter Notebook_2025.pdf"
---

## Metadata

- **Khóa**: K31 (2025).
  <br><span class="en">**Cohort**: K31 (2025).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: 41.
  <br><span class="en">**Slide count**: 41.</span>
- **Vị trí trong môn**: chương công cụ — chuẩn bị Python/Jupyter trước khi
  học các thuật toán học máy ở Chapter 3-8.
  <br><span class="en">**Position in the course**: the tooling chapter —
  preparing Python/Jupyter before the machine learning algorithms in
  Chapters 3-8.</span>

## Tóm tắt - <span class="en">Summary</span>

- Chương này thuần về **công cụ**, không có nội dung lý thuyết thống kê/
  học máy. Mở đầu bằng 5 câu hỏi trắc nghiệm khởi động (warm-up quiz) về
  lịch sử Python, sau đó tới nội dung giới thiệu Python và hướng dẫn thực
  hành Jupyter Notebook.
  <br><span class="en">This chapter is purely about **tooling**, no
  statistics/ML theory content. It opens with 5 warm-up multiple-choice
  quiz questions about Python's history, then moves to introducing Python
  and a Jupyter Notebook hands-on guide.</span>
- 8 "Practical Exercises" (slide 25-32) và phần "Tasks in Pairs" (slide
  40) là bài tập code — nội dung program cụ thể là hình ảnh, không trích
  xuất được qua `pdftotext`.
  <br><span class="en">The 8 "Practical Exercises" (slides 25-32) and the
  "Tasks in Pairs" section (slide 40) are coding exercises — the specific
  program content is an image, not extractable via `pdftotext`.</span>

## Nội dung chính - <span class="en">Key content</span>

### Khởi động: 5 câu hỏi trắc nghiệm về Python (slide 5-14) - <span class="en">Warm-up: 5 Python quiz questions (slides 5-14)</span>

- **Câu 1**: Python ra mắt lần đầu năm nào? → **1991**. Các ngôn ngữ khác
  cùng thời: Assembly (thập niên 1940), FORTRAN (1957, trình biên dịch
  đầu tiên), Pascal (1970), C (1972)/C# (2001), Java/JavaScript/Delphi
  (1995).
  <br><span class="en">**Q1**: What year was Python first released? →
  **1991**. Other languages of the era: Assembly (1940s), FORTRAN (1957,
  first compiler), Pascal (1970), C (1972)/C# (2001), Java/JavaScript/
  Delphi (1995).</span>
- **Câu 2**: Lý do chính tạo ra Python? (đáp án cụ thể không hiện trong
  text trích xuất — slide chỉ cho 4 lựa chọn: thay thế C, phát triển web,
  tạo ngôn ngữ cho người mới bắt đầu, xây hệ điều hành).
  <br><span class="en">**Q2**: Main reason Python was created? (the
  specific answer isn't in the extracted text — the slide only shows 4
  choices: replace C, develop web apps, create a beginner-friendly
  language, build operating systems).</span>
- **Câu 3**: Ai được ghi nhận là người tạo ra Python? → **Guido van
  Rossum** (phân biệt với Dennis Ritchie — tạo C/UNIX; Larry Page — công
  cụ tìm kiếm Google; Bill Gates — đồng sáng lập Microsoft).
  <br><span class="en">**Q3**: Who is credited with creating Python? →
  **Guido van Rossum** (distinguished from Dennis Ritchie — created C/
  UNIX; Larry Page — Google's search engine; Bill Gates — co-founder of
  Microsoft).</span>
- **Câu 4**: Triết lý thiết kế của Python? → **Tất cả các ý trên**: coi
  trọng khả năng đọc (readability counts — rõ ràng, dễ hiểu); ít mà nhiều
  (less is more — làm được nhiều việc với ít dòng code hơn); đơn giản là
  chìa khóa thành công (giảm độ phức tạp, chu kỳ phát triển nhanh hơn).
  <br><span class="en">**Q4**: Python's design philosophy? → **All of the
  above**: readability counts (clear, understandable, easy to comprehend);
  less is more (achieve more with fewer lines); simplicity is the key to
  success (reduced complexity, faster development cycles).</span>
- **Câu 5**: Tên "Python" lấy cảm hứng từ đâu? → **Loạt hài kịch BBC
  "Monty Python's Flying Circus"** (không phải con trăn, không phải nhân
  vật thần thoại Hy Lạp).
  <br><span class="en">**Q5**: Where did the name "Python" come from? →
  **The BBC comedy series "Monty Python's Flying Circus"** (not the
  snake, not a Greek mythological figure).</span>

### 1. Giới thiệu Python (slide 15-20) - <span class="en">1. Introduction to Python (slides 15-20)</span>

- **Python là gì?** (slide 15): một ngôn ngữ lập trình, tạo năm 1991 bởi
  lập trình viên người Hà Lan Guido van Rossum. Hướng tới hạn chế các
  khối code và giao diện gọn hơn. Có thể xếp vào nhóm ngôn ngữ lập trình
  thế hệ thứ 4.
  <br><span class="en">**What is Python?** (slide 15): a programming
  language, created in 1991 by Dutch programmer Guido van Rossum. Aims to
  limit code blocks and a less busy appearance. Can be placed as a
  fourth-generation programming language.</span>
- **5 thế hệ ngôn ngữ lập trình** (slide 16): Thế hệ 1 — ngôn ngữ máy
  (nhị phân, phụ thuộc phần cứng); Thế hệ 2 — hợp ngữ/Assembly (con người
  đọc được, cần assembler chuyển sang mã máy); Thế hệ 3 — ngôn ngữ thủ
  tục (C, C++, Pascal, FORTRAN, COBOL, Java...); Thế hệ 4 — ngôn ngữ phi
  thủ tục, cho phép truy cập cơ sở dữ liệu (SQL, R, **Python**, Matlab...);
  Thế hệ 5 — dựa trên khái niệm trí tuệ nhân tạo (PROLOG, LISP,
  Mercury...).
  <br><span class="en">**5 generations of programming languages** (slide
  16): 1st gen — machine languages (binary, machine-dependent); 2nd gen —
  assembly languages (human-readable, needs an assembler to convert to
  machine code); 3rd gen — procedural languages (C, C++, Pascal, FORTRAN,
  COBOL, Java...); 4th gen — non-procedural, enables database access
  (SQL, R, **Python**, Matlab...); 5th gen — based on the concept of
  artificial intelligence (PROLOG, LISP, Mercury...).</span>
- **Python dùng để làm gì?** (slide 17): AI & học máy; phân tích dữ liệu;
  phát triển web (YouTube, Instagram, Dropbox...); tối ưu hóa công cụ tìm
  kiếm (SEO); blockchain; phát triển game/phần mềm; tự động hóa; ứng dụng
  giao diện đồ họa (Kivy, Tkinter, PyQt...); thu thập dữ liệu web/web
  scraping (Scrapy, BeautifulSoup, Selenium); đa phương tiện; và nhiều
  lĩnh vực khác.
  <br><span class="en">**What is Python used for?** (slide 17): AI &
  machine learning; data analytics; web development (YouTube, Instagram,
  Dropbox...); search engine optimization (SEO); blockchain; game/
  software development; automation; GUI applications (Kivy, Tkinter,
  PyQt...); web scraping (Scrapy, BeautifulSoup, Selenium); multimedia;
  and more.</span>
- **Vì sao chọn Python?** (slide 18-20): **Đặc điểm chính**: miễn phí; mã
  nguồn mở; dễ tiếp cận (mọi lứa tuổi đều học được); đa năng (giải quyết
  vấn đề trong nhiều lĩnh vực); mạnh mẽ (từ tác vụ đơn giản đến phức tạp);
  cộng đồng hỗ trợ lớn. **Phần mềm/công cụ thường dùng**: trình thông
  dịch Python — CPython; môi trường phát triển tích hợp (IDE) — PyCharm,
  Spyder, Jupyter Notebook và JupyterLab; hệ thống quản lý phiên bản —
  Git (và GitHub); nền tảng online — Jupyter Notebook.
  <br><span class="en">**Why Python?** (slides 18-20): **Key features**:
  free; open source; accessible (people of all ages can learn); versatile
  (solves problems across many fields); powerful (from simple to complex
  tasks); strong community support. **Commonly used software/tools**:
  Python interpreter — CPython; IDEs — PyCharm, Spyder, Jupyter Notebook
  and JupyterLab; version control — Git (and GitHub); online platforms —
  Jupyter Notebook.</span>

### 2. Jupyter Notebook: cách dùng (slide 21-40) - <span class="en">2. Jupyter Notebook: How to Use? (slides 21-40)</span>

- **Jupyter Notebook là gì?** (slide 21): tên "Jupyter" là từ ghép của
  Julia + Python + R, đồng thời liên hệ biểu tượng tới cuốn sổ ghi chép
  Sao Mộc (Jupiter) của Galileo. Hoàn toàn miễn phí và mã nguồn mở. Hiện
  hỗ trợ đa ngôn ngữ (hơn 40 ngôn ngữ). Notebook dễ dàng chia sẻ dưới dạng
  HTML, PDF, hoặc qua GitHub, nbviewer, Google Colab. Có thể mở rộng bằng
  plugin (vd JupyterLab, JupyterHub).
  <br><span class="en">**What is Jupyter Notebook?** (slide 21): Jupyter
  = acronym of Julia + Python + R, and symbolically linked to Galileo's
  Jupiter notebooks. Jupyter Notebooks are completely free and open
  source. Nowadays it has multi-language support (40+ languages).
  Notebooks can be easily shared as HTML, PDF, or via GitHub, nbviewer,
  Google Colab. Can be extended with plugins (e.g. JupyterLab,
  JupyterHub).</span>
- **Cài đặt** (slide 22): 2 cách — (1) cài Anaconda (tải bản mới nhất cho
  Python 3.10, cài theo hướng dẫn, đã bao gồm Jupyter); (2) cài thủ công
  bằng `pip` (cho người dùng nâng cao) — cập nhật pip
  (`python -m pip install --upgrade pip`), cài Jupyter
  (`python -m pip install jupyter`), khởi chạy (`jupyter notebook`).
  <br><span class="en">**Installation** (slide 22): 2 ways — (1) install
  Anaconda (download the latest version for Python 3.10, follow the
  instructions, Jupyter is included); (2) install manually via `pip` (for
  advanced users) — update pip
  (`python -m pip install --upgrade pip`), install Jupyter
  (`python -m pip install jupyter`), launch
  (`jupyter notebook`).</span>
- **Tạo notebook đầu tiên** (slide 23-33): chạy Jupyter → bấm nút "New" ở
  góc trên phải, chọn "Python 3" → notebook mở ra ở tab mới. Ví dụ 1: gõ
  `print('Hello World!')` rồi chạy (nút Run hoặc Ctrl+Enter). 8 bài tập
  thực hành ("Practical Exercises", slide 25-32) yêu cầu tìm output của
  các chương trình Python cho sẵn — nội dung chương trình là hình ảnh,
  không trích xuất được. Slide 33 giao thêm 6 tác vụ tự viết code: tính
  tổng 2 số bất kỳ; tính diện tích hình chữ nhật; trò chơi "đoán số"; viết
  10 số đầu tiên của dãy Fibonacci; đổi nhiệt độ Celsius sang Fahrenheit;
  chạy 1 mô hình hồi quy tuyến tính đơn giản.
  <br><span class="en">**Creating your first notebook** (slides 23-33):
  run Jupyter → click "New" top-right, select "Python 3" → notebook opens
  in a new tab. Example 1: type `print('Hello World!')` then run (Run
  button or Ctrl+Enter). 8 "Practical Exercises" (slides 25-32) ask you to
  find the output of given Python programs — the program content is an
  image, not extractable. Slide 33 assigns 6 more self-written coding
  tasks: sum of two numbers; area of a rectangle; a "guess the number"
  game; first 10 Fibonacci numbers; Celsius-to-Fahrenheit converter; run a
  simple linear regression.</span>
- **Markdown** (slide 34-37): dùng để định dạng tài liệu trong các ô
  Markdown của notebook. Heading: dùng dấu `#` theo sau 1 khoảng trắng
  (`#` tiêu đề chính, `##` mục lớn, `###` mục con, `####` mục con cấp 4).
  Nhấn mạnh: chữ đậm `__text__` hoặc `**text**`; chữ nghiêng `_text_` hoặc
  `*text*`. Danh sách gạch đầu dòng: dấu `-` theo sau 1-2 khoảng trắng,
  hoặc `*`. Danh sách đánh số: gõ `1.` theo sau khoảng trắng cho mỗi mục
  (Jupyter tự đánh số lại đúng thứ tự khi chạy ô). Bài thực hành: tạo ô
  Markdown mới gồm tiêu đề notebook, danh sách gạch đầu dòng có **Tác
  giả:** và **Ngày:**, và 1 ô Markdown khác liệt kê 3 món ăn yêu thích.
  <br><span class="en">**Markdown** (slides 34-37): used to format
  documentation in the notebook's Markdown cells. Headings: `#` followed
  by a space (`#` title, `##` major heading, `###` subheading, `####`
  4th-level subheading). Emphasis: bold `__text__` or `**text**`; italic
  `_text_` or `*text*`. Bullets: `-` followed by 1-2 spaces, or `*`.
  Numbered lists: type `1.` followed by a space for each entry (Jupyter
  auto-renumbers correctly on run). Practice: create a new Markdown cell
  with the notebook's title, a bullet list with **Author:** and
  **Date:**, and another Markdown cell listing your top 3 favorite
  foods.</span>
- **Chia sẻ notebook** (slide 38-39): trước khi chia sẻ — "Cell > All
  Output > Clear" rồi "Kernel > Restart and Run All"; xuất file qua
  "File > Download As". Xuất PDF qua `nbconvert`: 2 cách — qua LaTeX,
  hoặc qua HTML (khuyến nghị): chạy Anaconda prompt, cài
  `pip install nbconvert[webpdf]`, rồi chạy
  `jupyter nbconvert --to webpdf --allow-chromium-download
  your-notebook-file.ipynb`.
  <br><span class="en">**Sharing notebooks** (slides 38-39): before
  sharing — "Cell > All Output > Clear" then "Kernel > Restart and Run
  All"; export via "File > Download As". Export to PDF via `nbconvert`: 2
  options — via LaTeX, or via HTML (recommended): run Anaconda prompt,
  install `pip install nbconvert[webpdf]`, then run
  `jupyter nbconvert --to webpdf --allow-chromium-download
  your-notebook-file.ipynb`.</span>
- **Bài tập theo cặp** (slide 40): tạo danh sách trái cây yêu thích và in
  từng phần tử; in 10 số chẵn đầu tiên; kiểm tra 1 số dương/âm/bằng 0; vẽ
  scatter plot với dữ liệu ngẫu nhiên; vẽ histogram; chạy mô hình hồi quy
  tuyến tính đơn giản trên 1 tập dữ liệu nhỏ; vẽ heatmap thể hiện tương
  quan giữa các biến; tạo nhiều đồ thị trong cùng 1 figure (subplots).
  <br><span class="en">**Tasks in pairs** (slide 40): create a list of
  favorite fruits and print each; print the first 10 even numbers; check
  if a number is positive/negative/zero; generate a scatter plot with
  random data; generate a histogram; run a simple linear regression on a
  small dataset; create a heatmap of correlation between variables;
  create multiple plots in one figure (subplots).</span>

## Liên kết - <span class="en">Links</span>

- [[python-jupyter-tooling]] — trang khái niệm tổng hợp công cụ Python +
  Jupyter Notebook.
  <br><span class="en">[[python-jupyter-tooling]] — the concept page
  synthesizing Python + Jupyter Notebook tooling.</span>
- [[chapter01-introduction]] — Chapter 1 đã nêu Python là ngôn ngữ chính
  của môn học (mục Công cụ, slide 5).
  <br><span class="en">[[chapter01-introduction]] — Chapter 1 already
  named Python as the course's main language (Tools section, slide
  5).</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter02_Python and Jupyter
Notebook_2025.pdf`, slide 1-41.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter02_Python and Jupyter Notebook_2025.pdf`, slides
1-41.</span>
