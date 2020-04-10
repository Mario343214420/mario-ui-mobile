import Button from '../pages/Button/Button'
import Swiper from '../pages/Swiper/Swiper'
import Input from '../pages/Input/Input'
import Toast from '../pages/Toast/Toast'
import Vessel from '../pages/Vessel/Vessel'

let routes = [
	// { path: '/', component: Guide},
	{ path: '/button', component: Button, name: 'button' },
	{ path: '/swiper', component: Swiper, name: 'swiper' },
	{ path: '/input', component: Input, name: 'input' },
	{ path: '/toast', component: Toast, name: 'toast' },
	{ path: '/vessel', component: Vessel, name: 'vessel' }
]

export default routes
