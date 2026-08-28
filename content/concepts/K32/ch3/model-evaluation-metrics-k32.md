---
type: concept
title: "Chỉ số đánh giá mô hình (K32)"
title_en: "Model Evaluation Metrics (K32)"
tags: [chapter-3, k32, model-evaluation, metrics]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Bộ chỉ số dùng để chấm điểm một mô hình đã học, chia làm 2 nhóm theo kiểu
của biến mục tiêu: **chỉ số hồi quy** (khi y là số — MAE, MSE, RMSE,
MAPE, R²) và **chỉ số phân loại** (khi y là loại — độ chính xác, độ chuẩn
xác, độ bao phủ, F1, ROC-AUC). Bản 2026 là bản đầu tiên trong môn học đưa
ra **cả hai nhóm** cùng lúc và kèm hướng dẫn *khi nào dùng chỉ số nào* —
bản 2025 chỉ có 3 chỉ số hồi quy đầu.
<br><span class="en">The metrics used to score a learned model, split in
two by the target's type: **regression metrics** (y is a number — MAE,
MSE, RMSE, MAPE, R²) and **classification metrics** (y is a category —
accuracy, precision, recall, F1, ROC-AUC). The 2026 version is the first
in this course to give **both sets** together, with guidance on *which
metric when* — the 2025 version had only the first three regression
metrics.</span>

## Diễn giải - <span class="en">Explanation</span>

### Chỉ số hồi quy - <span class="en">Regression metrics</span>

Với n quan sát, giá trị thực yᵢ, giá trị dự đoán ŷᵢ và sai số
uᵢ = yᵢ − ŷᵢ (slide 17-18):

| Chỉ số | Công thức | Đặc điểm |
|---|---|---|
| MAE | (1/n)Σ\|yᵢ − ŷᵢ\| | Coi mọi sai số như nhau |
| MSE | (1/n)Σ(yᵢ − ŷᵢ)² | Phạt nặng sai số lớn; đơn vị là bình phương của y |
| RMSE | √MSE | Đưa sai số **về đúng đơn vị của y** |
| MAPE | (100/n)Σ\|yᵢ − ŷᵢ\|/\|yᵢ\| | Không phụ thuộc thang đo, dễ truyền đạt |
| R² | 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)² | Tỷ lệ biến thiên của y được mô hình giải thích |

Các tiêu chí khác được slide nêu tên nhưng không khai triển: RSE (sai số
bình phương tương đối), RAE (sai số tuyệt đối tương đối), RMSE chuẩn hóa,
RMSE tương đối.
<span class="en">**Regression metrics** (slides 17-18), with error
uᵢ = yᵢ − ŷᵢ: MAE treats all errors equally; MSE punishes large errors and
is in squared units; RMSE = √MSE brings the error **back into y's units**;
MAPE is scale-free and easy to communicate; R² is the share of y's
variation the model explains. Other criteria named but not expanded: RSE,
RAE, Normalised RMSE, Relative RMSE.</span>

**Cách chọn** (slide 18): MAE coi mọi sai số như nhau; **RMSE phạt sai số
lớn nặng hơn**, nên dùng khi sai lầm lớn gây tốn kém; **MAPE không xác
định khi có yᵢ = 0** và có tính bất đối xứng (phạt dự đoán cao hơn thực
tế khác với phạt dự đoán thấp hơn).
<br><span class="en">**How to choose** (slide 18): MAE treats all errors
equally; **RMSE punishes large errors more**, so use it when big mistakes
are costly; **MAPE is undefined when some yᵢ = 0** and is asymmetric.</span>

### Chỉ số phân loại - <span class="en">Classification metrics</span>

Toàn bộ mục này là **nội dung mới của bản 2026** (slide 19):

- **Độ chính xác (accuracy)** — **gây hiểu lầm trên dữ liệu mất cân
  bằng**. Ví dụ trên slide: nếu 99% giao dịch là hợp lệ thì một mô hình
  *luôn* dự đoán "hợp lệ" đạt độ chính xác 99% mà hoàn toàn vô dụng.
  <br><span class="en">**Accuracy** — **misleading on imbalanced data**:
  if 99% of transactions are legitimate, an always-"legitimate" model is
  99% accurate and completely useless.</span>
