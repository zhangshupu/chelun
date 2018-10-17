import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import details from './modules/details';
import Logger from 'vuex/dist/logger';
import inquiry from './modules/inquiry';
import img from './modules/img';
// import carmodel from './modules/carmodel';
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
    index,
    details,
    inquiry,
    img,
    // carmodel,
    colour
  },
  plugins: [
    Logger()
  ]
})