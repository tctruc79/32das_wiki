---
type: concept
title: "Danh sách 7 điều kiểm tra trước khi trình bày kết quả phân cụm"
title_en: "The 7-Point Checklist Before Presenting a Clustering"
tags: [chapter-4, k32, clustering, diagnostics, stability, gap-statistic]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Danh sách này (slide 45) là bản kiểm kê phải chạy qua **trước khi trình
bày** một kết quả phân cụm. Nó tồn tại vì lý do đã nêu ở slide 8: thuật
toán luôn trả về K cụm, kể cả từ nhiễu, nên **không có chỉ số nào tự động
cho biết kết quả sai**. Bảy điều kiểm tra chính là thứ thay thế cho chỉ số
đó, và ý chính của slide là: **một phương án phân cụm là một giả thuyết,
không phải một phát hiện.**
<br><span class="en">This checklist (slide 45) is what to run **before
presenting** a clustering result. It exists for the reason given on slide
8: the algorithm always returns K clusters, even from noise, so **no
metric automatically tells you the result is wrong**. The seven checks
are the substitute for that metric, and the slide's key idea is: **a
clustering is a hypothesis, not a finding.**</span>

## Diễn giải - <span class="en">Explanation</span>

### Bảy điều, và mỗi điều chữa lỗi gì - <span class="en">The seven items, and what each one fixes</span>

1. **Đã chuẩn hóa chưa?** Biến không chuẩn hóa để biến có phương sai lớn
   nhất quyết định tất cả. Đây là lỗi mà ví dụ thu nhập/số lần ghé ở slide
   15 minh họa: chỉ đổi đơn vị đo là đổi hoàn toàn kết quả.
   <br><span class="en">**Did you standardise?** Unscaled variables let
   the largest-variance one decide everything. This is the error slide
   15's income/visits example illustrates: merely changing a unit changes
   the whole result.</span>
2. **Đã biện luận K chưa?** Đưa ra **biểu đồ khuỷu tay và hệ số
   silhouette**, không phải một con số lấy từ trên trời.
   <br><span class="en">**Did you justify K?** Show the **elbow and the
   silhouette**, not a number pulled from the air.</span>
3. **Các cụm có bền vững không?** Chạy lại trên **mẫu bootstrap** hoặc với
   **hạt giống ngẫu nhiên khác**. Nếu các phân khúc đổi hoàn toàn thì
   chúng không thật. Điều này chữa đúng giới hạn "hội tụ về cực tiểu địa
   phương, phụ thuộc khởi tạo" của K-Means.
   <br><span class="en">**Are the clusters stable?** Re-run on
   **bootstrap samples** or with a **different seed**. If the segments
   change completely, they are not real. This addresses exactly K-Means'
   "converges to a local optimum, depends on initialisation"
   limitation.</span>
4. **Dữ liệu ngẫu nhiên có cho ra bức tranh tương tự không?** K-Means
   **phân hoạch nhiễu đều một cách vui vẻ**. **Thống kê khoảng trống**
   kiểm định đúng điều này. Đây là điều dễ bị bỏ qua nhất trong bảy điều,
   và là điều duy nhất đặt kết quả cạnh một mốc so sánh bên ngoài.
   <br><span class="en">**Would random data give the same picture?**
   K-Means **partitions uniform noise happily**. The **gap statistic**
   tests exactly this. It is the most commonly skipped of the seven, and
   the only one that places the result beside an external
   benchmark.</span>
5. **Khoảng cách có phù hợp không?** Khoảng cách Euclid trên **các biến
   giả hạng mục** thường vô nghĩa - dùng **Gower** hoặc **K-Modes**.
   <br><span class="en">**Is the distance appropriate?** Euclidean on
   **categorical dummies** is usually meaningless - use **Gower** or
   **K-Modes**.</span>
6. **Điểm ngoại lai có chi phối kết quả không?** Kiểm tra xem có **cụm tí
   hon chỉ gồm một hai điểm** không - dấu hiệu điển hình của việc một vài
   điểm cực trị đã chiếm riêng một tâm cụm.
   <br><span class="en">**Did outliers drive the result?** Check for
   **tiny clusters of one or two points** - the classic sign that a few
   extreme points have captured a centroid of their own.</span>
7. **Có đặt được tên cho từng cụm không?** **Lập hồ sơ các tâm cụm trên
   các biến gốc**. Một phân khúc không kể được thành câu chuyện thì khó mà
   hành động được.
   <br><span class="en">**Can you name each cluster?** **Profile the
   centroids on the original variables.** A segment with no interpretable
   story is unlikely to be actionable.</span>

### Ba điều đầu là kỹ thuật, bốn điều sau là phương pháp luận - <span class="en">The first three are technical, the last four methodological</span>

