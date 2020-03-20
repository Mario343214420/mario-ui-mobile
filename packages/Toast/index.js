// 导入组件，组件必须声明 name
import MToast from './src'
// 为组件提供 install 安装方法，供按需引入
MToast.install = function (Vue) {
	Vue.component(MToast.name, MToast)
}
// 导出组件
export default MToast
