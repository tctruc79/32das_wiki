---
type: concept
title: "Tự chú ý, truy vấn - khóa - giá trị và Transformer"
title_en: "Self-Attention, Query-Key-Value and the Transformer"
tags: [chapter-5, k32, deep-learning, attention, transformer, llm, qkv]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Tự chú ý là cơ chế mô hình hóa chuỗi **không cần hồi tiếp**: thay vì quét
từng bước theo thứ tự, nó **chú tâm vào những phần quan trọng nhất của đầu
vào** bằng cách so sánh mỗi phần tử với mọi phần tử khác. Toàn bộ cơ chế gói
trong một công thức:
<br><span class="en">Self-attention is a mechanism for modelling sequences
**without recurrence**: instead of scanning step by step in order, it
**attends to the most important parts of the input** by comparing each element
with every other. The whole mechanism fits in one formula:</span>

```
A(Q, K, V) = softmax( (Q · K') / scaling ) · V
```

với `Q = E WQ`, `K = E WK`, `V = E WV`, trong đó `E` là véc-tơ nhúng đã cộng
thông tin vị trí.
<br><span class="en">with `Q = E WQ`, `K = E WK`, `V = E WV`, where `E` is the
embedding with position information added.</span>

## Diễn giải - <span class="en">Explanation</span>

### Phép loại suy tìm kiếm - <span class="en">The search analogy</span>

Slide 57 giải thích `Q`, `K`, `V` bằng ví dụ tìm kiếm trên YouTube với từ
khóa "deep learning", và đây là cách nhanh nhất để không lẫn ba ký hiệu:
<br><span class="en">Slide 57 explains `Q`, `K`, `V` with a YouTube search for
"deep learning", and this is the fastest way to keep the three symbols
straight:</span>

| Ký hiệu | Vai trò trong phép loại suy | Vai trò thật |
|---|---|---|
| Truy vấn `Q` | Thứ bạn đang tìm: "deep learning" | Phần tử đang cần tìm thông tin liên quan |
| Khóa `K` | Tiêu đề của từng video (sea turtles, MIT 6.S191, Kobe Bryant) | Nhãn để so khớp với truy vấn |
| Giá trị `V` | Chính video đó | Nội dung thật được trả về |

Hai bước tương ứng: (1) **tính mặt nạ chú ý** - mỗi khóa giống truy vấn đến
mức nào; (2) **trích xuất giá trị theo độ chú ý** - trả về các giá trị có độ
chú ý cao nhất. Điểm cốt lõi của phép loại suy: khóa và giá trị **là hai thứ
khác nhau**. Ta so khớp với tiêu đề nhưng nhận về video; tách hai vai trò ấy
là điều làm cơ chế này linh hoạt hơn một phép so sánh đơn thuần.
<br><span class="en">The two matching steps: (1) **compute the attention
mask** - how similar is each key to the query; (2) **extract values based on
attention** - return the values with the highest attention. The analogy's core
point: keys and values **are two different things**. You match against titles
but receive videos; separating those roles is what makes the mechanism more
flexible than a plain comparison.</span>

### Bốn bước, và vì sao bước 1 bắt buộc - <span class="en">Four steps, and why step 1 is mandatory</span>

Slide 58 và 59 chia cơ chế thành bốn bước.
<br><span class="en">Slides 58 and 59 break the mechanism into four
steps.</span>

**Bước 1: mã hóa thông tin vị trí.** Vì dữ liệu được nạp **cùng một lúc**
chứ không tuần tự, thứ tự **phải được đưa vào bằng tay**: cộng thông tin vị
trí `p0, ..., p6` vào các véc-tơ nhúng từ, `encoding_i = embedding_i ⊕ pi`.
Câu ví dụ là *"He tossed the tennis ball to serve"*. Bước này bắt buộc và
đây là lý do: RNN biết thứ tự **miễn phí** vì nó xử lý tuần tự, còn tự chú ý
nhìn mọi từ cùng lúc nên nếu không cộng vị trí thì hai câu *"The food was
good, not bad"* và *"The food was bad, not good"* sẽ hoàn toàn giống nhau
đối với nó - tức vi phạm tiêu chí 3 ở
[[sequence-modeling-design-criteria]].
<br><span class="en">**Step 1: encode position information.** Because the data
is fed in **all at once** rather than sequentially, order **must be supplied
explicitly**: add position information `p0, ..., p6` to the word embeddings,
`encoding_i = embedding_i ⊕ pi`. The example sentence is *"He tossed the
tennis ball to serve"*. This step is mandatory, and here is why: an RNN knows
order **for free** because it processes sequentially, whereas self-attention
sees every word at once, so without added positions the sentences *"The food
was good, not bad"* and *"The food was bad, not good"* would be identical to
it - violating criterion 3 in
[[sequence-modeling-design-criteria]].</span>

