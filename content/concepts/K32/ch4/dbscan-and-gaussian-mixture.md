---
type: concept
title: "DBSCAN và mô hình hỗn hợp Gauss"
title_en: "DBSCAN and Gaussian Mixture Models"
tags: [chapter-4, k32, dbscan, gmm, clustering, density-based]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Ngoài K-Means và phân cụm thứ bậc, chương nêu tên hai phương pháp phân
cụm nữa. **DBSCAN** định nghĩa cụm theo **mật độ**: một cụm là một miền
dày, và điểm nằm trong miền thưa được gán nhãn **nhiễu**. **Mô hình hỗn
hợp Gauss (GMM)** mô hình hóa dữ liệu như một **hỗn hợp K phân phối
Gauss**, cho **gán mềm** dưới dạng xác suất `P(cụm k | x)` thay vì một
nhãn cứng.
<br><span class="en">Beyond K-Means and hierarchical clustering, the
chapter names two more methods. **DBSCAN** defines clusters by
**density**: a cluster is a dense region, and points in sparse regions
are labelled **noise**. A **Gaussian mixture model (GMM)** models the
data as a **mixture of K Gaussians**, giving **soft assignments** as
probabilities `P(cluster k | x)` rather than a hard label.</span>

## Diễn giải - <span class="en">Explanation</span>

### DBSCAN: ba vấn đề nó giải quyết - <span class="en">DBSCAN: the three problems it solves</span>

DBSCAN có hai tham số: `epsilon` (bán kính lân cận) và `minPts` (số điểm
tối thiểu trong lân cận đó). Nó giải quyết đúng ba giới hạn của K-Means:
<br><span class="en">DBSCAN has two parameters: `epsilon` (the
neighbourhood radius) and `minPts` (the minimum number of points in that
neighbourhood). It solves exactly three of K-Means'
limitations:</span>

1. **Không cần K.** Số cụm suy ra từ các tham số mật độ, chứ không phải
   từ người dùng.
   <br><span class="en">**It does not need K.** The number of clusters
   follows from the density parameters, not from the user.</span>
2. **Tìm được cụm hình dạng bất kỳ.** K-Means gán mỗi điểm về tâm gần
   nhất nên cụm của nó luôn lồi; DBSCAN đi theo hình dạng của miền dày,
   nên xử lý được hình lưỡi liềm hay hình vành khuyên.
   <br><span class="en">**It finds clusters of any shape.** K-Means
   assigns each point to the nearest centre so its clusters are always
   convex; DBSCAN follows the shape of the dense region, so it handles
   crescents and rings.</span>
3. **Có chỗ tường minh cho điểm ngoại lai.** K-Means buộc phải xếp mọi
   điểm vào đâu đó, nên điểm ngoại lai kéo lệch tâm cụm; DBSCAN gọi chúng
   là nhiễu - đúng thứ cần có cho bài toán gian lận hay bất thường.
   <br><span class="en">**It has an explicit place for outliers.**
   K-Means must put every point somewhere, so outliers drag centroids
   towards themselves; DBSCAN calls them noise - exactly what fraud or
   anomaly work needs.</span>

Cái giá phải trả: **hai tham số phải tinh chỉnh** thay cho một tham số K,
và slide ghi rõ DBSCAN **gặp khó khi các cụm có mật độ rất khác nhau** -
một `epsilon` duy nhất không thể vừa đủ rộng cho cụm thưa vừa đủ hẹp cho
cụm dày. Ngoài ra nó vẫn dựa trên khoảng cách, nên suy giảm trong không
gian nhiều chiều.
<br><span class="en">The price: **two parameters to tune** instead of one
K, and the slide notes DBSCAN **struggles when clusters have very
different densities** - a single `epsilon` cannot be both wide enough for
a sparse cluster and narrow enough for a dense one. It also still relies
on a distance, so it degrades in high dimensions.</span>

### GMM: gán mềm và chọn K bằng tiêu chí thông tin - <span class="en">GMM: soft assignment and information-criterion model choice</span>

GMM khớp bằng thuật toán **EM** (kỳ vọng - cực đại hóa), và có ba tính
chất đáng nhớ. Thứ nhất, **gán mềm**: mỗi điểm nhận một xác suất thuộc về
từng cụm, nên một khách hàng có thể "70% thuộc phân khúc A, 30% thuộc phân
khúc B" - điều K-Means không diễn đạt được. Thứ hai, **cụm hình ê-líp,
kích thước và hướng khác nhau**, vì mỗi thành phần có ma trận hiệp phương
sai riêng; **K-Means chính là trường hợp riêng** của GMM với hiệp phương
sai cầu và bằng nhau giữa các cụm. Thứ ba, và đây là ưu thế phương pháp
luận lớn nhất: **K có thể chọn bằng BIC hoặc AIC**, tức một **tiêu chí
chọn mô hình thật sự**, chứ không phải một heuristic thị giác như khuỷu
tay.
<br><span class="en">GMM is fitted by the **EM** (expectation-
maximisation) algorithm and has three memorable properties. First, **soft
assignment**: each point receives a probability of belonging to each
cluster, so a customer can be "70% segment A, 30% segment B" - something
K-Means cannot express. Second, **elliptical clusters of differing size
and orientation**, because each component has its own covariance matrix;
**K-Means is exactly the special case** of GMM with spherical, equal
covariance across clusters. Third, and this is the biggest
methodological advantage: **K can be chosen by BIC or AIC**, i.e. a
**genuine model-selection criterion** rather than a visual heuristic like
the elbow.</span>

