import Vue from 'vue';
import Vuex from 'vuex';
import logine from './modules/logine'
import index from './modules/index';
import details from './modules/details';
import Logger from 'vuex/dist/logger';
import inquiry from './modules/inquiry';
import img from './modules/img';
import colour from './modules/colour'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loadingIsShow: true
  },
  mutations: {
    changeLoading(state, payload) {
      state.loadingIsShow = payload;
    }
  },
  modules: {
    logine,
    index,
    details,
    inquiry,
    img,
    colour
  },
  plugins: [
    Logger()
  ]
})