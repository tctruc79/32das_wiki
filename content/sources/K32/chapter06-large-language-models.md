---
type: source
title: "Chapter 6 (K32) - Mô hình ngôn ngữ lớn: cơ chế chú ý, Transformer và ChatGPT"
title_en: "Chapter 6 (K32) - Large Language Models: Attention, the Transformer and ChatGPT"
tags: [chapter-6, k32, llm, transformer, attention, tokenization, chatgpt, deep-learning]
created: 2026-09-28
updated: 2026-09-28
status: complete
source_file: "raw/Lecture Notes/K32/Chapter06/VNP_LLMs_finaltex.pdf"
---

## Metadata

- **Môn học**: Introduction to Data Science and Applications, University
  of Economics Ho Chi Minh City - Vietnam-Netherlands Programme.
  <br><span class="en">**Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City -
  Vietnam-Netherlands Programme.</span>
- **Khóa**: K32 (2026, khóa hiện tại).
  <br><span class="en">**Cohort**: K32 (2026, current cohort).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: PDF có **71 trang vật lý**, và **số chân trang trùng đúng
  số trang vật lý** (trang 3 mang số `3`, trang 70 mang số `70`). Nhưng
  **mẫu số ở chân trang ghi `/ 75`**, tức thừa 4 so với số trang thật -
  một con số cũ còn sót trong mã nguồn LaTeX, không phải dấu hiệu thiếu
  slide. Năm trang **không có chân trang**: trang bìa (1), ba trang tiêu
  đề phần (2, 42, 57) và trang cảm ơn (71).
  <br><span class="en">**Slide count**: the PDF has **71 physical pages**
  and the **footer number equals the physical page number** exactly. But
  the **footer denominator reads `/ 75`**, four more than the real total -
  a stale figure left in the LaTeX source, not a sign of missing slides.
  Five pages carry **no footer**: the title page (1), three section title
  pages (2, 42, 57) and the closing page (71).</span>
- **Siêu dữ liệu PDF**: soạn bằng LaTeX lớp Beamer, bộ tạo MiKTeX
  pdfTeX-1.40.27, tạo ngày 2026-09-28 lúc 17:12 (+07) - tức **cùng ngày
  ingest**, chỉ trước khoảng một giờ. Khổ trang 453.5 x 255.1 điểm, tỉ lệ
  16:9, dung lượng 11,2 MB.
  <br><span class="en">**PDF metadata**: authored in LaTeX with the Beamer
  class, produced by MiKTeX pdfTeX-1.40.27, created 2026-09-28 at 17:12
  (+07) - the **same day as this ingest**, about an hour earlier. Page
  size 453.5 x 255.1 pt, 16:9, 11.2 MB.</span>
- **Vị trí trong môn**: chương thứ **sáu** của K32, nằm sau
  [[chapter05-deep-learning-k32]]. Đây là chương **ngoài kế hoạch đã ghi
  nhận**: tính đến 2026-09-27 người dùng xác nhận K32 hết phần lý thuyết
  ở Chapter 5 và chỉ còn hai buổi - một buổi chuyên gia chia sẻ và một
  buổi thuyết trình nhóm. Nội dung và độ sâu của bộ slide này khớp với
  **buổi chuyên gia chia sẻ**, nhưng nó do chính giảng viên soạn (siêu dữ
  liệu PDF ghi tác giả là TRAN THI TUAN ANH) nên được ingest như một
  chương chính thức.
  <br><span class="en">**Place in the course**: K32's **sixth** chapter,
  following [[chapter05-deep-learning-k32]]. It is a chapter **outside the
  recorded plan**: as of 2026-09-27 the theory was confirmed finished at
  Chapter 5, with two sessions left - an expert talk and the group
  presentations. This deck's content and depth match the **expert-talk
  session**, but the instructor authored it herself (the PDF metadata
  names TRAN THI TUAN ANH), so it is ingested as a regular chapter.</span>
- **Quan hệ với Chapter 5**: chương này **tiếp nối trực tiếp** phần tự chú
  ý của bài giảng A2 trong [[chapter05-deep-learning-k32]]. Chapter 5 dựng
  xong "viên gạch" chú ý rồi dừng, tuyên bố thẳng rằng không có slide nào
  vẽ khối Transformer hoàn chỉnh. **Chapter 6 lấp đúng khoảng trống đó**:
  nó xây hẳn kiến trúc Transformer chỉ có bộ giải mã, rồi đi tiếp tới sản
  phẩm thật là ChatGPT.
  <br><span class="en">**Relation to Chapter 5**: this chapter **continues
  directly** from lecture A2's self-attention material. Chapter 5 built the
  attention "brick" and stopped, stating outright that no slide draws a
  complete Transformer block. **Chapter 6 fills exactly that gap**: it
  builds the decoder-only Transformer, then carries on to a real product,
  ChatGPT.</span>

## Tóm tắt - <span class="en">Summary</span>

Chương trả lời một câu hỏi duy nhất, hỏi ở ba mức độ phóng to khác nhau:
**một mô hình ngôn ngữ lớn thực ra làm gì?**
<br><span class="en">The chapter answers a single question at three levels
of magnification: **what does a large language model actually do?**</span>

Câu trả lời ngắn nằm ngay slide 3 và không đổi suốt 71 trang: **một mô hình
ngôn ngữ lớn là một hàm toán học phức tạp, dự đoán từ kế tiếp cho một đoạn
văn bản bất kỳ**. Mọi thứ còn lại - cơ chế chú ý, Transformer, ChatGPT -
chỉ là các lớp vỏ dựng quanh đúng một phép toán đó.
<br><span class="en">The short answer is on slide 3 and never changes across
71 pages: **a large language model is a sophisticated mathematical function
that predicts what word comes next for any piece of text**. Everything else -
attention, the Transformer, ChatGPT - is scaffolding around that one
operation.</span>

Ba phần của chương ứng với ba mức phóng to:
<br><span class="en">The chapter's three parts are those three levels:</span>

