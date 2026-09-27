---
type: source
title: "Chapter 5 (K32) - Nhập môn học sâu: perceptron, mạng hồi tiếp và mạng tích chập"
title_en: "Chapter 5 (K32) - Introduction to Deep Learning: Perceptrons, Recurrent Networks and Convolutional Networks"
tags: [chapter-5, k32, deep-learning, neural-networks, perceptron, backpropagation, rnn, lstm, attention, transformer, cnn, computer-vision]
created: 2026-09-27
updated: 2026-09-27
status: complete
source_file: "raw/Lecture Notes/K32/Chapter05/intro_deep_learning.pdf"
---

## Metadata

- **Môn học**: Introduction to Data Science and Applications, University
  of Economics Ho Chi Minh City - Vietnam-Netherlands Programme.
  <br><span class="en">**Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City -
  Vietnam-Netherlands Programme.</span>
- **Khóa**: K32 (2026, khóa hiện tại).
  <br><span class="en">**Cohort**: K32 (2026, current cohort).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: 90 theo chân trang (`... / 90`), nhưng PDF có **91 trang
  vật lý**. Chênh lệch nằm ở **trang vật lý 86: hoàn toàn trống** - không
  chữ, không ảnh, không chân trang. Từ trang đó trở đi số chân trang bằng
  số trang vật lý trừ 1 (trang vật lý 87 mang số `86 / 90`). Mọi trích
  dẫn trong wiki này dùng **số chân trang**, tức số slide mà người đọc
  nhìn thấy khi trình chiếu.
  <br><span class="en">**Slide count**: 90 by the footer (`... / 90`),
  but the PDF has **91 physical pages**. The gap is **physical page 86:
  entirely blank** - no text, no image, no footer. From there on the
  footer number is the physical page minus one (physical page 87 carries
  `86 / 90`). Every citation in this wiki uses the **footer number**,
  i.e. the slide number a reader sees when presenting.</span>
- **Siêu dữ liệu PDF**: soạn bằng LaTeX lớp Beamer, bộ tạo MiKTeX
  pdfTeX-1.40.27, ngày tạo 2026-09-25 lúc 16:37 (+07) - tức phát ra hai
  ngày trước lần ingest này. Khổ trang 453.5 x 255.1 điểm, tỉ lệ 16:9.
  <br><span class="en">**PDF metadata**: authored in LaTeX with the
  Beamer class, produced by MiKTeX pdfTeX-1.40.27, created 2026-09-25 at
  16:37 (+07) - released two days before this ingest. Page size 453.5 x
  255.1 pt, a 16:9 ratio.</span>
