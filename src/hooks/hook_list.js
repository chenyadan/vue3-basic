import { yiiBlogSearch } from "@/api/index.js";
import { reactive, toRefs, onMounted, onUnmounted } from "vue";
import _lodash from "lodash";
export function getBlogs() {
  const state = reactive({
    loading: false,
    finish: false,
    dataList: [],
  });
  const clickTab = (e) => {
    state.dataList = [];
    yiiBlogSearch({ keyword: e }).then((d) => {
      let obj = _lodash.find(d.data.data, ["key", e]);
      state.dataList = obj.list;
    });
  };
  clickTab("js");
  const goBottom = (e) => {
    if (state.loading || state.finish) {
      return false;
    }
    // 滚动视口高度(也就是当前元素的真实高度)
    let scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    // 可见区域高度
    let clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    // 滚动条顶部到浏览器顶部高度
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (clientHeight + scrollTop == scrollHeight) {
      state.finish = true;
      console.log("到底了");
    }
  };
  onMounted(() => {
    console.log("监控滚动条");
    window.addEventListener("scroll", goBottom);
  });
  onMounted(() => {
    console.log("i am mounted too");
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", goBottom);
  });
  return { ...toRefs(state), clickTab };
}
