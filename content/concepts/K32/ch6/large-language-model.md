---
type: concept
title: "Mô hình ngôn ngữ lớn"
title_en: "Large Language Models"
tags: [chapter-6, k32, llm, next-token-prediction, parameters, gpu]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Một **mô hình ngôn ngữ lớn (LLM)** là **một hàm toán học phức tạp, dự đoán từ
kế tiếp cho một đoạn văn bản bất kỳ** (slide 3).
<br><span class="en">A **large language model (LLM)** is **a sophisticated
mathematical function that predicts what word comes next for any piece of
text** (slide 3).</span>

Nhưng slide 4 điều chỉnh ngay: thay vì dự đoán một từ duy nhất một cách chắc
chắn, việc nó thật sự làm là **gán một xác suất cho toàn bộ các từ kế tiếp có
thể**.
<br><span class="en">But slide 4 immediately qualifies this: instead of
predicting one word with certainty, what it does is **assign a probability to
all possible next words**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Vì sao câu điều chỉnh ở slide 4 quan trọng hơn định nghĩa ở slide 3 - <span class="en">Why slide 4 matters more than slide 3</span>

Định nghĩa "dự đoán từ kế tiếp" nghe như mô hình **biết** đáp án. Câu ở slide
4 nói rõ nó **không biết**: đầu ra của nó là **một phân phối xác suất trên
toàn bộ từ vựng**, không phải một đáp án.
<br><span class="en">"Predicts the next word" sounds as if the model **knows**
the answer. Slide 4 says it does not: its output is **a probability
distribution over the whole vocabulary**, not an answer.</span>

Ba hành vi thực tế mà chương giải thích sau này đều bắt nguồn từ đúng chỗ
này:
<br><span class="en">Three real behaviours the chapter later explains all
follow from exactly this:</span>

- **Cùng một câu hỏi cho ra câu trả lời khác nhau** - vì có một phân phối để
  lấy mẫu, chứ không phải một đáp án cố định.
  <br><span class="en">**The same question gives different answers** - because
  there is a distribution to sample from.</span>
- **Mô hình có thể nói sai một cách rất tự tin** - vì xác suất cao chỉ có
  nghĩa là "hợp văn cảnh", không có nghĩa là "đúng sự thật".
  <br><span class="en">**The model can be confidently wrong** - high
  probability means "fits the text", not "is true".</span>
- **Không có bước tra cứu nào bên trong** - mọi thứ đều là một phép tính trên
  tham số.
  <br><span class="en">**There is no lookup step inside** - it is all
  arithmetic over parameters.</span>

### Tham số: chữ "lớn" nằm ở đâu - <span class="en">Parameters: where the "large" lives</span>

Chương mô tả huấn luyện như **vặn các núm trên một cỗ máy rất lớn**. Hành vi
của một mô hình ngôn ngữ **hoàn toàn được quyết định** bởi các giá trị liên
tục ấy, gọi là **tham số** hoặc **trọng số** (slide 5).
<br><span class="en">The chapter describes training as **tuning the dials on
a really big machine**. A language model's behaviour is **entirely
determined** by those continuous values, called **parameters** or **weights**
(slide 5).</span>

Bốn khẳng định của slide 5 nên nhớ đủ cả bốn, vì mỗi câu chặn một hiểu lầm
khác nhau:
<br><span class="en">All four of slide 5's claims are worth remembering,
because each blocks a different misconception:</span>

| Khẳng định | Hiểu lầm nó chặn |
|---|---|
| Chữ **lớn** trong LLM là **hàng trăm tỉ tham số** | Rằng "lớn" nói về lượng dữ liệu hoặc kích thước file |
| **Không người nào đặt các tham số đó** | Rằng có kỹ sư viết luật ngữ pháp vào mô hình |
| Chúng **bắt đầu ngẫu nhiên** | Rằng mô hình khởi đầu từ một cơ sở tri thức |
| Chúng được **tinh chỉnh lặp lại dựa trên rất nhiều mẫu văn bản** | Rằng mô hình "đọc hiểu" theo nghĩa của con người |

