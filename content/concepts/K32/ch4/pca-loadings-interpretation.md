---
type: concept
title: "Diễn giải hệ số tải: nhân tố quy mô và nhân tố tương phản"
title_en: "Interpreting Loadings: Size Factors and Contrast Factors"
tags: [chapter-4, k32, pca, loadings, composite-index]
created: 2026-09-18
updated: 2026-09-18
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

**Hệ số tải** là p giá trị trong một véc-tơ riêng, mỗi giá trị cho biết
**mức đóng góp của một biến gốc vào thành phần chính đó**. Diễn giải hệ số
tải là bước 7 - bước cuối - của quy trình PCA, và là chỗ **kinh tế học
quay trở lại** sau một chuỗi phép tính đại số: một thành phần chỉ trở
thành một khái niệm dùng được khi ta đọc được nó **có nghĩa gì**.
<br><span class="en">**Loadings** are the p values in an eigenvector,
each showing **how much one original variable contributes to that
principal component**. Interpreting loadings is step 7 - the last step -
of the PCA workflow, and the point at which **the economics comes back
in** after a chain of algebra: a component only becomes a usable concept
once you can read **what it means**.</span>

## Diễn giải - <span class="en">Explanation</span>

### Hai mẫu hình cơ bản - <span class="en">The two basic patterns</span>

Slide 61 dạy cách đọc bằng một ví dụ 8 chỉ tiêu kinh tế xã hội (PCA trên
ma trận tương quan), và hai thành phần đầu minh họa đúng hai mẫu hình
thường gặp nhất:
<br><span class="en">Slide 61 teaches the reading with an 8-indicator
socio-economic example (correlation-matrix PCA), whose first two
components illustrate the two most common patterns:</span>

**PC1 (53.5%) - nhân tố quy mô, hay nhân tố phát triển chung.** Toàn bộ
hệ số tải **dương và gần bằng nhau**: GRDP đầu người 0.37, sản lượng công
nghiệp 0.36, vốn FDI 0.39, mật độ doanh nghiệp 0.28, số năm đi học 0.35,
tỉ lệ biết chữ 0.35, chi cho y tế 0.39, tiếp cận internet 0.33. Cách đọc:
tỉnh nào **làm tốt mọi mặt** thì điểm cao. Công dụng: dùng chính điểm PC1
làm **chỉ số phát triển tổng hợp**.
<br><span class="en">**PC1 (53.5%) - a size or general development
factor.** All loadings **positive and similar**: GRDP per capita 0.37,
industrial output 0.36, FDI inflow 0.39, firm density 0.28, schooling
years 0.35, literacy rate 0.35, health spending 0.39, internet access
0.33. The reading: a province scores high when it **does well on
everything**. The use: take the PC1 score itself as a **composite
development index**.</span>

**PC2 (25.4%) - nhân tố tương phản.** Các hệ số tải kinh tế **âm** và các
hệ số tải xã hội **dương**: mật độ doanh nghiệp -0.48, GRDP đầu người
-0.35, FDI -0.26, trong khi số năm đi học +0.40, tỉ lệ biết chữ +0.38,
chi y tế +0.29. Cách đọc: thành phần này **tách các tỉnh mạnh về kinh tế
nhưng yếu về xã hội** ra khỏi **các tỉnh ngược lại** - nó không đo mức
cao thấp mà đo **sự lệch cấu trúc**.
<br><span class="en">**PC2 (25.4%) - a contrast factor.** Economic
loadings **negative**, social loadings **positive**: firm density -0.48,
GRDP per capita -0.35, FDI -0.26, while schooling +0.40, literacy +0.38,
health spending +0.29. The reading: this component **separates provinces
that are economically strong but socially lagging** from **the
reverse** - it measures not level but **structural
imbalance**.</span>

