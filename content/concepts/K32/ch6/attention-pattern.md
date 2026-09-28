---
type: concept
title: "Mẫu hình chú ý: truy vấn, khóa và giá trị"
title_en: "The Attention Pattern: Queries, Keys and Values"
tags: [chapter-6, k32, attention, query-key-value, softmax, embedding, transformer]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

**Mẫu hình chú ý** là **lưới trọng số** thu được khi lấy toàn bộ tích vô
hướng của các cặp khóa - truy vấn rồi **áp softmax dọc theo từng cột**. Mỗi ô
của lưới cho biết **mức liên quan của một từ đối với việc cập nhật nghĩa của
một từ khác** (slide 33-35).
<br><span class="en">The **attention pattern** is the **grid of weights**
obtained by taking all key-query dot products and **applying softmax down each
column**. Each cell says **how relevant one word is to updating the meaning of
another** (slides 33-35).</span>

Công thức gọn: `softmax(Kᵀ Q / ...)`, trong đó `Q` và `K` là **toàn bộ mảng
các véc-tơ truy vấn và khóa** (slide 36).
<br><span class="en">Compactly: `softmax(Kᵀ Q / ...)`, where `Q` and `K` are
**the full arrays** of query and key vectors (slide 36).</span>

## Diễn giải - <span class="en">Explanation</span>

### Bài toán: từ *mole* và ba nghĩa - <span class="en">The problem: *mole* and its three meanings</span>

Slide 18 đặt ba cụm từ cạnh nhau: *American shrew mole* (con chuột chũi),
*One mole of carbon dioxide* (đơn vị mol), *Take a biopsy of the mole* (nốt
ruồi). Người đọc biết ngay ba nghĩa khác nhau nhờ ngữ cảnh. **Làm sao máy
biết được?**
<br><span class="en">Slide 18 sets three phrases side by side. A reader knows
the meanings differ from context. **How can the machine know?**</span>

**Nửa đầu của câu trả lời mới là nửa quan trọng** (slide 19): sau bước nhúng,
**véc-tơ gắn với từ *mole* là giống hệt nhau trong cả ba trường hợp**. Bước
nhúng hoàn toàn không biết gì về ngữ cảnh.
<br><span class="en">**The first half of the answer is the important half**
(slide 19): after embedding, **the vector for *mole* is identical in all three
cases**. Embedding knows nothing about context.</span>

Chỉ tới **khối chú ý** (slide 20) các véc-tơ nhúng xung quanh mới có cơ hội
**truyền thông tin vào véc-tơ của *mole* và cập nhật giá trị của nó**.
<br><span class="en">Only at the **attention block** (slide 20) do the
surrounding embeddings get to **pass information into the *mole* embedding and
update its values**.</span>

### Cách phát biểu chính xác nhất về việc khối chú ý làm gì - <span class="en">The most precise statement of the block's job</span>

Slide 21 diễn đạt bằng hình học, và đây là câu đáng nhớ nguyên văn: một mô
hình huấn luyện tốt có thể gắn **nhiều hướng khác nhau trong không gian nhúng**
với nhiều nghĩa khác nhau của cùng một từ; **việc của khối chú ý là tính xem
cần cộng thêm gì vào véc-tơ nhúng chung chung, như một hàm của ngữ cảnh, để
đẩy nó về đúng một trong các hướng đó**.
<br><span class="en">Slide 21 puts it geometrically, and it is worth
memorising: a well-trained model may associate **multiple distinct directions
in embedding space** with a word's multiple meanings; **the attention block's
job is to calculate what it needs to add to the generic embedding, as a
function of its context, to move it to one of those specific
directions**.</span>

Chú ý ba chữ trong câu ấy: **cộng thêm**. Khối chú ý **không thay thế** véc-tơ
nhúng, nó **cộng một lượng hiệu chỉnh** vào. Đó chính là lý do kiến trúc dùng
**kết nối tắt** ở slide 48 - xem [[transformer-architecture]].
<br><span class="en">Note the verb: **add**. The block does **not replace**
the embedding, it **adds a correction** to it. That is exactly why the
architecture uses a **residual connection** (slide 48).</span>

