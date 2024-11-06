<template>
  <base-container v-if="isAuthenticated" title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <button @click="incrementByCustomAction({ value: 10 })">Add 10</button>
    <ChangeCounter />
  </base-container>

  <base-container title="Auth">
    <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import { mapActions, mapGetters } from 'vuex';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    addOne() {
      // this.$store.commit('incrementByCustom', { value: 10 });
      // this.$store.commit({ type: 'incrementByCustom', value: 10 });
      // this.$store.dispatch(`incrementByCustomAction`, { value: 10 });
      this.$store.dispatch({
        type: 'counter/incrementByCustomAction',
        value: 10,
      });
    },
    ...mapActions('counter', ['incrementByCustomAction']),
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
