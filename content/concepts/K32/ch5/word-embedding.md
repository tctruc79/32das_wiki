---
type: concept
title: "Véc-tơ nhúng - mã hóa ngôn ngữ cho mạng nơ-ron"
title_en: "Word Embedding - Encoding Language for a Neural Network"
tags: [chapter-5, k32, deep-learning, embedding, one-hot, nlp]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Slide 45 mở đầu bằng một khẳng định dứt khoát: **mạng nơ-ron không diễn
giải được từ ngữ**. Chuỗi `"deep" -> mạng -> "learning"` đơn giản là không
chạy, vì mạng đòi hỏi đầu vào **bằng số**. **Véc-tơ nhúng** là phép biến
mỗi từ thành một véc-tơ số có kích thước cố định, qua ba bước:
<br><span class="en">Slide 45 opens with a flat statement: **neural
networks cannot interpret words**. The chain
`"deep" -> network -> "learning"` simply does not work, because networks
require **numerical** inputs. An **embedding** is the transformation of
each word into a fixed-size numerical vector, in three steps:</span>

| Bước | Nội dung |
|---|---|
| 1. Từ vựng | Tập hợp toàn bộ từ trong kho ngữ liệu: this, morning, I, took, my, cat, for, a, walk, ... |
| 2. Đánh chỉ số | Gán mỗi từ một số: a → 1, cat → 2, ..., walk → N |
| 3. Nhúng | Biến chỉ số thành véc-tơ có kích thước cố định |

## Diễn giải - <span class="en">Explanation</span>

### Hai cách làm bước 3, và khác biệt giữa chúng - <span class="en">Two ways to do step 3, and the difference between them</span>

**Véc-tơ chỉ báo (one-hot)**: `"cat" = [0, 1, 0, 0, 0, 0]`, tức một số 1
đặt đúng ở vị trí thứ `i` của từ đó, còn lại toàn 0. Độ dài véc-tơ bằng
kích thước từ vựng.
<br><span class="en">**One-hot**: `"cat" = [0, 1, 0, 0, 0, 0]`, a single 1
at that word's index `i` and zeros elsewhere. The vector's length equals
the vocabulary size.</span>

**Véc-tơ nhúng học được**: một véc-tơ **dày đặc** trong đó **các từ gần
nghĩa nằm gần nhau** - slide nêu ví dụ chó và mèo kết thúc ở gần nhau
trong không gian nhúng.
<br><span class="en">**A learned embedding**: a **dense** vector in which
**similar words end up close together** - the slide gives the example of dog
and cat ending up near each other in the embedding space.</span>

Khác biệt giữa hai cách chính là khác biệt giữa **"chỉ đánh dấu từ nào"**
và **"mã hóa cả nghĩa của từ"**. Véc-tơ chỉ báo không mang thông tin nào về
quan hệ giữa các từ: theo nó, "cat" và "dog" cách nhau đúng bằng khoảng
cách giữa "cat" và "aardvark", vì mọi cặp véc-tơ chỉ báo khác nhau đều cách
nhau như nhau. Véc-tơ nhúng học được thì mang được quan hệ ấy, nên mạng có
thể **suy rộng** từ những từ đã thấy sang những từ gần nghĩa mà nó chưa
gặp nhiều.
<br><span class="en">The difference between the two is the difference
between **"merely marking which word it is"** and **"encoding what the word
means"**. A one-hot vector carries no information about relations between
words: by it, "cat" and "dog" are exactly as far apart as "cat" and
"aardvark", because every pair of distinct one-hot vectors is equidistant. A
learned embedding does carry that relation, so the network can
**generalise** from words it has seen to near-synonyms it has seen
rarely.</span>

Một hệ quả thực hành mà slide không nêu nhưng suy ra được ngay: với từ vựng
50.000 từ, véc-tơ chỉ báo dài 50.000 phần tử trong đó 49.999 phần tử là 0 -
rất tốn, còn véc-tơ nhúng học được thường chỉ vài trăm chiều. Đó là lý do
thứ hai (ngoài lý do về nghĩa) khiến cách thứ hai được dùng trong thực tế.
<br><span class="en">One practical consequence the slide does not state but
which follows at once: with a 50,000-word vocabulary a one-hot vector has
50,000 entries of which 49,999 are zero - very wasteful, whereas a learned
embedding is usually only a few hundred dimensions. That is the second
reason (besides meaning) the second approach is what gets used.</span>

