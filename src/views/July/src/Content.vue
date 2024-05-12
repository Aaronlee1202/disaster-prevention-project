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
            <h3>「一起來防災」</h3>
            <p>
              透過有趣的設計，提供大眾多元的防災知識與資訊，以直覺式的互動方式，來了解防減災的重要步驟。
            </p>
            <img src="@/assets/july/01.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>「一起來防災」首頁</a>
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
            <h3>視覺化防災資訊</h3>
            <p>
              主要在強調防災資訊的呈現與傳遞，透過視覺化的圖像設計與動態效果，幫助大眾消化防災知識。
            </p>
            <img src="@/assets/july/02.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>視覺化的圖像設計，讓民眾可以輕鬆的學習防災知識。</a>
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
            <h3>貼近日常生活的防災知識</h3>
            <p>
              內文針對臺灣最常見的地震與颱洪災害，提供判斷災害發生的因子，以及如何保護自己的相關常識。
            </p>
            <img src="@/assets/july/03.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>「每天一點防災知識」單元，可以培養日常防災好習慣。</a>
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
            <h3>其他防減災的學習資源</h3>
            <p>
              聯合國減災辦公室（United Nations Office for Disaster Risk
              Reduction），在官網中提供災害風險評估報告、培訓課程、線上論壇等活動資訊。日本「國土交通省防災資訊網」，也蒐整了防災知識與災害對策，便於民眾查詢與接收防減災資訊。
            </p>
            <img src="@/assets/july/04.png" alt="" />
            <img src="@/assets/july/04-1.png" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <p class="small-caption">國外防減災策略資源網站c</p>
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
              href="https://easy2do.ncdr.nat.gov.tw/together/"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>一起來防災</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://www.undrr.org/"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>聯合國減災辦公室官網</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://www.mlit.go.jp/river/bousai/olympic/tw/index.html"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">03</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>日本國土交通省防災資訊網</div>
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
            <h3>「一起來防災」</h3>
            <p>
              透過有趣的設計，提供大眾多元的防災知識與資訊，以直覺式的互動方式，來了解防減災的重要步驟。
            </p>
            <img src="@/assets/july/01.png" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <p class="small-caption">「一起來防災」首頁</p>
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
            <h3>視覺化防災資訊</h3>
            <p>
              主要在強調防災資訊的呈現與傳遞，透過視覺化的圖像設計與動態效果，幫助大眾消化防災知識。
            </p>
            <img src="@/assets/july/02.png" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <p class="small-caption">視覺化的圖像設計，讓民眾可以輕鬆的學習防災知識。</p>
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
            <h3>貼近日常生活的防災知識</h3>
            <p>
              內文針對臺灣最常見的地震與颱洪災害，提供判斷災害發生的因子，以及如何保護自己的相關常識。
            </p>
            <img src="@/assets/july/03.png" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption">「每天一點防災知識」單元，可以培養日常防災好習慣。 </a>
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
            <h3>其他防減災的學習資源</h3>
            <p>
              聯合國減災辦公室（United Nations Office for Disaster Risk
              Reduction），在官網中提供災害風險評估報告、培訓課程、線上論壇等活動資訊。日本「國土交通省防災資訊網」，也蒐整了防災知識與災害對策，便於民眾查詢與接收防減災資訊。
            </p>
            <img src="@/assets/july/04.png" />
            <img src="@/assets/july/04-1.png" alt="" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption">國外防減災策略資源網站</a>
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
              href="https://easy2do.ncdr.nat.gov.tw/together/"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>一起來防災</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://www.undrr.org/"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>聯合國減災辦公室官網</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://www.mlit.go.jp/river/bousai/olympic/tw/index.html"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">03</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>日本國土交通省防災資訊網</div>
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
      bottom: 270px;
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
    bottom: -30% !important;
    right: 0%;
    z-index: -1;
  }
  .small-caption {
    width: 100%;
  }
}
</style>
