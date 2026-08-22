---
type: synthesis
title: "Ôn thi"
title_en: "Exam Prep"
tags: [synthesis, exam-prep]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

Trang tổng hợp duy nhất để ôn thi — cập nhật BẮT BUỘC mỗi lần ingest 1
chương mới (xem CLAUDE.md, mục INGEST).
<br><span class="en">The single compounding exam-prep page — updated
MANDATORY every time a new chapter is ingested (see CLAUDE.md, INGEST
section).</span>

## 1. Bảng tra cứu nhanh - <span class="en">Quick lookup table</span>

| Chương | Khóa | Chủ đề | Ghi chú |
|---|---|---|---|
| [[chapter01-introduction]] | K31 | Khoa học dữ liệu là gì, kim tự tháp DIKW, 4 loại phân tích, tư duy phân tích dữ liệu | Bản slide 2025 khá sơ lược — nhiều slide chỉ có hình, không có định nghĩa chi tiết cho các thuật ngữ ở slide 23 |
| [[chapter02-python-jupyter]] | K31 | Python (lịch sử, 5 thế hệ ngôn ngữ, ứng dụng), Jupyter Notebook (cài đặt, Markdown, chia sẻ) | Thuần công cụ, không có lý thuyết ML |
| [[chapter03-machine-learning-knn]] | K31 | Tổng quan ML, lịch sử AI, overfitting/underfitting, Classification, KNN + ví dụ IRIS | Outline slide 3 nhắc Regression/Clustering/Dimension reduction/Association nhưng đó là dàn ý cả cụm Chapter 3-7, không phải nội dung file này |
| [[chapter04-decision-tree-random-forest]] | K31 | Cây quyết định (ID3/C4.5/CART, purity measures) + Rừng ngẫu nhiên (ensemble) | |
| [[chapter05-ridge-lasso]] | K31 | Hồi quy tuyến tính, quá khớp trong hồi quy, Ridge/Lasso, MAPE | Dữ liệu thực hành `regression.csv` không còn trong `raw/` |
| [[chapter06-clustering]] | K31 | Học không giám sát: phân cụm, thước đo khoảng cách, K-Means, Hierarchical | Slide linkage methods chỉ có hình |
| [[chapter07-pca]] | K31 | PCA: hiệp phương sai, trị riêng/véc-tơ riêng, quy trình, kết hợp với Clustering/Classification/Regression | Mật độ cross-reference cao nhất trong 8 chương |
| [[chapter08-deep-learning]] | K31 | Lịch sử học sâu, perceptron, lan truyền tiến/lùi, ANN/CNN/RNN | Gap: chưa có nguồn giảng Logistic Regression chi tiết |
| [[chapter01-introduction-k32]] | K32 | 5 V's, định nghĩa vận hành, DS vs Analytics vs BI, 5 loại phân tích (thêm Causal), checklist 7 điều kiện | Tách cụm — không link chéo K31 |

## 2. Cụm chủ đề - <span class="en">Topic clusters</span>

### A. Nền tảng: dữ liệu, khoa học dữ liệu, DIKW - <span class="en">A. Foundations: data, data science, DIKW</span>

[[big-data]], [[dikw-pyramid]], [[data-science-definition]] — 3 khái niệm
nền tảng nhất môn học, đều xuất phát từ [[chapter01-introduction]] (K31).
<br><span class="en">[[big-data]], [[dikw-pyramid]],
[[data-science-definition]] — the 3 most foundational concepts of the
course, all originating from [[chapter01-introduction]] (K31).</span>

### B. Ra quyết định & tư duy phân tích - <span class="en">B. Decision-making & analytic thinking</span>

[[data-driven-decision-making]] (4 loại phân tích) và
[[data-analytic-thinking]] (ẩn dụ la bàn/chuyển động) — cặp khái niệm bổ
trợ nhau, cùng từ [[chapter01-introduction]] (K31).
<br><span class="en">[[data-driven-decision-making]] (4 types of
analytics) and [[data-analytic-thinking]] (compass/movement metaphor) — a
complementary pair, both from [[chapter01-introduction]] (K31).</span>

### C. Công cụ - <span class="en">C. Tooling</span>

[[python-jupyter-tooling]] — hạ tầng thực hành (Python + Jupyter
Notebook) dùng xuyên suốt Chapter 3-8.
<br><span class="en">[[python-jupyter-tooling]] — the hands-on
infrastructure (Python + Jupyter Notebook) used throughout Chapters
3-8.</span>

