<template>
  <button @click="incrementByOneAction">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   //   this.$store.commit('incrementByOne');
    //   this.$store.dispatch('incrementByOneAction');
    // },
    ...mapActions('counter', ['incrementByOneAction']),
  },
};
</script>
