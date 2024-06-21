<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/may/5-2-start.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
});
onUnmounted(() => {
  newTalismanJson.value.destroy();
});

const props = defineProps({
  playLottie: Boolean
});

watch(
  () => props.playLottie,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        newTalismanJson.value.destroy();
      }, 1000);
    }
  },
  {
    deep: true
  }
);

function lottieAnimation() {
  newTalismanJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-start-2'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: newTalisman
  });
}
</script>

<template>
  <div id="new-talisman-start-2" />
</template>

<style lang="scss" scoped>
#new-talisman-start-2 {
  opacity: 1;
  transition: opacity 1s ease;
}
.fade-out {
  opacity: 0;
}
</style>
