---
type: concept
title: "Hồi quy thành phần chính (PCR)"
title_en: "Principal Component Regression (PCR)"
tags: [chapter-4, k32, pcr, pca, regression, multicollinearity, pls]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Hồi quy thành phần chính là quy trình hai bước: **bước 1** áp PCA lên các
biến giải thích `X`; **bước 2** hồi quy `y` trên m thành phần chính đầu
tiên, tức `y` xấp xỉ `Z gamma` với `Z = X Vm`. Nó là cách dùng PCA khi
biến đích là một **lượng số**, và là mục thứ ba trong ba cách ghép PCA với
thuật toán khác ở Part 3.
<br><span class="en">Principal component regression is a two-step
procedure: **step 1** applies PCA to the predictors `X`; **step 2**
regresses `y` on the first m principal components, i.e. `y` approximately
equals `Z gamma` with `Z = X Vm`. It is how PCA is used when the target
is a **numeric quantity**, and is the third of Part 3's three ways of
chaining PCA to another algorithm.</span>

## Diễn giải - <span class="en">Explanation</span>

### Ba tình huống PCR giúp được - <span class="en">Three situations where PCR helps</span>

1. **Các biến giải thích tương quan mạnh.** Khi đa cộng tuyến nghiêm
   trọng, OLS trở nên **bất ổn** - các hệ số có sai số chuẩn rất lớn và
   đổi dấu khi thêm bớt quan sát. PCR không gặp vấn đề đó vì các thành
   phần **vuông góc theo cấu tạo**, nên không có cộng tuyến nào giữa các
   biến giải thích mới.
   <br><span class="en">**Highly correlated predictors.** Under severe
   multicollinearity OLS becomes **unstable** - coefficients have huge
   standard errors and flip sign as observations are added or removed.
   PCR does not, because the components are **orthogonal by
   construction**, so there is no collinearity among the new
   regressors.</span>
2. **p lớn hơn n.** Khi số biến vượt số quan sát, OLS **không có nghiệm
   duy nhất**; PCR vẫn chạy được vì nó hồi quy trên m thành phần với m
   nhỏ hơn n.
   <br><span class="en">**p greater than n.** When there are more
   variables than observations OLS has **no unique solution**; PCR still
   works because it regresses on m components with m smaller than
   n.</span>
3. **Cần một dạng điều chuẩn.** PCR **đánh đổi một chút độ chệch để lấy
   phương sai thấp hơn nhiều**, và slide nói rõ nó **họ hàng gần với hồi
   quy Ridge**. Khác biệt về cơ chế: Ridge co mọi hệ số về 0 theo mức độ
   liên tục, còn PCR **bỏ hẳn** các hướng có phương sai nhỏ nhất - một
   dạng co "rời rạc" theo hướng thay vì theo hệ số.
   <br><span class="en">**A form of regularisation is wanted.** PCR
   **trades a little bias for much lower variance**, and the slide notes
   it is **closely related to ridge regression**. The mechanical
   difference: ridge shrinks every coefficient towards zero continuously,
   whereas PCR **drops entirely** the directions with the smallest
   variance - a "discrete" shrinkage along directions rather than along
   coefficients.</span>

### Rủi ro và chi phí - <span class="en">The risk and the cost</span>

**Rủi ro**: các thành phần bị loại bỏ **vẫn có thể chứa thông tin dự
đoán**. Đây chính là hệ quả cụ thể của cảnh báo "PCA không giám sát": các
thành phần được xếp theo phương sai trong `X`, **không** theo mức liên
quan tới `y`, nên thành phần thứ 9 có phương sai bé vẫn có thể là thành
phần tương quan mạnh nhất với `y`.
<br><span class="en">**The risk**: the discarded components **may still
contain predictive information**. This is the concrete consequence of the
"PCA is unsupervised" caveat: components are ordered by variance in `X`,
**not** by relevance to `y`, so a low-variance ninth component can still
be the one most correlated with `y`.</span>

**Chi phí**: các hệ số `gamma` áp lên **các thành phần, không phải biến
gốc**, nên bản thân chúng khó diễn giải về mặt kinh tế. Muốn quay về biến
gốc phải tính `beta mũ = Vm gamma mũ` - và slide nêu hẳn công thức này,
cho thấy việc "dịch ngược" là một bước bắt buộc nếu muốn báo cáo tác động
của từng biến.
<br><span class="en">**The cost**: the `gamma` coefficients apply to
**the components, not the original variables**, so they are hard to
interpret economically on their own. Mapping back requires computing
`betahat = Vm gammahat` - and the slide states this formula explicitly,
showing that "translating back" is a required step if you want to report
each variable's effect.</span>

