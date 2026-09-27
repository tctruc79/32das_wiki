---
type: concept
title: "Mạng nơ-ron tích chập (CNN)"
title_en: "Convolutional Neural Networks (CNNs)"
tags: [chapter-5, k32, deep-learning, cnn, pooling, relu, computer-vision]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

CNN là mạng gồm **ba phép toán lặp lại** rồi kết bằng một lớp kết nối đầy đủ
(slide 80):
<br><span class="en">A CNN is a network of **three repeated operations**
closing with a fully connected layer (slide 80):</span>

```
ảnh đầu vào → tích chập (bản đồ đặc trưng) → gộp cực đại → (×N) → kết nối đầy đủ → xác suất các lớp
```

1. **Tích chập**: áp các bộ lọc để sinh bản đồ đặc trưng.
   <br><span class="en">**Convolution**: apply filters to generate feature
   maps.</span>
2. **Phi tuyến**: thường dùng ReLU.
   <br><span class="en">**Non-linearity**: usually ReLU.</span>
3. **Gộp**: phép giảm mẫu trên từng bản đồ đặc trưng.
   <br><span class="en">**Pooling**: a downsampling operation on each feature
   map.</span>

Và điều được huấn luyện là **trọng số của các bộ lọc trong các lớp tích chập**.
<br><span class="en">And what gets trained is **the weights of the filters in
the convolutional layers**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Lớp tích chập chính là perceptron bị giới hạn - <span class="en">A convolutional layer is a restricted perceptron</span>

Slide 81 là slide gắn bài giảng A3 vào bài giảng A1, và đáng đọc kỹ. Một
nơ-ron ở lớp ẩn làm đúng ba việc: lấy đầu vào từ một mảng, tính **tổng có
trọng số**, rồi cộng một **số hạng chệch**:
<br><span class="en">Slide 81 is the slide bolting lecture A3 onto lecture A1,
and deserves careful reading. A hidden-layer neuron does exactly three things:
take inputs from a patch, compute a **weighted sum**, add a **bias**:</span>

```
sum_{i=1..4} sum_{j=1..4} w_ij · x_{i+p, j+q}  +  b
```

cho nơ-ron `(p, q)` với bộ lọc `4 × 4` có ma trận trọng số `w_ij`. Ba bước
được gọi tên lại: (1) áp một **cửa sổ trọng số**; (2) tính **tổ hợp tuyến
tính**; (3) **kích hoạt bằng hàm phi tuyến**. Câu kết luận nói thẳng: đây
**chính xác là perceptron của bài giảng 1**, chỉ khác hai chỗ - bị giới hạn vào
một mảng cục bộ, và **trọng số được dùng chung cho mọi vị trí**.
<br><span class="en">for neuron `(p, q)` with a `4 × 4` filter whose weight
matrix is `w_ij`. The three steps are named again: (1) apply a **window of
weights**; (2) compute a **linear combination**; (3) **activate with a
non-linear function**. The conclusion says it outright: this is **exactly the
perceptron from Lecture 1**, differing in two respects only - restricted to a
local patch, and with its **weights shared across all positions**.</span>

### Ba tham số hình học - <span class="en">Three geometric parameters</span>

| Khái niệm | Nghĩa |
|---|---|
| Kích thước lớp `h × w × d` | `h`, `w` là hai chiều không gian; `d` là **chiều sâu**, tức **số bộ lọc** |
| **Bước trượt** | Độ dài bước của bộ lọc: cửa sổ dịch bao xa giữa hai mảng |
| **Vùng tiếp nhận** | Các vị trí trong ảnh đầu vào mà một nút có đường nối tới |

```python
tf.keras.layers.Conv2D(filters=d, kernel_size=(h, w), strides=s)
torch.nn.Conv2d(in_channels=3, out_channels=d, kernel_size=(h, w), stride=s)
```

Điểm dễ nhầm đáng ghi lại: **chiều sâu `d` của lớp đầu ra là số bộ lọc**,
không liên quan tới số kênh màu của ảnh đầu vào - trong mã PyTorch,
`in_channels=3` là ba kênh RGB đi vào, còn `out_channels=d` là `d` bản đồ đặc
trưng đi ra. Một lớp có 64 bộ lọc cho ra chiều sâu 64 dù ảnh vào là ảnh xám
một kênh.
<br><span class="en">A confusion worth recording: **the output's depth `d` is
the number of filters**, unrelated to the input image's colour channels - in
the PyTorch line, `in_channels=3` is three RGB channels coming in while
`out_channels=d` is `d` feature maps going out. A layer with 64 filters
produces depth 64 even from a single-channel grayscale image.</span>

