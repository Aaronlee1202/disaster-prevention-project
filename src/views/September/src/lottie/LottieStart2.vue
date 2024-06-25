<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import lottie from 'lottie-web';
import newTalismanStart from '@/assets/lottie/september/9-2-start.json';

const newTalismanStartJson = ref(null);

onMounted(() => {
  lottieAnimation();
});
onUnmounted(() => {
  newTalismanStartJson.value.destroy();
});

const props = defineProps({
  playLottie: {
    type: Boolean,
    default: false
  }
});

watch(
  () => props.playLottie,
  (newVal) => {
    if (newVal) {
      destroyLottie();
    }
  },
  {
    deep: true
  }
);

const destroyLottie = () => {
  setTimeout(() => {
    newTalismanStartJson.value.destroy();
  }, 840);
};

function lottieAnimation() {
  newTalismanStartJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-start-2'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: newTalismanStart
  });
}
</script>

<template>
  <div id="new-talisman-start-2"></div>
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
