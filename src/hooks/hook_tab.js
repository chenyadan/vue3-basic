import { yiiBlogTab } from "@/api/index.js";
import { ref, reactive, toRefs } from "vue";

export function getTabs() {
  const state = reactive({
    tabs: ["js", "vue"],
    tabsList: [],
  });

  yiiBlogTab({ tab: state.tabs }).then((res) => {
    state.tabsList = res.data.data;
  });
  return { ...toRefs(state) };
}
