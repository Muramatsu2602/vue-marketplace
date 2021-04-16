import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// views
import Login from "../views/Login.vue";
import Store from "../views/Store.vue";

// routes
// www.exemplo.com.br/users/edit --> procura e dps renderiza o componente

//query parameters
// www.exemplo.com.br?key=value&key2=value2

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      headerShown: false
    }
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
    meta: {
      headerShown: true
    }
  },
  {
    path: "/",
    name: "Landing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "landing" */ "../views/Landing.vue"),
    meta: {
      headerShown: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
