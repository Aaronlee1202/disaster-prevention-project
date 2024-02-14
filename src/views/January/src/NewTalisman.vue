<script setup>
import { ref, watch, onMounted, defineComponent } from 'vue';
import { useWindowSize } from '@vueuse/core';
import TalismanStart from './TalismanStart.vue';
import TalismanNormal from './TalismanNormal.vue';

defineComponent({
  components: {
    TalismanStart,
    TalismanNormal
  }
});

const { width } = useWindowSize();

const fadeOut = ref(false);

const screenSwitch = ref(false);

onMounted(() => {
  setTimeout(() => {
    fadeOut.value = true;
  }, 1500);
});

watch(
  width,
  (newVal) => {
    if (newVal < 768) screenSwitch.value = true;
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
            <!-- <img src="@/assets/disaster_prevention/new_talisman.png" alt="新的護身符" /> -->
            <div class="start-box d-flex justify-content-end">
              <!-- <div id="new-talisman-start"></div> -->
              <TalismanStart :fade-out="fadeOut" />
            </div>
            <div class="begin-box d-flex justify-content-end">
              <!-- <div id="new-talisman-begin"></div> -->
              <TalismanNormal :play-lottie="fadeOut" />
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="content-box">
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
      </div>
    </div>
    <div class="container-fluid custom-container" v-if="screenSwitch == true">
      <div class="img-container">
        <TalismanStart :fade-out="fadeOut" />
        <TalismanNormal :play-lottie="fadeOut" />
      </div>
      <div class="content-box">
        <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
        <!-- <h4 class="small-title">人流樓</h4> -->
        <h2>人手一機的防災新法寶</h2>
        <p>
          發行日期 | 2023.01.01 <br />
          作者 | 地人組 黃明偉 <br />
          審稿人 | 柯孝勳
        </p>
      </div>
      <div class="dashed-line"></div>
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
    z-index: 10;
    opacity: 1;
    transition: opacity 1s ease;
  }
  .begin-box {
    width: 100%;
    position: absolute;
    z-index: 5;
  }
  .fade-out {
    opacity: 0;
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
    height: 80vh;
    display: flex;
    justify-content: center;
    div {
      width: 75%;
    }
  }
  .content-box {
    img {
      width: 70%;
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
    height: 80svh;
    width: 100% !important;
    #new-talisman-start {
      // 使用CSS的transform綁定來讓子div與父div保持一一樣大小
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      transform: scale(1);
      width: 100% !important;
      z-index: 10;
      opacity: 1;
      transition: opacity 1s ease;
    }
    #new-talisman-begin {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      transform: scale(1);
      width: 100% !important;
      z-index: 5;
    }
    .fade-out {
      opacity: 0;
    }
  }
  .content-box {
    position: relative;
    padding-top: 10%;
    padding-left: 10%;
    img {
      width: 60%;
    }
  }
}
</style>
