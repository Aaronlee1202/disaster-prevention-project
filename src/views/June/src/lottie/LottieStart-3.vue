<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import newTalismanStart from '@/assets/lottie/june/6-2-start2.json';

const newTalismanStartJson = ref(null);

onMounted(() => {
  lottieAnimation();
});
onUnmounted(() => {
  newTalismanStartJson.value.destroy();
});

function lottieAnimation() {
  newTalismanStartJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-start-3'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: newTalismanStart
  });
}
</script>

<template>
  <div id="new-talisman-start-3"></div>
</template>
