import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 组件库引入
import MarioUi from '../packages/main'

// 公共样式引入
import './assets/css/var.css'
import './assets/css/reset.css'
import './assets/css/flex.css'

Vue.use(MarioUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
