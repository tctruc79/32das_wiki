---
type: concept
title: "Phân tích thành phần chính (PCA)"
title_en: "Principal Component Analysis (PCA)"
tags: [chapter-4, k32, pca, dimension-reduction, unsupervised-learning]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

PCA tóm tắt dữ liệu có p biến bằng một tập nhỏ hơn gồm m **biến tổng
hợp** gọi là **thành phần chính**, với m nhỏ hơn p rất nhiều. Mỗi thành
phần là một **tổ hợp tuyến tính** của các biến gốc
(`z_i1 = v_11 x_i1 + ... + v_p1 x_ip`), và các thành phần được dựng sao
cho chúng **giữ lại càng nhiều phương sai càng tốt**, đồng thời **không
tương quan với nhau**. Phương pháp do Pearson (1901) và Hotelling (1933)
đề xuất và tới nay vẫn là phương pháp đa biến được dùng rộng rãi nhất.
<br><span class="en">PCA summarises data with p variables by a smaller
set of m **composite variables** called **principal components**, with m
much smaller than p. Each component is a **linear combination** of the
original variables (`z_i1 = v_11 x_i1 + ... + v_p1 x_ip`), and the
components are built so as to **retain as much variance as possible**
while being **mutually uncorrelated**. The method was introduced by
Pearson (1901) and Hotelling (1933) and remains the most widely used
multivariate method.</span>

Giả định nền tảng, và cũng là giới hạn chính: **PCA coi phương sai là đại
diện cho thông tin.**
<br><span class="en">The foundational assumption, and also the main
limitation: **PCA treats variance as a proxy for information.**</span>

## Diễn giải - <span class="en">Explanation</span>

### Hình học: chỉ là một phép quay - <span class="en">The geometry: only a rotation</span>

Cách hiểu trực quan nhất (slide 49-52): với một đám điểm nghiêng, không
trục gốc nào một mình bắt được hướng biến động lớn nhất, nên phải lấy một
tổ hợp tuyến tính. PCA quay hệ trục về các vị trí mới: **PC1 chỉ theo
hướng phân tán lớn nhất**, **PC2 là hướng phân tán lớn nhất còn lại với
ràng buộc vuông góc với PC1**, và cứ thế. Điểm then chốt: **ta chỉ đang
quay trục, không mất thông tin nào cho tới khi bỏ bớt một thành phần**.
Với ví dụ 100 sinh viên ở slide 52, PC1 có hướng `(0.73, 0.69)` và trị
riêng 2.098, chiếm 94.4% phương sai - nên **một con số cho mỗi sinh viên
giữ lại 94% biến động**.
<br><span class="en">The most intuitive reading (slides 49-52): for a
slanted cloud, no original axis alone captures the direction of greatest
variation, so a linear combination is needed. PCA rotates the axes to new
positions: **PC1 points along the direction of maximum spread**, **PC2 is
the direction of maximum remaining spread constrained to be perpendicular
to PC1**, and so on. The key point: **you are only rotating the axes; no
information is lost until a component is dropped**. In slide 52's
100-student example, PC1 has direction `(0.73, 0.69)` and eigenvalue
2.098, i.e. 94.4% of the variance - so **one number per student retains
94% of the variation**.</span>

### Hai cách phát biểu cùng một mục tiêu - <span class="en">Two statements of one objective</span>

Slide 56 đặt cạnh nhau **cực đại hóa phương sai** (`max v' S v` với
`||v|| = 1`) và **cực tiểu hóa sai số tái tạo** (tổng bình phương khoảng
cách giữa mỗi `xi` và hình chiếu của nó lên siêu phẳng m chiều), rồi nói
rõ: **cả hai đều được giải bởi cùng các véc-tơ riêng của S**. Đây là lý do
PCA vừa được dùng để **tóm tắt** (giữ phương sai) vừa được dùng để **nén**
(giảm sai số tái tạo) mà không cần hai lý thuyết khác nhau. Lấy m thành
phần đầu tiên chính là xác định **siêu phẳng m chiều khớp tốt nhất** với
dữ liệu.
<br><span class="en">Slide 56 puts **maximise variance** (`max v' S v`
subject to `||v|| = 1`) beside **minimise reconstruction error** (the
summed squared distance between each `xi` and its projection onto the
m-dimensional hyperplane), then states plainly: **both are solved by the
same eigenvectors of S**. This is why PCA serves both to **summarise**
(retain variance) and to **compress** (reduce reconstruction error)
without needing two separate theories. Taking the first m components is
exactly identifying the **m-dimensional hyperplane of best fit** to the
data.</span>

