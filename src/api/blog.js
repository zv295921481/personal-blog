import request from '@/utils/request'
// 获取博客列表
export function getList () {
  return request({
    url: '/api/blog/list',
    method: 'get'
  })
}
// 获取文章详情
export function getArticleById (id) {
  return request({
    url: '/api/blog/detail',
    method: 'get',
    params: { id }
  })
}
// 点赞
export function addLike (id) {
  return request({
    url: '/api/blog/addLike',
    method: 'post',
    data: { id }
  })
}
// 取消点赞
export function cancelLike (id) {
  return request({
    url: '/api/blog/cancelLike',
    method: 'post',
    data: { id }
  })
}
// 游览
export function addViewCount (data) {
  return request({
    url: '/api/blog/addViewCount',
    method: 'post',
    data
  })
}
