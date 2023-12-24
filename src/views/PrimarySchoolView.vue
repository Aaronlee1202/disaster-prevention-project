<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import lottie from 'lottie-web';
import people_flow from '@/assets/lottie/people_flow.json';
import people_flow_open_door from '@/assets/lottie/people_flow_open_door.json';
import people_flow_open_windows from '@/assets/lottie/people_flow_open_windows.json';
import norm from '@/assets/lottie/norm.json';
import norm_open_door from '@/assets/lottie/norm_open_door.json';
import norm_open_windows from '@/assets/lottie/norm_open_windows.json';
import twin from '@/assets/lottie/twin.json';
import twin_open_door from '@/assets/lottie/twin_open_door.json';
import twin_open_windows from '@/assets/lottie/twin_open_windows.json';
import strategy from '@/assets/lottie/strategy.json';
import strategy_open_door from '@/assets/lottie/strategy_open_door.json';
import strategy_open_windows from '@/assets/lottie/strategy_open_windows.json';
import potential from '@/assets/lottie/potential.json';
import potential_open_door from '@/assets/lottie/potential_open_door.json';
import potential_open_windows from '@/assets/lottie/potential_open_windows.json';
import atmosphere from '@/assets/lottie/atmosphere.json';
import atmosphere_open_door from '@/assets/lottie/atmosphere_open_door.json';
import atmosphere_open_windows from '@/assets/lottie/atmosphere_open_windows.json';
import arrow_share from '@/components/svg/arrow_share.vue';
import facebook_icon from '@/components/svg/facebook_icon.vue';
import line_icon from '@/components/svg/line_icon.vue';
import Home_Icon from '@/components/svg/home_icon.vue';
import { useRouter } from 'vue-router';

const screenWidth = ref(
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
);
const screenSwitch = ref(false);
watch(
  screenWidth,
  (newVal) => {
    // screenWidth.value = newVal;
    if (newVal < 992) {
      screenSwitch.value = true;
    } else {
      screenSwitch.value = false;
    }
  },
  { immediate: true }
);

const people_flowJson = ref(null);
const people_flowOpenDoorJson = ref(null);
const people_flowOpenWindowsJson = ref(null);

const normJson = ref(null);
const normOpenDoorJson = ref(null);
const normOpenWindowsJson = ref(null);

const twinJson = ref(null);
const twinOpenDoorJson = ref(null);
const twinOpenWindowsJson = ref(null);

const strategyJson = ref(null);
const strategyOpenDoorJson = ref(null);
const strategyOpenWindowsJson = ref(null);

const potentialJson = ref(null);
const potentialOpenDoorJson = ref(null);
const potentialOpenWindowsJson = ref(null);

const atmosphereJson = ref(null);
const atmosphereOpenDoorJson = ref(null);
const atmosphereOpenWindowsJson = ref(null);
onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  });
  peopleFlowAnimation();
  normAnimation();
  twinAnimation();
  strategyAnimation();
  potentialAnimation();
  atmosphereAnimation();
});
onBeforeUnmount(() => {
  people_flowJson.value.destroy();
  people_flowOpenDoorJson.value.destroy();
  people_flowOpenWindowsJson.value.destroy();

  normJson.value.destroy();
  normOpenDoorJson.value.destroy();
  normOpenWindowsJson.value.destroy();

  twinJson.value.destroy();
  twinOpenDoorJson.value.destroy();
  twinOpenWindowsJson.value.destroy();

  strategyJson.value.destroy();
  strategyOpenDoorJson.value.destroy();
  strategyOpenWindowsJson.value.destroy();

  potentialJson.value.destroy();
  potentialOpenDoorJson.value.destroy();
  potentialOpenWindowsJson.value.destroy();

  atmosphereJson.value.destroy();
  atmosphereOpenDoorJson.value.destroy();
  atmosphereOpenWindowsJson.value.destroy();
});
const peopleFlowAnimation = () => {
  const decoration = document.getElementById(`people-flow`);
  const decorationOpenDoor = document.getElementById(`people-flow-open-door`);
  const decorationOpenWindows = document.getElementById(`people-flow-open-windows`);
  people_flowJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: false,
    animationData: people_flow
  });
  people_flowOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: people_flow_open_door
  });
  people_flowOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: people_flow_open_windows
  });

  people_flowJson.value.play();
};

