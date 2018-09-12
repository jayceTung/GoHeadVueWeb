import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/users/login',
    method: 'post',
    data: {
      userName: username,
      password: password
    }
  })
}

export function getInfo (userId) {
  return request({
    url: '/user_info/' + userId,
    method: 'get'
  })
}

export function queryUserInfo (page, pageSize) {
  return request({
    url: '/user_info/query/page/' + page + '/pageSize/' + pageSize,
    method: 'get'
  })
}

export function deleteUserInfo (uid) {
  return request({
    url: '/user_info/delete/' + uid,
    method: 'delete'
  })
}

export function updateUserInfo (userInfo) {
  return request({
    url: '/user_info/update',
    method: 'put',
    data: userInfo
  })
}

export function addUserInfo (userInfo) {
  return request({
    url: '/user_info/add',
    method: 'post',
    data: userInfo
  })
}
