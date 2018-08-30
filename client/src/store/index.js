import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    user: null,
    token: null,
    isUserLoggedIn: false,
    cart: []
  },

  getters: {
    getCart(state) {
      return state.cart;
    }
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    setUser(state, user) {
      state.user = user;

      state.isUserLoggedIn = !!user;
    },

    addToCart(state, payload) {
      state.cart.push(payload);
    },

    removeFromCart(state, payload) {
      state.cart.splice(payload, 1);
    }
  }
});
