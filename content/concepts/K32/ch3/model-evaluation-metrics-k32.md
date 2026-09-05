---
type: concept
title: "Chỉ số đánh giá mô hình (K32)"
title_en: "Model Evaluation Metrics (K32)"
tags: [chapter-3, k32, model-evaluation, metrics]
created: 2026-08-28
updated: 2026-09-05
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
uᵢ = yᵢ − ŷᵢ:
<br><span class="en">With n observations, true value yᵢ, predicted value
ŷᵢ and error uᵢ = yᵢ − ŷᵢ:</span>

| Chỉ số | Công thức | Đặc điểm |
|---|---|---|
| MAE | (1/n)Σ\|yᵢ − ŷᵢ\| | Coi mọi sai số như nhau |
| MSE | (1/n)Σ(yᵢ − ŷᵢ)² | Phạt nặng sai số lớn; đơn vị là bình phương của y |
| RMSE | √MSE | Đưa sai số **về đúng đơn vị của y** |
| MAPE | (100/n)Σ\|yᵢ − ŷᵢ\|/\|yᵢ\| | Không phụ thuộc thang đo, dễ truyền đạt |
| R² | 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)² | Tỷ lệ biến thiên của y được mô hình giải thích |

Việc chọn chỉ số nào không phải tùy tiện — nó phụ thuộc trực tiếp vào
**hậu quả kinh doanh của một sai số lớn**. MAE coi mọi sai số như nhau
bất kể độ lớn, nên phù hợp khi chi phí sai lệch tăng tuyến tính theo độ
lớn của sai số. RMSE, do bình phương từng sai số trước khi lấy trung
bình, **phạt các sai số lớn nặng hơn nhiều lần** so với sai số nhỏ — nên
ưu tiên dùng khi một vài dự đoán sai nghiêm trọng gây tổn thất không cân
xứng (ví dụ dự báo nhu cầu sai lệch lớn dẫn đến thiếu hàng nghiêm trọng).
MAPE có ưu điểm không phụ thuộc thang đo — dễ so sánh giữa các bài toán
có đơn vị khác nhau, dễ truyền đạt cho người không chuyên — nhưng có 2
nhược điểm cần nhớ: không xác định được khi có quan sát với yᵢ = 0, và
mang tính bất đối xứng (phạt việc dự đoán cao hơn thực tế nặng hơn việc
dự đoán thấp hơn thực tế, do mẫu số luôn là giá trị thực). Ngoài 5 chỉ số
trên, còn một số tiêu chí ít dùng hơn: sai số bình phương tương đối
(RSE), sai số tuyệt đối tương đối (RAE), và các biến thể chuẩn hóa của
RMSE.
<br><span class="en">Choosing a metric is not arbitrary — it depends
directly on **the business consequence of a large error**. MAE treats
all errors equally regardless of size, so it suits cases where the cost
of error grows linearly with its size. RMSE, by squaring each error
before averaging, **punishes large errors many times more heavily**
than small ones — prefer it when a few severely wrong predictions cause
disproportionate losses (e.g. a badly wrong demand forecast causing a
severe stock-out). MAPE has the advantage of being scale-free — easy to
compare across problems with different units, easy to communicate to a
non-technical audience — but has 2 drawbacks to remember: it is
undefined when an observation has yᵢ = 0, and it is asymmetric
(over-predicting is penalised more heavily than under-predicting, since
the denominator is always the true value). Beyond these 5 metrics, a few
less common criteria exist: Relative Squared Error (RSE), Relative
Absolute Error (RAE), and normalised variants of RMSE.</span>

### Chỉ số phân loại - <span class="en">Classification metrics</span>

