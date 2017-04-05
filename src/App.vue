<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/tabbar.vue';

export default {
  name: 'app',
  components : {
      TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
}
</style>
