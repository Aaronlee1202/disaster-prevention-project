<script setup>
import { ref, onMounted, watch } from 'vue';
import lottie from 'lottie-web';
import newTalisman from '@/assets/disaster_prevention/new_talisman.json';

const newTalismanJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

const props = defineProps({
  playLottie: Boolean
});

watch(
  () => props.playLottie,
  (newVal) => {
    console.log(newVal);
    if (newVal) newTalismanJson.value.goToAndPlay(1, true);
  },
  {
    deep: true
  }
);

function lottieAnimation() {
  newTalismanJson.value = lottie.loadAnimation({
    container: document.getElementById('new-talisman-begin'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: newTalisman
  });
}
</script>

<template>
  <div id="new-talisman-begin"></div>
</template>

<style lang="scss" scoped></style>
