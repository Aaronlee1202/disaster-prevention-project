<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/NavHeader.vue';
import Footer from './components/NavFooter.vue';
import BackToTop from './components/BackToTop.vue';


onMounted(() => {
  setTimeout(() => {
    isApp();
  }, 2000);
});

function isApp() {
  const userAgent = navigator.userAgent;
  const isLineApp = userAgent.indexOf('Line') > -1 ? true : false; //Line 內建瀏覽器
  const isFbApp = userAgent.indexOf('FBAV') > -1 ? true : false; // FB App 內建瀏覽器
  if (isLineApp || isFbApp) {
    const locationHref = window.location.href;
    window.location.replace(`${locationHref}?openExternalBrowser=1`);
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
