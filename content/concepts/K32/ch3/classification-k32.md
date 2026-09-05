---
type: concept
title: "Phân loại (K32)"
title_en: "Classification (K32)"
tags: [chapter-3, k32, classification, supervised-learning]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Phân loại là kỹ thuật **xếp dữ liệu vào một số lớp cho trước** — nhánh
của học có giám sát ứng với trường hợp biến mục tiêu y là một loại/phạm
trù chứ không phải một con số. Thuật toán thực hiện việc ánh xạ dữ liệu
đầu vào sang một phạm trù cụ thể được gọi là **bộ phân loại**.
<br><span class="en">Classification is the technique of **categorising
data into a given number of classes** — the branch of supervised learning
where the target y is a category rather than a number. The algorithm that
maps input data to a specific category is called a **classifier**.</span>

## Diễn giải - <span class="en">Explanation</span>

Phân loại tồn tại dưới 3 dạng, phân biệt nhau bởi **số lượng và tính độc
quyền của nhãn**: phân loại nhị phân (đúng 2 kết quả có thể, như thư rác/
thư sạch); phân loại đa lớp (nhiều hơn 2 lớp, nhưng mỗi quan sát vẫn chỉ
nhận **một và chỉ một** nhãn — như 3 loài hoa diên vĩ trong Ví dụ 3.1);
và phân loại đa nhãn (mỗi quan sát có thể mang **nhiều nhãn cùng lúc**,
như 1 bài báo vừa được gắn thẻ "tài chính" vừa "công nghệ"). Dạng thứ ba
này là góc nhìn mới nhất, phản ánh thực tế rằng nhiều bài toán phân loại
hiện đại (gắn thẻ nội dung, phân loại tài liệu) không ép được vào khuôn
"một quan sát, một nhãn" của 2 dạng đầu.
<br><span class="en">Classification comes in 3 kinds, distinguished by
the **number and exclusivity of labels**: binary (exactly 2 possible
outcomes, e.g. spam/ham); multi-class (more than 2 classes, but each
observation still gets **one and only one** label — e.g. the 3 Iris
species in Example 3.1); and multi-label (each observation may carry
**several labels at once**, e.g. an article tagged both "finance" and
"technology"). This third kind is the newest perspective, reflecting
that many modern classification problems (content tagging, document
classification) don't fit the "one observation, one label" mould of the
first two.</span>

Xây một mô hình phân loại, bất kể thuật toán cụ thể nào, luôn đi qua
đúng 4 bước: **khởi tạo** bộ phân loại sẽ dùng, **huấn luyện** nó bằng dữ
liệu có nhãn, **dự đoán** mục tiêu cho quan sát mới (hàm `predict(X)`
trả về nhãn dự đoán), rồi **đánh giá** mô hình trên dữ liệu giữ lại. Bốn
bước này ánh xạ đúng 1-1 vào 4 dòng lệnh `scikit-learn` lặp lại xuyên
suốt chương: khởi tạo lớp mô hình → `.fit()` → `.predict()` →
`classification_report()` — một khuôn mẫu đủ ổn định để áp dụng cho bất
kỳ thuật toán phân loại nào, từ KNN tới rừng ngẫu nhiên.
<br><span class="en">Building a classification model, whatever the
specific algorithm, always passes through exactly 4 steps: initialize
the classifier, train it on labelled data, predict the target for a new
observation, then evaluate on held-out data — mapping 1-to-1 onto the
four `scikit-learn` lines used throughout the chapter: instantiate →
`.fit()` → `.predict()` → `classification_report()` — a template stable
enough to apply to any classification algorithm, from KNN to random
forests.</span>

Trong số rất nhiều thuật toán phân loại đang tồn tại — Naive Bayes, cây
quyết định, hồi quy logistic, K láng giềng gần nhất, máy véc-tơ hỗ trợ,
rừng ngẫu nhiên, tăng cường gradient/XGBoost, mạng nơ-ron — chương này
chỉ chọn dạy sâu 3: **KNN** (đại diện họ thuật toán dựa trên khoảng
cách), **cây quyết định** (đại diện họ dựa trên luật), và **tổ hợp cây**
(rừng ngẫu nhiên và tăng cường). Lựa chọn này không ngẫu nhiên — 3 nhóm
này cùng nhau bao phủ hầu hết các họ ý tưởng chính được dùng trong thực
tế, nên nắm vững cả 3 cho phép suy luận hợp lý về những thuật toán chưa
được học chi tiết.
<br><span class="en">Among the many classification algorithms that
exist — Naive Bayes, decision trees, logistic regression, KNN, SVM,
random forests, gradient boosting/XGBoost, neural networks — this
chapter teaches only 3 in depth: **KNN** (distance-based), **decision
trees** (rule-based), and **tree ensembles** (random forests and
boosting). The choice is not arbitrary — together these three families
cover most of the main ideas used in practice, so mastering them
supports reasonable inference about algorithms not covered in
detail.</span>

