<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import norm from '@/assets/lottie/norm.json';
import norm_open_door from '@/assets/lottie/norm_open_door.json';
import norm_open_windows from '@/assets/lottie/norm_open_windows.json';

const normJson = ref(null);
const normOpenDoorJson = ref(null);
const normOpenWindowsJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  normJson.value.destroy();
  normOpenDoorJson.value.destroy();
  normOpenWindowsJson.value.destroy();
});

const props = defineProps({
  normOpen: Object
});

watch(
  () => props.normOpen,
  (newVal) => {
    if (newVal.openDoor) {
      normOpenDoorJson.value.setDirection(1);
      normOpenDoorJson.value.play();
    }
    if (newVal.openWindows) {
      normOpenWindowsJson.value.setDirection(1);
      normOpenWindowsJson.value.play();
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const decoration = document.getElementById(`norm`);
  const decorationOpenDoor = document.getElementById(`norm-open-door`);
  const decorationOpenWindows = document.getElementById(`norm-open-windows`);
  normJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: true,
    animationData: norm
  });
  normOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: norm_open_door
  });
  normOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: norm_open_windows
  });
}
</script>

<template>
  <div id="norm"></div>
  <div id="norm-open-door"></div>
  <div id="norm-open-windows"></div>
</template>

<style lang="scss" scoped>
#norm {
  position: absolute;
}
#norm-open-door {
  position: absolute;
}
#norm-open-windows {
  position: absolute;
}
</style>
