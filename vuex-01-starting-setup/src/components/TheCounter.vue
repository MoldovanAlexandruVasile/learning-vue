<template>
  <h3>{{ doubledCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.doubledCounter;
    // },
    ...mapGetters('counter', ['doubledCounter']),
  },
};
</script>
