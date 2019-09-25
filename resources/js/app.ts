import "./bootstrap"
import Vue from "vue"
import store from "./store"
import router from './router'
import Master from './components/Master.vue'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(Master)
})
