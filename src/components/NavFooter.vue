<script setup>
import Logo from '@/assets/footer/footer_logo.svg';
import FooterTitle from '@/assets/footer/footer_title.svg';
import FooterPic01 from '@/assets/footer/footer_pic_01.svg';

</script>

<template>
  <footer id="footer" class="header-body-brown m-0">
    <div class="container">
      <div class="box">
        <div class="title_box">
          <img :src="FooterTitle"/>
          <hr />
        </div>

        <div class="font">
          <div class="mail mail-border">
            <img :src="FooterPic01" />
            <div class="title">總編許願箱</div>
            歡迎有趣的合作提案或疑問，請來信 nini9800@ncdr.nat.gov.tw
          </div>
          <div class="contact">
            <img :src="Logo" /><br />
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
