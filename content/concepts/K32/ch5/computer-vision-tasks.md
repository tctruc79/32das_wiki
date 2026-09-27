---
type: concept
title: "Bài toán thị giác máy tính và hệ phân tầng đặc trưng"
title_en: "Computer Vision Tasks and the Feature Hierarchy"
tags: [chapter-5, k32, deep-learning, computer-vision, object-detection, segmentation]
created: 2026-09-27
updated: 2026-09-27
status: complete
---

## Định nghĩa - <span class="en">Definition</span>

Mục tiêu của thị giác máy tính được slide 64 đặt trong một câu trích: *"To
know what is where by looking"* - từ ảnh, khám phá xem **có gì** trong thế
giới, **ở đâu**, **đang diễn ra hành động gì**, và dự đoán sự kiện. Điều kiện
tiên quyết để làm được việc đó là một nhận thức rất đơn giản (slide 67): với
máy tính, **một bức ảnh chỉ là một ma trận các số trong khoảng `[0, 255]`** -
`1080 × 1080 × 3` cho một ảnh màu RGB, với ba kênh màu.
<br><span class="en">Computer vision's goal is set in a quotation on slide 64:
*"To know what is where by looking"* - from images, discover **what** is present
in the world, **where**, **what actions** are taking place, and predict events.
The precondition for doing any of that is a very simple realisation (slide 67):
to a computer **an image is just a matrix of numbers in `[0, 255]`** -
`1080 × 1080 × 3` for an RGB colour image, with three colour
channels.</span>

## Diễn giải - <span class="en">Explanation</span>

### Hai loại bài toán, và bốn đầu ra - <span class="en">Two kinds of task, and four heads</span>

Slide 68 phân biệt hai loại cơ bản: **hồi quy** khi biến đầu ra nhận giá trị
liên tục (ví dụ góc đánh lái) và **phân loại** khi biến đầu ra là một nhãn lớp -
khi đó mạng trả ra **xác suất thuộc từng lớp** (Lincoln 0.80, Washington 0.10,
Jefferson 0.05, Obama 0.05). Slide 87 mở rộng thành bốn đầu ra gắn trên **cùng
một** khối học đặc trưng `CONV + RELU + POOL × N`:
<br><span class="en">Slide 68 distinguishes two basic kinds: **regression**,
where the output takes a continuous value (e.g. a steering angle), and
**classification**, where it takes a class label - the network then returning
**the probability of each class** (Lincoln 0.80, Washington 0.10, Jefferson
0.05, Obama 0.05). Slide 87 expands this into four heads attached to **one and
the same** `CONV + RELU + POOL × N` feature-learning block:</span>

| Đầu ra | Bài toán | Ví dụ trong chương |
|---|---|---|
| Phân loại | Ảnh → nhãn | Sàng lọc ung thư vú, vượt bác sĩ X-quang chuyên môn (McKinney et al., *Nature* 2020) |
| Phát hiện đối tượng | Ảnh → nhãn **và** hộp bao | R-CNN, Faster R-CNN (slide 88) |
| Phân đoạn | Ảnh → nhãn cho **từng điểm ảnh** | Mạng toàn tích chập (Long et al., CVPR 2015) |
| Điều khiển theo xác suất | Ảnh → phân phối trên lệnh điều khiển | Điều hướng đầu-cuối (Amini et al., ICRA 2019) |

Ý quan trọng của slide 87 nằm ở chỗ **nửa trước không đổi**: cùng một bộ trích
đặc trưng phục vụ được cả bốn bài toán, chỉ thay phần gắn ở cuối. Đó là hệ quả
trực tiếp của cách chia hai nửa ở slide 85, xem
[[convolutional-neural-network]].
<br><span class="en">Slide 87's key point is that **the front half does not
change**: one feature extractor serves all four problems, only the part attached
at the end differs. That follows directly from the two-half split on slide 85 -
see [[convolutional-neural-network]].</span>

### Vì sao đặc trưng thủ công thất bại: sáu nguồn biến thiên - <span class="en">Why hand-engineered features fail: six sources of variation</span>

