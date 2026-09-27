---
type: concept
title: "Phép tích chập và bộ lọc"
title_en: "The Convolution Operation and Filters"
tags: [chapter-5, k32, deep-learning, convolution, filter, feature-map, computer-vision]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Tích chập là phép **đặt một bộ lọc lên một mảng của ảnh, nhân từng phần tử
tương ứng, rồi cộng các tích lại** (slide 76). Trượt bộ lọc ấy qua mọi mảng
của ảnh được một **bản đồ đặc trưng**. Slide 73 nêu ba nguyên tắc của phép
này:
<br><span class="en">A convolution **places a filter on a patch of the image,
multiplies element-wise, and adds the products** (slide 76). Sliding that
filter over every patch of the image yields a **feature map**. Slide 73 states
the operation's three principles:</span>

1. Áp một bộ trọng số, tức **một bộ lọc**, để trích đặc trưng **cục bộ**.
   <br><span class="en">Apply a set of weights, a **filter**, to extract
   **local** features.</span>
2. Dùng **nhiều bộ lọc** để trích các đặc trưng khác nhau.
   <br><span class="en">Use **multiple filters** to extract different
   features.</span>
3. **Dùng chung tham số** của mỗi bộ lọc trên toàn không gian ảnh.
   <br><span class="en">**Share** each filter's parameters spatially.</span>

## Diễn giải - <span class="en">Explanation</span>

### Bài toán mà tích chập sinh ra để giải - <span class="en">The problem convolution exists to solve</span>

Slide 75 dựng bài toán bằng một câu nói vui mà chính xác: ảnh được biểu diễn
thành ma trận giá trị điểm ảnh (`+1` trắng, `-1` đen), **và máy tính thì hiểu
theo nghĩa đen**. Ta muốn phân loại một chữ X là chữ X **kể cả khi nó bị
dịch, thu nhỏ, xoay hay biến dạng** - trong khi so sánh ma trận với ma trận
thì hai ảnh ấy khác nhau hoàn toàn.
<br><span class="en">Slide 75 sets up the problem with a line that is funny
and exact: the image is a matrix of pixel values (`+1` white, `-1` black),
**and computers are literal**. We want to classify an X as an X **even when
shifted, shrunk, rotated or deformed** - whereas matrix-to-matrix comparison
makes the two images entirely different.</span>

Lời giải được nêu ngay và là nguyên tắc nền của cả bài giảng: hai ảnh **cùng
chia sẻ các mẫu cục bộ** - một đường chéo đi xuống phải, một đường chéo đi
xuống trái, và một chỗ giao nhau ở giữa. Nguyên tắc: **phát hiện các bộ phận,
đừng phát hiện tổng thể**.
<br><span class="en">The answer is given at once and is the lecture's founding
principle: both images **share the same local patterns** - a diagonal going
down-right, a diagonal going down-left, and a central crossing. The principle:
**detect the parts, not the whole**.</span>

### Con số 9: cách một bộ lọc "phát hiện" đặc trưng - <span class="en">The number 9: how a filter "detects" a feature</span>

Slide 76 cho ba bộ lọc `3 × 3`, mỗi bộ bắt một đặc trưng của chữ X: đường
chéo xuống phải `[1 -1 -1; -1 1 -1; -1 -1 1]`, dấu chéo ở giữa
`[1 -1 1; -1 1 -1; 1 -1 1]`, đường chéo xuống trái
`[-1 -1 1; -1 1 -1; 1 -1 -1]`.
<br><span class="en">Slide 76 gives three `3 × 3` filters, each catching one
feature of an X: the down-right diagonal `[1 -1 -1; -1 1 -1; -1 -1 1]`, the
central cross `[1 -1 1; -1 1 -1; 1 -1 1]`, the down-left diagonal
`[-1 -1 1; -1 1 -1; 1 -1 -1]`.</span>

Con số cần nhớ: trên mảng khớp hoàn hảo của một chữ X, **mọi tích đều bằng
+1 nên tổng bằng 9** - khớp tuyệt đối; ở chỗ khác tổng nhỏ hơn. Đó chính là
cách một bộ lọc phát hiện đặc trưng: **bằng một con số lớn**. Không có phép so
sánh hay điều kiện `if` nào - chỉ có một tổng, và tổng càng lớn thì mảng càng
giống đặc trưng mà bộ lọc tìm.
<br><span class="en">The number to remember: on a matching patch of an X
**every product is +1 so the sum is 9** - a perfect match; elsewhere the sum
is smaller. That is exactly how a filter detects a feature: **with a large
number**. There is no comparison and no `if` - only a sum, and the larger the
sum the more the patch resembles the feature the filter is
looking for.</span>

