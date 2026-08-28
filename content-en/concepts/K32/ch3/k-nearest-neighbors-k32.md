---
type: concept
title: "K-Nearest Neighbours (K32)"
tags: [chapter-3, k32, knn, classification, algorithm]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

K-Nearest Neighbours (KNN) is a distance-based
supervised algorithm built on a single assumption: **similar things are
near each other**. To predict for a new observation it finds the K
closest training observations and returns the **mode** of their labels
(classification) or their **mean** (regression).

## Explanation

### The algorithm

Slide 32:

1. Nạp dữ liệu và **chuẩn hóa các đặc trưng**.
2. Chọn giá trị K.
3. Với mỗi quan sát truy vấn mới x*:
   - tính khoảng cách từ x* tới **mọi** quan sát trong tập huấn luyện;
   - sắp xếp các khoảng cách và giữ lại K quan sát gần nhất;
   - đọc nhãn của K láng giềng đó;
   - trả về mốt (phân loại) hoặc trung bình (hồi quy) làm dự đoán.

Slide 32: load and **standardise the features** →
choose K → for each new query x*: compute the distance to **every**
training observation, sort and keep the K nearest, read their labels,
return the mode (classification) or mean (regression). **The slide's own
correction note**: selecting the K nearest happens **after** all
distances are computed — **not** inside the loop over observations.

### 4 distance measures

Với x = (x₁,…,x_p) và z = (z₁,…,z_p), slide 34:

| Distance | Formula | When to use |
|---|---|---|
| Euclidean | √Σ(xⱼ − zⱼ)² | The default |
| Manhattan (city block) | Σ\|xⱼ − zⱼ\| | More robust to outliers |
| Minkowski | (Σ\|xⱼ − zⱼ\|^q)^(1/q) | The general form: q = 2 ⇒ Euclidean, q = 1 ⇒ Manhattan |
| Hamming | Number of differing positions | For categorical features |

Slide 34: Euclidean (the default), Manhattan (city
block, more robust to outliers), Minkowski (the general form — q = 2
gives Euclidean, q = 1 gives Manhattan) and Hamming (for categorical
features, counting differing positions). Minkowski and Hamming are **new
in the 2026 version**.

### Why scaling is compulsory

Ví dụ số ở slide 35 (**mới**) — dự đoán vỡ nợ tín dụng từ 2 đặc trưng:

| Feature | Customer A | Customer B |
|---|---|---|
| Age (years) | 30 | 35 |
| Income (VND million) | 20,000 | 20,050 |

The numeric example on slide 35 (**new**): the
Euclidean distance √(5² + 50²) ≈ 50.2 between two credit customers is
**almost entirely driven by income**, simply because income is measured
in bigger numbers — not because it matters more. **Rule**: always
standardise (z = (x − x̄)/s) or min–max scale before KNN, and **fit the
scaler on the training set only**.

### Choosing K

Slide 37: chạy KNN nhiều lần với các K khác nhau và chọn K **tối thiểu
hóa sai số kiểm định chéo**, **không** phải sai số huấn luyện — vì sai số
huấn luyện luôn nhỏ nhất tại K = 1 (mỗi điểm là láng giềng gần nhất của
chính nó). Ghi chú kèm theo:

- Không có số láng giềng tối ưu chung cho mọi bộ dữ liệu.
- **K nhỏ** ⇒ nhiễu ảnh hưởng mạnh: độ chệch thấp nhưng phương sai cao
  (quá khớp).
- **K lớn** ⇒ tốn tính toán hơn: phương sai thấp nhưng độ chệch cao (chưa
  khớp).
- Với bài toán nhị phân nên **chọn K lẻ** để tránh hòa phiếu.

<span class="en">Slide 37: run KNN over several K and pick the one
minimising the **cross-validated** error, **not** the training error
(always minimised at K = 1, since each point is its own nearest
neighbour). No optimal K suits all datasets; **small K** ⇒ noise
dominates, low bias but high variance (overfitting); **large K** ⇒ more
expensive, low variance but high bias (underfitting); for binary problems
prefer an **odd K** to avoid tied votes.</span>

