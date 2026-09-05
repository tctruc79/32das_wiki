---
type: concept
title: "Cây quyết định (K32)"
title_en: "Decision Tree (K32)"
tags: [chapter-3, k32, decision-tree, classification, algorithm]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Cây quyết định là kỹ thuật xếp quan sát vào các lớp bằng cách cho chúng
"rơi" xuống cây **từ nút gốc tới một nút lá**, mỗi bước trả lời một câu
hỏi về một thuộc tính. Đây là đại diện của họ phương pháp **dựa trên
luật** — đối lập với họ dựa trên khoảng cách mà KNN đại diện.
<br><span class="en">A decision tree classifies observations by sorting
them down the tree **from the root to a leaf node**, answering one
question about one attribute at each step. It represents the
**rule-based** family of methods — as opposed to the distance-based
family that KNN represents.</span>

## Diễn giải - <span class="en">Explanation</span>

### Thuật ngữ - <span class="en">Terminology</span>

**Nút / nút quyết định** = một thuộc tính/biến/đặc trưng;
**nhánh / cây con** = cây được tạo ra khi tách; **nút gốc** = nơi cây bắt
đầu; **nút lá** = nơi cho đầu ra cuối cùng; **tách** = chia một nút quyết
định hoặc nút gốc thành các nút con theo điều kiện cho trước; **tỉa** =
loại bỏ các nhánh không mong muốn; **độ sâu** = chiều dài đường đi dài
nhất từ gốc tới lá.
<br><span class="en">Node/decision node = an attribute;
branch/sub-tree = a tree formed by splitting; root node = where the tree
starts; leaf node = where the final output comes from; splitting =
dividing a node into sub-nodes by a condition; pruning = removing
unwanted branches; depth = the longest root-to-leaf path.</span>

### Cây phân loại vs cây hồi quy - <span class="en">Classification vs regression trees</span>

**Mới so với bản 2025**:
<br><span class="en">**New versus 2025**:</span>

| | Cây phân loại | Cây hồi quy |
|---|---|---|
| Đầu ra | Định tính | Định lượng |
| Tiêu chí tách | Độ không thuần Gini, độ hỗn loạn, sai số phân loại | Mức giảm phương sai, MSE |
| Dự đoán tại nút lá | **Phạm trù chiếm đa số** | **Trung bình hoặc trung vị** |

Cả hai đều là học có giám sát — một họ thuật toán duy nhất (CART) bao
trọn cả 2 phía.
<br><span class="en">**New versus 2025**: classification trees
have qualitative output, split on Gini/entropy/classification error, and
predict the **majority category** in the leaf; regression trees have
quantitative output, split on variance reduction or MSE, and predict the
**mean or median**. A single family (CART) covers both.</span>

### Cách xây cây và độ thuần khiết - <span class="en">Building the tree, and purity</span>

Xây một cây quyết định về bản chất chỉ là một thủ tục đệ quy 3 bước: bắt
đầu từ cây rỗng → tách theo thuộc tính **tốt nhất** kế tiếp → lặp lại đệ
quy trên từng nút con. Toàn bộ khó khăn của thuật toán nằm gọn trong chữ
"tốt nhất": nó có nghĩa là phép tách làm các nút con **thuần khiết nhất
có thể** — càng ít lẫn lộn giữa các lớp trong một nút, nút đó càng gần
với việc có thể đưa ra một quyết định dứt khoát.
<br><span class="en">Building a decision tree is, at its core, a
3-step recursive procedure: start from an empty tree → split on the
next **best** attribute → recurse on each child node. The algorithm's
entire difficulty is packed into the word "best": it means the split
that makes the child nodes as **pure as possible** — the less classes
are mixed within a node, the closer that node is to allowing a decisive
call.</span>

