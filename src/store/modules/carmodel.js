// import api from '../../api/index'
// import {
//   mergeCar,
//   sortCar,
//   filterYear,
//   yearList
// } from '../../utils/index'
// const state = {
//   carmodelData: []
// };
// const mutations = {
//   updataCarmodel(store, payload) {
//     store.carmodelData = payload;
//   }
// };
// const actions = {
//   getcarmodelData({
//     commit
//   }, payload) {
//     api.getCarModel(payload).then((res) => {
//       console.log(res.data);
//       commit('updataCarmodel', res.data)
//     })
//   }
// };
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
// }