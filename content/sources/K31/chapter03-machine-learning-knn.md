---
type: source
title: "Chapter 3 (K31) — Học máy với Python (KNN)"
title_en: "Chapter 3 (K31) — Machine Learning with Python (KNN)"
tags: [chapter-3, k31, machine-learning, classification, knn]
created: 2026-08-22
updated: 2026-08-22
status: complete
source_file: "raw/Lecture Notes/K31/VNP_DataScience_Chapter03_Machine Learning_2025.pdf"
---

## Metadata

- **Khóa**: K31 (2025). **Giảng viên**: [[tran-thi-tuan-anh]]. **Số
  slide**: 44.
  <br><span class="en">**Cohort**: K31 (2025). **Instructor**:
  [[tran-thi-tuan-anh]]. **Slide count**: 44.</span>
- **Vị trí trong môn**: chương học máy đầu tiên — đặt nền tảng lý thuyết
  (khái niệm ML cơ bản, đánh giá mô hình) rồi đi sâu vào thuật toán đầu
  tiên (KNN). Dữ liệu thực hành IRIS (`iris.csv`).
  <br><span class="en">**Position in the course**: the first ML chapter —
  lays down theoretical foundations (basic ML concepts, model evaluation)
  then goes deep into the first algorithm (KNN). Practice data: IRIS
  (`iris.csv`).</span>

## Tóm tắt - <span class="en">Summary</span>

- Chương có 3 phần lớn: (1) tổng quan học máy + lịch sử AI, (2) các khái
  niệm cơ bản (đánh giá mô hình, kiểm định chéo, quá khớp/chưa khớp), (3)
  Classification sâu vào thuật toán K-Nearest Neighbours.
  <br><span class="en">The chapter has 3 major parts: (1) ML overview +
  AI history, (2) basic concepts (model evaluation, cross-validation,
  overfitting/underfitting), (3) Classification going deep into
  K-Nearest Neighbours.</span>
- Outline gốc của chương (slide 3) có 7 mục: Introduction to ML, Some
  basic concepts, Classification, **Regression**, **Clustering**,
  **Dimension reduction**, **Association** — nhưng slide 3 này chỉ là dàn
  ý tổng cho CẢ CỤM chương ML (Chapter 3-7), không phải nội dung riêng
  của Chapter 3. Nội dung thật của file PDF này (44 slide) chỉ dừng ở
  Classification/KNN — không có Regression/Clustering/Dimension
  reduction/Association trong file này (các chủ đề đó có file PDF riêng ở
  Chapter 4-7).
  <br><span class="en">The chapter's original outline (slide 3) lists 7
  items: Introduction to ML, Some basic concepts, Classification,
  **Regression**, **Clustering**, **Dimension reduction**, **Association**
  — but slide 3 is the overall outline for the WHOLE ML block (Chapters
  3-7), not this chapter's own content. This PDF file's actual content
  (44 slides) stops at Classification/KNN — Regression/Clustering/
  Dimension reduction/Association are NOT in this file (those topics
  have their own PDF in Chapters 4-7).</span>
- **Khoảng trống**: "Association" (unsupervised) được nêu tên trong
  outline nhưng không có chương riêng nào trong 8 chương của `raw/` giảng
  nội dung này — không có nguồn để tạo trang khái niệm
  `association-rule-learning`.
  <br><span class="en">**Gap**: "Association" (unsupervised) is named in
  the outline but no chapter among the 8 in `raw/` actually teaches this
  content — no source to create an `association-rule-learning` concept
  page.</span>

## Nội dung chính - <span class="en">Key content</span>

### 1. Giới thiệu học máy (slide 4-12) - <span class="en">1. Introduction to Machine Learning (slides 4-12)</span>

- **Định nghĩa**: học máy là 1 nhánh con của trí tuệ nhân tạo, liên quan
  tới khả năng học của máy móc. Công nghệ này hướng tới làm máy móc thông
  minh và hiệu quả hơn.
  <br><span class="en">**Definition**: machine learning is a subset of
  artificial intelligence which deals with a machine's ability to learn.
  The technology aims to make machines smarter and more efficient.</span>
