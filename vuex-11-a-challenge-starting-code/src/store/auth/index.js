import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      authenticated: false,
    };
  },
  actions,
  mutations,
  getters,
};
