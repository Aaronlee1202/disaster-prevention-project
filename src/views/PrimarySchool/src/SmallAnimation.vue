<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
import dog_animation from '@/assets/lottie/index/dog_animation.json';
import radish_animation from '@/assets/lottie/index/radish_animation.json';

const dogAnimationJson = ref(null);
const radishAnimationJson = ref(null);

onMounted(() => {
  lottieAnimation();
});

onBeforeUnmount(() => {
  dogAnimationJson.value.destroy();
  radishAnimationJson.value.destroy();
});

const props = defineProps({
  open: Object
});

watch(
  () => props.open,
  (newVal) => {
    if (newVal.openDoor) {
      dogAnimationJson.value.setDirection(1);
      dogAnimationJson.value.play();
    }
    if (newVal.openWindows) {
      radishAnimationJson.value.setDirection(1);
      radishAnimationJson.value.play();
    }
    if (!newVal.openDoor) {
      dogAnimationJson.value.goToAndStop(0);
    }
    if (!newVal.openWindows) {
      radishAnimationJson.value.goToAndStop(0);
    }
  },
  { deep: true }
);

function lottieAnimation() {
  const dogAnimation = document.getElementById(`dog-animation`);
  const radishAnimation = document.getElementById(`radish-animation`);
  dogAnimationJson.value = lottie.loadAnimation({
    container: dogAnimation,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: dog_animation
  });
  radishAnimationJson.value = lottie.loadAnimation({
    container: radishAnimation,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: radish_animation
  });
}
</script>

<template>
  <div id="dog-animation" v-show="open.openDoor"></div>
  <div id="radish-animation" v-show="open.openWindows"></div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
  #dog-animation {
    width: 20%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  #radish-animation {
    width: 20%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
}
@media screen and (max-width: 992px) {
  #dog-animation {
    width: 70%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  #radish-animation {
    width: 70%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
}
</style>
