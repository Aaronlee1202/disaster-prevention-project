<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref, watch } from 'vue';
import lottie from 'lottie-web';
import { useWindowSize } from '@vueuse/core';
import ShareComponent2 from '@/components/ShareComponent2.vue';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
import Link_Icon from '@/components/svg/link_icon.vue';
import Arrow_Right from '@/components/svg/arrow_right.vue';
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
            <h3>智慧化展示災防預警資訊</h3>
            <p>
              數位科技可以將空拍地形及地貌結合成數值模擬，建置3D山區洪水溢淹模式系統，應用於災害風險管理工作。
            </p>
            <img src="@/assets/june/01.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>山區閃洪三維預警展示系統架構</a>
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
            <h3>全時段山區洪災預警與衝擊分析</h3>
            <p>
              智慧防災可以整合天氣預報模式、河川剖面模組及流速模組，進行監測、預警，以提供未來72小時山區洪水的溢淹資訊，使數位化災害管理更加靈活。
            </p>
            <img src="@/assets/june/02.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>透過視覺化技術模擬聚落洪災時之情境，分析山區聚落受災衝擊程度，創造防災應用情境。</a>
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
            <h3>360度全視角虛實整合之災害預警</h3>
            <p>透過三維空間圖台，提供360度全方位視角，監看易致災聚落，有助於災害的情資研判。</p>
            <img src="@/assets/june/03.png" />
            <img src="@/assets/june/03-1.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>以三維空間圖台整合多維度防災資訊，提供防、救災工作情資分析與研判之精進</a>
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
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4 mt-5"
              href="https://fhy.wra.gov.tw/fhyv2/monitor/cctv"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>經濟部水利署-防災資訊服務網</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://www.cwa.gov.tw/V8/C/"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>交通部中央氣象署</div>
                <Arrow_Right />
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 分享 回大廳 -->
      <ShareComponent2 :screen-switch="screenSwitch" />
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
            <h3>智慧化展示災防預警資訊</h3>
            <p>
              數位科技可以將空拍地形及地貌結合成數值模擬，建置3D山區洪水溢淹模式系統，應用於災害風險管理工作。
            </p>
            <img src="@/assets/june/01.png" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <p class="small-caption">山區閃洪三維預警展示系統架構</p>
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
            <h3>全時段山區洪災預警與衝擊分析</h3>
            <p>
              智慧防災可以整合天氣預報模式、河川剖面模組及流速模組，進行監測、預警，以提供未來72小時山區洪水的溢淹資訊，使數位化災害管理更加靈活。
            </p>
            <img src="@/assets/june/02.png" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <p class="small-caption">
              透過視覺化技術模擬聚落洪災時之情境，分析山區聚落受災衝擊程度，創造防災應用情境。
            </p>
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
            <h3>60度全視角虛實整合之災害預警</h3>
            <p>透過三維空間圖台，提供360度全方位視角，監看易致災聚落，有助於災害的情資研判。</p>
            <img class="mb-1" src="@/assets/june/03.png" alt="" />
            <img src="@/assets/june/03-1.png" alt="" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption">
              以三維空間圖台整合多維度防災資訊，提供防、救災工作情資分析與研判之精進
            </a>
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
              <div id="qa-doll"></div>
            </div>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://fhy.wra.gov.tw/fhyv2/monitor/cctv"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>經濟部水利署-防災資訊服務網</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://www.cwa.gov.tw/V8/C/"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>交通部中央氣象署</div>
                <Arrow_Right />
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- 分享 回大廳 -->
      <ShareComponent2 :screen-switch="screenSwitch" />

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
.small-caption {
  width: 47%;
  padding-top: 1px;
  margin-left: 5px;
  line-height: 21px;
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
    bottom: 20%;
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
      top: -110px;
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
  // .small-caption {
  //   padding-top: 1px;
  //   margin-left: 5px;
  //   line-height: 21px;
  // }
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
@media (max-width: 576px) {
  #qa-doll {
    position: absolute;
    width: 55%;
    bottom: -110px !important;
    right: 0%;
    z-index: -1;
  }
  .small-caption {
    width: 100%;
  }
}
</style>
