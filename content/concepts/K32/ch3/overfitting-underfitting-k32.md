---
type: concept
title: "Quá khớp, chưa khớp và đánh đổi độ chệch–phương sai (K32)"
title_en: "Overfitting, Underfitting and the Bias–Variance Trade-off (K32)"
tags: [chapter-3, k32, overfitting, bias-variance, model-evaluation]
created: 2026-08-28
updated: 2026-09-05
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

**Chưa khớp** xảy ra khi mô hình **quá đơn giản** để nắm bắt quy luật nền
trong dữ liệu huấn luyện. **Quá khớp** xảy ra khi mô hình **quá phức
tạp**: nó học cả nhiễu chứ không chỉ quy luật. Hai trạng thái này là hai
đầu của cùng một trục — trục **độ phức tạp mô hình** — và mối quan hệ
định lượng giữa chúng chính là **đánh đổi độ chệch–phương sai**.
<br><span class="en">**Underfitting** happens when a model is **too
simple** to capture the underlying patterns in the training data.
**Overfitting** happens when a model is **too complex**: it learns the
noise as well as the pattern. The two are opposite ends of a single axis
— **model complexity** — and the quantitative relationship between them
is the **bias–variance trade-off**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Bảng đối chiếu 2 trạng thái - <span class="en">The two states side by side</span>

| | Chưa khớp | Quá khớp |
|---|---|---|
| Vấn đề | Mô hình quá đơn giản | Mô hình quá phức tạp, học cả nhiễu |
| Trên tập huấn luyện | Kém | Cực tốt |
| Trên tập kiểm tra / dự báo | Kém | Kém |
| Dấu hiệu nhận biết | Sai số huấn luyện cao, sai số kiểm tra cao, **hai con số gần nhau** | Sai số huấn luyện rất thấp, sai số kiểm tra cao hơn nhiều — **khoảng cách lớn** |
| Cách xử lý | Mô hình phức tạp hơn; thêm hoặc cải thiện đặc trưng; **giảm** mức điều chuẩn | Mô hình đơn giản hơn; giảm độ phức tạp; thu thập thêm dữ liệu; **áp dụng** điều chuẩn; tỉa cây |

<br><span class="en">**Underfitting**: too simple; poor on both training and
test data; symptom is high training error *and* high test error, close
together; fix with a more complex model, better features, or *less*
regularization. **Overfitting**: too complex, learns the noise;
excellent on training data but poor on test/forecast data and cannot
generalise; symptom is very low training error but much higher test
error — a large gap; fix with a simpler model, less complexity, more
data, regularization, or pruning.</span>

Điểm mấu chốt để chẩn đoán: **chỉ nhìn một con số là không đủ**. Sai số
huấn luyện cao có thể là chưa khớp; sai số huấn luyện thấp *tự nó* không
nói lên gì. Phải nhìn **cặp** (huấn luyện, kiểm tra) và khoảng cách giữa
chúng. Đây chính là nội dung câu hỏi ôn tập số 4 của giảng viên: mô hình
có độ chính xác 98% trên tập huấn luyện và 71% trên tập kiểm tra — khoảng
cách 27 điểm phần trăm là dấu hiệu quá khớp kinh điển.
<br><span class="en">The key to diagnosis: **one number is not enough**.
High training error may mean underfitting; low training error *by itself*
says nothing. You must look at the **pair** (training, test) and the gap
between them. This is exactly the instructor's review question 4: 98%
training accuracy and 71% test accuracy — a 27-point gap is the textbook
overfitting signature.</span>

### Đánh đổi độ chệch–phương sai - <span class="en">The bias–variance trade-off</span>

Bảng trên mô tả 2 *triệu chứng*; công thức phân rã độ chệch–phương sai
mới thực sự giải thích *vì sao* chúng xảy ra (**hoàn toàn mới** so với
bản 2025). Với hàm mất mát bình phương sai số, sai số dự đoán kỳ vọng
tách thành 3 phần:
<br><span class="en">The table above describes 2 *symptoms*; the
bias–variance decomposition (**entirely new** versus 2025) is what
actually explains *why* they occur. For a squared-error loss, the
expected prediction error decomposes into 3 parts:</span>

E[(y − f̂(x))²] = **Độ chệch²[f̂(x)]** + **Phương sai[f̂(x)]** + **σ²**
<br><span class="en">E[(y − f̂(x))²] = **Bias²[f̂(x)]** + **Variance[f̂(x)]** + **σ²**</span>

- **Độ chệch²** — thành phần "quá đơn giản": mô hình sai một cách có hệ
  thống vì không đủ khả năng biểu diễn quy luật thật.
  <br><span class="en">**Bias²** — the "too simple" term: the model is
  systematically wrong because it lacks the capacity to represent the
  true pattern.</span>
- **Phương sai** — thành phần "quá linh hoạt": dự đoán thay đổi mạnh khi
  tập huấn luyện thay đổi một chút.
  <br><span class="en">**Variance** — the "too flexible" term:
  predictions swing wildly when the training set changes slightly.</span>
- **σ²** — **sai số không thể giảm được**: nhiễu vốn có trong dữ liệu,
  không thuật toán nào loại bỏ được.
  <br><span class="en">**σ²** — the **irreducible error**: noise
  inherent in the data that no algorithm can remove.</span>