Trong khi các chỉ số hồi quy đo "sai bao nhiêu", các chỉ số phân loại
phải trả lời một câu hỏi tinh tế hơn: "sai theo hướng nào, và hướng nào
tốn kém hơn". Điểm khởi đầu quan trọng nhất là nhận ra **độ chính xác
(accuracy) gây hiểu lầm nghiêm trọng trên dữ liệu mất cân bằng**: nếu
99% giao dịch trong một tập dữ liệu là hợp lệ, một mô hình *luôn luôn* dự
đoán "hợp lệ" — không học được gì — vẫn đạt độ chính xác 99% trong khi
hoàn toàn vô dụng cho mục đích phát hiện gian lận. Đây chính xác là lý do
cần thêm 2 chỉ số khác, đo 2 loại sai lầm khác nhau: **độ chuẩn xác
(precision)** — trong số các trường hợp mô hình gắn cờ dương tính, bao
nhiêu là đúng — nên ưu tiên khi **báo động giả tốn kém** (ví dụ chặn nhầm
một email hợp lệ thành thư rác); và **độ bao phủ (recall, hay độ nhạy)**
— trong số các trường hợp dương tính thật sự tồn tại, mô hình bắt được
bao nhiêu — nên ưu tiên khi **bỏ sót tốn kém** (bỏ lọt một giao dịch gian
lận hoặc một ca bệnh). Vì 2 chỉ số này thường đánh đổi lẫn nhau (nâng
ngưỡng để tăng precision thường làm giảm recall và ngược lại), **F1** —
trung bình điều hòa của cả hai — được dùng khi cần một con số duy nhất
cân bằng cả hai mối quan tâm. Cuối cùng, **ROC-AUC** đo chất lượng
**xếp hạng** của mô hình trên *mọi* ngưỡng quyết định có thể, hữu ích
đúng vào lúc ngưỡng phân loại chưa được cố định trước khi triển khai.
Trong thực hành, toàn bộ bộ chỉ số phân loại này được tính cùng lúc bằng
`classification_report(y_test, y_pred)`, dựa trên bảng đếm thô từ
`confusion_matrix(y_test, y_pred)`.
<br><span class="en">While regression metrics measure "how wrong",
classification metrics must answer a subtler question: "wrong in which
direction, and which direction is more costly". The essential starting
point is recognising that **accuracy is severely misleading on
imbalanced data**: if 99% of transactions in a dataset are legitimate, a
model that *always* predicts "legitimate" — having learned nothing — is
still 99% accurate while being entirely useless for fraud detection. This
is exactly why two further metrics are needed, each measuring a different
kind of mistake: **precision** — of the cases flagged positive, how many
were correct — preferred when **false alarms are expensive**; and
**recall (sensitivity)** — of the true positive cases, how many were
caught — preferred when **misses are expensive**. Because these two
typically trade off against each other, **F1**, their harmonic mean, is
used when a single number must balance both concerns. Finally,
**ROC-AUC** measures ranking quality across *every* possible decision
threshold, useful precisely when the classification threshold has not
yet been fixed before deployment. In practice, the whole classification
metric set comes at once from `classification_report(y_test, y_pred)`,
built from the raw counts in `confusion_matrix(y_test, y_pred)`.</span>

## Ví dụ có đáp án — vì sao RMSE luôn ≥ MAE - <span class="en">Worked example — why RMSE always ≥ MAE</span>

Đây là câu hỏi ôn tập số 3 của giảng viên, và câu trả lời đến từ chính
cấu trúc của 2 công thức chứ không phải từ 1 ví dụ số cụ thể. Gọi
aᵢ = |yᵢ − ŷᵢ| ≥ 0. Khi đó MAE là **trung bình cộng** của n số aᵢ, còn
RMSE là **căn bậc hai của trung bình cộng các bình phương** aᵢ² — hay
nói cách khác, RMSE chính là *căn quân phương* (root mean square) của
cùng dãy số đó. Bất đẳng thức căn quân phương ≥ trung bình cộng (hệ quả
trực tiếp của bất đẳng thức Cauchy–Schwarz, hoặc tương đương QM–AM) đúng
với **mọi** dãy số không âm, nên RMSE ≥ MAE luôn đúng, không phụ thuộc
dữ liệu cụ thể nào.
<br><span class="en">This is the instructor's review question 3, and the
answer comes from the structure of the two formulas themselves rather
than from a specific numerical example. Let aᵢ = |yᵢ − ŷᵢ| ≥ 0. MAE is
the **arithmetic mean** of the n values aᵢ, while RMSE is the **square
root of the mean of the squared** aᵢ — in other words, RMSE is exactly
the *quadratic mean* (root mean square) of the same sequence. The
quadratic-mean-≥-arithmetic-mean inequality (a direct consequence of the
Cauchy–Schwarz inequality, equivalently QM–AM) holds for **every**
non-negative sequence, so RMSE ≥ MAE always, regardless of the specific
data.</span>

**Khi nào 2 giá trị bằng nhau**: đẳng thức QM = AM chỉ xảy ra khi mọi aᵢ
**bằng nhau tuyệt đối** — tức mọi sai số có cùng độ lớn. Khoảng cách giữa
RMSE và MAE vì thế còn mang thêm 1 ý nghĩa chẩn đoán: **RMSE − MAE càng
lớn, sai số càng phân tán không đều** (một vài quan sát bị sai rất nặng
trong khi phần lớn còn lại khá chính xác) — đúng như lý do chọn RMSE khi
"sai lầm lớn tốn kém" đã nêu ở trên.
<br><span class="en">**When the two are equal**: QM = AM only when every
aᵢ is **exactly equal** — i.e. every error has the same magnitude. The
gap between RMSE and MAE therefore carries diagnostic meaning too: **the
larger RMSE − MAE is, the more unevenly the errors are spread** (a few
badly-missed observations amid an otherwise accurate model) — precisely
the reason to prefer RMSE when "large mistakes are costly," as noted
above.</span>

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
