import '@/css/bootstrap.min.css';
import '@/css/theme.css';
import '@/css/theme-elements.css';
import '@/scss/style.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
