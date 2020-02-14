<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <ul>
        <li v-for="person in persons" :key="person">{{ person }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "persons"]
};
</script>
