<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';
import lottie from 'lottie-web';
import { useRouter } from 'vue-router';
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
// 初始化動畫開始
const peopleFlowAnimation = () => {
  const peopleFlowClick = document.querySelector('.people-flow-click');
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
  peopleFlowClick.addEventListener('mouseover', () => {
    document.getElementById(`people-flow-house`).style.opacity = 1;
  });
  peopleFlowClick.addEventListener('mouseout', () => {
    document.getElementById(`people-flow-house`).style.opacity = 0.7;
  });
};

const normAnimation = () => {
  const normHouseClick = document.querySelector('.norm-house-click');
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
  normHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`norm-house`).style.opacity = 1;
  });
  normHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`norm-house`).style.opacity = 0.7;
  });
};

const twinAnimation = () => {
  const twinHouseClick = document.querySelector('.twin-house-click');
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
  twinHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`twin-house`).style.opacity = 1;
  });
  twinHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`twin-house`).style.opacity = 0.7;
  });
};

const strategyAnimation = () => {
  const strategyHouseClick = document.querySelector('.strategy-house-click');
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
  strategyHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`strategy-house`).style.opacity = 1;
  });
  strategyHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`strategy-house`).style.opacity = 0.7;
  });
};

const potentialAnimation = () => {
  const potentialHouseClick = document.querySelector('.potential-house-click');
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
  potentialHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`potential-house`).style.opacity = 1;
  });
  potentialHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`potential-house`).style.opacity = 0.7;
  });
};

const atmosphereAnimation = () => {
  const atmosphereHouseClick = document.querySelector('.atmosphere-house-click');
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
  atmosphereHouseClick.addEventListener('mouseover', () => {
    document.getElementById(`atmosphere-house`).style.opacity = 1;
  });
  atmosphereHouseClick.addEventListener('mouseout', () => {
    document.getElementById(`atmosphere-house`).style.opacity = 0.7;
  });
};
// 初始化動畫結束