| Phần | Slide | Câu hỏi | Trả lời bằng |
|---|---|---|---|
| 1. LLM và cơ chế chú ý | 3-41 | Làm sao máy biết nghĩa của một từ phụ thuộc ngữ cảnh? | Xây `mẫu hình chú ý` từ truy vấn, khóa, giá trị |
| 2. LLM dùng Transformer thế nào | 43-56 | Ghép các khối đó lại thành mô hình ra sao? | 6 bước từ văn bản tới token kế tiếp |
| 3. ChatGPT dùng LLM thế nào | 58-70 | Vì sao ứng dụng chat khác với mô hình? | `ChatGPT = LLM + lớp vỏ` |

Điểm sư phạm đáng chú ý: **cùng một cơ chế chú ý được giải thích hai lần với
hai mục đích khác nhau**. Phần 1 dựng nó từ trực giác, chậm và nhiều hình.
Phần 2 dựng lại nó thành các bước thao tác gọn gàng có công thức. Ai học
chương này nên đọc cả hai chứ không bỏ phần nào, vì phần 1 cho *vì sao* còn
phần 2 cho *làm thế nào*.
<br><span class="en">A notable teaching choice: **the same attention
mechanism is explained twice for two different purposes**. Part 1 builds it
from intuition, slowly and with many pictures. Part 2 rebuilds it as a tidy
sequence of operations with formulas. Read both: part 1 gives the *why*,
part 2 the *how*.</span>

## Nội dung chính - <span class="en">Main content</span>

### 1. Mô hình ngôn ngữ lớn là gì - <span class="en">What an LLM is</span>

**Định nghĩa (slide 3)**: một hàm toán học phức tạp, **dự đoán từ kế tiếp**
cho một đoạn văn bản bất kỳ.
<br><span class="en">**Definition (slide 3)**: a sophisticated mathematical
function that **predicts the next word** for any piece of text.</span>

**Điều chỉnh quan trọng ngay slide 4**: mô hình **không** dự đoán một từ duy
nhất một cách chắc chắn. Nó **gán một xác suất cho toàn bộ các từ kế tiếp có
thể**. Đây là điểm dễ hiểu sai nhất về LLM, và nó giải thích được rất nhiều
hành vi thực tế ở phần 3.
<br><span class="en">**An important correction on slide 4**: the model does
**not** predict one word with certainty. It **assigns a probability to all
possible next words**. This is the most misunderstood point about LLMs, and
it explains much of the behaviour discussed in part 3.</span>

**Tham số và chữ "lớn" (slide 5)**:
<br><span class="en">**Parameters and the word "large" (slide 5)**:</span>

- Mô hình học cách dự đoán bằng cách **xử lý một lượng văn bản khổng lồ**,
  thường lấy từ internet.
  <br><span class="en">Models learn to predict by **processing an enormous
  amount of text**, typically pulled from the internet.</span>
- **Con số đáng nhớ**: để đọc hết lượng văn bản dùng huấn luyện GPT-3, một
  người bình thường phải đọc **liên tục 24/7 trong hơn 2.600 năm**.
  <br><span class="en">**The memorable figure**: to read the text used to
  train GPT-3, a human would need to read **non-stop, 24-7, for over 2,600
  years**.</span>
- Huấn luyện giống như **vặn các núm trên một cỗ máy rất lớn**. Hành vi của
  mô hình **hoàn toàn được quyết định** bởi các giá trị liên tục ấy, gọi là
  **tham số** hay **trọng số**.
  <br><span class="en">Training is like **tuning the dials on a really big
  machine**. The model's behaviour is **entirely determined** by those
  continuous values, called **parameters** or **weights**.</span>
- **Chữ "lớn" trong "mô hình ngôn ngữ lớn" chính là số tham số**: hàng trăm
  tỉ.
  <br><span class="en">**The "large" in "large language model" is that
  parameter count**: hundreds of billions.</span>
- **Không người nào đặt các tham số đó**. Chúng bắt đầu ngẫu nhiên, rồi được
  tinh chỉnh lặp đi lặp lại dựa trên rất nhiều mẫu văn bản.
  <br><span class="en">**No human sets those parameters.** They begin at
  random, then are repeatedly refined on many example pieces of text.</span>

**Cơ chế huấn luyện (slide 6, 8, 9)**: đổi tham số tức là **đổi xác suất mà
mô hình gán cho từ kế tiếp** trên một đầu vào cho trước. **Lan truyền ngược**
được dùng để chỉnh toàn bộ tham số theo hướng làm mô hình **có xu hướng chọn
đúng từ thật hơn một chút** và chọn mọi từ khác ít hơn một chút. Làm việc đó
với **hàng nghìn tỉ ví dụ** thì mô hình không chỉ dự đoán chính xác hơn trên
dữ liệu huấn luyện mà còn **dự đoán hợp lý hơn trên văn bản chưa từng thấy**.
<br><span class="en">**The training mechanism (slides 6, 8, 9)**: changing
parameters changes **the probabilities the model gives for the next word**.
**Backpropagation** tweaks every parameter so the model becomes **a little
more likely to choose the true word** and a little less likely to choose the
others. Done over **trillions of examples**, the model not only predicts the
training data better but also **generalises to unseen text**.</span>

**Vì sao cần GPU, và vì sao Transformer ra đời (slide 9-10)**: quy mô tính
toán chỉ khả thi nhờ **chip chuyên dụng chạy song song rất nhiều phép tính,
tức GPU**. Nhưng **không phải mô hình ngôn ngữ nào cũng song song hóa được**:
**trước 2017, phần lớn mô hình xử lý văn bản từng từ một**. Rồi một nhóm
nghiên cứu ở Google giới thiệu **Transformer**.
<br><span class="en">**Why GPUs, and why the Transformer appeared (slides
9-10)**: the scale of computation is only possible with **chips optimised for
many parallel operations, GPUs**. But **not all language models parallelise**:
**prior to 2017 most processed text one word at a time**. Then a team at
Google introduced the **Transformer**.</span>

Đây là chỗ chương nối thẳng vào [[chapter05-deep-learning-k32]]: ba giới hạn
của mạng hồi tiếp mà Chapter 5 nêu - nút cổ chai mã hóa, không song song hóa
được, không có trí nhớ dài - chính là lý do tồn tại của đoạn này.
<br><span class="en">This is where the chapter joins
[[chapter05-deep-learning-k32]]: the three limits of recurrent networks named
there are exactly why this paragraph exists.</span>

