---
type: source
title: "Chapter 4 (K32) - Học không giám sát: Phân cụm và Phân tích thành phần chính"
title_en: "Chapter 4 (K32) - Unsupervised Learning: Clustering and Principal Component Analysis"
tags: [chapter-4, k32, unsupervised-learning, clustering, k-means, hierarchical-clustering, dbscan, pca, dimension-reduction, pcr]
created: 2026-09-18
updated: 2026-09-18
status: complete
source_file: "raw/Lecture Notes/K32/Chapter04/VNP_DataScience_Unsupervised_Learning_2026.pdf"
---

## Metadata

- **Môn học**: Introduction to Data Science and Applications, University
  of Economics Ho Chi Minh City - Vietnam-Netherlands Programme.
  <br><span class="en">**Course**: Introduction to Data Science and
  Applications, University of Economics Ho Chi Minh City -
  Vietnam-Netherlands Programme.</span>
- **Khóa**: K32 (2026, khóa hiện tại).
  <br><span class="en">**Cohort**: K32 (2026, current cohort).</span>
- **Giảng viên**: [[tran-thi-tuan-anh]].
  <br><span class="en">**Instructor**: [[tran-thi-tuan-anh]].</span>
- **Số slide**: 86 (khớp đúng số trang vật lý của PDF; chân trang đánh số
  tới `86 / 86`). Siêu dữ liệu PDF: soạn bằng LaTeX lớp Beamer, ngày tạo
  2026-09-18 - tức bản phát ra đúng ngày ingest.
  <br><span class="en">**Slide count**: 86 (matches the PDF's physical
  page count; the footer numbers up to `86 / 86`). PDF metadata: authored
  in LaTeX with the Beamer class, created 2026-09-18 - released on the
  very day of this ingest.</span>
- **Vị trí trong môn**: đây là **chương thuật toán thứ hai** của K32 và
  là nửa còn lại của bức tranh học máy. Chapter 3 đã dạy trọn nhánh **có
  giám sát** (có nhãn `y`); chương này dạy trọn nhánh **không giám sát**
  (chỉ có `x`): phân cụm để giảm số **dòng**, và phân tích thành phần
  chính để giảm số **cột**. Ở khóa 2025, cùng khối nội dung này được chia
  làm **2 chương riêng biệt** (Clustering và PCA); khóa 2026 gộp lại
  thành 1 file duy nhất, thêm hẳn Part 3 về cách ghép PCA với các thuật
  toán khác và một danh sách đầy đủ các bẫy thực hành. **Theo quy tắc
  tách cụm khóa học** (CLAUDE.md, mục "Tách cụm K31/K32"), trang này
  không link tới bất kỳ trang nào của cụm K31 - mọi so sánh chỉ ghi bằng
  chữ thường.
  <br><span class="en">**Position in the course**: this is K32's **second
  algorithm chapter** and the other half of the machine learning picture.
  Chapter 3 covered the whole **supervised** branch (a label `y` exists);
  this one covers the whole **unsupervised** branch (`x` only):
  clustering to reduce the number of **rows**, and principal component
  analysis to reduce the number of **columns**. In the 2025 cohort the
  same material was split across **2 separate chapters** (Clustering and
  PCA); the 2026 cohort merges them into one file, adds an entire Part 3
  on combining PCA with other algorithms, and adds a full list of
  practical pitfalls. **Per the cohort separation rule** (CLAUDE.md),
  this page links to no K31 page - comparisons are stated in plain text
  only.</span>
- **Tên file không theo mẫu đánh số chương**: file tên
  `VNP_DataScience_Unsupervised_Learning_2026.pdf` (không chứa chuỗi
  `Chapter04`), nhưng người dùng đặt nó trong thư mục
  `raw/Lecture Notes/K32/Chapter04/` - nên wiki coi đây là Chapter 4 của
  K32. Đây là lần thứ hai liên tiếp tên file không mang số chương, giống
  trường hợp Chapter 3.
  <br><span class="en">**Filename does not follow the chapter-number
  pattern**: the file is `VNP_DataScience_Unsupervised_Learning_2026.pdf`
  (no `Chapter04` string), but the user placed it in
  `raw/Lecture Notes/K32/Chapter04/` - so this wiki treats it as K32's
  Chapter 4. This is the second chapter in a row whose filename carries
  no chapter number, exactly as with Chapter 3.</span>
- **File đi kèm trong cùng thư mục**: **7 file mã Python** trong
  `PythonCode/` (4 file K-Means, 3 file PCA) và **2 file ảnh** trong
  `Data/` (`Image1.jpg`, `Image2.jpg`). Đây là lần đầu tài liệu môn học
  dùng **ảnh** làm dữ liệu thực hành thay vì bảng số. Xem mục riêng bên
  dưới - trong đó có 2 script chứa lỗi thật.
  <br><span class="en">**Companion files in the same folder**: **7 Python
  scripts** in `PythonCode/` (4 K-Means, 3 PCA) and **2 image files** in
  `Data/` (`Image1.jpg`, `Image2.jpg`). This is the first time the course
  material uses **images** as practice data instead of numeric tables.
  See the dedicated section below - two of the scripts contain real
  bugs.</span>

## Tóm tắt - <span class="en">Summary</span>

Chương này trả lời một câu hỏi duy nhất: **làm gì khi dữ liệu không có
nhãn?** Toàn bộ 86 slide được tổ chức quanh hai công cụ mô tả, và một
cảnh báo được nhắc lại không dưới bốn lần.
<br><span class="en">This chapter answers a single question: **what do
you do when the data has no label?** All 86 slides are organised around
two descriptive tools, and one warning repeated at least four
times.</span>

**Hai công cụ, hai hướng giảm chiều.** Phân cụm nhóm các **quan sát**
giống nhau lại với nhau, tức giảm số dòng của bảng dữ liệu thành K nhóm;
phân tích thành phần chính (PCA) thay p **biến** tương quan bằng m thành
phần không tương quan, tức giảm số cột. Phân cụm làm việc trên một
**khoảng cách** `d(xi, xj)` và trả ra một nhãn cho mỗi quan sát; PCA làm
việc trên một **ma trận hiệp phương sai** `S` và trả ra một véc-tơ điểm
cho mỗi quan sát. Cả hai đều cần chuẩn hóa trước, và cả hai đều có một
tham số then chốt phải tự biện luận: K cho phân cụm, m cho PCA.
<br><span class="en">**Two tools, two directions of reduction.**
Clustering groups similar **observations**, reducing the table's rows into
K groups; principal component analysis (PCA) replaces p correlated
**variables** with m uncorrelated components, reducing its columns.
Clustering works on a **distance** `d(xi, xj)` and returns a label per
observation; PCA works on a **covariance matrix** `S` and returns a score
vector per observation. Both require standardisation first, and both have
one key parameter you must justify yourself: K for clustering, m for
PCA.</span>

**Cảnh báo xuyên suốt chương.** Slide 8 viết thẳng: K-Means **luôn luôn**
trả về K cụm và PCA **luôn luôn** trả về các thành phần, kể cả khi đầu vào
là nhiễu thuần túy. Thuật toán không bao giờ cho biết cấu trúc nó tìm ra
có thật hay không - người phân tích phải tự trả lời. Chính vì vậy chương
dành riêng slide 45 cho **danh sách 7 điều cần kiểm tra trước khi trình
bày** kết quả phân cụm, và kết lại ở slide 81 bằng một câu: cả hai công cụ
đều là công cụ **mô tả**, chúng sinh ra giả thuyết về cấu trúc chứ không
kiểm định giả thuyết đó.
<br><span class="en">**The warning that runs through the chapter.** Slide
8 says it outright: K-Means **always** returns K clusters and PCA
**always** returns components, even from pure noise. The algorithm never
tells you whether the structure it found is real - the analyst must. That
is why the chapter devotes slide 45 to a **7-point checklist to run
before presenting** a clustering, and closes on slide 81 with one
sentence: both tools are **descriptive**; they generate hypotheses about
structure, they do not test them.</span>

**Nội dung mới đáng chú ý của bản 2026.** So với tài liệu khóa 2025, bản
này bổ sung: hàm mục tiêu tường minh của K-Means kèm ghi chú bài toán là
NP-khó và Lloyd chỉ là thuật toán tìm cực tiểu địa phương (slide 22); cơ
chế khởi tạo **k-means++** với xác suất tỉ lệ `D(x)^2` (slide 24); mục
riêng về **DBSCAN** và **mô hình hỗn hợp Gauss (GMM)** kèm hướng dẫn chọn
phương pháp (slide 44); phân rã `TSS = WSS + BSS` (slide 16); đường đi
**SVD** thay cho việc lập ma trận hiệp phương sai (slide 62); trọn Part 3
về **ghép PCA với phân cụm, phân loại và hồi quy** (slide 75-79), trong đó
có **hồi quy thành phần chính (PCR)** và mục cảnh báo **rò rỉ dữ liệu**
kèm cách sửa bằng `Pipeline`; và một danh sách các **giải pháp thay thế**
khi PCA không đủ (Kernel PCA, t-SNE/UMAP, autoencoder, phân tích nhân tố,
Sparse PCA, Robust PCA) ở slide 73.
<br><span class="en">**Notable new material in the 2026 version.**
Compared with the 2025 material, this deck adds: K-Means' explicit
objective function with the note that the problem is NP-hard and Lloyd's
algorithm only finds a local optimum (slide 22); the **k-means++**
initialisation with probability proportional to `D(x)^2` (slide 24); a
dedicated section on **DBSCAN** and **Gaussian mixture models (GMM)**
with guidance on choosing between methods (slide 44); the
`TSS = WSS + BSS` decomposition (slide 16); the **SVD** route instead of
forming the covariance matrix (slide 62); the whole of Part 3 on
**combining PCA with clustering, classification and regression** (slides
75-79), including **principal component regression (PCR)** and a **data
leakage** warning with the `Pipeline` fix; and a list of **alternatives**
for when PCA is not enough (Kernel PCA, t-SNE/UMAP, autoencoders, factor
analysis, Sparse PCA, Robust PCA) on slide 73.</span>

**Phần thực hành.** Part 4 gồm bảng tổng kết một slide cho cả hai công cụ
(slide 81), **6 chủ đề thảo luận nhóm** (slide 82), **bài tập lớn** yêu
cầu replicate một mini project trên Kaggle với 4 hạng mục bắt buộc trong
báo cáo (slide 83), **5 ý tưởng đề tài dùng dữ liệu Việt Nam** từ GSO,
PCI, World Bank (slide 84), và danh mục đọc thêm lấy ISLR chương 12 làm
tài liệu tham chiếu chuẩn (slide 85). Slide 85 cũng ra một việc phải làm
trước buổi kế tiếp: chạy đoạn mã K-Means ở slide 30 trên dữ liệu
`make_blobs` và mang theo biểu đồ khuỷu tay.
<br><span class="en">**The practical part.** Part 4 holds the one-slide
summary of both tools (slide 81), **6 group discussion topics** (slide
82), the **assignment**: replicate one Kaggle mini project with 4
mandatory report items (slide 83), **5 project ideas using Vietnamese
data** from GSO, PCI and the World Bank (slide 84), and a further-reading
list that makes ISLR chapter 12 the standard reference (slide 85). Slide
85 also sets one task before the next session: run the slide-30 K-Means
code on the `make_blobs` data and bring your elbow plot.</span>

## Nội dung chính - <span class="en">Key content</span>

### Mở đầu: mục tiêu và lộ trình (slide 2-3) - <span class="en">Opening: outcomes and roadmap (slides 2-3)</span>

Slide 2 nêu 5 mục tiêu học tập: phân biệt học có giám sát với học không
giám sát và chọn đúng công cụ cho câu hỏi; tính và diễn giải các thước đo
khoảng cách; chạy và chẩn đoán K-Means cùng phân cụm thứ bậc, đồng thời
biện luận được số cụm; giải thích PCA cả về hình học và đại số, đọc được
biểu đồ sườn dốc và hệ số tải; và ghép PCA với phân cụm, phân loại hoặc
hồi quy mà không làm rò rỉ thông tin. Lộ trình 5 phần: Part 0 bối cảnh
học máy, Part 1 phân cụm, Part 2 PCA, Part 3 kết hợp PCA với thuật toán
khác, Part 4 thực hành và bài tập.
<br><span class="en">Slide 2 lists 5 learning outcomes: distinguish
supervised from unsupervised learning and pick the right tool for a
question; compute and interpret distance measures; run and diagnose
K-Means and hierarchical clustering while justifying the number of
clusters; explain PCA both geometrically and algebraically, and read a
scree plot and loadings; and chain PCA with clustering, classification or
regression without leaking information. The roadmap has 5 parts: Part 0
the machine learning landscape, Part 1 clustering, Part 2 PCA, Part 3
combining PCA with other algorithms, Part 4 practice and
assignments.</span>

### 0. Bối cảnh học máy (slide 5-9) - <span class="en">0. The Machine Learning Landscape (slides 5-9)</span>

**Sơ đồ định vị (slide 5).** Học máy chia làm 3 nhánh: **có giám sát** (dữ
liệu có cặp `(xi, yi)` - gồm hồi quy khi `y` là số và phân loại khi `y` là
biến hạng mục), **không giám sát** (chỉ có `xi` - gồm phân cụm với
K-Means/thứ bậc, và giảm chiều với PCA), **học tăng cường** (có tín hiệu
thưởng - học chính sách). Ý chính của slide: học có giám sát dự đoán một
đích đã biết, học không giám sát mô tả cấu trúc khi không có đích nào.
<br><span class="en">**The locating diagram (slide 5).** Machine learning
splits into 3 branches: **supervised** (data comes as pairs `(xi, yi)` -
regression when `y` is numeric, classification when `y` is categorical),
**unsupervised** (`xi` only - clustering with K-Means/hierarchical, and
dimension reduction with PCA), and **reinforcement learning** (a reward
signal - policy learning). The slide's key idea: supervised learning
predicts a known target, unsupervised learning describes structure when
no target exists.</span>

**Mốc so sánh có giám sát (slide 6).** Slide này nhắc lại trọn Chapter 3
trong một trang: dữ liệu là n cặp `(xi, yi)` với `xi` thuộc `R^p`; mục
tiêu là học `f` sao cho `f(x)` gần `y` trên dữ liệu mới; hàm mất mát là
MSE cho hồi quy hoặc tỉ lệ phân loại sai/entropy chéo cho phân loại; đánh
giá bằng tập tách riêng và kiểm định chéo. Ghi chú quan trọng ở cột phải:
PCA **rất thường** được dùng làm bước tiền xử lý cho chính các mô hình có
giám sát này (đó là nội dung Part 3), và kết quả phân cụm thường được biến
thành một **đặc trưng** cho chúng.
<br><span class="en">**The supervised benchmark (slide 6).** This slide
compresses all of Chapter 3 into one page: data is n pairs `(xi, yi)`
with `xi` in `R^p`; the goal is to learn `f` so that `f(x)` is close to
`y` on new data; the loss is MSE for regression or misclassification
rate/cross-entropy for classification; evaluation uses a hold-out set and
cross-validation. The important note in the right column: PCA is **very
often** used as a preprocessing step for exactly these supervised models
(that is Part 3), and clustering results are frequently turned into a
**feature** for them.</span>

**Cùng một đám điểm, hai câu hỏi (slide 7).** Hình minh họa đặt cạnh nhau:
bên trái màu của các điểm được cho trước, câu hỏi là "biên phân chia nằm ở
đâu?"; bên phải không có màu nào, câu hỏi là "liệu có nhóm nào không?".
Cùng một `x`, khác nhau ở chỗ màu là dữ kiện hay là thứ cần tìm.
<br><span class="en">**The same points, two questions (slide 7).** The
illustration puts them side by side: on the left the colours are given
and the question is "where is the boundary?"; on the right there are no
colours and the question is "are there groups at all?" The same `x`; what
differs is whether the colours are given or are what you are trying to
discover.</span>

**Bảng chọn giữa hai nhánh (slide 8).** Bảng 6 dòng: dữ liệu vào
(`(xi, yi)` so với chỉ `xi`); câu hỏi (dự đoán một lượng đã biết so với mô
tả cấu trúc chưa biết); chân lý nền (có so với không có); đánh giá (bên
ngoài và khách quan bằng sai số kiểm định chéo, so với bên trong và phần
nào chủ quan bằng hệ số silhouette, phương sai giải thích được, tính hữu
dụng); rủi ro chính (quá khớp so với tìm ra cấu trúc không tồn tại); ví dụ
trong môn (hồi quy, phân loại so với phân cụm, PCA). Slide này chứa lời
cảnh báo mạnh nhất của cả chương và được nhắc lại ở slide 25, 45, 76, 81.
<br><span class="en">**The choice table (slide 8).** Six rows: input data
(`(xi, yi)` versus `xi` only); question (predict a known quantity versus
describe unknown structure); ground truth (exists versus does not);
evaluation (external and objective via CV error, versus internal and
partly subjective via silhouette, variance explained, usefulness); main
risk (overfitting versus finding structure that is not there); course
examples (regression, classification versus clustering, PCA). This slide
carries the chapter's strongest warning, repeated on slides 25, 45, 76
and 81.</span>

