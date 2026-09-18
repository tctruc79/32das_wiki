---
type: concept
title: "Ghép PCA với các thuật toán khác và rò rỉ dữ liệu"
title_en: "Combining PCA with Other Algorithms, and Data Leakage"
tags: [chapter-4, k32, pca, pipeline, data-leakage, curse-of-dimensionality]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Part 3 của chương coi PCA như một **bước tiền xử lý** đứng trước một thuật
toán khác, theo luồng: dữ liệu thô `n x p` → chuẩn hóa → PCA `n x m` →
phân cụm / phân loại / hồi quy → kết quả. Phần này cũng nêu **lỗi phương
pháp luận đi kèm**: nếu chuẩn hóa và PCA được khớp trên toàn bộ dữ liệu
trước khi chia tập, kết quả kiểm định sẽ **quá lạc quan** - đó là **rò rỉ
dữ liệu**, và cách sửa là đặt mọi bước vào một `Pipeline`.
<br><span class="en">The chapter's Part 3 treats PCA as a
**preprocessing step** in front of another algorithm, in the flow: raw
data `n x p` → standardise → PCA `n x m` → clustering / classification /
regression → result. It also names **the methodological error that comes
with it**: if scaling and PCA are fitted on the full data before
splitting, the validation result is **optimistic** - that is **data
leakage**, and the fix is to put every step inside a
`Pipeline`.</span>

## Diễn giải - <span class="en">Explanation</span>

### Vì sao ghép: bốn vấn đề và bốn lợi ích - <span class="en">Why combine: four problems, four benefits</span>

Dữ liệu nhiều chiều gây ra **đa cộng tuyến**, **nhiễu và dư thừa**, **chi
phí tính toán cao**, và **lời nguyền số chiều** - khi p lớn, **mọi khoảng
cách từng đôi trở nên gần như bằng nhau**, điều này **làm vỡ mọi phương
pháp dựa trên khoảng cách** (tức KNN, SVM, K-Means, DBSCAN). PCA chữa
tương ứng: **loại bỏ tương quan** vì các thành phần vuông góc theo cấu
tạo; **giữ phần phương sai mang nhiều thông tin nhất**; **tăng tốc** các
thuật toán phía sau; và **cho phép trực quan hóa 2 chiều** kết quả.
<br><span class="en">High-dimensional data causes
**multicollinearity**, **noise and redundancy**, **high computational
cost**, and the **curse of dimensionality** - as p grows, **all pairwise
distances become nearly equal**, which **breaks every distance-based
method** (KNN, SVM, K-Means, DBSCAN). PCA addresses each: it **removes
correlations** since the components are orthogonal by construction;
**keeps the most informative variance**; **speeds up** downstream
algorithms; and **enables 2-D visualisation** of the result.</span>

### PCA cộng phân cụm, và bẫy vòng tròn - <span class="en">PCA plus clustering, and the circularity trap</span>

Ý tưởng: giảm xuống 2-10 thành phần rồi phân cụm trong không gian đó. Với
**K-Means** các cụm chặt hơn sau khi bỏ chiều dư thừa; với **phân cụm thứ
bậc** kết quả tốt hơn và **nhanh hơn rất nhiều** (vì `O(n^2)` chạy trên m
chiều thay vì p chiều); với **DBSCAN và GMM**, PCA **làm ổn định việc ước
lượng mật độ**, vốn suy giảm rất tệ khi p lớn.
<br><span class="en">The idea: reduce to 2-10 components and cluster
there. For **K-Means** clusters become more compact once redundant
dimensions go; for **hierarchical clustering** results are better and
**much faster** (since `O(n^2)` now runs in m dimensions rather than p);
for **DBSCAN and GMM**, PCA **stabilises density estimation**, which
degrades badly in high p.</span>

Hai cảnh báo của slide 76, cả hai đều quan trọng. Thứ nhất, **bỏ các thành
phần nhỏ có thể phá hủy đúng cái hướng đã tách hai nhóm ra** - **độ tách
và phương sai không phải một thứ**. Thứ hai, và đây là bẫy dễ mắc nhất:
**không được chạy PCA, vẽ PC1-PC2, rồi tuyên bố các nhóm nhìn thấy được đã
xác nhận kết quả phân cụm.** Bạn đã phân cụm **trong chính không gian
đó**, nên đương nhiên chúng trông tách biệt - đó là **lập luận vòng
tròn**. Muốn xác nhận thì phải dùng bằng chứng bên ngoài: tính bền vững
khi đổi mẫu, so với mô hình đối chứng, hoặc khác biệt trên các biến không
dùng để phân cụm.
<br><span class="en">Slide 76's two cautions, both important. First,
**dropping small components can destroy exactly the direction that
separated two groups** - **separation and variance are not the same
thing**. Second, and this is the easiest trap to fall into: **do not run
PCA, plot PC1-PC2, and then claim the visible groups validate your
clustering.** You clustered **in that very space**, so of course they
look separated - that is **circular**. Validation requires external
evidence: stability under resampling, a comparison against a null model,
or differences on variables not used in the clustering.</span>

