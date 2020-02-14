<template>
  <div>
    <h3>Ürünler ({{ products.length }})</h3>
    <ul class="list-group w-75">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        :action="action"
        @productButtonEvent="$emit('productButtonEvent', $event)"
      />
    </ul>
  </div>
</template>

<script>
import Product from "@/components/Product";
export default {
  components: {
    ProductItem: Product
  },
  props: ["products", "action"]
};
</script>

<style>
img {
  height: 50px;
}
</style>
