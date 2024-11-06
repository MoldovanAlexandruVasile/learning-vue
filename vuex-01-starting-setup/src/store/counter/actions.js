export default {
  incrementByOneAction(context) {
    setTimeout(() => {
      context.commit({ type: 'incrementByOne' });
    }, 2000);
  },
  incrementByCustomAction(context, payload) {
    //   context.commit('incrementByCustom', payload);
    context.commit({ type: 'incrementByCustom', ...payload });
  },
};