### Ví dụ tính tay đầy đủ - <span class="en">A fully worked example</span>

Slide 77 làm trọn một phép tích chập với ảnh `5 × 5` và bộ lọc `3 × 3`:
<br><span class="en">Slide 77 carries out a complete convolution with a
`5 × 5` image and a `3 × 3` filter:</span>

```
 1 1 1 0 0                          4 3 4
 0 1 1 1 0      1 0 1               2 4 3
 0 0 1 1 1  ⊛   0 1 0      =        2 3 4
 0 0 1 1 0      1 0 1
 0 1 1 0 0     bộ lọc          bản đồ đặc trưng
    ảnh                         (feature map)
```

Mảng trên-trái cho
`1·1 + 1·0 + 1·1 + 0·0 + 1·1 + 1·0 + 0·1 + 0·0 + 1·1 = 4` - đó là giá trị
thứ nhất của bản đồ đặc trưng. Trượt từng điểm ảnh một (**bước trượt bằng
1**) trên ảnh `5 × 5` với bộ lọc `3 × 3` cho ra bản đồ đặc trưng `3 × 3`.
Quan hệ kích thước đáng nhớ: ảnh `n × n` với bộ lọc `f × f`, bước trượt 1, cho
bản đồ `(n - f + 1) × (n - f + 1)` - tức **tích chập làm ảnh co lại**, và đó
là một trong hai cách giảm chiều trong CNN (cách kia là gộp).
<br><span class="en">The top-left patch gives
`1·1 + 1·0 + 1·1 + 0·0 + 1·1 + 1·0 + 0·1 + 0·0 + 1·1 = 4` - the feature map's
first entry. Sliding one pixel at a time (**stride 1**) over a `5 × 5` image
with a `3 × 3` filter gives a `3 × 3` feature map. The size relation is worth
remembering: an `n × n` image with an `f × f` filter at stride 1 gives an
`(n - f + 1) × (n - f + 1)` map - i.e. **convolution shrinks the image**, and
that is one of the two ways dimensions are reduced in a CNN (the other being
pooling).</span>

### Bộ lọc quyết định đặc trưng nào được trích - <span class="en">The filter decides which feature is extracted</span>

Slide 78 đưa ba bộ lọc cổ điển để thấy rõ điều đó:
<br><span class="en">Slide 78 gives three classical filters to show
this:</span>

| Bộ lọc | Ma trận | Tác dụng |
|---|---|---|
| Làm nét | `[0 -1 0; -1 5 -1; 0 -1 0]` | Đẩy mạnh điểm ảnh trung tâm so với các điểm lân cận |
| Phát hiện cạnh | `[0 1 0; 1 -4 1; 0 1 0]` | Chỉ phản ứng ở chỗ cường độ thay đổi; vùng phẳng cho 0 |
| Phát hiện cạnh mạnh | `[-1 -2 -1; 0 0 0; 1 2 1]` | Bộ lọc kiểu Sobel, nhấn các cạnh ngang |

Hai bộ lọc giữa và cuối đáng để ý về mặt cấu tạo: **tổng các phần tử của
chúng bằng 0**. Đó là lý do "vùng phẳng cho 0" - nếu mọi điểm ảnh trong mảng
đều bằng nhau thì các hệ số dương và âm triệt tiêu nhau, nên bộ lọc chỉ phản
ứng ở chỗ có **thay đổi**. Ngược lại, bộ lọc làm nét có tổng bằng 1 nên giữ
được độ sáng chung của ảnh.
<br><span class="en">The second and third filters are worth noting
structurally: **their entries sum to zero**. That is why "flat regions give
0" - if every pixel in the patch is equal, the positive and negative
coefficients cancel, so the filter responds only where there is **change**. The
sharpening filter, by contrast, sums to 1 and so preserves the image's overall
brightness.</span>

Và câu chốt quan trọng nhất của slide: trong một CNN, **các giá trị trong
những bộ lọc này không do người thiết kế - chúng được học từ dữ liệu**. Ba ma
trận trên chỉ là minh họa cho việc bộ lọc làm được gì; mạng sẽ tự tìm ra bộ
lọc nào hữu ích cho bài toán của nó. Đây chính là chỗ tích chập khác với xử lý
ảnh cổ điển, nơi các bộ lọc như Sobel được người chọn sẵn.
<br><span class="en">And the slide's most important closing line: in a CNN
**the values in these filters are not hand-designed - they are learned from
data**. The three matrices above merely illustrate what a filter can do; the
network works out which filters are useful for its problem. This is exactly
where convolution departs from classical image processing, in which filters
like Sobel's are chosen by a human.</span>

