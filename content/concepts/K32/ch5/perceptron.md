---
type: concept
title: "Perceptron - viên gạch nền của mạng nơ-ron"
title_en: "The Perceptron - the Building Block of Neural Networks"
tags: [chapter-5, k32, deep-learning, perceptron, neural-networks]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Perceptron là đơn vị tính toán nhỏ nhất của mọi mạng nơ-ron: nó nhận các
đầu vào, **nhân mỗi đầu vào với một trọng số học được**, cộng tất cả lại
cùng một **trọng số chệch**, rồi đưa tổng ấy qua một **hàm kích hoạt phi
tuyến**:
<br><span class="en">A perceptron is the smallest computational unit of
any neural network: it takes inputs, **multiplies each by a learnable
weight**, adds them together along with a **bias weight**, and passes the
sum through a **non-linear activation function**:</span>

```
ŷ = g( w0 + sum_{i=1..m} xi wi )  =  g( w0 + X' W )
```

với `X = [x1 ... xm]'` và `W = [w1 ... wm]'`. Phần trong ngoặc chỉ là một
**tích vô hướng cộng một hằng số**. Mọi kiến trúc trong chương - mạng kết
nối đầy đủ, mạng hồi tiếp, mạng tích chập - đều là phép này lặp lại theo
những cách sắp xếp khác nhau.
<br><span class="en">with `X = [x1 ... xm]'` and `W = [w1 ... wm]'`. What
is inside the brackets is just **a dot product plus a constant**. Every
architecture in the chapter - dense, recurrent and convolutional networks
alike - is this operation repeated in different arrangements.</span>

## Diễn giải - <span class="en">Explanation</span>

### Bốn thành phần và vai trò của từng thành phần - <span class="en">Four components and what each does</span>

**Đầu vào** `x1, ..., xm` là dữ liệu thô hoặc là đầu ra của tầng phía
trước. **Trọng số** `w1, ..., wm` là thứ duy nhất mà huấn luyện thay đổi;
chúng quyết định đầu vào nào quan trọng và quan trọng theo chiều nào.
**Trọng số chệch** `w0` là trọng số gắn với một đầu vào hằng số bằng 1;
nó **dịch chuyển điểm kích hoạt**, cho phép nơ-ron bật ở một ngưỡng khác
0. **Hàm kích hoạt** `g` bẻ cong quan hệ, và nếu thiếu nó thì mọi chiều
sâu đều vô nghĩa - xem [[activation-functions]].
<br><span class="en">**Inputs** `x1, ..., xm` are raw data or the
previous layer's outputs. **Weights** `w1, ..., wm` are the only thing
training changes; they decide which inputs matter and in which direction.
The **bias weight** `w0` is the weight on a constant input of 1; it
**shifts the activation point**, letting the neuron fire at a threshold
other than zero. The **activation** `g` bends the relationship, and
without it depth is meaningless - see
[[activation-functions]].</span>

### Vì sao một perceptron chỉ vẽ được một đường thẳng - <span class="en">Why one perceptron draws only a line</span>

Slide 10 dựng một ví dụ nên nhớ nguyên văn. Cho `w0 = 1` và `W = [3,
-2]'`, tức `ŷ = g(1 + 3x1 - 2x2)`. Biểu thức trong ngoặc là **phương
trình một đường thẳng trong mặt phẳng hai chiều**: `1 + 3x1 - 2x2 = 0`.
Với đầu vào `X = [-1, 2]'` ta có `1 + 3(-1) - 2(2) = -6`, và
`g(-6) ≈ 0.002`.
<br><span class="en">Slide 10 builds an example worth remembering
verbatim. Take `w0 = 1` and `W = [3, -2]'`, i.e. `ŷ = g(1 + 3x1 - 2x2)`.
The bracketed expression is **the equation of a line in the plane**:
`1 + 3x1 - 2x2 = 0`. For the input `X = [-1, 2]'` we get
`1 + 3(-1) - 2(2) = -6`, and `g(-6) ≈ 0.002`.</span>

Cách đọc kết quả ấy quan trọng hơn bản thân con số: đường thẳng chia mặt
phẳng thành hai nửa; hàm sigmoid ánh xạ **khoảng cách có dấu từ điểm tới
đường thẳng** thành một điểm số trong khoảng `(0, 1)`. Phía `z > 0` cho
`ŷ > 0.5`, phía `z < 0` cho `ŷ < 0.5`, và điểm càng xa đường thẳng thì
điểm số càng tiến về 0 hoặc 1. Một perceptron đơn lẻ, do đó, **là một bộ
phân loại tuyến tính** - không hơn. Muốn có biên cong thì phải xếp nhiều
perceptron lại, xem [[dense-layers-and-deep-networks]].
<br><span class="en">How to read that matters more than the number
itself: the line splits the plane in two; the sigmoid maps the **signed
distance from the point to the line** into a score in `(0, 1)`. The
`z > 0` side gives `ŷ > 0.5`, the `z < 0` side gives `ŷ < 0.5`, and the
further a point lies from the line the closer the score gets to 0 or 1. A
single perceptron is therefore **a linear classifier** - nothing more. A
curved boundary requires stacking perceptrons, see
[[dense-layers-and-deep-networks]].</span>

### Cùng một perceptron ở cả ba kiến trúc - <span class="en">The same perceptron in all three architectures</span>

