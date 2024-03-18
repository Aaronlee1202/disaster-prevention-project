<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import atmosphere from '@/assets/lottie/atmosphere.json';
import atmosphere_open_door from '@/assets/lottie/atmosphere_open_door.json';
import atmosphere_open_windows from '@/assets/lottie/atmosphere_open_windows.json';

const atmosphereJson = ref(null);
const atmosphereOpenDoorJson = ref(null);
const atmosphereOpenWindowsJson = ref(null);

onMounted(() => {
    lottieAnimation();
});

onBeforeUnmount(() => {
  atmosphereJson.value.destroy();
  atmosphereOpenDoorJson.value.destroy();
  atmosphereOpenWindowsJson.value.destroy();
});

const props = defineProps({
  atmosphereOpen: Object
});

watch(
  () => props.atmosphereOpen,
  (newVal) => {
    if (newVal.openDoor) {
      atmosphereOpenDoorJson.value.setDirection(1);
      atmosphereOpenDoorJson.value.play();
    }
    if (newVal.openWindows) {
      atmosphereOpenWindowsJson.value.setDirection(1);
      atmosphereOpenWindowsJson.value.play();
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const decoration = document.getElementById(`atmosphere`);
  const decorationOpenDoor = document.getElementById(`atmosphere-open-door`);
  const decorationOpenWindows = document.getElementById(`atmosphere-open-windows`);
  atmosphereJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: true,
    animationData: atmosphere
  });
  atmosphereOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: atmosphere_open_door
  });
  atmosphereOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: atmosphere_open_windows
  });
}
</script>

<template>
  <div id="atmosphere"></div>
  <div id="atmosphere-open-door"></div>
  <div id="atmosphere-open-windows"></div>
</template>

<style lang="scss" scoped>
#atmosphere {
  position: absolute;
}
#atmosphere-open-door {
  position: absolute;
}
#atmosphere-open-windows {
  position: absolute;
}
</style>
