import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import InBox from "../views/InBox.vue"
import TimeLine from "../views/TimeLine.vue"
import Calendars from "../views/Calendars.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/inbox",
    name: "InBox",
    component: InBox,
  },
  {
    path: "/timeline",
    name: "TimeLine",
    component: TimeLine,
  },
  {
    path: "/calendars",
    name: "Calendars",
    component: Calendars,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