### D. Học máy nền tảng & Classification/KNN - <span class="en">D. ML foundations & Classification/KNN</span>

[[machine-learning-overview]] (lịch sử AI/ML, 3 loại ML),
[[overfitting-underfitting]] + [[model-evaluation-metrics]] (chủ đề xuyên
suốt Chapter 3-5), [[classification]] + [[k-nearest-neighbors]] (thuật
toán đầu tiên) — tất cả từ [[chapter03-machine-learning-knn]] (K31).
<br><span class="en">[[machine-learning-overview]] (AI/ML history, 3 ML
types), [[overfitting-underfitting]] + [[model-evaluation-metrics]] (a
theme running through Chapters 3-5), [[classification]] +
[[k-nearest-neighbors]] (the first algorithm) — all from
[[chapter03-machine-learning-knn]] (K31).</span>

### E. Regression & Regularization - <span class="en">E. Regression & Regularization</span>

[[linear-regression]] + [[regularization-ridge-lasso]] — nhánh Regression
của học có giám sát, từ [[chapter05-ridge-lasso]] (K31).
<br><span class="en">[[linear-regression]] + [[regularization-ridge-lasso]]
— the Regression branch of supervised learning, from
[[chapter05-ridge-lasso]] (K31).</span>

### F. Học không giám sát: Phân cụm - <span class="en">F. Unsupervised Learning: Clustering</span>

[[clustering]] (định nghĩa, thước đo khoảng cách, đánh giá cụm),
[[k-means-clustering]] + [[hierarchical-clustering]] (2 thuật toán chính)
— từ [[chapter06-clustering]] (K31).
<br><span class="en">[[clustering]] (definition, distance measures,
evaluation), [[k-means-clustering]] + [[hierarchical-clustering]] (the 2
main algorithms) — from [[chapter06-clustering]] (K31).</span>

### G. Giảm chiều: PCA - <span class="en">G. Dimension Reduction: PCA</span>

[[pca]] (hiệp phương sai, trị riêng/véc-tơ riêng, quy trình 5 bước) +
[[pca-combined-with-other-algorithms]] (PCA+Clustering/Classification/
Regression) — từ [[chapter07-pca]] (K31). Đây là chương tổng hợp lại
nhiều nhất trong môn — liên kết ngược tới [[clustering]],
[[k-means-clustering]], [[hierarchical-clustering]], [[classification]],
[[k-nearest-neighbors]], [[regularization-ridge-lasso]].
<br><span class="en">[[pca]] (covariance, eigenvalue/eigenvector, the
5-step procedure) + [[pca-combined-with-other-algorithms]] (PCA+
Clustering/Classification/Regression) — from [[chapter07-pca]] (K31). The
course's most synthesizing chapter — back-links to [[clustering]],
[[k-means-clustering]], [[hierarchical-clustering]], [[classification]],
[[k-nearest-neighbors]], [[regularization-ridge-lasso]].</span>

### H. Học sâu - <span class="en">H. Deep Learning</span>

[[deep-learning-neural-networks]] — lịch sử, perceptron, lan truyền tiến/
lùi, ANN/CNN/RNN — từ [[chapter08-deep-learning]] (K31), chương cuối
cùng của K31.
<br><span class="en">[[deep-learning-neural-networks]] — history,
perceptron, forward/backward propagation, ANN/CNN/RNN — from
[[chapter08-deep-learning]] (K31), K31's final chapter.</span>

### I. K32 — Chapter 1 (2026) - <span class="en">I. K32 — Chapter 1 (2026)</span>

_Cụm riêng cho K32, tách biệt hoàn toàn khỏi cụm A-H (K31) theo quy tắc
tách cụm — không dùng wikilink chéo, chỉ ghi tên khóa bằng chữ thường khi
cần so sánh._
<br><span class="en">_A separate cluster for K32, fully isolated from
clusters A-H (K31) per the separation rule — no cross wikilinks, cohort
names in plain text only when comparison is needed._</span>

