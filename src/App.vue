<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/NavHeader.vue';
import Footer from './components/NavFooter.vue';
import BackToTop from './components/BackToTop.vue';

// const router = useRouter();
let isLineApp = ref(false); //Line 內建瀏覽器
let isFbApp = ref(false); // FB App 內建瀏覽器
const settimeout = ref(false);

onMounted(() => {
  var userAgent = navigator.userAgent.toUpperCase();
  isLineApp.value = userAgent.indexOf('Line') > -1 ? true : false; //Line 內建瀏覽器
  isFbApp.value = userAgent.indexOf('FBAV') > -1 ? true : false; // FB App 內建瀏覽器
  setTimeout(() => {
    settimeout.value = true;
    isApp();
  }, 3000);
});

function isApp() {
  console.log(settimeout.value);
  if (isLineApp || isFbApp) {
    const location = window.location.href;
    window.open(`${location}?openExternalBrowser=1`);
  }
}
</script>

<template>
  <Header />
  <div>{{ isLineApp }}{{ isFbApp }}</div>
  <RouterView />
  <BackToTop />
  <Footer />
</template>

<style lang="scss" scoped></style>
