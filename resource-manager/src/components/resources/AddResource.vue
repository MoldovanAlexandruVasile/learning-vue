<template>
  <teleport to="body">
    <base-dialog
      v-if="invalidInput"
      title="Invalid Input"
      @close="dismissDialog"
    >
      <template #default>
        <p>Something went wrong. All information is required.</p>
        <p>Please check all inputs and make sure they are correctly filled .</p>
      </template>
      <template #actions>
        <base-button @click="dismissDialog">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="handleSubmit">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" v-model="title" />
        </div>
        <div class="form-control">
          <label for="title">Description</label>
          <textarea
            id="title"
            name="description"
            type="text"
            rows="4"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="url" v-model="link" />
        </div>
        <div>
          <base-button type="submit">Submit</base-button>
        </div>
      </form>
    </base-card>
  </teleport>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      invalidInput: false,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.name || !this.description || !this.link) {
        this.invalidInput = true;
        return;
      }

      const resource = {
        id: new Date().toISOString(),
        name: this.title,
        description: this.description,
        link: this.link,
      };
      this.addResource(resource);
    },
    dismissDialog() {
      this.invalidInput = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
