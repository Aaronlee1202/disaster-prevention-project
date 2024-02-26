import { createRouter, createWebHistory } from 'vue-router';
import PrimarySchoolView from '../views/PrimarySchool/PrimarySchoolView.vue';
import DisasterPreventionView from '../views/Jan/DisasterPreventionView.vue';
import FebruaryView from '@/views/Feb/FebruaryView.vue';

var u = navigator.userAgent;
// ua = navigator.userAgent.toLowerCase();
let isLineApp = u.indexOf('Line') > -1 ? true : false; //Line 內建瀏覽器
let isFbApp = u.indexOf('FBAV') > -1 ? true : false; // FB App 內建瀏覽器
console.log('isLineApp', isLineApp, 'isFbApp', isFbApp);

const base_url = import.meta.env.BASE_URL;
// let url;

// if (isLineApp || isFbApp) {
//   url = base_url + '?openExternalBrowser=1';
// } else {
//   url = base_url;
// }

const router = createRouter({
  history: createWebHistory(base_url),
  routes: [
    {
      path: '/',
      name: 'PrimarySchoolView',
      component: PrimarySchoolView
    },
    {
      path: '/january',
      name: 'DisasterPrevention',
      component: DisasterPreventionView
    },
    {
      path: '/february',
      name: 'FebruaryView',
      component: FebruaryView
    }
  ]
});

export default router;
