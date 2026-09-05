---
type: concept
title: "Rừng ngẫu nhiên (K32)"
title_en: "Random Forest (K32)"
tags: [chapter-3, k32, random-forest, ensemble, bagging]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Rừng ngẫu nhiên là một thuật toán học **tổ hợp**: xây rất nhiều cây quyết
định nhỏ, yếu, rồi kết hợp chúng thành một bộ học mạnh bằng cách **lấy
trung bình** (hồi quy) hoặc **biểu quyết đa số** (phân loại). Nó tồn tại
để giải đúng một nhược điểm của cây đơn lẻ: **sự không ổn định** (phương
sai cao).
<br><span class="en">A random forest is an **ensemble** learning
algorithm: build many small, weak decision trees and combine them into a
single strong learner by **averaging** (regression) or **majority vote**
(classification). It exists to fix exactly one weakness of a single tree:
its **instability** (high variance).</span>

## Diễn giải - <span class="en">Explanation</span>

### Hai nguồn ngẫu nhiên - <span class="en">Two sources of randomness</span>

Toàn bộ bí quyết của rừng ngẫu nhiên nằm ở 2 cơ chế giữ cho các cây khác
nhau: **đóng bao (bagging)** — mỗi cây được huấn luyện trên một **mẫu
lặp lại có hoàn lại (bootstrap)** của các quan sát, chứ không phải toàn
bộ dữ liệu gốc; và **lấy mẫu con đặc trưng** — tại **mỗi phép tách**, chỉ
một tập con ngẫu nhiên gồm k trong số m đặc trưng được xem xét, chứ
không phải toàn bộ m đặc trưng. Nhờ hai cơ chế này, các cây trong rừng
bị **khử tương quan** với nhau, và việc lấy trung bình các cây đã khử
tương quan triệt tiêu được phần lớn phương sai vốn có của một cây đơn lẻ.
Điểm mấu chốt cần hiểu rõ: nếu bỏ đi cả hai nguồn ngẫu nhiên này — tức
mọi cây đều huấn luyện trên đúng một dữ liệu và xét đúng một tập đặc
trưng — thì mọi cây sẽ giống hệt nhau, và trung bình hóa chúng **không**
giảm được phương sai chút nào, vì không có gì để "trung bình hóa ra".
<br><span class="en">The whole trick behind a random forest lies in 2
mechanisms that keep the trees different: **bagging** — each tree is
trained on a **bootstrap sample** of the observations (drawn with
replacement), not the full original dataset; and **feature
subsampling** — at **each split**, only a random subset of k out of m
features is considered, not all m. Thanks to these two mechanisms, the
trees in the forest become **decorrelated**, and averaging decorrelated
trees cancels away most of a single tree's inherent variance. The key
point to understand: remove both sources of randomness — i.e. every
tree trains on the exact same data and considers the exact same feature
set — and every tree would be identical, so averaging them reduces
**no** variance at all, since there is nothing to "average away".</span>

### Thuật toán 2 giai đoạn - <span class="en">The two-stage algorithm</span>

Nuôi một rừng ngẫu nhiên là một vòng lặp đơn giản, lặp lại n lần để tạo
n cây: rút một mẫu bootstrap từ dữ liệu huấn luyện → chọn ngẫu nhiên k
trong tổng số m đặc trưng (với **k ≪ m**) → trong k đặc trưng đó, tìm
điểm tách tốt nhất → tách nút thành các nút con → lặp lại tới khi thỏa
luật dừng. Giá trị k mặc định thường dùng là **k = √m cho bài toán phân
loại** và **k = m/3 cho bài toán hồi quy** — đủ nhỏ để các cây thực sự
khác nhau, đủ lớn để mỗi cây vẫn học được điều gì đó có ý nghĩa. Khi dự
đoán cho một quan sát mới, mỗi cây trong rừng đưa ra dự đoán riêng của
nó; với bài toán phân loại, rừng đếm phiếu và lấy mục tiêu nhiều phiếu
nhất; với hồi quy, biểu quyết được thay bằng **trung bình** của n dự
đoán.
<br><span class="en">Growing a random forest is a simple loop, repeated
n times to build n trees: draw a bootstrap sample from the training
data → randomly select k of the m features (**k ≪ m**) → find the best
split among those k → split the node → repeat until the stopping rule.
The typical default is **k = √m for classification** and **k = m/3 for
regression** — small enough for the trees to genuinely differ, large
enough for each tree to still learn something meaningful. When
predicting for a new observation, each tree in the forest casts its own
prediction; for classification the forest counts votes and takes the
most-voted target; for regression, voting is replaced by the
**average** of the n predictions.</span>

### Vì sao dùng rừng ngẫu nhiên - <span class="en">Why use it</span>

