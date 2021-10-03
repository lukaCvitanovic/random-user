import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import '@/assets/styles/tailwind.css';

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
  render: h => h(App),
}).$mount('#app');
