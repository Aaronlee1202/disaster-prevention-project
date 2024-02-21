<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/lottie/february/start2.json';

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
    if (newVal) {
      newTalismanJson.value.goToAndPlay(1, true);
      destroyLottie();
    }
  },
  {
    deep: true
  }
);

const destroyLottie = () => {
  setTimeout(() => {
    newTalismanJson.value.destroy();
  }, 2270);
};

function lottieAnimation() {
  newTalismanJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-begin'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
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
