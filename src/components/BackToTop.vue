<script setup>
import { watch, ref } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import BackToTop from './svg/back_to_top.vue';

const { y } = useWindowScroll({ behavior: 'smooth' });
const isDisabled = ref(true);
watch(y, () => {
  if (y.value > 500) {
    isDisabled.value = false;
  } else {
    isDisabled.value = true;
  }
});
const scrollToTop = () => {
  y.value = 0;
};
</script>

<template>
  <BackToTop @click="scrollToTop" :isDisabled="isDisabled" />
</template>
