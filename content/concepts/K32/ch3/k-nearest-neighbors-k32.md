---
type: concept
title: "K láng giềng gần nhất (K32)"
title_en: "K-Nearest Neighbours (K32)"
tags: [chapter-3, k32, knn, classification, algorithm]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

K láng giềng gần nhất (KNN) là thuật toán học có giám sát dựa trên khoảng
cách, xây trên đúng một giả định: **những thứ giống nhau thì nằm gần
nhau**. Để dự đoán cho một quan sát mới, thuật toán tìm K quan sát gần
nó nhất trong tập huấn luyện rồi trả về **mốt** của nhãn K láng giềng đó
(phân loại) hoặc **trung bình** của chúng (hồi quy).
<br><span class="en">K-Nearest Neighbours (KNN) is a distance-based
supervised algorithm built on a single assumption: **similar things are
near each other**. To predict for a new observation it finds the K
closest training observations and returns the **mode** of their labels
(classification) or their **mean** (regression).</span>

## Diễn giải - <span class="en">Explanation</span>

### Thuật toán - <span class="en">The algorithm</span>

KNN thực thi trực tiếp giả định nền tảng của nó: nạp dữ liệu và **chuẩn
hóa các đặc trưng**, chọn giá trị K, rồi với mỗi quan sát truy vấn mới
x* — tính khoảng cách từ x* tới **mọi** quan sát trong tập huấn luyện,
sắp xếp các khoảng cách và giữ lại K quan sát gần nhất, đọc nhãn của K
láng giềng đó, và trả về mốt (phân loại) hoặc trung bình (hồi quy) làm
dự đoán. Một điểm dễ hiểu lầm về thứ tự thực hiện: việc **chọn** K láng
giềng gần nhất diễn ra **sau khi** đã tính xong toàn bộ khoảng cách tới
mọi quan sát — không phải một bước lọc xảy ra bên trong vòng lặp duyệt
từng quan sát.
<br><span class="en">KNN directly executes its founding assumption: load
the data and **standardise the features**, choose K, then for each new
query x* — compute the distance to **every** training observation, sort
and keep the K nearest, read their labels, and return the mode
(classification) or mean (regression) as the prediction. A point easily
misunderstood about execution order: **selecting** the K nearest
neighbours happens **after** all distances to every observation have
been computed — it is not a filtering step that happens inside the loop
over observations.</span>

### 4 cách tính khoảng cách - <span class="en">4 distance measures</span>

Với x = (x₁,…,x_p) và z = (z₁,…,z_p):
<br><span class="en">With x = (x₁,…,x_p) and z = (z₁,…,z_p):</span>

| Khoảng cách | Công thức | Khi nào dùng |
|---|---|---|
| Euclid | √Σ(xⱼ − zⱼ)² | Mặc định |
| Manhattan (ô bàn cờ) | Σ\|xⱼ − zⱼ\| | Bền hơn trước giá trị ngoại lai |
| Minkowski | (Σ\|xⱼ − zⱼ\|^q)^(1/q) | Dạng tổng quát: q = 2 ⇒ Euclid, q = 1 ⇒ Manhattan |
| Hamming | Số vị trí khác nhau | Cho đặc trưng phân loại |

Minkowski và Hamming là **bổ sung mới của bản 2026**.
<br><span class="en">Euclidean (the default), Manhattan (city
block, more robust to outliers), Minkowski (the general form — q = 2
gives Euclidean, q = 1 gives Manhattan) and Hamming (for categorical
features, counting differing positions). Minkowski and Hamming are **new
in the 2026 version**.</span>

### Vì sao bắt buộc chuẩn hóa - <span class="en">Why scaling is compulsory</span>

Vì khoảng cách là nền tảng của toàn bộ thuật toán, đơn vị đo của mỗi đặc
trưng ảnh hưởng trực tiếp tới kết quả — một ví dụ dự đoán vỡ nợ tín dụng
từ 2 đặc trưng minh họa rõ vấn đề này:
<br><span class="en">Because distance is the algorithm's whole
foundation, each feature's unit of measurement directly affects the
result — an example predicting credit default from 2 features
illustrates this clearly:</span>

| Đặc trưng | Khách hàng A | Khách hàng B |
|---|---|---|
| Tuổi (năm) | 30 | 35 |
| Thu nhập (triệu đồng) | 20.000 | 20.050 |

