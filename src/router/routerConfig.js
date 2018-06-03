import home from "../components/home.vue";
import about from "../components/about.vue";

export default [
  {
    name: "home",
    path: "/home",
    component: home
  },
  {
    name: "about",
    path: "/about",
    component: about
  },
  {
    name: "default",
    path: "/",
    redirect: "/home"
  }
]

