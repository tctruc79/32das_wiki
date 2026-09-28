---
type: concept
title: "Kiến trúc Transformer chỉ có bộ giải mã"
title_en: "The Decoder-Only Transformer Architecture"
tags: [chapter-6, k32, transformer, causal-mask, multi-head, mlp, residual, autoregressive]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

**Transformer** là **kiến trúc mạng nơ-ron mà nhiều mô hình ngôn ngữ lớn sử
dụng**; **các lớp của nó biến véc-tơ token thành biểu diễn có ngữ cảnh**, và
một mô hình kiểu **GPT** dùng các biểu diễn ấy để **dự đoán token kế tiếp**
(slide 43).
<br><span class="en">A **Transformer** is **a neural network architecture used
by many LLMs**; **its layers turn token vectors into contextual
representations**, and a **GPT-style** model uses those to **predict the next
token** (slide 43).</span>

Slide 43 nêu rõ phạm vi: giải thích của chương tập trung vào **Transformer tự
hồi quy, chỉ có bộ giải mã**; còn tồn tại các kiến trúc mô hình ngôn ngữ khác.
<br><span class="en">Slide 43 states the scope: this focuses on
**autoregressive, decoder-only Transformers**; other language-model
architectures also exist.</span>

## Diễn giải - <span class="en">Explanation</span>

### Sáu bước, đọc một lượt - <span class="en">Six steps, read in one pass</span>

| Bước | Slide | Nội dung |
|---|---|---|
| 1 | 44 | **Biến văn bản thành véc-tơ**: tách token → tra bảng nhúng đã học → đưa thêm thông tin vị trí |
| 2 | 45 | **Chú ý thu thập ngữ cảnh**: tạo `Q`, `K`, `V` tại mỗi vị trí → so truy vấn với các khóa được phép → softmax → kết hợp các giá trị |
| 3 | 49 | **MLP biến đổi từng vị trí** riêng lẻ |
| 4 | 50 | **Lặp qua nhiều lớp**, mỗi lớp tính `Q`, `K`, `V` mới |
| 5 | 51 | **Dự đoán token kế tiếp**: chiếu véc-tơ cuối thành điểm số cho mọi token → softmax |
| 6 | 53 | **Tiếp tục sinh**: nối token mới vào chuỗi rồi lặp lại |

Nhìn bảng này cạnh phần 1 của chương sẽ thấy: **bước 2 chính là toàn bộ
[[attention-pattern]] gói lại thành bốn dòng**. Phần 1 dựng nó từ trực giác,
phần 2 dùng nó như một khối đã biết.
<br><span class="en">Read beside part 1: **step 2 is the whole of
[[attention-pattern]] compressed into four lines**. Part 1 builds it from
intuition; part 2 uses it as a known block.</span>

### Mặt nạ nhân quả: khái niệm mới so với Chapter 5 - <span class="en">The causal mask: new relative to Chapter 5</span>

Slide 45 thêm một ràng buộc mà [[self-attention]] ở Chapter 5 không có: **mỗi
vị trí chỉ được chú ý tới chính nó và các vị trí trước đó**.
<br><span class="en">Slide 45 adds a constraint absent from Chapter 5's
[[self-attention]]: **a causal mask allows each position to attend only to
itself and earlier positions**.</span>

Đây là chi tiết biến một khối chú ý chung chung thành một mô hình **sinh văn
bản** được, và lý do rất đơn giản: nếu một vị trí nhìn thấy các vị trí phía
sau thì bài toán "dự đoán token kế tiếp" **trở nên vô nghĩa** - mô hình chỉ
việc chép đáp án đang nằm sẵn ở đó. Mặt nạ nhân quả là thứ giữ cho bài toán
huấn luyện vẫn là một bài toán thật.
<br><span class="en">This is what turns a generic attention block into a model
that can **generate**, and the reason is simple: if a position could see later
positions, next-token prediction **would be meaningless** - the model would
copy the answer sitting right there. The causal mask keeps the training task
honest.</span>

Nó cũng giải thích cụm "**các khóa được phép**" ở bước 2: không phải mọi khóa
đều tham gia, chỉ những khóa ở vị trí hiện tại trở về trước.
<br><span class="en">It also explains the phrase "**the allowed Keys**" in
step 2.</span>

### Bảng truy vấn - khóa - giá trị, và lời cảnh báo đi kèm - <span class="en">The Q-K-V table, and its warning</span>

| Ký hiệu | Câu hỏi nó trả lời | Công thức |
|---|---|---|
| **Truy vấn** | Vị trí này **đang tìm thông tin gì**? | `qᵢ = WQ xᵢ` |
| **Khóa** | **Đặc trưng nào** cho phép các vị trí khác khớp với nó? | `kᵢ = WK xᵢ` |
| **Giá trị** | Vị trí này **đóng góp thông tin gì**? | `vᵢ = WV xᵢ` |

