---
type: concept
title: "Lớp ứng dụng quanh LLM: ChatGPT"
title_en: "The Application Layer Around an LLM: ChatGPT"
tags: [chapter-6, k32, chatgpt, prompt, system-prompt, tools, memory, context-limit]
created: 2026-09-28
updated: 2026-09-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

**ChatGPT không phải là mô hình ngôn ngữ lớn.** LLM (một mô hình GPT) là **"bộ
não"**, và nó **làm đúng một việc: cho một đoạn văn bản, dự đoán token kế
tiếp**. Ứng dụng ChatGPT là **"lớp vỏ"**: nó **biến cuộc trò chuyện của bạn
thành văn bản mà LLM đọc được, rồi biến đầu ra của LLM ngược lại thành câu trả
lời** (slide 58).
<br><span class="en">**ChatGPT is not the same thing as the LLM.** The LLM (a
GPT model) is **"the brain"** and **does exactly one thing: given some text,
it predicts the next token**. The ChatGPT app is **"the wrapper"**: it **turns
your chat into text the LLM can read, and turns the LLM's output back into a
reply** (slide 58).</span>

Công thức của chương:
**`ChatGPT = LLM + dựng lời nhắc + tách token + vòng lặp sinh + các phần phụ
trợ`**.
<br><span class="en">The chapter's formula: **`ChatGPT = LLM + prompt building
+ tokenization + a generation loop + extras`**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Đường ống bốn bước - <span class="en">The four-step pipeline</span>

Slide 59 vẽ toàn bộ vòng đời một tin nhắn:
<br><span class="en">Slide 59 draws a message's whole life:</span>

| Bước | Ai làm | Nội dung |
|---|---|---|
| Bạn gõ tin nhắn | Người dùng | |
| **1. Dựng lời nhắc đầy đủ** | Ứng dụng | chỉ dẫn + lịch sử + tin nhắn của bạn |
| **2. Tách thành token** | Ứng dụng | văn bản thành số |
| **3. Dự đoán token kế tiếp** | **LLM** | lặp lại nhiều lần |
| **4. Token trở lại thành văn bản** | Ứng dụng | |
| Câu trả lời hiện ra | Người dùng | |

Điều đáng nhìn ra khi đọc bảng: **LLM chỉ xuất hiện ở đúng một dòng**. Ba
trong bốn bước là việc của ứng dụng.
<br><span class="en">The thing to notice: **the LLM appears on exactly one
row**. Three of the four steps are the app's work.</span>

### Bước 1: lời nhắc ẩn - <span class="en">Step 1: the hidden prompt</span>

**LLM không bao giờ chỉ thấy tin nhắn của bạn.** Ứng dụng ghép một kịch bản
ẩn gồm ba phần (slide 60):
<br><span class="en">**The LLM never sees only your message.** The app
assembles a hidden script in three parts (slide 60):</span>

- **Lời nhắc hệ thống**: chỉ dẫn, kiểu *"You are a helpful assistant."*
  <br><span class="en">**System prompt**: instructions such as "You are a
  helpful assistant."</span>
- **Lịch sử trò chuyện**: các lượt trước, **có nhãn người nói**.
  <br><span class="en">**Conversation history**: earlier turns, labeled by
  speaker.</span>
- **Tin nhắn mới của bạn**, rồi **một dấu hiệu nghĩa là "giờ tới lượt trợ lý
  nói"**.
  <br><span class="en">**Your new message**, then a marker meaning "the
  assistant speaks now."</span>

Phép loại suy của slide: **giống như đưa cho một diễn viên kịch bản** - mô tả
nhân vật, đoạn thoại đã diễn ra, và một dòng trống cho câu thoại kế tiếp.
<br><span class="en">The analogy: **like handing an actor a script**.</span>

**Mẫu hội thoại đã ghép** (slide 61), bản giản lược:
<br><span class="en">**The assembled chat template** (slide 61):</span>

```
[system]    You are a helpful assistant.
[user]      What is the capital of France?
[assistant] The capital of France is Paris.
[user]      And of Japan?
[assistant] _
```

**Việc của mô hình đơn giản là viết tiếp văn bản này từ chỗ trống ở cuối.**
<br><span class="en">**The model's job is simply to continue this text from
the blank at the end.**</span>

Nhìn thấy khuôn mẫu này là **trả lời được ngay câu hỏi ôn số 1**: ChatGPT
không hề "nhớ" các tin nhắn trước. **Toàn bộ lịch sử được dán lại vào lời nhắc
ở mỗi lượt.** Mô hình đọc lại từ đầu mỗi lần, và đó là lý do bảng ở
[[transformer-architecture]] ghi rằng tham số đứng yên trong lúc suy luận -
thứ thay đổi là **đầu vào**, không phải mô hình.
<br><span class="en">Seeing the template **answers review question 1**:
ChatGPT does not "remember". **The whole history is pasted back into the
prompt every turn.** The model rereads it from scratch each time.</span>

### Bốn phần phụ trợ, và điểm chung của chúng - <span class="en">Four extras, and what they share</span>

| Phần phụ trợ | Cách hoạt động (slide 66) |
|---|---|
| **Công cụ** | Mô hình có thể **yêu cầu tìm kiếm web hoặc tính toán**; ứng dụng chạy giúp rồi **dán kết quả vào lời nhắc** |
| **Bộ nhớ** | **LLM quên giữa các cuộc trò chuyện**; tính năng bộ nhớ **lưu ghi chú và thêm vào các lời nhắc sau** |
| **Kiểm tra an toàn** | Các **bộ lọc riêng biệt** sàng lọc yêu cầu và câu trả lời |
| **Giới hạn ngữ cảnh** | LLM **đọc được một lượng văn bản có hạn mỗi lần**, nên trò chuyện dài có thể bị **cắt bớt hoặc tóm tắt lại** |

Ý chốt số 5 của chương gói cả bảng này lại: **công cụ, bộ nhớ và kiểm tra an
toàn hoạt động bằng cách thay đổi thứ được đưa vào lời nhắc** (slide 69).
<br><span class="en">The chapter's fifth takeaway sums the table up: **tools,
memory, and safety checks work by changing what goes into the prompt** (slide
69).</span>

Nói cách khác: **không phần phụ trợ nào sửa mô hình; tất cả đều chỉ sửa đầu
vào của mô hình**. Đây là ý quan trọng nhất của phần 3, vì nó cho một quy tắc
suy luận dùng được: gặp bất kỳ tính năng mới nào của một ứng dụng chat, hãy
hỏi **"nó thay đổi lời nhắc thế nào?"** trước khi nghĩ rằng mô hình đã được
nâng cấp.
<br><span class="en">In other words: **no extra modifies the model; they all
modify its input**. This gives a usable rule: when a chat app ships a new
feature, ask **"how does it change the prompt?"** before assuming the model
changed.</span>

**Vòng lặp gọi công cụ** (slide 67) minh họa đúng quy tắc ấy: LLM viết ra
`search: weather Hanoi` → **ứng dụng chạy tìm kiếm** → **kết quả được dán vào
lời nhắc** → **LLM viết tiếp dựa trên kết quả đó**. Mô hình **không truy cập
internet**; nó chỉ viết ra một yêu cầu và đọc phần văn bản được dán thêm vào.
Đây là **câu trả lời cho câu hỏi ôn số 4**.
<br><span class="en">**The tool-call loop** (slide 67) shows exactly that: the
model **does not access the internet**; it writes a request and reads text
pasted in for it. That **answers review question 4**.</span>

### Giới hạn ngữ cảnh, và vì sao nó tồn tại - <span class="en">The context limit, and why it exists</span>

Slide 66 chỉ nói **LLM đọc được một lượng văn bản có hạn mỗi lần, nên trò
chuyện dài có thể bị cắt bớt hoặc tóm tắt lại** - đó là **câu trả lời cho câu
hỏi ôn số 5**.
<br><span class="en">Slide 66 says only that the limit exists and that long
chats may be **trimmed or summarized** - **review question 5**.</span>

Nhưng **lý do** nằm ở phần 1, slide 38: **kích thước của mẫu hình chú ý bằng
bình phương độ dài ngữ cảnh**. Gấp đôi cửa sổ ngữ cảnh thì chi phí chú ý tăng
**gấp bốn**. Nối hai slide cách nhau gần 30 trang này lại là cách hiểu đầy đủ
nhất về giới hạn ngữ cảnh - xem [[attention-pattern]].
<br><span class="en">But the **reason** is on slide 38: **the size of the
attention pattern equals the square of the context size**. Doubling the window
**quadruples** the cost. Joining these two slides, nearly 30 pages apart, is
the complete explanation.</span>

Hệ quả thực hành: **cắt bớt và tóm tắt không phải là bộ nhớ**. Khi một cuộc
trò chuyện vượt giới hạn, phần cũ bị **bỏ đi hoặc nén lại**, nên chi tiết ở
đầu cuộc trò chuyện có thể **biến mất hẳn** mà không có cảnh báo nào.
<br><span class="en">The practical consequence: **trimming and summarising are
not memory**. Once a chat exceeds the limit, the old part is **dropped or
compressed**, so early detail can **vanish** with no warning.</span>

### Phép loại suy chốt chương - <span class="en">The closing analogy</span>

Slide 68, đáng nhớ nguyên văn:
<br><span class="en">Slide 68, worth memorising:</span>

> **LLM là một nhà văn xuất sắc bị nhốt trong phòng, chỉ đọc được một trang
> giấy và viết ra từ kế tiếp. ChatGPT là người trợ lý bên ngoài, chuẩn bị
> trang giấy đó (chỉ dẫn, cuộc trò chuyện, kết quả tìm kiếm), luồn qua khe
> cửa, nhận lại từng từ mới, luồn trang giấy vào lại, và cuối cùng đưa cho
> bạn câu trả lời hoàn chỉnh.**
> <br><span class="en">**The LLM is a brilliant writer locked in a room who
> can only read a page and write the next word. ChatGPT is the assistant
> outside who prepares the page (instructions, conversation, search results),
> slides it under the door, collects each new word, slides the page back, and
> finally shows you the finished reply.**</span>

Phép loại suy này gọn vì nó mã hóa được **cả bốn** đặc điểm quan trọng cùng
lúc: mô hình **chỉ đọc một trang** (giới hạn ngữ cảnh), **chỉ viết một từ**
(dự đoán token kế tiếp), **trang giấy phải được luồn vào lại mỗi lần** (không
có trí nhớ giữa các bước), và **người trợ lý quyết định trên trang giấy có gì**
(lời nhắc hệ thống, công cụ, bộ nhớ).
<br><span class="en">It is economical because it encodes **all four** key
properties at once: the model **reads one page** (context limit), **writes one
word** (next-token prediction), **the page must be slid back in each time** (no
memory between steps), and **the assistant decides what is on the page**
(system prompt, tools, memory).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter06-large-language-models]] - slide 58 (bộ não so với lớp vỏ, công
thức ChatGPT), 59 (đường ống bốn bước), 60 (ba phần của lời nhắc, phép loại
suy kịch bản), 61 (mẫu hội thoại), 62-63 (tách token và vòng lặp sinh, xem
[[tokenization-and-generation]]), 64 (bên trong LLM, tóm tắt lại phần 1-2),
65 (đổi ngược thành chữ, hiệu ứng tự gõ), 66 (bốn phần phụ trợ), 67 (vòng lặp
gọi công cụ), 68 (phép loại suy nhà văn và trợ lý), 69 (năm ý chốt), 70 (năm
câu hỏi ôn), 38 (bình phương độ dài ngữ cảnh - lý do của giới hạn ngữ cảnh).
<br><span class="en">The slides above.</span>

## Liên quan - <span class="en">Related</span>

- [[large-language-model]] - "bộ não", và vì sao nó chỉ làm một việc.
  <br><span class="en">the "brain", and why it does one thing.</span>
- [[tokenization-and-generation]] - bước 2 và 3 của đường ống.
  <br><span class="en">steps 2 and 3 of the pipeline.</span>
- [[transformer-architecture]] - vì sao tham số đứng yên trong lúc suy luận.
  <br><span class="en">why parameters stay fixed during inference.</span>
- [[attention-pattern]] - lý do kỹ thuật của giới hạn ngữ cảnh.
  <br><span class="en">the technical reason for the context limit.</span>
- [[on-thi]] - năm câu hỏi ôn của chương, kèm trả lời.
  <br><span class="en">the chapter's five review questions, answered.</span>

## Lưu ý - <span class="en">Caveats</span>

**Chương mô tả ChatGPT như một kiến trúc chung, không phải tài liệu sản phẩm.**
Nó không nêu phiên bản mô hình, không nêu kích thước cửa sổ ngữ cảnh cụ thể,
không mô tả cơ chế bộ nhớ thật của bất kỳ sản phẩm nào. Mọi con số cụ thể
trong chương (`Tokyo` 90%, `roamed` 30%) đều **được ghi rõ là bịa ra để minh
họa**.
<br><span class="en">**The chapter describes ChatGPT as a general
architecture, not as product documentation.** It names no model version, no
concrete context-window size, and no product's actual memory mechanism. Every
specific number in it is **explicitly labelled as invented for
illustration**.</span>

**Tên "ChatGPT" ở đây nên đọc là "một ứng dụng chat bất kỳ dựng trên LLM".**
Cùng mô tả ấy áp được cho mọi trợ lý dạng trò chuyện; chương chọn ChatGPT vì
sinh viên đã dùng nó.
<br><span class="en">**Read "ChatGPT" here as "any chat app built on an
LLM".** The same description fits every conversational assistant; the chapter
picks ChatGPT because students already use it.</span>
