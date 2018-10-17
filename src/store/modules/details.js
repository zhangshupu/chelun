import api from '../../api/index'
import {
  mergeCar,
  sortCar,
  filterYear,
  yearList
} from '../../utils/index'
const state = {
  detailsData: {},
  list: [],
  yearList: [],
  show_index: 0
}

const mutations = {
  updataDetails(state, payload) {
    state.detailsData = payload;
    state.list = mergeCar(sortCar(payload.list));
    state.yearList = yearList(payload.list);
  },
  changeShow_index(state, payload) {
    state.show_index = payload[0];
    if (payload[1] == '全部') {
      state.list = mergeCar(sortCar(state.detailsData.list));
    } else {
      state.list = mergeCar(sortCar(filterYear(payload[1], state.detailsData.list)));
    }
  }
}

const actions = {
  // 获取详情页
  getDetailsData({
    commit
  }, payload) {
    api.getDetails(payload).then(res => {
      commit('updataDetails', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}