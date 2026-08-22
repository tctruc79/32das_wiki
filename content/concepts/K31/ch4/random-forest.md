---
type: concept
title: "Rừng ngẫu nhiên"
title_en: "Random Forest"
tags: [chapter-4, k31, machine-learning, classification, ensemble]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Rừng ngẫu nhiên là thuật toán học tổ hợp (ensemble learning): xây nhiều
cây quyết định nhỏ, yếu, song song, rồi kết hợp thành 1 bộ học mạnh bằng
cách lấy trung bình hoặc biểu quyết theo đa số.
<br><span class="en">Random Forest is an ensemble learning algorithm:
builds many small, weak decision trees in parallel, then combines them
into one strong learner by averaging or majority vote.</span>

## Diễn giải - <span class="en">Explanation</span>

- **Cơ chế ngẫu nhiên**: quá trình tìm nút gốc và tách nút đặc trưng chạy
  ngẫu nhiên — mỗi cây chỉ dùng 1 tập con ngẫu nhiên k đặc trưng (k ≪ m
  tổng đặc trưng), khác với 1 cây quyết định đơn dùng toàn bộ đặc trưng.
  <br><span class="en">**Randomization mechanism**: finding the root node
  and splitting feature nodes runs randomly — each tree only uses a
  random subset of k features (k ≪ m total features), unlike a single
  decision tree which uses all features.</span>
- **Vì sao hiệu quả**: đủ số cây → bộ phân loại không quá khớp; xử lý
  được giá trị thiếu; số cây càng nhiều → kết quả càng chính xác; mô hình
  hóa được cho giá trị định tính.
  <br><span class="en">**Why it works**: enough trees → the classifier
  won't overfit; handles missing values; more trees → more accurate;
  models categorical values well.</span>
- **2 giai đoạn hoạt động**: (1) **Tạo rừng** — chọn ngẫu nhiên k đặc
  trưng, tách nút bằng điểm tách tốt nhất trong k đặc trưng đó, lặp lại
  để xây n cây; (2) **Dự đoán** — mỗi cây dự đoán độc lập, tính phiếu bầu
  cho mỗi kết quả, lấy kết quả có phiếu cao nhất làm dự đoán cuối cùng.
  <br><span class="en">**2 operating stages**: (1) **Forest creation** —
  randomly select k features, split using the best point among them,
  repeat to build n trees; (2) **Prediction** — each tree predicts
  independently, votes are tallied, the highest-voted outcome is the
  final prediction.</span>
- Đây là cơ chế kiểm soát quá khớp thứ hai được học trong môn (sau việc
  chọn K ở [[k-nearest-neighbors]]) — nhưng hoạt động theo hướng khác:
  thay vì điều chỉnh 1 tham số của 1 mô hình, Random Forest tổ hợp nhiều
  mô hình yếu để triệt tiêu nhiễu riêng lẻ của từng cây.
  <br><span class="en">This is the second overfitting-control mechanism
  taught in the course (after choosing K in [[k-nearest-neighbors]]) —
  but works differently: instead of tuning a single model's parameter,
  Random Forest combines many weak models to cancel out each tree's
  individual noise.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter04-decision-tree-random-forest]] — định nghĩa, lý do dùng, 2
  giai đoạn hoạt động, triển khai Python.
  <br><span class="en">[[chapter04-decision-tree-random-forest]] —
  definition, rationale, 2 operating stages, Python implementation.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[decision-tree]] — Random Forest là tổ hợp của nhiều cây quyết định
  đơn.
  <br><span class="en">[[decision-tree]] — Random Forest is an ensemble
  of many single decision trees.</span>
- [[overfitting-underfitting]] — cơ chế tổ hợp giúp giảm quá khớp so với
  1 cây quyết định đơn.
  <br><span class="en">[[overfitting-underfitting]] — the ensemble
  mechanism reduces overfitting compared to a single decision
  tree.</span>
