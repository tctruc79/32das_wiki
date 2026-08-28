---
type: concept
title: "Chia dữ liệu và kiểm định chéo"
title_en: "Data Splitting and Cross-Validation"
tags: [chapter-3, k32, model-evaluation, cross-validation, data-leakage]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Chia dữ liệu là việc tách bộ dữ liệu thành **tập huấn luyện** (dùng ước
lượng tham số) và **tập kiểm tra** (chỉ chạm đúng 1 lần, ở bước cuối, để
báo cáo hiệu năng trung thực). Kiểm định chéo là kỹ thuật xoay vòng vai
trò huấn luyện/kiểm định trong nội bộ tập huấn luyện, dùng để **kiểm tra
hiệu quả mô hình và chọn siêu tham số**. Nguyên tắc mở đầu cả Phần 2:
*đừng bao giờ chấm điểm một mô hình trên chính dữ liệu đã dùng để huấn
luyện nó*.
<br><span class="en">Data splitting separates the dataset into a
**training set** (used to estimate parameters) and a **test set**
(touched once, at the very end, to report honest performance).
Cross-validation rotates the training/validation roles *within* the
training set, and is used to **test model effectiveness and choose
hyperparameters**. The rule that opens Section 2: *never judge a model on
the data it was trained on*.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Rò rỉ dữ liệu — lỗi phổ biến nhất của người mới** (slide 16): mọi
  phép biến đổi **học được từ dữ liệu** — chuẩn hóa thang đo, điền giá
  trị khuyết, chọn biến — phải được **khớp chỉ trên phần huấn luyện**,
  rồi mới áp lên phần kiểm định và tập kiểm tra. Nếu khớp trên toàn bộ dữ
  liệu, thông tin của tập kiểm tra rò rỉ ngược vào mô hình và hiệu năng
  báo cáo sẽ **lạc quan giả tạo**. Đây là lý do vì sao trong Ví dụ 3.1
  đoạn mã viết `scaler.fit_transform(X_train)` nhưng chỉ
  `scaler.transform(X_test)` — khác biệt 1 chữ, thay đổi cả tính trung
  thực của kết quả.
  <br><span class="en">**Data leakage — the most common beginner
  mistake** (slide 16): any transformation **learned from data** —
  scaling, imputation, feature selection — must be **fitted on the
  training part only**, then applied to validation and test. Fitting on
  everything leaks test information back into the model and makes the
  reported performance **optimistic**. This is why Example 3.1 writes
  `scaler.fit_transform(X_train)` but only `scaler.transform(X_test)` —
  a one-word difference that decides whether the result is honest.</span>
- **3 dạng kiểm định chéo** (slide 21):
  <br><span class="en">**3 forms of cross-validation** (slide 21):</span>

  | Dạng | Cách làm | Ghi chú |
  |---|---|---|
  | Bỏ một quan sát (LOOCV) | Tập huấn luyện n − 1 quan sát, tập kiểm tra đúng 1 quan sát, lặp n lần | Tốn tính toán nhất |
  | K-phần (K-fold) | Chia thành K phần, huấn luyện trên K − 1, kiểm tra trên phần còn lại, xoay vòng rồi lấy trung bình K điểm số | K = 5 hoặc K = 10 là chuẩn |
  | K-phần phân tầng (stratified) | Như K-phần nhưng giữ nguyên tỷ lệ các lớp trong từng phần | **Luôn ưu tiên cho bài toán phân loại** |

- **Vì sao cần kiểm định chéo chứ không chỉ 1 lần chia đôi**: siêu tham
  số (K trong KNN, λ trong Ridge/Lasso, độ sâu cây) phải được chọn bằng
  một con số **không nhìn thấy tập kiểm tra**. Nếu chọn siêu tham số dựa
  trên tập kiểm tra, tập kiểm tra không còn "chưa đụng tới" nữa và mất
  vai trò trọng tài. Ví dụ 3.1 làm đúng quy trình này: `GridSearchCV(...,
  cv=5)` chọn K trên tập huấn luyện, sau đó **đánh giá đúng 1 lần** trên
  tập kiểm tra chưa đụng tới.
  <br><span class="en">**Why cross-validation and not just one split**:
  hyperparameters (K in KNN, λ in Ridge/Lasso, tree depth) must be chosen
  from a number that **has not seen the test set**. Choosing them on the
  test set destroys its role as referee. Example 3.1 follows this
  exactly: `GridSearchCV(..., cv=5)` picks K on the training set, then
  the model is **evaluated once** on the untouched test set.</span>
