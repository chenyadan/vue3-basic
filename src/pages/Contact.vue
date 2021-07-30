<template>
  <div class="cct">
    <div>i am data1 in father: {{ data1 }}</div>
    <div>i am data2 in father: {{ data2 }}</div>
    <Comp1 ref="RefChilde" :data1_c="data1" @FatherTalk="FatherTalk"></Comp1>
    <br />
    <br />
    <div @click="trigerChild">let child talk</div>
  </div>
</template>

<script>
import { provide, inject, ref, reactive, toRefs } from "vue";

import Comp1 from "@/components/comp1.vue";
export default {
  setup(props, context) {
   
    const state = reactive({
      data1: { a: "xx" },
    });
    const data2= ref('456')
    provide("data2_c", data2);
    const FatherTalk = () => {
      alert("i am father");
    };
    const RefChilde = ref(null);
    const trigerChild = () => {
      RefChilde.value.alr(); //类似vue2中的this.$refs.RefChilde
    };
   
    return {
      ...toRefs(state),
      data2,
      FatherTalk,
      trigerChild,
      RefChilde,
    };
  },
  components: {
    Comp1,
  },
};
</script>

<style scoped>
.cct {
  font-size: 28px;
}
</style>
