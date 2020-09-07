import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由
import store from './store'   //VueX
import VueRouter from 'vue-router'
// import Reg from './views/mine/Reg.Vue' 
// import Reg from'./views/mine/Reg.Vue'
Vue .use(VueRouter);
Vue.config.productionTip = false

// const router=new VueRouter({
//   routes:[
//     {
//       path:'/Reg',
//       component:Reg
//     }
//   ]
// })









new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
