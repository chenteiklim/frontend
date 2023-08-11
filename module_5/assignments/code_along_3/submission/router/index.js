import { createRouter, createWebHistory } from 'vue-router';
import index from '@/View/index.vue'
import product from '@/View/product.vue'
import settings from '@/View/settings.vue'

const routes = [
    
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
        path: '/product',
        name: 'product',
        component: product,
      },
    
    {
        path: '/settings',
        name: 'settings',
        component: settings,
      },
    
  
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;