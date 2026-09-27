---
type: concept
title: "Hàm mất mát và mất mát thực nghiệm"
title_en: "Loss Functions and the Empirical Loss"
tags: [chapter-5, k32, deep-learning, loss-function, cross-entropy, mse]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

**Mất mát** của một quan sát là **chi phí phải chịu khi dự đoán sai**:
`L(f(x^(i); W), y^(i))`, trong đó `f(x^(i); W)` là giá trị mạng dự đoán và
`y^(i)` là giá trị thật. Lấy trung bình trên toàn bộ `n` quan sát được
**mất mát thực nghiệm**:
<br><span class="en">The **loss** of one example is the **cost incurred
from an incorrect prediction**: `L(f(x^(i); W), y^(i))`, where
`f(x^(i); W)` is the network's prediction and `y^(i)` the truth. Averaging
over all `n` observations gives the **empirical loss**:</span>

```
J(W) = (1/n) · sum_{i=1..n} L( f(x^(i); W), y^(i) )
```

Cùng đại lượng này còn được gọi là **hàm mục tiêu**, **hàm chi phí**, hay
**rủi ro thực nghiệm** - slide 17 liệt kê cả ba tên.
<br><span class="en">The same quantity is also called the **objective
function**, the **cost function**, or the **empirical risk** - slide 17
lists all three names.</span>

## Diễn giải - <span class="en">Explanation</span>

### Điểm mấu chốt: `J` là hàm của trọng số, không phải của dữ liệu - <span class="en">The key point: `J` is a function of the weights, not of the data</span>

Slide 17 in riêng thành một dòng nhận định mà toàn bộ phần huấn luyện dựa
vào: **`J` là hàm của trọng số `W`**. Dữ liệu là cố định - ta không đổi
được `x` hay `y`; thứ duy nhất thay đổi được là trọng số. Cách nhìn ấy
biến bài toán học máy thành một bài toán tối ưu thuần túy: tìm `W` làm
`J(W)` nhỏ nhất. [[gradient-descent]] chỉ là một cách giải bài toán ấy, và
nó giải được chính vì `J` khả vi theo `W`.
<br><span class="en">Slide 17 sets out on its own line the statement the
whole training section rests on: **`J` is a function of the weights `W`**.
The data is fixed - we cannot change `x` or `y`; the only thing we can
change is the weights. That view turns machine learning into a pure
optimisation problem: find the `W` that minimises `J(W)`.
[[gradient-descent]] is merely one way to solve it, and it works precisely
because `J` is differentiable in `W`.</span>

### Hai hàm mất mát, chọn theo loại đầu ra - <span class="en">Two losses, chosen by output type</span>

| Hàm mất mát | Dùng khi | Công thức |
|---|---|---|
| Entropy chéo nhị phân | Đầu ra là xác suất trong `(0, 1)` | `J(W) = -(1/n) sum_i [ y^(i) log fi + (1 - y^(i)) log(1 - fi) ]` |
| Sai số bình phương trung bình (MSE) | Đầu ra là số thực, ví dụ điểm cuối kỳ | `J(W) = (1/n) sum_i ( y^(i) - f(x^(i); W) )^2` |

với `fi = f(x^(i); W)`. Slide 18 nêu rõ tính cách của từng hàm, và đó là
phần đáng nhớ hơn công thức.
<br><span class="en">with `fi = f(x^(i); W)`. Slide 18 states each one's
character, and that is the part more worth remembering than the
formula.</span>

**Entropy chéo phạt rất nặng các dự đoán tự tin nhưng sai.** Lý do nằm ở
hàm `log`: nếu nhãn thật là 1 mà mạng dự đoán `0.001`, số hạng
`y log f = log(0.001)` là một số âm rất lớn về độ lớn, nên mất mát rất
lớn. Ngược lại, dự đoán `0.6` cho một nhãn 1 chỉ bị phạt nhẹ. Hàm này do
đó không chỉ thưởng cho việc đoán đúng, mà còn **trừng phạt sự tự tin sai
chỗ** - tính chất rất hợp với các bài toán mà một dự đoán chắc chắn nhưng
sai gây hậu quả nặng.
<br><span class="en">**Cross-entropy heavily penalises confident but
wrong predictions.** The reason is the `log`: if the true label is 1 and
the network predicts `0.001`, the term `y log f = log(0.001)` is a large
negative number, so the loss is large. A prediction of `0.6` for a label
of 1 is penalised only mildly. The function therefore does not merely
reward being right, it **punishes misplaced confidence** - a property
well suited to problems where a confident wrong answer is
costly.</span>

**MSE cho các sai số lớn trọng số lớn hơn nhiều so với sai số nhỏ**, vì
nó bình phương độ lệch: sai 10 đơn vị bị phạt gấp 100 lần sai 1 đơn vị,
không phải gấp 10 lần. Đây đúng là chỉ số MSE đã học ở Chapter 3 trong
phần đánh giá mô hình hồi quy; điểm mới ở chương này là nó không chỉ được
dùng để **báo cáo** chất lượng mô hình mà còn được dùng làm **thứ mà quá
trình huấn luyện cực tiểu hóa**.
<br><span class="en">**MSE counts large errors far more than small
ones**, because it squares the deviation: being off by 10 units is
penalised 100 times as much as being off by 1, not 10 times. This is the
same MSE metric taught in Chapter 3 for evaluating regression models; what
is new here is that it is not only used to **report** model quality but is
**the thing training minimises**.</span>