const normAnimation = () => {
  const decoration = document.getElementById(`norm`);
  const decorationOpenDoor = document.getElementById(`norm-open-door`);
  const decorationOpenWindows = document.getElementById(`norm-open-windows`);
  normJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: false,
    animationData: norm
  });
  normOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: norm_open_door
  });
  normOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: norm_open_windows
  });

  normJson.value.play();
};

const twinAnimation = () => {
  const decoration = document.getElementById(`twin`);
  const decorationOpenDoor = document.getElementById(`twin-open-door`);
  const decorationOpenWindows = document.getElementById(`twin-open-windows`);
  twinJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: false,
    animationData: twin
  });
  twinOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: twin_open_door
  });
  twinOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: twin_open_windows
  });

  twinJson.value.play();
};

const strategyAnimation = () => {
  const decoration = document.getElementById(`strategy`);
  const decorationOpenDoor = document.getElementById(`strategy-open-door`);
  const decorationOpenWindows = document.getElementById(`strategy-open-windows`);
  strategyJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: false,
    animationData: strategy
  });
  strategyOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: strategy_open_door
  });
  strategyOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: strategy_open_windows
  });

  strategyJson.value.play();
};

const potentialAnimation = () => {
  const decoration = document.getElementById(`potential`);
  const decorationOpenDoor = document.getElementById(`potential-open-door`);
  const decorationOpenWindows = document.getElementById(`potential-open-windows`);
  potentialJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: false,
    animationData: potential
  });
  potentialOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: potential_open_door
  });
  potentialOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: potential_open_windows
  });

  potentialJson.value.play();
};

const atmosphereAnimation = () => {
  const decoration = document.getElementById(`atmosphere`);
  const decorationOpenDoor = document.getElementById(`atmosphere-open-door`);
  const decorationOpenWindows = document.getElementById(`atmosphere-open-windows`);
  atmosphereJson.value = lottie.loadAnimation({
    container: decoration,
    animType: 'svg',
    loop: true,
    autoplay: false,
    animationData: atmosphere
  });
  atmosphereOpenDoorJson.value = lottie.loadAnimation({
    container: decorationOpenDoor,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: atmosphere_open_door
  });
  atmosphereOpenWindowsJson.value = lottie.loadAnimation({
    container: decorationOpenWindows,
    animType: 'svg',
    loop: false,
    autoplay: false,
    animationData: atmosphere_open_windows
  });

  atmosphereJson.value.play();
};