### Cách chọn giữa bốn phương pháp - <span class="en">How to choose among the four methods</span>

Câu kết của slide 44 là bản hướng dẫn gọn nhất của cả chương:
<br><span class="en">Slide 44's closing line is the chapter's most
compact decision guide:</span>

| Tình huống | Phương pháp |
|---|---|
| Khối cầu và n lớn | K-Means |
| Hình dạng lạ, hoặc có nhiễu dự kiến | DBSCAN |
| Nhóm chồng lấn, muốn có xác suất | GMM |
| n nhỏ, muốn **nhìn** thấy cấu trúc | Thứ bậc |

### Vì sao PCA giúp cả hai - <span class="en">Why PCA helps both</span>

Slide 76 ghi: với DBSCAN và GMM, PCA **làm ổn định việc ước lượng mật
độ**, vốn suy giảm rất tệ khi p lớn. Lý do nằm ở lời nguyền số chiều: khi
p tăng, mọi khoảng cách từng đôi trở nên gần như bằng nhau, nên khái niệm
"miền dày" (DBSCAN) và việc ước lượng ma trận hiệp phương sai của từng
thành phần (GMM) đều mất ý nghĩa. Giảm về 2-10 thành phần chính khôi phục
lại điều kiện để hai phương pháp này hoạt động.
<br><span class="en">Slide 76 notes: for DBSCAN and GMM, PCA
**stabilises density estimation**, which degrades badly in high p. The
reason is the curse of dimensionality: as p grows, all pairwise distances
become nearly equal, so both the notion of a "dense region" (DBSCAN) and
the estimation of each component's covariance matrix (GMM) lose meaning.
Reducing to 2-10 principal components restores the conditions under which
these methods work.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 44 (cả hai phương pháp và
bảng hướng dẫn chọn), 20 (DBSCAN thuộc họ không ấn định K), 25 (các giới
hạn của K-Means mà hai phương pháp này chữa), 76 (PCA làm ổn định ước
lượng mật độ), 82 (câu thảo luận số 3 yêu cầu mô tả một phương pháp phân
cụm khác và nói nó giải quyết vấn đề gì).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slide 44
(both methods and the choice table), 20 (DBSCAN in the do-not-fix-K
family), 25 (the K-Means limitations these two fix), 76 (PCA stabilising
density estimation), 82 (discussion question 3 asks you to describe
another clustering method and say what problem it solves).</span>

**Lưu ý về khoảng trống nguồn**: cả DBSCAN và GMM chỉ có **một slide khái
niệm** (44) và **không có ví dụ mã** nào trong chương. Cú pháp phải tự tìm
(`sklearn.cluster.DBSCAN`, `sklearn.mixture.GaussianMixture`).
<br><span class="en">**A source-gap note**: DBSCAN and GMM get **one
conceptual slide** (44) and **no code example** in the chapter. The syntax
must be found elsewhere (`sklearn.cluster.DBSCAN`,
`sklearn.mixture.GaussianMixture`).</span>

## Liên quan - <span class="en">Related</span>

- [[k-means-clustering-k32]] - phương pháp mà cả hai được đặt ra để chữa
  giới hạn.
  <br><span class="en">[[k-means-clustering-k32]] - the method whose
  limitations both are introduced to fix.</span>
- [[hierarchical-clustering-k32]] - phương pháp thứ tư trong bảng hướng
  dẫn chọn.
  <br><span class="en">[[hierarchical-clustering-k32]] - the fourth
  method in the choice table.</span>
- [[choosing-k-elbow-silhouette]] - BIC/AIC của GMM là câu trả lời chặt
  chẽ hơn cho cùng câu hỏi chọn K.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - GMM's BIC/AIC is
  a more rigorous answer to the same question of choosing K.</span>
- [[pca-combined-with-other-algorithms-k32]] - lý do PCA thường đi trước
  hai phương pháp này.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - why
  PCA usually precedes these two.</span>
- [[clustering-pitfalls-checklist]] - điều 5 (khoảng cách có phù hợp
  không) liên quan trực tiếp tới việc chọn phương pháp.
  <br><span class="en">[[clustering-pitfalls-checklist]] - item 5 (is the
  distance appropriate) bears directly on method choice.</span>
