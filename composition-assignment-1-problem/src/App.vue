<template>
  <h2>My Course Goal</h2>

  <!-- Separate Refs -->
  <h3 v-if="isGoalVisible">{{ courseGoal }}</h3>
  <h3 v-else>Nothing to see here. Walk away</h3>
  <button @click="toggleGoalVisibilitySeparateRef">Toggle Goal</button>

  <!-- Ref Object -->
  <h3 v-if="course.visible">{{ course.goal }}</h3>
  <h3 v-else>Nothing to see here. Walk away</h3>
  <button @click="toggleGoalVisibilityRefObject">Toggle Goal</button>

  <!-- Reactive Object -->
  <h3 v-if="courseReactive.visible">{{ courseReactive.goal }}</h3>
  <h3 v-else>Nothing to see here. Walk away</h3>
  <button @click="toggleGoalVisibilityReactiveObject">Toggle Goal</button>

  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref, reactive } from 'vue';

// Separate Refs
const courseGoal = ref('Master Vue');
const isGoalVisible = ref(true);

const toggleGoalVisibilitySeparateRef = () => {
  isGoalVisible.value = !isGoalVisible.value;
};

// Ref Object
const course = ref({
  goal: 'Master Vue',
  visible: true,
});

const toggleGoalVisibilityRefObject = () => {
  course.value.visible = !course.value.visible;
};

// Reactive Object
const courseReactive = reactive({
  goal: 'Master Vue',
  visible: true,
});

const toggleGoalVisibilityReactiveObject = () => {
  courseReactive.visible = !courseReactive.visible;
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
