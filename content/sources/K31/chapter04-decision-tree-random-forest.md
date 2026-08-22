---
type: source
title: "Chapter 4 (K31) — Cây quyết định & Rừng ngẫu nhiên"
title_en: "Chapter 4 (K31) — Decision Tree & Random Forest"
tags: [chapter-4, k31, machine-learning, classification, decision-tree, random-forest]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter04_DecisionTree_2025.pdf"
---

## Metadata

- **Khóa**: K31 (2025). **Giảng viên**: [[tran-thi-tuan-anh]]. **Số
  slide**: 34.
  <br><span class="en">**Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 34.</span>
- **Vị trí trong môn**: thuật toán classification thứ hai sau
  [[k-nearest-neighbors]], đồng thời giới thiệu học tổ hợp (ensemble
  learning) qua Rừng ngẫu nhiên.
  <br><span class="en">**Position in the course**: the second
  classification algorithm after [[k-nearest-neighbors]], also
  introducing ensemble learning via Random Forest.</span>

## Tóm tắt - <span class="en">Summary</span>

- 2 phần lớn: (1) Cây quyết định — định nghĩa, cách xây, đo độ thuần khiết
  (purity), triển khai Python trên dữ liệu IRIS; (2) Rừng ngẫu nhiên — vì
  sao dùng, cách hoạt động qua 2 giai đoạn.
  <br><span class="en">2 major parts: (1) Decision Tree — definition, how
  to build, purity measures, Python implementation on IRIS data; (2)
  Random Forest — why use it, how it works in 2 stages.</span>

## Nội dung chính - <span class="en">Key content</span>

### 4.1 Cây quyết định (slide 3-26) - <span class="en">4.1 Decision Tree (slides 3-26)</span>

- **Cây quyết định là gì** (slide 3): kỹ thuật phân loại quan sát vào các
  lớp bằng cách sắp xếp chúng đi xuống theo cây, từ gốc tới 1 nút lá. Một
  số khái niệm: **Nút/Nút quyết định (Node/Decision Node)** — thuộc
  tính/biến/đặc trưng; **Nhánh/Cây con (Branch/Sub-tree)** — cây hình
  thành từ việc tách cây; **Nút gốc (Root node)** — nơi cây quyết định
  bắt đầu; **Nút lá (Leaf node)** — đầu ra cuối cùng; **Tách (Splitting)**
  — quá trình chia nút quyết định/nút gốc thành các nút con theo điều
  kiện cho trước; **Tỉa (Pruning)** — quá trình loại bỏ các nhánh không
  cần thiết khỏi cây.
  <br><span class="en">**What is a decision tree** (slide 3): a technique
  to classify observations into classes by sorting them down the tree
  from the root to a leaf node. Concepts: **Node/Decision Node** —
  attribute/variable/feature; **Branch/Sub-tree** — a tree formed by
  splitting; **Root node** — where the decision tree starts; **Leaf
  node** — final outputs; **Splitting** — dividing a decision/root node
  into sub-nodes per given conditions; **Pruning** — removing unwanted
  branches from the tree.</span>
- **Cây phân loại vs cây hồi quy** (slide 5): **Cây phân loại
  (Classification trees)** — đầu ra định tính, dùng chỉ số Gini, entropy,
  hoặc classification error để tìm thuộc tính tách tốt nhất, dự đoán bằng
  hạng mục chiếm đa số ở nút lá. **Cây hồi quy (Regression trees)** — đầu
  ra định lượng, dùng giảm phương sai (variance reduction), sai số bình
  phương trung bình, hoặc chỉ số tương tự, dự đoán bằng trung bình/trung
  vị ở nút lá.
  <br><span class="en">**Classification trees vs regression trees**
  (slide 5): **Classification trees** — qualitative output, use Gini
  index/entropy/classification error to find the best splitting
  attribute, predict by the majority category at the leaf node.
  **Regression trees** — quantitative output, use variance reduction/MSE/
  similar metrics, predict by the mean/median at the leaf node.</span>
