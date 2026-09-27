---
type: concept
title: "Tốc độ học và các bộ tối ưu thích nghi"
title_en: "The Learning Rate and Adaptive Optimisers"
tags: [chapter-5, k32, deep-learning, learning-rate, optimizers, adam]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Tốc độ học `eta` là hệ số quyết định **độ dài bước** trong công thức cập
nhật `W <- W - eta · ∂J(W)/∂W`. Gradient cho biết đi **hướng nào**; `eta`
cho biết đi **bao xa**. Slide 24 quy mọi khó khăn của việc huấn luyện mạng
nơ-ron về đúng câu hỏi chọn `eta`.
<br><span class="en">The learning rate `eta` is the coefficient that
decides the **step length** in the update `W <- W - eta · ∂J(W)/∂W`. The
gradient says **which direction**; `eta` says **how far**. Slide 24 reduces
every difficulty in training a neural network to that one choice.</span>

## Diễn giải - <span class="en">Explanation</span>

### Ba tình huống - <span class="en">Three cases</span>

| `eta` | Hậu quả |
|---|---|
| Quá nhỏ | Hội tụ chậm và **mắc kẹt ở cực tiểu địa phương giả** |
| Quá lớn | **Vọt quá đích**, mất ổn định và phân kỳ |
| Ổn định | Hội tụ êm và tránh được cực tiểu địa phương |

Hai cột đầu đáng đọc kỹ vì chúng không đối xứng như tưởng. Một `eta` quá
nhỏ không chỉ chậm - nó còn **không thoát ra được** khỏi một hố nhỏ trên
mặt cảnh quan, nên kết quả cuối cùng tệ hơn chứ không chỉ mất thời gian.
Một `eta` quá lớn không chỉ kém chính xác - nó **phân kỳ**, tức mất mát
tăng lên thay vì giảm, và mô hình hỏng hoàn toàn. Vùng "ổn định" ở giữa
không rộng, và nó phụ thuộc vào bài toán, nên không có giá trị mặc định
nào đúng cho mọi trường hợp.
<br><span class="en">The first two rows deserve care because they are less
symmetric than they look. Too small an `eta` is not merely slow - it also
**cannot escape** a small pit in the landscape, so the final result is
worse, not just later. Too large an `eta` is not merely imprecise - it
**diverges**, meaning the loss rises instead of falling and the model is
ruined. The "stable" band in between is not wide, and it depends on the
problem, so no single default is right everywhere.</span>

### Hai ý tưởng, và ý tưởng nào được dùng thật - <span class="en">Two ideas, and which one is actually used</span>

Slide 25 nêu hai lối đi. **Ý tưởng 1**: thử thật nhiều giá trị rồi xem cái
nào "vừa vặn" - đúng nhưng tốn, và phải làm lại cho mỗi bài toán mới. **Ý
tưởng 2**, cách làm thực tế: thiết kế một **tốc độ học tự thích nghi** theo
mặt cảnh quan, thay đổi theo ba thứ mà slide liệt kê rõ - gradient đang
lớn hay nhỏ, việc học đang diễn ra nhanh hay chậm, và độ lớn của từng
trọng số cụ thể. Ý sau cùng quan trọng: bộ tối ưu thích nghi không dùng
**một** `eta` cho cả mạng mà điều chỉnh riêng cho **từng trọng số**.
<br><span class="en">Slide 25 offers two routes. **Idea 1**: try many
values and see which is "just right" - valid but costly, and it must be
redone for each new problem. **Idea 2**, what is actually done: design an
**adaptive learning rate** that follows the landscape, changing with three
things the slide lists - how large the gradient is, how fast learning is
happening, and the size of particular weights. That last point matters: an
adaptive optimiser does not use **one** `eta` for the whole network but
tunes it **per weight**.</span>

### Năm bộ tối ưu của chương - <span class="en">The chapter's five optimisers</span>

| Thuật toán | TensorFlow (`tf.keras.optimizers.*`) | PyTorch (`torch.optim.*`) | Nguồn |
|---|---|---|---|
| SGD | `SGD` | `SGD` | Kiefer & Wolfowitz, 1952 |
| Adam | `Adam` | `Adam` | Kingma et al., 2014 |
| Adadelta | `Adadelta` | `Adadelta` | Zeiler, 2012 |
| Adagrad | `Adagrad` | `Adagrad` | Duchi et al., 2011 |
| RMSProp | `RMSprop` | `RMSprop` | Hinton, 2012 |

