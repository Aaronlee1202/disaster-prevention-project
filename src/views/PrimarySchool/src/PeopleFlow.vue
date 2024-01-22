<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import people_flow from '@/assets/lottie/people_flow.json';
import people_flow_open_door from '@/assets/lottie/people_flow_open_door.json';
import people_flow_open_windows from '@/assets/lottie/people_flow_open_windows.json';

const people_flowJson = ref(null);
const people_flowOpenDoorJson = ref(null);
const people_flowOpenWindowsJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  people_flowJson.value.destroy();
  people_flowOpenDoorJson.value.destroy();
  people_flowOpenWindowsJson.value.destroy();
});

const props = defineProps({
  flowOpen: Object
});

watch(
  () => props.flowOpen,
  (newVal) => {
    if (newVal.openDoor) {
      people_flowOpenDoorJson.value.setDirection(1);
      people_flowOpenDoorJson.value.play();
    }
    if (newVal.openWindows) {
      people_flowOpenWindowsJson.value.setDirection(1);
      people_flowOpenWindowsJson.value.play();
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const decoration = document.getElementById(`people-flow`);
  const decorationOpenDoor = document.getElementById(`people-flow-open-door`);
  const decorationOpenWindows = document.getElementById(`people-flow-open-windows`);
  people_flowJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: true,
    animationData: people_flow
  });
  people_flowOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: people_flow_open_door
  });
  people_flowOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: people_flow_open_windows
  });
}
</script>

<template>
  <div id="people-flow"></div>
  <div id="people-flow-open-door"></div>
  <div id="people-flow-open-windows"></div>
</template>

<style lang="scss" scoped>
#people-flow {
  position: absolute;
}
#people-flow-open-door {
  position: absolute;
}
#people-flow-open-windows {
  position: absolute;
}
</style>