Với pᵢ là tỷ lệ quan sát thuộc lớp i trong nút, K lớp và Σpᵢ = 1 (nút
thuần khiết chỉ chứa 1 lớp), có 3 cách đo độ thuần khiết:
<br><span class="en">With pᵢ the proportion of observations of class i
in the node, K classes and Σpᵢ = 1 (a pure node contains only 1 class),
there are 3 ways to measure purity:</span>

| Thước đo | Công thức | Ghi chú |
|---|---|---|
| Sai số phân loại | Eₘ = 1 − max(pᵢ) | Đơn giản nhất |
| Độ không thuần Gini (Gini impurity) | Σpᵢ(1 − pᵢ) = 1 − Σpᵢ² | Tiêu chí mặc định của CART |
| Độ hỗn loạn (entropy) | −Σpᵢ·log₂(pᵢ) | Tiêu chí của ID3; chạy từ 0 (thuần khiết) tới log₂K |

Giá trị càng **thấp** ⇒ nút càng thuần khiết/đồng nhất. Độ hỗn loạn còn
có một khoảng giá trị xác định rõ ràng, hữu ích để đánh giá một con số
tính được là cao hay thấp: với K = 3 lớp, cực đại là log₂3 ≈ 1,585 bit.
Phần "Ví dụ có đáp án" bên dưới tính cả 3 chỉ số này cho cùng một nút cụ
thể, để thấy chúng đồng thuận với nhau ra sao trên cùng một dữ liệu.
<br><span class="en">Lower ⇒ purer. The 3 purity measures are
classification error 1 − max(pᵢ), **Gini impurity** 1 − Σpᵢ² (CART's
default) and **entropy** −Σpᵢlog₂(pᵢ) (ID3's criterion, running 0 to
log₂K — with K = 3, up to ≈ 1.585 bits). The worked example below
computes all three for the same node, to see how they agree.</span>

### Độ lợi thông tin và luật xây cây - <span class="en">Information gain and the build rules</span>

**Độ lợi thông tin** dựa trên mức **giảm** độ hỗn loạn sau khi tách theo
một thuộc tính; xây cây chính là tìm thuộc tính cho độ lợi **cao nhất**.
Với tập S tách theo thuộc tính A có các giá trị v:
<br><span class="en">**Information gain** is based on the entropy
**decrease** after splitting on an attribute; building the tree means
finding the attribute with the **highest** gain. For a set S split on
attribute A with values v:</span>

IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|) · Entropy(S_v)

Luật dừng theo đó rất tự nhiên: một nhánh có độ hỗn loạn bằng 0 đã là
một nút lá (không còn gì để tách thêm); một nhánh có độ hỗn loạn lớn hơn
0 vẫn cần tách tiếp; và nếu không thể đạt độ hỗn loạn bằng 0 ở các nút lá
(dữ liệu thực tế hiếm khi cho phép phân tách hoàn hảo), quyết định cuối
cùng đơn giản là theo đa số. Gộp lại thành quy trình 4 bước: (1) tính độ
hỗn loạn của cả tập dữ liệu; (2) với mỗi thuộc tính ứng viên, tính độ hỗn
loạn cho mọi giá trị phân loại, lấy trung bình **có trọng số**, rồi suy
ra độ lợi thông tin của thuộc tính đó; (3) chọn thuộc tính cho độ lợi cao
nhất để tách; (4) lặp lại tới khi thỏa tiêu chí dừng.
<br><span class="en">**Information gain** is the entropy *decrease*
after splitting on an attribute: IG(S, A) = Entropy(S) − Σ_v
(|S_v|/|S|)·Entropy(S_v); building the tree means repeatedly picking the
highest-gain attribute. The stopping rule follows naturally: a branch
with zero entropy is already a leaf; one with entropy above zero still
needs splitting; and when zero entropy is unreachable (real data rarely
allows a perfect split), the final call is simply majority vote. Put
together as 4 steps: compute the dataset's entropy → for each candidate
attribute, compute the entropy of all its values, take the **weighted**
average, derive its information gain → pick the highest-gain attribute →
repeat until stopping.</span>