Bảng này đáng để ý ở hai chỗ. Thứ nhất, **SGD có từ 1952** - tức 6 năm
trước cả perceptron (1958); hạ gradient ngẫu nhiên không phải phát minh
của học sâu mà là công cụ thống kê được vay lại. Thứ hai, **bốn bộ tối ưu
còn lại đều ra đời trong khoảng 2011-2014**, tức đúng giai đoạn học sâu
bùng nổ; chúng chính là phần "phần mềm" trong ba điều kiện mà slide 5 nêu.
Chương không xếp hạng năm bộ này và không nói nên dùng bộ nào - trong thực
hành Adam là mặc định phổ biến nhất, nhưng đó là thông tin ngoài slide.
Slide chỉ dẫn thêm một nguồn đọc: `ruder.io/optimizing-gradient-descent`.
<br><span class="en">Two things in the table deserve attention. First,
**SGD dates to 1952** - six years before the perceptron itself (1958);
stochastic gradient descent is not a deep learning invention but a
borrowed statistical tool. Second, **the other four all appeared between
2011 and 2014**, exactly during deep learning's rise; they are the
"software" among the three conditions named on slide 5. The chapter does
not rank the five nor say which to use - in practice Adam is the most
common default, but that is information beyond the slide. The slide only
adds one further reading: `ruder.io/optimizing-gradient-descent`.</span>

### Quan hệ với lô nhỏ - <span class="en">The link to mini-batches</span>

Hai lựa chọn này không độc lập. Slide 26 nêu rõ rằng gradient chính xác
hơn **cho phép dùng tốc độ học lớn hơn**, nên kích thước lô và `eta` phải
được chọn cùng nhau: lô lớn cho gradient ít nhiễu, do đó bước dài hơn vẫn
an toàn. Đây là lý do khi tăng kích thước lô, người ta thường tăng `eta`
theo.
<br><span class="en">The two choices are not independent. Slide 26 states
that a more accurate gradient **allows larger learning rates**, so batch
size and `eta` must be chosen together: a large batch gives a less noisy
gradient, so a longer step stays safe. That is why raising the batch size
usually comes with raising `eta`.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 24 (mặt cảnh quan gồ ghề, ba tình
huống của `eta`), 25 (hai ý tưởng, bảng năm bộ tối ưu, nguồn đọc thêm), 21
(`eta` trong công thức cập nhật), 26 (gradient chính xác hơn cho phép `eta`
lớn hơn), 30 (tổng kết: tốc độ học thích nghi là một trong ba mục "huấn
luyện trong thực hành"), 5 (phần mềm và công cụ là một trong ba điều kiện).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 24 (the
rugged landscape, the three cases for `eta`), 25 (the two ideas, the table
of five optimisers, the further reading), 21 (`eta` in the update rule), 26
(a more accurate gradient allowing a larger `eta`), 30 (the summary:
adaptive learning rates as one of three "training in practice" items), 5
(software and toolboxes as one of the three conditions).</span>

## Liên quan - <span class="en">Related</span>

- [[gradient-descent]] - `eta` là tham số của chính công thức cập nhật ấy.
  <br><span class="en">[[gradient-descent]] - `eta` is the parameter of
  that very update rule.</span>
- [[mini-batch-gradient-descent]] - kích thước lô và `eta` phải chọn cùng
  nhau.
  <br><span class="en">[[mini-batch-gradient-descent]] - batch size and
  `eta` must be chosen together.</span>
- [[backpropagation]] - nguồn cung cấp gradient mà `eta` nhân vào.
  <br><span class="en">[[backpropagation]] - the source of the gradient
  `eta` scales.</span>
- [[backpropagation-through-time]] - cắt ngưỡng gradient là một can thiệp
  khác lên độ dài bước.
  <br><span class="en">[[backpropagation-through-time]] - gradient clipping
  is another intervention on step length.</span>
- [[supervised-learning-framework]] - `eta` là một siêu tham số, không
  phải tham số học được, theo đúng phân biệt ở Chapter 3.
  <br><span class="en">[[supervised-learning-framework]] - `eta` is a
  hyperparameter, not a learned parameter, per Chapter 3's
  distinction.</span>
