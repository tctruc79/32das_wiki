---
type: concept
title: "Python và Jupyter Notebook (K32)"
title_en: "Python and Jupyter Notebook Tooling (K32)"
tags: [chapter-2, k32, tooling, python]
created: 2026-08-24
updated: 2026-09-05
status: complete
---

> **Cách đọc trang này**: đây là trang thực hành nhất của cả wiki — nên
> vừa đọc vừa mở Jupyter chạy thử từng đoạn mã. Bảng lỗi thường gặp và
> checklist PEP 8 ở cuối trang là 2 công cụ tra cứu nhanh khi debug bài
> tập hoặc project — không cần học thuộc, chỉ cần biết chúng nằm ở đây.
> <br><span class="en">**How to read this page**: this is the whole
> wiki's most hands-on page — read it with Jupyter open, running each
> snippet as you go. The common-errors table and the PEP 8 checklist at
> the end are quick-reference tools for debugging assignments or the
> project — no need to memorise them, just know they're here.</span>

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

## Vài hiểu lầm phổ biến về lịch sử Python - <span class="en">Common misconceptions about Python's history</span>

Vài chi tiết lịch sử hay bị nhớ sai, vì chúng dễ bị trộn với các cột mốc
tương tự của những ngôn ngữ khác. Python được **phát hành công khai lần
đầu năm 1991** (bản 0.9.0) — không phải 1989, năm Guido van Rossum chỉ
mới *bắt đầu viết* nó. Mục tiêu ban đầu khi tạo Python không phải để
thay thế C hay xây hệ điều hành, mà đơn giản là **tạo ra 1 ngôn ngữ dễ
học cho người mới bắt đầu** — cú pháp gần với tiếng Anh tự nhiên là hệ
quả trực tiếp của mục tiêu này. Người được ghi nhận là tác giả là
**Guido van Rossum**; dễ nhầm với Dennis Ritchie (tác giả C và Unix) hay
Bill Gates (đồng sáng lập Microsoft) — cả 2 đều là nhân vật lớn của lịch
sử lập trình nhưng không liên quan tới Python. Ngay cả cái tên "Python"
cũng thường bị đoán nhầm là lấy cảm hứng từ con trăn hoặc thần thoại Hy
Lạp; thực ra nó được đặt theo chương trình hài kịch BBC *Monty Python's
Flying Circus*. Triết lý thiết kế — dễ đọc, làm được nhiều việc với ít
dòng lệnh hơn, ưu tiên sự đơn giản — được phát biểu cô đọng trong "Zen of
Python" (gõ `import this` trong bất kỳ ô lệnh nào để xem toàn văn), và
giải thích được phần lớn các lựa chọn cú pháp sẽ gặp trong suốt môn học.
<br><span class="en">A few historical details are commonly misremembered
because they blend with similar milestones from other languages. Python
was **first publicly released in 1991** (version 0.9.0) — not 1989, the
year Guido van Rossum merely *started* writing it. The original goal
behind Python was not to replace C or to build operating systems, but
simply **to create a language easy for beginners to learn** — its
English-like syntax is a direct consequence of that goal. Its credited
author is **Guido van Rossum**, easily confused with Dennis Ritchie
(creator of C and Unix) or Bill Gates (co-founder of Microsoft) — both
major figures in programming history but unrelated to Python. Even the
name "Python" is often mistakenly assumed to come from the snake or
Greek mythology; it was in fact named after the BBC comedy series
*Monty Python's Flying Circus*. The design philosophy — readability,
doing more with fewer lines, favouring simplicity — is distilled in the
"Zen of Python" (type `import this` in any code cell to see it in full),
and explains most of the syntax choices encountered throughout the
course.</span>

## Đọc và sửa lỗi - <span class="en">Reading and fixing errors</span>

