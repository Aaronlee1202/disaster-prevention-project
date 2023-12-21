<script setup>
import { RouterView } from 'vue-router';
import nav_header from './components/nav_header.vue';
import nav_footer from './components/nav_footer.vue';
</script>

<template>
  <nav_header />
  <RouterView />
  <nav_footer />
</template>

<style lang="scss" scoped></style>
