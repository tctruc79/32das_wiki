---
type: concept
title: "Decision Tree (K32)"
tags: [chapter-3, k32, decision-tree, classification, algorithm]
created: 2026-08-28
updated: 2026-09-05
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

Node/decision node = an attribute;
branch/sub-tree = a tree formed by splitting; root node = where the tree
starts; leaf node = where the final output comes from; splitting =
dividing a node into sub-nodes by a condition; pruning = removing
unwanted branches; depth = the longest root-to-leaf path.

### Classification vs regression trees

**New versus 2025**:

| | Cây phân loại | Cây hồi quy |
|---|---|---|
| Đầu ra | Định tính | Định lượng |
| Tiêu chí tách | Độ không thuần Gini, độ hỗn loạn, sai số phân loại | Mức giảm phương sai, MSE |
| Dự đoán tại nút lá | **Phạm trù chiếm đa số** | **Trung bình hoặc trung vị** |

**New versus 2025**: classification trees
have qualitative output, split on Gini/entropy/classification error, and
predict the **majority category** in the leaf; regression trees have
quantitative output, split on variance reduction or MSE, and predict the
**mean or median**. A single family (CART) covers both.

### Building the tree, and purity

Building a decision tree is, at its core, a
3-step recursive procedure: start from an empty tree → split on the
next **best** attribute → recurse on each child node. The algorithm's
entire difficulty is packed into the word "best": it means the split
that makes the child nodes as **pure as possible** — the less classes
are mixed within a node, the closer that node is to allowing a decisive
call.

With pᵢ the proportion of observations of class i
in the node, K classes and Σpᵢ = 1 (a pure node contains only 1 class),
there are 3 ways to measure purity:

| Thước đo | Công thức | Ghi chú |
|---|---|---|
| Sai số phân loại | Eₘ = 1 − max(pᵢ) | Đơn giản nhất |
| Độ không thuần Gini (Gini impurity) | Σpᵢ(1 − pᵢ) = 1 − Σpᵢ² | Tiêu chí mặc định của CART |
| Độ hỗn loạn (entropy) | −Σpᵢ·log₂(pᵢ) | Tiêu chí của ID3; chạy từ 0 (thuần khiết) tới log₂K |

Lower ⇒ purer. The 3 purity measures are
classification error 1 − max(pᵢ), **Gini impurity** 1 − Σpᵢ² (CART's
default) and **entropy** −Σpᵢlog₂(pᵢ) (ID3's criterion, running 0 to
log₂K — with K = 3, up to ≈ 1.585 bits). The worked example below
computes all three for the same node, to see how they agree.

### Information gain and the build rules

**Information gain** is based on the entropy
**decrease** after splitting on an attribute; building the tree means
finding the attribute with the **highest** gain. For a set S split on
attribute A with values v:

IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|) · Entropy(S_v)

**Information gain** is the entropy *decrease*
after splitting on an attribute: IG(S, A) = Entropy(S) − Σ_v
(|S_v|/|S|)·Entropy(S_v); building the tree means repeatedly picking the
highest-gain attribute. The stopping rule follows naturally: a branch
with zero entropy is already a leaf; one with entropy above zero still
needs splitting; and when zero entropy is unreachable (real data rarely
allows a perfect split), the final call is simply majority vote. Put
together as 4 steps: compute the dataset's entropy → for each candidate
attribute, compute the entropy of all its values, take the **weighted**
average, derive its information gain → pick the highest-gain attribute →
repeat until stopping.

### ID3 vs CART

Among the family of decision-tree algorithms (ID3,
C4.5, CART, CHAID), the 2 most worth mastering are:

| | ID3 | CART |
|---|---|---|
| Bài toán | Phân loại | Cả phân loại lẫn hồi quy |
| Tiêu chí | Độ hỗn loạn + độ lợi thông tin | Gini (phân loại), MSE (hồi quy) |
| Dữ liệu số | **Không xử lý trực tiếp** | Xử lý được |
| Kiểu tách | **Nhiều nhánh** (mỗi phạm trù 1 nhánh) | **Luôn nhị phân** (câu hỏi có/không) |
| Điểm yếu / mạnh | Dễ quá khớp, tạo cây thiên lệch vì độ lợi thông tin **ưu ái thuộc tính có nhiều giá trị phân biệt** | Xử lý được dữ liệu lớn, hỗ trợ tỉa theo chi phí–độ phức tạp |

