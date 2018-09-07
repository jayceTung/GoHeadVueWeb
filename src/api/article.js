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

export function deleteArcticle (article) {
  return request({
    url: '/articles/delete',
    method: 'delete',
    data: article
  })
}

export function updateArticle (article) {
  return request({
    url: '/articles/update',
    method: 'put',
    data: article
  })
}

export function addArticle (article) {
  return request({
    url: '/articles/add',
    method: 'post',
    data: article
  })
}
