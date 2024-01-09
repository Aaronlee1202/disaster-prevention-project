<script setup>
import { ref, watch, onMounted } from 'vue';
const screenWidth = ref(
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
);
const screenSwitch = ref(false);
onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  });
});
watch(
  screenWidth,
  (newVal) => {
    // screenWidth.value = newVal;
    if (newVal < 768) {
      screenSwitch.value = true;
    } else {
      screenSwitch.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div id="new-talisman">
    <div class="container custom-container" v-if="screenSwitch == false">
      <div class="row d-flex align-items-center">
        <div class="col-6 d-flex justify-content-end">
          <div class="img-container">
            <img src="@/assets/disaster_prevention/new_talisman.png" alt="新的護身符" />
          </div>
        </div>
        <div class="col-6">
          <div class="content-box">
            <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
            <h4 class="small-title">人流樓</h4>
            <h2>人手一機的防災新法寶</h2>
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
      <div class="row">
        <div class="col">
          <div class="img-container">
            <img src="@/assets/disaster_prevention/new_talisman.png" alt="新的護身符" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="content-box">
            <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
            <h4 class="small-title">人流樓</h4>
            <h2>人手一機的防災新法寶</h2>
            <p>
              發行日期 | 2023.01.01 <br />
              作者 | 地人組 黃明偉 <br />
              審稿人 | 柯孝勳
            </p>
          </div>
        </div>
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
@media (min-width: 1200px) {
  .custom-container {
    padding-top: 12%;
    padding-bottom: 5%;
  }
  .img-container {
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 70%;
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
    // height: 100vh;
    display: flex;
    justify-content: center;
    img {
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
    // height: 100vh;
    display: flex;
    justify-content: center;
    img {
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
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .content-box {
    padding-top: 10%;
    padding-left: 10%;
    img {
      width: 60%;
    }
  }
}
</style>
