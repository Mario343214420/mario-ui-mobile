<template>
  <div id="app">
<!--    <img alt="Mario logo" src="./assets/mario-logo-body.svg">-->
    <div>
      <MButton @click="test" type="primary" plain>MButton</MButton>
      <MButton @click="test" type="success" plain>MButton</MButton>
      <MButton @click="test" type="info" plain>MButton</MButton>
      <MButton @click="test" type="warning" plain>MButton</MButton>
      <MButton @click="test" type="danger" plain>MButton</MButton>
      <MButton @click="test" type="danger" disable>MButton</MButton>
      <MButton @click="test" type="danger" size="small" disable>MButton</MButton>
      <MButton @click="test" type="danger" size="large" disable>MButton</MButton>
    </div>
    <HelloWorld msg="Welcome to Mario-UI-Mobile"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    test(e){
      console.log(e);
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
