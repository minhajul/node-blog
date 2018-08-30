export const shop = {
  state: {
    cart: []
  },

  getters: {
    getCart(state) {
      return state.cart;
    }
  },

  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload);
    },

    removeFromCart(state, payload) {
      state.cart.splice(payload, 1);
    }
  }
};
