<script setup>
import { onMounted, ref, watch } from 'vue';
import lottie from 'lottie-web';
import { useWindowSize } from '@vueuse/core';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
import Link_Icon from '@/components/svg/link_icon.vue';
import Arrow_Right from '@/components/svg/arrow_right.vue';
import Arrow_share from '@/components/svg/arrow_share_white.vue';
import Month_Icon from '@/components/svg/month_icon.vue';
import QAjson from '@/assets/lottie/QA.json';
import month_1 from '@/assets/flow_of_people/month/1.svg';
import month_2 from '@/assets/flow_of_people/month/2.svg';
import month_3 from '@/assets/flow_of_people/month/3.svg';
import month_4 from '@/assets/flow_of_people/month/4.svg';
import month_5 from '@/assets/flow_of_people/month/5.svg';
import month_6 from '@/assets/flow_of_people/month/6.svg';
import month_7 from '@/assets/flow_of_people/month/7.svg';
import month_8 from '@/assets/flow_of_people/month/8.svg';
import month_9 from '@/assets/flow_of_people/month/9.svg';
import month_10 from '@/assets/flow_of_people/month/10.svg';
import month_11 from '@/assets/flow_of_people/month/11.svg';
import month_12 from '@/assets/flow_of_people/month/12.svg';

const { width } = useWindowSize();
const items = [
  month_1,
  month_2,
  month_3,
  month_4,
  month_5,
  month_6,
  month_7,
  month_8,
  month_9,
  month_10,
  month_11,
  month_12
];
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
    console.log('mobile: ', screenSwitch.value);
  },
  // 立即執行
  { immediate: true }
);
</script>

