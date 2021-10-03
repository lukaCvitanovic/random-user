import Vue from 'vue';
import router from '@/router';
import App from './App.vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/assets/styles/tailwind.css';

library.add(faUserSecret);
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
