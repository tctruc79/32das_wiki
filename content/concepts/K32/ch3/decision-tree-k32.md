---
type: concept
title: "Cây quyết định (K32)"
title_en: "Decision Tree (K32)"
tags: [chapter-3, k32, decision-tree, classification, algorithm]
created: 2026-08-28
updated: 2026-08-28
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

Slide 53: **nút / nút quyết định** = một thuộc tính/biến/đặc trưng;
**nhánh / cây con** = cây được tạo ra khi tách; **nút gốc** = nơi cây bắt
đầu; **nút lá** = nơi cho đầu ra cuối cùng; **tách** = chia một nút quyết
định hoặc nút gốc thành các nút con theo điều kiện cho trước; **tỉa** =
loại bỏ các nhánh không mong muốn; **độ sâu** = chiều dài đường đi dài
nhất từ gốc tới lá.
<br><span class="en">Slide 53: node/decision node = an attribute;
branch/sub-tree = a tree formed by splitting; root node = where the tree
starts; leaf node = where the final output comes from; splitting =
dividing a node into sub-nodes by a condition; pruning = removing
unwanted branches; depth = the longest root-to-leaf path.</span>

### Cây phân loại vs cây hồi quy - <span class="en">Classification vs regression trees</span>

Slide 55 (**mới** so với bản 2025):

| | Cây phân loại | Cây hồi quy |
|---|---|---|
| Đầu ra | Định tính | Định lượng |
| Tiêu chí tách | Độ không thuần Gini, độ hỗn loạn, sai số phân loại | Mức giảm phương sai, MSE |
| Dự đoán tại nút lá | **Phạm trù chiếm đa số** | **Trung bình hoặc trung vị** |

Cả hai đều là học có giám sát — một họ thuật toán duy nhất (CART) bao
trọn cả 2 phía.
<br><span class="en">Slide 55 (**new** versus 2025): classification trees
have qualitative output, split on Gini/entropy/classification error, and
predict the **majority category** in the leaf; regression trees have
quantitative output, split on variance reduction or MSE, and predict the
**mean or median**. A single family (CART) covers both.</span>

### Cách xây cây và độ thuần khiết - <span class="en">Building the tree, and purity</span>

Quy trình 3 bước (slide 58): bắt đầu từ cây rỗng → tách theo thuộc tính
**tốt nhất** kế tiếp → đệ quy. Slide nhấn mạnh: **toàn bộ khó khăn nằm ở
chữ "tốt nhất"** — "tốt nhất" nghĩa là phép tách làm các nút con **thuần
khiết nhất có thể**.

Với pᵢ là tỷ lệ quan sát thuộc lớp i trong nút, K lớp và Σpᵢ = 1 (nút
thuần khiết chỉ chứa 1 lớp), có 3 thước đo (slide 62-65):

| Thước đo | Công thức | Ghi chú |
|---|---|---|
| Sai số phân loại | Eₘ = 1 − max(pᵢ) | Đơn giản nhất |
| Độ không thuần Gini (Gini impurity) | Σpᵢ(1 − pᵢ) = 1 − Σpᵢ² | Tiêu chí mặc định của CART |
| Độ hỗn loạn (entropy) | −Σpᵢ·log₂(pᵢ) | Tiêu chí của ID3; chạy từ 0 (thuần khiết) tới log₂K |

Giá trị càng **thấp** ⇒ nút càng thuần khiết/đồng nhất. Khoảng giá trị
của độ hỗn loạn là bổ sung mới của bản 2026: với K = 3 lớp, cực đại là
log₂3 ≈ 1,585 bit. Cả 3 slide dùng **chung một ví dụ**: nút chứa lớp A
16 quan sát, lớp B 13 quan sát, lớp C 1 quan sát — yêu cầu tính lần lượt
cả 3 chỉ số cho nút đó.
<br><span class="en">The 3-step procedure (slide 58): start from an empty
tree → split on the next **best** attribute → recurse. "Best" means the
split making the children as **pure** as possible. The 3 purity measures
(slides 62-65) are classification error 1 − max(pᵢ), **Gini impurity**
1 − Σpᵢ² (CART's default) and **entropy** −Σpᵢlog₂(pᵢ) (ID3's criterion,
running 0 to log₂K — with K = 3, up to ≈ 1.585 bits). Lower ⇒ purer. All
three slides share one worked example: a node with class A: 16, B: 13,
C: 1.</span>

