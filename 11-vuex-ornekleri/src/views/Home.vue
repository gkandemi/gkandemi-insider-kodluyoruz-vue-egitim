<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <Products :products="$store.state.products" action="add" />
      </div>
      <div class="col-6">
        <Products :products="$store.state.sold_products" action="delete" />
      </div>
    </div>
    {{ this.$store.getters.getPersonList }}
  </div>
</template>
<script>
import Products from "@/components/Products";
export default {
  components: {
    Products
  },
  data() {
    return {};
  },
  created() {
    // // console.log("Products", this.$store.state.products);
    // // console.log("Products s", this.$store.state.sold_products);
    // // this.$store.commit("setPerson", "Defne Kandemir");
    // this.$store.dispatch("setPerson", "Defne Kandemir");
    // console.log("Products s", this.$store.getters.getPersonList);
  }
};
</script>
