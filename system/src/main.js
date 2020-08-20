import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //引入路由组件
import ElementUI from 'element-ui'; //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';  //引入UI样式

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