### Độ lợi thông tin và luật xây cây - <span class="en">Information gain and the build rules</span>

**Độ lợi thông tin** (slide 69) dựa trên mức **giảm** độ hỗn loạn sau khi
tách theo một thuộc tính; xây cây chính là tìm thuộc tính cho độ lợi
**cao nhất**. Với tập S tách theo thuộc tính A có các giá trị v:

IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|) · Entropy(S_v)

**Luật xây cây** (slide 66): nhánh có độ hỗn loạn bằng 0 là nút lá; nhánh
có độ hỗn loạn lớn hơn 0 cần tách tiếp; nếu không thể đạt độ hỗn loạn
bằng 0 ở các nút lá thì **quyết định theo đa số đơn giản**.

**Quy trình 4 bước chi tiết** (slide 71): (1) tính độ hỗn loạn của cả tập
dữ liệu; (2) với mỗi thuộc tính: tính độ hỗn loạn cho mọi giá trị phân
loại, lấy độ hỗn loạn trung bình **có trọng số**, rồi tính độ lợi của
thuộc tính đó; (3) chọn thuộc tính có độ lợi cao nhất; (4) lặp tới khi
thỏa tiêu chí dừng.
<br><span class="en">**Information gain** (slide 69) is the entropy
*decrease* after splitting on an attribute:
IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|)·Entropy(S_v); building the tree
means repeatedly picking the highest-gain attribute. **Rules** (slide
66): entropy 0 ⇒ a leaf; entropy > 0 ⇒ split further; if zero entropy is
unreachable, decide by simple majority. **The 4 detailed steps** (slide
71): compute the dataset's entropy → for each attribute compute the
entropy of all its values, take the **weighted** average, compute its
gain → pick the highest gain → repeat until stopping.</span>

### ID3 vs CART - <span class="en">ID3 vs CART</span>

Slide 59-61 nêu 4 thuật toán (ID3, C4.5, CART, CHAID) và khai triển 2:

| | ID3 (slide 60) | CART (slide 61) |
|---|---|---|
| Bài toán | Phân loại | Cả phân loại lẫn hồi quy |
| Tiêu chí | Độ hỗn loạn + độ lợi thông tin | Gini (phân loại), MSE (hồi quy) |
| Dữ liệu số | **Không xử lý trực tiếp** | Xử lý được |
| Kiểu tách | **Nhiều nhánh** (mỗi phạm trù 1 nhánh) | **Luôn nhị phân** (câu hỏi có/không) |
| Điểm yếu / mạnh | Dễ quá khớp, tạo cây thiên lệch vì độ lợi thông tin **ưu ái thuộc tính có nhiều giá trị phân biệt** | Xử lý được dữ liệu lớn, hỗ trợ tỉa theo chi phí–độ phức tạp |

**Điểm cần nhớ khi lập trình**: `scikit-learn` cài đặt một phiên bản CART
tối ưu hóa — `DecisionTreeClassifier` và `DecisionTreeRegressor` là
**CART chứ không phải ID3**; nhưng ID3 vẫn là thuật toán rõ ràng nhất để
hiểu ý tưởng, nên slide dạy ID3 trước.
<br><span class="en">Slides 59-61 name ID3, C4.5, CART and CHAID, and
expand two. ID3: classification only, entropy + information gain, does
**not** handle numeric data directly, **multi-way** splits, may overfit
and produce biased trees because information gain **favours attributes
with many distinct values**. CART: both tasks, Gini/MSE, **always binary
splits**, handles large datasets, supports cost-complexity pruning.
**Programming note**: `scikit-learn` implements optimised CART —
`DecisionTreeClassifier`/`DecisionTreeRegressor` are **CART, not ID3** —
but ID3 is clearest for understanding, so the slides teach it first.</span>