### 2. Transformer nhìn từ xa - <span class="en">The Transformer from a distance</span>

**Tính chất định nghĩa (slide 12)**: Transformer **không đọc văn bản từ đầu
tới cuối, nó thấm toàn bộ cùng một lúc, song song**.
<br><span class="en">**The defining property (slide 12)**: Transformers
**don't read text from start to finish, they soak it all in at once, in
parallel**.</span>

**Bước đầu tiên (slide 12-13)**: gắn mỗi từ với **một dãy số dài**. Lý do rất
thực dụng: **quá trình huấn luyện chỉ làm việc với giá trị liên tục**, nên
buộc phải mã hóa ngôn ngữ bằng số. Mỗi dãy số đó phải **mã hóa được nghĩa**
của từ tương ứng.
<br><span class="en">**The first step (slides 12-13)**: associate each word
with **a long list of numbers**. The reason is practical: **training only
works with continuous values**, so language must be encoded numerically. Each
list must somehow **encode the meaning** of its word.</span>

**Hai phép toán nền tảng (slide 14)**:
<br><span class="en">**The two fundamental operations (slide 14)**:</span>

| Phép toán | Vai trò |
|---|---|
| **Chú ý** (attention) | Cho các dãy số **trao đổi với nhau** và tinh chỉnh nghĩa chúng mã hóa dựa trên ngữ cảnh xung quanh, tất cả **song song** |
| **Mạng truyền thẳng / MLP** | Cho mô hình **thêm sức chứa để lưu các mẫu hình về ngôn ngữ** đã học trong lúc huấn luyện |

**Ví dụ kinh điển của chương (slide 15)**: các số mã hóa từ *bank* có thể bị
đổi dựa trên ngữ cảnh quanh nó, như *river* và *jumped into*, để mã hóa khái
niệm cụ thể hơn là **bờ sông** chứ không phải **ngân hàng**.
<br><span class="en">**The chapter's classic example (slide 15)**: the
numbers encoding *bank* may change based on surrounding context such as
*river* and *jumped into*, to encode the more specific notion of a
**riverbank**.</span>

**Vòng lặp và bước cuối (slide 16-17)**: dữ liệu **chảy lặp lại qua nhiều
vòng của hai phép toán ấy**, mỗi vòng làm giàu thêm các dãy số. Cuối cùng,
**một hàm được thực hiện trên véc-tơ cuối cùng của chuỗi** - véc-tơ đã được
cập nhật bởi toàn bộ ngữ cảnh đầu vào lẫn mọi thứ mô hình học được - để sinh
ra dự đoán từ kế tiếp, dưới dạng **một xác suất cho mọi từ kế tiếp có thể**.
<br><span class="en">**The loop and the last step (slides 16-17)**: data
**flows repeatedly through many iterations of those two operations**. At the
end, **one final function is performed on the last vector in the sequence** -
updated by all the input context and everything learned in training - to
produce the next-word prediction, as **a probability for every possible next
word**.</span>

### 3. Cơ chế chú ý, dựng từ trực giác - <span class="en">Attention, built from intuition</span>

**Ví dụ dẫn nhập: từ *mole* (slide 18)**. Ba cụm từ:
<br><span class="en">**The motivating example: the word *mole* (slide
18)**. Three phrases:</span>

1. *American shrew mole* - con chuột chũi.
2. *One mole of carbon dioxide* - đơn vị mol trong hóa học.
3. *Take a biopsy of the mole* - nốt ruồi trên da.

Người đọc biết ngay ba nghĩa khác nhau **nhờ ngữ cảnh**. Câu hỏi của slide:
**làm sao máy biết được?**
<br><span class="en">A reader knows the three meanings differ **from
context**. The slide's question: **how can the machine know?**</span>

**Câu trả lời gồm hai phần, và phần đầu mới là phần quan trọng (slide 19)**:
sau bước nhúng, **véc-tơ gắn với từ *mole* là GIỐNG HỆT NHAU trong cả ba
trường hợp**. Bước nhúng không biết gì về ngữ cảnh.
<br><span class="en">**The answer has two halves, and the first is the
important one (slide 19)**: after embedding, **the vector for *mole* is
identical in all three cases**. Embedding knows nothing about context.</span>

**Chỉ ở bước sau, khối chú ý (slide 20-21)**, các véc-tơ nhúng xung quanh mới
có cơ hội **truyền thông tin vào véc-tơ của *mole* và cập nhật giá trị của
nó**. Một mô hình huấn luyện tốt có thể gắn **nhiều hướng khác nhau trong
không gian nhúng** với nhiều nghĩa khác nhau của cùng một từ; **việc của khối
chú ý là tính xem cần cộng thêm gì vào véc-tơ nhúng chung chung, như một hàm
của ngữ cảnh, để đẩy nó về đúng một trong các hướng đó**.
<br><span class="en">**Only at the next step, the attention block (slides
20-21)**, do the surrounding embeddings get to **pass information into the
*mole* embedding and update its values**. A well-trained model can associate
**multiple distinct directions in embedding space** with a word's multiple
meanings; **the attention block's job is to compute what to add to the generic
embedding, as a function of context, to move it to one of those
directions**.</span>

**Phạm vi (slide 22)**: việc truyền thông tin giữa hai véc-tơ nhúng có thể
xảy ra **qua khoảng cách rất xa** và mang thông tin **giàu hơn nhiều so với
một từ đơn lẻ**.
<br><span class="en">**Range (slide 22)**: this transfer can occur **over
potentially large distances** and can involve information **much richer than
just a single word**.</span>

### 4. Mẫu hình chú ý, từng bước - <span class="en">The attention pattern, step by step</span>

Chương mô tả **một đầu chú ý duy nhất** trước, rồi mới nói khối chú ý gồm
nhiều đầu chạy song song (slide 23). Câu ví dụ dùng xuyên suốt:
*A fluffy blue creature roamed the verdant forest.*
<br><span class="en">The chapter describes **a single head of attention**
first (slide 23), with one running example.</span>

