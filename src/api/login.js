import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/users/login',
    method: 'post',
    data: {
      userName: username,
      password: password
    }
  })
}

export function getInfo(userId) {
  return request({
    url: '/user_info/' + userId,
    method: 'get'
  })
}
