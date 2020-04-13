# Mario-UI
## update vue-cli
npm install @vue/cli --global --force
vue create vui
#### npm tip
-g

--global，缩写为-g，表示安装包时，视作全局的包。安装之后的包将位于系统预设的目录之下，一般来说

-S

--save，缩写为-S，表示安装的包将写入package.json里面的dependencies。

-D

--save-dev，缩写为-D，表示将安装的包将写入packege.json里面的devDependencies。

-O

--save-optional缩写为-O，表示将安装的包将写入packege.json里面的optionalDependencies。

-E

--save-exact缩写为-E，表示安装的包的版本是精确指定的。

-B

--save-bundle缩写为-B，表示将安装的包将写入packege.json里面的bundleDependencies。
## UI框架结构
```
ui
    examples
        assets
            logo.png
    packages // 存放自定义组件
        Button
            src
                index.vue
            main.js
    public
        favicon.ico
        index.html
    .gitignore
    README.md
    babel.config.js
    package.json
```
src重命名为examples, 并添加packages目录,用来存放我们的自定义组件. 但是cli默认会启动src下的服务,如果目录名变了,我们需要手动修改配置,vue-cli3中提供自定义打包配置项目的文件,我们只需要手动创建vue.config.js即可.我们具体修改如下:

```javascript
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
  }
}
```
修改入口文件地址为examples下的main.js,其次将packages加入打包编译任务中

## 组件编写
Button组件为例，实现一个比较简单的组件，先在packages目录下新建一个Button目录，然后src里存放组件的源代码：
```
<template>
  <div class="m-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .x-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
```
vue和react组件设计大量应用插槽机制，比如vue里的slot标签， react的children等。 在Button的index.js里编写如下代码来作为vue的组件安装：
```
// 导入组件，组件必须声明 name
import MButton from './src'
// 为组件提供 install 安装方法，供按需引入
MButton.install = function (Vue) {
  Vue.component(MButton.name, MButton)
}
// 导出组件
export default MButton
```
### Button 结构如下：
```
Button
    src
        index.vue
    main.js
```
packages的入口文件中导入组件并安装导出：
```
// 导入button组件
import MButton from './Button'

// 组件列表
const components = [
  MButton
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  MButton
}
```
install步骤和导出步骤非常关键，大家需要按照规则配置，这也是vue组件注册的规则之一。详细文档大家可以看vue官网的组件篇。

### 代码测试
我们要想看到自己写的组件效果，可以将组件导入到examples目录下的main.js中，其本质就是一个项目的开发目录，我们只需要按照如下方式导入即可：
```
// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import xui from '../packages'
// 注册组件库
Vue.use(xui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
这种方式是全局导入，至于按需导入，完全可以采用element的方式来配置，对于业务组件来说，一般项目中都是使用的到，所以全局导入比较合适，作为UI库来说，按需导入可能更适合。
### 项目应用组件
```
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <x-button type="primary">button</x-button>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
```
### package.json配置
必须按照npm的发包规则来编写我们的package.json, 我们先来解决组件库打包的问题,首先我们需要让脚手架编译我们的组件代码,并输出到指定目录下,我们按照发包规范一般会输出到lib目录下,代码如下:
```
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lib": "vue-cli-service build --target lib --name xui --dest lib packages/main.js"
  }
```
lib脚本就是用来打包packages的组件代码到lib目录下,文件名为以--name指定的名称前缀开头,我们执行脚本会输出类似如下代码:
```
lib
    demo.html
    ui.common.js
    ui.common.js.map
    ui.css
    ui.umd.js
    ui.umd.js.map
    ui.umd.min.js
    ui.umd.min.js.map
```
编写package文件的description,keywords等,具体介绍如下:
* description 组件库的描述文本
* keywords 组件库的关键词
* license 许可协议
* repository 组件库关联的git仓库地址
* homepage 组件库展示的首页地址
* main 组件库的主入口地址(在使用组件时引入的地址)
* private 声明组件库的私有性,如果要发布到npm公网上,需删除该属性或者设置为false
* publishConfig 用来设置npm发布的地址,这个配置作为团队内部的npm服务器来说非常关键,可以设置为私有的npm仓库

配置具体要看团队的要求和规范,这里就不一一举例了.具体配置源码可参考地址 xui.

## npm发布
npm官网注册一个账号，控制台登录
```
// 本地编译组件库代码
yarn lib
// 登录
 npm login
 // 发布
 npm publish
 // 如果发布失败提示权限问题,请执行以下命令
 npm publish --access public
```
发布后使用
```
import vui from '@alex_xu/vui'
import '/@alex_xu/vui/lib/vui.css'
Vue.use(vui)
```
# npm 相关使用说明
1. npmignore 配置文件
.npmignore配置文件类似于 .gitignore 文件，如果没有 .npmignore，会使用.gitignore来取代他的功能。
2. npm发包的版本管理
npm的发包遵循语义化版本，一个版本号格式如下：Major.Minor.Patch，每一部分具体介绍如下:
* Major 表示主版本号，做了不兼容的API修改时需要更新
* Minor 表示次版本号，做了向下兼容的功能性需求时需要更新
* Patch 表示修订号, 做了向下兼容的问题修正时需要更新

对应的npm也提供了脚本帮我们实现自动更新版本号，如下：
```
npm version patch
npm version minor
npm version major
```
还有更加深入的知识比如版本的tag化,本案例参考ele

---
* Done is better than perfect——Facebook Office
* 完成比完美更好
* Go big or go home——Facebook Office
* 要么牛逼，要么滚蛋
* Talk is cheap. Show me the code.——Linus Torvalds
* 能说算不上什么，有本事就把你的代码给我看看
* You build it, You run it. ——Werner Vogels 

* Stay hungry Stay foolish. ——Jobs
* 求知若饥，虚心若愚
* Eat our own dog food. ——Term
* dog food: 内部测试版本
