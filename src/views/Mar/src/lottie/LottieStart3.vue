<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/march/3-2-start2.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
});
onUnmounted(() => {
  newTalismanJson.value.destroy();
});

function lottieAnimation() {
  newTalismanJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-begin-2'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: newTalisman
  });
}
</script>

<template>
  <div id="new-talisman-begin-2" />
</template>

<style lang="scss" scoped>
#new-talisman-begin-2 {
  opacity: 1;
  transition: opacity 1s ease;
}
.fade-out {
  opacity: 0;
}
</style>
