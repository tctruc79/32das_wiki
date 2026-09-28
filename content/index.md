---
aliases: ['overview']
type: overview
title: "Bản đồ môn học"
title_en: "Course Map"
tags: [overview]
created: 2026-08-22
updated: 2026-09-28
---

## Môn học - <span class="en">The course</span>

**Introduction to Data Science and Applications** - University of Economics
Ho Chi Minh City, Vietnam-Netherlands Programme. Giảng viên: [[tran-thi-tuan-anh]].
<br><span class="en">**Introduction to Data Science and Applications** -
University of Economics Ho Chi Minh City, Vietnam-Netherlands Programme.
Instructor: [[tran-thi-tuan-anh]].</span>

## 2 khóa - <span class="en">Two cohorts</span>

Wiki này theo dõi 2 khóa học tách biệt hoàn toàn (xem CLAUDE.md, mục "Tách
cụm K31/K32"): K31 (2025, đã có đủ 8 chương trong `raw/`) và K32 (2026,
khóa hiện tại, 6 chương tính tới 2026-09-28).
<br><span class="en">This wiki tracks two fully separated cohorts (see
CLAUDE.md, "Tách cụm K31/K32"): K31 (2025, all 8 chapters already in
`raw/`) and K32 (2026, the current cohort, 6 chapters as of
2026-09-28).</span>

### K31 (2025) - 8 chương - <span class="en">K31 (2025) - 8 Chapters</span>

1. Introduction: Data Science and Data-Analytic Thinking
2. Python and Jupyter Notebook
3. Machine Learning with Python (KNN)
4. Decision Tree & Random Forest
5. Ridge and Lasso Regression
6. Clustering in Unsupervised Learning
7. Principal Component Analysis (PCA)
8. Deep Learning

### K32 (2026 - khóa hiện tại) - <span class="en">K32 (2026 - Current Cohort)</span>

Wiki có 6 chương K32 (Chapter 1-6). Chapter 5 từng được ghi nhận là chương
lý thuyết cuối, nhưng **Chapter 6 về mô hình ngôn ngữ lớn xuất hiện trong
`raw/` ngày 2026-09-28** - nội dung và độ sâu của nó khớp với **buổi chuyên
gia chia sẻ** trong kế hoạch, và nó do chính giảng viên soạn. Sau Chapter 6
còn buổi các nhóm thuyết trình.
<br><span class="en">The wiki holds 6 K32 chapters (Chapters 1-6). Chapter 5
was recorded as the final theory chapter, but **a Chapter 6 on large language
models appeared in `raw/` on 2026-09-28** - its content and depth match the
planned **expert-talk session**, and the instructor authored it herself. The
group presentations follow.</span>

- **Chapter 1** - 5 V's, định nghĩa vận hành, 5 loại phân tích (thêm
  Causal), checklist 7 điều kiện.
  <br><span class="en">**Chapter 1** - the 5 V's, a working definition,
  5 types of analytics (adding Causal), the 7-condition checklist.</span>
- **Chapter 2** - gần gấp đôi độ dài bản 2025, thêm hẳn phần "Python for
  Data Analysis" (NumPy/pandas/matplotlib/seaborn/statsmodels/
  scikit-learn), dùng dữ liệu thực hành `Data2.csv`.
  <br><span class="en">**Chapter 2** - nearly double the 2025 version,
  adding a whole "Python for Data Analysis" section and the `Data2.csv`
  practice dataset.</span>
