import api from '../../api/index';
const state = {
  isRightShow: false, // 首页右边框的显示与隐藏
  BrandList: {}, //首页列表的数据
  MakeList: [] // 首页右边框里的数据
}

const mutations = {
  updateBrandList(state, payload) {
    state.BrandList = payload
  },
  updataMakeList(state, payload) {
    state.MakeList = payload;
    state.isRightShow = true;
  },
  changeIsRightShow(state, payload) {
    state.isRightShow = false;
  }
}

const actions = {
  //获取车系数据
  getBrandList({
    commit
  }) {
    api.getBrandList().then(res => {
      let obj = {}
      res.data.forEach(item => {
        if (obj[item.Spelling.slice(0, 1)] == undefined) {
          obj[item.Spelling.slice(0, 1)] = [];
          obj[item.Spelling.slice(0, 1)].push(item)
        } else {
          obj[item.Spelling.slice(0, 1)].push(item)
        }
      });
      commit('updateBrandList', obj)
    })
  },
  // 获取首页右边框的数据
  getMakeList({
    commit
  }, payload) {
    api.getMakeList(payload).then(res => {
      commit('updataMakeList', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}