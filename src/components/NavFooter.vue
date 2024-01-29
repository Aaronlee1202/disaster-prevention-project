<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const indexPage = ref(true);
watch(router.currentRoute, (newVal) => {
  console.log(newVal.name);
  if (newVal.name !== 'PrimarySchoolView') {
    indexPage.value = false;
  } else {
    indexPage.value = true;
  }
  console.log(indexPage.value);
});
</script>

<template>
  <footer id="footer" class="m-0" :class="[indexPage ? 'header-body-brown' : 'header-body-green']">
    <div class="container">
      <div class="box">
        <div class="title_box">
          <img src="../assets/footer/footer_title.svg" alt="" /><br />
          <hr />
        </div>

        <div class="font">
          <div class="mail">
            <img src="../assets/footer/footer_pic_01.svg" alt="" />
            <div class="title">總編許願箱</div>
            歡迎有趣的合作提案或疑問，請來信 nini9800@ncdr.nat.gov.tw
          </div>
          <div class="contact">
            <!-- css需修改 -->
            <img src="../assets/footer/footer_logo.svg" alt="" />
            <span class="font_nowrap">電話&nbsp; 02-8195-8608 </span> &nbsp;/&nbsp;
            <span class="font_nowrap">傳真&nbsp; 02-8912-7766</span><br />
            23143 新北市新店區北新路三段200號9樓<br />
            (大坪林聯合開發大樓)
          </div>
        </div>

        <div class="copyright">
          Copyright © 2024 行政法人國家災害防救科技中心<br />All rights reserved.
          <!-- <div class="footer_design">Designed by <a href="http://www.laypu.com/" target="_blank" title="LAYPU(另開新視窗)">LAYPU</a></div> -->
        </div>
      </div>
    </div>
  </footer>
</template>
