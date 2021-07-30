<template>
  <div class="myBlog">
    <Suspense>
      <template #default>
        <asycn></asycn>
      </template>
      <template #fallback>
        <h1>loading....</h1>
      </template>
    </Suspense>
    <div class="myBlog-tab">
      <div
        class="myBlog-tabs1"
        v-for="(value, key) in tabsList"
        :key="key"
        @click="clickTab(key)"
      >
        {{ key }}({{ value }})
      </div>
    </div>
    <span
      v-for="(item, index) in dataList"
      @click="linkDetail(item.id)"
      class="myBlogs"
      :key="index"
    >
      {{ item.title }}
    </span>
  </div>
</template>
<script>
import { getTabs } from "@/hooks/hook_tab";
import { getBlogs } from "@/hooks/hook_list";
import asycn from "@/components/asycn.vue";
import { useRouter } from "vue-router";
export default {
  components: { asycn },
  setup() {
    const { tabsList } = getTabs();
    const { dataList, clickTab } = getBlogs();
    const router = useRouter(); //跳转
    const linkDetail = (id) => {
      router.push({ path: "/blogDetail", query: { id } });
    };
    return {
      tabsList,
      dataList,
      clickTab,
      linkDetail,
    };
  },
};
</script>

<style lang="less" scoped>
.myBlog {
  width: 750px;
  background: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .myBlog-tab {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .myBlog-tabs1 {
      font-size: 30px !important;
      border: 1px solid #666;
      border-radius: 5px;
      padding: 10px;
      margin: 16px;
      cursor: pointer;
    }
  }
  .myBlogs {
    display: inline-block;
    width: 100%;
    border: 2px solid #000;
    border-radius: 10px;
    margin: 20px;
    padding: 6px;
    box-sizing: border-box;
  }
}
</style>
