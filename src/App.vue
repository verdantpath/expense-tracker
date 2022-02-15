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
import Expenses from './components/Expenses.vue'
import Income from './components/Income.vue'
import Totals from './components/Totals.vue'

export default {
  name: 'App',
  components: {
    Expenses,
    Income,
    Totals
  }
}
</script>

<style>
@media only screen and (min-width: 1200px) {
  .ui.grid.container {
    width: 75% !important;
    max-width: 1600px !important;
  }
}
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
  min-height: 100%
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
  width: 35%;
}
.ui.form input[type="text"]::placeholder {
  color: #999;
}
.field {
  position: relative;
}
.add-item {
  position: relative;
}
.show-more,
.remove-item {
  font-size: 2em;
  cursor: pointer;
  width: 15%;
  text-align: left;
  padding-left: 0.25em;
  display: inline-block;
  top: 0.18em;
  position: absolute;
}
.add-more-container {
  text-align: right;
  padding: 0.5em 2em;
}
.add-more-container input {
  margin: 3px !important;
  width: 40% !important;
}
.add-more-container button {
  margin-top: 5px !important;
  font-size: 0.75em !important;
}
</style>