Khoảng cách Euclid = √(5² + 50²) ≈ 50,2 — **gần như hoàn toàn do thu nhập
chi phối**, chỉ vì thu nhập được đo bằng con số lớn hơn, chứ không phải
vì nó quan trọng hơn. **Quy tắc**: luôn chuẩn hóa (z = (x − x̄)/s) hoặc co
giãn min–max trước khi chạy KNN, và **khớp bộ chuẩn hóa chỉ trên tập
huấn luyện**.
<br><span class="en">A numeric example, **new** in this cohort: the
Euclidean distance √(5² + 50²) ≈ 50.2 between two credit customers is
**almost entirely driven by income**, simply because income is measured
in bigger numbers — not because it matters more. **Rule**: always
standardise (z = (x − x̄)/s) or min–max scale before KNN, and **fit the
scaler on the training set only**.</span>

### Chọn K - <span class="en">Choosing K</span>

Chọn K đòi hỏi chạy KNN nhiều lần với các giá trị K khác nhau và chọn K
**tối thiểu hóa sai số kiểm định chéo**, **không** phải sai số huấn
luyện — vì sai số huấn luyện luôn nhỏ nhất tại K = 1 (mỗi điểm luôn là
láng giềng gần nhất của chính nó, nên "dự đoán" hoàn hảo trên chính dữ
liệu đã thấy). Vài nguyên tắc đi kèm:
<br><span class="en">Choosing K requires running KNN over several
values of K and picking the one **minimising the cross-validated
error**, **not** the training error — since training error is always
lowest at K = 1 (every point is its own nearest neighbour, so it
"predicts" perfectly on data it has already seen). A few accompanying
rules:</span>

- Không có số láng giềng tối ưu chung cho mọi bộ dữ liệu.
  <br><span class="en">No single optimal number of neighbours suits
  every dataset.</span>
- **K nhỏ** ⇒ nhiễu ảnh hưởng mạnh: độ chệch thấp nhưng phương sai cao
  (quá khớp).
  <br><span class="en">**Small K** ⇒ noise dominates: low bias but high
  variance (overfitting).</span>
- **K lớn** ⇒ tốn tính toán hơn: phương sai thấp nhưng độ chệch cao (chưa
  khớp).
  <br><span class="en">**Large K** ⇒ more computationally expensive: low
  variance but high bias (underfitting).</span>
- Với bài toán nhị phân nên **chọn K lẻ** để tránh hòa phiếu.
  <br><span class="en">For binary problems, prefer an **odd K** to avoid
  tied votes.</span>

### Ưu và nhược điểm - <span class="en">Pros and cons</span>

**Ưu**: đơn giản, dễ cài đặt; không cần xây mô hình, không
phải tinh chỉnh nhiều tham số, không cần giả định về phân phối; ranh giới
quyết định có thể rất phi tuyến.
<br><span class="en">**Pros**: simple and easy to implement; no model to
build, few parameters to tune, no distributional assumptions; the
decision boundary can be highly non-linear.</span>

**Nhược**: chậm đi rõ rệt khi số đặc trưng tăng (**lời nguyền số chiều**);
dự đoán tốn tính toán khi số quan sát tăng, vì phải tính lại toàn bộ
khoảng cách mỗi lần; là **học lười** — không học gì lúc huấn luyện, phải
lưu toàn bộ tập huấn luyện; nhạy với thang đo đặc trưng và với các đặc
trưng vô ích.
<br><span class="en">**Cons**: significantly slower as features grow
(the **curse of dimensionality**); prediction is computationally
intensive as observations grow, since all distances are recomputed each
time; it is **lazy learning** — nothing is learned at training time and
the whole training set must be stored; sensitive to feature scaling and
to irrelevant features.</span>

### Ví dụ 3.1 — bộ dữ liệu IRIS - <span class="en">Example 3.1 — the IRIS dataset</span>

