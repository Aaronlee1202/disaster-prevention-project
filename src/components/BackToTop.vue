<script setup>
import { watch, ref } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import BackToTop from './svg/back_to/back_to_top.vue';
import ToHome from './svg//back_to/to_home.vue';
import LineIcon from './svg/back_to/line_icon.vue';
import facebook_icon from './svg/back_to/facebook_icon.vue';

const lineShare = () => {
  window.open(`https://social-plugins.line.me/lineit/share?url=${window.location.href}`, '_blank');
};

const facebookShare = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
};

const toHomePage = () => {
  window.open(
    'https://www.ncdr.nat.gov.tw/NCDR-Topic/2024/index.html',
    '_blank'
  );
};

const { y } = useWindowScroll({ behavior: 'smooth' });
const isShow = ref(false);
watch(y, () => {
  if (y.value > 500) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});
const scrollToTop = () => {
  y.value = 0;
};
</script>

<template>
  <div class="btn-container" v-show="isShow">
    <div class="fixed-box d-flex flex-column">
      <facebook_icon class="m-2" @click="facebookShare" />
      <LineIcon class="m-2" @click="lineShare" />
      <BackToTop class="m-2" @click="scrollToTop" />
      <ToHome @click="toHomePage" class="m-2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-container {
  position: relative;
  max-width: 100%;
  // max-height: 100vh;
  z-index: 999;
  svg {
    cursor: pointer;
  }
}
.fixed-box {
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 999;
}
</style>
