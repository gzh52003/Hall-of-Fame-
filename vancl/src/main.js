import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由
import store from './store'   //VueX

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
