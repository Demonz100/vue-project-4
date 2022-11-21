import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ "@/views/HomeView.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import(/* webpackChunkName: "playground" */ "@/views/PlaygroundView.vue")
    }
  ]
})

export default router