### Quy trình 7 bước - <span class="en">The 7-step workflow</span>

1. Lấy dữ liệu: `X` kích thước `n x p`.
   <br><span class="en">Get the data: `X`, `n x p`.</span>
2. **Chuẩn hóa** (hoặc ít nhất trừ trung bình) các biến, ra `Xc`.
   <br><span class="en">**Standardise** (or at least centre) the
   variables, giving `Xc`.</span>
3. Tính ma trận hiệp phương sai `S` hoặc ma trận tương quan `R` (`p x p`).
   <br><span class="en">Compute the covariance matrix `S` or the
   correlation matrix `R` (`p x p`).</span>
4. Tính trị riêng và véc-tơ riêng của nó (phân rã riêng hoặc SVD).
   <br><span class="en">Compute its eigenvalues and eigenvectors
   (eigendecomposition or SVD).</span>
5. **Chọn số thành phần giữ lại** m.
   <br><span class="en">**Choose how many components to keep**, m.</span>
6. Chiếu dữ liệu: `Z = Xc Vm`, ra ma trận `n x m`.
   <br><span class="en">Project the data: `Z = Xc Vm`, an `n x m`
   matrix.</span>
7. **Diễn giải hệ số tải và báo cáo.**
   <br><span class="en">**Interpret the loadings and report.**</span>

Đáng chú ý là bước 7 **nằm trong quy trình**: với PCA, diễn giải không
phải việc làm thêm mà là một bước bắt buộc, vì một thành phần không diễn
giải được thì cũng không dùng được để kể chuyện.
<br><span class="en">Note that step 7 is **inside the workflow**: with
PCA, interpretation is not an optional extra but a required step, since a
component you cannot interpret is a component you cannot tell a story
with.</span>

### Vì sao bước 2 không tùy chọn - <span class="en">Why step 2 is not optional</span>

Dùng ma trận hiệp phương sai chỉ có nghĩa khi **mọi biến cùng một đơn vị
đo**; và kể cả khi đó, biến có phương sai lớn vẫn **chi phối** các thành
phần - một biến đo bằng đồng sẽ nhấn chìm một biến đo bằng năm. Sau khi
chuẩn hóa, mọi biến có phương sai 1 nên các hiệp phương sai **trở thành
các tương quan**: **PCA trên dữ liệu chuẩn hóa chính là PCA trên ma trận
tương quan R**. Hệ quả rất đáng nhớ: `vết(R) = p`, nên **trị riêng trung
bình đúng bằng 1** - và đó là **nguồn gốc của quy tắc Kaiser**. Khi
**không** nên chuẩn hóa: khi mọi biến cùng một đơn vị có nghĩa và **chênh
lệch phương sai giữa chúng tự thân đã là thông tin** - ví dụ lợi suất các
tài sản cùng loại tiền, hoặc cường độ điểm ảnh trên cùng một thang đo (và
đây đúng là trường hợp của ví dụ nén ảnh trong chương).
<br><span class="en">Using the covariance matrix only makes sense when
**all variables share a unit**; and even then, high-variance variables
**dominate** the components - a variable in VND swamps one in years.
After standardisation every variable has variance 1, so the covariances
**become correlations**: **PCA on standardised data is PCA on the
correlation matrix R**. A very memorable consequence: `trace(R) = p`, so
**the average eigenvalue is exactly 1** - the **origin of Kaiser's
rule**. When **not** to standardise: when all variables share a
meaningful unit and **the differences in variance are themselves
informative** - e.g. returns on assets in one currency, or pixel
intensities on a common scale (which is exactly the case in the chapter's
image compression example).</span>

