import { login, getInfo } from '@/api/login'
import { getToken, setToken, getUsername, setUsername, getAvatar,
  setAvatar, getRoles, setRoles, getUserId, setUserId, removeAll } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: getUsername(),
    avatar: getAvatar(),
    roles: getRoles(),
    userId: getUserId,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
    },
    SET_NAME: (state, name) => {
      setUsername(name)
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      setAvatar(avatar)
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      setRoles(roles)
      state.roles = roles
    },
    SET_USER_ID: (state, userId) => {
      setUserId(userId)
      state.userId = userId
    },

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roleName)
          commit('SET_TOKEN', response.token)
          commit('SET_USER_ID', data.id)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.userId).then(response => {
          const data = response.data
          commit('SET_NAME', data.userName)
          commit('SET_AVATAR', data.userAvator)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_NAME', '')
        commit('SET_USER_ID', '')
        removeAll()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_NAME', '')
        commit('SET_USER_ID', '')
        removeAll()
        resolve()
      })
    }
  }
}

export default user