**Vùng tiếp nhận** là khái niệm tinh tế nhất trong ba khái niệm trên và giải
thích được vì sao chiều sâu quan trọng: một nơ-ron ở lớp tích chập thứ nhất
chỉ nhìn một mảng nhỏ, nhưng một nơ-ron ở lớp thứ ba nhìn một mảng của các
mảng của các mảng - tức vùng tiếp nhận của nó trên ảnh gốc **rộng ra theo độ
sâu**. Đó là cơ chế cho phép tầng cao "thấy" cả khuôn mặt trong khi tầng thấp
chỉ thấy cạnh.
<br><span class="en">The **receptive field** is the subtlest of the three and
explains why depth matters: a neuron in the first convolutional layer sees only
a small patch, but one in the third sees a patch of patches of patches - its
receptive field on the original image **widens with depth**. That is the
mechanism by which high layers "see" a whole face while low layers see only
edges.</span>

### ReLU và gộp cực đại - <span class="en">ReLU and max pooling</span>

Slide 83 xử lý hai phép còn lại. **ReLU** được áp **sau mỗi phép tích chập**;
đây là phép tính trên từng điểm ảnh, **thay mọi giá trị âm bằng 0**:
`g(z) = max(0, z)`. Bản đồ đặc trưng đầu vào (đen là âm, trắng là dương) trở
thành bản đồ đã chỉnh lưu chỉ còn giá trị không âm.
<br><span class="en">Slide 83 handles the remaining two. **ReLU** is applied
**after every convolution**; it is a pixel-by-pixel operation **replacing all
negative values by zero**: `g(z) = max(0, z)`. The input feature map (black
negative, white positive) becomes a rectified map with only non-negative
values.</span>

**Gộp cực đại** với bộ lọc `2 × 2` và bước trượt 2 - lấy giá trị lớn nhất
trong mỗi ô `2 × 2`:
<br><span class="en">**Max pooling** with `2 × 2` filters and stride 2 - take
the largest value in each `2 × 2` block:</span>

```
 1 1 2 4
 5 6 7 8        6 8
 3 2 1 0   ->   3 4
 1 2 3 4
```

Hai công dụng được nêu rõ: (1) **giảm số chiều**; (2) **bất biến không gian**.
Công dụng thứ hai đáng giải thích thêm vì nó chính là câu trả lời cho bài toán
chữ X bị dịch ở slide 75: nếu một đặc trưng dịch đi một điểm ảnh trong phạm vi
ô `2 × 2` thì **giá trị cực đại không đổi**, nên đầu ra của lớp gộp giữ nguyên.
Mạng do đó nhận ra đặc trưng mà không cần nó nằm đúng vị trí cũ.
<br><span class="en">Two purposes are stated: (1) **reduced dimensionality**;
(2) **spatial invariance**. The second deserves elaboration because it is
precisely the answer to the shifted-X problem of slide 75: if a feature moves
one pixel within a `2 × 2` block, **the maximum does not change**, so the
pooling layer's output is unchanged. The network therefore recognises the
feature without its needing to sit in exactly the same place.</span>

```python
tf.keras.layers.MaxPool2D(pool_size=(2, 2), strides=2)
torch.nn.MaxPool2d(kernel_size=(2, 2), stride=2)
```

### Học biểu diễn: vòng tròn đóng lại - <span class="en">Representation learning: the circle closes</span>

Slide 84 là chỗ chương chứng minh lời hứa của slide 4. Mỗi lớp tích chập xây
trên bản đồ đặc trưng của lớp trước; lớp đầu tiên học các bộ lọc **đơn giản và
tổng quát**, các lớp sâu hơn học **bộ phận rồi tới vật thể hoàn chỉnh**. Kết
quả là đúng ba tầng đã hứa: lớp tích chập 1 cho **cạnh và vệt tối**, lớp 2 cho
**mắt, tai, mũi**, lớp 3 cho **cấu trúc khuôn mặt**. Câu chốt: **đây là hệ phân
tầng của bài giảng 1, nay được hiện thực hóa bằng các bộ lọc học được** (Lee et
al., ICML 2009).
<br><span class="en">Slide 84 is where the chapter proves slide 4's promise.
Each convolutional layer builds on the previous layer's feature maps; the first
learns **simple, generic** filters, deeper ones learn **parts and then whole
objects**. The result is exactly the three promised levels: conv layer 1 gives
**edges and dark spots**, layer 2 **eyes, ears, nose**, layer 3 **facial
structure**. The closing line: **this is the hierarchy from Lecture 1, now
realised by learned filters** (Lee et al., ICML 2009).</span>

### Hai nửa của một CNN phân loại - <span class="en">The two halves of a classification CNN</span>

Slide 85 vẽ đường ống đầy đủ và **cắt nó làm hai nửa có tên riêng**:
<br><span class="en">Slide 85 draws the full pipeline and **cuts it into two
named halves**:</span>

