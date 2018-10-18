const state = {
  isShow: false,
  name: 'zhangshupu',
  password: 'aA@123'
};
const mutations = {
  changeIsShow(store, payload) {
    store.isShow = payload;
  },
  changeData(store, payload) {
    store.name = payload.name;
    store.password = payload.password
  }
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}