### PCA cộng phân loại, và cảnh báo trung tâm - <span class="en">PCA plus classification, and the central caveat</span>

Với **hồi quy logistic**, PCA loại đa cộng tuyến nên **ổn định hóa các ước
lượng hệ số**; với **SVM và KNN**, các bộ phân loại dựa trên khoảng cách
**hưởng lợi rất lớn**; với **Naive Bayes**, PCA làm các đặc trưng **gần
độc lập hơn**, đúng bằng điều mô hình này giả định. Ví dụ định lượng: phân
loại chữ số MNIST thường áp PCA trước SVM, giữ khoảng **150 trong 784
chiều** giữ lại chừng **95% phương sai** và **giảm thời gian huấn luyện
một bậc độ lớn**.
<br><span class="en">For **logistic regression**, PCA removes
multicollinearity and thus **stabilises the coefficient estimates**; for
**SVM and KNN**, distance-based classifiers **benefit greatly**; for
**Naive Bayes**, PCA makes the features **closer to independent**,
exactly what that model assumes. The quantitative example: MNIST digit
classification commonly applies PCA before an SVM, keeping about **150 of
784 dimensions** to retain roughly **95% of the variance** and cut
training time by **an order of magnitude**.</span>

Cảnh báo trung tâm, và là câu quan trọng nhất của cả Part 3: **PCA là
không giám sát.** Nó chọn hướng cực đại hóa phương sai trong `X`, **không
hề biết gì về `y`**. Một hướng có phương sai thấp **có thể lại là hướng
tách các lớp hoàn hảo** - và PCA sẽ **bỏ nó đi trước tiên**. Nếu mục tiêu
là dự đoán, hãy xét **bình phương tối thiểu riêng phần (PLS)** hoặc **phân
tích biệt số tuyến tính (LDA)**, cả hai đều **dùng `y`** khi chọn hướng.
<br><span class="en">The central caveat, and Part 3's most important
sentence: **PCA is unsupervised.** It chooses directions maximising
variance in `X`, with **no knowledge of `y`**. A low-variance direction
**may be the one that separates the classes perfectly** - and PCA will
**discard it first**. If prediction is the goal, consider **partial least
squares (PLS)** or **linear discriminant analysis (LDA)**, both of which
**use `y`** when choosing directions.</span>

### Rò rỉ dữ liệu và cách sửa bằng Pipeline - <span class="en">Data leakage and the Pipeline fix</span>

**Lỗi** (slide 79): chuẩn hóa và chạy PCA trên **toàn bộ** dữ liệu, rồi
mới chia tập huấn luyện và tập kiểm tra. Tập kiểm tra khi đó **đã ảnh
hưởng tới các trung bình, độ lệch chuẩn và hệ số tải**, nên sai số kiểm
định thu được **quá lạc quan**. Điểm tinh tế đáng nhớ: sai ở đây không
phải sai công thức mà là **sai vị trí của lệnh khớp** - cùng một mô hình,
chỉ khác chỗ gọi `fit`.
<br><span class="en">**The mistake** (slide 79): scale and run PCA on the
**full** data set, then split into train and test. The test set has then
**already influenced the means, standard deviations and loadings**, so
the validation error is **optimistic**. The subtle point worth
remembering: the error is not in the formula but in **where the fit
happens** - the same model, only a differently placed `fit`.</span>

**Cách sửa**: đặt **mọi bước vào trong một `Pipeline`**, để chúng được
khớp lại **bên trong từng lớp kiểm định chéo**. Mã ở slide 79 dựng
`Pipeline` gồm `("scale", StandardScaler())`, `("pca", PCA())`,
`("clf", LogisticRegression(max_iter=2000))`, rồi `GridSearchCV` quét
`pca__n_components` trong `[2, 5, 10, 20, 50]` với `cv=5`. Ý chính:
**khi PCA làm đầu vào cho một mô hình dự đoán, m là một siêu tham số -
tinh chỉnh nó theo sai số kiểm định, không phải theo biểu đồ sườn dốc.**
<br><span class="en">**The fix**: put **every step inside a
`Pipeline`**, so each is re-fitted **within every cross-validation
fold**. The slide-79 code builds a `Pipeline` of
`("scale", StandardScaler())`, `("pca", PCA())`,
`("clf", LogisticRegression(max_iter=2000))`, then `GridSearchCV` over
`pca__n_components` in `[2, 5, 10, 20, 50]` with `cv=5`. Key idea:
**when PCA feeds a predictive model, m is a hyperparameter: tune it
against validation error, not a scree plot.**</span>

