export default {
  incrementByOne(state) {
    state.counter += 1;
  },
  incrementByCustom(state, payload) {
    state.counter += payload.value;
  },
};
