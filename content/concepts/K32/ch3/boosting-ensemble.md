---
type: concept
title: "Tăng cường và họ phương pháp tổ hợp"
title_en: "Boosting and the Ensemble Families"
tags: [chapter-3, k32, boosting, ensemble, xgboost]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Tăng cường (boosting) là họ phương pháp tổ hợp thứ hai, bên cạnh đóng bao
(bagging). Điểm khác biệt cốt lõi nằm ở **thứ tự xây cây**: đóng bao xây
các cây **song song và độc lập**; tăng cường xây các cây **tuần tự**, mỗi
cây mới **sửa lỗi của các cây trước đó**. Toàn bộ mục này là nội dung
**hoàn toàn mới** của khóa 2026 — không tồn tại trong tài liệu khóa 2025.
<br><span class="en">Boosting is the second ensemble family alongside
bagging. The core difference is the **order in which trees are built**:
bagging builds them **in parallel and independently**; boosting builds
them **sequentially**, each new tree **correcting the previous ones'
errors**. This entire section is **new** in the 2026 cohort — it does not
exist in the 2025 material.</span>

## Diễn giải - <span class="en">Explanation</span>

### 3 biến thể được nêu tên - <span class="en">The 3 named variants</span>

Ý tưởng "sửa lỗi tuần tự" của tăng cường được hiện thực hóa theo 3 cách
khác nhau, ngày càng tinh vi hơn: **AdaBoost**, phiên bản sớm nhất,
**gán lại trọng số** cho các quan sát bị phân loại sai để cây kế tiếp tập
trung nhiều hơn vào chúng; **tăng cường gradient (Gradient boosting)**
tổng quát hóa ý tưởng đó bằng cách để mỗi cây mới **khớp vào phần dư**
(về bản chất là gradient của hàm mất mát) của mô hình hiện tại, thay vì
chỉ đổi trọng số quan sát; và **XGBoost / LightGBM / CatBoost** là các
bản cài đặt hiện đại, nhanh và có điều chuẩn của tăng cường gradient —
đây chính là nhóm thuật toán thường **thắng các cuộc thi** trên dữ liệu
bảng có cấu trúc trong kinh doanh, nhờ kết hợp được sức mạnh của gradient
boosting với các kỹ thuật tối ưu hóa tốc độ và chống quá khớp.
<br><span class="en">The "sequential error correction" idea of boosting is
realised in 3 increasingly sophisticated ways: **AdaBoost**, the
earliest version, **re-weights misclassified observations** so the next
tree focuses more on them; **gradient boosting** generalises this by
having each new tree **fit the residuals** (in essence, the gradient of
the loss function) of the current model, rather than just reweighting
observations; and **XGBoost / LightGBM / CatBoost** are fast, modern,
regularised implementations of gradient boosting — the family that
typically **wins competitions** on structured tabular business data, by
combining gradient boosting's power with speed and anti-overfitting
optimisations.</span>

### Đánh đổi - <span class="en">The trade-off</span>

Tăng cường **thường chính xác hơn** rừng ngẫu nhiên, nhưng cái giá phải
trả là nó **nhạy hơn với siêu tham số** và **có thể quá khớp** nếu tốc độ
học quá cao hoặc số vòng lặp quá nhiều — mỗi cây mới cố sửa lỗi của các
cây trước, nên nếu không kiểm soát tốt, quá trình "sửa lỗi" đó có thể bắt
đầu sửa cả nhiễu ngẫu nhiên. Đây là lý do thực dụng để nghĩ về rừng ngẫu
nhiên như "mốc so sánh vững chắc, dễ tinh chỉnh" còn tăng cường là công
cụ dùng khi cần "vắt kiệt độ chính xác tối đa" và chấp nhận đánh đổi thời
gian tinh chỉnh.
<br><span class="en">Boosting is usually **more accurate** than a random
forest, but the price is being **more sensitive to hyperparameters** and
**able to overfit** if the learning rate is too high or there are too
many rounds — each new tree tries to correct the previous ones' errors,
so without careful control that "correction" process can start fitting
random noise instead. The practical way to think about it: random forest
as the "solid, easy-to-tune baseline", boosting as the tool for when top
accuracy is needed and a longer tuning process is an acceptable
trade-off.</span>

### Bảng so sánh đóng bao vs tăng cường - <span class="en">Bagging vs boosting</span>

Đối chiếu trực tiếp 2 họ tổ hợp trên 6 tiêu chí:
<br><span class="en">Comparing the two ensemble families directly on 6
criteria:</span>

| Tiêu chí | Đóng bao (rừng ngẫu nhiên) | Tăng cường (XGBoost) |
|---|---|---|
| Cách xây cây | Song song, độc lập | Tuần tự, cây sau sửa cây trước |
| Đặc điểm cây | Sâu; độ chệch thấp, phương sai cao | Cây cụt nông; độ chệch cao |
| Chủ yếu giảm | **Phương sai** | **Độ chệch** |
| Rủi ro quá khớp | Thấp | Trung bình, cần tinh chỉnh |
| Tốc độ tinh chỉnh | Nhanh, ít núm vặn | Chậm hơn, nhiều núm vặn |
| Dùng điển hình | Mốc so sánh vững chắc | Vắt kiệt độ chính xác tối đa |

