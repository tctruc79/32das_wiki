---
type: concept
title: "Random Forest (K32)"
tags: [chapter-3, k32, random-forest, ensemble, bagging]
created: 2026-08-28
updated: 2026-08-28
status: complete
---

## Definition

A random forest is an **ensemble** learning
algorithm: build many small, weak decision trees and combine them into a
single strong learner by **averaging** (regression) or **majority vote**
(classification). It exists to fix exactly one weakness of a single tree:
its **instability** (high variance).

## Explanation

### Two sources of randomness

Slide 77 — điều giữ cho các cây khác nhau, và đây là toàn bộ bí quyết:

1. **Đóng bao (bagging)** — mỗi cây được huấn luyện trên một **mẫu lặp
   lại có hoàn lại (bootstrap)** của các quan sát.
2. **Lấy mẫu con đặc trưng** — tại **mỗi phép tách**, chỉ xét một tập con
   ngẫu nhiên gồm k trong số m đặc trưng.

Slide 77 — what keeps the trees different, which is
the whole trick: **bagging** (each tree on a bootstrap sample of the
observations, drawn with replacement) and **feature subsampling** (at
**each split**, only a random subset of k out of m features). Because of
these two, the trees are **decorrelated**, and averaging decorrelated
trees cancels much of a single tree's variance. Averaging *identical*
trees would cancel nothing — which is precisely what Teamwork 2 asks
students to explain in their own words.

### The two-stage algorithm

**Giai đoạn 1 — nuôi rừng** (slide 80):

1. Rút một mẫu lặp lại có hoàn lại từ dữ liệu huấn luyện.
2. Chọn ngẫu nhiên k trong tổng số m đặc trưng, với **k ≪ m**.
3. Trong k đặc trưng đó, tìm nút d với điểm tách tốt nhất.
4. Tách nút thành các nút con theo điểm tách đó.
5. Lặp bước 2-4 tới khi thỏa luật dừng.
6. Lặp bước 1-5 n lần để tạo n cây.

**Giá trị mặc định thường dùng** (mới ở bản 2026): **k = √m cho phân
loại** và **k = m/3 cho hồi quy**.

**Stage 1 — growing the forest** (slide 80): draw a
bootstrap sample → randomly select k of the m features (**k ≪ m**) → find
the best split among those k → split → repeat until the stopping rule →
repeat n times for n trees. **Typical defaults** (new in 2026):
**k = √m for classification**, **k = m/3 for regression**. **Stage 2 —
prediction** (slide 81): run the test features through **each tree**,
store its predicted target → count the votes → take the most-voted
target. **For regression**: replace the vote with the **average** of the
n predictions.

### Why use it

Slide 79:

- Với đủ số cây, rừng **rất kháng quá khớp** so với một cây sâu đơn lẻ.
- Xử lý tốt **giá trị khuyết** và kiểu dữ liệu hỗn hợp.
- Thêm cây giúp tăng độ chính xác **tới một mức rồi chững lại** — thêm
  nữa chỉ tốn thời gian tính toán chứ không làm hại.
- Cung cấp **điểm quan trọng của đặc trưng**, giúp diễn giải.
- **Sai số ngoài túi (OOB)** cho ước lượng kiểm định **miễn phí**: mỗi
  quan sát được kiểm tra trên khoảng **một phần ba** số cây chưa từng
  thấy nó lúc huấn luyện.

Slide 79: with enough trees the forest is very
resistant to overfitting versus a single deep tree; it handles missing
values and mixed data types; accuracy improves **up to a point then
plateaus**; it provides **feature importance** scores; and the
**out-of-bag (OOB)** error gives a **free** validation estimate — each
observation is tested on the roughly **one third** of trees that did not
see it during training. **The slide's caveat** (new): "the more trees,
the more accurate" is only true until the curve flattens; beyond that,
extra trees cost without benefit.

### In Python

Example 5.1 (slides 82-83):
`RandomForestClassifier(n_estimators=500, max_features="sqrt",
oob_score=True, random_state=42, n_jobs=-1)` — `max_features="sqrt"` *is*
the k = √m rule, `oob_score=True` turns on the free validation score, and
`n_jobs=-1` parallelises across all cores. After fitting, print
`rf.oob_score_` **next to** `rf.score(X_test, y_test)`, then rank the top
10 features with `rf.feature_importances_`.

## Appears in

[[chapter03-supervised-learning-k32]] — slides 77-83
(Section 5.1), 85 (the bagging vs boosting table), 86 (Teamwork 2), 110
(summary table: both tasks, `n_estimators`/`max_features`, **no
scaling**, a strong stable baseline).

## Related

- [[decision-tree-k32]] — the forest's building
  block, and the problem it was created to solve.
- [[boosting-ensemble]] — the other ensemble family;
  slide 85 compares the two head to head on 6 criteria.
- [[overfitting-underfitting-k32]] — random forests
  mainly attack the **variance** term of the error decomposition.
- [[train-test-split-and-cross-validation]] — the
  OOB error is an "automatic" form of validation that substitutes for a
  separate validation split.

## Notes

The random forest diagram (slide 78) and the
original-code screenshot (slide 83) are image-only. The slide 82 code
also has a broken line-wrap in its `# free validation score` comment when
extracted — the parameters themselves are fully readable.
