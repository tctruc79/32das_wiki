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

Sai lầm nhập môn phổ biến nhất trong toàn bộ học máy có lẽ là **rò rỉ dữ
liệu** (data leakage): bất kỳ phép biến đổi nào **học được từ dữ liệu** —
chuẩn hóa thang đo, điền giá trị khuyết, chọn biến — đều phải được
**khớp chỉ trên phần huấn luyện**, rồi mới áp dụng lên phần kiểm định và
tập kiểm tra. Nếu khớp phép biến đổi trên toàn bộ dữ liệu trước khi chia
tập, thông tin của tập kiểm tra vô tình rò rỉ ngược vào quá trình huấn
luyện, khiến hiệu năng báo cáo **lạc quan giả tạo** — mô hình trông có vẻ
tốt hơn thực tế sẽ hoạt động trên dữ liệu hoàn toàn mới. Khác biệt tưởng
như nhỏ giữa việc gọi `fit_transform()` trên tập huấn luyện rồi chỉ
`transform()` trên tập kiểm tra, so với gọi `fit_transform()` trên cả
hai, chính là ranh giới giữa một kết quả trung thực và một kết quả tự
lừa dối chính mình.
<br><span class="en">Perhaps the single most common beginner mistake in
all of machine learning is **data leakage**: any transformation
**learned from data** — scaling, imputation, feature selection — must be
**fitted on the training part only**, then applied to validation and
test. Fitting a transformation on the whole dataset before splitting lets
test-set information leak back into training, making reported
performance **artificially optimistic** — the model looks better than it
will actually be on genuinely new data. The seemingly small difference
between calling `fit_transform()` on the training set and only
`transform()` on the test set, versus calling `fit_transform()` on both,
is exactly the line between an honest result and a self-deceiving
one.</span>

Chia dữ liệu một lần thành huấn luyện/kiểm tra chỉ giải quyết được nửa
vấn đề: nó cho phép đánh giá mô hình trung thực, nhưng chưa nói được nên
**chọn siêu tham số nào**. Muốn chọn K trong KNN hay λ trong Ridge/Lasso,
cần một con số đánh giá **hoàn toàn không nhìn thấy tập kiểm tra** — nếu
không, tập kiểm tra mất vai trò trọng tài trung lập ngay từ lúc bị dùng
để tinh chỉnh. Kiểm định chéo giải quyết đúng vấn đề này bằng cách xoay
vòng vai trò huấn luyện/kiểm định *bên trong* tập huấn luyện, tồn tại
dưới 3 dạng:
<br><span class="en">Splitting the data once into train/test only solves
half the problem: it allows honest evaluation, but says nothing about
**which hyperparameter to pick**. Choosing K in KNN or λ in Ridge/Lasso
needs a score that has **never seen the test set** — otherwise the test
set loses its role as a neutral referee the moment it is used for tuning.
Cross-validation solves exactly this by rotating the train/validation
role *inside* the training set, in 3 forms:</span>

| Dạng | Cách làm | Ghi chú |
|---|---|---|
| Bỏ một quan sát (LOOCV) | Tập huấn luyện n − 1 quan sát, tập kiểm tra đúng 1 quan sát, lặp n lần | Tốn tính toán nhất |
| K-phần (K-fold) | Chia thành K phần, huấn luyện trên K − 1, kiểm tra trên phần còn lại, xoay vòng rồi lấy trung bình K điểm số | K = 5 hoặc K = 10 là chuẩn |
| K-phần phân tầng (stratified) | Như K-phần nhưng giữ nguyên tỷ lệ các lớp trong từng phần | **Luôn ưu tiên cho bài toán phân loại** |

Quy trình đúng, xuất hiện lặp lại xuyên suốt các ví dụ mã của chương, là:
dùng kiểm định chéo (thường qua `GridSearchCV`) để chọn siêu tham số
**hoàn toàn trong nội bộ tập huấn luyện**, rồi chỉ **đánh giá đúng 1 lần
duy nhất** trên tập kiểm tra chưa từng bị đụng tới — tách bạch rạch ròi
giữa "chọn mô hình" và "báo cáo hiệu năng cuối cùng". Cấu hình chia tập
dùng xuyên suốt chương là `train_test_split(X, y, test_size=0.3,
random_state=42, stratify=y)`: 30% dữ liệu để kiểm tra, `random_state`
cố định để kết quả tái lập được, và `stratify=y` giữ đúng tỷ lệ các lớp
ở cả hai phần — cùng tinh thần với K-phần phân tầng.
<br><span class="en">The correct workflow, recurring throughout the
chapter's code examples, is: use cross-validation (typically via
`GridSearchCV`) to choose hyperparameters **entirely within the training
set**, then **evaluate exactly once** on the untouched test set — a
clean separation between "model selection" and "final performance
report". The split configuration used throughout is
`train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)`:
30% held out, a fixed `random_state` for reproducibility, and
`stratify=y` preserving class proportions in both parts.</span>

Kiểm định chéo còn có một vai trò thứ hai, ít được nói tới nhưng quan
trọng không kém: nó cho một **ước lượng sai số ngoài mẫu trước khi** chạm
tới tập kiểm tra, nên quá khớp có thể được phát hiện và sửa **khi vẫn
còn kịp** — thay vì chỉ phát hiện ra ở bước đánh giá cuối cùng, khi không
còn cách nào quay lại chỉnh mô hình mà không làm hỏng tính trung thực của
tập kiểm tra.
<br><span class="en">Cross-validation also has a second, less-discussed
but equally important role: it gives an out-of-sample error estimate
**before** touching the test set, so overfitting can be caught and fixed
**while there is still time** — rather than only discovered at the final
evaluation step, when there is no way back to adjust the model without
compromising the test set's integrity.</span>

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
