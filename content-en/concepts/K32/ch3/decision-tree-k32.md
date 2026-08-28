---
type: concept
title: "Decision Tree (K32)"
tags: [chapter-3, k32, decision-tree, classification, algorithm]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

A decision tree classifies observations by sorting
them down the tree **from the root to a leaf node**, answering one
question about one attribute at each step. It represents the
**rule-based** family of methods — as opposed to the distance-based
family that KNN represents.

## Explanation

### Terminology

Slide 53: node/decision node = an attribute;
branch/sub-tree = a tree formed by splitting; root node = where the tree
starts; leaf node = where the final output comes from; splitting =
dividing a node into sub-nodes by a condition; pruning = removing
unwanted branches; depth = the longest root-to-leaf path.

### Classification vs regression trees

Slide 55 (**mới** so với bản 2025):

| | Classification trees | Regression trees |
|---|---|---|
| Output | Qualitative | Quantitative |
| Splitting criterion | Gini impurity, entropy, classification error | Variance reduction, MSE |
| Leaf-node prediction | **Majority category** | **Mean or median** |

Slide 55 (**new** versus 2025): classification trees
have qualitative output, split on Gini/entropy/classification error, and
predict the **majority category** in the leaf; regression trees have
quantitative output, split on variance reduction or MSE, and predict the
**mean or median**. A single family (CART) covers both.

### Building the tree, and purity

Quy trình 3 bước (slide 58): bắt đầu từ cây rỗng → tách theo thuộc tính
**tốt nhất** kế tiếp → đệ quy. Slide nhấn mạnh: **toàn bộ khó khăn nằm ở
chữ "tốt nhất"** — "tốt nhất" nghĩa là phép tách làm các nút con **thuần
khiết nhất có thể**.

Với pᵢ là tỷ lệ quan sát thuộc lớp i trong nút, K lớp và Σpᵢ = 1 (nút
thuần khiết chỉ chứa 1 lớp), có 3 thước đo (slide 62-65):

| Measure | Formula | Note |
|---|---|---|
| Classification error | Eₘ = 1 − max(pᵢ) | Simplest |
| Gini impurity | Σpᵢ(1 − pᵢ) = 1 − Σpᵢ² | CART's default criterion |
| Entropy | −Σpᵢ·log₂(pᵢ) | ID3's criterion; runs from 0 (pure) to log₂K |

The 3-step procedure (slide 58): start from an empty
tree → split on the next **best** attribute → recurse. "Best" means the
split making the children as **pure** as possible. The 3 purity measures
(slides 62-65) are classification error 1 − max(pᵢ), **Gini impurity**
1 − Σpᵢ² (CART's default) and **entropy** −Σpᵢlog₂(pᵢ) (ID3's criterion,
running 0 to log₂K — with K = 3, up to ≈ 1.585 bits). Lower ⇒ purer. All
three slides share one worked example: a node with class A: 16, B: 13,
C: 1.

### Information gain and the build rules

**Độ lợi thông tin** (slide 69) dựa trên mức **giảm** độ hỗn loạn sau khi
tách theo một thuộc tính; xây cây chính là tìm thuộc tính cho độ lợi
**cao nhất**. Với tập S tách theo thuộc tính A có các giá trị v:

IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|) · Entropy(S_v)

**Luật xây cây** (slide 66): nhánh có độ hỗn loạn bằng 0 là nút lá; nhánh
có độ hỗn loạn lớn hơn 0 cần tách tiếp; nếu không thể đạt độ hỗn loạn
bằng 0 ở các nút lá thì **quyết định theo đa số đơn giản**.

**Information gain** (slide 69) is the entropy
*decrease* after splitting on an attribute:
IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|)·Entropy(S_v); building the tree
means repeatedly picking the highest-gain attribute. **Rules** (slide
66): entropy 0 ⇒ a leaf; entropy > 0 ⇒ split further; if zero entropy is
unreachable, decide by simple majority. **The 4 detailed steps** (slide
71): compute the dataset's entropy → for each attribute compute the
entropy of all its values, take the **weighted** average, compute its
gain → pick the highest gain → repeat until stopping.

### ID3 vs CART

Slide 59-61 nêu 4 thuật toán (ID3, C4.5, CART, CHAID) và khai triển 2:

