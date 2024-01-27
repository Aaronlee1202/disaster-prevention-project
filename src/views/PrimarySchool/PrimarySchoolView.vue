<script setup>
import { onMounted, ref, reactive, watch, defineComponent } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useRouter } from 'vue-router';
import PeopleFlow from './src/PeopleFlow.vue';
import Norm from './src/norm.vue';
import twin from './src/twin.vue';
import strategy from './src/strategy.vue';
import potential from './src/potential.vue';
import atmosphere from './src/atmosphere.vue';
import arrow_share from '@/components/svg/arrow_share.vue';
import facebook_icon from '@/components/svg/facebook_icon.vue';
import line_icon from '@/components/svg/line_icon.vue';
import Home_Icon from '@/components/svg/home_icon.vue';

defineComponent({
  components: {
    PeopleFlow,
    Norm,
    twin,
    strategy,
    potential,
    atmosphere
  }
});

onMounted(() => {
  mouseEvent();
});

const { width } = useWindowSize();
const screenSwitch = ref(false);
watch(
  width,
  (newVal) => {
    if (newVal < 992) screenSwitch.value = true;
    else screenSwitch.value = false;
  },
  // 立即執行
  { immediate: true }
);

const flowOpen = reactive({
  openDoor: false,
  openWindows: false
});

const normOpen = reactive({
  openDoor: false,
  openWindows: false
});

const twinOpen = reactive({
  openDoor: false,
  openWindows: false
});

const strategyOpen = reactive({
  openDoor: false,
  openWindows: false
});

const potentialOpen = reactive({
  openDoor: false,
  openWindows: false
});

const atmosphereOpen = reactive({
  openDoor: false,
  openWindows: false
});

const mouseEvent = () => {
  const peopleFlowClick = document.querySelector('.people-flow-click');

  peopleFlowClick.addEventListener('mouseover', () => {
    document.getElementById(`people-flow-house`).style.opacity = 1;
  });
  peopleFlowClick.addEventListener('mouseout', () => {
    document.getElementById(`people-flow-house`).style.opacity = 0.7;
  });

  const normHouseClick = document.querySelector('.norm-house-click');

  normHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`norm-house`).style.opacity = 1;
  });
  normHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`norm-house`).style.opacity = 0.7;
  });

  const twinHouseClick = document.querySelector('.twin-house-click');

  twinHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`twin-house`).style.opacity = 1;
  });
  twinHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`twin-house`).style.opacity = 0.7;
  });

  const strategyHouseClick = document.querySelector('.strategy-house-click');

  strategyHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`strategy-house`).style.opacity = 1;
  });
  strategyHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`strategy-house`).style.opacity = 0.7;
  });

  const potentialHouseClick = document.querySelector('.potential-house-click');

  potentialHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`potential-house`).style.opacity = 1;
  });
  potentialHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`potential-house`).style.opacity = 0.7;
  });

  const atmosphereHouseClick = document.querySelector('.atmosphere-house-click');

  atmosphereHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`atmosphere-house`).style.opacity = 1;
  });
  atmosphereHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`atmosphere-house`).style.opacity = 0.7;
  });
};

const router = useRouter();
// 點擊門窗動畫
const clickHouse = (houseName) => {
  if (houseName == 'people-flow-open-door') {
    flowOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'people-flow-open-windows') {
    flowOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'norm-house-open-door') {
    normOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'norm-house-open-windows') {
    normOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'twin-house-open-door') {
    twinOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'twin-house-open-windows') {
    twinOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'strategy-house-open-door') {
    strategyOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'strategy-house-open-windows') {
    strategyOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'potential-house-open-door') {
    potentialOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'potential-house-open-windows') {
    potentialOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'atmosphere-house-open-door') {
    atmosphereOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'atmosphere-house-open-windows') {
    atmosphereOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  }
};
</script>

