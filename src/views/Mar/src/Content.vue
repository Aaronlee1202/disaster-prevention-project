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
            <h3>甚麼是氣候變遷指標?</h3>
            <p>
              依據世界氣象組織(World Meteorological Organization,
              WMO)建議的「氣候變遷偵測與指標」(Climate Change Detection and Indices,
              CCDI)，是聚焦在極端高溫及低溫、暴雨以及乾旱等議題的指標。
            </p>
            <img src="@/assets/march/01.png" alt="臺灣氣候變遷的指標" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>22項評估臺灣氣候變遷的指標</a>
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
            <h3>科學家如何從巨量的氣候資料中提取出關鍵的資訊?</h3>
            <p>
              科學家透過歷史觀測數據，以及模擬不同溫室氣體的排放路徑，可以推估未來可能的衝擊，並計算出氣候變遷指標，提供不同情境下的氣候變遷資訊。
            </p>
            <img src="@/assets/march/02.png" alt="氣候變遷指標" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>氣候變遷指標結合歷史觀測與未來推估的數據進行計算</a>
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
            <h3>氣候變遷指標怎麼用?</h3>
            <p>
              主要是提供氣候未來可能變化的資訊，例如想知道當全球升溫超過2℃時可能造成的影響，可以查詢全球暖化程度
              (Global Warming Levels, GWLs)
              2℃時期「日高溫最大值」以及「暖晝天數」，了解白天高溫升高多少，以及高溫的日子增加多少。
            </p>
            <img src="@/assets/march/03.png" alt="氣候變遷指標" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>氣候變遷指標能呈現全球不同暖化程度下，可能的未來氣候</a>
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
            <h3>氣候變遷風險評估的最佳幫手</h3>
            <p>
              在國科會及學界的支持下，國家災害防救科技中心已出版三本《臺灣氣候變遷關鍵指標圖集》，是幫助大家解密未來氣候及進行風險評估的最佳幫手。
            </p>
            <img src="@/assets/march/04.png" alt="技術應用" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>國家災害防救科技中心已出版三本氣候圖集，可以提供查詢與下載。</a>
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
              class="related-links d-flex align-items-center justify-content-start mb-4 mt-4"
              href="https://tccip.ncdr.nat.gov.tw/km_publish_one.aspx?bid=20190410092206"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷關鍵指標圖集</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://tccip.ncdr.nat.gov.tw/km_publish_one.aspx?bid=20210208202625"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷關鍵指標圖集-水文應用指標篇</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://tccip.ncdr.nat.gov.tw/ds_02_01_ar6.aspx"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">03</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷整合服務平台-AR6未來推估互動圖表</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://youtu.be/jdhKUKFcCN4"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">04</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷整合服務平台-AR6未來推估互動圖表操作教學</div>
                <div>
                  <Arrow_Right />
                </div>
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
            <h3>甚麼是氣候變遷指標?</h3>
            <p>
              依據世界氣象組織(World Meteorological Organization,
              WMO)建議的「氣候變遷偵測與指標」(Climate Change Detection and Indices,
              CCDI)，是聚焦在極端高溫及低溫、暴雨以及乾旱等議題的指標。
            </p>
            <img src="@/assets/march/01.png" alt="臺灣氣候變遷的指標" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption">22項評估臺灣氣候變遷的指標</a>
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
            <h3>科學家如何從巨量的氣候資料中提取出關鍵的資訊?</h3>
            <p>
              科學家透過歷史觀測數據，以及模擬不同溫室氣體的排放路徑，可以推估未來可能的衝擊，並計算出氣候變遷指標，提供不同情境下的氣候變遷資訊。
            </p>
            <img src="@/assets/march/02.png" alt="氣候變遷指標" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption">氣候變遷指標結合歷史觀測與未來推估的數據進行計算</a>
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
            <h3>氣候變遷指標怎麼用?</h3>
            <p>
              主要是提供氣候未來可能變化的資訊，例如想知道當全球升溫超過2℃時可能造成的影響，可以查詢全球暖化程度
              (Global Warming Levels, GWLs)
              2℃時期「日高溫最大值」以及「暖晝天數」，了解白天高溫升高多少，以及高溫的日子增加多少。
            </p>
            <img src="@/assets/march/03.png" alt="氣候變遷指標" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption">氣候變遷指標能呈現全球不同暖化程度下，可能的未來氣候</a>
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
            <h3>氣候變遷風險評估的最佳幫手</h3>
            <p>
              在國科會及學界的支持下，國家災害防救科技中心已出版三本《臺灣氣候變遷關鍵指標圖集》，是幫助大家解密未來氣候及進行風險評估的最佳幫手。
            </p>
            <img src="@/assets/march/04.png" alt="氣候圖集" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a class="small-caption"
              >國家災害防救科技中心已出版三本氣候圖集，<br />可以提供查詢與下載。</a
            >
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
              href="https://tccip.ncdr.nat.gov.tw/km_publish_one.aspx?bid=20190410092206"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">01</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷關鍵指標圖集</div>
                <Arrow_Right />
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://tccip.ncdr.nat.gov.tw/km_publish_one.aspx?bid=20210208202625"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">02</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷關鍵指標圖集-水文應用指標篇</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://tccip.ncdr.nat.gov.tw/ds_02_01_ar6.aspx"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">03</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷整合服務平台-AR6未來推估互動圖表</div>
                <div>
                  <Arrow_Right />
                </div>
              </div>
            </a>
            <a
              class="related-links d-flex align-items-center justify-content-start mb-4"
              href="https://youtu.be/jdhKUKFcCN4"
              target="_blank"
            >
              <div class="link-chapter d-flex align-items-center justify-content-center">04</div>
              <div class="link-text d-flex align-items-center justify-content-between">
                <div>臺灣氣候變遷整合服務平台-AR6未來推估互動圖表操作教學</div>
                <div>
                  <Arrow_Right />
                </div>
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
    top: 0;
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
      top: -5%;
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
  .link-container {
    position: relative;
    #qa-doll {
      position: absolute;
      width: 55%;
      top: 0;
      right: 0%;
      z-index: -1;
    }
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
  .small-caption {
    padding-top: 1px;
    margin-left: 5px;
    line-height: 21px;
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
  .link-container {
    position: relative;
    #qa-doll {
      position: absolute;
      width: 55%;
      top: -35%;
      right: 0%;
      z-index: -1;
    }
  }
}
</style>
