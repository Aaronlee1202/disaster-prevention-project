<script setup></script>

<template>
  <div id="new-talisman">
    <div class="container custom-container">
      <div class="row d-flex align-items-center">
        <div class="col-6 d-flex justify-content-end">
          <div class="img-container">
            <img src="@/assets/disaster_prevention/new_talisman.png" alt="新的護身符" />
          </div>
        </div>
        <div class="col-6">
          <div class="content-box">
            <img src="@/assets/disaster_prevention/title_img.png" alt="防災小學堂" />
            <h4 class="small-title">人流樓</h4>
            <h2>人手一機的防災新法寶</h2>
            <p>
              發行日期 | 2023.01.01 <br />
              作者 | 地人組 黃明偉 <br />
              審稿人 | 柯孝勳
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#new-talisman {
  position: relative;
  width: 100%;
  height: 100vh;
}
.custom-container {
  height: 100%;
}
.small-title {
  margin: 1rem 0;
  color: #b8806f;
  font-weight: 700;
  letter-spacing: 0.46px;
  opacity: 0.8;
}
h2 {
  margin: 1rem 0;
}
@media (min-width: 1440px) {
  #new-talisman {
    height: 1080px;
  }
  .custom-container {
    padding-top: 8.5%;
  }
  .img-container {
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .content-box {
    img {
      width: 70%;
    }
  }
}
@media (max-width: 1440px) {
  .custom-container {
    padding-top: 11%;
  }
  .img-container {
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .content-box {
    img {
      width: 70%;
    }
  }
}
@media (max-width: 767px) {
  .custom-container {
    padding-top: 8%;
  }
  .img-container {
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
