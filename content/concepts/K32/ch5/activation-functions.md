---
type: concept
title: "Hàm kích hoạt và sự cần thiết của tính phi tuyến"
title_en: "Activation Functions and the Necessity of Non-linearity"
tags: [chapter-5, k32, deep-learning, activation-functions, relu, sigmoid]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Hàm kích hoạt `g` là hàm phi tuyến đặt ở cuối mỗi perceptron, biến tổng
có trọng số `z = w0 + X'W` thành đầu ra `y = g(z)`. Mục đích của nó được
slide 9 phát biểu trong đúng một câu: **đưa tính phi tuyến vào mạng**. Mọi
hàm kích hoạt dùng trong học sâu đều phi tuyến, và đó không phải sự trùng
hợp mà là điều kiện tồn tại của cả lĩnh vực.
<br><span class="en">An activation function `g` is the non-linear
function at the end of each perceptron, turning the weighted sum
`z = w0 + X'W` into the output `y = g(z)`. Its purpose is stated by slide
9 in a single sentence: **to introduce non-linearities into the
network**. Every activation used in deep learning is non-linear, and that
is not a coincidence but the field's condition of existence.</span>

## Diễn giải - <span class="en">Explanation</span>

### Ba hàm của chương, kèm đạo hàm - <span class="en">The chapter's three functions, with derivatives</span>

| Hàm | Công thức | Đạo hàm | Miền giá trị | TensorFlow / PyTorch |
|---|---|---|---|---|
| Sigmoid | `g(z) = 1 / (1 + e^-z)` | `g'(z) = g(z)(1 - g(z))` | `(0, 1)` | `tf.math.sigmoid` / `torch.sigmoid` |
| Tang hyperbolic | `g(z) = (e^z - e^-z)/(e^z + e^-z)` | `g'(z) = 1 - g(z)^2` | `(-1, 1)` | `tf.math.tanh` / `torch.tanh` |
| ReLU | `g(z) = max(0, z)` | `1` nếu `z > 0`, `0` nếu ngược lại | `[0, +∞)` | `tf.nn.relu` / `torch.nn.ReLU` |

Đạo hàm không phải chi tiết trang trí: [[backpropagation]] nhân chúng lại
với nhau dọc theo mạng, nên **hình dạng đạo hàm quyết định gradient sống
sót hay tiêu biến** khi lan ngược qua nhiều lớp. Đạo hàm của hàm sigmoid
đạt cực đại chỉ 0.25 tại `z = 0` và tiến nhanh về 0 ở hai phía; nhân vài
chục số như vậy với nhau là ra gần bằng 0. Đạo hàm của ReLU bằng đúng 1
trên toàn miền dương, nên nhân bao nhiêu lần cũng vẫn là 1 - đó là lý do
kỹ thuật khiến ReLU trở thành lựa chọn mặc định cho các lớp ẩn.
<br><span class="en">The derivatives are not decoration:
[[backpropagation]] multiplies them together along the network, so **the
shape of the derivative decides whether a gradient survives or vanishes**
as it flows back through many layers. The sigmoid's derivative peaks at
just 0.25 at `z = 0` and falls quickly to zero on both sides; multiply a
few dozen such numbers and you get roughly zero. ReLU's derivative is
exactly 1 across the whole positive domain, so multiplying it any number
of times still gives 1 - the technical reason ReLU became the default for
hidden layers.</span>

### Lập luận trung tâm: vì sao không được dùng kích hoạt tuyến tính - <span class="en">The central argument: why a linear activation is forbidden</span>

Slide 9 là slide quan trọng nhất trong sáu slide đầu của chương, và lập
luận của nó ngắn tới mức nên nhớ nguyên văn. Nếu hàm kích hoạt là tuyến
tính thì hợp của hai lớp vẫn tuyến tính:
<br><span class="en">Slide 9 is the most important of the chapter's first
six slides, and its argument is short enough to memorise. If the
activation is linear then a composition of two layers is still
linear:</span>

```
W2 (W1 x) = (W2 W1) x
```

Vế phải chỉ là **một ma trận duy nhất** nhân với `x`. Áp dụng lập luận
này nhiều lần: một mạng 100 lớp với kích hoạt tuyến tính, **về mặt toán
học, chính là một lớp tuyến tính duy nhất**. Hệ quả nhìn thấy được trên
dữ liệu: mạng ấy chỉ vẽ được **biên quyết định thẳng**, dù có bao nhiêu
lớp và bao nhiêu nơ-ron đi nữa. Ngược lại, dạng `g(W2 g(W1 x))` cho phép
mạng xấp xỉ các hàm phức tạp tùy ý và vẽ được biên cong giữa các lớp.
<br><span class="en">The right-hand side is **a single matrix** times
`x`. Apply the argument repeatedly: a 100-layer network with linear
activations is **mathematically one linear layer**. The visible
consequence on data: such a network can only draw **straight decision
boundaries**, however many layers and neurons it has. By contrast
`g(W2 g(W1 x))` lets the network approximate arbitrarily complex functions
and trace curved boundaries between classes.</span>

