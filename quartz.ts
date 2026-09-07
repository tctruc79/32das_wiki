import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Lưu ý: KHÔNG dùng ExternalPlugin.Explorer({...}) — wrapper sinh tự động
// trong .quartz/plugins/index.ts ghi override dưới khoá chuẩn hoá
// "quartz-community__explorer", nhưng buildLayoutForEntries() lại đọc
// override bằng đúng chuỗi source trong YAML ("@quartz-community/explorer")
// — 2 khoá lệch nhau nên override qua ExternalPlugin không bao giờ được
// áp dụng. Gọi thẳng componentRegistry bằng đúng khoá mà loader đọc.
//
// LƯU Ý QUAN TRỌNG (sự cố 2026-09-07, xem log.md): @quartz-community/explorer
// serialize sortFn bằng `opts.sortFn?.toString()` rồi tái tạo bằng
// `new Function("a","b","return ("+src+")(a,b)")` ở phía client (xem
// node_modules/@quartz-community/explorer/dist/index.js) — .toString() chỉ
// lấy đúng văn bản nguồn của CHÍNH hàm đó, KHÔNG mang theo closure sang biến/
// hàm khai báo ở module scope bên ngoài. Từng có bản trước đặt EXPLICIT_ORDER
// và orderKey() ở module scope rồi gọi orderKey() từ trong sortFn — build vẫn
// pass vì đây là lỗi runtime phía client, nhưng khi trang chạy thật, sortFn bị
// tái tạo cô lập nên "orderKey is not defined" throw ngay trong Array.sort(),
// khiến toàn bộ hàm dựng file-trie phía trên bắt exception và trả về null ->
// Explorer render rỗng, không có thông báo lỗi nào hiện trên UI. Vì vậy toàn
// bộ EXPLICIT_ORDER + orderKey() PHẢI khai báo NGAY BÊN TRONG thân hàm sortFn
// dưới đây — đây là nơi DUY NHẤT chỉnh thứ tự Explorer, không tồn tại bản sao
// nào khác ở module scope.
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: { isFolder: boolean; slug: string; displayName: string }, b: typeof a) => {
    // Thứ tự hiển thị tường minh trong Explorer, đi từ trang tổng quan tới
    // chi tiết: nguồn (sources) -> khái niệm (concepts) -> người (people) ->
    // tổng hợp (synthesis); trong mỗi chương, khái niệm xếp đúng thứ tự xuất
    // hiện trên slide (khớp index.md). Khoá là slug đầy đủ, chữ thường,
    // không có phần mở rộng và không có hậu tố "/index" của thư mục.
    const EXPLICIT_ORDER: Record<string, number> = {
      sources: 1,
      concepts: 2,
      people: 3,
      synthesis: 4,

      // Concepts — K31
      "concepts/k31/ch1/big-data": 1,
      "concepts/k31/ch1/dikw-pyramid": 2,
      "concepts/k31/ch1/data-science-definition": 3,
      "concepts/k31/ch1/data-driven-decision-making": 4,
      "concepts/k31/ch1/data-analytic-thinking": 5,

      "concepts/k31/ch2/python-jupyter-tooling": 1,

      "concepts/k31/ch3/machine-learning-overview": 1,
      "concepts/k31/ch3/overfitting-underfitting": 2,
      "concepts/k31/ch3/model-evaluation-metrics": 3,
      "concepts/k31/ch3/classification": 4,
      "concepts/k31/ch3/k-nearest-neighbors": 5,

      "concepts/k31/ch4/decision-tree": 1,
      "concepts/k31/ch4/random-forest": 2,

      "concepts/k31/ch5/linear-regression": 1,
      "concepts/k31/ch5/regularization-ridge-lasso": 2,

      "concepts/k31/ch6/clustering": 1,
      "concepts/k31/ch6/k-means-clustering": 2,
      "concepts/k31/ch6/hierarchical-clustering": 3,

      "concepts/k31/ch7/pca": 1,
      "concepts/k31/ch7/pca-combined-with-other-algorithms": 2,

      "concepts/k31/ch8/deep-learning-neural-networks": 1,

      // Concepts — K32
      "concepts/k32/ch1/big-data-k32": 1,
      "concepts/k32/ch1/dikw-pyramid-k32": 2,
      "concepts/k32/ch1/data-science-definition-k32": 3,
      "concepts/k32/ch1/data-driven-decision-making-k32": 4,
      "concepts/k32/ch1/data-analytic-thinking-k32": 5,

      "concepts/k32/ch2/python-jupyter-tooling-k32": 1,
      "concepts/k32/ch2/python-data-analysis-stack": 2,

      "concepts/k32/ch3/supervised-learning-framework": 1,
      "concepts/k32/ch3/train-test-split-and-cross-validation": 2,
      "concepts/k32/ch3/model-evaluation-metrics-k32": 3,
      "concepts/k32/ch3/overfitting-underfitting-k32": 4,
      "concepts/k32/ch3/classification-k32": 5,
      "concepts/k32/ch3/k-nearest-neighbors-k32": 6,
      "concepts/k32/ch3/decision-tree-k32": 7,
      "concepts/k32/ch3/random-forest-k32": 8,
      "concepts/k32/ch3/boosting-ensemble": 9,
      "concepts/k32/ch3/linear-regression-k32": 10,
      "concepts/k32/ch3/regularization-ridge-lasso-elastic-net-k32": 11,
    }

    // KHÔNG khai báo hàm con có tên (function orderKey / const orderKey = ...)
    // ở đây dù chỉ để tính path — bản trước dùng `function orderKey(){...}` bên
    // trong sortFn tưởng đã tự chứa đủ, nhưng esbuild bundle quartz.ts với
    // keepNames nên tự chèn thêm lệnh gọi `__name(orderKey, "orderKey")` ngay
    // sau khai báo hàm đó (helper __name nằm ở phần đầu bundle, ngoài văn bản
    // sortFn) — khi sortFn bị tách ra tái tạo cô lập ở client, `__name` cũng
    // undefined y hệt lỗi orderKey trước đó. Vì vậy chỉ dùng biến + object
    // literal thuần, không có bất kỳ function nào được gán tên.
    const pathA = a.isFolder ? a.slug.replace(/\/index$/, "") : a.slug
    const pathB = b.isFolder ? b.slug.replace(/\/index$/, "") : b.slug
    const oa = EXPLICIT_ORDER[pathA]
    const ob = EXPLICIT_ORDER[pathB]
    if (oa !== undefined && ob !== undefined) return oa - ob
    if (oa !== undefined) return -1
    if (ob !== undefined) return 1

    // Mặc định của Explorer: thư mục trước, rồi so displayName.
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    return !a.isFolder && b.isFolder ? 1 : -1
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
