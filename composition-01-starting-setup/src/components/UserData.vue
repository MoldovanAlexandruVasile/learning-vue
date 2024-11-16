<template>
  <h2>{{ userData }}</h2>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['name', 'age'],
  setup(props, context) {
    console.log(context);

    const secondUserAge = inject('secondUserAge');
    console.log(secondUserAge);

    const userData = computed(function () {
      return props.name + ' - ' + props.age;
    });

    onBeforeMount(function () {
      console.log('onBeforeMount');
    });
    onMounted(function () {
      console.log('onMounted');
    });
    onBeforeUpdate(function () {
      console.log('onBeforeUpdate');
    });
    onUpdated(function () {
      console.log('onUpdated');
    });
    onBeforeUnmount(function () {
      console.log('onBeforeUnmount');
    });
    onUnmounted(function () {
      console.log('onUnmounted');
    });

    return { userData };
  },
  //   computed: {
  //     userData() {
  //       return this.name + ' - ' + this.age;
  //     },
  //   },
};
</script>
