import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //引入路由组件
import ElementUI from 'element-ui'; //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';  //引入UI样式
// import reqios from './tool/axios';  //axios请求

Vue.config.productionTip = false
// Vue.prototype.$reqios = reqios  //绑定axios请求到Vue原型链，实现全局调用

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
