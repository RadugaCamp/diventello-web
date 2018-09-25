import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false
console.log('%cfrom diventello team with love', 'color: tomato')

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