### Ứng dụng - <span class="en">Applications</span>

Công dụng cổ điển: giảm chiều; tìm mẫu hình; trực quan hóa xuống 2-3
chiều; loại đa cộng tuyến trước hồi quy; nén ảnh và tín hiệu; khử nhiễu.
Công dụng trong kinh tế và tài chính: **xây dựng chỉ số tổng hợp** (năng
lực cạnh tranh, địa vị kinh tế xã hội, phát triển tài chính) từ nhiều chỉ
tiêu tương quan; trích **nhân tố chung của đường cong lợi suất** (mức, độ
dốc, độ cong); dựng **nhân tố rủi ro** từ bảng lớn lợi suất tài sản; và
tóm tắt **bộ câu hỏi khảo sát** thành vài cấu trúc tiềm ẩn.
<br><span class="en">Classic uses: reduce dimensions; find patterns;
visualise in 2-3 dimensions; remove multicollinearity before regression;
compress images and signals; de-noise. Uses in economics and finance:
**building composite indices** (competitiveness, socio-economic status,
financial development) from many correlated indicators; extracting
**common yield-curve factors** (level, slope, curvature); constructing
**risk factors** from large panels of asset returns; and summarising
**survey batteries** into a few latent constructs.</span>

Ba ứng dụng được trình bày sâu trong chương: **nhận dạng mặt người**, nơi
mỗi điểm ảnh là một biến nên ảnh `100 x 100` cho `p = 10.000` chiều, và
PCA nén xuống vài trăm "mặt riêng" (Turk và Pentland, 1991) - minh họa rõ
nhất cho việc **các điểm ảnh kề nhau gần như tương quan hoàn hảo nên số
chiều thật thấp hơn p rất nhiều**; **khử nhiễu**, hoạt động được vì nhiễu
dàn mỏng trên mọi thành phần còn tín hiệu tập trung ở vài thành phần đầu;
và **nén ảnh** với tỉ số nén `m(n + p)` so với `np`.
<br><span class="en">Three applications are covered in depth: **face
recognition**, where each pixel is a variable so a `100 x 100` image
gives `p = 10,000` dimensions, and PCA compresses to a few hundred
eigenfaces (Turk and Pentland, 1991) - the clearest illustration that
**adjacent pixels are almost perfectly correlated so the true
dimensionality is far below p**; **de-noising**, which works because
noise spreads thinly across all components while signal concentrates in
the first few; and **image compression**, with its `m(n + p)` versus `np`
ratio.</span>

### Giới hạn và các phương pháp thay thế - <span class="en">Limitations and alternatives</span>

Chỗ PCA gặp khó (slide 73): chỉ bắt được **cấu trúc tuyến tính**; các
thành phần **thường khó diễn giải** vì là hỗn hợp của cả p biến;
**không bất biến theo thang đo**; **nhạy với điểm ngoại lai** vì phương
sai là đại lượng bình phương; **giả định phương sai cao nghĩa là quan
trọng**; và **đòi dữ liệu số**. Các phương pháp thay thế: **Kernel PCA**
cho cấu trúc phi tuyến; **t-SNE / UMAP** cho trực quan hóa 2 chiều, kèm
cảnh báo rằng **khoảng cách giữa các cụm trên biểu đồ t-SNE không mang ý
nghĩa** và chúng **không chiếu được điểm mới đáng tin cậy**;
**autoencoder**, trong đó bản tuyến tính **tái tạo lại đúng PCA**;
**phân tích nhân tố** khi cần một mô hình biến tiềm ẩn; **Sparse PCA** để
có thành phần diễn giải được; và **Robust PCA** khi có điểm ngoại lai.
<br><span class="en">Where PCA struggles (slide 73): it captures only
**linear structure**; its components are **often hard to interpret**
being mixtures of all p variables; it is **not scale invariant**;
**sensitive to outliers** since variance is a squared quantity; it
**assumes high variance means important**; and it **requires numeric
data**. The alternatives: **Kernel PCA** for non-linear structure;
**t-SNE / UMAP** for 2-D visualisation, with the warning that
**distances between clusters in a t-SNE plot are not meaningful** and
that they **cannot project new points reliably**; **autoencoders**, whose
linear case **recovers PCA exactly**; **factor analysis** when a latent
variable model is wanted; **Sparse PCA** for interpretable components;
and **Robust PCA** when outliers are present.</span>

