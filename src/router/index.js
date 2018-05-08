import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const _import = require('./_import_' + process.env.NODE_ENV);

let constantRouterMap=[
  {path:'/home',component:_import('home/index/index')},
  {path:'/cs',component:_import('cs/index/index')}
];

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
