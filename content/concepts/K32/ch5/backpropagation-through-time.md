---
type: concept
title: "Lan truyền ngược theo thời gian, gradient bùng nổ và gradient tiêu biến"
title_en: "Backpropagation Through Time, Exploding and Vanishing Gradients"
tags: [chapter-5, k32, deep-learning, bptt, vanishing-gradient, rnn]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Lan truyền ngược theo thời gian (BPTT) là cách huấn luyện mạng hồi tiếp:
**sai số được lan truyền ngược tại từng bước thời gian riêng lẻ, rồi lan
tiếp qua tất cả các bước thời gian**, từ cuối chuỗi ngược về đầu chuỗi
(slide 49, dẫn Mozer, *Complex Systems* 1989). Điểm mở rộng so với lan
truyền ngược thường được slide 48 nêu gọn: **ở RNN, "lớp" chính là các bước
thời gian**.
<br><span class="en">Backpropagation through time (BPTT) is how recurrent
networks are trained: **errors are backpropagated at each individual time
step and then across all time steps**, from the end of the sequence back to
the beginning (slide 49, citing Mozer, *Complex Systems* 1989). The
extension over ordinary backpropagation is put concisely on slide 48: **in
an RNN the "layers" are time steps**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Hai lượt đi trên đồ thị trải ra - <span class="en">Two passes over the unrolled graph</span>

Slide 49 vẽ đồ thị trải ra với hai chiều mũi tên: **lượt tiến** từ `x0` tới
`xt` tính các trạng thái, các đầu ra `ŷt` và các mất mát `Lt`; **lượt lùi**
đi ngược lại để lấy gradient. Vì tổng mất mát `L` là tổng của các `Lt`
(slide 41), gradient của mỗi trọng số là tổng các đóng góp từ mọi bước thời
gian - đó là nghĩa của cụm "rồi lan tiếp qua tất cả các bước thời gian".
<br><span class="en">Slide 49 draws the unrolled graph with arrows both ways:
a **forward pass** from `x0` to `xt` computing the states, the outputs `ŷt`
and the losses `Lt`; a **backward pass** in reverse to obtain the gradients.
Because the total loss `L` is the sum of the `Lt` (slide 41), each weight's
gradient is the sum of contributions from every time step - which is what "and
then across all time steps" means.</span>

### Gốc rễ của vấn đề: nhân `Whh` rất nhiều lần - <span class="en">The root cause: multiplying `Whh` many times</span>

Slide 50 nêu đúng một câu giải thích mọi thứ: tính gradient theo `h0` đòi
hỏi **nhân rất nhiều thừa số `Whh`** với nhau, cùng với việc lặp lại phép
tính gradient. Đây là hệ quả trực tiếp của tính chất "dùng chung tham số" -
chính vì `Whh` được dùng lại ở mọi bước nên chuỗi đạo hàm chứa nó nhiều lần.
Chuỗi dài bằng độ dài chuỗi dữ liệu, nên với một câu 50 từ thì có khoảng 50
thừa số nhân với nhau.
<br><span class="en">Slide 50 gives one sentence that explains everything:
computing the gradient with respect to `h0` involves **multiplying many
factors of `Whh`** together, along with repeated gradient computation. This
is a direct consequence of parameter sharing - precisely because `Whh` is
re-used at every step, the derivative chain contains it many times. The chain
is as long as the data sequence, so a 50-word sentence gives roughly 50
factors multiplied together.</span>

Từ đó sinh ra hai chế độ hỏng đối xứng nhau:
<br><span class="en">That produces two symmetric failure modes:</span>

| Chế độ hỏng | Nguyên nhân | Cách chữa |
|---|---|---|
| **Gradient bùng nổ** | Nhiều giá trị **lớn hơn 1** | **Cắt ngưỡng gradient** để co các gradient quá lớn |
| **Gradient tiêu biến** | Nhiều giá trị **nhỏ hơn 1** | (1) đổi **hàm kích hoạt**; (2) đổi cách **khởi tạo trọng số**; (3) đổi **kiến trúc mạng**, dùng ô có cổng |

Số học đằng sau rất đơn giản và đáng tự kiểm tra: `1.5^50` xấp xỉ 6 tỉ,
còn `0.5^50` xấp xỉ `10^-15`. Không có vùng an toàn ở giữa - chỉ cần các
thừa số lệch khỏi 1 một chút là sau vài chục bước kết quả đã nổ hoặc biến
mất.
<br><span class="en">The arithmetic behind it is simple and worth checking
yourself: `1.5^50` is about 6 billion, while `0.5^50` is about `10^-15`.
There is no safe band in between - factors need deviate only slightly from 1
for the result to explode or disappear after a few dozen steps.</span>

Ba cách chữa cho gradient tiêu biến ở cột phải không phải ba lựa chọn tùy
ý mà là ba mức can thiệp khác nhau: đổi hàm kích hoạt là can thiệp nhẹ nhất
(ReLU có đạo hàm bằng 1 trên miền dương, xem [[activation-functions]]); đổi
khởi tạo trọng số tác động vào điểm bắt đầu; và đổi kiến trúc sang ô có cổng
là can thiệp mạnh nhất, dẫn thẳng tới [[lstm-gated-cells]].
<br><span class="en">The three remedies for vanishing gradients in the right
column are not arbitrary alternatives but three levels of intervention:
changing the activation is the lightest (ReLU's derivative is 1 on the
positive domain, see [[activation-functions]]); changing weight
initialisation acts on the starting point; and changing the architecture to a
gated cell is the strongest, leading directly to
[[lstm-gated-cells]].</span>

