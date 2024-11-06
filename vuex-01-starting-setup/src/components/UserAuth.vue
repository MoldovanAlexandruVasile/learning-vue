<template>
  <button v-if="!isAuthenticated" @click="loginAction">Login</button>
  <button v-else @click="logoutAction">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['loginAction', 'logoutAction']),
  },
};
</script>
