import { createStore } from 'vuex';
import cart from './cart/index';
import auth from './auth/index';
import products from './products/index';

export default createStore({
  modules: {
    cart,
    auth,
    products,
  },
});
