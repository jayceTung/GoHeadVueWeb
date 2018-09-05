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
      "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
    }, {
      "id": 1042,
      "articleTitle": "1",
      "articleCreateDate": "2017-04-23 16:52:46",
      "isTop": null,
      "addName": "1",
      "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
    }, {
      "id": 1043,
      "articleTitle": "1",
      "articleCreateDate": "2017-04-23 22:46:39",
      "isTop": null,
      "addName": "1",
      "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
    }, {
      "id": 1044,
      "articleTitle": "title",
      "articleCreateDate": "2018-07-12 11:25:28",
      "isTop": null,
      "addName": "13",
      "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
    }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
      }, {
        "id": 1044,
        "articleTitle": "title",
        "articleCreateDate": "2018-07-12 11:25:28",
        "isTop": null,
        "addName": "13",
        "articleContent": "发送到科技的上课了附近的,顺口溜圣诞节快乐丰富,/n的科技的反垄断法监控了打发时间分开来"
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
