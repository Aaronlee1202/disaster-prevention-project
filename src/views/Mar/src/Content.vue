<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import ShareComponent from '@/components/ShareComponent.vue';
import OtherMonthRight from '@/components/OtherMonthRight.vue';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
import Link_Icon from '@/components/svg/link_icon.vue';
import Arrow_Right from '@/components/svg/arrow_right.vue';
// import Arrow_share from '@/components/svg/arrow_share_white.vue';
import QAjson from '@/assets/lottie/QA.json';

const newQAJson = ref(null);
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
</script>

<template>
  <div id="flow-of-people element-height">
    <div class="container mt-5 p-0">
      <!-- chapter 1 -->
      <div class="row d-flex justify-content-end">
        <div class="col-1 p-0">
          <div class="d-flex flex-row-reverse">
            <div class="chapter d-flex align-items-center justify-content-center">01</div>
          </div>
        </div>
        <div class="col">
          <h3>甚麼是氣候變遷指標?</h3>
          <p>
            依據世界氣象組織(World Meteorological Organization,
            WMO)建議的「氣候變遷偵測與指標」(Climate Change Detection and Indices,
            CCDI)，是聚焦在極端高溫及低溫、暴雨以及乾旱等議題的指標。
          </p>
          <div class="img-box">
            <img src="@/assets/march/01.png" alt="臺灣氣候變遷的指標" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>22項評估臺灣氣候變遷的指標</a>
          </div>
        </div>
      </div>
      <!-- chapter 2 -->
      <div class="row d-flex justify-content-end">
        <div class="col-1 p-0">
          <div class="d-flex flex-row-reverse">
            <div class="chapter d-flex align-items-center justify-content-center">02</div>
          </div>
        </div>
        <div class="col">
          <h3>科學家如何從巨量的氣候資料中提取出關鍵的資訊?</h3>
          <p>
            科學家透過歷史觀測數據，以及模擬不同溫室氣體的排放路徑，可以推估未來可能的衝擊，並計算出氣候變遷指標，提供不同情境下的氣候變遷資訊。
          </p>
          <div class="img-box">
            <img src="@/assets/march/02.png" alt="氣候變遷指標" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>氣候變遷指標結合歷史觀測與未來推估的數據進行計算</a>
          </div>
        </div>
      </div>
      <!-- chapter 3 -->
      <div class="row d-flex justify-content-end">
        <div class="col-1 p-0">
          <div class="d-flex flex-row-reverse">
            <div class="chapter d-flex align-items-center justify-content-center">03</div>
          </div>
        </div>
        <div class="col">
          <h3>氣候變遷指標怎麼用?</h3>
          <p>
            主要是提供氣候未來可能變化的資訊，例如想知道當全球升溫超過2℃時可能造成的影響，可以查詢全球暖化程度
            (Global Warming Levels, GWLs)
            2℃時期「日高溫最大值」以及「暖晝天數」，了解白天高溫升高多少，以及高溫的日子增加多少。
          </p>
          <div class="img-box">
            <img src="@/assets/march/03.png" alt="氣候變遷指標" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>氣候變遷指標能呈現全球不同暖化程度下，可能的未來氣候</a>
          </div>
        </div>
      </div>
      <!-- chapter 4 -->
      <div class="row d-flex justify-content-end">
        <div class="col-1 p-0">
          <div class="d-flex flex-row-reverse">
            <div class="chapter d-flex align-items-center justify-content-center">04</div>
          </div>
        </div>
        <div class="col">
          <h3>氣候變遷風險評估的最佳幫手</h3>
          <p>
            在國科會及學界的支持下，國家災害防救科技中心已出版三本《臺灣氣候變遷關鍵指標圖集》，是幫助大家解密未來氣候及進行風險評估的最佳幫手。
          </p>
          <div class="img-box">
            <img src="@/assets/march/04.png" alt="氣候圖集" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>國家災害防救科技中心已出版三本氣候圖集，可以提供查詢與下載。</a>
          </div>
        </div>
      </div>
      <!-- 相關連結 -->
      <div class="row d-flex justify-content-end mt-5">
        <div class="col-1 p-0">
          <div class="d-flex flex-row-reverse">
            <div class="chapter d-flex align-items-center justify-content-center">
              <Link_Icon />
            </div>
          </div>
        </div>
        <div class="link-container col">
          <h3>相關連結</h3>
          <div id="qa-doll"></div>
          <a
            class="related-links d-flex align-items-center justify-content-start mb-4 mt-5"
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
      <!-- 分享 回大廳 -->
      <ShareComponent />

      <!-- 其他月份 -->
      <OtherMonthRight />
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
.modal-content-custom {
  width: 100%;
  .modal-header {
    background-color: #24b2ae !important;
    padding: 12px 40px !important;
    .modal-title {
      color: #fff !important;
    }
    .btn-close {
      width: 26px;
      height: 26px;
      padding: 0;
      background-image: url(@/assets/modal/close.svg);
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
  .modal-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 80px !important;
    .share_btn {
      width: 50%;
      color: #24b2ae;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.8px;
      margin: 0 25px;
      cursor: pointer;
      .btn_text {
        width: 90px;
      }
      img {
        width: 100%;
        margin-bottom: 10%;
      }
      &:hover {
        color: #1c8582;
        transition: color 0.5s;
      }
    }
  }
  .modal-footer {
    padding-top: 0;
    border: none !important;
    display: flex;
    justify-content: center;
    .btn {
      font-size: 20px;
      font-weight: 700;
      color: #24b2ae;
      padding: 14px 40px;
      background-color: #fff;
      border: #24b2ae 1px solid;
      border-radius: 20px;

      &:hover {
        background-color: #24b2ae;
        color: #fff;
      }
    }
  }
}
.img-box {
  max-width: 790px;
  width: 100%;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
}
.chapter {
  width: 55px;
  height: 55px;
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
  max-width: 790px;
  width: 100%;
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
    top: -10%;
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
    width: 45px;
    height: 45px;
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
</style>
