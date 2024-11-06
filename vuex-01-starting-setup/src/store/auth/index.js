import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const authModule = {
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

export default authModule;
