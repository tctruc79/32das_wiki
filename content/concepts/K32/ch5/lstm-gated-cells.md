---
type: concept
title: "Ô có cổng và LSTM"
title_en: "Gated Cells and LSTMs"
tags: [chapter-5, k32, deep-learning, lstm, gated-cell, rnn]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Slide 52 nêu ý tưởng trong một câu: **dùng các cổng để thêm hoặc bỏ thông
tin một cách có chọn lọc bên trong mỗi đơn vị hồi tiếp**. Mạng **LSTM** (Long
Short-Term Memory) dựa trên một ô có cổng như vậy để theo dõi thông tin qua
nhiều bước thời gian, nhờ đó **làm nhẹ bài toán gradient tiêu biến**.
<br><span class="en">Slide 52 states the idea in one sentence: **use gates to
selectively add or remove information within each recurrent unit**. An
**LSTM** (Long Short-Term Memory) network relies on such a gated cell to
track information across many time steps, thereby **mitigating the
vanishing-gradient problem**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Một cổng là gì, nói bằng hai phép toán - <span class="en">What a gate is, in two operations</span>

Slide 52 giải thích cơ chế cổng bằng đúng hai thành phần, và cách giải thích
này gọn tới mức nên nhớ nguyên văn:
<br><span class="en">Slide 52 explains the gating mechanism with exactly two
components, and the explanation is compact enough to remember
verbatim:</span>

1. **Một lớp mạng nơ-ron sigmoid** cho ra các số trong khoảng `(0, 1)`.
   <br><span class="en">**A sigmoid neural net layer** outputs numbers in
   `(0, 1)`.</span>
2. **Một phép nhân từng phần tử** với các số đó.
   <br><span class="en">**A pointwise multiplication** by those
   numbers.</span>

Ghép lại: nhân một giá trị với một số trong `(0, 1)` tức là **cho lọt qua từ
0% tới 100% lượng thông tin**. Cổng đóng hoàn toàn khi số bằng 0 (không gì
lọt qua), mở hoàn toàn khi bằng 1 (mọi thứ lọt qua), và mở một phần ở giữa.
Điểm quyết định: **mức lọt ấy được học** - cổng không phải một quy tắc do
người đặt mà là một lớp nơ-ron có trọng số riêng, được huấn luyện cùng phần
còn lại của mạng. Mạng tự học lấy khi nào nên nhớ và khi nào nên quên.
<br><span class="en">Put together: multiplying a value by a number in
`(0, 1)` lets **between 0% and 100% of the information through**. The gate is
fully closed at 0 (nothing passes), fully open at 1 (everything passes), and
partly open in between. The decisive point: **that amount is learned** - a
gate is not a human-written rule but a neuron layer with its own weights,
trained alongside the rest of the network. The network works out for itself
when to remember and when to forget.</span>

### Vì sao cổng chữa được gradient tiêu biến - <span class="en">Why gating fixes vanishing gradients</span>

Chương không viết ra phương trình nên không chứng minh điều này, nhưng lập
luận đọc được từ chính hai slide đặt cạnh nhau. Slide 50 nêu gốc rễ vấn đề:
gradient phải đi qua **rất nhiều thừa số `Whh`** nhân với nhau, và mỗi thừa
số nhỏ hơn 1 làm tín hiệu teo lại. Một ô có cổng cho thông tin đi theo một
đường **ít bị nhân vào hơn** - khi cổng học được rằng nên giữ một mẩu thông
tin, nó để mẩu đó đi qua gần như nguyên vẹn qua nhiều bước, nên gradient
tương ứng cũng không bị teo theo cách ấy. Cụm từ slide dùng là "làm nhẹ"
(mitigating), không phải "giải quyết" - và cách chọn từ ấy chính xác: LSTM
giảm vấn đề chứ không xóa bỏ nó.
<br><span class="en">The chapter writes no equations so it does not prove
this, but the argument is readable from two slides placed side by side. Slide
50 gives the root cause: the gradient must pass through **very many `Whh`
factors** multiplied together, and each factor below 1 shrinks the signal. A
gated cell lets information travel a route that is **multiplied into less
often** - when a gate learns that a piece of information should be kept, it
lets that piece pass nearly intact across many steps, so its gradient is not
shrunk the same way. The word the slide uses is "mitigating", not "solving" -
and the choice is exact: LSTMs reduce the problem, they do not abolish
it.</span>

### Điều chương này không nói - <span class="en">What this chapter does not say</span>

Đây là khoảng trống đáng ghi rõ. Slide 52 nêu tên LSTM, giải thích ý tưởng
cổng, và nhắc GRU đúng một lần trong ngoặc - nhưng **không có slide nào viết
ra ba cổng quên/vào/ra, cũng không có phương trình trạng thái ô `ct`**. Ai
cần công thức LSTM đầy đủ phải tìm nguồn khác. Trong phạm vi chương này, thứ
cần trả lời được là: cổng là gì (một lớp sigmoid nhân từng phần tử), vì sao
cần nó (gradient tiêu biến ở slide 50-51), và nó giải quyết được gì (giữ
thông tin qua nhiều bước thời gian).
<br><span class="en">This gap is worth recording clearly. Slide 52 names
LSTMs, explains the gating idea, and mentions GRUs once in brackets - but **no
slide writes out the forget/input/output gates, nor the cell-state equation
for `ct`**. Anyone needing the full LSTM equations must look elsewhere.
Within this chapter, what must be answerable is: what a gate is (a sigmoid
layer multiplied pointwise), why it is needed (the vanishing gradients of
slides 50-51), and what it achieves (retaining information across many time
steps).</span>

