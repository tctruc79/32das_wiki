---
type: concept
title: "Phân cụm K-Means"
title_en: "K-Means Clustering"
tags: [chapter-6, k31, machine-learning, unsupervised-learning, clustering]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

K-Means là thuật toán phân cụm lặp: khởi tạo K tâm cụm ngẫu nhiên, gán
mỗi điểm dữ liệu vào tâm gần nhất, cập nhật tâm cụm thành trung bình của
các điểm đã gán, lặp lại đến khi ổn định.
<br><span class="en">K-Means is an iterative clustering algorithm:
initialize K random centroids, assign each data point to the closest
centroid, update centroids to the average of assigned points, repeat
until stable.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Các bước**: **Khởi tạo** — chọn ngẫu nhiên K điểm làm tâm cụm; **Lặp**
  — tính khoảng cách từ mỗi điểm tới K tâm cụm, gán vào tâm gần nhất, đổi
  tâm cụm thành trung bình các điểm vừa gán; **Dừng** khi không còn điểm
  nào đổi gán.
  <br><span class="en">**Steps**: **Initialize** — pick K random points
  as centroids; **Iterate** — compute distance from each point to K
  centroids, assign to the closest, update centroids to the average of
  assigned points; **Stop** when no assignment changes.</span>
- **Yêu cầu biết trước K**: khác với [[hierarchical-clustering]], K-Means
  cần biết số cụm K ngay từ đầu. Kết quả phụ thuộc vào việc khởi tạo tâm
  cụm ban đầu (ngẫu nhiên) — có thể cho kết quả khác nhau giữa các lần
  chạy.
  <br><span class="en">**Requires K in advance**: unlike
  [[hierarchical-clustering]], K-Means needs the number of clusters K
  known upfront. Results depend on the initial (random) centroids — can
  give different results across runs.</span>
- **Triển khai** (`sklearn.cluster.KMeans`): tham số chính gồm
  `n_clusters` (K), `init` (cách khởi tạo tâm cụm), `n_init` (số lần
  chạy với tâm khởi tạo khác nhau), `max_iter` (số lần lặp tối đa),
  `tol` (ngưỡng hội tụ).
  <br><span class="en">**Implementation** (`sklearn.cluster.KMeans`): key
  parameters include `n_clusters` (K), `init` (centroid init method),
  `n_init` (runs with different initializations), `max_iter` (max
  iterations), `tol` (convergence tolerance).</span>
- **Ứng dụng thực tế**: tối ưu hóa mạng lưới vận chuyển trong chuỗi cung
  ứng; chẩn đoán bệnh trên lá cây từ dữ liệu hình ảnh.
  <br><span class="en">**Real-world applications**: optimizing
  transportation networks in supply chains; diagnosing plant leaf
  diseases from image data.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter06-clustering]] — các bước thuật toán, code Python, ví dụ, ứng
  dụng thực tế.
  <br><span class="en">[[chapter06-clustering]] — algorithm steps, Python
  code, examples, real-world applications.</span>
- [[chapter07-pca]] — PCA giúp cụm K-Means gọn hơn khi áp dụng trước như
  bước tiền xử lý.
  <br><span class="en">[[chapter07-pca]] — PCA makes K-Means clusters
  more compact when applied first as a preprocessing step.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[clustering]] — khung khái niệm chung, thước đo khoảng cách dùng để
  tính "gần nhất".
  <br><span class="en">[[clustering]] — the general concept framework,
  the distance measures used to determine "closest."</span>
- [[hierarchical-clustering]] — lựa chọn thay thế khi không biết trước
  số cụm.
  <br><span class="en">[[hierarchical-clustering]] — the alternative when
  the number of clusters is unknown upfront.</span>
