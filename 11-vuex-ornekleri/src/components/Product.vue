<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center mb-2"
  >
    <div class="d-flex justify-content-start align-items-center">
      <img :src="'./images/' + product.picture" class="mr-2" />
      <div>
        <p class="m-0">
          {{ product.title }}
          <small class="text-success">({{ product.price }})</small>
        </p>
      </div>
    </div>
    <button
      :class="{
        'btn-danger': action === 'delete',
        'btn-light': action === 'add'
      }"
      class="btn btn-sm"
      @click="$store.dispatch('productAction', { product, action })"
    >
      {{ action === "add" ? "Ekle" : "Sil" }}
    </button>
  </li>
</template>
<script>
export default {
  props: ["product", "action"]
};
</script>
