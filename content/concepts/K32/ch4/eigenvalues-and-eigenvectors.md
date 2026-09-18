---
type: concept
title: "Hiệp phương sai, trị riêng, véc-tơ riêng và SVD"
title_en: "Covariance, Eigenvalues, Eigenvectors and the SVD"
tags: [chapter-4, k32, pca, covariance-matrix, eigenvalue, eigenvector, svd]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Đây là bộ máy đại số biến ý tưởng hình học của PCA thành một phép tính cụ
thể. **Ma trận hiệp phương sai** `S` chứa hiệp phương sai giữa mọi cặp
biến; **trị riêng** `lambda_m` của nó là phương sai dọc theo trục chính
thứ m; **véc-tơ riêng** `v_m` tương ứng là hướng của trục đó, và các phần
tử của nó là **hệ số tải**. Trong thực tế phần mềm không lập `S` mà dùng
**phân tích giá trị kỳ dị (SVD)** trực tiếp trên dữ liệu đã trừ trung
bình.
<br><span class="en">This is the algebraic machinery that turns PCA's
geometric idea into an actual computation. The **covariance matrix** `S`
holds the covariance between every pair of variables; its **eigenvalues**
`lambda_m` are the variances along the m-th principal axis; the
corresponding **eigenvectors** `v_m` are that axis' direction, and their
entries are the **loadings**. In practice software does not form `S` at
all but applies the **singular value decomposition (SVD)** directly to
the centred data.</span>

## Diễn giải - <span class="en">Explanation</span>

### Hiệp phương sai và vì sao nó không phải tương quan - <span class="en">Covariance, and why it is not correlation</span>

Hiệp phương sai mẫu giữa hai biến là tổng các tích
`(Xi - X trung bình)(Yi - Y trung bình)` chia cho `n - 1`. Nó đo **đồng
biến động tuyến tính**: bằng 0 là không có liên hệ tuyến tính, dương là
cùng chiều, âm là ngược chiều. Cảnh báo ở slide 54: **độ lớn của hiệp
phương sai phụ thuộc đơn vị đo**, nên **không so sánh được giữa các cặp
biến**. Tương quan `r = cov(X, Y) / (sX sY)` là bản không đơn vị, bị chặn
trong `[-1, 1]`. Đây chính là lý do PCA trên dữ liệu chuẩn hóa - tức trên
ma trận tương quan - **thường được ưa dùng**.
<br><span class="en">The sample covariance between two variables is the
sum of `(Xi - Xbar)(Yi - Ybar)` divided by `n - 1`. It measures **linear
co-movement**: zero means no linear association, positive means they move
together, negative the opposite. Slide 54's warning: **the size of a
covariance depends on the units**, so it **cannot be compared across
variable pairs**. The correlation `r = cov(X, Y) / (sX sY)` is the
unit-free version, bounded in `[-1, 1]`. This is exactly why PCA on
standardised data - i.e. on the correlation matrix - **is usually
preferred**.</span>

### Ma trận hiệp phương sai và ba tính chất phải nhớ - <span class="en">The covariance matrix and its three key properties</span>

Để mô tả liên hệ giữa 2 biến ta dùng hiệp phương sai; để mô tả liên hệ
giữa p biến ta dùng ma trận `S` với phần tử `(i, j)` là `cov(xi, xj)`. Ba
tính chất: (1) `S` **đối xứng** và **nửa xác định dương**; (2) **đường
chéo chứa các phương sai**, và **vết của S là tổng phương sai** trong dữ
liệu; (3) **trị riêng và véc-tơ riêng của S cho ta các thành phần chính**.
Tính đối xứng có một hệ quả đúng bằng thứ PCA cần: trị riêng của `S` là
**số thực** và các véc-tơ riêng có thể chọn **vuông góc từng đôi** - tức
tính chất "các trục không tương quan".
<br><span class="en">To describe the association between 2 variables we
use the covariance; for p variables we use the matrix `S` whose `(i, j)`
entry is `cov(xi, xj)`. Three properties: (1) `S` is **symmetric** and
**positive semi-definite**; (2) **its diagonal holds the variances** and
**its trace is the total variance** in the data; (3) **its eigenvalues
and eigenvectors give us the principal components**. Symmetry has a
consequence that is exactly what PCA needs: `S`'s eigenvalues are
**real** and its eigenvectors can be chosen **mutually orthogonal** - the
"uncorrelated axes" property.</span>

### Trị riêng và véc-tơ riêng - <span class="en">Eigenvalues and eigenvectors</span>

Cho ma trận hiệp phương sai `A`: nghiệm của `det(A - lambda I) = 0` là
các **trị riêng**; giải `(A - lambda_m I) v = 0` cho từng `lambda_m` ra
**véc-tơ riêng** `v_m`. Bốn điều phải nhớ:
<br><span class="en">Given a covariance matrix `A`: the solutions of
`det(A - lambda I) = 0` are the **eigenvalues**; solving
`(A - lambda_m I) v = 0` for each `lambda_m` gives the **eigenvector**
`v_m`. Four things to remember:</span>

- Các trị riêng sắp giảm dần `lambda_1 >= ... >= lambda_p` **chính là
  phương sai của điểm trên từng trục chính**.
  <br><span class="en">The eigenvalues in decreasing order
  `lambda_1 >= ... >= lambda_p` **are the variances of the scores on each
  principal axis**.</span>