### ID3 vs CART - <span class="en">ID3 vs CART</span>

Trong họ thuật toán xây cây quyết định (ID3, C4.5, CART, CHAID), 2 thuật
toán đáng nắm kỹ nhất là:
<br><span class="en">Among the family of decision-tree algorithms (ID3,
C4.5, CART, CHAID), the 2 most worth mastering are:</span>

| | ID3 | CART |
|---|---|---|
| Bài toán | Phân loại | Cả phân loại lẫn hồi quy |
| Tiêu chí | Độ hỗn loạn + độ lợi thông tin | Gini (phân loại), MSE (hồi quy) |
| Dữ liệu số | **Không xử lý trực tiếp** | Xử lý được |
| Kiểu tách | **Nhiều nhánh** (mỗi phạm trù 1 nhánh) | **Luôn nhị phân** (câu hỏi có/không) |
| Điểm yếu / mạnh | Dễ quá khớp, tạo cây thiên lệch vì độ lợi thông tin **ưu ái thuộc tính có nhiều giá trị phân biệt** | Xử lý được dữ liệu lớn, hỗ trợ tỉa theo chi phí–độ phức tạp |

**Điểm cần nhớ khi lập trình**: `scikit-learn` cài đặt một phiên bản CART
tối ưu hóa — `DecisionTreeClassifier` và `DecisionTreeRegressor` là
**CART chứ không phải ID3**; ID3 vẫn đáng học trước dù ít dùng trong thực
hành, chính vì nó là thuật toán rõ ràng nhất để nắm được ý tưởng cốt lõi.
<br><span class="en">ID3: classification only, entropy + information
gain, does **not** handle numeric data directly, **multi-way** splits,
may overfit and produce biased trees because information gain **favours
attributes with many distinct values**. CART: both tasks, Gini/MSE,
**always binary splits**, handles large datasets, supports
cost-complexity pruning. **Programming note**: `scikit-learn` implements
optimised CART — `DecisionTreeClassifier`/`DecisionTreeRegressor` are
**CART, not ID3** — but ID3 remains worth learning first as the clearest
algorithm for grasping the core idea.</span>

### Khi nào dừng, và tỉa cây - <span class="en">When to stop, and pruning</span>

