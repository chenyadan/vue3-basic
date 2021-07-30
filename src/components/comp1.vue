<template>
  <teleport to="#model">
    <div class="ccinps">
      <div>
        {{ data1_c.a }}<button @click="changeIt()">let change obj !</button>
      </div>
      <br />
      <input
        class="ccinp"
        type="text"
        placeholder="i am in comp1"
        v-model="data2_c"
      />
      <div @click="ftk">let father talk</div>
    </div>
  </teleport>
</template>

<script>
import { ref, reactive, toRefs, inject } from "vue";
export default {
  setup(props, context) {
    console.log("i am prop", props);
    const data1_c = props.data1_c;
    const data2_c = inject("data2_c");
    const changeIt = () => {
      data1_c.a == "ss" ? (data1_c.a = "xx") : (data1_c.a = "ss");
    };
    const ftk = () => {
      console.log("contxt-c", context);
      context.emit("FatherTalk");
    };
    const alr = () => {
      alert("i am child");
    };
    return {
      data1_c,
      data2_c,
      alr,
      ftk,
      changeIt,
    };
  },
  props: {
    data1_c: {
      type: Object,
      default: () => {
        return {
          a: "",
        };
      },
    },
  },
};
</script>

<style scoped>
.ccinps {
  border-top:1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.ccinp {
  width: 600px;
  height: 100px;
  margin: 10px 0;
  font-size: 30px;
}
</style>
