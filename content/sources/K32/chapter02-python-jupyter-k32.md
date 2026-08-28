---
type: source
title: "Chapter 2 (K32) — Python và Jupyter Notebook"
title_en: "Chapter 2 (K32) — Python and Jupyter Notebook"
tags: [chapter-2, k32, tooling, python, data-analysis]
created: 2026-08-24
updated: 2026-08-28
status: complete
source_file: "raw/Lecture Notes/K32/Chapter02/VNP_DataScience_Chapter02_Python_and_Jupyter_Notebook_2026.pdf"
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
- **Số slide**: 78 (khớp đúng số trang vật lý của PDF — không lệch như
  Chapter 1 K32).
  <br><span class="en">**Slide count**: 78 (matches the PDF's physical
  page count exactly — no gap unlike Chapter 1 K32).</span>
- **Vị trí trong môn**: chương công cụ — chuẩn bị Python/Jupyter trước
  các chương thuật toán. So với bản K31 (2025, 41 slide), bản K32 gần
  như **gấp đôi độ dài** và thêm hẳn 2 phần hoàn toàn mới: "Python
  Essentials by Example" (cú pháp Python) và "Python for Data Analysis"
  (NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn) — bản K31
  chỉ dừng ở giới thiệu Python + cài đặt/dùng Jupyter + Markdown, không
  dạy cú pháp hay thư viện phân tích dữ liệu nào. **Theo quy tắc tách cụm
  khóa học** (CLAUDE.md, mục "Tách cụm K31/K32"), trang này không link
  trực tiếp tới trang nguồn K31.
  <br><span class="en">**Position in the course**: the tooling chapter —
  preparing Python/Jupyter before the algorithm chapters. Versus the K31
  (2025) version (41 slides), the K32 version is **almost twice as
  long** and adds 2 entirely new sections: "Python Essentials by
  Example" (Python syntax) and "Python for Data Analysis" (NumPy/pandas/
  matplotlib/seaborn/statsmodels/scikit-learn) — the K31 version stopped
  at introducing Python + installing/using Jupyter + Markdown, with no
  syntax or data-analysis-library teaching at all. **Per the cohort
  separation rule** (CLAUDE.md), this page does not link directly to the
  K31 source page.</span>
- **Dữ liệu thực hành đi kèm**: `raw/Lecture Notes/K32/Chapter02/Data2.csv` — dùng
  làm ví dụ minh họa cho mục pandas (4.3, slide 60). Xem chi tiết cấu
  trúc dữ liệu ở mục riêng bên dưới.
  <br><span class="en">**Companion practice dataset**: `raw/Lecture
  Notes/K32/Chapter02/Data2.csv` — used as the worked example for the pandas
  section (4.3, slide 60). See the dedicated section below for its
  structure.</span>

## Tóm tắt - <span class="en">Summary</span>

- Cấu trúc 6 phần (slide 4): (1) Giới thiệu Python, (2) Jupyter Notebook:
  cách dùng, (3) Python Essentials by Example, (4) Python for Data
  Analysis, (5) Documenting and Sharing Notebook, (6) Practice and
  exercises.
  <br><span class="en">6-part structure (slide 4): (1) Introduction to
  Python, (2) Jupyter Notebook: How to Use, (3) Python Essentials by
  Example, (4) Python for Data Analysis, (5) Documenting and Sharing
  Your Notebook, (6) Practice and exercises.</span>
- Phần 1-2 (giới thiệu Python + hướng dẫn Jupyter) giữ gần như nguyên
  tinh thần bản K31 nhưng bổ sung nhiều chi tiết vận hành thực tế: bảng
  so sánh Python với R/Stata/Excel, cách hoạt động của kernel, 3 loại ô
  (cell), 2 chế độ (edit/command), bảng phím tắt đầy đủ, magic commands,
  và các "bẫy" thường gặp của người mới học.
  <br><span class="en">Sections 1-2 (Python intro + Jupyter guide) keep
  roughly the same spirit as K31 but add much more operational detail: a
  Python vs R/Stata/Excel comparison table, how the kernel works, 3 cell
  types, 2 modes (edit/command), a full keyboard-shortcut table, magic
  commands, and common beginner traps.</span>
- Phần 3 (Python Essentials) là nội dung **hoàn toàn mới**: dạy cú pháp
  Python từ đầu — biến, kiểu dữ liệu, toán tử, chuỗi, f-string, list/
  tuple/set/dictionary, điều kiện, vòng lặp, list comprehension, hàm,
  lambda, xử lý lỗi try/except, bảng tra lỗi thường gặp, module/thư
  viện, và chuẩn viết code PEP 8.
  <br><span class="en">Section 3 (Python Essentials) is **entirely new**
  content: teaches Python syntax from scratch — variables, data types,
  operators, strings, f-strings, lists/tuples/sets/dictionaries,
  conditions, loops, list comprehensions, functions, lambdas, try/except
  error handling, a common-errors reference table, modules/libraries,
  and PEP 8 style.</span>
- Phần 4 (Python for Data Analysis) cũng **hoàn toàn mới**: giới thiệu
  trọn bộ thư viện phân tích dữ liệu dùng xuyên suốt phần còn lại của
  môn học — NumPy, pandas (import/lọc/nhóm dữ liệu, dùng `Data2.csv`
  làm ví dụ thật), matplotlib, seaborn, statsmodels (hồi quy OLS đơn và
  đa biến), và 1 ví dụ "nếm thử" scikit-learn (train/test split, dự
  đoán, R²).
  <br><span class="en">Section 4 (Python for Data Analysis) is also
  **entirely new**: introduces the full data-analysis library stack used
  throughout the rest of the course — NumPy, pandas (import/filter/group
  data, using `Data2.csv` as a real example), matplotlib, seaborn,
  statsmodels (simple and multiple OLS regression), and a scikit-learn
  "first taste" (train/test split, prediction, R²).</span>
- Phần 5-6 giữ tinh thần Markdown + chia sẻ notebook + bài tập của K31,
  nhưng danh sách "Tasks in Pairs" tăng từ 8 lên 10 mục — 2 mục mới gắn
  trực tiếp với nội dung Phần 4 (viết hàm tính trung bình/độ lệch chuẩn;
  nạp file CSV bằng pandas và hiển thị `head()`/`info()`/`describe()`).
  <br><span class="en">Sections 5-6 keep K31's Markdown + notebook-
  sharing + exercises spirit, but the "Tasks in Pairs" list grows from 8
  to 10 items — 2 new items tie directly to Section 4's content (write a
  function returning a list's mean/std; import a CSV with pandas and
  display `head()`/`info()`/`describe()`).</span>

