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
import finger_default from '@/assets/primary_school/Default.png';
import finger_pressed from '@/assets/primary_school/Pressed.png';
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
  // mouseEvent();
});
const fingerImg = [finger_default, finger_pressed];
// 按下手指
const clicked = ref(fingerImg[0]);
const clickFinger = () => {
  clicked.value = fingerImg[1];
  setTimeout(() => {
    clicked.value = fingerImg[0];
  }, 1000);
};

const toHomePage = () => {
  window.open(
    'https://disaster-prevention-aaronlee1-e94bc9c1e618a9cf0d60fba219ab7f711.gitlab.io/index.html',
    '_blank'
  );
  // router.push({ path: '/' });
};

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
  // const peopleFlowClick = document.querySelector('.people-flow-click');

  // peopleFlowClick.addEventListener('mouseover', () => {
  //   document.getElementById(`people-flow-house`).style.opacity = 1;
  // });
  // peopleFlowClick.addEventListener('mouseout', () => {
  //   document.getElementById(`people-flow-house`).style.opacity = 0.7;
  // });

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
const clickHouse = (houseName, fingerClick) => {
  console.log(fingerClick);
  if (fingerClick == 'finger-click') {
    clickFinger();
  }
  if (houseName == 'people-flow-open-door') {
    flowOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'people-flow-open-windows') {
    flowOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('february');
        window.open(routeData.href, '_blank');
      } else router.push('february');
    }, 1000);
  } else if (houseName == 'norm-house-open-door') {
    normOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'norm-house-open-windows') {
    normOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'twin-house-open-door') {
    twinOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'twin-house-open-windows') {
    twinOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'strategy-house-open-door') {
    strategyOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'strategy-house-open-windows') {
    strategyOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'potential-house-open-door') {
    potentialOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'potential-house-open-windows') {
    potentialOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'atmosphere-house-open-door') {
    atmosphereOpen.openDoor = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  } else if (houseName == 'atmosphere-house-open-windows') {
    atmosphereOpen.openWindows = true;
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('january');
        window.open(routeData.href, '_blank');
      } else router.push('january');
    }, 1000);
  }
};
</script>

<template>
  <div class="container-fluid p-0" v-if="screenSwitch == false">
    <div class="primary-school element-height">
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
          <img class="finger" :src="clicked" />
          <div class="door-click" @click="clickHouse('people-flow-open-door')"></div>
          <div
            class="windows-click"
            @click="clickHouse('people-flow-open-windows', 'finger-click')"
          ></div>
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
              <div class="home-btn" @click="toHomePage"><Home_Icon />回首頁</div>
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
          <img class="doll-img" src="@/assets/primary_school/doll_m.png" />
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
            <img class="finger" :src="clicked" />
            <div class="door-click" @click="clickHouse('people-flow-open-door')"></div>
            <div
              class="windows-click"
              @click="clickHouse('people-flow-open-windows', 'finger-click')"
            ></div>
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
.doll-1-container {
  position: absolute;
  width: 8%;
  top: 38%;
  left: 32%;
  transform: translate(-50%, -50%);
}
.doll-2-container {
  position: absolute;
  width: 8%;
  top: 79%;
  left: 74%;
  transform: translate(-50%, -50%);
}