So với nuôi một cây đơn lẻ thật sâu, rừng ngẫu nhiên mang lại một loạt
lợi ích cộng dồn: với đủ số cây, nó **rất kháng quá khớp**; xử lý tốt
**giá trị khuyết** và kiểu dữ liệu hỗn hợp mà không cần tiền xử lý cầu
kỳ; cung cấp sẵn **điểm quan trọng của đặc trưng**, giúp diễn giải mô
hình dù bản thân là một "hộp đen" tổ hợp; và đặc biệt, cho một **sai số
ngoài túi (out-of-bag, OOB)** gần như miễn phí — vì mỗi cây chỉ thấy một
mẫu bootstrap, khoảng **một phần ba** dữ liệu bị bỏ lại ngoài mỗi cây, và
phần bị bỏ lại đó đóng vai trò tập kiểm định tự nhiên cho chính cây đó,
không cần tách riêng một tập validation. Một điều cần nhớ để tránh lãng
phí tài nguyên: quan hệ "càng nhiều cây càng chính xác" **chỉ đúng cho
tới khi đường cong đi ngang** — vượt qua điểm đó, thêm cây chỉ tốn thời
gian tính toán mà không mang lại lợi ích gì thêm (nhưng cũng không làm
hại, khác hẳn việc tăng độ sâu của một cây đơn lẻ).
<br><span class="en">Compared with growing one very deep single tree, a
random forest brings a stack of compounding benefits: with enough trees
it is **very resistant to overfitting**; it handles missing values and
mixed data types without elaborate preprocessing; it provides ready-made
**feature importance** scores, aiding interpretation despite being an
ensemble "black box"; and, notably, it gives an almost-free
**out-of-bag (OOB)** error — since each tree only sees one bootstrap
sample, roughly **one third** of the data is left out of each tree, and
that leftover portion serves as a natural validation set for that tree,
with no separate validation split needed. One thing worth remembering to
avoid wasted resources: "more trees, more accurate" is **only true until
the curve flattens** — beyond that point, extra trees cost computing
time without further benefit (though unlike deepening a single tree,
they also do no harm).</span>

### Trong Python - <span class="en">In Python</span>

Trong thực hành, cấu hình điển hình là `RandomForestClassifier(
n_estimators=500, max_features="sqrt", oob_score=True, random_state=42,
n_jobs=-1)` — trong đó `max_features="sqrt"` chính là cách viết lại quy
tắc k = √m bằng cú pháp `scikit-learn`, `oob_score=True` bật điểm kiểm
định miễn phí đã nói ở trên, và `n_jobs=-1` chạy song song trên mọi lõi
CPU (một tiện ích thực tế mà cây đơn lẻ không cần vì huấn luyện đã đủ
nhanh). Sau khi khớp, in `rf.oob_score_` **cạnh** `rf.score(X_test,
y_test)` cho phép so sánh trực tiếp 2 ước lượng hiệu năng — nếu chúng
gần nhau, đó là bằng chứng cho thấy OOB score đáng tin cậy như một tập
kiểm định thật sự; rồi xếp hạng 10 đặc trưng quan trọng nhất bằng
`rf.feature_importances_`.
<br><span class="en">In practice, a typical configuration is
`RandomForestClassifier(n_estimators=500, max_features="sqrt",
oob_score=True, random_state=42, n_jobs=-1)` — `max_features="sqrt"` is
simply `scikit-learn`'s way of writing the k = √m rule, `oob_score=True`
turns on the free validation score discussed above, and `n_jobs=-1`
parallelises across all CPU cores (a practical convenience a single tree
doesn't need, since it already trains fast). After fitting, printing
`rf.oob_score_` **next to** `rf.score(X_test, y_test)` allows directly
comparing the two performance estimates — if they are close, that is
evidence the OOB score is as trustworthy as a real validation set; then
rank the top 10 features with `rf.feature_importances_`.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 77-83 (mục 5.1), 85 (bảng
so sánh đóng bao vs tăng cường), 86 (bài tập nhóm 2), 110 (bảng tổng kết:
cả hai bài toán, siêu tham số `n_estimators` và `max_features`, **không
cần chuẩn hóa**, điểm mạnh là mốc so sánh mạnh và ổn định).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slides 77-83
(Section 5.1), 85 (the bagging vs boosting table), 86 (Teamwork 2), 110
(summary table: both tasks, `n_estimators`/`max_features`, **no
scaling**, a strong stable baseline).</span>

## Liên quan - <span class="en">Related</span>

- [[decision-tree-k32]] — thành phần cấu tạo nên rừng, và là vấn đề mà
  rừng ra đời để giải.
  <br><span class="en">[[decision-tree-k32]] — the forest's building
  block, and the problem it was created to solve.</span>
- [[boosting-ensemble]] — họ tổ hợp còn lại; slide 85 so sánh trực tiếp 2
  bên trên 6 tiêu chí.
  <br><span class="en">[[boosting-ensemble]] — the other ensemble family;
  slide 85 compares the two head to head on 6 criteria.</span>
- [[overfitting-underfitting-k32]] — rừng ngẫu nhiên chủ yếu tấn công
  thành phần **phương sai** của phân rã sai số.
  <br><span class="en">[[overfitting-underfitting-k32]] — random forests
  mainly attack the **variance** term of the error decomposition.</span>
- [[train-test-split-and-cross-validation]] — sai số ngoài túi là một
  dạng kiểm định "tự động" thay thế cho việc tách riêng tập kiểm định.
  <br><span class="en">[[train-test-split-and-cross-validation]] — the
  OOB error is an "automatic" form of validation that substitutes for a
  separate validation split.</span>

## Lưu ý - <span class="en">Notes</span>

Sơ đồ rừng ngẫu nhiên (slide 78) và ảnh chụp mã gốc (slide 83) chỉ có
hình, không trích xuất được văn bản. Ngoài ra, đoạn mã trên slide 82 bị
ngắt dòng lỗi ở phần chú thích `# free validation score` khi trích xuất
— nội dung tham số vẫn đọc được đầy đủ.
<br><span class="en">The random forest diagram (slide 78) and the
original-code screenshot (slide 83) are image-only. The slide 82 code
also has a broken line-wrap in its `# free validation score` comment when
extracted — the parameters themselves are fully readable.</span>