- **Tham số chia tập dùng xuyên chương**: mọi ví dụ mã trong chương dùng
  `train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)` —
  30% dữ liệu để kiểm tra, `random_state` cố định để kết quả tái lập
  được, và `stratify=y` giữ đúng tỷ lệ các lớp trong cả 2 phần (cùng tinh
  thần với K-phần phân tầng).
  <br><span class="en">**The split settings used throughout the
  chapter**: every code example uses `train_test_split(X, y,
  test_size=0.3, random_state=42, stratify=y)` — 30% held out, a fixed
  `random_state` for reproducibility, and `stratify=y` preserving class
  proportions in both parts (the same idea as stratified K-fold).</span>
- **Kiểm định chéo cũng là công cụ kiểm soát quá khớp**: slide 22 ghi
  ngắn gọn "kiểm định giúp kiểm soát quá khớp" — vì nó cho ta một ước
  lượng sai số ngoài mẫu **trước khi** chạm tới tập kiểm tra, nên có thể
  phát hiện và sửa quá khớp khi vẫn còn kịp.
  <br><span class="en">**Cross-validation is also an overfitting
  control**: slide 22 notes simply that "validation helps control
  overfitting" — it gives an out-of-sample error estimate **before**
  touching the test set, so overfitting can be caught and fixed while
  there is still time.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 16 (chia dữ liệu và rò rỉ),
21 (kiểm định chéo), 22 (kiểm định kiểm soát quá khớp), 37 (chọn K bằng
sai số kiểm định chéo), 46 (`GridSearchCV` trong Ví dụ 3.1), 102 (chọn λ
bằng `RidgeCV`/`LassoCV`).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slide 16
(splitting and leakage), 21 (cross-validation), 22 (validation controls
overfitting), 37 (choosing K by CV error), 46 (`GridSearchCV` in Example
3.1), 102 (choosing λ with `RidgeCV`/`LassoCV`).</span>

## Liên quan - <span class="en">Related</span>

- [[overfitting-underfitting-k32]] — thứ mà việc chia dữ liệu và kiểm
  định chéo tồn tại để phát hiện.
  <br><span class="en">[[overfitting-underfitting-k32]] — what splitting
  and cross-validation exist to detect.</span>
- [[model-evaluation-metrics-k32]] — con số được tính *trên* các tập đã
  chia.
  <br><span class="en">[[model-evaluation-metrics-k32]] — the numbers
  computed *on* those splits.</span>
- [[k-nearest-neighbors-k32]] và
  [[regularization-ridge-lasso-elastic-net-k32]] — 2 nơi kiểm định chéo
  được dùng trực tiếp để chọn siêu tham số (K và λ).
  <br><span class="en">[[k-nearest-neighbors-k32]] and
  [[regularization-ridge-lasso-elastic-net-k32]] — the two places
  cross-validation is used directly to pick a hyperparameter (K and
  λ).</span>
- [[supervised-learning-framework]] — nơi định nghĩa phân biệt tham số vs
  siêu tham số.
  <br><span class="en">[[supervised-learning-framework]] — where the
  parameter vs hyperparameter distinction is defined.</span>

## Lưu ý - <span class="en">Notes</span>

Slide 20 ("Validation for the classification problem") chỉ có hình, không
có văn bản trích xuất được — nên sơ đồ chia 3 phần huấn luyện/kiểm định/
kiểm tra cho bài toán phân loại không được ghi lại chi tiết ở đây. Nội
dung chữ về chia dữ liệu nằm ở slide 16 và 21.
<br><span class="en">Slide 20 ("Validation for the classification
problem") is image-only with no extractable text, so its train/validation/
test diagram for classification is not recorded here in detail. The
textual content on splitting lives on slides 16 and 21.</span>
