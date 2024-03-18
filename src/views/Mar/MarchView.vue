<script setup>
import { watch, ref, onMounted } from 'vue';
import LeftTitlePage from './src/LeftTitlePage.vue';
import Title_Page_2 from './src/TitlePage2.vue';
import Content_2 from './src/Content2.vue';
import { useWindowSize, useWindowScroll } from '@vueuse/core';

const { width } = useWindowSize();
const screenSwitch = ref(false);

const { y } = useWindowScroll({ behavior: 'smooth' });
onMounted(() => {
  if (y.value != 0) {
    y.value = 0;
  }
});

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
  <LeftTitlePage v-if="!screenSwitch" />
  <Title_Page_2 v-if="screenSwitch" />
  <Content_2 v-if="screenSwitch" />
</template>

<style lang="scss" scoped></style>
