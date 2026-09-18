---
type: concept
title: "Chọn số thành phần m: Kaiser, sườn dốc, lũy tích, kiểm định chéo"
title_en: "Choosing m: Kaiser, Scree, Cumulative Variance, Cross-Validation"
tags: [chapter-4, k32, pca, kaiser-rule, scree-plot, cross-validation]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

m là số thành phần chính giữ lại, và là tham số then chốt của PCA - đúng
vai trò mà K đảm nhiệm ở phía phân cụm. Chương đưa **bốn câu trả lời
chuẩn** (slide 59): **quy tắc Kaiser**, **biểu đồ sườn dốc**, **phương sai
lũy tích**, và **kiểm định chéo**.
<br><span class="en">m is the number of principal components retained,
PCA's key parameter - exactly the role K plays on the clustering side.
The chapter gives **four standard answers** (slide 59): **Kaiser's
rule**, the **scree plot**, **cumulative variance**, and
**cross-validation**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Bốn quy tắc - <span class="en">The four rules</span>

1. **Quy tắc Kaiser** - trên dữ liệu **đã chuẩn hóa**, giữ các thành phần
   có `lambda_m > 1`, vì chúng giải thích **nhiều hơn một biến gốc đơn
   lẻ**. Ngưỡng 1 không phải con số tùy ý: sau chuẩn hóa `vết(R) = p` nên
   **trị riêng trung bình đúng bằng 1** - một thành phần dưới 1 nghĩa là
   nó tóm tắt kém hơn cả việc giữ nguyên một biến.
   <br><span class="en">**Kaiser's rule** - on **standardised** data,
   keep components with `lambda_m > 1`, since they explain **more than a
   single original variable would**. The threshold is not arbitrary:
   after standardisation `trace(R) = p`, so **the average eigenvalue is
   exactly 1** - a component below 1 summarises worse than keeping one
   original variable.</span>
2. **Biểu đồ sườn dốc** - vẽ trị riêng theo thứ tự và **giữ các thành
   phần trước "khuỷu tay"**. Cùng bản chất heuristic thị giác như khuỷu
   tay của WCSS, và cùng điểm yếu: hai người có thể đọc ra hai chỗ gãy
   khác nhau.
   <br><span class="en">**The scree plot** - plot the eigenvalues in
   order and **keep the components before the "elbow"**. The same visual
   heuristic as the WCSS elbow, with the same weakness: two people can
   read two different break points.</span>
3. **Phương sai lũy tích** - giữ đủ số thành phần để đạt một mức mục
   tiêu, ví dụ **80% hoặc 90%**. Đây là quy tắc dễ báo cáo nhất và là
   quy tắc mà cú pháp `PCA(n_components=0.80, svd_solver="full")` hiện
   thực hóa trực tiếp.
   <br><span class="en">**Cumulative variance** - keep enough components
   to reach a target, e.g. **80% or 90%**. The easiest rule to report,
   and the one the syntax
   `PCA(n_components=0.80, svd_solver="full")` implements
   directly.</span>
4. **Kiểm định chéo** - nếu PCA làm đầu vào cho một mô hình dự đoán,
   **chọn m cực tiểu hóa sai số kiểm định**. Đây là quy tắc duy nhất
   trong bốn quy tắc có tiêu chí **bên ngoài**, và slide 79 nói rõ đó là
   quy tắc đúng khi có biến đích: **m là một siêu tham số, hãy tinh chỉnh
   nó theo sai số kiểm định, không phải theo biểu đồ sườn dốc**.
   <br><span class="en">**Cross-validation** - if PCA feeds a predictive
   model, **choose the m that minimises validation error**. This is the
   only one of the four with an **external** criterion, and slide 79 says
   plainly that it is the right rule whenever a target exists: **m is a
   hyperparameter: tune it against validation error, not a scree
   plot**.</span>

### Ví dụ nơi cả ba quy tắc đồng ý - <span class="en">The example where all three rules agree</span>

Slide 60 dùng 8 chỉ tiêu kinh tế xã hội tương quan, `n = 200`, đã chuẩn
hóa. Bảng trị riêng: PC1 là 4.281 (53.5%), PC2 là 2.029 (25.4%, lũy tích
78.9%), rồi PC3 tụt hẳn xuống 0.474 (5.9%), và các thành phần sau lần lượt
0.310, 0.276, 0.236, 0.229, 0.165. Kaiser giữ 2 (chỉ PC1 và PC2 vượt 1);
sườn dốc gãy rõ ở PC3; lũy tích đạt 78.9% với 2 thành phần. **Cả ba đồng
ý: giữ 2 thành phần, giảm chiều từ 8 xuống 2.**
<br><span class="en">Slide 60 uses 8 correlated socio-economic
indicators, `n = 200`, standardised. The eigenvalues: PC1 is 4.281
(53.5%), PC2 is 2.029 (25.4%, cumulative 78.9%), then PC3 drops sharply
to 0.474 (5.9%), with the rest at 0.310, 0.276, 0.236, 0.229, 0.165.
Kaiser keeps 2 (only PC1 and PC2 exceed 1); the scree plot breaks clearly
at PC3; cumulative variance reaches 78.9% with 2. **All three agree: keep
2 components, cutting the dimension from 8 to 2.**</span>

