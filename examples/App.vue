<template>
  <div id="app" flex>
    <!--<img alt="Mario logo" style="margin-bottom: 40px;" src="./assets/mario-logo-body.svg">-->
    <Nav @changeView="changeView"></Nav>
    <div class="main-view" flex-box="1">
      <Header></Header>
      <div class="main" flex>
        <div class="content" flex-box="1">
          <div v-show="nav === 0">
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
        </div>
        <div class="phone">
          <div class="phone-simulate-view">
            <PhoneSimulate>
              <MButton @click="openToast" type="primary" plain>弹出Toast</MButton>
            </PhoneSimulate>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import imgBody from './assets/images/mario-logo-body.svg'
import imgAgaric from './assets/images/mario-agaric.svg'
import PhoneSimulate from './components/PhoneSimulate/index'
import Nav from './components/Nav/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
  name: 'App',
  components: {
    PhoneSimulate,
    Nav,
    Header,
    Footer
  },
  data(){
    return{
      swiperList: [
        { dom: '<img src=' + imgBody + ' />' },
        { dom: '<img src=' + imgAgaric + ' />' }
      ],
      nav: 0
    }
  },
  methods: {
    test(e){
      console.log(e);
    },
    openToast(){
      // MToast('提示信息');
      console.log('openToast')
    },
    changeView(nav){
      this.nav = nav
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--my-main-blue);
  height: 100%
.phone
  height: 100%
  overflow hidden
  position relative
  width: 375px
.phone-simulate-view
  position absolute
  top 50%
  left: 50%
  transform translate(-50%, -50%)
#app, .main-view
  height: 100%
.main
  height: calc(100% - 200px)
</style>
