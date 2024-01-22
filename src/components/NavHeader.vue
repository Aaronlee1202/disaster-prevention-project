<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Logo_Ncdr_Icon from './svg/logo_ncdr.vue';
import Logo_Icon from './svg/logo_icon.vue';

const router = useRouter();

const toggle = ref(false);
const menuToggle = () => {
  if (toggle.value == false) toggle.value = true;
  else toggle.value = false;
};
const toNcdrPage = () => {
  window.open('https://www.ncdr.nat.gov.tw/', '_blank');
};
const toHomePage = () => {
  // window.open('https://aaronlee1202.github.io/disaster-prevention-project/');
  router.push({ path: '/' });
};
</script>

<template>
  <header
    id="header"
    class="fadein_header"
    :class="{ 'mobile-menu-opened': toggle }"
    data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile':false, 'stickyStartAt': 30, 'stickySetTop': '0', 'stickyChangeLogo':false}"
  >
    <div class="header-body">
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column">
            <div class="header-row">
              <div class="header-logo">
                <h1>
                  <!-- <Logo_Ncdr_Icon class="svg-img" @click="toHomePage" target="_blank" /> -->
                  <a @click="toNcdrPage" target="_blank" title="行政法人國災害防救科技中心">
                    <Logo_Ncdr_Icon class="svg-img" />
                  </a>
                  <a @click="toHomePage" title="防災特輯"><Logo_Icon class="svg-img" /></a>
                </h1>
              </div>
            </div>
          </div>
          <div class="header-column justify-content-end">
            <div class="header-row">
              <div class="header-nav">
                <div
                  class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 justify-content-end"
                >
                  <nav class="collapse">
                    <ul class="nav nav-pills" id="mainNav">
                      <li>
                        <a href="#index_page_1" class="nav-link anchor" title="當期主題">
                          <img
                            src="@/assets/header/menu_icon_01.svg"
                            class="svg-img"
                            alt=""
                          /><br />當期主題
                        </a>
                      </li>

                      <li>
                        <a href="#index_page_2" class="nav-link anchor" title="知識櫥窗">
                          <img
                            src="@/assets/header/menu_icon_02.svg"
                            class="svg-img"
                            alt=""
                          /><br />知識櫥窗
                        </a>
                      </li>

                      <li>
                        <a href="#index_page_3" class="nav-link anchor" title="本季小品">
                          <img
                            src="@/assets/header/menu_icon_03.svg"
                            class="svg-img"
                            alt=""
                          /><br />本季小品
                        </a>
                      </li>

                      <li>
                        <a href="#index_page_4" class="nav-link anchor" title="亮點服務">
                          <img
                            src="@/assets/header/menu_icon_04.svg"
                            class="svg-img"
                            alt=""
                          /><br />亮點服務
                        </a>
                      </li>

                      <li>
                        <a href="#index_page_5" class="nav-link anchor" title="主任介紹">
                          <img
                            src="@/assets/header/menu_icon_05.svg"
                            class="svg-img"
                            alt=""
                          /><br />主任介紹
                        </a>
                      </li>

                      <li>
                        <a href="#index_page_6" class="nav-link anchor" title="關於特輯">
                          <img
                            src="@/assets/header/menu_icon_06.svg"
                            class="svg-img"
                            alt=""
                          /><br />關於特輯
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://ncdr.nat.gov.tw/NCDR-Topic/2022/index.html"
                          target="_blank"
                          class="nav-link"
                          title="系列影片(另開新視窗)"
                        >
                          <img
                            src="@/assets/header/menu_icon_07.svg"
                            class="svg-img"
                            alt=""
                          /><br />系列影片
                        </a>
                      </li>

                      <li>
                        <a href="#footer" class="nav-link anchor" title="聯絡我們">
                          <img
                            src="@/assets/header/menu_icon_08.svg"
                            class="svg-img"
                            alt=""
                          /><br />聯絡我們
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <!-- <button class="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav" title="選單">
                                <i class="fas fa-bars" aria-hidden="true"></i><span class="visually-hidden-focusable">選單</span>
                            </button> -->

                <input id="menu-toggle" type="checkbox" />
                <label
                  class="menu-button-container"
                  for="menu-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target=".header-nav-main nav"
                  @click="menuToggle"
                >
                  <div class="menu-button"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-logo {
  cursor: pointer;
}

.header-nav {
  // .svg-img{
  // 	width:50px;
  // 	height:50px;
  // }
  li:hover,
  li:focus {
    a {
      background: transparent !important;
      color: #ffee81 !important;
      transition: color 0.5s;
    }
    .svg-img path {
      fill: #ffee81;
      transition: fill 0.5s;
    }
  }
  a:hover,
  a:focus {
    color: #ffee81 !important;
    transition: color 0.5s;
    .svg-img path {
      fill: #ffee81;
      transition: fill 0.5s;
    }
  }
  li {
    text-align: center;
    a {
      &:hover,
      &:focus {
        color: #ffee81 !important;
        transition: color 0.5s;
        .svg-img path {
          fill: #ffee81;
          transition: fill 0.5s;
        }
      }
    }
  }
}
</style>
