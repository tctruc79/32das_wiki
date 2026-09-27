---
type: concept
title: "Tiêu chí thiết kế mô hình chuỗi"
title_en: "Sequence Modeling Design Criteria"
tags: [chapter-5, k32, deep-learning, sequence-modeling, rnn]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Slide 44 đặt ra **bốn điều một mô hình chuỗi bắt buộc phải làm được**, và
dùng chúng làm thước đo để đánh giá mọi kiến trúc xử lý chuỗi:
<br><span class="en">Slide 44 sets out **four things a sequence model must
be able to do**, and uses them as the yardstick for every sequence
architecture:</span>

1. Xử lý được chuỗi **có độ dài thay đổi**.
   <br><span class="en">Handle **variable-length** sequences.</span>
2. Theo dõi được **phụ thuộc dài hạn**.
   <br><span class="en">Track **long-term dependencies**.</span>
3. Giữ được thông tin về **thứ tự**.
   <br><span class="en">Maintain information about **order**.</span>
4. **Dùng chung tham số** trên cả chuỗi.
   <br><span class="en">**Share parameters** across the sequence.</span>

## Diễn giải - <span class="en">Explanation</span>

### Vì sao cần một khung riêng cho chuỗi - <span class="en">Why sequences need a framework of their own</span>

Slide 34 dựng lý do bằng một minh họa rất gọn: nhìn **một** ảnh tĩnh của
quả bóng thì không cách nào biết nó sẽ bay đi đâu; nhìn **một chuỗi** các
vị trí trước đó thì câu trả lời hiển nhiên. Kết luận tổng quát: chuỗi có ở
khắp nơi - âm thanh, văn bản, giá cổ phiếu, video, DNA, tín hiệu ECG, dữ
liệu khí hậu, chuyển động - và trong mọi trường hợp, **thứ tự của dữ liệu
mang thông tin mà một mẫu đơn lẻ không thể mang**.
<br><span class="en">Slide 34 builds the reason with a very compact
illustration: from **one** still image of a ball there is no way to know
where it will go; from **a sequence** of its past positions the answer is
obvious. The general conclusion: sequences are everywhere - audio, text,
stock prices, video, DNA, ECG signals, climate data, motion - and in every
case **the order of the data carries information a single sample
cannot**.</span>

### Bốn dạng bài toán chuỗi - <span class="en">Four shapes of sequence problem</span>

Slide 35 phân loại theo số đầu vào và số đầu ra:
<br><span class="en">Slide 35 classifies by the number of inputs and
outputs:</span>

| Dạng | Tên bài toán | Ví dụ |
|---|---|---|
| Một tới một | Phân loại nhị phân | "Liệu tôi có qua môn này không?" |
| Nhiều tới một | Phân loại cảm xúc | Một dòng tweet → tích cực / tiêu cực |
| Một tới nhiều | Chú thích ảnh | Ảnh → "A baseball player throws a ball." |
| Nhiều tới nhiều | Dịch máy | Câu → câu |

Cách đọc sơ đồ được ghi rõ: vòng tròn xanh là đầu vào, vòng tròn cam là
đầu ra, hộp là ô hồi tiếp, và mũi tên giữa các hộp **truyền trạng thái dọc
theo chuỗi**. Điểm đáng chú ý: dạng "một tới một" chính là bài toán của bài
giảng A1 - tức **mạng thường chỉ là trường hợp riêng đơn giản nhất** của
khung này, chứ không phải một loại mô hình khác hẳn.
<br><span class="en">How to read the diagram is spelled out: blue circles
are inputs, orange circles outputs, boxes are recurrent cells, and arrows
between boxes **pass state along the sequence**. Worth noting: the "one to
one" shape is exactly lecture A1's problem - the plain network is **the
simplest special case** of this framework, not a different kind of model
altogether.</span>

### Ba tiêu chí đầu, minh họa bằng câu thật - <span class="en">The first three criteria, illustrated with real sentences</span>

Slide 46 cho đúng một ví dụ cho mỗi tiêu chí, và cả ba nên nhớ nguyên văn
vì chúng là cách nhanh nhất để giải thích vấn đề trong một câu trả lời thi.
<br><span class="en">Slide 46 gives exactly one example per criterion, and
all three are worth remembering verbatim because they are the fastest way
to explain the problem in an exam answer.</span>

**Độ dài thay đổi**: *"The food was great"* (4 từ), *"We visited a
restaurant for lunch"* (6 từ), *"We were hungry but cleaned the house
before eating"* (9 từ). Mô hình phải nhận được cả ba, nên không thể thiết
kế nó với một số ô đầu vào cố định.
<br><span class="en">**Variable length**: *"The food was great"* (4 words),
*"We visited a restaurant for lunch"* (6), *"We were hungry but cleaned the
house before eating"* (9). The model must accept all three, so it cannot be
designed with a fixed number of input slots.</span>

**Phụ thuộc dài hạn**: *"France is where I grew up, but I now live in
Boston. I speak fluent ___."* Từ cần điền phụ thuộc vào một mẩu thông tin
nằm rất xa ở đầu đoạn, và [[backpropagation-through-time]] chỉ ra vì sao
RNN thường thất bại đúng ở loại câu này.
<br><span class="en">**Long-term dependencies**: *"France is where I grew
up, but I now live in Boston. I speak fluent ___."* The missing word
depends on a piece of information far back at the start, and
[[backpropagation-through-time]] shows why RNNs typically fail on exactly
this kind of sentence.</span>

