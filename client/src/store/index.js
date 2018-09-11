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
    },

    getTotal(state){
       return state.cart.reduce( (total, item) => total + parseInt(item.price * item.quantity), 0);
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
      const product = state.cart.find(item => item._id === payload._id);

      if (typeof product !== 'undefined'){
        product.quantity++;
      }else{
        payload.quantity = 1;
        state.cart.push(payload);
      }
    },

    removeFromCart(state, payload) {
      state.cart.splice(payload, 1);
    }
  }
});
