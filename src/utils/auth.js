import Cookies from 'js-cookie'

const KeyToken = 'Admin-Token'
const KeyUsername = 'Cookie-Username'
const KeyAvatar = 'Cookie-Avatar'
const KeyRoles = 'Cookie-Roles'
const KeyUserId = 'Cookie-UserId'

export function getToken() {
  return Cookies.get(KeyToken)
}

export function setToken(token) {
  return Cookies.set(KeyToken, token)
}

export function removeToken() {
  return Cookies.remove(KeyToken)
}

export function getUsername() {
  return Cookies.get(KeyUsername)
}

export function setUsername(username) {
  return Cookies.set(KeyUsername, username)
}

export function getAvatar() {
  return Cookies.get(KeyAvatar)
}

export function setAvatar(avatar) {
  return Cookies.set(KeyAvatar, avatar)
}

export function getRoles() {
  return Cookies.get(KeyRoles)
}

export function setRoles(roles) {
  return Cookies.set(KeyRoles, roles)
}
export function getUserId() {
  return Cookies.get(KeyUserId)
}

export function setUserId(userId) {
  return Cookies.set(KeyUserId, userId)
}

export function removeAll() {
  Cookies.remove(KeyToken)
  Cookies.remove(KeyUsername)
  Cookies.remove(KeyAvatar)
  Cookies.remove(KeyRoles)
  Cookies.remove(KeyUserId)
}
