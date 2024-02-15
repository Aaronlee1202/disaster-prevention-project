<script setup>
import { ref, onMounted, defineComponent } from 'vue';
import ContentPage from './Content.vue';
import Lottie_Start from './LottieStart.vue';
import Lottie_Start2 from './LottieStart2.vue';
import Lottie_Loop from './LottieLoop.vue';

defineComponent({
  components: {
    Lottie_Start,
    Lottie_Start2,
    Lottie_Loop,
    ContentPage
  }
});

const fadeOut = ref(false);

const lottieLoop = ref(false);

onMounted(() => {
  setTimeout(() => {
    fadeOut.value = true;
  }, 2000);
  setTimeout(() => {
    lottieLoop.value = true;
  }, 4100);
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
            <div class="begin-box d-flex justify-content-center">
              <Lottie_Start2 :play-lottie="fadeOut" />
            </div>
            <div class="loop-box d-flex justify-content-center" v-if="lottieLoop">
              <Lottie_Loop :play-lottie="lottieLoop" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="content-box content-page">
            <div class="title-box">
              <div>
                <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
                <!-- <h4 class="small-title">人流樓</h4> -->
                <h2 class="mt-5 mb-4">人手一機的防災新法寶</h2>
                <p>
                  發行日期 | 2023.01.01 <br />
                  作者 | 地人組 黃明偉 <br />
                  審稿人 | 柯孝勳
                </p>
              </div>
            </div>
            <ContentPage></ContentPage>
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
.custom-container {
  // height: 100%;
  // border-bottom: 5px dashed #b8806f;
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
  .begin-box {
    width: 100%;
    position: absolute;
    z-index: 15;
  }
  .loop-box {
    width: 100%;
    position: absolute;
    z-index: 20;
  }
  .fade-out {
    opacity: 0;
  }
}
.content-page {
  width: 100%;
  height: 90vh;
  overflow: scroll;
  overflow-x: hidden;
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
