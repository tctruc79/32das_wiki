---
type: concept
title: "Khung học không giám sát"
title_en: "The Unsupervised Learning Framework"
tags: [chapter-4, k32, unsupervised-learning, machine-learning]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Học không giám sát là nhánh học máy làm việc với dữ liệu **chỉ có `xi`,
không có nhãn `yi`**. Mục tiêu không phải dự đoán một lượng đã biết mà là
**mô tả cấu trúc chưa biết** trong dữ liệu. Trong môn học này nó gồm hai
công cụ: **phân cụm** (nhóm các quan sát giống nhau, tức giảm số dòng) và
**giảm chiều bằng PCA** (thay các biến tương quan bằng ít thành phần
không tương quan hơn, tức giảm số cột).
<br><span class="en">Unsupervised learning is the branch of machine
learning that works with data containing **only `xi`, with no label
`yi`**. The goal is not to predict a known quantity but to **describe
unknown structure** in the data. In this course it comprises two tools:
**clustering** (grouping similar observations, i.e. reducing rows) and
**dimension reduction via PCA** (replacing correlated variables with
fewer uncorrelated components, i.e. reducing columns).</span>

## Diễn giải - <span class="en">Explanation</span>

### Vị trí trong bản đồ học máy - <span class="en">Position in the machine learning map</span>

Học máy có 3 nhánh: **có giám sát** (dữ liệu là các cặp `(xi, yi)`; chia
tiếp thành hồi quy khi `y` là số và phân loại khi `y` là biến hạng mục),
**không giám sát** (chỉ có `xi`; chia tiếp thành phân cụm và giảm chiều),
và **học tăng cường** (có tín hiệu thưởng, học chính sách hành động).
Chapter 3 của khóa này phủ trọn nhánh thứ nhất; chương 4 phủ trọn nhánh
thứ hai; nhánh thứ ba chỉ được nhắc tên để hoàn thiện bức tranh.
<br><span class="en">Machine learning has 3 branches: **supervised**
(data comes as pairs `(xi, yi)`; split further into regression when `y`
is numeric and classification when `y` is categorical),
**unsupervised** (`xi` only; split further into clustering and dimension
reduction), and **reinforcement learning** (a reward signal, learning a
policy). This cohort's Chapter 3 covers the whole first branch; Chapter 4
covers the whole second; the third is named only to complete the
picture.</span>

### Bảng so sánh 6 dòng - <span class="en">The 6-row comparison</span>

| Tiêu chí | Có giám sát | Không giám sát |
|---|---|---|
| Dữ liệu vào | `(xi, yi)` | Chỉ `xi` |
| Câu hỏi | Dự đoán một lượng đã biết | Mô tả cấu trúc chưa biết |
| Chân lý nền | Có tồn tại | Không tồn tại |
| Đánh giá | Bên ngoài và khách quan (sai số kiểm định chéo) | Bên trong và phần nào chủ quan (silhouette, phương sai giải thích được, tính hữu dụng) |
| Rủi ro chính | Quá khớp | Tìm ra cấu trúc không tồn tại |
| Ví dụ trong môn | Hồi quy, phân loại | Phân cụm, PCA |

Dòng đáng nhớ nhất là dòng **chân lý nền**: vì không có `y` nào để đối
chiếu, mọi thước đo chất lượng trong học không giám sát đều là thước đo
**nội tại** - chúng đo xem kết quả có gọn gàng không, chứ không đo xem kết
quả có **đúng** không. Khái niệm "đúng" đơn giản là không tồn tại ở đây.
<br><span class="en">The most memorable row is **ground truth**: because
there is no `y` to compare against, every quality measure in unsupervised
learning is an **internal** one - it measures whether the result is tidy,
not whether the result is **right**. The notion of "right" simply does
not exist here.</span>

### Cùng một đám điểm, hai câu hỏi - <span class="en">The same points, two questions</span>

Hình minh họa ở slide 7 đặt hai bức tranh cạnh nhau với **cùng một tập
`x`**. Bên trái, màu của từng điểm được cho trước, và câu hỏi là "**biên
phân chia nằm ở đâu?**". Bên phải không có màu nào, và câu hỏi là "**liệu
có nhóm nào không?**". Khác biệt duy nhất: màu là **dữ kiện** hay là **thứ
cần tìm**.
<br><span class="en">The illustration on slide 7 puts two pictures side
by side with **the same set of `x`**. On the left the colour of each
point is given, and the question is "**where is the boundary?**" On the
right there are no colours, and the question is "**are there groups at
all?**" The only difference: whether the colours are **given** or are
**what you are trying to find**.</span>

