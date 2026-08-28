---
type: source
title: "Chapter 3 (K32) — Học có giám sát"
title_en: "Chapter 3 (K32) — Supervised Learning"
tags: [chapter-3, k32, supervised-learning, classification, regression, knn, decision-tree, random-forest, boosting, regularization]
created: 2026-08-28
updated: 2026-08-28
status: complete
source_file: "raw/Lecture Notes/K32/Chapter03/VNP_DataScience_SupervisedLearning_2026.pdf"
---

## Metadata

- **Môn học**: Introduction to Data Science and Applications, University
  of Economics Ho Chi Minh City — Vietnam-Netherlands Programme.
  <br><span class="en">**Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City — Vietnam-
  Netherlands Programme.</span>
- **Khóa**: K32 (2026, khóa hiện tại).
  <br><span class="en">**Cohort**: K32 (2026, current cohort).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: 112 (khớp đúng số trang vật lý của PDF; chân trang đánh
  số tới `112 / 112`). Ngày biên soạn ghi trong siêu dữ liệu PDF:
  2026-08-27 — tức bản mới nhất tại thời điểm ingest.
  <br><span class="en">**Slide count**: 112 (matches the PDF's physical
  page count; the footer numbers up to `112 / 112`). PDF metadata
  creation date: 2026-08-27 — the newest version at ingest time.</span>