**Bước 2: trích truy vấn, khóa, giá trị.** Ba lớp tuyến tính **riêng biệt**
áp lên **cùng một** véc-tơ nhúng có vị trí `E`: `Q = E WQ`, `K = E WK`,
`V = E WV`. Chữ **tự** trong "tự chú ý" nằm đúng ở đây: cả ba đến từ cùng một
đầu vào, nên chuỗi tự so khớp với chính nó.
<br><span class="en">**Step 2: extract query, key, value.** Three **separate**
linear layers applied to the **same** positional embedding `E`: `Q = E WQ`,
`K = E WK`, `V = E WV`. The **self** in "self-attention" lies exactly here:
all three come from the same input, so the sequence matches against
itself.</span>

**Bước 3: tính trọng số chú ý.** Điểm chú ý là **độ giống nhau từng cặp giữa
mỗi truy vấn và mỗi khóa**, đo bằng **tích vô hướng** (tức độ tương tự cosin),
rồi đưa qua softmax: `softmax( (Q · K') / scaling )`. Softmax biến các điểm
số thành **trọng số cộng lại bằng 1**, tức là "chú ý vào đâu". Ví dụ slide
nêu: trong câu trên, từ *"tennis"* chú ý mạnh tới *"ball"* và *"serve"*.
<br><span class="en">**Step 3: compute the attention weighting.** The attention
score is the **pairwise similarity between each query and each key**, measured
by the **dot product** (cosine similarity), then passed through a softmax:
`softmax( (Q · K') / scaling )`. The softmax turns scores into **weights
summing to 1**, i.e. where to attend. The slide's example: in that sentence
*"tennis"* attends strongly to *"ball"* and *"serve"*.</span>

**Bước 4: trích đặc trưng có độ chú ý cao.** Nhân trọng số vừa tính với các
giá trị: `A(Q, K, V) = softmax( (Q · K') / scaling ) · V`.
<br><span class="en">**Step 4: extract features with high attention.**
Multiply those weights by the values:
`A(Q, K, V) = softmax( (Q · K') / scaling ) · V`.</span>

### Một đầu chú ý, và nhiều đầu - <span class="en">One attention head, and many</span>

Slide 60 vẽ toàn bộ bốn bước thành một khối tính toán: ba lớp tuyến tính cho
truy vấn/khóa/giá trị từ cùng mã hóa vị trí → `MatMul` → `Scale` → `Softmax`
→ `Matmul`. Ba nhận định kèm theo: khối này là **một đầu tự chú ý** có thể
cắm vào một mạng lớn hơn; **nhiều đầu** thì mỗi đầu chú ý vào một phần khác
nhau của đầu vào (đối tượng chính, nền, một chi tiết nhỏ); và chú ý là **viên
gạch nền của kiến trúc Transformer** (Vaswani et al., 2017).
<br><span class="en">Slide 60 draws all four steps as one computational block:
three linear layers producing query/key/value from the same positional
encoding → `MatMul` → `Scale` → `Softmax` → `Matmul`. Three accompanying
claims: this block is **one self-attention head** that can plug into a larger
network; with **multiple heads** each attends to a different part of the input
(the main object, the background, a small detail); and attention is **the
foundational building block of the Transformer** (Vaswani et al.,
2017).</span>

Đây cũng là điểm chương dừng lại. **Không có slide nào vẽ khối Transformer
hoàn chỉnh** - không có kết nối tắt, chuẩn hóa theo lớp, mạng truyền thẳng
theo vị trí, hay cấu trúc bộ mã hóa/bộ giải mã. Chương dựng xong viên gạch
rồi dừng, và ai cần kiến trúc đầy đủ phải tìm nguồn khác.
<br><span class="en">This is also where the chapter stops. **No slide draws
the full Transformer block** - no residual connections, layer normalisation,
position-wise feed-forward network, or encoder/decoder structure. The chapter
finishes the brick and stops; anyone needing the full architecture must look
elsewhere.</span>

### Vì sao chú ý giải được cả ba giới hạn của RNN - <span class="en">Why attention solves all three RNN limitations</span>

Đối chiếu trực tiếp với bảng ba giới hạn ở [[lstm-gated-cells]]:
<br><span class="en">Read directly against the three-limitation table in
[[lstm-gated-cells]]:</span>

| Giới hạn của RNN | Tự chú ý xử lý thế nào |
|---|---|
| Nút cổ chai mã hóa | Không có trạng thái duy nhất; mọi phần tử **truy cập trực tiếp** mọi phần tử khác |
| Không song song hóa được | Không có phụ thuộc tuần tự; toàn bộ `Q · K'` là **một phép nhân ma trận** chạy song song |
| Không có trí nhớ dài | Khoảng cách giữa hai phần tử **không ảnh hưởng** tới độ mạnh của liên kết giữa chúng |

Dòng thứ ba là dòng quan trọng nhất về mặt khái niệm. Ở RNN, ảnh hưởng của
`x0` lên `ŷt` phải đi qua `t` bước nhân liên tiếp nên teo dần theo khoảng
cách. Ở tự chú ý, `x0` và `xt` được so khớp **trực tiếp bằng một tích vô
hướng**, và khoảng cách giữa chúng không xuất hiện trong công thức - đó là lý
do câu *"I grew up in France, ... I speak fluent ___"* không còn là bài toán
khó.
<br><span class="en">The third row is the conceptually most important. In an
RNN, `x0`'s influence on `ŷt` must travel through `t` successive
multiplications, so it decays with distance. In self-attention, `x0` and `xt`
are matched **directly by one dot product**, and the distance between them does
not appear in the formula at all - which is why *"I grew up in France, ... I
speak fluent ___"* stops being a hard problem.</span>