- **Lịch sử trí tuệ nhân tạo** (slide 5): khái niệm sơ khai thập niên
  1950 — Alan Turing là người tiên phong (phép thử Turing để xác định
  khả năng thể hiện hành vi thông minh như con người của 1 máy); thuật
  ngữ "trí tuệ nhân tạo" xuất hiện tại Hội nghị Dartmouth năm 1956; hệ
  chuyên gia (Expert Systems, thập niên 1980) — AI hồi sinh sau "mùa đông
  AI" (1960-1970), thiết kế để mô phỏng quy trình ra quyết định trong 1
  lĩnh vực cụ thể; sự trỗi dậy của kỹ thuật học máy trong thập niên 1990,
  có thể học từ dữ liệu; sự phát triển nhanh của kỹ thuật học sâu, cách
  mạng hóa AI nhờ huấn luyện được mạng nơ-ron phức tạp trên dữ liệu lớn
  (2000-2010); tiến bộ hiện tại — ChatGPT và nhiều đột phá AI quan trọng.
  <br><span class="en">**History of Artificial Intelligence** (slide 5):
  early concepts in the 1950s — Alan Turing is the pioneer (the Turing
  Test to determine a machine's ability to exhibit intelligent behavior
  like a human); the term "artificial intelligence" appeared at the
  Dartmouth Conference in 1956; Expert Systems (1980s) — the resurgence
  of interest in AI after the AI winter (1960s-1970s), designed to mimic
  decision-making processes in specific domains; the rise of machine
  learning techniques in the 1990s, which could learn from data; the
  rapid development of deep learning, revolutionizing AI by enabling
  training of complex neural networks on big data (2000s-2010s); current
  advances — ChatGPT and many significant AI breakthroughs.</span>
- **Học máy là gì** (slide 7): 1 bộ công cụ cho phép máy tính học từ dữ
  liệu và thực hiện tác vụ dựa trên mô hình đã học. Phương pháp học máy
  thường chia làm 2 giai đoạn: **Huấn luyện (Training)** — mô hình được
  học từ 1 tập dữ liệu huấn luyện; **Áp dụng (Application)** — mô hình
  được kiểm tra rồi dùng để ra quyết định. Ví dụ 1 (bộ lọc spam): dữ liệu
  huấn luyện gồm các email được gán nhãn ham (thư thường) hoặc spam; với
  mỗi email mới, mô hình sẽ phân loại có phải spam không. Ví dụ 2 (nhận
  diện khuôn mặt Facebook): người dùng huấn luyện hệ thống bằng cách gắn
  thẻ (tag) bạn bè trong ảnh; khi ảnh mới được tải lên, Facebook tự động
  nhận diện người và gợi ý gắn thẻ.
  <br><span class="en">**What is machine learning** (slide 7): a set of
  tools that allow computers to learn from data and perform tasks based
  on the learned model. ML methods are often divided into 2 phases:
  **Training** — a model is learned from a collection of training data;
  **Application** — the model is tested and then used to make decisions.
  Example 1 (spam filter): training data is email messages labeled ham or
  spam; for each new email, the model classifies whether it's spam.
  Example 2 (Facebook Face Recognition): people train the system by
  tagging friends in photos; as photos are uploaded, Facebook
  automatically detects people and suggests tagging them.</span>
- **3 loại học máy chính** (slide 11): **Học có giám sát (Supervised
  Learning)** — dữ liệu huấn luyện được gán nhãn đáp án đúng; 2 dạng phổ
  biến nhất: Classification (đầu ra là nhãn rời rạc) và Regression (đầu
  ra là số). **Học không giám sát (Unsupervised Learning)** — cho 1 tập
  dữ liệu không nhãn, muốn phân tích và khám phá mẫu hình bên trong:
  Clustering, Dimension reduction, Association. **Học tăng cường
  (Reinforcement Learning)**.
  <br><span class="en">**3 main types of ML** (slide 11): **Supervised
  Learning** — training data is labeled with correct answers; the 2 most
  common types: Classification (discrete label outputs) and Regression
  (numeric outputs). **Unsupervised Learning** — given a collection of
  unlabeled data, wish to analyze and discover patterns within:
  Clustering, Dimension reduction, Association. **Reinforcement
  Learning**.</span>

### 2. Một số khái niệm cơ bản trong học máy (slide 13-20) - <span class="en">2. Some basic concepts in machine learning (slides 13-20)</span>

