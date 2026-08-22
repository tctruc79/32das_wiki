---
type: concept
title: "Phân cụm"
title_en: "Clustering"
tags: [chapter-6, k31, machine-learning, unsupervised-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Phân cụm (clustering) là việc tổ chức dữ liệu không nhãn thành các nhóm
tương đồng gọi là cụm — mỗi quan sát chỉ thuộc đúng 1 cụm (loại trừ lẫn
nhau), và mọi cụm gộp lại phủ hết toàn bộ dữ liệu (đầy đủ).
<br><span class="en">Clustering is the organization of unlabeled data
into similarity groups called clusters — each observation belongs to
exactly one cluster (mutually exclusive), and all clusters together cover
all the data (exhaustive).</span>

## Diễn giải - <span class="en">Explanation</span>

- **Thành phần cần có**: thước đo mức độ gần (proximity measure — tương
  đồng hoặc khoảng cách), hàm tiêu chí để đánh giá 1 cách phân cụm, và
  thuật toán để thực hiện.
  <br><span class="en">**Required components**: a proximity measure
  (similarity or distance), a criterion function to evaluate a
  clustering, and an algorithm to carry it out.</span>
- **3 thước đo khoảng cách** (đều là trường hợp đặc biệt/tổng quát của
  nhau): **Euclidean** (căn bậc hai tổng bình phương chênh lệch), **
  Manhattan** (tổng trị tuyệt đối chênh lệch), **Minkowski** (dạng tổng
  quát, p là số nguyên dương — p=2 cho Euclidean, p=1 cho Manhattan).
  <br><span class="en">**3 distance measures** (special/general cases of
  each other): **Euclidean** (square root of sum of squared differences),
  **Manhattan** (sum of absolute differences), **Minkowski** (the general
  form, p a positive integer — p=2 gives Euclidean, p=1 gives
  Manhattan).</span>
- **Đánh giá cụm**: **độ gắn kết trong cụm (intra-cluster cohesion)** —
  điểm dữ liệu càng gần tâm cụm càng tốt (đo bằng SSE); **độ tách biệt
  giữa cụm (inter-cluster separation)** — tâm các cụm khác nhau càng xa
  nhau càng tốt. Một cách phân cụm tốt tối đa hóa gắn kết trong cụm và
  tối đa hóa tách biệt giữa cụm cùng lúc.
  <br><span class="en">**Cluster evaluation**: **intra-cluster cohesion**
  — data points close to the centroid is better (measured by SSE);
  **inter-cluster separation** — different centroids far apart is
  better. A good clustering maximizes both cohesion and separation at
  once.</span>
- **Khác biệt với Classification**: Clustering không cần nhãn (học không
  giám sát), Classification cần nhãn đúng để huấn luyện (học có giám
  sát) — cùng mục tiêu "nhóm dữ liệu" nhưng khác hoàn toàn về dữ liệu đầu
  vào.
  <br><span class="en">**Difference from Classification**: Clustering
  needs no labels (unsupervised), Classification needs correct labels to
  train (supervised) — same "grouping" goal but entirely different input
  data.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter06-clustering]] — định nghĩa, thước đo khoảng cách, đánh giá
  cụm.
  <br><span class="en">[[chapter06-clustering]] — definition, distance
  measures, cluster evaluation.</span>
- [[chapter07-pca]] — mục 7.4 dùng PCA làm bước tiền xử lý trước khi phân
  cụm.
  <br><span class="en">[[chapter07-pca]] — section 7.4 uses PCA as a
  preprocessing step before clustering.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[k-means-clustering]] — thuật toán phân cụm cần biết trước số cụm K.
  <br><span class="en">[[k-means-clustering]] — a clustering algorithm
  needing K known in advance.</span>
- [[hierarchical-clustering]] — thuật toán phân cụm không cần biết trước
  số cụm.
  <br><span class="en">[[hierarchical-clustering]] — a clustering
  algorithm that doesn't need K known in advance.</span>
- [[classification]] — đối chiếu học có giám sát vs không giám sát.
  <br><span class="en">[[classification]] — the supervised vs
  unsupervised contrast.</span>
