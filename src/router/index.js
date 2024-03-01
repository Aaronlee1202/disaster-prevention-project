import { createRouter, createWebHistory } from 'vue-router';
import PrimarySchoolView from '../views/PrimarySchool/PrimarySchoolView.vue';
import DisasterPreventionView from '../views/Jan/DisasterPreventionView.vue';
import FebruaryView from '@/views/Feb/FebruaryView.vue';

const base_url = import.meta.env.BASE_URL;

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

export default router;