- **Đánh giá mô hình hồi quy** (slide 13-14): Sai số tuyệt đối trung bình
  (MAE) = trung bình của |Thực tế − Dự đoán|; Sai số bình phương trung
  bình (MSE) = tổng bình phương (Thực tế − Dự đoán); Căn bậc hai sai số
  bình phương trung bình (RMSE) = căn bậc hai của MSE. Các chỉ số khác:
  Sai số bình phương tương đối (RSE), Sai số tuyệt đối tương đối (RAE),
  RMSE chuẩn hóa (Norm RMSEP), RMSE tương đối (RRMSEP).
  <br><span class="en">**Validation for regression problems** (slides
  13-14): Mean Absolute Error (MAE) = average of |Actual − Predicted|;
  Mean Squared Error (MSE) = sum of (Actual − Predicted)²; Root Mean
  Squared Error (RMSE) = square root of MSE. Other criteria: Relative
  Squared Error (RSE), Relative Absolute Error (RAE), Normalized RMSE
  (Norm RMSEP), Relative RMSE (RRMSEP).</span>
- **Kiểm định chéo (Cross-validation)** (slide 16-17): kỹ thuật dùng để
  kiểm tra hiệu quả của mô hình học máy, dựa trên tập huấn luyện
  (training set) và tập kiểm tra (testing set). 2 cách phổ biến:
  **Leave-one-out** — tập huấn luyện có N−1 quan sát, tập kiểm tra chỉ 1
  quan sát; **K-folds** — chia dữ liệu thành K phần.
  <br><span class="en">**Cross-validation** (slides 16-17): the technique
  used to test the effectiveness of an ML model, based on a training set
  and a testing set. 2 common methods: **Leave-one-out** — training set
  has N−1 observations, testing set only 1 observation; **K-folds** —
  data split into K parts.</span>
- **Chưa khớp (Underfitting)** (slide 19): xảy ra khi mô hình quá đơn
  giản để nắm bắt được mẫu hình tiềm ẩn trong dữ liệu huấn luyện. Hậu
  quả: mô hình chưa khớp hoạt động kém không chỉ trên dữ liệu huấn luyện
  mà cả trên dữ liệu kiểm tra/dự báo — không thể dự đoán chính xác. Giải
  pháp: dùng mô hình phức tạp hơn, hoặc cải thiện đặc trưng (dữ liệu đầu
  vào) để cung cấp nhiều thông tin hơn cho mô hình.
  <br><span class="en">**Underfitting** (slide 19): happens when an ML
  model is too simple to capture the underlying patterns in the training
  data. Consequence: an underfit model performs poorly not only on
  training data but also on test/forecast data — it can't make accurate
  predictions. Solution: use a more complex model, or improve the
  features (input data) to give the model more information.</span>
- **Quá khớp (Overfitting)** (slide 20): xảy ra khi mô hình quá phức tạp
  — học cả mẫu hình lẫn nhiễu (noise) trong dữ liệu. Hậu quả: mô hình quá
  khớp hoạt động xuất sắc trên dữ liệu huấn luyện nhưng kém trên dữ liệu
  kiểm tra/dự báo — không thể dự đoán chính xác. Giải pháp: dùng mô hình
  đơn giản hơn, giảm độ phức tạp của mô hình. Kiểm định chéo giúp kiểm
  soát hiện tượng quá khớp.
  <br><span class="en">**Overfitting** (slide 20): happens when an ML
  model is too complex — it learns not only the patterns but also the
  noise in the data. Consequence: an overfit model performs exceptionally
  well on training data but poorly on test/forecast data — it can't make
  accurate predictions. Solution: use a simpler model, reduce model
  complexity. Cross-validation helps control overfitting.</span>

### 3. Classification (slide 21-43) - <span class="en">3. Classification (slides 21-43)</span>

