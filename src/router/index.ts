import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/history', name: 'history', component: () => import('@/views/CategoryView.vue'), props: { slug: 'history' } },
    { path: '/biography', name: 'biography', component: () => import('@/views/CategoryView.vue'), props: { slug: 'biography' } },
    { path: '/knowledge', name: 'knowledge', component: () => import('@/views/CategoryView.vue'), props: { slug: 'knowledge' } },
    { path: '/stories', name: 'stories', component: () => import('@/views/CategoryView.vue'), props: { slug: 'stories' } },
    { path: '/article/:slug', name: 'article', component: () => import('@/views/ArticleView.vue'), props: true },
    { path: '/videos', name: 'videos', component: () => import('@/views/VideosView.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },
  ],
  scrollBehavior: (_to, _from, saved) => saved ?? { top: 0 },
})
