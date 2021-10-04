import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App.vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/assets/styles/tailwind.css';

library.add(faUserSecret, faArrowLeft);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.prototype.$api = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 15000,
  defaults: {
    headers: {
      common: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  },
});
Vue.prototype.$api.interceptors.response.use((config) => config, (error) => Promise.reject(error));

const app = new Vue({
  router,
  store,
  render: h => h(App),
});
store.$app = app;
app.$mount('#app');
