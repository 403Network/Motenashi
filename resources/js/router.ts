import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "./components/Views/Auth/Login.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: LoginPage
    }
  ]
})
