---
type: concept
title: "Lan truyền ngược"
title_en: "Backpropagation"
tags: [chapter-5, k32, deep-learning, backpropagation, chain-rule]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Lan truyền ngược là cách tính `∂J(W)/∂w` cho **mọi** trọng số `w` trong
mạng, bằng cách áp quy tắc chuỗi từ đầu ra đi ngược về đầu vào. Câu hỏi nó
trả lời được slide 22 phát biểu cụ thể: *một thay đổi nhỏ ở một trọng số
ảnh hưởng thế nào tới mất mát cuối cùng?*
<br><span class="en">Backpropagation is how `∂J(W)/∂w` is computed for
**every** weight `w` in a network, by applying the chain rule from the
output back towards the input. The question it answers is stated concretely
on slide 22: *how does a small change in one weight affect the final
loss?*</span>

## Diễn giải - <span class="en">Explanation</span>

### Quy tắc chuỗi, viết ra cho một mạng hai trọng số - <span class="en">The chain rule, written out for a two-weight network</span>

Với chuỗi tính `x -> z1 -> ŷ -> J(W)` qua hai trọng số `w1`, `w2`:
<br><span class="en">For the chain `x -> z1 -> ŷ -> J(W)` through weights
`w1` and `w2`:</span>

```
∂J(W)/∂w2 = (∂J(W)/∂ŷ) · (∂ŷ/∂w2)
∂J(W)/∂w1 = (∂J(W)/∂ŷ) · (∂ŷ/∂z1) · (∂z1/∂w1)
```

Trọng số `w2` nằm gần đầu ra nên chuỗi của nó có **hai** thừa số; trọng số
`w1` nằm sâu hơn một bước nên chuỗi của nó có **ba**. Quy luật tổng quát:
trọng số càng xa đầu ra thì chuỗi càng dài.
<br><span class="en">Weight `w2` sits near the output so its chain has
**two** factors; `w1` sits one step deeper so its chain has **three**. The
general rule: the further a weight is from the output, the longer its
chain.</span>

### Điểm cần thấy: thừa số được dùng lại - <span class="en">The thing to see: factors get reused</span>

Thừa số `∂J/∂ŷ` **xuất hiện ở cả hai dòng**. Đó không phải trùng hợp: mọi
trọng số trong mạng đều dùng chung thừa số ấy, và mọi trọng số ở lớp thứ
`k` đều dùng chung các thừa số đã tính cho lớp `k + 1`. Chính việc **dùng
lại** ấy là lý do gradient "chảy ngược" qua các lớp, và là lý do thuật
toán mang tên lan truyền ngược thay vì "tính đạo hàm từng trọng số".
<br><span class="en">The factor `∂J/∂ŷ` **appears on both lines**. That is
no coincidence: every weight in the network shares that factor, and every
weight in layer `k` shares the factors already computed for layer `k + 1`.
It is that **reuse** that makes gradients "flow backwards" through the
layers, and why the algorithm is named backpropagation rather than
"differentiate each weight".</span>

Hệ quả về chi phí tính toán rất lớn, dù slide không nêu con số: nếu phải
tính đạo hàm từng trọng số một cách độc lập thì chi phí tăng theo số trọng
số nhân với độ sâu; nhờ dùng lại, một lượt đi ngược duy nhất cho gradient
của **toàn bộ** mạng. Đó là lý do một mạng hàng triệu tham số vẫn huấn
luyện được.
<br><span class="en">The consequence for cost is large, though the slide
gives no figure: computing each weight's derivative independently would
cost the number of weights times the depth; thanks to reuse, a single
backward pass yields gradients for the **whole** network. That is why a
network with millions of parameters can be trained at all.</span>

### Hai lượt đi, và điều các thư viện làm thay - <span class="en">Two passes, and what libraries do for you</span>

