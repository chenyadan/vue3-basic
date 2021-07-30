<template>
  <div>
    <div>I am in Home page</div>
    <div class="flexBox">
      <span>ref:{{ count }}</span>
      <span>store:{{ count }}</span>
      <span>double:{{ double }}</span>
      <button @click="addRef">addRef</button>
    </div>
    <ul>
      <li v-for="item in numbers" :key="item">{{ item }}</li>
    </ul>
    <h5>{{ person.name }}</h5>
    <div class="flexBox">
      <button @click="updateGreeting">updateTitle</button>
    </div>
  </div>
</template>

<script>
//ref 由传入值返回一个响应式的、可变的且只有value一个属性的ref对象 （简单数据，原始类型）
//  string 和 number 是只有值，没有引用的  故vue无论defineProperty proxy均无法实时监听  所以必须包装对象ref(3) data(2)
// reactive   reactive的作用是将对象包装成响应式对象副本——通过 Proxy代理后的对象。set forceUpdate滚出
import { ref, reactive, toRefs, computed, watch } from "vue";
import { useStore } from 'vuex';
export default {
  //准备，在节点渲染之前执行
  setup() {
    // store事件
    
    //生命变量方法一：
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    // const addRef = () => {
    //   count.value++;
    // };
    //生命变量方法二：
    const store = useStore();
    const data = reactive({
      count: 0,
      addRef: () => {
        data.count++;
        store.dispatch('add');
      },
      double: computed(() => data.count * 2),
      numbers: [1, 2, 3],
      person: {},
    });
    //对象添加新属性或者数组改变长度
    data.numbers[3] = 5;
    data.person.name = "hahh";
    // watch属性使用方法
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value = "title";
    };
    watch([greetings, data], (newValue, oldValue) => {
      console.log({ new: newValue, old: oldValue });
      document.title = "update-" + greetings.value + "-" + data.count;
    });
    return {
      // count,
      // double,
      // addRef,
      ...toRefs(data),
      greetings,
      updateGreeting,
    };
  },
};
</script>

<style scoped>
.flexBox {
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