<br><span class="en">Comparing the two directly on 6 criteria: bagging builds
trees in parallel and independently while boosting builds them
sequentially with each fixing the last; bagging's trees are deep (low
bias, high variance) versus boosting's shallow stumps (high bias);
bagging mainly reduces **variance**, boosting reduces **bias**;
overfitting risk is low versus moderate-and-needs-tuning; bagging is fast
to tune with few knobs, boosting slower with many; bagging is the solid
baseline, boosting squeezes out top accuracy.</span>

**Cách đọc bảng này cho kỳ thi**: hàng "chủ yếu giảm" là hàng quan trọng
nhất — nó nối thẳng về phân rã độ chệch–phương sai. Đóng bao
lấy nhiều cây phương sai cao rồi trung bình hóa để giảm phương sai; tăng
cường lấy nhiều cây độ chệch cao rồi nối tiếp để giảm độ chệch. Hai cách
tấn công **hai thành phần khác nhau của cùng một công thức**.
<br><span class="en">**How to read this table for the exam**: the
"mainly reduces" row is the crucial one — it connects straight back to
the bias–variance decomposition. Bagging takes many
high-variance trees and averages away the variance; boosting takes many
high-bias stumps and chains them to cut the bias. Two routes attacking
**two different terms of the same formula**.</span>

### Bài tập nhóm 2 - <span class="en">Teamwork 2</span>

Bài tập nhóm đi kèm mục này yêu cầu 3 việc: liệt kê một số **mở rộng
khác của cây quyết định** ngoài rừng ngẫu nhiên; liệt kê càng nhiều
**ứng dụng tiềm năng** của thuật toán phân loại trong kinh doanh/thực tế
càng tốt; và quan trọng nhất — **giải thích bằng lời của chính mình vì
sao trung bình hóa nhiều cây làm giảm phương sai, trong khi trung bình
hóa nhiều cây giống hệt nhau thì không**. Câu hỏi thứ ba mới thực sự là
câu kiểm tra hiểu bản chất: trả lời được nó nghĩa là đã hiểu vì sao rừng
ngẫu nhiên cần **hai** nguồn ngẫu nhiên (bagging và lấy mẫu con đặc
trưng) chứ không phải một — nếu chỉ cần một, câu hỏi này sẽ không có câu
trả lời thỏa đáng.
<br><span class="en">This section's teamwork exercise asks 3 things:
list other decision tree extensions besides random forests; list as many
business/real-world applications of classification as possible; and,
most importantly, **explain in your own words why averaging many trees
reduces variance but averaging many identical trees would not**. The
third question is the real comprehension test: answering it means
understanding why a random forest needs **two** sources of randomness
(bagging and feature subsampling), not one — if only one were needed,
this question would have no satisfying answer.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 84 (mục 5.2, 3 biến thể và
đánh đổi), 85 (bảng so sánh), 86 (bài tập nhóm 2), 110 (bảng tổng kết:
cả hai bài toán, siêu tham số là tốc độ học và số vòng, **không cần chuẩn
hóa**, điểm mạnh là độ chính xác cao nhất trên dữ liệu bảng).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slide 84
(Section 5.2: the 3 variants and the trade-off), 85 (the comparison
table), 86 (Teamwork 2), 110 (summary table: both tasks, learning rate
and rounds, **no scaling**, highest accuracy on tabular data).</span>

## Liên quan - <span class="en">Related</span>

- [[random-forest-k32]] — đại diện của họ đóng bao, phía bên kia của bảng
  so sánh.
  <br><span class="en">[[random-forest-k32]] — the bagging family's
  representative, the other side of the comparison table.</span>
- [[decision-tree-k32]] — thành phần cấu tạo của cả 2 họ tổ hợp.
  <br><span class="en">[[decision-tree-k32]] — the building block of both
  ensemble families.</span>
- [[overfitting-underfitting-k32]] — phân rã độ chệch–phương sai là cơ sở
  lý thuyết giải thích vì sao 2 họ này khác nhau.
  <br><span class="en">[[overfitting-underfitting-k32]] — the
  bias–variance decomposition is the theory explaining why the two
  families differ.</span>
- [[classification-k32]] — bối cảnh bài toán; tăng cường gradient/XGBoost
  cũng nằm trong danh sách thuật toán phân loại ở slide 30.
  <br><span class="en">[[classification-k32]] — the problem setting;
  gradient boosting/XGBoost also appear in slide 30's algorithm
  list.</span>

## Lưu ý - <span class="en">Notes</span>

Mục tăng cường **không có ví dụ mã Python nào** trong chương — khác với
KNN (Ví dụ 3.1), cây quyết định (Ví dụ 4.1-4.2), rừng ngẫu nhiên (Ví dụ
5.1) và điều chuẩn (Ví dụ 7.1). Slide chỉ trình bày khái niệm và bảng so
sánh. Đây là khoảng trống nguồn: nếu cần thực hành tăng cường, phải tự
tìm cú pháp (`GradientBoostingClassifier` trong `scikit-learn`, hoặc thư
viện `xgboost` riêng) ngoài tài liệu môn học.
<br><span class="en">The boosting section has **no Python example** in
the chapter — unlike KNN (Example 3.1), decision trees (Examples
4.1-4.2), random forests (Example 5.1) and regularization (Example 7.1).
The slides give concepts and the comparison table only. A source gap: to
practise boosting you must find the syntax yourself
(`GradientBoostingClassifier` in `scikit-learn`, or the separate
`xgboost` library) outside the course material.</span>
