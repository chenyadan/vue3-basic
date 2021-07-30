<template>
  <div>
    {{ result }}
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({ result: 1000 });
      }, 3000);
    });
  },
});
</script>
