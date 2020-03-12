<template>
  <div id="app">
    <img alt="Mario logo" src="./assets/mario-logo-body.svg">
    <HelloWorld msg="Welcome to Mario-UI-Mobile"/>
    <MButton>This is MButton</MButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--my-main-blue);
  margin-top: 60px;
}
</style>