### Ba giới hạn mà LSTM **không** chữa được - <span class="en">Three limitations LSTMs do **not** fix</span>

Slide 55 là slide bản lề của cả bài giảng A2: nó nêu ba điểm yếu còn lại của
mọi mô hình hồi tiếp - kể cả có cổng - và mỗi điểm yếu là một lý do tồn tại
của [[self-attention]]:
<br><span class="en">Slide 55 is lecture A2's hinge: it names three remaining
weaknesses of every recurrent model - gated ones included - and each is a
reason [[self-attention]] exists:</span>

| Giới hạn | Nội dung |
|---|---|
| **Nút cổ chai mã hóa** | Toàn bộ lịch sử bị ép vào **một véc-tơ trạng thái duy nhất** |
| **Chậm, không song song hóa được** | Bước `t` **phải chờ** bước `t - 1` xong mới chạy được |
| **Không có trí nhớ dài** | Gradient tiêu biến làm mất các phụ thuộc xa |

Cổng giúp được ở giới hạn thứ ba nhưng **không giúp gì** ở hai giới hạn đầu:
một ô LSTM vẫn có đúng một trạng thái mang qua, và vẫn phải chạy tuần tự từng
bước. Đó là lý do slide 55 kết bằng câu hỏi *"Can we eliminate the need for
recurrence entirely?"* - vấn đề không nằm ở loại ô mà nằm ở **chính cơ chế
hồi tiếp**.
<br><span class="en">Gating helps with the third but **does nothing** for the
first two: an LSTM cell still has exactly one state carried forward, and still
must run sequentially step by step. That is why slide 55 closes with the
question *"Can we eliminate the need for recurrence entirely?"* - the problem
lies not in the kind of cell but in **recurrence itself**.</span>

Slide 55 cũng nêu ba năng lực mong muốn cho mô hình chuỗi lý tưởng - xử lý
được **dòng liên tục**, **song song hóa được**, có **trí nhớ dài** - rồi thử
một phương án thay thế và bác bỏ ngay: đưa tất cả vào một mạng kết nối đầy đủ
thì đúng là bỏ được hồi tiếp, nhưng **không mở rộng được, mất thứ tự, và vẫn
không có trí nhớ dài**. Ý tưởng đúng nằm ở dòng cuối: **xác định và chú ý tới
phần quan trọng**.
<br><span class="en">Slide 55 also names three desired capabilities for an
ideal sequence model - handling a **continuous stream**, being
**parallelisable**, having **long memory** - then tries one alternative and
rejects it at once: feeding everything into a dense network does remove
recurrence, but it is **not scalable, loses order, and still has no long
memory**. The right idea is on the last line: **identify and attend to what's
important**.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 52 (ý tưởng cổng, lớp sigmoid và phép
nhân từng phần tử, LSTM, GRU trong ngoặc, cụm "làm nhẹ"), 50 (cách chữa thứ
ba cho gradient tiêu biến là đổi kiến trúc sang ô có cổng), 51 (vấn đề phụ
thuộc dài hạn mà cổng sinh ra để giải), 55 (ba giới hạn còn lại, ba năng lực
mong muốn, phương án dense bị bác bỏ), 62 (tổng kết: ô có cổng kiểu LSTM là
một trong hai cách chữa).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 52 (the gating
idea, the sigmoid layer and pointwise multiply, LSTMs, GRUs in brackets, the
word "mitigating"), 50 (the third remedy for vanishing gradients being a
gated architecture), 51 (the long-term dependency problem gating exists to
solve), 55 (the three remaining limitations, the three desired capabilities,
the rejected dense option), 62 (the summary: LSTM-style gated cells as one of
the two remedies).</span>

## Liên quan - <span class="en">Related</span>

- [[backpropagation-through-time]] - vấn đề mà cổng sinh ra để làm nhẹ.
  <br><span class="en">[[backpropagation-through-time]] - the problem gating
  exists to mitigate.</span>
- [[recurrent-neural-network]] - ô mà LSTM thay thế.
  <br><span class="en">[[recurrent-neural-network]] - the cell LSTMs
  replace.</span>
- [[activation-functions]] - cổng là một lớp sigmoid, dùng đúng miền giá trị
  `(0, 1)` của nó.
  <br><span class="en">[[activation-functions]] - a gate is a sigmoid layer,
  using exactly its `(0, 1)` range.</span>
- [[self-attention]] - phương án giải cả ba giới hạn mà cổng không giải được.
  <br><span class="en">[[self-attention]] - the option that addresses all
  three limitations gating cannot.</span>
- [[sequence-modeling-design-criteria]] - cổng nhắm vào tiêu chí 2; hai giới
  hạn đầu thuộc tiêu chí khác.
  <br><span class="en">[[sequence-modeling-design-criteria]] - gating targets
  criterion 2; the first two limitations belong to other criteria.</span>
