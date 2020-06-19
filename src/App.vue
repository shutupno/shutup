<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "../static/css/style.css";

*{
	padding: 0;
	margin: 0;
}

html,body{
	width: 100%;
	height: 100%;
}

#app {
	height: 100%;
}
</style>