[[big-data-k32]] (5 V's), [[dikw-pyramid-k32]],
[[data-science-definition-k32]] (định nghĩa vận hành, bảng thuật ngữ,
bảng so sánh DS/Analytics/BI, bảng vai trò),
[[data-driven-decision-making-k32]] (5 loại phân tích, thêm Causal),
[[data-analytic-thinking-k32]] (5 bước cụ thể, chuỗi bài toán, checklist
7 điều kiện) — tất cả từ [[chapter01-introduction-k32]] (K32).
<br><span class="en">[[big-data-k32]] (5 V's), [[dikw-pyramid-k32]],
[[data-science-definition-k32]] (working definition, terminology table,
DS/Analytics/BI table, roles table), [[data-driven-decision-making-k32]]
(5 types of analytics, adds Causal), [[data-analytic-thinking-k32]] (5
concrete steps, problem chain, 7-condition checklist) — all from
[[chapter01-introduction-k32]] (K32).</span>

## 3. Mâu thuẫn / khác biệt giữa các nguồn - <span class="en">Tensions / differences between sources</span>

Không có mâu thuẫn thật trong nội bộ cụm K31 (8/8 chương). Riêng K31 vs
K32 (Chapter 1): 2 bản khác biệt đáng kể — K32 (2026) thêm khung 5 V's,
định nghĩa vận hành riêng, bảng so sánh DS/Analytics/BI, bảng vai trò,
loại phân tích thứ 5 (Causal), quy trình 5 bước tư duy cụ thể, checklist
7 điều kiện — mà K31 (2025) không có. Theo quy tắc tách cụm K31/K32
(CLAUDE.md), đây **không được ghi là "mâu thuẫn"** giữa 2 trang (2 bản
không link chéo nhau) — chỉ ghi nhận ở đây bằng chữ thường như 1 sự kiện
lịch sử (giảng viên cập nhật nội dung qua các năm), không tạo wikilink
nào giữa 2 cụm.
<br><span class="en">No real tension within the K31 cluster itself (8/8
chapters). K31 vs K32 (Chapter 1): the 2 versions differ substantially —
K32 (2026) adds the 5 V's framework, its own working definition, a
DS/Analytics/BI comparison table, a roles table, a 5th analytics type
(Causal), a concrete 5-step thinking process, a 7-condition checklist —
none present in K31 (2025). Per the K31/K32 separation rule (CLAUDE.md),
this is **not logged as a "tension"** between 2 pages (they don't
cross-link) — noted here in plain text only as a historical fact (the
instructor updated content across years), with no wikilink between the 2
clusters.</span>

## 4. Bản đồ khái niệm → nguồn - <span class="en">Concept → source map</span>

| Khái niệm | Nguồn | Khóa |
|---|---|---|
| [[big-data]] | [[chapter01-introduction]] | K31 |
| [[dikw-pyramid]] | [[chapter01-introduction]] | K31 |
| [[data-science-definition]] | [[chapter01-introduction]] | K31 |
| [[data-driven-decision-making]] | [[chapter01-introduction]] | K31 |
| [[data-analytic-thinking]] | [[chapter01-introduction]] | K31 |
| [[python-jupyter-tooling]] | [[chapter02-python-jupyter]] | K31 |
| [[machine-learning-overview]] | [[chapter03-machine-learning-knn]] | K31 |
| [[overfitting-underfitting]] | [[chapter03-machine-learning-knn]] | K31 |
| [[model-evaluation-metrics]] | [[chapter03-machine-learning-knn]] | K31 |
| [[classification]] | [[chapter03-machine-learning-knn]] | K31 |
| [[k-nearest-neighbors]] | [[chapter03-machine-learning-knn]] | K31 |
| [[decision-tree]] | [[chapter04-decision-tree-random-forest]] | K31 |
| [[random-forest]] | [[chapter04-decision-tree-random-forest]] | K31 |
| [[linear-regression]] | [[chapter05-ridge-lasso]] | K31 |
| [[regularization-ridge-lasso]] | [[chapter05-ridge-lasso]] | K31 |
| [[clustering]] | [[chapter06-clustering]] | K31 |
| [[k-means-clustering]] | [[chapter06-clustering]] | K31 |
| [[hierarchical-clustering]] | [[chapter06-clustering]] | K31 |
| [[pca]] | [[chapter07-pca]] | K31 |
| [[pca-combined-with-other-algorithms]] | [[chapter07-pca]] | K31 |
| [[deep-learning-neural-networks]] | [[chapter08-deep-learning]] | K31 |
| [[big-data-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[dikw-pyramid-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[data-science-definition-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[data-driven-decision-making-k32]] | [[chapter01-introduction-k32]] | K32 |
| [[data-analytic-thinking-k32]] | [[chapter01-introduction-k32]] | K32 |

## 5. Ngân hàng câu hỏi ôn thi - <span class="en">Exam question bank</span>

- Phân biệt 4 loại phân tích (mô tả/chẩn đoán/dự đoán/đề xuất) — cho 1 ví
  dụ cụ thể và yêu cầu xếp loại.
  <br><span class="en">Distinguish the 4 types of analytics (descriptive/
  diagnostic/predictive/prescriptive) — given a concrete example, classify
  it.</span>
- Vì sao công nghệ dữ liệu lớn KHÔNG đồng nghĩa với khai phá dữ liệu?
  <br><span class="en">Why is big data technology NOT the same as data
  mining?</span>
- Giải thích ẩn dụ "la bàn" và "sự chuyển động" trong tư duy phân tích dữ
  liệu vs ra quyết định dựa trên dữ liệu.
  <br><span class="en">Explain the "compass" and "movement" metaphor for
  data-analytic thinking vs data-driven decision making.</span>
- Phân biệt quá khớp và chưa khớp — mỗi loại giải quyết bằng cách nào?
  <br><span class="en">Distinguish overfitting from underfitting — how is
  each addressed?</span>
- Giải thích quy trình thuật toán KNN, và vì sao chọn K nhỏ/K lớn lại
  đánh đổi bias-variance khác nhau.
  <br><span class="en">Explain the KNN algorithm's steps, and why
  choosing small vs large K trades off bias and variance
  differently.</span>
- Vì sao KNN được gọi là "lazy learning"?
  <br><span class="en">Why is KNN called "lazy learning"?</span>
- So sánh 3 thuật toán xây cây quyết định ID3/C4.5/CART.
  <br><span class="en">Compare the 3 decision tree algorithms
  ID3/C4.5/CART.</span>
- Random Forest kiểm soát quá khớp bằng cơ chế nào, khác gì so với việc
  chọn K trong KNN?
  <br><span class="en">How does Random Forest control overfitting, and
  how does that differ from choosing K in KNN?</span>
- Phân biệt Ridge (L2) và Lasso (L1) — điểm khác biệt cơ bản trong công
  thức loss và ý nghĩa thực tế của khác biệt đó.
  <br><span class="en">Distinguish Ridge (L2) from Lasso (L1) — the
  fundamental difference in the loss formula and its practical
  meaning.</span>
- Vì sao MAPE hữu ích hơn MAE/MSE/RMSE khi so sánh sai số giữa các bài
  toán có thang đo khác nhau?
  <br><span class="en">Why is MAPE more useful than MAE/MSE/RMSE when
  comparing error across problems with different scales?</span>
- So sánh K-Means và Hierarchical Clustering — khi nào nên dùng cái nào?
  <br><span class="en">Compare K-Means and Hierarchical Clustering — when
  should each be used?</span>
- Giải thích quan hệ giữa trị riêng, véc-tơ riêng, và thành phần chính
  trong PCA.
  <br><span class="en">Explain the relationship between eigenvalues,
  eigenvectors, and principal components in PCA.</span>
- So sánh PCR và Ridge/Lasso như 2 cách xử lý đa cộng tuyến — cơ chế khác
  nhau ở đâu?
  <br><span class="en">Compare PCR and Ridge/Lasso as 2 ways to handle
  multicollinearity — where do their mechanisms differ?</span>
- Giải thích vì sao 1 perceptron đơn lẻ có thể được xem là tương đương
  với Logistic Regression.
  <br><span class="en">Explain why a single perceptron can be seen as
  equivalent to Logistic Regression.</span>
- Phân biệt ANN, CNN, RNN — mỗi loại phù hợp với dạng dữ liệu nào?
  <br><span class="en">Distinguish ANN, CNN, RNN — what data does each
  suit?</span>
- (K32) Phân biệt 5 loại phân tích, đặc biệt Causal vs Predictive — lỗi
  đặc trưng của mỗi loại là gì?
  <br><span class="en">(K32) Distinguish the 5 types of analytics,
  especially Causal vs Predictive — what is each type's characteristic
  error?</span>
- (K32) Áp dụng checklist 7 điều kiện cho 1 bài toán kinh doanh cụ thể —
  bài toán đó có phù hợp làm khoa học dữ liệu không?
  <br><span class="en">(K32) Apply the 7-condition checklist to a
  concrete business problem — does it suit data science?</span>
