<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import BackToTop from './svg/back_to/back_to_top.vue';
import ToHome from './svg//back_to/to_home.vue';
import LineIcon from './svg/back_to/line_icon.vue';
import facebook_icon from './svg/back_to/facebook_icon.vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();
// watch(router.currentRoute, (newVal) => {
//   console.log(newVal);
// });
// const elementIsShow = ref(false);
// const { width } = useWindowSize();
// watch(
//   width,
//   () => {
//     console.log(width.value);
//     if (width.value < 992) {
//       elementIsShow.value = true;
//     } else {
//       elementIsShow.value = false;
//     }
//   },
//   { immediate: true }
// );

const toHomePage = () => {
  window.open(
    'https://disaster-prevention-aaronlee1-e94bc9c1e618a9cf0d60fba219ab7f711.gitlab.io/index.html',
    '_blank'
  );
  // router.push({ path: '/' });
};

const { y } = useWindowScroll({ behavior: 'smooth' });
const isShow = ref(false);
const ifFooterHeight = ref('bottom: 3%');
// const footer = document.getElementById('footer').clientHeight;
watch(y, () => {
  if (y.value > 500) {
    isShow.value = true;
    // if (isElementVisible.value == true) {
    //   const height = footer;
    //   ifFooterHeight.value = 'bottom:' + height + 'px';
    //   // ifFooterHeight.value = ifFooterHeight.value + Math.floor((y.value - footer) / 600);
    //   console.log('footer出現', y.value, ifFooterHeight.value);
    // }
  } else {
    isShow.value = false;
  }
});
const scrollToTop = () => {
  y.value = 0;
};

let observer;
const isElementVisible = ref(false);

onMounted(() => {
  const element = document.getElementById('footer');
  observer = new IntersectionObserver((entries) => {
    // 如果元素在視窗中，entries[0].isIntersecting 將會是 true
    isElementVisible.value = entries[0].isIntersecting;
  });

  if (element) {
    observer.observe(element);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="btn-container">
    <div
      class="fixed-box d-flex flex-column"
      :style="[isElementVisible ? ifFooterHeight : `bottom: 3%`]"
    >
      <facebook_icon class="m-2" v-show="isShow" />
      <LineIcon class="m-2" v-show="isShow" />
      <BackToTop class="m-2" @click="scrollToTop" v-show="isShow" />
      <ToHome @click="toHomePage" class="m-2" v-if="isShow" />
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
  // bottom: 3%;
  right: 3%;
  z-index: 999;
}
</style>