**Véc-tơ nhúng ban đầu (slide 24)**: là véc-tơ nhiều chiều, **không chứa tham
chiếu nào tới ngữ cảnh**, nhưng **có mã hóa vị trí của từ**. Nghĩa là các
phần tử của nó đủ cho biết **từ đó là gì** và **nó nằm ở đâu**. Ký hiệu là
`E`.
<br><span class="en">**The initial embedding (slide 24)**: a high-dimensional
vector containing **no reference to context**, but **encoding the word's
position**. Its entries tell you both **what the word is** and **where it
sits**. Denoted `E`.</span>

**Mục tiêu (slide 25)**: sinh ra một bộ véc-tơ nhúng tinh chỉnh `E'`, trong
đó **các danh từ đã hấp thụ nghĩa từ các tính từ tương ứng**.
<br><span class="en">**The goal (slide 25)**: produce refined embeddings `E'`
in which **the nouns have ingested the meaning of their adjectives**.</span>

**Truy vấn (slide 26-29)**: hình dung mỗi danh từ trong câu đặt câu hỏi *"có
tính từ nào đứng trước tôi không?"*. Câu hỏi ấy được mã hóa thành một véc-tơ
gọi là **truy vấn**. Ba chi tiết cần nhớ:
<br><span class="en">**Queries (slides 26-29)**: each noun asks *"are there
any adjectives sitting in front of me?"*, encoded as a vector called the
**query**. Three details to remember:</span>

- Véc-tơ truy vấn có **số chiều nhỏ hơn nhiều** so với véc-tơ nhúng.
  <br><span class="en">The query vector has a **much smaller dimension** than
  the embedding vector.</span>
- Tính truy vấn là **lấy một ma trận `WQ` nhân với véc-tơ nhúng của từ**, áp
  cho **mọi** véc-tơ nhúng trong ngữ cảnh để ra một truy vấn cho mỗi token.
  <br><span class="en">Computing a query is **multiplying a matrix `WQ` by
  the word's embedding**, applied to **all** embeddings in the context.</span>
- **Các phần tử của `WQ` chính là tham số của mô hình**, nghĩa là hành vi
  thật của nó **được học từ dữ liệu**, không do ai thiết kế.
  <br><span class="en">**The entries of `WQ` are the model's parameters**,
  so its true behaviour is **learned from data**.</span>

**Khóa (slide 30-32)**: một ma trận thứ hai, **ma trận khóa `WK`**, cũng đầy
tham số chỉnh được, nhân với từng véc-tơ nhúng để ra dãy véc-tơ **khóa**.
Cách hiểu: **khóa là câu trả lời tiềm năng cho truy vấn**. Ma trận khóa ánh
xạ véc-tơ nhúng về **cùng không gian số chiều nhỏ** như truy vấn. Trong ví
dụ, **khóa do từ *fluffy* sinh ra khớp rất sát với truy vấn do từ *creature*
sinh ra**.
<br><span class="en">**Keys (slides 30-32)**: a second matrix `WK`, equally
full of tunable parameters, produces the **keys**, understood as **potential
answers to the queries**, mapped into **the same smaller space**. In the
example, **the key produced by *fluffy* is closely aligned to the query
produced by *creature***.</span>

**Từ tích vô hướng tới mẫu hình chú ý (slide 33-35)**:
<br><span class="en">**From dot products to the attention pattern (slides
33-35)**:</span>

1. Tính **toàn bộ tích vô hướng của các cặp khóa - truy vấn**, được một lưới
   giá trị chạy từ `−∞` tới `∞`, thể hiện **mức liên quan của mỗi từ đối với
   việc cập nhật nghĩa của mọi từ khác**.
   <br><span class="en">Compute **all key-query dot products**, giving a grid
   from `−∞` to `∞` scoring **how relevant each word is to updating the
   meaning of every other word**.</span>
2. Ta muốn các số **trong mỗi cột nằm giữa 0 và 1 và cộng lại bằng 1**, như
   một phân phối xác suất, nên **áp softmax dọc theo từng cột**.
   <br><span class="en">We want each column **between 0 and 1 and summing to
   1**, like a probability distribution, so **apply softmax down each
   column**.</span>
3. Lưới đã chuẩn hóa đó gọi là **mẫu hình chú ý** (attention pattern).
   <br><span class="en">That normalised grid is the **attention
   pattern**.</span>

**Công thức (slide 36)**: `softmax(Kᵀ Q / ...)`, trong đó `Q` và `K` là **toàn
bộ mảng các véc-tơ truy vấn và khóa** - những véc-tơ nhỏ thu được bằng cách
nhân véc-tơ nhúng với ma trận truy vấn và ma trận khóa. **Tử số `Kᵀ Q` là
cách viết cực gọn cho lưới mọi tích vô hướng khóa - truy vấn.**
<br><span class="en">**The formula (slide 36)**: `softmax(Kᵀ Q / ...)`, where
`Q` and `K` are **the full arrays** of query and key vectors. **The numerator
`Kᵀ Q` is a very compact way to represent the grid of all key-query dot
products.**</span>

**Một con số đáng nhớ (slide 38)**: **kích thước của mẫu hình chú ý bằng bình
phương độ dài ngữ cảnh**. Đây là lý do kỹ thuật khiến cửa sổ ngữ cảnh đắt đỏ,
và nối thẳng tới mục **giới hạn ngữ cảnh** ở phần 3.
<br><span class="en">**A number worth remembering (slide 38)**: **the size of
the attention pattern is equal to the square of the context size**. This is
why context windows are expensive, and it connects directly to the **context
limit** in part 3.</span>

**Giá trị (slide 40-41)**: cách trực tiếp nhất để cập nhật véc-tơ nhúng là
dùng **ma trận thứ ba, ma trận giá trị `WV`**: nhân nó với véc-tơ nhúng của
từ thứ nhất được **véc-tơ giá trị**, rồi **cộng véc-tơ đó vào véc-tơ nhúng
của từ thứ hai**. Việc này không chỉ làm với một véc-tơ nhúng - **áp cùng một
tổng có trọng số trên mọi cột**, sinh ra một dãy các thay đổi.
<br><span class="en">**Values (slides 40-41)**: the most straightforward
update uses **a third matrix, the value matrix `WV`**: multiply it by the
first word's embedding to get a **value vector**, and **add that to the second
word's embedding**. The same **weighted sum is applied across all
columns**.</span>

