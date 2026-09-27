---
type: concept
title: "Hạ gradient theo lô nhỏ"
title_en: "Mini-batch Gradient Descent"
tags: [chapter-5, k32, deep-learning, sgd, mini-batch, gpu]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Hạ gradient theo lô nhỏ là cách tính gradient trên **một tập con `B` quan
sát** ở mỗi bước cập nhật, thay vì trên toàn bộ `n` quan sát (quá nặng)
hoặc trên đúng một quan sát (quá nhiễu):
<br><span class="en">Mini-batch gradient descent computes the gradient on
**a subset of `B` observations** at each update step, instead of on all `n`
observations (too heavy) or on exactly one (too noisy):</span>

```
∂J(W)/∂W  =  (1/B) · sum_{k=1..B} ∂Jk(W)/∂W
```

## Diễn giải - <span class="en">Explanation</span>

### Ba cách, xếp cạnh nhau - <span class="en">The three ways, side by side</span>

| Cách | Gradient dùng | Đánh giá của slide 26 |
|---|---|---|
| Hạ gradient toàn phần | `∂J(W)/∂W` trên cả `n` điểm | **Chính xác** nhưng **rất nặng tính toán** |
| Hạ gradient ngẫu nhiên (SGD) | `∂Ji(W)/∂W` trên **một** điểm `i` | **Dễ tính** nhưng **rất nhiễu** |
| SGD theo lô nhỏ | `(1/B) sum_k ∂Jk(W)/∂W` trên `B` điểm | **Nhanh**, và **ước lượng gradient thật tốt hơn nhiều** |

Cách đọc bảng này: hai cách đầu là hai cực của cùng một đánh đổi giữa
**độ chính xác của gradient** và **chi phí mỗi bước**. Toàn phần cho
gradient đúng nhưng mỗi bước phải quét hết dữ liệu; ngẫu nhiên cho mỗi
bước cực nhanh nhưng hướng đi dao động mạnh vì một quan sát đơn lẻ không
đại diện cho cả tập. Lô nhỏ không phải sự thỏa hiệp nửa vời mà là lựa chọn
thắng cả hai cực, vì hai lý do độc lập nhau.
<br><span class="en">How to read the table: the first two rows are two
extremes of one trade-off between **gradient accuracy** and **cost per
step**. Full-batch gives the exact gradient but each step scans all the
data; stochastic makes each step very cheap but the direction oscillates
badly because a single observation does not represent the set. Mini-batch
is not a half-hearted compromise but a choice that beats both extremes, for
two independent reasons.</span>

### Lý do thứ nhất: gradient tốt hơn cho phép bước dài hơn - <span class="en">Reason one: a better gradient allows longer steps</span>

Slide 26 kết bằng hai dòng, và dòng thứ nhất là: **gradient chính xác hơn
thì hội tụ êm hơn và dùng được tốc độ học lớn hơn**. Đây là mối liên hệ dễ
bỏ sót: kích thước lô và `eta` không phải hai lựa chọn độc lập. Lô lớn cho
ước lượng gradient ít nhiễu, nên một bước dài vẫn an toàn; lô quá nhỏ buộc
phải đi bước ngắn để bù cho nhiễu, và đi bước ngắn thì huấn luyện lâu.
Xem [[learning-rate-and-optimizers]].
<br><span class="en">Slide 26 closes with two lines, the first being: **a
more accurate gradient means smoother convergence and larger usable
learning rates**. This link is easy to miss: batch size and `eta` are not
independent choices. A large batch gives a less noisy gradient estimate, so
a long step stays safe; too small a batch forces short steps to compensate
for the noise, and short steps mean slow training. See
[[learning-rate-and-optimizers]].</span>

### Lý do thứ hai: một lô chạy song song trên GPU - <span class="en">Reason two: a batch runs in parallel on a GPU</span>