### Vì sao bước này không thể bỏ - <span class="en">Why this step cannot be skipped</span>

Bốn tiêu chí ở [[sequence-modeling-design-criteria]] đều nói về cách xử lý
chuỗi, nhưng **không tiêu chí nào có nghĩa** nếu đầu vào chưa phải số. Nhúng
là cầu nối bắt buộc giữa dữ liệu ngôn ngữ và mọi kiến trúc trong chương -
RNN ở slide 40 nhận `xt` là một véc-tơ, không phải một từ; tự chú ý ở slide
58 cộng mã hóa vị trí **vào chính các véc-tơ nhúng từ**.
<br><span class="en">The four criteria in
[[sequence-modeling-design-criteria]] all concern how a sequence is
processed, but **none of them means anything** until the input is numeric.
An embedding is the mandatory bridge between language data and every
architecture in the chapter - the RNN on slide 40 takes `xt` as a vector,
not a word; the self-attention on slide 58 adds positional encoding **to
those very word embeddings**.</span>

### Nhúng không chỉ dành cho từ - <span class="en">Embeddings are not only for words</span>

Chương chỉ trình bày nhúng cho ngôn ngữ, nhưng slide 61 cho thấy cùng ý
tưởng chạy ở nơi khác: mô hình cấu trúc protein coi chuỗi axit amin như một
chuỗi ký hiệu, và Vision Transformer cắt ảnh thành các mảnh rồi coi dãy mảnh
đó như một chuỗi. Trong cả hai trường hợp, phần tử của chuỗi phải được biến
thành véc-tơ trước khi vào mạng - tức vẫn là bước nhúng, chỉ khác loại dữ
liệu.
<br><span class="en">The chapter presents embeddings only for language, but
slide 61 shows the same idea operating elsewhere: protein structure models
treat an amino-acid sequence as a sequence of symbols, and Vision
Transformers cut an image into patches and treat the patch sequence as a
sequence. In both cases the sequence elements must be turned into vectors
before entering the network - still an embedding step, merely on a different
data type.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 45 (khẳng định mạng không đọc được
từ, ba bước từ vựng/chỉ số/nhúng, véc-tơ chỉ báo so với véc-tơ học được, ví
dụ chó và mèo), 39 (mã giả duyệt chuỗi `["I", "love", "recurrent",
"neural"]`), 40 (`xt` là véc-tơ đầu vào của ô RNN), 58 (mã hóa vị trí cộng
vào véc-tơ nhúng từ), 61 (chuỗi axit amin và các mảnh ảnh cũng cần bước
tương tự).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 45 (the claim
that networks cannot read words, the three steps vocabulary/index/embedding,
one-hot versus learned, the dog-and-cat example), 39 (the pseudocode looping
over `["I", "love", "recurrent", "neural"]`), 40 (`xt` as the RNN cell's
input vector), 58 (positional encoding added to word embeddings), 61
(amino-acid sequences and image patches needing the same step).</span>

## Liên quan - <span class="en">Related</span>

- [[sequence-modeling-design-criteria]] - bốn tiêu chí chỉ có nghĩa sau khi
  dữ liệu đã thành số.
  <br><span class="en">[[sequence-modeling-design-criteria]] - the four
  criteria only mean something once the data is numeric.</span>
- [[recurrent-neural-network]] - `xt` mà ô RNN nhận chính là một véc-tơ
  nhúng.
  <br><span class="en">[[recurrent-neural-network]] - the `xt` an RNN cell
  receives is exactly an embedding vector.</span>
- [[self-attention]] - `Q`, `K`, `V` đều được tạo từ véc-tơ nhúng có cộng
  thêm vị trí.
  <br><span class="en">[[self-attention]] - `Q`, `K` and `V` are all built
  from the position-augmented embedding.</span>
- [[distance-measures]] - ý "từ gần nghĩa nằm gần nhau" là một phát biểu về
  khoảng cách trong không gian nhúng.
  <br><span class="en">[[distance-measures]] - "similar words end up close
  together" is a statement about distance in the embedding space.</span>
- [[pca-k32]] - cùng ý tưởng biểu diễn dữ liệu bằng ít chiều dày đặc thay
  cho nhiều chiều thưa.
  <br><span class="en">[[pca-k32]] - the same idea of representing data in
  few dense dimensions rather than many sparse ones.</span>
