import { createRouter, createWebHistory } from 'vue-router';
// import VueGtag from 'vue-gtag';
import PrimarySchoolView from '../views/PrimarySchool/PrimarySchoolView.vue';
import DisasterPreventionView from '../views/Jan/DisasterPreventionView.vue';
import FebruaryView from '@/views/Feb/FebruaryView.vue';
import MarchView from '@/views/Mar/MarchView.vue';

const base_url = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base_url),
  routes: [
    {
      path: '/',
      name: 'PrimarySchoolView',
      component: PrimarySchoolView,
      meta: { title: '行政法人國災害防救科技中心-2024防災特輯防災小學堂' }
    },
    {
      path: '/january',
      name: 'DisasterPrevention',
      component: DisasterPreventionView,
      meta: { title: '行政法人國災害防救科技中心-2024防災特輯1月' }
    },
    {
      path: '/february',
      name: 'FebruaryView',
      component: FebruaryView,
      meta: { title: '行政法人國災害防救科技中心-2024防災特輯2月' }
    },
    {
      path: '/march',
      name: 'MarchView',
      component: MarchView,
      meta: { title: '行政法人國災害防救科技中心-2024防災特輯3月' }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (isLineApp || isFbApp) {
//     next({ path: '/?openExternalBrowser=1' });
//     return false;
//   } else {
//     console.log('to', to, 'from', from);
//     next();
//     return false;
//   }
// });

// 在路由導航守衛中動態設置網頁標題
router.beforeEach((to, from, next) => {
  // 從路由的 meta 屬性中獲取標題
  const title = to.meta.title;
  // 如果標題存在，則設置網頁標題
  if (title) {
    document.title = title;
  }
  next();
});
export default router;
