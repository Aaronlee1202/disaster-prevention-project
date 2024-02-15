<script setup>
import Month_Icon from '@/components/svg/month_icon.vue';
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

defineProps({
  screenSwitch: Boolean
});
</script>

<template>
  <div class="container-fluid other-month-row" v-if="!screenSwitch">
    <div class="other-month-background"></div>
    <div class="container">
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
  <div class="container-fluid other-month-row" v-if="screenSwitch">
    <div class="other-month-background"></div>
    <div class="container">
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
</template>

<style lang="scss" scoped>
.chapter {
  width: 60px;
  height: 60px;
  border-radius: 200px;
  background: #ffe300;
  font-size: 1.8em;
  color: #333;
  font-weight: 400;
}
.month-dashed-line {
  width: 70%;
  border-bottom: 5px dashed #b8806f;
  margin: 3rem 0;
}
.other-month-row {
  position: relative;
  width: 100%;
  padding: 0px 0px 109.5px 0px;
  margin-top: 100.5px;
}
.other-month-background {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  // bottom: 0;
  // left: -1000.5px;
  // width: 3000px;
  // height: 100%;
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
  .other-month-row {
    position: relative;
    width: 100%;
    padding: 100.5px 0px 109.5px 0px;
    // margin-top: 100.5px;
    // background-color: #fffbeb;
    .other-month-background {
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
// mobile
@media (max-width: 768px) {
  .month-dashed-line {
    width: 80%;
    border-bottom: 5px dashed #b8806f;
    margin: 1.5rem 0;
  }

  .other-month-row {
    position: relative;
    width: 100%;
    padding: 0 0 50px 0;
    .other-month-background {
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
