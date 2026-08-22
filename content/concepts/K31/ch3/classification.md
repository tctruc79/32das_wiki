---
type: concept
title: "Phân loại"
title_en: "Classification"
tags: [chapter-3, k31, machine-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Phân loại (classification) là kỹ thuật học có giám sát, phân loại dữ
liệu vào 1 số lượng lớp cho trước, đầu ra là nhãn rời rạc.
<br><span class="en">Classification is a supervised learning technique
that categorizes data into a given number of classes, with discrete
label outputs.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Thuật ngữ kỹ thuật**: Bộ phân loại (Classifier) — thuật toán ánh xạ
  dữ liệu đầu vào tới 1 hạng mục cụ thể; Phân loại nhị phân (Binary) — 2
  kết quả khả dĩ; Phân loại đa lớp (Multi-class) — nhiều hơn 2 lớp, mỗi
  quan sát chỉ nhận đúng 1 nhãn.
  <br><span class="en">**Technical terms**: Classifier — an algorithm
  mapping input data to a specific category; Binary Classification — 2
  possible outcomes; Multi-class classification — more than 2 classes,
  each observation gets exactly 1 label.</span>
- **Quy trình xây dựng mô hình**: khởi tạo bộ phân loại → huấn luyện bằng
  dữ liệu đã gán nhãn → dự đoán mục tiêu (`predict(X)` trả về nhãn dự
  đoán) → đánh giá mô hình.
  <br><span class="en">**Building process**: initialize the classifier →
  train on labeled data → predict the target (`predict(X)` returns the
  predicted label) → evaluate the model.</span>
- **Thuật toán phổ biến**: Naive Bayes, Decision Tree, Logistic
  Regression, K-Nearest Neighbours (KNN), Support Vector Machine — môn
  học đi sâu vào KNN ở Chapter 3 (xem [[k-nearest-neighbors]]) và Decision
  Tree ở Chapter 4.
  <br><span class="en">**Popular algorithms**: Naive Bayes, Decision
  Tree, Logistic Regression, K-Nearest Neighbours (KNN), Support Vector
  Machine — the course goes deep into KNN in Chapter 3 (see
  [[k-nearest-neighbors]]) and Decision Tree in Chapter 4.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter03-machine-learning-knn]] — định nghĩa, quy trình, danh sách
  thuật toán, KNN làm ví dụ chi tiết.
  <br><span class="en">[[chapter03-machine-learning-knn]] — definition,
  process, algorithm list, KNN as the detailed example.</span>
- [[chapter07-pca]] — PCA giúp cải thiện Logistic Regression/SVM/KNN bằng
  cách giảm nhiễu và đa cộng tuyến trước khi phân loại.
  <br><span class="en">[[chapter07-pca]] — PCA improves Logistic
  Regression/SVM/KNN by reducing noise and collinearity before
  classifying.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[k-nearest-neighbors]] — thuật toán classification đầu tiên được học
  chi tiết.
  <br><span class="en">[[k-nearest-neighbors]] — the first classification
  algorithm taught in detail.</span>
- [[machine-learning-overview]] — classification là 1 trong 2 nhánh chính
  của học có giám sát.
  <br><span class="en">[[machine-learning-overview]] — classification is
  one of the 2 main branches of supervised learning.</span>