- **Nguồn gốc nội dung - điểm khác biệt lớn nhất của chương này**: slide
  1 ghi thẳng *"Based on the MIT's course about Introduction to Deep
  Learning"*. Đây là **chương đầu tiên của K32 không soạn từ hai giáo
  trình nền của môn** (Provost & Fawcett, VanderPlas) mà dựng lại từ một
  khóa học của trường khác. Hệ quả nhìn thấy được ngay: ký hiệu toán
  (`W`, `g`, `J(W)`, `fW`), ví dụ xuyên suốt (*"will I pass this
  class?"*), cấu trúc "outline - part - summary" của từng bài, và toàn bộ
  danh mục trích dẫn (Vaswani 2017, Kingma 2014, Lee ICML 2009, Girshick
  CVPR 2014, Long CVPR 2015, McKinney Nature 2020, Amini ICRA 2019) đều
  theo khóa MIT chứ không theo hai giáo trình kia.
  <br><span class="en">**Where the content comes from - this chapter's
  single biggest difference**: slide 1 states outright *"Based on the
  MIT's course about Introduction to Deep Learning"*. This is **K32's
  first chapter not built from the course's two base textbooks** (Provost
  & Fawcett, VanderPlas) but rebuilt from another university's course.
  The consequences are immediately visible: the mathematical notation
  (`W`, `g`, `J(W)`, `fW`), the running example (*"will I pass this
  class?"*), the "outline - part - summary" structure of each lecture,
  and the entire citation list (Vaswani 2017, Kingma 2014, Lee ICML 2009,
  Girshick CVPR 2014, Long CVPR 2015, McKinney Nature 2020, Amini ICRA
  2019) all follow the MIT course rather than those two books.</span>
- **Ba bài giảng gộp trong một file**: file không phải một bài giảng liền
  mạch mà là **ba bài giảng nối tiếp**, mỗi bài có trang bìa và trang
  outline riêng, nhưng 17 "Part" được đánh số liên tục từ đầu đến cuối.
  Bài A1 *Perceptrons & Neural Networks* chiếm slide 1-30 (Part 1-6); bài
  A2 *Deep Sequence Modeling - Recurrent Neural Networks & Attention*
  chiếm slide 31-62 (Part 7-12); bài thứ ba *Deep Computer Vision:
  Convolutional Neural Networks* chiếm slide 63-90 (Part 13-17). Bài A1
  và A2 được đánh nhãn "A 1"/"A 2" trên bìa, bài thứ ba đánh nhãn "Part
  3" - một chỗ không nhất quán nhỏ trong cách đặt tên của chính tài liệu.
  <br><span class="en">**Three lectures merged into one file**: the file
  is not one continuous lecture but **three consecutive ones**, each with
  its own title page and outline page, while the 17 "Parts" are numbered
  continuously from start to finish. Lecture A1 *Perceptrons & Neural
  Networks* covers slides 1-30 (Parts 1-6); lecture A2 *Deep Sequence
  Modeling - Recurrent Neural Networks & Attention* covers slides 31-62
  (Parts 7-12); the third, *Deep Computer Vision: Convolutional Neural
  Networks*, covers slides 63-90 (Parts 13-17). A1 and A2 are labelled
  "A 1"/"A 2" on their title pages while the third is labelled "Part 3" -
  a small naming inconsistency inside the material itself.</span>
- **Không có file mã hay dữ liệu đi kèm**: thư mục
  `raw/Lecture Notes/K32/Chapter05/` chỉ chứa đúng **một file PDF**. Đây
  là khác biệt rõ rệt so với Chapter 3 (2 file mã, 5 file dữ liệu) và
  Chapter 4 (7 file mã, 2 file ảnh). Mã trong chương này nằm **ngay trên
  slide**, dưới dạng các đoạn TensorFlow/PyTorch một tới ba dòng, và slide
  30 trỏ tới một lab notebook (*"open the notebook and fill in the
  #TODOs"*) hiện **không có trong `raw/`**.
  <br><span class="en">**No companion code or data files**: the folder
  `raw/Lecture Notes/K32/Chapter05/` contains exactly **one PDF**. That
  is a marked change from Chapter 3 (2 scripts, 5 data files) and Chapter
  4 (7 scripts, 2 images). The code in this chapter lives **on the slides
  themselves**, as one- to three-line TensorFlow/PyTorch snippets, and
  slide 30 points to a lab notebook (*"open the notebook and fill in the
  #TODOs"*) that is **not in `raw/`**.</span>
- **Tên file không mang số chương**: file tên `intro_deep_learning.pdf`,
  không chứa chuỗi `Chapter05`. Đây là lần thứ ba liên tiếp tên file
  không mang số chương (giống Chapter 3 và Chapter 4); người dùng đặt nó
  trong `raw/Lecture Notes/K32/Chapter05/` nên wiki coi đây là Chapter 5
  của K32. Đồng thời đây là file đầu tiên **không mang tiền tố `VNP_`**
  và không mang năm trong tên - thêm một dấu hiệu nữa cho thấy nó được
  dựng lại từ nguồn ngoài.
  <br><span class="en">**Filename carries no chapter number**: the file is
  `intro_deep_learning.pdf`, with no `Chapter05` string. This is the third
  chapter in a row whose filename omits the chapter number (as with
  Chapters 3 and 4); the user placed it in
  `raw/Lecture Notes/K32/Chapter05/`, so this wiki treats it as K32's
  Chapter 5. It is also the first file **without the `VNP_` prefix** and
  without a year in its name - one more sign that it was rebuilt from an
  outside source.</span>
- **Vị trí trong môn**: đây là **chương thuật toán thứ ba** của K32 và là
  chương đóng lại bộ ba phương pháp. Chapter 3 dạy trọn nhánh có giám sát
  (có nhãn `y`), Chapter 4 dạy trọn nhánh không giám sát (chỉ có `x`);
  Chapter 5 **cắt ngang cả hai**: phần lớn mạng ở đây là học có giám sát,
  nhưng điều làm nên sự khác biệt của chúng lại là thứ thuộc về học không
  giám sát - **chúng tự học lấy đặc trưng** thay vì nhận đặc trưng do con
  người đặt ra. Ở khóa 2025, học sâu được dạy trong **một chương duy
  nhất** (chương cuối) ở mức khái quát; bản 2026 mở thành **ba bài giảng
  đầy đủ**, và bổ sung hẳn cơ chế tự chú ý cùng kiến trúc Transformer -
  thứ hoàn toàn không xuất hiện ở bản 2025. **Theo quy tắc tách cụm khóa
  học** (CLAUDE.md, mục "Tách cụm K31/K32"), trang này không link tới bất
  kỳ trang nào của cụm K31 - mọi so sánh chỉ ghi bằng chữ thường.
  <br><span class="en">**Position in the course**: this is K32's **third
  algorithm chapter** and the one that closes the methodological trilogy.
  Chapter 3 covered the whole supervised branch (a label `y` exists),
  Chapter 4 the whole unsupervised branch (`x` only); Chapter 5 **cuts
  across both**: most networks here are trained with supervision, yet
  what distinguishes them belongs to the unsupervised side - **they learn
  their own features** instead of being handed features a human designed.
  In the 2025 cohort deep learning was taught in **a single chapter**
  (the last one) at a general level; the 2026 version expands it into
  **three full lectures** and adds self-attention and the Transformer
  architecture outright - material entirely absent from the 2025 version.
  **Per the cohort separation rule** (CLAUDE.md), this page links to no
  K31 page - comparisons are stated in plain text only.</span>

## Tóm tắt - <span class="en">Summary</span>

Chương này trả lời một câu hỏi mà ba chương trước cố tình để ngỏ: **nếu
việc chọn đặc trưng mới là phần khó nhất, tại sao không để máy học luôn cả
phần đó?** Slide 4 mở đầu bằng đúng câu hỏi ấy và toàn bộ 90 slide là câu
trả lời kéo dài.
<br><span class="en">This chapter answers a question the previous three
deliberately left open: **if choosing the features is the hard part, why
not have the machine learn that too?** Slide 4 opens with exactly that
question, and all 90 slides are the extended answer.</span>

**Một trục duy nhất: hệ phân tầng đặc trưng.** Slide 4 vẽ nó lần đầu bằng
khuôn mặt người - tầng thấp học cạnh và vệt sáng tối, tầng giữa ghép cạnh
thành mắt mũi tai, tầng cao ghép tiếp thành cấu trúc khuôn mặt - và nhấn
mạnh rằng **không ai lập trình bất kỳ tầng nào trong số đó**. Slide 69
nhắc lại y nguyên hình ấy khi chỉ ra điểm yếu của đặc trưng thủ công
trong thị giác máy tính, và slide 84 đóng lại vòng tròn bằng cách cho
thấy các bộ lọc tích chập học được thực sự xếp thành đúng ba tầng đó. Chữ
**sâu** trong "học sâu" chính là phép ghép tầng này, không phải điều gì
khác.
<br><span class="en">**One spine: the feature hierarchy.** Slide 4 draws
it first with a human face - low layers learn edges and light-dark
patches, middle layers compose edges into eyes, nose and ears, high
layers compose those into facial structure - and stresses that **nobody
programmed any of those stages**. Slide 69 reproduces the same picture
when exposing the weakness of hand-engineered features in computer
vision, and slide 84 closes the loop by showing that learned
convolutional filters really do arrange themselves into those three
levels. The word **deep** in "deep learning" is precisely this
composition, and nothing else.</span>

**Một mạch kỹ thuật duy nhất chạy suốt ba bài.** Perceptron ở slide 7 -
tổng có trọng số cộng số hạng chệch, rồi đi qua một hàm phi tuyến - là
toàn bộ nền móng. Xếp nhiều perceptron cạnh nhau thành một lớp (slide
12), xếp nhiều lớp chồng lên nhau thành mạng sâu (slide 14). Định nghĩa
một hàm mất mát để đo mức sai (slide 17-18), đi ngược gradient của nó để
sửa trọng số (slide 20-22). Bài A2 giữ nguyên perceptron ấy nhưng thêm
một trạng thái được mang từ bước thời gian này sang bước kế
(`ht = fW(xt, ht-1)`, slide 38), rồi cuối cùng vứt bỏ hẳn phép lặp tuần
tự ấy để thay bằng tự chú ý (slide 57-60). Bài A3 cũng giữ nguyên
perceptron ấy nhưng giới hạn nó vào một mảng ảnh cục bộ và dùng chung
trọng số cho mọi vị trí (slide 81 nói thẳng: *"exactly the perceptron
from Lecture 1"*). Ba kiến trúc nghe rất khác nhau, nhưng đều là cùng một
viên gạch xếp theo ba cách khác nhau.
<br><span class="en">**One technical thread runs through all three
lectures.** The perceptron on slide 7 - a weighted sum plus a bias, then
a non-linearity - is the entire foundation. Place several perceptrons
side by side and you get a layer (slide 12); stack layers and you get a
deep network (slide 14). Define a loss to measure how wrong it is (slides
17-18) and walk down that loss's gradient to fix the weights (slides
20-22). Lecture A2 keeps that same perceptron but adds a state carried
from one time step to the next (`ht = fW(xt, ht-1)`, slide 38), then
finally discards sequential recurrence altogether in favour of
self-attention (slides 57-60). Lecture A3 also keeps that same perceptron
but restricts it to a local patch of an image and shares its weights
across every position (slide 81 says it outright: *"exactly the
perceptron from Lecture 1"*). Three architectures that sound very
different are the same brick laid three different ways.</span>

**Ba câu hỏi "tại sao" được trả lời dứt khoát.** *Tại sao phải phi
tuyến?* Vì hợp của các ánh xạ tuyến tính vẫn là tuyến tính, nên không có
hàm kích hoạt phi tuyến thì mạng 100 lớp vẫn chỉ là một lớp tuyến tính
duy nhất (slide 9). *Tại sao học sâu bùng nổ bây giờ chứ không phải năm
1986?* Vì ý tưởng đã có từ lâu, chỉ có ba điều kiện là mới: dữ liệu lớn,
phần cứng GPU, và phần mềm mã nguồn mở (slide 5). *Tại sao RNN không đủ
dùng?* Vì nó ép toàn bộ quá khứ vào một véc-tơ trạng thái duy nhất, không
song song hóa được, và gradient tiêu biến làm nó quên mất các phụ thuộc
xa (slide 55) - chính ba điểm đó đẻ ra cơ chế chú ý.
<br><span class="en">**Three "why" questions get decisive answers.** *Why
non-linearity?* Because a composition of linear maps is still linear, so
without a non-linear activation a 100-layer network is mathematically one
linear layer (slide 9). *Why did deep learning take off now rather than
in 1986?* Because the ideas are old; only three conditions are new: big
data, GPU hardware, and open-source software (slide 5). *Why are RNNs not
enough?* Because they squeeze all history into a single state vector,
cannot be parallelised, and lose distant dependencies to vanishing
gradients (slide 55) - and those three points are exactly what gave birth
to attention.</span>

**Quá khớp quay lại, nhưng với hai công cụ hoàn toàn mới.** Chapter 3 đã
dạy điều chuẩn bằng cách cộng thêm phạt L1/L2 vào hàm mất mát. Chương này
gặp lại đúng bài toán ấy (slide 27) nhưng đưa ra hai lời giải mang tính
đặc thù của mạng nơ-ron: **bỏ ngẫu nhiên (dropout)** - mỗi vòng lặp tắt ngẫu
nhiên khoảng
một nửa số nơ-ron, buộc mạng không được dựa vào bất kỳ nơ-ron đơn lẻ nào
(slide 28); và **dừng sớm** - theo dõi mất mát trên tập giữ riêng, dừng
đúng lúc nó bắt đầu đi lên (slide 29). Cả hai đều không sửa hàm mất mát;
chúng sửa **quy trình huấn luyện**.
<br><span class="en">**Overfitting returns, but with two entirely new
tools.** Chapter 3 taught regularisation as an L1/L2 penalty added to the
loss. This chapter meets the same problem (slide 27) but offers two
answers specific to neural networks: **dropout** - each iteration
randomly switches off about half the units, forcing the network not to
depend on any single one (slide 28); and **early stopping** - watch the
loss on a held-out set and stop at the moment it turns upward (slide 29).
Neither touches the loss function; both change the **training
procedure**.</span>

## Nội dung chính - <span class="en">Key content</span>

### Bài giảng A1: Perceptron và mạng nơ-ron (slide 1-30) - <span class="en">Lecture A1: Perceptrons and Neural Networks (slides 1-30)</span>

#### A1.0 Mục tiêu và lộ trình (slide 2) - <span class="en">A1.0 Goal and roadmap (slide 2)</span>

Trang outline nêu sáu mục: (1) vì sao học sâu, vì sao lúc này; (2)
perceptron; (3) xây mạng nơ-ron; (4) áp dụng mạng và định lượng mất mát;
(5) huấn luyện bằng hạ gradient và lan truyền ngược; (6) mạng nơ-ron
trong thực hành.
<br><span class="en">The outline page lists six items: (1) why deep
learning, why now; (2) the perceptron; (3) building neural networks; (4)
applying networks and quantifying loss; (5) training with gradient descent
and backpropagation; (6) neural networks in practice.</span>

Mục tiêu của bài được phát biểu trong một câu duy nhất, đáng nhớ nguyên
văn: *"Teach computers to learn a task directly from raw data: build a
network from perceptrons, define a loss, and minimise it with gradient
descent."* Ba động từ trong câu ấy - **xây**, **định nghĩa**, **cực tiểu
hóa** - chính là ba phần còn lại của bài.
<br><span class="en">The goal is stated in a single sentence worth
remembering verbatim: *"Teach computers to learn a task directly from raw
data: build a network from perceptrons, define a loss, and minimise it
with gradient descent."* The three verbs in it - **build**, **define**,
**minimise** - are precisely the rest of the lecture.</span>

#### A1.1 Vì sao học sâu, vì sao lúc này (slide 4-5) - <span class="en">A1.1 Why deep learning, why now (slides 4-5)</span>

**Vấn đề với đặc trưng thủ công.** Slide 4 nêu ba tính từ cho cách làm
cũ: tốn thời gian, dễ vỡ, và không mở rộng được. Câu hỏi thay thế: liệu
có thể **học thẳng các đặc trưng nền từ dữ liệu**? Hình minh họa là ba
tầng đặc trưng của khuôn mặt người - đường nét và cạnh ở tầng thấp, mắt
mũi tai ở tầng giữa, cấu trúc khuôn mặt ở tầng cao - kèm ba nhận định:
mỗi tầng của mạng sâu **ghép** các đặc trưng của tầng ngay dưới nó;
**không ai lập trình** bất kỳ tầng nào; và chính phép ghép tầng ấy là
nghĩa của chữ **sâu**.
<br><span class="en">**The problem with hand-engineered features.** Slide
4 gives three adjectives for the old way: time-consuming, brittle, and
not scalable. The replacement question: can we **learn the underlying
features directly from data**? The illustration is three levels of facial
features - lines and edges low, eyes/nose/ears in the middle, facial
structure high - with three claims: each layer of a deep network
**composes** the features of the layer below; **nobody programmed** any
of these stages; and that composition is what the word **deep**
means.</span>

**Vì sao lúc này?** Slide 5 tách câu trả lời thành hai nửa. Nửa trái là
một dòng thời gian cho thấy ý tưởng đã cũ hàng chục năm:
<br><span class="en">**Why now?** Slide 5 splits the answer in two. The
left half is a timeline showing the ideas are decades old:</span>

| Năm | Ý tưởng |
|---|---|
| 1952 | Stochastic gradient descent |
| 1958 | Perceptron, learnable weights |
| 1986 | Backpropagation, MLP |
| 1995 | Deep CNN, digit recognition |

Nửa phải là ba điều kiện **mới**, và đây mới là câu trả lời thật: (1)
**dữ liệu lớn** - tập dữ liệu lớn hơn như ImageNet hay Wikipedia, thu
thập và lưu trữ dễ hơn; (2) **phần cứng** - GPU, và bản chất song song
hóa được ở quy mô lớn của phép tính; (3) **phần mềm** - kỹ thuật cải
tiến, mô hình mới, và các bộ công cụ TensorFlow, PyTorch, Keras, JAX.
Nói cách khác, không có ý tưởng nào trong bốn dòng bảng trên là mới; chỉ
có điều kiện để chạy chúng là mới.
<br><span class="en">The right half is three **new** conditions, and this
is the real answer: (1) **big data** - larger datasets such as ImageNet
and Wikipedia, easier to collect and store; (2) **hardware** - GPUs, and
the massively parallelisable nature of the computation; (3) **software** -
improved techniques, new models, and the TensorFlow, PyTorch, Keras and
JAX toolboxes. Put differently: nothing in the four rows above is new;
only the conditions for running them are.</span>

#### A1.2 Perceptron (slide 7-10) - <span class="en">A1.2 The perceptron (slides 7-10)</span>

**Lan truyền tiến.** Slide 7 dựng viên gạch nền của cả chương. Đầu vào
`x1, ..., xm` được nhân với các trọng số học được `w1, ..., wm`, cộng
thêm **trọng số chệch** `w0` (là trọng số gắn với một đầu vào hằng số
bằng 1, có tác dụng dịch chuyển điểm kích hoạt), rồi tổng ấy đi qua một
hàm kích hoạt phi tuyến `g`:
<br><span class="en">**Forward propagation.** Slide 7 builds the
foundational brick of the whole chapter. The inputs `x1, ..., xm` are
multiplied by learnable weights `w1, ..., wm`, a **bias weight** `w0` is
added (the weight on a constant input of 1, which shifts the activation
point), and the sum passes through a non-linear activation `g`:</span>

```
ŷ = g(w0 + sum_{i=1..m} xi wi)  =  g(w0 + X' W)
```

Dạng viết thứ hai dùng `X = [x1 ... xm]'` và `W = [w1 ... wm]'`: phần
trong ngoặc chỉ là một **tích vô hướng** cộng một hằng số. Cả mạng nơ-ron
sau này, bất kể sâu đến đâu, đều là phép này lặp lại.
<br><span class="en">The second form uses `X = [x1 ... xm]'` and
`W = [w1 ... wm]'`: what is inside the brackets is just a **dot product**
plus a constant. Every neural network that follows, however deep, is this
operation repeated.</span>

**Các hàm kích hoạt thông dụng.** Slide 8 liệt kê đúng ba hàm, mỗi hàm
kèm đạo hàm và tên gọi trong hai thư viện:
<br><span class="en">**Common activation functions.** Slide 8 lists
exactly three, each with its derivative and its name in the two
libraries:</span>

| Hàm | Công thức | Đạo hàm | TensorFlow / PyTorch |
|---|---|---|---|
| Sigmoid | `g(z) = 1 / (1 + e^-z)` | `g'(z) = g(z)(1 - g(z))` | `tf.math.sigmoid` / `torch.sigmoid` |
| Tang hyperbolic | `g(z) = (e^z - e^-z)/(e^z + e^-z)` | `g'(z) = 1 - g(z)^2` | `tf.math.tanh` / `torch.tanh` |
| ReLU | `g(z) = max(0, z)` | `1` nếu `z > 0`, `0` nếu ngược lại | `tf.nn.relu` / `torch.nn.ReLU` |

Slide kết bằng một dòng in đậm: **mọi hàm kích hoạt đều phi tuyến**. Dòng
ấy không phải ghi chú thừa - nó là cầu nối sang slide kế tiếp.
<br><span class="en">The slide closes with one bold line: **all
activation functions are non-linear**. That line is not a throwaway note -
it is the bridge to the next slide.</span>

**Vì sao bắt buộc phải phi tuyến.** Slide 9 là slide quan trọng nhất
trong sáu slide đầu, và lập luận của nó ngắn đến mức có thể nhớ nguyên
văn. Nếu hàm kích hoạt là tuyến tính thì hợp của hai lớp vẫn tuyến tính:
`W2(W1 x) = (W2 W1) x`, tức là vẫn chỉ một ma trận duy nhất. Hệ quả:
**mạng 100 lớp với kích hoạt tuyến tính, về mặt toán học, chính là một
lớp tuyến tính duy nhất**, và nó chỉ vẽ được **biên quyết định thẳng** dù
mạng to đến đâu. Ngược lại, dạng `g(W2 g(W1 x))` cho phép mạng xấp xỉ các
hàm phức tạp tùy ý và vẽ được biên cong giữa các lớp.
<br><span class="en">**Why non-linearity is mandatory.** Slide 9 is the
most important of the first six, and its argument is short enough to
memorise. If the activation is linear then a composition of two layers is
still linear: `W2(W1 x) = (W2 W1) x`, i.e. still a single matrix. The
consequence: **a 100-layer network with linear activations is
mathematically one linear layer**, and it can only draw **straight
decision boundaries** however large it is. By contrast
`g(W2 g(W1 x))` lets the network approximate arbitrarily complex
functions and trace curved boundaries between classes.</span>

**Ví dụ tính tay.** Slide 10 cho `w0 = 1` và `W = [3, -2]'`, tức
`ŷ = g(1 + 3x1 - 2x2)`. Biểu thức trong ngoặc là **phương trình một
đường thẳng trong mặt phẳng hai chiều**. Với đầu vào `X = [-1, 2]'`:
`1 + 3(-1) - 2(2) = -6`, và `g(-6) ≈ 0.002`. Cách đọc kết quả: đường
thẳng chia mặt phẳng thành hai nửa; hàm sigmoid ánh xạ **khoảng cách có
dấu từ điểm tới đường thẳng** thành một điểm số trong khoảng `(0, 1)`.
Phía `z > 0` cho `ŷ > 0.5`, phía `z < 0` cho `ŷ < 0.5`. Một perceptron
đơn lẻ, do đó, **là một bộ phân loại tuyến tính** - không hơn.
<br><span class="en">**A worked example.** Slide 10 sets `w0 = 1` and
`W = [3, -2]'`, i.e. `ŷ = g(1 + 3x1 - 2x2)`. The bracketed expression is
**the equation of a line in the plane**. For the input `X = [-1, 2]'`:
`1 + 3(-1) - 2(2) = -6`, and `g(-6) ≈ 0.002`. How to read that: the line
splits the plane into two half-spaces, and the sigmoid maps the **signed
distance from the point to the line** into a score in `(0, 1)`. The
`z > 0` side gives `ŷ > 0.5`, the `z < 0` side gives `ŷ < 0.5`. A single
perceptron is therefore **a linear classifier** - nothing more.</span>

#### A1.3 Xây mạng nơ-ron từ perceptron (slide 12-14) - <span class="en">A1.3 Building neural networks from perceptrons (slides 12-14)</span>

**Perceptron nhiều đầu ra, tức lớp kết nối đầy đủ.** Slide 12 rút gọn ký
hiệu thành `z = w0 + sum_j xj wj` và `y = g(z)`, rồi đặt nhiều perceptron
cạnh nhau trên cùng một tập đầu vào: đầu ra thứ `i` có
`zi = w0,i + sum_{j=1..m} xj wj,i`. Vì **mọi đầu vào đều nối tới mọi đầu
ra**, lớp này được gọi là lớp kết nối đầy đủ (Dense). Về mặt tính toán,
cả lớp là **một phép nhân ma trận cộng một hàm kích hoạt** - đó là lý do
nó chạy nhanh trên GPU.
<br><span class="en">**The multi-output perceptron, i.e. the dense
layer.** Slide 12 compresses the notation to `z = w0 + sum_j xj wj` and
`y = g(z)`, then places several perceptrons side by side over the same
inputs: output `i` has `zi = w0,i + sum_{j=1..m} xj wj,i`. Because
**every input connects to every output**, such a layer is called a Dense
(fully connected) layer. Computationally the whole layer is **one matrix
multiply plus an activation** - which is why it runs fast on a GPU.</span>

```python
layer = tf.keras.layers.Dense(units=2)                  # TensorFlow
layer = nn.Linear(in_features=m, out_features=2)        # PyTorch
```

**Mạng một lớp ẩn.** Slide 13 chèn một lớp vào giữa. Lớp ẩn tính
`zi = w0,i^(1) + sum_{j=1..m} xj wj,i^(1)`, và đầu ra tính
`ŷi = g(w0,i^(2) + sum_{j=1..d1} g(zj) wj,i^(2))`. Từ **ẩn** có nghĩa
đen: **ta không bao giờ quan sát hay giám sát trực tiếp các giá trị đó**.
Dữ liệu huấn luyện chỉ nói `x` là gì và `y` phải là gì; không có dòng nào
trong dữ liệu nói lớp giữa nên chứa gì. Mỗi đơn vị ẩn là một perceptron
trên các đầu vào; mỗi đầu ra là một perceptron trên các đơn vị ẩn đã kích
hoạt.
<br><span class="en">**A single hidden layer network.** Slide 13 inserts
one layer in the middle. The hidden layer computes
`zi = w0,i^(1) + sum_{j=1..m} xj wj,i^(1)` and the output computes
`ŷi = g(w0,i^(2) + sum_{j=1..d1} g(zj) wj,i^(2))`. The word **hidden** is
literal: **we never observe or supervise those values directly**. The
training data says only what `x` is and what `y` should be; no row of it
says what the middle layer ought to contain. Each hidden unit is a
perceptron over the inputs; each output is a perceptron over the
activated hidden units.</span>

```python
model = tf.keras.Sequential([Dense(n), Dense(2)])
```

**Mạng sâu.** Slide 14 chỉ làm một việc: chồng thêm lớp ẩn. Lớp thứ `k`
nhận đầu ra đã kích hoạt của lớp `k - 1`:
`zk,i = w0,i^(k) + sum_{j=1..n(k-1)} g(z(k-1),j) wj,i^(k)`. Toàn bộ tập
tham số là `W = {W^(1), W^(2), ...}`, và **huấn luyện là điều chỉnh tất
cả chúng cùng lúc**. Công thức không có gì mới so với slide 13 - đó chính
là điểm đáng chú ý: chiều sâu không đòi hỏi cơ chế mới nào, chỉ là lặp
lại cùng một phép.
<br><span class="en">**A deep network.** Slide 14 does one thing: stack
more hidden layers. Layer `k` takes the activated outputs of layer
`k - 1`: `zk,i = w0,i^(k) + sum_{j=1..n(k-1)} g(z(k-1),j) wj,i^(k)`. The
full parameter set is `W = {W^(1), W^(2), ...}`, and **training adjusts
all of them at once**. The formula is no different from slide 13's - which
is exactly the point: depth requires no new mechanism, only the same
operation repeated.</span>

#### A1.4 Áp dụng mạng và định lượng mất mát (slide 16-18) - <span class="en">A1.4 Applying networks and quantifying loss (slides 16-18)</span>

**Bài toán ví dụ xuyên suốt: "liệu tôi có qua môn này không?"** Slide 16
dựng một mô hình hai đặc trưng: `x1` là số buổi lên lớp, `x2` là số giờ
làm đồ án cuối kỳ. Cho một sinh viên `x = [4, 5]` đi qua một mạng có 3
đơn vị ẩn, mạng dự đoán **0.1** trong khi thực tế là **1**: mạng nói gần
như chắc chắn sinh viên này trượt, nhưng sinh viên ấy đã qua môn.
<br><span class="en">**The running example: "will I pass this class?"**
Slide 16 builds a two-feature model: `x1` is the number of lectures
attended, `x2` the hours spent on the final project. Feeding one student
`x = [4, 5]` through a network with 3 hidden units, the network predicts
**0.1** while the truth is **1**: it says this student will almost
certainly fail, and in fact they passed.</span>

Câu trả lời cho "vì sao sai?" đơn giản đến mức dễ bị coi nhẹ: **mạng chưa
được huấn luyện**. Trọng số của nó còn là số ngẫu nhiên và nó chưa từng
nhìn thấy dữ liệu nào. Slide này tồn tại để dựng động cơ cho hai phần
còn lại của bài - cần một cách **đo** mức sai, rồi một cách **giảm** nó.
<br><span class="en">The answer to "why is it wrong?" is simple enough to
be underrated: **the network has not been trained**. Its weights are
still random numbers and it has never seen any data. This slide exists to
motivate the rest of the lecture - we need a way to **measure** the error,
then a way to **reduce** it.</span>

**Mất mát của một quan sát và mất mát thực nghiệm.** Slide 17 định nghĩa
mất mát là **chi phí phải chịu khi dự đoán sai**:
`L(f(x^(i); W), y^(i))`, trong đó `f(x^(i); W)` là giá trị dự đoán và
`y^(i)` là giá trị thật. Lấy trung bình trên toàn bộ `n` quan sát được
**mất mát thực nghiệm**:
<br><span class="en">**The loss of one example, and the empirical loss.**
Slide 17 defines the loss as the **cost incurred from an incorrect
prediction**: `L(f(x^(i); W), y^(i))`, where `f(x^(i); W)` is the
prediction and `y^(i)` the truth. Averaging over all `n` observations
gives the **empirical loss**:</span>

```
J(W) = (1/n) * sum_{i=1..n} L(f(x^(i); W), y^(i))
```

Slide liệt kê ba tên gọi khác của cùng đại lượng này: hàm mục tiêu, hàm
chi phí, rủi ro thực nghiệm. Và nêu một điểm mấu chốt, in riêng thành
dòng: **`J` là hàm của trọng số `W`**. Dữ liệu là cố định; thứ ta thay
đổi được chỉ là trọng số. Cả phần huấn luyện phía sau dựa hoàn toàn vào
cách nhìn này.
<br><span class="en">The slide lists three other names for the same
quantity: objective function, cost function, empirical risk. And it makes
one key point on its own line: **`J` is a function of the weights `W`**.
The data is fixed; the weights are what we can change. The whole training
section that follows rests on this view.</span>

**Hai hàm mất mát cụ thể.** Slide 18 đặt chúng cạnh nhau theo loại đầu
ra:
<br><span class="en">**Two concrete losses.** Slide 18 places them side
by side by output type:</span>

| Hàm mất mát | Dùng khi | Công thức |
|---|---|---|
| Entropy chéo nhị phân | Đầu ra là xác suất trong `(0, 1)` | `J(W) = -(1/n) sum_i [ y^(i) log fi + (1 - y^(i)) log(1 - fi) ]` |
| Sai số bình phương trung bình (MSE) | Đầu ra là số thực, ví dụ điểm cuối kỳ | `J(W) = (1/n) sum_i ( y^(i) - f(x^(i); W) )^2` |

Với `fi = f(x^(i); W)`. Slide ghi rõ tính chất của từng hàm: entropy chéo
**phạt rất nặng các dự đoán tự tin nhưng sai** (vì `log` của một số gần 0
tiến ra âm vô cùng), còn MSE **cho các sai số lớn trọng số lớn hơn nhiều
so với sai số nhỏ** (vì bình phương).
<br><span class="en">With `fi = f(x^(i); W)`. The slide states each one's
character: cross-entropy **heavily penalises confident but wrong
predictions** (because the log of a near-zero number goes to minus
infinity), while MSE **counts large errors much more than small ones**
(because of the square).</span>

#### A1.5 Huấn luyện: hạ gradient và lan truyền ngược (slide 20-22) - <span class="en">A1.5 Training: gradient descent and backpropagation (slides 20-22)</span>

**Bài toán tối ưu.** Slide 20 phát biểu mục tiêu:
`W* = argmin_W (1/n) sum_i L(f(x^(i); W), y^(i)) = argmin_W J(W)`. Cách
hình dung được nêu thẳng: **mất mát là một mặt cảnh quan trên không gian
trọng số**, và ta đang tìm điểm thấp nhất của mặt cảnh quan ấy. Bốn bước:
(1) chọn ngẫu nhiên một điểm khởi đầu `(w0, w1)`; (2) tính gradient
`∂J(W)/∂W`, tức **hướng dốc lên nhất**; (3) bước một bước nhỏ theo hướng
**ngược lại**; (4) lặp tới khi hội tụ.
<br><span class="en">**The optimisation problem.** Slide 20 states the
goal: `W* = argmin_W (1/n) sum_i L(f(x^(i); W), y^(i)) = argmin_W J(W)`.
The mental picture is given explicitly: **the loss is a landscape over
weight space** and we are looking for its lowest point. Four steps: (1)
randomly pick a starting `(w0, w1)`; (2) compute the gradient
`∂J(W)/∂W`, the **direction of steepest ascent**; (3) take a small step
in the **opposite** direction; (4) repeat until convergence.</span>

**Thuật toán hạ gradient.** Slide 21 viết gọn thành năm dòng: khởi tạo
trọng số ngẫu nhiên theo `N(0, sigma^2)`; lặp tới khi hội tụ; tính
gradient `∂J(W)/∂W`; cập nhật `W <- W - eta * ∂J(W)/∂W`; trả về trọng số.
Tham số `eta` là **tốc độ học**, và slide 24 sẽ dành trọn nội dung để bàn
về cách chọn nó.
<br><span class="en">**The gradient descent algorithm.** Slide 21 writes
it as five lines: initialise the weights randomly from `N(0, sigma^2)`;
loop until convergence; compute the gradient `∂J(W)/∂W`; update
`W <- W - eta * ∂J(W)/∂W`; return the weights. The parameter `eta` is the
**learning rate**, and slide 24 will be devoted to choosing it.</span>

**Lan truyền ngược.** Slide 22 trả lời câu hỏi cụ thể: *một thay đổi nhỏ ở
một trọng số, ví dụ `w2`, ảnh hưởng thế nào tới mất mát cuối cùng
`J(W)`?* Với chuỗi tính `x -> z1 -> ŷ -> J(W)` qua hai trọng số `w1`,
`w2`, quy tắc chuỗi cho:
<br><span class="en">**Backpropagation.** Slide 22 answers a concrete
question: *how does a small change in one weight, say `w2`, affect the
final loss `J(W)`?* For the chain `x -> z1 -> ŷ -> J(W)` through weights
`w1` and `w2`, the chain rule gives:</span>

```
∂J(W)/∂w2 = (∂J(W)/∂ŷ) · (∂ŷ/∂w2)
∂J(W)/∂w1 = (∂J(W)/∂ŷ) · (∂ŷ/∂z1) · (∂z1/∂w1)
```

Điểm cần thấy trong hai dòng trên: thừa số `∂J/∂ŷ` **xuất hiện lại** ở
dòng dưới. Chính việc **dùng lại** các thừa số đã tính là lý do gradient
"chảy ngược" qua các lớp và là lý do thuật toán mang tên lan truyền
ngược. Lặp lại cho mọi trọng số trong mạng, mỗi lớp mượn gradient của các
lớp sau nó; các thư viện hiện đại làm việc này **tự động**.
<br><span class="en">The thing to notice in those two lines: the factor
`∂J/∂ŷ` **reappears** in the second. That **reuse** of already-computed
factors is why gradients "flow backwards" through the layers and why the
algorithm is named backpropagation. Repeat for every weight in the
network, each layer borrowing the gradients of the layers after it;
modern frameworks do this **automatically**.</span>

#### A1.6 Mạng nơ-ron trong thực hành (slide 24-30) - <span class="en">A1.6 Neural networks in practice (slides 24-30)</span>

**Vì sao huấn luyện khó.** Slide 24 nói thẳng rằng mặt cảnh quan mất mát
thật thì **gồ ghề, nhiều cực tiểu địa phương và có vách dốc**, rồi quy
mọi khó khăn về một câu hỏi thực hành: đặt `eta` bằng bao nhiêu? Ba tình
huống:
<br><span class="en">**Why training is hard.** Slide 24 states that real
loss landscapes are **rugged, with many local minima and steep cliffs**,
then reduces every difficulty to one practical question: what should
`eta` be? Three cases:</span>

| `eta` | Hậu quả |
|---|---|
| Quá nhỏ | Hội tụ chậm và mắc kẹt ở cực tiểu địa phương giả |
| Quá lớn | Vọt quá đích, mất ổn định và phân kỳ |
| Ổn định | Hội tụ êm và tránh được cực tiểu địa phương |

**Tốc độ học thích nghi.** Slide 25 nêu hai ý tưởng. Ý tưởng 1: thử thật
nhiều giá trị rồi xem cái nào vừa vặn. Ý tưởng 2 - cách làm thực tế: thiết
kế một **tốc độ học tự thích nghi** theo mặt cảnh quan, thay đổi theo
gradient lớn hay nhỏ, tốc độ học đang nhanh hay chậm, và độ lớn của từng
trọng số cụ thể. Slide kèm bảng năm thuật toán cùng tên gọi trong hai thư
viện:
<br><span class="en">**Adaptive learning rates.** Slide 25 offers two
ideas. Idea 1: try many values and see which is "just right". Idea 2 -
what is actually done: design an **adaptive learning rate** that follows
the landscape, changing with how large the gradient is, how fast learning
is happening, and the size of particular weights. The slide carries a
table of five algorithms with their names in both libraries:</span>

| Thuật toán | TensorFlow (`tf.keras.optimizers.*`) | PyTorch (`torch.optim.*`) | Nguồn |
|---|---|---|---|
| SGD | `SGD` | `SGD` | Kiefer & Wolfowitz, 1952 |
| Adam | `Adam` | `Adam` | Kingma et al., 2014 |
| Adadelta | `Adadelta` | `Adadelta` | Zeiler, 2012 |
| Adagrad | `Adagrad` | `Adagrad` | Duchi et al., 2011 |
| RMSProp | `RMSprop` | `RMSprop` | Hinton, 2012 |

Slide còn dẫn một nguồn đọc thêm: `ruder.io/optimizing-gradient-descent`.
<br><span class="en">The slide also points to further reading:
`ruder.io/optimizing-gradient-descent`.</span>

**Lô nhỏ khi huấn luyện.** Slide 26 so sánh ba cách tính gradient:
<br><span class="en">**Mini-batches while training.** Slide 26 compares
three ways of computing the gradient:</span>

| Cách | Gradient dùng | Đánh giá |
|---|---|---|
| Hạ gradient toàn phần | `∂J(W)/∂W` trên cả `n` điểm | Chính xác nhưng rất nặng tính toán |
| Hạ gradient ngẫu nhiên (SGD) | `∂Ji(W)/∂W` trên **một** điểm `i` | Dễ tính nhưng rất nhiễu |
| SGD theo lô nhỏ | `(1/B) sum_{k=1..B} ∂Jk(W)/∂W` trên `B` điểm | Nhanh, và ước lượng gradient thật tốt hơn nhiều |

Hai dòng kết luận của slide giải thích vì sao lô nhỏ thắng cả hai cực:
gradient chính xác hơn **cho phép hội tụ êm hơn và dùng tốc độ học lớn
hơn**; đồng thời các điểm trong một lô **chạy song song được trên GPU**
nên huấn luyện nhanh. Đây chính là chỗ điều kiện "phần cứng" ở slide 5
phát huy tác dụng.
<br><span class="en">The slide's two closing lines explain why mini-batch
beats both extremes: a more accurate gradient **allows smoother
convergence and larger learning rates**; at the same time the points in a
batch **run in parallel on GPUs**, so training is fast. This is exactly
where the "hardware" condition from slide 5 pays off.</span>

**Quá khớp quay lại.** Slide 27 dựng lại bộ ba quen thuộc - chưa khớp (mô
hình không đủ sức học hết dữ liệu), khớp lý tưởng (nắm được xu hướng và
tổng quát hóa được sang điểm mới), quá khớp (quá phức tạp, thừa tham số,
tổng quát hóa kém) - rồi định nghĩa lại **điều chuẩn** trong một khung
riêng: *là gì?* một kỹ thuật **ràng buộc bài toán tối ưu để cản các mô
hình phức tạp**; *để làm gì?* để cải thiện khả năng tổng quát hóa trên dữ
liệu chưa thấy.
<br><span class="en">**Overfitting returns.** Slide 27 rebuilds the
familiar triple - underfitting (the model lacks capacity to learn the
data), the ideal fit (captures the trend and generalises to new points),
overfitting (too complex, extra parameters, generalises poorly) - then
redefines **regularisation** in its own box: *what is it?* a technique
that **constrains the optimisation problem to discourage complex
models**; *why?* to improve generalisation on unseen data.</span>

**Điều chuẩn 1: bỏ ngẫu nhiên (dropout).** Slide 28 nêu năm điểm. Trong lúc
huấn luyện, **đặt ngẫu nhiên một số giá trị kích hoạt về 0**; thường bỏ khoảng **50%**
số kích hoạt của một lớp; **mỗi vòng lặp bỏ một tập con ngẫu nhiên khác
nhau**; việc đó **buộc mạng không được dựa vào bất kỳ nút nào**, nên nó
học được biểu diễn dư thừa và bền hơn; và **khi kiểm tra thì mọi nút đều
hoạt động trở lại**.
<br><span class="en">**Regularisation 1: dropout.** Slide 28 makes five
points. During training, **randomly set some activations to 0**;
typically drop about **50%** of a layer's activations; **a different
random subset is dropped every iteration**; this **forces the network not
to rely on any single node**, so it learns redundant, robust
representations; and **at test time all units are active again**.</span>

```python
tf.keras.layers.Dropout(rate=0.5)
torch.nn.Dropout(p=0.5)
```

**Điều chuẩn 2: dừng sớm.** Slide 29 mô tả một biểu đồ hai đường: mất mát
trên tập huấn luyện và mất mát trên tập kiểm tra, cùng vẽ theo số vòng
lặp. Giai đoạn đầu **cả hai cùng giảm** - mô hình vẫn còn chưa khớp. Về
sau, mất mát huấn luyện **vẫn tiếp tục giảm** nhưng mất mát kiểm tra
**quay đầu đi lên**: đó là thời điểm mô hình bắt đầu học thuộc lòng tập
huấn luyện. Quy tắc rút ra: **dừng đúng vòng lặp mà mất mát kiểm tra thấp
nhất và giữ lại bộ trọng số tại đó**.
<br><span class="en">**Regularisation 2: early stopping.** Slide 29
describes a two-curve plot: training loss and testing loss against
training iterations. Early on **both fall** - the model is still
underfitting. Later, the training loss **keeps falling** while the testing
loss **turns upward**: that is the moment the model starts memorising the
training set. The rule: **stop at the iteration where testing loss is
lowest, and keep those weights**.</span>

**Tổng kết bài A1.** Slide 30 gom lại thành ba cột: **perceptron** (viên
gạch cấu trúc, tổng có trọng số cộng số hạng chệch, hàm kích hoạt phi
tuyến, một perceptron vẽ một đường thẳng); **mạng nơ-ron** (xếp perceptron
thành lớp kết nối đầy đủ, lớp ẩn và chiều sâu, hàm mất mát entropy
chéo/MSE, tối ưu bằng lan truyền ngược); **huấn luyện trong thực hành**
(tốc độ học thích nghi, chia lô nhỏ, dropout, dừng sớm). Slide kết bằng
một dòng chỉ dẫn sang buổi lab: *"Deep Learning in Python and music
generation with RNNs - open the notebook and fill in the #TODOs."*
<br><span class="en">**Lecture A1 summary.** Slide 30 collects everything
into three columns: **the perceptron** (the structural building block,
weighted sum plus bias, non-linear activation, one perceptron draws a
line); **neural networks** (stacking perceptrons into dense layers,
hidden layers and depth, cross-entropy and MSE losses, optimisation
through backpropagation); **training in practice** (adaptive learning
rates, mini-batching, dropout, early stopping). It ends with a pointer to
the lab: *"Deep Learning in Python and music generation with RNNs - open
the notebook and fill in the #TODOs."*</span>

### Bài giảng A2: Mô hình hóa chuỗi - mạng hồi tiếp và cơ chế chú ý (slide 31-62) - <span class="en">Lecture A2: Deep Sequence Modeling - Recurrent Networks and Attention (slides 31-62)</span>

#### A2.0 Mục tiêu và lộ trình (slide 32) - <span class="en">A2.0 Goal and roadmap (slide 32)</span>

Sáu mục: (1) chuỗi và vì sao cần mô hình mới; (2) nơ-ron có hồi tiếp, tức
RNN; (3) tiêu chí thiết kế mô hình chuỗi; (4) lan truyền ngược theo thời
gian và các vấn đề gradient; (5) ứng dụng và giới hạn của RNN; (6) *"chú
ý là tất cả những gì bạn cần"*. Mục tiêu bài: **xây các mô hình xử lý dữ
liệu theo thứ tự - từ một ô hồi tiếp có trí nhớ, tới tự chú ý, viên gạch
nền của Transformer.**
<br><span class="en">Six items: (1) sequences and why they need new
models; (2) neurons with recurrence, i.e. RNNs; (3) sequence modeling
design criteria; (4) backpropagation through time and gradient issues;
(5) RNN applications and limitations; (6) *"attention is all you need"*.
The goal: **build models that process data in order - from a recurrent
cell with memory, to self-attention, the building block of the
Transformer.**</span>

#### A2.1 Chuỗi trong thực tế (slide 34-35) - <span class="en">A2.1 Sequences in the wild (slides 34-35)</span>

**Quả bóng sẽ đi đâu tiếp?** Slide 34 dựng một minh họa rất gọn: nhìn
**một** ảnh tĩnh của quả bóng thì không cách nào biết nó sẽ bay đi đâu;
nhìn **một chuỗi** các vị trí trước đó thì câu trả lời hiển nhiên. Kết
luận được phát biểu tổng quát: chuỗi có ở khắp nơi - âm thanh, văn bản,
giá cổ phiếu, video, DNA, tín hiệu ECG, dữ liệu khí hậu, chuyển động - và
trong mọi trường hợp, **thứ tự của dữ liệu mang thông tin mà một mẫu đơn
lẻ không thể mang**.
<br><span class="en">**Where will the ball go next?** Slide 34 builds a
very compact illustration: from **one** still image of a ball there is no
way to know where it goes; from **a sequence** of its past positions the
answer is obvious. The conclusion is stated generally: sequences are
everywhere - audio, text, stock prices, video, DNA, ECG signals, climate
data, motion - and in every case **the order of the data carries
information a single sample cannot**.</span>

**Bốn dạng bài toán chuỗi.** Slide 35 phân loại theo số đầu vào và số đầu
ra:
<br><span class="en">**Four shapes of sequence problem.** Slide 35
classifies by the number of inputs and outputs:</span>

| Dạng | Ví dụ | Mô tả |
|---|---|---|
| Một tới một | Phân loại nhị phân | "Liệu tôi có qua môn này không?" |
| Nhiều tới một | Phân loại cảm xúc | Một dòng tweet → tích cực / tiêu cực |
| Một tới nhiều | Chú thích ảnh | Ảnh → "A baseball player throws a ball." |
| Nhiều tới nhiều | Dịch máy | Câu → câu |

Cách đọc sơ đồ được ghi rõ: vòng tròn xanh là đầu vào, vòng tròn cam là
đầu ra, hộp là ô hồi tiếp, và mũi tên giữa các hộp **truyền trạng thái
dọc theo chuỗi**. Dạng "một tới một" chính là bài toán của bài A1 - tức
mạng thường chỉ là trường hợp riêng đơn giản nhất của khung này.
<br><span class="en">How to read the diagram is spelled out: blue circles
are inputs, orange circles outputs, boxes are recurrent cells, and arrows
between boxes **pass state along the sequence**. The "one to one" shape is
exactly lecture A1's problem - the plain network is simply the simplest
special case of this framework.</span>

#### A2.2 Nơ-ron có hồi tiếp: RNN (slide 37-42) - <span class="en">A2.2 Neurons with recurrence: RNNs (slides 37-42)</span>

**Từ mạng truyền thẳng sang các bước thời gian.** Slide 37 đặt hai cách
làm cạnh nhau. Cách thứ nhất: lấy mạng truyền thẳng `x ∈ R^m -> mạng ->
ŷ ∈ R^n` rồi áp dụng **độc lập tại từng bước thời gian**, tức
`ŷt = f(xt)`. Vấn đề được nêu thẳng: `ŷ2` khi đó **chỉ phụ thuộc vào
`x2`**; thông tin trong `x0` và `x1` bị vứt bỏ, và mô hình **không có khái
niệm về thứ tự hay trí nhớ**. Cách thứ hai sửa đúng chỗ đó:
`ŷt = f(xt, ht-1)` - mỗi bước còn nhận thêm `ht-1`, **trí nhớ của quá khứ
truyền lại từ bước trước**. Gập lại, đó là một ô có vòng lặp: **một ô hồi
tiếp**.
<br><span class="en">**From feed-forward networks to time steps.** Slide
37 places two approaches side by side. The first: take a feed-forward net
`x ∈ R^m -> network -> ŷ ∈ R^n` and apply it **independently at every
time step**, i.e. `ŷt = f(xt)`. The problem is stated bluntly: `ŷ2` then
**depends only on `x2`**; the information in `x0` and `x1` is thrown away
and the model has **no notion of order or memory**. The second fixes
exactly that: `ŷt = f(xt, ht-1)` - each step additionally receives
`ht-1`, **the past memory passed on from the previous step**. Folded up,
that is a cell with a loop: **a recurrent cell**.</span>

**Định nghĩa RNN.** Slide 38 phát biểu quan hệ hồi tiếp áp dụng tại mọi
bước thời gian:
<br><span class="en">**The definition of an RNN.** Slide 38 states the
recurrence relation applied at every time step:</span>

```
ht = fW(xt, ht-1)
|    |    |    |
|    |    |    +-- trạng thái cũ / old state
|    |    +------- đầu vào / input
|    +------------ hàm có trọng số W / function with weights W
+----------------- trạng thái ô / cell state
```

Hai tính chất được nhấn mạnh: RNN **có một trạng thái `ht` được cập nhật
tại từng bước** khi chuỗi được xử lý; và **cùng một hàm, cùng một bộ tham
số `W` được dùng ở mọi bước thời gian**. Tính chất thứ hai chính là câu
trả lời cho tiêu chí thiết kế thứ tư ở slide 44.
<br><span class="en">**Two properties are stressed**: an RNN **has a
state `ht` updated at each step** as the sequence is processed; and **the
same function and the same parameters `W` are used at every step**. That
second property is precisely the answer to design criterion four on slide
44.</span>

**Trực giác bằng mã giả.** Slide 39 viết ra bốn bước bằng Python thuần:
<br><span class="en">**The intuition in pseudocode.** Slide 39 writes the
four steps out in plain Python:</span>

```python
my_rnn = RNN()
hidden_state = [0, 0, 0, 0]

sentence = ["I", "love", "recurrent", "neural"]

for word in sentence:
    prediction, hidden_state = my_rnn(word, hidden_state)

next_word_prediction = prediction
# >>> "networks!"
```

Bốn bước: (1) khởi tạo trạng thái ẩn bằng các số 0; (2) duyệt chuỗi, mỗi
bước ô nhận từ hiện tại **và** trạng thái ẩn của bước trước; (3) ô trả về
một đầu ra **và** một trạng thái ẩn đã cập nhật, rồi trạng thái đó được
đưa ngược vào vòng lặp; (4) dự đoán cuối cùng là từ kế tiếp.
<br><span class="en">Four steps: (1) initialise the hidden state to
zeros; (2) loop over the sequence, each step the cell taking the current
word **and** the previous hidden state; (3) it returns an output **and**
an updated hidden state, which is fed back into the loop; (4) the final
prediction is the next word.</span>

**Ba ma trận trọng số.** Slide 40 viết đầy đủ hai phương trình của một ô
RNN:
<br><span class="en">**Three weight matrices.** Slide 40 writes out the
two equations of an RNN cell in full:</span>

```
ht  = tanh( Whh' · ht-1  +  Wxh' · xt )     # cập nhật trạng thái ẩn
ŷt  = Why' · ht                              # véc-tơ đầu ra
```

Ba ma trận có vai trò khác nhau: `Wxh` (đầu vào → ẩn), `Whh` (ẩn → ẩn),
`Why` (ẩn → đầu ra). Hàm phi tuyến `tanh` được chọn có lý do được nêu
thẳng: **nó giữ trạng thái trong khoảng bị chặn**, tránh để giá trị trạng
thái phình to qua các bước.
<br><span class="en">The three matrices have distinct roles: `Wxh` (input
→ hidden), `Whh` (hidden → hidden), `Why` (hidden → output). The `tanh`
non-linearity is chosen for a stated reason: **it keeps the state
bounded**, preventing state values from blowing up across steps.</span>

**Đồ thị tính toán trải theo thời gian.** Slide 41 vẽ RNN ở dạng **trải
ra** (unrolled): tại mỗi bước `t` có đầu vào `xt`, đầu ra `ŷt` và một mất
mát `Lt`; **tổng mất mát `L` là tổng của các `Lt`**. Điểm cần thấy: ba ma
trận `Wxh`, `Whh`, `Why` **được dùng lại y nguyên ở mọi bước**, và huấn
luyện lan truyền ngược qua toàn bộ đồ thị này.
<br><span class="en">**The computational graph across time.** Slide 41
draws the RNN **unrolled**: at each step `t` there is an input `xt`, an
output `ŷt` and a loss `Lt`; **the total loss `L` is the sum of the
`Lt`**. The thing to see: the three matrices `Wxh`, `Whh`, `Why` are
**re-used unchanged at every step**, and training backpropagates through
this entire graph.</span>

**Tự viết, và viết bằng một dòng.** Slide 42 đặt cạnh nhau một lớp
`MyRNNCell` viết tay (khởi tạo ba ma trận `W_xh`, `W_hh`, `W_hy` cùng
trạng thái `h` bằng 0; phương thức `call` cập nhật `h` bằng đúng phương
trình `tanh`, rồi tính đầu ra) và hai dòng gọi thư viện:
<br><span class="en">**From scratch, and in one line.** Slide 42 places a
hand-written `MyRNNCell` class (initialising the three matrices `W_xh`,
`W_hh`, `W_hy` plus a zero state `h`; its `call` method updating `h` with
exactly the `tanh` equation, then computing the output) next to two
library calls:</span>

```python
from tf.keras.layers import SimpleRNN
model = SimpleRNN(rnn_units)

from torch.nn import RNN
model = RNN(input_size, rnn_units)
```

Slide chốt lại: phương thức `call` **chính xác là hai phương trình ở
slide trước** - cập nhật `h`, rồi tính đầu ra. Không có gì bị giấu trong
thư viện.
<br><span class="en">The slide's closing note: the `call` method is
**exactly the two equations from the previous slide** - update `h`, then
compute the output. Nothing is hidden inside the library.</span>

#### A2.3 Tiêu chí thiết kế mô hình chuỗi (slide 44-46) - <span class="en">A2.3 Sequence modeling design criteria (slides 44-46)</span>

**Bốn tiêu chí.** Slide 44 liệt kê bốn điều một mô hình chuỗi bắt buộc
phải làm được: (1) xử lý được chuỗi **có độ dài thay đổi**; (2) theo dõi
được **phụ thuộc dài hạn**; (3) giữ được thông tin về **thứ tự**; (4)
**dùng chung tham số** trên cả chuỗi. Rồi khẳng định: RNN đáp ứng cả bốn.
Ví dụ chạy xuyên các slide sau là bài toán đoán từ kế tiếp: *"This morning
I took my cat for a ___"*.
<br><span class="en">**Four criteria.** Slide 44 lists four things a
sequence model must be able to do: (1) handle **variable-length**
sequences; (2) track **long-term dependencies**; (3) maintain information
about **order**; (4) **share parameters** across the sequence. Then it
asserts that RNNs meet all four. The running example across the following
slides is next-word prediction: *"This morning I took my cat for a
___"*.</span>

**Mã hóa ngôn ngữ cho mạng nơ-ron.** Slide 45 mở đầu bằng một khẳng định
dứt khoát: **mạng nơ-ron không diễn giải được từ ngữ**; chuỗi
`"deep" -> mạng -> "learning"` đơn giản là không chạy, vì mạng đòi hỏi
đầu vào **bằng số**. Lời giải là **véc-tơ nhúng**, qua ba bước:
<br><span class="en">**Encoding language for a neural network.** Slide 45
opens with a flat statement: **neural networks cannot interpret words**;
`"deep" -> network -> "learning"` simply does not work, because networks
require **numerical** inputs. The answer is an **embedding**, in three
steps:</span>

| Bước | Nội dung |
|---|---|
| 1. Từ vựng | Tập hợp toàn bộ từ trong kho ngữ liệu: this, morning, I, took, my, cat, for, a, walk, ... |
| 2. Đánh chỉ số | Gán mỗi từ một số: a → 1, cat → 2, ..., walk → N |
| 3. Nhúng | Biến chỉ số thành véc-tơ có kích thước cố định |

Bước 3 có hai cách làm. **Véc-tơ chỉ báo (one-hot)**: `"cat" = [0, 1, 0,
0, 0, 0]`, tức một số 1 đặt đúng ở vị trí thứ `i`, còn lại toàn 0. **Véc-
tơ nhúng học được**: một véc-tơ dày đặc trong đó **các từ gần nghĩa nằm
gần nhau** (chó và mèo ở gần nhau). Khác biệt giữa hai cách chính là khác
biệt giữa "chỉ đánh dấu từ nào" và "mã hóa cả nghĩa của từ".
<br><span class="en">Step 3 has two forms. **One-hot**:
`"cat" = [0, 1, 0, 0, 0, 0]`, a single 1 at index `i` and zeros
elsewhere. **A learned embedding**: a dense vector in which **similar
words end up close together** (dog near cat). The difference between the
two is the difference between "merely marking which word it is" and
"encoding what the word means".</span>

**Ba tiêu chí đầu, minh họa bằng câu thật.** Slide 46 dùng đúng một ví dụ
cho mỗi tiêu chí, và cả ba đều đáng nhớ:
<br><span class="en">**The first three criteria, illustrated with real
sentences.** Slide 46 gives exactly one example per criterion, and all
three are worth remembering:</span>

- **Độ dài thay đổi**: *"The food was great"* (4 từ) so với *"We visited
  a restaurant for lunch"* (6 từ) so với *"We were hungry but cleaned the
  house before eating"* (9 từ). Mô hình phải nhận được mọi độ dài.
  <br><span class="en">**Variable length**: *"The food was great"* versus
  *"We visited a restaurant for lunch"* versus *"We were hungry but
  cleaned the house before eating"*. The model must accept any
  length.</span>
- **Phụ thuộc dài hạn**: *"France is where I grew up, but I now live in
  Boston. I speak fluent ___."* Từ cần điền phụ thuộc vào một mẩu thông
  tin nằm rất xa ở đầu đoạn.
  <br><span class="en">**Long-term dependencies**: *"France is where I
  grew up, but I now live in Boston. I speak fluent ___."* The missing
  word depends on a piece of information far back at the start.</span>
- **Thứ tự**: *"The food was good, not bad at all."* so với *"The food
  was bad, not good at all."* **Cùng bộ từ, nghĩa trái ngược** - mô hình
  bỏ qua thứ tự sẽ coi hai câu này như nhau.
  <br><span class="en">**Order**: *"The food was good, not bad at all."*
  versus *"The food was bad, not good at all."* **The same words,
  opposite meanings** - a model that ignores order treats the two as
  identical.</span>
- **Dùng chung tham số**: cùng một `W` ở mọi bước có nghĩa mô hình áp
  dụng được ở **bất kỳ vị trí nào, với bất kỳ độ dài chuỗi nào**.
  <br><span class="en">**Parameter sharing**: the same `W` at every step
  means the model applies **at any position, for any sequence
  length**.</span>

#### A2.4 Lan truyền ngược theo thời gian (slide 48-52) - <span class="en">A2.4 Backpropagation through time (slides 48-52)</span>

**Nhắc lại lan truyền ngược thường.** Slide 48 tóm tắt thuật toán trong
hai bước: (1) lấy đạo hàm của mất mát theo từng tham số; (2) dịch chuyển
tham số để cực tiểu hóa mất mát. Gradient chảy từ lớp đầu ra ngược về lớp
đầu vào. Rồi nêu điểm khác biệt của RNN: **ở RNN, "lớp" chính là các bước
thời gian**, nên gradient còn phải chảy ngược **qua thời gian**.
<br><span class="en">**Recalling ordinary backpropagation.** Slide 48
summarises the algorithm in two steps: (1) take the derivative of the
loss with respect to each parameter; (2) shift the parameters to minimise
the loss. The gradient flows from the output layer back to the input
layer. Then it states the RNN difference: **in an RNN the "layers" are
time steps**, so the gradient must also flow backwards **through
time**.</span>

**BPTT.** Slide 49 vẽ đồ thị trải ra với hai chiều mũi tên: lượt tiến từ
`x0` tới `xt`, lượt lùi ngược lại. Câu mô tả chính xác: **sai số được lan
truyền ngược tại từng bước thời gian riêng lẻ, rồi lan tiếp qua tất cả
các bước thời gian**, từ cuối chuỗi ngược về đầu chuỗi. Slide dẫn nguồn
gốc thuật toán: Mozer, *Complex Systems* 1989.
<br><span class="en">**BPTT.** Slide 49 draws the unrolled graph with
arrows in both directions: a forward pass from `x0` to `xt`, a backward
pass in reverse. The precise description: **errors are backpropagated at
each individual time step and then across all time steps**, from the end
of the sequence back to the beginning. The slide credits the algorithm's
origin: Mozer, *Complex Systems* 1989.</span>

**Gradient bùng nổ và gradient tiêu biến.** Slide 50 chỉ ra gốc rễ vấn
đề: tính gradient theo `h0` đòi hỏi **nhân rất nhiều thừa số `Whh`** với
nhau, cùng với việc lặp lại phép tính gradient. Từ đó sinh ra hai chế độ
hỏng đối xứng nhau:
<br><span class="en">**Exploding and vanishing gradients.** Slide 50
identifies the root cause: computing the gradient with respect to `h0`
involves **multiplying many factors of `Whh`** together, along with
repeated gradient computation. That produces two symmetric failure
modes:</span>

| Chế độ hỏng | Nguyên nhân | Cách chữa |
|---|---|---|
| Gradient bùng nổ | Nhiều giá trị lớn hơn 1 | Cắt ngưỡng gradient để co các gradient quá lớn |
| Gradient tiêu biến | Nhiều giá trị nhỏ hơn 1 | (1) đổi hàm kích hoạt; (2) đổi cách khởi tạo trọng số; (3) đổi kiến trúc mạng, dùng ô có cổng |

**Vì sao gradient tiêu biến lại là vấn đề.** Slide 51 giải thích bằng một
chuỗi hệ quả ba bước: nhân nhiều số nhỏ với nhau → sai số từ các bước
thời gian xa hơn có gradient ngày càng nhỏ → **tham số bị thiên lệch về
phía chỉ nắm bắt phụ thuộc ngắn hạn**. Rồi minh họa bằng hai câu tương
phản: *"The clouds are in the ___"* - khoảng cách **ngắn**, các từ liên
quan `x0`, `x1` nằm ngay cạnh dự đoán `ŷ3`, nên dễ; còn *"I grew up in
France, ... and I speak fluent ___"* - khoảng cách **dài**, manh mối nằm
cách rất nhiều bước và **tín hiệu gradient của nó gần như đã tiêu biến
hết** trước khi lan ngược tới nơi.
<br><span class="en">**Why vanishing gradients matter.** Slide 51
explains with a three-step chain: multiply many small numbers together →
errors from further-back time steps carry smaller and smaller gradients →
**the parameters get biased towards capturing only short-term
dependencies**. It then contrasts two sentences: *"The clouds are in the
___"* - a **short** gap, the relevant words `x0`, `x1` sit right beside
the prediction `ŷ3`, so it is easy; and *"I grew up in France, ... and I
speak fluent ___"* - a **long** gap, the clue is many steps earlier and
**its gradient signal has all but vanished** by the time it reaches
back.</span>

**Ô có cổng: LSTM.** Slide 52 nêu ý tưởng sửa chữa: **dùng các cổng để
thêm hoặc bỏ thông tin một cách có chọn lọc bên trong mỗi đơn vị hồi
tiếp**. Cơ chế được giải thích bằng hai phép toán: một **lớp mạng nơ-ron
sigmoid** cho ra các số trong khoảng `(0, 1)`, và một **phép nhân từng
phần tử** với các số đó - nhân với một số trong `(0, 1)` tức là cho lọt
qua từ 0% tới 100% lượng thông tin, và **mức lọt ấy được học**. Mạng
**LSTM** (Long Short-Term Memory) dựa trên một ô có cổng như vậy để theo
dõi thông tin qua nhiều bước thời gian, nhờ đó **làm nhẹ bài toán gradient
tiêu biến**.
<br><span class="en">**Gated cells: LSTMs.** Slide 52 states the fix:
**use gates to selectively add or remove information within each
recurrent unit**. The mechanism is explained with two operations: a
**sigmoid neural net layer** outputs numbers in `(0, 1)`, and a
**pointwise multiplication** by those numbers lets between 0% and 100% of
the information through - and **that amount is learned**. **LSTM** (Long
Short-Term Memory) networks rely on such a gated cell to track information
across many time steps, thereby **mitigating the vanishing-gradient
problem**.</span>

#### A2.5 Ứng dụng và giới hạn của RNN (slide 54-55) - <span class="en">A2.5 RNN applications and limitations (slides 54-55)</span>

**Hai ví dụ tác vụ.** Slide 54 đặt cạnh nhau một bài toán nhiều tới nhiều
và một bài toán nhiều tới một:
<br><span class="en">**Two example tasks.** Slide 54 places a
many-to-many problem next to a many-to-one problem:</span>

- **Sinh nhạc (nhiều tới nhiều)**: đầu vào là bản nhạc, đầu ra là ký tự
  kế tiếp trong bản nhạc. `E → F#`, `F# → G`, `G → C`, `C → A`: mỗi dự
  đoán được **đưa ngược lại làm đầu vào kế tiếp**, nên mạng soạn nhạc
  từng nốt một.
  <br><span class="en">**Music generation (many to many)**: input is
  sheet music, output the next character of it. `E → F#`, `F# → G`,
  `G → C`, `C → A`: each prediction is **fed back as the next input**, so
  the network composes note by note.</span>
- **Phân loại cảm xúc (nhiều tới một)**: đầu vào là một chuỗi từ, đầu ra
  là xác suất cảm xúc tích cực. *"I love this class!"* → `<positive>`.
  Hai ví dụ tweet được nêu: *"The MIT Introduction to Deep Learning is
  definitely one of the best courses ..."* → tích cực; *"I wouldn't mind
  a bit of snow right now ... :("* → tiêu cực.
  <br><span class="en">**Sentiment classification (many to one)**: input
  a sequence of words, output the probability of positive sentiment. *"I
  love this class!"* → `<positive>`. Two tweet examples are given: *"The
  MIT Introduction to Deep Learning is definitely one of the best courses
  ..."* → positive; *"I wouldn't mind a bit of snow right now ... :("* →
  negative.</span>

```python
loss = tf.nn.softmax_cross_entropy_with_logits(y, predicted)
```

**Ba giới hạn của mô hình hồi tiếp.** Slide 55 là slide bản lề của cả
bài: nó nêu ba điểm yếu, và mỗi điểm yếu chính là một lý do tồn tại của
cơ chế chú ý ở phần sau.
<br><span class="en">**Three limitations of recurrent models.** Slide 55
is the lecture's hinge: it names three weaknesses, and each one is a
reason attention exists in the next part.</span>

| Giới hạn | Nội dung |
|---|---|
| Nút cổ chai mã hóa | Toàn bộ lịch sử bị ép vào **một véc-tơ trạng thái duy nhất** |
| Chậm, không song song hóa được | Bước `t` **phải chờ** bước `t - 1` xong mới chạy được |
| Không có trí nhớ dài | Gradient tiêu biến làm mất các phụ thuộc xa |

Ba năng lực mong muốn cho mô hình chuỗi lý tưởng: xử lý được **dòng liên
tục**, **song song hóa được**, và có **trí nhớ dài**. Slide thử một lời
giải thay thế rồi bác bỏ ngay: đưa tất cả vào một mạng kết nối đầy đủ thì
đúng là bỏ được hồi tiếp, nhưng **không mở rộng được, mất thứ tự, và vẫn
không có trí nhớ dài**. Ý tưởng đúng được nêu ở dòng cuối: **xác định và
chú ý tới phần quan trọng**.
<br><span class="en">Three desired capabilities for an ideal sequence
model: handle a **continuous stream**, be **parallelisable**, and have
**long memory**. The slide tries one alternative and rejects it
immediately: feeding everything into a dense network does remove
recurrence, but it is **not scalable, has no order, and still no long
memory**. The right idea is stated on the last line: **identify and
attend to what's important**.</span>

#### A2.6 Chú ý là tất cả những gì bạn cần (slide 57-62) - <span class="en">A2.6 Attention is all you need (slides 57-62)</span>

**Trực giác: chú ý là một bài toán tìm kiếm.** Slide 57 định nghĩa chú ý
là **chú tâm vào những phần quan trọng nhất của đầu vào**, thay vì quét
mọi điểm ảnh hay mọi từ như nhau. Hai bước: (1) xác định **phần nào cần
chú ý** - gần giống một bài toán tìm kiếm; (2) **trích xuất đặc trưng ở
những phần có độ chú ý cao**. Phép loại suy được dùng là tìm kiếm trên
YouTube với từ khóa "deep learning":
<br><span class="en">**Intuition: attention as search.** Slide 57
defines attention as **attending to the most important parts of an
input**, instead of scanning every pixel or word equally. Two steps: (1)
identify **which parts to attend to** - much like a search problem; (2)
**extract the features with high attention**. The analogy used is
searching YouTube for "deep learning":</span>

| Ký hiệu | Vai trò trong phép loại suy |
|---|---|
| Truy vấn `Q` | Thứ bạn đang tìm: "deep learning" |
| Khóa `K` | Tiêu đề của từng video (sea turtles, MIT 6.S191, Kobe Bryant) |
| Giá trị `V` | Chính video đó |

Hai bước tương ứng: (1) **tính mặt nạ chú ý** - mỗi khóa giống truy vấn
đến mức nào; (2) **trích xuất giá trị theo độ chú ý** - trả về các giá trị
có độ chú ý cao nhất.
<br><span class="en">The two matching steps: (1) **compute the attention
mask** - how similar is each key to the query; (2) **extract values based
on attention** - return the values with the highest attention.</span>

**Bốn bước của tự chú ý.** Slide 58 và 59 chia cơ chế thành bốn bước,
liệt kê lại ở cả hai slide:
<br><span class="en">**The four steps of self-attention.** Slides 58 and
59 break the mechanism into four steps, listed on both:</span>

1. **Mã hóa thông tin vị trí.** Vì dữ liệu được nạp **cùng một lúc** chứ
   không tuần tự, thứ tự phải được đưa vào bằng tay: cộng thông tin vị
   trí `p0, ..., p6` vào các véc-tơ nhúng từ. Ví dụ dùng câu *"He tossed
   the tennis ball to serve"*. Ký hiệu: `encoding_i = embedding_i ⊕ pi`.
   <br><span class="en">**Encode position information.** Because the data
   is fed in **all at once** rather than sequentially, order must be
   supplied explicitly: add position information `p0, ..., p6` to the word
   embeddings. The example sentence is *"He tossed the tennis ball to
   serve"*. Notation: `encoding_i = embedding_i ⊕ pi`.</span>
2. **Trích truy vấn, khóa, giá trị.** Ba lớp tuyến tính **riêng biệt** áp
   lên **cùng một** véc-tơ nhúng có vị trí `E`: `Q = E WQ`, `K = E WK`,
   `V = E WV`.
   <br><span class="en">**Extract query, key, value.** Three **separate**
   linear layers applied to the **same** positional embedding `E`:
   `Q = E WQ`, `K = E WK`, `V = E WV`.</span>
3. **Tính trọng số chú ý.** Điểm chú ý là **độ giống nhau từng cặp giữa
   mỗi truy vấn và mỗi khóa**, đo bằng tích vô hướng (tức độ tương tự
   cosin), rồi đưa qua softmax: `softmax( (Q · K') / scaling )`. Softmax
   biến các điểm số thành **trọng số cộng lại bằng 1**, tức là "chú ý vào
   đâu". Ví dụ được nêu: trong câu trên, từ *"tennis"* chú ý mạnh tới
   *"ball"* và *"serve"*.
   <br><span class="en">**Compute the attention weighting.** The
   attention score is the **pairwise similarity between each query and
   each key**, measured by the dot product (cosine similarity), then
   passed through a softmax: `softmax( (Q · K') / scaling )`. The softmax
   turns scores into **weights that sum to 1**, i.e. where to attend. The
   example given: in that sentence *"tennis"* attends strongly to *"ball"*
   and *"serve"*.</span>
4. **Trích đặc trưng có độ chú ý cao.** Nhân trọng số vừa tính với các giá
   trị: `A(Q, K, V) = softmax( (Q · K') / scaling ) · V`.
   <br><span class="en">**Extract features with high attention.**
   Multiply those weights by the values:
   `A(Q, K, V) = softmax( (Q · K') / scaling ) · V`.</span>

**Một đầu tự chú ý.** Slide 60 vẽ toàn bộ bốn bước thành một khối tính
toán: ba lớp tuyến tính cho truy vấn/khóa/giá trị từ cùng mã hóa vị trí →
`MatMul` → `Scale` → `Softmax` → `Matmul`. Ba nhận định kèm theo: khối này
là **một đầu tự chú ý** có thể cắm vào một mạng lớn hơn; **nhiều đầu** thì
mỗi đầu chú ý vào một phần khác nhau của đầu vào (đối tượng chính, nền,
một chi tiết nhỏ); và chú ý là **viên gạch nền của kiến trúc Transformer**
(Vaswani et al., 2017).
<br><span class="en">**A self-attention head.** Slide 60 draws all four
steps as one computational block: three linear layers producing
query/key/value from the same positional encoding → `MatMul` → `Scale` →
`Softmax` → `Matmul`. Three accompanying claims: this block is **one
self-attention head** that can plug into a larger network; **multiple
heads** each attend to a different part of the input (the main object,
the background, a small detail); and attention is **the foundational
building block of the Transformer** (Vaswani et al., 2017).</span>

**Tự chú ý được dùng ở đâu.** Slide 61 nêu ba lĩnh vực, mỗi lĩnh vực kèm
nguồn:
<br><span class="en">**Where self-attention is applied.** Slide 61 names
three domains, each with references:</span>

| Lĩnh vực | Ứng dụng | Nguồn |
|---|---|---|
| Xử lý ngôn ngữ | Transformer: BERT, GPT; sinh văn bản, dịch máy, hỏi đáp, sinh ảnh từ văn bản ("an armchair in the shape of an avocado") | Devlin et al. 2019; Brown et al. 2020 |
| Chuỗi sinh học | Mô hình cấu trúc protein: dự đoán cấu trúc 3 chiều từ chuỗi axit amin | Jumper et al., *Nature* 2021; Lin et al., *Science* 2023 |
| Thị giác máy tính | Vision Transformer: cắt ảnh thành các mảnh và coi dãy mảnh đó như một chuỗi | Dosovitskiy et al., ICLR 2020 |

Dòng kết của slide nối thẳng tới thứ sinh viên dùng hằng ngày: **tự chú ý
là nền tảng của nhiều mô hình ngôn ngữ lớn (LLM)** - vẫn đúng cơ chế `Q`,
`K`, `V` ấy, chỉ nhân lên quy mô hàng tỉ tham số.
<br><span class="en">The slide's closing line connects directly to what
students use daily: **self-attention is the basis for many large language
models (LLMs)** - the same `Q`, `K`, `V` mechanism, scaled up to billions
of parameters.</span>

**Tổng kết bài A2.** Slide 62 gom lại sáu điểm: (1) RNN phù hợp cho các
tác vụ mô hình hóa chuỗi; (2) mô hình hóa chuỗi bằng quan hệ hồi tiếp
`ht = fW(xt, ht-1)`; (3) huấn luyện RNN bằng lan truyền ngược theo thời
gian, chú ý gradient bùng nổ và tiêu biến (cắt ngưỡng, ô có cổng kiểu
LSTM); (4) các mô hình cho sinh nhạc, phân loại, dịch máy và nhiều tác vụ
khác; (5) tự chú ý mô hình hóa chuỗi **mà không cần hồi tiếp**: mã hóa vị
trí, truy vấn/khóa/giá trị, trọng số softmax, giá trị có trọng số; (6) tự
chú ý là nền tảng của nhiều mô hình ngôn ngữ lớn.
<br><span class="en">**Lecture A2 summary.** Slide 62 gathers six points:
(1) RNNs suit sequence modeling tasks; (2) model sequences via the
recurrence `ht = fW(xt, ht-1)`; (3) train RNNs with backpropagation
through time, watching for exploding and vanishing gradients (clipping,
LSTM-style gated cells); (4) models for music generation, classification,
machine translation and more; (5) self-attention models sequences
**without recurrence**: position encoding, query/key/value, softmax
weighting, weighted values; (6) self-attention is the basis for many
large language models.</span>

### Bài giảng A3: Thị giác máy tính sâu - mạng tích chập (slide 63-90) - <span class="en">Lecture A3: Deep Computer Vision - Convolutional Neural Networks (slides 63-90)</span>

#### A3.0 Mục tiêu và lộ trình (slide 64) - <span class="en">A3.0 Goal and roadmap (slide 64)</span>

Sáu mục: (1) vì sao thị giác máy tính, và máy tính "nhìn" thấy gì; (2)
học đặc trưng thị giác; (3) trích đặc trưng bằng tích chập; (4) mạng
nơ-ron tích chập (CNN); (5) một kiến trúc cho nhiều ứng dụng; (6) tổng kết
và lab. Mục tiêu bài được đặt trong một câu trích: *"To know what is where
by looking"* - từ ảnh, khám phá xem **có gì** trong thế giới, **ở đâu**,
**đang diễn ra hành động gì**, và dự đoán sự kiện, bằng cách để mạng
**tự học lấy đặc trưng thị giác từ điểm ảnh**.
<br><span class="en">Six items: (1) why computer vision, and what
computers "see"; (2) learning visual features; (3) feature extraction with
convolution; (4) convolutional neural networks (CNNs); (5) an architecture
for many applications; (6) summary and lab. The goal is set in a quotation:
*"To know what is where by looking"* - from images, discover **what** is
present in the world, **where**, **what actions** are taking place, and
predict events, by letting a network **learn visual features from pixels
itself**.</span>

#### A3.1 Máy tính nhìn thấy gì (slide 66-69) - <span class="en">A3.1 What computers see (slides 66-69)</span>

**Thị giác máy tính đã đi tới đâu.** Slide 66 nêu bốn nhóm ứng dụng, mỗi
nhóm kèm nguồn: **nhận diện khuôn mặt** (định vị các mốc mắt, mũi, miệng
rồi dùng để nhận dạng người); **xe tự lái** (ảnh camera vào mạng, ra lệnh
đánh lái - điều hướng tự động đầu-cuối); **y học và sinh học** (phát hiện
ung thư vú trên ảnh chụp nhũ ảnh, phát hiện COVID-19 từ ảnh X-quang ngực,
phân loại ung thư da - Esteva 2017, McKinney 2020, Wang 2020); và **hỗ trợ
tiếp cận** (camera điện thoại nhận ra vạch dẫn đường trên đường chạy để
người khiếm thị chạy không cần người dẫn - Google Project Guideline).
Slide chốt bằng một câu nói rõ mạch chung: trong mọi trường hợp, quy trình
đều là **mắt → mạng nơ-ron → quyết định**.
<br><span class="en">**How far computer vision has come.** Slide 66 names
four application groups, each with sources: **facial detection and
recognition** (locating eye, nose and mouth landmarks, then using them to
identify a person); **self-driving cars** (a camera image into a network,
steering commands out - end-to-end autonomous navigation); **medicine and
biology** (breast-cancer detection in mammograms, COVID-19 from chest
X-rays, skin-cancer classification - Esteva 2017, McKinney 2020, Wang
2020); and **accessibility** (a phone camera detecting the guideline on a
running track so a blind runner can run unassisted - Google Project
Guideline). The slide closes by naming the common thread: in every case
the pipeline is **eye → neural network → decision**.</span>

**Ảnh là những con số.** Slide 67 là slide nền móng của cả bài, và ý của
nó đúng một câu: với máy tính, **một bức ảnh chỉ là một ma trận các số
trong khoảng `[0, 255]`**. Slide đặt cạnh nhau ảnh xám mà người nhìn thấy
và ma trận số mà máy tính "thấy" (`157 153 174 168 ...`). Với ảnh màu
RGB, kích thước là ba chiều, ví dụ `1080 × 1080 × 3` - ba **kênh màu**.
Mọi thứ còn lại của bài chỉ là các phép toán trên ma trận ấy.
<br><span class="en">**Images are numbers.** Slide 67 is the lecture's
foundation, and its point is one sentence: to a computer **an image is
just a matrix of numbers in `[0, 255]`**. The slide places the grayscale
image a human sees beside the number matrix the computer "sees" (`157 153
174 168 ...`). For an RGB colour image the shape is three-dimensional,
e.g. `1080 × 1080 × 3` - three **colour channels**. Everything else in
the lecture is arithmetic on that matrix.</span>

**Hai loại bài toán thị giác.** Slide 68 phân biệt: **hồi quy** khi biến
đầu ra nhận giá trị liên tục (ví dụ góc đánh lái), và **phân loại** khi
biến đầu ra là một nhãn lớp - khi đó mạng có thể trả ra **xác suất thuộc
từng lớp** (ví dụ Lincoln 0.80, Washington 0.10, Jefferson 0.05, Obama
0.05). Slide thêm một khung riêng về **phát hiện đặc trưng mức cao**: để
phân loại được, phải xác định được đặc trưng then chốt của từng hạng mục -
khuôn mặt có mũi, mắt, miệng; xe có bánh, biển số, đèn pha; ngôi nhà có
cửa, cửa sổ, bậc thềm.
<br><span class="en">**Two kinds of vision task.** Slide 68 distinguishes
**regression**, where the output variable takes a continuous value (e.g. a
steering angle), from **classification**, where it takes a class label -
in which case the network can output **the probability of each class**
(e.g. Lincoln 0.80, Washington 0.10, Jefferson 0.05, Obama 0.05). The
slide adds a box on **high-level feature detection**: to classify, you
must identify each category's key features - a face has a nose, eyes and
mouth; a car has wheels, a licence plate and headlights; a house has a
door, windows and steps.</span>

**Vì sao đặc trưng thủ công thất bại.** Slide 69 vẽ quy trình cũ ba bước
- kiến thức chuyên ngành → định nghĩa đặc trưng → phát hiện đặc trưng để
phân loại - rồi liệt kê **sáu nguồn biến thiên** khiến đặc trưng do người
định nghĩa trở nên dễ vỡ:
<br><span class="en">**Why hand-engineered features fail.** Slide 69
draws the old three-step pipeline - domain knowledge → define features →
detect features to classify - then lists **six sources of variation** that
make human-defined features brittle:</span>

| Nguồn biến thiên | Nội dung |
|---|---|
| Biến thiên góc nhìn | Cùng vật thể nhìn từ hướng khác |
| Biến thiên tỉ lệ | Cùng vật thể ở kích thước khác |
| Biến dạng | Vật thể mềm, đổi hình |
| Che khuất | Một phần vật thể bị che |
| Điều kiện chiếu sáng | Sáng tối khác nhau |
| Nhiễu nền | Vật thể lẫn vào nền |
| Biến thiên trong cùng lớp | Có rất nhiều kiểu ghế khác nhau |

Câu hỏi thay thế ở cuối slide lặp lại nguyên văn ý của slide 4: liệu có
thể **học một hệ phân tầng đặc trưng thẳng từ dữ liệu** thay vì thiết kế
tay? Tầng thấp: cạnh, vệt tối. Tầng giữa: mắt, tai, mũi. Tầng cao: cấu
trúc khuôn mặt (Lee et al., ICML 2009).
<br><span class="en">The replacement question at the bottom repeats slide
4's point verbatim: can we **learn a hierarchy of features directly from
the data** instead of engineering it? Low level: edges, dark spots. Mid
level: eyes, ears, nose. High level: facial structure (Lee et al., ICML
2009).</span>

#### A3.2 Học đặc trưng thị giác (slide 71-73) - <span class="en">A3.2 Learning visual features (slides 71-73)</span>

**Mạng kết nối đầy đủ làm mất cấu trúc không gian.** Slide 71 chỉ ra vì
sao không thể dùng thẳng mạng của bài A1 cho ảnh. Nếu trải phẳng ảnh hai
chiều thành một véc-tơ điểm ảnh rồi nối mỗi nơ-ron lớp ẩn tới mọi nơ-ron
lớp đầu vào, có hai hậu quả. Thứ nhất: **mất sạch thông tin không gian** -
các điểm ảnh kề nhau bị đối xử **không khác gì** các điểm ảnh cách xa
nhau. Thứ hai: **số tham số khổng lồ** - một ảnh `1080 × 1080 × 3` cho
**3.5 triệu đầu vào cho mỗi nơ-ron**. Câu hỏi đặt ra ở cuối slide: làm
sao dùng chính cấu trúc không gian của đầu vào để định hình kiến trúc
mạng?
<br><span class="en">**Fully connected networks lose spatial structure.**
Slide 71 shows why lecture A1's network cannot be used directly on
images. If you flatten a 2D image into a vector of pixel values and
connect every hidden neuron to every input neuron, there are two
consequences. First: **all spatial information is lost** - neighbouring
pixels are treated **no differently** from distant ones. Second: **an
enormous parameter count** - a `1080 × 1080 × 3` image gives **3.5 million
inputs per neuron**. The closing question: how can we use the input's
spatial structure to inform the architecture?</span>

**Dùng cấu trúc không gian.** Slide 72 đưa ý tưởng sửa: **nối từng mảng
của đầu vào tới một nơ-ron của lớp kế tiếp**, thay vì nối tất cả tới tất
cả. Mỗi nơ-ron ẩn khi đó **chỉ "nhìn thấy"** các giá trị trong vùng của
nó. Ba bước cụ thể: nối một mảng của lớp đầu vào tới một nơ-ron đơn lẻ ở
lớp sau; dùng **cửa sổ trượt** để định nghĩa các kết nối; và câu hỏi còn
lại - làm sao đặt trọng số cho mảng ấy để phát hiện được đặc trưng cụ
thể?
<br><span class="en">**Using spatial structure.** Slide 72 gives the fix:
**connect patches of the input to neurons in the next layer**, instead of
everything to everything. Each hidden neuron then **only "sees"** the
values in its region. Three concrete steps: connect a patch of the input
layer to a single neuron in the next layer; use a **sliding window** to
define the connections; and the remaining question - how do we weight the
patch so as to detect a particular feature?</span>

**Tích chập, nói bằng ba câu.** Slide 73 trả lời câu hỏi đó và đặt tên
cho phép toán. Với bộ lọc `4 × 4` tức **16 trọng số khác nhau**, ta áp
**cùng một bộ lọc ấy** lên các mảng `4 × 4` của đầu vào, dịch **2 điểm
ảnh** để lấy mảng kế tiếp. Phép "chia mảng" ấy chính là **tích chập**. Ba
ý được đóng khung riêng: (1) áp một bộ trọng số, tức **một bộ lọc**, để
trích đặc trưng cục bộ; (2) dùng **nhiều bộ lọc** để trích các đặc trưng
khác nhau; (3) **dùng chung tham số của mỗi bộ lọc trên toàn không gian
ảnh**.
<br><span class="en">**Convolution, in three sentences.** Slide 73
answers that question and names the operation. With a `4 × 4` filter -
i.e. **16 distinct weights** - we apply **that same filter** to `4 × 4`
patches of the input, shifting by **2 pixels** for the next patch. That
"patchy" operation is **convolution**. Three points get their own box:
(1) apply a set of weights, a **filter**, to extract local features; (2)
use **multiple filters** to extract different features; (3) **spatially
share each filter's parameters**.</span>

#### A3.3 Nghiên cứu tình huống: nhận ra chữ X (slide 75-78) - <span class="en">A3.3 Case study: recognising an X (slides 75-78)</span>

**Máy tính hiểu theo nghĩa đen.** Slide 75 dựng bài toán bằng một câu nói
vui mà chính xác: ảnh được biểu diễn thành ma trận giá trị điểm ảnh (`+1`
trắng, `-1` đen), **và máy tính thì hiểu theo nghĩa đen**. Ta muốn phân
loại một chữ X là chữ X **kể cả khi nó bị dịch, thu nhỏ, xoay hay biến
dạng** - trong khi so sánh ma trận với ma trận thì hai ảnh ấy khác nhau.
Lời giải được nêu ngay: hai ảnh **cùng chia sẻ các mẫu cục bộ** - một
đường chéo đi xuống phải, một đường chéo đi xuống trái, và một chỗ giao
nhau ở giữa. Nguyên tắc: **phát hiện các bộ phận, đừng phát hiện tổng
thể**.
<br><span class="en">**Computers are literal.** Slide 75 sets up the
problem with a line that is funny and exact: the image is represented as a
matrix of pixel values (`+1` white, `-1` black), **and computers are
literal**. We want to classify an X as an X **even when it is shifted,
shrunk, rotated or deformed** - whereas matrix-to-matrix comparison makes
those two images different. The answer is given at once: both images
**share the same local patterns** - a diagonal going down-right, a
diagonal going down-left, and a central crossing. The principle: **detect
the parts, not the whole**.</span>

**Ba bộ lọc cho ba đặc trưng.** Slide 76 cho ba bộ lọc `3 × 3`, mỗi bộ
lọc bắt một đặc trưng: đường chéo xuống phải, dấu chéo ở giữa, đường chéo
xuống trái. Phép tích chập được định nghĩa chính xác: **đặt bộ lọc lên một
mảng của ảnh, nhân từng phần tử tương ứng, rồi cộng các tích lại**. Con số
cần nhớ: trên mảng khớp hoàn hảo của một chữ X, **mọi tích đều bằng +1
nên tổng bằng 9** - khớp tuyệt đối; ở chỗ khác tổng nhỏ hơn. Đó chính là
cách một bộ lọc "phát hiện" đặc trưng: bằng một con số lớn.
<br><span class="en">**Three filters for three features.** Slide 76 gives
three `3 × 3` filters, each catching one feature: the down-right diagonal,
the central cross, the down-left diagonal. The convolution operation is
defined precisely: **place the filter on a patch of the image, multiply
element-wise, and add the outputs**. The number to remember: on a matching
patch of an X **every product is +1, so the sum is 9** - a perfect match;
elsewhere the sum is smaller. That is exactly how a filter "detects" a
feature: with a large number.</span>

**Ví dụ tính tay đầy đủ.** Slide 77 làm trọn một phép tích chập với ảnh
`5 × 5` và bộ lọc `3 × 3`:
<br><span class="en">**A fully worked example.** Slide 77 carries out a
complete convolution with a `5 × 5` image and a `3 × 3` filter:</span>

```
 1 1 1 0 0                          4 3 4
 0 1 1 1 0      1 0 1               2 4 3
 0 0 1 1 1  ⊛   0 1 0      =        2 3 4
 0 0 1 1 0      1 0 1
 0 1 1 0 0     bộ lọc          bản đồ đặc trưng
    ảnh                         (feature map)
```

Mảng trên-trái cho `1·1 + 1·0 + 1·1 + 0·0 + 1·1 + 1·0 + 0·1 + 0·0 + 1·1 =
4`. Trượt từng điểm ảnh một (**bước trượt bằng 1**) trên ảnh `5 × 5` với
bộ lọc `3 × 3` cho ra **bản đồ đặc trưng `3 × 3`**. Con số `4` đó là giá
trị thứ nhất của bản đồ đặc trưng.
<br><span class="en">The top-left patch gives
`1·1 + 1·0 + 1·1 + 0·0 + 1·1 + 1·0 + 0·1 + 0·0 + 1·1 = 4`. Sliding one
pixel at a time (**stride 1**) over a `5 × 5` image with a `3 × 3` filter
yields a **`3 × 3` feature map**. That `4` is the feature map's first
entry.</span>

**Bộ lọc khác nhau, đặc trưng khác nhau.** Slide 78 đưa ba bộ lọc cổ điển
để thấy rõ bộ lọc quyết định đặc trưng nào được trích:
<br><span class="en">**Different filters, different features.** Slide 78
gives three classical filters to show that the filter decides which
feature gets extracted:</span>

| Bộ lọc | Ma trận | Tác dụng |
|---|---|---|
| Làm nét | `[0 -1 0; -1 5 -1; 0 -1 0]` | Đẩy mạnh điểm ảnh trung tâm so với các điểm lân cận |
| Phát hiện cạnh | `[0 1 0; 1 -4 1; 0 1 0]` | Chỉ phản ứng ở chỗ cường độ thay đổi; vùng phẳng cho 0 |
| Phát hiện cạnh mạnh | `[-1 -2 -1; 0 0 0; 1 2 1]` | Bộ lọc kiểu Sobel, nhấn các cạnh ngang |

Và câu chốt quan trọng nhất của slide: trong một CNN, **các giá trị trong
những bộ lọc này không do người thiết kế - chúng được học từ dữ liệu**.
Ba ma trận trên chỉ là minh họa cho việc bộ lọc làm được gì; mạng sẽ tự
tìm ra bộ lọc nào hữu ích.
<br><span class="en">The slide's most important closing line: in a CNN
**the values in these filters are not hand-designed - they are learned
from data**. The three matrices above merely illustrate what a filter can
do; the network works out for itself which filters are useful.</span>

#### A3.4 Mạng nơ-ron tích chập (slide 80-85) - <span class="en">A3.4 Convolutional neural networks (slides 80-85)</span>

**Ba phép toán, một kiến trúc.** Slide 80 vẽ toàn cảnh đường ống:
`ảnh đầu vào → tích chập (bản đồ đặc trưng) → gộp cực đại → (lặp lại N
lần) → kết nối đầy đủ → xác suất các lớp`. Ba phép toán tạo nên CNN được
đánh số rõ: (1) **tích chập**: áp các bộ lọc để sinh bản đồ đặc trưng; (2)
**phi tuyến**: thường dùng ReLU; (3) **gộp**: phép giảm mẫu trên từng bản
đồ đặc trưng. Câu chốt: **huấn luyện mô hình bằng dữ liệu ảnh, và thứ
được học chính là trọng số của các bộ lọc trong các lớp tích chập**.
<br><span class="en">**Three operations, one architecture.** Slide 80
draws the whole pipeline: `input image → convolution (feature maps) → max
pooling → (repeat N times) → fully connected → class probabilities`. The
three operations that make a CNN are numbered explicitly: (1)
**convolution**: apply filters to generate feature maps; (2)
**non-linearity**: usually ReLU; (3) **pooling**: a downsampling operation
on each feature map. The closing line: **train the model with image data,
and what is learned is the weights of the filters in the convolutional
layers**.</span>

```python
# TensorFlow
tf.keras.layers.Conv2D / tf.keras.activations.* / tf.keras.layers.MaxPool2D
# PyTorch
torch.nn.Conv2d / torch.nn.ReLU / torch.nn.MaxPool2d
```

**Lớp tích chập chính là perceptron bị giới hạn.** Slide 81 là slide gắn
bài A3 vào bài A1, và nên được đọc kỹ. Một nơ-ron ở lớp ẩn làm đúng ba
việc: lấy đầu vào từ một mảng, tính **tổng có trọng số**, rồi cộng một
**số hạng chệch**:
<br><span class="en">**A convolutional layer is just a restricted
perceptron.** Slide 81 is the slide that bolts lecture A3 onto lecture
A1, and deserves careful reading. A hidden-layer neuron does exactly three
things: take inputs from a patch, compute a **weighted sum**, and add a
**bias**:</span>

```
sum_{i=1..4} sum_{j=1..4} w_ij · x_{i+p, j+q}  +  b
```

cho nơ-ron `(p, q)` của lớp ẩn với bộ lọc `4 × 4` có ma trận trọng số
`w_ij`. Ba bước được gọi tên lại: (1) áp một **cửa sổ trọng số**; (2)
tính **tổ hợp tuyến tính**; (3) **kích hoạt bằng hàm phi tuyến**. Và câu
kết luận nói thẳng: đây **chính xác là perceptron của bài giảng 1**, chỉ
khác ở hai chỗ - bị giới hạn vào một mảng cục bộ, và **trọng số được dùng
chung cho mọi vị trí**.
<br><span class="en">for hidden-layer neuron `(p, q)` with a `4 × 4`
filter whose weight matrix is `w_ij`. The three steps get named again: (1)
apply a **window of weights**; (2) compute a **linear combination**; (3)
**activate with a non-linear function**. And the conclusion says it
outright: this is **exactly the perceptron from Lecture 1**, differing in
only two respects - restricted to a local patch, and with its **weights
shared across all positions**.</span>

**Ba tham số hình học của lớp tích chập.** Slide 82 định nghĩa:
<br><span class="en">**Three geometric parameters of a convolutional
layer.** Slide 82 defines:</span>

| Khái niệm | Nghĩa |
|---|---|
| Kích thước lớp `h × w × d` | `h`, `w` là hai chiều không gian; `d` là **chiều sâu**, tức **số bộ lọc** |
| Bước trượt | Độ dài bước của bộ lọc: cửa sổ dịch bao xa giữa hai mảng |
| Vùng tiếp nhận | Các vị trí trong ảnh đầu vào mà một nút có đường nối tới |

```python
tf.keras.layers.Conv2D(filters=d, kernel_size=(h, w), strides=s)
torch.nn.Conv2d(in_channels=3, out_channels=d, kernel_size=(h, w), stride=s)
```

Điểm dễ nhầm đáng ghi lại: **chiều sâu `d` của lớp đầu ra là số bộ lọc**,
không liên quan tới số kênh màu của ảnh đầu vào (`in_channels=3` là đầu
vào, `out_channels=d` là đầu ra).
<br><span class="en">A confusion worth recording: **the output layer's
depth `d` is the number of filters**, not the input image's number of
colour channels (`in_channels=3` is the input, `out_channels=d` the
output).</span>

**Phi tuyến và gộp.** Slide 83 xử lý hai phép còn lại. **ReLU** được áp
**sau mỗi phép tích chập**; đây là phép tính trên từng điểm ảnh, **thay
mọi giá trị âm bằng 0**: `g(z) = max(0, z)`. Bản đồ đặc trưng đầu vào (đen
là âm, trắng là dương) thành bản đồ đã chỉnh lưu chỉ còn giá trị không
âm. **Gộp cực đại** với bộ lọc `2 × 2` và bước trượt 2:
<br><span class="en">**Non-linearity and pooling.** Slide 83 handles the
remaining two operations. **ReLU** is applied **after every convolution**;
it is a pixel-by-pixel operation that **replaces all negative values by
zero**: `g(z) = max(0, z)`. The input feature map (black negative, white
positive) becomes a rectified map with only non-negative values. **Max
pooling** with `2 × 2` filters and stride 2:</span>

```
 1 1 2 4
 5 6 7 8        6 8
 3 2 1 0   ->   3 4
 1 2 3 4
```

Hai công dụng được nêu rõ: (1) **giảm số chiều**; (2) **bất biến không
gian** - dịch chuyển nhỏ của đặc trưng trong mảng không làm đổi giá trị
cực đại. Chính điểm (2) là câu trả lời cho bài toán chữ X bị dịch ở slide
75.
<br><span class="en">Two purposes are stated: (1) **reduced
dimensionality**; (2) **spatial invariance** - a small shift of the
feature within the patch does not change the maximum. Point (2) is
precisely the answer to the shifted-X problem from slide 75.</span>

```python
tf.keras.layers.MaxPool2D(pool_size=(2, 2), strides=2)
torch.nn.MaxPool2d(kernel_size=(2, 2), stride=2)
```

**Học biểu diễn trong CNN sâu.** Slide 84 khép lại vòng tròn mở ra từ
slide 4. Mỗi lớp tích chập xây trên bản đồ đặc trưng của lớp trước; lớp
đầu tiên học các bộ lọc **đơn giản và tổng quát**, các lớp sâu hơn học
**bộ phận rồi tới vật thể hoàn chỉnh**. Kết quả là đúng ba tầng đã hứa ở
slide 4: lớp tích chập 1 cho cạnh và vệt tối, lớp 2 cho mắt tai mũi, lớp 3
cho cấu trúc khuôn mặt. Câu chốt: **đây là hệ phân tầng của bài giảng 1,
nay được hiện thực hóa bằng các bộ lọc học được** (Lee et al., ICML
2009).
<br><span class="en">**Representation learning in deep CNNs.** Slide 84
closes the circle opened on slide 4. Each convolutional layer builds on
the previous layer's feature maps; the first learns **simple, generic**
filters, deeper ones learn **parts and then whole objects**. The result is
exactly the three levels promised on slide 4: conv layer 1 gives edges and
dark spots, layer 2 eyes/ears/nose, layer 3 facial structure. The closing
line: **this is the hierarchy from Lecture 1, now realised by learned
filters** (Lee et al., ICML 2009).</span>

**Toàn bộ CNN phân loại, đọc từ trái sang phải.** Slide 85 vẽ đường ống
đầy đủ và **cắt nó làm hai nửa có tên riêng**:
<br><span class="en">**The whole classification CNN, read left to
right.** Slide 85 draws the full pipeline and **cuts it into two named
halves**:</span>

```
INPUT → [CONV + RELU → POOL] → [CONV + RELU → POOL] → FLATTEN → FULLY CONN. → SOFTMAX
        |______________ học đặc trưng ______________|   |______ phân loại ______|
        |_____________ feature learning _____________|   |____ classification ___|
```

Nửa **học đặc trưng** gồm ba việc: (1) học đặc trưng trong ảnh đầu vào
bằng tích chập; (2) đưa phi tuyến vào qua hàm kích hoạt (vì dữ liệu thực
tế là phi tuyến); (3) giảm chiều và giữ bất biến không gian bằng gộp. Nửa
**phân loại** gồm ba ý: các lớp tích chập và gộp cho ra **đặc trưng mức
cao** của ảnh; một lớp kết nối đầy đủ dùng các đặc trưng ấy để phân loại;
và đầu ra được biểu diễn thành xác suất bằng **softmax**:
`softmax(yi) = e^(yi) / sum_j e^(yj)`.
<br><span class="en">The **feature learning** half does three things: (1)
learn features in the input image through convolution; (2) introduce
non-linearity through an activation function (real-world data is
non-linear); (3) reduce dimensionality and preserve spatial invariance
with pooling. The **classification** half makes three points: the CONV and
POOL layers output **high-level features** of the input; a fully connected
layer uses those features to classify; and the output is expressed as a
probability with the **softmax**:
`softmax(yi) = e^(yi) / sum_j e^(yj)`.</span>

#### A3.5 Một bộ trích đặc trưng, nhiều đầu ra (slide 86-90) - <span class="en">A3.5 One feature extractor, many heads (slides 86-90)</span>

**Cùng một xương sống, bốn ứng dụng.** Slide 87 nêu kiến trúc tổng quát:
khối `CONV + RELU + POOL × N` làm **học đặc trưng**, rồi tùy đầu gắn vào
mà ra bốn bài toán khác nhau: **phân loại**, **phát hiện đối tượng**,
**phân đoạn**, và **điều khiển theo xác suất**. Ví dụ phân loại được nêu
kỹ: hệ thống sàng lọc ung thư vú dựa trên CNN **vượt các bác sĩ X-quang
chuyên môn** trong việc phát hiện ung thư vú từ ảnh nhũ ảnh (độ nhạy cao
hơn ở cùng độ đặc hiệu), kể cả với những ca bác sĩ bỏ sót mà AI phát hiện
được (McKinney et al., *Nature* 2020).
<br><span class="en">**One backbone, four applications.** Slide 87 states
the general architecture: a `CONV + RELU + POOL × N` block does **feature
learning**, and depending on the head attached you get four different
problems: **classification**, **object detection**, **segmentation**, and
**probabilistic control**. The classification example is given in detail:
a CNN-based breast-cancer screening system **outperformed expert
radiologists** at detecting breast cancer from mammograms (higher
sensitivity at equal specificity), including cases the radiologist missed
and the AI caught (McKinney et al., *Nature* 2020).</span>

**Phát hiện đối tượng.** Slide 88 phân biệt rõ hai bài toán: **phân loại**
là `ảnh → CNN → nhãn` ("taxi"); **phát hiện** là `ảnh → CNN → nhãn và hộp
bao (x, y, w, h)`, và khi có nhiều vật thì trả về cả một danh sách: taxi
`(x1, y1, w1, h1)`, người `(x2, y2, w2, h2)`, ... Ba cách làm được xếp
theo thứ tự tiến hóa:
<br><span class="en">**Object detection.** Slide 88 separates the two
problems clearly: **classification** is `image → CNN → label` ("taxi");
**detection** is `image → CNN → label plus a bounding box (x, y, w, h)`,
and with several objects a whole list: taxi `(x1, y1, w1, h1)`, person
`(x2, y2, w2, h2)`, ... Three approaches are laid out in order of
evolution:</span>

| Cách làm | Nội dung | Vấn đề |
|---|---|---|
| Ngây thơ | Phân loại mọi hộp ở mọi tỉ lệ, vị trí, kích thước bằng CNN | **Quá nhiều đầu vào** |
| R-CNN | (1) ảnh đầu vào; (2) trích khoảng 2000 vùng đề xuất; (3) tính đặc trưng CNN trên từng vùng đã bóp méo về cùng kích thước; (4) phân loại các vùng | Chậm (nhiều vùng) và dễ vỡ (đề xuất vùng làm thủ công) - Girshick et al., CVPR 2014 |
| Faster R-CNN | Ảnh **chỉ đi qua bộ trích đặc trưng tích chập một lần**; một **mạng đề xuất vùng** tự học ra các vùng ứng viên, rồi các vùng đó được phân loại | Nhanh và học được đầu-cuối - Ren et al., 2016 |

Mạch tiến hóa ấy lặp lại đúng thông điệp của cả bài: **thay phần làm thủ
công bằng phần học được**, y như cách bộ lọc tích chập thay cho đặc trưng
thủ công.
<br><span class="en">That evolution repeats the lecture's whole message:
**replace the hand-made part with a learned part**, exactly as
convolutional filters replaced hand-engineered features.</span>

**Phân đoạn ngữ nghĩa và điều khiển liên tục.** Slide 89 nêu hai đầu ra
còn lại:
<br><span class="en">**Semantic segmentation and continuous control.**
Slide 89 covers the two remaining heads:</span>

- **Phân đoạn ngữ nghĩa bằng mạng toàn tích chập**: gán nhãn cho **từng
  điểm ảnh** (bò, cỏ, trời). Mọi lớp đều là lớp tích chập, giảm mẫu xuống
  đặc trưng độ phân giải thấp rồi **tăng mẫu ngược lên** thành dự đoán
  kích thước `H × W`. Hàm dùng để tăng mẫu:
  `tf.keras.layers.Conv2DTranspose`, `torch.nn.ConvTranspose2d` (Long et
  al., CVPR 2015).
  <br><span class="en">**Semantic segmentation with fully convolutional
  networks**: label **every pixel** (cow, grass, sky). All layers are
  convolutional, downsampling to low-resolution features and
  **upsampling** back to `H × W` predictions. The upsampling functions:
  `tf.keras.layers.Conv2DTranspose`, `torch.nn.ConvTranspose2d` (Long et
  al., CVPR 2015).</span>
- **Điều khiển liên tục - điều hướng bằng thị giác**: đầu vào là tri giác
  thô `I` (camera) cùng một bản đồ thô `M` (GPS); đầu ra là một **phân
  phối xác suất trên các lệnh điều khiển** (đánh lái). Đặc trưng tích
  chập từ camera và từ bản đồ được **ghép lại** rồi ánh xạ thành một hỗn
  hợp các phân phối Gauss trên góc lái, huấn luyện đầu-cuối với
  `L = -log P(theta | I, M)`, **không cần bất kỳ nhãn nào do người gán**
  (Amini et al., ICRA 2019).
  <br><span class="en">**Continuous control - navigation from vision**:
  inputs are raw perception `I` (camera) and a coarse map `M` (GPS);
  output is a **probability distribution over control commands**
  (steering). Convolutional features from the cameras and from the map are
  **concatenated** and mapped to a mixture of Gaussians over steering,
  trained end to end with `L = -log P(theta | I, M)`, **without any human
  labelling** (Amini et al., ICRA 2019).</span>

**Tổng kết bài A3.** Slide 90 gom lại thành ba cột: **nền tảng** (vì sao
thị giác máy tính, biểu diễn ảnh thành ma trận số, tích chập để trích đặc
trưng); **CNN** (kiến trúc conv - ReLU - gộp, áp dụng cho phân loại, hệ
phân tầng bộ lọc học được); **ứng dụng** (phát hiện, phân đoạn, chú thích
ảnh, điều khiển; an ninh, y học, robot).
<br><span class="en">**Lecture A3 summary.** Slide 90 gathers it into
three columns: **foundations** (why computer vision, representing images
as matrices of numbers, convolutions for feature extraction); **CNNs**
(the conv - ReLU - pooling architecture, application to classification,
learned filter hierarchies); **applications** (detection, segmentation,
captioning, control; security, medicine, robotics).</span>

## Khoảng trống / lưu ý - <span class="en">Gaps / notes</span>

- **Không có file mã, file dữ liệu, hay lab notebook nào trong `raw/`.**
  Slide 30 chỉ dẫn *"open the notebook and fill in the #TODOs"* và slide
  64 nhắc tới "summary and lab", nhưng thư mục `Chapter05/` chỉ có đúng
  một PDF. Toàn bộ mã trong chương là các đoạn một tới ba dòng in trên
  slide, không phải chương trình chạy được. Đây là chương K32 đầu tiên
  không có tài liệu thực hành đi kèm.
  <br><span class="en">**No code files, data files or lab notebook in
  `raw/`.** Slide 30 instructs *"open the notebook and fill in the
  #TODOs"* and slide 64 mentions "summary and lab", but the `Chapter05/`
  folder holds only the one PDF. All the code in the chapter consists of
  one- to three-line snippets printed on slides, not runnable programs.
  This is the first K32 chapter shipped without practice material.</span>
- **Trang vật lý 86 của PDF hoàn toàn trống** - không chữ, không ảnh,
  không chân trang. Đó là lý do 91 trang vật lý chỉ cho 90 slide đánh số.
  Nhiều khả năng là một trang thừa do LaTeX sinh ra ở chỗ ngắt Part 17,
  không phải nội dung bị thiếu: slide 85 kết thúc trọn vẹn phần CNN và
  slide 86 (trang vật lý 87) mở Part 17 bình thường.
  <br><span class="en">**Physical page 86 of the PDF is entirely blank** -
  no text, no image, no footer. That is why 91 physical pages produce only
  90 numbered slides. Most likely a stray page emitted by LaTeX at the
  Part 17 break rather than missing content: slide 85 completes the CNN
  section cleanly and slide 86 (physical page 87) opens Part 17
  normally.</span>
- **Không có bài tập, câu hỏi thảo luận, hay đề bài nhóm nào.** Chapter 3
  có 5 câu hỏi ôn tập của giảng viên (slide 111) và 3 bài tập nhóm;
  Chapter 4 có 6 chủ đề thảo luận nhóm (slide 82) kèm bài tập slide 83.
  Chương này **không có slide nào thuộc loại đó** - ba bài giảng đều kết
  bằng slide tổng kết rồi dừng. Cũng không có thông tin lịch thi, hạn nộp
  hay tỉ trọng điểm.
  <br><span class="en">**No exercises, discussion questions or group
  assignments.** Chapter 3 carried the instructor's 5 review questions
  (slide 111) and 3 group assignments; Chapter 4 had 6 group discussion
  topics (slide 82) plus the slide-83 assignment. This chapter has **no
  slide of that kind** - each of the three lectures ends on its summary
  slide and stops. Nor is there any exam date, deadline or grade
  weight.</span>
- **LSTM được nêu tên nhưng không được mở ra.** Slide 52 giải thích ý
  tưởng cổng bằng hai phép toán (lớp sigmoid, phép nhân từng phần tử) và
  nói LSTM dựa trên ô có cổng, nhưng **không có slide nào viết ra ba cổng
  quên/vào/ra, cũng không có phương trình trạng thái ô `ct`**. GRU chỉ
  xuất hiện trong ngoặc một lần. Ai cần công thức LSTM đầy đủ phải tìm
  nguồn khác.
  <br><span class="en">**LSTMs are named but not opened up.** Slide 52
  explains the gating idea with two operations (a sigmoid layer, a
  pointwise multiply) and says LSTMs rely on a gated cell, but **no slide
  writes out the forget/input/output gates, nor the cell-state equation
  for `ct`**. GRUs appear once, in brackets. Anyone needing the full LSTM
  equations must look elsewhere.</span>
- **Transformer chỉ được nêu ở mức một đầu chú ý.** Slide 60 dựng đầy đủ
  một đầu tự chú ý và nói nhiều đầu thì mỗi đầu nhìn một phần khác nhau,
  nhưng **không có slide nào vẽ khối Transformer hoàn chỉnh** - không có
  kết nối tắt, chuẩn hóa theo lớp, mạng truyền thẳng theo vị trí, hay cấu
  trúc bộ mã hóa/bộ giải mã. Chương dừng đúng ở viên gạch, không dựng hết
  tòa nhà.
  <br><span class="en">**The Transformer is presented only at the level of
  one attention head.** Slide 60 builds a complete self-attention head and
  notes that multiple heads look at different parts, but **no slide draws
  the full Transformer block** - no residual connections, layer
  normalisation, position-wise feed-forward network, or encoder/decoder
  structure. The chapter stops at the brick and does not raise the whole
  building.</span>
- **Khoảng cách giữa mức toán của chương này và các chương trước.** Ba
  bài giảng dùng đạo hàm riêng, quy tắc chuỗi, ký hiệu ma trận chuyển vị
  và gradient như thể đã quen thuộc, trong khi Chapter 3 và Chapter 4 chủ
  yếu dừng ở tổng, trung bình và ma trận hiệp phương sai. Slide 22 và
  slide 50 là hai chỗ dốc nhất. Không có slide ôn lại nào bắc cầu qua
  khoảng cách đó.
  <br><span class="en">**A gap between this chapter's mathematical level
  and the earlier ones.** The three lectures use partial derivatives, the
  chain rule, transpose notation and gradients as if already familiar,
  whereas Chapters 3 and 4 largely stopped at sums, means and covariance
  matrices. Slides 22 and 50 are the two steepest points. No revision
  slide bridges that gap.</span>
- **Không có phần nói về chi phí tính toán hay dữ liệu cần thiết.** Slide
  5 nêu GPU và dữ liệu lớn là điều kiện để học sâu bùng nổ, nhưng chương
  không ở đâu nói rõ **cần bao nhiêu dữ liệu** hay **bao nhiêu giờ máy**
  để huấn luyện một mạng cho ra kết quả dùng được, cũng không bàn khi nào
  **không nên** dùng học sâu mà nên dùng mô hình đơn giản hơn đã học ở
  Chapter 3.
  <br><span class="en">**Nothing on computational cost or data
  requirements.** Slide 5 names GPUs and big data as the conditions for
  deep learning's rise, but nowhere does the chapter say **how much data**
  or **how many machine-hours** a usable network needs, nor when **not**
  to use deep learning in favour of the simpler models from Chapter
  3.</span>

## Liên kết - <span class="en">Links</span>

- [[perceptron]] - viên gạch nền: tổng có trọng số, trọng số chệch, tích
  vô hướng, ví dụ tính tay slide 10.
  <br><span class="en">[[perceptron]] - the foundational brick: weighted
  sum, bias, dot product, the worked example on slide 10.</span>
- [[activation-functions]] - sigmoid, tang hyperbolic, ReLU, và lập luận
  vì sao mạng 100 lớp tuyến tính vẫn là một lớp.
  <br><span class="en">[[activation-functions]] - sigmoid, tanh, ReLU, and
  the argument that a 100-layer linear network is one layer.</span>
- [[dense-layers-and-deep-networks]] - từ perceptron nhiều đầu ra tới lớp
  ẩn và mạng sâu.
  <br><span class="en">[[dense-layers-and-deep-networks]] - from the
  multi-output perceptron to hidden layers and deep networks.</span>
- [[loss-functions-and-empirical-risk]] - mất mát một quan sát, mất mát
  thực nghiệm, entropy chéo nhị phân so với MSE.
  <br><span class="en">[[loss-functions-and-empirical-risk]] - the loss of
  one example, the empirical loss, binary cross-entropy versus MSE.</span>
- [[gradient-descent]] - mặt cảnh quan mất mát, thuật toán 5 dòng, vai trò
  của tốc độ học.
  <br><span class="en">[[gradient-descent]] - the loss landscape, the
  five-line algorithm, the role of the learning rate.</span>
- [[backpropagation]] - quy tắc chuỗi, việc dùng lại thừa số, vì sao
  gradient chảy ngược.
  <br><span class="en">[[backpropagation]] - the chain rule, factor reuse,
  why gradients flow backwards.</span>
- [[learning-rate-and-optimizers]] - ba tình huống của `eta`, tốc độ học
  thích nghi, bảng 5 bộ tối ưu.
  <br><span class="en">[[learning-rate-and-optimizers]] - the three cases
  for `eta`, adaptive learning rates, the table of 5 optimisers.</span>
- [[mini-batch-gradient-descent]] - toàn phần so với ngẫu nhiên so với lô
  nhỏ, và lý do song song hóa.
  <br><span class="en">[[mini-batch-gradient-descent]] - full versus
  stochastic versus mini-batch, and the parallelisation argument.</span>
- [[dropout-and-early-stopping]] - hai kỹ thuật điều chuẩn đặc thù của
  mạng nơ-ron.
  <br><span class="en">[[dropout-and-early-stopping]] - the two
  regularisation techniques specific to neural networks.</span>
- [[sequence-modeling-design-criteria]] - bốn tiêu chí, bốn dạng bài toán
  chuỗi, ba câu ví dụ.
  <br><span class="en">[[sequence-modeling-design-criteria]] - the four
  criteria, the four sequence shapes, the three example sentences.</span>
- [[word-embedding]] - từ vựng, đánh chỉ số, véc-tơ chỉ báo so với véc-tơ
  nhúng học được.
  <br><span class="en">[[word-embedding]] - vocabulary, indexing, one-hot
  versus a learned embedding.</span>
- [[recurrent-neural-network]] - quan hệ hồi tiếp, ba ma trận trọng số,
  đồ thị trải theo thời gian.
  <br><span class="en">[[recurrent-neural-network]] - the recurrence
  relation, the three weight matrices, the unrolled graph.</span>
- [[backpropagation-through-time]] - BPTT, gradient bùng nổ và tiêu biến,
  bài toán phụ thuộc dài hạn.
  <br><span class="en">[[backpropagation-through-time]] - BPTT, exploding
  and vanishing gradients, the long-term dependency problem.</span>
- [[lstm-gated-cells]] - cổng, lớp sigmoid nhân từng phần tử, và ba giới
  hạn còn lại của RNN.
  <br><span class="en">[[lstm-gated-cells]] - gates, the pointwise sigmoid
  multiply, and the three remaining RNN limitations.</span>
- [[self-attention]] - phép loại suy tìm kiếm, `Q`/`K`/`V`, mã hóa vị
  trí, softmax, Transformer và LLM.
  <br><span class="en">[[self-attention]] - the search analogy, `Q`/`K`/
  `V`, positional encoding, the softmax, the Transformer and LLMs.</span>
- [[convolution-operation]] - bộ lọc, nhân từng phần tử rồi cộng, bản đồ
  đặc trưng, ví dụ chữ X và ví dụ `5 × 5`.
  <br><span class="en">[[convolution-operation]] - filters, element-wise
  multiply and add, feature maps, the X example and the `5 × 5`
  example.</span>
- [[convolutional-neural-network]] - kiến trúc conv - ReLU - gộp, bước
  trượt, vùng tiếp nhận, hệ phân tầng bộ lọc học được.
  <br><span class="en">[[convolutional-neural-network]] - the conv - ReLU
  - pooling architecture, stride, receptive field, the learned filter
  hierarchy.</span>
- [[computer-vision-tasks]] - ảnh là ma trận số, đặc trưng thủ công thất
  bại, và bốn đầu ra gắn trên cùng một xương sống.
  <br><span class="en">[[computer-vision-tasks]] - images as number
  matrices, the failure of hand-engineered features, and the four heads on
  one backbone.</span>
- [[chapter03-supervised-learning-k32]] - Chapter 3 là nơi quá khớp, điều
  chuẩn, tập kiểm tra và các chỉ số đánh giá được dạy lần đầu; chương này
  gặp lại chúng với hai công cụ hoàn toàn khác.
  <br><span class="en">[[chapter03-supervised-learning-k32]] - Chapter 3
  is where overfitting, regularisation, test sets and evaluation metrics
  were first taught; this chapter meets them again with two entirely
  different tools.</span>
- [[chapter04-unsupervised-learning-k32]] - Chapter 4 giảm chiều bằng PCA,
  một phép biến đổi tuyến tính có nghiệm hiển; chương này giảm chiều bằng
  gộp và bằng các bộ lọc học được, không có nghiệm hiển nào.
  <br><span class="en">[[chapter04-unsupervised-learning-k32]] - Chapter 4
  reduced dimensions with PCA, a linear transform with a closed-form
  solution; this chapter reduces them by pooling and by learned filters,
  with no closed form at all.</span>
- [[chapter02-python-jupyter-k32]] - Chapter 2 dạy hạ tầng Python, nhưng
  **không dạy TensorFlow, PyTorch, Keras hay JAX** - bốn thư viện mà
  chương này giả định người học đã biết.
  <br><span class="en">[[chapter02-python-jupyter-k32]] - Chapter 2 taught
  the Python infrastructure, but **not TensorFlow, PyTorch, Keras or
  JAX** - the four libraries this chapter assumes.</span>
- [[tran-thi-tuan-anh]] - giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] - course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K32/Chapter05/intro_deep_learning.pdf`, slide 1-90 (91
trang vật lý; trang vật lý 86 trống, từ đó trở đi số chân trang bằng số
trang vật lý trừ 1). Thư mục `Chapter05/` không chứa file nào khác.
<br><span class="en">`raw/Lecture Notes/K32/Chapter05/
intro_deep_learning.pdf`, slides 1-90 (91 physical pages; physical page 86
is blank, and from there on the footer number is the physical page minus
one). The `Chapter05/` folder contains no other file.</span>
