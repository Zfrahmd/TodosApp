import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Pages/Home.vue";
import TodoList from "@/views/Pages/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/todolist",
    name: "TodoList",
    component: TodoList,
  },
  
  {
    path: "/about",
    name: "About",

    component: () =>
      import("@/views/Pages/About.vue"),
  },
];

const router = createRouter({
  // createWebHashHistory makes #tag routes, e.g localhost:8080/#/users
  // createWebHistory makes normal routes without #tag, e.g localhost:8080/users
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