.primary-school {
  position: relative;
  // padding-top: 100px;
}
.house-box {
  position: relative;
  max-width: 100%;
  height: 1080px;
  margin-bottom: 100px;
}
// .people-flow-click {
//   position: absolute;
//   transform: translate(-50%, -50%);
//   // border: #3f3a3a 1px solid;
//   z-index: 999;
//   .finger {
//     position: absolute;
//     animation: move 3s 0s infinite;
//     -webkit-animation: move 3s 0s infinite;
//   }
//   @keyframes move {
//     0%,
//     65% {
//       -webkit-transform: translateY(0px);
//       transform: translateY(0px);
//     }
//     70% {
//       -webkit-transform: translateY(6px);
//       transform: translateY(6px);
//     }
//     75% {
//       -webkit-transform: translateY(-6px);
//       transform: translateY(-6px);
//     }
//     80% {
//       -webkit-transform: translateY(6px);
//       transform: translateY(6px);
//     }
//     85% {
//       -webkit-transform: translateY(-6px);
//       transform: translateY(-6px);
//     }
//     90% {
//       -webkit-transform: translateY(6px);
//       transform: translateY(6px);
//     }
//     95% {
//       -webkit-transform: translateY(-6px);
//       transform: translateY(-6px);
//     }
//     100% {
//       -webkit-transform: translateY(0deg);
//       transform: translateY(0px);
//     }
//   }
//   .door-click {
//     position: absolute;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
//   .windows-click {
//     position: absolute;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
// }
// #people-flow-house {
//   position: absolute;
//   width: 400px;
//   top: 14%;
//   left: 61%;
//   transform: translate(-50%, -50%);
//   z-index: 998;
//   // opacity: 0.7;
//   #people-flow {
//     position: absolute;
//   }
//   #people-flow-open-door {
//     position: absolute;
//   }
//   #people-flow-open-windows {
//     position: absolute;
//   }
// }
// .norm-house-click {
//   position: absolute;
//   width: 200px;
//   height: 180px;
//   top: 52%;
//   left: 80%;
//   transform: translate(-50%, -50%);
//   // border: #3f3a3a 1px solid;
//   z-index: 999;
//   .door-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 55%;
//     left: 5%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
//   .windows-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 45%;
//     right: 17%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
// }
// #norm-house {
//   position: absolute;
//   width: 400px;
//   top: 30%;
//   left: 79%;
//   transform: translate(-50%, -50%);
//   z-index: 998;
//   opacity: 0.7;
//   #norm {
//     position: absolute;
//   }
//   #norm-open-door {
//     position: absolute;
//   }
//   #norm-open-windows {
//     position: absolute;
//   }
// }
// .twin-house-click {
//   position: absolute;
//   width: 200px;
//   height: 180px;
//   top: 50%;
//   left: 43%;
//   transform: translate(-50%, -50%);
//   // border: #3f3a3a 1px solid;
//   z-index: 999;
//   .door-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 42%;
//     right: 8%;
//     // background-color: #3f3a3a50;
//     cursor: pointer;
//     z-index: 999;
//   }
//   .windows-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 40%;
//     left: 17%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
// }
// #twin-house {
//   position: absolute;
//   width: 400px;
//   top: 28%;
//   left: 42%;
//   transform: translate(-50%, -50%);
//   z-index: 998;
//   opacity: 0.7;
//   #twin {
//     position: absolute;
//   }
//   #twin-open-door {
//     position: absolute;
//   }
//   #twin-open-windows {
//     position: absolute;
//   }
// }
// .strategy-house-click {
//   position: absolute;
//   width: 200px;
//   height: 180px;
//   top: 70%;
//   left: 60%;
//   transform: translate(-50%, -50%);
//   // border: #3f3a3a 1px solid;
//   z-index: 999;
//   .door-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 43%;
//     left: 10%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
//   .windows-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 45%;
//     right: 0%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
// }
// #strategy-house {
//   position: absolute;
//   width: 400px;
//   top: 50%;
//   left: 59%;
//   transform: translate(-50%, -50%);
//   z-index: 998;
//   opacity: 0.7;
//   #strategy {
//     position: absolute;
//   }
//   #strategy-open-door {
//     position: absolute;
//   }
//   #strategy-open-windows {
//     position: absolute;
//   }
// }
// .potential-house-click {
//   position: absolute;
//   width: 200px !important;
//   height: 180px !important;
//   top: 64%;
//   left: 21%;
//   transform: translate(-50%, -50%);
//   // border: #3f3a3a 1px solid;
//   z-index: 999;
//   .door-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 55%;
//     left: 15%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
//   .windows-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 30%;
//     right: 0%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
// }
// #potential-house {
//   position: absolute;
//   width: 400px;
//   top: 43%;
//   left: 22%;
//   transform: translate(-50%, -50%);
//   z-index: 998;
//   opacity: 0.7;
//   #potential {
//     position: absolute;
//   }
//   #potential-open-door {
//     position: absolute;
//   }
//   #potential-open-windows {
//     position: absolute;
//   }
// }
// .atmosphere-house-click {
//   position: absolute;
//   width: 250px;
//   height: 180px !important;
//   top: 86%;
//   left: 40%;
//   transform: translate(-50%, -50%);
//   // border: #3f3a3a 1px solid;
//   z-index: 999;
//   .door-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     top: 35%;
//     left: 0%;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
//   .windows-click {
//     position: absolute;
//     width: 70px;
//     height: 70px;
//     // background-color: #3f3a3a60;
//     cursor: pointer;
//     z-index: 999;
//   }
// }
// #atmosphere-house {
//   position: absolute;
//   transform: translate(-50%, -50%);
//   z-index: 998;
//   opacity: 0.7;
//   #atmosphere {
//     position: absolute;
//   }
//   #atmosphere-open-door {
//     position: absolute;
//   }
//   #atmosphere-open-windows {
//     position: absolute;
//   }
// }
@media screen and (min-width: 2560px) {
  .house-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('@/assets/primary_school/background/2560x1440.png') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -999;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .primary-school {
    padding-top: 10% !important;
  }
  .share-container {
    position: absolute;
    width: 30%;
    bottom: -5%;
    right: 7%;
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
    top: 17% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
  .title-img {
    width: 20%;
    padding-top: 5%;
    // margin-top: 10%;
  }

  .house-container {
    position: relative;
    width: 100%;
  }
  .house-box {
    margin-bottom: 90px;
  }
  .people-flow-click {
    position: absolute;
    width: 320px !important;
    height: 280px !important;
    top: 29%;
    left: 68%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    .finger {
      width: 25%;
      top: 56%;
      left: 78%;
    }
    .door-click {
      position: absolute;
      width: 120px;
      height: 120px;
      top: 55%;
      left: 0%;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      position: absolute;
      width: 120px;
      height: 120px;
      top: 33%;
      right: 2%;
      // background-color: #3f3a3a60;
    }
  }
  #people-flow-house {
    width: 550px !important;
    top: 2% !important;
    left: 67% !important;
  }
  .norm-house-click {
    width: 320px !important;
    height: 280px !important;
    top: 54% !important;
    left: 82% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 120px;
      height: 120px;
      top: 50% !important;
      left: 7%;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 120px;
      height: 120px;
      top: 45%;
      right: 5% !important;
      // background-color: #3f3a3a60;
    }
  }
  #norm-house {
    width: 550px !important;
    top: 23% !important;
    left: 82% !important;
  }
  .twin-house-click {
    width: 320px !important;
    height: 280px !important;
    top: 41% !important;
    left: 48% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 120px;
      height: 120px;
      top: 55% !important;
      right: 5% !important;
      // background-color: #3f3a3a50;
    }
    .windows-click {
      width: 120px;
      height: 120px;
      top: 50% !important;
      left: 10% !important;
      // background-color: #3f3a3a60;
    }
  }
  #twin-house {
    width: 550px !important;
    top: 15% !important;
    left: 47% !important;
  }
  .strategy-house-click {
    width: 320px !important;
    height: 280px !important;
    top: 68% !important;
    left: 63% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 120px;
      height: 120px;
      top: 50%;
      left: 10% !important;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 120px;
      height: 120px;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
    }
  }
  #strategy-house {
    width: 550px !important;
    top: 43% !important;
    left: 62% !important;
  }
  .potential-house-click {
    width: 320px !important;
    height: 280px !important;
    top: 55% !important;
    left: 27% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 120px;
      height: 120px;
      top: 55% !important;
      left: 5% !important;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 120px;
      height: 120px;
      top: 25% !important;
      right: 0% !important;
      // background-color: #3f3a3a60;
    }
  }
  #potential-house {
    width: 550px !important;
    top: 27% !important;
    left: 27% !important;
  }
  .atmosphere-house-click {
    width: 400px !important;
    height: 280px !important;
    top: 82% !important;
    left: 44% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 120px;
      height: 120px;
      top: 40%;
      left: 0%;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 120px;
      height: 120px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
    }
  }
  #atmosphere-house {
    width: 550px !important;
    top: 55% !important;
    left: 43% !important;
  }
}
@media screen and (min-width: 1600px) and (max-width: 2559px) {
  .house-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('@/assets/primary_school/background/1920x1440.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -999;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .share-container {
    position: absolute;
    width: 30%;
    bottom: -5%;
    right: 7%;
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
    top: 17% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
  .title-img {
    width: 18% !important;
    padding-top: 2.5% !important;
  }

  .house-container {
    position: relative;
    width: 100%;
  }
  .people-flow-click {
    top: 30% !important;
    left: 61% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 80px !important;
      height: 80px !important;
      top: 50% !important;
      left: 0% !important;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 80px !important;
      height: 80px !important;
      top: 30% !important;
      right: 0% !important;
      // background-color: #3f3a3a60;
    }
  }
  #people-flow-house {
    top: 10% !important;
    left: 60% !important;
  }
  .norm-house-click {
    top: 48% !important;
    left: 75% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 80px !important;
      height: 80px !important;
      top: 50% !important;
      left: 7%;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 80px !important;
      height: 80px !important;
      top: 45%;
      right: 0% !important;
      // background-color: #3f3a3a60;
    }
  }
  #norm-house {
    top: 23% !important;
    left: 75% !important;
  }
  .twin-house-click {
    top: 46% !important;
    left: 46% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 80px !important;
      height: 80px !important;
      top: 55% !important;
      right: 5% !important;
      // background-color: #3f3a3a50;
    }
    .windows-click {
      width: 80px !important;
      height: 80px !important;
      top: 50% !important;
      left: 10% !important;
      // background-color: #3f3a3a60;
    }
  }
  #twin-house {
    top: 25% !important;
    left: 45% !important;
  }
  .strategy-house-click {
    top: 66% !important;
    left: 61% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 80px !important;
      height: 80px !important;
      top: 50%;
      left: 0% !important;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 80px !important;
      height: 80px !important;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
    }
  }
  #strategy-house {
    top: 46% !important;
    left: 60% !important;
  }
  .potential-house-click {
    top: 63% !important;
    left: 31% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 80px !important;
      height: 80px !important;
      top: 55% !important;
      left: 0% !important;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 80px !important;
      height: 80px !important;
      top: 25% !important;
      right: 0% !important;
      // background-color: #3f3a3a60;
    }
  }
  #potential-house {
    top: 40% !important;
    left: 31% !important;
  }
  .atmosphere-house-click {
    width: 270px !important;
    top: 82% !important;
    left: 47% !important;
    // border: #3f3a3a 1px solid;
    .door-click {
      width: 80px !important;
      height: 80px !important;
      top: 40%;
      left: 0%;
      // background-color: #3f3a3a60;
    }
    .windows-click {
      width: 80px !important;
      height: 80px !important;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
    }
  }
  #atmosphere-house {
    top: 61% !important;
    left: 46% !important;
  }
}
@media screen and (min-width: 992px){
  .primary-school {
    padding-top: 10% !important;
  }
  .share-container {
    position: absolute;
    width: 40%;
    bottom: -7%;
    right: 7%;
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
    width: 20%;
    padding-top: 5%;
    // margin-top: 10%;
  }
  .house-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('@/assets/primary_school/background/1920x1440.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -999;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .people-flow-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 34%;
    left: 62%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .finger {
      position: absolute;
      width: 25%;
      top: 56%;
      left: 78%;
      animation: move 3s 0s infinite;
      -webkit-animation: move 3s 0s infinite;
    }
    @keyframes move {
      0%,
      65% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
      70% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      75% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      80% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      85% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      90% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      95% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      100% {
        -webkit-transform: translateY(0deg);
        transform: translateY(0px);
      }
    }
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 54%;
      left: 8%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 33%;
      right: 2%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #people-flow-house {
    position: absolute;
    width: 400px;
    top: 14%;
    left: 61%;
    transform: translate(-50%, -50%);
    z-index: 998;
    // opacity: 0.7;
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
    top: 52%;
    left: 80%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 5%;
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
    width: 400px;
    top: 30%;
    left: 79%;
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
    top: 50%;
    left: 43%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 42%;
      right: 8%;
      // background-color: #3f3a3a50;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 40%;
      left: 17%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #twin-house {
    position: absolute;
    width: 400px;
    top: 28%;
    left: 42%;
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
    width: 200px;
    height: 180px;
    top: 70%;
    left: 60%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 43%;
      left: 10%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 45%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #strategy-house {
    position: absolute;
    width: 400px;
    top: 50%;
    left: 59%;
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
    top: 64%;
    left: 21%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 15%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #potential-house {
    position: absolute;
    width: 400px;
    top: 43%;
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
    width: 250px;
    height: 180px !important;
    top: 86%;
    left: 40%;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 35%;
      left: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 25%;
      right: 0%;
      // background-color: #3f3a3a60;
      cursor: pointer;
      z-index: 999;
    }
  }
  #atmosphere-house {
    position: absolute;
    width: 400px;
    top: 64%;
    left: 41%;
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
@media screen and (max-width: 1024px) {
  .primary-school {
    position: relative;
    width: 100%;
    background-color: #fffcec;
    background-image: url('@/assets/primary_school/background/1024x1366.svg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: hidden;
    .row {
      --bs-gutter-x: 0;
    }
  }
}
// 平板
@media screen and (max-width: 992px) {
  .container-fluid {
    position: relative;
    padding: 0;
    // overflow-y: hidden;
  }
  .primary-school {
    position: relative;
    width: 100%;
    padding-top: 23%;
    background-color: #fffcec;
    background-image: url('@/assets/primary_school/background/375.svg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: hidden;
    .row {
      --bs-gutter-x: 0;
    }
  }
  .title-img {
    width: 50%;
    // padding: 0;
    // margin-bottom: 50px;
  }
  .doll-img {
    width: 25%;
    margin-top: 5%;
  }

  .people-flow-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .people-flow-click {
    position: absolute;
    width: 220px !important;
    height: 200px !important;
    top: 55% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .finger {
      position: absolute;
      width: 25%;
      top: 50%;
      left: 85%;
      animation: move 3s 0s infinite;
      -webkit-animation: move 3s 0s infinite;
    }
    @keyframes move {
      0%,
      65% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
      70% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      75% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      80% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      85% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      90% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      95% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      100% {
        -webkit-transform: translateY(0deg);
        transform: translateY(0px);
      }
    }
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 16%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 35%;
      right: 0%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #people-flow-house {
    position: relative !important;
    width: 400px;
    height: 400px;
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
    width: 220px !important;
    height: 200px !important;
    top: 63% !important;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 45%;
      right: 13%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #norm-house {
    position: relative !important;
    width: 400px;
    height: 400px;
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
    width: 220px !important;
    height: 200px !important;
    top: 55% !important;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      left: 19%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #twin-house {
    position: relative !important;
    width: 400px;
    height: 400px;
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
    width: 220px !important;
    height: 200px !important;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #strategy-house {
    position: relative !important;
    width: 400px;
    height: 400px;
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
    width: 220px !important;
    height: 200px !important;
    top: 57% !important;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #potential-house {
    position: relative !important;
    width: 400px;
    height: 400px;
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
    width: 260px !important;
    height: 240px !important;
    top: 57% !important;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #atmosphere-house {
    position: relative !important;
    width: 400px;
    height: 400px;
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
// // 手機板
@media screen and (max-width: 575px) {
  .title-img {
    width: 70%;
  }
  .doll-img {
    width: 35%;
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
    top: 58% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
    .finger {
      position: absolute;
      width: 25%;
      top: 60%;
      left: 80%;
      animation: move 3s 0s infinite;
      -webkit-animation: move 3s 0s infinite;
    }
    @keyframes move {
      0%,
      65% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
      70% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      75% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      80% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      85% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      90% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
      }
      95% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
      }
      100% {
        -webkit-transform: translateY(0deg);
        transform: translateY(0px);
      }
    }
    .door-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 55%;
      left: 16%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 35%;
      right: 0%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #people-flow-house {
    position: relative !important;
    width: 350px;
    height: 316.005px;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 45%;
      right: 13%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #norm-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      left: 19%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #twin-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 50%;
      right: 0%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #strategy-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #potential-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
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
      z-index: 999;
    }
    .windows-click {
      position: absolute;
      width: 70px;
      height: 70px;
      top: 30%;
      right: 5%;
      // background-color: #3f3a3a60;
      z-index: 999;
    }
  }
  #atmosphere-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
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
