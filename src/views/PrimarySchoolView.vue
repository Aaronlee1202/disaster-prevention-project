<script setup>
// 命名需修改
// const toPage1 = () => {
//   // const routeData = router.replace({ name: '/product-model' });
//   window.open('/disaster-prevention', '_blank');
// };
</script>

<template>
  <div class="primary-school">
    <div class="house-bg"></div>
  </div>
</template>

<style lang="scss" scoped>
.primary-school {
  position: relative;
  width: 100%;
  height: 100vh;
}
.house-bg {
  position: absolute;
  width: 1110.612px;
  height: 726.63px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('@/assets/primary_school/house-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>
