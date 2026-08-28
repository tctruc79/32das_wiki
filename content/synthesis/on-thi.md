---
type: synthesis
title: "Ôn thi"
title_en: "Exam Prep"
tags: [synthesis, exam-prep]
created: 2026-08-22
updated: 2026-08-28
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
| [[chapter02-python-jupyter-k32]] | K32 | Python (cú pháp đầy đủ), Jupyter (kernel/cell/magic commands), Python for Data Analysis (NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn) dùng `Data2.csv` | Gần gấp đôi bản K31 (78 vs 41 slide) — thêm 2 phần hoàn toàn mới; tách cụm — không link chéo K31 |
| [[chapter03-supervised-learning-k32]] | K32 | Trọn nhánh học có giám sát: nền tảng ML, đánh giá mô hình (chỉ số hồi quy + phân loại, kiểm định chéo, độ chệch–phương sai), phân loại + KNN, cây quyết định, rừng ngẫu nhiên + tăng cường, hồi quy, Ridge/Lasso/Elastic Net | 112 slide — chương lớn nhất; gộp nội dung mà khóa 2025 chia làm 3 chương. Mã Ví dụ 3.1 **cố ý có lỗi** (slide 41-42 ghi rõ). Bài tập nhóm 3 cần `Income.csv` chưa có trong `raw/`. Tách cụm — không link chéo K31 |

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

### J. K32 — Chapter 2: Công cụ Python mở rộng (2026) - <span class="en">J. K32 — Chapter 2: Expanded Python Tooling (2026)</span>

_Cụm riêng cho K32, tách biệt khỏi cụm A-I theo quy tắc tách cụm._
<br><span class="en">_A separate cluster for K32, isolated from clusters
A-I per the separation rule._</span>

[[python-jupyter-tooling-k32]] (Python cơ bản + cách dùng Jupyter: cú
pháp, kernel, cell, magic commands) và [[python-data-analysis-stack]]
(NumPy/pandas/matplotlib/seaborn/statsmodels/scikit-learn, dùng
`Data2.csv`) — cả hai từ [[chapter02-python-jupyter-k32]] (K32).
<br><span class="en">[[python-jupyter-tooling-k32]] (core Python +
Jupyter mechanics) and [[python-data-analysis-stack]] (the data-analysis
library stack, using `Data2.csv`) — both from
[[chapter02-python-jupyter-k32]] (K32).</span>

### K. K32 — Chapter 3: Nền tảng và phương pháp luận học có giám sát - <span class="en">K. K32 — Chapter 3: Supervised Learning Foundations and Methodology</span>

_Cụm riêng cho K32, tách biệt khỏi cụm A-J theo quy tắc tách cụm._
<br><span class="en">_A separate cluster for K32, isolated from clusters
A-J per the separation rule._</span>

[[supervised-learning-framework]] (dữ liệu có nhãn → hàm f̂; y là loại ⇒
phân loại, y là số ⇒ hồi quy; 4 loại học máy; bảng thuật ngữ tham số vs
siêu tham số), [[train-test-split-and-cross-validation]] (chia dữ liệu,
rò rỉ dữ liệu, LOOCV/K-phần/K-phần phân tầng),
[[model-evaluation-metrics-k32]] (MAE/MSE/RMSE/MAPE/R² + độ chính xác/độ
chuẩn xác/độ bao phủ/F1/ROC-AUC) và [[overfitting-underfitting-k32]]
(quá khớp/chưa khớp + phân rã độ chệch–phương sai) — 4 khái niệm phương
pháp luận áp cho **mọi thuật toán** trong chương, tất cả từ
[[chapter03-supervised-learning-k32]] (K32).
<br><span class="en">[[supervised-learning-framework]] (labelled data →
f̂; category ⇒ classification, number ⇒ regression; the 4 ML types; the
parameter vs hyperparameter vocabulary),
[[train-test-split-and-cross-validation]] (splitting, data leakage,
LOOCV/K-fold/stratified), [[model-evaluation-metrics-k32]] (regression
plus classification metrics) and [[overfitting-underfitting-k32]]
(over/underfitting + the bias–variance decomposition) — the 4
methodological concepts that apply to **every algorithm** in the
chapter, all from [[chapter03-supervised-learning-k32]] (K32).</span>