const router = useRouter();
// 命名需修改
const clickHouse = (houseName) => {
  if (houseName == 'people-flow') {
    people_flowOpenDoorJson.value.setDirection(1);
    people_flowOpenDoorJson.value.play();
    people_flowOpenWindowsJson.value.setDirection(1);
    people_flowOpenWindowsJson.value.play();
    setTimeout(() => {
      const routeData = router.resolve('disaster-prevention');
      window.open(routeData.href, '_blank');
    }, 1000);
  } else if (houseName == 'norm') {
    normOpenDoorJson.value.setDirection(1);
    normOpenDoorJson.value.play();
    normOpenWindowsJson.value.setDirection(1);
    normOpenWindowsJson.value.play();
    setTimeout(() => {
      const routeData = router.resolve('disaster-prevention');
      window.open(routeData.href, '_blank');
    }, 1000);
  } else if (houseName == 'twin') {
    twinOpenDoorJson.value.setDirection(1);
    twinOpenDoorJson.value.play();
    twinOpenWindowsJson.value.setDirection(1);
    twinOpenWindowsJson.value.play();
    setTimeout(() => {
      const routeData = router.resolve('disaster-prevention');
      window.open(routeData.href, '_blank');
    }, 1000);
  } else if (houseName == 'strategy') {
    strategyOpenDoorJson.value.setDirection(1);
    strategyOpenDoorJson.value.play();
    strategyOpenWindowsJson.value.setDirection(1);
    strategyOpenWindowsJson.value.play();
    setTimeout(() => {
      const routeData = router.resolve('disaster-prevention');
      window.open(routeData.href, '_blank');
    }, 1000);
  } else if (houseName == 'potential') {
    potentialOpenDoorJson.value.setDirection(1);
    potentialOpenDoorJson.value.play();
    potentialOpenWindowsJson.value.setDirection(1);
    potentialOpenWindowsJson.value.play();
    setTimeout(() => {
      const routeData = router.resolve('disaster-prevention');
      window.open(routeData.href, '_blank');
    }, 1000);
  } else if (houseName == 'atmosphere') {
    atmosphereOpenDoorJson.value.setDirection(1);
    atmosphereOpenDoorJson.value.play();
    atmosphereOpenWindowsJson.value.setDirection(1);
    atmosphereOpenWindowsJson.value.play();
    setTimeout(() => {
      const routeData = router.resolve('disaster-prevention');
      window.open(routeData.href, '_blank');
    }, 1000);
  }
};
</script>

