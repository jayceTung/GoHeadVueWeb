import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    "resultCode": 200,
    "message": "SUCCESS",
    "data": {
      "id": 2,
      "userName": "admin",
      "password": "PASSWORD",
      "roleName": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJEU1NGQVdEV0FEQVMuLi4iLCJ1c2VyX25hbWUiOiJhZG1pbiIsIm5pY2tfbmFtZSI6IkRBU0RBMTIxIiwiZXhwIjoxNTM1NjgzOTYyLCJpYXQiOjE1MzUwNzkxNjIsImp0aSI6Imp3dCJ9.I3gw3920DJzc1LgAF-N0pRkw9SP9sE2s9bPqSL_KSzM"
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const userInfo = {
  admin: {
    "resultCode": 200,
    "message": "SUCCESS",
    "data": {
      "id": 2,
      "userName": "admin",
      "userAvator": "https://pic3.zhimg.com/v2-28845fa461612ff17574cbb08fe7d07a.jpg",
      "phone": "1373527822",
      "email": "yinte@163.com",
      "work": "enginer"
    }
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    console.log(userMap['admin'])
    return userMap['admin']
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    console.log(userInfo['admin'])
    return userInfo['admin']
    // if (userMap[token]) {
    //   return userMap[token]
    // } else {
    //   return false
    // }
  },
  logout: () => 'success'
}