Slide 69 vẽ quy trình cũ ba bước - kiến thức chuyên ngành → định nghĩa đặc
trưng → phát hiện đặc trưng để phân loại - rồi liệt kê sáu thứ làm nó dễ vỡ:
<br><span class="en">Slide 69 draws the old three-step pipeline - domain
knowledge → define features → detect features to classify - then lists six
things that make it brittle:</span>

| Nguồn biến thiên | Nội dung |
|---|---|
| Biến thiên góc nhìn | Cùng vật thể nhìn từ hướng khác |
| Biến thiên tỉ lệ | Cùng vật thể ở kích thước khác |
| Biến dạng | Vật thể mềm, đổi hình |
| Che khuất | Một phần vật thể bị che |
| Điều kiện chiếu sáng | Sáng tối khác nhau |
| Nhiễu nền | Vật thể lẫn vào nền |
| Biến thiên trong cùng lớp | Có rất nhiều kiểu ghế khác nhau |

Danh sách này quan trọng vì nó là lời biện hộ cho toàn bộ cách tiếp cận học
sâu: không phải vì đặc trưng thủ công **sai**, mà vì muốn bao hết sáu (thật ra
bảy) nguồn biến thiên trên bằng quy tắc do người viết thì số quy tắc nổ ra
không kiểm soát được. Câu hỏi thay thế ở cuối slide lặp lại nguyên văn ý của
slide 4: liệu có thể **học một hệ phân tầng đặc trưng thẳng từ dữ liệu**?
<br><span class="en">The list matters because it is the whole case for the deep
learning approach: not that hand-engineered features are **wrong**, but that
covering those six (in fact seven) sources of variation with human-written rules
makes the number of rules explode uncontrollably. The replacement question at
the bottom repeats slide 4 verbatim: can we **learn a hierarchy of features
directly from the data**?</span>

### Hệ phân tầng đặc trưng: trục xuyên suốt cả chương - <span class="en">The feature hierarchy: the chapter's spine</span>

Đây là ý được nhắc ba lần ở ba chỗ cách nhau rất xa, và ba lần ấy tạo thành
một lập luận trọn vẹn:
<br><span class="en">This idea recurs three times at widely separated points,
and the three occurrences form one complete argument:</span>

| Slide | Vai trò |
|---|---|
| 4 | **Nêu ra**: cạnh → mắt mũi tai → cấu trúc khuôn mặt; "không ai lập trình bất kỳ tầng nào"; và phép ghép tầng ấy là nghĩa của chữ **sâu** |
| 69 | **Lặp lại làm động cơ**: đúng ba tầng đó, nhưng nêu như câu hỏi đặt ra sau khi đặc trưng thủ công thất bại (Lee et al., ICML 2009) |
| 84 | **Chứng minh**: các bộ lọc tích chập học được thực sự xếp thành đúng ba tầng ấy - lớp 1 cạnh và vệt tối, lớp 2 mắt tai mũi, lớp 3 cấu trúc khuôn mặt |

Đọc ba slide này liền nhau là cách hiểu nhanh nhất vì sao chương được xếp theo
thứ tự đó. Slide 4 hứa, slide 69 giải thích tại sao lời hứa ấy cần thiết, slide
84 cho thấy nó được thực hiện. Và cơ chế làm nó được là **vùng tiếp nhận rộng
ra theo độ sâu** - xem [[convolutional-neural-network]].
<br><span class="en">Reading those three slides together is the fastest way to
see why the chapter is ordered as it is. Slide 4 promises, slide 69 explains why
the promise is needed, slide 84 shows it delivered. And the mechanism that makes
it work is the **receptive field widening with depth** - see
[[convolutional-neural-network]].</span>

### Phát hiện đối tượng: ba cách làm, một mạch tiến hóa - <span class="en">Object detection: three approaches, one evolution</span>

Slide 88 phân biệt rõ hai bài toán: **phân loại** là `ảnh → CNN → nhãn`
("taxi"); **phát hiện** là `ảnh → CNN → nhãn và hộp bao (x, y, w, h)`, và khi
có nhiều vật thì trả về cả một danh sách. Ba cách làm:
<br><span class="en">Slide 88 separates the two problems clearly:
**classification** is `image → CNN → label` ("taxi"); **detection** is
`image → CNN → label plus a bounding box (x, y, w, h)`, and with several objects
a whole list. Three approaches:</span>

