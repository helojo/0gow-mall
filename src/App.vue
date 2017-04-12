<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <tab-bar></tab-bar>
    <transition name = "fade">
      <router-view></router-view>
    </transition>
    
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
  padding-bottom: 2rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
