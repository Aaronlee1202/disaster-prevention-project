<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import strategy from '@/assets/lottie/strategy.json';
import strategy_open_door from '@/assets/lottie/strategy_open_door.json';
import strategy_open_windows from '@/assets/lottie/strategy_open_windows.json';

const strategyJson = ref(null);
const strategyOpenDoorJson = ref(null);
const strategyOpenWindowsJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  strategyJson.value.destroy();
  strategyOpenDoorJson.value.destroy();
  strategyOpenWindowsJson.value.destroy();
});

const props = defineProps({
  strategyOpen: Object
});

watch(
  () => props.strategyOpen,
  (newVal) => {
    if (newVal.openDoor) {
      strategyOpenDoorJson.value.setDirection(1);
      strategyOpenDoorJson.value.play();
    }
    if (newVal.openWindows) {
      strategyOpenWindowsJson.value.setDirection(1);
      strategyOpenWindowsJson.value.play();
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const decoration = document.getElementById(`strategy`);
  const decorationOpenDoor = document.getElementById(`strategy-open-door`);
  const decorationOpenWindows = document.getElementById(`strategy-open-windows`);
  strategyJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: true,
    animationData: strategy
  });
  strategyOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: strategy_open_door
  });
  strategyOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: strategy_open_windows
  });
}
</script>

<template>
  <div id="strategy"></div>
  <div id="strategy-open-door"></div>
  <div id="strategy-open-windows"></div>
</template>

<style lang="scss" scoped>
#strategy {
  position: absolute;
}
#strategy-open-door {
  position: absolute;
}
#strategy-open-windows {
  position: absolute;
}
</style>
