---
type: source
title: "Chapter 8 (K31) — Học sâu"
title_en: "Chapter 8 (K31) — Deep Learning"
tags: [chapter-8, k31, machine-learning, deep-learning, neural-networks]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter08_Deeplearning.pdf"
---

## Metadata

- **Khóa**: K31 (2025). **Giảng viên**: [[tran-thi-tuan-anh]]. **Số
  slide**: 19 (cùng độ dài với [[chapter05-ridge-lasso]]).
  <br><span class="en">**Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 19 (same length as
  [[chapter05-ridge-lasso]]).</span>
- **Vị trí trong môn**: chương cuối — không thuộc hẳn học có giám sát hay
  không giám sát (xem [[machine-learning-overview]]), mà là 1 **kỹ
  thuật** (kiến trúc mô hình) có thể áp dụng cho cả hai, khép lại lộ
  trình Chapter 1→8 của môn học.
  <br><span class="en">**Position in the course**: the final chapter —
  not strictly supervised or unsupervised (see
  [[machine-learning-overview]]), but a **technique** (model
  architecture) applicable to both, closing out the Chapter 1→8
  roadmap.</span>

## Tóm tắt - <span class="en">Summary</span>

- 4 phần: (1) lịch sử học sâu, (2) học sâu là gì + kiến trúc perceptron,
  (3) cách thuật toán học sâu "học" — lan truyền tiến/lùi, (4) 3 loại
  mạng nơ-ron — ANN/RNN/CNN.
  <br><span class="en">4 parts: (1) history of deep learning, (2) what is
  deep learning + perceptron architecture, (3) how deep learning
  algorithms "learn" — forward/backward propagation, (4) 3 types of
  neural networks — ANN/RNN/CNN.</span>

## Nội dung chính - <span class="en">Key content</span>

### 1. Lịch sử học sâu (slide 3) - <span class="en">1. History of deep learning (slide 3)</span>

- **3 làn sóng phát triển** (nói chung): học sâu được biết đến với tên
  **điều khiển học (cybernetics)** trong thập niên 1940-1960; được biết
  đến với tên **chủ nghĩa kết nối (connectionism)** trong thập niên
  1980-1990; sự hồi sinh hiện tại dưới tên gọi **học sâu (deep
  learning)**, bắt đầu từ 2006.
  <br><span class="en">**3 waves of development** (broadly): known as
  **cybernetics** in the 1940s-1960s; known as **connectionism** in the
  1980s-1990s; the current resurgence under the name **deep learning**,
  beginning in 2006.</span>

### 2. Học sâu là gì (slide 4-7) - <span class="en">2. What is deep learning (slides 4-7)</span>

- **Định nghĩa** (slide 4): học sâu là 1 nhánh của học máy, hướng tới mô
  phỏng bộ não con người. Trong học sâu, không cần lập trình tường minh
  mọi thứ. Khái niệm học sâu không mới — nhưng đang thịnh hành vì trước
  đây chưa có đủ sức mạnh xử lý và đủ dữ liệu.
  <br><span class="en">**Definition** (slide 4): deep learning is a
  branch of machine learning that mimics the human brain. In deep
  learning, we don't need to explicitly program everything. The concept
  isn't new — but it's on the hype now because earlier we lacked the
  processing power and data.</span>
- **Perceptron** (slide 6-7): cấu trúc cơ bản trong mạng nơ-ron, mô
  phỏng theo nơ-ron trong tế bào não. Mỗi tín hiệu đầu vào được gán 1
  trọng số; trọng số này nhân với giá trị đầu vào, nơ-ron lưu tổng có
  trọng số của mọi biến đầu vào; sau đó 1 **hàm kích hoạt (activation
  function)** được áp dụng lên tổng có trọng số, cho ra tín hiệu đầu ra
  của nơ-ron.
  <br><span class="en">**Perceptron** (slides 6-7): the basic structure
  in a neural network, modelled after neurons in cells. Each input signal
  is assigned a weight; this weight is multiplied by the input value, the
  neuron stores the weighted sum of all inputs; an **activation
  function** is then applied to the weighted sum, producing the neuron's
  output signal.</span>

### 3. Học sâu "học" như thế nào (slide 8-12) - <span class="en">3. How deep learning algorithms "learn" (slides 8-12)</span>

- **Lan truyền tiến (Forward Propagation)** và **Lan truyền lùi
  (Backward Propagation)** (slide 8-12): 2 cơ chế cốt lõi để mạng nơ-ron
  học. Các slide minh họa bằng hình ảnh và 1 ví dụ, không có công thức
  toán học chi tiết trong phần trích xuất được — chỉ nêu tên 2 khái niệm
  và minh họa qua hình.
  <br><span class="en">**Forward Propagation** and **Backward
  Propagation** (slides 8-12): the 2 core mechanisms for a neural network
  to learn. The slides illustrate via images and an example, with no
  detailed math formulas in the extractable text — only the 2 concept
  names and image illustrations.</span>

### 4. Các loại học sâu (slide 13-18) - <span class="en">4. Types of deep learning (slides 13-18)</span>

- **3 loại mạng nơ-ron quan trọng** (slide 13): Mạng nơ-ron nhân tạo
  (Artificial Neural Networks — ANN), Mạng nơ-ron tích chập (Convolution
  Neural Networks — CNN), Mạng nơ-ron hồi quy (Recurrent Neural Networks
  — RNN).
  <br><span class="en">**3 important types of neural networks** (slide
  13): Artificial Neural Networks (ANN), Convolution Neural Networks
  (CNN), Recurrent Neural Networks (RNN).</span>