### Cảnh báo trung tâm của cả chương - <span class="en">The chapter's central warning</span>

Slide 8 phát biểu điều quan trọng nhất phải nhớ về học không giám sát:
**K-Means luôn luôn trả về K cụm và PCA luôn luôn trả về các thành phần,
kể cả từ nhiễu thuần túy.** Thuật toán **không bao giờ** cho biết cấu trúc
nó tìm ra là thật hay không - người phân tích phải tự trả lời. Hệ quả thực
hành: mọi kết quả học không giám sát phải đi kèm chẩn đoán (chọn K có biện
luận, kiểm tra tính bền vững, so với mô hình nhiễu), nếu không thì nó chỉ
là một bức tranh đẹp. Cảnh báo này được nhắc lại ở slide 25 (K-Means áp
đặt K cụm hình cầu lên bất cứ thứ gì), slide 45 (danh sách 7 điều kiểm
tra), slide 76 (lập luận vòng tròn khi dùng PC1-PC2 để "xác nhận" phân
cụm) và slide 81 (cả hai đều chỉ sinh ra giả thuyết).
<br><span class="en">Slide 8 states the single most important thing to
remember about unsupervised learning: **K-Means always returns K clusters
and PCA always returns components, even from pure noise.** The algorithm
**never** tells you whether the structure it found is real - the analyst
must. The practical consequence: every unsupervised result must ship with
diagnostics (a justified K, a stability check, a comparison against a
noise model), or it is merely a pretty picture. The warning recurs on
slide 25 (K-Means imposes K spherical clusters on whatever you give it),
slide 45 (the 7-point checklist), slide 76 (the circularity of using
PC1-PC2 to "validate" a clustering) and slide 81 (both tools only
generate hypotheses).</span>

### Vì sao nhánh này vẫn cần nhánh kia - <span class="en">Why each branch needs the other</span>

Hai nhánh không tách rời trong thực hành. Slide 6 ghi rõ: PCA **rất
thường** được dùng làm bước tiền xử lý cho các mô hình có giám sát, và
nhãn cụm thu được từ phân cụm **thường được biến thành một đặc trưng** cho
chúng. Chiều ngược lại cũng đúng: cách duy nhất để chứng minh một phân
khúc khách hàng là "thật" thường là cho thấy nó **dự đoán được** một biến
mà thuật toán phân cụm chưa từng thấy - tức phải quay lại dùng một bài
toán có giám sát để kiểm chứng một kết quả không giám sát.
<br><span class="en">The two branches are not separate in practice. Slide
6 says it plainly: PCA is **very often** used as a preprocessing step for
supervised models, and cluster labels are **frequently turned into a
feature** for them. The reverse holds too: the only convincing way to show
a customer segmentation is "real" is usually to show that it
**predicts** something the clustering algorithm never saw - that is,
going back to a supervised problem to validate an unsupervised
result.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 5 (sơ đồ định vị 3
nhánh), 6 (mốc so sánh có giám sát), 7 (cùng một đám điểm, hai câu hỏi), 8
(bảng chọn 6 dòng và cảnh báo trung tâm), 9 (ký hiệu), 81 (bảng tổng kết
hai công cụ).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 5
(the 3-branch locating diagram), 6 (the supervised benchmark), 7 (the
same points, two questions), 8 (the 6-row choice table and the central
warning), 9 (notation), 81 (the two-tool summary table).</span>

## Liên quan - <span class="en">Related</span>

- [[clustering-k32]] - công cụ thứ nhất của nhánh này: giảm số dòng.
  <br><span class="en">[[clustering-k32]] - the branch's first tool:
  reducing rows.</span>
- [[pca-k32]] - công cụ thứ hai: giảm số cột.
  <br><span class="en">[[pca-k32]] - the second tool: reducing
  columns.</span>
- [[clustering-pitfalls-checklist]] - câu trả lời thực hành cho cảnh báo
  ở slide 8.
  <br><span class="en">[[clustering-pitfalls-checklist]] - the practical
  answer to slide 8's warning.</span>
- [[supervised-learning-framework]] - nhánh đối diện, học ở Chapter 3.
  <br><span class="en">[[supervised-learning-framework]] - the opposite
  branch, taught in Chapter 3.</span>
- [[pca-combined-with-other-algorithms-k32]] - chỗ hai nhánh gặp nhau.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - where
  the two branches meet.</span>
