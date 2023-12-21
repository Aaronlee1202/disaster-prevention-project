<script setup></script>

<template>
  <div id="new-talisman">
    <div class="container custom-container">
      <div class="row d-flex align-items-center">
        <div class="col-6 d-flex justify-content-center">
          <div class="img-container">
            <img src="@/assets/disaster_prevention/new_talisman.png" alt="新的護身符" />
          </div>
        </div>
        <div class="col-6">
          <h1>新的護身符</h1>
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
  padding-top: 11%;
}
@media screen and (max-width: 768px) {
  .img-container {
    width: 65%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
