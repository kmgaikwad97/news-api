import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../components/Categories.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/categories/:title/:id",
    name:"Categories",
    component: Categories
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
