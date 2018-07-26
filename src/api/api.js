import http from './MyHttp'

let base = ''

export const requestLogin = params => { return http.post(`${base}users/login`, params).then(res => res.data) }
export const getUserListPage = params => { return http.get(`${base}/user/listpage`, { params: params }) }
export const getUserInfo = params => { return http.get(`${base}/user_info/` + params , {}) }

