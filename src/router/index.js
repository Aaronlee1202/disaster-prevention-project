import { createRouter, createWebHistory } from 'vue-router';
// import VueGtag from 'vue-gtag';
import PrimarySchoolView from '../views/PrimarySchool/PrimarySchoolView.vue';
const DisasterPreventionView = () =>
  import('../views/Jan/DisasterPreventionView.vue');
const FebruaryView = () => import('../views/Feb/FebruaryView.vue');
const MarchView = () => import('../views/Mar/MarchView.vue');
const AprilView = () => import('../views/Apr/AprilView.vue');
const MayView = () => import('../views/May/MayView.vue');
const JuneView = () => import('@/views/June/JuneView.vue');
const JulyView = () => import('@/views/July/JulyView.vue');
const AugustView = () => import('@/views/August/AugustView.vue');
const SeptemberView = () => import('@/views/September/SeptemberView.vue');
const OctoberView = () => import('@/views/October/OctoberView.vue');
const NovemberView = () => import('@/views/November/NovemberView.vue');
const DecemberView = () => import('@/views/December/DecemberView.vue');

const base_url = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(base_url),
  routes: [
    {
      path: '/',
      name: 'PrimarySchoolView',
      component: PrimarySchoolView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯防災小學堂' }
    },
    {
      path: '/january',
      name: 'DisasterPrevention',
      component: DisasterPreventionView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯1月' }
    },
    {
      path: '/february',
      name: 'FebruaryView',
      component: FebruaryView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯2月' }
    },
    {
      path: '/march',
      name: 'MarchView',
      component: MarchView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯3月' }
    },
    {
      path: '/april',
      name: 'AprilView',
      component: AprilView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯4月' }
    },
    {
      path: '/may',
      name: 'MayView',
      component: MayView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯5月' }
    },
    {
      path: '/june',
      name: 'JuneView',
      component: JuneView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯6月' }
    },
    {
      path: '/july',
      name: 'JulyView',
      component: JulyView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯7月' }
    },
    {
      path: '/august',
      name: 'AugustView',
      component: AugustView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯8月' }
    },
    {
      path: '/september',
      name: 'SeptemberView',
      component: SeptemberView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯9月' }
    },
    {
      path: '/october',
      name: 'OctoberView',
      component: OctoberView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯10月' }
    },
    {
      path: '/november',
      name: 'NovemberView',
      component: NovemberView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯11月' }
    },
    {
      path: '/december',
      name: 'DecemberView',
      component: DecemberView,
      meta: { title: '行政法人國家災害防救科技中心-2024防災特輯12月' }
    }
  ]
});

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
