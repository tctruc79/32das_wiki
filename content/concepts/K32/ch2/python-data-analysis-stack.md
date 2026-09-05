---
type: concept
title: "Bộ thư viện Python cho phân tích dữ liệu"
title_en: "Python Data Analysis Stack"
tags: [chapter-2, k32, python, data-analysis, pandas, numpy]
created: 2026-08-24
updated: 2026-09-05
status: complete
---

> **Cách đọc trang này**: 6 thư viện chia làm 2 nhóm rất khác nhau về
> mục đích — NumPy/pandas/matplotlib/seaborn là **công cụ nền** (dùng ở
> mọi chương sau), còn statsmodels/scikit-learn là **2 triết lý mô hình
> hóa đối lập** (giải thích vs dự đoán) sẽ quay lại xuyên suốt Chapter 3.
> Nắm chắc sự đối lập statsmodels/scikit-learn ở đây giúp hiểu ngay vì
> sao Chapter 3 tách "đánh giá bằng ý nghĩa thống kê" khỏi "đánh giá bằng
> độ chính xác dự đoán".
> <br><span class="en">**How to read this page**: the 6 libraries split
> into 2 very different purposes — NumPy/pandas/matplotlib/seaborn are
> **infrastructure** (used in every later chapter), while statsmodels/
> scikit-learn embody **2 opposing modelling philosophies** (explanation
> vs prediction) that recur throughout Chapter 3. Understanding this
> opposition here makes it immediately clear why Chapter 3 separates
> "judged by statistical significance" from "judged by predictive
> accuracy".</span>

## Định nghĩa - <span class="en">Definition</span>

