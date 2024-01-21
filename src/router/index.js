import { createRouter, createWebHistory } from 'vue-router';
import PrimarySchoolView from '../views/PrimarySchool/PrimarySchoolView.vue';
import DisasterPreventionView from '../views/DisasterPrevention/DisasterPreventionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PrimarySchoolView',
      component: PrimarySchoolView
    },
    {
      path: '/disaster-prevention',
      name: 'DisasterPrevention',
      component: DisasterPreventionView
    }
  ]
});

export default router;
