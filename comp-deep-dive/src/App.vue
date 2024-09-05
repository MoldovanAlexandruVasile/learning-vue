<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <course-goals>
      <template #default="slotProps">{{ slotProps.item }}</template>
    </course-goals>

    <dynamic-component></dynamic-component>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/ui/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import DynamicComponent from "./components/dynamic-components/DynamicComponent.vue";

export default {
  components: { BadgeList, TheHeader, UserInfo, CourseGoals, DynamicComponent },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
