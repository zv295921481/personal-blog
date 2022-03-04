import request from '@/utils/request'

export function getList (params) {
  return request({
    url: '/api/book/list',
    method: 'get',
    params
  })
}

export function add (data) {
  return request({
    url: '/api/book/new',
    method: 'post',
    data
  })
}
export function update (id, data) {
  return request({
    url: '/api/book/update',
    method: 'post',
    data,
    params: {
      id
    }
  })
}