Việc **dừng** tách xảy ra khi: mọi bản ghi trong tập con hiện tại có cùng
đầu ra; hoặc mọi bản ghi có cùng bộ thuộc tính đầu vào; hoặc đã chạm số
quan sát tối thiểu mỗi lá (`min_samples_leaf`); hoặc đã chạm độ sâu tối
đa (`max_depth`). Nhưng dừng đúng lúc không đủ để tránh quá khớp — cần
thêm cơ chế **tỉa** (mới so với bản 2025): **tỉa trước** (dừng sớm, dùng
chính các luật trên) và **tỉa sau** (nuôi cây đầy đủ rồi cắt bớt các
nhánh không cải thiện hiệu năng kiểm định). Trong CART, tỉa sau là **tỉa
theo chi phí–độ phức tạp**, điều khiển bởi α (`ccp_alpha`), phạt theo
**số nút lá** — càng nhiều lá, hình phạt càng nặng, buộc cây phải chứng
minh mỗi lần tách thêm là thực sự đáng giá.
<br><span class="en">**Stopping** happens when all records share the
output, or share the same inputs, or `min_samples_leaf` / `max_depth` is
reached. But stopping in time is not enough to avoid overfitting — a
**pruning** mechanism is also needed (new versus 2025): **pre-pruning**
(early stopping
via those rules) and **post-pruning** (grow the full tree, then cut back
branches that don't improve validation performance) — in CART, cost-
complexity pruning controlled by α = `ccp_alpha`, penalising the **number
of leaves**.</span>

### Ưu và nhược điểm của một cây đơn lẻ - <span class="en">Single-tree pros and cons</span>

Một cây đơn lẻ có sức hút riêng nhờ **khả năng diễn giải rất cao** — nó
đọc được trực tiếp như một tập luật if/else, **không đòi hỏi chuẩn hóa
thang đo** (khác hẳn KNN), xử lý được cả đầu vào số lẫn phân loại, và tự
động nắm bắt quan hệ phi tuyến cùng tương tác giữa các biến mà không cần
người phân tích tự tay đặc trưng hóa.
<br><span class="en">A single tree draws its appeal from **very high
interpretability** — it reads directly as a set of if/else rules,
**requires no feature scaling** (unlike KNN), handles both numeric and
categorical inputs, and automatically captures non-linear relationships
and interactions without manual feature engineering.</span>

Nhưng chính sự linh hoạt đó cũng là nguồn gốc của điểm yếu lớn nhất: cây
đơn lẻ **không ổn định** — chỉ một thay đổi nhỏ trong dữ liệu huấn luyện
cũng có thể tạo ra một cây có cấu trúc hoàn toàn khác (dấu hiệu của
phương sai cao), và dễ quá khớp nếu được nuôi tới độ sâu tối đa. Ngoài
ra, vì mọi phép tách đều **song song với trục tọa độ** (mỗi lần chỉ hỏi
về 1 biến), một ranh giới quyết định chéo thực sự trong dữ liệu chỉ có
thể được xấp xỉ bằng một chuỗi bậc thang.
<br><span class="en">But that same flexibility is also the source of
its biggest weakness: a single tree is **unstable** — a small change in
the training data can produce a structurally very different tree (a
high-variance symptom), and it easily overfits when grown to full
depth. Because every split is **axis-parallel** (asking about one
variable at a time), a genuinely diagonal decision boundary in the data
can only be approximated by a staircase of splits.</span>

Chính sự không ổn định này — chứ không phải độ chính xác thấp — là động
lực trực tiếp dẫn tới phần tổ hợp tiếp theo: nếu **trung bình hóa nhiều
cây loại bỏ gần hết sự không ổn định** của một cây đơn lẻ, thì câu hỏi tự
nhiên tiếp theo là làm sao tạo ra nhiều cây đủ khác nhau để trung bình
hóa có ý nghĩa — đúng là vấn đề rừng ngẫu nhiên giải quyết.
<br><span class="en">This instability — not low accuracy — is what
directly motivates the next section: if **averaging many trees removes
most of a single tree's instability**, the natural next question is how
to make the trees different enough for averaging to matter — exactly
the problem random forests solve.</span>

### Ví dụ 4.1 và 4.2 trong Python - <span class="en">Examples 4.1 and 4.2 in Python</span>

Trong thực hành, xây một `DecisionTreeClassifier(criterion="gini",
max_depth=3, min_samples_leaf=5, random_state=42)` (`criterion` đổi được
sang `"entropy"`) rồi in độ chính xác trên tập huấn luyện **cạnh** độ
chính xác trên tập kiểm tra là cách chẩn đoán quá khớp trực tiếp và nhanh
nhất — đúng ứng dụng của bảng đối chiếu chưa khớp/quá khớp đã học. Sau
đó in ma trận nhầm lẫn và báo cáo phân loại, và trực quan hóa cây bằng
`plot_tree(tree, feature_names=X.columns, class_names=tree.classes_,
filled=True)` để thấy đúng những luật cây đã học. Bước cuối — xem đặc
trưng nào thật sự chi phối dự đoán bằng `pd.Series(
tree.feature_importances_, index=X.columns).sort_values(ascending=
False)` — biến một cây có vẻ chỉ để dự đoán thành một công cụ khám phá,
trả lời câu hỏi "biến nào quan trọng nhất" mà không cần một mô hình
thống kê riêng.
<br><span class="en">In practice, fitting a `DecisionTreeClassifier(
criterion="gini", max_depth=3, min_samples_leaf=5, random_state=42)`
(`criterion` can switch to `"entropy"`) and printing train accuracy
**next to** test accuracy is the fastest, most direct overfitting
diagnostic — a direct application of the under/overfitting comparison
learned earlier. Then print the confusion matrix and classification
report, and visualise the tree with `plot_tree(...)` to see exactly the
rules it learned. The final step — ranking which features actually drive
predictions via `tree.feature_importances_` — turns what looks like a
pure prediction tool into an exploratory one, answering "which variable
matters most" without a separate statistical model.</span>

## Ví dụ có đáp án — tính tay 3 thước đo thuần khiết - <span class="en">Worked example — computing all 3 purity measures by hand</span>

Xét một nút lá chứa 16 quan sát lớp A, 13 quan sát lớp B và 1 quan sát
lớp C (n = 30). Ba tỷ lệ lớp là pA = 16/30 ≈ 0,533, pB = 13/30 ≈ 0,433,
pC = 1/30 ≈ 0,033. Áp trực tiếp 3 công thức ở trên:
<br><span class="en">Consider a leaf node with 16 class-A, 13 class-B and
1 class-C observation (n = 30). The 3 class proportions are pA ≈ 0.533,
pB ≈ 0.433, pC ≈ 0.033. Applying the 3 formulas above directly:</span>

- **Sai số phân loại**: Eₘ = 1 − max(pᵢ) = 1 − 0,533 = **0,467**.
  <br><span class="en">**Classification error**: Eₘ = 1 − max(pᵢ) =
  1 − 0.533 = **0.467**.</span>
- **Độ không thuần Gini**: 1 − Σpᵢ² = 1 − (0,533² + 0,433² + 0,033²) =
  1 − (0,284 + 0,188 + 0,001) = **0,527**.
  <br><span class="en">**Gini impurity**: 1 − Σpᵢ² = 1 − (0.533² + 0.433²
  + 0.033²) = 1 − (0.284 + 0.188 + 0.001) = **0.527**.</span>
- **Độ hỗn loạn**: −Σpᵢlog₂(pᵢ) = −(0,533×log₂0,533 + 0,433×log₂0,433 +
  0,033×log₂0,033) ≈ −(−0,484 − 0,523 − 0,164) = **1,170 bit**.
  <br><span class="en">**Entropy**: −Σpᵢlog₂(pᵢ) = −(0.533×log₂0.533 +
  0.433×log₂0.433 + 0.033×log₂0.033) ≈ −(−0.484 − 0.523 − 0.164) =
  **1.170 bits**.</span>

Nút này khá gần với **mất thuần khiết nhất có thể cho 2 lớp chi phối**
(entropy tối đa với K = 3 là log₂3 ≈ 1,585 bit) — hợp lý, vì 2 lớp A và B
gần như chia đôi số quan sát, chỉ có lớp C là thiểu số rõ rệt.
<br><span class="en">This node sits fairly close to **maximal impurity
between its two dominant classes** (the ceiling for K = 3 is log₂3 ≈
1.585 bits) — sensible, since classes A and B nearly split the
observations evenly, with C a clear minority.</span>

Câu hỏi ôn tập của giảng viên đặt cùng bài toán ở trường hợp cực đoan
hơn: một nút có đúng 20 quan sát lớp A và 20 quan sát lớp B (pA = pB =
0,5, không có lớp thứ ba). Khi đó entropy = −(0,5×log₂0,5 + 0,5×log₂0,5)
= −(0,5×(−1) + 0,5×(−1)) = **1 bit** — đúng bằng giá trị tối đa có thể
với 2 lớp — và Gini = 1 − (0,25 + 0,25) = **0,5**, cũng là giá trị tối đa
của Gini khi K = 2. Nút này **hoàn toàn không thuần khiết**: một điểm dữ
liệu mới rơi vào đây có xác suất đúng 50/50 thuộc lớp nào, tương đương
việc tung đồng xu — đây chính xác là trường hợp tệ nhất một nút lá có
thể rơi vào, chứ không phải trường hợp tốt.
<br><span class="en">The instructor's own review question poses the same
calculation at a more extreme case: a node with exactly 20 class-A and
20 class-B observations (pA = pB = 0.5, no third class). Entropy =
−(0.5×(−1) + 0.5×(−1)) = **1 bit** — exactly the maximum possible for 2
classes — and Gini = 1 − 0.5 = **0.5**, also Gini's maximum at K = 2. The
node is **completely impure**: a new point landing here is a 50/50 coin
flip between classes — the worst case a leaf can be in, not the
best.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 53-75 (toàn bộ Phần 4), 110
(bảng tổng kết: cả hai bài toán, siêu tham số là độ sâu và số quan sát
tối thiểu mỗi lá, **không cần chuẩn hóa**, điểm mạnh là luật diễn giải
được), 111 (câu hỏi ôn tập số 2: tính độ hỗn loạn và Gini cho nút 20A/20B).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slides 53-75
(all of Section 4), 110 (summary table: both tasks, depth/min leaf, **no
scaling**, interpretable rules), 111 (review question 2: entropy and Gini
for a 20A/20B node).</span>

## Liên quan - <span class="en">Related</span>

- [[random-forest-k32]] — câu trả lời trực tiếp cho nhược điểm "không ổn
  định" của một cây đơn lẻ.
  <br><span class="en">[[random-forest-k32]] — the direct answer to the
  single tree's instability.</span>
- [[boosting-ensemble]] — cách tổ hợp còn lại, dùng cây cụt nông thay vì
  cây sâu.
  <br><span class="en">[[boosting-ensemble]] — the other ensembling
  route, using shallow stumps instead of deep trees.</span>
- [[k-nearest-neighbors-k32]] — thuật toán phân loại đứng trước; đối lập
  trên 2 điểm: dựa trên luật vs dựa trên khoảng cách, và **không cần** vs
  **bắt buộc** chuẩn hóa.
  <br><span class="en">[[k-nearest-neighbors-k32]] — the preceding
  algorithm, opposite on two axes: rule-based vs distance-based, and
  **needs no** vs **requires** scaling.</span>
- [[overfitting-underfitting-k32]] — tỉa cây và giới hạn độ sâu là cách
  kiểm soát quá khớp chuyên biệt cho cây.
  <br><span class="en">[[overfitting-underfitting-k32]] — pruning and
  depth limits are the tree-specific overfitting controls.</span>
- [[classification-k32]] — bối cảnh bài toán mà cây quyết định giải.
  <br><span class="en">[[classification-k32]] — the problem setting the
  tree solves.</span>

## Lưu ý - <span class="en">Notes</span>

Ví dụ xây cây có số liệu cụ thể (slide 67-68) chỉ tồn tại dưới dạng hình,
không trích xuất được văn bản — nên các con số của ví dụ đó không được
ghi lại ở đây. Toàn bộ công thức và quy trình ở trên lấy từ phần chữ
(slide 62-66, 69-71). Ngoài ra, đoạn mã Ví dụ 4.1 trên slide 73 **thiếu
dòng `y_pred = tree.predict(X_test)`** trong khi slide 74 lại dùng
`y_pred` — file `Example3.2_DecisionTree_New.py` trong `raw/` đã bổ sung
dòng này.
<br><span class="en">The worked tree-building example with real numbers
(slides 67-68) exists only as images with no extractable text, so its
figures are not recorded here; everything above comes from the prose
slides (62-66, 69-71). Also, the Example 4.1 code on slide 73 **omits the
line `y_pred = tree.predict(X_test)`** while slide 74 uses `y_pred` — the
file `Example3.2_DecisionTree_New.py` in `raw/` supplies it.</span>