**Ký hiệu dùng xuyên chương (slide 9).** Cần thuộc để đọc được công thức:
`n` số quan sát, `p` số biến, `xi` quan sát thứ i (véc-tơ trong `R^p`),
`xih` giá trị của biến h ở quan sát i, `X` ma trận dữ liệu `n x p`, `K` số
cụm, `Ck` tập chỉ số thuộc cụm k, `|Ck|` số quan sát trong cụm k, `mu_k`
tâm cụm (véc-tơ trung bình) của cụm k, `d(xi, xj)` khoảng cách giữa hai
điểm, `S` ma trận hiệp phương sai mẫu (`p x p`), `R` ma trận tương quan
mẫu, `lambda_m` trị riêng thứ m, `v_m` véc-tơ riêng thứ m (véc-tơ tải),
`Z` ma trận điểm thành phần chính, `m` số thành phần giữ lại. Slide 17 có
thêm một ghi chú chống nhầm lẫn rất hữu ích: **h đánh chỉ số biến**
(1..p), **k đánh chỉ số cụm** (1..K).
<br><span class="en">**Notation used throughout (slide 9).** Needed to
read the formulas: `n` observations, `p` variables, `xi` observation i (a
vector in `R^p`), `xih` the value of variable h for observation i, `X`
the `n x p` data matrix, `K` the number of clusters, `Ck` the index set
of cluster k, `|Ck|` its size, `mu_k` the centroid (mean vector) of
cluster k, `d(xi, xj)` the distance between two points, `S` the sample
covariance matrix (`p x p`), `R` the sample correlation matrix,
`lambda_m` the m-th eigenvalue, `v_m` the m-th eigenvector (loading
vector), `Z` the matrix of component scores, `m` the number of components
retained. Slide 17 adds a very useful anti-confusion note: **h indexes
variables** (1..p), **k indexes clusters** (1..K).</span>

### 1. Phân cụm (slide 11-45) - <span class="en">1. Clustering (slides 11-45)</span>

#### 1.1 Phân cụm là gì (slide 11-13) - <span class="en">1.1 What is clustering (slides 11-13)</span>

Phân cụm là việc tổ chức dữ liệu không nhãn thành các nhóm tương đồng gọi
là **cụm**; về hình thức là gán n quan sát vào K cụm `C1, ..., CK`. Một
cụm là tập các phần tử giống nhau và khác biệt với phần tử ở cụm khác. Một
phân hoạch hợp lệ phải thỏa hai điều kiện: **loại trừ lẫn nhau**
(`Ck` giao `Ck'` là tập rỗng khi k khác k' - không quan sát nào thuộc hai
cụm) và **đầy đủ** (hợp của mọi `Ck` bằng toàn bộ tập chỉ số - mọi quan
sát đều được gán).
<br><span class="en">Clustering is the organisation of unlabelled data
into similarity groups called **clusters**; formally, assigning the n
observations into K clusters `C1, ..., CK`. A cluster is a collection of
items similar to each other and dissimilar to items in other clusters. A
valid partition must satisfy two conditions: **mutual exclusivity** (`Ck`
intersect `Ck'` is empty for k not equal k' - no observation belongs to
two clusters) and **exhaustiveness** (the union of all `Ck` is the whole
index set - every observation is assigned).</span>

Slide 12 nêu điểm khác biệt cốt lõi so với phân loại bằng một câu: phân
loại là có giám sát, **các lớp tồn tại trước khi phân tích**; phân cụm là
không giám sát, **các nhóm chỉ tồn tại sau khi phân tích - và chúng có thể
chỉ là sản phẩm phụ của thuật toán**.
<br><span class="en">Slide 12 states the core difference from
classification in one sentence: classification is supervised, **the
classes exist before the analysis**; clustering is unsupervised, **the
groups only exist after it - and they may be an artefact**.</span>

Slide 13 liệt kê 4 thứ cần có để phân cụm: một **thước đo gần gũi** (độ
tương đồng `S(xi, xj)` lớn khi hai điểm giống nhau, hoặc độ bất tương đồng
tức khoảng cách `d(xi, xj)` nhỏ khi hai điểm giống nhau); một **hàm tiêu
chí** để cho điểm một phương án phân cụm (ví dụ tổng bình phương trong
cụm); một **thuật toán** để tìm phương án tốt theo tiêu chí đó; và một
**quy tắc quyết định K**. Ý chính: đổi khoảng cách là đổi luôn kết quả
phân cụm - thước đo gần gũi là một **lựa chọn mô hình hóa**, không phải
chi tiết kỹ thuật.
<br><span class="en">Slide 13 lists the 4 things clustering needs: a
**proximity measure** (similarity `S(xi, xj)`, large when two points are
alike, or dissimilarity i.e. distance `d(xi, xj)`, small when they are
alike); a **criterion function** to score a candidate clustering (e.g.
the within-cluster sum of squares); an **algorithm** to search for a good
clustering under that criterion; and a **decision rule for K**. Key idea:
change the distance and you change the clusters - the proximity measure
is a **modelling choice**, not a technical detail.</span>

#### 1.2 Thước đo khoảng cách (slide 14-19) - <span class="en">1.2 Distance measures (slides 14-19)</span>

**Ba khoảng cách và bảng chọn theo loại dữ liệu (slide 14).** Khoảng cách
Euclid (chuẩn L2, đường thẳng) là căn bậc hai của tổng bình phương hiệu
từng biến; khoảng cách Manhattan (chuẩn L1, đi theo ô phố) là tổng trị
tuyệt đối của hiệu. Cả hai là trường hợp riêng của khoảng cách Minkowski
bậc q: `q = 1` cho Manhattan, `q = 2` cho Euclid, `q` tiến tới vô cùng cho
Chebyshev (khoảng hở lớn nhất theo một tọa độ). Bảng chọn: dữ liệu liên
tục dùng Euclid; nhiều điểm ngoại lai dùng Manhattan; văn bản dùng cosin;
dữ liệu nhị phân dùng Jaccard hoặc Hamming; dữ liệu trộn nhiều loại dùng
Gower; biến tương quan mạnh dùng Mahalanobis.
<br><span class="en">**Three distances and a data-type table (slide
14).** Euclidean distance (L2, straight line) is the square root of the
summed squared differences; Manhattan distance (L1, city block) is the
sum of absolute differences. Both are special cases of the Minkowski
distance of order q: `q = 1` gives Manhattan, `q = 2` Euclidean, and `q`
to infinity gives Chebyshev (the largest single-coordinate gap). The
table: continuous data uses Euclidean; outlier-heavy data Manhattan;
text/documents cosine; binary data Jaccard or Hamming; mixed types
Gower; strongly correlated variables Mahalanobis.</span>

**Lỗi phổ biến nhất: quên chuẩn hóa (slide 15).** Slide dựng một ví dụ số
rất sắc. Hai khách hàng mô tả bằng thu nhập tháng (triệu đồng) và số lần
ghé cửa hàng: A có (20, 2), B có (22, 14). Tính theo đơn vị gốc, khoảng
cách Euclid bằng căn của `2^2 + 12^2`, tức 12.17 - số lần ghé chi phối.
Chỉ cần đổi thu nhập sang đơn vị đồng (20.000.000 so với 22.000.000),
khoảng cách nhảy lên xấp xỉ 2.000.000 và **số lần ghé trở nên vô hình**.
Sau khi chuẩn hóa mỗi biến theo `x' = (x - trung bình) / độ lệch chuẩn`,
mỗi biến góp mặt trên cùng một thang đo, nên kết quả phản ánh **dạng hình
của dữ liệu** chứ không phản ánh **đơn vị đo**. Quy tắc in đậm: mọi phương
pháp dựa trên khoảng cách (K-Means, phân cụm thứ bậc, KNN, SVM) đều **bắt
buộc** chuẩn hóa đầu vào, trừ khi mọi biến đã cùng một đơn vị có nghĩa.
<br><span class="en">**The single most common mistake: forgetting to
standardise (slide 15).** The slide builds a very sharp numerical
example. Two customers described by monthly income (VND million) and
number of visits: A is (20, 2), B is (22, 14). In the original units the
Euclidean distance is the root of `2^2 + 12^2`, i.e. 12.17 - visits
dominate. Merely switching income to VND (20,000,000 versus 22,000,000)
sends the distance to roughly 2,000,000 and **makes visits invisible**.
After standardising each variable via `x' = (x - mean) / sd`, every
variable contributes on a common scale, so the result reflects the
**pattern** in the data rather than the **measurement unit**. The rule in
bold: any distance-based method (K-Means, hierarchical, KNN, SVM)
**requires** standardised inputs unless all variables already share a
meaningful unit.</span>

**Đánh giá một phương án phân cụm (slide 16).** Hai tiêu chí đối nhau:
**độ chặt trong cụm** (các điểm trong cùng cụm có gần tâm cụm không, đo
bằng tổng bình phương sai số trong cụm - WCSS hoặc SSE) và **độ tách giữa
các cụm** (các tâm cụm có xa nhau không, đo bằng tổng bình phương giữa các
cụm). Một phương án tốt vừa chặt vừa tách rời, và có một đẳng thức khóa
chặt hai tiêu chí này với nhau: `TSS = WSS + BSS`, trong đó TSS là hằng số
không phụ thuộc cách phân cụm. Hệ quả: **giảm WSS đồng nghĩa tăng BSS** -
hai mục tiêu chỉ là một.
<br><span class="en">**Evaluating a clustering (slide 16).** Two opposed
criteria: **intra-cluster cohesion** (are points in the same cluster
close to their centroid, measured by the within-cluster sum of squared
errors - WCSS or SSE) and **inter-cluster separation** (are the
centroids far apart, measured by the between-cluster sum of squares). A
good clustering is both compact and well separated, and one identity ties
the two together: `TSS = WSS + BSS`, where TSS is a constant independent
of the partition. Consequence: **reducing WSS is the same thing as
increasing BSS** - the two goals are one.</span>

**Biến động trong cụm W(Ck) (slide 17).** Slide đưa hai công thức và nói
rõ chúng tương đương. Định nghĩa theo cặp: `W(Ck)` là trung bình bình
phương khoảng cách giữa **mọi cặp điểm** trong cụm, chia cho `|Ck|`. Dạng
theo tâm cụm (rẻ hơn nhiều khi tính, và **đây chính là thứ K-Means tối
ưu**): `W(Ck)` bằng 2 lần tổng bình phương khoảng cách từ mỗi điểm tới tâm
cụm `mu_k`, với `mu_k` là trung bình của các điểm trong cụm. Việc hai dạng
tương đương là lý do K-Means chỉ cần giữ K tâm cụm chứ không cần ma trận
khoảng cách `n x n`.
<br><span class="en">**Within-cluster variation W(Ck) (slide 17).** The
slide gives two formulas and states that they are equivalent. The
pairwise definition: `W(Ck)` is the summed squared distance between
**every pair** of points in the cluster, divided by `|Ck|`. The centroid
form (far cheaper to compute, and **this is what K-Means actually
optimises**): `W(Ck)` equals twice the summed squared distance from each
point to the centroid `mu_k`, where `mu_k` is the mean of the cluster's
points. Their equivalence is why K-Means only needs to hold K centroids
rather than an `n x n` distance matrix.</span>

Slide 18-19 là một **ví dụ tính tay** khoảng cách kèm lời giải, trình bày
dạng hình ảnh trong slide.
<br><span class="en">Slides 18-19 are a **hand-worked example** of
distance computation with its solution, presented as images in the
deck.</span>

#### 1.3 Bao nhiêu cụm (slide 20-21) - <span class="en">1.3 How many clusters (slides 20-21)</span>

**Hai triết lý (slide 20).** Nhóm (a) **ấn định K trước**: các phương pháp
phân hoạch gồm K-Means, K-Medoids, mô hình hỗn hợp Gauss - nhanh, mở rộng
tốt với n lớn, nhưng buộc phải biện luận K. Nhóm (b) **không ấn định K**:
phương pháp thứ bậc dựng luôn cả họ lồng nhau cho mọi K; phương pháp theo
mật độ (DBSCAN) suy ra số cụm từ dữ liệu; bạn chọn K **sau khi** đã thấy
cấu trúc.
<br><span class="en">**Two philosophies (slide 20).** Group (a) **fix K
in advance**: partitional methods - K-Means, K-Medoids, Gaussian
mixtures - fast, scaling well with large n, but you must justify K.
Group (b) **do not fix K**: hierarchical methods build the whole nested
family for every K at once; density methods (DBSCAN) infer the number
from the data; you choose K **after** seeing the structure.</span>

**Phương pháp khuỷu tay (slide 21).** `WCSS(K)` là tổng bình phương
khoảng cách từ mỗi điểm tới tâm cụm của nó, tính trên cả K cụm. Tính chất
quyết định cách dùng: WCSS **luôn giảm** khi K tăng, và tại `K = n` nó
bằng 0 - nên **không thể cực tiểu hóa WCSS** để chọn K. Thay vào đó tìm
**khuỷu tay**: điểm mà sau đó thêm cụm không mua thêm được bao nhiêu độ
chặt. Ví dụ trên slide có dãy WCSS 285, 149, 50 rồi chỉ còn 50, 39, 29 -
lợi ích cận biên sụp hẳn sau `K = 3`. Cảnh báo kèm theo: khuỷu tay là
**heuristic thị giác**; một đường cong trơn tru nghĩa là không có khuỷu
tay, và rất có thể **không có cấu trúc cụm thật**.
<br><span class="en">**The elbow method (slide 21).** `WCSS(K)` is the
summed squared distance from each point to its centroid, over all K
clusters. The property that decides how it is used: WCSS **always falls**
as K rises, and at `K = n` it is zero - so you **cannot minimise WCSS**
to choose K. Instead look for the **elbow**: the point after which extra
clusters buy little extra compactness. The slide's example runs 285, 149,
50 and then only 50, 39, 29 - the marginal gain collapses after `K = 3`.
The attached warning: the elbow is a **visual heuristic**; a smooth curve
means there is no elbow, and probably **no real cluster
structure**.</span>

#### 1.4 K-Means (slide 22-31) - <span class="en">1.4 K-Means (slides 22-31)</span>

