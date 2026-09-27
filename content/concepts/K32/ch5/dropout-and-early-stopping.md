---
type: concept
title: "Dropout và dừng sớm - điều chuẩn cho mạng nơ-ron"
title_en: "Dropout and Early Stopping - Regularisation for Neural Networks"
tags: [chapter-5, k32, deep-learning, regularization, dropout, early-stopping, overfitting]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Slide 27 định nghĩa lại **điều chuẩn** trong một khung riêng: là kỹ thuật
**ràng buộc bài toán tối ưu để cản các mô hình phức tạp**, nhằm cải thiện
khả năng tổng quát hóa trên dữ liệu chưa thấy. Chương đưa ra hai kỹ thuật
đặc thù của mạng nơ-ron, và **cả hai đều không sửa hàm mất mát** - chúng
sửa **quy trình huấn luyện**:
<br><span class="en">Slide 27 redefines **regularisation** in its own box:
a technique that **constrains the optimisation problem to discourage
complex models**, so as to improve generalisation on unseen data. The
chapter offers two techniques specific to neural networks, and **neither
modifies the loss function** - both modify the **training
procedure**:</span>

- **Bỏ ngẫu nhiên (dropout)**: trong lúc huấn luyện, ngẫu nhiên đặt một số
  giá trị kích hoạt về 0.
  <br><span class="en">**Dropout**: during training, randomly set some
  activations to 0.</span>
- **Dừng sớm**: dừng huấn luyện trước khi mô hình kịp quá khớp.
  <br><span class="en">**Early stopping**: stop training before the model
  has a chance to overfit.</span>

## Diễn giải - <span class="en">Explanation</span>

### Khác biệt so với điều chuẩn ở Chapter 3 - <span class="en">How this differs from Chapter 3's regularisation</span>

Đây là điểm đáng nhấn nhất của cả mục. Ở Chapter 3, điều chuẩn có nghĩa là
**cộng thêm một số hạng phạt vào hàm mất mát**: phạt L2 cho Ridge, phạt L1
cho Lasso. Bài toán tối ưu bị đổi, và nghiệm của nó thu nhỏ các hệ số lại.
Hai kỹ thuật trong chương này **không làm thế**. Hàm mất mát giữ nguyên là
entropy chéo hoặc MSE; thứ bị thay đổi là **cách đi tìm nghiệm** - dropout
làm nhiễu mạng ở mỗi bước, dừng sớm cắt ngắn hành trình. Cùng một mục tiêu
(cản mô hình phức tạp) nhưng đạt tới bằng hai con đường khác nhau về bản
chất.
<br><span class="en">This is the point most worth stressing. In Chapter 3,
regularisation meant **adding a penalty term to the loss**: an L2 penalty
for ridge, an L1 penalty for lasso. The optimisation problem itself
changed, and its solution shrank the coefficients. The two techniques here
**do not do that**. The loss stays exactly cross-entropy or MSE; what
changes is **how the solution is sought** - dropout perturbs the network at
every step, early stopping cuts the journey short. The same aim
(discouraging complex models) reached by two fundamentally different
routes.</span>

### Dropout: năm điểm của slide 28 - <span class="en">Dropout: slide 28's five points</span>

1. Trong lúc huấn luyện, **đặt ngẫu nhiên một số giá trị kích hoạt về 0**.
   <br><span class="en">During training, **randomly set some activations to
   0**.</span>
2. Thường bỏ khoảng **50%** số kích hoạt của một lớp.
   <br><span class="en">Typically drop about **50%** of a layer's
   activations.</span>
3. **Mỗi vòng lặp bỏ một tập con ngẫu nhiên khác nhau.**
   <br><span class="en">**A different random subset is dropped every
   iteration.**</span>
4. Việc đó **buộc mạng không được dựa vào bất kỳ nút nào**, nên nó học được
   biểu diễn **dư thừa và bền hơn**.
   <br><span class="en">This **forces the network not to rely on any single
   node**, so it learns **redundant, robust** representations.</span>
5. **Khi kiểm tra thì mọi nút đều hoạt động trở lại.**
   <br><span class="en">**At test time all units are active again.**</span>

Điểm 3 và điểm 5 là hai điểm dễ nhớ sai nhất. Nếu bỏ **cùng** một tập con
ở mọi vòng lặp thì hiệu ứng không phải điều chuẩn mà chỉ là làm mạng nhỏ
lại - tính ngẫu nhiên **mỗi vòng lặp** mới là thứ tạo ra tác dụng. Và nếu
quên bật lại toàn bộ nút khi kiểm tra thì dự đoán sẽ dao động ngẫu nhiên
giữa các lần chạy. Cơ chế sâu hơn nằm ở điểm 4: một mạng không biết trước
nơ-ron nào sẽ bị tắt thì không thể dồn toàn bộ nhiệm vụ cho một nơ-ron, nên
nó **buộc phải phân tán** thông tin ra nhiều nơ-ron - đó chính là nghĩa của
"biểu diễn dư thừa".
<br><span class="en">Points 3 and 5 are the two most often misremembered.
Dropping the **same** subset every iteration is not regularisation at all,
merely a smaller network - the per-iteration randomness is what creates the
effect. And forgetting to reactivate all units at test time makes
predictions fluctuate randomly between runs. The deeper mechanism is point
4: a network that cannot know which unit will be switched off cannot pile
the whole job onto one unit, so it **must spread** information across many -
which is exactly what "redundant representation" means.</span>