```
INPUT → [CONV + RELU → POOL] → [CONV + RELU → POOL] → FLATTEN → FULLY CONN. → SOFTMAX
        |______________ học đặc trưng ______________|   |______ phân loại ______|
```

Nửa **học đặc trưng** gồm ba việc, đúng ba phép toán ở slide 80: học đặc trưng
bằng tích chập; đưa phi tuyến vào qua hàm kích hoạt (vì dữ liệu thực tế là phi
tuyến); giảm chiều và giữ bất biến không gian bằng gộp. Nửa **phân loại** gồm
ba ý: các lớp tích chập và gộp cho ra **đặc trưng mức cao** của ảnh; một lớp
kết nối đầy đủ dùng các đặc trưng ấy để phân loại; và đầu ra được biểu diễn
thành xác suất bằng **softmax**: `softmax(yi) = e^(yi) / sum_j e^(yj)`.
<br><span class="en">The **feature learning** half does three things, exactly
slide 80's three operations: learn features by convolution; introduce
non-linearity through an activation (real data is non-linear); reduce
dimensions and preserve spatial invariance by pooling. The **classification**
half makes three points: the conv and pool layers output **high-level
features**; a fully connected layer uses them to classify; and the output is
expressed as a probability with the **softmax**:
`softmax(yi) = e^(yi) / sum_j e^(yj)`.</span>

Cách chia hai nửa này là ý quan trọng nhất của cả bài giảng A3 về mặt kiến
trúc, vì nó cho phép **thay nửa sau mà giữ nguyên nửa trước** - xem
[[computer-vision-tasks]] về bốn đầu ra khác nhau gắn trên cùng một xương
sống.
<br><span class="en">This two-half split is lecture A3's most important
architectural idea, because it allows **replacing the second half while keeping
the first** - see [[computer-vision-tasks]] on the four different heads attached
to one backbone.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 80 (ba phép toán, đường ống, mã hai thư
viện, "học trọng số của các bộ lọc"), 81 (công thức nơ-ron tích chập, "chính xác
là perceptron của bài giảng 1"), 82 (kích thước `h × w × d`, bước trượt, vùng
tiếp nhận, `Conv2D`/`Conv2d`), 83 (ReLU sau mỗi tích chập, gộp cực đại `2 × 2`
bước trượt 2, hai công dụng), 84 (ba tầng đặc trưng học được, Lee ICML 2009), 85
(đường ống đầy đủ, hai nửa, softmax), 5 (CNN sâu nhận dạng chữ số có từ 1995),
90 (tổng kết bài A3).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 80 (the three
operations, the pipeline, code in both libraries, "learn the weights of the
filters"), 81 (the convolutional neuron's formula, "exactly the perceptron from
Lecture 1"), 82 (`h × w × d`, stride, receptive field, `Conv2D`/`Conv2d`), 83
(ReLU after every convolution, `2 × 2` max pooling at stride 2, the two
purposes), 84 (the three learned feature levels, Lee ICML 2009), 85 (the full
pipeline, the two halves, the softmax), 5 (deep CNNs for digit recognition
dating to 1995), 90 (the A3 summary).</span>

## Liên quan - <span class="en">Related</span>

- [[convolution-operation]] - phép toán thứ nhất, và ba nguyên tắc của nó.
  <br><span class="en">[[convolution-operation]] - the first operation and its
  three principles.</span>
- [[activation-functions]] - ReLU là phép toán thứ hai; softmax đóng đường ống.
  <br><span class="en">[[activation-functions]] - ReLU is the second operation;
  the softmax closes the pipeline.</span>
- [[perceptron]] - nơ-ron tích chập là perceptron bị giới hạn và dùng chung
  trọng số.
  <br><span class="en">[[perceptron]] - a convolutional neuron is a restricted,
  weight-sharing perceptron.</span>
- [[dense-layers-and-deep-networks]] - lớp kết nối đầy đủ vẫn là nơi ra quyết
  định cuối cùng.
  <br><span class="en">[[dense-layers-and-deep-networks]] - the fully connected
  layer is still where the final decision is made.</span>
- [[computer-vision-tasks]] - bốn đầu ra gắn trên cùng nửa học đặc trưng.
  <br><span class="en">[[computer-vision-tasks]] - four heads attached to the
  same feature-learning half.</span>
- [[self-attention]] - Vision Transformer giải cùng bài toán ảnh bằng công cụ
  của chuỗi.
  <br><span class="en">[[self-attention]] - Vision Transformers solve the same
  image problem with a sequence tool.</span>
- [[pca-k32]] - đối chiếu về giảm chiều: PCA có nghiệm hiển, gộp và bộ lọc học
  được thì không.
  <br><span class="en">[[pca-k32]] - for contrast on dimension reduction: PCA has
  a closed form, pooling and learned filters do not.</span>
