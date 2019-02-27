<template>
  <div id="app">
    <router-view/>
   <!-- <test3></test3>
    <bus2></bus2>-->
  </div>
</template>

<script>
	import test3 from "./components/test3";
	import bus2 from "./components/children/bus2"
export default {
  name: 'App',
  components:{
  	test3,
  	bus2
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
  margin-top: 60px;
}
</style>
