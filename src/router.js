import Vue from 'vue'
import Router from 'vue-router'
import index from './router/index'
import about from './router/about'
import list from './router/list'
import song from './router/song'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { ...index },
    { ...about },
    { ...list },
    { ...song }
  ]
})
