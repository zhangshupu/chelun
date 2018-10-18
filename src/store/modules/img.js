import api from '../../api/index'
const state = {
  imgData: [], //图片的数据
  imgList: [], //图片列表的数据
  pullIsShow: false, //图片列表页面是否显示
  ImageID: 0, //图片的id
  page: 1, //上拉加载更多数据
  isFetch: false, //节流
  swiperIsShow: false, //轮播图是否显示
  swiperInd: 0,
  swiperSum: 0,
};
const mutations = {
  updataImgData(store, payload) {
    store.imgData = payload;
    store.pullIsShow = false;
    store.swiperIsShow = false;
  },
  throttle(store, payload) {
    store.isFetch = false;
  },
  changeIsShow(store, payload) {
    store.pullIsShow = true;
    store.swiperSum = payload[0];
    store.ImageID = payload[1];
    store.page = 1;
  },
  updataImgList(store, payload) {
    store.imgList = store.imgList.concat(payload);
    store.page += 1;
    store.isFetch = true;
  },
  shangeSwiperIsShow(store, payload) {
    store.swiperIsShow = true;
    store.pullIsShow = false;
    store.swiperInd = payload[0];
    store.swiperSum = payload[1];
    store.ImageID = payload[2];
    store.page = 1;
  },
  changeSwiperIsShow(store, payload) {
    store.swiperIsShow = false
  },
  changeSwiperInd(store, payload) {
    store.swiperInd = payload;
  },
  SwiperIsShow(store, payload) {
    store.swiperInd=payload
    store.swiperIsShow = true;
    store.pullIsShow = false;
  }
};
const actions = {
  getImgData({
    commit
  }, payload) {
    api.getImgData(payload).then(res => {
      commit('updataImgData', res.data)
    })
  },
  getImgList({
    commit
  }, payload) {
    commit('throttle');
    api.getImgList([payload, state.ImageID, state.page]).then(res => {
      commit('updataImgList', res.data.List)
    })
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}