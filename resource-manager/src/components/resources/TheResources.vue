<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResMode"
    >
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResMode"
      >Add Resource
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      resources: [
        {
          id: 'official-guide',
          name: 'Official Guide',
          description: 'The Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          name: 'Google',
          description: 'Learn to google..',
          link: 'https://google.com ',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
      this.resources.unshift(resource);
      this.setSelectedTab('stored-resources');
    },
    deleteResource(id) {
      const index = this.resources.findIndex((resource) => resource.id === id);
      this.resources.splice(index, 1);
    },
  },
};
</script>
