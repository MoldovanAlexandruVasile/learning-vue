<template>
  <base-card>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :item="goal"></slot>
      </li>
    </ul>
  </base-card>
</template>

<script>
import BaseCard from "./ui/BaseCard.vue";

export default {
  components: { BaseCard },
  data() {
    return {
      goals: ["Learn vue", "Master vue"],
    };
  },
};
</script>