| Cách làm | Nội dung | Vấn đề |
|---|---|---|
| Ngây thơ | Phân loại mọi hộp ở mọi tỉ lệ, vị trí, kích thước | **Quá nhiều đầu vào** |
| R-CNN | Trích khoảng 2000 vùng đề xuất, tính đặc trưng CNN trên từng vùng đã bóp méo, phân loại các vùng | Chậm và dễ vỡ vì **đề xuất vùng làm thủ công** (Girshick et al., CVPR 2014) |
| Faster R-CNN | Ảnh **chỉ đi qua bộ trích đặc trưng một lần**; một **mạng đề xuất vùng** tự học ra các vùng ứng viên | Nhanh và học được đầu-cuối (Ren et al., 2016) |

Mạch tiến hóa ấy lặp lại đúng thông điệp của cả bài giảng: **thay phần làm thủ
công bằng phần học được**. Ở slide 78 đó là bộ lọc thay cho đặc trưng thủ công;
ở đây là mạng đề xuất vùng thay cho quy tắc đề xuất vùng. Cùng một nguyên tắc,
áp ở hai tầng khác nhau của cùng hệ thống.
<br><span class="en">That evolution repeats the lecture's whole message:
**replace the hand-made part with a learned part**. On slide 78 it was filters
replacing hand-engineered features; here it is a region proposal network
replacing region proposal rules. The same principle applied at two different
levels of one system.</span>

### Hai đầu ra còn lại - <span class="en">The two remaining heads</span>

**Phân đoạn ngữ nghĩa** (slide 89): gán nhãn cho **từng điểm ảnh** (bò, cỏ,
trời). Mọi lớp đều là lớp tích chập, giảm mẫu xuống đặc trưng độ phân giải thấp
rồi **tăng mẫu ngược lên** thành dự đoán kích thước `H × W`
(`tf.keras.layers.Conv2DTranspose`, `torch.nn.ConvTranspose2d`; Long et al.,
CVPR 2015). Điểm khác biệt về kiến trúc: không có lớp kết nối đầy đủ ở cuối, vì
đầu ra không phải một nhãn mà là **một ảnh nhãn**.
<br><span class="en">**Semantic segmentation** (slide 89): label **every pixel**
(cow, grass, sky). All layers are convolutional, downsampling to low-resolution
features then **upsampling** back to `H × W` predictions
(`tf.keras.layers.Conv2DTranspose`, `torch.nn.ConvTranspose2d`; Long et al.,
CVPR 2015). The architectural difference: no fully connected layer at the end,
because the output is not one label but **an image of labels**.</span>

**Điều khiển liên tục** (slide 89): đầu vào là tri giác thô `I` (camera) cùng
một bản đồ thô `M` (GPS); đầu ra là một **phân phối xác suất trên các lệnh điều
khiển** (đánh lái). Đặc trưng tích chập từ camera và từ bản đồ được **ghép lại**
rồi ánh xạ thành một hỗn hợp các phân phối Gauss trên góc lái, huấn luyện
đầu-cuối với `L = -log P(theta | I, M)`, **không cần bất kỳ nhãn nào do người
gán** (Amini et al., ICRA 2019). Chi tiết cuối đáng để ý: đây là ví dụ duy nhất
trong chương mà việc huấn luyện **không cần dữ liệu có nhãn của người**, tức nó
gần với học không giám sát hơn ba đầu ra kia.
<br><span class="en">**Continuous control** (slide 89): inputs are raw
perception `I` (camera) and a coarse map `M` (GPS); output is a **probability
distribution over control commands** (steering). Convolutional features from the
cameras and the map are **concatenated** and mapped to a mixture of Gaussians
over steering, trained end to end with `L = -log P(theta | I, M)`, **without any
human labelling** (Amini et al., ICRA 2019). That last detail is worth noting:
this is the chapter's only example where training **needs no human-labelled
data**, putting it closer to unsupervised learning than the other three
heads.</span>

### Thị giác máy tính đã đi tới đâu - <span class="en">How far computer vision has come</span>

