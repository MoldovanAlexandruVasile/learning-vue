<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
import TheHeader from './components/nav/TheHeader.vue';
import { productsList } from './data/productsConstants';

export default {
  components: {
    TheHeader,
  },
  mounted() {
    this.setProductsAction({ products: productsList });
  },
  methods: {
    ...mapActions('products', ['setProductsAction']),
  },
};
</script>

<style>
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
