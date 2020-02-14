<template>
  <div>
    <h3>Contact Page</h3>
    <input type="text" v-model="id" />
    <button @click="goToDetail">Detay Sayfasi</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: null
    };
  },
  methods: {
    goToDetail() {
      this.$router.push("/details/" + this.id);
    }
  }
};
</script>
