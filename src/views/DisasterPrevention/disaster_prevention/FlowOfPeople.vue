<script setup>
import { ref, watch, onMounted } from 'vue';
import Triangle_Icon from '@/components/svg/triangle_icon.vue';
import Link_Icon from '@/components/svg/link_icon.vue';
import Arrow_Right from '@/components/svg/arrow_right.vue';
import Arrow_share from '@/components/svg/arrow_share.vue';
import Home_Icon from '@/components/svg/home_icon.vue';
import Month_Icon from '@/components/svg/month_icon.vue';
import Month_Btn_Icon from '@/components/svg/month_btn_icon.vue';
const items = [1, 2, 3, 4, 5, 6];
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
    screenWidth.value = newVal;
    if (newVal < 768) {
      screenSwitch.value = true;
    } else {
      screenSwitch.value = false;
    }
  },
  // 立即執行
  { immediate: true }
);
</script>

<template>
  <div id="flow-of-people">
    <div class="container" v-if="!screenSwitch">
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
        <div class="col-6">
          <h3>相關連結</h3>
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
          <div class="btn">
            <div><Arrow_share /></div>
            <div>分享</div>
          </div>
        </div>
        <div class="col mx-4">
          <div class="btn">
            <div><Home_Icon /></div>
            <div>回大廳</div>
          </div>
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
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div v-for="(item, index) in items" :key="index">
              <div class="month-icon d-flex align-items-center justify-content-center">
                <Month_Btn_Icon />
              </div>
            </div>
          </div>
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div v-for="(item, index) in items" :key="index">
              <div class="month-icon d-flex align-items-center justify-content-center">
                <Month_Btn_Icon />
              </div>
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
          <div class="d-flex align-items-center justify-content-between">
            <h3>相關連結</h3>
            <div class="d-flex align-items-end pb-1">
              <img src="@/assets/flow_of_people/mobile_cute_1.png" alt="" />
              <img src="@/assets/flow_of_people/mobile_cute_2.png" alt="" />
            </div>
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
          <div class="btn">
            <div><Arrow_share /></div>
            <div>分享</div>
          </div>
        </div>
        <div class="col-12 mb-5 d-flex align-items-center justify-content-center">
          <div class="btn">
            <div><Home_Icon /></div>
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
        <div class="row px-5">
          <div class="col p-0">
            <div class="d-flex justify-content-center" v-for="(item, index) in items" :key="index">
              <div class="month-icon d-flex align-items-center justify-content-center">
                <Month_Btn_Icon />
              </div>
            </div>
          </div>
          <div class="col p-0">
            <div class="d-flex justify-content-center" v-for="(item, index) in items" :key="index">
              <div class="month-icon d-flex align-items-center justify-content-center">
                <Month_Btn_Icon />
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
  border: 2px solid #26a8a8;
  color: #26a8a8;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  svg {
    fill: #26a8a8;
  }
  &:hover {
    background-color: #26a8a8;
    color: #fff;
    svg {
      fill: #fff;
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
.month-icon {
  width: 100px;
  height: 100px;
  padding: 10.775px 21.926px 18.335px 23.119px;
  margin: 0px 2rem 2rem 0px;
  border-radius: 200px;
  border: 4px solid #fff;
  background: var(--Primary-Dafault, #24b2ae);
  box-shadow: 0px 0px 0px 2px #24b2ae;
  cursor: pointer;
  &:hover {
    background: #47d8d4;
    box-shadow: 0px 0px 0px 2px #47d8d4;
  }
}

@media (min-width: 1440px) {
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
    border: 2px solid #26a8a8;
    color: #26a8a8;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    svg {
      fill: #26a8a8;
    }
    &:hover {
      background-color: #26a8a8;
      color: #fff;
      svg {
        fill: #fff;
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
  .month-icon {
    width: 100px;
    height: 100px;
    padding: 10.775px 21.926px 18.335px 23.119px;
    margin: 0px 2rem 2rem 0px;
    border-radius: 200px;
    border: 4px solid #fff;
    background: var(--Primary-Dafault, #24b2ae);
    box-shadow: 0px 0px 0px 2px #24b2ae;
    cursor: pointer;
    &:hover {
      background: #47d8d4;
      box-shadow: 0px 0px 0px 2px #47d8d4;
    }
  }
}
@media (max-width: 992px) {
  .month-icon {
    margin: 0px 1rem 1rem 0px;
  }
}
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
    border: 2px solid #26a8a8;
    color: #26a8a8;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    svg {
      fill: #26a8a8;
    }
    &:hover {
      background-color: #26a8a8;
      color: #fff;
      svg {
        fill: #fff;
      }
    }
  }
  .dashed-line {
    width: 100%;
    border-bottom: 5px dashed #b8806f;
    margin: 3rem 0;
  }
  .month-dashed-line {
    width: 70%;
    border-bottom: 5px dashed #b8806f;
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
  .month-icon {
    width: 100px;
    height: 100px;
    padding: 10.775px 21.926px 18.335px 23.119px;
    margin: 1rem 0;
    border-radius: 200px;
    border: 4px solid #fff;
    background: var(--Primary-Dafault, #24b2ae);
    box-shadow: 0px 0px 0px 2px #24b2ae;
    cursor: pointer;
    &:hover {
      background: #47d8d4;
      box-shadow: 0px 0px 0px 2px #47d8d4;
    }
  }
}
</style>
