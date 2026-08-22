---
type: concept
title: "Quá khớp / Chưa khớp"
title_en: "Overfitting / Underfitting"
tags: [chapter-3, k31, machine-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Chưa khớp (underfitting) xảy ra khi mô hình quá đơn giản để nắm bắt mẫu
hình trong dữ liệu; quá khớp (overfitting) xảy ra khi mô hình quá phức
tạp, học cả nhiễu lẫn mẫu hình thật — cả hai đều khiến mô hình dự đoán
kém trên dữ liệu mới.
<br><span class="en">Underfitting happens when a model is too simple to
capture patterns in the data; overfitting happens when a model is too
complex, learning noise along with real patterns — both make the model
predict poorly on new data.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Chưa khớp**: mô hình quá đơn giản → hoạt động kém cả trên dữ liệu
  huấn luyện lẫn dữ liệu kiểm tra/dự báo, không dự đoán chính xác được.
  Giải pháp: dùng mô hình phức tạp hơn, hoặc cải thiện đặc trưng đầu vào
  để cung cấp nhiều thông tin hơn.
  <br><span class="en">**Underfitting**: model too simple → performs
  poorly on both training and test/forecast data, can't predict
  accurately. Solution: use a more complex model, or improve input
  features to give more information.</span>
- **Quá khớp**: mô hình quá phức tạp, học cả mẫu hình lẫn nhiễu trong dữ
  liệu → hoạt động xuất sắc trên dữ liệu huấn luyện nhưng kém trên dữ
  liệu kiểm tra/dự báo. Giải pháp: dùng mô hình đơn giản hơn, giảm độ
  phức tạp.
  <br><span class="en">**Overfitting**: model too complex, learns both
  patterns and noise → performs exceptionally well on training data but
  poorly on test/forecast data. Solution: use a simpler model, reduce
  complexity.</span>
- **Kiểm định chéo (cross-validation)** giúp kiểm soát quá khớp — bằng
  cách kiểm tra hiệu quả mô hình trên dữ liệu nó chưa từng thấy (xem
  [[model-evaluation-metrics]]).
  <br><span class="en">**Cross-validation** helps control overfitting —
  by testing model effectiveness on data it hasn't seen (see
  [[model-evaluation-metrics]]).</span>
- Đây là chủ đề xuyên suốt: [[k-nearest-neighbors]] kiểm soát qua việc
  chọn K (K nhỏ → variance cao/dễ quá khớp, K lớn → bias cao/dễ chưa
  khớp) — cơ chế kiểm soát cụ thể cho từng thuật toán sẽ khác nhau ở các
  chương sau.
  <br><span class="en">A recurring theme: [[k-nearest-neighbors]]
  controls it via choosing K (small K → high variance/prone to
  overfitting, large K → high bias/prone to underfitting) — the specific
  control mechanism differs per algorithm in later chapters.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter03-machine-learning-knn]] — định nghĩa đầy đủ + vai trò của
  kiểm định chéo.
  <br><span class="en">[[chapter03-machine-learning-knn]] — full
  definition + the role of cross-validation.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[model-evaluation-metrics]] — kiểm định chéo là công cụ phát hiện quá
  khớp/chưa khớp.
  <br><span class="en">[[model-evaluation-metrics]] — cross-validation is
  the tool for detecting overfitting/underfitting.</span>
- [[k-nearest-neighbors]] — ví dụ cụ thể đầu tiên về đánh đổi bias-
  variance qua tham số K.
  <br><span class="en">[[k-nearest-neighbors]] — the first concrete
  example of the bias-variance tradeoff via the K parameter.</span>
