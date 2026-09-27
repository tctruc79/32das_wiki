---
type: concept
title: "Mạng nơ-ron hồi tiếp (RNN)"
title_en: "Recurrent Neural Networks (RNNs)"
tags: [chapter-5, k32, deep-learning, rnn, sequence-modeling, hidden-state]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Mạng nơ-ron hồi tiếp áp một **quan hệ hồi tiếp** tại mọi bước thời gian để
xử lý một chuỗi:
<br><span class="en">A recurrent neural network applies a **recurrence
relation** at every time step to process a sequence:</span>

```
ht = fW( xt , ht-1 )
|     |    |     |
|     |    |     +-- trạng thái cũ / old state
|     |    +-------- đầu vào tại bước t / input at step t
|     +------------- hàm có trọng số W / function with weights W
+------------------- trạng thái ô / cell state
```

Hai tính chất định nghĩa: RNN **có một trạng thái `ht` được cập nhật tại
từng bước** khi chuỗi được xử lý; và **cùng một hàm, cùng một bộ tham số
`W` được dùng ở mọi bước thời gian**.
<br><span class="en">Two defining properties: an RNN **has a state `ht`
updated at each step** as the sequence is processed; and **the same function
and the same parameters `W` are used at every step**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Vấn đề mà RNN sinh ra để giải - <span class="en">The problem RNNs exist to solve</span>

Slide 37 đặt hai cách làm cạnh nhau. Cách thứ nhất: lấy mạng truyền thẳng
`x ∈ R^m -> mạng -> ŷ ∈ R^n` rồi áp dụng **độc lập tại từng bước thời
gian**, tức `ŷt = f(xt)`. Vấn đề được nêu thẳng: `ŷ2` khi đó **chỉ phụ
thuộc vào `x2`**; thông tin trong `x0` và `x1` bị vứt bỏ, và mô hình
**không có khái niệm về thứ tự hay trí nhớ**. Cách thứ hai sửa đúng chỗ đó:
`ŷt = f(xt, ht-1)` - mỗi bước còn nhận thêm `ht-1`, **trí nhớ của quá khứ
truyền lại từ bước trước**. Gập lại, đó là một ô có vòng lặp: **một ô hồi
tiếp**.
<br><span class="en">Slide 37 places two approaches side by side. The first:
take a feed-forward net `x ∈ R^m -> network -> ŷ ∈ R^n` and apply it
**independently at every time step**, i.e. `ŷt = f(xt)`. The problem is
stated bluntly: `ŷ2` then **depends only on `x2`**; the information in `x0`
and `x1` is thrown away and the model has **no notion of order or memory**.
The second fixes exactly that: `ŷt = f(xt, ht-1)` - each step additionally
receives `ht-1`, **the past memory passed on from the previous step**.
Folded up, that is a cell with a loop: **a recurrent cell**.</span>

### Ba ma trận trọng số, viết đầy đủ - <span class="en">Three weight matrices, written out</span>

Slide 40 cho hai phương trình của một ô RNN:
<br><span class="en">Slide 40 gives the two equations of an RNN
cell:</span>

```
ht  = tanh( Whh' · ht-1  +  Wxh' · xt )     # cập nhật trạng thái ẩn
ŷt  = Why' · ht                              # véc-tơ đầu ra
```

| Ma trận | Vai trò |
|---|---|
| `Wxh` | Đầu vào → ẩn |
| `Whh` | Ẩn → ẩn (đây là chỗ trí nhớ được mang qua) |
| `Why` | Ẩn → đầu ra |

Hai chi tiết đáng nhớ. Thứ nhất, **`tanh` được chọn có lý do**: nó giữ
trạng thái trong khoảng bị chặn `(-1, 1)`, tránh để giá trị trạng thái phình
to qua các bước thời gian. Thứ hai, **`Whh` là ma trận gây ra mọi rắc rối
về sau**: tính gradient theo trạng thái ban đầu đòi hỏi nhân rất nhiều bản
sao của chính `Whh` với nhau, và đó là gốc rễ của gradient bùng nổ và
gradient tiêu biến - xem [[backpropagation-through-time]].
<br><span class="en">Two details worth remembering. First, **`tanh` is
chosen for a reason**: it keeps the state bounded in `(-1, 1)`, preventing
state values from blowing up across time steps. Second, **`Whh` is the
matrix that causes all the later trouble**: computing the gradient with
respect to the initial state requires multiplying many copies of `Whh`
together, and that is the root of exploding and vanishing gradients - see
[[backpropagation-through-time]].</span>

