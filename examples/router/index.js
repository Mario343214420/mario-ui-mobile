import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import MarioUI from '../../packages/main'

Vue.use(MarioUI)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes
})

export default router
