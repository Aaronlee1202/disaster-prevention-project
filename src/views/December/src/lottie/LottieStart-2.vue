<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/december/12-2-start.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
  setTimeout(() => {
    newTalismanJson.value.destroy();
  }, 2360);
});
onUnmounted(() => {
  newTalismanJson.value.destroy();
});

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
