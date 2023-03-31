<script setup>
import NavMenu from './panel/NavMenu.vue'

</script>

<template>
  <div class=" w-100  shadow-lg p-3 mb-3 bg-info rounded colMain">
    <NavMenu/>
  </div>
</template>

<style scoped>
.colMain{
  margin-left: -10px;
  margin-top: 10%;
}


@media (min-width: 1024px) {
  .greetings h1,
  .my-column h3 {
    text-align: left;
  }
}
</style>
