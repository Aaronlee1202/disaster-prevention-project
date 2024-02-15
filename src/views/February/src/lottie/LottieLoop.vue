<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/February/loop.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
});
onBeforeUnmount(() => {
  newTalismanJson.value.destroy();
});

const props = defineProps({
  playLottie: Boolean
});

watch(
  () => props.playLottie,
  (newVal) => {
    console.log('playLottie 3', newVal);
    if (newVal) {
      newTalismanJson.value.goToAndPlay(1, true);
    }
  },
  {
    deep: true
  }
);

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
