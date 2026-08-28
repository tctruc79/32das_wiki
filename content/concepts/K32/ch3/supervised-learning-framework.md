---
type: concept
title: "Khung học có giám sát"
title_en: "The Supervised Learning Framework"
tags: [chapter-3, k32, supervised-learning, foundations]
created: 2026-08-28
updated: 2026-08-28
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

- **Hai giai đoạn của mọi dự án học máy** (slide 8): **huấn luyện** —
  học mô hình từ một tập dữ liệu huấn luyện; **áp dụng** — kiểm tra mô
  hình rồi dùng nó để ra quyết định. Chuỗi đầy đủ trên slide: dữ liệu có
  nhãn → đặc trưng x và nhãn y → học f̂ → kiểm định và tinh chỉnh → dự
  đoán cho x* mới.
  <br><span class="en">**Two phases of every ML project** (slide 8):
  **training** — learn a model from training data; **application** — test
  it, then use it to decide. The full chain: labelled data → features x
  and label y → learn f̂ → validate and tune → predict new x*.</span>
- **Điều khiến nó là "có giám sát"**: máy chỉ học được vì **có con người
  cung cấp đáp án đúng (nhãn)** cho các ví dụ huấn luyện. Cả 2 ví dụ đời
  thường trên slide 9 đều minh họa điểm này: bộ lọc thư rác học từ các
  thư đã được gắn nhãn *thư sạch*/*thư rác*; nhận diện khuôn mặt trên
  mạng xã hội học từ việc người dùng gắn thẻ bạn bè trong ảnh.
  <br><span class="en">**What makes it "supervised"**: the machine only
  learns because **a human supplied the correct answer (the label)** for
  the training examples. Both everyday examples on slide 9 show this: a
  spam filter learns from ham/spam-labelled email; social-network face
  recognition learns from users tagging friends in photos.</span>
- **4 loại học máy** (slide 12) — học có giám sát là 1 trong 4:
  <br><span class="en">**4 types of machine learning** (slide 12) —
  supervised is one of four:</span>

  | Loại | Dữ liệu | Ví dụ nhiệm vụ |
  |---|---|---|
  | Học có giám sát | Có nhãn đúng | Phân loại (đầu ra rời rạc), hồi quy (đầu ra là số) |
  | Học không giám sát | Không nhãn | Phân cụm, giảm chiều, luật kết hợp |
  | Học tăng cường | Phần thưởng/hình phạt từ môi trường | Tác nhân học qua tương tác |
  | Học tự giám sát | Nhãn sinh ra từ chính dữ liệu | Dự đoán từ kế tiếp — cách tiền huấn luyện mô hình ngôn ngữ lớn |

  Loại thứ 4 (học tự giám sát) là bổ sung mới của bản 2026; bản 2025 chỉ
  nêu 3 loại đầu.
  <br><span class="en">The 4th type (self-supervised) is new in the 2026
  version; the 2025 version listed only the first three.</span>
- **Bảng thuật ngữ nền** (slide 14) — cần thuộc để đọc phần còn lại của
  chương: **quan sát** = 1 hàng dữ liệu (xᵢ, yᵢ); **đặc trưng** (còn gọi
  là đầu vào, biến dự báo, biến, chiều, thuộc tính) = 1 cột dữ liệu xⱼ;
  **nhãn** (mục tiêu, đầu ra) = đại lượng cần dự đoán y; **mô hình** =
  hàm đã học f̂; **tham số** = học được từ dữ liệu (vd βⱼ); **siêu tham
  số** = do người dùng chọn trước khi huấn luyện (vd K, λ, độ sâu cây).
  Điểm phân biệt cốt lõi: **tham số do thuật toán ước lượng; siêu tham số
  do bạn chọn, thường bằng kiểm định chéo**.
  <br><span class="en">**The foundational vocabulary table** (slide 14):
  observation = one row; feature (input/predictor/variable/dimension/
  attribute) = one column; label (target/output) = what we predict; model
  = the learned f̂; parameter = learned from data; hyperparameter = chosen
  before training. The core distinction: **parameters are estimated by
  the algorithm; hyperparameters are selected by you, usually with
  cross-validation**.</span>
- **Lược sử trí tuệ nhân tạo** (slide 6) đặt học máy vào bối cảnh: 1950
  Turing và phép thử Turing → 1956 thuật ngữ "trí tuệ nhân tạo" tại Hội
  nghị Dartmouth → thập niên 1980 hệ chuyên gia sau "mùa đông AI" →
  thập niên 1990 học máy học từ dữ liệu thay vì luật viết tay →
  2000-2010 học sâu trên dữ liệu lớn → từ 2017 kiến trúc Transformer và
  các mô hình ngôn ngữ lớn → hiện nay AI làm được tác vụ nhiều bước và
  đóng vai trò đồng hành cùng con người.
  <br><span class="en">**A short history of AI** (slide 6) places ML in
  context: 1950 Turing → 1956 Dartmouth → 1980s expert systems after the
  AI winter → 1990s learning from data → 2000s-2010s deep learning on big
  data → 2017 onwards Transformers and LLMs → today, multi-step tasks and
  AI as a copilot.</span>
- **Vì sao khung này quan trọng cho phần hồi quy**: slide 89 nhấn mạnh
  lại rằng hồi quy dùng **cùng một khung** — chỉ kiểu của y thay đổi; mọi
  thứ về chia tập, kiểm định chéo và quá khớp áp dụng nguyên vẹn. Đó là
  lý do chương gộp phân loại và hồi quy vào cùng 1 file thay vì tách như
  bản 2025.
  <br><span class="en">**Why the frame matters for the regression half**:
  slide 89 restates that regression uses the **same framework** — only
  the type of y changes; everything about splitting, cross-validation and
  overfitting applies unchanged. That is why the chapter merges
  classification and regression into one deck instead of splitting them
  as the 2025 version did.</span>

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
học có giám sát. Tại thời điểm ingest, khóa 2026 chưa có tài liệu về
nhánh không giám sát trong `raw/`.
<br><span class="en">This frame does **not** cover unsupervised learning
(clustering, dimension reduction) — slide 12 names those tasks but states
that the lecture's focus throughout is supervised learning. At ingest
time the 2026 cohort has no unsupervised-branch material in `raw/`.</span>
