---
type: concept
title: "Khung học có giám sát"
title_en: "The Supervised Learning Framework"
tags: [chapter-3, k32, supervised-learning, foundations]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Học có giám sát là bài toán: cho trước dữ liệu **có nhãn**
{(xᵢ, yᵢ)}ⁿᵢ₌₁, học một hàm f̂ dự đoán y cho các đầu vào x mới. Kiểu của
y quyết định tên bài toán — **y là một loại/phạm trù ⇒ phân loại**;
**y là một con số ⇒ hồi quy**. Đây là khung chung mà toàn bộ Chapter 3
K32 (112 slide) xoay quanh: mọi thuật toán trong chương chỉ là những cách
khác nhau để học đúng hàm f̂ đó.
<br><span class="en">Supervised learning is the problem: given
**labelled** data {(xᵢ, yᵢ)}ⁿᵢ₌₁, learn a function f̂ that predicts y for
new inputs x. The type of y names the problem — **y is a category ⇒
classification**; **y is a number ⇒ regression**. This is the shared
frame the whole of K32's Chapter 3 (112 slides) turns on: every algorithm
in the chapter is just a different way of learning that same f̂.</span>

## Diễn giải - <span class="en">Explanation</span>

Đặt học máy vào bối cảnh lịch sử giúp thấy rõ nó không phải một kỹ thuật
biệt lập mà là điểm đến của một quá trình dài: từ phép thử Turing những
năm 1950 (liệu máy có thể hành xử như thể thông minh), qua thuật ngữ
"trí tuệ nhân tạo" ra đời tại Hội nghị Dartmouth 1956, hệ chuyên gia dựa
trên luật viết tay của thập niên 1980, tới bước ngoặt của thập niên 1990
khi các hệ thống bắt đầu **học từ dữ liệu thay vì được lập trình luật
sẵn** — đây chính là điểm khởi đầu của học máy hiện đại. Học sâu trên dữ
liệu lớn tiếp nối trong thập niên 2000-2010, rồi kiến trúc Transformer từ
2017 dẫn tới các mô hình ngôn ngữ lớn. Điểm mấu chốt xuyên suốt lịch sử
này: ranh giới giữa "thông minh nhân tạo" và "học từ dữ liệu" liên tục
dịch chuyển, nhưng nguyên lý cốt lõi của học có giám sát — học một hàm
từ ví dụ có nhãn — không đổi qua mọi giai đoạn.
<br><span class="en">Placing machine learning in historical context shows
it is not an isolated technique but the destination of a long process:
from the 1950s Turing Test, through the term "artificial intelligence"
coined at the 1956 Dartmouth Conference, hand-coded-rule expert systems
in the 1980s, to the 1990s turning point when systems began **learning
from data instead of following pre-written rules** — the true starting
point of modern machine learning. Deep learning on big data followed in
the 2000s-2010s, then the Transformer architecture from 2017 onward led
to large language models. The thread running through this history: the
boundary of "artificial intelligence" keeps shifting, but supervised
learning's core principle — learning a function from labelled examples —
has not.</span>

Mọi dự án học có giám sát, dù dùng thuật toán nào, đều đi qua đúng 2 giai
đoạn: **huấn luyện** — học hàm f̂ từ một tập dữ liệu đã có nhãn — và **áp
dụng** — kiểm tra hàm đó rồi dùng nó để ra quyết định trên dữ liệu mới.
Điều làm nó "có giám sát" chính xác nằm ở giai đoạn huấn luyện: máy chỉ
học được vì **có con người cung cấp đáp án đúng (nhãn)** cho từng ví dụ.
Một bộ lọc thư rác học được là nhờ có người gắn nhãn *thư sạch*/*thư rác*
cho hàng nghìn email trước đó; một hệ thống nhận diện khuôn mặt trên mạng
xã hội học được là nhờ người dùng tự tay gắn thẻ bạn bè trong ảnh. Cả hai
ví dụ tưởng như khác nhau này thực chất minh họa đúng một cơ chế duy
nhất.
<br><span class="en">Every supervised-learning project, whatever
algorithm it uses, passes through exactly 2 phases: **training** —
learning f̂ from a labelled dataset — and **application** — testing that
function, then using it to decide on new data. What makes it
"supervised" lives precisely in the training phase: the machine only
learns because **a human supplied the correct answer (the label)** for
each example. A spam filter learns because people labelled thousands of
emails *ham*/*spam* beforehand; a social-network face-recognition system
learns because users tagged friends in photos themselves. Two seemingly
different examples, one identical mechanism.</span>

Học có giám sát chỉ là 1 trong 4 loại học máy được phân biệt theo **loại
tín hiệu học** mà thuật toán nhận được:
<br><span class="en">Supervised learning is only 1 of 4 types of machine
learning, distinguished by the **kind of learning signal** the algorithm
receives:</span>

| Loại | Tín hiệu học | Ví dụ nhiệm vụ |
|---|---|---|
| Học có giám sát | Nhãn đúng do con người cung cấp | Phân loại (đầu ra rời rạc), hồi quy (đầu ra là số) |
| Học không giám sát | Không có nhãn | Phân cụm, giảm chiều, luật kết hợp |
| Học tăng cường | Phần thưởng/hình phạt từ môi trường | Tác nhân học qua tương tác |
| Học tự giám sát | Nhãn tự sinh ra từ chính cấu trúc dữ liệu | Dự đoán từ kế tiếp — cách tiền huấn luyện các mô hình ngôn ngữ lớn |

