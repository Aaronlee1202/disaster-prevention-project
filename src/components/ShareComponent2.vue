<script setup>
import { useRouter } from 'vue-router';
import Arrow_share from './svg/arrow_share_white.vue';

defineProps({
  screenSwitch: Boolean
});

const router = useRouter();
const facebookShare = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
};
const lineShare = () => {
  window.open(`https://social-plugins.line.me/lineit/share?url=${window.location.href}`, '_blank');
};
const copyLink = () => {
  const text = `${window.location.href}?openExternalBrowser=1`;
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
  alert('複製成功');
};

const toHomePage = () => {
  router.push('/');
};
</script>

<template>
  <!-- 分享 回大廳 -->
  <div class="container" v-if="!screenSwitch">
    <div class="dashed-line"></div>
    <div class="row">
      <div class="col mx-4 d-flex justify-content-end">
        <button
          class="btn share-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Arrow_share />
          <div>分享</div>
        </button>
      </div>
      <div class="col mx-4">
        <button class="btn home-btn" type="button" @click="toHomePage">
          <!-- <Home_Icon  class="home-icon"/> -->
          <!-- <img class="home-icon" src="@/assets/flow_of_people/home-icon.svg" alt="" /> -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="House-f">
              <path
                id="Vector"
                d="M20.5127 9.72184L13.0127 2.90621C12.7362 2.65324 12.375 2.51294 12.0002 2.51294C11.6254 2.51294 11.2642 2.65324 10.9877 2.90621L3.4877 9.72184C3.33414 9.86232 3.2115 10.0332 3.12757 10.2237C3.04364 10.4141 3.00027 10.62 3.0002 10.8281V19.4625C2.9941 19.8406 3.12761 20.2078 3.3752 20.4937C3.51572 20.6535 3.68882 20.7814 3.88287 20.8687C4.07692 20.956 4.28741 21.0008 4.5002 21H9.0002C9.19911 21 9.38988 20.9209 9.53053 20.7803C9.67118 20.6396 9.7502 20.4489 9.7502 20.25V15.75C9.7502 15.551 9.82922 15.3603 9.96987 15.2196C10.1105 15.079 10.3013 15 10.5002 15H13.5002C13.6991 15 13.8899 15.079 14.0305 15.2196C14.1712 15.3603 14.2502 15.551 14.2502 15.75V20.25C14.2502 20.4489 14.3292 20.6396 14.4699 20.7803C14.6105 20.9209 14.8013 21 15.0002 21H19.5002C19.749 21.0022 19.9942 20.9408 20.2127 20.8218C20.4504 20.6924 20.649 20.5013 20.7875 20.2688C20.9261 20.0362 20.9995 19.7707 21.0002 19.5V10.8281C21.0001 10.62 20.9568 10.4141 20.8728 10.2237C20.7889 10.0332 20.6663 9.86232 20.5127 9.72184Z"
                fill="#26A8A8"
              />
            </g>
          </svg>

          <div>回大廳</div>
        </button>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-custom">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">分享到</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="share_btn facebook-share" @click="facebookShare">
              <img src="@/assets/modal/facebook_icon.svg" alt="Facebook" />
              <div class="btn_text">Facebook</div>
            </div>
            <div class="share_btn line-share" @click="lineShare">
              <img src="@/assets/modal/line_icon.svg" alt="Line" />
              <div class="btn_text">Line</div>
            </div>
            <div class="share_btn share-link" @click="copyLink">
              <img src="@/assets/modal/copy_icon.svg" alt="Copy" />
              <div class="btn_text">Copy link</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 分享 回大廳 -->
  <div class="container" v-if="screenSwitch">
    <div class="dashed-line"></div>
    <div class="row">
      <div class="col-12 mb-3 d-flex align-items-center justify-content-center">
        <div
          class="btn share-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Arrow_share />
          <div>分享</div>
        </div>
      </div>
      <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="btn home-btn" @click="toHomePage">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="House-f">
              <path
                id="Vector"
                d="M20.5127 9.72184L13.0127 2.90621C12.7362 2.65324 12.375 2.51294 12.0002 2.51294C11.6254 2.51294 11.2642 2.65324 10.9877 2.90621L3.4877 9.72184C3.33414 9.86232 3.2115 10.0332 3.12757 10.2237C3.04364 10.4141 3.00027 10.62 3.0002 10.8281V19.4625C2.9941 19.8406 3.12761 20.2078 3.3752 20.4937C3.51572 20.6535 3.68882 20.7814 3.88287 20.8687C4.07692 20.956 4.28741 21.0008 4.5002 21H9.0002C9.19911 21 9.38988 20.9209 9.53053 20.7803C9.67118 20.6396 9.7502 20.4489 9.7502 20.25V15.75C9.7502 15.551 9.82922 15.3603 9.96987 15.2196C10.1105 15.079 10.3013 15 10.5002 15H13.5002C13.6991 15 13.8899 15.079 14.0305 15.2196C14.1712 15.3603 14.2502 15.551 14.2502 15.75V20.25C14.2502 20.4489 14.3292 20.6396 14.4699 20.7803C14.6105 20.9209 14.8013 21 15.0002 21H19.5002C19.749 21.0022 19.9942 20.9408 20.2127 20.8218C20.4504 20.6924 20.649 20.5013 20.7875 20.2688C20.9261 20.0362 20.9995 19.7707 21.0002 19.5V10.8281C21.0001 10.62 20.9568 10.4141 20.8728 10.2237C20.7889 10.0332 20.6663 9.86232 20.5127 9.72184Z"
                fill="#26A8A8"
              />
            </g>
          </svg>
          <div>回大廳</div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-custom">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">分享到</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="share_btn facebook-share" @click="facebookShare">
              <img src="@/assets/modal/facebook_icon.svg" alt="Facebook" />
              <div class="btn_text">Facebook</div>
            </div>
            <div class="share_btn line-share" @click="lineShare">
              <img src="@/assets/modal/line_icon.svg" alt="Line" />
              <div class="btn_text">Line</div>
            </div>
            <div class="share_btn share-link" @click="copyLink">
              <img src="@/assets/modal/copy_icon.svg" alt="Copy" />
              <div class="btn_text">Copy link</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">關閉</button>
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
h3 {
  letter-spacing: 4% !important;
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
.link-container {
  position: relative;
  #qa-doll {
    position: absolute;
    width: 55%;
    top: -35px;
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
    width: 80%;
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
@media (max-width: 992px) {
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
  .month-icon {
    margin: 0px 1rem 1rem 0px;
  }
}
// mobile
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
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
  .share-btn {
    background-color: #26a8a8;
    color: #fff;
  }
  .home-btn {
    background-color: #fff;
    color: #26a8a8;
    border: 2px solid #26a8a8;
    // :hover {
    //   background-color: #fff !important;
    // }
  }
  .dashed-line {
    width: 100%;
    border-bottom: 5px dashed #b8806f;
    margin: 3rem 0;
  }
  .month-dashed-line {
    width: 80%;
    border-bottom: 5px dashed #b8806f;
    margin: 1.5rem 0;
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
      .share_btn {
        width: 50%;
        color: #24b2ae;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.8px;
        margin: 0 15px;
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
}
</style>