### Pros and cons

**Ưu** (slide 38): đơn giản, dễ cài đặt; không cần xây mô hình, không
phải tinh chỉnh nhiều tham số, không cần giả định về phân phối; ranh giới
quyết định có thể rất phi tuyến.

**Pros** (slide 38): simple and easy to implement;
no model to build, few parameters to tune, no distributional assumptions;
the decision boundary can be highly non-linear. **Cons**: significantly
slower as features grow (the **curse of dimensionality**); prediction is
computationally intensive as observations grow, since all distances are
recomputed each time; it is **lazy learning** — nothing is learned at
training time and the whole training set must be stored; sensitive to
feature scaling and to irrelevant features.

### Example 3.1 — the IRIS dataset

Slide 39-48, dùng file `iris.csv` (150 hàng: 50 Setosa, 50 Versicolor, 50
Virginica; 4 đặc trưng là chiều dài và chiều rộng của đài hoa và cánh
hoa, đơn vị xen-ti-mét — chính bộ dữ liệu Fisher dùng cho mô hình phân
biệt tuyến tính). Quy trình đầy đủ trên slide: nạp dữ liệu → chia tập
(`test_size=0.3, random_state=42, stratify=y`) → vẽ biểu đồ phân tán tô
màu theo loài → `StandardScaler` (khớp trên tập huấn luyện, chỉ biến đổi
trên tập kiểm tra) → `KNeighborsClassifier(n_neighbors=5)` → dự đoán →
ma trận nhầm lẫn và báo cáo phân loại → tìm K tốt nhất bằng
`GridSearchCV(cv=5)` quét `range(1, 26, 2)` → **đánh giá đúng 1 lần** trên
tập kiểm tra → dự đoán 1 bông hoa mới bằng `DataFrame` 1 hàng, chuẩn hóa
bằng chính bộ chuẩn hóa đã khớp.

Slides 39-48 use `iris.csv` (150 rows, 50 of each
species; 4 features in cm — the dataset Fisher used for his linear
discriminant). The full slide workflow: load → split → scatter plot →
`StandardScaler` (fit on train, transform on test) →
`KNeighborsClassifier(n_neighbors=5)` → predict → confusion matrix and
classification report → best-K search with `GridSearchCV(cv=5)` over
`range(1, 26, 2)` → **evaluate once** on the test set → predict a new
flower. **Important**: slides 41-42 state that **the errors in the code
are intentional** — the 4 planted bugs are listed in
[[chapter03-supervised-learning-k32]].

## Appears in

[[chapter03-supervised-learning-k32]] — slides 31-38
(theory), 39-48 (Example 3.1), 49-50 (spam and fraud applications), 110
(summary table: both tasks, key hyperparameter K, **scaling needed**),
111 (review question 1).

## Related

- [[classification-k32]] — KNN is the chapter's
  first classification algorithm (though it also does regression).
- [[train-test-split-and-cross-validation]] — the
  mechanism for choosing K, and why the scaler is fitted on the training
  set only.
- [[overfitting-underfitting-k32]] — small vs large
  K is the chapter's most intuitive instance of the bias–variance
  trade-off.
- [[decision-tree-k32]] — the next classification
  algorithm, representing the rule-based family (versus KNN's
  distance-based one) and needing **no scaling**.
- [[regularization-ridge-lasso-elastic-net-k32]] —
  also requires standardisation, for the same reason: the result depends
  on the absolute size of the numbers.

## Notes

Example 3.1 uses the `iris.csv` file, **not**
`scikit-learn`'s built-in IRIS, so the column names follow the file:
`sepal.length` (with a dot), and the label column is `variety`, not
`species`. The slide code deliberately writes `species` — one of the 4
planted bugs.
