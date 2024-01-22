<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import twin from '@/assets/lottie/twin.json';
import twin_open_door from '@/assets/lottie/twin_open_door.json';
import twin_open_windows from '@/assets/lottie/twin_open_windows.json';

const twinJson = ref(null);
const twinOpenDoorJson = ref(null);
const twinOpenWindowsJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  twinJson.value.destroy();
  twinOpenDoorJson.value.destroy();
  twinOpenWindowsJson.value.destroy();
});

const props = defineProps({
  twinOpen: Object
});

watch(
  () => props.twinOpen,
  (newVal) => {
    if (newVal.openDoor) {
      twinOpenDoorJson.value.setDirection(1);
      twinOpenDoorJson.value.play();
    }
    if (newVal.openWindows) {
      twinOpenWindowsJson.value.setDirection(1);
      twinOpenWindowsJson.value.play();
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const decoration = document.getElementById(`twin`);
  const decorationOpenDoor = document.getElementById(`twin-open-door`);
  const decorationOpenWindows = document.getElementById(`twin-open-windows`);
  twinJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: true,
    animationData: twin
  });
  twinOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: twin_open_door
  });
  twinOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: twin_open_windows
  });
}
</script>

<template>
  <div id="twin"></div>
  <div id="twin-open-door"></div>
  <div id="twin-open-windows"></div>
</template>

<style lang="scss" scoped>
#twin {
  position: absolute;
}
#twin-open-door {
  position: absolute;
}
#twin-open-windows {
  position: absolute;
}
</style>