Slide 22 bổ sung phạm vi: việc truyền thông tin ấy có thể xảy ra **qua khoảng
cách rất xa** và mang thông tin **giàu hơn nhiều so với một từ đơn lẻ**.
<br><span class="en">Slide 22 adds the range: the transfer can occur **over
potentially large distances** and can involve information **much richer than
just a single word**.</span>

### Ví dụ chạy suốt: *A fluffy blue creature roamed the verdant forest* - <span class="en">The running example</span>

Chương mô tả **một đầu chú ý duy nhất** trước (slide 23), rồi mới nói khối chú
ý gồm nhiều đầu chạy song song.
<br><span class="en">The chapter describes **a single head** first (slide
23).</span>

**Véc-tơ nhúng ban đầu `E`** (slide 24) có hai tính chất trái ngược nhau mà
phải nắm cả hai:
<br><span class="en">**The initial embedding `E`** (slide 24) has two opposite
properties, and both matter:</span>

- Nó **không chứa tham chiếu nào tới ngữ cảnh**.
  <br><span class="en">It **contains no reference to the context**.</span>
- Nhưng nó **có mã hóa vị trí của từ**, nên các phần tử của nó đủ cho biết
  **từ đó là gì** và **nó nằm ở đâu**.
  <br><span class="en">But it **does encode the word's position**, so its
  entries tell you both **what the word is** and **where it exists**.</span>

**Mục tiêu** (slide 25): sinh ra bộ véc-tơ nhúng tinh chỉnh `E'` trong đó
**các danh từ đã hấp thụ nghĩa từ các tính từ tương ứng** - *creature* hấp thụ
*fluffy* và *blue*, *forest* hấp thụ *verdant*.
<br><span class="en">**The goal** (slide 25): produce refined embeddings `E'`
in which **the nouns have ingested the meaning from their corresponding
adjectives**.</span>

### Truy vấn - <span class="en">Queries</span>

Hình dung mỗi danh từ đặt câu hỏi *"có tính từ nào đứng trước tôi không?"*.
Câu hỏi ấy được mã hóa thành một véc-tơ gọi là **truy vấn** (slide 26).
<br><span class="en">Each noun asks *"are there any adjectives sitting in
front of me?"*, encoded as a vector called the **query** (slide 26).</span>

Ba chi tiết kỹ thuật, mỗi chi tiết đều có hệ quả:
<br><span class="en">Three technical details, each with a consequence:</span>

| Chi tiết | Slide | Hệ quả |
|---|---|---|
| Véc-tơ truy vấn có **số chiều nhỏ hơn nhiều** véc-tơ nhúng | 27 | Phép so khớp rẻ hơn nhiều so với so khớp trực tiếp hai véc-tơ nhúng |
| `Q = WQ · E`, áp cho **mọi** véc-tơ nhúng trong ngữ cảnh | 28-29 | Một truy vấn cho **mỗi** token, không phải chỉ cho danh từ |
| **Các phần tử của `WQ` là tham số của mô hình** | 29 | Hành vi thật của nó **được học từ dữ liệu**, không ai thiết kế |

Dòng cuối là dòng quan trọng nhất. Câu hỏi *"có tính từ nào đứng trước tôi
không?"* **không hề được lập trình vào mô hình** - nó là cách con người diễn
giải một ma trận mà quá trình huấn luyện tự tìm ra. Slide 46 sau này nói thẳng
điều này: các câu hỏi ấy là **phép loại suy trực giác**.
<br><span class="en">The last row matters most. That question is **not
programmed into the model** - it is a human reading of a matrix that training
discovered. Slide 46 later says so outright: the questions are **intuitive
analogies**.</span>

### Khóa - <span class="en">Keys</span>

Một ma trận thứ hai, **ma trận khóa `WK`**, cũng đầy tham số chỉnh được, nhân
với từng véc-tơ nhúng để ra dãy véc-tơ **khóa** (slide 30). Cách hiểu do slide
đưa ra: **khóa là các câu trả lời tiềm năng cho truy vấn**.
<br><span class="en">A second matrix `WK`, equally full of tunable parameters,
produces the **keys** (slide 30), understood as **potential answers to the
queries**.</span>

Ma trận khóa ánh xạ véc-tơ nhúng về **cùng không gian số chiều nhỏ** như truy
vấn (slide 31) - bắt buộc phải cùng không gian, vì bước sau là tích vô hướng
giữa hai loại véc-tơ ấy.
<br><span class="en">It maps embeddings into **that same smaller-dimensional
space** (slide 31) - necessarily the same, since the next step is a dot
product between them.</span>