### L. K32 — Chapter 3: Thuật toán phân loại và tổ hợp - <span class="en">L. K32 — Chapter 3: Classification and Ensemble Algorithms</span>

_Cụm riêng cho K32._
<br><span class="en">_A separate cluster for K32._</span>

[[classification-k32]] (nhị phân/đa lớp/đa nhãn, 4 bước xây mô hình),
[[k-nearest-neighbors-k32]] (dựa trên khoảng cách; 4 loại khoảng cách,
bắt buộc chuẩn hóa, chọn K bằng kiểm định chéo, học lười),
[[decision-tree-k32]] (dựa trên luật; ID3 vs CART, 3 thước đo độ thuần
khiết, độ lợi thông tin, tỉa cây), [[random-forest-k32]] (đóng bao + lấy
mẫu con đặc trưng, sai số ngoài túi) và [[boosting-ensemble]] (AdaBoost/
gradient/XGBoost, bảng đóng bao vs tăng cường) — trục thuật toán chính
của chương, từ [[chapter03-supervised-learning-k32]] (K32).
<br><span class="en">[[classification-k32]] (binary/multi-class/
multi-label, the 4 build steps), [[k-nearest-neighbors-k32]]
(distance-based; 4 distances, compulsory scaling, choosing K by CV, lazy
learning), [[decision-tree-k32]] (rule-based; ID3 vs CART, the 3 purity
measures, information gain, pruning), [[random-forest-k32]] (bagging +
feature subsampling, OOB error) and [[boosting-ensemble]] (AdaBoost/
gradient/XGBoost, the bagging vs boosting table) — the chapter's main
algorithmic spine, from [[chapter03-supervised-learning-k32]]
(K32).</span>

### M. K32 — Chapter 3: Hồi quy và điều chuẩn - <span class="en">M. K32 — Chapter 3: Regression and Regularization</span>

_Cụm riêng cho K32._
<br><span class="en">_A separate cluster for K32._</span>

[[linear-regression-k32]] (khung hồi quy trong học có giám sát, OLS/LAD/
MLE/MM, đa thức, biến giả, phân biệt mục đích giải thích vs dự đoán) và
[[regularization-ridge-lasso-elastic-net-k32]] (3 hàm mất mát, Elastic
Net, nghiệm hiển của Ridge, lời giải thích hình học vì sao Lasso đưa hệ
số về 0, chọn λ bằng kiểm định chéo) — nhánh hồi quy, từ
[[chapter03-supervised-learning-k32]] (K32).
<br><span class="en">[[linear-regression-k32]] (regression inside the
supervised frame, OLS/LAD/MLE/MM, polynomials, dummies, explanation vs
prediction) and [[regularization-ridge-lasso-elastic-net-k32]] (the 3
loss functions, Elastic Net, Ridge's closed form, the geometric reason
Lasso zeroes coefficients, choosing λ by CV) — the regression branch,
from [[chapter03-supervised-learning-k32]] (K32).</span>

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