### Quy mô, bằng một con số dễ nhớ - <span class="en">Scale, in one memorable figure</span>

Để đọc hết lượng văn bản dùng huấn luyện GPT-3, **một người bình thường phải
đọc liên tục 24/7 trong hơn 2.600 năm** (slide 5).
<br><span class="en">To read the text used to train GPT-3, **a standard human
would need to read non-stop, 24-7, for over 2,600 years** (slide 5).</span>

Con số này đáng nhớ không phải để gây ấn tượng mà vì nó làm rõ một điều: **mô
hình không thể đang tra cứu lại tài liệu huấn luyện**. Lượng văn bản ấy không
nằm trong mô hình; chỉ có các tham số đã bị nó định hình là nằm trong đó.
<br><span class="en">The figure matters not for effect but because it makes
one thing clear: **the model cannot be looking its training data up**. That
text is not inside the model; only the parameters it shaped are.</span>

### Huấn luyện, và vì sao nó là [[backpropagation]] quen thuộc - <span class="en">Training, and why it is familiar backpropagation</span>

Đổi tham số tức là **đổi xác suất mà mô hình gán cho từ kế tiếp** trên một
đầu vào cho trước (slide 6). **Lan truyền ngược** được dùng để chỉnh toàn bộ
tham số sao cho mô hình **có xu hướng chọn đúng từ thật hơn một chút và chọn
mọi từ khác ít hơn một chút** (slide 8).
<br><span class="en">Changing parameters changes **the probabilities the model
gives for the next word** (slide 6). **Backpropagation** tweaks all the
parameters so the model becomes **a little more likely to choose the true word
and a little less likely to choose the others** (slide 8).</span>

Không có thuật toán mới nào ở đây. Đây đúng là cơ chế đã học ở
[[chapter05-deep-learning-k32]], chỉ khác **bài toán được đặt ra**: nhãn `y`
không do người gán mà **chính là từ kế tiếp có sẵn trong văn bản**. Đó là lý
do có thể huấn luyện trên internet mà không cần ai gắn nhãn.
<br><span class="en">No new algorithm appears here. It is the mechanism from
[[chapter05-deep-learning-k32]]; only the **problem setup** differs: the label
`y` is not assigned by a person but **is the next word already present in the
text**. That is why the internet can be used as training data without
labelling.</span>

Làm việc đó với **hàng nghìn tỉ ví dụ** thì mô hình không chỉ dự đoán chính
xác hơn trên dữ liệu huấn luyện mà còn **dự đoán hợp lý hơn trên văn bản chưa
từng thấy** (slide 9) - tức là suy rộng, đúng nghĩa đã học ở
[[overfitting-underfitting-k32]].
<br><span class="en">Over **trillions of examples** the model not only fits
the training data better but **makes more reasonable predictions on text it
has never seen** (slide 9) - generalisation in the sense of
[[overfitting-underfitting-k32]].</span>

### GPU và mốc 2017 - <span class="en">GPUs and the 2017 turning point</span>

Quy mô tính toán ấy **chỉ khả thi nhờ chip chuyên dụng chạy song song rất
nhiều phép tính, tức GPU** (slide 9-10).
<br><span class="en">That scale of computation **is only made possible by
special chips optimised for running many operations in parallel, GPUs**
(slides 9-10).</span>

Nhưng slide 9 nói thẳng điều kiện đi kèm: **không phải mô hình ngôn ngữ nào
cũng song song hóa được dễ dàng**. **Trước 2017, phần lớn mô hình ngôn ngữ xử
lý văn bản từng từ một.** Rồi một nhóm nghiên cứu ở Google giới thiệu
**Transformer**.
<br><span class="en">But slide 9 states the condition: **not all language
models can be easily parallelized**. **Prior to 2017, most processed text one
word at a time.** Then a team at Google introduced the **Transformer**.</span>

