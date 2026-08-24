---
type: concept
title: "Python và Jupyter Notebook (K32)"
title_en: "Python and Jupyter Notebook Tooling (K32)"
tags: [chapter-2, k32, tooling, python]
created: 2026-08-24
updated: 2026-08-24
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Python là ngôn ngữ lập trình thế hệ thứ 4, tạo năm 1991 bởi Guido van
Rossum; Jupyter Notebook là môi trường lập trình tương tác chạy theo ô
(cell) trên trình duyệt — cả hai hợp thành hạ tầng thực hành chính của
môn học. Bản K32 dạy công cụ này chi tiết và vận hành hơn hẳn bản K31:
thêm cơ chế kernel, 3 loại ô, 2 chế độ soạn thảo, bảng phím tắt đầy đủ,
magic commands, và toàn bộ cú pháp Python cơ bản (biến, kiểu dữ liệu,
cấu trúc điều khiển, hàm, xử lý lỗi).
<br><span class="en">Python is a 4th-generation programming language,
created in 1991 by Guido van Rossum; Jupyter Notebook is a browser-based,
cell-driven interactive coding environment — together they form the
course's main hands-on infrastructure. The K32 version teaches this
tooling in far more operational depth than K31: the kernel mechanism, 3
cell types, 2 editing modes, a full keyboard-shortcut table, magic
commands, and the entire core Python syntax (variables, data types,
control flow, functions, error handling).</span>

## Diễn giải - <span class="en">Explanation</span>

- **Python**: ngôn ngữ thế hệ thứ 4 (phi thủ tục, cho phép truy cập cơ sở
  dữ liệu — cùng nhóm SQL, R, Matlab). Đặc điểm chính: miễn phí, mã
  nguồn mở, dễ tiếp cận, đa năng, mạnh mẽ, thông dịch (không cần biên
  dịch), cộng đồng lớn (500.000+ gói trên PyPI). Bản K32 thêm 1 bảng so
  sánh Python với R/Stata-EViews/Excel — kết luận Python và R là **bổ
  trợ**, không phải thay thế nhau.
  <br><span class="en">**Python**: a 4th-generation language (non-
  procedural, database access — same group as SQL, R, Matlab). Key
  traits: free, open source, accessible, versatile, powerful, interpreted,
  a large community (500,000+ PyPI packages). K32 adds a Python vs R vs
  Stata/EViews vs Excel comparison table — concluding Python and R are
  **complements**, not substitutes.</span>
- **Jupyter Notebook**: chạy theo ô (cell) — 3 loại: Code, Markdown, Raw.
  Nhãn `In [n]`/`Out[n]` thể hiện **thứ tự thực thi**, không phải thứ tự
  hiển thị trên màn hình — nguồn gốc phổ biến nhất của lỗi cho người
  mới. 2 chế độ: Edit (viền xanh lá, gõ nội dung) và Command (viền xanh
  dương, phím tắt điều khiển notebook). Kernel là tiến trình Python chạy
  nền, nhớ mọi biến — Interrupt để dừng vòng lặp vô hạn, Restart & Run
  All là bước kiểm tra cuối cùng bắt buộc trước khi nộp bài.
  <br><span class="en">**Jupyter Notebook**: cell-based — 3 types: Code,
  Markdown, Raw. `In [n]`/`Out[n]` labels show **execution order**, not
  screen order — the most common source of beginner errors. 2 modes:
  Edit vs Command. The kernel remembers all variables — Interrupt stops
  infinite loops; Restart & Run All is the mandatory final check before
  submitting.</span>
- **Cú pháp Python cốt lõi** (hoàn toàn mới so với K31): biến và 4 kiểu
  cơ bản (`str`/`int`/`float`/`bool`); toán tử số học/so sánh/logic;
  chuỗi và f-string; cấu trúc dữ liệu — list (có thể sửa), tuple (bất
  biến), set (không trùng lặp), dictionary (khóa-giá trị); điều kiện
  `if`/`elif`/`else`; vòng lặp `for`/`while` + `break`/`continue`; list
  comprehension; hàm (kể cả `lambda`, biến cục bộ/toàn cục); xử lý lỗi
  `try`/`except`; module/thư viện (bí danh chuẩn `np`/`pd`/`plt`/`sns`/
  `sm`); chuẩn viết code PEP 8.
  <br><span class="en">**Core Python syntax** (entirely new vs K31):
  variables and the 4 basic types; arithmetic/comparison/logical
  operators; strings and f-strings; data structures — lists (mutable),
  tuples (immutable), sets (no duplicates), dictionaries (key-value);
  `if`/`elif`/`else`; `for`/`while` loops with `break`/`continue`; list
  comprehensions; functions (including `lambda`, local/global scope);
  `try`/`except` error handling; modules/libraries (standard aliases);
  PEP 8 style.</span>
- **Cài đặt và chia sẻ**: 3 cách cài (Anaconda, `pip`, hoặc dùng online
  không cần cài — Google Colab); xuất PDF qua "File > Save and Export
  Notebook As > HTML" rồi in từ trình duyệt (khác cách dùng dòng lệnh
  `nbconvert --to webpdf` của K31).
  <br><span class="en">**Install & share**: 3 install paths (Anaconda,
  `pip`, or Google Colab with no install); PDF export via HTML + browser
  print (different from K31's `nbconvert --to webpdf` command-line
  route).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter01-introduction-k32]] — nêu Python 3.13 + Jupyter Notebook/
  Spyder + Google Colab là công cụ chính của môn học (mục Công cụ).
  <br><span class="en">[[chapter01-introduction-k32]] — names Python
  3.13 + Jupyter Notebook/Spyder + Google Colab as the course's main
  tools (Tools section).</span>
- [[chapter02-python-jupyter-k32]] — nội dung chính: phần 1-3 (giới
  thiệu Python, hướng dẫn Jupyter, cú pháp Python) và phần 5-6 (Markdown,
  chia sẻ notebook, bài tập).
  <br><span class="en">[[chapter02-python-jupyter-k32]] — the main
  content: Sections 1-3 (Python intro, Jupyter guide, Python syntax) and
  Sections 5-6 (Markdown, sharing, exercises).</span>

## Liên quan - <span class="en">Related concepts</span>

- [[python-data-analysis-stack]] — bước tiếp theo ngay sau khi nắm vững
  cú pháp Python cơ bản: dùng cú pháp này để thao tác với NumPy/pandas/
  matplotlib/seaborn/statsmodels/scikit-learn, cùng trong Chapter 2 K32.
  <br><span class="en">[[python-data-analysis-stack]] — the immediate
  next step after mastering core Python syntax: using it to work with
  NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn, also in
  Chapter 2 K32.</span>
- [[data-science-definition-k32]] — Python/Jupyter là công cụ triển khai
  thực hành các kỹ thuật khoa học dữ liệu đã định nghĩa ở Chapter 1 K32.
  <br><span class="en">[[data-science-definition-k32]] — Python/Jupyter
  is the practical tool implementing the data science techniques defined
  in Chapter 1 K32.</span>