K31 vs K32 (Chapter 2): khác biệt còn lớn hơn cả Chapter 1 — K32 (78
slide) gần gấp đôi K31 (41 slide) và thêm nguyên 2 phần **hoàn toàn mới
không tồn tại ở K31**: "Python Essentials by Example" (dạy cú pháp Python
từ đầu — biến, kiểu dữ liệu, cấu trúc điều khiển, hàm, xử lý lỗi) và
"Python for Data Analysis" (NumPy/pandas/matplotlib/seaborn/statsmodels/
scikit-learn, dùng dữ liệu thật `Data2.csv`). Bản K31 dừng lại ở mức giới
thiệu Python + cài đặt/dùng Jupyter + Markdown, không dạy cú pháp hay thư
viện phân tích dữ liệu nào — nội dung tương đương ở K31 (nếu có) nằm rải
rác ở các chương thuật toán sau (KNN dùng scikit-learn ở Chapter 3, hồi
quy dùng statsmodels-tương tự ở Chapter 5), không tập trung thành 1 chỗ
như K32. Cũng theo quy tắc tách cụm, ghi nhận bằng chữ thường, không tạo
wikilink chéo cụm.
<br><span class="en">K31 vs K32 (Chapter 2): the gap is even larger than
Chapter 1 — K32 (78 slides) is almost double K31 (41 slides) and adds 2
sections **entirely absent from K31**: "Python Essentials by Example"
(core syntax from scratch) and "Python for Data Analysis" (NumPy/pandas/
matplotlib/seaborn/statsmodels/scikit-learn, using real `Data2.csv`
data). K31's version stopped at introducing Python + installing/using
Jupyter + Markdown, with no syntax or data-analysis-library teaching at
all — the K31 equivalent (where it exists) is scattered across later
algorithm chapters instead of concentrated in one place like K32. Per
the separation rule, noted in plain text only, no cross-cluster
wikilink.</span>

