import { createRouter, createWebHistory } from 'vue-router'
import ItemsPage from './../components/items/ItemsPage.vue'
import ItemDetailPage from './../components/items/ItemDetailPage.vue'

const routes = [
  { path: '/', redirect: { name: 'items' } },
  { path: '/items', name: 'items', component: ItemsPage },
  { path: '/itemdetail', name: 'itemdetail', component: ItemDetailPage },
  { path: '/:catchAll(.*)', redirect: { name: 'items' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})