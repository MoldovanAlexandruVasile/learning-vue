<template>
  <base-card>
    <div>
      <button @click="setSelectedComponent('active-goals')">
        Active Goals
      </button>
      <button @click="setSelectedComponent('manage-goals')">
        Manage Goals
      </button>

      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
import ActiveGoals from "./ActiveGoals.vue";
import ManageGoals from "./ManageGoals.vue";

export default {
  components: { BaseCard, ActiveGoals, ManageGoals },

  data() {
    return {
      selectedComponent: "active-goals",
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
};
</script>
