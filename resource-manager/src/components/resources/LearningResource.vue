<template>
  <li>
    <base-card>
      <div>
        <header>
          <h3>{{ resource.name }}</h3>
          <base-button @click="this.deleteResource(resource.id)" mode="flat"
            >Delete</base-button
          >
        </header>
      </div>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link">View Resources</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ['deleteResource'],
  props: {
    resource: {
      required: true,
      type: {
        id: String,
        name: String,
        description: String,
        link: String,
      },
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
