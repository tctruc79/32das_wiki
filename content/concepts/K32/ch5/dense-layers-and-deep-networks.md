---
type: concept
title: "Lớp kết nối đầy đủ, lớp ẩn và mạng sâu"
title_en: "Dense Layers, Hidden Layers and Deep Networks"
tags: [chapter-5, k32, deep-learning, dense-layer, hidden-layer, neural-networks]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Một **lớp kết nối đầy đủ** (Dense) là một tập perceptron đặt song song
trên **cùng một** tập đầu vào: đầu ra thứ `i` có
`zi = w0,i + sum_{j=1..m} xj wj,i`. Vì mọi đầu vào đều nối tới mọi đầu ra
nên lớp này mang tên "dày đặc". Chồng nhiều lớp như vậy lên nhau, trong
đó lớp `k` nhận đầu ra **đã kích hoạt** của lớp `k - 1`, được một **mạng
sâu**:
<br><span class="en">A **dense** (fully connected) layer is a set of
perceptrons placed in parallel over the **same** inputs: output `i` has
`zi = w0,i + sum_{j=1..m} xj wj,i`. Because every input connects to every
output, the layer is called dense. Stack such layers, with layer `k`
taking the **activated** outputs of layer `k - 1`, and you have a **deep
network**:</span>

```
zk,i = w0,i^(k) + sum_{j=1..n(k-1)} g( z(k-1),j ) · wj,i^(k)
```

Toàn bộ tập tham số là `W = {W^(1), W^(2), ...}`, và **huấn luyện điều
chỉnh tất cả chúng cùng lúc**.
<br><span class="en">The full parameter set is
`W = {W^(1), W^(2), ...}`, and **training adjusts all of them at
once**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Lớp Dense là một phép nhân ma trận - <span class="en">A dense layer is one matrix multiply</span>

Slide 12 nêu một nhận xét có hệ quả thực hành lớn: vì mọi đầu vào nối tới
mọi đầu ra, **cả lớp chỉ là một phép nhân ma trận cộng một hàm kích
hoạt**. Đó là lý do mạng nơ-ron chạy nhanh trên GPU - phần cứng ấy sinh ra
để nhân ma trận, và một mạng 50 lớp chỉ là 50 phép nhân ma trận nối tiếp.
Điều kiện "phần cứng" mà slide 5 nêu như một trong ba lý do học sâu bùng
nổ hoạt động được chính nhờ tính chất này.
<br><span class="en">Slide 12 makes an observation with a large practical
consequence: because every input connects to every output, **the whole
layer is one matrix multiply plus an activation**. That is why neural
networks run fast on GPUs - such hardware exists to multiply matrices, and
a 50-layer network is merely 50 matrix multiplies in sequence. The
"hardware" condition slide 5 names as one of three reasons for deep
learning's rise works precisely because of this property.</span>

```python
layer = tf.keras.layers.Dense(units=2)                  # TensorFlow
layer = nn.Linear(in_features=m, out_features=2)        # PyTorch
```

### Nghĩa đen của chữ "ẩn" - <span class="en">What "hidden" literally means</span>

Slide 13 chèn một lớp vào giữa đầu vào và đầu ra. Lớp ẩn tính
`zi = w0,i^(1) + sum_j xj wj,i^(1)`; đầu ra tính
`ŷi = g(w0,i^(2) + sum_j g(zj) wj,i^(2))`. Từ **ẩn** nên được đọc theo
nghĩa đen nhất: **ta không bao giờ quan sát hay giám sát trực tiếp các giá
trị đó**. Dữ liệu huấn luyện chỉ nói `x` là gì và `y` phải là gì; **không
có dòng nào** trong dữ liệu nói lớp giữa nên chứa gì.
<br><span class="en">Slide 13 inserts one layer between input and output.
The hidden layer computes `zi = w0,i^(1) + sum_j xj wj,i^(1)`; the output
computes `ŷi = g(w0,i^(2) + sum_j g(zj) wj,i^(2))`. The word **hidden**
should be read in its most literal sense: **we never observe or supervise
those values directly**. The training data says only what `x` is and what
`y` should be; **no row** of it says what the middle layer ought to
contain.</span>

Đây chính là chỗ mạng nơ-ron khác về bản chất so với mọi mô hình đã học ở
Chapter 3. Trong hồi quy hay cây quyết định, mỗi tham số gắn với một biến
mà con người đã chọn và đặt tên. Trong mạng nơ-ron, các lớp ẩn **tự phát
minh ra biến trung gian của riêng chúng**, và không ai biết trước chúng sẽ
đại diện cho điều gì. Đó vừa là sức mạnh (mạng học được đặc trưng mà con
người không nghĩ ra) vừa là điểm yếu (không giải thích được từng tham số,
xem [[computer-vision-tasks]] về hệ phân tầng học được).
<br><span class="en">This is where a neural network differs in kind from
every model taught in Chapter 3. In a regression or a decision tree, each
parameter attaches to a variable a human chose and named. In a neural
network the hidden layers **invent their own intermediate variables**, and
nobody knows in advance what they will stand for. That is both the
strength (the network learns features a human would not have thought of)
and the weakness (individual parameters cannot be interpreted - see
[[computer-vision-tasks]] on the learned hierarchy).</span>

### Chiều sâu không cần cơ chế mới - <span class="en">Depth needs no new mechanism</span>

