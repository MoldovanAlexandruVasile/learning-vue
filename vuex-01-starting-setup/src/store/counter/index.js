import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  actions,
  mutations,
  getters,
};

export default counterModule;