const router = useRouter();
// 點擊門窗動畫
const clickHouse = (houseName) => {
  if (houseName == 'people-flow-open-door') {
    people_flowOpenDoorJson.value.setDirection(1);
    people_flowOpenDoorJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'people-flow-open-windows') {
    people_flowOpenWindowsJson.value.setDirection(1);
    people_flowOpenWindowsJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'norm-house-open-door') {
    normOpenDoorJson.value.setDirection(1);
    normOpenDoorJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'norm-house-open-windows') {
    normOpenWindowsJson.value.setDirection(1);
    normOpenWindowsJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'twin-house-open-door') {
    twinOpenDoorJson.value.setDirection(1);
    twinOpenDoorJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'twin-house-open-windows') {
    twinOpenWindowsJson.value.setDirection(1);
    twinOpenWindowsJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'strategy-house-open-door') {
    strategyOpenDoorJson.value.setDirection(1);
    strategyOpenDoorJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'strategy-house-open-windows') {
    strategyOpenWindowsJson.value.setDirection(1);
    strategyOpenWindowsJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'potential-house-open-door') {
    potentialOpenDoorJson.value.setDirection(1);
    potentialOpenDoorJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'potential-house-open-windows') {
    potentialOpenWindowsJson.value.setDirection(1);
    potentialOpenWindowsJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'atmosphere-house-open-door') {
    atmosphereOpenDoorJson.value.setDirection(1);
    atmosphereOpenDoorJson.value.play();
    setTimeout(() => {
      if (import.meta.env.PROD == false) {
        const routeData = router.resolve('disaster-prevention');
        window.open(routeData.href, '_blank');
      } else router.push('disaster-prevention');
    }, 1000);
  } else if (houseName == 'atmosphere-house-open-windows') {
    atmosphereOpenWindowsJson.value.setDirection(1);
    atmosphereOpenWindowsJson.value.play();
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
        <img class="title-img" src="../assets/disaster_prevention/title_img.png" alt="" />
      </div>

      <div class="doll-1-container">
        <img src="../assets/primary_school/doll_1.png" alt="doll_1" />
      </div>
      <div class="doll-2-container">
        <img src="../assets/primary_school/doll_2.png" alt="doll_1" />
      </div>

      <div class="house-bg"></div>
      <!-- <div class="house-container"> -->
      <div class="house-box">
        <div id="people-flow-house">
          <div class="d-flex align-items-center justify-content-center">
            <!-- <div class="house-title d-flex align-items-center justify-content-center">人流樓</div> -->
          </div>
          <div id="people-flow"></div>
          <div id="people-flow-open-door"></div>
          <div id="people-flow-open-windows"></div>
        </div>
        <div class="people-flow-click">
          <div class="door-click" @click="clickHouse('people-flow-open-door')"></div>
          <div class="windows-click" @click="clickHouse('people-flow-open-windows')"></div>
        </div>
        <div id="norm-house">
          <div class="d-flex align-items-center justify-content-center">
            <!-- <div class="house-title d-flex align-items-center justify-content-center">指標樓</div> -->
          </div>
          <div id="norm"></div>
          <div id="norm-open-door"></div>
          <div id="norm-open-windows"></div>
        </div>
        <div class="norm-house-click">
          <div class="door-click" @click="clickHouse('norm-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('norm-house-open-windows')"></div>
        </div>
        <div id="twin-house">
          <div class="d-flex align-items-center justify-content-center">
            <!-- <div class="house-title d-flex align-items-center justify-content-center">孿生樓</div> -->
          </div>
          <div id="twin"></div>
          <div id="twin-open-door"></div>
          <div id="twin-open-windows"></div>
        </div>
        <div class="twin-house-click">
          <div class="door-click" @click="clickHouse('twin-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('twin-house-open-windows')"></div>
        </div>
        <div id="strategy-house">
          <div class="d-flex align-items-center justify-content-center">
            <!-- <div class="house-title d-flex align-items-center justify-content-center">策略樓</div> -->
          </div>
          <div id="strategy"></div>
          <div id="strategy-open-door"></div>
          <div id="strategy-open-windows"></div>
        </div>
        <div class="strategy-house-click">
          <div class="door-click" @click="clickHouse('strategy-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('strategy-house-open-windows')"></div>
        </div>
        <div id="potential-house">
          <div class="d-flex align-items-center justify-content-center">
            <!-- <div class="house-title d-flex align-items-center justify-content-center">潛勢樓</div> -->
          </div>
          <div id="potential"></div>
          <div id="potential-open-door"></div>
          <div id="potential-open-windows"></div>
        </div>
        <div class="potential-house-click">
          <div class="door-click" @click="clickHouse('potential-house-open-door')"></div>
          <div class="windows-click" @click="clickHouse('potential-house-open-windows')"></div>
        </div>
        <div id="atmosphere-house">
          <div class="d-flex align-items-center justify-content-center">
            <!-- <div class="house-title d-flex align-items-center justify-content-center">氣象樓</div> -->
          </div>
          <div id="atmosphere"></div>
          <div id="atmosphere-open-door"></div>
          <div id="atmosphere-open-windows"></div>
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
  <div class="container-fluid" v-if="screenSwitch == true">
    <div class="primary-school">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
          <img class="title-img" src="../assets/disaster_prevention/title_img.png" />
        </div>
      </div>
      <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
          <img class="doll-img" src="../assets/primary_school/doll_m.svg" />
        </div>
      </div>
      <div class="row">
        <div
          class="people-flow-container col-12 mb-2 d-flex align-items-center justify-content-center"
        >
          <div id="people-flow-house">
            <div id="people-flow"></div>
            <div id="people-flow-open-door"></div>
            <div id="people-flow-open-windows"></div>
          </div>
          <div class="people-flow-click">
            <div class="door-click" @click="clickHouse('people-flow-open-door')"></div>
            <div class="windows-click" @click="clickHouse('people-flow-open-windows')"></div>
          </div>
        </div>
        <div class="norm-container col-12 mb-5 d-flex align-items-center justify-content-center">
          <div id="norm-house">
            <div class="d-flex align-items-center justify-content-center">
              <!-- <div class="house-title d-flex align-items-center justify-content-center">指標樓</div> -->
            </div>
            <div id="norm"></div>
            <div id="norm-open-door"></div>
            <div id="norm-open-windows"></div>
          </div>
          <div class="norm-house-click">
            <div class="door-click" @click="clickHouse('norm-house-open-door')"></div>
            <div class="windows-click" @click="clickHouse('norm-house-open-windows')"></div>
          </div>
        </div>
        <div class="twin-container col-12 mb-2 d-flex align-items-center justify-content-center">
          <div id="twin-house">
            <div class="d-flex align-items-center justify-content-center">
              <!-- <div class="house-title d-flex align-items-center justify-content-center">孿生樓</div> -->
            </div>
            <div id="twin"></div>
            <div id="twin-open-door"></div>
            <div id="twin-open-windows"></div>
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
            <div class="d-flex align-items-center justify-content-center">
              <!-- <div class="house-title d-flex align-items-center justify-content-center">策略樓</div> -->
            </div>
            <div id="strategy"></div>
            <div id="strategy-open-door"></div>
            <div id="strategy-open-windows"></div>
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
            <div class="d-flex align-items-center justify-content-center">
              <!-- <div class="house-title d-flex align-items-center justify-content-center">潛勢樓</div> -->
            </div>
            <div id="potential"></div>
            <div id="potential-open-door"></div>
            <div id="potential-open-windows"></div>
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
            <div class="d-flex align-items-center justify-content-center">
              <!-- <div class="house-title d-flex align-items-center justify-content-center">氣象樓</div> -->
            </div>
            <div id="atmosphere"></div>
            <div id="atmosphere-open-door"></div>
            <div id="atmosphere-open-windows"></div>
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
    top: 19% !important;
    left: 57% !important;
    transform: translate(-50%, -50%);
    // border: #3f3a3a 1px solid;
    z-index: 999;
  }
  #people-flow-house {
    position: absolute;
    width: 320px !important;
    height: 316.005px !important;
    top: 14% !important;
  }
  .norm-house-click {
    position: absolute;
    width: 200px !important;
    height: 180px !important;
    top: 35% !important;
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
    top: 30% !important;
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
    top: 48% !important;
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
    top: 41% !important;
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
    top: 60% !important;
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
    top: 17% !important;
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
    top: 19% !important;
    left: 57% !important;
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
    width: 200px !important;
    height: 180px !important;
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
    top: 32% !important;
    left: 75% !important;
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
    top: 28% !important;
    left: 40% !important;
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
    top: 48% !important;
    left: 58% !important;
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
    top: 39% !important;
    left: 22% !important;
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
    top: 58% !important;
    left: 40% !important;
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