- **ANN** (slide 14): 1 perceptron (hay nơ-ron) đơn lẻ có thể hình dung
  như 1 Hồi quy Logistic (Logistic Regression). ANN là 1 nhóm nhiều
  nơ-ron perceptron ở mỗi tầng. ANN gồm 3 tầng — Đầu vào (Input), Ẩn
  (Hidden), Đầu ra (Output). Tầng đầu vào nhận dữ liệu, tầng ẩn xử lý dữ
  liệu, tầng đầu ra tạo kết quả. Về bản chất, mỗi tầng cố học 1 số trọng
  số nhất định.
  <br><span class="en">**ANN** (slide 14): a single perceptron (or
  neuron) can be imagined as a Logistic Regression. ANN is a group of
  multiple perceptron neurons at each layer. ANN consists of 3 layers —
  Input, Hidden, Output. The input layer accepts inputs, the hidden layer
  processes them, the output layer produces the result. Essentially, each
  layer tries to learn certain weights.</span>
- **RNN** (slide 15-16): có kết nối hồi quy (recurrent connection) trên
  trạng thái ẩn. Ràng buộc vòng lặp này đảm bảo thông tin tuần tự được
  nắm bắt trong dữ liệu đầu vào. RNN chia sẻ tham số qua các bước thời
  gian khác nhau — gọi là **chia sẻ tham số (Parameter Sharing)** — dẫn
  tới ít tham số cần huấn luyện hơn và giảm chi phí tính toán. 3 ma trận
  trọng số chính: U, W, V.
  <br><span class="en">**RNN** (slides 15-16): has a recurrent connection
  on the hidden state. This looping constraint ensures sequential
  information is captured in the input data. RNNs share parameters
  across time steps — known as **Parameter Sharing** — resulting in
  fewer parameters to train and lower computational cost. 3 main weight
  matrices: U, W, V.</span>
- **CNN** (slide 17-18): đang rất được ưa chuộng trong cộng đồng học sâu
  hiện nay. Khối xây dựng cơ bản của CNN là bộ lọc (filters, còn gọi là
  kernel). Kernel dùng để trích xuất các đặc trưng liên quan từ đầu vào
  qua phép toán tích chập (convolution). CNN tự động học các bộ lọc mà
  không cần chỉ định tường minh. Các bộ lọc này giúp trích xuất đúng và
  đủ đặc trưng liên quan từ dữ liệu đầu vào.
  <br><span class="en">**CNN** (slides 17-18): all the rage in the deep
  learning community right now. CNN's building blocks are filters (a.k.a.
  kernels). Kernels extract relevant features from the input via the
  convolution operation. CNN learns the filters automatically without
  explicit specification. These filters help extract the right and
  relevant features from the input data.</span>

## Khoảng trống / lưu ý - <span class="en">Gaps / notes</span>

- **Logistic Regression** được liên hệ trực tiếp (ANN ≈ nhiều Logistic
  Regression ghép lại — slide 14) và đã được liệt kê tên ở
  [[classification]] (Chapter 3, trong danh sách 5 thuật toán phổ biến),
  nhưng chưa từng có nguồn giảng chi tiết thuật toán này trong 8 chương
  của `raw/` — không đủ cơ sở để tạo trang khái niệm riêng
  `logistic-regression`.
  <br><span class="en">**Logistic Regression** is directly referenced
  (ANN ≈ several Logistic Regressions combined — slide 14) and already
  named in [[classification]] (Chapter 3, among the 5 popular
  algorithms), but no source in the 8 `raw/` chapters ever teaches this
  algorithm in detail — insufficient basis to create a dedicated
  `logistic-regression` concept page.</span>
- Lan truyền lùi (Backward Propagation) không có công thức toán trong
  slide (chỉ có hình minh họa) — nếu cần chi tiết đạo hàm/gradient descent
  đầy đủ, cần nguồn khác ngoài `raw/`.
  <br><span class="en">Backward Propagation has no math formula in the
  slide (only illustration) — full derivative/gradient descent detail
  would need a source outside `raw/`.</span>

## Liên kết - <span class="en">Links</span>

- [[deep-learning-neural-networks]] — trang khái niệm tổng hợp:
  perceptron, lan truyền tiến/lùi, ANN/CNN/RNN.
  <br><span class="en">[[deep-learning-neural-networks]] — the synthesis
  concept page: perceptron, forward/backward propagation, ANN/CNN/RNN.</span>
- [[big-data]] — lý do học sâu chỉ bùng nổ gần đây (đủ compute + đủ dữ
  liệu), nối lại đúng động lực đã nêu ở Chapter 1.
  <br><span class="en">[[big-data]] — the reason deep learning only
  boomed recently (enough compute + enough data), tying back to the
  drivers named in Chapter 1.</span>
- [[machine-learning-overview]] — mốc thời gian học sâu nhất quán với
  lịch sử AI/ML đã nêu ở Chapter 3.
  <br><span class="en">[[machine-learning-overview]] — the deep learning
  timeline is consistent with the AI/ML history from Chapter 3.</span>
- [[classification]] — liên hệ ANN/perceptron ≈ Logistic Regression.
  <br><span class="en">[[classification]] — the ANN/perceptron ≈ Logistic
  Regression connection.</span>
- [[linear-regression]] — so sánh về bản chất "học tham số từ dữ liệu"
  (OLS vs lan truyền tiến/lùi).
  <br><span class="en">[[linear-regression]] — comparing the nature of
  "learning parameters from data" (OLS vs forward/backward
  propagation).</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter08_Deeplearning.pdf`, slide
1-19.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter08_Deeplearning.pdf`, slides 1-19.</span>