### 5. Sáu bước từ văn bản tới token kế tiếp - <span class="en">Six steps from text to next token</span>

Phần 2 dựng lại cùng cơ chế dưới dạng quy trình. **Phạm vi được nói rõ (slide
43)**: giải thích này tập trung vào **Transformer tự hồi quy, chỉ có bộ giải
mã**; còn tồn tại các kiến trúc mô hình ngôn ngữ khác.
<br><span class="en">Part 2 rebuilds the mechanism as a procedure. **The scope
is stated (slide 43)**: this focuses on **autoregressive, decoder-only
Transformers**; other architectures exist.</span>

**Bốn câu định nghĩa gọn (slide 43)**:
<br><span class="en">**Four crisp definitions (slide 43)**:</span>

- Một **LLM** là mô hình ngôn ngữ huấn luyện trên lượng dữ liệu lớn.
  <br><span class="en">An **LLM** is a language model trained on large
  amounts of data.</span>
- Một **Transformer** là kiến trúc mạng nơ-ron mà nhiều LLM sử dụng.
  <br><span class="en">A **Transformer** is a neural network architecture
  used by many LLMs.</span>
- Các lớp của nó biến **véc-tơ token thành biểu diễn có ngữ cảnh**.
  <br><span class="en">Its layers turn **token vectors into contextual
  representations**.</span>
- Mô hình kiểu **GPT** dùng các biểu diễn ấy để **dự đoán token kế tiếp**.
  <br><span class="en">A **GPT-style** model uses those representations to
  **predict the next token**.</span>

**Bước 1 - biến văn bản thành véc-tơ (slide 44)**: tách văn bản thành
**token**; tra mỗi token trong **bảng nhúng đã học**; **đưa thêm thông tin về
vị trí token**. Bảng ví dụ: `A → x1`, `fluffy → x2`, `blue → x3`,
`creature → x4`. Lưu ý được ghi rõ: **ví dụ giả định một token một từ, còn bộ
tách token thật có thể cắt một từ thành nhiều token**.
<br><span class="en">**Step 1 - convert text into vectors (slide 44)**: split
into **tokens**, look each up in a **learned embedding table**, and
**incorporate position**. The note is explicit: **one token per word is a
simplification; real tokenizers may split a word into several
tokens**.</span>

**Bước 2 - chú ý thu thập thông tin ngữ cảnh (slide 45)**: tạo **truy vấn,
khóa, giá trị tại mỗi vị trí**; so truy vấn tại *creature* với **các khóa được
phép**; **softmax** biến điểm khớp thành trọng số chú ý; **kết hợp các giá
trị** theo trọng số đó. Kết quả có thể mang thông tin của *fluffy* và *blue*
vào biểu diễn tại *creature*.
<br><span class="en">**Step 2 - attention gathers context (slide 45)**:
create **Query, Key and Value at each position**, compare the Query at
*creature* with **the allowed Keys**, **softmax** the scores into attention
weights, and **combine the Values**.</span>

**Khái niệm mới so với Chapter 5 - mặt nạ nhân quả**: **mỗi vị trí chỉ được
chú ý tới chính nó và các vị trí trước đó**. Đây là chi tiết biến một khối
chú ý chung chung thành một mô hình **sinh văn bản** được: nếu một vị trí
nhìn thấy tương lai thì bài toán dự đoán từ kế tiếp trở nên vô nghĩa.
<br><span class="en">**New relative to Chapter 5 - the causal mask**: **each
position attends only to itself and earlier positions**. This is what turns a
generic attention block into a model that can **generate**: if a position
could see the future, next-token prediction would be meaningless.</span>

**Bảng truy vấn - khóa - giá trị (slide 46)**, cách diễn đạt gọn nhất trong
cả chương:
<br><span class="en">**The Query-Key-Value table (slide 46)**, the chapter's
tidiest formulation:</span>

| Ký hiệu | Câu hỏi nó trả lời |
|---|---|
| **Truy vấn** `q` | Vị trí này **đang tìm thông tin gì**? |
| **Khóa** `k` | **Đặc trưng nào** cho phép các vị trí khác khớp với nó? |
| **Giá trị** `v` | Vị trí này **đóng góp thông tin gì**? |

Công thức cho véc-tơ cột `xᵢ` tại vị trí `i`: `qᵢ = WQ xᵢ`, `kᵢ = WK xᵢ`,
`vᵢ = WV xᵢ`. Ghi chú của slide rất thẳng thắn: **ba câu hỏi trên là phép loại
suy trực giác; `Q`, `K`, `V` là các véc-tơ số**. Trong một đầu, **các vị trí
dùng chung các ma trận chiếu đã học**, và các phương trình đã được đơn giản
hóa.
<br><span class="en">The slide is candid: **those three questions are
intuitive analogies; `Q`, `K` and `V` are numerical vectors**. Within a head
**positions share the learned projection matrices**, and the equations are
simplified.</span>

**Ví dụ minh họa trọng số chú ý (slide 47)**: tại vị trí *creature*, một đầu
gán `A` 5%, `fluffy` 40%, `blue` 35%, `creature` 20%, cho
`z₄ = 0,05v₁ + 0,40v₂ + 0,35v₃ + 0,20v₄`.
<br><span class="en">**An illustrative pattern (slide 47)**, with those four
weights and that weighted sum.</span>

Hai lưu ý đi kèm đáng nhớ hơn chính các con số: **chú ý kết hợp các véc-tơ
giá trị, không phải kết hợp bản thân các từ**; và các trọng số ấy **chỉ để
minh họa** - mẫu hình thật phụ thuộc mô hình đã học, lớp, đầu và đầu vào.
<br><span class="en">Two accompanying notes matter more than the numbers:
**attention combines Value vectors, not the words themselves**; and the
weights are **illustrative only**.</span>

