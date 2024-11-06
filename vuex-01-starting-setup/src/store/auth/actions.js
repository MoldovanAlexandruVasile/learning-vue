export default {
  loginAction(context) {
    context.commit({ type: 'setIsAuthenticated', authenticated: true });
  },
  logoutAction(context) {
    context.commit({ type: 'setIsAuthenticated', authenticated: false });
  },
};
