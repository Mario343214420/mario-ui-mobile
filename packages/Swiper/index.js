// 导入组件，组件必须声明 name
import MSwiper from './src'
// 为组件提供 install 安装方法，供按需引入
MSwiper.install = function (Vue) {
	Vue.component(MSwiper.name, MSwiper)
}
// 导出组件
export default MSwiper