Slide 66 nêu bốn nhóm ứng dụng: **nhận diện khuôn mặt** (định vị các mốc mắt,
mũi, miệng rồi nhận dạng người); **xe tự lái** (ảnh camera vào mạng, ra lệnh
đánh lái); **y học và sinh học** (ung thư vú trên nhũ ảnh, COVID-19 từ X-quang
ngực, ung thư da - Esteva 2017, McKinney 2020, Wang 2020); **hỗ trợ tiếp cận**
(camera điện thoại nhận ra vạch dẫn đường trên đường chạy để người khiếm thị
chạy không cần người dẫn - Google Project Guideline). Câu chốt nêu mạch chung:
trong mọi trường hợp, quy trình là **mắt → mạng nơ-ron → quyết định**.
<br><span class="en">Slide 66 names four application groups: **facial
recognition** (locating eye, nose and mouth landmarks then identifying a
person); **self-driving cars** (camera image in, steering commands out);
**medicine and biology** (breast cancer in mammograms, COVID-19 from chest
X-rays, skin cancer - Esteva 2017, McKinney 2020, Wang 2020); **accessibility**
(a phone camera detecting a running track's guideline so a blind runner can run
unassisted - Google Project Guideline). The closing line names the common
thread: in every case the pipeline is **eye → neural network →
decision**.</span>

## Xuất hiện trong - <span class="en">Appears in</span>

[[chapter05-deep-learning-k32]] - slide 64 (mục tiêu "to know what is where by
looking"), 66 (bốn nhóm ứng dụng, "mắt → mạng → quyết định"), 67 (ảnh là ma
trận số, `1080 × 1080 × 3`), 68 (hồi quy so với phân loại, xác suất từng lớp,
phát hiện đặc trưng mức cao), 69 (quy trình thủ công ba bước, bảy nguồn biến
thiên, câu hỏi về hệ phân tầng - Lee ICML 2009), 4 (hệ phân tầng được nêu lần
đầu), 84 (hệ phân tầng được chứng minh bằng bộ lọc học được), 87 (bốn đầu ra
trên một xương sống, McKinney *Nature* 2020), 88 (phân loại so với phát hiện,
R-CNN và Faster R-CNN), 89 (phân đoạn ngữ nghĩa và điều khiển liên tục), 90
(tổng kết bài A3).
<br><span class="en">[[chapter05-deep-learning-k32]] - slides 64 (the "to know
what is where by looking" goal), 66 (the four application groups, "eye → network
→ decision"), 67 (images as number matrices, `1080 × 1080 × 3`), 68 (regression
versus classification, per-class probabilities, high-level feature detection),
69 (the three-step manual pipeline, the seven sources of variation, the
hierarchy question - Lee ICML 2009), 4 (the hierarchy first stated), 84 (the
hierarchy proven with learned filters), 87 (four heads on one backbone, McKinney
*Nature* 2020), 88 (classification versus detection, R-CNN and Faster R-CNN), 89
(semantic segmentation and continuous control), 90 (the A3
summary).</span>

## Liên quan - <span class="en">Related</span>

- [[convolutional-neural-network]] - kiến trúc thực hiện hệ phân tầng này.
  <br><span class="en">[[convolutional-neural-network]] - the architecture that
  realises this hierarchy.</span>
- [[convolution-operation]] - phép toán học ra các bộ lọc của từng tầng.
  <br><span class="en">[[convolution-operation]] - the operation whose filters
  each level learns.</span>
- [[dense-layers-and-deep-networks]] - vì sao không thể đưa ảnh thẳng vào lớp
  kết nối đầy đủ.
  <br><span class="en">[[dense-layers-and-deep-networks]] - why an image cannot
  go straight into a dense layer.</span>
- [[classification-k32]] - bài toán phân loại đã học ở Chapter 3, nay đầu vào
  là ảnh.
  <br><span class="en">[[classification-k32]] - the classification problem from
  Chapter 3, now with images as input.</span>
- [[self-attention]] - Vision Transformer là cách thứ hai để giải cùng các bài
  toán này.
  <br><span class="en">[[self-attention]] - Vision Transformers are a second way
  to solve these same problems.</span>
- [[loss-functions-and-empirical-risk]] - mỗi đầu ra đi kèm một hàm mất mát
  riêng.
  <br><span class="en">[[loss-functions-and-empirical-risk]] - each head comes
  with its own loss.</span>
