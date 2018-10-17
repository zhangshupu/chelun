/**
 * 合并参数相同的车辆
 * @param {*} list 车辆列表
 * @returns 一个对象,key为参数，value为参数相同车辆组成的数组
 */
export function mergeCar(list) {
  let keys = [],
    arr = {};
  list.forEach((item) => {
    // 拼接需要的key
    let key = item.exhaust_str + '/' + item.max_power_str + ' ' + item.inhale_type;
    if (keys.indexOf(key) != -1) {
      arr[key].push(item);
    } else {
      keys.push(key);
      arr[key] = [item];
    }
  })
  return arr;
}

/**
 * 排序车辆
 * @param {*} list 车辆列表
 * @returns 排序后的车辆列表
 */
export function sortCar(list) {
  return list.sort((a, b) => {
    // 根据排量排序 升序
    if (a.exhaust != b.exhaust) {
      return a.exhaust - b.exhaust;
    } else {
      // 根据发动机功率排序 升序
      if (a.max_power_str != b.max_power_str) {
        return a.max_power_str - b.max_power_str;
      } else {
        // 根据吸气方式排序
        if (a.inhale_type != b.inhale_type) {
          return a.inhale_type - b.inhale_type;
        } else {
          // 根据年份排序 降序
          return b.market_attribute.year - a.market_attribute.year;
        }
      }
    }
  })
}

/**
 * 根据年份过滤车辆
 * @param {*} year 年份
 * @param {*} list 车辆列表
 * @returns 符合年份的列表
 */
export function filterYear(year, list) {
  return list.filter(item => item.market_attribute.year == year);
}

export function yearList(list) {
  let arr = ['全部'];
  list.forEach((item, index) => {
    if (arr.indexOf(item.market_attribute.year) == -1) {
      arr.push(item.market_attribute.year)
    }
  })
  return arr.sort((a, b) => {
    return b - a
  })
}

// 防抖
export function debounce(fn, delay) {
  var delay = delay || 200;
  var timer;
  return function () {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}
// 节流
export function throttle(fn, interval) {
  console.log('节流')
  var last;
  var timer;
  var interval = interval || 200;
  return function () {
    var th = this;
    var args = arguments;
    var now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(th, args);
      }, interval);
    } else {
      last = now;
      fn.apply(th, args);
    }
  }
}