### Vì sao cần cả hai và không thể dùng lẫn - <span class="en">Why both exist and cannot be swapped</span>

Hàm mất mát phải khớp với **miền giá trị của đầu ra**. Entropy chéo lấy
`log f`, nên nó chỉ có nghĩa khi `f` nằm trong `(0, 1)` - tức khi lớp cuối
dùng hàm sigmoid hoặc softmax. Dùng entropy chéo cho một mạng dự đoán điểm
cuối kỳ từ 0 tới 10 là vô nghĩa vì `log` của một số lớn hơn 1 hoặc số âm
không dùng được ở đây. Ngược lại, dùng MSE cho một bài toán phân loại thì
chạy được nhưng kém, vì MSE không phạt đủ mạnh sự tự tin sai chỗ. Đây là
lý do slide 18 trình bày chúng thành hai cột song song thay vì một danh
sách.
<br><span class="en">The loss must match the **range of the output**.
Cross-entropy takes `log f`, so it only makes sense when `f` lies in
`(0, 1)` - i.e. when the final layer uses a sigmoid or a softmax. Using
cross-entropy for a network predicting a final grade from 0 to 10 is
meaningless, since the log of a number above 1 or of a negative number is
no use here. Conversely, MSE on a classification problem runs but performs
poorly, because it does not punish misplaced confidence hard enough. That
is why slide 18 lays them out as two parallel columns rather than one
list.</span>

### Hàm mất mát trong mã của chương - <span class="en">The loss in the chapter's code</span>

Slide 54 cho dòng mã duy nhất của chương liên quan tới hàm mất mát, dùng
cho bài phân loại cảm xúc - phiên bản nhiều lớp của entropy chéo:
<br><span class="en">Slide 54 gives the chapter's only line of loss code,
for the sentiment classification task - the multi-class version of
cross-entropy:</span>

```python
loss = tf.nn.softmax_cross_entropy_with_logits(y, predicted)
```

Một hàm mất mát khác xuất hiện ở slide 89, đáng chú ý vì nó không thuộc
hai loại trên: bài điều khiển liên tục huấn luyện với
`L = -log P(theta | I, M)`, tức **cực tiểu hóa log hợp lý âm** của góc
lái dưới một hỗn hợp phân phối Gauss. Đó là cùng nguyên lý hợp lý cực đại
đã gặp ở Chapter 3, chỉ đặt trong một mạng nơ-ron.
<br><span class="en">Another loss appears on slide 89, notable for
belonging to neither of the two types above: the continuous-control task
trains with `L = -log P(theta | I, M)`, i.e. **minimising the negative log
likelihood** of the steering angle under a mixture of Gaussians. That is
the same maximum-likelihood principle met in Chapter 3, placed inside a
neural network.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 17 (định nghĩa mất mát một quan
sát, mất mát thực nghiệm, ba tên gọi khác, và nhận định `J` là hàm của
`W`), 18 (entropy chéo nhị phân và MSE, tính cách của từng hàm), 16 (ví dụ
dự đoán 0.1 trong khi thật là 1 - động cơ cần một thước đo), 20 (`J(W)`
trong bài toán `argmin`), 41 (tổng mất mát của RNN là tổng các `Lt`), 54
(`softmax_cross_entropy_with_logits`), 89 (log hợp lý âm cho điều khiển
liên tục).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 17 (the
definition of a single example's loss, the empirical loss, three other
names, and the statement that `J` is a function of `W`), 18 (binary
cross-entropy and MSE, each one's character), 16 (the 0.1-versus-1 example
that motivates needing a measure), 20 (`J(W)` inside the `argmin`
problem), 41 (an RNN's total loss as the sum of the `Lt`), 54
(`softmax_cross_entropy_with_logits`), 89 (negative log likelihood for
continuous control).</span>

## Liên quan - <span class="en">Related</span>

- [[gradient-descent]] - thuật toán cực tiểu hóa chính `J(W)` này.
  <br><span class="en">[[gradient-descent]] - the algorithm that minimises
  this very `J(W)`.</span>
- [[backpropagation]] - cách tính `∂J(W)/∂W` cho từng trọng số.
  <br><span class="en">[[backpropagation]] - how `∂J(W)/∂W` is computed
  for each weight.</span>
- [[mini-batch-gradient-descent]] - ba cách ước lượng gradient của `J`
  với chi phí khác nhau.
  <br><span class="en">[[mini-batch-gradient-descent]] - three ways to
  estimate `J`'s gradient at different costs.</span>
- [[perceptron]] - `f(x; W)` chính là mạng gồm các perceptron ấy.
  <br><span class="en">[[perceptron]] - `f(x; W)` is exactly the network
  of those perceptrons.</span>
- [[activation-functions]] - hàm kích hoạt ở lớp cuối quyết định hàm mất
  mát nào dùng được.
  <br><span class="en">[[activation-functions]] - the final layer's
  activation decides which loss is usable.</span>
- [[model-evaluation-metrics-k32]] - MSE ở Chapter 3 là chỉ số báo cáo;
  ở đây nó là thứ được cực tiểu hóa.
  <br><span class="en">[[model-evaluation-metrics-k32]] - in Chapter 3 MSE
  was a reporting metric; here it is what gets minimised.</span>
- [[dropout-and-early-stopping]] - hai kỹ thuật này **không** sửa `J`,
  chúng sửa quy trình huấn luyện.
  <br><span class="en">[[dropout-and-early-stopping]] - these two do
  **not** modify `J`; they modify the training procedure.</span>