### Vì sao gradient tiêu biến là vấn đề, không chỉ là bất tiện - <span class="en">Why vanishing gradients matter, rather than merely annoy</span>

Slide 51 giải thích bằng một chuỗi hệ quả ba bước: nhân nhiều số nhỏ với
nhau → sai số từ các bước thời gian xa hơn có gradient ngày càng nhỏ →
**tham số bị thiên lệch về phía chỉ nắm bắt phụ thuộc ngắn hạn**.
<br><span class="en">Slide 51 explains with a three-step chain: multiply many
small numbers together → errors from further-back time steps carry smaller
and smaller gradients → **the parameters get biased towards capturing only
short-term dependencies**.</span>

Bước thứ ba là bước quan trọng. Mạng không chỉ **học chậm** các phụ thuộc
xa; nó **học lệch**, vì các trọng số chỉ nhận tín hiệu hữu ích từ những bước
gần. Kết quả là một mô hình trông như hoạt động tốt (mất mát giảm) nhưng
thực chất chỉ giỏi các quan hệ ngắn.
<br><span class="en">The third step is the important one. The network does
not merely **learn distant dependencies slowly**; it **learns a skewed
model**, because the weights receive useful signal only from nearby steps.
The result is a model that appears to work (the loss falls) but is in truth
only good at short-range relations.</span>

Slide minh họa bằng hai câu tương phản, và cặp ví dụ này đáng nhớ nguyên
văn. **Khoảng cách ngắn**: *"The clouds are in the ___"* - các từ liên quan
`x0`, `x1` nằm ngay cạnh dự đoán `ŷ3`, nên dễ. **Khoảng cách dài**: *"I grew
up in France, ... and I speak fluent ___"* - manh mối nằm cách rất nhiều
bước, và **tín hiệu gradient của nó gần như đã tiêu biến hết** trước khi lan
ngược tới nơi. Câu thứ hai chính là ví dụ của tiêu chí 2 ở
[[sequence-modeling-design-criteria]]: RNN **được thiết kế** để theo dõi
phụ thuộc dài hạn nhưng **trong thực tế thường không làm được**, và đó là
mâu thuẫn mà LSTM sinh ra để giải.
<br><span class="en">The slide illustrates with two contrasting sentences,
and the pair is worth remembering verbatim. **Short gap**: *"The clouds are
in the ___"* - the relevant words `x0`, `x1` sit right beside the prediction
`ŷ3`, so it is easy. **Long gap**: *"I grew up in France, ... and I speak
fluent ___"* - the clue is many steps back and **its gradient signal has all
but vanished** by the time it reaches there. That second sentence is exactly
criterion 2's example in [[sequence-modeling-design-criteria]]: RNNs are
**designed** to track long-term dependencies but **in practice often fail
to**, and that tension is what LSTMs exist to resolve.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 49 (BPTT, hai lượt đi, dẫn Mozer
1989), 48 (nhắc lại lan truyền ngược và điểm mở rộng "lớp là bước thời
gian"), 50 (nhân nhiều `Whh`, bảng hai chế độ hỏng, cắt ngưỡng gradient, ba
cách chữa), 51 (chuỗi hệ quả ba bước, hai câu ví dụ khoảng cách ngắn và
dài), 41 (`L` là tổng các `Lt` - lý do gradient cộng dồn qua các bước), 55
(không có trí nhớ dài là giới hạn thứ ba của RNN), 62 (tổng kết: huấn luyện
bằng BPTT, chú ý hai chế độ hỏng).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 49 (BPTT, the
two passes, citing Mozer 1989), 48 (recalling backpropagation and the "layers
are time steps" extension), 50 (multiplying many `Whh`, the two-failure-mode
table, gradient clipping, the three remedies), 51 (the three-step consequence
chain, the short-gap and long-gap example sentences), 41 (`L` as the sum of
the `Lt` - why gradients accumulate across steps), 55 (no long memory as the
RNN's third limitation), 62 (the summary: train with BPTT, watch for the two
failure modes).</span>

## Liên quan - <span class="en">Related</span>

- [[recurrent-neural-network]] - `Whh` là ma trận bị nhân lại nhiều lần.
  <br><span class="en">[[recurrent-neural-network]] - `Whh` is the matrix
  multiplied repeatedly.</span>
- [[backpropagation]] - thuật toán nền; BPTT chỉ là nó áp trên đồ thị trải
  theo thời gian.
  <br><span class="en">[[backpropagation]] - the base algorithm; BPTT is it
  applied to a time-unrolled graph.</span>
- [[lstm-gated-cells]] - cách chữa thứ ba và mạnh nhất: đổi kiến trúc.
  <br><span class="en">[[lstm-gated-cells]] - the third and strongest remedy:
  change the architecture.</span>
- [[activation-functions]] - cách chữa thứ nhất; đạo hàm của ReLU bằng 1 trên
  miền dương.
  <br><span class="en">[[activation-functions]] - the first remedy; ReLU's
  derivative is 1 on the positive domain.</span>
- [[sequence-modeling-design-criteria]] - tiêu chí 2 là tiêu chí mà vấn đề
  này phá vỡ.
  <br><span class="en">[[sequence-modeling-design-criteria]] - criterion 2 is
  the one this problem breaks.</span>
- [[self-attention]] - bỏ hẳn hồi tiếp thì cũng bỏ hẳn chuỗi thừa số dài.
  <br><span class="en">[[self-attention]] - abandoning recurrence abandons the
  long factor chain too.</span>
