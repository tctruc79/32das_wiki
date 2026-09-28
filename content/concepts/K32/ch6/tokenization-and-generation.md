---
type: concept
title: "Token, từ vựng và quy tắc giải mã"
title_en: "Tokens, Vocabulary and Decoding Rules"
tags: [chapter-6, k32, tokenization, vocabulary, sampling, decoding, autoregressive]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Một **token** là đơn vị mà mô hình thực sự làm việc trên đó: **một từ nguyên
vẹn hoặc một mảnh của từ**, và **mỗi token nhận một số ID từ một bộ từ vựng cố
định** (slide 62).
<br><span class="en">A **token** is the unit the model actually works on: **a
whole word or a piece of a word**, and **each token gets an ID number from a
fixed vocabulary** (slide 62).</span>

**Quy tắc giải mã** là cách hệ thống chọn ra một token cụ thể từ phân phối xác
suất mà mô hình xuất ra - ví dụ **lấy mẫu**. Slide 52 nhấn mạnh: **hệ thống
không phải lúc nào cũng chọn token có xác suất cao nhất**.
<br><span class="en">A **decoding rule** is how the system selects a token
from the probability distribution the model outputs - for example
**sampling**. Slide 52 stresses: **it does not always choose the most probable
token**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Vì sao cần token - <span class="en">Why tokens are needed</span>

Lý do được nêu thẳng và rất ngắn: **LLM chỉ hiểu số** (slide 62). Cùng ý đó
đã xuất hiện ở slide 12 dưới dạng kỹ thuật hơn - **quá trình huấn luyện chỉ
làm việc với giá trị liên tục**, nên buộc phải mã hóa ngôn ngữ bằng số.
<br><span class="en">The reason is stated plainly: **the LLM only understands
numbers** (slide 62). The same point appears more technically on slide 12:
**the training process only works with continuous values**.</span>

Ba bước của slide 44 chính là đường đi từ chữ sang số:
<br><span class="en">Slide 44's three steps are the path from letters to
numbers:</span>

1. **Tách văn bản thành token.**
   <br><span class="en">Split the text into tokens.</span>
2. **Tra mỗi token trong một bảng nhúng đã học.**
   <br><span class="en">Look up each token in a learned embedding
   table.</span>
3. **Đưa thêm thông tin về vị trí token.**
   <br><span class="en">Incorporate information about token positions.</span>

Bảng ví dụ của slide: `A → x₁`, `fluffy → x₂`, `blue → x₃`, `creature → x₄`.
<br><span class="en">The slide's example table maps those four tokens to four
vectors.</span>

**Bước 2 và bước 3 là hai việc khác nhau**, dễ gộp nhầm. Bảng nhúng cho biết
**token đó là gì**; thông tin vị trí cho biết **nó đứng ở đâu**. Chapter 5 đã
giải thích vì sao bước 3 bắt buộc: dữ liệu được nạp cùng lúc chứ không tuần
tự, nên thứ tự **phải được đưa vào bằng tay** - xem [[self-attention]].
<br><span class="en">**Steps 2 and 3 are different jobs.** The table says
**what the token is**; the position says **where it stands**. Chapter 5
explains why step 3 is mandatory.</span>

### Lưu ý về một token một từ - <span class="en">The one-token-per-word caveat</span>

Slide 44 ghi rõ: **ví dụ giả định một token một từ cho đơn giản, còn bộ tách
token thật có thể cắt một từ thành nhiều token**. Slide 62 minh họa đúng điều
đó: `Chat | G | PT | is | fun` - từ *ChatGPT* bị cắt làm ba.
<br><span class="en">Slide 44 is explicit: **one token per word is a
simplification; real tokenization may split a word into several tokens**.
Slide 62 shows it: `Chat | G | PT | is | fun`.</span>

Slide 52 cũng nhắc lại trong ghi chú: **bảng dùng từ cho dễ đọc, còn mô hình
dự đoán token**.
<br><span class="en">Slide 52 repeats it: **the table uses words for
readability, while the model predicts tokens**.</span>

