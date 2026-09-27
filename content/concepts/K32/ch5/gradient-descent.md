---
type: concept
title: "Hạ gradient và mặt cảnh quan mất mát"
title_en: "Gradient Descent and the Loss Landscape"
tags: [chapter-5, k32, deep-learning, gradient-descent, optimization]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Hạ gradient (gradient descent) là thuật toán tìm bộ trọng số làm mất mát
nhỏ nhất:
`W* = argmin_W (1/n) sum_i L(f(x^(i); W), y^(i)) = argmin_W J(W)`. Nó làm
việc đó bằng cách **đi ngược hướng gradient** từng bước nhỏ một:
<br><span class="en">Gradient descent is the algorithm that finds the
weights minimising the loss:
`W* = argmin_W (1/n) sum_i L(f(x^(i); W), y^(i)) = argmin_W J(W)`. It does
so by **walking against the gradient** in small steps:</span>

```
W  <-  W  -  eta · ∂J(W)/∂W
```

trong đó `eta` là **tốc độ học**. Cách hình dung được slide 20 nêu thẳng:
**mất mát là một mặt cảnh quan trên không gian trọng số**, và ta đang tìm
điểm thấp nhất của mặt cảnh quan ấy.
<br><span class="en">where `eta` is the **learning rate**. The mental
picture is given explicitly on slide 20: **the loss is a landscape over
weight space**, and we are looking for its lowest point.</span>

## Diễn giải - <span class="en">Explanation</span>

### Bốn bước, và vì sao dấu trừ - <span class="en">Four steps, and why the minus sign</span>

Slide 20 chia thuật toán thành bốn bước: (1) chọn ngẫu nhiên một điểm khởi
đầu `(w0, w1)`; (2) tính gradient `∂J(W)/∂W`, tức **hướng dốc lên nhất**;
(3) bước một bước nhỏ theo hướng **ngược lại**; (4) lặp tới khi hội tụ.
<br><span class="en">Slide 20 breaks the algorithm into four steps: (1)
randomly pick a starting `(w0, w1)`; (2) compute the gradient
`∂J(W)/∂W`, the **direction of steepest ascent**; (3) take a small step
in the **opposite** direction; (4) repeat until convergence.</span>

Dấu trừ trong công thức cập nhật nằm ở bước 3 và là chi tiết dễ bị bỏ qua
nhưng đáng hiểu rõ: gradient của một hàm **luôn chỉ về hướng hàm tăng
nhanh nhất**, nên muốn giảm hàm thì phải đi theo hướng âm của nó. Toàn bộ
việc "học" của một mạng nơ-ron gói trong đúng dòng ấy.
<br><span class="en">The minus sign in the update rule comes from step 3
and is a detail easy to skip but worth understanding: a function's
gradient **always points in the direction of fastest increase**, so to
decrease the function you must move in its negative direction. All the
"learning" a neural network does is packed into that one line.</span>

### Thuật toán đầy đủ, năm dòng - <span class="en">The full algorithm, in five lines</span>

Slide 21 viết gọn:
<br><span class="en">Slide 21 writes it compactly:</span>

1. Khởi tạo trọng số ngẫu nhiên theo `N(0, sigma^2)`.
   <br><span class="en">Initialise the weights randomly from
   `N(0, sigma^2)`.</span>
2. Lặp tới khi hội tụ:
   <br><span class="en">Loop until convergence:</span>
3. Tính gradient `∂J(W)/∂W`.
   <br><span class="en">Compute the gradient `∂J(W)/∂W`.</span>
4. Cập nhật `W <- W - eta · ∂J(W)/∂W`.
   <br><span class="en">Update `W <- W - eta · ∂J(W)/∂W`.</span>
5. Trả về trọng số.
   <br><span class="en">Return the weights.</span>

Bước 1 đáng chú ý: **trọng số được khởi tạo ngẫu nhiên**, không phải bằng
0. Nếu khởi tạo tất cả bằng 0 thì mọi nơ-ron trong cùng một lớp sẽ nhận
gradient giống nhau và mãi giữ giá trị giống nhau - cả lớp sụp thành một
nơ-ron duy nhất. Slide 50 nhắc lại rằng **cách khởi tạo trọng số** là một
trong ba cách chữa gradient tiêu biến, nên lựa chọn ở bước 1 không phải
chi tiết kỹ thuật vụn vặt.
<br><span class="en">Step 1 is worth noting: **the weights are initialised
randomly**, not at zero. Initialise them all at zero and every neuron in a
layer receives the same gradient and keeps the same value forever - the
whole layer collapses into one neuron. Slide 50 notes that **weight
initialisation** is one of three remedies for vanishing gradients, so the
choice in step 1 is no minor technicality.</span>

