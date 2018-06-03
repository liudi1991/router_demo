import Vue from 'vue'
import VueRouter from 'vue-router'
//import routes from "./routerConfig.js"
Vue.use(VueRouter);


import home from "../components/home.vue";
import about from "../components/about.vue";
import message from "../components/message.vue";
import news from "../components/news.vue";
import newsDetail from '../components/newsDetail.vue';

const routes = [
  {
    name: "home",
    path: "/home",
    component: home,
    children: [
      {
        name: "news",
        path: "/home/news",
        component: news,
        children: [
          {
            name: "detail",
            path: "/home/news/:id",
            component: newsDetail,
          }
        ]
      },
      {
        name: "message",
        path: "/home/message",
        component: message
      }
    ]
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

export default new VueRouter({
  routes
})