- **Ví dụ minh họa** (slide 6-7): quyết định nhận hay không nhận 1 lời
  mời làm việc; phân loại rủi ro thấp/cao của cơn đau tim.
  <br><span class="en">**Illustrative examples** (slides 6-7): deciding
  whether to accept a job offer; classifying low/high risk of heart
  attack.</span>
- **Cách xây cây quyết định** (slide 8-12): (1) bắt đầu từ cây rỗng, (2)
  tách theo thuộc tính tốt nhất tiếp theo, (3) lặp lại (đệ quy). Các
  thuật toán xây cây: **ID3** (Iterative Dichotomiser 3), **C4.5** (kế
  thừa ID3), **CART** (Classification and Regression Tree), **CHAID**
  (Chi-square Automatic Interaction Detector)... ID3 là 1 trong những
  thuật toán cốt lõi.
  - **ID3**: 1 trong những thuật toán cây quyết định sớm và đơn giản
    nhất. Dùng entropy và information gain để quyết định tách nút. Làm
    tốt với dữ liệu định tính (categorical) nhưng không xử lý được dữ
    liệu số. Có thể dẫn tới quá khớp và tạo cây thiên lệch (biased).
  - **C4.5**: cải tiến của ID3, phát triển bởi Ross Quinlan. Dùng được
    cho cả classification lẫn regression. Dùng gain ratio thay vì
    information gain để xử lý thiên lệch với thuộc tính nhiều giá trị.
    Giảm quá khớp, xử lý được dữ liệu thiếu.
  - **CART**: dùng được cho cả classification lẫn regression. Dùng Gini
    impurity cho cây phân loại và sai số bình phương trung bình cho cây
    hồi quy. Xử lý được tập dữ liệu lớn.
  <br><span class="en">**How to build a decision tree** (slides 8-12):
  (1) start from an empty tree, (2) split on the next best attribute, (3)
  recurse. Algorithms: **ID3**, **C4.5** (successor of ID3), **CART**,
  **CHAID**... ID3 is one of the core algorithms.
  - **ID3**: one of the earliest, simplest decision tree algorithms. Uses
    entropy and information gain to decide node splitting. Works well
    with categorical data but doesn't handle numerical data. May lead to
    overfitting and biased trees.
  - **C4.5**: an improvement over ID3, developed by Ross Quinlan. Usable
    for both classification and regression. Uses gain ratio instead of
    information gain to handle bias toward multi-valued attributes.
    Reduces overfitting, handles missing data.
  - **CART**: usable for both classification and regression. Uses Gini
    impurity for classification trees and MSE for regression trees.
    Handles large datasets.</span>
- **Đo độ thuần khiết của nút lá** (slide 13-16): 3 cách — **Sai số phân
  loại (Classification error)**: Em = 1 − max(pᵢ), với pᵢ là tỷ lệ quan
  sát thuộc lớp i trong nút; sai số càng thấp, nút càng thuần khiết.
  **Gini impurity**: Gini = Σpᵢ(1−pᵢ) = 1 − Σpᵢ²; Gini càng thấp, nút
  càng thuần khiết. **Entropy**: Entropy = −Σpᵢlog₂(pᵢ); entropy càng
  thấp, nút càng thuần khiết. Cả 3 minh họa bằng cùng 1 ví dụ: nút lá có
  16 quan sát lớp A, 13 lớp B, 1 lớp C.
  <br><span class="en">**Measuring leaf node purity** (slides 13-16): 3
  ways — **Classification error**: Em = 1 − max(pᵢ), pᵢ = proportion of
  class i in the node; lower error = more pure. **Gini impurity**: Gini =
  Σpᵢ(1−pᵢ) = 1 − Σpᵢ²; lower Gini = more pure. **Entropy**: Entropy =
  −Σpᵢlog₂(pᵢ); lower entropy = more pure. All 3 illustrated with the
  same example: a leaf node with 16 class-A, 13 class-B, 1 class-C
  observations.</span>