Huấn luyện một bước gồm **lượt tiến** (đưa dữ liệu qua mạng để tính `ŷ` và
`J`) rồi **lượt lùi** (lan truyền ngược để lấy gradient), sau đó
[[gradient-descent]] cập nhật trọng số. Slide 22 kết bằng một câu ngắn có
ý nghĩa thực hành lớn: **các thư viện làm việc này tự động**. Người dùng
TensorFlow hay PyTorch không viết quy tắc chuỗi bằng tay; họ định nghĩa
mạng và hàm mất mát, còn cơ chế vi phân tự động dựng lấy đồ thị và đi
ngược. Nhưng hiểu cơ chế vẫn cần thiết, vì hai chế độ hỏng ở slide 50 -
gradient bùng nổ và gradient tiêu biến - là hệ quả trực tiếp của việc nhân
các thừa số này với nhau.
<br><span class="en">One training step comprises a **forward pass** (push
the data through the network to get `ŷ` and `J`) then a **backward pass**
(backpropagate to obtain gradients), after which
[[gradient-descent]] updates the weights. Slide 22 closes with a short
line of large practical import: **frameworks do this automatically**.
TensorFlow and PyTorch users do not write the chain rule by hand; they
define the network and the loss, and automatic differentiation builds the
graph and walks it backwards. Understanding the mechanism still matters,
because the two failure modes on slide 50 - exploding and vanishing
gradients - follow directly from multiplying these factors
together.</span>

### Ở RNN, "lớp" chính là bước thời gian - <span class="en">In an RNN the "layers" are time steps</span>

Slide 48 tóm tắt lan truyền ngược thành hai bước (lấy đạo hàm của mất mát
theo từng tham số; dịch chuyển tham số để cực tiểu hóa mất mát) rồi nêu
điểm mở rộng: **ở mạng hồi tiếp, "lớp" là các bước thời gian**, nên
gradient còn phải chảy ngược qua thời gian. Đó là
[[backpropagation-through-time]], và chuỗi thừa số ở đó dài bằng độ dài
chuỗi dữ liệu - lý do gradient tiêu biến là vấn đề nghiêm trọng hơn nhiều
ở RNN so với mạng truyền thẳng.
<br><span class="en">Slide 48 summarises backpropagation in two steps
(take the derivative of the loss with respect to each parameter; shift the
parameters to minimise the loss) then states the extension: **in a
recurrent network the "layers" are time steps**, so the gradient must also
flow back through time. That is
[[backpropagation-through-time]], where the chain of factors is as long as
the data sequence - which is why vanishing gradients are a far more serious
problem in RNNs than in feed-forward networks.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 22 (câu hỏi, hai công thức quy tắc
chuỗi, việc dùng lại `∂J/∂ŷ`, các thư viện làm tự động), 5 (lan truyền
ngược và MLP có từ 1986), 30 (tổng kết: tối ưu qua lan truyền ngược), 48
(nhắc lại ở dạng hai bước, và điểm mở rộng cho RNN), 49 (lượt tiến và lượt
lùi trên đồ thị trải theo thời gian), 50 (nhân nhiều thừa số `Whh` sinh ra
hai chế độ hỏng).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 22 (the
question, the two chain-rule formulas, the reuse of `∂J/∂ŷ`, frameworks
doing it automatically), 5 (backpropagation and the MLP dating to 1986), 30
(the summary: optimisation through backpropagation), 48 (restated in two
steps, plus the RNN extension), 49 (forward and backward passes on the
unrolled graph), 50 (multiplying many `Whh` factors producing the two
failure modes).</span>

## Liên quan - <span class="en">Related</span>

- [[gradient-descent]] - dùng gradient mà lan truyền ngược tính ra.
  <br><span class="en">[[gradient-descent]] - consumes the gradients
  backpropagation produces.</span>
- [[loss-functions-and-empirical-risk]] - `J(W)` là điểm bắt đầu của chuỗi
  đạo hàm.
  <br><span class="en">[[loss-functions-and-empirical-risk]] - `J(W)` is
  where the derivative chain starts.</span>
- [[activation-functions]] - đạo hàm `g'(z)` là một thừa số trong chuỗi.
  <br><span class="en">[[activation-functions]] - the derivative `g'(z)` is
  a factor in the chain.</span>
- [[dense-layers-and-deep-networks]] - chuỗi đạo hàm dài bằng số lớp.
  <br><span class="en">[[dense-layers-and-deep-networks]] - the chain is as
  long as the number of layers.</span>
- [[backpropagation-through-time]] - cùng thuật toán, với "lớp" là bước
  thời gian.
  <br><span class="en">[[backpropagation-through-time]] - the same
  algorithm with time steps as layers.</span>