Dòng thứ hai của slide 26: **huấn luyện nhanh vì các lô chạy song song
trên GPU**. Đây là chỗ điều kiện "phần cứng" ở slide 5 phát huy tác dụng
cụ thể. `B` quan sát trong một lô không cần xử lý tuần tự - chúng đi qua
mạng cùng lúc như các dòng của một ma trận, và [[dense-layers-and-deep-networks]]
đã nêu rằng cả một lớp chỉ là một phép nhân ma trận. Do đó tính gradient
cho 128 quan sát **không tốn 128 lần** thời gian của một quan sát; trên GPU
nó gần như cùng chi phí. Chính tính chất này làm lô nhỏ trở thành lựa chọn
mặc định, không phải một sự đánh đổi.
<br><span class="en">Slide 26's second line: **training is fast because
batches run in parallel on GPUs**. This is where slide 5's "hardware"
condition pays off concretely. The `B` observations in a batch need not be
processed sequentially - they pass through the network together as rows of a
matrix, and [[dense-layers-and-deep-networks]] noted that a whole layer is
just one matrix multiply. So computing the gradient for 128 observations
**does not cost 128 times** the time of one; on a GPU it costs almost the
same. That property is what makes mini-batching the default rather than a
compromise.</span>

### Nhiễu không hoàn toàn là điều xấu - <span class="en">Noise is not purely harmful</span>

Slide 26 chỉ nêu nhiễu như nhược điểm của SGD, nhưng đặt cạnh slide 24 thì
thấy một sắc thái: `eta` quá nhỏ làm mô hình **mắc kẹt ở cực tiểu địa
phương giả**, và một gradient hơi nhiễu lại có thể đẩy mô hình ra khỏi hố
nhỏ ấy. Chương không nói điều này thành lời, nên đây là suy luận từ hai
slide chứ không phải trích dẫn - nhưng nó giải thích vì sao lô nhỏ, chứ
không phải lô toàn phần, lại là lựa chọn được dùng trong thực tế.
<br><span class="en">Slide 26 presents noise only as SGD's drawback, but
read beside slide 24 a nuance appears: too small an `eta` leaves the model
**stuck in a false local minimum**, and a slightly noisy gradient can push
it out of such a pit. The chapter does not say so explicitly, so this is an
inference from two slides rather than a quotation - but it explains why
mini-batch rather than full-batch is what gets used in
practice.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 26 (ba cách tính gradient, bảng so
sánh, hai dòng kết luận về tốc độ học lớn hơn và chạy song song trên GPU),
21 (công thức cập nhật mà ba cách này cùng dùng), 24 (mắc kẹt ở cực tiểu
địa phương giả), 25 (SGD trong bảng năm bộ tối ưu, Kiefer & Wolfowitz
1952), 30 (tổng kết: chia lô nhỏ là một trong ba mục "huấn luyện trong thực
hành"), 5 (GPU và tính song song hóa là điều kiện thứ hai).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 26 (the three
ways of computing a gradient, the comparison table, the two closing lines on
larger learning rates and GPU parallelism), 21 (the update rule all three
share), 24 (getting stuck in false local minima), 25 (SGD in the
five-optimiser table, Kiefer & Wolfowitz 1952), 30 (the summary:
mini-batching as one of three "training in practice" items), 5 (GPUs and
parallelisability as the second condition).</span>

## Liên quan - <span class="en">Related</span>

- [[gradient-descent]] - thuật toán nền mà ba cách này là ba biến thể.
  <br><span class="en">[[gradient-descent]] - the base algorithm these three
  are variants of.</span>
- [[learning-rate-and-optimizers]] - kích thước lô và `eta` phải chọn cùng
  nhau.
  <br><span class="en">[[learning-rate-and-optimizers]] - batch size and
  `eta` must be chosen together.</span>
- [[dense-layers-and-deep-networks]] - một lớp là một phép nhân ma trận, nên
  cả lô đi qua cùng lúc.
  <br><span class="en">[[dense-layers-and-deep-networks]] - a layer is one
  matrix multiply, so a whole batch passes at once.</span>
- [[loss-functions-and-empirical-risk]] - `J` là trung bình trên `n`; lô nhỏ
  là trung bình trên `B`.
  <br><span class="en">[[loss-functions-and-empirical-risk]] - `J` averages
  over `n`; a mini-batch averages over `B`.</span>
- [[self-attention]] - tính song song hóa cũng chính là lý do chú ý thay
  được hồi tiếp.
  <br><span class="en">[[self-attention]] - parallelisability is likewise the
  reason attention replaces recurrence.</span>
