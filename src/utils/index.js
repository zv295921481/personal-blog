
/**
 *
 * @author zzy防抖
 * @date 2021-12-29
 * @export
 * @param {function} func -函数
 * @param {Number} time -延迟时间
 * @return {function}
 */
export function debounce (func, time) {
  let timeout
  return function (e) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func()
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
