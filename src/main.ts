import { createApp } from 'vue';
import App from './App.vue';

import './App.css';

import vuetify from './plugins/vuetify';
import router from './router';

createApp(App).use(router).use(vuetify).mount('#app');
