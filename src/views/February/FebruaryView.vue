<script setup>
import { watch, ref } from 'vue';
import New_Talisman from './src/TitlePage.vue';
import New_Talisman2 from './src/TitlePage2.vue';
import Flow_Of_People from './src/Content2.vue';
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
  <New_Talisman v-if="!screenSwitch" />
  <New_Talisman2 v-if="screenSwitch" />
  <Flow_Of_People v-if="screenSwitch" />
</template>

<style lang="scss" scoped></style>