Ghi chú của slide 46 quan trọng ngang chính cái bảng: **ba câu hỏi trên là
phép loại suy trực giác; `Q`, `K` và `V` là các véc-tơ số**. Trong một đầu,
**các vị trí dùng chung các ma trận chiếu đã học**, và **các phương trình đã
được đơn giản hóa**.
<br><span class="en">Slide 46's note matters as much as the table: **these
questions are intuitive analogies; `Q`, `K` and `V` are numerical vectors**.
Within a head, **positions share the learned projection matrices**, and the
**equations are simplified**.</span>

Đây là kiểu cẩn trọng nên học theo khi viết bài: nêu phép loại suy để người
đọc bám vào, rồi **nói rõ nó là phép loại suy** để người đọc không tưởng đó là
cơ chế thật.
<br><span class="en">This is a habit worth copying in writing: give the
analogy, then **say that it is one**.</span>

### Ví dụ trọng số, và câu quan trọng hơn cả các con số - <span class="en">The weight example, and the line that matters more</span>

Tại vị trí *creature*, một đầu gán: `A` 5%, `fluffy` 40%, `blue` 35%,
*creature* 20%, cho `z₄ = 0,05v₁ + 0,40v₂ + 0,35v₃ + 0,20v₄` (slide 47).
<br><span class="en">At *creature*, one head assigns those four weights
(slide 47).</span>

Hai ghi chú đi kèm đáng nhớ hơn chính các con số:
<br><span class="en">Two accompanying notes matter more than the
numbers:</span>

- **Chú ý kết hợp các véc-tơ GIÁ TRỊ, không phải kết hợp bản thân các từ.**
  Đây là câu chặn hiểu lầm phổ biến nhất về cơ chế chú ý.
  <br><span class="en">**Attention combines Value vectors, not the words
  themselves.**</span>
- Các trọng số ấy **chỉ để minh họa**; mẫu hình thật phụ thuộc **mô hình đã
  học, lớp, đầu và đầu vào**.
  <br><span class="en">The weights are **illustrative only**; real patterns
  depend on the learned model, layer, head and input.</span>

### Nhiều đầu và kết nối tắt - <span class="en">Multiple heads and residual updates</span>

Slide 48 gom ba việc:
<br><span class="en">Slide 48 packs three things:</span>

1. **Nhiều đầu có thể học những cách kết hợp thông tin khác nhau.**
   <br><span class="en">Multiple heads can learn different ways to combine
   information.</span>
2. Mô hình **nối các đầu ra lại và áp một phép chiếu đã học**.
   <br><span class="en">The model concatenates their outputs and applies a
   learned projection.</span>
3. Một **kết nối tắt cộng kết quả vào biểu diễn đang có**.
   <br><span class="en">A residual connection adds the result to the existing
   representation.</span>

Điểm 3 nối thẳng về slide 21: khối chú ý **cộng thêm** vào véc-tơ nhúng chứ
không thay thế nó. Kết nối tắt là cách hiện thực hóa đúng ý đó trong kiến
trúc.
<br><span class="en">Point 3 links straight back to slide 21: the block
**adds** to the embedding rather than replacing it.</span>

**Ghi chú chống kể chuyện quá gọn**: **con người không gán cho mỗi đầu một
nhiệm vụ ngữ nghĩa cố định**. Cách nói "đầu này lo ngữ pháp, đầu kia lo chủ
ngữ" nghe hấp dẫn nhưng không phải điều mô hình được thiết kế để làm. Slide
cũng lưu ý **chuẩn hóa cũng là một phần của lớp, vị trí đặt tùy kiến trúc**.
<br><span class="en">**A note against tidy storytelling**: **humans do not
assign a fixed semantic task to each head**. The slide also notes that
**normalization forms part of the layer, with placement depending on the
architecture**.</span>

### Chú ý và MLP: phân công lao động - <span class="en">Attention and MLP: a division of labour</span>

| Thành phần | Vai trò |
|---|---|
| **Chú ý** | **Thu thập và kết hợp** thông tin **giữa các vị trí** |
| **MLP** | **Biến đổi tiếp** véc-tơ **tại từng vị trí riêng lẻ** |

Cách phân công này là ý gọn nhất của cả phần 2: **chú ý là phép duy nhất di
chuyển thông tin ngang qua các vị trí; MLP không bao giờ làm việc đó**. MLP xử
lý mỗi vị trí tách biệt, dùng **trọng số chung cho mọi vị trí trong cùng
lớp**, và **đầu vào của nó đã chứa thông tin ngữ cảnh do chú ý thu thập**
(slide 49).
<br><span class="en">This division is part 2's tidiest idea: **attention is
the only operation that moves information across positions; the MLP never
does**. It processes each position separately with **weights shared across
positions within the layer**, and **its input already contains the context
attention gathered** (slide 49).</span>

