import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //引入路由组件
import ElementUI from 'element-ui'; //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';  //引入UI样式

//引入全局路由守卫
import './permission';

//警告信息：动态设置警告开关（true关闭警告，false开启警告）
Vue.config.productionTip = process.env.NODE_ENV != 'development';


Vue.use(ElementUI)

new Vue({ 
  router,
  render: h => h(App),
}).$mount('#app')