<template>
  <div class="container" v-if="screenSwitch == false">
    <div class="primary-school">
      <div class="row">
        <div class="col">
          <img class="title-img" src="../assets/disaster_prevention/title_img.png" alt="" />
        </div>
      </div>

      <div class="house-box">
        <div class="house-bg"></div>
        <div id="people-flow-house" @click="clickHouse('people-flow')">
          <div class="d-flex align-items-center justify-content-center">
            <div class="house-title d-flex align-items-center justify-content-center">人流樓</div>
          </div>
          <div id="people-flow"></div>
          <div id="people-flow-open-door"></div>
          <div id="people-flow-open-windows"></div>
        </div>
        <div id="norm-house" @click="clickHouse('norm')">
          <div class="d-flex align-items-center justify-content-center">
            <div class="house-title d-flex align-items-center justify-content-center">指標樓</div>
          </div>
          <div id="norm"></div>
          <div id="norm-open-door"></div>
          <div id="norm-open-windows"></div>
        </div>
        <div id="twin-house" @click="clickHouse('twin')">
          <div class="d-flex align-items-center justify-content-center">
            <div class="house-title d-flex align-items-center justify-content-center">孿生樓</div>
          </div>
          <div id="twin"></div>
          <div id="twin-open-door"></div>
          <div id="twin-open-windows"></div>
        </div>
        <div id="strategy-house" @click="clickHouse('strategy')">
          <div class="d-flex align-items-center justify-content-center">
            <div class="house-title d-flex align-items-center justify-content-center">策略樓</div>
          </div>
          <div id="strategy"></div>
          <div id="strategy-open-door"></div>
          <div id="strategy-open-windows"></div>
        </div>
        <div id="potential-house" @click="clickHouse('potential')">
          <div class="d-flex align-items-center justify-content-center">
            <div class="house-title d-flex align-items-center justify-content-center">潛勢樓</div>
          </div>
          <div id="potential"></div>
          <div id="potential-open-door"></div>
          <div id="potential-open-windows"></div>
        </div>
        <div id="atmosphere-house" @click="clickHouse('atmosphere')">
          <div class="d-flex align-items-center justify-content-center">
            <div class="house-title d-flex align-items-center justify-content-center">氣象樓</div>
          </div>
          <div id="atmosphere"></div>
          <div id="atmosphere-open-door"></div>
          <div id="atmosphere-open-windows"></div>
        </div>

        <div class="row custom-row align-items-end">
          <div class="col d-flex justify-content-end">
            <div class="share-card">
              <div class="share-title">
                <arrow_share />
                分享到...
              </div>
              <div class="share-btn-box">
                <div class="share-btn text-center">
                  <facebook_icon />
                  <div>facebook</div>
                </div>
                <div class="share-btn text-center">
                  <line_icon />
                  <div>line</div>
                </div>
              </div>
              <div class="home-btn d-flex align-items-center justify-content-center">
                <Home_Icon />回首頁
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid" v-if="screenSwitch == true">
    <div class="primary-school">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
          <img class="title-img" src="../assets/disaster_prevention/title_img.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-2 d-flex align-items-center justify-content-center">
          <div id="people-flow-house" @click="clickHouse('people-flow')">
            <div class="d-flex align-items-center justify-content-center">
              <div class="house-title d-flex align-items-center justify-content-center">人流樓</div>
            </div>
            <div id="people-flow"></div>
            <div id="people-flow-open-door"></div>
            <div id="people-flow-open-windows"></div>
          </div>
        </div>
        <div class="col-12 mb-5 d-flex align-items-center justify-content-center">
          <div id="norm-house" @click="clickHouse('norm')">
            <div class="d-flex align-items-center justify-content-center">
              <div class="house-title d-flex align-items-center justify-content-center">指標樓</div>
            </div>
            <div id="norm"></div>
            <div id="norm-open-door"></div>
            <div id="norm-open-windows"></div>
          </div>
        </div>
        <div class="col-12 mb-2 d-flex align-items-center justify-content-center">
          <div id="twin-house" @click="clickHouse('twin')">
            <div class="d-flex align-items-center justify-content-center">
              <div class="house-title d-flex align-items-center justify-content-center">孿生樓</div>
            </div>
            <div id="twin"></div>
            <div id="twin-open-door"></div>
            <div id="twin-open-windows"></div>
          </div>
        </div>
        <div class="col-12 mb-2 d-flex align-items-center justify-content-center">
          <div id="strategy-house" @click="clickHouse('strategy')">
            <div class="d-flex align-items-center justify-content-center">
              <div class="house-title d-flex align-items-center justify-content-center">策略樓</div>
            </div>
            <div id="strategy"></div>
            <div id="strategy-open-door"></div>
            <div id="strategy-open-windows"></div>
          </div>
        </div>
        <div class="col-12 mb-2 d-flex align-items-center justify-content-center">
          <div id="potential-house" @click="clickHouse('potential')">
            <div class="d-flex align-items-center justify-content-center">
              <div class="house-title d-flex align-items-center justify-content-center">潛勢樓</div>
            </div>
            <div id="potential"></div>
            <div id="potential-open-door"></div>
            <div id="potential-open-windows"></div>
          </div>
        </div>
        <div class="col-12 mb-5 d-flex align-items-center justify-content-center">
          <div id="atmosphere-house" @click="clickHouse('atmosphere')">
            <div class="d-flex align-items-center justify-content-center">
              <div class="house-title d-flex align-items-center justify-content-center">氣象樓</div>
            </div>
            <div id="atmosphere"></div>
            <div id="atmosphere-open-door"></div>
            <div id="atmosphere-open-windows"></div>
          </div>
        </div>
      </div>
      <div class="row custom-row">
        <div class="col d-flex justify-content-center">
          <div class="share-card">
            <div class="share-title">
              <arrow_share />
              分享到...
            </div>
            <div class="share-btn-box">
              <div class="share-btn text-center">
                <facebook_icon />
                <div>facebook</div>
              </div>
              <div class="share-btn text-center">
                <line_icon />
                <div>line</div>
              </div>
            </div>
            <div class="home-btn d-flex align-items-center justify-content-center">
              <Home_Icon />回首頁
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .primary-school {
    position: relative;
    height: 100%;
    padding-top: 13%;
  }
  .custom-row {
    height: 90%;
    margin-right: 10%;
    .share-card {
      width: 160px;
      height: 157px;
      background: #fff;
      color: #605d5a;
      border-radius: 8px;
      svg {
        fill: #605d5a;
      }
      .share-title {
        width: 100%;
        padding: 0.75rem 0;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #cccccc;
      }
      .share-btn-box {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .share-btn {
          width: 80px;
          cursor: pointer;
        }
      }
      .home-btn {
        width: 160px;
        height: 60px;
        border-radius: 20px;
        border: 2px solid #605d5a;
        background: #fff;
        cursor: pointer;
        svg {
          margin-right: 5px;
        }
        &:hover {
          background: #605d5a;
          color: #fff;
          svg {
            fill: #fff;
          }
        }
      }
    }
  }
  .title-img {
    width: 40%;
    padding-left: 10%;
  }
  .house-box {
    position: relative;
    max-width: 1920px;
    height: 980px;
  }
  .house-bg {
    position: absolute;
    width: 1110.612px !important;
    height: 726.63px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('@/assets/primary_school/house-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -999;
  }
  #people-flow-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 20% !important;
    left: 57% !important;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ff8787;
      border-radius: 4px;
      border: 1px solid #f99;
      background: #fff7f7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #norm-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 34% !important;
    left: 75% !important;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f4fefd;
      border-radius: 4px;
      border: 1px solid #68cec2;
      background: #26a8a8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #twin-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 33% !important;
    left: 40% !important;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #d17b32;
      border-radius: 4px;
      border: 1px solid #da9963;
      background: #fffbf7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #strategy-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 50% !important;
    left: 58% !important;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #0d889a;
      border-radius: 4px;
      border: 1px solid #2d9dad;
      background: #f6fdfe;
      z-index: 999;
      opacity: 0.7;
    }
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
  #potential-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 47% !important;
    left: 22% !important;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #atmosphere-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 65% !important;
    left: 40% !important;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