Trong ví dụ: **khóa do từ *fluffy* sinh ra khớp rất sát với truy vấn do từ
*creature* sinh ra** (slide 32). Đó là nghĩa vận hành của "tính từ này liên
quan tới danh từ kia".
<br><span class="en">In the example, **the key produced by *fluffy* is closely
aligned to the query produced by *creature*** (slide 32).</span>

### Từ lưới thô tới mẫu hình chú ý - <span class="en">From raw grid to attention pattern</span>

1. **Tính toàn bộ tích vô hướng của các cặp khóa - truy vấn** (slide 33),
   được một lưới giá trị chạy từ `−∞` tới `∞`.
   <br><span class="en">**Compute all key-query dot products** (slide 33),
   giving a grid from `−∞` to `∞`.</span>
2. **Chuẩn hóa bằng softmax dọc theo từng cột** (slide 34), để các số **nằm
   giữa 0 và 1 và mỗi cột cộng lại bằng 1**, như một phân phối xác suất.
   <br><span class="en">**Normalise with a softmax down each column** (slide
   34), so the numbers lie **between 0 and 1 and each column sums to
   1**.</span>
3. Lưới đã chuẩn hóa ấy **là mẫu hình chú ý** (slide 35).
   <br><span class="en">That normalised grid **is the attention pattern**
   (slide 35).</span>

**Vì sao chuẩn hóa theo CỘT chứ không phải theo hàng**: mỗi cột ứng với **một
vị trí đang được cập nhật**, và ta muốn phần đóng góp vào vị trí đó là **một
tổng có trọng số cộng lại bằng 1**. Nếu chuẩn hóa theo hàng thì con số nhận
được sẽ trả lời câu hỏi khác - "từ này ảnh hưởng tới các từ khác bao nhiêu" -
chứ không phải câu hỏi cần trả lời.
<br><span class="en">**Why normalise by column, not row**: each column is
**one position being updated**, and the contributions to it must be **a
weighted sum adding to 1**. Normalising by row would answer a different
question.</span>

### Hai con số kỹ thuật đáng nhớ - <span class="en">Two technical figures</span>

**`Kᵀ Q` là cách viết cực gọn cho lưới mọi tích vô hướng khóa - truy vấn**
(slide 36). Nhìn ra điều này là hiểu vì sao một phép nhân ma trận duy nhất
thay được cả vòng lặp hai lớp so từng cặp - và đó chính là chỗ tính song song
của Transformer nằm.
<br><span class="en">**`Kᵀ Q` is a really compact way to represent the grid of
all key-query dot products** (slide 36). Seeing this is seeing why one matrix
multiply replaces a double loop - which is where the Transformer's parallelism
lives.</span>

**Kích thước của mẫu hình chú ý bằng bình phương độ dài ngữ cảnh** (slide 38).
Đây là con số có hệ quả thực tế lớn nhất trong cả chương: gấp đôi cửa sổ ngữ
cảnh thì **chi phí chú ý tăng gấp bốn**. Nó giải thích trực tiếp vì sao có
mục **giới hạn ngữ cảnh** ở [[chatgpt-application-layer]].
<br><span class="en">**The size of the attention pattern is equal to the
square of the context size** (slide 38). Doubling the context window
**quadruples** the attention cost, which is directly why
[[chatgpt-application-layer]] has a context-limit entry.</span>

### Giá trị: cập nhật véc-tơ nhúng - <span class="en">Values: updating the embedding</span>

Có mẫu hình chú ý rồi thì bước tiếp theo là **thực sự cập nhật các véc-tơ
nhúng** (slide 39). Cách trực tiếp nhất dùng **ma trận thứ ba, ma trận giá trị
`WV`**: nhân nó với véc-tơ nhúng của từ thứ nhất được **véc-tơ giá trị**, rồi
**cộng véc-tơ đó vào véc-tơ nhúng của từ thứ hai** (slide 40).
<br><span class="en">With the pattern in hand, the next step is to **actually
update those embeddings** (slide 39), using **a third matrix, the value matrix
`WV`** (slide 40).</span>

