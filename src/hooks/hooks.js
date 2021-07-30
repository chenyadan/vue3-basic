import { ref, onMounted, onUnmounted } from "vue";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  //对应vue2.0的mounted
  onMounted(() => {
    window.addEventListener("mousemove", update);
  });
  //对应vue2.0的destroyed
  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}
