import Vue from 'vue'
import App from './App.vue'

// 组件库引入
import MarioUi from '../packages/main'
Vue.use(MarioUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