- **Classification là gì** (slide 22): kỹ thuật phân loại dữ liệu vào 1
  số lượng lớp cho trước. Thuật ngữ kỹ thuật: **Bộ phân loại
  (Classifier)** — thuật toán ánh xạ dữ liệu đầu vào tới 1 hạng mục cụ
  thể; **Phân loại nhị phân (Binary Classification)** — bài toán có 2 kết
  quả khả dĩ; **Phân loại đa lớp (Multi-class classification)** — nhiều
  hơn 2 lớp, mỗi quan sát chỉ được gán đúng 1 nhãn duy nhất.
  <br><span class="en">**What is Classification** (slide 22): a
  technique that categorizes data into a given number of classes.
  Technical terms: **Classifier** — an algorithm that maps input data to
  a specific category; **Binary Classification** — a task with 2 possible
  outcomes; **Multi-class classification** — more than 2 classes, each
  observation assigned to one and only one target label.</span>
- **Các bước xây dựng mô hình phân loại** (slide 24): khởi tạo bộ phân
  loại sẽ dùng → huấn luyện bằng dữ liệu huấn luyện đã gán nhãn → dự đoán
  mục tiêu (cho 1 quan sát X chưa gán nhãn, `predict(X)` trả về nhãn dự
  đoán y) → đánh giá mô hình phân loại.
  <br><span class="en">**Steps to build a classification model** (slide
  24): initialize the classifier to use → train it using labeled training
  data → predict the target (given an unlabeled observation X,
  `predict(X)` returns the predicted label y) → evaluate the classifier
  model.</span>
- **Thuật toán phổ biến** (slide 25): Naive Bayes, Decision Tree,
  Logistic Regression, K-Nearest Neighbours (KNN), Support Vector
  Machine.
  <br><span class="en">**Popular algorithms** (slide 25): Naive Bayes,
  Decision Tree, Logistic Regression, K-Nearest Neighbours (KNN), Support
  Vector Machine.</span>
- **Thuật toán K-Nearest Neighbours (KNN)** (slide 26-39): 1 trong những
  thuật toán học máy phổ biến nhất, giả định các đối tượng tương tự nhau
  thì ở gần nhau. **Quy trình thuật toán** (slide 27): (1) nạp dữ liệu,
  (2) chọn giá trị K, (3) với mỗi quan sát trong dữ liệu — tính khoảng
  cách giữa quan sát truy vấn và quan sát hiện tại trong dữ liệu, chọn K
  quan sát gần nhất, lấy nhãn của K quan sát đã chọn, trả về nhãn xuất
  hiện nhiều nhất (mode) trong K nhãn làm giá trị dự đoán.
  <br><span class="en">**K-Nearest Neighbours (KNN) algorithm** (slides
  26-39): one of the most popular ML algorithms, assumes similar things
  are near each other. **Algorithm steps** (slide 27): (1) load the data,
  (2) choose the value of K, (3) for each observation — calculate the
  distance between the query observation and the current observation,
  pick the K nearest observations, get their labels, return the mode of
  the K labels as the predicted value.</span>
  - **Chọn giá trị K phù hợp** (slide 30-31): chạy thuật toán KNN nhiều
    lần với các giá trị K khác nhau, chọn K làm giảm số lỗi. Không có số
    lượng hàng xóm tối ưu chung cho mọi tập dữ liệu. K nhỏ → nhiễu ảnh
    hưởng nhiều hơn tới kết quả: bias thấp nhưng variance cao. K lớn →
    tốn kém tính toán hơn nhưng variance thấp hơn, bias cao hơn.
    <br><span class="en">**Choosing the right value for K** (slides
    30-31): run KNN several times with different K values, choose the K
    that reduces errors. No optimal number of neighbors suits all
    datasets. Small K → noise has higher influence: low bias but high
    variance. Large K → computationally expensive but lower variance,
    higher bias.</span>
  - **Ưu điểm** (slide 32): đơn giản, dễ triển khai; không cần xây dựng
    mô hình, điều chỉnh nhiều tham số, hay đưa thêm giả định.
    **Nhược điểm**: thuật toán chậm đi đáng kể khi số biến dự báo/biến
    độc lập tăng lên; tốn nhiều tính toán khi số quan sát tăng; là
    **lazy learning** — nói cách khác, nó không học gì cả (chỉ lưu dữ
    liệu, tính toán khi cần dự đoán).
    <br><span class="en">**Advantages** (slide 32): simple and easy to
    implement; no need to build a model, tune parameters, or make
    additional assumptions. **Disadvantages**: gets significantly slower
    as the number of predictors increases; intensive computation as
    observations increase; it is **lazy learning** — in other words, it
    learns nothing (just stores data, computes at prediction time).</span>
  - **Triển khai Python trên dữ liệu IRIS** (slide 33-38, `iris.csv`): 3
    loài Iris trong mẫu — Iris setosa, Iris virginica, Iris versicolor.
    4 đặc trưng đo trên mỗi mẫu: chiều dài/chiều rộng đài hoa (sepal) và
    cánh hoa (petal), tính bằng cm. Dựa trên tổ hợp 4 đặc trưng này,
    Fisher đã xây dựng 1 mô hình phân biệt tuyến tính (linear
    discriminant) để phân biệt các loài. Bài thực hành dùng thuật toán
    KNN để phân loại loài cho từng quan sát; sau khi chạy mô hình có thể
    thay đổi K để tìm giá trị K tối ưu rồi chạy lại để dự đoán.
    <br><span class="en">**Python implementation on IRIS data** (slides
    33-38, `iris.csv`): 3 Iris species in the sample — Iris setosa, Iris
    virginica, Iris versicolor. 4 features measured per sample: length/
    width of sepals and petals, in cm. Based on the combination of these
    4 features, Fisher developed a linear discriminant model to
    distinguish the species. The exercise uses KNN to classify the
    species for each observation; after running the model, K can be
    changed to find the optimal value, then re-run to predict.</span>
  - **Đánh giá thuật toán cho KNN Regression** (slide 39): dùng lại 3 chỉ
    số MAE, MSE, RMSE đã nêu ở phần 2.
    <br><span class="en">**Evaluating the algorithm for KNN Regression**
    (slide 39): reuses the 3 metrics MAE, MSE, RMSE from part 2.</span>
  - **Ứng dụng thực tế** (slide 40, 42-43): bộ lọc email spam bằng KNN;
    phát hiện gian lận trong dữ liệu giao dịch bằng KNN (2 case study
    dẫn nguồn towardsdatascience.com và kaggle.com). Teamwork 1 (slide
    41): thảo luận nhóm tìm thêm ứng dụng thực tế của Classification,
    nộp kết quả cho giảng viên đánh giá.
    <br><span class="en">**Real-world applications** (slide 40, 42-43):
    spam email classifier with KNN; fraud detection in transaction data
    using KNN (2 case studies citing towardsdatascience.com and
    kaggle.com). Teamwork 1 (slide 41): group discussion to find more
    real-world applications of Classification, submit results to the
    instructor for evaluation.</span>