Ví dụ minh họa dùng file `iris.csv` (150 hàng: 50 Setosa, 50 Versicolor,
50 Virginica; 4 đặc trưng là chiều dài và chiều rộng của đài hoa và cánh
hoa, đơn vị xen-ti-mét — chính bộ dữ liệu Fisher dùng cho mô hình phân
biệt tuyến tính). Quy trình đầy đủ: nạp dữ liệu → chia tập
(`test_size=0.3, random_state=42, stratify=y`) → vẽ biểu đồ phân tán tô
màu theo loài → `StandardScaler` (khớp trên tập huấn luyện, chỉ biến đổi
trên tập kiểm tra) → `KNeighborsClassifier(n_neighbors=5)` → dự đoán →
ma trận nhầm lẫn và báo cáo phân loại → tìm K tốt nhất bằng
`GridSearchCV(cv=5)` quét `range(1, 26, 2)` → **đánh giá đúng 1 lần** trên
tập kiểm tra → dự đoán 1 bông hoa mới bằng `DataFrame` 1 hàng, chuẩn hóa
bằng chính bộ chuẩn hóa đã khớp.
<br><span class="en">The workflow uses `iris.csv` (150 rows, 50 of each
species; 4 features in cm — the dataset Fisher used for his linear
discriminant): load → split → scatter plot → `StandardScaler` (fit on
train, transform on test) → `KNeighborsClassifier(n_neighbors=5)` →
predict → confusion matrix and classification report → best-K search
with `GridSearchCV(cv=5)` over `range(1, 26, 2)` → **evaluate once** on
the test set → predict a new flower.</span>

**Lưu ý quan trọng**: đề bài ghi rõ **các lỗi trong đoạn mã là cố ý**, để
người học tự phát hiện — chi tiết 4 lỗi được liệt kê trong
[[chapter03-supervised-learning-k32]].
<br><span class="en">**Important**: the exercise states that **the
errors in the code are intentional** — the 4 planted bugs are listed in
[[chapter03-supervised-learning-k32]].</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 31-38 (lý thuyết), 39-48
(Ví dụ 3.1), 49-50 (ứng dụng lọc thư rác và phát hiện gian lận), 110
(bảng tổng kết: KNN dùng được cho cả hai bài toán, siêu tham số chính là
K, **cần chuẩn hóa**), 111 (câu hỏi ôn tập số 1).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slides 31-38
(theory), 39-48 (Example 3.1), 49-50 (spam and fraud applications), 110
(summary table: both tasks, key hyperparameter K, **scaling needed**),
111 (review question 1).</span>

## Liên quan - <span class="en">Related</span>

- [[classification-k32]] — KNN là thuật toán phân loại đầu tiên của
  chương (nhưng cũng dùng được cho hồi quy).
  <br><span class="en">[[classification-k32]] — KNN is the chapter's
  first classification algorithm (though it also does regression).</span>
- [[train-test-split-and-cross-validation]] — cơ chế chọn K, và lý do
  `scaler` chỉ được khớp trên tập huấn luyện.
  <br><span class="en">[[train-test-split-and-cross-validation]] — the
  mechanism for choosing K, and why the scaler is fitted on the training
  set only.</span>
- [[overfitting-underfitting-k32]] — K nhỏ/K lớn là ví dụ trực quan nhất
  của đánh đổi độ chệch–phương sai trong cả chương.
  <br><span class="en">[[overfitting-underfitting-k32]] — small vs large
  K is the chapter's most intuitive instance of the bias–variance
  trade-off.</span>
- [[decision-tree-k32]] — thuật toán phân loại kế tiếp, đại diện họ dựa
  trên luật (đối lập với KNN dựa trên khoảng cách) và **không cần chuẩn
  hóa**.
  <br><span class="en">[[decision-tree-k32]] — the next classification
  algorithm, representing the rule-based family (versus KNN's
  distance-based one) and needing **no scaling**.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] — cùng dùng chuẩn hóa
  bắt buộc, vì cùng lý do: kết quả phụ thuộc độ lớn tuyệt đối của các
  con số.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] —
  also requires standardisation, for the same reason: the result depends
  on the absolute size of the numbers.</span>

## Lưu ý - <span class="en">Notes</span>

Ví dụ 3.1 dùng file `iris.csv` chứ **không** dùng bộ IRIS dựng sẵn của
`scikit-learn`, nên tên cột theo đúng file: `sepal.length` (dấu chấm), và
cột nhãn tên là `variety` chứ không phải `species`. Đoạn mã trên slide cố
tình viết `species` — đó là 1 trong 4 lỗi cài sẵn.
<br><span class="en">Example 3.1 uses the `iris.csv` file, **not**
`scikit-learn`'s built-in IRIS, so the column names follow the file:
`sepal.length` (with a dot), and the label column is `variety`, not
`species`. The slide code deliberately writes `species` — one of the 4
planted bugs.</span>