Điều đáng nhớ nhất về perceptron không nằm ở bài giảng đầu mà ở bài giảng
cuối. Slide 81 viết công thức của một nơ-ron trong lớp tích chập -
`sum_i sum_j w_ij · x_{i+p, j+q} + b` - rồi nói thẳng rằng đây **chính
xác là perceptron của bài giảng 1**, chỉ khác hai chỗ: nó bị giới hạn vào
một mảng ảnh cục bộ thay vì toàn bộ đầu vào, và trọng số của nó **được
dùng chung cho mọi vị trí** thay vì mỗi vị trí một bộ riêng. Mạng hồi
tiếp cũng vậy: `ht = tanh(Whh' ht-1 + Wxh' xt)` vẫn là tổng có trọng số
đi qua một hàm phi tuyến, chỉ khác là có thêm một đầu vào đến từ bước
thời gian trước.
<br><span class="en">The most memorable thing about the perceptron comes
not in the first lecture but the last. Slide 81 writes the formula for a
neuron in a convolutional layer -
`sum_i sum_j w_ij · x_{i+p, j+q} + b` - and then states outright that this
is **exactly the perceptron from Lecture 1**, differing in two respects
only: it is restricted to a local image patch rather than the whole
input, and its weights are **shared across every position** instead of
each position having its own. The recurrent cell is the same story:
`ht = tanh(Whh' ht-1 + Wxh' xt)` is still a weighted sum through a
non-linearity, merely with an extra input arriving from the previous time
step.</span>

### Perceptron chưa huấn luyện thì vô dụng - <span class="en">An untrained perceptron is useless</span>

Slide 16 dựng một ví dụ để nhấn đúng điểm này: một mạng ba đơn vị ẩn dự
đoán sinh viên `x = [4, 5]` gần như chắc chắn trượt môn (`0.1`), trong
khi thực tế sinh viên ấy qua (`1`). Lý do không phải kiến trúc sai mà là
**trọng số còn ngẫu nhiên và mạng chưa từng thấy dữ liệu nào**. Cấu trúc
chỉ cho mạng khả năng biểu diễn; giá trị trọng số mới cho nó kiến thức, và
giá trị ấy đến từ [[gradient-descent]] cùng [[backpropagation]].
<br><span class="en">Slide 16 builds an example to drive exactly this
home: a network with three hidden units predicts that student `x = [4,
5]` will almost certainly fail (`0.1`) when in fact they passed (`1`).
The reason is not a wrong architecture but that **the weights are still
random and the network has never seen any data**. Structure gives a
network its representational capacity; only the weight values give it
knowledge, and those come from [[gradient-descent]] and
[[backpropagation]].</span>

### Perceptron trong Python - <span class="en">The perceptron in Python</span>

Không có API nào cho một perceptron đơn lẻ, vì trong thực hành không ai
dùng một cái. Đơn vị nhỏ nhất mà thư viện cung cấp là **cả một lớp** gồm
nhiều perceptron song song:
<br><span class="en">There is no API for a single perceptron, because in
practice nobody uses one. The smallest unit the libraries expose is **a
whole layer** of parallel perceptrons:</span>

```python
layer = tf.keras.layers.Dense(units=2)                  # TensorFlow
layer = nn.Linear(in_features=m, out_features=2)        # PyTorch
```

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 7 (lan truyền tiến, công thức và
ký hiệu tích vô hướng), 10 (ví dụ tính tay với `w0 = 1`, `W = [3, -2]'`),
12 (perceptron nhiều đầu ra), 16 (perceptron chưa huấn luyện dự đoán
sai), 30 (tổng kết: một perceptron vẽ một đường thẳng), 40 (cùng dạng
trong ô hồi tiếp), 81 (nơ-ron tích chập "chính xác là perceptron của bài
giảng 1").
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 7 (forward
propagation, the formula and dot-product notation), 10 (the worked
example with `w0 = 1`, `W = [3, -2]'`), 12 (the multi-output perceptron),
16 (an untrained perceptron predicting wrongly), 30 (the summary: one
perceptron draws a line), 40 (the same form inside a recurrent cell), 81
(the convolutional neuron being "exactly the perceptron from Lecture
1").</span>

## Liên quan - <span class="en">Related</span>

- [[activation-functions]] - thành phần `g`, và lý do nó bắt buộc phi
  tuyến.
  <br><span class="en">[[activation-functions]] - the `g` component, and
  why it must be non-linear.</span>
- [[dense-layers-and-deep-networks]] - xếp nhiều perceptron thành lớp,
  xếp nhiều lớp thành mạng sâu.
  <br><span class="en">[[dense-layers-and-deep-networks]] - stacking
  perceptrons into layers and layers into deep networks.</span>
- [[gradient-descent]] - cách các trọng số `w0, ..., wm` có được giá trị
  của chúng.
  <br><span class="en">[[gradient-descent]] - how the weights
  `w0, ..., wm` get their values.</span>
- [[convolutional-neural-network]] - cùng perceptron ấy, bị giới hạn vào
  một mảng và dùng chung trọng số.
  <br><span class="en">[[convolutional-neural-network]] - the same
  perceptron, restricted to a patch and sharing weights.</span>
- [[recurrent-neural-network]] - cùng perceptron ấy, cộng thêm một đầu
  vào từ bước thời gian trước.
  <br><span class="en">[[recurrent-neural-network]] - the same perceptron
  plus one input from the previous time step.</span>
- [[linear-regression-k32]] - `w0 + X'W` không qua hàm kích hoạt chính là
  một mô hình tuyến tính đã học ở Chapter 3.
  <br><span class="en">[[linear-regression-k32]] - `w0 + X'W` without an
  activation is exactly the linear model taught in Chapter 3.</span>