Mẫu hình này rất phổ biến trong dữ liệu kinh tế: **PC1 là quy mô, PC2 trở
đi là cấu trúc.** Đó cũng là lý do câu thảo luận số 4 ở slide 82 hỏi về
trường hợp hướng phương sai lớn nhất **không** phải hướng đáng quan tâm -
với dữ liệu ở dạng mức, PC1 thường chỉ nói lại điều ai cũng biết (tỉnh nào
lớn), còn câu hỏi thú vị nằm ở các thành phần sau.
<br><span class="en">The pattern is very common in economic data: **PC1
is size, PC2 onwards is structure.** It is also why slide 82's discussion
question 4 asks for a case where the highest-variance direction is
**not** the most interesting - with data in levels, PC1 usually restates
what everyone already knows (which province is big), while the
interesting question lives in the later components.</span>

### Cảnh báo về dấu - <span class="en">The sign warning</span>

**Dấu của véc-tơ riêng là tùy ý.** Phần mềm có thể trả về `-v1` thay vì
`v1`; hai kết quả là **cùng một thành phần** và ý nghĩa **không đổi**, vì
một thành phần chỉ xác định một **hướng**, không xác định chiều. Hệ quả
thực hành ở slide 61: **đổi dấu cho dễ đọc trước khi báo cáo** - nếu PC1
ra toàn số âm cho các tỉnh phát triển, hãy nhân cả véc-tơ với -1 để "điểm
cao = phát triển hơn", và nói rõ đã làm vậy. Không đổi dấu thì bảng hệ số
tải vẫn đúng nhưng câu chuyện kể ra sẽ ngược.
<br><span class="en">**Eigenvector signs are arbitrary.** Software may
return `-v1` instead of `v1`; the two are **the same component** and the
interpretation is **unchanged**, because a component defines a
**direction**, not an orientation. The practical consequence on slide 61:
**flip signs for readability before reporting** - if PC1 comes out
negative for the developed provinces, multiply the vector by -1 so that
"high score = more developed", and say that you did. Without the flip the
loadings table is still correct but the story you tell comes out
backwards.</span>

### Vì sao khó diễn giải là một giới hạn thật - <span class="en">Why interpretability is a genuine limitation</span>

Slide 73 liệt kê "các thành phần thường khó diễn giải" như một giới hạn
của PCA, và lý do nằm ngay trong định nghĩa: mỗi thành phần là **hỗn hợp
của cả p biến**, nên khi p lớn và các hệ số tải rải đều, thành phần đó
không tương ứng với bất kỳ khái niệm nào có tên trước. Ví dụ 8 chỉ tiêu ở
slide 61 diễn giải được **vì** các hệ số tải có cấu trúc rõ (đều dương,
hoặc chia hai nhóm dấu); nếu chúng lộn xộn thì không có câu chuyện nào để
kể. **Sparse PCA** (cũng ở slide 73) tồn tại chính để chữa điều này: nó
buộc phần lớn hệ số tải về 0, nên mỗi thành phần chỉ còn liên quan tới vài
biến và đọc được ngay.
<br><span class="en">Slide 73 lists "components are often hard to
interpret" as a PCA limitation, and the reason is in the definition: each
component is a **mixture of all p variables**, so when p is large and the
loadings are spread evenly, the component corresponds to no
pre-existing named concept. Slide 61's 8-indicator example is
interpretable **because** its loadings have clear structure (all
positive, or split into two sign groups); if they were jumbled there
would be no story to tell. **Sparse PCA** (also on slide 73) exists
precisely to fix this: it forces most loadings to zero, so each component
involves only a few variables and reads immediately.</span>

### Nối với yêu cầu báo cáo - <span class="en">The link to the reporting requirement</span>