**Hàm mục tiêu, rồi mới đến thuật toán (slide 22).** Đây là điểm mới đáng
giá nhất của bản 2026 ở phần phân cụm: slide viết rõ K-Means **đang giải
bài toán gì** trước khi mô tả nó làm thế nào. Bài toán: tìm phân hoạch
`C1, ..., CK` cực tiểu hóa tổng bình phương khoảng cách từ mỗi điểm tới
tâm cụm của nó. Bài toán này **NP-khó** trong trường hợp tổng quát, nên
thực tế dùng một heuristic lặp (thuật toán Lloyd): (1) khởi tạo K tâm cụm;
(2) lặp tới khi hội tụ, gồm **bước gán** (tính khoảng cách từ mỗi điểm tới
K tâm cụm, gán vào tâm gần nhất) và **bước cập nhật** (dịch mỗi tâm cụm về
trung bình của các điểm thuộc nó); (3) dừng khi không còn thay đổi gán,
hoặc mức giảm WCSS nhỏ hơn ngưỡng. Bảo đảm toán học: mỗi bước chỉ có thể
làm WCSS giảm, nên thuật toán **luôn hội tụ** - nhưng về một **cực tiểu
địa phương**, không nhất thiết là toàn cục.
<br><span class="en">**The objective first, the algorithm second (slide
22).** This is the most valuable new item in the 2026 clustering section:
the slide states **what problem K-Means solves** before describing how.
The problem: find the partition `C1, ..., CK` minimising the summed
squared distance from each point to its centroid. That problem is
**NP-hard** in general, so in practice an iterative heuristic is used
(Lloyd's algorithm): (1) initialise K centres; (2) iterate to
convergence, alternating the **assignment step** (compute each point's
distance to the K centroids, assign it to the nearest) and the **update
step** (move each centroid to the mean of its members); (3) stop when no
assignment changes, or the WCSS change falls below a tolerance. The
mathematical guarantee: each step can only decrease WCSS, so the
algorithm **always converges** - but to a **local optimum**, not
necessarily the global one.</span>

**Một lượt chạy bằng hình (slide 23).** Ba bảng: khởi tạo (đặt K tâm, ngẫu
nhiên hoặc bằng k-means++), gán (mỗi điểm nhận màu của tâm gần nhất), cập
nhật (tâm dịch về trung bình các thành viên). Bước 2 và 3 lặp lại tới khi
không điểm nào đổi màu.
<br><span class="en">**One pass, illustrated (slide 23).** Three panels:
initialise (place K centres, random or via k-means++), assign (each point
takes the colour of its nearest centre), update (centres move to the mean
of their members). Steps 2 and 3 repeat until no point changes
colour.</span>

**Khởi tạo có ý nghĩa: k-means++ (slide 24).** Vấn đề của khởi tạo ngẫu
nhiên: hai tâm ban đầu rơi vào cùng một cụm thật có thể giam thuật toán ở
một cực tiểu địa phương tệ - và **người dùng không thể biết**, vì thuật
toán vẫn hội tụ bình thường. Thuật toán k-means++ (Arthur và
Vassilvitskii, 2007; nay là mặc định trong `scikit-learn`): (1) chọn tâm
đầu tiên ngẫu nhiên đều từ dữ liệu; (2) chọn mỗi tâm tiếp theo với xác
suất tỉ lệ `D(x)^2`, trong đó `D(x)` là khoảng cách từ x tới tâm gần nhất
đã chọn; (3) lặp tới khi có K tâm, rồi chạy K-Means chuẩn. Quy tắc thực
hành: rải các tâm ban đầu ra xa nhau, và **luôn chạy lại nhiều lần**
(`n_init`), giữ phương án có WCSS thấp nhất.
<br><span class="en">**Initialisation matters: k-means++ (slide 24).**
The problem with random initialisation: two starting centres inside the
same true cluster can trap the algorithm in a poor local optimum - and
**you would never know**, because it still converges. The k-means++
algorithm (Arthur and Vassilvitskii, 2007; now the `scikit-learn`
default): (1) pick the first centre uniformly at random from the data;
(2) pick each subsequent centre with probability proportional to
`D(x)^2`, where `D(x)` is the distance from x to the nearest centre
already chosen; (3) repeat until K centres are chosen, then run standard
K-Means. The practical rule: spread the initial centres out, and **always
restart several times** (`n_init`), keeping the solution with the lowest
WCSS.</span>

**Điểm mạnh và giới hạn (slide 25).** Mạnh: đơn giản, dễ giải thích cho
người không chuyên kỹ thuật; nhanh, xấp xỉ `O(n K p I)` mỗi lần chạy; mở
rộng tốt với n lớn (biến thể mini-batch còn xa hơn); tâm cụm **đọc được
trực tiếp** như hồ sơ "điển hình" của từng nhóm. Giới hạn: phải chọn K
trước; chỉ tìm được cụm **hình cầu và kích thước tương đương** - nó sẽ
chẻ một cụm dài ra và gộp hai cụm mảnh lại; nhạy với thang đo và với điểm
ngoại lai (trung bình không bền vững - dùng K-Medoids/PAM thay thế); hội
tụ về cực tiểu địa phương nên kết quả phụ thuộc khởi tạo; giả định mọi
biến là số và khoảng cách Euclid có nghĩa. Ý chính: K-Means **không kiểm
định xem cụm có tồn tại** - nó **áp đặt** K cụm hình cầu lên bất cứ thứ gì
được đưa vào.
<br><span class="en">**Strengths and limitations (slide 25).** Strengths:
simple and easy to explain to non-technical stakeholders; fast, roughly
`O(n K p I)` per run; scales to large n (mini-batch variants scale
further); centroids are **directly interpretable** as each group's
"typical" profile. Limitations: K must be chosen first; it only finds
**spherical, similarly-sized** clusters - it will split one elongated
cluster and merge two thin ones; it is sensitive to scale and to outliers
(means are not robust - use K-Medoids/PAM instead); it converges to a
local optimum so results depend on initialisation; and it assumes all
variables are numeric and Euclidean distance is meaningful. Key idea:
K-Means **does not test whether clusters exist** - it **imposes** K
spherical clusters on whatever you give it.</span>

Slide 26-29 là phần minh họa và thực hành tương tác: một ví dụ hình ảnh
(nguồn ACTEX), các vòng lặp trên một bộ dữ liệu thật, một ứng dụng nhỏ, và
hai trang web để tự thử - trang mô phỏng K-Means của Đại học METU và trang
"Visualising K-Means Clustering" của Naftali Harris, trang thứ hai cho
phép **tự chọn cách khởi tạo và xem thuật toán thất bại**.
<br><span class="en">Slides 26-29 are illustration and interactive
practice: an image example (source: ACTEX), the iterations on a real data
set, a small application, and two websites to try yourself - METU's
K-Means simulator and Naftali Harris' "Visualising K-Means Clustering",
the second of which lets you **choose the initialisation and watch the
algorithm fail**.</span>

**Mã Python mẫu (slide 30-31).** Đoạn mã dùng API `scikit-learn` hiện
hành và **đã bao gồm chẩn đoán**, khác với các file `.py` đi kèm chương:
tạo dữ liệu bằng `make_blobs` với 300 điểm và 3 tâm, **chuẩn hóa ngay**
bằng `StandardScaler` (chú thích trong mã viết hoa: ALWAYS scale first),
quét `k` từ 1 tới 8 với `init="k-means++"`, `n_init=20`, `max_iter=300`,
`tol=1e-4`, thu `inertia_` vào danh sách WCSS và `silhouette_score` vào
danh sách silhouette (chỉ từ `k = 2`), chọn `best_k` bằng vị trí cực đại
của silhouette (cộng 2 vì silhouette bắt đầu từ `k = 2`), rồi khớp lại và
vẽ. Ghi chú cuối slide: từ `scikit-learn` phiên bản 1.4 trở đi, `n_init`
mặc định là `"auto"`, nên phải **đặt tường minh** để kết quả tái lập
được.
<br><span class="en">**The Python example (slides 30-31).** The code uses
the current `scikit-learn` API and **already includes the diagnostics**,
unlike the `.py` files shipped with the chapter: generate data with
`make_blobs` (300 points, 3 centres), **standardise immediately** with
`StandardScaler` (the in-code comment shouts ALWAYS scale first), sweep
`k` from 1 to 8 with `init="k-means++"`, `n_init=20`, `max_iter=300`,
`tol=1e-4`, collecting `inertia_` into a WCSS list and `silhouette_score`
into a silhouette list (only from `k = 2`), pick `best_k` as the
silhouette argmax (plus 2, since silhouette starts at `k = 2`), then
refit and plot. The closing note: from `scikit-learn` 1.4 onwards
`n_init` defaults to `"auto"`, so you must **set it explicitly** for
reproducible results.</span>

#### 1.5 Ứng dụng của K-Means (slide 32-33) - <span class="en">1.5 Applications of K-Means (slides 32-33)</span>

**Hậu cần - tối ưu chuỗi cung ứng khách sạn (slide 32).** Một chuỗi cung
ứng khách sạn có 618 địa điểm được phục vụ bởi 5 tới 30 nhà cung cấp. Phân
cụm các địa điểm theo địa lý và theo nhu cầu sẽ **định nghĩa các vùng giao
hàng**, và mỗi tâm cụm trở thành một **ứng viên đặt kho**. Thuật toán dùng
dữ liệu thời gian thực để tìm mạng vận tải có chi phí thực thấp nhất.
<br><span class="en">**Logistics - hotel supply chain optimisation (slide
32).** A hotel supply chain with 618 locations served by 5 to 30
suppliers. Clustering the locations by geography and demand **defines
delivery zones**, and each centroid becomes a **candidate depot**. The
algorithm uses real-time data to find the transport network with the
lowest real cost.</span>

**Nông nghiệp - chẩn đoán bệnh trên lá nho (slide 33).** Mỗi điểm ảnh là
một quan sát, mô tả bằng các kênh màu của nó (ví dụ trong không gian màu
L\*a\*b\*). K-Means phân vùng ảnh lá thành các miền: mô lành, vết bệnh,
nền. Vùng vết bệnh trích ra được **đưa tiếp cho một mô hình phân loại có
giám sát** để xác định bệnh cụ thể. Giá trị của bước không giám sát: nó
loại bỏ nhu cầu **gán nhãn tay từng điểm ảnh**. Đây chính là mô hình dùng
chung với script giảm màu ảnh đi kèm chương (`Example3.7_KMeans_
ReduceColors.py`), chỉ khác mục đích cuối.
<br><span class="en">**Agriculture - diagnosis of grape leaf diseases
(slide 33).** Each pixel is an observation described by its colour
channels (for example in L\*a\*b\* space). K-Means segments the leaf
image into regions: healthy tissue, lesion, background. The extracted
lesion region is then **passed to a supervised classifier** to identify
the specific disease. The value of the unsupervised step: it removes the
need to **hand-label every pixel**. This is the same pattern as the
colour-reduction script shipped with the chapter
(`Example3.7_KMeans_ReduceColors.py`), only with a different end
purpose.</span>

#### 1.6 Phân cụm thứ bậc (slide 34-40) - <span class="en">1.6 Hierarchical clustering (slides 34-40)</span>

**Vì sao cần một phương án khác K-Means (slide 34).** Ba lý do: K-Means
đòi số cụm ngay từ đầu; kết quả phụ thuộc K tâm khởi tạo vốn là ngẫu
nhiên; và trong rất nhiều tình huống **không rõ cần bao nhiêu cụm**. Suy
ra phân cụm thứ bậc phù hợp hơn: nó sinh ra **mọi giá trị K trong một lần
chạy**, kết quả trình bày dưới dạng **sơ đồ cây (dendrogram)** - cây các
lần gộp lồng nhau - và ta đọc số cụm bằng cách **cắt cây ở một độ cao**.
Đánh đổi là chi phí: `O(n^2)` bộ nhớ và `O(n^2 log n)` thời gian, nên
không khả thi khi vượt vài chục nghìn điểm.
<br><span class="en">**Why an alternative to K-Means is needed (slide
34).** Three reasons: K-Means demands the number of clusters up front;
its result depends on the K initial centroids, which are random; and in
many situations **it is not clear how many clusters are needed**. Hence
hierarchical clustering is more suitable: it produces **every value of K
in one run**, the result is displayed as a **dendrogram** - a tree of
nested merges - and you read off the number of clusters by **cutting the
tree at a chosen height**. The trade-off is cost: `O(n^2)` memory and
`O(n^2 log n)` time, so it is impractical beyond a few tens of thousands
of points.</span>

**Thuật toán gộp dần (slide 35).** Bắt đầu bằng cách coi mỗi quan sát là
một cụm riêng (n cụm); lặp hai bước: (1) tìm hai cụm gần nhau nhất, (2)
gộp chúng thành một; tiếp tục tới khi mọi quan sát nằm trong một cụm. Hai
hướng: **gộp dần** (từ dưới lên, cách chuẩn) và **chia dần** (từ trên
xuống, ít dùng vì đắt hơn). Ghi chú then chốt: **các lần gộp là không thể
đảo lại**. Một điểm bị xếp sai nhánh từ sớm sẽ không bao giờ chuyển đi
được - khác với K-Means, vốn gán lại toàn bộ mỗi vòng lặp.
<br><span class="en">**The agglomerative algorithm (slide 35).** Start by
treating each observation as its own cluster (n clusters); repeat two
steps: (1) identify the two closest clusters, (2) merge them; continue
until all observations are in one cluster. Two directions:
**agglomerative** (bottom-up, the standard) and **divisive** (top-down,
rarely used because it is more expensive). The key note: **merges are
irreversible**. A point placed in the wrong branch early can never move -
unlike K-Means, which reassigns everything every iteration.</span>

**Liên kết: đo khoảng cách giữa hai cụm thế nào (slide 36).** Ba cách
minh họa bằng hình - **đơn** (cặp gần nhất), **đầy đủ** (cặp xa nhất),
**trung bình** (trung bình mọi cặp) - và một bảng 4 dòng về hành vi cùng
điều phải đề phòng: liên kết **đơn** tìm ra các hình dài, xâu chuỗi, cần
đề phòng hiện tượng "xâu chuỗi" khi một điểm cầu nối gộp hai nhóm vốn
riêng biệt; liên kết **đầy đủ** cho cụm chặt và kích thước khá đều, nhưng
làm vỡ những cụm thực sự dài; liên kết **trung bình** là dung hòa nhưng
hình học khó diễn giải hơn; liên kết **Ward** gộp sao cho mức tăng WCSS là
nhỏ nhất, yêu cầu khoảng cách Euclid, và là **mặc định thường dùng**.
<br><span class="en">**Linkage: how to measure the distance between two
clusters (slide 36).** Three illustrated options - **single** (nearest
pair), **complete** (farthest pair), **average** (mean of all pairs) -
and a 4-row table of behaviour and what to watch for: **single** linkage
finds long, chained shapes and must be watched for "chaining", where one
bridge point merges two genuinely separate groups; **complete** gives
compact, roughly equal-sized clusters but breaks up genuinely elongated
ones; **average** is a compromise with less interpretable geometry; and
**Ward** merges so as to minimise the increase in WCSS, requires
Euclidean distance, and is the **usual default**.</span>

Slide 37-38 là **ví dụ tính tay** dựng sơ đồ cây bằng liên kết đầy đủ,
kèm các lần gộp liên tiếp.
<br><span class="en">Slides 37-38 are a **hand-worked example** building
a dendrogram with complete linkage, showing the successive
merges.</span>

**Đọc và cắt sơ đồ cây (slide 39).** Bốn điều phải biết: chiều cao của
một thanh ngang là **khoảng cách tại đó hai cụm được gộp**; một nhát cắt
ngang tại độ cao h cho ra một phương án phân cụm, và **số đường dọc mà
nhát cắt đi qua chính là K**; ví dụ cắt ở 3.3 cho {A, B, C} và {D, E},
cắt ở 2.0 cho {A, B}, {C}, {D, E}; và nên tìm một **khoảng trống dọc
lớn** - một cú nhảy lớn về chiều cao gộp nghĩa là hai nhánh thật sự cách
xa nhau. Cảnh báo kèm theo: **không được đọc quá nhiều vào thứ tự ngang**.
Cây có thể bị lật tại bất kỳ nút nào, nên vị trí gần nhau theo trục đáy
**không mang ý nghĩa gì**.
<br><span class="en">**Reading and cutting a dendrogram (slide 39).**
Four things to know: the height of a horizontal bar is **the distance at
which those two clusters merged**; a horizontal cut at height h gives one
clustering, and **the number of vertical lines it crosses is K**; for
example cutting at 3.3 gives {A, B, C} and {D, E}, cutting at 2.0 gives
{A, B}, {C}, {D, E}; and you should look for a **tall vertical gap** - a
large jump in merge height means the two branches are genuinely far
apart. The attached warning: **do not over-read the horizontal order**.
The tree can be flipped at any node, so proximity along the bottom axis
**is not meaningful**.</span>

#### 1.7 K-Means so với phân cụm thứ bậc (slide 41) - <span class="en">1.7 K-Means versus hierarchical clustering (slide 41)</span>

Bảng so sánh 8 dòng, là slide cần thuộc nhất của Part 1:
<br><span class="en">An 8-row comparison table, the single most
memorisable slide in Part 1:</span>

| Tiêu chí | K-Means | Thứ bậc |
|---|---|---|
| Số cụm | Ấn định trước | Quyết định sau, bằng cách cắt cây |
| Đầu ra | Một phân hoạch phẳng | Một cây lồng nhau đầy đủ |
| Tái lập được? | Không - phụ thuộc khởi tạo | Có - tất định |
| Độ phức tạp | Xấp xỉ `O(nKpI)`, mở rộng tốt | `O(n^2)` bộ nhớ; kém khi vượt 10-50 nghìn điểm |
| Gán lại | Điểm có thể chuyển cụm giữa các vòng lặp | Các lần gộp không đảo lại được |
| Hình dạng cụm | Cầu, kích thước tương đương | Tùy vào liên kết |
| Điểm ngoại lai | Làm lệch tâm cụm | Thường bị tách thành nhánh đơn lẻ |
| Phù hợp nhất | n lớn, đã biết K | n nhỏ, đang khám phá cấu trúc |

#### 1.8 Ứng dụng khác của phân cụm (slide 42-43) - <span class="en">1.8 Other applications of clustering (slides 42-43)</span>

Bảy ứng dụng: **phân khúc khách hàng** theo RFM (độ mới, tần suất, giá trị
tiền) để nhắm chiến dịch - đây là ứng dụng thương mại phổ biến nhất;
**phát hiện tin giả** từ nội dung, bằng cách phân cụm bài báo theo véc-tơ
từ rồi soi cụm nào chứa nguồn không đáng tin; **marketing và bán hàng**,
tìm những người có đặc điểm giống nhóm đã phản hồi một chiến dịch trước;
**phân tích tài liệu**, tổ chức kho tài liệu lớn thành chủ đề mà không cần
có sẵn hệ thống phân loại; **phát hiện bất thường và gian lận**, các điểm
nằm xa mọi tâm cụm hoặc nằm trong cụm rất nhỏ đáng được xem lại lần hai;
**kinh tế vùng**, nhóm các tỉnh theo chỉ số kinh tế xã hội để thiết kế
chính sách phân biệt; và **xây dựng danh mục đầu tư**, phân cụm tài sản
theo tương quan lợi suất để đa dạng hóa thật sự giữa các nhóm khác biệt.
<br><span class="en">Seven applications: **customer segmentation** by RFM
(recency, frequency, monetary value) to target campaigns - the most
common commercial use; **identifying fake news** from content, by
clustering articles by their word vectors and inspecting which clusters
carry unreliable sources; **marketing and sales**, finding people who
share characteristics with those who responded to a past campaign;
**document analysis**, organising large collections into topics without a
taxonomy; **anomaly and fraud detection**, where points far from every
centroid or inside very small clusters deserve a second look; **regional
economics**, grouping provinces by socio-economic indicators to design
differentiated policy; and **portfolio construction**, clustering assets
by return correlation to diversify across genuinely distinct
groups.</span>

#### 1.9 Ngoài K-Means và thứ bậc (slide 44) - <span class="en">1.9 Beyond K-Means and hierarchical (slide 44)</span>

**DBSCAN - theo mật độ.** Hai tham số: `epsilon` (bán kính lân cận) và
`minPts`. Một cụm là một **miền dày**; các điểm nằm trong miền thưa được
gán nhãn **nhiễu**. Nó **tự tìm ra K**, xử lý được hình dạng bất kỳ (hình
lưỡi liềm, hình vành khuyên), nhưng gặp khó khi các cụm có mật độ rất khác
nhau.
<br><span class="en">**DBSCAN - density-based.** Two parameters:
`epsilon` (neighbourhood radius) and `minPts`. A cluster is a **dense
region**; points in sparse regions are labelled **noise**. It **finds K
by itself** and handles arbitrary shapes (crescents, rings), but
struggles when clusters have very different densities.</span>

**Mô hình hỗn hợp Gauss (GMM).** Mô hình hóa dữ liệu như một hỗn hợp K
phân phối Gauss, khớp bằng thuật toán EM. **Gán mềm**: mỗi điểm nhận một
xác suất `P(cụm k | x)` thay vì một nhãn cứng. Cho phép cụm **hình ê-líp,
kích thước khác nhau** - K-Means chính là trường hợp riêng với ma trận
hiệp phương sai cầu và bằng nhau. K có thể chọn bằng BIC hoặc AIC, tức một
**tiêu chí chọn mô hình thật sự**, chứ không phải một heuristic thị giác
như khuỷu tay.
<br><span class="en">**Gaussian mixture models (GMM).** Models the data
as a mixture of K Gaussians, fitted by the EM algorithm. **Soft
assignment**: each point receives a probability `P(cluster k | x)` rather
than a hard label. It allows **elliptical, differently-sized** clusters -
K-Means is the special case with spherical, equal covariance. K can be
chosen by BIC or AIC, i.e. a **genuine model-selection criterion** rather
than a visual heuristic like the elbow.</span>

**Cách chọn giữa 4 phương pháp** (câu kết của slide): khối cầu và n lớn
thì dùng K-Means; hình dạng lạ hoặc có nhiễu dự kiến thì dùng DBSCAN; các
nhóm chồng lấn và muốn có xác suất thì dùng GMM; n nhỏ và muốn **nhìn**
thấy cấu trúc thì dùng thứ bậc.
<br><span class="en">**How to choose among the 4 methods** (the slide's
closing line): spherical blobs and large n go to K-Means; odd shapes or
expected noise go to DBSCAN; overlapping groups where you want
probabilities go to GMM; small n where you want to **see** the structure
goes to hierarchical.</span>

#### 1.10 Bẫy phân cụm - danh sách 7 điều kiểm tra (slide 45) - <span class="en">1.10 Clustering pitfalls - the 7-point checklist (slide 45)</span>

Slide này là bản kiểm kê phải chạy qua **trước khi trình bày** kết quả
phân cụm, và là slide có giá trị thực hành cao nhất của cả chương:
<br><span class="en">This slide is the checklist to run **before
presenting** a clustering, and is the most practically valuable slide in
the chapter:</span>

1. **Đã chuẩn hóa chưa?** Biến không chuẩn hóa để biến có phương sai lớn
   nhất quyết định tất cả.
   <br><span class="en">**Did you standardise?** Unscaled variables let
   the largest-variance one decide everything.</span>
2. **Đã biện luận K chưa?** Đưa ra biểu đồ khuỷu tay và hệ số silhouette,
   không phải một con số lấy từ trên trời.
   <br><span class="en">**Did you justify K?** Show the elbow and the
   silhouette, not a number pulled from the air.</span>
3. **Các cụm có bền vững không?** Chạy lại trên mẫu bootstrap hoặc với
   hạt giống ngẫu nhiên khác. Nếu các phân khúc đổi hoàn toàn thì chúng
   không thật.
   <br><span class="en">**Are the clusters stable?** Re-run on bootstrap
   samples or a different seed. If the segments change completely, they
   are not real.</span>
4. **Dữ liệu ngẫu nhiên có cho ra bức tranh tương tự không?** K-Means
   phân hoạch nhiễu đều một cách vui vẻ. Thống kê khoảng trống (gap
   statistic) kiểm định đúng điều này.
   <br><span class="en">**Would random data give the same picture?**
   K-Means partitions uniform noise happily. The gap statistic tests
   exactly this.</span>
5. **Khoảng cách có phù hợp không?** Khoảng cách Euclid trên các biến giả
   hạng mục thường vô nghĩa - hãy dùng Gower hoặc K-Modes.
   <br><span class="en">**Is the distance appropriate?** Euclidean on
   categorical dummies is usually meaningless - use Gower or
   K-Modes.</span>
6. **Điểm ngoại lai có chi phối kết quả không?** Kiểm tra xem có cụm tí
   hon chỉ gồm một hai điểm không.
   <br><span class="en">**Did outliers drive the result?** Check for tiny
   clusters of one or two points.</span>
7. **Có đặt được tên cho từng cụm không?** Lập hồ sơ các tâm cụm trên các
   biến gốc. Một phân khúc không kể được thành câu chuyện thì khó mà hành
   động được.
   <br><span class="en">**Can you name each cluster?** Profile the
   centroids on the original variables. A segment with no interpretable
   story is unlikely to be actionable.</span>

Ý chính của slide: **một phương án phân cụm là một giả thuyết, không phải
một phát hiện.** Hãy báo cáo nó kèm những chẩn đoán làm cho nó đáng tin.
<br><span class="en">The slide's key idea: **a clustering is a
hypothesis, not a finding.** Report it with the diagnostics that make it
credible.</span>

### 2. Phân tích thành phần chính (slide 47-73) - <span class="en">2. Principal Component Analysis (slides 47-73)</span>

#### 2.1 PCA là gì (slide 47-53) - <span class="en">2.1 What is PCA (slides 47-53)</span>

**Định nghĩa và mục tiêu (slide 47).** PCA do Pearson (1901) và Hotelling
(1933) đề xuất, tới nay vẫn là phương pháp đa biến được dùng rộng rãi
nhất. Ý tưởng: tóm tắt dữ liệu có p biến (p thường lớn) bằng một tập nhỏ
hơn gồm m biến tổng hợp, với m nhỏ hơn p rất nhiều. p biến gốc là p chiều;
m biến tổng hợp là các **thành phần chính**. Mỗi thành phần là một **tổ
hợp tuyến tính** của các biến gốc, dạng
`z_i1 = v_11 x_i1 + v_21 x_i2 + ... + v_p1 x_ip`. Mục tiêu: giảm chiều mà
không mất nhiều thông tin - và cách làm là dựng các thành phần sao cho
chúng **giữ lại càng nhiều phương sai càng tốt**. Ý chính của slide: PCA
coi **phương sai là đại diện cho thông tin**; giả định đó vừa là sức mạnh
lớn nhất vừa là giới hạn chính của phương pháp.
<br><span class="en">**Definition and goal (slide 47).** PCA was invented
by Pearson (1901) and Hotelling (1933) and is still the most widely used
multivariate method. The idea: summarise data with p variables (p often
large) by a smaller set of m composite variables, with m much smaller
than p. The p original variables are p dimensions; the m composites are
the **principal components**. Each component is a **linear combination**
of the original variables:
`z_i1 = v_11 x_i1 + v_21 x_i2 + ... + v_p1 x_ip`. The goal: reduce
dimensionality without much loss of information - achieved by building
the components so that they **capture as much variance as possible**. The
slide's key idea: PCA treats **variance as a proxy for information**;
that assumption is both its greatest strength and its main
limitation.</span>

**PCA dùng để làm gì (slide 48).** Công dụng cổ điển: giảm số chiều; tìm
mẫu hình trong dữ liệu nhiều chiều; trực quan hóa dữ liệu nhiều chiều
xuống 2-3 chiều; loại bỏ đa cộng tuyến trước khi hồi quy; nén ảnh và tín
hiệu; khử nhiễu. Công dụng trong kinh tế và tài chính: **xây dựng chỉ số
tổng hợp** (năng lực cạnh tranh, địa vị kinh tế xã hội, phát triển tài
chính) từ nhiều chỉ tiêu tương quan; trích **các nhân tố chung của đường
cong lợi suất** (mức, độ dốc, độ cong); dựng **nhân tố rủi ro** từ các
bảng lớn lợi suất tài sản; và tóm tắt các **bộ câu hỏi khảo sát** thành
vài cấu trúc tiềm ẩn. Ghi chú phân biệt quan trọng: PCA là một **phép biến
đổi mô tả** giải thích **toàn bộ** phương sai; **phân tích nhân tố** là
một **mô hình thống kê** giải thích phần phương sai **chung** và giả định
tồn tại các nhân tố tiềm ẩn. Hai phương pháp thường cho câu trả lời gần
nhau, nhưng chúng **trả lời hai câu hỏi khác nhau**.
<br><span class="en">**What PCA is used for (slide 48).** Classic uses:
reduce dimensions; find patterns in high-dimensional data; visualise
high-dimensional data in 2-3 dimensions; remove multicollinearity before
regression; compress images and signals; de-noise data. Uses in economics
and finance: **building composite indices** (competitiveness,
socio-economic status, financial development) from many correlated
indicators; extracting **common yield-curve factors** (level, slope,
curvature); constructing **risk factors** from large panels of asset
returns; and summarising **survey batteries** into a few latent
constructs. An important distinction: PCA is a **descriptive
transformation** explaining **total** variance; **factor analysis** is a
**statistical model** explaining **shared (common)** variance that
assumes latent factors exist. They often give similar answers, but they
**answer different questions**.</span>

**Ý tưởng qua một ví dụ đơn giản (slide 49-51).** Xét 100 sinh viên với
điểm Vật lý và điểm Thống kê. Câu hỏi ở slide 49: **điểm nào phân biệt
sinh viên tốt hơn?** Nếu một môn có độ phân tán lớn hơn nhiều, dùng chính
môn đó là đủ. Slide 50 đổi hình: bây giờ đám điểm nghiêng, câu hỏi thành
**cách tốt nhất để so sánh sinh viên là gì?** Slide 51 trả lời: hướng biến
động lớn nhất là một **đường nghiêng** - không trục nào một mình bắt được
nó - nên phải lấy một **tổ hợp tuyến tính** của hai điểm số để có bản tóm
tắt một chiều tốt nhất.
<br><span class="en">**The idea through a simple example (slides
49-51).** Take 100 students with Physics and Statistics grades. The
question on slide 49: **which grade discriminates between students
better?** If one subject has far more spread, that subject alone
suffices. Slide 50 changes the picture: now the cloud is slanted, and the
question becomes **what is the best way to compare the students now?**
Slide 51 answers: the direction of maximum variation is a **slanted
line** - neither axis alone captures it - so you must take a **linear
combination** of the two grades to get the best single summary.</span>

**Quay hệ trục (slide 52).** Các thành phần chính là các véc-tơ đơn vị dọc
theo hệ trục mới: **PC1 chỉ theo hướng phân tán lớn nhất**; **PC2 là
hướng phân tán lớn nhất còn lại, với ràng buộc vuông góc với PC1**. Điểm
cần nhớ: ta **chỉ đang quay trục** - **không mất thông tin nào cho tới khi
bỏ bớt một thành phần**. Với dữ liệu trên slide: PC1 có hướng
`(0.73, 0.69)`, trị riêng 2.098, chiếm 94.4% phương sai; PC2 có hướng
`(-0.69, 0.73)`, trị riêng 0.125, chiếm 5.6%. Kết luận: **một con số cho
mỗi sinh viên giữ lại 94% biến động**.
<br><span class="en">**Rotating the coordinate system (slide 52).** The
principal components are unit vectors along the new axes: **PC1 points in
the direction of maximum spread**; **PC2 is the direction of maximum
remaining spread, constrained to be perpendicular to PC1**. The thing to
remember: you are **only rotating the axes** - **no information is lost
until a component is dropped**. For the slide's data: PC1 has direction
`(0.73, 0.69)`, eigenvalue 2.098, 94.4% of the variance; PC2 has
direction `(-0.69, 0.73)`, eigenvalue 0.125, 5.6%. The conclusion: **one
number per student retains 94% of the variation**.</span>

#### 2.2 Chọn các thành phần chính (slide 54-62) - <span class="en">2.2 Choosing the principal components (slides 54-62)</span>

**Mọi thứ bắt đầu từ hiệp phương sai (slide 54).** Hiệp phương sai mẫu
giữa hai biến là tổng các tích `(Xi - X trung bình)(Yi - Y trung bình)`
chia cho `n - 1`. Nó đo **đồng biến động tuyến tính**: bằng 0 là không có
liên hệ tuyến tính, dương là cùng chiều, âm là ngược chiều. Cảnh báo quan
trọng: **hiệp phương sai không phải tương quan**. Độ lớn của nó phụ thuộc
đơn vị đo của X và Y, nên **không so sánh được giữa các cặp biến**. Tương
quan `r = cov(X, Y) / (sX sY)` là phiên bản không đơn vị, bị chặn trong
`[-1, 1]`. **Đây chính là lý do PCA trên dữ liệu đã chuẩn hóa (tức PCA
trên ma trận tương quan) thường được ưa dùng.**
<br><span class="en">**Everything starts from the covariance (slide
54).** The sample covariance between two variables is the sum of
`(Xi - Xbar)(Yi - Ybar)` divided by `n - 1`. It measures **linear
co-movement**: zero means no linear association, positive means they move
together, negative means opposite directions. The important warning:
**covariance is not correlation**. Its size depends on the units of X and
Y, so it **cannot be compared across variable pairs**. The correlation
`r = cov(X, Y) / (sX sY)` is the unit-free version, bounded in
`[-1, 1]`. **This is exactly why PCA on standardised data (i.e. on the
correlation matrix) is usually preferred.**</span>

**Trường hợp tổng quát p chiều (slide 56).** Mục tiêu của PCA là quay hệ
trục của không gian p chiều về các vị trí mới (các **trục chính**) sao
cho: trục chính 1 có phương sai cao nhất; trục chính 2 có phương sai cao
kế tiếp; ... và trục thứ p có phương sai thấp nhất; đồng thời **hiệp
phương sai giữa mọi cặp trục chính bằng 0** - các trục chính không tương
quan với nhau. Lấy m thành phần đầu tiên sẽ xác định **siêu phẳng m chiều
khớp tốt nhất** với dữ liệu. Slide trình bày hai cách phát biểu cùng một
mục tiêu và nhấn mạnh chúng tương đương: **cực đại hóa phương sai**
(`max v' S v` với `||v|| = 1`) hoặc **cực tiểu hóa sai số tái tạo** (tổng
bình phương khoảng cách giữa `xi` và hình chiếu `Vm Vm' xi`). **Cả hai đều
được giải bởi cùng các véc-tơ riêng của S.**
<br><span class="en">**The general p-dimensional case (slide 56).** PCA's
objective is to rotate the axes of the p-dimensional space to new
positions (the **principal axes**) such that: principal axis 1 has the
highest variance; axis 2 the next highest; ... and axis p the lowest; and
**the covariance between every pair of principal axes is zero** - the
principal axes are uncorrelated. Taking the first m components defines
the **m-dimensional hyperplane of best fit** to the data. The slide gives
two statements of the same objective and stresses their equivalence:
**maximise variance** (`max v' S v` subject to `||v|| = 1`) or **minimise
reconstruction error** (the summed squared distance between `xi` and its
projection `Vm Vm' xi`). **Both are solved by the same eigenvectors of
S.**</span>

**Ma trận hiệp phương sai (slide 57).** Để mô tả liên hệ giữa 2 biến ta
dùng hiệp phương sai; để mô tả liên hệ giữa p biến (p lớn hơn 2) ta dùng
**ma trận hiệp phương sai S**, với phần tử `(i, j)` là `cov(xi, xj)`. Ba
tính chất phải nhớ: S **đối xứng** (`cov(x, y) = cov(y, x)`) và **nửa xác
định dương**; **đường chéo chứa các phương sai**, và **vết của S (tổng
đường chéo) là tổng phương sai** của dữ liệu; và trong đại số tuyến tính,
**trị riêng cùng véc-tơ riêng của S cho ta các thành phần chính**. Vì S
đối xứng nên các trị riêng của nó là số thực và các véc-tơ riêng có thể
chọn vuông góc từng đôi - **đúng bằng tính chất "các trục không tương
quan" mà ta yêu cầu**.
<br><span class="en">**The covariance matrix (slide 57).** To describe
the association between 2 variables we use the covariance; for p
variables (p greater than 2) we use the **covariance matrix S**, whose
`(i, j)` entry is `cov(xi, xj)`. Three properties to remember: S is
**symmetric** (`cov(x, y) = cov(y, x)`) and **positive semi-definite**;
**its diagonal holds the variances**, and **its trace (the diagonal sum)
is the total variance** in the data; and in linear algebra, **the
eigenvalues and eigenvectors of S give us the principal components**.
Because S is symmetric its eigenvalues are real and its eigenvectors can
be chosen mutually orthogonal - **exactly the "uncorrelated axes"
property we asked for**.</span>

**Trị riêng và véc-tơ riêng (slide 58).** Cho ma trận hiệp phương sai A:
nghiệm của phương trình `det(A - lambda I) = 0` là các **trị riêng** của
A; giải `(A - lambda_m I) v = 0` cho từng `lambda_m` sẽ ra **véc-tơ
riêng** `v_m` tương ứng; tổng đường chéo của A là **vết**, đại diện tổng
phương sai trong dữ liệu; các trị riêng sắp giảm dần
`lambda_1 >= lambda_2 >= ... >= lambda_p` **chính là phương sai của điểm
trên từng trục chính**; và **tổng các trị riêng bằng vết**. Dạng ma trận:
`A = V Λ V'`, trong đó V chứa các véc-tơ riêng theo cột và Λ là ma trận
chéo các trị riêng; điểm thành phần khi đó là `Z = Xc V` với `Xc` là dữ
liệu đã trừ trung bình.
<br><span class="en">**Eigenvalues and eigenvectors (slide 58).** Given
the covariance matrix A: the solutions of `det(A - lambda I) = 0` are
A's **eigenvalues**; solving `(A - lambda_m I) v = 0` for each
`lambda_m` gives the corresponding **eigenvector** `v_m`; the diagonal
sum of A is the **trace**, representing total variance in the data; the
eigenvalues in decreasing order
`lambda_1 >= lambda_2 >= ... >= lambda_p` **are the variances of the
scores on each principal axis**; and **the eigenvalues sum to the
trace**. In matrix form `A = V Λ V'`, where V holds the eigenvectors in
its columns and Λ is the diagonal matrix of eigenvalues; the component
scores are then `Z = Xc V`, with `Xc` the centred data.</span>

**Diễn giải từng thành phần (slide 59).** Mỗi véc-tơ riêng chứa p giá trị
- các **hệ số tải** - biểu diễn mức đóng góp của từng biến gốc vào trục
chính đó. Trị riêng thứ m là **phương sai được trục thứ m giải thích**, và
tỉ lệ giải thích được là `EVR_m = lambda_m / tổng các lambda_j`. Tổng m
trị riêng đầu tiên là phương sai mà bản tóm tắt m chiều giải thích được.
Slide đưa **4 câu trả lời chuẩn cho câu hỏi giữ bao nhiêu thành phần**:
(1) **quy tắc Kaiser** - trên dữ liệu đã chuẩn hóa, giữ các thành phần có
`lambda_m > 1`, vì chúng giải thích nhiều hơn một biến gốc đơn lẻ; (2)
**biểu đồ sườn dốc (scree plot)** - giữ các thành phần trước "khuỷu tay";
(3) **phương sai lũy tích** - giữ đủ số thành phần để đạt một mức mục
tiêu, ví dụ 80% hoặc 90%; (4) **kiểm định chéo** - nếu PCA làm đầu vào cho
một mô hình dự đoán, chọn m cực tiểu hóa sai số kiểm định.
<br><span class="en">**Interpreting the pieces (slide 59).** Each
eigenvector contains p values - the **loadings** - representing each
original variable's contribution to that principal axis. The m-th
eigenvalue is **the variance explained by the m-th axis**, and the
proportion explained is `EVR_m = lambda_m / sum of lambda_j`. The sum of
the first m eigenvalues is the variance explained by the m-dimensional
summary. The slide gives **4 standard answers to how many components to
keep**: (1) **Kaiser's rule** - on standardised data, keep components
with `lambda_m > 1`, since they explain more than a single original
variable would; (2) the **scree plot** - keep the components before the
"elbow"; (3) **cumulative variance** - keep enough to reach a target,
e.g. 80% or 90%; (4) **cross-validation** - if PCA feeds a predictive
model, choose the m that minimises validation error.</span>

**Đọc biểu đồ sườn dốc (slide 60).** Ví dụ minh họa dùng 8 chỉ tiêu kinh
tế xã hội tương quan, `n = 200`, đã chuẩn hóa. Bảng trị riêng: PC1 là
4.281 (53.5%), PC2 là 2.029 (25.4%, lũy tích 78.9%), PC3 tụt xuống 0.474
(5.9%), rồi 0.310, 0.276, 0.236, 0.229, 0.165. **Cả ba quy tắc đều đồng ý
ở đây**: giữ 2 thành phần, giữ lại 78.9% phương sai trong khi giảm chiều
từ 8 xuống 2. Đây là ví dụ mẫu mực - trong thực tế ba quy tắc thường
**không** đồng ý, và khi đó việc chọn m trở thành một quyết định phải biện
luận.
<br><span class="en">**Reading a scree plot (slide 60).** The worked
example uses 8 correlated socio-economic indicators, `n = 200`,
standardised. The eigenvalue table: PC1 is 4.281 (53.5%), PC2 is 2.029
(25.4%, cumulative 78.9%), PC3 drops to 0.474 (5.9%), then 0.310, 0.276,
0.236, 0.229, 0.165. **All three rules agree here**: keep 2 components,
retaining 78.9% of the variance while cutting the dimension from 8 to 2.
This is a model example - in practice the three rules often **disagree**,
and then choosing m becomes a decision that must be justified.</span>

**Diễn giải hệ số tải - chỗ kinh tế học quay lại (slide 61).** Bảng hệ số
tải cho cùng ví dụ 8 chỉ tiêu (PCA trên ma trận tương quan): PC1 (53.5%)
có toàn bộ hệ số tải **dương và gần bằng nhau** (GRDP đầu người 0.37, sản
lượng công nghiệp 0.36, vốn FDI 0.39, mật độ doanh nghiệp 0.28, số năm đi
học 0.35, tỉ lệ biết chữ 0.35, chi cho y tế 0.39, tiếp cận internet
0.33) - đây là một **nhân tố quy mô hay phát triển chung**: tỉnh nào làm
tốt mọi mặt thì điểm cao, nên dùng nó làm **chỉ số phát triển tổng hợp**.
PC2 (25.4%) có các hệ số tải kinh tế **âm** và các hệ số tải xã hội
**dương** (mật độ doanh nghiệp -0.48, GRDP đầu người -0.35, FDI -0.26 so
với số năm đi học +0.40, tỉ lệ biết chữ +0.38, y tế +0.29) - đây là một
**nhân tố tương phản**, tách các tỉnh mạnh về kinh tế nhưng yếu về xã hội
ra khỏi các tỉnh ngược lại. Cảnh báo về dấu: **dấu của véc-tơ riêng là
tùy ý**; phần mềm có thể trả về `-v1`, ý nghĩa không đổi, nhưng nên **đổi
dấu cho dễ đọc trước khi báo cáo**.
<br><span class="en">**Interpreting loadings - where the economics comes
back in (slide 61).** The loadings table for the same 8-indicator example
(correlation-matrix PCA): PC1 (53.5%) has all loadings **positive and
similar** (GRDP per capita 0.37, industrial output 0.36, FDI inflow 0.39,
firm density 0.28, schooling years 0.35, literacy rate 0.35, health
spending 0.39, internet access 0.33) - a **size or general development
factor**: provinces score high when they do well on everything, so use it
as a **composite development index**. PC2 (25.4%) has **negative**
economic loadings and **positive** social ones (firm density -0.48, GRDP
per capita -0.35, FDI -0.26 versus schooling +0.40, literacy +0.38,
health +0.29) - a **contrast factor** separating provinces that are
economically strong but socially lagging from the reverse. The sign
warning: **eigenvector signs are arbitrary**; software may return `-v1`,
the interpretation is unchanged, but **flip signs for readability before
reporting**.</span>

**Đường đi tương đương: phân tích giá trị kỳ dị (slide 62).** Trong thực
tế phần mềm **không lập ma trận hiệp phương sai**. Nó áp dụng SVD trực
tiếp lên ma trận dữ liệu đã trừ trung bình `Xc` (`n x p`):
`Xc = U D V'`, trong đó các cột của **V** là các véc-tơ tải (véc-tơ riêng
của `Xc' Xc`), **UD** là ma trận điểm thành phần chính Z, và
`D = diag(d1, ..., dp)` là các **giá trị kỳ dị**, liên hệ với trị riêng
qua `lambda_m = d_m^2 / (n - 1)`. Vì sao điều này quan trọng: SVD **ổn
định hơn về số học** (nó không bao giờ bình phương dữ liệu), nó **hoạt
động được khi p lớn hơn n**, và nó chính là thứ mà
`sklearn.decomposition.PCA` cùng hàm `prcomp()` của R dùng bên dưới. Biết
điều này giải thích luôn vì sao `prcomp()` được ưa dùng hơn hàm
`princomp()` cũ.
<br><span class="en">**An equivalent route: the singular value
decomposition (slide 62).** In practice software **does not form the
covariance matrix**. It applies the SVD directly to the centred data
matrix `Xc` (`n x p`): `Xc = U D V'`, where the columns of **V** are the
loading vectors (eigenvectors of `Xc' Xc`), **UD** is the matrix of
principal component scores Z, and `D = diag(d1, ..., dp)` holds the
**singular values**, related to the eigenvalues by
`lambda_m = d_m^2 / (n - 1)`. Why it matters: the SVD is **numerically
more stable** (it never squares the data), it **works when p is greater
than n**, and it is what `sklearn.decomposition.PCA` and R's `prcomp()`
use underneath. Knowing this also explains why `prcomp()` is preferred to
the older `princomp()`.</span>

#### 2.3 Quy trình 7 bước và vì sao bước 2 không tùy chọn (slide 63-64) - <span class="en">2.3 The 7-step workflow and why step 2 is not optional (slides 63-64)</span>

**Bảy bước (slide 63).** (1) Lấy dữ liệu - `X` kích thước `n x p`; (2)
**chuẩn hóa** (hoặc ít nhất là trừ trung bình) các biến, ra `Xc`; (3)
tính ma trận hiệp phương sai `S` hoặc ma trận tương quan `R`, kích thước
`p x p`; (4) tính trị riêng và véc-tơ riêng của nó (bằng phép phân rã
riêng hoặc SVD, ra `Λ` và `V`); (5) **chọn số thành phần giữ lại** (bằng
biểu đồ sườn dốc, quy tắc Kaiser); (6) chiếu dữ liệu `Z = Xc Vm`, ra ma
trận `n x m`; (7) **diễn giải hệ số tải và báo cáo**. Lưu ý là bước 7 -
diễn giải - nằm trong quy trình chứ không phải việc làm thêm.
<br><span class="en">**The seven steps (slide 63).** (1) Get the data -
`X`, `n x p`; (2) **standardise** (or at least centre) the variables,
giving `Xc`; (3) compute the covariance matrix `S` or the correlation
matrix `R`, `p x p`; (4) compute its eigenvalues and eigenvectors (by
eigendecomposition or SVD, giving `Λ` and `V`); (5) **choose how many
components to keep** (scree plot, Kaiser's rule); (6) project the data
`Z = Xc Vm`, giving an `n x m` matrix; (7) **interpret the loadings and
report**. Note that step 7 - interpretation - is inside the workflow, not
an optional extra.</span>

**Vì sao bước 2 không tùy chọn (slide 64).** Dùng hiệp phương sai chỉ có
nghĩa khi **mọi biến cùng một đơn vị đo**. Và kể cả khi đó, các biến có
phương sai lớn vẫn sẽ **chi phối** các thành phần - một biến đo bằng đồng
sẽ nhấn chìm một biến đo bằng năm. Cách tránh: chuẩn hóa từng biến về
trung bình 0 và phương sai 1 qua `X' = (X - trung bình) / độ lệch chuẩn`.
Sau chuẩn hóa, mọi biến có phương sai 1 nên các hiệp phương sai **trở
thành các tương quan**: **PCA trên dữ liệu chuẩn hóa = PCA trên ma trận
tương quan R**. Hệ quả rất đáng nhớ: `vết(R) = p`, nên **trị riêng trung
bình đúng bằng 1** - và **đó chính là nguồn gốc của quy tắc Kaiser**. Khi
**không** nên chuẩn hóa: nếu mọi biến cùng một đơn vị có nghĩa và chênh
lệch phương sai giữa chúng **tự thân đã là thông tin** - ví dụ lợi suất
của các tài sản cùng một loại tiền, hoặc cường độ điểm ảnh trên cùng một
thang đo.
<br><span class="en">**Why step 2 is not optional (slide 64).** Using
covariances only makes sense if **all variables share the same unit**.
And even then, variables with large variances will **dominate** the
components - a variable in VND will swamp one in years. The fix:
standardise each variable to zero mean and unit variance via
`X' = (X - mean) / sd`. After standardisation every variable has variance
1, so the covariances **become correlations**: **PCA on standardised data
= PCA on the correlation matrix R**. A very memorable consequence:
`trace(R) = p`, so **the average eigenvalue is exactly 1** - and **that
is where Kaiser's rule comes from**. When **not** to standardise: if all
variables share a meaningful common unit and the differences in variance
are **themselves informative** - e.g. returns on assets in the same
currency, or pixel intensities on a common scale.</span>

#### 2.4 Ứng dụng của PCA (slide 65-70) - <span class="en">2.4 Applications of PCA (slides 65-70)</span>

**Nhận dạng mặt người (slide 65-66).** Đây là ứng dụng PCA cổ điển, chủ
yếu để **giảm số biến**. Xét trường hợp 2 chiều: một ảnh đầu vào được so
với một cơ sở dữ liệu ảnh để tìm ảnh khớp nhất, với giả định các ảnh cùng
độ phân giải và được đóng khung tương đương. Vì **mỗi điểm ảnh là một
biến**, một ảnh khiêm tốn `100 x 100` đã cho `p = 10.000` chiều. PCA nén
xuống vài trăm **"mặt riêng" (eigenfaces)**, và việc so khớp được làm
trong không gian nhỏ đó. Ghi chú lịch sử: phương pháp eigenface (Turk và
Pentland, 1991) là tân tiến nhất trong suốt một thập kỷ; hệ thống hiện đại
dùng mạng nơ-ron tích chập sâu, nhưng eigenface vẫn là minh họa rõ nhất
cho **vì sao giảm chiều hoạt động được**: các điểm ảnh kề nhau gần như
tương quan hoàn hảo, nên **số chiều thật thấp hơn p rất nhiều**. Slide 66
nhấn lại: PCA đặc biệt giá trị khi **ít mẫu mà nhiều biến** (p lớn hơn n
rất nhiều).
<br><span class="en">**Face recognition (slides 65-66).** The classic PCA
application, primarily to **reduce the number of variables**. Consider
the 2-D case: an input image is compared with a database of images to
find the best match, assuming the images share resolution and framing.
Because **each pixel is a variable**, a modest `100 x 100` image already
gives `p = 10,000` dimensions. PCA compresses this to a few hundred
**eigenfaces**, and matching happens in that small space. Historical
note: the eigenface method (Turk and Pentland, 1991) was state of the art
for a decade; modern systems use deep convolutional networks, but
eigenfaces remain the clearest illustration of **why dimension reduction
works**: adjacent pixels are almost perfectly correlated, so **the true
dimensionality is far below p**. Slide 66 repeats the point: PCA is
especially valuable when there are **few samples and many variables** (p
much greater than n).</span>

**Chữ số viết tay (slide 67).** Chiếu ảnh chữ số 784 chiều xuống 2 thành
phần chính **đã tách được một số lớp chữ số một cách trực quan** - minh
họa công dụng trực quan hóa.
<br><span class="en">**Handwritten digits (slide 67).** Projecting
784-dimensional digit images onto 2 PCs **already separates several digit
classes visually** - illustrating the visualisation use.</span>

**Khử nhiễu (slide 68).** Giảm chiều bằng cách giữ lại các thành phần
mang nhiều biến động nhất, giữ phần quan trọng, bỏ phần còn lại, rồi tái
tạo. Lý do nó hoạt động: **nhiễu bị dàn mỏng trên toàn bộ các thành phần,
còn tín hiệu tập trung ở vài thành phần đầu** - nên bỏ phần đuôi loại được
tỉ lệ nhiễu nhiều hơn tỉ lệ tín hiệu.
<br><span class="en">**De-noising (slide 68).** Reduce the dimensionality
by keeping the components that carry the most variation, keep the
important ones, discard the rest, then reconstruct. Why it works:
**noise is spread thinly across all components while signal concentrates
in the first few** - so dropping the tail removes proportionally more
noise than signal.</span>

**Nén ảnh - quy trình 5 bước và tỉ số nén (slide 69-70).** Quy trình: (1)
chuyển ảnh 2 chiều thành một ma trận (dòng là điểm ảnh, cột là kênh màu;
hoặc coi mỗi **dòng điểm ảnh** là một quan sát); (2) chuẩn hóa dữ liệu;
(3) xác định các thành phần chính mang nhiều phương sai nhất; (4) bỏ các
thành phần ít quan trọng nhất để giảm kích thước dữ liệu; (5) tái tạo ảnh
từ biểu diễn đã nén bằng `X mũ = Zm Vm'`. **Tỉ số nén**: lưu một ảnh
`n x p` với m thành phần tốn `m(n + p)` con số thay vì `np`. Với
`n = p = 512` và `m = 50`: 51.200 so với 262.144, tức giảm khoảng 5 lần.
Ghi chú thực tế rất đáng nhớ: JPEG **không** dùng PCA mà dùng phép biến
đổi cosin rời rạc (DCT), vì **cơ sở DCT là cố định và không cần truyền
kèm ảnh** - một nhắc nhở rằng **một cơ sở phụ thuộc dữ liệu tự nó cũng có
chi phí lưu trữ**.
<br><span class="en">**Image compression - the 5-step procedure and the
compression ratio (slides 69-70).** The procedure: (1) convert the 2-D
image to a matrix (rows = pixels, columns = colour channels; or treat
each **row of pixels** as an observation); (2) standardise the data; (3)
identify the principal components carrying the most variance; (4) omit
the least important components to reduce the data size; (5) reconstruct
the image from the compressed representation via `Xhat = Zm Vm'`. **The
compression ratio**: storing an `n x p` image with m components costs
`m(n + p)` numbers instead of `np`. For `n = p = 512` and `m = 50`:
51,200 versus 262,144, roughly a 5x reduction. A very memorable practical
note: JPEG does **not** use PCA but the discrete cosine transform (DCT),
because **the DCT basis is fixed and does not need to be transmitted with
the image** - a reminder that **a data-dependent basis has its own
storage cost**.</span>

#### 2.5 PCA trong Python (slide 71-72) - <span class="en">2.5 PCA in Python (slides 71-72)</span>

Đoạn mã mẫu làm 4 việc mà các file `.py` đi kèm chương **không** làm: đọc
dữ liệu bằng `pandas`, **chuẩn hóa bằng `StandardScaler`** kèm chú thích
nói rõ đây là "PCA trên ma trận tương quan"; in **trị riêng**
(`pca.explained_variance_`) và **phần trăm lũy tích**
(`explained_variance_ratio_.cumsum()`); dùng cú pháp
`PCA(n_components=0.80, svd_solver="full")` để **giữ vừa đủ số thành phần
đạt 80% phương sai** (thay vì tự đếm tay); và dựng một `DataFrame` **hệ số
tải** với một dòng cho mỗi biến gốc và một cột cho mỗi thành phần, để có
thể đọc và diễn giải như bảng ở slide 61.
<br><span class="en">The example code does 4 things the chapter's shipped
`.py` files do **not**: read the data with `pandas`, **standardise with
`StandardScaler`** with a comment noting this is "correlation-matrix
PCA"; print the **eigenvalues** (`pca.explained_variance_`) and the
**cumulative percentage** (`explained_variance_ratio_.cumsum()`); use
`PCA(n_components=0.80, svd_solver="full")` to **keep just enough
components to reach 80% of the variance** (instead of counting by hand);
and build a **loadings** `DataFrame` with one row per original variable
and one column per component, so it can be read and interpreted like the
table on slide 61.</span>

#### 2.6 Giới hạn của PCA và dùng gì thay thế (slide 73) - <span class="en">2.6 Limitations of PCA and what to use instead (slide 73)</span>

**Chỗ PCA gặp khó**: chỉ bắt được **cấu trúc tuyến tính** - nó không thể
trải phẳng một hình xoắn ốc hay một đa tạp cong; các thành phần **thường
khó diễn giải**, vì là một hỗn hợp của cả p biến mà không có ý nghĩa tự
nhiên; **không bất biến theo thang đo** - câu trả lời phụ thuộc lựa chọn
chuẩn hóa; **nhạy với điểm ngoại lai**, vì phương sai là một đại lượng
bình phương; **giả định phương sai cao nghĩa là quan trọng**, điều không
nhất thiết đúng; và **đòi dữ liệu số**, biến hạng mục cần MCA hoặc cách
tiếp cận khác.
<br><span class="en">**Where PCA struggles**: it captures only **linear
structure** - it cannot unfold a spiral or a curved manifold; the
components are **often hard to interpret**, being a mix of all p
variables with no natural meaning; it is **not scale invariant** - the
answer depends on your standardisation choice; it is **sensitive to
outliers**, because variance is a squared quantity; it **assumes high
variance means important**, which need not hold; and it **requires
numeric data**, with categorical variables needing MCA or another
approach.</span>

**Các giải pháp thay thế**: **Kernel PCA** cho cấu trúc phi tuyến qua thủ
thuật hạt nhân; **t-SNE / UMAP** rất tốt để trực quan hóa 2 chiều, nhưng
kèm cảnh báo quan trọng - **khoảng cách giữa các cụm trên biểu đồ t-SNE
không mang ý nghĩa**, và chúng **không chiếu được điểm mới một cách đáng
tin cậy**; **autoencoder** là bản nén phi tuyến bằng mạng nơ-ron, trong đó
một autoencoder tuyến tính **tái tạo lại đúng PCA**; **phân tích nhân tố**
khi cần một mô hình biến tiềm ẩn chứ không phải một phép quay; **Sparse
PCA** buộc phần lớn hệ số tải về 0 để có thành phần diễn giải được; và
**Robust PCA** kháng điểm ngoại lai. Ý chính của slide: **PCA không biết
bạn đang cố dự đoán cái gì.** Nếu biến đích có vai trò, xem Part 3.
<br><span class="en">**The alternatives**: **Kernel PCA** for non-linear
structure via the kernel trick; **t-SNE / UMAP**, excellent for 2-D
visualisation but with an important warning - **distances between
clusters in a t-SNE plot are not meaningful**, and they **cannot project
new points reliably**; **autoencoders**, neural non-linear compression,
where a linear autoencoder **recovers PCA exactly**; **factor analysis**
when you want a latent-variable model rather than a rotation; **Sparse
PCA**, which forces most loadings to zero for interpretable components;
and **Robust PCA**, resistant to outliers. The slide's key idea: **PCA
does not know what you are trying to predict.** If the target matters,
see Part 3.</span>

### 3. Kết hợp PCA với các thuật toán khác (slide 75-79) - <span class="en">3. Combining PCA with Other Algorithms (slides 75-79)</span>

**Vì sao phải kết hợp (slide 75).** Dữ liệu nhiều chiều gây ra: **đa cộng
tuyến**; **nhiễu và dư thừa**; **chi phí tính toán cao**; và **lời nguyền
số chiều** - khi p lớn, mọi khoảng cách từng đôi trở nên gần như bằng
nhau, điều này **làm vỡ mọi phương pháp dựa trên khoảng cách**. PCA đóng
vai trò bước tiền xử lý: **loại bỏ tương quan** (các thành phần vuông góc
theo cấu tạo); **giữ phần phương sai mang nhiều thông tin nhất**; **tăng
tốc** các thuật toán phía sau; và **cho phép trực quan hóa 2 chiều** kết
quả. Sơ đồ luồng của slide: dữ liệu thô `n x p` → chuẩn hóa → PCA
`n x m` → K-Means / SVM / hồi quy → kết quả.
<br><span class="en">**Why combine (slide 75).** High-dimensional data
causes **multicollinearity**; **noise and redundancy**; **high
computational cost**; and the **curse of dimensionality** - in high p all
pairwise distances become nearly equal, which **breaks every
distance-based method**. PCA acts as a preprocessing step: it **removes
correlations** (components are orthogonal by construction); **keeps the
most informative variance**; **speeds up** downstream algorithms; and
**enables 2-D visualisation** of the result. The slide's flow diagram:
raw data `n x p` → standardise → PCA `n x m` → K-Means / SVM /
regression → result.</span>

**PCA cộng phân cụm (slide 76).** Ý tưởng: giảm dữ liệu xuống 2 tới 10
thành phần chính rồi phân cụm trong không gian đó. Với **K-Means**, các
cụm trở nên chặt hơn sau khi bỏ các chiều dư thừa và tương quan; với
**phân cụm thứ bậc**, kết quả tốt hơn và **nhanh hơn rất nhiều** trên
không gian đã giảm chiều; với **DBSCAN và GMM**, PCA làm ổn định việc ước
lượng mật độ, vốn suy giảm rất tệ khi p lớn; và phần thưởng thêm: **hai
thành phần đầu cho ngay một biểu đồ 2 chiều** để trình bày các cụm. Ứng
dụng: phân khúc khách hàng; nhóm tài liệu hoặc ảnh; phân loại hình thái
các tỉnh. **Hai cảnh báo** đi kèm và đều quan trọng: (1) bỏ các thành phần
nhỏ **có thể phá hủy đúng cái hướng đã tách hai nhóm ra** - **độ tách và
phương sai không phải một thứ**; (2) **không được** chạy PCA, vẽ PC1-PC2,
rồi tuyên bố các nhóm nhìn thấy được đã xác nhận kết quả phân cụm - bạn đã
phân cụm **trong chính không gian đó**, nên đương nhiên chúng trông tách
biệt. Đó là **lập luận vòng tròn**.
<br><span class="en">**PCA plus clustering (slide 76).** The idea: reduce
the data to 2-10 principal components, then cluster in that space. For
**K-Means**, clusters become more compact once redundant, correlated
dimensions are removed; for **hierarchical clustering**, results are
better and **much faster** in the reduced space; for **DBSCAN and GMM**,
PCA stabilises density estimation, which degrades badly in high p; and as
a bonus, **the first two PCs give a ready-made 2-D plot** in which to
show the clusters. Applications: customer segmentation; grouping
documents or images; provincial typologies. **Two cautions**, both
important: (1) dropping small components **can destroy exactly the
direction that separated two groups** - **separation and variance are not
the same thing**; (2) **do not** run PCA, plot PC1-PC2, and then claim
the visible groups validate your clustering - you clustered **in that
very space**, so of course they look separated. That is **circular**.</span>

**PCA cộng phân loại (slide 77).** Mục tiêu: cải thiện học có giám sát
bằng cách giảm nhiễu và giảm cộng tuyến. Với **hồi quy logistic**, PCA
loại đa cộng tuyến nên làm **ổn định các ước lượng hệ số**; với **SVM và
KNN**, các bộ phân loại dựa trên khoảng cách **hưởng lợi rất lớn** trong
không gian nhiều chiều; với **Naive Bayes**, PCA làm các đặc trưng **gần
độc lập hơn**, đúng bằng điều mô hình này giả định. Ví dụ: phân loại chữ
số viết tay (MNIST) thường áp PCA trước SVM - giữ khoảng **150 trong 784
chiều** giữ lại chừng **95% phương sai** và **giảm thời gian huấn luyện
một bậc độ lớn**. Cảnh báo trung tâm: **PCA là không giám sát.** Nó chọn
các hướng cực đại hóa phương sai trong `X`, **không hề biết gì về `y`**.
Một hướng có phương sai thấp **có thể lại là hướng tách các lớp hoàn hảo**
- và PCA sẽ **bỏ nó đi trước tiên**. Nếu mục tiêu là dự đoán, hãy xét
**bình phương tối thiểu riêng phần (PLS)** hoặc **phân tích biệt số tuyến
tính (LDA)**, cả hai đều **dùng `y`** khi chọn hướng.
<br><span class="en">**PCA plus classification (slide 77).** The goal:
improve supervised learning by reducing noise and collinearity. For
**logistic regression**, PCA removes multicollinearity and so
**stabilises the coefficient estimates**; for **SVM and KNN**,
distance-based classifiers **benefit greatly** in high dimensions; for
**Naive Bayes**, PCA makes the features **closer to independent**,
exactly what that model assumes. The example: handwritten digit
classification (MNIST) commonly applies PCA before an SVM - retaining
about **150 of 784 dimensions** keeps roughly **95% of the variance** and
cuts training time by **an order of magnitude**. The central caveat:
**PCA is unsupervised.** It chooses directions that maximise variance in
`X` with **no knowledge of `y`**. A low-variance direction **may be the
one that perfectly separates the classes** - and PCA will **throw it away
first**. If prediction is the goal, consider **partial least squares
(PLS)** or **linear discriminant analysis (LDA)**, both of which **use
`y`** when choosing directions.</span>

**PCA cộng hồi quy: hồi quy thành phần chính (slide 78).** Hồi quy thành
phần chính (PCR) gồm 2 bước: bước 1 áp PCA lên các biến giải thích `X`;
bước 2 hồi quy `y` trên m thành phần chính đầu tiên, tức `y` xấp xỉ
`Z gamma` với `Z = X Vm`. Bốn tính chất: **giúp được khi các biến giải
thích tương quan mạnh** - OLS trở nên bất ổn còn PCR thì không; **hoạt
động được khi p lớn hơn n**, nơi OLS thậm chí **không có nghiệm duy
nhất**; **đóng vai trò một dạng điều chuẩn**, đánh đổi một chút độ chệch
để lấy phương sai thấp hơn nhiều (**họ hàng gần với hồi quy Ridge**).
**Rủi ro**: các thành phần bị loại bỏ **vẫn có thể chứa thông tin dự
đoán**. **Chi phí**: các hệ số `gamma` áp lên **các thành phần, không phải
biến gốc** - muốn quay về biến gốc phải tính `beta mũ = Vm gamma mũ`. So
sánh PCR với PLS: **PCR chọn thành phần chỉ dùng `X`; PLS chọn thành phần
cực đại hóa hiệp phương sai với `y`**, nên PLS thường cần **ít thành phần
hơn** để đạt cùng độ chính xác.
<br><span class="en">**PCA plus regression: principal component
regression (slide 78).** PCR has 2 steps: step 1 applies PCA to the
predictors `X`; step 2 regresses `y` on the first m principal
components, i.e. `y` approximately equals `Z gamma` with `Z = X Vm`. Four
properties: it **helps when the predictors are highly correlated** - OLS
becomes unstable, PCR does not; it **works when p is greater than n**,
where OLS has **no unique solution at all**; it **acts as a form of
regularisation**, trading a little bias for much lower variance (**closely
related to ridge regression**). **The risk**: the discarded components
**may still contain predictive information**. **The cost**: the `gamma`
coefficients apply to **the components, not the original variables** - to
map back you must compute `betahat = Vm gammahat`. PCR versus PLS: **PCR
chooses components using only `X`; PLS chooses components maximising
covariance with `y`**, so PLS usually needs **fewer components** for the
same accuracy.</span>

**Làm cho đúng: tránh rò rỉ dữ liệu (slide 79).** **Lỗi**: chuẩn hóa và
chạy PCA trên **toàn bộ** dữ liệu, rồi mới chia tập huấn luyện và tập
kiểm tra. Tập kiểm tra khi đó **đã ảnh hưởng tới các trung bình, độ lệch
chuẩn và hệ số tải**, nên sai số kiểm định thu được là **quá lạc quan**.
**Cách sửa**: đặt **mọi bước vào trong một `Pipeline`**, để chúng được
khớp lại **bên trong từng lớp kiểm định chéo**. Slide đưa luôn mã: một
`Pipeline` gồm `("scale", StandardScaler())`, `("pca", PCA())`,
`("clf", LogisticRegression(max_iter=2000))`, rồi `GridSearchCV` quét
`pca__n_components` trong `[2, 5, 10, 20, 50]` với `cv=5` và
`scoring="accuracy"`, in ra `best_params_` và `best_score_`. Ý chính:
**khi PCA làm đầu vào cho một mô hình dự đoán, m là một siêu tham số -
hãy tinh chỉnh nó theo sai số kiểm định, không phải theo biểu đồ sườn
dốc.**
<br><span class="en">**Doing it correctly: avoid data leakage (slide
79).** **The mistake**: scaling and running PCA on the **full** data set,
then splitting into train and test. The test set has then **already
influenced the means, standard deviations and loadings**, so your
validation error is **optimistic**. **The fix**: put **every step inside
a `Pipeline`**, so it is re-fitted **within each cross-validation fold**.
The slide gives the code: a `Pipeline` of `("scale", StandardScaler())`,
`("pca", PCA())`, `("clf", LogisticRegression(max_iter=2000))`, then
`GridSearchCV` over `pca__n_components` in `[2, 5, 10, 20, 50]` with
`cv=5` and `scoring="accuracy"`, printing `best_params_` and
`best_score_`. Key idea: **when PCA feeds a predictive model, m is a
hyperparameter: tune it against validation error, not a scree
plot.**</span>

### 4. Thực hành, thảo luận và bài tập (slide 81-85) - <span class="en">4. Practice, Discussion and Assignments (slides 81-85)</span>

**Bảng tổng kết hai chương trên một slide (slide 81).** Đây là slide ôn
thi quan trọng nhất của chương:
<br><span class="en">**Both tools on one slide (slide 81).** This is the
chapter's single most exam-relevant slide:</span>

| Tiêu chí | Phân cụm | PCA |
|---|---|---|
| Giảm cái gì | Số dòng (thành K nhóm) | Số cột (thành m thành phần) |
| Đối tượng cốt lõi | Một khoảng cách `d(xi, xj)` | Một ma trận hiệp phương sai `S` |
| Đầu ra | Một nhãn cho mỗi quan sát | Một véc-tơ điểm cho mỗi quan sát |
| Tham số then chốt | K | m |
| Chọn bằng | Khuỷu tay, silhouette, thống kê khoảng trống | Quy tắc Kaiser, biểu đồ sườn dốc, phần trăm lũy tích |
| Tiền xử lý | Chuẩn hóa | Chuẩn hóa |
| Rủi ro chính | Áp đặt những nhóm không tồn tại | Bỏ đi đúng phần biến động có ý nghĩa |

Ý chính: **cả hai đều là công cụ mô tả. Chúng sinh ra giả thuyết về cấu
trúc; chúng không kiểm định các giả thuyết đó. Phán đoán vẫn thuộc về
người phân tích.**
<br><span class="en">Key idea: **both are descriptive tools. They
generate hypotheses about structure; they do not test them. The judgement
stays with the analyst.**</span>

**Sáu chủ đề thảo luận nhóm (slide 82).** (1) Liệt kê điểm giống và khác
giữa phân cụm và phân loại. (2) So sánh ứng dụng của phân cụm thứ bậc và
K-Means - khi nào chọn cái nào. (3) Có phương pháp phân cụm nào khác ngoài
K-Means và thứ bậc không - mô tả một phương pháp và giải thích nó giải
quyết vấn đề gì. (4) PCA cực đại hóa phương sai; hãy cho một ví dụ cụ thể
trong kinh tế nơi hướng có phương sai lớn nhất **không** phải hướng đáng
quan tâm nhất. (5) Bạn phân cụm khách hàng và ra 4 phân khúc; quản lý hỏi
"làm sao biết chúng là thật?" - bạn sẽ trình bày bằng chứng gì? (6) Một
đồng nghiệp báo rằng PCA làm tăng R bình phương của mô hình họ **trên tập
huấn luyện**; vì sao đó không phải bằng chứng cho thấy PCA có ích?
<br><span class="en">**Six group discussion topics (slide 82).** (1) List
the similarities and differences between clustering and classification.
(2) Compare the applications of hierarchical clustering and K-Means -
when would you prefer each? (3) Are there clustering methods other than
K-Means and hierarchical? Describe one and explain what problem it
solves. (4) PCA maximises variance; give a concrete economics example
where the highest-variance direction is **not** the most interesting one.
(5) You cluster customers and get four segments; your manager asks "how
do we know these are real?" - what evidence would you present? (6) A
colleague reports that PCA raised their model's R squared **on the
training set**; why is this not evidence that PCA helped?</span>

**Bài tập lớn (slide 83).** Yêu cầu **replicate một** trong các mini
project sau (dữ liệu lấy từ Kaggle): Wine Quality Prediction with PCA &
LDA Algorithms; Customer Segmentation (K-Means Clustering & PCA);
Reducing Features - Principal Component Analysis; Principal Component
Regression; Customer Personality Analysis - PCA and Clustering; hoặc bất
kỳ bộ dữ liệu Kaggle nào khác phù hợp cho PCA và/hoặc phân cụm. **Báo cáo
bắt buộc có 4 hạng mục**: (i) biện luận quyết định chuẩn hóa; (ii) một
biểu đồ khuỷu tay và một biểu đồ silhouette, hoặc một biểu đồ sườn dốc;
(iii) hồ sơ của từng cụm hoặc diễn giải từng thành phần **bằng lời**; (iv)
**một hạn chế trung thực** của kết quả.
<br><span class="en">**The assignment (slide 83).** Replicate **one** of
the following mini projects (data from Kaggle): Wine Quality Prediction
with PCA & LDA Algorithms; Customer Segmentation (K-Means Clustering &
PCA); Reducing Features - Principal Component Analysis; Principal
Component Regression; Customer Personality Analysis - PCA and Clustering;
or any other Kaggle dataset suitable for PCA and/or clustering. **The
report must include 4 items**: (i) justification of the scaling decision;
(ii) an elbow and silhouette plot, or a scree plot; (iii) a profile of
each cluster or an interpretation of each component **in words**; (iv)
**one honest limitation** of the result.</span>

**Năm ý tưởng đề tài với dữ liệu Việt Nam (slide 84).** (1) **Phân loại
hình thái các tỉnh**: phân cụm 63 tỉnh theo các chỉ tiêu GSO (GRDP đầu
người, FDI, tỉ lệ đô thị hóa, giáo dục, y tế), làm PCA trước rồi K-Means
sau; tỉnh nào nhóm với tỉnh nào, và kết quả có khớp với các vùng hành
chính không? (2) **Chỉ số tổng hợp PCI**: áp PCA lên các chỉ số con của
Chỉ số Năng lực Cạnh tranh Cấp tỉnh; một thành phần giải thích được bao
nhiêu phần biến động - và điều đó có biện minh cho một bảng xếp hạng duy
nhất không? (3) **Phân khúc khách hàng bán lẻ**: dựng các biến RFM từ một
bộ dữ liệu giao dịch bất kỳ rồi phân khúc khách hàng, đề xuất một chiến
dịch cho mỗi phân khúc. (4) **Cấu trúc ngành của VN-Index**: chạy PCA trên
lợi suất ngày của các cổ phiếu niêm yết; PC1 có giống một nhân tố thị
trường không, và các thành phần sau có ứng với các ngành không? (5)
**Mức sống hộ gia đình**: dùng các chỉ tiêu kiểu VHLSS để dựng một chỉ số
địa vị kinh tế xã hội bằng PCA, rồi phân cụm các hộ. Nguồn dữ liệu: GSO
(gso.gov.vn), PCI (pcivietnam.vn), World Bank Open Data, Kaggle.
<br><span class="en">**Five project ideas with Vietnamese data (slide
84).** (1) **Provincial typology**: cluster the 63 provinces on GSO
indicators (GRDP per capita, FDI, urbanisation, schooling, health), PCA
first then K-Means; which provinces group together, and does that match
the administrative regions? (2) **PCI composite index**: apply PCA to the
sub-indices of the Provincial Competitiveness Index; how much of the
variation does one component explain - and does that justify a single
ranking? (3) **Retail customer segmentation**: build RFM variables from
any transaction data set and segment the customers, proposing one
campaign per segment. (4) **VN-Index sector structure**: run PCA on daily
returns of listed stocks; does PC1 look like a market factor, and do
later components map onto sectors? (5) **Household living standards**:
use VHLSS-style indicators to construct a socio-economic status index via
PCA, then cluster the households. Data sources: GSO (gso.gov.vn), PCI
(pcivietnam.vn), World Bank Open Data, Kaggle.</span>

**Đọc thêm và việc phải làm trước buổi sau (slide 85).** Tài liệu: James,
Witten, Hastie và Tibshirani, *An Introduction to Statistical Learning* -
chương 12 (Học không giám sát), **được nêu là tài liệu tham chiếu chuẩn**
cho toàn bộ nội dung này và đọc miễn phí được; Hastie, Tibshirani và
Friedman, *The Elements of Statistical Learning* - chương 14, cho phần xử
lý toán học; Jolliffe và Cadima (2016) về PCA trên *Phil. Trans. R. Soc.
A*; Arthur và Vassilvitskii (2007) về k-means++; và sổ tay người dùng
`scikit-learn` phần Clustering cùng phần Decomposing signals in
components. **Việc phải làm trước buổi kế tiếp**: cài `scikit-learn`,
`pandas`, `matplotlib`, chạy đoạn mã K-Means ở slide 30 trên dữ liệu
`make_blobs`, và **mang theo biểu đồ khuỷu tay**.
<br><span class="en">**Further reading and the pre-class task (slide
85).** The reading: James, Witten, Hastie and Tibshirani, *An
Introduction to Statistical Learning* - chapter 12 (Unsupervised
Learning), **named as the standard reference** for this material and
freely available; Hastie, Tibshirani and Friedman, *The Elements of
Statistical Learning* - chapter 14, for the mathematical treatment;
Jolliffe and Cadima (2016) on PCA in *Phil. Trans. R. Soc. A*; Arthur and
Vassilvitskii (2007) on k-means++; and the `scikit-learn` user guide
sections on Clustering and on Decomposing signals in components. **The
task before the next session**: install `scikit-learn`, `pandas` and
`matplotlib`, run the slide-30 K-Means code on the `make_blobs` data, and
**bring your elbow plot**.</span>

## File mã và dữ liệu đi kèm - <span class="en">Companion code and data files</span>

Thư mục `raw/Lecture Notes/K32/Chapter04/` có 2 thư mục con:
`PythonCode/` với 7 script và `Data/` với 2 ảnh. **Đây là lần đầu tài
liệu môn học dùng ảnh làm dữ liệu thực hành.** Toàn bộ 7 script đã được
chạy lại và kiểm chứng trong quá trình ingest - kết quả ghi ở mục "Khoảng
trống / lưu ý" bên dưới.
<br><span class="en">The folder `raw/Lecture Notes/K32/Chapter04/` has 2
subfolders: `PythonCode/` with 7 scripts and `Data/` with 2 images.
**This is the first time the course material uses images as practice
data.** All 7 scripts were re-run and verified during this ingest -
results are in the "Gaps / notes" section below.</span>

### File mã Python - <span class="en">Python scripts</span>

- **`Example3.7_KMeans.py`** - K-Means trên dữ liệu `make_blobs` (150
  điểm, 2 đặc trưng, 3 tâm, `cluster_std=0.5`, `random_state=2`), vẽ dữ
  liệu thô rồi vẽ các cụm và tâm cụm. Dùng `init='random'`, `n_init=10`,
  `max_iter=300`, `tol=1e-04`. **Chứa lỗi**: dữ liệu tạo với `centers=3`
  nhưng mô hình khớp với `n_clusters=1`, trong khi phần vẽ vẫn gọi 3 lệnh
  `scatter` cho 3 cụm - script chạy không báo lỗi và cho ra một hình
  trông hợp lý nhưng chỉ có 1 cụm cùng 1 tâm.
  <br><span class="en">**`Example3.7_KMeans.py`** - K-Means on
  `make_blobs` data (150 points, 2 features, 3 centres,
  `cluster_std=0.5`, `random_state=2`), plotting the raw data then the
  clusters and centroids. Uses `init='random'`, `n_init=10`,
  `max_iter=300`, `tol=1e-04`. **Contains a bug**: the data is generated
  with `centers=3` but the model is fitted with `n_clusters=1`, while the
  plotting block still calls 3 `scatter` commands for 3 clusters - the
  script raises no error and produces a plausible-looking figure with
  only 1 cluster and 1 centroid.</span>
- **`Example3.7_KMeans_GenerateData_and_Clustering.py`** - cùng ví dụ
  viết lại theo thứ tự sạch hơn (tạo dữ liệu, khớp, đọc nhãn và tâm, vẽ),
  300 điểm và 4 tâm, `random_state=42`, dùng bản đồ màu `viridis` và dấu
  `X` đỏ cho tâm cụm. **Chứa lỗi**: dòng thứ 11 gọi
  `plt.scatter(..., c=cluster_labels)` **trước khi** `cluster_labels`
  được tạo (nó chỉ xuất hiện 8 dòng sau, từ `kmeans.labels_`), nên script
  dừng với `NameError`.
  <br><span class="en">**`Example3.7_KMeans_GenerateData_and_
  Clustering.py`** - the same example rewritten in a cleaner order
  (generate, fit, read labels and centres, plot), 300 points and 4
  centres, `random_state=42`, using the `viridis` colour map and red `X`
  markers for centroids. **Contains a bug**: line 11 calls
  `plt.scatter(..., c=cluster_labels)` **before** `cluster_labels`
  exists (it only appears 8 lines later, from `kmeans.labels_`), so the
  script stops with a `NameError`.</span>
- **`Example3.7_KMeans_Elbow.py`** - dựng biểu đồ khuỷu tay trên dữ liệu
  4 tâm, quét `K` từ 1 tới 9, ghi lại **hai** đại lượng: `distortion`
  (khoảng cách Euclid trung bình từ mỗi điểm tới tâm gần nhất, tính bằng
  `scipy.spatial.distance.cdist`) và `inertia` (`KMeans.inertia_`, tức
  WCSS - tổng các khoảng cách **bình phương**). In `mapping1` rồi vẽ
  biểu đồ distortion. **Hai điểm yếu**: mỗi vòng lặp khớp **hai lần**
  cùng một mô hình (`KMeans(...).fit(X)` rồi `kmeanModel.fit(X)` lần
  nữa), và **không có hệ số silhouette** dù slide 30 và bài tập slide 83
  đều yêu cầu cả khuỷu tay lẫn silhouette.
  <br><span class="en">**`Example3.7_KMeans_Elbow.py`** - builds the
  elbow curve on 4-centre data, sweeping `K` from 1 to 9 and recording
  **two** quantities: `distortion` (the mean Euclidean distance from each
  point to its nearest centroid, via
  `scipy.spatial.distance.cdist`) and `inertia` (`KMeans.inertia_`, i.e.
  WCSS - the sum of **squared** distances). It prints `mapping1` then
  plots distortion. **Two weaknesses**: each iteration fits the same
  model **twice** (`KMeans(...).fit(X)` then `kmeanModel.fit(X)` again),
  and there is **no silhouette score** even though slide 30 and the slide
  83 assignment both ask for elbow and silhouette.</span>
- **`Example3.7_KMeans_ReduceColors.py`** - K-Means dùng làm **lượng tử
  hóa màu**: đọc ảnh, đổi hình dạng thành bảng `(-1, 3)` để mỗi dòng là
  một điểm ảnh và 3 cột là R, G, B, khớp `KMeans(n_clusters=6)`, rồi thay
  mỗi điểm ảnh bằng tâm cụm của nó để vẽ lại ảnh với bảng màu 6 màu.
  **Hai vấn đề môi trường**: đọc từ đường dẫn cứng `E:/Image1.jpg` (ổ đĩa
  của giảng viên), và cần thư viện `skimage` (`skimage.io.imread` và
  `io.imshow`).
  <br><span class="en">**`Example3.7_KMeans_ReduceColors.py`** - K-Means
  as **colour quantisation**: read an image, reshape to `(-1, 3)` so each
  row is one pixel and the 3 columns are R, G, B, fit
  `KMeans(n_clusters=6)`, then replace each pixel by its centroid to
  repaint the image with a 6-colour palette. **Two environment issues**:
  it reads from the hard-coded path `E:/Image1.jpg` (the instructor's own
  drive), and it needs the `skimage` library (`skimage.io.imread` and
  `io.imshow`).</span>
- **`Example3.8_PCA.py`** - PCA trên dữ liệu 2 chiều tương quan: dựng 200
  điểm từ một tổ hợp tuyến tính ngẫu nhiên `2 x 2` của hai biến chuẩn,
  khớp `PCA(n_components=2)`, in `components_` và `explained_variance_`,
  vẽ hai hướng thành phần thành **mũi tên** có độ dài tỉ lệ căn bậc hai
  của phương sai (hàm `draw_vector` dùng `ax.annotate`), rồi khớp lại với
  `n_components=1` và dùng `inverse_transform` để cho thấy phép chiếu một
  chiều bỏ đi những gì. **Một dòng chết**: biến
  `colors = np.random.rand(len(X))` được tính nhưng không dùng ở đâu.
  <br><span class="en">**`Example3.8_PCA.py`** - PCA on correlated 2-D
  data: build 200 points from a random `2 x 2` linear mix of two normals,
  fit `PCA(n_components=2)`, print `components_` and
  `explained_variance_`, draw the two component directions as **arrows**
  with length proportional to the square root of the variance (the
  `draw_vector` helper uses `ax.annotate`), then refit with
  `n_components=1` and use `inverse_transform` to show what the 1-D
  projection throws away. **One dead line**:
  `colors = np.random.rand(len(X))` is computed and never used.</span>
- **`Example3.8_PCA_Diabetes.py`** - PCA trên bộ dữ liệu diabetes của
  `scikit-learn` (442 bệnh nhân, 10 đặc trưng): vẽ đặc trưng thứ 3 (chỉ
  số `bmi`, `feature_index = 2`) theo biến đích, rồi chuẩn hóa toàn bộ 10
  đặc trưng bằng `StandardScaler`, giảm xuống 2 thành phần, vẽ biểu đồ
  phân tán tô màu theo giá trị đích kèm thanh màu, và in tỉ lệ phương sai
  giải thích được. **Hai điểm yếu**: gọi `datasets.load_diabetes()`
  **hai lần**, và **không có biểu đồ sườn dốc** dù slide 59-60 dành hẳn
  hai trang cho việc chọn m.
  <br><span class="en">**`Example3.8_PCA_Diabetes.py`** - PCA on
  `scikit-learn`'s diabetes data (442 patients, 10 features): plot the
  third feature (`bmi`, `feature_index = 2`) against the target, then
  standardise all 10 features with `StandardScaler`, reduce to 2
  components, draw a scatter coloured by target value with a colour bar,
  and print the explained variance ratio. **Two weaknesses**: it calls
  `datasets.load_diabetes()` **twice**, and there is **no scree plot**
  even though slides 59-60 devote two pages to choosing m.</span>
- **`Example3.8_PCA_CompressImage.py`** - nén ảnh bằng PCA: đọc ảnh ở chế
  độ xám, coi **mỗi dòng điểm ảnh** là một quan sát và mỗi cột là một đặc
  trưng, khớp PCA với `n_components = 20`, `inverse_transform` về kích
  thước gốc, vẽ ảnh gốc và ảnh nén, rồi in tổng phương sai giải thích
  được. **Ba vấn đề**: đọc từ đường dẫn cứng `E://image1.jpg`; cần thư
  viện `cv2` (OpenCV) với `cv2.IMREAD_GRAYSCALE`; và **bỏ qua bước 2 của
  chính quy trình ở slide 70** (chuẩn hóa) cũng như **không tính tỉ số
  nén** dù slide 70 cho công thức `m(n + p)` so với `np`.
  <br><span class="en">**`Example3.8_PCA_CompressImage.py`** - PCA image
  compression: read an image in greyscale, treat **each row of pixels**
  as an observation and each column as a feature, fit PCA with
  `n_components = 20`, `inverse_transform` back to the original size,
  show the original and the compressed image, then print the total
  explained variance. **Three issues**: it reads from the hard-coded path
  `E://image1.jpg`; it needs the `cv2` (OpenCV) library with
  `cv2.IMREAD_GRAYSCALE`; and it **skips step 2 of its own slide-70
  procedure** (standardise) and **does not compute the compression
  ratio** even though slide 70 gives the formula `m(n + p)` versus
  `np`.</span>

### File dữ liệu - <span class="en">Data files</span>

- **`Data/Image1.jpg`** - ảnh màu `275 x 183` điểm ảnh, hệ màu RGB, tức
  50.325 điểm ảnh và **33.933 màu phân biệt**. Nội dung: hai con vẹt
  lorikeet cầu vồng đậu trên cành. Đây là ảnh mà script giảm màu trỏ tới
  (`E:/Image1.jpg`).
  <br><span class="en">**`Data/Image1.jpg`** - a `275 x 183` pixel RGB
  colour photo, i.e. 50,325 pixels and **33,933 distinct colours**.
  Content: two rainbow lorikeets on a branch. This is the image the
  colour-reduction script points at (`E:/Image1.jpg`).</span>
- **`Data/Image2.jpg`** - ảnh màu `680 x 459` điểm ảnh, hệ màu RGB. Nội
  dung: một bó hoa hồng. Ảnh lớn hơn, phù hợp hơn cho ví dụ nén PCA vì
  ma trận xám `459 x 680` cho phép quét m tới hàng trăm.
  <br><span class="en">**`Data/Image2.jpg`** - a `680 x 459` pixel RGB
  colour photo. Content: a bouquet of roses. The larger of the two, and
  the better fit for the PCA compression example because its `459 x 680`
  greyscale matrix allows sweeping m into the hundreds.</span>

## Khoảng trống / lưu ý - <span class="en">Gaps / notes</span>

- **Hai trong bảy script không chạy đúng như viết, và chỉ một trong hai
  báo lỗi.** Toàn bộ 7 script đã được chạy lại trong môi trường
  `scikit-learn` 1.9 khi ingest. `Example3.7_KMeans_GenerateData_and_
  Clustering.py` dừng với `NameError` - ai chạy cũng thấy ngay.
  `Example3.7_KMeans.py` thì ngược lại: `n_clusters=1` trên dữ liệu 3 tâm
  vẫn chạy trọn, vẫn vẽ ra hình, và hình đó **trông bình thường**. Đây là
  minh họa sống cho đúng cảnh báo ở slide 8 và 25: mã học không giám sát
  **không thể sai một cách ồn ào**, vì không có chỉ số nào để tụt.
  <br><span class="en">**Two of the seven scripts do not run as written,
  and only one of the two announces it.** All 7 were re-run under
  `scikit-learn` 1.9 during this ingest.
  `Example3.7_KMeans_GenerateData_and_Clustering.py` stops with a
  `NameError` - anyone running it sees that at once.
  `Example3.7_KMeans.py` is the opposite: `n_clusters=1` on 3-centre data
  runs to completion, produces a figure, and that figure **looks
  perfectly normal**. This is a live illustration of the warning on
  slides 8 and 25: unsupervised code **cannot fail loudly**, because
  there is no metric to drop.</span>
- **Hai script ảnh cần thư viện không có trong môi trường môn học.**
  `skimage` (script giảm màu) và `cv2` (script nén ảnh) đều không nằm
  trong bộ công cụ đã dạy ở Chapter 2 (NumPy, pandas, matplotlib,
  seaborn, statsmodels, scikit-learn). Cả hai đều thay thế được bằng
  `Pillow` - `Image.open(path)` cho ảnh màu và
  `Image.open(path).convert("L")` cho ảnh xám - trả về đúng cùng một mảng
  NumPy. Đây là **khoảng trống về môi trường**, không phải về nội dung:
  sinh viên chạy đúng theo tài liệu sẽ gặp `ModuleNotFoundError`.
  <br><span class="en">**The two image scripts need libraries absent from
  the course environment.** `skimage` (colour reduction) and `cv2` (image
  compression) are not part of the toolkit taught in Chapter 2 (NumPy,
  pandas, matplotlib, seaborn, statsmodels, scikit-learn). Both are
  replaceable with `Pillow` - `Image.open(path)` for colour and
  `Image.open(path).convert("L")` for greyscale - returning exactly the
  same NumPy arrays. This is an **environment gap**, not a content gap:
  a student following the material literally hits
  `ModuleNotFoundError`.</span>
- **Đường dẫn cứng `E:/` xuất hiện trong cả hai script ảnh.** Cả
  `E:/Image1.jpg` và `E://image1.jpg` đều là ổ đĩa Windows của giảng
  viên, và cách viết hoa cũng không nhất quán với tên file thật
  (`Image1.jpg`). Trên macOS và Linux (hệ thống phân biệt chữ hoa chữ
  thường) phải sửa cả đường dẫn lẫn cách viết hoa.
  <br><span class="en">**A hard-coded `E:/` path appears in both image
  scripts.** Both `E:/Image1.jpg` and `E://image1.jpg` are the
  instructor's Windows drive, and the capitalisation does not match the
  real filename (`Image1.jpg`) either. On macOS and Linux
  (case-sensitive) both the path and the capitalisation need
  fixing.</span>
- **Các script đều cũ hơn API `scikit-learn` hiện hành.** Không script
  nào đặt `n_init` tường minh (trừ 2 script K-Means đầu), trong khi từ
  phiên bản 1.4 `n_init` mặc định đã đổi thành `"auto"` - đúng vấn đề mà
  **chính slide 30 đã cảnh báo**. Slide thì cập nhật; file mã thì
  không.
  <br><span class="en">**The scripts predate the current `scikit-learn`
  API.** None sets `n_init` explicitly (apart from the first two K-Means
  scripts), while from version 1.4 the `n_init` default changed to
  `"auto"` - exactly the issue **slide 30 itself warns about**. The
  slides were updated; the code files were not.</span>
- **Lệch giữa slide và file mã: chẩn đoán.** Mã trên slide 30 có sẵn
  `StandardScaler`, `init="k-means++"`, `n_init=20` và `silhouette_score`;
  mã trên slide 71 có sẵn `StandardScaler`, trị riêng, phần trăm lũy tích
  và bảng hệ số tải. **Không file `.py` đi kèm nào có những thứ đó** -
  không file nào chuẩn hóa, không file nào tính silhouette, không file nào
  vẽ biểu đồ sườn dốc, không file nào in hệ số tải. Nói cách khác, **các
  file `.py` là bản trước khi tài liệu được nâng cấp**: muốn làm đúng như
  slide dạy thì phải bổ sung các bước đó vào.
  <br><span class="en">**Slide-versus-script mismatch: the diagnostics.**
  The slide-30 code already has `StandardScaler`, `init="k-means++"`,
  `n_init=20` and `silhouette_score`; the slide-71 code already has
  `StandardScaler`, eigenvalues, cumulative percentages and a loadings
  table. **None of the shipped `.py` files has any of that** - none
  standardises, none computes a silhouette, none draws a scree plot, none
  prints loadings. In other words the `.py` files are **pre-upgrade
  artefacts**: doing what the slides teach requires adding those steps
  yourself.</span>
- **Ba slide chỉ là hình, không có chữ trích được.** Slide 18-19 (ví dụ
  tính khoảng cách tay và lời giải), slide 37-38 và 40 (dựng sơ đồ cây
  bằng liên kết đầy đủ), slide 49-51, 53, 55 (các hình ví dụ điểm Vật
  lý/Thống kê), slide 26-28, 31, 43, 67-69, 72 (minh họa và đầu ra) đều
  là ảnh chèn vào Beamer. Nội dung chữ của chúng **không có** trong lớp
  văn bản của PDF, nên trang wiki này mô tả chức năng của chúng chứ không
  trích lại số liệu bên trong. Muốn xem chi tiết phải mở PDF.
  <br><span class="en">**Several slides are images with no extractable
  text.** Slides 18-19 (the hand-worked distance example and its
  solution), 37-38 and 40 (building a dendrogram with complete linkage),
  49-51, 53, 55 (the Physics/Statistics grade figures), and 26-28, 31,
  43, 67-69, 72 (illustrations and outputs) are all images embedded in
  Beamer. Their text is **not** in the PDF's text layer, so this page
  describes what they do rather than quoting numbers from inside them.
  Open the PDF for the detail.</span>
- **Chương không có ví dụ mã cho phân cụm thứ bậc, DBSCAN hay GMM.** Bảy
  file `.py` chỉ phủ K-Means (4 file) và PCA (3 file). Phân cụm thứ bậc
  được dạy kỹ qua 7 slide (34-40) nhưng **không có dòng mã nào** -
  `scipy.cluster.hierarchy.dendrogram` hay
  `sklearn.cluster.AgglomerativeClustering` phải tự tìm. Tương tự,
  DBSCAN và GMM chỉ có một slide khái niệm (44) và không có mã.
  <br><span class="en">**The chapter ships no code for hierarchical
  clustering, DBSCAN or GMM.** The seven `.py` files cover only K-Means
  (4) and PCA (3). Hierarchical clustering is taught thoroughly across 7
  slides (34-40) but with **no code at all** -
  `scipy.cluster.hierarchy.dendrogram` or
  `sklearn.cluster.AgglomerativeClustering` must be found elsewhere.
  Likewise DBSCAN and GMM get one conceptual slide (44) and no
  code.</span>
- **Không có thông tin lịch thi, hạn nộp hay tỉ trọng điểm** cho bài tập
  slide 83 trong tài liệu này - giống tình trạng của các chương trước.
  <br><span class="en">**No exam date, deadline or grade weight** is given
  for the slide-83 assignment in this material - the same situation as in
  the previous chapters.</span>

## Liên kết - <span class="en">Links</span>

- [[unsupervised-learning-framework]] - khung học không giám sát, so
  sánh với có giám sát, cảnh báo cấu trúc giả.
  <br><span class="en">[[unsupervised-learning-framework]] - the
  unsupervised framework, the comparison with supervised learning, the
  spurious-structure warning.</span>
- [[clustering-k32]] - định nghĩa phân cụm, điều kiện phân hoạch, 4 thứ
  cần có.
  <br><span class="en">[[clustering-k32]] - the definition of clustering,
  the partition conditions, the 4 requirements.</span>
- [[distance-measures]] - Euclid, Manhattan, Minkowski, bảng chọn theo
  loại dữ liệu, lỗi quên chuẩn hóa.
  <br><span class="en">[[distance-measures]] - Euclidean, Manhattan,
  Minkowski, the data-type table, the standardisation mistake.</span>
- [[k-means-clustering-k32]] - hàm mục tiêu, thuật toán Lloyd,
  k-means++, điểm mạnh và giới hạn.
  <br><span class="en">[[k-means-clustering-k32]] - the objective,
  Lloyd's algorithm, k-means++, strengths and limitations.</span>
- [[choosing-k-elbow-silhouette]] - WCSS, phân rã TSS = WSS + BSS, khuỷu
  tay, silhouette, thống kê khoảng trống.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - WCSS, the
  TSS = WSS + BSS decomposition, the elbow, the silhouette, the gap
  statistic.</span>
- [[hierarchical-clustering-k32]] - thuật toán gộp dần, 4 kiểu liên kết,
  đọc và cắt sơ đồ cây.
  <br><span class="en">[[hierarchical-clustering-k32]] - the
  agglomerative algorithm, the 4 linkages, reading and cutting a
  dendrogram.</span>
- [[dbscan-and-gaussian-mixture]] - hai phương pháp thay thế, cách chọn
  giữa 4 phương pháp phân cụm.
  <br><span class="en">[[dbscan-and-gaussian-mixture]] - the two
  alternatives, and how to choose among the 4 clustering
  methods.</span>
- [[clustering-pitfalls-checklist]] - danh sách 7 điều kiểm tra trước khi
  trình bày kết quả phân cụm.
  <br><span class="en">[[clustering-pitfalls-checklist]] - the 7-point
  checklist to run before presenting a clustering.</span>
- [[pca-k32]] - PCA là gì, hình học phép quay, quy trình 7 bước, giới hạn
  và các phương pháp thay thế.
  <br><span class="en">[[pca-k32]] - what PCA is, the geometry of the
  rotation, the 7-step workflow, limitations and alternatives.</span>
- [[eigenvalues-and-eigenvectors]] - hiệp phương sai, ma trận hiệp phương
  sai, trị riêng, véc-tơ riêng, SVD.
  <br><span class="en">[[eigenvalues-and-eigenvectors]] - covariance, the
  covariance matrix, eigenvalues, eigenvectors, the SVD.</span>
- [[choosing-number-of-components]] - quy tắc Kaiser, biểu đồ sườn dốc,
  phương sai lũy tích, kiểm định chéo.
  <br><span class="en">[[choosing-number-of-components]] - Kaiser's rule,
  the scree plot, cumulative variance, cross-validation.</span>
- [[pca-loadings-interpretation]] - hệ số tải, nhân tố quy mô và nhân tố
  tương phản, cảnh báo về dấu.
  <br><span class="en">[[pca-loadings-interpretation]] - loadings, size
  factors and contrast factors, the sign warning.</span>
- [[pca-combined-with-other-algorithms-k32]] - ghép PCA với phân cụm,
  phân loại, hồi quy; rò rỉ dữ liệu và cách sửa bằng `Pipeline`.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] -
  chaining PCA with clustering, classification and regression; data
  leakage and the `Pipeline` fix.</span>
- [[principal-component-regression]] - PCR, quan hệ với hồi quy Ridge, so
  sánh với PLS.
  <br><span class="en">[[principal-component-regression]] - PCR, its
  relation to ridge regression, the comparison with PLS.</span>
- [[chapter03-supervised-learning-k32]] - Chapter 3 là mốc so sánh mà
  chương này liên tục đối chiếu (slide 6, 8, 41); Part 3 của chương này
  ghép PCA vào chính các mô hình đã học ở đó.
  <br><span class="en">[[chapter03-supervised-learning-k32]] - Chapter 3
  is the benchmark this chapter keeps comparing against (slides 6, 8,
  41), and Part 3 here chains PCA into exactly the models taught
  there.</span>
- [[chapter02-python-jupyter-k32]] - Chapter 2 dạy toàn bộ công cụ dùng ở
  chương này, trừ hai thư viện ảnh `skimage` và `cv2` mà các script đi
  kèm cần tới.
  <br><span class="en">[[chapter02-python-jupyter-k32]] - Chapter 2
  taught every tool used here, except the two image libraries `skimage`
  and `cv2` that the shipped scripts need.</span>
- [[tran-thi-tuan-anh]] - giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] - course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K32/Chapter04/VNP_DataScience_Unsupervised_Learning_
2026.pdf`, slide 1-86; 7 file mã trong `raw/Lecture Notes/K32/Chapter04/
PythonCode/` (`Example3.7_KMeans.py`, `Example3.7_KMeans_Elbow.py`,
`Example3.7_KMeans_GenerateData_and_Clustering.py`,
`Example3.7_KMeans_ReduceColors.py`, `Example3.8_PCA.py`,
`Example3.8_PCA_Diabetes.py`, `Example3.8_PCA_CompressImage.py`); 2 file
ảnh trong `raw/Lecture Notes/K32/Chapter04/Data/` (`Image1.jpg`,
`Image2.jpg`).
<br><span class="en">`raw/Lecture Notes/K32/Chapter04/
VNP_DataScience_Unsupervised_Learning_2026.pdf`, slides 1-86; the 7
Python scripts in `PythonCode/` and the 2 image files in `Data/` in the
same folder.</span>