<template>
  <div class="container-fluid p-0" v-if="screenSwitch == false">
    <div class="primary-school">
      <div class="title-container">
        <img class="title-img" src="@/assets/disaster_prevention/title_img.svg" alt="" />
      </div>

      <div class="doll-1-container">
        <img src="@/assets/primary_school/doll_1.png" alt="doll_1" />
      </div>
      <div class="doll-2-container">
        <img src="@/assets/primary_school/doll_2.png" alt="doll_1" />
      </div>

      <div class="house-bg"></div>
      <!-- <div class="house-container"> -->
      <div class="house-box">
        <div id="people-flow-house">
          <PeopleFlow :flow-open="flowOpen" />
        </div>
        <div class="people-flow-click">
          <div class="door-click" @click="clickHouse('people-flow-open-door')"></div>
          <div class="windows-click" @click="clickHouse('people-flow-open-windows')"></div>
        </div>
        <div id="norm-house">
          <Norm :norm-open="normOpen" />
        </div>
        <div class="norm-house-click">
          <div class="door-click" @click="clickHouse('norm-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('norm-house-open-windows')"></div>
        </div>
        <div id="twin-house">
          <twin :twin-open="twinOpen" />
        </div>
        <div class="twin-house-click">
          <div class="door-click" @click="clickHouse('twin-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('twin-house-open-windows')"></div>
        </div>
        <div id="strategy-house">
          <strategy :strategy-open="strategyOpen" />
        </div>
        <div class="strategy-house-click">
          <div class="door-click" @click="clickHouse('strategy-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('strategy-house-open-windows')"></div>
        </div>
        <div id="potential-house">
          <potential :potential-open="potentialOpen" />
        </div>
        <div class="potential-house-click">
          <div class="door-click" @click="clickHouse('potential-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('potential-house-open-windows')"></div>
        </div>
        <div id="atmosphere-house">
          <atmosphere :atmosphere-open="atmosphereOpen" />
        </div>
        <div class="atmosphere-house-click">
          <div class="door-click" @click="clickHouse('atmosphere-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('atmosphere-house-open-windows')"></div>
        </div>

        <div class="share-container">
          <div class="row align-items-center">
            <div class="col-3 pb-4 text-end">
              <arrow_share />
              分享到...
            </div>
            <div class="col-2">
              <div class="icon">
                <facebook_icon />
                <div>facebook</div>
              </div>
            </div>
            <div class="col-2">
              <div class="icon">
                <line_icon />
                <div>line</div>
              </div>
            </div>
            <div class="col pb-4">
              <div class="home-btn"><Home_Icon />回首頁</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- mobil -->
  <div class="container-fluid" v-if="screenSwitch == true">
    <div class="primary-school">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
          <img class="title-img" src="@/assets/disaster_prevention/title_img.svg" />
        </div>
      </div>
      <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
          <img class="doll-img" src="@/assets/primary_school/doll_m.svg" />
        </div>
      </div>
      <div class="row">
        <div
          class="people-flow-container col-12 mb-2 d-flex align-items-center justify-content-center"
        >
          <div id="people-flow-house">
            <PeopleFlow :flow-open="flowOpen" />
          </div>
          <div class="people-flow-click">
            <div class="door-click" @click="clickHouse('people-flow-open-door')"></div>
            <div class="windows-click" @click="clickHouse('people-flow-open-windows')"></div>
          </div>
        </div>
        <div class="norm-container col-12 mb-5 d-flex align-items-center justify-content-center">
          <div id="norm-house">
            <Norm :norm-open="normOpen" />
          </div>
          <div class="norm-house-click">
            <div class="door-click" @click="clickHouse('norm-house-open-door')"></div>
            <div class="windows-click" @click="clickHouse('norm-house-open-windows')"></div>
          </div>
        </div>
        <div class="twin-container col-12 mb-2 d-flex align-items-center justify-content-center">
          <div id="twin-house">
            <twin :twin-open="twinOpen" />
          </div>
          <div class="twin-house-click">
            <div class="door-click" @click="clickHouse('twin-house-open-door')"></div>
            <div class="windows-click" @click="clickHouse('twin-house-open-windows')"></div>
          </div>
        </div>
        <div
          class="strategy-container col-12 mb-2 d-flex align-items-center justify-content-center"
        >
          <div id="strategy-house">
            <strategy :strategy-open="strategyOpen" />
          </div>
          <div class="strategy-house-click">
            <div class="door-click" @click="clickHouse('strategy-house-open-door')"></div>
            <div class="windows-click" @click="clickHouse('strategy-house-open-windows')"></div>
          </div>
        </div>
        <div
          class="potential-container col-12 mb-2 d-flex align-items-center justify-content-center"
        >
          <div id="potential-house">
            <potential :potential-open="potentialOpen" />
          </div>
          <div class="potential-house-click">
            <div class="door-click" @click="clickHouse('potential-house-open-door')"></div>
            <div class="windows-click" @click="clickHouse('potential-house-open-windows')"></div>
          </div>
        </div>
        <div
          class="atmosphere-container col-12 mb-5 d-flex align-items-center justify-content-center"
        >
          <div id="atmosphere-house">
            <atmosphere :atmosphere-open="atmosphereOpen" />
          </div>
          <div class="atmosphere-house-click">
            <div class="door-click" @click="clickHouse('atmosphere-house-open-door')"></div>
            <div class="windows-click" @click="clickHouse('atmosphere-house-open-windows')"></div>
          </div>
        </div>
      </div>
      <!-- <div class="share-container">
        <div class="row align-items-center">
          <div class="col-3 pb-4 text-end">
            <arrow_share />
            分享到...
          </div>
          <div class="col-2">
            <div class="icon">
              <facebook_icon />
              <div>facebook</div>
            </div>
          </div>
          <div class="col-2">
            <div class="icon">
              <line_icon />
              <div>line</div>
            </div>
          </div>
          <div class="col pb-4">
            <div class="home-btn"><Home_Icon />回首頁</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.house-bg {
  position: absolute;
  background-image: url('@/assets/primary_school/house_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -999;
}
.doll-1-container {
  position: absolute;
  width: 10%;
  height: 10%;
  top: 28%;
  left: 28%;
  transform: translate(-50%, -50%);
}
.doll-2-container {
  position: absolute;
  width: 10%;
  height: 10%;
  top: 60%;
  left: 75%;
  transform: translate(-50%, -50%);
}
@media screen and (min-width: 1200px) {
  .primary-school {
    position: relative;
    height: 100%;
    padding-top: 10% !important;
  }
  .share-container {
    position: absolute;
    width: 35% !important;
    right: 10% !important;
    color: #a06c57;
    .row {
      height: 100%;
      .col {
        height: 100%;
      }
    }
    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        margin-bottom: 5px;
      }
      &:hover {
        color: #a67865;
      }
    }
    .home-btn {
      display: flex;
      width: 140px;
      height: 44px;
      padding: 10px 33px;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      color: #ffebca;
      background-color: #a06c57;
      cursor: pointer;
      svg {
        margin-right: 5px;
      }
      &:hover {
        background-color: #a67865;
        color: #ffebca;
        svg {
          fill: #ffebca;
        }
      }
    }
  }
  .title-img {
    width: 15%;
    // padding-left: 10%;
  }

  .house-container {
    position: relative;
    width: 100%;
  }
  .house-box {
    position: relative;
    max-width: 1920px;
    height: 980px;
    margin: auto;
  }
  .house-bg {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    top: 55%;
    left: 50%;
  }
  .people-flow-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 24% !important;
    left: 57% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #people-flow-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
  }
  .norm-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 40% !important;
    left: 76% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #norm-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
  }
  .twin-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 35% !important;
    left: 40% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #twin-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
  }
  .strategy-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 53% !important;
    left: 58% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #strategy-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
  }
  .potential-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 46% !important;
    left: 22% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #potential-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
  }
  .atmosphere-house-click {
    position: absolute;
    width: 220px !important;
    height: 180px !important;
    top: 65% !important;
    left: 40% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #atmosphere-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
  }
}
@media screen and (min-width: 992px) {
  .primary-school {
    position: relative;
    height: 100%;
  }
  .share-container {
    position: absolute;
    width: 50%;
    bottom: 3%;
    right: 0%;
    color: #a06c57;
    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        margin-bottom: 5px;
      }
      &:hover {
        color: #a67865;
      }
    }
    .home-btn {
      display: flex;
      width: 140px;
      height: 44px;
      padding: 10px 33px;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      color: #ffebca;
      background-color: #a06c57;
      cursor: pointer;
      svg {
        margin-right: 5px;
      }
      &:hover {
        background-color: #a67865;
        color: #ffebca;
        svg {
          fill: #ffebca;
        }
      }
    }
  }
  .title-container {
    position: absolute;
    width: 100%;
    top: 20% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
  .title-img {
    width: 15%;
    // padding-top: 10%;
    // margin-top: 10%;
  }
  .house-box {
    position: relative;
    max-width: 1920px;
    height: 980px;
    margin: auto;
  }
  .house-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .people-flow-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 31%;
    left: 57%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 57%;
      left: 17%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 40%;
      right: 2%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }

  #people-flow-house {
    position: absolute;
    width: 250px;
    top: 24%;
    left: 57%;
    transform: translate(-50%, -50%);
    z-index: 998;
    opacity: 0.7;
    #people-flow {
      position: absolute;
    }
    #people-flow-open-door {
      position: absolute;
    }
    #people-flow-open-windows {
      position: absolute;
    }
  }
  .norm-house-click {
    position: absolute;
    width: 200px;
    height: 180px;
    top: 46%;
    left: 76%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 7%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 45%;
      right: 17%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #norm-house {
    position: absolute;
    width: 250px;
    top: 37%;
    left: 75%;
    transform: translate(-50%, -50%);
    z-index: 998;
    opacity: 0.7;
    #norm {
      position: absolute;
    }
    #norm-open-door {
      position: absolute;
    }
    #norm-open-windows {
      position: absolute;
    }
  }
  .twin-house-click {
    position: absolute;
    width: 200px;
    height: 180px;
    top: 41%;
    left: 40%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;

      top: 45%;
      right: 5%;
      // background-color: #3f3a3a50;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 45%;
      left: 20%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #twin-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 33%;
    left: 40%;
    transform: translate(-50%, -50%);
    z-index: 998;
    opacity: 0.7;
    #twin {
      position: absolute;
    }
    #twin-open-door {
      position: absolute;
    }
    #twin-open-windows {
      position: absolute;
    }
  }
  .strategy-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 60%;
    left: 58%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      left: 20%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #strategy-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 53%;
    left: 58%;
    transform: translate(-50%, -50%);
    z-index: 998;
    opacity: 0.7;
    #strategy {
      position: absolute;
    }
    #strategy-open-door {
      position: absolute;
    }
    #strategy-open-windows {
      position: absolute;
    }
  }
  .potential-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 52%;
    left: 22%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 53%;
      left: 15%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 33%;
      right: 10%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #potential-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 44%;
    left: 22%;
    transform: translate(-50%, -50%);
    z-index: 998;
    opacity: 0.7;
    #potential {
      position: absolute;
    }
    #potential-open-door {
      position: absolute;
    }
    #potential-open-windows {
      position: absolute;
    }
  }
  .atmosphere-house-click {
    position: absolute;
    width: 220px !important;
    height: 180px !important;
    top: 72%;
    left: 40%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 40%;
      left: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #atmosphere-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 63%;
    left: 40%;
    transform: translate(-50%, -50%);
    z-index: 998;
    opacity: 0.7;
    #atmosphere {
      position: absolute;
    }
    #atmosphere-open-door {
      position: absolute;
    }
    #atmosphere-open-windows {
      position: absolute;
    }
  }
}

