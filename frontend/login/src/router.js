import * as VueRouter from "vue-router";

import Login from "./components/Login/Login.vue";
import HomeTemporal from "./components/HomeTemporal/HomeTemporal.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/home",
    component: HomeTemporal,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;
