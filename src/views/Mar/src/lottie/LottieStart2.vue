<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/march/3-2-start.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
  destroyLottie();
});
onUnmounted(() => {
  newTalismanJson.value.destroy();
});

const destroyLottie = () => {
  setTimeout(() => {
    newTalismanJson.value.destroy();
  }, 1000 * 1.04);
};

function lottieAnimation() {
  newTalismanJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-begin'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: newTalisman
  });
}
</script>

<template>
  <div id="new-talisman-begin" />
</template>

<style lang="scss" scoped>
#new-talisman-begin {
  opacity: 1;
  transition: opacity 1s ease;
}
.fade-out {
  opacity: 0;
}
</style>
