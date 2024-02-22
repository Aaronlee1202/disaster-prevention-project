<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import newTalismanStart from '@/assets/lottie/january/new_talisman_start.json';

const newTalismanStartJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  newTalismanStartJson.value.destroy();
});

defineProps({
  fadeOut: Boolean
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
  <div id="new-talisman-start" v-if="!fadeOut"></div>
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
