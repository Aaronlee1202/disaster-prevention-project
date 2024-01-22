<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import potential from '@/assets/lottie/potential.json';
import potential_open_door from '@/assets/lottie/potential_open_door.json';
import potential_open_windows from '@/assets/lottie/potential_open_windows.json';

const potentialJson = ref(null);
const potentialOpenDoorJson = ref(null);
const potentialOpenWindowsJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  potentialJson.value.destroy();
  potentialOpenDoorJson.value.destroy();
  potentialOpenWindowsJson.value.destroy();
});

const props = defineProps({
  potentialOpen: Object
});

watch(
  () => props.potentialOpen,
  (newVal) => {
    if (newVal.openDoor) {
      potentialOpenDoorJson.value.setDirection(1);
      potentialOpenDoorJson.value.play();
    }
    if (newVal.openWindows) {
      potentialOpenWindowsJson.value.setDirection(1);
      potentialOpenWindowsJson.value.play();
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const decoration = document.getElementById(`potential`);
  const decorationOpenDoor = document.getElementById(`potential-open-door`);
  const decorationOpenWindows = document.getElementById(`potential-open-windows`);
  potentialJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: true,
    animationData: potential
  });
  potentialOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: potential_open_door
  });
  potentialOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: potential_open_windows
  });
}
</script>

<template>
  <div id="potential"></div>
  <div id="potential-open-door"></div>
  <div id="potential-open-windows"></div>
</template>

<style lang="scss" scoped>
#potential {
  position: absolute;
}
#potential-open-door {
  position: absolute;
}
#potential-open-windows {
  position: absolute;
}
</style>
