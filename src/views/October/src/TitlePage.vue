<script setup>
import { ref, watch, onMounted, defineComponent } from 'vue';
import { useWindowSize } from '@vueuse/core';
import Lottie_Start from './lottie/LottieStart.vue';
import Lottie_Loop from './lottie/LottieLoop.vue';
import Lottie_Start2 from './lottie/LottieStart-2.vue';
import Lottie_Loop2 from './lottie/LottieLoop-2.vue';

defineComponent({
  components: {
    Lottie_Start,
    Lottie_Loop,
    Lottie_Start2,
    Lottie_Loop2
  }
});

const { width } = useWindowSize();

const screenSwitch = ref(false);

const lottieLoop = ref(false);
const lottieShow = ref(false);
const lottieShow2 = ref(false);

onMounted(() => {
  setTimeout(() => {
    lottieLoop.value = true;
    setTimeout(() => {
      lottieShow.value = true;
      setTimeout(() => {
        lottieShow2.value = true;
      }, 2000);
    }, 1320);
  }, 1600);
});

watch(
  width,
  (newVal) => {
    if (newVal <= 768) screenSwitch.value = true;
    else screenSwitch.value = false;
  },
  // 立即執行
  { immediate: true }
);
</script>

<template>
  <div id="new-talisman">
    <div class="container custom-container" v-if="screenSwitch == false">
      <div class="row d-flex align-items-center">
        <div class="col-6">
          <div class="img-container d-flex align-items-center">
            <div class="start-box d-flex justify-content-end">
              <Lottie_Start />
            </div>
            <div class="loop-box d-flex justify-content-end" v-if="lottieLoop">
              <Lottie_Loop />
            </div>
            <div class="start-box-2 d-flex justify-content-end" v-if="lottieShow">
              <Lottie_Start2 />
            </div>
            <div class="loop-box-2 d-flex justify-content-end" v-if="lottieShow2">
              <Lottie_Loop2 />
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="content-box">
            <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
            <h2 class="mt-5 mb-4">生中周遭的災害潛勢</h2>
            <p>
              發行日期 | 2024.10.01 <br />
              作者 | 坡洪組 王俞婷 <br />
              審稿人 | 張志新
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid custom-container" v-if="screenSwitch == true">
      <div class="img-container">
        <div class="start-box">
          <Lottie_Start />
        </div>
        <div class="loop-box" v-if="lottieLoop">
          <Lottie_Loop />
        </div>
        <div class="start-box-2" v-if="lottieShow">
          <Lottie_Start2 />
        </div>
        <div class="loop-box-2" v-if="lottieShow2">
          <Lottie_Loop2 />
        </div>
      </div>
      <div class="content-box">
        <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
        <h2>生中周遭的災害潛勢</h2>
        <p>
          發行日期 | 2024.10.01 <br />
          作者 | 坡洪組 王俞婷 <br />
          審稿人 | 張志新
        </p>
      </div>
      <div class="dashed-line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-container {
  // height: 100%;
  border-bottom: 5px dashed #b8806f;
}
.small-title {
  margin: 1rem 0;
  color: #b8806f;
  font-weight: 700;
  letter-spacing: 0.46px;
  opacity: 0.8;
}
h2 {
  margin: 1rem 0;
}
.img-container {
  .start-box {
    width: 100%;
    position: absolute;
    z-index: 5;
    opacity: 1;
    transition: opacity 1s ease;
  }
  .start-box-2 {
    width: 100%;
    position: absolute;
    z-index: 25;
  }
  .loop-box {
    width: 100%;
    position: absolute;
    z-index: 15;
  }
  .loop-box-2 {
    width: 100%;
    position: absolute;
    z-index: 30;
  }
  .fade-out {
    opacity: 0;
  }
  .fade-in {
    opacity: 1;
  }
}
@media (max-height: 900px) and (min-width: 1200px) {
  .img-container {
    div {
      width: 70% !important;
    }
  }
}
@media (min-width: 1200px) {
  .custom-container {
    padding-top: 10%;
    padding-bottom: 5%;
  }
  .img-container {
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    div {
      width: 65%;
    }
  }
  .content-box {
    img {
      width: 70%;
    }
  }
}
@media (max-width: 1200px) {
  .custom-container {
    padding-top: 12%;
    padding-bottom: 10%;
  }
  .img-container {
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    div {
      width: 70%;
    }
  }
  .content-box {
    img {
      width: 70%;
    }
  }
}
@media (max-width: 992px) {
  .custom-container {
    padding-top: 20%;
  }
  .img-container {
    position: relative;
    height: 70vh;
    display: flex;
    justify-content: center;
    div {
      width: 100%;
    }
  }
  .content-box {
    img {
      width: 80%;
    }
  }
}
// 手機板
@media (max-width: 768px) {
  .custom-container {
    padding-top: 15%;
    border-bottom: 0px;
  }
  .dashed-line {
    border-bottom: 5px dashed #b8806f;
  }
  .col {
    padding: 0;
  }
  .img-container {
    position: relative;
    height: 100svh;
    padding-top: 4%;
    width: 100% !important;
    .fade-out {
      opacity: 0;
    }
  }
  .content-box {
    position: relative;
    margin-bottom: 10%;
    padding: 0 6%;
    img {
      width: 100%;
    }
  }
}
</style>
