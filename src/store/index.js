import { createStore } from 'vuex'

//firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,signOut} from 'firebase/auth'

export default createStore({
  state: {
    user : null
  },
  getters: {
  },
  mutations: {
    setUser(state,payload) {
      state.user = payload
      console.log('user state chnaged', state.user)
    }
  },
  actions: {
    async signup(context, {email, password}) {
      console.log('signup action')

      // async code
      const res = await createUserWithEmailAndPassword(auth,email,password)
      if(res){
        context.commit('setUser',res.user)
      }else {
        throw new Error('could not complete signup')
      }
    },

    async login(context, {email, password}) {
      console.log('login action')

      // async code
      const res = await signInWithEmailAndPassword(auth,email,password)
      if(res){
        context.commit('setUser',res.user)
      }else {
        throw new Error('could not complete login')
      }
    },

    async logout(context){
      console.log("sign out")
      await signOut(auth)
      context.commit('setUser',null)
    }

  },
  modules: {
  }
})
