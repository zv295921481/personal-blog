
/**
 *
 * @author zzy防抖
 * @date 2021-12-29
 * @export
 * @param {function} func -函数
 * @param {int} time -延迟时间
 * @return {*}
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
 * @return {*}
 */
export function dateFormat (date) {
  var time = new Date(date).toLocaleDateString().replace(/\//g, '-')
  return time
}