Điều 1-3 kiểm tra **quy trình tính toán** có đúng không. Điều 4-7 kiểm tra
một câu hỏi khác và khó hơn: **kết quả có nghĩa gì không**. Điều 4 hỏi nó
có hơn nhiễu; điều 5 hỏi thước đo có phù hợp bản chất dữ liệu; điều 6 hỏi
nó có bị vài quan sát chi phối; điều 7 hỏi nó có diễn giải được. Một báo
cáo chỉ làm điều 1-3 vẫn có thể trình bày một kết quả hoàn toàn vô nghĩa
mà không sai một phép tính nào.
<br><span class="en">Items 1-3 check whether the **computational
process** was right. Items 4-7 check a different and harder question:
**whether the result means anything**. Item 4 asks if it beats noise;
item 5 if the measure suits the nature of the data; item 6 if a handful
of observations drove it; item 7 if it can be interpreted. A report doing
only items 1-3 can still present a completely meaningless result without
a single arithmetic error.</span>

### Liên hệ với yêu cầu của bài tập - <span class="en">The link to the assignment requirements</span>

Bốn hạng mục bắt buộc trong báo cáo ở slide 83 gần như là bản rút gọn của
danh sách này: (i) biện luận quyết định chuẩn hóa tương ứng điều 1; (ii)
biểu đồ khuỷu tay và silhouette, hoặc biểu đồ sườn dốc, tương ứng điều 2;
(iii) hồ sơ từng cụm hoặc diễn giải từng thành phần bằng lời, tương ứng
điều 7; (iv) một hạn chế trung thực, tức phần còn lại. Nói cách khác,
slide 45 dạy cách làm và slide 83 chấm điểm việc đã làm.
<br><span class="en">The four mandatory report items on slide 83 are
almost a condensed version of this checklist: (i) justify the scaling
decision corresponds to item 1; (ii) an elbow and silhouette plot, or a
scree plot, corresponds to item 2; (iii) a profile of each cluster or an
interpretation of each component in words corresponds to item 7; (iv) one
honest limitation covers the rest. In other words, slide 45 teaches the
practice and slide 83 grades it.</span>

### Câu hỏi thảo luận số 5 là bài kiểm tra danh sách này - <span class="en">Discussion question 5 is the exam on this checklist</span>

Slide 82 câu 5 đặt tình huống: bạn phân cụm khách hàng và ra 4 phân khúc,
quản lý hỏi "làm sao biết chúng là thật?" - bạn trình bày bằng chứng gì?
Câu trả lời tốt lấy trực tiếp từ danh sách: cho thấy dữ liệu **ưa** K = 4
(điều 2), cho thấy kết quả **lặp lại được** khi đổi mẫu (điều 3), cho thấy
nó **hơn mô hình đối chứng không có cấu trúc** (điều 4), cho thấy các phân
khúc **khác nhau trên những biến không dùng để phân cụm** (mở rộng của
điều 7), và cho thấy mỗi phân khúc **kể được thành một câu** (điều 7).
<br><span class="en">Slide 82's question 5 sets the scenario: you cluster
customers and get four segments, your manager asks "how do we know these
are real?" - what evidence do you present? A good answer comes straight
from the checklist: show that the data **prefers** K = 4 (item 2), that
the result **reproduces** under resampling (item 3), that it **beats a
structureless null model** (item 4), that the segments **differ on
variables not used in the clustering** (an extension of item 7), and that
each segment **can be described in one sentence** (item 7).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 45 (toàn bộ danh sách), 8
(lý do danh sách tồn tại), 15 (điều 1), 21 và 30 (điều 2), 25 (điều 3 và
6), 14 (điều 5), 81 (cả hai công cụ chỉ sinh ra giả thuyết), 82 câu 5
(câu hỏi thảo luận kiểm tra danh sách này), 83 (4 hạng mục bắt buộc trong
báo cáo).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slide 45
(the full checklist), 8 (why it exists), 15 (item 1), 21 and 30 (item 2),
25 (items 3 and 6), 14 (item 5), 81 (both tools only generate
hypotheses), 82 question 5 (the discussion question that examines this
checklist), 83 (the 4 mandatory report items).</span>

## Liên quan - <span class="en">Related</span>

- [[unsupervised-learning-framework]] - cảnh báo ở slide 8 mà danh sách
  này là câu trả lời thực hành.
  <br><span class="en">[[unsupervised-learning-framework]] - slide 8's
  warning, to which this checklist is the practical answer.</span>
- [[choosing-k-elbow-silhouette]] - công cụ cho điều 2 và điều 4.
  <br><span class="en">[[choosing-k-elbow-silhouette]] - the tools for
  items 2 and 4.</span>
- [[distance-measures]] - nền tảng cho điều 1 và điều 5.
  <br><span class="en">[[distance-measures]] - the basis for items 1 and
  5.</span>
- [[k-means-clustering-k32]] - phần lớn bảy điều sinh ra từ các giới hạn
  của thuật toán này.
  <br><span class="en">[[k-means-clustering-k32]] - most of the seven
  items arise from this algorithm's limitations.</span>
- [[pca-combined-with-other-algorithms-k32]] - cảnh báo lập luận vòng
  tròn ở slide 76 là điều thứ tám nên thêm vào danh sách khi có PCA đi
  trước.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - slide
  76's circularity warning is the eighth item to add whenever PCA comes
  first.</span>
