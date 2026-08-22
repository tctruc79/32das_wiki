---
type: concept
title: "Phân cụm phân cấp"
title_en: "Hierarchical Clustering"
tags: [chapter-6, k31, machine-learning, unsupervised-learning, clustering]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Phân cụm phân cấp bắt đầu bằng cách coi mỗi quan sát là 1 cụm riêng, rồi
lặp lại việc hợp nhất 2 cụm gần/giống nhau nhất cho đến khi tất cả gộp
thành 1 cụm — không cần biết trước số cụm K.
<br><span class="en">Hierarchical clustering starts by treating each
observation as its own cluster, then repeatedly merges the 2 closest/
most similar clusters until everything merges into one — no need to know
K in advance.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Vì sao cần**: K-Means cần biết trước số cụm và kết quả phụ thuộc vào
  tâm cụm khởi tạo ngẫu nhiên. Khi không rõ nên có bao nhiêu cụm,
  Hierarchical clustering phù hợp hơn.
  <br><span class="en">**Why needed**: K-Means requires knowing the
  cluster count upfront and its results depend on random initial
  centroids. When the right number of clusters is unclear, Hierarchical
  clustering fits better.</span>
- **Thuật toán**: coi mỗi quan sát là 1 cụm; lặp lại (1) tìm 2 cụm gần
  nhau nhất, (2) hợp nhất chúng — đến khi mọi cụm hợp thành 1.
  <br><span class="en">**Algorithm**: treat each observation as its own
  cluster; repeat (1) find the 2 closest clusters, (2) merge them —
  until everything is one cluster.</span>
- **Phương pháp liên kết (linkage methods)**: quyết định cách đo "khoảng
  cách" giữa 2 cụm (không chỉ giữa 2 điểm) — slide gốc chỉ có hình, không
  trích xuất được chi tiết single/complete/average linkage; cần xem trực
  tiếp slide gốc nếu cần phân biệt.
  <br><span class="en">**Linkage methods**: determine how to measure
  "distance" between 2 clusters (not just 2 points) — the original slide
  only has an image, no extractable detail on single/complete/average
  linkage; need to view the original slide for the distinction.</span>
- **Dendrogram**: biểu đồ cây thể hiện toàn bộ lịch sử hợp nhất. Xác định
  số cụm cuối cùng bằng cách kẻ 1 đường ngang qua dendrogram — cắt ở độ
  cao khác nhau cho số cụm khác nhau.
  <br><span class="en">**Dendrogram**: a tree diagram showing the full
  merge history. Determine the final cluster count by drawing a
  horizontal line through the dendrogram — cutting at different heights
  gives different cluster counts.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter06-clustering]] — vì sao cần, thuật toán, dendrogram.
  <br><span class="en">[[chapter06-clustering]] — why needed, the
  algorithm, dendrogram.</span>
- [[chapter07-pca]] — hoạt động tốt hơn trên không gian đã giảm chiều
  bằng PCA.
  <br><span class="en">[[chapter07-pca]] — works better on a space
  already dimension-reduced by PCA.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[clustering]] — khung khái niệm chung.
  <br><span class="en">[[clustering]] — the general concept
  framework.</span>
- [[k-means-clustering]] — lựa chọn khác khi biết trước số cụm K và cần
  tốc độ nhanh hơn.
  <br><span class="en">[[k-means-clustering]] — the alternative when K is
  known and speed matters more.</span>