Vế thực dụng nhất của cả chương nằm ở đây: chọn chỉ số đánh giá không thể
tách rời khỏi bối cảnh ứng dụng, vì độ chính xác gây hiểu lầm trên dữ
liệu mất cân bằng. Bài tập nhóm gắn liền với mục này yêu cầu áp dụng
đúng nguyên tắc đó: với mỗi ứng dụng phân loại trong một lĩnh vực thực tế
(y tế, tài chính, tiếp thị, mạng xã hội, thực thi pháp luật…), phải nêu
rõ **chỉ số nào quan trọng nhất — độ chuẩn xác, độ bao phủ hay độ chính
xác — và giải thích vì sao**. Hai ứng dụng minh họa của chương — bộ lọc
thư rác và phát hiện gian lận giao dịch, cả hai dùng KNN — đều là trường
hợp dữ liệu mất cân bằng điển hình (số email/giao dịch bất thường luôn
chiếm thiểu số áp đảo), nên đồng thời cũng là minh chứng sống động cho lý
do vì sao độ chính xác một mình là không đủ.
<br><span class="en">The chapter's most applied lesson sits here:
choosing an evaluation metric cannot be separated from the application
context, because accuracy misleads on imbalanced data. The associated
teamwork exercise applies exactly this principle: for each
classification application in a real-life domain, state **which metric
matters most — precision, recall, or accuracy — and justify why**. The
chapter's two illustrative applications — a spam filter and transaction
fraud detection, both via KNN — are themselves textbook imbalanced-data
cases (anomalous emails/transactions are always a small minority), so
they double as live evidence for why accuracy alone is not enough.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 27 (định nghĩa và 3 dạng),
29 (4 bước), 30 (danh sách thuật toán), 49-51 (ứng dụng và bài tập nhóm
1); gián tiếp ở slide 19 (chỉ số phân loại) và 55 (cây phân loại vs cây
hồi quy).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slide 27
(definition and the 3 kinds), 29 (the 4 steps), 30 (algorithm list),
49-51 (applications and Teamwork 1); indirectly slide 19 (classification
metrics) and 55 (classification vs regression trees).</span>

## Liên quan - <span class="en">Related</span>

- [[supervised-learning-framework]] — phân loại là 1 trong 2 nhánh của
  khung này, chia theo kiểu của y.
  <br><span class="en">[[supervised-learning-framework]] —
  classification is one of the frame's two branches, split by the type of
  y.</span>
- [[linear-regression-k32]] — nhánh còn lại; slide 89 nhấn mạnh cả hai
  dùng chung phương pháp luận đánh giá.
  <br><span class="en">[[linear-regression-k32]] — the other branch;
  slide 89 stresses that both share the same evaluation
  methodology.</span>
- [[k-nearest-neighbors-k32]] — thuật toán phân loại đầu tiên được dạy
  chi tiết trong chương.
  <br><span class="en">[[k-nearest-neighbors-k32]] — the first
  classification algorithm taught in detail.</span>
- [[decision-tree-k32]], [[random-forest-k32]], [[boosting-ensemble]] —
  các thuật toán phân loại còn lại của chương.
  <br><span class="en">[[decision-tree-k32]], [[random-forest-k32]],
  [[boosting-ensemble]] — the chapter's remaining classification
  algorithms.</span>
- [[model-evaluation-metrics-k32]] — bộ chỉ số dùng để chấm điểm một bộ
  phân loại.
  <br><span class="en">[[model-evaluation-metrics-k32]] — the metric set
  used to score a classifier.</span>

## Lưu ý - <span class="en">Notes</span>

Hồi quy logistic được nêu tên trong danh sách thuật toán phân loại (slide
30) nhưng **không được giảng chi tiết ở bất kỳ đâu trong chương này** —
một khoảng trống nguồn của khóa 2026, giống hệt tình trạng đã ghi nhận ở
khóa 2025.
<br><span class="en">Logistic regression is named in the algorithm list
(slide 30) but is **never taught in detail anywhere in this chapter** — a
source gap for the 2026 cohort, mirroring the same gap recorded for the
2025 cohort.</span>