### PCR so với PLS - <span class="en">PCR versus PLS</span>

Câu so sánh ở cuối slide 78 rất gọn và đáng nhớ: **PCR chọn thành phần
chỉ dùng `X`; PLS chọn thành phần cực đại hóa hiệp phương sai với `y`.**
Hệ quả: **PLS thường cần ít thành phần hơn để đạt cùng độ chính xác**, vì
mỗi thành phần của nó đã được chọn "nhắm" vào `y` ngay từ đầu. Đổi lại,
PLS phức tạp hơn và các thành phần của nó phụ thuộc `y` nên không dùng lại
được cho một biến đích khác - còn các thành phần của PCR là tài sản dùng
chung, độc lập với mọi biến đích.
<br><span class="en">The comparison closing slide 78 is compact and worth
remembering: **PCR chooses components using only `X`; PLS chooses
components maximising covariance with `y`.** The consequence: **PLS
usually needs fewer components for the same accuracy**, because each of
its components was aimed at `y` from the start. In exchange, PLS is more
complex and its components depend on `y`, so they cannot be reused for a
different target - whereas PCR's components are a shared asset,
independent of any target.</span>

### Chọn m cho PCR - <span class="en">Choosing m for PCR</span>

Vì PCR có biến đích, **quy tắc chọn m đúng là kiểm định chéo**, không phải
biểu đồ sườn dốc (slide 59 quy tắc 4, và slide 79 nói lại). Và vì cả
chuẩn hóa lẫn PCA đều là các bước khớp trên dữ liệu, chúng **phải nằm
trong `Pipeline`** để không rò rỉ thông tin của tập kiểm tra vào các trung
bình, độ lệch chuẩn và hệ số tải.
<br><span class="en">Because PCR has a target, **the right rule for
choosing m is cross-validation**, not the scree plot (slide 59's rule 4,
restated on slide 79). And because both standardisation and PCA are steps
fitted on data, they **must sit inside a `Pipeline`** so that no test-set
information leaks into the means, standard deviations and
loadings.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 78 (toàn bộ nội dung PCR,
so sánh với PLS, công thức `beta mũ = Vm gamma mũ`), 75 (sơ đồ luồng có
nhánh hồi quy), 77 (cảnh báo PCA không giám sát, gốc của rủi ro ở đây), 79
(rò rỉ dữ liệu và chọn m bằng kiểm định chéo), 48 (loại bỏ đa cộng tuyến
trước hồi quy là một trong các công dụng cổ điển của PCA), 83 (một trong 5
mini project của bài tập là Principal Component Regression).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slide 78
(all the PCR content, the PLS comparison, the `betahat = Vm gammahat`
formula), 75 (the flow diagram's regression branch), 77 (the unsupervised
caveat, the source of the risk here), 79 (data leakage and choosing m by
cross-validation), 48 (removing multicollinearity before regression as
one of PCA's classic uses), 83 (one of the assignment's 5 mini projects
is Principal Component Regression).</span>

## Liên quan - <span class="en">Related</span>

- [[pca-combined-with-other-algorithms-k32]] - bối cảnh Part 3 và cảnh
  báo rò rỉ dữ liệu.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - the
  Part 3 context and the leakage warning.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] - Ridge là họ hàng gần
  của PCR; cả hai đánh đổi độ chệch lấy phương sai.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] -
  ridge is PCR's close relative; both trade bias for variance.</span>
- [[linear-regression-k32]] - OLS là mốc so sánh mà PCR được đặt ra để
  chữa khi nó bất ổn.
  <br><span class="en">[[linear-regression-k32]] - OLS is the benchmark
  PCR exists to repair when it becomes unstable.</span>
- [[eigenvalues-and-eigenvectors]] - `Vm` trong công thức chính là ma
  trận véc-tơ riêng.
  <br><span class="en">[[eigenvalues-and-eigenvectors]] - the `Vm` in the
  formula is the eigenvector matrix.</span>
- [[choosing-number-of-components]] - quy tắc thứ 4 là quy tắc đúng cho
  PCR.
  <br><span class="en">[[choosing-number-of-components]] - the fourth
  rule is the right one for PCR.</span>
- [[pca-k32]] - bước 1 của quy trình hai bước.
  <br><span class="en">[[pca-k32]] - step 1 of the two-step
  procedure.</span>
