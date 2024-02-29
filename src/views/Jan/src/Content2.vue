<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref, watch } from 'vue';
import lottie from 'lottie-web';
import { useWindowSize } from '@vueuse/core';
import ShareComponent2 from '@/components/ShareComponent2.vue';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
// import Link_Icon from '@/components/svg/link_icon.vue';
// import Arrow_Right from '@/components/svg/arrow_right.vue';
// import Arrow_share from '@/components/svg/arrow_share_white.vue';
import Other_Month from '@/components/OtherMonth.vue';
import QAjson from '@/assets/lottie/QA.json';

const { width } = useWindowSize();
// const items2 = [month_7, month_8, month_9, month_10, month_11, month_12];
const newQAJson = ref(null);
const screenSwitch = ref(false);
onMounted(() => {
  lottieAnimation();
});
const lottieAnimation = () => {
  newQAJson.value = lottie.loadAnimation({
    container: document.getElementById('qa-doll'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: QAjson
  });
};

watch(
  width,
  (newVal) => {
    if (newVal < 768) screenSwitch.value = true;
    else screenSwitch.value = false;
    // console.log('mobile: ', screenSwitch.value);
  },
  // 立即執行
  { immediate: true }
);
</script>

<template>
  <div id="flow-of-people element-height">
    <div class="container-fluid mt-5 p-0" v-if="!screenSwitch">
      <!-- chapter 1 -->
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="d-flex flex-row-reverse">
              <div class="chapter d-flex align-items-center justify-content-center">01</div>
            </div>
          </div>
          <div class="col-6">
            <h3>什麼是人流?什麼是人潮輪廓?</h3>
            <p>
              「人流」是指人群在不同時間與地點的動態分布數量；「人潮輪廓」是指透過人流的分析，可以掌握特定時間的人潮分布。以商業區人流分布為例，白天與夜間會因工作時段而有不同的分布狀況。
            </p>
            <img src="@/assets/flow_of_people/crowd_silhouette.png" alt="人潮輪廓" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>人流分布的統計</a>
          </div>
        </div>
      </div>
      <!-- chapter 2 -->
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="d-flex flex-row-reverse">
              <div class="chapter d-flex align-items-center justify-content-center">02</div>
            </div>
          </div>
          <div class="col-6">
            <h3>如何由無個人隱私手機大數據解密人流分布?</h3>
            <p>
              各電信公司透過基地台與智慧型手機的相連，可以瞭解用戶所在位置，去除了個資及固定網格進行統計後，可以分析商圈活動、交通人潮，以及觀光據點遊客的分布狀況。
            </p>
            <img src="@/assets/flow_of_people/distribution_of_people_flow.png" alt="人流分布" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>手機大數據可以分析人群動態作息模式</a>
          </div>
        </div>
      </div>
      <!-- chapter 3 -->
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="d-flex flex-row-reverse">
              <div class="chapter d-flex align-items-center justify-content-center">03</div>
            </div>
          </div>
          <div class="col-6">
            <h3>人流分布技術在防災上之應用</h3>
            <p>
              緊急事件或災害發生後，利用手機大數據透過AI技術進行分析，可以找出人潮聚集處與事件(災害)熱點之交集，提供應變作業參考，相關資訊平時亦可作為減災、防災的規劃工作用。
            </p>
            <img src="@/assets/flow_of_people/technology_application.png" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>人流分布的統計</a>
          </div>
        </div>
      </div>
      <!-- chapter 4 -->
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="d-flex flex-row-reverse">
              <div class="chapter d-flex align-items-center justify-content-center">04</div>
            </div>
          </div>
          <div class="col-6">
            <h3>全面性人流分析技術</h3>
            <p>
              與通訊業者合作，目前每10分鐘更新全國人流分布。人流分析主要是使用手機與基地台的連結資料，不用撥打或通話，就可精準的掌握人流狀態。
            </p>
            <img src="@/assets/flow_of_people/analytical_skills.png" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>以手機基地台的涵蓋範圍為基礎計算人流分布</a>
          </div>
        </div>
      </div>
      <!-- 相關連結 -->
      <!-- <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="d-flex flex-row-reverse">
              <div class="chapter d-flex align-items-center justify-content-center">
                <Link_Icon />
              </div>
            </div>
          </div>
          <div class="link-container col-6">
            <h3>相關連結</h3>
            <div id="qa-doll"></div>
            <div class="related-links d-flex align-items-center justify-content-start mb-4 mt-5">
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>內政部住宅統計資訊主題查詢</div>
                <Arrow_Right />
              </div>
            </div>
            <div class="related-links d-flex align-items-center justify-content-start">
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>內政部營建署-都市危險及老舊建築物重建專區</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 分享 回大廳 -->
      <ShareComponent2 :screen-switch="screenSwitch"/>
      <!-- 其他月份 -->
      <Other_Month :screen-switch="screenSwitch" />
    </div>
    <div class="container-fluid custom-container p-0" v-if="screenSwitch">
      <!-- chapter 1 -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <div class="chapter d-flex align-items-center justify-content-center">01</div>
            </div>
          </div>
          <div class="col-12">
            <h3>什麼是人流?什麼是人潮輪廓?</h3>
            <p>
              「人流」是指人群在不同時間與地點的動態分布數量；「人潮輪廓」是指透過人流的分析，可以掌握特定時間的人潮分布。以商業區人流分布為例，白天與夜間會因工作時段而有不同的分布狀況。
            </p>
            <img src="@/assets/flow_of_people/crowd_silhouette.png" alt="人潮輪廓" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>人流分布的統計</a>
          </div>
        </div>
      </div>
      <!-- chapter 2 -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <div class="chapter d-flex align-items-center justify-content-center">02</div>
            </div>
          </div>
          <div class="col-12">
            <h3>如何由無個人隱私手機大數據解密人流分布?</h3>
            <p>
              各電信公司透過基地台與智慧型手機的相連，可以瞭解用戶所在位置，去除了個資及固定網格進行統計後，可以分析商圈活動、交通人潮，以及觀光據點遊客的分布狀況。
            </p>
            <img src="@/assets/flow_of_people/distribution_of_people_flow.png" alt="人流分布" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>手機大數據可以分析人群動態作息模式</a>
          </div>
        </div>
      </div>
      <!-- chapter 3 -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <div class="chapter d-flex align-items-center justify-content-center">03</div>
            </div>
          </div>
          <div class="col-12">
            <h3>人流分布技術在防災上之應用</h3>
            <p>
              緊急事件或災害發生後，利用手機大數據透過AI技術進行分析，可以找出人潮聚集處與事件(災害)熱點之交集，提供應變作業參考，相關資訊平時亦可作為減災、防災的規劃工作用。
            </p>
            <img src="@/assets/flow_of_people/technology_application.png" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>人流分布的統計</a>
          </div>
        </div>
      </div>
      <!-- chapter 4 -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <div class="chapter d-flex align-items-center justify-content-center">04</div>
            </div>
          </div>
          <div class="col-12">
            <h3>全面性人流分析技術</h3>
            <p>
              與通訊業者合作，目前每10分鐘更新全國人流分布。人流分析主要是使用手機與基地台的連結資料，不用撥打或通話，就可精準的掌握人流狀態。
            </p>
            <img src="@/assets/flow_of_people/analytical_skills.png" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>以手機基地台的涵蓋範圍為基礎計算人流分布</a>
          </div>
        </div>
      </div>

      <!-- 相關連結 -->
      <!-- <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <div class="chapter d-flex align-items-center justify-content-center">
                <Link_Icon />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="link-container d-flex align-items-center justify-content-between">
              <h3>相關連結</h3>
              <div id="qa-doll"></div>
            </div>
            <div class="related-links d-flex align-items-center justify-content-start mb-4">
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>內政部住宅統計資訊主題查詢</div>
                <Arrow_Right />
              </div>
            </div>
            <div class="related-links d-flex align-items-center justify-content-start">
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>內政部營建署-都市危險及老舊建築物重建專區</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- 分享 回大廳 -->
      <ShareComponent2 :screen-switch="screenSwitch"/>

      <!-- 其他月份 -->
      <Other_Month :screen-switch="screenSwitch" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#flow-of-people {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 6rem 0 0 0;
}
h2 {
  margin: 1rem 0;
}
h3 {
  letter-spacing: 4% !important;
}
p {
  color: #333;
}
.chapter {
  width: 60px;
  height: 60px;
  border-radius: 200px;
  background: #ffe300;
  font-size: 1.8em;
  color: #333;
  font-weight: 400;
}
.dashed-line {
  width: 100%;
  border-bottom: 5px dashed #b8806f;
  margin: 6rem 0;
}
.month-dashed-line {
  width: 70%;
  border-bottom: 5px dashed #b8806f;
  margin: 3rem 0;
}
.link-chapter {
  width: 32px;
  height: 32px;
  margin-right: 0.775rem;
  border-radius: 200px;
  background: #fff;
  font-size: 0.875em;
  color: #333;
  font-weight: 700;
}
.caption {
  font-size: 0.875em;
  font-weight: 400;
  letter-spacing: 0.56px;
  color: #333;
}
.link-container {
  position: relative;
  #qa-doll {
    position: absolute;
    width: 55%;
    top: -35px;
    right: 0%;
    z-index: -1;
  }
}
.related-links {
  width: 100%;
  padding: 20px;
  background-color: #ffe300;
  box-shadow: 0px 0px 8px 0px rgba(173, 173, 173, 0.25);
  border-radius: 20px;
  cursor: pointer;
  P {
    margin: 0;
  }
  .link-text {
    width: 100%;
  }
  &:hover {
    background-color: #ffee81;
  }
  &:active {
    background-color: #f5da00;
  }
}
.btn {
  display: flex;
  width: 220px;
  height: 80px;
  font-size: 1.25em;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.share-btn {
  background-color: #26a8a8;
  color: #fff !important;
  &:hover {
    background-color: #47d8d4;
  }
  &:active {
    background-color: #1f9a9a;
  }
}
.home-btn {
  background-color: #fff;
  color: #26a8a8;
  border: 2px solid #26a8a8;
  svg g path {
    transition: all 0.3s;
  }
  &:hover {
    border: 2px solid #47d8d4;
    color: #47d8d4;
    svg g path {
      fill: #47d8d4;
    }
  }
  &:active {
    border: 2px solid #1f9a9a;
    color: #1f9a9a;
    svg g path {
      fill: #1f9a9a;
    }
  }
}
@media (max-width: 1200px) {
  #flow-of-people {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 6rem 0 0 0;
  }
  h2 {
    margin: 1rem 0;
  }
  p {
    color: #333;
  }
  .chapter {
    width: 60px;
    height: 60px;
    border-radius: 200px;
    background: #ffe300;
    font-size: 1.8em;
    color: #333;
    font-weight: 400;
  }
  .dashed-line {
    width: 100%;
    border-bottom: 5px dashed #b8806f;
    margin: 6rem 0;
  }
  .month-dashed-line {
    width: 80%;
    border-bottom: 5px dashed #b8806f;
    margin: 3rem 0;
  }
  .link-chapter {
    width: 32px;
    height: 32px;
    margin-right: 0.775rem;
    border-radius: 200px;
    background: #fff;
    font-size: 0.875em;
    color: #333;
    font-weight: 700;
  }
  .caption {
    font-size: 0.875em;
    font-weight: 400;
    letter-spacing: 0.56px;
    color: #333;
  }
  .link-container {
    position: relative;
    #qa-doll {
      position: absolute;
      width: 55%;
      top: -20px;
      right: 0%;
      z-index: -1;
    }
  }
  .related-links {
    width: 100%;
    padding: 20px;
    background-color: #ffe300;
    box-shadow: 0px 0px 8px 0px rgba(173, 173, 173, 0.25);
    border-radius: 20px;
    cursor: pointer;
    P {
      margin: 0;
    }
    .link-text {
      width: 100%;
    }
    &:hover {
      background-color: #ffee81;
    }
  }
  .btn {
    display: flex;
    width: 220px;
    height: 80px;
    font-size: 1.25em;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
  .share-btn {
    background-color: #26a8a8;
    color: #fff !important;
    &:hover {
      background-color: #47d8d4;
    }
    &:active {
      background-color: #1f9a9a;
    }
  }
  .home-btn {
    background-color: #fff;
    color: #26a8a8;
    border: 2px solid #26a8a8;
    svg g path {
      transition: all 0.3s;
    }
    &:hover {
      border: 2px solid #47d8d4;
      color: #47d8d4;
      svg g path {
        fill: #47d8d4;
      }
    }
    &:active {
      border: 2px solid #1f9a9a;
      color: #1f9a9a;
      svg g path {
        fill: #1f9a9a;
      }
    }
  }
}
@media (max-width: 992px) {
  .month-icon {
    margin: 0px 1rem 1rem 0px;
  }
}
// mobile
@media (max-width: 768px) {
  .custom-container {
    padding: 0 5%;
  }
  .chapter {
    margin-bottom: 5%;
  }
  .month-icon {
    margin: 0px 1rem 1rem 0px;
  }
  .btn {
    display: flex;
    width: 180px;
    height: 50px;
    font-size: 1.25em;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
  .share-btn {
    background-color: #26a8a8;
    color: #fff;
  }
  .home-btn {
    background-color: #fff;
    color: #26a8a8;
    border: 2px solid #26a8a8;
    // :hover {
    //   background-color: #fff !important;
    // }
  }
  .dashed-line {
    width: 100%;
    border-bottom: 5px dashed #b8806f;
    margin: 3rem 0;
  }
  .month-dashed-line {
    width: 80%;
    border-bottom: 5px dashed #b8806f;
    margin: 1.5rem 0;
  }
}
</style>