ID3: classification only, entropy + information
gain, does **not** handle numeric data directly, **multi-way** splits,
may overfit and produce biased trees because information gain **favours
attributes with many distinct values**. CART: both tasks, Gini/MSE,
**always binary splits**, handles large datasets, supports
cost-complexity pruning. **Programming note**: `scikit-learn` implements
optimised CART — `DecisionTreeClassifier`/`DecisionTreeRegressor` are
**CART, not ID3** — but ID3 remains worth learning first as the clearest
algorithm for grasping the core idea.

### When to stop, and pruning

**Stopping** happens when all records share the
output, or share the same inputs, or `min_samples_leaf` / `max_depth` is
reached. But stopping in time is not enough to avoid overfitting — a
**pruning** mechanism is also needed (new versus 2025): **pre-pruning**
(early stopping
via those rules) and **post-pruning** (grow the full tree, then cut back
branches that don't improve validation performance) — in CART, cost-
complexity pruning controlled by α = `ccp_alpha`, penalising the **number
of leaves**.

### Single-tree pros and cons

A single tree draws its appeal from **very high
interpretability** — it reads directly as a set of if/else rules,
**requires no feature scaling** (unlike KNN), handles both numeric and
categorical inputs, and automatically captures non-linear relationships
and interactions without manual feature engineering.

But that same flexibility is also the source of
its biggest weakness: a single tree is **unstable** — a small change in
the training data can produce a structurally very different tree (a
high-variance symptom), and it easily overfits when grown to full
depth. Because every split is **axis-parallel** (asking about one
variable at a time), a genuinely diagonal decision boundary in the data
can only be approximated by a staircase of splits.

This instability — not low accuracy — is what
directly motivates the next section: if **averaging many trees removes
most of a single tree's instability**, the natural next question is how
to make the trees different enough for averaging to matter — exactly
the problem random forests solve.

### Examples 4.1 and 4.2 in Python

In practice, fitting a `DecisionTreeClassifier(
criterion="gini", max_depth=3, min_samples_leaf=5, random_state=42)`
(`criterion` can switch to `"entropy"`) and printing train accuracy
**next to** test accuracy is the fastest, most direct overfitting
diagnostic — a direct application of the under/overfitting comparison
learned earlier. Then print the confusion matrix and classification
report, and visualise the tree with `plot_tree(...)` to see exactly the
rules it learned. The final step — ranking which features actually drive
predictions via `tree.feature_importances_` — turns what looks like a
pure prediction tool into an exploratory one, answering "which variable
matters most" without a separate statistical model.

## Worked example — computing all 3 purity measures by hand

Consider a leaf node with 16 class-A, 13 class-B and
1 class-C observation (n = 30). The 3 class proportions are pA ≈ 0.533,
pB ≈ 0.433, pC ≈ 0.033. Applying the 3 formulas above directly:

- **Classification error**: Eₘ = 1 − max(pᵢ) =
  1 − 0.533 = **0.467**.
- **Gini impurity**: 1 − Σpᵢ² = 1 − (0.533² + 0.433²
  + 0.033²) = 1 − (0.284 + 0.188 + 0.001) = **0.527**.
- **Entropy**: −Σpᵢlog₂(pᵢ) = −(0.533×log₂0.533 +
  0.433×log₂0.433 + 0.033×log₂0.033) ≈ −(−0.484 − 0.523 − 0.164) =
  **1.170 bits**.

This node sits fairly close to **maximal impurity
between its two dominant classes** (the ceiling for K = 3 is log₂3 ≈
1.585 bits) — sensible, since classes A and B nearly split the
observations evenly, with C a clear minority.

The instructor's own review question poses the same
calculation at a more extreme case: a node with exactly 20 class-A and
20 class-B observations (pA = pB = 0.5, no third class). Entropy =
−(0.5×(−1) + 0.5×(−1)) = **1 bit** — exactly the maximum possible for 2
classes — and Gini = 1 − 0.5 = **0.5**, also Gini's maximum at K = 2. The
node is **completely impure**: a new point landing here is a 50/50 coin
flip between classes — the worst case a leaf can be in, not the
best.

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