Đây là ví dụ **mẫu mực**, và cần nhớ nó là mẫu mực: trên dữ liệu thật ba
quy tắc **thường không đồng ý**, và khi đó việc chọn m trở thành một quyết
định phải biện luận thành lời trong báo cáo - đúng như hạng mục (i) và
(ii) của bài tập ở slide 83 yêu cầu.
<br><span class="en">This is a **model** example, and it should be
remembered as one: on real data the three rules **often disagree**, and
then choosing m becomes a decision that must be argued in words in the
report - exactly what items (i) and (ii) of the slide-83 assignment
require.</span>

### Đọc bảng trị riêng như một nhà kinh tế - <span class="en">Reading an eigenvalue table like an economist</span>

Hai dấu hiệu đáng để ý ngoài việc đếm số thành phần. Thứ nhất, **một trị
riêng đầu tiên rất lớn** (chiếm quá nửa) thường nghĩa là có **một nhân tố
quy mô chung** chi phối toàn bộ - hữu ích nếu mục tiêu là dựng chỉ số tổng
hợp, nhưng đáng ngờ nếu mục tiêu là tìm cấu trúc tinh tế hơn. Thứ hai,
**các trị riêng cuối gần bằng 0** không phải nhiễu mà là dấu hiệu
**gần cộng tuyến**: một hoặc vài biến hầu như không mang thông tin nào mà
các biến khác chưa có - và đó chính là tình huống PCA phát huy giá trị
nhất khi làm bước tiền xử lý trước hồi quy.
<br><span class="en">Two signals worth noticing beyond counting
components. First, **a very large first eigenvalue** (more than half the
total) usually means **a single general size factor** dominates -
useful if the goal is a composite index, but suspicious if the goal is
finer structure. Second, **near-zero final eigenvalues** are not noise
but a sign of **near collinearity**: one or more variables carry almost
no information the others do not already hold - exactly the situation in
which PCA is most valuable as preprocessing before a regression.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 59 (bốn quy tắc, công
thức `EVR_m`), 60 (ví dụ 8 chỉ tiêu, bảng trị riêng, cả ba quy tắc đồng
ý), 63 (bước 5 của quy trình 7 bước), 64 (`vết(R) = p` là nguồn gốc quy
tắc Kaiser), 71 (cú pháp `n_components=0.80`), 79 (m là siêu tham số,
tinh chỉnh bằng `GridSearchCV`), 81 (bảng tổng kết: m chọn bằng Kaiser,
sườn dốc, phần trăm lũy tích).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 59
(the four rules, the `EVR_m` formula), 60 (the 8-indicator example, the
eigenvalue table, all three rules agreeing), 63 (step 5 of the 7-step
workflow), 64 (`trace(R) = p` as the origin of Kaiser's rule), 71 (the
`n_components=0.80` syntax), 79 (m as a hyperparameter tuned by
`GridSearchCV`), 81 (the summary table: m chosen by Kaiser, scree,
cumulative percentage).</span>

**Lưu ý về file mã**: `Example3.8_PCA_Diabetes.py` đặt cứng
`n_components = 2` và **không vẽ biểu đồ sườn dốc**, dù slide 59-60 dành
hẳn hai trang cho việc chọn m. Tương tự,
`Example3.8_PCA_CompressImage.py` đặt cứng `n_components = 20` không kèm
biện luận.
<br><span class="en">**A note on the shipped code**:
`Example3.8_PCA_Diabetes.py` hard-codes `n_components = 2` and **draws no
scree plot**, although slides 59-60 devote two pages to choosing m.
Likewise `Example3.8_PCA_CompressImage.py` hard-codes
`n_components = 20` with no justification.</span>

## Liên quan - <span class="en">Related</span>

- [[pca-k32]] - bước 5 nằm trong quy trình 7 bước.
  <br><span class="en">[[pca-k32]] - step 5 within the 7-step
  workflow.</span>
- [[eigenvalues-and-eigenvectors]] - trị riêng là đầu vào của mọi quy tắc
  ở đây.
  <br><span class="en">[[eigenvalues-and-eigenvectors]] - the eigenvalues
  feed every rule here.</span>
- [[choosing-k-elbow-silhouette]] - bài toán song song ở phía phân cụm,
  cùng một khó khăn về heuristic thị giác.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - the parallel
  problem on the clustering side, with the same visual-heuristic
  difficulty.</span>
- [[pca-combined-with-other-algorithms-k32]] - nơi quy tắc thứ 4 (kiểm
  định chéo) trở thành quy tắc đúng.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - where
  the fourth rule (cross-validation) becomes the right one.</span>
- [[train-test-split-and-cross-validation]] - công cụ của quy tắc thứ 4,
  đã học ở Chapter 3.
  <br><span class="en">[[train-test-split-and-cross-validation]] - the
  fourth rule's tool, taught in Chapter 3.</span>