## Liên kết - <span class="en">Links</span>

- [[machine-learning-overview]] — phân loại ML, lịch sử AI/ML.
  <br><span class="en">[[machine-learning-overview]] — ML classification,
  AI/ML history.</span>
- [[overfitting-underfitting]] — khái niệm nền tảng, xuất hiện lại ở
  Chapter 4-5.
  <br><span class="en">[[overfitting-underfitting]] — a foundational
  concept, recurring in Chapters 4-5.</span>
- [[model-evaluation-metrics]] — MAE/MSE/RMSE, kiểm định chéo.
  <br><span class="en">[[model-evaluation-metrics]] — MAE/MSE/RMSE,
  cross-validation.</span>
- [[classification]] — khung khái niệm, danh sách thuật toán.
  <br><span class="en">[[classification]] — the concept framework,
  algorithm list.</span>
- [[k-nearest-neighbors]] — thuật toán chính của chương.
  <br><span class="en">[[k-nearest-neighbors]] — the chapter's main
  algorithm.</span>
- [[chapter02-python-jupyter]] — công cụ thực hành (Jupyter) đã học
  trước.
  <br><span class="en">[[chapter02-python-jupyter]] — the hands-on tool
  (Jupyter) already covered.</span>
- [[tran-thi-tuan-anh]] — giảng viên môn học.
  <br><span class="en">[[tran-thi-tuan-anh]] — course instructor.</span>

## Trích dẫn - <span class="en">Citation</span>

`raw/Lecture Notes/K31/VNP_DataScience_Chapter03_Machine Learning_2025.pdf`,
slide 1-44.
<br><span class="en">`raw/Lecture Notes/K31/
VNP_DataScience_Chapter03_Machine Learning_2025.pdf`, slides 1-44.</span>
