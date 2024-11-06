import { createStore } from 'vuex';
import authModule from './auth';
import counterModule from './counter';

const store = createStore({
  modules: {
    auth: authModule,
    counter: counterModule,
  },
});

export default store;
