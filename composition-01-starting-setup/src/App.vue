<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2> -->
    <!-- <h3>{{ age }}</h3> -->
    <!-- <h2>{{ user.name }}</h2> -->
    <!-- <h3>{{ user.age }}</h3> -->
    <UserData :name="user.name" :age="user.age" />
  </section>
  <section class="container">
    <UserData :name="secondUser.name" :age="secondUser.age" />
  </section>
  <section class="container">
    <button @click="setAge">Increase Ages</button>
  </section>

  <section class="container">
    <h2>{{ completeName }}</h2>
    <!-- <input type="text" placeholder="First Name" @input="setFirstName" /> -->
    <!-- <input type="text" placeholder="Last Name" @input="setLastName" /> -->
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </section>

  <section class="container">
    <h2>{{ userNameFromInput }}</h2>
    <input type="text" placeholder="User Name" ref="userNameInput" />
    <button @click="setUserNameRefValue">Set Name</button>
  </section>
</template>

<!-- Options API -->
<!-- <script>
export default {
  data() {
    return {
      userName: 'Alexandru',
      age: 26
    };
  },
  methods: {
    setNewAge() {
      this.age = 27
    }
  }
    watch(){
      age(val){
        console.log(val); 
      }
    }
};
</script> -->

<!-- Composition API -->
<script setup>
import { ref, reactive, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

// const userName = ref('Alex');
// const age = ref(26);
// works with any kind of data
const user = ref({
  name: 'Alex',
  age: 26,
});

// works only with objects
const secondUser = reactive({
  name: 'Andrei',
  age: 25,
});

const setAge = () => {
  user.value.age += 1;
  secondUser.age += 1;
};

// setTimeout(() => {
//   // userName.value = 'Alexandru';
//   // age.value = 27;

//   // both of aboe works
//   // user.value = { name: 'Alexandru', age: 27 };
//   user.value.name = 'Alexandru';
//   user.value.age = 27;

//   secondUser.name = 'Cristian';
//   secondUser.age = 30;
// }, 2000);

const firstName = ref('');
const lastName = ref('');

// with v-model not needed. used in @input=...
// const setFirstName = (event) => {
//   firstName.value = event.target.value;
// };
// const setLastName = (event) => {
//   lastName.value = event.target.value;
// };

const completeName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

watch(firstName, function (newFirstName, oldFirstName) {
  console.log(oldFirstName, newFirstName);
});
watch([firstName, lastName], function (newNames, oldNames) {
  console.log(oldNames[0], newNames[0]);
  console.log(oldNames[1], newNames[1]);
});

const userNameInput = ref(null);
const userNameFromInput = ref('');

const setUserNameRefValue = () => {
  userNameFromInput.value = userNameInput.value.value;
};

provide('secondUserAge', secondUser.age);
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
