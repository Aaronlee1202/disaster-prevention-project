<script setup>
import { RouterView } from 'vue-router';
import Header from './components/NavHeader.vue';
import Footer from './components/NavFooter.vue';
import BackToTop from './components/BackToTop.vue';
</script>

<template>
  <Header />
  <RouterView />
  <BackToTop />
  <Footer />
</template>

<style lang="scss" scoped></style>
