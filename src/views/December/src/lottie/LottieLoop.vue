<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/december/12-1-loop.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
});
onBeforeUnmount(() => {
  newTalismanJson.value.destroy();
});

function lottieAnimation() {
  newTalismanJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-loop'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: newTalisman
  });
}
</script>

<template>
  <div id="new-talisman-loop" />
</template>

<style lang="scss" scoped>
#new-talisman-loop {
  opacity: 1;
  transition: opacity 1s ease;
}
.fade-out {
  opacity: 0;
}
</style>
