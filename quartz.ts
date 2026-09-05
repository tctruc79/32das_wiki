import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

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

function orderKey(node: { isFolder: boolean; slug: string }): number | undefined {
  const path = node.isFolder ? node.slug.replace(/\/index$/, "") : node.slug
  return EXPLICIT_ORDER[path]
}

// Lưu ý: KHÔNG dùng ExternalPlugin.Explorer({...}) — wrapper sinh tự động
// trong .quartz/plugins/index.ts ghi override dưới khoá chuẩn hoá
// "quartz-community__explorer", nhưng buildLayoutForEntries() lại đọc
// override bằng đúng chuỗi source trong YAML ("@quartz-community/explorer")
// — 2 khoá lệch nhau nên override qua ExternalPlugin không bao giờ được
// áp dụng. Gọi thẳng componentRegistry bằng đúng khoá mà loader đọc.
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: { isFolder: boolean; slug: string; displayName: string }, b: typeof a) => {
    const oa = orderKey(a)
    const ob = orderKey(b)
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
