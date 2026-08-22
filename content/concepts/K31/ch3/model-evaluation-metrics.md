---
type: concept
title: "Chỉ số đánh giá mô hình"
title_en: "Model Evaluation Metrics"
tags: [chapter-3, chapter-5, k31, machine-learning]
created: 2026-08-22
updated: 2026-08-22
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Các chỉ số đánh giá mô hình đo mức độ sai lệch giữa giá trị dự đoán và
giá trị thực tế (cho bài toán regression), kết hợp với kiểm định chéo để
kiểm tra mô hình có tổng quát hóa tốt trên dữ liệu chưa từng thấy hay
không.
<br><span class="en">Model evaluation metrics measure how far predicted
values are from actual values (for regression problems), combined with
cross-validation to check whether a model generalizes well to unseen
data.</span>

## Diễn giải - <span class="en">Explanation</span>

- **3 chỉ số chính cho bài toán regression**:
  <br><span class="en">**3 main metrics for regression problems**:</span>
  - **Sai số tuyệt đối trung bình (MAE)** = trung bình của
    |Thực tế − Dự đoán|.
    <br><span class="en">**Mean Absolute Error (MAE)** = average of
    |Actual − Predicted|.</span>
  - **Sai số bình phương trung bình (MSE)** = tổng bình phương của
    (Thực tế − Dự đoán).
    <br><span class="en">**Mean Squared Error (MSE)** = sum of (Actual −
    Predicted)².</span>
  - **Căn bậc hai sai số bình phương trung bình (RMSE)** = căn bậc hai
    của MSE.
    <br><span class="en">**Root Mean Squared Error (RMSE)** = square root
    of MSE.</span>
  - Chỉ số khác (không đi sâu trong slide): RSE, RAE, RMSE chuẩn hóa
    (Norm RMSEP), RMSE tương đối (RRMSEP).
    <br><span class="en">Other metrics (not detailed in the slide): RSE,
    RAE, Normalized RMSE (Norm RMSEP), Relative RMSE (RRMSEP).</span>
  - **Sai số phần trăm tuyệt đối trung bình (MAPE)** — bổ sung ở Chapter
    5: (1/n)Σ|Yᵢ−Ŷᵢ|/|Yᵢ| × 100. Khác MAE/MSE/RMSE ở chỗ MAPE là chỉ số
    **tương đối** (tính theo %), nên so sánh được giữa các bài toán có
    thang đo khác nhau — điều mà MAE/MSE/RMSE (chỉ số tuyệt đối) không
    làm được.
    <br><span class="en">**Mean Absolute Percentage Error (MAPE)** —
    added in Chapter 5: (1/n)Σ|Yᵢ−Ŷᵢ|/|Yᵢ| × 100. Unlike MAE/MSE/RMSE,
    MAPE is a **relative** metric (in %), so it's comparable across
    problems with different scales — something MAE/MSE/RMSE (absolute
    metrics) can't do.</span>
- **Kiểm định chéo (Cross-validation)**: kỹ thuật kiểm tra hiệu quả mô
  hình bằng cách chia dữ liệu thành tập huấn luyện (training set) và tập
  kiểm tra (testing set). 2 cách phổ biến: **Leave-one-out** (huấn luyện
  N−1 quan sát, kiểm tra 1 quan sát) và **K-folds** (chia dữ liệu thành K
  phần).
  <br><span class="en">**Cross-validation**: the technique for testing
  model effectiveness by splitting data into a training set and a testing
  set. 2 common methods: **Leave-one-out** (train on N−1 observations,
  test on 1) and **K-folds** (split data into K parts).</span>

## Xuất hiện trong - <span class="en">Appears in</span>

- [[chapter03-machine-learning-knn]] — 3 chỉ số MAE/MSE/RMSE, kiểm định
  chéo (leave-one-out, K-folds); dùng lại y hệt cho đánh giá KNN
  Regression (slide 39).
  <br><span class="en">[[chapter03-machine-learning-knn]] — the 3
  MAE/MSE/RMSE metrics, cross-validation (leave-one-out, K-folds); reused
  identically for evaluating KNN Regression (slide 39).</span>
- [[chapter05-ridge-lasso]] — bổ sung MAPE (chỉ số mới, không có ở
  Chapter 3) vào bộ chỉ số đánh giá hồi quy.
  <br><span class="en">[[chapter05-ridge-lasso]] — adds MAPE (new,
  absent from Chapter 3) to the regression evaluation metric set.</span>

## Liên quan - <span class="en">Related concepts</span>

- [[overfitting-underfitting]] — kiểm định chéo là công cụ chính để phát
  hiện quá khớp.
  <br><span class="en">[[overfitting-underfitting]] — cross-validation is
  the main tool for detecting overfitting.</span>
- [[k-nearest-neighbors]] — dùng các chỉ số này để đánh giá khi KNN được
  áp dụng cho bài toán regression.
  <br><span class="en">[[k-nearest-neighbors]] — uses these metrics when
  KNN is applied to a regression problem.</span>