Hạng mục (iii) của bài tập ở slide 83 đòi **hồ sơ của từng cụm hoặc diễn
giải từng thành phần bằng lời**. Với nhánh PCA, đó chính là công việc của
trang này: lập bảng hệ số tải (một dòng mỗi biến gốc, một cột mỗi thành
phần như mã ở slide 71 dựng), đọc dấu và độ lớn, rồi **đặt tên** cho từng
thành phần. Một thành phần không đặt được tên thì cũng giống một cụm không
đặt được tên ở điều 7 của danh sách kiểm tra: khó mà hành động được.
<br><span class="en">Item (iii) of the slide-83 assignment requires **a
profile of each cluster or an interpretation of each component in
words**. On the PCA side, that is exactly this page's job: build the
loadings table (one row per original variable, one column per component,
as the slide-71 code does), read the signs and magnitudes, then **name**
each component. A component you cannot name is like a cluster you cannot
name in checklist item 7: hard to act on.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter04-unsupervised-learning-k32]] - slide 61 (bảng hệ số tải, nhân
tố quy mô và nhân tố tương phản, cảnh báo về dấu), 59 (hệ số tải là các
phần tử của véc-tơ riêng), 63 (bước 7 của quy trình), 71 (mã dựng
`DataFrame` hệ số tải), 73 (khó diễn giải là giới hạn; Sparse PCA là cách
chữa), 48 (dùng PCA xây chỉ số tổng hợp), 82 câu 4 (hướng phương sai lớn
nhất không phải hướng đáng quan tâm), 83 hạng mục (iii), 84 (ý tưởng đề
tài PCI và VHLSS đều là bài toán diễn giải hệ số tải).
<br><span class="en">[[chapter04-unsupervised-learning-k32]] - slide 61
(the loadings table, size and contrast factors, the sign warning), 59
(loadings as the eigenvector's entries), 63 (step 7 of the workflow), 71
(the code building the loadings `DataFrame`), 73 (interpretability as a
limitation; Sparse PCA as the fix), 48 (using PCA to build composite
indices), 82 question 4 (the highest-variance direction not being the
interesting one), 83 item (iii), 84 (the PCI and VHLSS project ideas are
both loadings-interpretation problems).</span>

**Lưu ý về file mã**: không file `.py` nào đi kèm chương in ra bảng hệ số
tải - `Example3.8_PCA.py` in `components_` dưới dạng mảng thô không có
tên biến, còn hai file PCA còn lại không in gì về hệ số tải. Mã trên slide
71 mới là bản làm đúng việc này.
<br><span class="en">**A note on the shipped code**: none of the
chapter's `.py` files prints a loadings table -
`Example3.8_PCA.py` prints `components_` as a raw array with no variable
names, and the other two PCA files print nothing about loadings. Only the
slide-71 code does this properly.</span>

## Liên quan - <span class="en">Related</span>

- [[pca-k32]] - bước 7 của quy trình 7 bước.
  <br><span class="en">[[pca-k32]] - step 7 of the 7-step
  workflow.</span>
- [[eigenvalues-and-eigenvectors]] - hệ số tải chính là các phần tử của
  véc-tơ riêng.
  <br><span class="en">[[eigenvalues-and-eigenvectors]] - the loadings
  are the eigenvector's entries.</span>
- [[choosing-number-of-components]] - phải chốt m trước khi diễn giải.
  <br><span class="en">[[choosing-number-of-components]] - m must be
  settled before interpreting.</span>
- [[clustering-pitfalls-checklist]] - điều 7 là yêu cầu song song ở phía
  phân cụm: đặt tên được cho từng cụm.
  <br><span class="en">[[clustering-pitfalls-checklist]] - item 7 is the
  parallel requirement on the clustering side: being able to name each
  cluster.</span>
- [[pca-combined-with-other-algorithms-k32]] - khi PCA làm tiền xử lý,
  hệ số tải là cách duy nhất để nói mô hình phía sau đang dùng gì.
  <br><span class="en">[[pca-combined-with-other-algorithms-k32]] - when
  PCA is preprocessing, the loadings are the only way to say what the
  downstream model is using.</span>