### Không có nghiệm hiển, khác hẳn Chapter 3 và 4 - <span class="en">No closed form, unlike Chapters 3 and 4</span>

Đây là điểm khác biệt về bản chất so với hai chương trước. Hồi quy tuyến
tính có nghiệm OLS hiển; hồi quy Ridge có nghiệm hiển; PCA có nghiệm qua
trị riêng của ma trận hiệp phương sai. Mạng nơ-ron **không có nghiệm hiển
nào** - `J(W)` là hàm phi tuyến, không lồi, nhiều cực tiểu địa phương, nên
cách duy nhất là **dò từng bước**. Hệ quả thực hành: hai lần huấn luyện
cùng một mạng trên cùng dữ liệu có thể cho hai bộ trọng số khác nhau, vì
điểm khởi đầu ngẫu nhiên khác nhau.
<br><span class="en">This is a difference in kind from the two previous
chapters. Linear regression has a closed-form OLS solution; ridge
regression has one; PCA has one via the eigenvalues of the covariance
matrix. A neural network has **none** - `J(W)` is non-linear, non-convex
and riddled with local minima, so the only route is **to feel your way
step by step**. The practical consequence: training the same network twice
on the same data can give two different weight sets, because the random
starting point differs.</span>

### Mặt cảnh quan thật thì gồ ghề - <span class="en">Real landscapes are rugged</span>

Slide 24 nói thẳng rằng mặt cảnh quan mất mát trong thực tế **gồ ghề,
nhiều cực tiểu địa phương và có vách dốc**, rồi quy mọi khó khăn về một
câu hỏi duy nhất: đặt `eta` bằng bao nhiêu? Hình dung "quả bóng lăn xuống
thung lũng" là đúng về nguyên lý nhưng gây nhầm về độ khó, vì thung lũng
thật có hàng triệu chiều và đầy hố nhỏ. Cách xử lý được bàn ở
[[learning-rate-and-optimizers]] và [[mini-batch-gradient-descent]].
<br><span class="en">Slide 24 states that real loss landscapes are
**rugged, with many local minima and steep cliffs**, then reduces every
difficulty to one question: what should `eta` be? The "ball rolling down a
valley" picture is right in principle but misleading about difficulty,
because the real valley has millions of dimensions and is full of small
pits. How this is handled is covered in
[[learning-rate-and-optimizers]] and
[[mini-batch-gradient-descent]].</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 20 (bài toán `argmin`, mặt cảnh
quan mất mát, bốn bước), 21 (thuật toán năm dòng, khởi tạo
`N(0, sigma^2)`, tốc độ học `eta`), 2 (mục tiêu bài: "minimise it with
gradient descent"), 5 (hạ gradient ngẫu nhiên có từ 1952), 24 (mặt cảnh
quan gồ ghề và câu hỏi về `eta`), 48 (lan truyền ngược là bước 2 "dịch
chuyển tham số để cực tiểu hóa mất mát").
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 20 (the
`argmin` problem, the loss landscape, the four steps), 21 (the five-line
algorithm, `N(0, sigma^2)` initialisation, the learning rate `eta`), 2
(the lecture's goal: "minimise it with gradient descent"), 5 (stochastic
gradient descent dating to 1952), 24 (the rugged landscape and the `eta`
question), 48 (backpropagation as step 2, "shift parameters in order to
minimise loss").</span>

## Liên quan - <span class="en">Related</span>

- [[loss-functions-and-empirical-risk]] - `J(W)` là thứ thuật toán này cực
  tiểu hóa.
  <br><span class="en">[[loss-functions-and-empirical-risk]] - `J(W)` is
  what this algorithm minimises.</span>
- [[backpropagation]] - cách tính `∂J(W)/∂W` ở bước 3.
  <br><span class="en">[[backpropagation]] - how `∂J(W)/∂W` at step 3 is
  computed.</span>
- [[learning-rate-and-optimizers]] - chọn `eta`, và các bộ tối ưu tự thích
  nghi.
  <br><span class="en">[[learning-rate-and-optimizers]] - choosing `eta`,
  and the adaptive optimisers.</span>
- [[mini-batch-gradient-descent]] - tính gradient trên bao nhiêu điểm mỗi
  bước.
  <br><span class="en">[[mini-batch-gradient-descent]] - how many points
  the gradient is computed on per step.</span>
- [[backpropagation-through-time]] - cùng thuật toán, áp cho một đồ thị
  trải theo thời gian.
  <br><span class="en">[[backpropagation-through-time]] - the same
  algorithm applied to a graph unrolled over time.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] - đối chiếu: Ridge có
  nghiệm hiển, mạng nơ-ron không có.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] - for
  contrast: ridge has a closed form, a neural network does not.</span>
