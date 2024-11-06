<template>
  <h3>{{ zeroToOneHundredCounter }}</h3>
  <p>We do more...</p>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.zeroToOneHundredCounter;
    // },
    ...mapGetters('counter', ['zeroToOneHundredCounter']),
  },
};
</script>