- **Vị trí trong môn**: đây là **chương thuật toán đầu tiên** của K32 và
  là chương lớn nhất từ trước tới nay — 1 file duy nhất gộp trọn nhánh
  **học có giám sát**: nền tảng học máy, đánh giá mô hình, phân loại +
  KNN, cây quyết định, phương pháp tổ hợp (rừng ngẫu nhiên + tăng
  cường), hồi quy, và điều chuẩn Ridge/Lasso/Elastic Net. Ở khóa 2025,
  cùng khối nội dung này được chia làm **3 chương riêng biệt** (Machine
  Learning/KNN, Decision Tree & Random Forest, Ridge and Lasso); khóa
  2026 gộp lại thành 1 và bổ sung nhiều phần hoàn toàn mới (đánh giá
  phân loại, kiểm định chéo, đánh đổi độ chệch–phương sai, tăng cường,
  Elastic Net). **Theo quy tắc tách cụm khóa học** (CLAUDE.md, mục "Tách
  cụm K31/K32"), trang này không link tới bất kỳ trang nào của cụm K31 —
  so sánh chỉ ghi bằng chữ thường.
  <br><span class="en">**Position in the course**: this is K32's **first
  algorithm chapter** and the largest deck so far — a single file
  covering the whole **supervised learning** branch: ML foundations,
  model evaluation, classification + KNN, decision trees, ensemble
  methods (random forest + boosting), regression, and Ridge/Lasso/
  Elastic Net regularization. In the 2025 cohort the same material was
  split across **3 separate chapters**; the 2026 cohort merges them into
  one and adds entirely new sections (classification metrics,
  cross-validation, the bias–variance trade-off, boosting, Elastic Net).
  **Per the cohort separation rule** (CLAUDE.md), this page does not link
  to any K31 page — comparisons are stated in plain text only.</span>
- **Tên file không theo mẫu đánh số chương**: file tên
  `VNP_DataScience_SupervisedLearning_2026.pdf` (không có chuỗi
  `Chapter03` như 2 file trước), nhưng người dùng đặt nó trong thư mục
  `raw/Lecture Notes/K32/Chapter03/` — nên trong wiki nó được coi là
  Chapter 3 của K32.
  <br><span class="en">**Filename does not follow the chapter-number
  pattern**: the file is `VNP_DataScience_SupervisedLearning_2026.pdf`
  (no `Chapter03` string unlike the previous two), but the user placed it
  in `raw/Lecture Notes/K32/Chapter03/` — so this wiki treats it as
  K32's Chapter 3.</span>
- **File đi kèm trong cùng thư mục**: 2 file mã Python
  (`Example3.1_Iris_New.py`, `Example3.2_DecisionTree_New.py`) và 5 file
  dữ liệu (`iris.csv`, `Nationality.csv`, `Regression.csv`,
  `Regression.xlsx`, `TeleCustomers.csv`). Xem mục riêng bên dưới.
  <br><span class="en">**Companion files in the same folder**: 2 Python
  scripts (`Example3.1_Iris_New.py`, `Example3.2_DecisionTree_New.py`)
  and 5 data files (`iris.csv`, `Nationality.csv`, `Regression.csv`,
  `Regression.xlsx`, `TeleCustomers.csv`). See the dedicated section
  below.</span>

## Tóm tắt - <span class="en">Summary</span>

- **Ý tưởng chủ đạo** (slide 2): cho trước dữ liệu có nhãn
  {(xᵢ, yᵢ)}ⁿᵢ₌₁, ta muốn học 1 hàm f̂ dự đoán y cho đầu vào x mới. Nếu
  y là **một loại/phạm trù** ⇒ bài toán phân loại; nếu y là **một con
  số** ⇒ bài toán hồi quy. Toàn bộ 112 slide chỉ là các cách khác nhau
  để học f̂ đó.
  <br><span class="en">**The key idea** (slide 2): given labelled data
  {(xᵢ, yᵢ)}ⁿᵢ₌₁, learn a function f̂ that predicts y for new inputs x. If
  y is a **category** ⇒ classification; if y is a **number** ⇒
  regression. All 112 slides are just different ways of learning that
  f̂.</span>
- **Dàn ý 8 phần** (slide 3): (1) Giới thiệu học máy, (2) Khái niệm cốt
  lõi và đánh giá mô hình, (3) Phân loại và K láng giềng gần nhất, (4)
  Cây quyết định, (5) Phương pháp tổ hợp, (6) Hồi quy trong học có giám
  sát, (7) Điều chuẩn: Ridge, Lasso và Elastic Net, (8) Tổng kết.
  <br><span class="en">**8-part outline** (slide 3): (1) Introduction to
  Machine Learning, (2) Core Concepts and Model Evaluation, (3)
  Classification and K-Nearest Neighbours, (4) Decision Trees, (5)
  Ensemble Methods, (6) Regression in Supervised Learning, (7)
  Regularization: Ridge, Lasso and Elastic Net, (8) Summary.</span>
- **Phần 2 là nội dung mới quan trọng nhất**: bản 2025 chỉ nói qua quá
  khớp/chưa khớp và 3 chỉ số hồi quy MAE/MSE/RMSE. Bản 2026 dựng hẳn 1
  chương con về phương pháp luận đánh giá: chia dữ liệu + cảnh báo **rò
  rỉ dữ liệu**, đủ bộ chỉ số hồi quy (thêm MAPE, R²) kèm hướng dẫn *khi
  nào dùng chỉ số nào*, bộ chỉ số **phân loại** (độ chính xác, độ chuẩn
  xác, độ bao phủ, F1, ROC-AUC — hoàn toàn mới), **kiểm định chéo** (bỏ
  một quan sát, K-phần, K-phần phân tầng), và công thức phân rã **đánh
  đổi độ chệch–phương sai**.
  <br><span class="en">**Section 2 is the most important new content**:
  the 2025 version only touched on over/underfitting and 3 regression
  metrics. The 2026 version builds a full sub-chapter on evaluation
  methodology: data splitting + a **data leakage** warning, the complete
  regression metric set (adding MAPE, R²) with guidance on *which metric
  when*, the **classification** metric set (accuracy, precision, recall,
  F1, ROC-AUC — entirely new), **cross-validation** (LOOCV, K-fold,
  stratified K-fold), and the **bias–variance** decomposition
  formula.</span>
- **Phần 3-5 (phân loại)**: giữ nguyên trục KNN → cây quyết định → rừng
  ngẫu nhiên của bản 2025, nhưng bổ sung: 4 loại khoảng cách (thêm
  Minkowski, Hamming), 1 ví dụ số cụ thể chứng minh *vì sao bắt buộc
  chuẩn hóa* trước khi chạy KNN, phân loại **đa nhãn** (multi-label), so
  sánh cây phân loại vs cây hồi quy, tỉa trước/tỉa sau và tỉa theo chi
  phí–độ phức tạp (`ccp_alpha`), 2 nguồn ngẫu nhiên của rừng ngẫu nhiên
  (đóng bao + lấy mẫu con đặc trưng), sai số **ngoài túi (OOB)**, và
  nguyên 1 mục mới về **tăng cường** (AdaBoost/Gradient Boosting/XGBoost)
  kèm bảng so sánh đóng bao vs tăng cường.
  <br><span class="en">**Sections 3-5 (classification)**: keep the 2025
  spine of KNN → decision tree → random forest, but add: 4 distance
  measures (adding Minkowski, Hamming), a concrete numeric example of
  *why scaling is compulsory* for KNN, **multi-label** classification,
  classification vs regression trees, pre-/post-pruning and
  cost-complexity pruning (`ccp_alpha`), the random forest's 2 sources of
  randomness (bagging + feature subsampling), the **out-of-bag (OOB)**
  error, and an entirely new section on **boosting** (AdaBoost/Gradient
  Boosting/XGBoost) with a bagging-vs-boosting comparison table.</span>
- **Phần 6-7 (hồi quy)**: hồi quy được đặt lại vào đúng khung học có
  giám sát ("chỉ khác kiểu của y — mọi thứ ở Phần 2 áp dụng nguyên vẹn"),
  phân biệt rõ mục đích **thống kê cổ điển** (giải thích, kiểm định) vs
  **học máy** (dự đoán ngoài mẫu). Phần điều chuẩn thêm **Elastic Net**
  (không có ở bản 2025), lời giải thích hình học *vì sao Lasso đưa hệ số
  về đúng 0* (ràng buộc hình thoi có góc trên trục), công thức nghiệm
  hiển của Ridge β̂ = (X'X + λI)⁻¹X'y, và bảng so sánh Ridge vs Lasso đầy
  đủ 6 tiêu chí.
  <br><span class="en">**Sections 6-7 (regression)**: regression is
  placed back inside the supervised-learning frame ("only the type of y
  changes — everything from Section 2 applies unchanged"), sharply
  distinguishing **classical statistics** (explanation, testing) from
  **machine learning** (out-of-sample prediction). Regularization adds
  **Elastic Net** (absent in 2025), the geometric explanation of *why
  Lasso sets coefficients exactly to zero* (the diamond constraint has
  corners on the axes), Ridge's closed form β̂ = (X'X + λI)⁻¹X'y, and a
  full 6-criterion Ridge-vs-Lasso table.</span>
- **Phần 8 (tổng kết)**: 1 bảng so sánh 7 thuật toán theo 4 tiêu chí
  (bài toán, siêu tham số chính, có cần chuẩn hóa không, điểm mạnh
  chính) + 5 câu hỏi ôn tập. Bảng này là công cụ ôn thi tốt nhất của cả
  chương.
  <br><span class="en">**Section 8 (summary)**: one table comparing 7
  algorithms on 4 criteria (task, key hyperparameter, scaling needed,
  main strength) + 5 review questions. That table is the chapter's best
  single revision tool.</span>

## Nội dung chính - <span class="en">Key content</span>

### Mở đầu: bài toán chung của cả chương (slide 2-3) - <span class="en">Opening: the chapter's shared problem (slides 2-3)</span>

Slide 2 định nghĩa 1 lần cho toàn bộ chương: cho dữ liệu có nhãn, học
hàm f̂ dự đoán y từ x. Phân đôi theo kiểu của y (loại ⇒ phân loại; số ⇒
hồi quy). Danh sách thuật toán học có giám sát phổ biến được nêu ngay:
K láng giềng gần nhất, cây quyết định, rừng ngẫu nhiên, hồi quy logistic,
hồi quy tuyến tính, hồi quy điều chuẩn (Ridge/Lasso), máy véc-tơ hỗ trợ
(SVM). → [[supervised-learning-framework]]
<br><span class="en">Slide 2 defines the problem once for the whole
chapter: given labelled data, learn f̂ predicting y from x. The split is
by the type of y (category ⇒ classification; number ⇒ regression). The
list of popular supervised algorithms is given immediately: k-Nearest
Neighbors, Decision Tree, Random Forest, Logistic Regression, Linear
Regression, Regularized Regression (Ridge/LASSO), Support Vector Machine.
→ [[supervised-learning-framework]]</span>

### 1. Giới thiệu học máy (slide 5-14) - <span class="en">1. Introduction to Machine Learning (slides 5-14)</span>

- **Học máy là gì** (slide 5): một nhánh con của trí tuệ nhân tạo, bàn
  về khả năng *học* của máy; mục tiêu là làm máy thông minh và hiệu quả
  hơn.
  <br><span class="en">**What is machine learning** (slide 5): a subset
  of artificial intelligence dealing with a machine's ability to learn;
  the aim is to make machines smarter and more efficient.</span>
- **Lược sử trí tuệ nhân tạo** (slide 6): thập niên 1950 — khái niệm sơ
  khai, Alan Turing tiên phong với phép thử Turing; thuật ngữ "trí tuệ
  nhân tạo" ra đời tại Hội nghị Dartmouth **1956**; thập niên 1980 — hệ
  chuyên gia hồi sinh sau "mùa đông AI" (1960-1970); thập niên 1990 —
  các kỹ thuật học máy học *từ dữ liệu* thay vì từ luật viết tay; giai
  đoạn 2000-2010 — học sâu phát triển nhanh, huấn luyện được mạng nơ-ron
  phức tạp trên dữ liệu lớn; **từ 2017** — kiến trúc Transformer dẫn tới
  các mô hình ngôn ngữ lớn (ChatGPT, Claude, Gemini), mô hình đa phương
  thức và AI sinh tạo; hiện nay — AI "hiểu" được văn bản, hình ảnh, giọng
  nói, video, làm được tác vụ nhiều bước, ngày càng đóng vai trò *đồng
  hành* (copilot/tác nhân) cùng con người.
  <br><span class="en">**A short history of AI** (slide 6): 1950s —
  early concepts, Alan Turing and the Turing Test; the term "artificial
  intelligence" appears at the **1956** Dartmouth Conference; 1980s —
  expert systems after the AI winter; 1990s — ML techniques learning
  *from data* rather than hand-coded rules; 2000s-2010s — deep learning
  on big data; **2017 onwards** — the Transformer architecture leads to
  large language models (ChatGPT, Claude, Gemini), multimodal and
  generative AI; today — AI handles text, images, voice, video and
  multi-step tasks, increasingly acting as a copilot or agent alongside
  humans.</span>
- **Hai giai đoạn của mọi dự án học máy** (slide 8): **huấn luyện** (học
  mô hình từ tập dữ liệu huấn luyện) và **áp dụng** (kiểm tra mô hình rồi
  dùng nó để ra quyết định). Sơ đồ 5 bước trên slide: dữ liệu có nhãn →
  đặc trưng x, nhãn y → học f̂ → kiểm định & tinh chỉnh → dự đoán x* mới.
  <br><span class="en">**Two phases of every ML project** (slide 8):
  **training** (learn a model from training data) and **application**
  (test the model, then use it to make decisions). The slide's 5-step
  diagram: labelled data → features x, label y → learn f̂ → validate &
  tune → predict new x*.</span>
- **Hai ví dụ đời thường** (slide 9): bộ lọc thư rác (dữ liệu huấn luyện
  là các thư đã gắn nhãn *thư sạch*/*thư rác*; mô hình phân loại từng thư
  mới) và nhận diện khuôn mặt trên mạng xã hội (người dùng huấn luyện hệ
  thống bằng cách gắn thẻ bạn bè trong vài ảnh; ảnh mới được tự động
  nhận diện và gợi ý thẻ). Ghi chú của slide: **cả hai đều là học có
  giám sát — máy chỉ học được vì có con người cung cấp đáp án đúng
  (nhãn)**.
  <br><span class="en">**Two everyday examples** (slide 9): a spam filter
  (training data are emails labelled ham/spam; the model classifies each
  new message) and face recognition on social networks (users train the
  system by tagging friends in photos; new uploads get automatic
  detection and tag suggestions). The slide's note: **both are
  supervised — the machine only learns because a human supplied the
  correct answer (the label)**.</span>
- **4 loại học máy chính** (slide 12): **học có giám sát** (dữ liệu huấn
  luyện có nhãn đúng — trọng tâm cả bài giảng; chia thành phân loại
  [đầu ra rời rạc] và hồi quy [đầu ra là số]); **học không giám sát** (dữ
  liệu không nhãn, đi tìm cấu trúc ẩn — phân cụm, giảm chiều, luật kết
  hợp); **học tăng cường** (tác nhân học qua tương tác với môi trường,
  nhận thưởng/phạt); **học tự giám sát** (nhãn sinh ra từ chính dữ liệu,
  ví dụ dự đoán từ kế tiếp — đây là cách các mô hình ngôn ngữ lớn hiện
  đại được tiền huấn luyện). Loại thứ 4 là **hoàn toàn mới** so với bản
  2025 (bản đó chỉ nêu 3 loại).
  <br><span class="en">**4 main types of ML** (slide 12): **supervised**
  (labelled training data — the lecture's focus; split into
  classification [discrete outputs] and regression [numeric outputs]);
  **unsupervised** (unlabelled data, discover patterns — clustering,
  dimension reduction, association); **reinforcement** (an agent learns
  by interacting with an environment for rewards/penalties);
  **self-supervised** (labels generated from the data itself, e.g.
  next-word prediction — how modern LLMs are pre-trained). The 4th type
  is **entirely new** versus the 2025 version, which listed only 3.</span>
- **Bảng thuật ngữ dùng xuyên suốt** (slide 14) — bảng tra cứu quan
  trọng nhất để đọc phần còn lại:

  | Thuật ngữ | Ý nghĩa |
  |---|---|
  | Quan sát / thể hiện (observation / instance) | 1 hàng dữ liệu, (xᵢ, yᵢ) |
  | Đặc trưng / đầu vào / biến dự báo / biến / chiều / thuộc tính | 1 cột dữ liệu, xⱼ |
  | Nhãn / mục tiêu / đầu ra (label / target / output) | Đại lượng cần dự đoán, y |
  | Mô hình (model) | Hàm đã học được, f̂ |
  | Tham số (parameter) | Học được từ dữ liệu (vd βⱼ) |
  | Siêu tham số (hyperparameter) | Do người dùng chọn trước khi huấn luyện (vd K, λ, độ sâu cây) |

  Điểm cần nhớ của slide: **tham số do thuật toán ước lượng; siêu tham số
  do bạn chọn, thường bằng kiểm định chéo**.
  <br><span class="en">**Vocabulary table** (slide 14) — the most
  important reference for reading the rest of the deck: observation =
  one row (xᵢ, yᵢ); feature/input/predictor/variable/dimension/attribute
  = one column xⱼ; label/target/output = the quantity to predict, y;
  model = the learned f̂; parameter = learned from data (e.g. βⱼ);
  hyperparameter = chosen before training (e.g. K, λ, tree depth). The
  slide's takeaway: **parameters are estimated by the algorithm;
  hyperparameters are selected by you, usually with
  cross-validation**.</span>

### 2. Khái niệm cốt lõi và đánh giá mô hình (slide 16-25) - <span class="en">2. Core Concepts and Model Evaluation (slides 16-25)</span>

- **Chia dữ liệu** (slide 16): nguyên tắc mở đầu — *đừng bao giờ chấm
  điểm mô hình trên chính dữ liệu đã dùng để huấn luyện nó*. Tập huấn
  luyện dùng để ước lượng tham số; **tập kiểm tra chỉ được chạm đúng 1
  lần**, ở bước cuối cùng, để báo cáo hiệu năng trung thực. Cảnh báo
  **rò rỉ dữ liệu — lỗi phổ biến nhất của người mới**: mọi phép biến đổi
  học được từ dữ liệu (chuẩn hóa thang đo, điền khuyết, chọn biến) phải
  khớp *chỉ trên phần huấn luyện* rồi mới áp lên phần kiểm định và kiểm
  tra; nếu không, hiệu năng trên tập kiểm tra sẽ lạc quan giả tạo.
  → [[train-test-split-and-cross-validation]]
  <br><span class="en">**Splitting the data** (slide 16): never judge a
  model on the data it was trained on. The training set estimates
  parameters; the **test set is touched once**, at the very end, for an
  honest performance figure. The **data leakage** warning — *the most
  common beginner mistake*: any transformation learned from data
  (scaling, imputation, feature selection) must be fitted on the training
  part only, then applied to validation and test; otherwise test
  performance is optimistic. →
  [[train-test-split-and-cross-validation]]</span>
- **Chỉ số đánh giá bài toán hồi quy** (slide 17-18): với sai số
  uᵢ = yᵢ − ŷᵢ — MAE = (1/n)Σ|yᵢ − ŷᵢ|; MSE = (1/n)Σ(yᵢ − ŷᵢ)²;
  RMSE = √MSE (đưa sai số về đúng đơn vị của y); MAPE =
  (100/n)Σ|yᵢ − ŷᵢ|/|yᵢ| (không phụ thuộc thang đo, dễ truyền đạt); hệ số
  xác định R² = 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)². Các tiêu chí khác được nhắc
  tên: RSE, RAE, RMSE chuẩn hóa, RMSE tương đối. **Cách chọn**: MAE coi
  mọi sai số như nhau; RMSE phạt nặng sai số lớn nên dùng khi sai lầm lớn
  gây tốn kém; MAPE không xác định khi có yᵢ = 0 và bất đối xứng.
  → [[model-evaluation-metrics-k32]]
  <br><span class="en">**Regression metrics** (slides 17-18): with error
  uᵢ = yᵢ − ŷᵢ — MAE, MSE, RMSE = √MSE (back in y's units), MAPE
  (scale-free), and R² = 1 − Σ(yᵢ − ŷᵢ)²/Σ(yᵢ − ȳ)². Other criteria
  named: RSE, RAE, Normalised RMSE, Relative RMSE. **How to choose**: MAE
  treats all errors equally; RMSE punishes large errors, so use it when
  big mistakes are costly; MAPE is undefined when some yᵢ = 0 and is
  asymmetric. → [[model-evaluation-metrics-k32]]</span>
- **Chỉ số đánh giá bài toán phân loại** (slide 19, **hoàn toàn mới**):
  **độ chính xác (accuracy) gây hiểu lầm trên dữ liệu mất cân bằng** —
  nếu 99% giao dịch là hợp lệ, mô hình luôn dự đoán "hợp lệ" đạt độ
  chính xác 99% mà hoàn toàn vô dụng. **Độ chuẩn xác (precision)**: trong
  số ta gắn cờ, bao nhiêu là đúng — dùng khi báo động giả tốn kém (vd
  chặn nhầm thư hợp lệ). **Độ bao phủ (recall, độ nhạy)**: trong số ca
  thật, ta bắt được bao nhiêu — dùng khi bỏ sót tốn kém (vd bỏ lọt gian
  lận hay bệnh). **F1**: trung bình điều hòa, khi cần cân bằng cả hai.
  **ROC-AUC**: chất lượng xếp hạng trên mọi ngưỡng, hữu ích khi ngưỡng
  quyết định chưa cố định trước.
  <br><span class="en">**Classification metrics** (slide 19, **entirely
  new**): **accuracy is misleading on imbalanced data** — with 99%
  legitimate transactions, an always-"legitimate" model is 99% accurate
  and useless. **Precision**: of those flagged, how many were right — use
  when false alarms are expensive. **Recall (sensitivity)**: of the true
  cases, how many did we catch — use when misses are expensive.
  **F1**: the harmonic mean, to balance both. **ROC-AUC**: ranking
  quality across all thresholds, when the decision threshold is not fixed
  in advance.</span>
- **Kiểm định chéo** (slide 21): kỹ thuật kiểm tra hiệu quả mô hình và
  **chọn siêu tham số**. 3 dạng: **bỏ một quan sát (LOOCV)** — tập huấn
  luyện n − 1 quan sát, tập kiểm tra đúng 1 quan sát, lặp n lần;
  **K-phần (K-fold)** — chia thành K phần, huấn luyện trên K − 1 phần,
  kiểm tra trên phần còn lại, xoay vòng rồi lấy trung bình K điểm số
  (K = 5 hoặc K = 10 là chuẩn); **K-phần phân tầng (stratified K-fold)**
  — giữ nguyên tỷ lệ các lớp trong từng phần, **luôn ưu tiên dùng cho
  bài toán phân loại**.
  <br><span class="en">**Cross-validation** (slide 21): a technique to
  test model effectiveness and **choose hyperparameters**. LOOCV
  (training on n − 1, testing on exactly 1, repeated n times); K-fold
  (K parts, train on K − 1, rotate, average the K scores; K = 5 or 10 is
  standard); stratified K-fold (preserves class proportions per fold —
  **always prefer this for classification**).</span>
- **Chưa khớp** (slide 23): **vấn đề** — mô hình quá đơn giản để nắm được
  quy luật nền trong dữ liệu huấn luyện. **Hệ quả** — chạy kém trên cả dữ
  liệu huấn luyện lẫn dữ liệu kiểm tra/dự báo, không dự đoán chính xác
  được. **Cách xử lý** — dùng mô hình phức tạp hơn, thêm hoặc cải thiện
  đặc trưng, hoặc giảm mức điều chuẩn. **Dấu hiệu nhận biết** — sai số
  huấn luyện cao và sai số kiểm tra cũng cao, hai con số gần nhau.
  → [[overfitting-underfitting-k32]]
  <br><span class="en">**Underfitting** (slide 23): the model is too
  simple to capture the underlying patterns; it performs poorly on both
  training and test data. Fix: a more complex model, better features, or
  less regularization. Symptom: training error high, test error high, and
  the two are close. → [[overfitting-underfitting-k32]]</span>
- **Quá khớp** (slide 24): **vấn đề** — mô hình quá phức tạp, học cả
  nhiễu chứ không chỉ quy luật. **Hệ quả** — cực tốt trên dữ liệu huấn
  luyện nhưng kém trên dữ liệu kiểm tra/dự báo, không khái quát hóa được
  cho quan sát mới. **Cách xử lý** — mô hình đơn giản hơn, giảm độ phức
  tạp, thu thập thêm dữ liệu, dùng điều chuẩn (Phần 7), hoặc tỉa cây.
  **Dấu hiệu nhận biết** — sai số huấn luyện rất thấp nhưng sai số kiểm
  tra cao hơn nhiều, khoảng cách giữa 2 đường cong lớn.
  <br><span class="en">**Overfitting** (slide 24): the model is too
  complex and learns the noise as well as the pattern; excellent on
  training data, poor on test/forecast data, cannot generalise. Fix: a
  simpler model, less complexity, more data, regularization (Section 7),
  or prune the tree. Symptom: very low training error but much higher
  test error — a large gap between the two curves.</span>
- **Đánh đổi độ chệch–phương sai** (slide 25, **hoàn toàn mới**): với hàm
  mất mát bình phương sai số, sai số dự đoán kỳ vọng phân rã thành
  E[(y − f̂(x))²] = Độ chệch²[f̂(x)] + Phương sai[f̂(x)] + σ², trong đó số
  hạng 1 là "quá đơn giản", số hạng 2 là "quá linh hoạt", σ² là **sai số
  không thể giảm được**. Chưa khớp nằm bên trái trục độ phức tạp, quá
  khớp nằm bên phải; mô hình tốt nhất nằm ở điểm cực tiểu của đường tổng
  sai số.
  <br><span class="en">**The bias–variance trade-off** (slide 25,
  **entirely new**): E[(y − f̂(x))²] = Bias²[f̂(x)] + Var[f̂(x)] + σ² —
  too simple, too flexible, and the **irreducible** error. Underfitting
  lives on the left of the complexity axis, overfitting on the right; the
  best model sits at the minimum of the total-error curve.</span>

### 3. Phân loại và K láng giềng gần nhất (slide 27-51) - <span class="en">3. Classification and K-Nearest Neighbours (slides 27-51)</span>

- **Phân loại là gì** (slide 27): kỹ thuật xếp dữ liệu vào một số lớp cho
  trước. Thuật ngữ: **bộ phân loại** (thuật toán ánh xạ dữ liệu đầu vào
  sang 1 phạm trù cụ thể); **phân loại nhị phân** (2 kết quả có thể);
  **phân loại đa lớp** (nhiều hơn 2 lớp, mỗi quan sát nhận **một và chỉ
  một** nhãn); **phân loại đa nhãn** (mỗi quan sát có thể mang nhiều nhãn
  cùng lúc, ví dụ gắn 1 bài báo vừa là "tài chính" vừa là "công nghệ") —
  loại thứ 3 là **mới** so với bản 2025. → [[classification-k32]]
  <br><span class="en">**What is classification** (slide 27): categorise
  data into a given number of classes. Terms: **classifier**; **binary**
  (two outcomes); **multi-class** (more than two, one and only one label
  per observation); **multi-label** (several labels at once, e.g. an
  article tagged both "finance" and "technology") — the last is **new**
  versus 2025. → [[classification-k32]]</span>
- **4 bước xây mô hình phân loại** (slide 29): khởi tạo bộ phân loại →
  huấn luyện bằng dữ liệu có nhãn → dự đoán mục tiêu (`predict(X)` trả về
  nhãn dự đoán y cho quan sát X chưa có nhãn) → đánh giá mô hình trên dữ
  liệu giữ lại.
  <br><span class="en">**4 steps to build a classification model** (slide
  29): initialize the classifier → train on labelled data → predict the
  target (`predict(X)`) → evaluate on held-out data.</span>
- **Thuật toán phổ biến** (slide 30): Naive Bayes, cây quyết định (Phần
  4), hồi quy logistic, K láng giềng gần nhất, máy véc-tơ hỗ trợ (SVM),
  rừng ngẫu nhiên (Phần 5), tăng cường gradient/XGBoost, mạng nơ-ron.
  Ghi chú của slide: bài giảng này học KNN (phương pháp dựa trên khoảng
  cách), cây quyết định (phương pháp dựa trên luật) và tổ hợp cây —
  cùng nhau bao phủ các họ ý tưởng chính dùng trong thực tế.
  <br><span class="en">**Popular algorithms** (slide 30): Naive Bayes,
  decision tree (Section 4), logistic regression, KNN, SVM, random forest
  (Section 5), gradient boosting/XGBoost, neural networks. The lecture
  covers KNN (distance-based), decision trees (rule-based) and tree
  ensembles — together the main families of ideas used in
  practice.</span>
- **KNN là gì** (slide 31): một trong những thuật toán học máy phổ biến
  nhất; **giả định cốt lõi là những thứ giống nhau thì nằm gần nhau**;
  dùng được cho cả phân loại (biểu quyết) lẫn hồi quy (lấy trung bình).
  → [[k-nearest-neighbors-k32]]
  <br><span class="en">**What is KNN** (slide 31): one of the most
  popular ML algorithms; **assumes similar things are near each other**;
  usable for both classification (vote) and regression (average).
  → [[k-nearest-neighbors-k32]]</span>
- **Thuật toán KNN** (slide 32): (1) nạp dữ liệu và **chuẩn hóa các đặc
  trưng**; (2) chọn giá trị K; (3) với mỗi quan sát truy vấn mới x*: tính
  khoảng cách từ x* tới **mọi** quan sát trong tập huấn luyện → sắp xếp
  các khoảng cách và giữ K quan sát gần nhất → đọc nhãn của K láng giềng
  đó → trả về mốt (nhãn xuất hiện nhiều nhất, cho phân loại) hoặc trung
  bình (cho hồi quy). **Ghi chú sửa lỗi của slide**: việc chọn K láng
  giềng gần nhất diễn ra **sau khi** đã tính xong toàn bộ khoảng cách —
  không phải bên trong vòng lặp duyệt từng quan sát.
  <br><span class="en">**The KNN algorithm** (slide 32): load and
  standardise → choose K → for a new query x*: compute the distance to
  **every** training observation, sort and keep the K nearest, read their
  labels, return the mode (classification) or mean (regression). **The
  slide's correction note**: selecting the K nearest happens **after**
  all distances are computed — not inside the loop over
  observations.</span>
- **4 cách tính khoảng cách** (slide 34): với x = (x₁,…,x_p) và
  z = (z₁,…,z_p) — **Euclid** (mặc định): d = √Σ(xⱼ − zⱼ)²; **Manhattan**
  (khoảng cách ô bàn cờ, bền hơn trước giá trị ngoại lai): d = Σ|xⱼ − zⱼ|;
  **Minkowski** (dạng tổng quát, q = 2 cho Euclid, q = 1 cho Manhattan):
  d = (Σ|xⱼ − zⱼ|^q)^(1/q); **Hamming** (cho đặc trưng phân loại): số vị
  trí khác nhau. Hai loại sau là **mới** so với bản 2025.
  <br><span class="en">**4 distance measures** (slide 34): **Euclidean**
  (default), **Manhattan** (city block, more robust to outliers),
  **Minkowski** (the general form; q = 2 Euclidean, q = 1 Manhattan),
  **Hamming** (for categorical features — the number of positions that
  differ). The last two are **new** versus 2025.</span>
- **Vì sao bắt buộc chuẩn hóa thang đo cho KNN** (slide 35, ví dụ số
  **mới**): dự đoán vỡ nợ tín dụng từ 2 đặc trưng — khách hàng A (tuổi
  30, thu nhập 20.000 triệu đồng) và khách hàng B (tuổi 35, thu nhập
  20.050 triệu đồng). Khoảng cách Euclid = √(5² + 50²) ≈ 50,2 — **gần
  như hoàn toàn do thu nhập chi phối**, chỉ vì thu nhập được đo bằng con
  số lớn hơn. **Quy tắc**: luôn chuẩn hóa (z = (x − x̄)/s) hoặc co giãn
  min–max trước khi chạy KNN, và **khớp bộ chuẩn hóa chỉ trên tập huấn
  luyện**.
  <br><span class="en">**Why scaling is compulsory for KNN** (slide 35,
  a **new** numeric example): predicting credit default from age (30 vs
  35) and income (20,000 vs 20,050 VND million) gives a Euclidean
  distance of √(5² + 50²) ≈ 50.2 — **almost entirely driven by income**,
  simply because income is measured in bigger numbers. **Rule**: always
  standardise (z = (x − x̄)/s) or min–max scale before KNN, and **fit the
  scaler on the training set only**.</span>
- **Chọn K** (slide 37): chạy KNN nhiều lần với các giá trị K khác nhau,
  chọn K **tối thiểu hóa sai số kiểm định chéo**, không phải sai số huấn
  luyện (sai số huấn luyện luôn nhỏ nhất tại K = 1). Ghi chú: không có số
  láng giềng tối ưu chung cho mọi bộ dữ liệu; **K nhỏ** ⇒ nhiễu ảnh hưởng
  mạnh, độ chệch thấp nhưng phương sai cao (quá khớp); **K lớn** ⇒ tốn
  tính toán hơn, phương sai thấp nhưng độ chệch cao (chưa khớp); với bài
  toán nhị phân nên **chọn K lẻ** để tránh hòa phiếu.
  <br><span class="en">**Choosing K** (slide 37): run KNN over several K
  and pick the one minimising the **cross-validated** error, not the
  training error (which is always minimised at K = 1). No optimal K suits
  all datasets; **small K** ⇒ noise dominates, low bias but high variance
  (overfitting); **large K** ⇒ more expensive, low variance but high bias
  (underfitting); for binary problems prefer an **odd K** to avoid tied
  votes.</span>
- **Ưu và nhược điểm của KNN** (slide 38): **ưu** — đơn giản, dễ cài đặt;
  không cần xây mô hình, không phải tinh chỉnh nhiều tham số, không cần
  giả định về phân phối; ranh giới quyết định có thể rất phi tuyến.
  **nhược** — chậm đi rõ rệt khi số đặc trưng tăng (**lời nguyền số
  chiều**); dự đoán tốn tính toán khi số quan sát tăng vì phải tính lại
  toàn bộ khoảng cách mỗi lần; là **học lười** (không học gì lúc huấn
  luyện, phải lưu toàn bộ tập huấn luyện); nhạy với thang đo đặc trưng và
  với các đặc trưng vô ích.
  <br><span class="en">**KNN pros and cons** (slide 38): **pros** —
  simple, no model to build, few parameters, no distributional
  assumptions, highly non-linear decision boundary. **Cons** —
  significantly slower as features grow (the **curse of
  dimensionality**); prediction is computationally intensive as
  observations grow; it is **lazy learning** (nothing learned at training
  time, the whole training set must be stored); sensitive to feature
  scaling and irrelevant features.</span>
- **Ví dụ 3.1 — bộ dữ liệu IRIS** (slide 39-48): dùng file `iris.csv`. Bộ
  mẫu có 3 loài hoa diên vĩ (*Iris setosa*, *Iris virginica*, *Iris
  versicolor*), mỗi mẫu đo 4 đặc trưng — chiều dài và chiều rộng của đài
  hoa và cánh hoa, đơn vị xen-ti-mét; Fisher từng dựng mô hình phân biệt
  tuyến tính trên chính bộ dữ liệu này. Quy trình trên slide: nạp thư
  viện và dữ liệu → chia tập bằng `train_test_split(test_size=0.3,
  random_state=42, stratify=y)` → vẽ biểu đồ phân tán tô màu theo loài →
  chuẩn hóa bằng `StandardScaler` (khớp trên tập huấn luyện, chỉ biến đổi
  trên tập kiểm tra) → `KNeighborsClassifier(n_neighbors=5)` → dự đoán →
  in ma trận nhầm lẫn và báo cáo phân loại → **tìm K tốt nhất bằng
  `GridSearchCV(cv=5, scoring="accuracy")` quét `range(1, 26, 2)`** →
  đánh giá **đúng 1 lần** trên tập kiểm tra chưa đụng tới → dự đoán 1 bông
  hoa mới bằng cách tạo `DataFrame` 1 hàng, chuẩn hóa bằng chính bộ chuẩn
  hóa đã khớp, rồi `knn.predict(...)`. **Slide 41 và 42 ghi rõ: các lỗi
  trong đoạn mã là cố ý, để người học tự phát hiện** — xem mục "Khoảng
  trống / lưu ý".
  <br><span class="en">**Example 3.1 — the IRIS dataset** (slides 39-48):
  using `iris.csv` — 3 species, 4 measured features (sepal/petal length
  and width in cm), the dataset Fisher used for his linear discriminant.
  The slide workflow: load → `train_test_split(test_size=0.3,
  random_state=42, stratify=y)` → scatter plot coloured by species →
  `StandardScaler` (fit on train, transform on test) →
  `KNeighborsClassifier(n_neighbors=5)` → predict → confusion matrix and
  classification report → **find the best K with `GridSearchCV(cv=5)`
  over `range(1, 26, 2)`** → evaluate **once** on the untouched test set
  → predict a new flower via a 1-row `DataFrame`, scaled with the already
  fitted scaler. **Slides 41-42 state explicitly that the errors in the
  code are intentional for learning purposes** — see "Gaps / notes".</span>
- **Ứng dụng và thảo luận nhóm** (slide 49-51): 2 ứng dụng minh họa —
  bộ phân loại thư rác bằng KNN (nguồn towardsdatascience.com) và phát
  hiện gian lận trong dữ liệu giao dịch bằng KNN (nguồn kaggle.com).
  **Bài tập nhóm 1** (slide 51): mỗi nhóm nhận 1 lĩnh vực thực tế (y tế,
  tài chính, tiếp thị, mạng xã hội, thực thi pháp luật…), liệt kê càng
  nhiều ứng dụng của phân loại trong lĩnh vực đó càng tốt, liệt kê càng
  nhiều thuật toán phân loại càng tốt, và **với mỗi ứng dụng phải nêu chỉ
  số nào quan trọng nhất (độ chuẩn xác, độ bao phủ hay độ chính xác) và
  giải thích vì sao**. Nộp kết quả thảo luận cho giảng viên chấm.
  <br><span class="en">**Applications and group work** (slides 49-51): a
  KNN spam classifier and KNN fraud detection on transaction data.
  **Teamwork 1** (slide 51): each group gets a real-life domain, lists as
  many classification applications and algorithms as possible, and for
  each application **states which metric matters most (precision, recall
  or accuracy) and justifies why**. Submit to the instructor.</span>

### 4. Cây quyết định (slide 53-75) - <span class="en">4. Decision Trees (slides 53-75)</span>

- **Cây quyết định là gì** (slide 53): kỹ thuật xếp quan sát vào các lớp
  bằng cách cho chúng "rơi" xuống cây từ gốc tới một nút lá. Thuật ngữ:
  **nút / nút quyết định** (1 thuộc tính/biến/đặc trưng); **nhánh / cây
  con** (cây tạo ra khi tách); **nút gốc** (nơi cây bắt đầu); **nút lá**
  (cho đầu ra cuối cùng); **tách** (chia 1 nút quyết định hoặc nút gốc
  thành các nút con theo điều kiện cho trước); **tỉa** (bỏ bớt các nhánh
  không mong muốn); **độ sâu** (chiều dài đường đi dài nhất từ gốc tới
  lá). → [[decision-tree-k32]]
  <br><span class="en">**What is a decision tree** (slide 53): sorts
  observations down the tree from the root to a leaf. Terms: node /
  decision node, branch / sub-tree, root node, leaf node, splitting,
  pruning, depth (the longest root-to-leaf path).
  → [[decision-tree-k32]]</span>
- **Cây phân loại vs cây hồi quy** (slide 55, **mới**): cây phân loại có
  đầu ra định tính, dùng độ không thuần Gini / độ hỗn loạn / sai số phân
  loại để tìm thuộc tính tách tốt nhất, dự đoán bằng **phạm trù chiếm đa
  số** trong nút lá. Cây hồi quy có đầu ra định lượng, dùng mức giảm
  phương sai hoặc MSE để tìm thuộc tính tách, dự đoán bằng **trung bình
  hoặc trung vị** của biến mục tiêu trong nút lá. Cả hai đều là học có
  giám sát — một họ thuật toán duy nhất (CART) bao trọn cả 2 phía.
  <br><span class="en">**Classification vs regression trees** (slide 55,
  **new**): classification trees have qualitative output, use Gini/
  entropy/classification error to pick splits, and predict the majority
  category in the leaf. Regression trees have quantitative output, use
  variance reduction or MSE, and predict the mean or median in the leaf.
  A single family (CART) covers both.</span>
- **Cách xây cây** (slide 58): (1) bắt đầu từ cây rỗng; (2) tách theo
  thuộc tính tốt nhất kế tiếp; (3) đệ quy. Ghi chú của slide: **toàn bộ
  khó khăn nằm ở chữ "tốt nhất"** — "tốt nhất" nghĩa là phép tách làm các
  nút con **thuần khiết nhất có thể**.
  <br><span class="en">**How to build a tree** (slide 58): start from an
  empty tree → split on the next best attribute → recurse. The whole
  difficulty is in the word "best": the split that makes child nodes as
  **pure** as possible.</span>
- **Các thuật toán xây cây** (slide 59-61): ID3, C4.5 (kế thừa ID3),
  CART, CHAID. **Trong thực tế**: `scikit-learn` cài đặt một phiên bản
  CART tối ưu hóa — `DecisionTreeClassifier` và `DecisionTreeRegressor`
  là **CART chứ không phải ID3**; nhưng ID3 là thuật toán rõ ràng nhất để
  hiểu ý tưởng. **ID3** (slide 60): sớm nhất và đơn giản nhất, dùng độ
  hỗn loạn (entropy) và độ lợi thông tin để quyết định tách nút, hợp với
  dữ liệu phân loại nhưng **không xử lý trực tiếp dữ liệu số**, tạo phép
  tách **nhiều nhánh** (mỗi phạm trù 1 nhánh), dễ quá khớp và tạo cây
  thiên lệch vì độ lợi thông tin **ưu ái thuộc tính có nhiều giá trị phân
  biệt**. **CART** (slide 61): dùng được cho cả phân loại lẫn hồi quy,
  dùng độ không thuần Gini cho cây phân loại và MSE cho cây hồi quy,
  **luôn tạo phép tách nhị phân** (câu hỏi có/không), xử lý được dữ liệu
  lớn và hỗ trợ tỉa theo chi phí–độ phức tạp.
  <br><span class="en">**Tree algorithms** (slides 59-61): ID3, C4.5,
  CART, CHAID. **In practice** `scikit-learn` implements an optimised
  CART — `DecisionTreeClassifier`/`DecisionTreeRegressor` are **CART, not
  ID3** — but ID3 is clearest for understanding the idea. **ID3**: uses
  entropy and information gain, works on categorical data, doesn't handle
  numeric data directly, produces multi-way splits, may overfit and
  produce biased trees because information gain favours attributes with
  many distinct values. **CART**: both tasks, Gini for classification and
  MSE for regression, **always binary splits**, handles large datasets,
  supports cost-complexity pruning.</span>
- **3 thước đo độ thuần khiết nút lá** (slide 62-65): với pᵢ là tỷ lệ
  quan sát thuộc lớp i trong nút, K lớp và Σpᵢ = 1 (nút thuần khiết chỉ
  chứa 1 lớp) — **sai số phân loại**: Eₘ = 1 − max(pᵢ); **độ không thuần
  Gini (Gini impurity)**: Gini = Σpᵢ(1 − pᵢ) = 1 − Σpᵢ²; **độ hỗn loạn
  (entropy)**: −Σpᵢlog₂(pᵢ). Giá trị càng thấp ⇒ nút càng thuần khiết/
  đồng nhất. **Khoảng giá trị của độ hỗn loạn** (mới): từ 0 (thuần khiết
  hoàn toàn) tới log₂K (mọi lớp đều khả năng như nhau) — với K = 3, cực
  đại là log₂3 ≈ 1,585 bit. Cả 3 slide dùng **cùng 1 ví dụ**: nút chứa
  lớp A 16 quan sát, lớp B 13 quan sát, lớp C 1 quan sát — yêu cầu tính
  lần lượt sai số phân loại, Gini và độ hỗn loạn của nút đó.
  <br><span class="en">**3 purity measures** (slides 62-65): with pᵢ the
  proportion of class i in the node — **classification error**
  Eₘ = 1 − max(pᵢ); **Gini impurity** = Σpᵢ(1 − pᵢ) = 1 − Σpᵢ²;
  **entropy** = −Σpᵢlog₂(pᵢ). Lower ⇒ purer. **Entropy's range** (new): 0
  (perfectly pure) to log₂K (all classes equally likely) — with K = 3 the
  maximum is log₂3 ≈ 1.585 bits. All three slides use **the same worked
  example**: a node with class A: 16, B: 13, C: 1.</span>
- **Luật xây cây** (slide 66): nhánh có độ hỗn loạn bằng 0 là nút lá;
  nhánh có độ hỗn loạn lớn hơn 0 cần tách tiếp; nếu không thể đạt độ hỗn
  loạn bằng 0 ở các nút lá thì **quyết định theo đa số đơn giản**.
  <br><span class="en">**Rules to follow** (slide 66): entropy 0 ⇒ a
  leaf; entropy > 0 ⇒ split further; if zero entropy is unreachable,
  decide by simple majority.</span>
- **Độ lợi thông tin** (slide 69): dựa trên mức **giảm** độ hỗn loạn sau
  khi tách dữ liệu theo 1 thuộc tính; xây cây quyết định chính là việc
  tìm thuộc tính cho độ lợi thông tin **cao nhất**. Với tập S tách theo
  thuộc tính A có các giá trị v:
  IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|)·Entropy(S_v). Ghi chú: càng
  nhiều bất định thì độ hỗn loạn càng cao.
  <br><span class="en">**Information gain** (slide 69): based on the
  entropy decrease after splitting on an attribute; building a tree is
  all about finding the attribute with the highest gain:
  IG(S, A) = Entropy(S) − Σ_v (|S_v|/|S|)·Entropy(S_v). More uncertainty
  means more entropy.</span>
- **Khi nào dừng, và tỉa cây** (slide 70): dừng khi mọi bản ghi trong tập
  con hiện tại có cùng đầu ra; hoặc mọi bản ghi có cùng bộ thuộc tính đầu
  vào; hoặc đã chạm số quan sát tối thiểu mỗi lá (`min_samples_leaf`);
  hoặc đã chạm độ sâu tối đa (`max_depth`). **Tỉa** (mới so với 2025):
  **tỉa trước** (dừng sớm — dùng chính các luật trên) và **tỉa sau**
  (nuôi cây đầy đủ rồi cắt bớt các nhánh không cải thiện hiệu năng kiểm
  định; trong CART đây là tỉa theo chi phí–độ phức tạp, điều khiển bởi α
  = `ccp_alpha`, phạt theo số nút lá).
  <br><span class="en">**When to stop, and pruning** (slide 70): stop
  when all records share the output, or share the same inputs, or
  `min_samples_leaf` / `max_depth` is reached. **Pruning** (new vs 2025):
  **pre-pruning** (early stopping via those rules) and **post-pruning**
  (grow the full tree, then cut back branches that don't improve
  validation performance — in CART, cost-complexity pruning controlled by
  α = `ccp_alpha`, penalising the number of leaves).</span>
- **Quy trình 4 bước chi tiết** (slide 71): (1) tính độ hỗn loạn của cả
  tập dữ liệu; (2) với **mỗi** thuộc tính/đặc trưng: tính độ hỗn loạn cho
  mọi giá trị phân loại, lấy độ hỗn loạn trung bình có trọng số của thuộc
  tính đó, rồi tính độ lợi của thuộc tính đó; (3) chọn thuộc tính có độ
  lợi cao nhất; (4) lặp lại tới khi thỏa tiêu chí dừng.
  <br><span class="en">**The 4 detailed steps** (slide 71): compute the
  dataset's entropy → for every attribute, compute the entropy of all its
  categorical values, take the weighted average, compute its gain → pick
  the highest-gain attribute → repeat until stopping criteria are
  met.</span>
- **Ưu và nhược điểm của 1 cây đơn lẻ** (slide 72, **mới**): **ưu** —
  diễn giải được rất cao (đọc cây như một tập luật); không cần chuẩn hóa
  thang đo; xử lý được cả đầu vào số lẫn phân loại; tự động nắm bắt quan
  hệ phi tuyến và tương tác. **nhược** — **không ổn định** (thay đổi nhỏ
  trong dữ liệu có thể tạo ra cây rất khác — phương sai cao); dễ quá khớp
  nếu nuôi tới độ sâu tối đa; phép tách **song song với trục** nên ranh
  giới chéo phải xấp xỉ bằng bậc thang. Slide kết luận: chính điều này
  dẫn tới Phần 5 — trung bình hóa nhiều cây loại bỏ gần hết sự không ổn
  định, và đó đúng là việc rừng ngẫu nhiên làm.
  <br><span class="en">**Single-tree pros and cons** (slide 72, **new**):
  **pros** — highly interpretable, no scaling needed, handles numeric and
  categorical inputs, captures non-linearity and interactions
  automatically. **Cons** — **unstable** (a small data change can produce
  a very different tree — high variance); easily overfits at full depth;
  axis-parallel splits approximate diagonal boundaries by steps. This
  motivates Section 5: averaging many trees removes most of the
  instability.</span>
- **Ví dụ 4.1 và 4.2 — cây quyết định trong Python** (slide 73-75):
  `DecisionTreeClassifier(criterion="gini", max_depth=3,
  min_samples_leaf=5, random_state=42)` (có thể đổi `criterion` sang
  `"entropy"`), in độ chính xác trên tập huấn luyện và tập kiểm tra để
  **so sánh trực tiếp** (chẩn đoán quá khớp), in ma trận nhầm lẫn và báo
  cáo phân loại, vẽ cây bằng `plot_tree(tree, feature_names=X.columns,
  class_names=tree.classes_, filled=True)`. **Ví dụ 4.2**: xem đặc trưng
  nào thật sự chi phối dự đoán bằng `pd.Series(tree.feature_importances_,
  index=X.columns).sort_values(ascending=False)`.
  <br><span class="en">**Examples 4.1 and 4.2 — decision trees in
  Python** (slides 73-75): `DecisionTreeClassifier(criterion="gini",
  max_depth=3, min_samples_leaf=5, random_state=42)`, print train and
  test accuracy side by side (an overfitting diagnostic), confusion
  matrix and classification report, draw with `plot_tree(...)`. **Example
  4.2**: which features actually drive predictions, via
  `tree.feature_importances_`.</span>

### 5. Phương pháp tổ hợp (slide 77-86) - <span class="en">5. Ensemble Methods (slides 77-86)</span>

- **Rừng ngẫu nhiên là gì** (slide 77): một thuật toán học **tổ hợp** —
  xây nhiều cây quyết định nhỏ, yếu rồi kết hợp thành 1 bộ học mạnh bằng
  cách lấy trung bình (hồi quy) hoặc biểu quyết đa số (phân loại). **2
  nguồn ngẫu nhiên** giữ các cây khác nhau: **đóng bao (bagging)** — mỗi
  cây được huấn luyện trên 1 mẫu lặp lại có hoàn lại (bootstrap) của các
  quan sát; và **lấy mẫu con đặc trưng** — tại mỗi phép tách chỉ xét 1
  tập con ngẫu nhiên gồm k trong số m đặc trưng. Vì các cây bị **khử
  tương quan**, việc lấy trung bình triệt tiêu phần lớn phương sai của
  một cây đơn lẻ. → [[random-forest-k32]]
  <br><span class="en">**What are random forests** (slide 77): an
  **ensemble** algorithm — build many small, weak trees and combine them
  by averaging (regression) or majority vote (classification). **Two
  sources of randomness**: **bagging** (each tree on a bootstrap sample
  of the observations) and **feature subsampling** (at each split, only a
  random subset of k out of m features). Because the trees are
  **decorrelated**, averaging cancels much of a single tree's variance.
  → [[random-forest-k32]]</span>
- **Vì sao dùng rừng ngẫu nhiên** (slide 79): với đủ số cây, rừng rất
  kháng quá khớp so với 1 cây sâu đơn lẻ; xử lý tốt giá trị khuyết và
  kiểu dữ liệu hỗn hợp; thêm cây giúp tăng độ chính xác **tới một mức rồi
  chững lại** — thêm nữa chỉ tốn thời gian tính toán chứ không làm hại;
  cung cấp **điểm quan trọng của đặc trưng** giúp diễn giải; **sai số
  ngoài túi (OOB)** cho ước lượng kiểm định miễn phí — mỗi quan sát được
  kiểm tra trên khoảng một phần ba số cây chưa từng thấy nó lúc huấn
  luyện. **Cảnh báo đáng ghi nhận của slide** (mới): câu "càng nhiều cây
  càng chính xác" **chỉ đúng cho tới khi đường cong đi ngang** — vượt
  qua đó, cây thêm chỉ tốn chi phí mà không có lợi ích.
  <br><span class="en">**Why random forests** (slide 79): resistant to
  overfitting versus a single deep tree; handles missing values and mixed
  types; accuracy improves up to a point then plateaus; provides
  **feature importance** scores; the **out-of-bag (OOB)** error gives a
  free validation estimate — each observation is tested on the ~one third
  of trees that did not see it. **The slide's caveat** (new): "the more
  trees, the more accurate" is only true until the curve flattens; beyond
  that, extra trees cost without benefit.</span>
- **Thuật toán — giai đoạn 1: nuôi rừng** (slide 80): (1) rút 1 mẫu lặp
  lại có hoàn lại từ dữ liệu huấn luyện; (2) chọn ngẫu nhiên k trong tổng
  số m đặc trưng, với k ≪ m; (3) trong k đặc trưng đó, tìm nút d với điểm
  tách tốt nhất; (4) tách nút thành các nút con theo điểm tách đó; (5)
  lặp bước 2-4 tới khi thỏa luật dừng; (6) lặp bước 1-5 n lần để tạo n
  cây. **Giá trị mặc định thường dùng** (mới): k = √m cho phân loại và
  k = m/3 cho hồi quy.
  <br><span class="en">**Stage 1: growing the forest** (slide 80): draw a
  bootstrap sample → randomly select k of m features (k ≪ m) → find the
  best split among those k → split → repeat until the stopping rule →
  repeat n times for n trees. **Typical defaults** (new): k = √m for
  classification, k = m/3 for regression.</span>
- **Thuật toán — giai đoạn 2: dự đoán** (slide 81): (1) đưa đặc trưng của
  quan sát kiểm tra qua luật của từng cây, lưu lại mục tiêu dự đoán của
  mỗi cây; (2) đếm phiếu cho mỗi mục tiêu dự đoán; (3) lấy mục tiêu nhiều
  phiếu nhất làm dự đoán cuối cùng. **Với bài toán hồi quy**: thay biểu
  quyết bằng trung bình của n dự đoán từ n cây.
  <br><span class="en">**Stage 2: prediction** (slide 81): run the test
  features through each tree's rules, store each predicted target → count
  the votes → take the most-voted target. **For regression**: replace the
  vote with the average of the n tree predictions.</span>
- **Ví dụ 5.1 — rừng ngẫu nhiên trong Python** (slide 82-83):
  `RandomForestClassifier(n_estimators=500, max_features="sqrt",
  oob_score=True, random_state=42, n_jobs=-1)`, in `rf.oob_score_` (điểm
  kiểm định miễn phí) cạnh `rf.score(X_test, y_test)`, rồi xếp hạng 10
  đặc trưng quan trọng nhất bằng `rf.feature_importances_`.
  <br><span class="en">**Example 5.1 — random forest in Python** (slides
  82-83): `RandomForestClassifier(n_estimators=500, max_features="sqrt",
  oob_score=True, random_state=42, n_jobs=-1)`, print `oob_score_` next
  to the test score, then rank the top 10 features.</span>
- **5.2 Tăng cường — họ tổ hợp lớn thứ hai** (slide 84, **hoàn toàn
  mới**): đóng bao xây cây **song song**; tăng cường xây cây **tuần tự**,
  mỗi cây mới sửa lỗi của các cây trước. **AdaBoost** — gán lại trọng số
  cho các quan sát bị phân loại sai để cây kế tiếp tập trung vào chúng.
  **Tăng cường gradient (Gradient boosting)** — mỗi cây mới được khớp vào
  phần dư (gradient của hàm mất mát) của mô hình hiện tại. **XGBoost /
  LightGBM / CatBoost** — các bản cài đặt nhanh, có điều chuẩn, của tăng
  cường gradient; đây thường là các thuật toán thắng các cuộc thi trên dữ
  liệu bảng có cấu trúc trong kinh doanh. **Đánh đổi**: tăng cường thường
  chính xác hơn rừng ngẫu nhiên, nhưng nhạy hơn với siêu tham số và có
  thể quá khớp nếu tốc độ học quá cao hoặc số vòng quá nhiều.
  → [[boosting-ensemble]]
  <br><span class="en">**5.2 Boosting — the other big ensemble family**
  (slide 84, **entirely new**): bagging builds trees in *parallel*;
  boosting builds them *sequentially*, each correcting the previous
  ones' errors. **AdaBoost** re-weights misclassified observations;
  **gradient boosting** fits each new tree to the residuals (the gradient
  of the loss); **XGBoost / LightGBM / CatBoost** are fast, regularised
  implementations that typically win competitions on structured tabular
  business data. **Trade-off**: boosting is usually more accurate than a
  random forest, but more sensitive to hyperparameters and can overfit if
  the learning rate is too high or there are too many rounds.
  → [[boosting-ensemble]]</span>
- **Bảng so sánh đóng bao vs tăng cường** (slide 85, **mới**):

  | Tiêu chí | Đóng bao (rừng ngẫu nhiên) | Tăng cường (XGBoost) |
  |---|---|---|
  | Cách xây cây | Song song, độc lập | Tuần tự, cây sau sửa cây trước |
  | Đặc điểm cây | Sâu, độ chệch thấp, phương sai cao | Cây cụt nông, độ chệch cao |
  | Chủ yếu giảm | Phương sai | Độ chệch |
  | Rủi ro quá khớp | Thấp | Trung bình, cần tinh chỉnh |
  | Tốc độ tinh chỉnh | Nhanh, ít núm vặn | Chậm hơn, nhiều núm vặn |
  | Dùng điển hình | Mốc so sánh vững chắc | Vắt kiệt độ chính xác tối đa |

  <span class="en">**Bagging vs boosting table** (slide 85, **new**):
  bagging builds trees in parallel and independently, boosting
  sequentially with each fixing the last; bagging trees are deep (low
  bias, high variance) versus boosting's shallow stumps (high bias);
  bagging mainly reduces variance, boosting reduces bias; overfitting
  risk low versus moderate-needs-tuning; bagging is fast to tune with few
  knobs, boosting slower with many; bagging is a solid baseline, boosting
  squeezes out top accuracy.</span>
- **Bài tập nhóm 2** (slide 86): liệt kê một số mở rộng khác của cây
  quyết định ngoài rừng ngẫu nhiên; liệt kê càng nhiều ứng dụng tiềm năng
  của thuật toán phân loại trong kinh doanh/thực tế càng tốt; và **giải
  thích bằng lời của chính mình vì sao trung bình hóa nhiều cây làm giảm
  phương sai, trong khi trung bình hóa nhiều cây giống hệt nhau thì
  không**. Nộp qua biểu mẫu Google được ghi trên slide.
  <br><span class="en">**Teamwork 2** (slide 86): list other decision
  tree extensions besides random forests; list as many business/real-world
  applications of classification as possible; and **explain in your own
  words why averaging many trees reduces variance but averaging many
  identical trees would not**. Submit via the Google Form on the
  slide.</span>

### 6. Hồi quy trong học có giám sát (slide 88-92) - <span class="en">6. Regression in Supervised Learning (slides 88-92)</span>

- **Hồi quy là gì** (slide 89): trong học máy, hồi quy là bài toán học
  quan hệ giữa một số biến đầu vào (định tính hoặc định lượng)
  x = [x₁, x₂, …, x_p] và một biến đầu ra **định lượng** y:
  y = f(x₁, x₂, …, x_p) + u, trong đó u là số hạng nhiễu/sai số mô tả mọi
  thứ mô hình không nắm bắt được. Hai loại: hồi quy tuyến tính và hồi quy
  phi tuyến. **Ghi chú quan trọng của slide** (mới): đây vẫn là **cùng
  một khung** với phân loại — chỉ kiểu của y thay đổi; mọi thứ ở Phần 2
  (chia tập huấn luyện/kiểm tra, kiểm định chéo, quá khớp) áp dụng nguyên
  vẹn. → [[linear-regression-k32]]
  <br><span class="en">**What is regression** (slide 89): learning the
  relationship between inputs x and a **quantitative** output y:
  y = f(x₁,…,x_p) + u, where u is the noise term. Linear and nonlinear
  regression. **Key note** (new): the **same framework** as
  classification — only the type of y changes; everything from Section 2
  applies unchanged. → [[linear-regression-k32]]</span>
- **Hồi quy tuyến tính** (slide 90): y = β₀ + β₁x₁ + β₂x₂ + … + β_k x_k +
  u, với β₀,…,β_k là các tham số; bài toán là học các tham số đó từ tập
  dữ liệu huấn luyện. Mô hình hồi quy tuyến tính phục vụ **2 mục đích
  khác nhau**: (a) **thống kê cổ điển** — mô tả quan hệ (diễn giải, kiểm
  định giả thuyết); (b) **học máy** — dự đoán đầu ra tương lai (độ chính
  xác ngoài mẫu). **Ghi chú của slide** (mới): sự phân biệt này quan
  trọng — một mô hình có thể xuất sắc để giải thích mà tầm thường để dự
  đoán, và ngược lại; điều chuẩn (Phần 7) **cố tình đánh đổi một chút
  tính không chệch để lấy nhiều độ chính xác dự đoán**.
  <br><span class="en">**Linear regression** (slide 90):
  y = β₀ + β₁x₁ + … + β_k x_k + u. The model serves **2 different
  purposes**: **classical statistics** (describing relationships,
  interpretation, hypothesis testing) and **machine learning**
  (predicting future outputs, out-of-sample accuracy). **The slide's
  note** (new): the distinction matters — a model can be excellent for
  explanation and mediocre for prediction, and vice versa; regularization
  (Section 7) deliberately trades a little unbiasedness for a lot of
  predictive accuracy.</span>
- **Hai bước** (slide 91): **Bước 1** — học các tham số chưa biết β₀,…,β_k
  từ tập huấn luyện, tức tìm giá trị làm mô hình khớp tốt với dữ liệu.
  Bằng cách nào? **OLS** (bình phương tối thiểu thông thường), **LAD**
  (độ lệch tuyệt đối tối thiểu), **MLE** (ước lượng hợp lý cực đại),
  **MM** (phương pháp mô-men) — trong đó **OLS được dùng phổ biến nhất**.
  **Bước 2** — dùng mô hình đã huấn luyện để dự đoán đầu ra cho dữ liệu
  mới: ŷ = β̂₀ + β̂₁x₁* + … + β̂_k x_k*.
  <br><span class="en">**Two steps** (slide 91): **Step 1** — learn
  β₀,…,β_k from the training set, via OLS, LAD, MLE or MM (**OLS is the
  most commonly used**). **Step 2** — predict for new data:
  ŷ = β̂₀ + β̂₁x₁* + … + β̂_k x_k*.</span>
- **Một vài trường hợp đặc biệt** (slide 92): **hồi quy đa thức** —
  y = β₀ + β₁x + β₂x² + … + β_p x^p + u, vẫn **tuyến tính theo tham số**;
  **biến đầu vào định tính** — dùng biến giả: nếu biến định tính chỉ nhận
  2 giá trị khác nhau thì tạo 1 biến giả; nếu nhận m giá trị khác nhau
  thì tạo **m − 1** biến giả (để tránh bẫy biến giả). **Ghi chú của
  slide** (mới): tăng bậc p trong đa thức chính là cách kinh điển để đi
  từ chưa khớp sang quá khớp — đúng sự đánh đổi ở Phần 2.
  <br><span class="en">**Special cases** (slide 92): **polynomial
  regression** (still linear in the parameters) and **qualitative
  inputs** via dummy variables (2 values ⇒ 1 dummy; m values ⇒ **m − 1**
  dummies, to avoid the dummy variable trap). **The slide's note** (new):
  raising p is the classic way to move from underfitting to
  overfitting.</span>

### 7. Điều chuẩn: Ridge, Lasso và Elastic Net (slide 94-108) - <span class="en">7. Regularization: Ridge, Lasso and Elastic Net (slides 94-108)</span>

- **7.1 Vấn đề quá khớp trong hồi quy** (slide 94): mô hình hồi quy quá
  khớp có quá nhiều tham số so với số quan sát; mô hình quá khớp có thể
  làm **các hệ số hồi quy, giá trị p và R² trở nên gây hiểu lầm**. Một
  cách hữu ích để xử lý quá khớp là điều chuẩn.
  <br><span class="en">**7.1 Overfitting in regression** (slide 94):
  overfit regression models have too many parameters for the number of
  observations, and can make the coefficients, p-values and R²
  misleading. A useful approach is regularization.</span>
- **7.2 Điều chuẩn** (slide 96): điều chuẩn trong hồi quy là cách áp 1
  **hình phạt cho mỗi tham số** đưa vào mô hình; trong hồi quy có điều
  chuẩn, cả **độ lớn của các hệ số** lẫn độ lớn của số hạng sai số đều bị
  phạt; mô hình phức tạp bị "nản lòng", nhờ đó tránh quá khớp. 2 dạng phổ
  biến nhất: hồi quy Ridge và hồi quy Lasso — cộng thêm **Elastic Net**
  (mới, kết hợp cả 2 hình phạt, thường là lựa chọn mặc định an toàn nhất
  khi biến dự báo vừa nhiều vừa tương quan).
  → [[regularization-ridge-lasso-elastic-net-k32]]
  <br><span class="en">**7.2 Regularization** (slide 96): imposing a
  penalty for each parameter in the model; both the **magnitude of the
  coefficients** and of the error term are penalised, discouraging
  complex models. The two most common are Ridge and Lasso — plus
  **Elastic Net** (new; combines both penalties and is often the safest
  default when predictors are numerous and correlated).
  → [[regularization-ridge-lasso-elastic-net-k32]]</span>
- **Ba hàm mất mát** (slide 97): **OLS**: Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² → min;
  **Ridge**: Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² + λΣⱼβⱼ² → min; **Lasso**:
  Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² + λΣⱼ|βⱼ| → min, với λ là tham số điều chỉnh.
  **Ghi chú quan trọng**: hệ số chặn β₀ **không bao giờ bị phạt**.
  <br><span class="en">**The three loss functions** (slide 97): OLS,
  Ridge (+λΣβⱼ²) and Lasso (+λΣ|βⱼ|), where λ is the tuning parameter.
  **Note**: the intercept β₀ is never penalised.</span>
- **Elastic Net** (slide 98, **mới**): Loss =
  Σᵢ(yᵢ − β₀ − Σⱼβⱼxⱼᵢ)² + λ[αΣⱼ|βⱼ| + ((1−α)/2)Σⱼβⱼ²] → min, trong đó
  **α = 1 cho ra Lasso; α = 0 cho ra Ridge**. Hữu ích khi các biến dự báo
  tương quan mạnh: Lasso đơn thuần có xu hướng chọn **tùy tiện 1 biến**
  trong nhóm tương quan rồi bỏ hết phần còn lại, còn Elastic Net **giữ
  nguyên cả nhóm**. **Nghiệm hiển của Ridge** (mới):
  β̂_ridge = (X'X + λI)⁻¹X'y — việc cộng thêm λI làm ma trận **khả nghịch
  ngay cả khi X'X suy biến**, đó là lý do Ridge xử lý được đa cộng tuyến
  và cả trường hợp k > n. Lasso **không có nghiệm hiển**, phải giải bằng
  phương pháp số.
  <br><span class="en">**Elastic Net** (slide 98, **new**): the combined
  penalty with **α = 1 giving Lasso, α = 0 giving Ridge**; useful with
  strongly correlated predictors, where Lasso alone picks one arbitrarily
  and discards the rest while Elastic Net keeps the group. **Ridge's
  closed form** (new): β̂ = (X'X + λI)⁻¹X'y — adding λI makes the matrix
  invertible even when X'X is singular, which is why Ridge handles
  multicollinearity and the k > n case. Lasso has no closed form and is
  solved numerically.</span>
- **Vì sao Lasso đưa hệ số về đúng 0** (slide 99, **hoàn toàn mới — lời
  giải thích hình học**): cả 2 phương pháp đều tối thiểu hóa tổng bình
  phương phần dư **với 1 ngân sách ràng buộc trên các hệ số**, và **hình
  dạng của ngân sách đó mới là điều quyết định**. Ràng buộc Ridge là hình
  tròn (β₁² + β₂² ≤ t), ràng buộc Lasso là hình thoi (|β₁| + |β₂| ≤ t).
  Ngân sách của Lasso **có các góc nhọn nằm trên trục tọa độ**; các đường
  đồng mức của tổng bình phương phần dư thường chạm nó tại 1 góc, và
  chạm tại góc nghĩa là **có 1 hệ số đúng bằng 0**. Hình tròn của Ridge
  không có góc, nên hệ số co về gần 0 nhưng không bao giờ chạm 0.
  <br><span class="en">**Why Lasso sets coefficients exactly to zero**
  (slide 99, **entirely new — the geometric argument**): both minimise
  the residual sum of squares subject to a budget on the coefficients,
  and the budget's *shape* is what matters. Ridge's budget is a circle
  (β₁² + β₂² ≤ t), Lasso's a diamond (|β₁| + |β₂| ≤ t). **The Lasso
  budget has corners on the axes**; the RSS contours usually touch it at
  a corner, and a corner means one coefficient is exactly zero. The Ridge
  circle has no corners, so coefficients shrink towards zero but never
  reach it.</span>
- **Bảng so sánh Lasso vs Ridge** (slide 100, **mới, 6 tiêu chí**):

  | Tiêu chí | Ridge (L2) | Lasso (L1) |
  |---|---|---|
  | Hình phạt | λΣβⱼ² | λΣ\|βⱼ\| |
  | Hệ số | Co về gần 0, không bao giờ đúng bằng 0 | Một số bị đưa về đúng 0 |
  | Chọn biến | Không | Có, tự động |
  | Biến dự báo tương quan | Chia đều trọng số cho cả nhóm | Chọn 1 biến, bỏ các biến còn lại |
  | Hợp nhất khi | Nhiều biến dự báo cùng có ảnh hưởng nhỏ | Chỉ vài biến dự báo có ảnh hưởng lớn |
  | Nghiệm | Dạng hiển (đóng) | Bằng phương pháp số |

  **Lưu ý bắt buộc**: phải **chuẩn hóa các đặc trưng trước khi khớp** —
  cả 2 hình phạt đều phụ thuộc độ lớn của hệ số, mà độ lớn hệ số lại phụ
  thuộc đơn vị đo của từng biến dự báo; không chuẩn hóa thì hình phạt bị
  áp một cách bất công.
  <br><span class="en">**Lasso vs Ridge table** (slide 100, **new, 6
  criteria**): Ridge's L2 penalty shrinks coefficients towards but never
  to zero, does no variable selection, shares weight among correlated
  predictors, is best when many predictors each matter a little, and has
  a closed form. Lasso's L1 penalty sets some coefficients exactly to
  zero, performs automatic variable selection, picks one of a correlated
  group and drops the others, is best when few predictors matter a lot,
  and is solved numerically. **Mandatory note**: always standardise the
  features before fitting, otherwise the penalty is applied
  unfairly.</span>
- **7.3 Tham số điều chỉnh λ** (slide 102): λ điều khiển **cường độ của
  số hạng phạt**. Khi λ = 0, Ridge và Lasso trùng với hồi quy bình phương
  tối thiểu; khi λ → ∞, mọi tham số độ dốc tiến về 0; do đó hình phạt lý
  tưởng nằm đâu đó giữa 0 và ∞. **Cách chọn λ trong thực tế** (mới):
  **đừng chọn bằng mắt** — khớp mô hình trên 1 lưới các giá trị λ rồi chọn
  giá trị có sai số kiểm định chéo thấp nhất; trong `scikit-learn` việc
  này được làm tự động bởi `RidgeCV` và `LassoCV`. Lưu ý: `scikit-learn`
  gọi tham số này là `alpha`, không phải λ.
  <br><span class="en">**7.3 The tuning parameter λ** (slide 102): λ
  controls the penalty's strength. At λ = 0, Ridge and Lasso equal least
  squares; as λ → ∞ all slopes tend to 0; the ideal penalty is somewhere
  between. **How to choose λ in practice** (new): **do not choose by
  eye** — fit over a grid of λ and pick the lowest cross-validated error;
  `RidgeCV` and `LassoCV` do this automatically. Note `scikit-learn`
  calls the parameter `alpha`, not λ.</span>
- **7.4 Ví dụ 7.1 — cú pháp Python** (slide 104-105): nạp dữ liệu bằng
  `pd.read_csv("E:/regression.csv")`, tách `X = data.drop(columns="y")`
  và `y = data["y"]`; rồi khớp lần lượt `LinearRegression()`,
  `Ridge(alpha=10)`, `Lasso(alpha=0.01)`,
  `ElasticNet(alpha=0.1, l1_ratio=0.5)` — ghi chú trong mã: `l1_ratio`
  đóng vai trò α trong công thức Elastic Net, còn `alpha` đóng vai trò λ.
  Cuối cùng in R² trên tập kiểm tra của cả 4 mô hình để so sánh trực
  tiếp.
  <br><span class="en">**7.4 Example 7.1 — the basic syntax** (slides
  104-105): load `regression.csv`, split X and y, then fit
  `LinearRegression()`, `Ridge(alpha=10)`, `Lasso(alpha=0.01)` and
  `ElasticNet(alpha=0.1, l1_ratio=0.5)` — in the code, `l1_ratio` plays
  the role of α in the formula while `alpha` plays the role of λ. Finally
  print all four test-set R² values side by side.</span>
- **7.5 Đánh giá độ chính xác dự báo** (slide 106-107): nhắc lại MAE,
  MSE, MAPE, RMSE kèm hàm `scikit-learn` tương ứng
  (`mean_absolute_error`, `mean_squared_error`). **Ghi chú "so sánh cùng
  hệ quy chiếu"** (mới): luôn tính các chỉ số này **trên tập kiểm tra**,
  và luôn so mô hình có điều chuẩn với **mốc so sánh OLS thuần**; nếu
  Ridge và Lasso không thắng OLS ngoài mẫu thì độ phức tạp tăng thêm là
  không đáng.
  <br><span class="en">**7.5 Evaluating forecast accuracy** (slides
  106-107): MAE, MSE, MAPE, RMSE with their `scikit-learn` functions.
  **The "compare like with like" note** (new): always compute these on
  the test set, and always compare a regularized model against a plain
  OLS baseline — if Ridge and Lasso don't beat OLS out of sample, the
  extra complexity is not justified.</span>
- **7.6 Bài tập nhóm 3 — làm theo cặp** (slide 108): dùng file
  `Income.csv` với `income` là biến phụ thuộc — nạp dữ liệu; tạo mảng cho
  biến đầu vào và đầu ra; tính thống kê mô tả cho biến độc lập và biến
  phụ thuộc; **vẽ đồ thị hệ số theo tham số điều chỉnh (đường đi của hệ
  số)**; tạo tập huấn luyện và tập kiểm tra; xây dựng, dự đoán và đánh giá
  hồi quy Ridge và Lasso; **báo cáo MAE, RMSE và R² trên tập kiểm tra, và
  nêu rõ Lasso đã loại bỏ những biến nào**. Yêu cầu tạo 1 sổ tay Python
  với **mỗi ô là một nhiệm vụ**.
  <br><span class="en">**7.6 Teamwork 3 — work in pairs** (slide 108):
  using `Income.csv` with income as the dependent variable — load the
  data; create arrays for inputs and output; compute descriptive
  statistics; **plot the coefficient path against the tuning parameter**;
  create train and test sets; build, predict and evaluate Ridge and
  Lasso; **report MAE, RMSE and R² on the test set, and state which
  variables the Lasso eliminated**. Create a Python notebook with **one
  cell per task**.</span>

### 8. Tổng kết (slide 110-111) - <span class="en">8. Summary (slides 110-111)</span>

**Bảng tổng kết 7 thuật toán** (slide 110) — công cụ ôn thi tốt nhất của
cả chương:

| Thuật toán | Bài toán | Siêu tham số chính | Cần chuẩn hóa? | Điểm mạnh chính |
|---|---|---|---|---|
| KNN | Cả hai | K | Có | Đơn giản, ranh giới linh hoạt |
| Cây quyết định | Cả hai | độ sâu, số quan sát tối thiểu mỗi lá | Không | Luật diễn giải được |
| Rừng ngẫu nhiên | Cả hai | `n_estimators`, `max_features` | Không | Mốc so sánh mạnh và ổn định |
| Tăng cường | Cả hai | tốc độ học, số vòng | Không | Độ chính xác cao nhất trên dữ liệu bảng |
| Hồi quy tuyến tính | Hồi quy | — | Không | Hệ số diễn giải được |
| Ridge | Hồi quy | λ | Có | Xử lý được đa cộng tuyến |
| Lasso | Hồi quy | λ | Có | Tự động chọn biến |

<span class="en">**Summary table of the 7 algorithms** (slide 110) — the
chapter's best single revision tool: KNN (both tasks, K, scaling needed,
simple and flexible boundary); decision tree (both, depth/min leaf, no
scaling, interpretable rules); random forest (both, `n_estimators`/
`max_features`, no scaling, strong stable baseline); boosting (both,
learning rate/rounds, no scaling, highest accuracy on tabular data);
linear regression (regression, no key hyperparameter, no scaling,
interpretable coefficients); Ridge (regression, λ, scaling needed,
handles multicollinearity); Lasso (regression, λ, scaling needed,
automatic variable selection).</span>

**5 câu hỏi ôn tập của giảng viên** (slide 111): (1) Vì sao K rất nhỏ
trong KNN cho độ chệch thấp nhưng phương sai cao? (2) Một nút chứa 20
quan sát lớp A và 20 quan sát lớp B — tính độ hỗn loạn và độ không thuần
Gini của nút đó; nút này có thuần khiết không? (3) Giải thích vì sao
RMSE ≥ MAE luôn đúng. (4) Mô hình của bạn có độ chính xác 98% trên tập
huấn luyện và 71% trên tập kiểm tra — chẩn đoán vấn đề và đề xuất 2 cách
khắc phục. (5) Bạn có 400 biến dự báo và 120 quan sát — bạn chọn Ridge
hay Lasso, và vì sao?
<br><span class="en">**The instructor's 5 review questions** (slide 111):
(1) Why does a very small K in KNN give low bias but high variance? (2) A
node contains 20 observations of class A and 20 of class B — compute its
entropy and Gini impurity; is it pure? (3) Explain why RMSE ≥ MAE always
holds. (4) Your model has 98% training accuracy and 71% test accuracy —
diagnose the problem and propose two remedies. (5) You have 400
predictors and 120 observations — would you choose Ridge or Lasso, and
why?</span>

## File mã và dữ liệu đi kèm - <span class="en">Companion code and data files</span>

Thư mục `raw/Lecture Notes/K32/Chapter03/` chứa 7 file ngoài slide PDF.
<br><span class="en">The folder `raw/Lecture Notes/K32/Chapter03/`
contains 7 files besides the PDF slides.</span>

### File mã Python - <span class="en">Python scripts</span>

- **`Example3.1_Iris_New.py`** — chính là đoạn mã của Ví dụ 3.1 trên
  slide 41-48, ghép lại thành 1 file, các phần ngăn nhau bằng dòng
  `%-----`. Bao gồm đủ 4 khối: nạp dữ liệu + chia tập; vẽ biểu đồ phân
  tán; chuẩn hóa + KNN với K = 5 + đánh giá; tìm K tốt nhất bằng
  `GridSearchCV`; và dự đoán 1 bông hoa mới. **File này chứa đúng các lỗi
  cố ý mà slide đã báo trước** — xem mục bên dưới.
  <br><span class="en">**`Example3.1_Iris_New.py`** — the Example 3.1
  code from slides 41-48 concatenated into one file, sections separated
  by `%-----` lines. Covers all 4 blocks: load + split; scatter plot;
  scale + KNN with K = 5 + evaluation; best-K search with `GridSearchCV`;
  and predicting a new flower. **This file contains exactly the
  intentional errors the slide warned about** — see below.</span>
- **`Example3.2_DecisionTree_New.py`** — đoạn mã cây quyết định của Ví dụ
  4.1 (slide 73-74). Khác slide ở 1 điểm: file không đặt
  `min_samples_leaf=5` (chỉ có `criterion="gini"`, `max_depth=3`,
  `random_state=42`), và có thêm dòng `y_pred = tree.predict(X_test)` mà
  slide 73 bỏ sót (slide 74 dùng `y_pred` mà chưa từng định nghĩa nó).
  File này chạy được nếu `X` và `y` đã được định nghĩa trước đó — nó giả
  định người học đã chạy phần nạp dữ liệu của Ví dụ 3.1.
  <br><span class="en">**`Example3.2_DecisionTree_New.py`** — the
  Example 4.1 decision tree code (slides 73-74). Two differences from the
  slide: it omits `min_samples_leaf=5`, and it *adds* the
  `y_pred = tree.predict(X_test)` line that slide 73 omits (slide 74 uses
  `y_pred` without ever defining it). It runs only if `X` and `y` were
  defined earlier — it assumes the Example 3.1 loading block was run
  first.</span>

### File dữ liệu - <span class="en">Data files</span>

| File | Kích thước | Cột | Dùng ở đâu |
|---|---|---|---|
| `iris.csv` | 150 hàng, 5 cột | `sepal.length`, `sepal.width`, `petal.length`, `petal.width`, `variety` (50 Setosa / 50 Versicolor / 50 Virginica) | Ví dụ 3.1 (KNN), slide 39-48 |
| `Regression.csv` | 104 hàng, 5 cột | `x1`, `x2`, `x3`, `x4`, `y` | Ví dụ 7.1 (OLS/Ridge/Lasso/Elastic Net), slide 104 |
| `Regression.xlsx` | — | cùng dữ liệu, dạng Excel | Bản Excel của file trên |
| `Nationality.csv` | 13 hàng, 5 cột | `Age`, `Experience`, `Rank`, `Nationality`, `Go` (7 YES / 6 NO) | Không slide nào gọi tên — xem ghi chú |
| `TeleCustomers.csv` | 1000 hàng, 8 cột | `region`, `tenure`, `age`, `marital`, `address`, `income`, `ed`, `employ` | Không slide nào gọi tên — xem ghi chú |

<span class="en">**Data files**: `iris.csv` (150 rows, 4 features +
`variety`, 50 of each species) drives Example 3.1; `Regression.csv` (104
rows, `x1`-`x4` and `y`) drives Example 7.1, with `Regression.xlsx` the
same data in Excel form; `Nationality.csv` (13 rows: `Age`,
`Experience`, `Rank`, `Nationality`, `Go` — 7 YES / 6 NO) and
`TeleCustomers.csv` (1000 rows: `region`, `tenure`, `age`, `marital`,
`address`, `income`, `ed`, `employ`) are named by no slide — see the
notes.</span>

## Khoảng trống / lưu ý - <span class="en">Gaps / notes</span>

- **Các lỗi trong mã Ví dụ 3.1 là CỐ Ý** — slide 41 ghi rõ "Challenge:
  The errors are intentional for learning purposes" và slide 42 lặp lại
  ghi chú tương tự. Đối chiếu với file `iris.csv` thật, có 4 lỗi cài
  sẵn: (1) **hai dòng `pd.read_csv` liên tiếp** — dòng đầu trỏ tới
  `"E:/iris.csv"` (đường dẫn cục bộ trên máy giảng viên), dòng sau ghi đè
  bằng `"iris.csv"`; (2) `iris.drop(columns="species")` và
  `iris["species"]` — **cột `species` không tồn tại**, file thật đặt tên
  cột nhãn là `variety` (đây cũng chính là tên cột mà đoạn mã vẽ biểu đồ
  ở khối sau dùng đúng: `iris["variety"]`) ⇒ sẽ báo `KeyError`; (3) khối
  vẽ biểu đồ dùng `df["sepal.length"]` và `df["sepal.width"]` nhưng
  **`df` chưa bao giờ được định nghĩa** (biến tên là `iris`) ⇒
  `NameError`; (4) `GridSearchCV(pipe, ...)` dùng đối tượng **`pipe`
  chưa từng được tạo** — phần đúng phải dựng 1 `Pipeline` gồm
  `StandardScaler` + `KNeighborsClassifier` thì tiền tố
  `"knn__n_neighbors"` trong `param_grid` mới có nghĩa ⇒ `NameError`.
  Đây là bài tập gỡ lỗi có chủ đích, không phải sai sót của tài liệu —
  chính là lý do bảng tra lỗi Python ở Chapter 2 K32 hữu ích ở đây.
  <br><span class="en">**The errors in the Example 3.1 code are
  INTENTIONAL** — slide 41 states "Challenge: The errors are intentional
  for learning purposes" and slide 42 repeats the note. Checked against
  the real `iris.csv`, there are 4 planted bugs: (1) **two consecutive
  `pd.read_csv` lines**, the first pointing at the instructor's local
  `"E:/iris.csv"`; (2) `columns="species"` / `iris["species"]` — **there
  is no `species` column**, the real label column is `variety` (which the
  later plotting block uses correctly) ⇒ `KeyError`; (3) the plotting
  block uses `df[...]` but **`df` is never defined** (the variable is
  `iris`) ⇒ `NameError`; (4) `GridSearchCV(pipe, ...)` uses a **`pipe`
  object that was never created** — the correct version needs a
  `Pipeline` of `StandardScaler` + `KNeighborsClassifier` for the
  `"knn__n_neighbors"` prefix in `param_grid` to mean anything ⇒
  `NameError`. This is a deliberate debugging exercise, not a document
  defect.</span>
- **Bài tập nhóm 3 yêu cầu `Income.csv` — file này KHÔNG có trong
  `raw/`**. Trong thư mục Chapter03 chỉ có `TeleCustomers.csv` là chứa
  cột `income` (cùng 7 biến giải thích: `region`, `tenure`, `age`,
  `marital`, `address`, `ed`, `employ`), nên nhiều khả năng đây là file
  được dùng thay thế (hoặc `Income.csv` sẽ được phát riêng sau). Ghi nhận
  là **khoảng trống nguồn**: nếu chưa có `Income.csv`, bài tập vẫn làm
  được trọn vẹn trên `TeleCustomers.csv` với `income` là biến phụ thuộc.
  <br><span class="en">**Teamwork 3 asks for `Income.csv` — that file is
  NOT in `raw/`**. In the Chapter03 folder only `TeleCustomers.csv` has
  an `income` column (plus 7 explanatory variables), so it is most likely
  the intended substitute (or `Income.csv` will be released separately).
  Logged as a **source gap**: the exercise can be done in full on
  `TeleCustomers.csv` with `income` as the dependent variable.</span>
- **`Nationality.csv` không được slide nào gọi tên**, nhưng cấu trúc của
  nó (`Age`, `Experience`, `Rank`, `Nationality` → `Go` YES/NO) đúng là
  bộ dữ liệu kinh điển dùng để dạy cây quyết định phân loại nhị phân với
  1 biến phân loại cần mã hóa. Nhiều khả năng là dữ liệu dự phòng cho
  phần cây quyết định (Ví dụ 4.1 trên slide không nêu tên file dữ liệu
  nào). Không suy diễn thêm — ghi nhận đúng như đang có.
  <br><span class="en">**`Nationality.csv` is named by no slide**, but
  its structure (`Age`, `Experience`, `Rank`, `Nationality` → `Go`
  YES/NO) is the classic teaching set for a binary classification tree
  with one categorical variable to encode. It is most likely the data for
  the decision tree section (Example 4.1 on the slides names no data
  file). Recorded as-is, without further inference.</span>
- **Ghi chú tự sửa lỗi trong slide**: slide 17 có khung "Corrected from
  earlier versions" nói rõ **MSE và RMSE đều chứa hệ số 1/n, và
  RMSE = √MSE**; slide 32 có khung tương tự nói việc chọn K láng giềng
  gần nhất diễn ra **sau khi** tính xong mọi khoảng cách, không phải bên
  trong vòng lặp. Hai khung này cho thấy giảng viên đã rà và sửa các
  điểm dễ hiểu sai từ các bản slide trước — đáng ghi nhớ vì đúng những
  điểm này hay bị hỏi.
  <br><span class="en">**Self-correction boxes in the slides**: slide 17
  has a "Corrected from earlier versions" box stating that **MSE and RMSE
  both contain the 1/n factor and RMSE = √MSE**; slide 32 has a similar
  box stating that selecting the K nearest neighbours happens **after**
  all distances are computed, not inside the loop. Both show the
  instructor revising points that were easy to misread in earlier decks —
  worth remembering, as these are exactly the points that get
  examined.</span>
- **Nội dung chỉ có ở dạng hình, không trích xuất được bằng
  `pdftotext`**: sơ đồ AI/học máy/học sâu (slide 7), ảnh ứng dụng nhận
  diện khuôn mặt (slide 10) và dự đoán bệnh cây trồng bằng học sâu (slide
  11), sơ đồ các loại học máy (slide 13), sơ đồ kiểm định cho bài toán
  phân loại (slide 20), đồ thị quá khớp/chưa khớp (slide 22), minh họa
  phân loại (slide 28), minh họa thuật toán KNN (slide 33), đồ thị chọn K
  (slide 36), ảnh các loài hoa IRIS (slide 40), ảnh kết quả chạy mã Ví dụ
  3.1 (slide 45, 47), ảnh ứng dụng lọc thư rác (slide 49) và phát hiện
  gian lận (slide 50), minh họa cây quyết định (slide 54, 56, 57), ví dụ
  xây cây và tính độ hỗn loạn (slide 67-68), sơ đồ rừng ngẫu nhiên (slide
  78), ảnh mã gốc rừng ngẫu nhiên (slide 83), ảnh mở đầu phần hồi quy
  (slide 88), đồ thị quá khớp trong hồi quy (slide 95), minh họa Lasso vs
  Ridge (slide 101) và đường đi của hệ số (slide 103).
  <br><span class="en">**Image-only content not extractable via
  `pdftotext`**: the AI/ML/DL diagram (slide 7), application photos
  (slides 10-11), the ML types diagram (slide 13), the classification
  validation diagram (slide 20), the over/underfitting curves (slide 22),
  the classification illustration (slide 28), the KNN illustration (slide
  33), the choose-K plot (slide 36), the IRIS species photos (slide 40),
  screenshots of Example 3.1 output (slides 45, 47), the spam and fraud
  application images (slides 49-50), decision tree illustrations (slides
  54, 56, 57), the worked tree-building and entropy example (slides
  67-68), the random forest diagram (slide 78), the original random
  forest code screenshot (slide 83), the regression opener (slide 88),
  the regression overfitting plot (slide 95), the Lasso vs Ridge
  illustration (slide 101) and the coefficient path (slide 103).</span>
- **Ví dụ 3.1 dùng `iris.csv` chứ không phải bộ IRIS dựng sẵn của
  `scikit-learn`** — nên tên cột theo đúng file (`sepal.length` có dấu
  chấm, không phải `sepal_length` gạch dưới như trong
  `sklearn.datasets.load_iris`). Điểm nhỏ nhưng gây lỗi thật khi người
  học tự chuyển qua lại giữa 2 nguồn dữ liệu.
  <br><span class="en">**Example 3.1 uses `iris.csv`, not
  `scikit-learn`'s built-in IRIS** — so the column names follow the file
  (`sepal.length` with a dot, not the underscored `sepal_length` of
  `sklearn.datasets.load_iris`). A small point that causes real errors
  when students switch between the two sources.</span>

## Liên kết - <span class="en">Links</span>

- [[supervised-learning-framework]] — khung chung: dữ liệu có nhãn, hàm
  f̂, 4 loại học máy, bảng thuật ngữ.
  <br><span class="en">[[supervised-learning-framework]] — the shared
  frame: labelled data, the function f̂, the 4 ML types, the vocabulary
  table.</span>
- [[train-test-split-and-cross-validation]] — chia dữ liệu, rò rỉ dữ
  liệu, kiểm định chéo.
  <br><span class="en">[[train-test-split-and-cross-validation]] — data
  splitting, leakage, cross-validation.</span>
- [[model-evaluation-metrics-k32]] — chỉ số hồi quy và chỉ số phân loại.
  <br><span class="en">[[model-evaluation-metrics-k32]] — regression and
  classification metrics.</span>
- [[overfitting-underfitting-k32]] — quá khớp/chưa khớp và đánh đổi độ
  chệch–phương sai.
  <br><span class="en">[[overfitting-underfitting-k32]] — over/
  underfitting and the bias–variance trade-off.</span>
- [[classification-k32]] — định nghĩa, 3 dạng bài toán, quy trình 4
  bước.
  <br><span class="en">[[classification-k32]] — definition, the 3 problem
  types, the 4-step workflow.</span>
- [[k-nearest-neighbors-k32]] — thuật toán KNN, khoảng cách, chuẩn hóa,
  chọn K.
  <br><span class="en">[[k-nearest-neighbors-k32]] — the KNN algorithm,
  distances, scaling, choosing K.</span>
- [[decision-tree-k32]] — cây quyết định, ID3/CART, độ thuần khiết, tỉa
  cây.
  <br><span class="en">[[decision-tree-k32]] — decision trees, ID3/CART,
  purity, pruning.</span>
- [[random-forest-k32]] — rừng ngẫu nhiên, đóng bao, sai số ngoài túi.
  <br><span class="en">[[random-forest-k32]] — random forests, bagging,
  OOB error.</span>
- [[boosting-ensemble]] — tăng cường, AdaBoost/Gradient/XGBoost, so sánh
  với đóng bao.
  <br><span class="en">[[boosting-ensemble]] — boosting, AdaBoost/
  Gradient/XGBoost, versus bagging.</span>
- [[linear-regression-k32]] — hồi quy tuyến tính, OLS, đa thức, biến
  giả.
  <br><span class="en">[[linear-regression-k32]] — linear regression,
  OLS, polynomials, dummies.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] — Ridge/Lasso/Elastic
  Net, hình học của hình phạt, chọn λ.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] —
  Ridge/Lasso/Elastic Net, the geometry of the penalty, choosing
  λ.</span>
- [[chapter02-python-jupyter-k32]] — Chapter 2 đã dạy toàn bộ công cụ
  dùng ở chương này (pandas, matplotlib, và phần "nếm thử" scikit-learn).
  <br><span class="en">[[chapter02-python-jupyter-k32]] — Chapter 2
  already taught every tool used here (pandas, matplotlib, and the
  scikit-learn "first taste").</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K32/Chapter03/VNP_DataScience_SupervisedLearning_
2026.pdf`, slide 1-112; `raw/Lecture Notes/K32/Chapter03/
Example3.1_Iris_New.py`; `raw/Lecture Notes/K32/Chapter03/
Example3.2_DecisionTree_New.py`; `raw/Lecture Notes/K32/Chapter03/
iris.csv`; `raw/Lecture Notes/K32/Chapter03/Regression.csv`;
`raw/Lecture Notes/K32/Chapter03/Regression.xlsx`; `raw/Lecture Notes/
K32/Chapter03/Nationality.csv`; `raw/Lecture Notes/K32/Chapter03/
TeleCustomers.csv`.
<br><span class="en">`raw/Lecture Notes/K32/Chapter03/
VNP_DataScience_SupervisedLearning_2026.pdf`, slides 1-112; the 2 Python
example scripts and the 5 data files in the same folder.</span>