- **Chapter 3** ("Supervised Learning", 112 slide - chương lớn nhất của
  wiki) - gộp trọn nhánh học có giám sát mà khóa 2025 chia làm 3 chương:
  nền tảng học máy, đánh giá mô hình, phân loại + KNN, cây quyết định,
  rừng ngẫu nhiên + tăng cường, hồi quy, và Ridge/Lasso/Elastic Net. Đi
  kèm 2 file mã Python và 5 file dữ liệu.
  <br><span class="en">**Chapter 3** ("Supervised Learning", 112 slides -
  the wiki's largest chapter) - the entire supervised branch that the
  2025 cohort split across 3 chapters: ML foundations, model evaluation,
  classification + KNN, decision trees, random forests + boosting,
  regression, and Ridge/Lasso/Elastic Net. Comes with 2 Python scripts
  and 5 data files.</span>

- **Chapter 4** ("Unsupervised Learning: Clustering & PCA", 86
  slide) - gộp trọn nhánh học không giám sát mà khóa 2025 chia làm 2
  chương: phân cụm (thước đo khoảng cách, K-Means và k-means++, phân cụm
  thứ bậc với 4 kiểu liên kết và sơ đồ cây, DBSCAN/GMM, danh sách 7 bẫy)
  và PCA (hiệp phương sai, trị riêng/véc-tơ riêng, SVD, chọn m, hệ số
  tải, nén ảnh), cộng thêm Part 3 hoàn toàn mới về ghép PCA với phân cụm/
  phân loại/hồi quy (gồm PCR) và rò rỉ dữ liệu. Đi kèm 7 file mã Python
  và 2 file ảnh - lần đầu môn học dùng ảnh làm dữ liệu thực hành.
  <br><span class="en">**Chapter 4** ("Unsupervised Learning: Clustering
  & PCA", 86 slides) - the entire unsupervised branch that the 2025
  cohort split across 2 chapters: clustering (distance measures, K-Means
  and k-means++, hierarchical clustering with its 4 linkages and the
  dendrogram, DBSCAN/GMM, the 7-point pitfalls checklist) and PCA
  (covariance, eigenvalues/eigenvectors, the SVD, choosing m, loadings,
  image compression), plus an entirely new Part 3 on chaining PCA with
  clustering/classification/regression (PCR included) and data leakage.
  Comes with 7 Python scripts and 2 images - the first time the course
  uses images as practice data.</span>

- **Chapter 5** ("Introduction to Deep Learning", 90 slide gồm **3 bài
  giảng gộp trong 1 file**) - bài A1 perceptron và mạng nơ-ron (hàm kích
  hoạt, lớp kết nối đầy đủ, hàm mất mát, hạ gradient và lan truyền ngược,
  bỏ ngẫu nhiên và dừng sớm); bài A2 mô hình hóa chuỗi (RNN, lan truyền
  ngược theo thời gian, gradient tiêu biến, LSTM, tự chú ý và Transformer);
  bài A3 thị giác máy tính (ảnh là ma trận số, tích chập, CNN với
  conv/ReLU/gộp, phát hiện đối tượng, phân đoạn, điều khiển liên tục). Hai
  điểm khác mọi chương trước: đây là chương đầu tiên **dựng lại từ khóa học
  của một trường khác** thay vì từ hai giáo trình nền của môn (slide 1 ghi
  rõ), và là chương K32 đầu tiên **không có file mã hay dữ liệu đi kèm** -
  thư mục `Chapter05/` chỉ có đúng 1 file PDF.
  <br><span class="en">**Chapter 5** ("Introduction to Deep Learning", 90
  slides comprising **3 lectures merged into one file**) - lecture A1 on
  perceptrons and neural networks (activations, dense layers, losses,
  gradient descent and backpropagation, dropout and early stopping);
  lecture A2 on sequence modeling (RNNs, backpropagation through time,
  vanishing gradients, LSTMs, self-attention and the Transformer); lecture
  A3 on computer vision (images as number matrices, convolution, CNNs with
  conv/ReLU/pooling, object detection, segmentation, continuous control).
  Two departures from every earlier chapter: it is the first **rebuilt from
  another university's course** rather than from the course's two base
  textbooks (slide 1 says so), and the first K32 chapter with **no code or
  data files at all** - the `Chapter05/` folder holds exactly one
  PDF.</span>

- **Chapter 6** ("Large Language Models", 71 slide, **3 phần**) - phần 1 LLM
  và cơ chế chú ý (LLM là hàm dự đoán token kế tiếp **gán xác suất cho toàn
  bộ từ vựng**; tham số là chỗ chữ "lớn" nằm; ví dụ *mole* ba nghĩa; truy
  vấn, khóa, giá trị; softmax theo cột; **kích thước mẫu hình chú ý bằng bình
  phương độ dài ngữ cảnh**); phần 2 sáu bước của Transformer chỉ có bộ giải
  mã (**mặt nạ nhân quả**, nhiều đầu và kết nối tắt, MLP theo từng vị trí,
  lưu đệm khóa-giá trị, bảng **học được so với tính ra**); phần 3
  **`ChatGPT = LLM + lớp vỏ`** (lời nhắc hệ thống, lịch sử dán lại mỗi lượt
  nên **mô hình không hề "nhớ"**, công cụ, bộ nhớ, kiểm tra an toàn, giới hạn
  ngữ cảnh). Chương này **tiếp nối đúng chỗ Chapter 5 dừng lại**: Chapter 5
  dựng xong một đầu tự chú ý rồi nói rõ không có slide nào vẽ khối Transformer
  hoàn chỉnh. Có **5 câu hỏi ôn của giảng viên** (slide 70), và **không có
  file mã hay dữ liệu** nào.
  <br><span class="en">**Chapter 6** ("Large Language Models", 71 slides in
  **3 parts**) - part 1 on LLMs and attention (an LLM as a next-token
  predictor **assigning a probability to the whole vocabulary**; parameters
  as where "large" lives; the three-meaning *mole* example; queries, keys and
  values; softmax down columns; **the attention pattern sized as the square
  of the context**); part 2 on the six steps of a decoder-only Transformer
  (**the causal mask**, multiple heads and residual connections, the
  per-position MLP, key-value caching, the **learned-versus-computed**
  table); part 3 on **`ChatGPT = LLM + wrapper`** (system prompt, a history
  re-pasted every turn so the model **never "remembers"**, tools, memory,
  safety checks, the context limit). It **resumes exactly where Chapter 5
  stopped**. It carries **5 instructor review questions** (slide 70) and **no
  code or data files**.</span>

## Ôn thi - <span class="en">Exam prep</span>

[[on-thi]] - điểm tổng hợp duy nhất để ôn thi.
<br><span class="en">[[on-thi]] - the single compounding exam-prep
page.</span>

## Publish - <span class="en">Publish</span>

- Site Quartz song ngữ: [tctruc79.github.io/32das_wiki](https://tctruc79.github.io/32das_wiki/)
  (bản mặc định `/bi/` song ngữ đầy đủ, `/en/` bản hoàn toàn tiếng Anh).
  Repo: [github.com/tctruc79/32das_wiki](https://github.com/tctruc79/32das_wiki).
  <br><span class="en">Bilingual Quartz site:
  [tctruc79.github.io/32das_wiki](https://tctruc79.github.io/32das_wiki/)
  (default `/bi/` fully bilingual, `/en/` fully English). Repo:
  [github.com/tctruc79/32das_wiki](https://github.com/tctruc79/32das_wiki).</span>
- Mindmap Artifact tương tác song ngữ:
  [claude.ai/code/artifact/b8658df9-a364-400c-9505-144a96fd639d](https://claude.ai/code/artifact/b8658df9-a364-400c-9505-144a96fd639d)
  - mỗi tab chương hiển thị đầy đủ chiều rộng màn hình, gồm 2 nhóm thẻ
  mặc định mở sẵn: **📄 Nội dung theo slide** (toàn văn tường thuật
  chương) và **🔎 Khái niệm chi tiết** (toàn bộ nội dung từng trang
  concept - định nghĩa, công thức, ví dụ Python, không rút gọn). Tiền tố
  `K31 ·`/`K32 ·` thống nhất trên mọi tab (K31 Ch.1-8 + K32 Ch.1-5 riêng,
  không link chéo cụm). Hai tab "K31 · Tất cả chương" và "K32 · Tất cả
  chương" gộp khái niệm của từng khóa theo cụm chủ đề xuyên chương để nhìn
  tổng quan - mỗi khái niệm ở đây là một thẻ mặc định đóng, bấm vào là bung
  ra 3 phần: câu định nghĩa, mục "Tóm tắt nhanh", rồi mục "Toàn văn" chép
  nguyên vẹn thẻ khái niệm tương ứng trong tab chương, nên học chi tiết
  được mà không cần rời tab tổng hợp. Tab "Tự test" có câu hỏi ôn thi kèm
  đáp án gợi ý.
  <br><span class="en">Interactive bilingual Mindmap Artifact:
  [claude.ai/code/artifact/b8658df9-a364-400c-9505-144a96fd639d](https://claude.ai/code/artifact/b8658df9-a364-400c-9505-144a96fd639d)
  - each chapter tab displays full-width, with 2 default-open groups:
  **📄 Full slide walkthrough** and **🔎 Concept deep-dives** (every
  concept page's complete content, nothing condensed). A uniform
  `K31 ·`/`K32 ·` prefix stays on every tab (K31 Ch.1-8 + K32 Ch.1-5
  separate, no cross-cluster links). Two tabs, "K31 · All chapters" and
  "K32 · All chapters", group each cohort's concepts into cross-chapter
  thematic clusters for an overview - every concept there is a
  default-closed card that expands into three parts: a definition, a "Quick
  summary" section, and a "Full text" section reproducing the matching
  concept card from its chapter tab verbatim, so the detail is studiable
  without leaving the synthesis tab. The "Self-test" tab has exam questions
  with suggested answers.</span>
