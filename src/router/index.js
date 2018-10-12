import Layout from '../views/layout/Layout.vue'
import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/usermanage',
    component: Layout,
    name: 'usermanage',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: 'UserList',
        name: 'UserList',
        component: () => import('@/views/user/manage/index'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'UserEdit',
        name: 'UserEdit',
        component: () => import('@/views/user/edit/index'),
        meta: { title: '用户编辑', icon: 'tree' }
      }
    ]
  },
  {
    path: '/articelmanage',
    component: Layout,
    name: 'articelmanage',
    meta: {
      title: '文章管理',
      icon: 'form'
    },
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/article/index'),
        meta: {title: '我的文章', icon: 'documentation'}
      },
      {
        path: 'ArticleEditor',
        name: 'ArticleEditor',
        component: () => import('@/views/form/quillEditor'),
        meta: { title: '文章编辑', icon: 'form' }
      }
    ]
  },
  {
    path: '/tab',
    name: 'tab',
    component: Layout,
    meta: {
      title: '管理',
      icon: 'example'
    },
    children: [
      {
        path: 'index',
        name: 'tab',
        component: () => import('@/views/tab/index'),
        meta: { title: 'tab选项卡', icon: 'form' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '系统管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      },
      {
        path: 'fullcalendar',
        name: 'Fullcalendar',
        component: () => import('@/views/fullcalendar/fullcalendar'),
        meta: { title: '日历', icon: 'tree' }
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/article/index'),
        meta: {title: '我的文章', icon: 'table'}
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/table/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/form/index'),
        meta: { title: 'table', icon: 'form' }
      },
      {
        path: 'quillEditor',
        name: 'quillEditor',
        component: () => import('@/views/form/quillEditor'),
        meta: { title: 'quillEditor', icon: 'form' }
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        component: () => import('@/views/form/tinymce'),
        meta: { title: 'tinymce', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/icon',
    component: Layout,
    name: '图标',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: '图标',
        component: () => import('@/views/svg-icon/index'),
        meta: { title: '图标', icon: 'form', roles: ['admin'] }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
