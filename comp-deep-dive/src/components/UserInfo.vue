<template>
  <base-card>
    <template v-slot:headerContent>
      <div>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
    </template>
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
import BaseBadge from "./ui/BaseBadge.vue";
import BaseCard from "./ui/BaseCard.vue";

export default {
  components: {
    BaseBadge,
    BaseCard,
  },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
