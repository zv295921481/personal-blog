import request from '@/utils/request'

export function getList () {
  return request({
    url: '/api/blog/list',
    method: 'get'
  })
}
export function getArticleById (id) {
  return request({
    url: '/api/blog/detail',
    method: 'get',
    params: { id }
  })
}
