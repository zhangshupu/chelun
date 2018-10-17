import colour from "../store/modules/colour";
import {
  serialize
} from "../../node_modules/uri-js";

const host = 'https://baojia.chelun.com';

function sendRequest(url, method = 'GET', data = {}) {
  let params = {
    method
  };
  // 判断如果是一个post请求，带上请求体信息
  if (method == 'POST') {
    params.body = JSON.stringify(data);
  }
  // 判断请求查询url是否携带query
  if (url.indexOf('?') == -1) {
    url += `?_=${+new Date()}`
  } else {
    url += `&_=${+new Date()}`
  }
  return fetch(host + url, params).then(res => res.json()).then(body => body)
}

export default {
  /** 
   * 获取车辆品牌数据
   */
  getBrandList: () => {
    return sendRequest('/v2-car-getMasterBrandList.html');
  },

  /**
   * 获取车系数据
   * @param id 为参数
   */
  getMakeList: (id) => {
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
  },
  /**
   * 获取详情页的数据
   * @param id 为参数
   */
  getDetails: (id) => {
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
  },
  /**
   * @param carId 为车的id
   * @param cityId 为城市的id
   */
  getInquiry: (carId, cityId) => {
    return sendRequest(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
  },
  /**
   * 获取城市
   */
  getCityId: () => {
    return sendRequest(`/location-client.html`)
  },
  /**
   * 获取一级城市列表
   */
  getCityList: () => {
    return sendRequest(`/v1-city-alllist.html`)
  },
  /**
   * 获取二级城市列表
   */
  getUrban: (id) => {
    return sendRequest(`/v1-city-alllist.html?provinceid=${id}`)
  },

  /**
   * 获取图片列表的ids
   * @param SerialID 为车辆的id
   */
  getImgData: (obj) => {
    let query = '';
    for (const key in obj) {
      query += `&${key}=${obj[key]}`
    }
    query = query.slice(1)
    console.log(query)
    return sendRequest(`/v2-car-getImageList.html?${query}`)

  },

  /**
   * 获取颜色的数据
   */
  getColour: (SerialID) => {
    return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`)
  },

  getImgList: (arr) => {
    return sendRequest(`/v2-car-getCategoryImageList.html?SerialID=${arr[0]}&ImageID=${arr[1]}&Page=${arr[2]}&PageSize=30`)
  }
}