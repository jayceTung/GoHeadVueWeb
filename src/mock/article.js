const userMap = {
  admin: {
    "resultCode": 200,
    "message": "SUCCESS",
    "total": 100,
    "page": 1,
    "data": [{
      "id": 1040,
      "articleTitle": "1",
      "articleCreateDate": "2017-04-23 14:27:15",
      "isTop": null,
      "addName": "2",
      "articleContent": null
    }, {
      "id": 1042,
      "articleTitle": "1",
      "articleCreateDate": "2017-04-23 16:52:46",
      "isTop": null,
      "addName": "1",
      "articleContent": null
    }, {
      "id": 1043,
      "articleTitle": "1",
      "articleCreateDate": "2017-04-23 22:46:39",
      "isTop": null,
      "addName": "1",
      "articleContent": null
    }, {
      "id": 1044,
      "articleTitle": "title",
      "articleCreateDate": "2018-07-12 11:25:28",
      "isTop": null,
      "addName": "13",
      "articleContent": null
    }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": null
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": null
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": null
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": null
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": null
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": null
      }]
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
export default {
  getArticle: config => {
    return userMap['admin']
  }
}
