export default {
  items(state) {
    return state.items;
  },
  cartTotal(state) {
    return state.total.toFixed(2);
  },
  cartQuantity(state) {
    return state.qty;
  },
  totalPrice(state) {
    return (state.price * state.qty).toFixed(2);
  },
};
