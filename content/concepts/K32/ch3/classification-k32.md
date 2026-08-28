---
type: concept
title: "Phân loại (K32)"
title_en: "Classification (K32)"
tags: [chapter-3, k32, classification, supervised-learning]
created: 2026-08-28
updated: 2026-08-28
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

- **3 dạng bài toán phân loại** (slide 27):
  <br><span class="en">**3 kinds of classification problem** (slide
  27):</span>

  | Dạng | Định nghĩa | Ví dụ |
  |---|---|---|
  | Phân loại nhị phân | Đúng 2 kết quả có thể | Thư rác / thư sạch |
  | Phân loại đa lớp | Nhiều hơn 2 lớp; mỗi quan sát nhận **một và chỉ một** nhãn | 3 loài hoa diên vĩ trong Ví dụ 3.1 |
  | Phân loại đa nhãn | Mỗi quan sát có thể mang **nhiều nhãn cùng lúc** | 1 bài báo vừa gắn thẻ "tài chính" vừa gắn thẻ "công nghệ" |

  Dạng thứ 3 (đa nhãn) là **bổ sung mới của bản 2026**; bản 2025 chỉ nêu
  nhị phân và đa lớp.
  <br><span class="en">The third kind (multi-label) is **new in the 2026
  version**; the 2025 version listed only binary and multi-class.</span>
- **4 bước xây một mô hình phân loại** (slide 29): (1) **khởi tạo** bộ
  phân loại sẽ dùng; (2) **huấn luyện** bộ phân loại bằng dữ liệu có
  nhãn; (3) **dự đoán** mục tiêu — với một quan sát X chưa có nhãn,
  `predict(X)` trả về nhãn dự đoán y; (4) **đánh giá** mô hình trên dữ
  liệu giữ lại. Bốn bước này ánh xạ đúng 1-1 vào 4 dòng lệnh
  `scikit-learn` dùng xuyên chương: khởi tạo lớp mô hình → `.fit()` →
  `.predict()` → `classification_report()`.
  <br><span class="en">**4 steps to build a classification model** (slide
  29): initialize the classifier → train it on labelled data → predict
  the target (`predict(X)` returns the predicted label) → evaluate on
  held-out data. These map 1-to-1 onto the four `scikit-learn` lines used
  throughout the chapter: instantiate → `.fit()` → `.predict()` →
  `classification_report()`.</span>
- **Danh sách thuật toán phân loại phổ biến** (slide 30): Naive Bayes,
  cây quyết định, hồi quy logistic, K láng giềng gần nhất, máy véc-tơ hỗ
  trợ (SVM), rừng ngẫu nhiên, tăng cường gradient/XGBoost, mạng nơ-ron.
  Bài giảng chọn học **KNN** (đại diện phương pháp dựa trên khoảng cách),
  **cây quyết định** (đại diện phương pháp dựa trên luật) và **tổ hợp
  cây** — theo slide, ba nhóm này cùng nhau bao phủ các họ ý tưởng chính
  dùng trong thực tế.
  <br><span class="en">**Popular classification algorithms** (slide 30):
  Naive Bayes, decision tree, logistic regression, KNN, SVM, random
  forest, gradient boosting/XGBoost, neural networks. The lecture picks
  **KNN** (distance-based), **decision trees** (rule-based) and **tree
  ensembles** — together, per the slide, the main families of ideas used
  in practice.</span>
- **Chọn chỉ số theo bối cảnh — phần quan trọng nhất về mặt vận dụng**:
  slide 19 dạy rằng độ chính xác gây hiểu lầm trên dữ liệu mất cân bằng,
  và **bài tập nhóm 1** (slide 51) yêu cầu áp dụng đúng điều đó: với mỗi
  ứng dụng phân loại trong một lĩnh vực thực tế (y tế, tài chính, tiếp
  thị, mạng xã hội, thực thi pháp luật…), phải nêu **chỉ số nào quan
  trọng nhất — độ chuẩn xác, độ bao phủ hay độ chính xác — và giải thích
  vì sao**. Đây là dạng câu hỏi vận dụng điển hình.
  <br><span class="en">**Choosing the metric by context — the most
  applied part**: slide 19 teaches that accuracy misleads on imbalanced
  data, and **Teamwork 1** (slide 51) asks students to apply exactly
  that: for each classification application in a real-life domain, state
  **which metric matters most — precision, recall or accuracy — and
  justify why**. This is the archetypal applied exam question.</span>
- **2 ứng dụng minh họa** (slide 49-50): bộ phân loại thư rác bằng KNN
  (nguồn towardsdatascience.com) và phát hiện gian lận trong dữ liệu giao
  dịch bằng KNN (nguồn kaggle.com). Cả hai đều là trường hợp dữ liệu mất
  cân bằng điển hình — nên cũng là minh họa sống động cho cảnh báo về độ
  chính xác ở slide 19.
  <br><span class="en">**2 illustrative applications** (slides 49-50): a
  KNN spam email classifier and KNN fraud detection on transaction data.
  Both are textbook imbalanced-data cases — so they double as live
  illustrations of slide 19's accuracy warning.</span>

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
đây là khoảng trống nguồn của khóa 2026 tại thời điểm ingest, giống hệt
tình trạng đã ghi nhận ở khóa 2025.
<br><span class="en">Logistic regression is named in the algorithm list
(slide 30) but is **never taught in detail anywhere in this chapter** — a
source gap for the 2026 cohort at ingest time, mirroring the same gap
recorded for the 2025 cohort.</span>
