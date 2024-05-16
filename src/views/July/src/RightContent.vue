<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import ShareComponent from '@/components/ShareComponent.vue';
import OtherMonthRight from '@/components/OtherMonthRight.vue';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
import Link_Icon from '@/components/svg/link_icon.vue';
import Arrow_Right from '@/components/svg/arrow_right.vue';
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
          <h3>「一起來防災」</h3>
          <p>
            透過有趣的設計，提供大眾多元的防災知識與資訊，以直覺式的互動方式，來了解防減災的重要步驟。
          </p>
          <div class="img-box">
            <img src="@/assets/july/01.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>「一起來防災」首頁</a>
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
          <h3>視覺化防災資訊</h3>
          <p>
            主要在強調防災資訊的呈現與傳遞，透過視覺化的圖像設計與動態效果，幫助大眾消化防災知識。
          </p>
          <div class="img-box">
            <img src="@/assets/july/02.png" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>視覺化的圖像設計，讓民眾可以輕鬆的學習防災知識。</a>
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
          <h3>貼近日常生活的防災知識</h3>
          <p>
            內文針對臺灣最常見的地震與颱洪災害，提供判斷災害發生的因子，以及如何保護自己的相關常識。
          </p>
          <div class="img-box">
            <img src="@/assets/july/03.png" alt="" />
          </div>
          <div class="caption d-flex align-items-center justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <a>「每天一點防災知識」單元，可以培養日常防災好習慣。</a>
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
          <h3>其他防減災的學習資源</h3>
          <p>
            聯合國減災辦公室（United Nations Office for Disaster Risk
            Reduction），在官網中提供災害風險評估報告、培訓課程、線上論壇等活動資訊。日本「國土交通省防災資訊網」，也蒐整了防災知識與災害對策，便於民眾查詢與接收防減災資訊。
          </p>
          <div class="img-box">
            <img src="@/assets/july/04.png" alt="" />
            <img src="@/assets/july/04-1.png" alt="" />
          </div>
          <div class="caption d-flex align-items-start justify-content-center mb-5 mt-1">
            <Triangle_Icon />
            <p class="small-caption">國外防減災策略資源網站</p>
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
.small-caption {
  padding-top: 1px;
  margin-left: 5px;
  line-height: 21px;
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
    bottom: 65%;
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