### Vì sao R bình phương trên tập huấn luyện không là bằng chứng - <span class="en">Why training R squared is not evidence</span>

Câu thảo luận số 6 ở slide 82 đúng là bài kiểm tra của mục này. Có ba lý
do độc lập. (1) **Số học**: R bình phương trên tập huấn luyện **không thể
giảm** khi thêm thành phần, và nếu giữ đủ p thành phần thì PCA chỉ là một
**phép quay** của cùng không gian cột, nên R bình phương huấn luyện
**bằng đúng** OLS thường - không thông tin nào được thêm vào. (2) **Rò
rỉ**: nếu chuẩn hóa và PCA được khớp trên toàn bộ dữ liệu thì con số đó
vốn đã không còn là ước lượng ngoài mẫu. (3) **Bản chất không giám sát**:
PCA chỉ có thể giúp một mô hình dự đoán bằng cách **giảm phương sai và
nhiễu**, nó **không thể thêm thông tin về `y`** - nên lợi ích nếu có phải
hiện ra **ngoài mẫu**, không bao giờ trong phần khớp.
<br><span class="en">Slide 82's discussion question 6 is precisely the
exam on this section. There are three independent reasons. (1)
**Arithmetic**: training R squared **cannot fall** as components are
added, and if all p components are kept PCA is only a **rotation** of the
same column space, so the training R squared **exactly equals** plain
OLS - no information was added. (2) **Leakage**: if scaling and PCA were
fitted on the full data, that number was never an out-of-sample estimate
to begin with. (3) **Unsupervised by nature**: PCA can only help a
predictive model by **reducing variance and noise**; it **cannot add
information about `y`** - so any gain must appear **out of sample**,
never in the fit.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 75 (vì sao ghép, sơ đồ
luồng, lời nguyền số chiều), 76 (PCA cộng phân cụm, hai cảnh báo), 77
(PCA cộng phân loại, ví dụ MNIST, cảnh báo PCA không giám sát), 78 (PCR),
79 (rò rỉ dữ liệu, mã `Pipeline` và `GridSearchCV`), 6 (PCA rất thường
dùng làm tiền xử lý cho mô hình có giám sát), 73 (PCA không biết bạn đang
dự đoán gì), 82 câu 6.
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slide 75
(why combine, the flow diagram, the curse of dimensionality), 76 (PCA
plus clustering and the two cautions), 77 (PCA plus classification, the
MNIST example, the unsupervised caveat), 78 (PCR), 79 (data leakage, the
`Pipeline` and `GridSearchCV` code), 6 (PCA very often used as
preprocessing for supervised models), 73 (PCA does not know what you are
predicting), 82 question 6.</span>

## Liên quan - <span class="en">Related</span>

- [[pca-k32]] - phương pháp được dùng làm bước tiền xử lý.
  <br><span class="en">[[pca-k32]] - the method being used as
  preprocessing.</span>
- [[principal-component-regression]] - trường hợp hồi quy, được tách
  thành một slide riêng.
  <br><span class="en">[[principal-component-regression]] - the
  regression case, given its own slide.</span>
- [[choosing-number-of-components]] - khi có biến đích, m phải chọn bằng
  kiểm định chéo.
  <br><span class="en">[[choosing-number-of-components]] - with a target
  present, m must be chosen by cross-validation.</span>
- [[train-test-split-and-cross-validation]] - khái niệm rò rỉ dữ liệu đã
  được giới thiệu ở Chapter 3; đây là biến thể của nó cho PCA.
  <br><span class="en">[[train-test-split-and-cross-validation]] - data
  leakage was introduced in Chapter 3; this is its PCA variant.</span>
- [[clustering-pitfalls-checklist]] - cảnh báo lập luận vòng tròn nên
  được coi là điều thứ tám của danh sách.
  <br><span class="en">[[clustering-pitfalls-checklist]] - the
  circularity warning belongs as the checklist's eighth item.</span>
- [[k-nearest-neighbors-k32]] - một trong các mô hình hưởng lợi nhiều
  nhất, vì nó dựa hoàn toàn trên khoảng cách.
  <br><span class="en">[[k-nearest-neighbors-k32]] - one of the biggest
  beneficiaries, being entirely distance-based.</span>
