// import './css/theme.css';
// import './css/bootstrap.min.css';
// import './css/theme-elements.css';
// import './css/style.css';
// import './css/all.min.css';
// import './css/fontawesome.min.css';

import './scss/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