Điểm đáng chú ý nhất ở slide 14 là **nó không giới thiệu bất kỳ khái niệm
mới nào**. Công thức của lớp thứ `k` giống hệt công thức của lớp thứ nhất,
chỉ khác ở chỗ đầu vào của nó là đầu ra đã kích hoạt của lớp trước. Chiều
sâu, do đó, là việc **lặp lại cùng một phép** chứ không phải thêm máy móc
mới - và đó là lý do cùng một thuật toán huấn luyện ([[backpropagation]])
chạy được cho mạng 2 lớp lẫn mạng 200 lớp.
<br><span class="en">The most notable thing about slide 14 is that **it
introduces no new concept at all**. Layer `k`'s formula is identical to
the first layer's, differing only in that its input is the previous
layer's activated output. Depth is therefore **the same operation
repeated**, not new machinery - which is why one training algorithm
([[backpropagation]]) works for a 2-layer network and a 200-layer network
alike.</span>

```python
model = tf.keras.Sequential([Dense(n), Dense(2)])
```

### Vì sao lớp Dense không dùng được cho ảnh - <span class="en">Why dense layers fail on images</span>

Slide 71 nêu hai lý do, và cả hai đáng nhớ vì chúng là động cơ sinh ra
mạng tích chập. Thứ nhất, muốn đưa ảnh hai chiều vào lớp Dense thì phải
**trải phẳng** nó thành một véc-tơ, và khi đó **thông tin không gian mất
sạch** - các điểm ảnh kề nhau bị đối xử không khác gì các điểm ảnh cách
xa nhau. Thứ hai, số tham số nổ ra: một ảnh `1080 × 1080 × 3` cho **3.5
triệu đầu vào cho mỗi nơ-ron**. Cách chữa là giới hạn mỗi nơ-ron vào một
mảng cục bộ và dùng chung trọng số, tức [[convolution-operation]].
<br><span class="en">Slide 71 gives two reasons, both worth remembering
because they are what gave rise to convolutional networks. First, feeding
a 2D image into a dense layer requires **flattening** it into a vector,
and then **all spatial information is lost** - neighbouring pixels are
treated no differently from distant ones. Second, the parameter count
explodes: a `1080 × 1080 × 3` image gives **3.5 million inputs per
neuron**. The fix is to restrict each neuron to a local patch and share
weights, i.e. [[convolution-operation]].</span>

Lớp Dense không bị loại bỏ hẳn, chỉ bị đẩy về cuối. Slide 85 cho thấy
trong một CNN phân loại, nửa đầu (tích chập và gộp) làm **học đặc trưng**,
rồi đặc trưng được **trải phẳng** và đưa vào **một lớp kết nối đầy đủ** để
phân loại. Lớp Dense vẫn là nơi ra quyết định cuối cùng; nó chỉ không còn
là nơi đọc điểm ảnh thô.
<br><span class="en">Dense layers are not abolished, only pushed to the
end. Slide 85 shows that in a classification CNN the first half
(convolution and pooling) does **feature learning**, then the features are
**flattened** and fed into **one fully connected layer** to classify. The
dense layer is still where the final decision is made; it is merely no
longer where raw pixels are read.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 12 (perceptron nhiều đầu ra, lớp
Dense là một phép nhân ma trận), 13 (mạng một lớp ẩn, nghĩa của chữ
"ẩn"), 14 (mạng sâu, công thức lớp thứ `k`, `W = {W^(1), W^(2), ...}`), 30
(tổng kết: xếp perceptron thành lớp Dense, lớp ẩn và chiều sâu), 37 (mạng
truyền thẳng áp dụng độc lập từng bước thời gian là không đủ), 71 (lớp
Dense làm mất cấu trúc không gian, 3.5 triệu đầu vào mỗi nơ-ron), 85 (lớp
kết nối đầy đủ ở nửa phân loại của CNN).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 12 (the
multi-output perceptron, a dense layer as one matrix multiply), 13 (the
single hidden layer network, what "hidden" means), 14 (the deep network,
layer `k`'s formula, `W = {W^(1), W^(2), ...}`), 30 (the summary: stacking
perceptrons into dense layers, hidden layers and depth), 37 (a
feed-forward net applied independently per time step is not enough), 71
(dense layers losing spatial structure, 3.5 million inputs per neuron), 85
(the fully connected layer in a CNN's classification half).</span>

## Liên quan - <span class="en">Related</span>

- [[perceptron]] - đơn vị được xếp song song để tạo ra một lớp.
  <br><span class="en">[[perceptron]] - the unit placed in parallel to
  form a layer.</span>
- [[activation-functions]] - không có nó thì mọi chiều sâu sụp về một lớp
  tuyến tính.
  <br><span class="en">[[activation-functions]] - without it all depth
  collapses into one linear layer.</span>
- [[backpropagation]] - cách gradient đi xuyên qua nhiều lớp để cập nhật
  `W^(1)`, `W^(2)`, ...
  <br><span class="en">[[backpropagation]] - how gradients traverse many
  layers to update `W^(1)`, `W^(2)`, ...</span>
- [[dropout-and-early-stopping]] - dropout tắt ngẫu nhiên các đơn vị
  trong lớp ẩn.
  <br><span class="en">[[dropout-and-early-stopping]] - dropout randomly
  switches off units in a hidden layer.</span>
- [[convolutional-neural-network]] - kiến trúc sinh ra vì lớp Dense không
  dùng được cho ảnh.
  <br><span class="en">[[convolutional-neural-network]] - the architecture
  that exists because dense layers fail on images.</span>
- [[recurrent-neural-network]] - cùng lớp ấy, thêm một trạng thái mang
  qua các bước thời gian.
  <br><span class="en">[[recurrent-neural-network]] - the same layer plus
  a state carried across time steps.</span>
