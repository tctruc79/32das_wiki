---
type: concept
title: "Quá khớp, chưa khớp và đánh đổi độ chệch–phương sai (K32)"
title_en: "Overfitting, Underfitting and the Bias–Variance Trade-off (K32)"
tags: [chapter-3, k32, overfitting, bias-variance, model-evaluation]
created: 2026-08-28
updated: 2026-08-28
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

| | Chưa khớp (slide 23) | Quá khớp (slide 24) |
|---|---|---|
| Vấn đề | Mô hình quá đơn giản | Mô hình quá phức tạp, học cả nhiễu |
| Trên tập huấn luyện | Kém | Cực tốt |
| Trên tập kiểm tra / dự báo | Kém | Kém |
| Dấu hiệu nhận biết | Sai số huấn luyện cao, sai số kiểm tra cao, **hai con số gần nhau** | Sai số huấn luyện rất thấp, sai số kiểm tra cao hơn nhiều — **khoảng cách lớn** |
| Cách xử lý | Mô hình phức tạp hơn; thêm hoặc cải thiện đặc trưng; **giảm** mức điều chuẩn | Mô hình đơn giản hơn; giảm độ phức tạp; thu thập thêm dữ liệu; **áp dụng** điều chuẩn; tỉa cây |

<span class="en">**Underfitting** (slide 23): too simple; poor on both
training and test data; symptom is high training error *and* high test
error, close together; fix with a more complex model, better features, or
*less* regularization. **Overfitting** (slide 24): too complex, learns
the noise; excellent on training data but poor on test/forecast data and
cannot generalise; symptom is very low training error but much higher
test error — a large gap; fix with a simpler model, less complexity, more
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

Slide 25 (**hoàn toàn mới** so với bản 2025) đưa ra công thức phân rã.
Với hàm mất mát bình phương sai số, sai số dự đoán kỳ vọng tách thành 3
phần:

E[(y − f̂(x))²] = **Độ chệch²[f̂(x)]** + **Phương sai[f̂(x)]** + **σ²**

- **Độ chệch²** — thành phần "quá đơn giản": mô hình sai một cách có hệ
  thống vì không đủ khả năng biểu diễn quy luật thật.
- **Phương sai** — thành phần "quá linh hoạt": dự đoán thay đổi mạnh khi
  tập huấn luyện thay đổi một chút.
- **σ²** — **sai số không thể giảm được**: nhiễu vốn có trong dữ liệu,
  không thuật toán nào loại bỏ được.

Trên trục độ phức tạp mô hình: **chưa khớp nằm bên trái** (độ chệch cao,
phương sai thấp), **quá khớp nằm bên phải** (độ chệch thấp, phương sai
cao), và **mô hình tốt nhất nằm ở điểm cực tiểu của đường tổng sai số**.
<br><span class="en">Slide 25 (**entirely new** versus 2025) gives the
decomposition: for a squared-error loss, E[(y − f̂(x))²] = Bias²[f̂(x)] +
Var[f̂(x)] + σ² — the "too simple" term, the "too flexible" term, and the
**irreducible** noise no algorithm can remove. On the complexity axis,
**underfitting lives on the left** (high bias, low variance),
**overfitting on the right** (low bias, high variance), and **the best
model sits at the minimum of the total-error curve**.</span>

### Cùng một đánh đổi, xuất hiện lại ở khắp chương - <span class="en">The same trade-off, recurring across the chapter</span>

- **KNN** (slide 37): K nhỏ ⇒ độ chệch thấp, phương sai cao (quá khớp);
  K lớn ⇒ phương sai thấp, độ chệch cao (chưa khớp).
- **Cây quyết định** (slide 72): 1 cây sâu là mô hình **phương sai cao**
  — thay đổi nhỏ trong dữ liệu tạo ra cây rất khác.
- **Rừng ngẫu nhiên** (slide 85): chủ yếu **giảm phương sai** bằng cách
  trung bình hóa nhiều cây đã được khử tương quan.
- **Tăng cường** (slide 85): chủ yếu **giảm độ chệch** bằng cách nối tiếp
  nhiều cây cụt nông.
- **Hồi quy đa thức** (slide 92): tăng bậc p là cách kinh điển để đi từ
  chưa khớp sang quá khớp.
- **Điều chuẩn** (slide 90, 96): cố tình đánh đổi **một chút tính không
  chệch để lấy nhiều độ chính xác dự đoán** — chính là cố ý dịch mô hình
  sang trái trên trục độ phức tạp.

<span class="en">The same trade-off recurs everywhere: KNN's small vs
large K; a deep single tree as a **high-variance** model; random forests
mainly cutting **variance** by averaging decorrelated trees; boosting
mainly cutting **bias** by chaining shallow stumps; polynomial degree p
as the classic route from underfitting to overfitting; and regularization
deliberately trading **a little unbiasedness for a lot of predictive
accuracy** — i.e. deliberately moving left on the complexity axis.</span>

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
