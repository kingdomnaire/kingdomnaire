<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div >
  <div class="myDiv shadow p-3 mb-2 mt-3 bg-danger rounded  ">
    <h1 class="text-light font-weight-bold">Host panel</h1>

  </div>
  <WelcomeItem />
  </div>
</template>

<style>
.myDiv{
  min-width: 600px;
  min-height: 350px;

}
</style>