- **Độ chuẩn xác (precision)** — trong số các trường hợp ta gắn cờ, bao
  nhiêu là đúng. Dùng khi **báo động giả tốn kém** (vd chặn nhầm một thư
  hợp lệ).
  <br><span class="en">**Precision** — of those we flagged, how many were
  right. Use when **false alarms are expensive** (e.g. blocking a valid
  email).</span>
- **Độ bao phủ (recall, còn gọi là độ nhạy)** — trong số các trường hợp
  đúng thật, ta bắt được bao nhiêu. Dùng khi **bỏ sót tốn kém** (vd bỏ
  lọt một vụ gian lận hoặc một ca bệnh).
  <br><span class="en">**Recall (sensitivity)** — of the true cases, how
  many did we catch. Use when **misses are expensive** (e.g. missing a
  fraud or a disease).</span>
- **F1** — trung bình điều hòa của độ chuẩn xác và độ bao phủ, dùng khi
  cần cân bằng cả hai.
  <br><span class="en">**F1** — the harmonic mean of precision and
  recall, when you need to balance both.</span>
- **ROC-AUC** — chất lượng **xếp hạng** trên mọi ngưỡng quyết định, hữu
  ích khi ngưỡng chưa được cố định trước.
  <br><span class="en">**ROC-AUC** — ranking quality across all
  thresholds, useful when the decision threshold is not fixed in
  advance.</span>

Trong mã Python của chương, cả bộ này được lấy cùng lúc bằng
`classification_report(y_test, y_pred)`, còn `confusion_matrix(y_test,
y_pred)` cho bảng đếm thô làm cơ sở tính chúng.
<br><span class="en">In the chapter's Python code the whole set comes at
once from `classification_report(y_test, y_pred)`, with
`confusion_matrix(y_test, y_pred)` giving the raw counts they are
computed from.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 17-18 (chỉ số hồi quy), 19
(chỉ số phân loại), 44 và 74 (in `confusion_matrix` +
`classification_report` trong Ví dụ 3.1 và 4.1), 106-107 (nhắc lại MAE/
MSE/MAPE/RMSE kèm hàm `scikit-learn` tương ứng), 111 (câu hỏi ôn tập số
3: vì sao RMSE ≥ MAE luôn đúng).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slides 17-18
(regression metrics), 19 (classification metrics), 44 and 74 (printing
`confusion_matrix` + `classification_report` in Examples 3.1 and 4.1),
106-107 (MAE/MSE/MAPE/RMSE restated with their `scikit-learn`
functions), 111 (review question 3: why RMSE ≥ MAE always holds).</span>

## Liên quan - <span class="en">Related</span>

- [[train-test-split-and-cross-validation]] — mọi chỉ số ở đây chỉ có
  nghĩa khi tính **trên tập kiểm tra**.
  <br><span class="en">[[train-test-split-and-cross-validation]] — every
  metric here only means anything when computed **on the test
  set**.</span>
- [[overfitting-underfitting-k32]] — khoảng cách giữa chỉ số trên tập
  huấn luyện và trên tập kiểm tra chính là dấu hiệu chẩn đoán.
  <br><span class="en">[[overfitting-underfitting-k32]] — the gap between
  the training and test values of these metrics is the diagnostic.</span>
- [[classification-k32]] — nơi bàn về việc chọn chỉ số theo bối cảnh ứng
  dụng (bài tập nhóm 1 yêu cầu chính điều này).
  <br><span class="en">[[classification-k32]] — where choosing the metric
  by application context is discussed (Teamwork 1 asks for exactly
  that).</span>
- [[regularization-ridge-lasso-elastic-net-k32]] — mục 7.5 dùng chính bộ
  chỉ số hồi quy này để so mô hình có điều chuẩn với mốc OLS.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] —
  Section 7.5 uses this regression metric set to compare regularized
  models against the OLS baseline.</span>

## Lưu ý - <span class="en">Notes</span>

Slide 17 có khung **"Corrected from earlier versions"** nói rõ: MSE và
RMSE **đều** chứa hệ số 1/n, và RMSE = √MSE. Đây là điểm giảng viên chủ
động sửa so với các bản slide trước — đáng ghi nhớ vì công thức MSE thiếu
1/n là lỗi trình bày hay gặp.
<br><span class="en">Slide 17 carries a **"Corrected from earlier
versions"** box stating that MSE and RMSE **both** contain the 1/n
factor, and RMSE = √MSE. This is an explicit correction by the instructor
versus earlier decks — worth remembering, since an MSE formula missing
the 1/n is a common presentation error.</span>