Việc chương nhắc lại lưu ý này **ba lần ở ba chỗ** cho thấy đây là chỗ dễ nhầm
nhất. Hệ quả thực tế: **đếm từ không bằng đếm token**, nên mọi giới hạn nói
theo token đều không quy đổi thẳng ra số từ.
<br><span class="en">The chapter repeating this **three times** marks it as
the commonest confusion. The practical consequence: **counting words is not
counting tokens**.</span>

### Quy tắc giải mã: chỗ tính ngẫu nhiên đi vào - <span class="en">Decoding: where randomness enters</span>

Mô hình xuất ra **một xác suất cho mọi token kế tiếp có thể**. Ví dụ ở slide
52: `roamed` 30%, `appeared` 25%, `was` 20%, phần còn lại 25%. Ví dụ ở slide
63: `Tokyo` 90%, `Kyoto` 5%, `Osaka` 3%, `the` 2%.
<br><span class="en">The model outputs **a probability for every possible next
token**, as in those two examples.</span>

Rồi **hệ thống chọn một token bằng một quy tắc giải mã, chẳng hạn lấy mẫu** -
và **không phải lúc nào cũng chọn token có xác suất cao nhất** (slide 52).
Slide 63 nói cùng ý bằng lời đời thường hơn: **ứng dụng chọn một token, có
thêm một chút ngẫu nhiên**.
<br><span class="en">Then **the system selects a token using a decoding rule,
such as sampling**, and **does not always choose the most probable token**
(slide 52). Slide 63 puts it plainly: **the app picks one with a little
randomness**.</span>

**Đây là câu trả lời đầy đủ cho câu hỏi ôn số 3** ("vì sao cùng một câu hỏi
lại cho ra các câu trả lời khác nhau"), và nó có hai tầng:
<br><span class="en">**This fully answers review question 3**, in two
layers:</span>

- **Tầng mô hình**: đầu ra vốn là **một phân phối**, không phải một đáp án -
  xem [[large-language-model]].
  <br><span class="en">**At the model level**: the output is **a
  distribution**, not an answer.</span>
- **Tầng ứng dụng**: quy tắc giải mã **cố tình lấy mẫu** thay vì luôn lấy cực
  đại. Nếu luôn lấy token xác suất cao nhất thì cùng một lời nhắc sẽ cho cùng
  một câu trả lời.
  <br><span class="en">**At the app level**: the decoding rule **deliberately
  samples**. Always taking the top token would make the same prompt give the
  same answer.</span>

Nói cách khác, **tính ngẫu nhiên là một lựa chọn thiết kế của ứng dụng, không
phải một khuyết tật của mô hình**.
<br><span class="en">In other words, **the randomness is an application design
choice, not a model defect**.</span>

### Vòng lặp sinh và điều kiện dừng - <span class="en">The generation loop and its stopping condition</span>

Slide 53 và 63 mô tả cùng một vòng lặp ở hai mức chi tiết:
<br><span class="en">Slides 53 and 63 describe one loop at two levels:</span>

1. **Đọc toàn bộ token đang có.**
   <br><span class="en">Read all tokens so far.</span>
2. **Xuất một xác suất cho mọi token kế tiếp có thể.**
   <br><span class="en">Output a probability for every possible next
   token.</span>
3. **Chọn một token** theo quy tắc giải mã.
   <br><span class="en">Pick one.</span>
4. **Nối vào chuỗi và lặp lại**: `P(t_{k+1} | t₁, ..., t_k)`.
   <br><span class="en">Append it and repeat.</span>
5. **Dừng ở một token đặc biệt nghĩa là "hết câu trả lời"** (slide 63), hoặc
   tổng quát hơn là **một điều kiện dừng** (slide 53).
   <br><span class="en">Stop at a special "end of answer" token, or more
   generally at a stopping condition.</span>

Điểm đáng chú ý ở bước 5: **token kết thúc cũng chỉ là một token trong từ
vựng**, được mô hình dự đoán như mọi token khác. Không có cơ chế "biết mình đã
nói xong" nào nằm ngoài phép dự đoán.
<br><span class="en">Note on step 5: **the end token is just another token in
the vocabulary**, predicted like any other. There is no separate "knows it has
finished" mechanism.</span>

### Vì sao câu trả lời trông như đang tự gõ ra - <span class="en">Why the reply seems to type itself</span>

Slide 65: ứng dụng **đổi ID token đã chọn ngược lại thành chữ**, và **chữ được
truyền ra màn hình ngay khi được sinh**. **Đó là lý do câu trả lời trông như
đang tự gõ ra.**
<br><span class="en">Slide 65: the app **converts chosen token IDs back into
words**, and **words are streamed to your screen as they are generated**.
**That's why the reply seems to "type itself out."**</span>

Đây là một chi tiết nhỏ nhưng đắt về mặt sư phạm: hiệu ứng thị giác quen
thuộc nhất của ChatGPT **là hệ quả trực tiếp của kiến trúc tự hồi quy**, chứ
không phải một hiệu ứng được thêm vào cho đẹp.
<br><span class="en">A small but valuable detail: ChatGPT's most familiar
visual effect **follows directly from the autoregressive architecture**, and
is not a cosmetic flourish.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter06-large-language-models]] - slide 44 (ba bước, bảng token, lưu ý một
token một từ), 51 (chiếu thành điểm số cho mọi token trong từ vựng), 52 (phân
phối ví dụ, quy tắc giải mã, không phải lúc nào cũng chọn cao nhất), 53 (vòng
lặp sinh, điều kiện dừng, lưu đệm), 62 (LLM chỉ hiểu số, token là từ hoặc
mảnh từ, ID từ từ vựng cố định, ví dụ `Chat|G|PT`), 63 (năm bước, ví dụ
`Tokyo` 90%, token kết thúc), 65 (đổi ngược thành chữ, truyền ra màn hình),
12 (vì sao phải mã hóa bằng số).
<br><span class="en">The slides above.</span>

