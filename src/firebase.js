import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase app
firebase.initializeApp(firebaseConfig)

// Define Vuex store
import Vuex from 'vuex'

const store = new Vuex.Store({
  modules: {
    auth: {
      state: {
        user: null
      },
      mutations: {
        setUser(state, user) {
          state.user = user
        }
      },
      actions: {
        async login({ commit }, { email, password }) {
          const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
          commit('setUser', userCredential.user)
        },
        async logout({ commit }) {
          await firebase.auth().signOut()
          commit('setUser', null)
        }
      }
    },
    products: {
      state: {
        list: []
      },
      mutations: {
        setList(state, list) {
          state.list = list
        }
      },
      actions: {
        async fetchList({ commit }) {
          const snapshot = await firebase.firestore().collection('products').get()
          const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          commit('setList', list)
        },
        async updateProduct(_, { id, data }) {
          await firebase.firestore().collection('products').doc(id).update(data)
        }
      }
    }
  }
})

// Use Firebase Authentication to protect routes
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList, meta: { requiresAuth: true } },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !firebase.auth().currentUser) {
    next('/login')
  } else {
    next()
  }
})