Học tự giám sát là bổ sung đáng chú ý nhất của khung 2026 — nó giải thích
tại sao các mô hình ngôn ngữ lớn hiện nay không cần hàng tỷ nhãn do con
người gắn tay: nhãn được tạo ra tự động bằng cách che một phần văn bản
rồi yêu cầu mô hình đoán lại, biến một bài toán tưởng như không giám sát
thành có giám sát mà không tốn công gắn nhãn thủ công.
<br><span class="en">Self-supervised learning is the most notable
addition here: it explains why today's large language models don't need
billions of human-labelled examples — labels are generated automatically
by masking part of the text and asking the model to predict it, turning
what looks like an unsupervised problem into a supervised one without
manual labelling effort.</span>

Đọc phần còn lại của chương đòi hỏi thuộc lòng một bộ thuật ngữ nền:
**quan sát** là 1 hàng dữ liệu (xᵢ, yᵢ); **đặc trưng** (còn gọi là đầu
vào, biến dự báo, biến, chiều, thuộc tính) là 1 cột dữ liệu xⱼ; **nhãn**
(mục tiêu, đầu ra) là đại lượng cần dự đoán y; **mô hình** là hàm đã học
f̂. Phân biệt quan trọng nhất trong bộ thuật ngữ này là giữa **tham số**
— các con số (như βⱼ) được thuật toán **ước lượng từ dữ liệu** — và
**siêu tham số** — các lựa chọn (như K trong KNN, λ trong Ridge/Lasso,
độ sâu cây) mà **người dùng chọn trước khi huấn luyện**, thường bằng
kiểm định chéo. Nhầm lẫn 2 khái niệm này là lỗi khái niệm phổ biến nhất
khi mới học máy: tham số là thứ mô hình tự tìm ra; siêu tham số là thứ
người phân tích phải quyết định.
<br><span class="en">Reading the rest of the chapter requires a
foundational vocabulary: **observation** = one row (xᵢ, yᵢ); **feature**
(input/predictor/variable/dimension/attribute) = one column xⱼ; **label**
(target/output) = what we predict, y; **model** = the learned function f̂.
The most important distinction in this vocabulary is between
**parameters** — numbers (like βⱼ) the algorithm **estimates from data**
— and **hyperparameters** — choices (like K in KNN, λ in Ridge/Lasso,
tree depth) the **user selects before training**, usually via
cross-validation. Confusing the two is the most common conceptual error
for beginners: a parameter is something the model discovers on its own;
a hyperparameter is something the analyst must decide.</span>

Cuối cùng, khung này không chỉ áp dụng cho phân loại — nó là nền tảng
chung cho **cả** phân loại lẫn hồi quy, chỉ khác nhau ở kiểu của y (loại
⇒ phân loại; số ⇒ hồi quy). Mọi thứ về chia tập huấn luyện/kiểm tra, kiểm
định chéo và quá khớp/chưa khớp áp dụng nguyên vẹn cho cả hai nhánh —
chính vì lẽ đó mà chương này gộp phân loại và hồi quy vào một mạch trình
bày duy nhất thay vì tách thành các chương riêng biệt.
<br><span class="en">Finally, this frame is not only for classification
— it is the shared foundation for **both** classification and
regression, differing only in the type of y (category ⇒ classification;
number ⇒ regression). Everything about train/test splitting,
cross-validation, and over/underfitting applies unchanged to both
branches — precisely why this chapter merges classification and
regression into a single narrative rather than splitting them into
separate chapters.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 2 (ý tưởng chủ đạo), 5-14
(toàn bộ Phần 1), 89 (nhắc lại khung cho phần hồi quy).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slide 2 (the
key idea), 5-14 (all of Section 1), 89 (the frame restated for
regression).</span>

## Liên quan - <span class="en">Related</span>

- [[classification-k32]] và [[linear-regression-k32]] — 2 nhánh của
  chính khung này, chia theo kiểu của y.
  <br><span class="en">[[classification-k32]] and
  [[linear-regression-k32]] — the two branches of this very frame, split
  by the type of y.</span>
- [[train-test-split-and-cross-validation]] — phương pháp luận áp cho
  **cả hai** nhánh, chính vì chúng dùng chung một khung.
  <br><span class="en">[[train-test-split-and-cross-validation]] — the
  methodology that applies to **both** branches, precisely because they
  share the frame.</span>
- [[model-evaluation-metrics-k32]] — cách chấm điểm f̂, khác nhau theo
  kiểu của y.
  <br><span class="en">[[model-evaluation-metrics-k32]] — how f̂ is
  scored, differing by the type of y.</span>
- [[chapter02-python-jupyter-k32]] — chương trước đã giới thiệu
  `scikit-learn`, thư viện hiện thực hóa toàn bộ khung này.
  <br><span class="en">[[chapter02-python-jupyter-k32]] — the previous
  chapter introduced `scikit-learn`, the library that implements this
  entire frame.</span>

## Lưu ý - <span class="en">Notes</span>

Khung này **không** bao gồm học không giám sát (phân cụm, giảm chiều) —
slide 12 nêu tên các nhiệm vụ đó nhưng nói rõ trọng tâm cả bài giảng là
học có giám sát. Khóa 2026 hiện chưa có tài liệu về nhánh không giám sát
trong `raw/`.
<br><span class="en">This frame does **not** cover unsupervised learning
(clustering, dimension reduction) — slide 12 names those tasks but states
that the lecture's focus throughout is supervised learning. The 2026
cohort currently has no unsupervised-branch material in `raw/`.</span>