## Nội dung chính - <span class="en">Key content</span>

### Khởi động: 5 câu hỏi trắc nghiệm về Python (slide 6-16) - <span class="en">Warm-up: 5 Python quiz questions (slides 6-16)</span>

Gần như y hệt nội dung khởi động ở bản K31 (chỉ lệch số slide do phần
"Overview"/"Outline" chiếm thêm 1 slide): Python ra mắt lần đầu **1991**
(Q1); lý do tạo ra Python là để dễ đọc, dễ dạy (Q2); người tạo ra Python
là **Guido van Rossum** (Q3, phân biệt với Dennis Ritchie/Larry Page/
Bill Gates); triết lý thiết kế Python là **tất cả**: coi trọng khả năng
đọc, ít mà nhiều, đơn giản là chìa khóa thành công (Q4); tên "Python"
lấy cảm hứng từ loạt hài kịch BBC **"Monty Python's Flying Circus"**
(Q5, không phải con trăn). Slide 14 thêm "Zen of Python" (gõ
`import this` trong 1 ô Jupyter) — trích 5/19 nguyên tắc chỉ đạo: "Đẹp
tốt hơn xấu", "Đơn giản tốt hơn phức tạp", "Khả năng đọc là quan trọng",
"Lỗi không bao giờ nên trôi qua trong im lặng", "Nên có một — và tốt
nhất chỉ một — cách hiển nhiên để làm việc đó".
<br><span class="en">Nearly identical to K31's warm-up (only the slide
numbers shift because "Overview"/"Outline" take 1 extra slide): Python
was first released in **1991** (Q1); it was created to be easy to read
and teach (Q2); it was created by **Guido van Rossum** (Q3, distinguished
from Dennis Ritchie/Larry Page/Bill Gates); its design philosophy is
**all of the above**: readability counts, less is more, simplicity is
the key to success (Q4); the name "Python" was inspired by the BBC
comedy **"Monty Python's Flying Circus"** (Q5, not the snake). Slide 14
adds the "Zen of Python" (type `import this` in a Jupyter cell) — 5 of
its 19 guiding principles are quoted: "Beautiful is better than ugly",
"Simple is better than complex", "Readability counts", "Errors should
never pass silently", "There should be one — and preferably only one —
obvious way to do it".</span>

### 1. Giới thiệu Python (slide 17-23) - <span class="en">1. Introduction to Python (slides 17-23)</span>

- **Python là gì?** (slide 17): ngôn ngữ lập trình tạo năm 1991 bởi Guido
  van Rossum, thuộc **thế hệ ngôn ngữ lập trình thứ 4** (phi thủ tục, cho
  phép truy cập cơ sở dữ liệu — cùng nhóm SQL, R, Matlab), khác các ngôn
  ngữ thủ tục thế hệ 3 (C, C++, Pascal, FORTRAN, COBOL, Java). Slide 18
  liệt kê đủ 5 thế hệ ngôn ngữ (giống nội dung K31).
  <br><span class="en">**What is Python?** (slide 17): a programming
  language created in 1991 by Guido van Rossum, a **4th-generation
  language** (non-procedural, enables database access — same group as
  SQL, R, Matlab), unlike 3rd-generation procedural languages (C, C++,
  Pascal, FORTRAN, COBOL, Java). Slide 18 lists all 5 generations (same
  as K31).</span>
- **Python dùng để làm gì?** (slide 19): AI & học máy, phân tích dữ
  liệu, kinh tế lượng & dự báo, phát triển web (YouTube, Instagram,
  Dropbox), SEO, blockchain, phát triển game/phần mềm, tự động hóa, ứng
  dụng GUI (Kivy, Tkinter, PyQt), web scraping (Scrapy, BeautifulSoup,
  Selenium), đa phương tiện — thêm mục **"Kinh tế lượng & dự báo"** so
  với bản K31 (hợp lý vì môn học thuộc chương trình kinh tế).
  <br><span class="en">**What is Python used for?** (slide 19): AI & ML,
  data analytics, **econometrics & forecasting** (new vs K31 — fitting
  given the course is in an economics programme), web development,
  SEO, blockchain, game/software development, automation, GUI apps, web
  scraping, multimedia.</span>
- **Vì sao chọn Python?** (slide 21-23): đặc điểm chính — miễn phí, mã
  nguồn mở, dễ tiếp cận, đa năng, mạnh mẽ, cộng đồng lớn, **thông dịch**
  (chạy từng dòng, không cần biên dịch), hệ sinh thái hơn **500.000 gói
  trên PyPI**. **Bảng so sánh Python với công cụ khác** (slide 22, mới
  hoàn toàn so với K31):

  | Công cụ | Điểm mạnh | Hạn chế |
  |---|---|---|
  | Python | Đa dụng, khoa học dữ liệu, ML, tự động hóa, miễn phí | Chậm hơn C với vòng lặp nặng |
  | R | Thống kê, kinh tế lượng, đồ họa, miễn phí | Ít đa dụng hơn |
  | Stata, EViews | Kinh tế lượng dựng sẵn, cú pháp dễ | Bản quyền thương mại, kém linh hoạt |
  | Excel | Quen thuộc, nhanh với dữ liệu nhỏ | Khó tái lập, giới hạn kích thước |

  Kết luận: Python và R là **bổ trợ** chứ không phải thay thế nhau —
  nhiều nhà nghiên cứu dùng cả hai. Phần mềm/công cụ: trình thông dịch
  CPython; IDE — PyCharm, Spyder, **Visual Studio Code** (mới), Jupyter
  Notebook/JupyterLab; quản lý phiên bản — Git/GitHub; nền tảng online —
  **Google Colab, Kaggle Notebooks, Binder** (K31 chỉ nhắc Jupyter
  Notebook làm nền tảng online, không có 3 cái tên này).
  <br><span class="en">**Why Python?** (slides 21-23): key features —
  free, open source, accessible, versatile, powerful, strong community,
  **interpreted**, 500,000+ packages on PyPI. **The comparison table**
  (slide 22, entirely new vs K31) puts Python, R, Stata/EViews and Excel
  side by side. Conclusion: Python and R are **complements**, not
  substitutes. Tools: CPython interpreter; IDEs — PyCharm, Spyder,
  **VS Code** (new), Jupyter/JupyterLab; Git/GitHub; online platforms —
  **Google Colab, Kaggle Notebooks, Binder** (new — K31 only mentioned
  Jupyter Notebook as an online platform).</span>

### 2. Jupyter Notebook: cách dùng (slide 24-34) - <span class="en">2. Jupyter Notebook: How to Use? (slides 24-34)</span>

