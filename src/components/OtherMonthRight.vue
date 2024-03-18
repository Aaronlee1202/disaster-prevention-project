<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
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
  { img: month_1, link: 'january' },
  {
    img: month_2,
    link: 'february'
  },
  {
    img: month_3,
    link: 'march'
  },
  {
    img: month_4,
    link: 'april'
  },
  {
    img: month_5,
    link: 'may'
  },
  {
    img: month_6,
    link: 'june'
  },
  {
    img: month_7,
    link: 'july'
  },
  {
    img: month_8,
    link: 'august'
  },
  {
    img: month_9,
    link: 'september'
  },
  {
    img: month_10,
    link: 'october'
  },
  {
    img: month_11,
    link: 'november'
  },
  {
    img: month_12,
    link: 'december'
  }
];
const router = useRouter();
const openLink = (link) => {
  if (link == 'january' || link == 'february' || link == 'march') {
    router.push(link);
  } else {
    alert('尚未開放');
  }
};

const thisMonth = ref();
onMounted(() => {
  const getMonth = new Date().getUTCMonth();
  thisMonth.value = getMonth + 1;
});
</script>

<template>
  <div class="other-month-row">
    <div class="other-month-box">
      <div class="row d-flex justify-content-center">
        <div class="col mt-5 d-flex align-items-center justify-content-center">
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
              :class="[index >= thisMonth ? 'disable' : '']"
              @click="openLink(item.link)"
            >
              <img :src="item.img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.other-month-row {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 0px 109.5px 0px;
  margin-top: 50.5px;
}
.other-month-box {
  width: 100%;
  max-width: 700px;
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
  // padding: 0 10.5rem;
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
.month-dashed-line {
  width: 70%;
  // border-bottom: 5px dashed #ffe300;
  margin: 1rem 0;
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
.disable {
  opacity: 0.6 !important;
}

@media (max-width: 1200px) {
  .chapter {
    width: 45px;
    height: 45px;
    border-radius: 200px;
    background: #ffe300;
    font-size: 1.8em;
    color: #333;
    font-weight: 400;
  }
  .other-month-row {
    position: relative;
    width: 100%;
    padding: 100.5px 0px 109.5px 0px;
    display: flex;
    justify-content: end;
    // margin-top: 100.5px;
    // background-color: #fffbeb;
    .other-month-box {
      width: 100%;
      max-width: 700px;
    }
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
    // padding: 0 5rem;
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
  .month-dashed-line {
    width: 80%;
    // border-bottom: 5px dashed #ffe300;
    margin: 1rem 0;
  }
}
</style>
