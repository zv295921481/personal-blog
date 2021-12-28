import { list } from './list'
import { article } from './article'

/**
 * 获取文章列表
 * @export
 */
export function getList () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const a = Math.random() * 10
      if (a > 8) {
        return reject(new Error('获取文章列表失败'))
      }
      resolve(list)
    }, 300)
  })
}

/**
 * 通过id获取文章
 * @export
 * @param {*} id 文章id
 */
export function getArticleById (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        return reject(new Error('文章不存在'))
      }
      const a = Math.random() * 10
      if (a > 8) {
        return reject(new Error('获取文章失败'))
      }
      resolve(article)
    }, 300)
  })
}