MLP viết tắt của **mạng truyền thẳng nhiều lớp**, cũng gọi là mạng truyền
thẳng - tức đúng [[dense-layers-and-deep-networks]] đã học ở Chapter 5, đặt
vào một vị trí mới.
<br><span class="en">MLP stands for **multilayer perceptron**, also called a
feed-forward network - exactly
[[dense-layers-and-deep-networks]] from Chapter 5, in a new position.</span>

### Chiều sâu, và cảnh báo về cách diễn giải nó - <span class="en">Depth, and a warning about reading it</span>

Slide 50: mỗi lớp nhận biểu diễn từ lớp trước, **tính `Q`, `K`, `V` mới** rồi
áp chú ý, và MLP của nó biến đổi tiếp. **Các lớp thường có tham số riêng.**
<br><span class="en">Slide 50: each layer receives the previous layer's
representations, computes **new** `Q`, `K` and `V`, applies attention, and its
MLP transforms further. **Layers usually have separate parameters.**</span>

Rồi cảnh báo: **vai trò của các lớp là phân tán và chồng lấn, chứ không phải
một trình tự cố định kiểu "từ, rồi ngữ pháp, rồi nghĩa"**.
<br><span class="en">Then the warning: **their roles are distributed and
overlapping, rather than a fixed sequence such as words, then grammar, then
meaning**.</span>

Đáng đối chiếu với [[convolutional-neural-network]] ở Chapter 5, nơi hệ phân
tầng đặc trưng **có** thật và **được chứng minh** bằng hình các bộ lọc học
được (cạnh → mắt mũi tai → khuôn mặt). Ở Transformer, chương **từ chối** đưa
ra một hệ phân tầng gọn gàng tương tự. Đó là một khác biệt thật giữa hai kiến
trúc, không phải chương này viết sơ sài.
<br><span class="en">Worth contrasting with
[[convolutional-neural-network]] in Chapter 5, where the feature hierarchy
**is** real and **is demonstrated**. For Transformers the chapter **declines**
to offer a tidy equivalent. That is a genuine difference between the
architectures, not an omission.</span>

### Bước 5 và 6: từ biểu diễn tới văn bản - <span class="en">Steps 5 and 6: from representation to text</span>

**Dự đoán** (slide 51): lấy **véc-tơ lớp cuối tại vị trí cuối cùng**; **chiếu
nó thành một điểm số cho mọi token trong từ vựng**; **áp softmax**:
`logits = Wout·h_last + b`, `p = softmax(logits)`.
<br><span class="en">**Prediction** (slide 51), with that formula.</span>

**Sinh tiếp** (slide 53): **nối token mới vào chuỗi**; **dự đoán token kế tiếp
dùng cả đầu vào lẫn phần đã sinh**; **lặp tới khi gặp điều kiện dừng**, tức
`P(t_{k+1} | t₁, ..., t_k)`.
<br><span class="en">**Continuing** (slide 53), i.e. that conditional
probability.</span>

**Chi tiết cài đặt đáng biết**: có thể **lưu đệm các khóa và giá trị đã tính**
để khỏi tính lại ở mỗi bước sinh. Đây là lý do bước sinh thứ 500 không đắt gấp
500 lần bước đầu tiên.
<br><span class="en">**An implementation detail worth knowing**:
implementations can **cache earlier Keys and Values** to avoid recomputing
them at every generation step.</span>

### Huấn luyện, và bảng phân biệt quan trọng nhất - <span class="en">Training, and the key distinction</span>

Bốn bước huấn luyện (slide 54) không có gì mới so với Chapter 5: **dự đoán
token kế tiếp tại nhiều vị trí** → **so với token thật và tính mất mát** →
**lan truyền ngược** → **bộ tối ưu cập nhật tham số**. Tham số học được gồm
**bảng nhúng, các ma trận chiếu chú ý, trọng số MLP và phép chiếu đầu ra**.
<br><span class="en">The four training steps (slide 54) hold nothing new
relative to Chapter 5.</span>

Điểm đáng chú ý nằm ở chữ **nhiều vị trí**: một chuỗi huấn luyện cho **nhiều
bài toán dự đoán cùng lúc**, chứ không phải một. Slide 37 ở phần 1 cũng nói
đúng điều này bằng ví dụ khác.
<br><span class="en">The notable phrase is **multiple positions**: one
training sequence yields **many prediction problems at once**.</span>

**Bảng phân biệt học được so với tính ra** (slide 55) là thứ đáng nhớ nhất
của cả phần 2:
<br><span class="en">**The learned-versus-computed table** (slide 55) is part
2's most memorable item:</span>