```python
tf.keras.layers.Dropout(rate=0.5)
torch.nn.Dropout(p=0.5)
```

### Dừng sớm: đọc hai đường cong - <span class="en">Early stopping: reading two curves</span>

Slide 29 mô tả một biểu đồ hai đường, mất mát trên tập huấn luyện và mất
mát trên tập kiểm tra, cùng vẽ theo số vòng lặp, và chia nó thành ba giai
đoạn:
<br><span class="en">Slide 29 describes a two-curve plot, training loss and
testing loss against training iterations, and divides it into three
phases:</span>

| Giai đoạn | Đường huấn luyện | Đường kiểm tra | Chẩn đoán |
|---|---|---|---|
| Đầu | Giảm | Giảm | Vẫn còn chưa khớp |
| Điểm tối ưu | Giảm | **Thấp nhất** | Dừng đúng ở đây |
| Sau | Vẫn giảm | **Đi lên** | Mô hình học thuộc lòng tập huấn luyện |

Quy tắc rút ra: **dừng đúng vòng lặp mà mất mát kiểm tra thấp nhất, và
giữ lại bộ trọng số tại đó**. Chi tiết "giữ lại bộ trọng số tại đó" quan
trọng về mặt cài đặt: người ta không dừng ngay khi thấy đường kiểm tra
nhích lên (có thể chỉ là nhiễu) mà chạy thêm rồi **quay lại** bộ trọng số
tốt nhất đã lưu.
<br><span class="en">The rule: **stop at the iteration where testing loss
is lowest, and keep those weights**. The "keep those weights" detail
matters in implementation: one does not halt the instant the test curve
ticks up (that may be noise) but keeps training and then **returns** to the
best saved weights.</span>

Một lưu ý về từ ngữ: slide dùng chữ "test (validation) set" và gọi đường
thứ hai là "Testing". Theo đúng phân biệt đã học ở Chapter 3, tập dùng để
chọn thời điểm dừng là **tập kiểm định**, không phải tập kiểm tra cuối cùng
- vì một khi đã dùng nó để quyết định dừng ở đâu thì nó đã tham gia vào
việc chọn mô hình. Chương này không nhấn mạnh sự phân biệt ấy; ai theo
chuẩn của Chapter 3 nên hiểu đường thứ hai là đường **kiểm định**.
<br><span class="en">A note on wording: the slide says "test (validation)
set" and labels the second curve "Testing". By Chapter 3's distinction, the
set used to choose the stopping point is the **validation** set, not the
final test set - because once it has been used to decide where to stop it
has taken part in model selection. This chapter does not stress that
distinction; anyone following Chapter 3's convention should read the second
curve as the **validation** curve.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 27 (bộ ba chưa khớp/khớp lý
tưởng/quá khớp, và khung định nghĩa lại điều chuẩn), 28 (dropout, năm điểm,
tỉ lệ 50%, mã hai thư viện), 29 (dừng sớm, ba giai đoạn của hai đường cong,
quy tắc giữ lại trọng số), 30 (tổng kết: dropout và dừng sớm là hai mục
điều chuẩn).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 27 (the
underfitting/ideal/overfitting triple and the box redefining
regularisation), 28 (dropout, five points, the 50% rate, code in both
libraries), 29 (early stopping, the three phases of the two curves, the
keep-the-weights rule), 30 (the summary: dropout and early stopping as the
two regularisation items).</span>

## Liên quan - <span class="en">Related</span>

- [[overfitting-underfitting-k32]] - cùng bài toán đã dạy ở Chapter 3, nay
  gặp lại trong mạng nơ-ron.
  <br><span class="en">[[overfitting-underfitting-k32]] - the same problem
  taught in Chapter 3, met again in neural networks.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] - đối chiếu: ở đó điều
  chuẩn là cộng phạt vào hàm mất mát.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] - for
  contrast: there regularisation adds a penalty to the loss.</span>
- [[train-test-split-and-cross-validation]] - dừng sớm cần một tập giữ
  riêng, và không được dùng tập kiểm tra cuối cùng cho việc đó.
  <br><span class="en">[[train-test-split-and-cross-validation]] - early
  stopping needs a held-out set, and must not use the final test set for
  it.</span>
- [[dense-layers-and-deep-networks]] - dropout tắt các đơn vị trong lớp ẩn.
  <br><span class="en">[[dense-layers-and-deep-networks]] - dropout switches
  off units in a hidden layer.</span>
- [[loss-functions-and-empirical-risk]] - hai kỹ thuật này **không** đổi
  `J(W)`.
  <br><span class="en">[[loss-functions-and-empirical-risk]] - neither
  technique changes `J(W)`.</span>
- [[random-forest-k32]] - cùng nguyên lý "đừng dựa vào một thành phần đơn
  lẻ" như lấy mẫu con đặc trưng trong rừng ngẫu nhiên.
  <br><span class="en">[[random-forest-k32]] - the same "do not rely on any
  single component" principle as feature subsampling in a random
  forest.</span>