### Trực giác bằng mã giả - <span class="en">The intuition in pseudocode</span>

Slide 39 viết ra bốn bước bằng Python thuần, và đây là cách nhanh nhất để
nhớ cơ chế:
<br><span class="en">Slide 39 writes the four steps out in plain Python, and
this is the fastest way to remember the mechanism:</span>

```python
my_rnn = RNN()
hidden_state = [0, 0, 0, 0]

sentence = ["I", "love", "recurrent", "neural"]

for word in sentence:
    prediction, hidden_state = my_rnn(word, hidden_state)

next_word_prediction = prediction
# >>> "networks!"
```

Bốn bước: (1) khởi tạo trạng thái ẩn bằng các số 0; (2) duyệt chuỗi, mỗi
bước ô nhận từ hiện tại **và** trạng thái ẩn của bước trước; (3) ô trả về
một đầu ra **và** một trạng thái ẩn đã cập nhật, rồi trạng thái đó được đưa
ngược vào vòng lặp; (4) dự đoán cuối cùng là từ kế tiếp. Điều đáng chú ý:
biến `hidden_state` bị **ghi đè** ở mỗi vòng lặp - toàn bộ quá khứ của chuỗi
chỉ tồn tại trong đúng một véc-tơ đó, và đó chính là **nút cổ chai mã hóa**
mà slide 55 nêu làm giới hạn thứ nhất của RNN.
<br><span class="en">Four steps: (1) initialise the hidden state to zeros;
(2) loop over the sequence, each step the cell taking the current word **and**
the previous hidden state; (3) it returns an output **and** an updated hidden
state, which is fed back into the loop; (4) the final prediction is the next
word. Worth noticing: the `hidden_state` variable is **overwritten** each
iteration - the sequence's entire past exists in that one vector alone, and
that is exactly the **encoding bottleneck** slide 55 names as the RNN's first
limitation.</span>

### Đồ thị trải theo thời gian - <span class="en">The graph unrolled across time</span>

Slide 41 vẽ RNN ở dạng **trải ra**: tại mỗi bước `t` có đầu vào `xt`, đầu ra
`ŷt` và một mất mát `Lt`; **tổng mất mát `L` là tổng của các `Lt`**. Điểm cần
thấy: ba ma trận `Wxh`, `Whh`, `Why` **được dùng lại y nguyên ở mọi bước**.
Cách vẽ này quan trọng vì nó biến một vòng lặp thành một mạng sâu thông
thường - và nhờ đó [[backpropagation]] áp được vào mà không cần thuật toán
mới, chỉ cần hiểu rằng "lớp" ở đây là bước thời gian.
<br><span class="en">Slide 41 draws the RNN **unrolled**: at each step `t`
there is an input `xt`, an output `ŷt` and a loss `Lt`; **the total loss `L`
is the sum of the `Lt`**. The thing to see: the three matrices `Wxh`, `Whh`,
`Why` are **re-used unchanged at every step**. This drawing matters because
it turns a loop into an ordinary deep network - which is how
[[backpropagation]] applies with no new algorithm, only the understanding
that a "layer" here is a time step.</span>

### Tự viết, và viết bằng một dòng - <span class="en">From scratch, and in one line</span>

Slide 42 đặt cạnh nhau một lớp `MyRNNCell` viết tay (khởi tạo ba ma trận
`W_xh`, `W_hh`, `W_hy` cùng trạng thái `h` bằng 0; phương thức `call` cập
nhật `h` bằng đúng phương trình `tanh` rồi tính đầu ra) và hai dòng gọi thư
viện. Slide chốt rằng phương thức `call` **chính xác là hai phương trình ở
slide 40** - nghĩa là không có gì bị giấu trong thư viện.
<br><span class="en">Slide 42 places a hand-written `MyRNNCell` class
(initialising the three matrices `W_xh`, `W_hh`, `W_hy` and a zero state `h`;
its `call` method updating `h` with exactly the `tanh` equation then
computing the output) next to two library calls. The slide's closing note:
the `call` method is **exactly the two equations from slide 40** - meaning
nothing is hidden inside the library.</span>

