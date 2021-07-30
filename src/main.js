import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import router from "@/router/index.js";
import { store } from "@/store/index.js";
import "./permission.js";

app.directive("highlight", {
  beforeMount(el, binding, vnode, prevVnode) {
    // let spinner = document.createElement('div')
    // spinner.innerHTML = `<i>dir</i>`
    // el.appendChild(spinner)
    el.style.background = binding.value;
  },
});

// app.config.globalProperties.$_lodash = _lodash; //vue3.0全局属性，vue2.0的使用方法Vue.prototype._
app.use(router); //Vue.use(router)被舍弃
app.use(store);

app.mount("#app");