// 手機板
@media screen and (max-width: 992px) {
  .container-fluid {
    // padding: 0;
  }

  .primary-school {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 20%;
    background-color: #fffcec;
  }
  .title-img {
    width: 50%;
    // padding: 0;
    // margin-bottom: 50px;
  }
  .doll-img {
    width: 40%;
    margin-top: 5%;
  }

  .people-flow-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .people-flow-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 52% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 16%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 35%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #people-flow-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    #people-flow {
      position: absolute;
    }
    #people-flow-open-door {
      position: absolute;
    }
    #people-flow-open-windows {
      position: absolute;
    }
  }
  .norm-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .norm-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 60% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      left: 12%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 45%;
      right: 13%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #norm-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    #norm {
      position: absolute;
    }
    #norm-open-door {
      position: absolute;
    }
    #norm-open-windows {
      position: absolute;
    }
  }
  .twin-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .twin-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 54% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      left: 19%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #twin-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    #twin {
      position: absolute;
    }
    #twin-open-door {
      position: absolute;
    }
    #twin-open-windows {
      position: absolute;
    }
  }
  .strategy-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .strategy-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      left: 19%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #strategy-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    #strategy {
      position: absolute;
    }
    #strategy-open-door {
      position: absolute;
    }
    #strategy-open-windows {
      position: absolute;
    }
  }
  .potential-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .potential-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 55% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 10%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #potential-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    #potential {
      position: absolute;
    }
    #potential-open-door {
      position: absolute;
    }
    #potential-open-windows {
      position: absolute;
    }
  }
  .atmosphere-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .atmosphere-house-click {
    position: absolute;
    width: 220px !important;
    height: 180px !important;
    top: 55% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 40%;
      left: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #atmosphere-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    #atmosphere {
      position: absolute;
    }
    #atmosphere-open-door {
      position: absolute;
    }
    #atmosphere-open-windows {
      position: absolute;
    }
  }
}
</style>
