<script setup>
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Header from './components/NavHeader.vue';
import Footer from './components/NavFooter.vue';
import BackToTop from './components/BackToTop.vue';

const router = useRouter();
const isLineApp = ref(false); //Line 內建瀏覽器
const isFbApp = ref(false); // FB App 內建瀏覽器
const userAgentData = ref('');

onMounted(() => {
  setTimeout(() => {
    isApp();
  }, 2000);
});

function isApp() {
  const userAgent = navigator.userAgent;
  userAgentData.value = userAgent;
  isLineApp.value = userAgent.indexOf('Line') > -1 ? true : false; //Line 內建瀏覽器
  isFbApp.value = userAgent.indexOf('FBAV') > -1 ? true : false; // FB App 內建瀏覽器
  if (isLineApp.value || isFbApp.value) {
    const route = router;
    const location = route.currentRoute.value.path;
    // window.open(`${location}?openExternalBrowser=1`);
    router.push({ path: location, query: { openExternalBrowser: 1 } });
  }
}
</script>

<template>
  <div>
    userAgentData: {{ userAgentData }} <br />
    isLineApp: {{ isLineApp }}<br />
    isFbApp: {{ isFbApp }}
  </div>
  <Header />
  <RouterView />
  <BackToTop />
  <Footer />
</template>

<style lang="scss" scoped></style>