Và việc này không chỉ làm với một véc-tơ nhúng: **áp cùng một tổng có trọng số
trên mọi cột**, sinh ra một dãy các thay đổi (slide 41).
<br><span class="en">And not for one embedding only: **the same weighted sum
is applied across all of the columns**, producing a sequence of changes (slide
41).</span>

### Vì sao cần tới ba ma trận chứ không phải một - <span class="en">Why three matrices, not one</span>

Chương không đặt câu hỏi này thẳng, nhưng câu trả lời đọc được từ chính ba
vai trò. Nếu chỉ có một ma trận thì **mức liên quan** và **nội dung được
chuyển** buộc phải là cùng một thứ. Tách ra thành khóa và giá trị cho phép
**so khớp theo một tiêu chí nhưng chuyển đi một nội dung khác** - đúng như
phép loại suy tìm kiếm ở [[self-attention]]: so khớp với tiêu đề video nhưng
nhận về chính video.
<br><span class="en">The chapter does not ask this directly, but the answer
follows from the three roles. With one matrix, **relevance** and **what gets
transferred** would have to be the same thing. Separating keys from values
allows **matching on one criterion while transferring something else** -
exactly the search analogy in [[self-attention]].</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter06-large-language-models]] - slide 18-22 (ví dụ *mole*, véc-tơ nhúng
giống hệt nhau, việc của khối chú ý, phạm vi xa), 23 (một đầu trước, nhiều đầu
sau), 24-25 (véc-tơ nhúng ban đầu và mục tiêu `E'`), 26-29 (truy vấn, `WQ`,
tham số học được), 30-32 (khóa, `WK`, *fluffy* khớp *creature*), 33-35 (tích
vô hướng, softmax theo cột, mẫu hình chú ý), 36 (công thức `Kᵀ Q`), 38 (bình
phương độ dài ngữ cảnh), 39-41 (ma trận giá trị `WV`, tổng có trọng số), 45-47
(cùng cơ chế, dựng lại thành các bước).
<br><span class="en">The slides above.</span>

## Liên quan - <span class="en">Related</span>

- [[self-attention]] - cùng cơ chế, cách trình bày của Chapter 5 (phép loại
  suy tìm kiếm, mã hóa vị trí, nhiều đầu).
  <br><span class="en">the same mechanism as presented in Chapter 5.</span>
- [[transformer-architecture]] - mẫu hình chú ý được đặt vào đâu trong mô
  hình.
  <br><span class="en">where the pattern sits inside the model.</span>
- [[word-embedding]] - véc-tơ `E` mà cơ chế này nhận vào.
  <br><span class="en">the `E` vectors this mechanism consumes.</span>
- [[activation-functions]] - softmax, hàm biến điểm số thành trọng số.
  <br><span class="en">softmax, turning scores into weights.</span>
- [[distance-measures]] - tích vô hướng đã gặp ở Chapter 4 như một thước đo
  độ tương tự.
  <br><span class="en">the dot product, met in Chapter 4 as a similarity
  measure.</span>
- [[large-language-model]] - vì sao phép toán song song hóa được lại quyết
  định tất cả.
  <br><span class="en">why a parallelisable operation decided everything.</span>

## Lưu ý - <span class="en">Caveats</span>

**Công thức ở slide 36 thiếu mẫu số chia tỉ lệ.** Slide viết softmax của
`Kᵀ Q` mà không nêu rõ phép chia cho căn bậc hai số chiều khóa. Chapter 5 viết
đầy đủ hơn là `softmax(Q · K′ / scaling)`. Khi trả lời thi nên nhắc tới bước
chia tỉ lệ ấy.
<br><span class="en">**Slide 36's formula omits the scaling denominator.** It
writes the softmax of `Kᵀ Q` without stating the division by the square root of
the key dimension; Chapter 5 writes `softmax(Q · K′ / scaling)`. Mention the
scaling step in an exam answer.</span>

**Thứ tự `Kᵀ Q` ở đây và `Q · K′` ở Chapter 5 là cùng một đại lượng** viết
theo hai quy ước véc-tơ cột và véc-tơ hàng khác nhau. Đừng coi đó là mâu
thuẫn giữa hai chương.
<br><span class="en">**`Kᵀ Q` here and `Q · K′` in Chapter 5 are the same
quantity** under column-vector and row-vector conventions. This is not a
contradiction between the chapters.</span>