@media screen and (min-width: 992px) {
  .primary-school {
    position: relative;
    height: 100%;
    padding-top: 13%;
  }
  .custom-row {
    height: 90%;
    margin-right: 10%;
    .share-card {
      width: 160px;
      height: 157px;
      background: #fff;
      color: #605d5a;
      border-radius: 8px;
      svg {
        fill: #605d5a;
      }
      .share-title {
        width: 100%;
        padding: 0.75rem 0;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #cccccc;
      }
      .share-btn-box {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .share-btn {
          width: 80px;
          cursor: pointer;
        }
      }
      .home-btn {
        width: 160px;
        height: 60px;
        border-radius: 20px;
        border: 2px solid #605d5a;
        background: #fff;
        cursor: pointer;
        svg {
          margin-right: 5px;
        }
        &:hover {
          background: #605d5a;
          color: #fff;
          svg {
            fill: #fff;
          }
        }
      }
    }
  }
  .title-img {
    width: 40%;
    padding-left: 10%;
  }
  .house-box {
    position: relative;
    max-width: 1920px;
    height: 980px;
  }
  .house-bg {
    position: absolute;
    width: 810.612px;
    height: 626.63px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('@/assets/primary_school/house-bg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: -999;
  }
  #people-flow-house {
    position: absolute;
    width: 250px;
    // height: 296.005px;
    top: 10%;
    left: 57%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ff8787;
      border-radius: 4px;
      border: 1px solid #f99;
      background: #fff7f7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #norm-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 24%;
    left: 75%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f4fefd;
      border-radius: 4px;
      border: 1px solid #68cec2;
      background: #26a8a8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #twin-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 23%;
    left: 40%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #d17b32;
      border-radius: 4px;
      border: 1px solid #da9963;
      background: #fffbf7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #strategy-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 40%;
    left: 58%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #0d889a;
      border-radius: 4px;
      border: 1px solid #2d9dad;
      background: #f6fdfe;
      z-index: 999;
      opacity: 0.7;
    }
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
  #potential-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 37%;
    left: 22%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #atmosphere-house {
    position: absolute;
    width: 250px;
    // height: 316.005px;
    top: 55%;
    left: 40%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 998;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
@media screen and (max-width: 992px) {
  .container-fluid {
    padding: 0;
  }
  .primary-school {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 35%;
    background-color: #fffcec;
  }
  .title-img {
    width: 70%;
    padding: 0;
    margin-bottom: 50px;
  }

  .custom-row {
    width: 100%;
    height: 300px;
    margin: 0;
    .share-card {
      width: 160px;
      height: 157px;
      background-color: #fffcec;
      color: #605d5a;
      border-radius: 8px;
      svg {
        fill: #605d5a;
      }
      .share-title {
        width: 100%;
        padding: 0.75rem 0;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #cccccc;
      }
      .share-btn-box {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .share-btn {
          width: 80px;
          cursor: pointer;
        }
      }
      .home-btn {
        width: 160px;
        height: 60px;
        border-radius: 20px;
        border: 2px solid #605d5a;
        background: #fff;
        cursor: pointer;
        svg {
          margin-right: 5px;
        }
        &:hover {
          background: #605d5a;
          color: #fff;
          svg {
            fill: #fff;
          }
        }
      }
    }
  }

  #people-flow-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ff8787;
      border-radius: 4px;
      border: 1px solid #f99;
      background: #fff7f7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #norm-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f4fefd;
      border-radius: 4px;
      border: 1px solid #68cec2;
      background: #26a8a8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #twin-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #d17b32;
      border-radius: 4px;
      border: 1px solid #da9963;
      background: #fffbf7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #strategy-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #0d889a;
      border-radius: 4px;
      border: 1px solid #2d9dad;
      background: #f6fdfe;
      z-index: 999;
      opacity: 0.7;
    }
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
  #potential-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #atmosphere-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
@media screen and (max-width: 768px) {
  .container-fluid {
    padding: 0;
  }
  .primary-school {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 35%;
    background-color: #fffcec;
  }
  .title-img {
    width: 70%;
    padding: 0;
    margin-bottom: 50px;
  }

  .custom-row {
    width: 100%;
    height: 300px;
    margin: 0;
    .share-card {
      width: 160px;
      height: 157px;
      background-color: #fffcec;
      color: #605d5a;
      border-radius: 8px;
      svg {
        fill: #605d5a;
      }
      .share-title {
        width: 100%;
        padding: 0.75rem 0;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #cccccc;
      }
      .share-btn-box {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .share-btn {
          width: 80px;
          cursor: pointer;
        }
      }
      .home-btn {
        width: 160px;
        height: 60px;
        border-radius: 20px;
        border: 2px solid #605d5a;
        background: #fff;
        cursor: pointer;
        svg {
          margin-right: 5px;
        }
        &:hover {
          background: #605d5a;
          color: #fff;
          svg {
            fill: #fff;
          }
        }
      }
    }
  }

  #people-flow-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ff8787;
      border-radius: 4px;
      border: 1px solid #f99;
      background: #fff7f7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #norm-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f4fefd;
      border-radius: 4px;
      border: 1px solid #68cec2;
      background: #26a8a8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #twin-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #d17b32;
      border-radius: 4px;
      border: 1px solid #da9963;
      background: #fffbf7;
      z-index: 999;
      opacity: 0.7;
    }
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
  #strategy-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #0d889a;
      border-radius: 4px;
      border: 1px solid #2d9dad;
      background: #f6fdfe;
      z-index: 999;
      opacity: 0.7;
    }
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
  #potential-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
  #atmosphere-house {
    position: relative !important;
    width: 320px;
    height: 316.005px;
    cursor: pointer;
    z-index: 998;
    .house-title {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 7%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3f3a3a;
      border-radius: 4px;
      border: 1px solid #423d3d;
      background: #e8e8e8;
      z-index: 999;
      opacity: 0.7;
    }
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