Bộ 6 thư viện Python dùng xuyên suốt phần thực hành của môn học: NumPy
(mảng số), pandas (bảng dữ liệu/DataFrame), matplotlib và seaborn (trực
quan hóa), statsmodels (kinh tế lượng), scikit-learn (học máy) — lần đầu
được giới thiệu trọn vẹn ở Chapter 2 K32 (mục "Python for Data
Analysis"), dùng tập dữ liệu tỉnh/thành Việt Nam `Data2.csv` làm ví dụ
minh họa xuyên suốt.
<br><span class="en">The 6 Python libraries used throughout the course's
hands-on work: NumPy (numerical arrays), pandas (DataFrames), matplotlib
and seaborn (visualization), statsmodels (econometrics), scikit-learn
(machine learning) — first introduced as a full set in Chapter 2 K32
("Python for Data Analysis"), using the `Data2.csv` Vietnamese provincial
dataset as a running example.</span>

## Diễn giải - <span class="en">Explanation</span>

- **NumPy (`np`)**: mảng số hiệu quả — phép toán áp dụng lên toàn bộ
  phần tử cùng lúc (`a * 2`), thống kê nhanh (`.mean()`, `.std()`,
  `.sum()`), đại số ma trận (`.shape`, `@` nhân ma trận), sinh số ngẫu
  nhiên tái lập được (`np.random.seed()` + `np.random.normal()`).
  <br><span class="en">**NumPy (`np`)**: efficient numerical arrays —
  element-wise operations, fast stats, matrix algebra, reproducible
  random number generation.</span>
- **pandas (`pd`)**: cấu trúc dữ liệu bảng (DataFrame). Quy trình chuẩn:
  nạp dữ liệu (`pd.read_csv()`) → khám phá ngay (`head()`, `info()`,
  `describe()`, `isnull().sum()`) → chọn/lọc (`.loc[]`/`.iloc[]`, điều
  kiện với `&`/`|`) → nhóm/gộp (`.groupby().agg()`) → làm sạch
  (`.dropna()`, `.fillna()`, `.drop_duplicates()`). Lời khuyên trọng tâm
  của slide: hầu hết lỗi trong nghiên cứu thực nghiệm đến từ việc *không
  nhìn dữ liệu trước* — luôn chạy `head()`/`info()`/`describe()` ngay
  sau khi nạp.
  <br><span class="en">**pandas (`pd`)**: tabular data structures
  (DataFrame). Standard workflow: import → inspect immediately → select/
  filter → group/aggregate → clean. Key advice: most empirical-research
  mistakes come from *not looking at the data first*.</span>
- **matplotlib (`plt`) và seaborn (`sns`)**: matplotlib cho kiểm soát chi
  tiết (đường, scatter, histogram, `plt.subplots()` để đặt nhiều biểu đồ
  trong 1 figure); seaborn cho biểu đồ thống kê đẹp sẵn trên dữ liệu dạng
  bảng (`histplot`, `boxplot`, `scatterplot` với `hue`, `regplot`) và
  **heatmap tương quan** (`sns.heatmap(df.corr(), annot=True)`).
  <br><span class="en">**matplotlib (`plt`) and seaborn (`sns`)**:
  matplotlib for fine-grained control; seaborn for statistical charts on
  tabular data plus a **correlation heatmap**.</span>
- **statsmodels (`sm`)**: định hướng **giải thích** — hồi quy OLS đơn
  giản (`sm.OLS(y, sm.add_constant(x)).fit()`) hoặc viết bằng công thức
  kiểu Stata/R (`smf.ols("y ~ x1 + x2 + C(nhóm)", data=df).fit()`),
  `.summary()` cho bảng hệ số/kiểm định đầy đủ, hỗ trợ biến phân loại
  (`C(...)`) và sai số chuẩn vững (`cov_type="HC1"`).
  <br><span class="en">**statsmodels (`sm`)**: oriented towards
  **explanation** — simple or formula-based OLS regression, full
  coefficient/test tables, categorical variables, robust standard
  errors.</span>
- **scikit-learn (`sklearn`)**: định hướng **dự đoán** — quy trình
  `train_test_split()` → `.fit()` trên tập huấn luyện → `.predict()`
  trên tập kiểm tra → đánh giá bằng `r2_score`. Slide nhấn mạnh sự khác
  biệt cốt lõi: statsmodels trả lời "hệ số này có ý nghĩa thống kê
  không", scikit-learn trả lời "mô hình này dự đoán tốt trên dữ liệu
  chưa thấy đến đâu".
  <br><span class="en">**scikit-learn (`sklearn`)**: oriented towards
  **prediction** — train/test split, fit, predict, evaluate. Core
  distinction: statsmodels asks "is this coefficient significant",
  scikit-learn asks "how well does this predict unseen data".</span>
- **`Data2.csv`** (dữ liệu minh họa): 63 tỉnh/thành Việt Nam, năm 2014,
  13 cột kinh tế-xã hội (GDP, dân số, đầu tư, tỷ suất sinh, % lao động
  qua đào tạo...). Dùng làm ví dụ thật cho toàn bộ chuỗi thao tác pandas
  (nạp → khám phá → lọc → nhóm theo vùng). Xem chi tiết cấu trúc dữ liệu
  tại [[chapter02-python-jupyter-k32]].
  <br><span class="en">**`Data2.csv`** (the example dataset): 63
  Vietnamese provinces, year 2014, 13 socioeconomic columns. Used as the
  real-data example for the full pandas workflow. Full structure
  documented in [[chapter02-python-jupyter-k32]].</span>

## Ví dụ có mã và kết quả thật - <span class="en">Worked code + real output</span>

Điều làm NumPy khác một list Python thông thường thể hiện rõ nhất qua 2
khả năng: áp dụng phép toán lên **toàn bộ mảng cùng lúc** thay vì lặp
từng phần tử, và sinh số ngẫu nhiên **tái lập được** nhờ đặt hạt giống
(`seed`) — điều kiện tiên quyết để một kết quả phân tích có thể được
người khác chạy lại và ra đúng con số giống hệt:
<br><span class="en">What sets NumPy apart from an ordinary Python list
shows most clearly through 2 capabilities: applying an operation to an
**entire array at once** rather than looping element by element, and
generating **reproducible** random numbers via a seed — a prerequisite
for an analysis result that others can re-run and get the exact same
numbers:</span>

```python
import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a * 2)              # phép toán áp dụng lên MỌI phần tử cùng lúc
print(a.mean(), a.std(), a.sum())

M = np.array([[1, 2], [3, 4]])          # ma trận 2x2
print(M.shape)
print(M @ M)                            # nhân ma trận

np.random.seed(2026)
x = np.random.normal(loc=0, scale=1, size=1000)   # 1000 số ngẫu nhiên N(0,1)
print(round(x.mean(), 4), round(x.std(), 4))
```

Kết quả in ra:
<br><span class="en">Printed output:</span>

```
[ 2 4 6 8 10]
3.0 1.4142135623730951 15
(2, 2)
[[ 7 10]
 [15 22]]
-0.0315 0.9621
```

**Điểm cần nhớ**: `x.mean()` ≈ −0.0315 và `x.std()` ≈ 0.9621 — rất gần
0 và 1 (tham số `loc=0, scale=1`) nhưng **không đúng tuyệt đối**, vì đây
chỉ là 1.000 lần rút mẫu ngẫu nhiên, không phải toàn bộ phân phối lý
thuyết. `np.random.seed(2026)` là lý do 2 con số này tái lập được y hệt
mỗi lần chạy lại — thiếu dòng này, mỗi lần chạy sẽ ra 1 kết quả hơi khác.
<br><span class="en">**Key point to remember**: `x.mean()` ≈ −0.0315 and
`x.std()` ≈ 0.9621 — close to 0 and 1 (`loc=0, scale=1`) but **not
exact**, since this is only 1,000 random draws, not the full theoretical
distribution. `np.random.seed(2026)` is why these two numbers reproduce
identically on every re-run; without it, each run would give a slightly
different result.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter02-python-jupyter-k32]] — toàn bộ mục 4 "Python for Data
  Analysis" (slide 58-68): bảng thư viện, NumPy, 3 bước pandas (nạp/lọc/
  nhóm dùng `Data2.csv`), matplotlib, seaborn, statsmodels (đơn + đa
  biến), scikit-learn.
  <br><span class="en">[[chapter02-python-jupyter-k32]] — all of Section
  4 "Python for Data Analysis" (slides 58-68).</span>

## Liên quan - <span class="en">Related concepts</span>

- [[python-jupyter-tooling-k32]] — điều kiện tiên quyết: cú pháp Python
  cơ bản và cách vận hành Jupyter Notebook, học ngay trước phần này
  trong cùng chương.
  <br><span class="en">[[python-jupyter-tooling-k32]] — the prerequisite:
  core Python syntax and Jupyter mechanics, taught right before this
  section in the same chapter.</span>
- Mô hình hồi quy tuyến tính và quy trình train/test xuất hiện ở đây chỉ
  là bản xem trước ("nếm thử") — khóa K31 dạy hồi quy tuyến tính và
  Ridge/Lasso chi tiết hơn nhiều ở chương riêng (Chapter 5). Theo quy
  tắc tách cụm K31/K32, không tạo wikilink chéo cụm ở đây — chỉ ghi nhận
  bằng chữ thường.
  <br><span class="en">The linear regression model and train/test
  workflow shown here are only a preview — the K31 cohort teaches linear
  regression and Ridge/Lasso in much more depth in its own chapter
  (Chapter 5). Per the K31/K32 separation rule, no cross-cluster
  wikilink is created here — noted in plain text only.</span>