**Nhiều đầu chú ý và kết nối tắt (slide 48)**: nhiều đầu có thể **học những
cách kết hợp thông tin khác nhau**; mô hình **nối các đầu ra lại và áp một
phép chiếu đã học**; một **kết nối tắt** cộng kết quả vào biểu diễn đang có.
Ghi chú quan trọng: **con người không gán cho mỗi đầu một nhiệm vụ ngữ nghĩa
cố định** - đây là cảnh báo chống lại cách kể chuyện quá gọn gàng kiểu "đầu
này lo ngữ pháp, đầu kia lo chủ ngữ".
<br><span class="en">**Multiple heads and residual updates (slide 48)**:
heads learn different combinations, outputs are concatenated and projected,
and a **residual connection** adds the result. The note matters: **humans do
not assign a fixed semantic task to each head**.</span>

**Bước 3 - MLP biến đổi từng vị trí (slide 49)**:
<br><span class="en">**Step 3 - the MLP transforms each position (slide
49)**:</span>

| Thành phần | Vai trò |
|---|---|
| **Chú ý** | **Thu thập và kết hợp** thông tin **giữa các vị trí** |
| **MLP** | **Biến đổi tiếp** véc-tơ **tại từng vị trí riêng lẻ** |

MLP xử lý **mỗi vị trí tách biệt**, dùng **trọng số chung cho mọi vị trí
trong cùng lớp**, và **đầu vào của nó đã chứa thông tin ngữ cảnh do chú ý thu
thập**. MLP là viết tắt của **mạng truyền thẳng nhiều lớp**, còn gọi là mạng
truyền thẳng.
<br><span class="en">The MLP processes **each position separately** with
**weights shared across positions within the layer**, and **its input already
carries the context gathered by attention**.</span>

**Bước 4 - lặp qua nhiều lớp Transformer (slide 50)**: mỗi lớp nhận biểu diễn
từ lớp trước, **tính `Q`, `K`, `V` mới** rồi áp chú ý, và MLP của nó biến đổi
tiếp. **Các lớp thường có tham số riêng.** Cảnh báo quan trọng: **vai trò của
các lớp là phân tán và chồng lấn, chứ không phải một trình tự cố định kiểu
"từ, rồi ngữ pháp, rồi nghĩa"**.
<br><span class="en">**Step 4 - repeat through many layers (slide 50)**, with
separate parameters per layer and the caution that **layer roles are
distributed and overlapping, not a fixed sequence**.</span>

**Bước 5 - dự đoán token kế tiếp (slide 51)**: lấy **véc-tơ lớp cuối tại vị
trí cuối cùng**; **chiếu nó thành một điểm số cho mọi token trong từ vựng**;
**áp softmax** để ra xác suất. Công thức: `logits = Wout·h_last + b`,
`p = softmax(logits)`.
<br><span class="en">**Step 5 - predict the next token (slide 51)**: take the
final-layer vector at the last position, project it to a score for every token
in the vocabulary, and softmax.</span>

**Ví dụ phân phối (slide 52)**: `roamed` 30%, `appeared` 25%, `was` 20%, phần
còn lại 25%. Và đây là câu quan trọng nhất của slide: **hệ thống chọn token
bằng một quy tắc giải mã, chẳng hạn lấy mẫu - nó KHÔNG phải lúc nào cũng chọn
token có xác suất cao nhất**.
<br><span class="en">**A hypothetical distribution (slide 52)**, and the
slide's key sentence: **the system selects a token using a decoding rule such
as sampling, and it does not always choose the most probable token**.</span>

**Bước 6 - tiếp tục sinh (slide 53)**: **nối token mới vào chuỗi**; **dự đoán
token kế tiếp dùng cả đầu vào lẫn phần đã sinh**; **lặp tới khi gặp điều kiện
dừng**. Viết gọn: `P(t_{k+1} | t₁, ..., t_k)`. Chi tiết cài đặt được nêu:
**có thể lưu đệm các khóa và giá trị đã tính để khỏi tính lại ở mỗi bước
sinh**.
<br><span class="en">**Step 6 - continue generating (slide 53)**, with the
implementation note that **earlier Keys and Values can be cached**.</span>

**Huấn luyện dạy Transformer thế nào (slide 54)**: **dự đoán token kế tiếp tại
nhiều vị trí** trong một chuỗi huấn luyện; **so dự đoán với token thật và tính
mất mát**; **lan truyền ngược** để tính gradient; **bộ tối ưu** cập nhật tham
số. Tham số học được gồm **bảng nhúng, các ma trận chiếu chú ý, trọng số MLP
và phép chiếu đầu ra**. Ghi chú: **dự đoán token kế tiếp là nền tảng của tiền
huấn luyện; huấn luyện thêm có thể cải thiện khả năng làm theo chỉ dẫn**.
<br><span class="en">**How training teaches the Transformer (slide 54)**, and
the note that **next-token prediction is a foundation of pretraining, with
further training improving instruction following**.</span>

**Bảng phân biệt quan trọng nhất của phần 2 (slide 55)**:
<br><span class="en">**Part 2's most important distinction (slide 55)**:</span>

| Học trong lúc huấn luyện | Tính cho đầu vào hiện tại |
|---|---|
| Bảng nhúng | Biểu diễn token |
| Các ma trận chiếu `Q`, `K`, `V` | Các véc-tơ truy vấn, khóa, giá trị |
| Trọng số MLP và trọng số đầu ra | Trọng số chú ý và các véc-tơ ẩn |
| | Xác suất token kế tiếp |

**Trong lúc suy luận thông thường, tham số mô hình đứng yên còn các giá trị
tính ra thay đổi theo ngữ cảnh.** Đây là câu giải thích gọn nhất cho việc vì
sao mô hình "không học được gì" từ cuộc trò chuyện của bạn.
<br><span class="en">**During ordinary inference the parameters stay fixed
while the computed values change with the context.** This is the tidiest
explanation of why a model does not "learn" from your conversation.</span>

### 6. ChatGPT không phải là LLM - <span class="en">ChatGPT is not the LLM</span>

Đây là phần thực dụng nhất của chương, và là phần trả lời được nhiều thắc
mắc đời thường nhất.
<br><span class="en">This is the chapter's most practical part.</span>

**Phân biệt nền tảng (slide 58)**:
<br><span class="en">**The founding distinction (slide 58)**:</span>

| | Là gì | Làm gì |
|---|---|---|
| **LLM (một mô hình GPT)** | "**Bộ não**" | Làm **đúng một việc**: cho một đoạn văn bản, dự đoán token kế tiếp |
| **Ứng dụng ChatGPT** | "**Lớp vỏ**" | Biến cuộc trò chuyện của bạn thành văn bản mà LLM đọc được, rồi biến đầu ra của LLM ngược lại thành câu trả lời |