Trên trục độ phức tạp mô hình: **chưa khớp nằm bên trái** (độ chệch cao,
phương sai thấp), **quá khớp nằm bên phải** (độ chệch thấp, phương sai
cao), và **mô hình tốt nhất nằm ở điểm cực tiểu của đường tổng sai số**.
<br><span class="en">On the complexity axis: **underfitting lives on the
left** (high bias, low variance), **overfitting on the right** (low
bias, high variance), and **the best model sits at the minimum of the
total-error curve**.</span>

### Cùng một đánh đổi, xuất hiện lại ở khắp chương - <span class="en">The same trade-off, recurring across the chapter</span>

Giá trị thực sự của khung độ chệch–phương sai nằm ở chỗ nó không phải lý
thuyết trừu tượng riêng lẻ, mà là lời giải thích chung cho gần như mọi
lựa chọn thiết kế còn lại của chương: trong **KNN**, K nhỏ cho độ chệch
thấp nhưng phương sai cao (quá khớp), còn K lớn đảo ngược lại; một **cây
quyết định** để mặc định nuôi sâu là mô hình phương sai cao kinh điển —
chỉ cần thay đổi nhỏ trong dữ liệu huấn luyện là ra một cây rất khác;
**rừng ngẫu nhiên** tồn tại để tấn công đúng thành phần phương sai đó,
bằng cách trung bình hóa nhiều cây đã được khử tương quan; **tăng cường**
đi theo hướng ngược lại, tấn công thành phần độ chệch bằng cách nối tiếp
nhiều cây cụt nông; trong hồi quy, tăng bậc của một đa thức là con đường
kinh điển nhất để đi từ chưa khớp sang quá khớp; và **điều chuẩn** (Ridge/
Lasso) là ví dụ rõ ràng nhất của việc *cố ý* đánh đổi — chấp nhận một
chút độ chệch để đổi lấy nhiều độ chính xác dự đoán hơn, tức chủ động
dịch mô hình sang trái trên trục độ phức tạp.
<br><span class="en">The real value of the bias–variance frame is that
it is not an isolated abstract theory, but the shared explanation behind
almost every remaining design choice in the chapter: in **KNN**, a small
K gives low bias but high variance (overfitting), a large K the reverse;
a **decision tree** grown to full depth by default is the textbook
high-variance model; **random forests** exist to attack precisely that
variance term by averaging decorrelated trees; **boosting** goes the
opposite direction, attacking the bias term by chaining shallow stumps;
in regression, raising a polynomial's degree is the classic route from
underfitting to overfitting; and **regularization** (Ridge/Lasso) is the
clearest example of a *deliberate* trade — accepting a little more bias
in exchange for more predictive accuracy, i.e. intentionally moving left
on the complexity axis.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter03-supervised-learning-k32]] — slide 22 (đồ thị, chỉ có hình),
23 (chưa khớp), 24 (quá khớp), 25 (đánh đổi độ chệch–phương sai), 37
(chọn K), 72 (cây đơn lẻ không ổn định), 85 (bảng đóng bao vs tăng
cường), 92 (bậc đa thức), 94 (quá khớp trong hồi quy), 111 (câu hỏi ôn
tập 1 và 4).
<br><span class="en">[[chapter03-supervised-learning-k32]] — slide 22
(the curves, image only), 23 (underfitting), 24 (overfitting), 25 (the
trade-off), 37 (choosing K), 72 (single-tree instability), 85 (the
bagging vs boosting table), 92 (polynomial degree), 94 (overfitting in
regression), 111 (review questions 1 and 4).</span>

## Liên quan - <span class="en">Related</span>

- [[train-test-split-and-cross-validation]] — cơ chế **phát hiện** cả 2
  trạng thái; không chia dữ liệu thì không thấy được khoảng cách.
  <br><span class="en">[[train-test-split-and-cross-validation]] — the
  mechanism that **detects** both states; without a split there is no gap
  to see.</span>
- [[model-evaluation-metrics-k32]] — con số cụ thể dùng để đo khoảng
  cách đó.
  <br><span class="en">[[model-evaluation-metrics-k32]] — the concrete
  numbers used to measure that gap.</span>
- [[regularization-ridge-lasso-elastic-net-k32]] — cách xử lý quá khớp
  chuyên biệt cho bài toán hồi quy.
  <br><span class="en">[[regularization-ridge-lasso-elastic-net-k32]] —
  the overfitting remedy specific to regression.</span>
- [[random-forest-k32]] và [[boosting-ensemble]] — 2 cách tổ hợp tấn công
  2 thành phần khác nhau của phân rã (phương sai và độ chệch).
  <br><span class="en">[[random-forest-k32]] and [[boosting-ensemble]] —
  two ensembling routes attacking two different terms of the
  decomposition (variance and bias).</span>
- [[decision-tree-k32]] — tỉa cây là cách xử lý quá khớp chuyên biệt cho
  cây.
  <br><span class="en">[[decision-tree-k32]] — pruning is the
  tree-specific overfitting remedy.</span>

## Lưu ý - <span class="en">Notes</span>

Slide 22 (đồ thị quá khớp/chưa khớp) và đồ thị phân rã ở slide 25 đều là
hình, không trích xuất được văn bản — công thức phân rã ở trên được đọc
từ phần chữ đi kèm hình. Ghi chú ngắn duy nhất trên slide 22: "kiểm định
giúp kiểm soát quá khớp".
<br><span class="en">Slide 22 (the over/underfitting curves) and slide
25's decomposition plot are images with no extractable text — the formula
above comes from the accompanying prose. Slide 22's only note:
"validation helps control overfitting".</span>
