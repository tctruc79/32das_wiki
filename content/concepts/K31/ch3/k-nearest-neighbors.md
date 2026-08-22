---
type: concept
title: "K-Nearest Neighbours (KNN)"
title_en: "K-Nearest Neighbours (KNN)"
tags: [chapter-3, k31, machine-learning, classification, knn]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

KNN là thuật toán phân loại dựa trên giả định các đối tượng tương tự
nhau thì ở gần nhau — dự đoán nhãn của 1 quan sát mới bằng cách lấy nhãn
xuất hiện nhiều nhất trong K quan sát gần nó nhất.
<br><span class="en">KNN is a classification algorithm based on the
assumption that similar things are near each other — it predicts a new
observation's label by taking the mode of the labels among its K nearest
observations.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Quy trình thuật toán**: (1) nạp dữ liệu, (2) chọn giá trị K, (3) với
  mỗi quan sát — tính khoảng cách giữa quan sát truy vấn và các quan sát
  trong dữ liệu, chọn K quan sát gần nhất, lấy nhãn của chúng, trả về
  nhãn xuất hiện nhiều nhất (mode) làm giá trị dự đoán.
  <br><span class="en">**Algorithm steps**: (1) load the data, (2) choose
  K, (3) for each observation — calculate distances to the query
  observation, pick the K nearest, get their labels, return the mode as
  the prediction.</span>
- **Chọn K**: chạy thuật toán nhiều lần với các K khác nhau, chọn K làm
  giảm số lỗi. Không có K tối ưu chung cho mọi tập dữ liệu — K nhỏ →
  nhiễu ảnh hưởng nhiều hơn (bias thấp, variance cao, dễ [[overfitting-underfitting|quá khớp]]);
  K lớn → tốn tính toán hơn nhưng variance thấp hơn, bias cao hơn (dễ
  chưa khớp).
  <br><span class="en">**Choosing K**: run several times with different K
  values, choose the K that reduces errors. No universally optimal K —
  small K → noise has more influence (low bias, high variance, prone to
  [[overfitting-underfitting|overfitting]]); large K → more computation
  but lower variance, higher bias (prone to underfitting).</span>
- **Ưu điểm**: đơn giản, dễ triển khai; không cần xây mô hình, điều chỉnh
  nhiều tham số, hay thêm giả định. **Nhược điểm**: chậm đáng kể khi số
  biến dự báo tăng; tốn tính toán khi số quan sát tăng; là **lazy
  learning** — không thực sự "học" gì, chỉ lưu dữ liệu và tính khi cần dự
  đoán (khác với **eager learning** như Decision Tree — xây mô hình ngay
  lúc huấn luyện).
  <br><span class="en">**Advantages**: simple, easy to implement; no
  model-building, parameter tuning, or extra assumptions needed.
  **Disadvantages**: significantly slower as predictors increase;
  computation-heavy as observations increase; it is **lazy learning** —
  it doesn't really "learn," just stores data and computes at prediction
  time (unlike **eager learning** such as Decision Tree, which builds a
  model at training time).</span>
- **Ví dụ IRIS** (`iris.csv`): 3 loài Iris (setosa, virginica,
  versicolor), 4 đặc trưng (chiều dài/rộng đài hoa và cánh hoa). KNN
  được dùng để phân loại loài cho từng quan sát, có thể thử nhiều K để
  tìm giá trị tối ưu.
  <br><span class="en">**IRIS example** (`iris.csv`): 3 Iris species
  (setosa, virginica, versicolor), 4 features (sepal/petal length/width).
  KNN classifies the species for each observation, with multiple K values
  triable to find the optimum.</span>
- **Ứng dụng thực tế**: bộ lọc email spam, phát hiện gian lận giao dịch.
  <br><span class="en">**Real-world applications**: spam email filters,
  transaction fraud detection.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter03-machine-learning-knn]] — toàn bộ thuật toán, ưu/nhược điểm,
  ví dụ IRIS, ứng dụng thực tế.
  <br><span class="en">[[chapter03-machine-learning-knn]] — the full
  algorithm, pros/cons, IRIS example, real-world applications.</span>
- [[chapter07-pca]] — bộ phân loại dựa trên khoảng cách như KNN hưởng lợi
  từ PCA khi dữ liệu nhiều chiều.
  <br><span class="en">[[chapter07-pca]] — distance-based classifiers
  like KNN benefit from PCA in high dimensions.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[classification]] — KNN là 1 trong 5 thuật toán classification phổ
  biến được liệt kê.
  <br><span class="en">[[classification]] — KNN is one of the 5 popular
  classification algorithms listed.</span>
- [[overfitting-underfitting]] — tham số K trực tiếp đánh đổi bias-
  variance.
  <br><span class="en">[[overfitting-underfitting]] — the K parameter
  directly trades off bias vs variance.</span>
- [[model-evaluation-metrics]] — MAE/MSE/RMSE dùng khi KNN áp dụng cho
  regression.
  <br><span class="en">[[model-evaluation-metrics]] — MAE/MSE/RMSE used
  when KNN is applied to regression.</span>