Phân biệt quan trọng: **PCA là một phép biến đổi mô tả giải thích toàn bộ
phương sai; phân tích nhân tố là một mô hình thống kê giải thích phần
phương sai chung và giả định các nhân tố tiềm ẩn tồn tại.** Hai phương
pháp thường cho câu trả lời gần nhau nhưng **trả lời hai câu hỏi khác
nhau**.
<br><span class="en">An important distinction: **PCA is a descriptive
transformation explaining total variance; factor analysis is a
statistical model explaining shared variance that assumes latent factors
exist.** They often give similar answers but **answer different
questions**.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 47 (định nghĩa, giả định
phương sai là thông tin), 48 (công dụng, phân biệt với phân tích nhân
tố), 49-53 (ví dụ điểm sinh viên, phép quay), 56 (hai cách phát biểu mục
tiêu), 63 (quy trình 7 bước), 64 (vì sao phải chuẩn hóa), 65-70 (ứng
dụng), 71-72 (mã Python), 73 (giới hạn và thay thế), 81 (bảng tổng kết:
PCA giảm số cột).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 47
(definition, the variance-as-information assumption), 48 (uses, the
factor-analysis distinction), 49-53 (the student-grade example, the
rotation), 56 (the two statements of the objective), 63 (the 7-step
workflow), 64 (why standardisation is required), 65-70 (applications),
71-72 (the Python code), 73 (limitations and alternatives), 81 (the
summary table: PCA reduces columns).</span>

Ba trong bảy file mã đi kèm chương là về PCA: `Example3.8_PCA.py`,
`Example3.8_PCA_Diabetes.py`, `Example3.8_PCA_CompressImage.py`.
<br><span class="en">Three of the chapter's seven shipped scripts are
about PCA: `Example3.8_PCA.py`, `Example3.8_PCA_Diabetes.py`,
`Example3.8_PCA_CompressImage.py`.</span>

## Liên quan - <span class="en">Related</span>

- [[eigenvalues-and-eigenvectors]] - bộ máy đại số phía dưới PCA.
  <br><span class="en">[[eigenvalues-and-eigenvectors]] - the algebraic
  machinery underneath PCA.</span>
- [[choosing-number-of-components]] - bước 5 của quy trình.
  <br><span class="en">[[choosing-number-of-components]] - step 5 of the
  workflow.</span>
- [[pca-loadings-interpretation]] - bước 7 của quy trình.
  <br><span class="en">[[pca-loadings-interpretation]] - step 7 of the
  workflow.</span>
- [[pca-combined-with-other-algorithms-k32]] - PCA làm bước tiền xử lý
  cho phân cụm, phân loại và hồi quy.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - PCA
  as a preprocessing step for clustering, classification and
  regression.</span>
- [[clustering-k32]] - công cụ song song: giảm số dòng thay vì số cột.
  <br><span class="en">[[clustering-k32]] - the parallel tool: reducing
  rows instead of columns.</span>
- [[distance-measures]] - lập luận chuẩn hóa tương tự ở phía phân cụm.
  <br><span class="en">[[distance-measures]] - the same standardisation
  argument on the clustering side.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] - cách khác để xử lý đa
  cộng tuyến, đã học ở Chapter 3.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] -
  the other way to handle multicollinearity, taught in Chapter 3.</span>
