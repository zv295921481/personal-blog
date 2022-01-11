
/**
 * 防抖
 * @author zzy
 * @date 2021-12-29
 * @export
 * @param {function} func -函数
 * @param {Number} time -延迟时间
 * @return {function}
 */
export function debounce (func, time) {
  let timeout
  return function (e) {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func()
    }, time)
  }
}

/**
 * 节流
 * @author zzy
 * @date 2022-01-11
 * @export
 * @param {function} func
 * @param {Number} time
 * @return {function}
 */
export function throttle (func, time) {
  let timeout
  return function () {
    if (timeout) {
      return
    }
    timeout = setTimeout(() => {
      func()
      timeout = null
    }, time)
  }
}

/**
 * 日期格式化
 * @author zzy
 * @date 2021-12-29
 * @export
 * @param {string} date
 * @return {string}
 */
export function dateFormat (date) {
  var time = new Date(date).toLocaleDateString()
  return time
}
