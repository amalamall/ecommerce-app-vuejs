import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ShopView from '../views/ShopView.vue'
import AuthView from '../views/AuthView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import SignUpView from '../views/SignUpView.vue'
import NotFound from '../views/NotFoundView.vue'
const routes = [
  { 
    path: '/:catchAll(.*)', 
    component: NotFound 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails
  },
  {
    path: '/products',
    name: 'products',
    component: ShopView
  },
  {
    path : '/cart',
    name: 'cart',
    component : CartView
  },
  {
    path : '/signup',
    name: 'signUp',
    component : SignUpView
  },
  {
    path : '/checkout',
    name: 'checkout',
    component : CheckoutView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
