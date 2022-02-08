<template>
  <div class="outer-wrapper">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Monthly Expenses</h1>
    <div class="ui container three column grid">
      <Expenses />
      <Income />
      <Totals />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Expenses from './components/Expenses.vue'
import Income from './components/Income.vue'
import Totals from './components/Totals.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Expenses,
    Income,
    Totals
  }
}
</script>

<style>
html {
  height: 100%;
}
.outer-wrapper {
  padding-top: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  color: #ffc107;
  background-color: #333;
  height: 100%
}
h1 {
  text-align: center;
}
.ui.form .field>label {
  display: inline-block;
  width: 50%;
  color: #ffc107;
}
.ui.form input[type="text"] {
  font-size: 0.75em !important;
  display: inline-block;
  width: 50%;
}
.ui.form input[type="text"]::placeholder {
  color: #999;
}
</style>
