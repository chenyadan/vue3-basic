<template>
  <div class="appCon">
    <h3>{{ father }}</h3>
    <!-- <h3>i am data in store {{ count }}</h3> -->
    <div class="navBox">
      <router-link to="/"><button>home-page</button></router-link>
      <router-link to="/contact"><button>contact-page</button></router-link>
      <router-link to="/hooks"><button>hooks-page</button></router-link>
      <router-link to="/blogs"><button>blogs-page</button></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, context) {
    //通过ref+provide提供了父节点往下全部节点的响应式数据传递
    const father = ref("i am data in app.vue");
    provide("appdata", father);
    return {
      father,
    };
  },
};
</script>

<style lang="less">
body {
  font-size: 30px;
}
button {
  font-size: 30px;
}
input {
  width: 250px;
  height: 50px;
}
h3 {
  text-align: center;
  width: 100%;
  line-height: 20px;
}
.appCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  .navBox {
    width: 600px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
