import Mock from 'mockjs'
import loginAPI from './login'
Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/users\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user_info\.*/, 'get', loginAPI.getUserInfo)

export default Mock