Đây là lý do vì sao chiều sâu không phải trò chơi cộng thêm lớp. Chiều
sâu chỉ tạo ra sức mạnh **khi và chỉ khi** giữa các lớp có một chỗ bẻ
cong; bỏ hàm kích hoạt đi là mạng sâu sụp về mô hình tuyến tính đã học ở
Chapter 3.
<br><span class="en">This is why depth is not a game of adding layers.
Depth creates power **if and only if** there is a bend between the
layers; remove the activation and a deep network collapses into the
linear model taught in Chapter 3.</span>

### Chọn hàm nào ở đâu - <span class="en">Which function goes where</span>

Chương không có bảng hướng dẫn chọn, nhưng cách dùng trong chính các
slide đã nói rõ. **ReLU** xuất hiện ở các lớp ẩn, và slide 80 cùng 83 nói
thẳng rằng trong CNN nó được áp **sau mỗi phép tích chập**. **Sigmoid**
xuất hiện ở đầu ra khi cần một xác suất trong `(0, 1)`, khớp với hàm mất
mát entropy chéo nhị phân ở slide 18, và xuất hiện lần nữa trong các
**cổng** của ô LSTM ở slide 52 - đúng vì miền giá trị `(0, 1)` của nó đọc
được thành "cho lọt qua bao nhiêu phần trăm". **Tang hyperbolic** xuất
hiện trong phương trình cập nhật trạng thái của RNN ở slide 40, với lý do
được ghi rõ: nó **giữ trạng thái trong khoảng bị chặn** `(-1, 1)`, tránh
để giá trị phình to qua các bước thời gian.
<br><span class="en">The chapter has no selection table, but the way the
slides use them says enough. **ReLU** appears in hidden layers, and slides
80 and 83 say outright that in a CNN it is applied **after every
convolution**. **Sigmoid** appears at the output when a probability in
`(0, 1)` is wanted, matching the binary cross-entropy loss on slide 18,
and appears again in the **gates** of an LSTM cell on slide 52 - precisely
because its `(0, 1)` range reads as "what percentage gets through".
**Tanh** appears in the RNN state-update equation on slide 40, for a
stated reason: it **keeps the state bounded** in `(-1, 1)`, preventing
values from blowing up across time steps.</span>

Một hàm nữa xuất hiện ở slide 85 nhưng không nằm trong bảng ba hàm trên:
**softmax**, `softmax(yi) = e^(yi) / sum_j e^(yj)`, dùng ở lớp cuối của
bài toán phân loại nhiều lớp để biến các điểm số thô thành một phân phối
xác suất cộng lại bằng 1. Nó cũng chính là hàm biến điểm chú ý thành
trọng số chú ý ở slide 59.
<br><span class="en">One more function appears on slide 85 but not in the
table of three: **softmax**, `softmax(yi) = e^(yi) / sum_j e^(yj)`, used
at the last layer of a multi-class problem to turn raw scores into a
probability distribution summing to 1. It is also the very function that
turns attention scores into attention weights on slide 59.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 8 (ba hàm, công thức, đạo hàm,
tên gọi trong hai thư viện, và dòng "mọi hàm kích hoạt đều phi tuyến"), 9
(lập luận `W2(W1 x) = (W2 W1)x` và hệ quả về biên quyết định), 7 (vị trí
của `g` trong perceptron), 40 (`tanh` trong ô RNN và lý do giữ trạng thái
bị chặn), 52 (lớp sigmoid làm cổng trong LSTM), 80 và 83 (ReLU sau mỗi
phép tích chập), 85 (softmax ở lớp cuối).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 8 (the three
functions, formulas, derivatives, library names, and the line "all
activation functions are non-linear"), 9 (the `W2(W1 x) = (W2 W1)x`
argument and its consequence for decision boundaries), 7 (where `g` sits
inside a perceptron), 40 (`tanh` in the RNN cell and the bounded-state
reason), 52 (the sigmoid layer as an LSTM gate), 80 and 83 (ReLU after
every convolution), 85 (softmax at the final layer).</span>

## Liên quan - <span class="en">Related</span>

- [[perceptron]] - hàm kích hoạt là thành phần cuối cùng trong bốn thành
  phần của perceptron.
  <br><span class="en">[[perceptron]] - the activation is the last of the
  perceptron's four components.</span>
- [[dense-layers-and-deep-networks]] - không có phi tuyến thì chiều sâu
  không tạo ra sức mạnh nào.
  <br><span class="en">[[dense-layers-and-deep-networks]] - without
  non-linearity, depth creates no power at all.</span>
- [[backpropagation]] - đạo hàm của hàm kích hoạt là thừa số nhân vào
  chuỗi gradient.
  <br><span class="en">[[backpropagation]] - an activation's derivative
  is a factor multiplied into the gradient chain.</span>
- [[backpropagation-through-time]] - chọn hàm kích hoạt là cách chữa thứ
  nhất cho gradient tiêu biến.
  <br><span class="en">[[backpropagation-through-time]] - choosing the
  activation is the first remedy listed for vanishing gradients.</span>
- [[lstm-gated-cells]] - cổng là một lớp sigmoid nhân từng phần tử.
  <br><span class="en">[[lstm-gated-cells]] - a gate is a sigmoid layer
  multiplied pointwise.</span>
- [[convolutional-neural-network]] - ReLU là phép thứ hai trong ba phép
  làm nên CNN.
  <br><span class="en">[[convolutional-neural-network]] - ReLU is the
  second of the three operations that make a CNN.</span>
