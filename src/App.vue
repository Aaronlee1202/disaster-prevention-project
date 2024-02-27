<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/NavHeader.vue';
import Footer from './components/NavFooter.vue';
import BackToTop from './components/BackToTop.vue';

var userAgent = navigator.userAgent.toUpperCase();
let isLineApp = userAgent.indexOf('Line') > -1 ? true : false; //Line 內建瀏覽器
let isFbApp = userAgent.indexOf('FBAV') > -1 ? true : false; // FB App 內建瀏覽器
onMounted(() => {
  setTimeout(() => {
    isApp();
  }, 2000);
});

function isApp() {
  if (isLineApp || isFbApp) {
    const location = window.location.href;
    window.open(`${location}?openExternalBrowser=1`);
  }
}
</script>

<template>
  <Header />
  <RouterView />
  <BackToTop />
  <Footer />
</template>

<style lang="scss" scoped></style>