```python
from tf.keras.layers import SimpleRNN
model = SimpleRNN(rnn_units)

from torch.nn import RNN
model = RNN(input_size, rnn_units)
```

### Hai ví dụ ứng dụng - <span class="en">Two example applications</span>

Slide 54 cho hai bài toán thuộc hai dạng khác nhau. **Sinh nhạc** (nhiều tới
nhiều): đầu vào là bản nhạc, đầu ra là ký tự kế tiếp; `E → F#`, `F# → G`,
`G → C`, `C → A`, và mỗi dự đoán được **đưa ngược lại làm đầu vào kế tiếp**
nên mạng soạn nhạc từng nốt một. **Phân loại cảm xúc** (nhiều tới một): đầu
vào là một chuỗi từ, đầu ra là xác suất cảm xúc tích cực; *"I love this
class!"* → `<positive>`.
<br><span class="en">Slide 54 gives two problems of different shapes. **Music
generation** (many to many): input is sheet music, output the next character;
`E → F#`, `F# → G`, `G → C`, `C → A`, and each prediction is **fed back as
the next input** so the network composes note by note. **Sentiment
classification** (many to one): input a sequence of words, output the
probability of positive sentiment; *"I love this class!"* →
`<positive>`.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 38 (định nghĩa `ht = fW(xt, ht-1)`
kèm chú giải từng thành phần, hai tính chất), 37 (vấn đề của mạng truyền
thẳng theo từng bước), 39 (mã giả bốn bước), 40 (hai phương trình, ba ma
trận, lý do chọn `tanh`), 41 (đồ thị trải theo thời gian, `L` là tổng các
`Lt`), 42 (`MyRNNCell` và `SimpleRNN`/`RNN`), 54 (sinh nhạc và phân loại cảm
xúc), 55 (ba giới hạn), 62 (tổng kết bài A2).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 38 (the
definition `ht = fW(xt, ht-1)` with each component annotated, the two
properties), 37 (the problem with a per-step feed-forward net), 39 (the
four-step pseudocode), 40 (the two equations, three matrices, the reason for
`tanh`), 41 (the unrolled graph, `L` as the sum of the `Lt`), 42
(`MyRNNCell` and `SimpleRNN`/`RNN`), 54 (music generation and sentiment
classification), 55 (the three limitations), 62 (the A2
summary).</span>

## Liên quan - <span class="en">Related</span>

- [[sequence-modeling-design-criteria]] - bốn tiêu chí mà RNN được thiết kế
  để đáp ứng.
  <br><span class="en">[[sequence-modeling-design-criteria]] - the four
  criteria RNNs are designed to meet.</span>
- [[word-embedding]] - `xt` phải là véc-tơ số trước khi vào ô RNN.
  <br><span class="en">[[word-embedding]] - `xt` must be a numeric vector
  before entering the cell.</span>
- [[backpropagation-through-time]] - cách huấn luyện, và hai chế độ hỏng do
  nhân nhiều `Whh`.
  <br><span class="en">[[backpropagation-through-time]] - how it is trained,
  and the two failure modes from multiplying many `Whh`.</span>
- [[lstm-gated-cells]] - bản nâng cấp của ô RNN để giữ được trí nhớ dài.
  <br><span class="en">[[lstm-gated-cells]] - the upgraded cell that retains
  long memory.</span>
- [[self-attention]] - phương án thay thế bỏ hẳn hồi tiếp.
  <br><span class="en">[[self-attention]] - the alternative that abandons
  recurrence entirely.</span>
- [[perceptron]] - `tanh(Whh' ht-1 + Wxh' xt)` vẫn là tổng có trọng số qua
  một hàm phi tuyến.
  <br><span class="en">[[perceptron]] - `tanh(Whh' ht-1 + Wxh' xt)` is still
  a weighted sum through a non-linearity.</span>