Phần lớn thông báo lỗi của người mới học rơi vào một số ít loại lặp đi
lặp lại, và nhận diện đúng loại lỗi thường nhanh hơn hẳn việc dò từng
dòng code. `SyntaxError` thường do thiếu dấu `:`, ngoặc, hoặc dấu nháy;
`IndentationError` do khối lệnh thụt sai (hoặc thụt 2 lần cùng lúc);
`NameError` do biến chưa tồn tại — nguyên nhân phổ biến nhất là quên
chạy lại ô lệnh đã tạo ra biến đó sau khi khởi động lại kernel;
`TypeError` do trộn kiểu dữ liệu không tương thích (vd `"5" + 5`);
`ValueError` khi kiểu dữ liệu đúng nhưng giá trị bất khả thi (vd
`int("abc")`); `IndexError`/`KeyError` khi truy cập vị trí hoặc khóa
không tồn tại trong list/dictionary; `ModuleNotFoundError` khi thư viện
chưa được cài đặt; và `FileNotFoundError` khi sai tên file hoặc sai thư
mục làm việc. Nguyên tắc đọc lỗi hiệu quả: luôn đọc **dòng cuối cùng**
của thông báo lỗi trước — đó là loại lỗi và mô tả ngắn gọn — rồi mới lần
theo traceback lên trên để tìm dòng code cụ thể gây ra nó.
<br><span class="en">Most beginner error messages fall into a small,
recurring set of categories, and correctly identifying the category is
usually far faster than re-reading every line of code. `SyntaxError`
usually stems from a missing `:`, bracket, or quotation mark;
`IndentationError` from a block indented incorrectly; `NameError` from a
variable that doesn't exist yet — most commonly because the cell that
created it wasn't re-run after a kernel restart; `TypeError` from mixing
incompatible types; `ValueError` when the type is right but the value is
impossible; `IndexError`/`KeyError` from accessing a position or key that
doesn't exist; `ModuleNotFoundError` from a library that isn't installed;
and `FileNotFoundError` from a wrong filename or working directory. The
effective reading strategy: always read the **last line** of the error
message first — it names the error type and gives a short description —
then trace back up through the traceback to find the specific offending
line.</span>

## Chuẩn viết code — vì sao nó quan trọng - <span class="en">Coding style — why it matters</span>

Python không bắt buộc phải tuân theo PEP 8 để chạy được, nhưng vi phạm
nó khiến code khó đọc lại — kể cả với chính tác giả sau vài tuần. Các
quy tắc cốt lõi: thụt lề nhất quán 4 dấu cách (không trộn dấu cách với
tab); đặt tên biến/hàm theo kiểu `snake_case`; chừa khoảng trắng quanh
toán tử (`x = a + b`, không phải `x=a+b`); giữ mỗi dòng dưới khoảng 79
ký tự; dùng dòng trống để tách các khối logic (2 dòng trống trước một
định nghĩa hàm); viết comment giải thích **vì sao** làm vậy, không phải
lặp lại **code đang làm gì**; và đặt đơn vị ngay trong tên biến (vd
`gdp_billion_usd`, `rate_pct`) để tránh nhầm lẫn đơn vị — một lỗi phổ
biến và tốn kém trong phân tích định lượng. Như chính người tạo ra ngôn
ngữ này từng nói: code được đọc nhiều hơn hẳn số lần nó được viết.
<br><span class="en">Python does not require PEP 8 compliance to run,
but violating it makes code hard to re-read — even for its own author a
few weeks later. The core rules: indent consistently with 4 spaces
(never mixing spaces and tabs); name variables/functions in
`snake_case`; put spaces around operators; keep lines under about 79
characters; use blank lines to separate logical blocks (2 blank lines
before a function definition); write comments that explain **why**, not
restate **what** the code does; and encode units directly in variable
names (e.g. `gdp_billion_usd`, `rate_pct`) to avoid unit-confusion errors
— a common and costly mistake in quantitative analysis. As the
language's own creator put it: code is read far more often than it is
written.</span>

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
