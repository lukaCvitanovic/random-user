import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },

  getters: {
    getUser({ user }) {
      return user;
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    removeUser(state) {
      state.user = {};
    },
  },
});
