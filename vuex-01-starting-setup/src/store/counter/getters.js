export default {
  doubledCounter(state) {
    return state.counter * 2;
  },
  zeroToOneHundredCounter(_, getters) {
    const finalCounter = getters.doubledCounter;
    if (finalCounter < 0) {
      return 0;
    }

    if (finalCounter > 100) {
      return 100;
    }

    return finalCounter;
  },
};