### Khi nào dừng, và tỉa cây - <span class="en">When to stop, and pruning</span>

**Dừng** (slide 70) khi: mọi bản ghi trong tập con hiện tại có cùng đầu
ra; hoặc mọi bản ghi có cùng bộ thuộc tính đầu vào; hoặc đã chạm số quan
sát tối thiểu mỗi lá (`min_samples_leaf`); hoặc đã chạm độ sâu tối đa
(`max_depth`).

**Tỉa** (mới so với bản 2025): **tỉa trước** (dừng sớm — dùng chính các
luật trên) và **tỉa sau** (nuôi cây đầy đủ rồi cắt bớt các nhánh không
cải thiện hiệu năng kiểm định). Trong CART, tỉa sau là **tỉa theo chi
phí–độ phức tạp**, điều khiển bởi α (`ccp_alpha`), phạt theo **số nút
lá**.
<br><span class="en">**Stop** (slide 70) when all records share the
output, or share the same inputs, or `min_samples_leaf` / `max_depth` is
reached. **Pruning** (new versus 2025): **pre-pruning** (early stopping
via those rules) and **post-pruning** (grow the full tree, then cut back
branches that don't improve validation performance) — in CART, cost-
complexity pruning controlled by α = `ccp_alpha`, penalising the **number
of leaves**.</span>

### Ưu và nhược điểm của một cây đơn lẻ - <span class="en">Single-tree pros and cons</span>

**Ưu** (slide 72, **mới**): **diễn giải được rất cao** — cây đọc được như
một tập luật; **không cần chuẩn hóa thang đo**; xử lý được cả đầu vào số
lẫn phân loại; tự động nắm bắt quan hệ phi tuyến và tương tác.

**Nhược**: **không ổn định** — thay đổi nhỏ trong dữ liệu có thể tạo ra
cây rất khác (phương sai cao); dễ quá khớp nếu nuôi tới độ sâu tối đa;
phép tách **song song với trục** nên ranh giới chéo phải xấp xỉ bằng bậc
thang.

Slide kết luận thẳng: chính điều này dẫn tới phần tổ hợp — **trung bình
hóa nhiều cây loại bỏ gần hết sự không ổn định**, và đó đúng là việc rừng
ngẫu nhiên làm.
<br><span class="en">**Pros** (slide 72, **new**): highly interpretable
(read as a set of rules); **no feature scaling needed**; handles numeric
and categorical inputs; captures non-linearity and interactions
automatically. **Cons**: **unstable** — a small data change can produce a
very different tree (high variance); easily overfits at full depth;
**axis-parallel** splits approximate diagonal boundaries by steps. The
slide concludes that this motivates the ensemble section: **averaging
many trees removes most of the instability**.</span>

### Ví dụ 4.1 và 4.2 trong Python - <span class="en">Examples 4.1 and 4.2 in Python</span>

Slide 73-75: `DecisionTreeClassifier(criterion="gini", max_depth=3,
min_samples_leaf=5, random_state=42)` — `criterion` đổi được sang
`"entropy"`; in độ chính xác trên tập huấn luyện **cạnh** độ chính xác
trên tập kiểm tra (chẩn đoán quá khớp trực tiếp); in ma trận nhầm lẫn và
báo cáo phân loại; vẽ cây bằng `plot_tree(tree, feature_names=X.columns,
class_names=tree.classes_, filled=True)`. **Ví dụ 4.2**: xem đặc trưng
nào thật sự chi phối dự đoán bằng `pd.Series(tree.feature_importances_,
index=X.columns).sort_values(ascending=False)`.
<br><span class="en">Slides 73-75: `DecisionTreeClassifier(criterion=
"gini", max_depth=3, min_samples_leaf=5, random_state=42)`; print train
accuracy **next to** test accuracy (a direct overfitting diagnostic);
confusion matrix and classification report; draw with `plot_tree(...)`.
**Example 4.2**: which features actually drive predictions, via
`tree.feature_importances_`.</span>

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
