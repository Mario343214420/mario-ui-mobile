<template>
  <div id="app">
    <!--<img alt="Mario logo" style="margin-bottom: 40px;" src="./assets/mario-logo-body.svg">-->
    <div>
      <MButton @click="openToast" type="primary" plain>弹出Toast</MButton>
      <MButton @click="test" type="success" plain>MButton</MButton>
      <MButton @click="test" type="info" plain>MButton</MButton>
      <MButton @click="test" type="warning" plain>MButton</MButton>
      <MButton @click="test" type="danger" plain>MButton</MButton>
      <MButton @click="test" type="danger" disable>MButton</MButton>
      <MButton @click="test" type="danger" size="small" disable>MButton</MButton>
      <MButton @click="test" type="danger" size="large" disable>MButton</MButton>
    </div>
    <!--<MSwiper :list="swiperList"></MSwiper>-->
    <MInput></MInput>
    <HelloWorld msg="Welcome to Mario-UI-Mobile"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import img1 from './assets/mario-logo-body.svg'
import img2 from './assets/mario-agaric.svg'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      swiperList: [
        { dom: '<img src=' + img1 + ' />' },
        { dom: '<img src=' + img2 + ' />' }
      ]
    }
  },
  methods: {
    test(e){
      console.log(e);
    },
    openToast(){
        // MToast('提示信息');
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--my-main-blue);
  margin-top: 60px;
}
</style>