Công thức của slide: **`ChatGPT = LLM + dựng lời nhắc + tách token + vòng lặp
sinh + các phần phụ trợ`**.
<br><span class="en">The slide's formula: **`ChatGPT = LLM + prompt building
+ tokenization + a generation loop + extras`**.</span>

**Toàn bộ đường ống (slide 59)**: bạn gõ tin nhắn → **1. dựng lời nhắc đầy
đủ** (chỉ dẫn + lịch sử + tin nhắn của bạn) → **2. tách thành token** (văn bản
thành số) → **3. LLM dự đoán token kế tiếp** (lặp lại) → **4. token trở lại
thành văn bản** → câu trả lời hiện ra.
<br><span class="en">**The full pipeline (slide 59)**, with step 3
repeating.</span>

**Bước 1 - ứng dụng dựng lời nhắc đầy đủ (slide 60)**: **LLM không bao giờ
chỉ thấy tin nhắn của bạn**. Ứng dụng ghép một kịch bản ẩn gồm **lời nhắc hệ
thống** (chỉ dẫn kiểu *"You are a helpful assistant"*), **lịch sử trò chuyện**
(các lượt trước, có nhãn người nói), rồi **tin nhắn mới của bạn** và một **dấu
hiệu nghĩa là "giờ tới lượt trợ lý nói"**.
<br><span class="en">**Step 1 - the app builds the full prompt (slide 60)**:
**the LLM never sees only your message.**</span>

Phép loại suy của slide: **giống như đưa cho một diễn viên kịch bản** - mô tả
nhân vật, đoạn thoại đã diễn ra, và một dòng trống cho câu thoại kế tiếp.
<br><span class="en">The slide's analogy: **like handing an actor a
script**.</span>

**Mẫu hội thoại đã ghép (slide 61)**, bản giản lược:
<br><span class="en">**The assembled chat template (slide 61)**,
simplified:</span>

```
[system]    You are a helpful assistant.
[user]      What is the capital of France?
[assistant] The capital of France is Paris.
[user]      And of Japan?
[assistant] _
```

**Việc của mô hình đơn giản là viết tiếp văn bản này từ chỗ trống ở cuối.**
Nhìn thấy khuôn mẫu ấy là hiểu ngay vì sao ChatGPT "nhớ" được các tin nhắn
trước: **không phải nó nhớ, mà là toàn bộ lịch sử được dán lại vào lời nhắc ở
mỗi lượt**.
<br><span class="en">**The model's job is simply to continue this text from
the blank at the end.** Seeing the template explains why ChatGPT seems to
"remember": **it does not remember, the whole history is pasted back into the
prompt every turn**.</span>

**Bước 2 - văn bản thành token (slide 62)**: **LLM chỉ hiểu số**; văn bản
được tách thành token là **từ nguyên vẹn hoặc mảnh của từ**; **mỗi token nhận
một số ID từ một bộ từ vựng cố định**. Ví dụ minh họa tách
`Chat | G | PT | is | fun`, kèm lưu ý bộ tách token thật khác nhau tùy hệ.
<br><span class="en">**Step 2 - text becomes tokens (slide 62)**: whole words
or word pieces, each with an ID from a fixed vocabulary.</span>

**Bước 3 - LLM dự đoán từng token một (slide 63)**: đọc toàn bộ token đang
có; **xuất một xác suất cho mọi token kế tiếp có thể**; **ứng dụng chọn một
token, có thêm một chút ngẫu nhiên**; nối vào và lặp lại; **dừng ở một token
đặc biệt nghĩa là "hết câu trả lời"**. Ví dụ: `Tokyo` 90%, `Kyoto` 5%,
`Osaka` 3%, `the` 2%.
<br><span class="en">**Step 3 - one token at a time (slide 63)**, with the
app picking one **with a little randomness** and stopping at a special
end-of-answer token.</span>

**Bên trong LLM (slide 64)**, tóm tắt lại phần 1 và 2 bằng hai câu: **chú ý** -
mỗi từ nhìn các từ khác và quyết định từ nào quan trọng, *bank* cạnh *river*
dịch về nghĩa bờ sông; **các lớp MLP** - biểu diễn của mỗi từ được xử lý riêng,
bổ sung kiến thức đã lưu trong lúc huấn luyện. Rồi:
**`chú ý → MLP, lặp lại nhiều lần → xác suất cho token kế tiếp`**.
<br><span class="en">**Inside the LLM (slide 64)**, restating parts 1 and 2 in
two sentences and one pipeline.</span>

**Bước 4 - token trở lại thành văn bản (slide 65)**: ứng dụng đổi ID token đã
chọn ngược lại thành chữ; **chữ được truyền ra màn hình ngay khi được sinh**;
**đó là lý do câu trả lời trông như đang tự gõ ra**.
<br><span class="en">**Step 4 - tokens become text again (slide 65)**, and
**that is why the reply seems to "type itself out"**.</span>

**Các phần phụ trợ dựng quanh LLM (slide 66)** - bốn thứ, và điểm chung của
cả bốn mới là ý chính:
<br><span class="en">**Extras built around the LLM (slide 66)** - four of
them, and what they share is the point:</span>

| Phần phụ trợ | Cách hoạt động |
|---|---|
| **Công cụ** | Mô hình có thể **yêu cầu tìm kiếm web hoặc tính toán**; ứng dụng chạy giúp rồi **dán kết quả vào lời nhắc** |
| **Bộ nhớ** | **LLM quên giữa các cuộc trò chuyện**; tính năng bộ nhớ **lưu ghi chú và thêm vào các lời nhắc sau** |
| **Kiểm tra an toàn** | Các **bộ lọc riêng biệt** sàng lọc yêu cầu và câu trả lời |
| **Giới hạn ngữ cảnh** | LLM **đọc được một lượng văn bản có hạn mỗi lần**, nên trò chuyện dài có thể bị **cắt bớt hoặc tóm tắt lại** |

**Vòng lặp gọi công cụ (slide 67)**: LLM viết ra `search: weather Hanoi` →
**ứng dụng chạy tìm kiếm** → **kết quả được dán vào lời nhắc** → **LLM viết
tiếp dựa trên kết quả đó**.
<br><span class="en">**How a tool call fits the loop (slide 67)**.</span>

**Phép loại suy chốt chương (slide 68)** - đáng nhớ nguyên văn: **LLM là một
nhà văn xuất sắc bị nhốt trong phòng, chỉ đọc được một trang giấy và viết ra
từ kế tiếp. ChatGPT là người trợ lý bên ngoài, chuẩn bị trang giấy đó (chỉ
dẫn, cuộc trò chuyện, kết quả tìm kiếm), luồn qua khe cửa, nhận lại từng từ
mới, luồn trang giấy vào lại, và cuối cùng đưa cho bạn câu trả lời hoàn
chỉnh.**
<br><span class="en">**The closing analogy (slide 68)** - worth memorising:
**the LLM is a brilliant writer locked in a room who can only read a page and
write the next word; ChatGPT is the assistant outside who prepares the page,
slides it under the door, collects each new word, slides the page back, and
finally shows you the finished reply.**</span>

### 7. Năm ý chốt và năm câu hỏi ôn - <span class="en">Five takeaways and five review questions</span>

**Năm ý chốt (slide 69)**:
<br><span class="en">**Five key takeaways (slide 69)**:</span>

1. **LLM là bộ dự đoán token kế tiếp; ChatGPT là ứng dụng bọc quanh nó.**
   <br><span class="en">The LLM is a next-token predictor; ChatGPT is the app
   around it.</span>
2. **Ứng dụng dựng một lời nhắc ẩn**: chỉ dẫn + lịch sử + tin nhắn của bạn.
   <br><span class="en">The app builds a hidden prompt.</span>
3. **Văn bản được đổi thành token, dự đoán từng token một, rồi đổi ngược lại.**
   <br><span class="en">Text becomes tokens, predicted one at a time, then
   converted back.</span>
4. **Bên trong, chú ý lo ngữ cảnh còn các lớp MLP cung cấp kiến thức đã lưu.**
   <br><span class="en">Inside, attention handles context and MLP layers
   supply stored knowledge.</span>
5. **Công cụ, bộ nhớ và kiểm tra an toàn hoạt động bằng cách thay đổi thứ
   được đưa vào lời nhắc.**
   <br><span class="en">Tools, memory and safety checks work by changing what
   goes into the prompt.</span>

Ý số 5 là ý gói gọn cả phần 3: **không có phần phụ trợ nào sửa mô hình; tất cả
đều chỉ sửa đầu vào của mô hình**.
<br><span class="en">Takeaway 5 sums up part 3: **no extra modifies the model;
they all modify the model's input**.</span>

**Năm câu hỏi ôn (slide 70)** - xem [[on-thi]] để có câu trả lời đầy đủ:
<br><span class="en">**Five review questions (slide 70)** - see [[on-thi]] for
worked answers:</span>

1. Vì sao ChatGPT có vẻ "nhớ" các tin nhắn trước trong một cuộc trò chuyện?
   <br><span class="en">Why does ChatGPT seem to "remember" earlier
   messages?</span>
2. Token là gì, và vì sao cần tới nó?
   <br><span class="en">What is a token, and why is it needed?</span>
3. Vì sao cùng một câu hỏi lại có thể cho ra các câu trả lời khác nhau?
   <br><span class="en">Why can the same question produce different
   answers?</span>
4. Kết quả tìm kiếm web đến được LLM bằng cách nào?
   <br><span class="en">How does a web search result reach the LLM?</span>
5. Chuyện gì xảy ra khi một cuộc trò chuyện vượt quá giới hạn ngữ cảnh?
   <br><span class="en">What happens when a conversation exceeds the context
   limit?</span>

## Liên kết - <span class="en">Links</span>

- [[large-language-model]] - định nghĩa, tham số, quy mô huấn luyện.
  <br><span class="en">definition, parameters, training scale.</span>
- [[attention-pattern]] - truy vấn, khóa, giá trị và lưới đã chuẩn hóa.
  <br><span class="en">queries, keys, values and the normalised grid.</span>
- [[transformer-architecture]] - sáu bước, mặt nạ nhân quả, nhiều đầu, MLP.
  <br><span class="en">the six steps, causal mask, multiple heads, MLP.</span>
- [[tokenization-and-generation]] - token, từ vựng, quy tắc giải mã, dừng.
  <br><span class="en">tokens, vocabulary, decoding rules, stopping.</span>
- [[chatgpt-application-layer]] - lời nhắc hệ thống, công cụ, bộ nhớ, giới
  hạn ngữ cảnh.
  <br><span class="en">system prompt, tools, memory, context limit.</span>
- [[chapter05-deep-learning-k32]] - chương liền trước; chương này tiếp nối
  đúng chỗ phần tự chú ý dừng lại.
  <br><span class="en">the preceding chapter; this one resumes exactly where
  its self-attention section stopped.</span>
- [[self-attention]] - cùng cơ chế, nhìn từ Chapter 5.
  <br><span class="en">the same mechanism, seen from Chapter 5.</span>
- [[tran-thi-tuan-anh]] - giảng viên.
  <br><span class="en">the instructor.</span>
- [[on-thi]] - trang tổng hợp ôn thi.
  <br><span class="en">the exam-revision synthesis page.</span>

## Trích dẫn - <span class="en">Citations</span>

Toàn bộ nội dung trang này lấy từ
`raw/Lecture Notes/K32/Chapter06/VNP_LLMs_finaltex.pdf`, trích dẫn theo **số
chân trang** (trùng số trang vật lý). Nhiều slide ghi nguồn hình là
*(Source: Internet)*; phần 1 bám sát cách trình bày phổ biến của loạt bài
giảng trực quan về Transformer, nhưng bộ slide **không ghi trích dẫn học
thuật cụ thể nào**, nên wiki này không gán nguồn ngoài cho chúng.
<br><span class="en">Everything on this page comes from that PDF, cited by
**footer number** (identical to the physical page number). Many slides credit
their figures only as *(Source: Internet)*; the deck carries **no specific
academic citation**, so this wiki does not attribute one.</span>
