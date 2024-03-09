<script setup>
import { watch, ref } from 'vue';
import Title_Page from './src/TitlePage.vue';
import Title_Page_2 from './src/TitlePage2.vue';
import Content_2 from './src/Content2.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const screenSwitch = ref(false);

watch(
  width,
  (newVal) => {
    if (newVal <= 1024) screenSwitch.value = true;
    else screenSwitch.value = false;
  },
  // 立即執行
  { immediate: true }
);
</script>

<template>
  <Title_Page v-if="!screenSwitch" />
  <Title_Page_2 v-if="screenSwitch" />
  <Content_2 v-if="screenSwitch" />
</template>

<style lang="scss" scoped></style>
