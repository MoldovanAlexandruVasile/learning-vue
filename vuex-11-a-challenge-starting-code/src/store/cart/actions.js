export default {
  addProductToCartAction(context, payload) {
    context.commit('addProductToCart', payload);
  },

  removeProductFromCartAction(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
