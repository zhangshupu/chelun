import api from '../../api/index'
const state = {
  ColourData: []
};
const mutations = {
  updataColourData(store, payload) {
    store.ColourData = payload;
  }
};
const actions = {
  getColourData({
    commit
  }, payload) {
    api.getColour(payload).then((res) => {
      commit('updataColourData', res.data)
    })
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}