- **Quy tắc Entropy/Information gain** (slide 17-19): nhánh có entropy =
  0 là nút lá; nhánh có entropy > 0 cần tách tiếp; nếu không đạt entropy
  0 ở nút lá, quyết định theo đa số đơn giản (simple majority).
  **Information gain** = mức giảm entropy sau khi tách theo 1 thuộc tính
  — xây cây quyết định về bản chất là tìm thuộc tính cho information gain
  cao nhất. Lưu ý: nhiều bất định hơn = nhiều entropy hơn. **Khi nào
  dừng**: tất cả bản ghi trong tập con hiện tại có cùng đầu ra; hoặc tất
  cả bản ghi có cùng bộ thuộc tính đầu vào; hoặc đặt số quan sát tối
  thiểu mỗi nút lá; hoặc đặt độ sâu tối đa (đường dài nhất từ gốc tới lá).
  <br><span class="en">**Entropy/Information gain rules** (slides 17-19):
  a branch with entropy 0 is a leaf node; entropy > 0 needs further
  splitting; if zero entropy isn't achievable, decide by simple majority.
  **Information gain** = the decrease in entropy after splitting on an
  attribute — building a tree is essentially finding the attribute with
  highest information gain. Note: more uncertainty, more entropy! **When
  to stop**: all records in the current subset share the same output; or
  the same input attributes; or a minimum observations-per-leaf is set;
  or a maximum depth (longest root-to-leaf path) is set.</span>
- **Các bước chi tiết xây cây** (slide 20): (1) tính entropy cho toàn bộ
  tập dữ liệu, (2) với mỗi thuộc tính — tính entropy cho mọi giá trị định
  tính, lấy trung bình entropy thông tin cho thuộc tính hiện tại, tính
  gain cho thuộc tính hiện tại, (3) chọn thuộc tính có gain cao nhất, (4)
  lặp lại đến khi có cây mong muốn.
  <br><span class="en">**More detailed build steps** (slide 20): (1)
  compute entropy for the dataset, (2) for every attribute — calculate
  entropy for all categorical values, take average information entropy,
  calculate gain, (3) pick the highest-gain attribute, (4) repeat until
  the desired tree.</span>
- **Triển khai Python** (slide 22-26): ví dụ 4.1 (code cây quyết định cơ
  bản + trực quan hóa kết quả); ví dụ 4.2 (cây quyết định trên dữ liệu
  IRIS — kết quả + hình cây); ví dụ 4.3 (đoạn code Python khác cho cây
  quyết định trên IRIS).
  <br><span class="en">**Python implementation** (slides 22-26): example
  4.1 (basic decision tree code + result visualization); example 4.2
  (decision tree on IRIS data — results + tree diagram); example 4.3
  (another Python snippet for decision tree on IRIS).</span>

### 4.2 Rừng ngẫu nhiên (slide 27-32) - <span class="en">4.2 Random Forests (slides 27-32)</span>

- **Rừng ngẫu nhiên là gì** (slide 27): 1 thuật toán học tổ hợp (ensemble
  learning). Xây nhiều cây quyết định nhỏ, yếu, song song, rồi kết hợp
  chúng thành 1 bộ học mạnh duy nhất bằng cách lấy trung bình hoặc biểu
  quyết theo đa số. Có quan hệ trực tiếp giữa số cây trong rừng và kết
  quả đạt được: càng nhiều cây, kết quả càng chính xác. Trong Random
  Forest, quá trình tìm nút gốc và tách nút đặc trưng chạy ngẫu nhiên.
  <br><span class="en">**What is Random Forest** (slide 27): an ensemble
  learning algorithm. Builds many small, weak decision trees in parallel,
  then combines them into one strong learner by averaging or majority
  vote. Direct relationship between number of trees and result accuracy:
  more trees, more accurate. In Random Forest, finding the root node and
  splitting feature nodes runs randomly.</span>