### Tự chú ý được dùng ở đâu - <span class="en">Where self-attention is applied</span>

| Lĩnh vực | Ứng dụng | Nguồn |
|---|---|---|
| Xử lý ngôn ngữ | Transformer: BERT, GPT; sinh văn bản, dịch máy, hỏi đáp, sinh ảnh từ văn bản ("an armchair in the shape of an avocado") | Devlin et al. 2019; Brown et al. 2020 |
| Chuỗi sinh học | Mô hình cấu trúc protein: dự đoán cấu trúc 3 chiều từ chuỗi axit amin | Jumper et al., *Nature* 2021; Lin et al., *Science* 2023 |
| Thị giác máy tính | Vision Transformer: cắt ảnh thành các mảnh và coi dãy mảnh đó như một chuỗi | Dosovitskiy et al., ICLR 2020 |

Dòng kết của slide 61 nối thẳng tới thứ sinh viên dùng hằng ngày: **tự chú ý
là nền tảng của nhiều mô hình ngôn ngữ lớn (LLM)** - vẫn đúng cơ chế `Q`,
`K`, `V` ấy, chỉ nhân lên quy mô hàng tỉ tham số. Dòng Vision Transformer
cũng đáng chú ý vì nó phá vỡ ranh giới giữa hai bài giảng: một bài toán ảnh
được giải bằng công cụ của bài toán chuỗi, chỉ bằng cách cắt ảnh thành mảnh
rồi coi dãy mảnh là một chuỗi.
<br><span class="en">Slide 61's closing line connects straight to what students
use daily: **self-attention is the basis for many large language models
(LLMs)** - the same `Q`, `K`, `V` mechanism, scaled to billions of parameters.
The Vision Transformer row is also notable for breaking the boundary between
two lectures: an image problem solved with a sequence tool, merely by cutting
the image into patches and treating the patch sequence as a
sequence.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 57 (phép loại suy tìm kiếm YouTube,
`Q`/`K`/`V`, hai bước), 58 (bước 1 mã hóa vị trí, bước 2 ba lớp tuyến tính),
59 (bước 3 trọng số chú ý và softmax, bước 4 trích đặc trưng, ví dụ
"tennis"), 60 (sơ đồ một đầu chú ý, nhiều đầu, Transformer - Vaswani 2017),
61 (ba lĩnh vực ứng dụng kèm nguồn, và LLM), 55 (ba giới hạn của RNN dẫn tới
chú ý), 62 (tổng kết: tự chú ý mô hình hóa chuỗi mà không cần hồi tiếp).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 57 (the YouTube
search analogy, `Q`/`K`/`V`, the two steps), 58 (step 1 positional encoding,
step 2 the three linear layers), 59 (step 3 attention weighting and the
softmax, step 4 feature extraction, the "tennis" example), 60 (the
single-head diagram, multiple heads, the Transformer - Vaswani 2017), 61 (the
three application domains with references, and LLMs), 55 (the three RNN
limitations that lead to attention), 62 (the summary: self-attention modelling
sequences without recurrence).</span>

## Liên quan - <span class="en">Related</span>

- [[lstm-gated-cells]] - ba giới hạn mà chú ý sinh ra để giải.
  <br><span class="en">[[lstm-gated-cells]] - the three limitations attention
  exists to solve.</span>
- [[recurrent-neural-network]] - cơ chế bị thay thế.
  <br><span class="en">[[recurrent-neural-network]] - the mechanism being
  replaced.</span>
- [[word-embedding]] - `Q`, `K`, `V` đều tạo từ véc-tơ nhúng có cộng vị trí.
  <br><span class="en">[[word-embedding]] - `Q`, `K`, `V` are all built from
  the position-augmented embedding.</span>
- [[sequence-modeling-design-criteria]] - chú ý đáp ứng cả bốn tiêu chí mà
  không cần hồi tiếp.
  <br><span class="en">[[sequence-modeling-design-criteria]] - attention meets
  all four criteria without recurrence.</span>
- [[activation-functions]] - softmax là hàm biến điểm chú ý thành trọng số.
  <br><span class="en">[[activation-functions]] - the softmax turns attention
  scores into weights.</span>
- [[mini-batch-gradient-descent]] - tính song song hóa trên GPU là cùng một
  lợi thế mà chú ý khai thác.
  <br><span class="en">[[mini-batch-gradient-descent]] - GPU parallelism is the
  same advantage attention exploits.</span>
- [[distance-measures]] - tích vô hướng và độ tương tự cosin đã gặp ở Chapter
  4 dưới dạng thước đo khoảng cách.
  <br><span class="en">[[distance-measures]] - the dot product and cosine
  similarity were met in Chapter 4 as distance measures.</span>
