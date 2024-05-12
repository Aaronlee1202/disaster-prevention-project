<script setup>
import { ref, onMounted, defineComponent } from 'vue';
import RightContent from './RightContent.vue';
import Lottie_Start from './lottie/LottieStart.vue';
import Lottie_Loop from './lottie/LottieLoop.vue';
import Lottie_Start2 from './lottie/LottieStart-2.vue';
import Lottie_Loop2 from './lottie/LottieLoop-2.vue';

defineComponent({
  components: {
    Lottie_Start,
    Lottie_Loop,
    Lottie_Start2,
    Lottie_Loop2,
    RightContent
  }
});

const lottieLoop = ref(false);
const lottieShow = ref(false);

onMounted(() => {
  setTimeout(() => {
    lottieLoop.value = true;
    setTimeout(() => {
      lottieShow.value = true;
    }, 1250);
  }, 1500);
});
</script>

<template>
  <div id="new-talisman">
    <div class="container custom-container">
      <div class="row d-flex align-items-start">
        <div class="col-4">
          <div class="img-container">
            <div class="start-box d-flex justify-content-center">
              <Lottie_Start />
            </div>
            <div class="loop-box d-flex justify-content-center" v-if="lottieLoop">
              <Lottie_Loop :play-lottie="lottieLoop" />
            </div>
            <div class="start-box-2 d-flex justify-content-center" v-if="lottieLoop">
              <Lottie_Start2 :play-lottie="lottieShow" />
            </div>
            <div class="loop-box-2 d-flex justify-content-center" v-if="lottieShow">
              <Lottie_Loop2 />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="content-box content-page">
            <div class="title-box">
              <div>
                <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
                <h2 class="mt-5 mb-4">防災知識大補帖</h2>
                <p>
                  發行日期 | 2024.07.01 <br />
                  作者 | 體社組 曾敏惠、吳郁玶 <br />
                  審稿人 | 李香潔
                </p>
              </div>
            </div>
            <RightContent></RightContent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#new-talisman {
  position: relative;
  width: 100%;
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
    z-index: 10;
    opacity: 1;
    transition: opacity 1s ease;
  }
  .start-box-2 {
    width: 100%;
    position: absolute;
    z-index: 25;
  }
  .start-box-3 {
    width: 100%;
    position: absolute;
    z-index: 30;
  }
  .begin-box {
    width: 100%;
    position: absolute;
    z-index: 15;
  }
  .loop-box {
    width: 100%;
    position: absolute;
    z-index: 20;
    opacity: 1;
    transition: opacity 1s ease;
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
.content-page {
  width: 100%;
  height: 90vh;
  overflow: scroll;
  overflow-x: hidden;
}
.content-page::-webkit-scrollbar {
  display: none;
}
@media (max-height: 790px) {
  .img-container {
    div {
      width: 90% !important;
    }
  }
}
@media (min-width: 1920px) {
  .img-container {
    div {
      width: 100%;
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
    div {
      width: 100%;
    }
  }
  .content-box {
    .title-box {
      height: 80vh;
      display: flex;
      align-items: center;
      padding-left: 9%;
      img {
        width: 50%;
      }
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
    div {
      width: 100%;
    }
  }
  .content-box {
    .title-box {
      height: 80vh;
      display: flex;
      align-items: center;
      padding-left: 9%;
      img {
        width: 50%;
      }
    }
  }
}
</style>
./ContentRight.vue
