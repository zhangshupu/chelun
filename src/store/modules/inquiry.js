import api from '../../api/index';
const state = {
  inquiryData: {},
  cityName: '',
  cityList: [],
  UrbanList: [],
  cityIsShow: false,
  UrbanIsShow: false
}

const mutations = {
  updataInquiry(store, payload) {
    store.cityName = payload[0];
    store.inquiryData = payload[1]
    store.cityIsShow = false;
    store.UrbanIsShow = false;
  },
  updataCityList(store, payload) {
    store.cityList = payload;
  },
  updataUrban(store, payload) {
    store.UrbanList = payload;
    store.UrbanIsShow = true
    console.log(store.UrbanList)
  },
  changeShowCity(store, payload) {
    store.cityIsShow = true
  }
}

const actions = {
  getInquiryData({
    commit
  }, payload) {
    api.getCityId().then(body => {
      api.getInquiry(payload, body.data.CityID).then(res => {
        commit('updataInquiry', [body.data.CityName, res.data])
      })
    })
  },
  getCityList({
    commit
  }, payload) {
    api.getCityList().then(res => {
      commit('updataCityList', res.data)
    })
  },
  getUrban({
    commit
  }, payload) {
    api.getUrban(payload).then(res => {
      commit('updataUrban', res.data)
    })
  },
  getCityID({
    commit
  }, payload) {
    console.log(payload)
    api.getInquiry(payload[0], payload[1]).then(res => {
      commit('updataInquiry', [payload[2], res.data])
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}