- **Jupyter là gì?** (slide 25): tên ghép Julia+Python+R, liên hệ tới sổ
  ghi chép Sao Mộc của Galileo, miễn phí/mã nguồn mở, hỗ trợ 40+ ngôn
  ngữ. **Vì sao phù hợp cho công việc dữ liệu** (mới): tương tác (chạy
  từng đoạn nhỏ, thấy kết quả ngay); tái lập được (phân tích + kết quả +
  giải thích đi cùng 1 file); "literate programming" (dùng ô Markdown
  giải thích *vì sao*, không chỉ *thế nào*); trực quan (biểu đồ/bảng
  hiện ngay dưới đoạn code tạo ra chúng); lý tưởng cho giảng dạy, phân
  tích khám phá, nghiên cứu thực nghiệm, tiểu luận/luận văn. **Cách hoạt
  động** (mới, slide 26): trình duyệt (front-end) gửi code tới kernel
  (tiến trình Python chạy nền); kernel thực thi và trả kết quả về hiển
  thị trong notebook.
  <br><span class="en">**What is Jupyter?** (slide 25): Julia+Python+R,
  linked to Galileo's Jupiter notebooks, free/open source, 40+ languages.
  **Why it suits data work** (new): interactive, reproducible, literate
  programming, visual — ideal for teaching, exploratory analysis,
  empirical research, term papers/theses. **How it works** (new, slide
  26): the browser sends code to a kernel; the kernel executes it and
  returns the result to display in the notebook.</span>
