<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref, watch } from 'vue';
import lottie from 'lottie-web';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
import Link_Icon from '@/components/svg/link_icon.vue';
import Arrow_Right from '@/components/svg/arrow_right.vue';
import Arrow_share from '@/components/svg/arrow_share_white.vue';
import Other_Month from '@/components/OtherMonth.vue';
import QAjson from '@/assets/lottie/QA.json';

const router = useRouter();
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

const toHomePage = () => {
  router.push('/');
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
            <h3>運用人手一機的大數據</h3>
            <p>
              利用手機數量的大數據，透過AI技術的分析，可以迅速的研判人流現況，標註人流熱點，協助對於突發(災害)事件的整備工作。
            </p>
            <img src="@/assets/february/01.jpg" alt="人潮輪廓" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>利用AI技術自動標記人流集中熱區</a>
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
            <h3>AI智慧人流分析=機器學習+自動研判</h3>
            <p>智慧人流分析的技術，可以預測正常狀況下人流的時空分布，找出人流集中熱區。</p>
            <img src="@/assets/february/02.jpg" alt="人流分布" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>偵測或判定未來人流集中熱區</a>
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
            <h3>AI智慧人流分析的應用</h3>
            <p>
              本技術可應用於偵測與分析大量人潮聚集區域的管理，如地震、風災、水災等災害事件，或者集會、遊行、運動、音樂會等活動，研判人流集中熱點區，協助人流管理及處置。
            </p>
            <img src="@/assets/february/03.jpg" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>AI智慧研判人流聚集熱點</a>
          </div>
        </div>
      </div>
      <!-- 相關連結 -->
      <div class="container">
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
                <div>內政部住宅統計資訊主題查詢 （未提供）</div>
                <Arrow_Right />
              </div>
            </div>
            <div class="related-links d-flex align-items-center justify-content-start">
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>內政部營建署-都市危險及老舊建築物重建專區 （未提供）</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>
      </div>
      <!-- 分享 回大廳 -->
      <div class="container">
        <div class="row">
          <div class="col mx-4 d-flex justify-content-end">
            <button class="btn share-btn" type="button">
              <Arrow_share />
              <div>分享</div>
            </button>
          </div>
          <div class="col mx-4">
            <button class="btn home-btn" type="button" @click="toHomePage">
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
      </div>
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
            <h3>運用人手一機的大數據</h3>
            <p>
              利用手機數量的大數據，透過AI技術的分析，可以迅速的研判人流現況，標註人流熱點，協助對於突發(災害)事件的整備工作。
            </p>
            <img src="@/assets/february/01.jpg" alt="人潮輪廓" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>利用AI技術自動標記人流集中熱區</a>
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
            <h3>AI智慧人流分析=機器學習+自動研判</h3>
            <p>智慧人流分析的技術，可以預測正常狀況下人流的時空分布，找出人流集中熱區。</p>
            <img src="@/assets/february/02.jpg" alt="人流分布" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>偵測或判定未來人流集中熱區</a>
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
            <h3>AI智慧人流分析的應用</h3>
            <p>
              本技術可應用於偵測與分析大量人潮聚集區域的管理，如地震、風災、水災等災害事件，或者集會、遊行、運動、音樂會等活動，研判人流集中熱點區，協助人流管理及處置。
            </p>
            <img src="@/assets/february/03.jpg" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>AI智慧研判人流聚集熱點</a>
          </div>
        </div>
      </div>

      <!-- 相關連結 -->
      <div class="container">
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
                <div>內政部住宅統計資訊主題查詢 （未提供）</div>
                <Arrow_Right />
              </div>
            </div>
            <div class="related-links d-flex align-items-center justify-content-start">
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>內政部營建署-都市危險及老舊建築物重建專區 （未提供）</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </div>
            <div class="dashed-line"></div>
          </div>
        </div>
      </div>

      <!-- 分享 回大廳 -->
      <div class="container">
        <div class="row">
          <div class="col-12 mb-3 d-flex align-items-center justify-content-center">
            <div class="btn share-btn">
              <Arrow_share />
              <div>分享</div>
            </div>
          </div>
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="btn home-btn" @click="toHomePage">
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
      </div>

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