### Ba nguyên tắc và ba bài toán chúng giải - <span class="en">The three principles and the three problems they solve</span>

Ba nguyên tắc ở slide 73 không phải danh sách rời rạc mà mỗi nguyên tắc nhắm
vào một vấn đề cụ thể của [[dense-layers-and-deep-networks]] đã nêu ở slide
71:
<br><span class="en">The three principles on slide 73 are not a loose list;
each targets one specific problem of
[[dense-layers-and-deep-networks]] as set out on slide 71:</span>

| Nguyên tắc | Bài toán nó giải |
|---|---|
| Bộ lọc cục bộ | Giữ được **cấu trúc không gian** - nơ-ron chỉ nhìn một vùng, nên vị trí có nghĩa |
| Nhiều bộ lọc | Một bộ lọc chỉ bắt một đặc trưng; cần nhiều để mô tả ảnh |
| Dùng chung tham số | Giảm số tham số từ hàng triệu xuống **16 trọng số cho một bộ lọc `4 × 4`**, và làm đặc trưng nhận ra được ở **mọi vị trí** |

Nguyên tắc thứ ba đáng suy nghĩ thêm: dùng chung trọng số không chỉ tiết kiệm
mà còn **mã hóa một giả định về thế giới** - rằng một cạnh ở góc trên-trái vẫn
là cạnh khi nó xuất hiện ở góc dưới-phải. Giả định ấy đúng với ảnh, và đó là
lý do tích chập thắng ở thị giác máy tính nhưng không phải công cụ mặc định
cho mọi loại dữ liệu.
<br><span class="en">The third principle deserves further thought: weight
sharing is not only economical, it **encodes an assumption about the world** -
that an edge in the top-left corner is still an edge when it appears in the
bottom-right. That assumption holds for images, which is why convolution wins
in computer vision but is not the default tool for every data type.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 73 (định nghĩa phép "chia mảng", bộ
lọc `4 × 4` với 16 trọng số, dịch 2 điểm ảnh, ba nguyên tắc), 75 (bài toán chữ
X, `+1`/`-1`, "phát hiện các bộ phận"), 76 (ba bộ lọc `3 × 3`, định nghĩa
chính xác phép tích chập, con số 9), 77 (ví dụ `5 × 5` với bộ lọc `3 × 3`, phép
tính cho ra 4, bản đồ đặc trưng `3 × 3`), 78 (ba bộ lọc cổ điển và câu chốt
"chúng được học từ dữ liệu"), 72 (ý tưởng nối mảng và cửa sổ trượt), 81 (công
thức nơ-ron tích chập).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 73 (the "patchy"
operation defined, a `4 × 4` filter with 16 weights, shifting by 2 pixels, the
three principles), 75 (the X problem, `+1`/`-1`, "detect the parts"), 76 (three
`3 × 3` filters, the precise definition, the number 9), 77 (the `5 × 5` example
with a `3 × 3` filter, the calculation giving 4, the `3 × 3` feature map), 78
(three classical filters and the closing "they are learned from data"), 72 (the
patch-connection idea and the sliding window), 81 (the convolutional neuron's
formula).</span>

## Liên quan - <span class="en">Related</span>

- [[convolutional-neural-network]] - kiến trúc xếp phép này cùng ReLU và gộp.
  <br><span class="en">[[convolutional-neural-network]] - the architecture
  stacking this with ReLU and pooling.</span>
- [[dense-layers-and-deep-networks]] - ba vấn đề mà ba nguyên tắc tích chập
  nhắm vào.
  <br><span class="en">[[dense-layers-and-deep-networks]] - the problems the
  three convolution principles target.</span>
- [[perceptron]] - một nơ-ron tích chập chính là perceptron bị giới hạn vào một
  mảng.
  <br><span class="en">[[perceptron]] - a convolutional neuron is a perceptron
  restricted to a patch.</span>
- [[computer-vision-tasks]] - vì sao đặc trưng thủ công thất bại, và ảnh là ma
  trận số.
  <br><span class="en">[[computer-vision-tasks]] - why hand-engineered features
  fail, and images as number matrices.</span>