- **Cài đặt** (slide 27): 3 cách — Anaconda (khuyến nghị, Python 3.11+,
  đã tích hợp Jupyter/NumPy/pandas/matplotlib); `pip` thủ công (nâng
  cấp pip → `pip install jupyter` → `jupyter notebook`); hoặc **dùng
  online, không cài gì cả — Google Colab** (mới, K31 không có lựa chọn
  online này ở mục cài đặt).
  <br><span class="en">**Installation** (slide 27): 3 ways — Anaconda
  (recommended); manual `pip`; or **use online with no install at all —
  Google Colab** (new option not in K31's installation section).</span>
- **Tạo notebook đầu tiên** (slide 28-29): chạy Jupyter → nút "New" →
  "Python 3" → notebook mở tab mới. 2 ví dụ: `print('Hello World!')` và
  1 lệnh khác, chạy bằng Ctrl+Enter. **Không có** 8 "Practical Exercises"
  dạng đoán output như bản K31 — thay vào đó K32 đi sâu hơn vào cơ chế ô
  (cell) và bàn phím.
  <br><span class="en">**Creating your first notebook** (slides 28-29):
  run Jupyter → "New" → "Python 3" → opens a new tab. 2 examples:
  `print('Hello World!')` and another command via Ctrl+Enter. **Unlike
  K31**, there are no 8 "Practical Exercises" (guess-the-output images) —
  K32 instead goes deeper into cell mechanics and the keyboard.</span>
- **3 loại ô** (slide 30, mới): Code (chứa Python, chạy hiện kết quả bên
  dưới), Markdown (văn bản định dạng, tiêu đề, công thức, ảnh), Raw
  (giữ nguyên văn bản, không chạy không định dạng, hiếm dùng). Đọc nhãn ô:
  `In [ ]` chưa chạy, `In [*]` đang chạy, `In [5]` là ô thứ 5 được thực
  thi trong phiên, `Out[5]` là giá trị trả về — **số thể hiện thứ tự
  thực thi, không phải thứ tự trên màn hình** (điểm dễ gây lỗi cho người
  mới).
  <br><span class="en">**3 cell types** (slide 30, new): Code, Markdown,
  Raw. Reading the prompt: `In [ ]` not run, `In [*]` running, `In [5]`
  the 5th cell executed this session, `Out[5]` its return value — **the
  numbers show execution order, not screen order** (a common beginner
  trap).</span>
- **2 chế độ** (slide 31, mới): Edit mode (viền xanh lá, gõ vào ô — vào
  bằng Enter hoặc click); Command mode (viền xanh dương, bàn phím điều
  khiển notebook — vào bằng Esc). 3 cách chạy 1 ô: Ctrl+Enter (chạy, ở
  lại), Shift+Enter (chạy, sang ô kế), Alt+Enter (chạy, chèn ô mới bên
  dưới).
  <br><span class="en">**2 modes** (slide 31, new): Edit mode (green
  border) vs Command mode (blue border, Esc to enter). 3 ways to run a
  cell: Ctrl+Enter, Shift+Enter, Alt+Enter.</span>
- **Bảng phím tắt** (slide 32, mới): A/B chèn ô trên/dưới; D,D xóa ô; Z
  hoàn tác xóa; Y/M đổi ô thành Code/Markdown; C/X/V sao chép/cắt/dán;
  Shift+Up/Down chọn nhiều ô; Shift+M gộp ô; Ctrl+S lưu; 0,0 khởi động
  lại kernel; H xem đầy đủ danh sách phím tắt. Trong Edit mode: Tab tự
  hoàn thành, Shift+Tab xem trợ giúp, Ctrl+/ comment dòng.
  <br><span class="en">**Keyboard shortcuts table** (slide 32, new): A/B
  insert above/below; D,D delete; Z undo; Y/M change to code/Markdown;
  C/X/V copy/cut/paste; Shift+Up/Down select; Shift+M merge; Ctrl+S
  save; 0,0 restart kernel; H show all shortcuts. Edit mode: Tab
  autocomplete, Shift+Tab help, Ctrl+/ comment.</span>
- **Magic commands** (slide 33, mới): dòng bắt đầu `%` áp dụng 1 dòng, ô
  bắt đầu `%%` áp dụng cả ô. Ví dụ: `%matplotlib inline` (hiện biểu đồ
  trong notebook), `%pwd` (thư mục hiện tại), `%ls` (liệt kê file),
  `%who` (liệt kê biến đã tạo), `%timeit` (đo tốc độ 1 dòng), `%reset -f`
  (xóa hết biến), `%lsmagic` (liệt kê mọi magic command), `%%time` (đo
  thời gian chạy cả ô).
  <br><span class="en">**Magic commands** (slide 33, new): line magics
  (`%`) vs cell magics (`%%`) — `%matplotlib inline`, `%pwd`, `%ls`,
  `%who`, `%timeit`, `%reset -f`, `%lsmagic`, `%%time`.</span>
- **Kernel và cách xử lý khi có lỗi** (slide 34, mới): kernel là tiến
  trình Python nhớ mọi biến; Kernel > Interrupt dừng ô chạy quá lâu/vòng
  lặp vô hạn; Kernel > Restart bắt đầu phiên mới, mất hết biến; Kernel >
  Restart & Run All là kiểm tra cuối cùng tốt nhất trước khi nộp bài. 3
  bẫy thường gặp: (1) thực thi không theo thứ tự — biến vẫn tồn tại dù
  đã xóa ô tạo ra nó, chạy được với người viết nhưng lỗi với người chấm;
  (2) quên chạy lại ô import sau khi restart → `NameError`; (3) đặt tên
  file trùng `pandas.py` → Python import nhầm file thay vì thư viện.
  Quy tắc vàng: trước khi chia sẻ, luôn Restart & Run All và kiểm tra số
  thứ tự bắt đầu từ `In [1]`.
  <br><span class="en">**The kernel & troubleshooting** (slide 34, new):
  Interrupt / Restart / Restart & Run All. 3 common beginner traps:
  out-of-order execution, forgetting to re-run the import cell after a
  restart, naming a file `pandas.py`. Golden rule: always Restart & Run
  All before sharing.</span>

### 3. Python Essentials by Example (slide 36-56) - <span class="en">3. Python Essentials by Example (slides 36-56)</span>

Toàn bộ phần này **không có trong bản K31** — dạy cú pháp Python từ đầu
bằng các đoạn code ngắn kèm output minh họa.
<br><span class="en">This entire section **does not exist in K31** —
teaches Python syntax from scratch via short annotated code examples.</span>

- **Dòng code đầu tiên** (slide 36): `#` là comment; `print()` hiển thị
  văn bản/nhiều giá trị; Python tính toán trực tiếp (`2 + 3 * 4` → 14);
  `"""..."""` là comment nhiều dòng. Trong notebook, giá trị của dòng
  cuối 1 ô hiện ra ngay cả khi không dùng `print()`.
  <br><span class="en">**First lines of code** (slide 36): `#` comments,
  `print()`, Python as a calculator, `"""..."""` multi-line comments. In
  a notebook, the last line's value displays even without
  `print()`.</span>
- **Biến** (slide 37): `str`/`int`/`float`/`bool`; kiểm tra kiểu bằng
  `type()`; cập nhật biến (`age = age + 1` hoặc `age += 1`). Quy tắc đặt
  tên: bắt đầu bằng chữ cái hoặc `_`; không khoảng trắng; phân biệt hoa
  thường (`Age` ≠ `age`); không dùng từ khóa Python (`list`, `sum`,
  `class`...); nên đặt tên có ý nghĩa (`gdp_growth` thay vì `x1`).
  <br><span class="en">**Variables** (slide 37): `str`/`int`/`float`/
  `bool`; `type()`; updating a variable. Naming rules: start with a
  letter/`_`; no spaces; case-sensitive; avoid Python keywords;
  meaningful names.</span>
- **Toán tử số học** (slide 38): `+ - * /` (luôn ra số thực) `//` (chia
  lấy phần nguyên) `%` (chia lấy dư) `**` (lũy thừa); module `math`
  (`round`, `abs`, `sqrt`, `log`).
  <br><span class="en">**Arithmetic operators** (slide 38): `+ - * /`
  (always float), `//` floor division, `%` modulo, `**` power; the
  `math` module.</span>
- **Chuỗi** (slide 39): nối chuỗi (`+`), `.upper()`, `len()`,
  `.replace()`, lập chỉ số/cắt chuỗi (`full[0]`, `full[-1]`,
  `full[0:4]`) — **Python đếm từ 0**. **f-string** (slide 40): đặt `f`
  trước dấu ngoặc kép, viết biến/công thức trong `{}` — hỗ trợ định dạng
  phần trăm (`:.2%`), số thập phân (`:.1f`), phân cách nghìn (`:,`).
  <br><span class="en">**Strings** (slide 39): concatenation, `.upper()`,
  `len()`, `.replace()`, indexing/slicing — **Python counts from 0**.
  **f-strings** (slide 40): `f"..."` with `{expr}` inside, formatting
  options for %, decimals, thousands separators.</span>
- **`input()` và chuyển đổi kiểu** (slide 41): `input()` **luôn trả về
  văn bản**, phải `int()`/`float()` để chuyển đổi; lỗi thường gặp:
  `input("...") + 1` → `TypeError` vì cộng chuỗi với số.
  <br><span class="en">**`input()` and type conversion** (slide 41):
  `input()` always returns text; frequent error mixing `str` and
  `int`.</span>
- **Toán tử so sánh & logic** (slide 42): `> == != >=`; `and`/`or`/
  `not`; so sánh chuỗi (`10 < income < 100`); kiểm tra thành viên (`in`).
  Lưu ý: `=` là gán, `==` là so sánh.
  <br><span class="en">**Comparison & logical operators** (slide 42):
  `> == != >=`; `and`/`or`/`not`; chained comparisons; `in`. Note:
  `=` assigns, `==` compares.</span>
- **List** (slide 43): tập hợp có thứ tự, có thể sửa — index/slice,
  `.append()`, `.insert()`, `.remove()`, `.sort()`, `sum()`/`min()`/
  `max()`. **Tuple và Set** (slide 44): tuple giống list nhưng **bất
  biến** (immutable, hữu ích cho giá trị không được đổi, ví dụ tọa độ);
  set không trùng lặp, không thứ tự, hỗ trợ giao (`&`) và hợp (`|`).
  <br><span class="en">**Lists** (slide 43): ordered, mutable —
  indexing, `.append()`, `.insert()`, `.remove()`, `.sort()`.
  **Tuples & sets** (slide 44): tuples are immutable; sets have no
  duplicates/order, support `&` intersection and `|` union.</span>
- **Dictionary** (slide 45): cặp khóa-giá trị, truy cập bằng khóa
  (`student["name"]`), cập nhật/thêm khóa mới, duyệt bằng `.items()`,
  truy cập an toàn bằng `.get(key, default)`.
  <br><span class="en">**Dictionaries** (slide 45): key-value pairs,
  `.items()`, safe access via `.get()`.</span>
- **Điều kiện** (slide 46): `if`/`elif`/`else` — 2 lỗi người mới hay
  quên: dấu `:` cuối dòng `if`, và thụt lề (indentation) 4 dấu cách —
  **thụt lề định nghĩa khối lệnh trong Python, không phải trang trí**.
  <br><span class="en">**Conditions** (slide 46): `if`/`elif`/`else` —
  the colon `:` and 4-space indentation (indentation defines the block
  in Python, not decoration).</span>
- **Vòng lặp `for`** (slide 47): lặp qua list, `range()`, `range(bắt
  đầu, kết thúc, bước)`, `enumerate()` lấy cả vị trí lẫn giá trị. **Vòng
  lặp `while`, `break`, `continue`** (slide 48): lặp khi điều kiện còn
  đúng (ví dụ lãi kép); `continue` bỏ qua lượt hiện tại, `break` thoát
  hẳn vòng lặp; cảnh báo vòng lặp vô hạn — dùng Kernel > Interrupt để
  dừng.
  <br><span class="en">**`for` loops** (slide 47): iterating over lists,
  `range()`, `enumerate()`. **`while`, `break`, `continue`** (slide 48):
  infinite-loop warning — use Kernel > Interrupt.</span>
- **List comprehension** (slide 49): viết gọn 1 dòng thay cho vòng `for`
  cổ điển (`[x**2 for x in range(1,6)]`), có thể kèm điều kiện
  (`if y > 800`) hoặc biến đổi văn bản (`.capitalize()`).
  <br><span class="en">**List comprehensions** (slide 49): a Pythonic
  one-liner replacing the classic `for` loop, optionally with a
  condition or transformation.</span>
- **Hàm** (slide 50): `def`, tham số mặc định (`years=1`), docstring
  (`"""..."""`), gọi bằng vị trí hoặc bằng tên tham số, trả về nhiều giá
  trị cùng lúc (tuple ngầm). **Hàm ẩn danh (`lambda`) và biến cục bộ**
  (slide 51): `lambda x: x*2` viết hàm ngắn 1 dòng; dùng với `map()`,
  `sorted(key=...)`; biến bên trong hàm là **cục bộ** (local) — không
  ảnh hưởng biến toàn cục (global) cùng tên bên ngoài.
  <br><span class="en">**Functions** (slide 50): `def`, default
  parameters, docstrings, keyword arguments, multiple return values.
  **Lambdas & local variables** (slide 51): one-line anonymous
  functions with `map()`/`sorted(key=...)`; local vs global scope.</span>
- **Xử lý lỗi `try`/`except`** (slide 52): bắt lỗi cụ thể
  (`ZeroDivisionError`, `ValueError`) để chương trình không dừng đột
  ngột; ví dụ vòng lặp `while True` yêu cầu nhập lại cho tới khi hợp lệ.
  <br><span class="en">**`try`/`except` error handling** (slide 52):
  catching specific errors so the program doesn't crash; a `while True`
  retry-until-valid pattern.</span>
- **Kiểm tra cài đặt** (slide 53, mục "2.2 Installation" xuất hiện lại
  — xem "Khoảng trống/lưu ý"): chạy `import sys; print(sys.version)` để
  biết phiên bản Python; `import numpy, pandas, matplotlib` +
  `print(numpy.__version__, ...)`; cài gói thiếu ngay trong notebook
  bằng `!pip install <tên gói>` — dấu `!` chạy lệnh hệ thống từ 1 ô.
  <br><span class="en">**Checking the installation** (slide 53, section
  "2.2 Installation" reappears — see "Gaps/notes" below): `sys.version`;
  checking `numpy`/`pandas` versions; `!pip install ...` runs a system
  command from a notebook cell.</span>
- **Bảng lỗi thường gặp nhất** (slide 54): `SyntaxError` (thiếu dấu `:`,
  ngoặc, hoặc dấu ngoặc kép), `IndentationError` (thụt lề sai/thiếu),
  `NameError` (biến chưa tồn tại — thường do 1 ô chưa được chạy),
  `TypeError` (trộn kiểu, vd `"5" + 5`), `ValueError` (đúng kiểu nhưng
  giá trị bất khả thi, vd `int("abc")`), `IndexError` (chỉ số ngoài
  phạm vi list), `KeyError` (khóa không tồn tại trong dictionary),
  `ZeroDivisionError`, `ModuleNotFoundError` (thư viện chưa cài),
  `FileNotFoundError` (sai tên file/thư mục — kiểm tra bằng `%pwd`).
  Lời khuyên: luôn đọc dòng cuối cùng của thông báo lỗi trước, rồi nhìn
  mũi tên chỉ dòng lỗi.
  <br><span class="en">**Most common error table** (slide 54):
  `SyntaxError`, `IndentationError`, `NameError`, `TypeError`,
  `ValueError`, `IndexError`, `KeyError`, `ZeroDivisionError`,
  `ModuleNotFoundError`, `FileNotFoundError`. Advice: read the last
  line of the error message first, then find the arrow pointing to the
  error line.</span>
- **Module và thư viện** (slide 55): `import math`; `import numpy as np`
  (bí danh ngắn); `from statistics import mean, median` (chỉ nhập cái
  cần); `random.seed()` giúp kết quả tái lập được. Bí danh chuẩn ai cũng
  dùng: `np` (NumPy), `pd` (pandas), `plt` (matplotlib.pyplot), `sns`
  (seaborn), `sm` (statsmodels).
  <br><span class="en">**Modules and libraries** (slide 55): standard
  aliases `np`, `pd`, `plt`, `sns`, `sm`; `random.seed()` for
  reproducibility.</span>
- **Viết code dễ đọc — PEP 8** (slide 56): thụt lề 4 dấu cách, không
  trộn dấu cách/tab; `lower_case_with_underscores` cho biến/hàm; khoảng
  trắng quanh toán tử; dòng ngắn hơn ~79 ký tự; 1 dòng trắng ngăn khối
  logic, 2 dòng trước 1 hàm; comment giải thích *vì sao*, không phải
  *cái gì*; đặt đơn vị trong tên biến (`gdp_billion_usd`, `rate_pct`).
  Trích lời Guido van Rossum: "Code được đọc nhiều hơn được viết."
  <br><span class="en">**PEP 8 style** (slide 56): 4-space indentation,
  `lower_case_with_underscores`, spacing around operators, ~79-char
  lines, comments explain *why* not *what*, units in variable names.
  Guido van Rossum: "Code is read much more often than it is
  written."</span>

### 4. Python for Data Analysis (slide 58-68) - <span class="en">4. Python for Data Analysis (slides 58-68)</span>

Phần **hoàn toàn mới**, không có ở bản K31 — giới thiệu bộ thư viện dùng
xuyên suốt phần còn lại của môn học. → [[python-data-analysis-stack]]
<br><span class="en">An **entirely new** section, absent from K31 —
introduces the library stack used throughout the rest of the course. →
[[python-data-analysis-stack]]</span>

- **Bảng thư viện** (slide 58): NumPy (`np`, mảng số/ma trận/số ngẫu
  nhiên), pandas (`pd`, bảng dữ liệu DataFrame: nạp/làm sạch/nhóm/gộp),
  matplotlib (`plt`, mọi loại biểu đồ, kiểm soát chi tiết), seaborn
  (`sns`, biểu đồ thống kê, đẹp sẵn), statsmodels (`sm`, kinh tế lượng:
  OLS, kiểm định, chuỗi thời gian), scikit-learn (`sklearn`, học máy: dự
  đoán, phân loại).
  <br><span class="en">**Libraries table** (slide 58): NumPy, pandas,
  matplotlib, seaborn, statsmodels, scikit-learn — with their aliases
  and roles.</span>
- **NumPy** (slide 59): `np.array()` — phép toán áp dụng lên **toàn bộ**
  phần tử (`a * 2`); `.mean()`/`.std()`/`.sum()`; ma trận `.shape`, nhân
  ma trận bằng `@`; `np.random.seed()` + `np.random.normal()` sinh số
  ngẫu nhiên tái lập được.
  <br><span class="en">**NumPy** (slide 59): element-wise operations,
  `.mean()`/`.std()`/`.sum()`, matrix `@` multiplication,
  `np.random.normal()` with a seed.</span>
- **pandas — nạp và xem dữ liệu** (4.3, slide 60): `df =
  pd.read_csv("E:/data2.csv", encoding="cp1258")` — **chính là
  `Data2.csv`** trong `raw/`, xem chi tiết cấu trúc ở mục riêng bên
  dưới. Các lệnh khám phá đầu tiên: `df.head()`, `df.tail(3)`,
  `df.shape`, `df.columns`, `df.info()` (kiểu dữ liệu + giá trị thiếu),
  `df.describe()` (count/mean/std/min/quartile/max), `.value_counts()`
  (bảng tần suất), `df.isnull().sum()` (đếm giá trị thiếu mỗi cột). Lời
  khuyên của slide: luôn chạy `head()`, `info()`, `describe()` ngay sau
  khi nạp dữ liệu — hầu hết lỗi trong nghiên cứu thực nghiệm đến từ việc
  không nhìn dữ liệu trước.
  <br><span class="en">**pandas — importing & inspecting** (4.3, slide
  60): `pd.read_csv("E:/data2.csv", encoding="cp1258")` — **this is
  `Data2.csv`** in `raw/`, see the dedicated section below.
  `head()`/`tail()`/`shape`/`columns`/`info()`/`describe()`/
  `value_counts()`/`isnull().sum()`. Advice: always run `head()`,
  `info()`, `describe()` right after importing.</span>
- **pandas — chọn và lọc** (4.4, slide 61): chọn 1 cột (Series) hay
  nhiều cột (DataFrame); `.loc[]` theo nhãn, `.iloc[]` theo vị trí; lọc
  theo điều kiện (`df.loc[df["GDPHienHanh"] > 10]`); sắp xếp
  (`.sort_values(..., ascending=False).head(3)`). Lưu ý: trong bộ lọc
  dùng `&`/`|` (có ngoặc quanh mỗi điều kiện), **không** dùng từ khóa
  `and`/`or`.
  <br><span class="en">**pandas — selecting & filtering** (4.4, slide
  61): `.loc[]`/`.iloc[]`, conditional filtering with `&`/`|` (not
  `and`/`or`), `.sort_values()`.</span>
- **pandas — nhóm, gộp, làm sạch** (4.5, slide 62): `df.groupby("Vung")
  .agg(...)` tính tổng/trung bình/đếm theo nhóm; làm sạch —
  `.dropna()` (xóa hàng thiếu), `.fillna(...)` (điền giá trị thiếu bằng
  trung bình), `.rename(columns={...})`, `.drop_duplicates()`.
  <br><span class="en">**pandas — grouping, aggregating, cleaning**
  (4.5, slide 62): `groupby().agg()`, `.dropna()`, `.fillna()`,
  `.rename()`, `.drop_duplicates()`.</span>
- **matplotlib** (4.6-4.7, slide 63-64): biểu đồ đường đầu tiên (tăng
  trưởng GDP Việt Nam theo năm, `plt.plot()` + `title`/`xlabel`/`ylabel`/
  `grid`); lưu hình bằng `plt.savefig(dpi=300)`. Scatter plot +
  histogram + `plt.subplots(1, 2)` để đặt nhiều biểu đồ trong 1 figure
  (ví dụ minh họa: học vấn vs tiền lương, dữ liệu mô phỏng ngẫu nhiên).
  <br><span class="en">**matplotlib** (4.6-4.7, slides 63-64): a first
  line chart, `plt.savefig()`, scatter + histogram +
  `plt.subplots(1, 2)` for multi-panel figures.</span>
- **seaborn** (4.8, slide 65): biểu đồ thống kê trên bộ dữ liệu mẫu có
  sẵn `sns.load_dataset("tips")` — `histplot`, `boxplot`, `scatterplot`
  (với `hue`), `regplot` (scatter + đường hồi quy khớp); **heatmap
  tương quan** (`sns.heatmap(corr, annot=True, cmap="coolwarm")`).
  <br><span class="en">**seaborn** (4.8, slide 65): `sns.load_dataset
  ("tips")`, `histplot`/`boxplot`/`scatterplot`/`regplot`, a correlation
  **heatmap**.</span>
- **statsmodels — hồi quy đơn giản** (4.9, slide 66): ước lượng
  wageᵢ = β₀ + β₁·educᵢ + uᵢ bằng
  `sm.OLS(wage, sm.add_constant(educ)).fit()` — Bình phương tối thiểu
  thông thường (OLS); `model.summary()` cho bảng đầy đủ,
  `model.params`/`.rsquared`/`.pvalues` cho từng thành phần. **Hồi quy
  đa biến với công thức** (4.10, slide 67, giống cú pháp Stata/R):
  `smf.ols("tip ~ total_bill + size + C(sex)", data=tips).fit()` —
  `C(sex)` báo Python rằng `sex` là biến phân loại (tự tạo biến giả);
  sai số chuẩn vững (`cov_type="HC1"`) xử lý phương sai thay đổi; có
  thể lấy giá trị dự đoán (`fittedvalues`) và phần dư (`resid`).
  <br><span class="en">**statsmodels — simple regression** (4.9, slide
  66): `sm.OLS(...).fit()`, `model.summary()`. **Multiple regression
  with a formula** (4.10, slide 67, Stata/R-style syntax):
  `smf.ols("tip ~ total_bill + size + C(sex)", data=tips).fit()`,
  robust standard errors, fitted values/residuals.</span>
- **scikit-learn — nếm thử học máy** (4.11, slide 68):
  `train_test_split()` chia tập huấn luyện/kiểm tra;
  `LinearRegression().fit(X_train, y_train)`; dự đoán trên tập kiểm tra
  và tính `r2_score`. Ghi chú quan trọng của slide: **statsmodels hướng
  tới giải thích** (hệ số, kiểm định), **scikit-learn hướng tới dự
  đoán** (train/test, độ chính xác) — 2 mục tiêu khác nhau dùng chung 1
  bài toán hồi quy.
  <br><span class="en">**scikit-learn — a first taste of ML** (4.11,
  slide 68): `train_test_split()`, `LinearRegression()`, `r2_score`.
  Key note: **statsmodels is oriented towards explanation**;
  **scikit-learn is oriented towards prediction**.</span>

### 5. Tài liệu hóa và chia sẻ notebook (slide 70-75) - <span class="en">5. Documenting and Sharing Your Notebook (slides 70-75)</span>

- **Markdown** (slide 70-73): heading dùng `#` theo sau khoảng trắng
  (`#`/`##`/`###`/`####`); nhấn mạnh — đậm `__text__`/`**text**`,
  nghiêng `_text_`/`*text*`, gạch ngang `~~text~~`; danh sách gạch đầu
  dòng (`-`, hoặc khoảng trắng+`-`+khoảng trắng, hoặc `*`); danh sách số
  (`1.` cho mỗi mục, Jupyter tự đánh số lại khi chạy); danh sách con thụt
  2-4 dấu cách. Bài thực hành: tạo ô Markdown có tiêu đề, danh sách
  **Tác giả:**/**Ngày:**, và 1 ô khác gồm 3 món ăn yêu thích, bảng 2 cột
  (Món ăn/Giá), link, và công thức trung bình
  $\bar{x} = \frac{1}{n}\sum x_i$ viết bằng LaTeX (`$$...$$`).
  <br><span class="en">**Markdown** (slides 70-73): headings, emphasis,
  bullet/numbered lists, indented sub-lists. Practice: title, **Author:**
  /**Date:** bullets, favorite foods, a 2-column table, a link, and the
  mean formula in LaTeX.</span>
- **Chia sẻ notebook** (slide 74-75): trước khi chia sẻ — "Cell > All
  Output > Clear" rồi "Kernel > Restart and Run All", kiểm tra số ô bắt
  đầu từ `In [1]` không lỗi, đặt tên rõ ràng (vd `Lastname_Chapter2
  .ipynb`); xuất qua "File > Download As" (`.ipynb`/`.html`/`.pdf`/
  `.py`); chia sẻ qua GitHub, nbviewer.org, Google Colab. **Xuất PDF**
  (slide 75) — quy trình **khác bản K31**: chạy mọi ô Markdown
  (Shift+Enter) → "File > Save and Export Notebook As > HTML" → mở file
  HTML trên trình duyệt → Ctrl+P → Save as PDF (K31 dùng dòng lệnh
  `nbconvert --to webpdf` thay vì đi qua trình duyệt).
  <br><span class="en">**Sharing notebooks** (slides 74-75): standard
  before-sharing checklist, exporting, GitHub/nbviewer/Colab. **PDF
  export** (slide 75) — a **different procedure than K31**: export to
  HTML then browser print-to-PDF (K31 used the `nbconvert --to webpdf`
  command line instead).</span>

### 6. Thực hành (slide 76-77) - <span class="en">6. Practice (slides 76-77)</span>

- **6 bài tự làm** (6.2, slide 76 — giống hệt danh sách ở bản K31, slide
  33): tính tổng 2 số bất kỳ; tính diện tích hình chữ nhật; trò chơi
  "đoán số"; viết 10 số đầu tiên của dãy Fibonacci; đổi nhiệt độ Celsius
  sang Fahrenheit; chạy 1 mô hình hồi quy tuyến tính đơn giản. Mỗi bài
  viết trong 1 ô riêng, kèm 1 ô Markdown ghi số thứ tự + tên bài trước
  đó.
  <br><span class="en">**6 solo tasks** (6.2, slide 76 — identical to
  K31's slide 33 list): sum of two numbers; rectangle area; guess-the-
  number game; first 10 Fibonacci numbers; Celsius→Fahrenheit; a simple
  linear regression.</span>
- **10 bài theo cặp** (6.4, slide 77 — **8 mục đầu giống K31 slide 40,
  2 mục cuối là MỚI**): (1) tạo list trái cây yêu thích, in từng phần
  tử; (2) in 10 số chẵn đầu tiên; (3) kiểm tra số dương/âm/bằng 0; (4)
  **viết hàm trả về trung bình và độ lệch chuẩn của 1 list** (mới, gắn
  trực tiếp phần 3); (5) vẽ scatter plot với dữ liệu ngẫu nhiên; (6) vẽ
  histogram; (7) **nạp 1 file CSV bằng pandas và hiển thị `head()`,
  `info()`, `describe()`** (mới, gắn trực tiếp phần 4 — dùng đúng quy
  trình học ở slide 60 với `Data2.csv`); (8) xây 1 mô hình hồi quy
  tuyến tính đơn giản trên tập dữ liệu nhỏ; (9) tạo heatmap tương quan
  giữa các biến; (10) tạo nhiều biểu đồ trong 1 figure (subplots). Nộp
  file Jupyter hoặc PDF trên Classroom.
  <br><span class="en">**10 pair tasks** (6.4, slide 77 — **the first 8
  match K31's slide 40, the last 2 are NEW**): items 4 and 7 are new —
  writing a mean/std function, and importing a CSV with pandas to show
  `head()`/`info()`/`describe()` — both tying directly to the new
  Sections 3-4 content. Submit the Jupyter file or PDF on Classroom.</span>

## Dữ liệu thực hành: Data2.csv - <span class="en">Practice dataset: Data2.csv</span>

- **Đường dẫn**: `raw/Lecture Notes/K32/Chapter02/Data2.csv` — dữ liệu dùng làm ví
  dụ thật ở mục 4.3-4.5 (pandas). Đây là dữ liệu **kinh tế-xã hội cấp
  tỉnh của Việt Nam, năm 2014**: 63 hàng (tương ứng các tỉnh/thành),
  13 cột, thuộc 2 vùng trong dữ liệu này — **Đồng bằng sông Hồng** và
  **Trung du và miền núi phía Bắc** (dữ liệu chỉ chứa 1 phần các vùng
  của Việt Nam, không phải toàn bộ 6 vùng kinh tế-xã hội).
  <br><span class="en">**Path**: `raw/Lecture Notes/K32/Chapter02/Data2.csv` — the
  real-data example for 4.3-4.5 (pandas). It is **Vietnamese
  provincial socioeconomic data for 2014**: 63 rows (provinces), 13
  columns, covering 2 regions in this file — the **Red River Delta**
  and the **Northern Midlands and Mountain Areas** (a subset of
  Vietnam's regions, not all 6).</span>
- **13 cột**: `TenTinh` (tên tỉnh), `Vung` (vùng kinh tế-xã hội), `Nam`
  (năm — chỉ có 2014), `TySuatSinh` (tỷ suất sinh), `TyLeDaQuaDaoTao`
  (% lao động đã qua đào tạo), `DanSoThanhThi` (dân số thành thị, nghìn
  người), `DienTich` (diện tích, km²), `GDPHienHanh` (GDP giá hiện
  hành), `GDPGiaCoDinh2010` (GDP giá cố định 2010), `DanSo` (dân số),
  `TangDanSo` (tăng dân số), `DauTuHienHanh` (đầu tư giá hiện hành),
  `DauTuGiaCoDinh2010` (đầu tư giá cố định 2010).
  <br><span class="en">**13 columns**: province name, region, year
  (2014 only), birth rate, % trained labor, urban population, area,
  current-price GDP, constant-2010-price GDP, population, population
  growth, current-price investment, constant-2010-price investment.</span>
- **Cách nạp trong slide** (slide 60): `pd.read_csv("E:/data2.csv",
  encoding="cp1258")` — đường dẫn `E:/data2.csv` là đường dẫn cục bộ
  trên máy giảng viên, sinh viên cần đổi thành đường dẫn file thật trên
  máy mình. Xem thêm ghi chú về `encoding` ở mục "Khoảng trống/lưu ý"
  bên dưới.
  <br><span class="en">**How the slide loads it** (slide 60):
  `pd.read_csv("E:/data2.csv", encoding="cp1258")` — `E:/data2.csv` is
  the instructor's own local path; students must substitute their own.
  See the encoding note under "Gaps/notes" below.</span>

## Khoảng trống / lưu ý - <span class="en">Gaps / notes</span>

- **Đánh số mục nhảy cóc trong slide gốc**: slide 53 quay lại tiêu đề
  "2.2 Installation" (giữa mục Python Essentials và trước bảng lỗi 3.18)
  — nhiều khả năng là slide kiểm tra cài đặt package được chèn muộn vào
  giữa 2 phần mà không đổi số mục; mục 3.20 và 4.2 cũng bị bỏ qua trong
  đánh số gốc (nhảy thẳng 3.19→3.21, 4.1→4.3) — giữ nguyên số mục gốc
  trong trang này để khớp với slide, không tự đánh số lại.
  <br><span class="en">**Numbering jumps in the original slides**: slide
  53 revisits "2.2 Installation" mid-way through Python Essentials —
  likely a late insert; sections 3.20 and 4.2 are also skipped in the
  original numbering (3.19→3.21, 4.1→4.3) — this page keeps the
  original section numbers to match the slides rather than
  renumbering.</span>
- **Encoding của `Data2.csv`**: slide dùng `encoding="cp1258"` (bảng mã
  Việt cũ trên Windows) khi nạp file, nhưng file thực tế trong `raw/`
  hiện tại là **UTF-8 có BOM** (đọc thành công bằng `encoding=
  "utf-8-sig"` khi kiểm tra, không cần `cp1258`) — có thể do người dùng
  lưu lại/chỉnh sửa file sau khi slide được soạn. Sinh viên chạy đúng
  theo slide với `cp1258` trên file hiện tại có thể gặp lỗi giải mã hoặc
  ký tự tiếng Việt bị lỗi — nên thử `encoding="utf-8-sig"` trước nếu
  gặp lỗi.
  <br><span class="en">**`Data2.csv` encoding**: the slide uses
  `encoding="cp1258"` (a legacy Vietnamese Windows codepage), but the
  actual file in `raw/` today is **UTF-8 with a BOM** (reads correctly
  with `encoding="utf-8-sig"`, `cp1258` not needed) — possibly re-saved
  after the slide was authored. Students following the slide literally
  with `cp1258` on today's file may hit a decode error or garbled
  Vietnamese text — try `utf-8-sig` first if that happens.</span>
- Một số nội dung là hình ảnh, không trích xuất được qua `pdftotext`:
  ảnh minh họa hệ sinh thái Python (slide 20), ảnh chụp màn hình chạy
  Jupyter/nút "New" (slide 28-29), ảnh "ô đầu tiên thường dùng" của 1
  notebook phân tích dữ liệu (slide 58), và ví dụ định dạng Markdown
  (slide 72).
  <br><span class="en">Some content is image-only, not extractable via
  `pdftotext`: the Python ecosystem graphic (slide 20), Jupyter/"New"
  button screenshots (slides 28-29), the "usual first cell" image
  (slide 58), and the Markdown formatting example (slide 72).</span>

## Liên kết - <span class="en">Links</span>

- [[python-jupyter-tooling-k32]] — Python cơ bản + cách dùng Jupyter
  Notebook (phần 1-3, 5-6).
  <br><span class="en">[[python-jupyter-tooling-k32]] — core Python +
  Jupyter usage (Sections 1-3, 5-6).</span>
- [[python-data-analysis-stack]] — NumPy/pandas/matplotlib/seaborn/
  statsmodels/scikit-learn (phần 4).
  <br><span class="en">[[python-data-analysis-stack]] — NumPy/pandas/
  matplotlib/seaborn/statsmodels/scikit-learn (Section 4).</span>
- [[chapter01-introduction-k32]] — Chapter 1 đã nêu Python 3.13 +
  Jupyter/Spyder + Google Colab là công cụ chính của môn học.
  <br><span class="en">[[chapter01-introduction-k32]] — Chapter 1
  already named Python 3.13 + Jupyter/Spyder + Google Colab as the
  course's main tools.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K32/Chapter02/VNP_DataScience_Chapter02_Python_
and_Jupyter_Notebook_2026.pdf`, slide 1-78; `raw/Lecture Notes/K32/Chapter02/Data2.csv` (dữ
liệu thực hành mục 4.3-4.5).
<br><span class="en">`raw/Lecture Notes/K32/Chapter02/
VNP_DataScience_Chapter02_Python_and_Jupyter_Notebook_2026.pdf`, slides
1-78; `raw/Lecture Notes/K32/Chapter02/Data2.csv` (the 4.3-4.5 practice
dataset).</span>