<template>
  <div id="flow-of-people element-height">
    <div class="container mt-5" v-if="!screenSwitch">
      <!-- chapter 1 -->
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
      <!-- chapter 2 -->
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
      <!-- chapter 3 -->
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
      <!-- chapter 4 -->
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
      <!-- 相關連結 -->
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
        <div class="dashed-line"></div>
      </div>
      <!-- 分享 回大廳 -->
      <div class="row">
        <div class="col mx-4 d-flex justify-content-end">
          <button class="btn share-btn" type="button">
            <Arrow_share />
            <div>分享</div>
          </button>
        </div>
        <div class="col mx-4">
          <button class="btn home-btn" type="button">
            <!-- <Home_Icon  class="home-icon"/> -->
            <!-- <img class="home-icon" src="@/assets/flow_of_people/home-icon.svg" alt="" /> -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="House-f">
                <path
                  id="Vector"
                  d="M20.5127 9.72184L13.0127 2.90621C12.7362 2.65324 12.375 2.51294 12.0002 2.51294C11.6254 2.51294 11.2642 2.65324 10.9877 2.90621L3.4877 9.72184C3.33414 9.86232 3.2115 10.0332 3.12757 10.2237C3.04364 10.4141 3.00027 10.62 3.0002 10.8281V19.4625C2.9941 19.8406 3.12761 20.2078 3.3752 20.4937C3.51572 20.6535 3.68882 20.7814 3.88287 20.8687C4.07692 20.956 4.28741 21.0008 4.5002 21H9.0002C9.19911 21 9.38988 20.9209 9.53053 20.7803C9.67118 20.6396 9.7502 20.4489 9.7502 20.25V15.75C9.7502 15.551 9.82922 15.3603 9.96987 15.2196C10.1105 15.079 10.3013 15 10.5002 15H13.5002C13.6991 15 13.8899 15.079 14.0305 15.2196C14.1712 15.3603 14.2502 15.551 14.2502 15.75V20.25C14.2502 20.4489 14.3292 20.6396 14.4699 20.7803C14.6105 20.9209 14.8013 21 15.0002 21H19.5002C19.749 21.0022 19.9942 20.9408 20.2127 20.8218C20.4504 20.6924 20.649 20.5013 20.7875 20.2688C20.9261 20.0362 20.9995 19.7707 21.0002 19.5V10.8281C21.0001 10.62 20.9568 10.4141 20.8728 10.2237C20.7889 10.0332 20.6663 9.86232 20.5127 9.72184Z"
                  fill="#26A8A8"
                />
              </g>
            </svg>

            <div>回大廳</div>
          </button>
        </div>
      </div>
      <!-- 其他月份 -->
      <div class="other-month-row">
        <div class="background-color"></div>
        <div class="row">
          <div class="col-12 mt-5 d-flex align-items-center justify-content-center">
            <div class="chapter d-flex align-items-center justify-content-center">
              <Month_Icon />
            </div>
            <div class="other-month-title">其他月份</div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="month-dashed-line"></div>
        </div>
        <div class="month-container">
          <div class="row row-cols-6">
            <div
              class="col mb-4 d-flex align-items-center justify-content-center"
              v-for="(item, index) in items"
              :key="index"
            >
              <a
                type="button"
                class="month-icon m-0 d-flex align-items-center justify-content-center"
                :class="[index >= 1 ? 'disable' : '']"
              >
                <img :src="item" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid custom-container" v-if="screenSwitch">
      <!-- chapter 1 -->
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
      <!-- chapter 2 -->
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
      <!-- chapter 3 -->
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
      <!-- chapter 4 -->
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

      <!-- 相關連結 -->
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
            <!-- <div class="d-flex align-items-end"> -->
            <div id="qa-doll"></div>
            <!-- </div> -->
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
        <div class="dashed-line"></div>
      </div>

      <!-- 分享 回大廳 -->
      <div class="row">
        <div class="col-12 mb-3 d-flex align-items-center justify-content-center">
          <div class="btn share-btn">
            <Arrow_share />
            <div>分享</div>
          </div>
        </div>
        <div class="col-12 mb-5 d-flex align-items-center justify-content-center">
          <div class="btn home-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="House-f">
                <path
                  id="Vector"
                  d="M20.5127 9.72184L13.0127 2.90621C12.7362 2.65324 12.375 2.51294 12.0002 2.51294C11.6254 2.51294 11.2642 2.65324 10.9877 2.90621L3.4877 9.72184C3.33414 9.86232 3.2115 10.0332 3.12757 10.2237C3.04364 10.4141 3.00027 10.62 3.0002 10.8281V19.4625C2.9941 19.8406 3.12761 20.2078 3.3752 20.4937C3.51572 20.6535 3.68882 20.7814 3.88287 20.8687C4.07692 20.956 4.28741 21.0008 4.5002 21H9.0002C9.19911 21 9.38988 20.9209 9.53053 20.7803C9.67118 20.6396 9.7502 20.4489 9.7502 20.25V15.75C9.7502 15.551 9.82922 15.3603 9.96987 15.2196C10.1105 15.079 10.3013 15 10.5002 15H13.5002C13.6991 15 13.8899 15.079 14.0305 15.2196C14.1712 15.3603 14.2502 15.551 14.2502 15.75V20.25C14.2502 20.4489 14.3292 20.6396 14.4699 20.7803C14.6105 20.9209 14.8013 21 15.0002 21H19.5002C19.749 21.0022 19.9942 20.9408 20.2127 20.8218C20.4504 20.6924 20.649 20.5013 20.7875 20.2688C20.9261 20.0362 20.9995 19.7707 21.0002 19.5V10.8281C21.0001 10.62 20.9568 10.4141 20.8728 10.2237C20.7889 10.0332 20.6663 9.86232 20.5127 9.72184Z"
                  fill="#26A8A8"
                />
              </g>
            </svg>
            <div>回大廳</div>
          </div>
        </div>
      </div>

      <!-- 其他月份 -->
      <div class="other-month-row">
        <div class="background-color"></div>
        <div class="row">
          <div class="col-12 mt-5 d-flex align-items-center justify-content-center">
            <div class="chapter mb-0 d-flex align-items-center justify-content-center">
              <Month_Icon />
            </div>
            <div class="other-month-title">其他月份</div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="month-dashed-line"></div>
        </div>
        <div class="month-container">
          <div class="row row-cols-4">
            <div
              class="col p-0 mb-2 d-flex align-items-center justify-content-center"
              v-for="(item, index) in items"
              :key="index"
            >
              <div
                class="month-icon m-0 d-flex align-items-center justify-content-center"
                :class="[index >= 1 ? 'disable' : '']"
              >
                <img :src="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
  border-bottom: 5px dashed #ffe300;
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
.other-month-row {
  position: relative;
  width: 100%;
  padding: 0px 0px 109.5px 0px;
  margin-top: 100.5px;
}
.background-color {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fffbeb;
  z-index: -1;
}
.other-month-title {
  margin-left: 0.775rem;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 1.28px;
  color: #26a8a8;
}
.month-container {
  max-width: 1400px;
  width: 100%;
  padding: 0 10.5rem;
}
.month-icon {
  width: 80px !important;
  height: 80px !important;
  // padding: 10.775px 21.926px 18.335px 23.119px;
  // margin: 0px 2rem 2rem 0px;
  border-radius: 200px;
  border: 4px solid #fff;
  background: #24b2ae;
  box-shadow: 0px 0px 0px 2px #24b2ae;
  cursor: pointer;
  &:hover {
    background: #47d8d4;
    box-shadow: 0px 0px 0px 2px #47d8d4;
  }
  &:active {
    background-color: #1f9a9a;
    box-shadow: 0px 0px 0px 2px #1f9a9a;
  }
}
.disable {
  opacity: 0.6 !important;
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
    border-bottom: 5px dashed #ffe300;
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
  .other-month-row {
    position: relative;
    width: 100%;
    padding: 100.5px 0px 109.5px 0px;
    // margin-top: 100.5px;
    // background-color: #fffbeb;
    .background-color {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: #fffbeb;
      z-index: -1;
    }
  }
  .other-month-title {
    margin-left: 0.775rem;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 1.28px;
    color: #26a8a8;
  }
  .month-container {
    width: 100%;
    padding: 0 5rem;
  }
  .month-icon {
    width: 100px;
    height: 100px;
    // padding: 10.775px 21.926px 18.335px 23.119px;
    margin: 0px 2rem 2rem 0px;
    border-radius: 200px;
    border: 4px solid #fff;
    background: #24b2ae;
    box-shadow: 0px 0px 0px 2px #24b2ae;
    cursor: pointer;
    &:hover {
      background: #47d8d4;
      box-shadow: 0px 0px 0px 2px #47d8d4;
    }
    &:active {
      background-color: #1f9a9a;
      box-shadow: 0px 0px 0px 2px #1f9a9a;
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
    border-bottom: 5px dashed #ffe300;
    margin: 1.5rem 0;
  }

  .other-month-row {
    position: relative;
    width: 100%;
    padding: 0 0 50px 0;
    .background-color {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: #fffbeb;
      z-index: -1;
    }
  }
  .other-month-title {
    margin-left: 0.775rem;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 1.28px;
    color: #26a8a8;
  }
  .month-container {
    width: 100%;
    padding: 0 2rem;
  }
  .month-icon {
    width: 60px !important;
    height: 60px !important;
    // padding: 10.775px 21.926px 18.335px 23.119px;
    // margin: 1rem 0;
    border-radius: 200px;
    border: 4px solid #fff;
    background: #47d8d4;
    box-shadow: 0px 0px 0px 2px #47d8d4;
    cursor: pointer;
    &:hover {
      background: #24b2ae;
      box-shadow: 0px 0px 0px 2px #24b2ae;
    }
  }
}
</style>
