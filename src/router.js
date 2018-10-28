import Vue from "vue";
import Router from "vue-router";
import VueAnalytics from "vue-analytics";
import Home from "./views/Home.vue";
import Download from "./views/Download.vue";
import Install from "./views/Install.vue";
import About from "./views/About.vue";

Vue.use(Router);

Vue.use(VueAnalytics, {
  id: "UA-128202561-1",
  router
});

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/download",
      name: "download",
      component: Download
    },
    {
      path: "/install",
      name: "install",
      component: Install
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});

export default router;