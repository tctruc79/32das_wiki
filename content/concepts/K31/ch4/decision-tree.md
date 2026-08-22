---
type: concept
title: "Cây quyết định"
title_en: "Decision Tree"
tags: [chapter-4, k31, machine-learning, classification]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Cây quyết định là kỹ thuật phân loại quan sát vào các lớp bằng cách sắp
xếp chúng đi xuống theo cây, từ nút gốc tới 1 nút lá, dựa trên các thuộc
tính được chọn tách tại mỗi nút.
<br><span class="en">A decision tree classifies observations into
classes by sorting them down the tree from the root to a leaf node, based
on attributes chosen for splitting at each node.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Khái niệm cốt lõi**: Nút/Nút quyết định (thuộc tính), Nhánh/Cây con,
  Nút gốc, Nút lá (đầu ra cuối), Tách (chia nút theo điều kiện), Tỉa
  (loại bỏ nhánh không cần thiết).
  <br><span class="en">**Core concepts**: Node/Decision Node (attribute),
  Branch/Sub-tree, Root node, Leaf node (final output), Splitting
  (dividing per condition), Pruning (removing unneeded branches).</span>
- **Đo độ thuần khiết nút lá** — 3 chỉ số, đều đo mức "lẫn lộn" giữa các
  lớp trong 1 nút: **Classification error** = 1 − max(pᵢ); **Gini
  impurity** = 1 − Σpᵢ²; **Entropy** = −Σpᵢlog₂(pᵢ). Cả 3 càng thấp thì
  nút càng thuần khiết (chỉ có 1 lớp).
  <br><span class="en">**Leaf node purity measures** — 3 metrics, all
  measuring class "mixedness" in a node: **Classification error** = 1 −
  max(pᵢ); **Gini impurity** = 1 − Σpᵢ²; **Entropy** = −Σpᵢlog₂(pᵢ). Lower
  = purer (single class).</span>
- **3 thuật toán xây cây chính**: **ID3** (sớm nhất, dùng entropy/
  information gain, không xử lý dữ liệu số, dễ quá khớp); **C4.5** (cải
  tiến ID3, dùng gain ratio, giảm quá khớp, xử lý dữ liệu thiếu); **CART**
  (dùng Gini impurity cho classification/MSE cho regression, xử lý được
  dữ liệu lớn).
  <br><span class="en">**3 main tree-building algorithms**: **ID3**
  (earliest, uses entropy/information gain, doesn't handle numeric data,
  prone to overfitting); **C4.5** (improves ID3, uses gain ratio, reduces
  overfitting, handles missing data); **CART** (Gini impurity for
  classification/MSE for regression, handles large datasets).</span>
- **Information gain** = mức giảm entropy sau khi tách theo 1 thuộc tính
  — xây cây về bản chất là tìm thuộc tính cho gain cao nhất, lặp lại đến
  khi entropy = 0 (hoặc theo tiêu chí dừng khác: min quan sát/nút, max
  độ sâu).
  <br><span class="en">**Information gain** = the entropy decrease after
  splitting on an attribute — building a tree is essentially finding the
  highest-gain attribute repeatedly, until entropy = 0 (or another
  stopping criterion: min observations/node, max depth).</span>
- Là ví dụ đầu tiên trong môn về **eager learning** (xây mô hình ngay lúc
  huấn luyện) — đối lập với [[k-nearest-neighbors]] (lazy learning, không
  xây mô hình trước, chỉ tính khi cần dự đoán).
  <br><span class="en">The first example in the course of **eager
  learning** (builds the model at training time) — contrasting
  [[k-nearest-neighbors]] (lazy learning, no upfront model, computes only
  at prediction time).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter04-decision-tree-random-forest]] — định nghĩa đầy đủ, 3 thuật
  toán, 3 chỉ số thuần khiết, quy trình xây cây, triển khai Python trên
  IRIS.
  <br><span class="en">[[chapter04-decision-tree-random-forest]] — full
  definition, 3 algorithms, 3 purity metrics, build process, Python
  implementation on IRIS.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[random-forest]] — tổ hợp nhiều cây quyết định để giảm quá khớp.
  <br><span class="en">[[random-forest]] — combines many decision trees
  to reduce overfitting.</span>
- [[k-nearest-neighbors]] — đối chiếu eager learning (Decision Tree) vs
  lazy learning (KNN).
  <br><span class="en">[[k-nearest-neighbors]] — contrasts eager learning
  (Decision Tree) vs lazy learning (KNN).</span>
- [[overfitting-underfitting]] — tỉa (pruning) là cơ chế kiểm soát quá
  khớp cụ thể cho cây quyết định.
  <br><span class="en">[[overfitting-underfitting]] — pruning is the
  concrete overfitting-control mechanism for decision trees.</span>