| Học trong lúc huấn luyện | Tính cho đầu vào hiện tại |
|---|---|
| Bảng nhúng | Biểu diễn token |
| Các ma trận chiếu `Q`, `K`, `V` | Các véc-tơ truy vấn, khóa, giá trị |
| Trọng số MLP và trọng số đầu ra | Trọng số chú ý và các véc-tơ ẩn |
| | Xác suất token kế tiếp |

**Trong lúc suy luận thông thường, tham số mô hình đứng yên còn các giá trị
tính ra thay đổi theo ngữ cảnh.**
<br><span class="en">**During ordinary inference, model parameters stay fixed
while the computed values change with the context.**</span>

Đây là câu giải thích gọn nhất cho ba chuyện: vì sao mô hình **không học được
gì từ cuộc trò chuyện của bạn**, vì sao **bộ nhớ phải được dựng bên ngoài mô
hình** (xem [[chatgpt-application-layer]]), và vì sao **cùng một mô hình cho
câu trả lời khác nhau tùy ngữ cảnh** mà không cần huấn luyện lại.
<br><span class="en">This one line explains three things at once: why the
model **learns nothing from your conversation**, why **memory must be built
outside it**, and why **one model answers differently in different contexts**
without retraining.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter06-large-language-models]] - slide 43 (bốn định nghĩa, phạm vi chỉ
có bộ giải mã), 44 (bước 1), 45 (bước 2, mặt nạ nhân quả), 46 (bảng `Q`/`K`/
`V` và ghi chú phép loại suy), 47 (ví dụ trọng số, chú ý kết hợp véc-tơ giá
trị), 48 (nhiều đầu, kết nối tắt, cảnh báo về nhiệm vụ của đầu), 49 (bước 3,
phân công chú ý và MLP), 50 (bước 4, cảnh báo về vai trò các lớp), 51 (bước
5), 53 (bước 6, lưu đệm khóa và giá trị), 54 (huấn luyện), 55 (bảng học được
so với tính ra), 56 (tổng kết), 11-17 và 64 (cùng kiến trúc nhìn từ xa).
<br><span class="en">The slides above.</span>

## Liên quan - <span class="en">Related</span>

- [[attention-pattern]] - bước 2, dựng đầy đủ từ trực giác.
  <br><span class="en">step 2, built in full from intuition.</span>
- [[self-attention]] - cùng khối, cách trình bày của Chapter 5.
  <br><span class="en">the same block as presented in Chapter 5.</span>
- [[dense-layers-and-deep-networks]] - MLP chính là lớp kết nối đầy đủ.
  <br><span class="en">the MLP is the dense layer.</span>
- [[backpropagation]] - bước huấn luyện thứ ba.
  <br><span class="en">the third training step.</span>
- [[learning-rate-and-optimizers]] - "bộ tối ưu" ở bước thứ tư.
  <br><span class="en">the optimizer in the fourth step.</span>
- [[tokenization-and-generation]] - bước 1, 5 và 6 nhìn từ phía token.
  <br><span class="en">steps 1, 5 and 6 seen from the token side.</span>
- [[convolutional-neural-network]] - đối chiếu về hệ phân tầng đặc trưng.
  <br><span class="en">a contrast on feature hierarchies.</span>
- [[large-language-model]] - vì sao kiến trúc này thắng.
  <br><span class="en">why this architecture won.</span>

## Lưu ý - <span class="en">Caveats</span>

**Chương vẫn không vẽ khối Transformer hoàn chỉnh.** Chapter 5 dừng ở một đầu
chú ý và nói rõ là dừng. Chapter 6 đi xa hơn - thêm mặt nạ nhân quả, MLP, kết
nối tắt, nhiều lớp, lớp đầu ra - nhưng **vẫn không có sơ đồ khối đầy đủ, không
có chi tiết chuẩn hóa theo lớp, và không có cấu trúc bộ mã hóa - bộ giải mã**
(slide 48 chỉ nhắc chuẩn hóa trong một ghi chú). Ai cần kiến trúc đầy đủ vẫn
phải tìm nguồn khác.
<br><span class="en">**The chapter still does not draw a complete Transformer
block.** It goes further than Chapter 5 but **has no full block diagram, no
layer-normalization detail and no encoder-decoder structure**.</span>

**"Bộ giải mã" ở đây không hàm ý có một bộ mã hóa.** Tên gọi *decoder-only* là
di sản lịch sử từ kiến trúc gốc 2017 vốn có hai nửa; mô hình kiểu GPT chỉ giữ
lại một nửa. Chương không giải thích tên gọi này, nên dễ hiểu nhầm là còn
thiếu một phần.
<br><span class="en">**"Decoder-only" does not imply a missing encoder.** The
name is a historical legacy of the 2017 architecture's two halves; GPT-style
models keep one. The chapter does not explain the name.</span>
