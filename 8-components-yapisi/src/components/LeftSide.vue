<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <input
        type="text"
        class="form-control w-25 mb-2"
        v-model="newPerson"
        @keydown.enter="addNewPerson()"
      />
      <button class="btn btn-sm btn-primary">Gönder</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      newPerson: ""
    };
  },
  methods: {
    addNewPerson() {
      this.$emit("PersonAddEvent", this.newPerson);
    }
  }
};
</script>
