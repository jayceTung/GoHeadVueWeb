/**
 * Created by super on 2018/8/30.
 */
import request from '@/utils/request'

export function getArticle (page, pageSize) {
  return request({
    url: '/articles/query/page/' + page + '/pageSize/' + pageSize,
    method: 'get'
  })
}
