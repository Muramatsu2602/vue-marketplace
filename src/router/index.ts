import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "../views/Login.vue";
import Store from "../views/Store.vue";
import Signup from "../views/Signup.vue";
import Checkout from "../views/Checkout.vue";
import Collection from "../views/Collection.vue";

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
    path: "/collection",
    name: "Collection",
    component: Collection,
    meta: {
      headerShown: true
    }
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    meta: {
      headerShown: true
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      headerShown: false
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
