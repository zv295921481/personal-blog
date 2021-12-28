/**
 * 防抖
 *
 * @export
 * @param {function} func
 * @param {int} time
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
