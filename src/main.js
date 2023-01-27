import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRouterPrefetch from 'vue-router-prefetch';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import './App.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueRouterPrefetch);

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