Đây là chỗ đáng dừng lại lâu nhất trong cả phần 1, vì nó cho thấy **phần cứng
quyết định kiến trúc**. GPU đã có sẵn; thứ còn thiếu là một mô hình dùng được
GPU. Mạng hồi tiếp ở [[recurrent-neural-network]] không dùng được vì bước `t`
phải chờ bước `t-1`. Transformer ra đời không phải vì nó chính xác hơn trên
giấy mà vì nó **song song hóa được**, và chỉ mô hình song song hóa được mới
lớn lên nổi tới quy mô hàng trăm tỉ tham số.
<br><span class="en">This deserves the longest pause in part 1, because it
shows **hardware shaping architecture**. GPUs already existed; what was
missing was a model that could use them. The recurrent network of
[[recurrent-neural-network]] could not, because step `t` waits for step `t-1`.
The Transformer arrived not because it was more accurate on paper but because
it **parallelises**, and only a parallelisable model can grow to hundreds of
billions of parameters.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter06-large-language-models]] - slide 3 (định nghĩa), 4 (xác suất cho
mọi từ kế tiếp), 5 (tham số, GPT-3 và 2.600 năm, không người nào đặt tham
số), 6 và 8 (lan truyền ngược chỉnh tham số), 9 (hàng nghìn tỉ ví dụ, GPU,
mốc trước 2017), 10 (GPU), 43 (định nghĩa gọn: LLM là mô hình ngôn ngữ huấn
luyện trên lượng dữ liệu lớn), 54 (huấn luyện dạy Transformer thế nào), 58
(LLM là "bộ não", làm đúng một việc).
<br><span class="en">The slides above.</span>

## Liên quan - <span class="en">Related</span>

- [[transformer-architecture]] - kiến trúc mà LLM hiện đại dùng.
  <br><span class="en">the architecture modern LLMs use.</span>
- [[attention-pattern]] - phép toán làm nên Transformer.
  <br><span class="en">the operation that makes a Transformer.</span>
- [[tokenization-and-generation]] - "từ kế tiếp" thực ra là "token kế tiếp".
  <br><span class="en">the "next word" is really the "next token".</span>
- [[chatgpt-application-layer]] - LLM không phải ứng dụng chat.
  <br><span class="en">an LLM is not a chat app.</span>
- [[backpropagation]] - thuật toán huấn luyện, không đổi so với Chapter 5.
  <br><span class="en">the training algorithm, unchanged from Chapter 5.</span>
- [[recurrent-neural-network]] - cách làm trước 2017, xử lý từng từ một.
  <br><span class="en">the pre-2017 approach, one word at a time.</span>
- [[mini-batch-gradient-descent]] - cùng một lợi thế song song hóa trên GPU.
  <br><span class="en">the same GPU parallelism advantage.</span>

## Lưu ý - <span class="en">Caveats</span>

**Chương dùng lẫn "từ" và "token".** Phần 1 nói "dự đoán từ kế tiếp" cho dễ
hiểu, còn phần 2 và 3 nói "token kế tiếp" mới là chính xác. Slide 44 và 52
đều ghi chú rõ chỗ này. Khi trả lời thi nên dùng **token**, và nói thêm rằng
"từ" chỉ là cách nói giản lược.
<br><span class="en">**The chapter alternates between "word" and "token".**
Part 1 says "next word" for readability; parts 2 and 3 say "next token", which
is accurate. Slides 44 and 52 both note this. In an exam answer use **token**,
and say that "word" is the simplification.</span>

**Chương không nêu con số tham số của bất kỳ mô hình cụ thể nào** ngoài cụm
"hàng trăm tỉ", và **không nêu tên mô hình nào ngoài GPT-3 (ở ví dụ 2.600
năm) và GPT nói chung**. Đừng gán số liệu cụ thể cho chương này.
<br><span class="en">**The chapter gives no parameter count for any specific
model** beyond "hundreds of billions", and **names no model other than GPT-3**
(in the 2,600-year example) **and GPT generally**. Do not attribute specific
figures to it.</span>