## Liên quan - <span class="en">Related</span>

- [[word-embedding]] - bảng nhúng mà bước 2 tra cứu; Chapter 5 gọi cùng một
  thứ là véc-tơ nhúng.
  <br><span class="en">the embedding table step 2 looks into.</span>
- [[transformer-architecture]] - bước 1, 5 và 6 nằm trong sáu bước của kiến
  trúc.
  <br><span class="en">steps 1, 5 and 6 of the architecture.</span>
- [[large-language-model]] - đầu ra là phân phối, không phải đáp án.
  <br><span class="en">the output is a distribution, not an answer.</span>
- [[chatgpt-application-layer]] - ứng dụng là nơi quy tắc giải mã được chọn.
  <br><span class="en">the app is where the decoding rule is chosen.</span>
- [[activation-functions]] - softmax biến điểm số thành xác suất.
  <br><span class="en">softmax turns scores into probabilities.</span>

## Lưu ý - <span class="en">Caveats</span>

**Chương không nêu tên một quy tắc giải mã cụ thể nào ngoài "lấy mẫu".** Không
có nhiệt độ, không có top-k, không có top-p, không có tìm kiếm chùm. Đừng gán
các khái niệm đó cho chương này khi trích dẫn.
<br><span class="en">**The chapter names no decoding rule beyond
"sampling".** There is no temperature, top-k, top-p or beam search. Do not
attribute those to it.</span>

**Chương cũng không nói bộ tách token được xây dựng thế nào.** Nó chỉ nói kết
quả là "từ nguyên vẹn hoặc mảnh của từ" và **bộ tách token thật khác nhau tùy
hệ**. Cách các mảnh ấy được chọn nằm ngoài phạm vi.
<br><span class="en">**Nor does it say how a tokenizer is built** - only that
the result is whole words or word pieces, and that **real tokenizers
vary**.</span>