| | ID3 (slide 60) | CART (slide 61) |
|---|---|---|
| Task | Classification | Both classification and regression |
| Criterion | Entropy + information gain | Gini (classification), MSE (regression) |
| Numeric data | **Not handled directly** | Handled |
| Split type | **Multi-way** (one branch per category) | **Always binary** (yes/no question) |
| Weakness / strength | Prone to overfitting, produces biased trees because information gain **favours attributes with many distinct values** | Handles large datasets, supports cost-complexity pruning |

Slides 59-61 name ID3, C4.5, CART and CHAID, and
expand two. ID3: classification only, entropy + information gain, does
**not** handle numeric data directly, **multi-way** splits, may overfit
and produce biased trees because information gain **favours attributes
with many distinct values**. CART: both tasks, Gini/MSE, **always binary
splits**, handles large datasets, supports cost-complexity pruning.
**Programming note**: `scikit-learn` implements optimised CART —
`DecisionTreeClassifier`/`DecisionTreeRegressor` are **CART, not ID3** —
but ID3 is clearest for understanding, so the slides teach it first.

### When to stop, and pruning

**Dừng** (slide 70) khi: mọi bản ghi trong tập con hiện tại có cùng đầu
ra; hoặc mọi bản ghi có cùng bộ thuộc tính đầu vào; hoặc đã chạm số quan
sát tối thiểu mỗi lá (`min_samples_leaf`); hoặc đã chạm độ sâu tối đa
(`max_depth`).

**Stop** (slide 70) when all records share the
output, or share the same inputs, or `min_samples_leaf` / `max_depth` is
reached. **Pruning** (new versus 2025): **pre-pruning** (early stopping
via those rules) and **post-pruning** (grow the full tree, then cut back
branches that don't improve validation performance) — in CART, cost-
complexity pruning controlled by α = `ccp_alpha`, penalising the **number
of leaves**.

### Single-tree pros and cons

**Ưu** (slide 72, **mới**): **diễn giải được rất cao** — cây đọc được như
một tập luật; **không cần chuẩn hóa thang đo**; xử lý được cả đầu vào số
lẫn phân loại; tự động nắm bắt quan hệ phi tuyến và tương tác.

**Nhược**: **không ổn định** — thay đổi nhỏ trong dữ liệu có thể tạo ra
cây rất khác (phương sai cao); dễ quá khớp nếu nuôi tới độ sâu tối đa;
phép tách **song song với trục** nên ranh giới chéo phải xấp xỉ bằng bậc
thang.

**Pros** (slide 72, **new**): highly interpretable
(read as a set of rules); **no feature scaling needed**; handles numeric
and categorical inputs; captures non-linearity and interactions
automatically. **Cons**: **unstable** — a small data change can produce a
very different tree (high variance); easily overfits at full depth;
**axis-parallel** splits approximate diagonal boundaries by steps. The
slide concludes that this motivates the ensemble section: **averaging
many trees removes most of the instability**.

### Examples 4.1 and 4.2 in Python

Slides 73-75: `DecisionTreeClassifier(criterion=
"gini", max_depth=3, min_samples_leaf=5, random_state=42)`; print train
accuracy **next to** test accuracy (a direct overfitting diagnostic);
confusion matrix and classification report; draw with `plot_tree(...)`.
**Example 4.2**: which features actually drive predictions, via
`tree.feature_importances_`.

## Appears in

[[chapter03-supervised-learning-k32]] — slides 53-75
(all of Section 4), 110 (summary table: both tasks, depth/min leaf, **no
scaling**, interpretable rules), 111 (review question 2: entropy and Gini
for a 20A/20B node).

## Related

- [[random-forest-k32]] — the direct answer to the
  single tree's instability.
- [[boosting-ensemble]] — the other ensembling
  route, using shallow stumps instead of deep trees.
- [[k-nearest-neighbors-k32]] — the preceding
  algorithm, opposite on two axes: rule-based vs distance-based, and
  **needs no** vs **requires** scaling.
- [[overfitting-underfitting-k32]] — pruning and
  depth limits are the tree-specific overfitting controls.
- [[classification-k32]] — the problem setting the
  tree solves.

## Notes

The worked tree-building example with real numbers
(slides 67-68) exists only as images with no extractable text, so its
figures are not recorded here; everything above comes from the prose
slides (62-66, 69-71). Also, the Example 4.1 code on slide 73 **omits the
line `y_pred = tree.predict(X_test)`** while slide 74 uses `y_pred` — the
file `Example3.2_DecisionTree_New.py` in `raw/` supplies it.
