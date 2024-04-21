<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import newTalismanStart from '@/assets/lottie/november/11-1-start.json';

const newTalismanStartJson = ref(null);

onMounted(() => {
  lottieAnimation();
  setTimeout(() => {
    newTalismanStartJson.value.destroy();
  }, 1560);
});
onBeforeUnmount(() => {
  newTalismanStartJson.value.destroy();
});

function lottieAnimation() {
  newTalismanStartJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-start'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: newTalismanStart
  });
}
</script>

<template>
  <div id="new-talisman-start"></div>
</template>

<style lang="scss" scoped>
#new-talisman-start {
  opacity: 1;
  transition: opacity 1s ease;
}
.fade-out {
  opacity: 0;
}
</style>