K31 vs K32 (Chapter 3): đây là khác biệt **về cấu trúc chương trình**,
không chỉ về độ dài. Khóa 2025 chia nhánh học có giám sát thành **3
chương riêng** (Machine Learning/KNN; Decision Tree & Random Forest;
Ridge and Lasso); khóa 2026 gộp cả 3 thành **1 file duy nhất 112 slide**
mang tên "Supervised Learning" và bổ sung nhiều phần chưa từng có: bộ chỉ
số phân loại (độ chính xác/độ chuẩn xác/độ bao phủ/F1/ROC-AUC), kiểm định
chéo (LOOCV/K-phần/K-phần phân tầng), công thức phân rã độ chệch–phương
sai, phân loại đa nhãn, khoảng cách Minkowski và Hamming, ví dụ số chứng
minh vì sao KNN bắt buộc chuẩn hóa, so sánh cây phân loại vs cây hồi quy,
tỉa trước/tỉa sau và `ccp_alpha`, học tự giám sát (loại học máy thứ 4),
nguyên mục **tăng cường** (AdaBoost/gradient/XGBoost) kèm bảng đóng bao
vs tăng cường, **Elastic Net**, nghiệm hiển của Ridge, và lời giải thích
hình học vì sao Lasso đưa hệ số về đúng 0. Bản 2026 còn có **2 khung tự
sửa lỗi** so với các bản trước (slide 17: MSE và RMSE đều chứa hệ số 1/n;
slide 32: chọn K láng giềng diễn ra sau khi tính xong mọi khoảng cách,
không nằm trong vòng lặp). Theo quy tắc tách cụm, ghi nhận bằng chữ
thường, không tạo wikilink chéo cụm.
<br><span class="en">K31 vs K32 (Chapter 3): this is a **curriculum
structure** difference, not just a length one. The 2025 cohort split the
supervised branch across **3 separate chapters**; the 2026 cohort merges
all three into **one 112-slide file** titled "Supervised Learning" and
adds much that never existed before: the classification metric set,
cross-validation (LOOCV/K-fold/stratified), the bias–variance
decomposition, multi-label classification, Minkowski and Hamming
distances, the numeric example proving why KNN needs scaling,
classification vs regression trees, pre-/post-pruning and `ccp_alpha`,
self-supervised learning as a 4th ML type, an entire **boosting**
section with a bagging-vs-boosting table, **Elastic Net**, Ridge's
closed form, and the geometric reason Lasso zeroes coefficients. The
2026 deck also carries **2 self-correction boxes** versus earlier
versions (slide 17: MSE and RMSE both contain the 1/n factor; slide 32:
the K nearest are selected after all distances are computed, not inside
the loop). Per the separation rule, recorded in plain text only, with no
cross-cluster wikilink.</span>

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
| [[python-jupyter-tooling-k32]] | [[chapter02-python-jupyter-k32]] | K32 |
| [[python-data-analysis-stack]] | [[chapter02-python-jupyter-k32]] | K32 |
| [[supervised-learning-framework]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[train-test-split-and-cross-validation]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[model-evaluation-metrics-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[overfitting-underfitting-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[classification-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[k-nearest-neighbors-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[decision-tree-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[random-forest-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[boosting-ensemble]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[linear-regression-k32]] | [[chapter03-supervised-learning-k32]] | K32 |
| [[regularization-ridge-lasso-elastic-net-k32]] | [[chapter03-supervised-learning-k32]] | K32 |

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
- (K32) Phân biệt vai trò của statsmodels và scikit-learn khi cùng ước
  lượng 1 mô hình hồi quy — cái nào hướng tới giải thích, cái nào hướng
  tới dự đoán, và vì sao sự khác biệt đó quan trọng?
  <br><span class="en">(K32) Distinguish the roles of statsmodels and
  scikit-learn when fitting the same regression model — which is
  oriented towards explanation, which towards prediction, and why does
  that distinction matter?</span>
- (K32) Giải thích vì sao `In [n]`/`Out[n]` trong Jupyter thể hiện thứ tự
  thực thi chứ không phải thứ tự hiển thị — cho 1 ví dụ tình huống dễ gây
  lỗi vì hiểu sai điều này.
  <br><span class="en">(K32) Explain why `In [n]`/`Out[n]` in Jupyter
  reflects execution order, not display order — give an example scenario
  where misunderstanding this causes an error.</span>

### 5 câu hỏi ôn tập do chính giảng viên ra (K32, Chapter 3, slide 111) - <span class="en">The instructor's own 5 review questions (K32, Chapter 3, slide 111)</span>

_Đây là câu hỏi in trực tiếp trên slide — mức ưu tiên ôn tập cao nhất._
<br><span class="en">_These are printed directly on the slide — the
highest revision priority._</span>

1. Vì sao K rất nhỏ trong KNN cho độ chệch thấp nhưng phương sai cao?
   <br><span class="en">Why does a very small K in KNN give low bias but
   high variance?</span>
2. Một nút chứa 20 quan sát lớp A và 20 quan sát lớp B — tính độ hỗn loạn
   (entropy) và độ không thuần Gini của nút đó. Nút này có thuần khiết
   không?
   <br><span class="en">A node contains 20 observations of class A and 20
   of class B. Compute its entropy and its Gini impurity. Is it
   pure?</span>
3. Giải thích vì sao RMSE ≥ MAE luôn đúng.
   <br><span class="en">Explain why RMSE ≥ MAE always holds.</span>
4. Mô hình của bạn có độ chính xác 98% trên tập huấn luyện và 71% trên
   tập kiểm tra — chẩn đoán vấn đề và đề xuất 2 cách khắc phục.
   <br><span class="en">Your model has 98% training accuracy and 71% test
   accuracy. Diagnose the problem and propose two remedies.</span>
5. Bạn có 400 biến dự báo và 120 quan sát — bạn chọn Ridge hay Lasso, và
   vì sao?
   <br><span class="en">You have 400 predictors and 120 observations.
   Would you choose Ridge or Lasso, and why?</span>

### Câu hỏi bổ sung từ Chapter 3 K32 - <span class="en">Additional questions from K32 Chapter 3</span>

- (K32) Rò rỉ dữ liệu là gì? Cho 1 ví dụ cụ thể về việc khớp bộ chuẩn hóa
  sai chỗ, và giải thích vì sao nó làm hiệu năng báo cáo lạc quan giả
  tạo.
  <br><span class="en">(K32) What is data leakage? Give a concrete
  example of fitting a scaler in the wrong place, and explain why it
  makes reported performance optimistic.</span>
- (K32) Vì sao độ chính xác (accuracy) gây hiểu lầm trên dữ liệu mất cân
  bằng? Với bài toán phát hiện gian lận, bạn ưu tiên độ chuẩn xác hay độ
  bao phủ, và vì sao?
  <br><span class="en">(K32) Why is accuracy misleading on imbalanced
  data? For fraud detection, would you prioritise precision or recall,
  and why?</span>
- (K32) Viết công thức phân rã độ chệch–phương sai và giải thích ý nghĩa
  của từng số hạng, kể cả số hạng không thể giảm được.
  <br><span class="en">(K32) Write the bias–variance decomposition and
  explain each term, including the irreducible one.</span>
- (K32) Cho ví dụ tuổi 30 vs 35 và thu nhập 20.000 vs 20.050 triệu đồng —
  tính khoảng cách Euclid và giải thích vì sao KNN bắt buộc chuẩn hóa.
  <br><span class="en">(K32) Given ages 30 vs 35 and incomes 20,000 vs
  20,050 — compute the Euclidean distance and explain why KNN requires
  scaling.</span>
- (K32) So sánh ID3 và CART trên 4 điểm: tiêu chí tách, kiểu tách, khả
  năng xử lý dữ liệu số, và bài toán áp dụng được. `scikit-learn` cài đặt
  thuật toán nào?
  <br><span class="en">(K32) Compare ID3 and CART on 4 points: splitting
  criterion, split type, handling of numeric data, and applicable tasks.
  Which one does `scikit-learn` implement?</span>
- (K32) Phân biệt tỉa trước và tỉa sau. `ccp_alpha` phạt cái gì?
  <br><span class="en">(K32) Distinguish pre-pruning from post-pruning.
  What does `ccp_alpha` penalise?</span>
- (K32) Rừng ngẫu nhiên có 2 nguồn ngẫu nhiên — nêu tên và giải thích vì
  sao **cả hai** đều cần thiết. Vì sao trung bình hóa nhiều cây giống hệt
  nhau thì không giảm được phương sai?
  <br><span class="en">(K32) A random forest has 2 sources of randomness
  — name them and explain why **both** are needed. Why would averaging
  identical trees not reduce variance?</span>
- (K32) Sai số ngoài túi (OOB) được tính như thế nào, và vì sao nó được
  gọi là "ước lượng kiểm định miễn phí"?
  <br><span class="en">(K32) How is the out-of-bag error computed, and
  why is it called a "free validation estimate"?</span>
- (K32) So sánh đóng bao và tăng cường: cách xây cây, đặc điểm cây, và
  thành phần nào của phân rã sai số mà mỗi bên chủ yếu giảm.
  <br><span class="en">(K32) Compare bagging and boosting: how trees are
  built, what the trees look like, and which term of the error
  decomposition each mainly reduces.</span>
- (K32) Giải thích **bằng hình học** vì sao Lasso đưa hệ số về đúng 0 còn
  Ridge thì không — vai trò của hình thoi và hình tròn.
  <br><span class="en">(K32) Explain **geometrically** why Lasso sets
  coefficients exactly to zero while Ridge does not — the role of the
  diamond and the circle.</span>
- (K32) Elastic Net giải quyết vấn đề gì của Lasso khi các biến dự báo
  tương quan mạnh? Tham số α = 1 và α = 0 cho ra mô hình nào?
  <br><span class="en">(K32) What Lasso problem does Elastic Net solve
  when predictors are strongly correlated? Which models do α = 1 and
  α = 0 give?</span>
- (K32) Vì sao Ridge xử lý được trường hợp số biến nhiều hơn số quan sát
  (k > n)? Chỉ ra vai trò của λI trong công thức β̂ = (X'X + λI)⁻¹X'y.
  <br><span class="en">(K32) Why can Ridge handle the k > n case? Point
  to the role of λI in β̂ = (X'X + λI)⁻¹X'y.</span>
- (K32) Cùng một mô hình hồi quy tuyến tính phục vụ 2 mục đích khác nhau
  — nêu tên và giải thích vì sao một mô hình có thể tốt cho mục đích này
  mà tầm thường cho mục đích kia.
  <br><span class="en">(K32) The same linear regression model serves 2
  different purposes — name them and explain why a model can be good for
  one and mediocre for the other.</span>