**Thứ tự**: *"The food was good, not bad at all."* so với *"The food was
bad, not good at all."* **Cùng bộ từ, nghĩa trái ngược.** Ví dụ này sắc vì
nó bác bỏ ngay mọi mô hình coi câu như một túi từ: nếu chỉ đếm từ xuất hiện
thì hai câu này giống nhau tuyệt đối.
<br><span class="en">**Order**: *"The food was good, not bad at all."*
versus *"The food was bad, not good at all."* **The same words, opposite
meanings.** The example is sharp because it immediately refutes any model
treating a sentence as a bag of words: counting word occurrences makes the
two identical.</span>

**Dùng chung tham số**: cùng một `W` ở mọi bước có nghĩa mô hình áp dụng
được ở **bất kỳ vị trí nào, với bất kỳ độ dài chuỗi nào**. Tiêu chí thứ tư
này thực ra là điều kiện để tiêu chí thứ nhất khả thi: chỉ khi tham số dùng
chung thì một mô hình mới xử lý được chuỗi dài 3 và chuỗi dài 300 bằng cùng
một bộ trọng số.
<br><span class="en">**Parameter sharing**: the same `W` at every step
means the model applies **at any position, for any sequence length**. This
fourth criterion is in fact what makes the first feasible: only with shared
parameters can one model process a 3-step and a 300-step sequence with the
same weights.</span>

### Dùng bốn tiêu chí làm thước đo - <span class="en">Using the four criteria as a yardstick</span>

Giá trị lớn nhất của danh sách này là nó được dùng lại để **loại** các
phương án. Slide 44 khẳng định RNN đáp ứng cả bốn. Nhưng slide 55 quay lại
chính danh sách ấy để chỉ ra RNN vẫn hụt ở tiêu chí 2 trong thực tế (không
có trí nhớ dài vì gradient tiêu biến), và slide 55 cũng dùng nó để bác bỏ
phương án "đưa tất cả vào một mạng kết nối đầy đủ": phương án đó bỏ được
hồi tiếp nhưng **mất thứ tự** (tiêu chí 3), **không mở rộng được** (tiêu
chí 1), và vẫn **không có trí nhớ dài** (tiêu chí 2). Cuối cùng
[[self-attention]] được đưa ra như phương án đáp ứng được cả bốn mà không
cần hồi tiếp.
<br><span class="en">The list's greatest value is that it gets reused to
**eliminate** candidates. Slide 44 asserts RNNs meet all four. But slide 55
returns to that same list to show RNNs still fall short on criterion 2 in
practice (no long memory, because gradients vanish), and slide 55 also uses
it to reject the "feed everything into a dense network" option: that
removes recurrence but **loses order** (criterion 3), is **not scalable**
(criterion 1), and still has **no long memory** (criterion 2). Finally
[[self-attention]] is offered as the option that meets all four without
recurrence.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 44 (bốn tiêu chí, khẳng định RNN
đáp ứng cả bốn, ví dụ "took my cat for a ___"), 46 (ba ví dụ câu cho ba
tiêu chí đầu, và lập luận cho tiêu chí thứ tư), 34 (quả bóng: vì sao cần
chuỗi), 35 (bốn dạng bài toán chuỗi), 37 (mạng truyền thẳng theo từng bước
vi phạm tiêu chí 2 và 3), 55 (dùng bốn tiêu chí để bác bỏ mạng kết nối đầy
đủ và chỉ ra giới hạn của RNN).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 44 (the four
criteria, the claim that RNNs meet all four, the "took my cat for a ___"
example), 46 (three example sentences for the first three criteria, plus the
argument for the fourth), 34 (the ball: why sequences need this), 35 (the
four sequence shapes), 37 (a per-step feed-forward net violating criteria 2
and 3), 55 (using the four criteria to reject the dense network and expose
the RNN's limits).</span>

## Liên quan - <span class="en">Related</span>

- [[recurrent-neural-network]] - kiến trúc được thiết kế để đáp ứng cả bốn
  tiêu chí.
  <br><span class="en">[[recurrent-neural-network]] - the architecture
  designed to meet all four criteria.</span>
- [[word-embedding]] - bước bắt buộc trước khi bất kỳ tiêu chí nào có nghĩa:
  biến từ thành số.
  <br><span class="en">[[word-embedding]] - the mandatory step before any
  criterion means anything: turning words into numbers.</span>
- [[backpropagation-through-time]] - vì sao tiêu chí 2 khó đạt trong thực
  tế.
  <br><span class="en">[[backpropagation-through-time]] - why criterion 2 is
  hard to meet in practice.</span>
- [[lstm-gated-cells]] - cách chữa cho tiêu chí 2, và ba giới hạn còn lại.
  <br><span class="en">[[lstm-gated-cells]] - the remedy for criterion 2,
  and the three remaining limits.</span>
- [[self-attention]] - đáp ứng cả bốn tiêu chí mà không cần hồi tiếp.
  <br><span class="en">[[self-attention]] - meets all four criteria without
  recurrence.</span>
- [[dense-layers-and-deep-networks]] - phương án bị bác bỏ ở slide 55.
  <br><span class="en">[[dense-layers-and-deep-networks]] - the option
  rejected on slide 55.</span>
