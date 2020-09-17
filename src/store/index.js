import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: '',
    uid: '',
    authorized: false,
    apiURL: 'http://31.182.117.70:8081'
  },
  methods: {
    removeLoggedUserCache: function () {
      localStorage.removeItem('access-token')
      localStorage.removeItem('client')
      localStorage.removeItem('uid')
    }
  },
  mutations: {
    saveUserLogged (state, loggedUser) {
      state.loggedUser = loggedUser
      state.authorized = true
    },
    saveUserId (state, uid) {
      state.uid = uid
    },
    signOut (state) {
      state.loggedUser = ''
      state.uid = ''
      state.authorized = false
    }
  },
  actions: {
    saveUserLogged (context, loggedUser) {
      context.commit('saveUserLogged', loggedUser)
    },
    saveUserId (context, uid) {
      context.commit('saveUserId', uid)
    },
    signOut (context) {
      context.commit('signOut')
    }
  },
})