- **Tổng các trị riêng bằng vết của A**, tức bằng tổng phương sai. Nhờ đó
  tỉ lệ phương sai giải thích được của thành phần thứ m là
  `EVR_m = lambda_m / tổng các lambda_j`.
  <br><span class="en">**The eigenvalues sum to A's trace**, i.e. to the
  total variance. This makes the m-th component's explained variance
  ratio `EVR_m = lambda_m / sum of lambda_j`.</span>
- Mỗi véc-tơ riêng chứa p giá trị - các **hệ số tải** - là mức đóng góp
  của từng biến gốc vào trục chính đó.
  <br><span class="en">Each eigenvector holds p values - the
  **loadings** - the contribution of each original variable to that
  axis.</span>
- Dạng ma trận: `A = V Λ V'`, với V chứa các véc-tơ riêng theo cột và Λ
  chéo hóa các trị riêng. Điểm thành phần là `Z = Xc V`.
  <br><span class="en">In matrix form `A = V Λ V'`, with V holding the
  eigenvectors in columns and Λ the diagonal eigenvalue matrix. The
  component scores are `Z = Xc V`.</span>

### SVD: đường đi mà phần mềm thật sự dùng - <span class="en">The SVD: the route software actually takes</span>

Slide 62 nói rõ: trong thực tế phần mềm **không lập ma trận hiệp phương
sai**. Nó áp SVD trực tiếp lên ma trận dữ liệu đã trừ trung bình `Xc`
(`n x p`): `Xc = U D V'`, trong đó các cột của **V** là các véc-tơ tải
(véc-tơ riêng của `Xc' Xc`), **UD** là ma trận điểm thành phần `Z`, và
`D = diag(d1, ..., dp)` là các **giá trị kỳ dị**, liên hệ với trị riêng
qua `lambda_m = d_m^2 / (n - 1)`.
<br><span class="en">Slide 62 states it plainly: in practice software
**does not form the covariance matrix**. It applies the SVD directly to
the centred data matrix `Xc` (`n x p`): `Xc = U D V'`, where the columns
of **V** are the loading vectors (eigenvectors of `Xc' Xc`), **UD** is
the score matrix `Z`, and `D = diag(d1, ..., dp)` holds the **singular
values**, related to the eigenvalues by
`lambda_m = d_m^2 / (n - 1)`.</span>

Ba lý do khiến điều này quan trọng: SVD **ổn định hơn về số học** vì nó
**không bao giờ bình phương dữ liệu** (lập `S` đòi nhân `Xc'` với `Xc`,
làm mất độ chính xác khi các biến gần cộng tuyến); nó **hoạt động được khi
p lớn hơn n**, trường hợp mà `S` suy biến; và nó chính là thứ mà
`sklearn.decomposition.PCA` cùng `prcomp()` của R dùng bên dưới - biết
điều này giải thích luôn vì sao `prcomp()` được ưa dùng hơn `princomp()`
cũ.
<br><span class="en">Three reasons this matters: the SVD is **numerically
more stable** because it **never squares the data** (forming `S` requires
multiplying `Xc'` by `Xc`, which loses precision when variables are near
collinear); it **works when p is greater than n**, where `S` is
singular; and it is what `sklearn.decomposition.PCA` and R's `prcomp()`
use underneath - knowing this also explains why `prcomp()` is preferred
to the older `princomp()`.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 54 (hiệp phương sai,
cảnh báo nó không phải tương quan), 55 (hình minh họa), 56 (hai cách phát
biểu mục tiêu, cùng giải bởi các véc-tơ riêng của S), 57 (ma trận hiệp
phương sai, 3 tính chất), 58 (trị riêng, véc-tơ riêng, dạng `V Λ V'`), 59
(hệ số tải và tỉ lệ phương sai giải thích được), 62 (SVD), 9 (ký hiệu
`lambda_m`, `v_m`, `Z`, `S`, `R`), 64 (`vết(R) = p` và nguồn gốc quy tắc
Kaiser).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slides 54
(covariance and the not-correlation warning), 55 (the illustration), 56
(the two objective statements, both solved by S's eigenvectors), 57 (the
covariance matrix and its 3 properties), 58 (eigenvalues, eigenvectors,
the `V Λ V'` form), 59 (loadings and the explained variance ratio), 62
(the SVD), 9 (the notation `lambda_m`, `v_m`, `Z`, `S`, `R`), 64
(`trace(R) = p` and the origin of Kaiser's rule).</span>

## Liên quan - <span class="en">Related</span>

- [[pca-k32]] - phương pháp mà bộ máy này phục vụ.
  <br><span class="en">[[pca-k32]] - the method this machinery
  serves.</span>
- [[choosing-number-of-components]] - trị riêng là đầu vào của cả ba quy
  tắc chọn m.
  <br><span class="en">[[choosing-number-of-components]] - the
  eigenvalues feed all three rules for choosing m.</span>
- [[pca-loadings-interpretation]] - véc-tơ riêng chính là hệ số tải cần
  diễn giải.
  <br><span class="en">[[pca-loadings-interpretation]] - the eigenvectors
  are the loadings to be interpreted.</span>
- [[principal-component-regression]] - dùng `Z` làm biến giải thích, và
  quay về `beta` bằng `Vm gamma`.
  <br><span class="en">[[principal-component-regression]] - uses `Z` as
  the regressors, mapping back via `Vm gamma`.</span>
- [[distance-measures]] - Mahalanobis là khoảng cách dùng chính ma trận
  hiệp phương sai này.
  <br><span class="en">[[distance-measures]] - Mahalanobis is the
  distance built on this same covariance matrix.</span>
