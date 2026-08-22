---
type: concept
title: "Học sâu & Mạng nơ-ron"
title_en: "Deep Learning & Neural Networks"
tags: [chapter-8, k31, machine-learning, deep-learning, neural-networks]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Học sâu là 1 nhánh của học máy dùng mạng nơ-ron nhiều tầng, mô phỏng theo
cách bộ não con người xử lý thông tin, để tự động học đặc trưng từ dữ
liệu thô mà không cần lập trình tường minh.
<br><span class="en">Deep learning is a machine learning branch using
multi-layer neural networks, modelled after how the human brain processes
information, to automatically learn features from raw data without
explicit programming.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Lịch sử**: 3 làn sóng — điều khiển học (cybernetics, 1940-1960), chủ
  nghĩa kết nối (connectionism, 1980-1990), và học sâu hiện đại (từ
  2006). Khái niệm không mới nhưng bùng nổ gần đây nhờ đủ sức mạnh xử lý
  và đủ dữ liệu (xem [[big-data]]).
  <br><span class="en">**History**: 3 waves — cybernetics (1940s-1960s),
  connectionism (1980s-1990s), and modern deep learning (from 2006). The
  concept isn't new but boomed recently thanks to enough processing power
  and data (see [[big-data]]).</span>
- **Perceptron**: đơn vị cơ bản, mô phỏng theo nơ-ron sinh học. Mỗi đầu
  vào có 1 trọng số; nơ-ron tính tổng có trọng số của mọi đầu vào, rồi áp
  dụng 1 hàm kích hoạt để tạo tín hiệu đầu ra. 1 perceptron đơn lẻ có thể
  hình dung như 1 mô hình Logistic Regression.
  <br><span class="en">**Perceptron**: the basic unit, modelled after a
  biological neuron. Each input has a weight; the neuron computes the
  weighted sum of all inputs, then applies an activation function to
  produce the output signal. A single perceptron can be imagined as a
  Logistic Regression model.</span>
- **Cách học**: **Lan truyền tiến (Forward Propagation)** — tín hiệu đi
  từ đầu vào qua các tầng để tạo dự đoán; **Lan truyền lùi (Backward
  Propagation)** — sai số được truyền ngược lại để cập nhật trọng số. Cả
  2 cơ chế lặp lại nhiều lần để mạng "học" (slide gốc không có công thức
  toán chi tiết, chỉ minh họa bằng hình).
  <br><span class="en">**How it learns**: **Forward Propagation** —
  signal flows from input through the layers to produce a prediction;
  **Backward Propagation** — error is propagated back to update weights.
  Both repeat over many iterations for the network to "learn" (the
  original slide has no detailed math formulas, only illustrations).</span>
- **3 loại mạng nơ-ron chính**:
  <br><span class="en">**3 main neural network types**:</span>
  - **ANN (Artificial Neural Network)** — nhóm nhiều perceptron xếp
    thành 3 tầng: Đầu vào, Ẩn, Đầu ra. Mỗi tầng học 1 tập trọng số.
    <br><span class="en">**ANN** — a group of perceptrons arranged in 3
    layers: Input, Hidden, Output. Each layer learns a set of
    weights.</span>
  - **RNN (Recurrent Neural Network)** — có kết nối hồi quy trên trạng
    thái ẩn để nắm bắt thông tin tuần tự; chia sẻ tham số qua các bước
    thời gian (3 ma trận trọng số U, W, V), giúp giảm số tham số cần
    huấn luyện.
    <br><span class="en">**RNN** — has a recurrent connection on the
    hidden state to capture sequential information; shares parameters
    across time steps (3 weight matrices U, W, V), reducing the number
    of parameters to train.</span>
  - **CNN (Convolutional Neural Network)** — dùng bộ lọc (filters/
    kernels) học tự động qua phép tích chập để trích xuất đặc trưng liên
    quan từ dữ liệu đầu vào (đặc biệt phổ biến cho ảnh).
    <br><span class="en">**CNN** — uses automatically learned filters
    (kernels) via convolution to extract relevant features from input
    data (especially popular for images).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter08-deep-learning]] — lịch sử, perceptron, lan truyền tiến/lùi,
  3 loại mạng nơ-ron.
  <br><span class="en">[[chapter08-deep-learning]] — history, perceptron,
  forward/backward propagation, the 3 network types.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[big-data]] — động lực khiến học sâu khả thi (đủ dữ liệu + đủ sức
  mạnh xử lý).
  <br><span class="en">[[big-data]] — the driver that made deep learning
  feasible (enough data + enough processing power).</span>
- [[classification]] — perceptron đơn lẻ tương đương về bản chất với
  Logistic Regression, 1 thuật toán classification.
  <br><span class="en">[[classification]] — a single perceptron is
  essentially equivalent to Logistic Regression, a classification
  algorithm.</span>
- [[linear-regression]] — cả hai đều là bài toán "học tham số từ dữ
  liệu", chỉ khác thuật toán tối ưu (OLS vs lan truyền tiến/lùi).
  <br><span class="en">[[linear-regression]] — both are "learn parameters
  from data" problems, differing only in the optimization algorithm (OLS
  vs forward/backward propagation).</span>
