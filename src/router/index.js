import { createRouter, createWebHistory } from 'vue-router';
import PrimarySchoolView from '../views/PrimarySchool/PrimarySchoolView.vue';
import DisasterPreventionView from '../views/Jan/DisasterPreventionView.vue';
import FebruaryView from '@/views/Feb/FebruaryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
