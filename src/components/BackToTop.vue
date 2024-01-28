<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import BackToTop from './svg/back_to/back_to_top.vue';
import ToHome from './svg//back_to/to_home.vue';
import LineIcon from './svg/back_to/line_icon.vue';
import facebook_icon from './svg/back_to/facebook_icon.vue';

const { y } = useWindowScroll({ behavior: 'smooth' });
const isShow = ref(false);
const height = ref(3);
const ifFooterHeight = ref(0);
watch(y, () => {
  if (y.value > 500) {
    const contentHeight = document.getElementsByClassName('primary-school')[0].clientHeight;
    const footer = document.getElementById('footer').clientHeight;
    isShow.value = true;
    if (isElementVisible.value == true) {
      ifFooterHeight.value = y.value - contentHeight + footer + 250;
      console.log(ifFooterHeight.value);
    }
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
      :style="{ bottom: isElementVisible == true ? ifFooterHeight + 'px' : height + '%' }"
    >
      <facebook_icon class="btn m-2" v-show="isShow" />
      <LineIcon class="btn m-2" v-show="isShow" />
      <BackToTop class="btn m-2" @click="scrollToTop" v-show="isShow" />
      <ToHome class="btn m-2" v-if="isShow" />
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
.btn {
}
.fixed-box {
  position: fixed;
  // bottom: 3%;
  right: 3%;
}
</style>