- **Vì sao dùng Random Forest** (slide 29): đủ số cây trong rừng thì bộ
  phân loại không bị quá khớp; xử lý được giá trị thiếu; quan hệ trực
  tiếp số cây↔độ chính xác; mô hình hóa được cho giá trị định tính.
  <br><span class="en">**Why Random Forest** (slide 29): with enough
  trees, the classifier won't overfit; handles missing values; direct
  tree-count↔accuracy relationship; can be modeled for categorical
  values.</span>
- **Cách hoạt động** (slide 30-31), 2 giai đoạn: **Giai đoạn 1 (tạo rừng)**
  — chọn ngẫu nhiên k đặc trưng từ tổng m đặc trưng (k ≪ m); trong k đặc
  trưng, tính nút d dùng điểm tách tốt nhất; tách nút thành nút con dùng
  điểm tách tốt nhất; lặp lại bước 1-3 đến khi đạt số nút mong muốn; xây
  rừng bằng cách lặp lại bước 1-4 n lần để tạo n cây. **Giai đoạn 2 (dự
  đoán)** — lấy đặc trưng kiểm tra, dùng quy tắc của mỗi cây được tạo
  ngẫu nhiên để dự đoán kết quả và lưu lại; tính số phiếu cho mỗi kết quả
  dự đoán; lấy kết quả có phiếu cao nhất làm dự đoán cuối cùng.
  <br><span class="en">**How it works** (slides 30-31), 2 stages:
  **Stage 1 (forest creation)** — randomly select k features from total m
  features (k ≪ m); among k features, compute node d using the best split
  point; split into daughter nodes using the best split; repeat 1-3 until
  the desired number of nodes; build the forest by repeating 1-4 n times
  for n trees. **Stage 2 (prediction)** — take test features, use each
  randomly created tree's rules to predict and store the outcome;
  calculate votes for each predicted outcome; the highest-voted outcome
  is the final prediction.</span>
- **Triển khai Python** (slide 32): ví dụ code Random Forest.
  <br><span class="en">**Python implementation** (slide 32): a Random
  Forest code example.</span>
- **Bài tập nhóm** (slide 33): liệt kê thêm các mở rộng khác của cây
  quyết định (ngoài Random Forest); liệt kê càng nhiều càng tốt ứng dụng
  tiềm năng của thuật toán Classification trong kinh doanh/thực tế.
  <br><span class="en">**Group exercise** (slide 33): list other
  extensions of decision trees (besides Random Forest); list as many
  potential real-world/business applications of Classification as
  possible.</span>

## Liên kết - <span class="en">Links</span>

- [[decision-tree]] — trang khái niệm đầy đủ: purity measures, ID3/C4.5/
  CART.
  <br><span class="en">[[decision-tree]] — the full concept page: purity
  measures, ID3/C4.5/CART.</span>
- [[random-forest]] — trang khái niệm ensemble learning.
  <br><span class="en">[[random-forest]] — the ensemble learning concept
  page.</span>
- [[k-nearest-neighbors]] — thuật toán classification trước đó, đối
  chiếu lazy learning (KNN) vs eager learning (Decision Tree).
  <br><span class="en">[[k-nearest-neighbors]] — the previous
  classification algorithm, contrasting lazy learning (KNN) vs eager
  learning (Decision Tree).</span>
- [[overfitting-underfitting]] — pruning và số lượng cây trong Random
  Forest là 2 cơ chế kiểm soát quá khớp cụ thể ở chương này.
  <br><span class="en">[[overfitting-underfitting]] — pruning and the
  number of trees in Random Forest are 2 concrete overfitting-control
  mechanisms in this chapter.</span>
- [[classification]] — Decision Tree là 1 trong 5 thuật toán classification
  đã liệt kê ở Chapter 3.
  <br><span class="en">[[classification]] — Decision Tree is one of the 5
  classification algorithms listed in Chapter 3.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter04_DecisionTree_2025.pdf`,
slide 1-34.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter04_DecisionTree_2025.pdf`, slides 1-34.</span>
