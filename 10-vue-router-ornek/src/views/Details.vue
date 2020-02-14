<template>
  <div class="container">
    <h4>Details PAge</h4>
    Gelen ID Bilgisi {{ $route.params.id }}
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("$route.params.id", this.$route.params.id);
  }
};
</script>
