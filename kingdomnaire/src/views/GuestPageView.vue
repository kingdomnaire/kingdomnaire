<template>
  <div class="bg-blue-950 h-screen">
    <div class=" text-gray-100 ml-3 font-bold text-xl text-center">Guest panel</div>


    <div class="grid gap-2 font-bold text-xl text-gray-100 float-right mr-48 mt-20">
      <div
          v-for="(price, index) in getPrices"
          :key="index"
          :class="{ stone: price.value == getCurrentPrice }"
          :style="{ 'background-color': price.color }"
        >
          {{ price.label }}
      </div>
    </div>
  
<div class="mt-72">
  <div class="col-span-full mb-4 ml-32">
    <div class="mt-1">
      <textarea id="about" name="about" rows="3" 
      class="w-4/6 drop-shadow-2xl rounded-xl border-0 py-1.5 
      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
      focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 
      pointer-events-none"></textarea>
    </div>
  </div>
  <div class="mt-3 grid grid-cols-1 gap-y-2 sm:grid-cols-6 sm:ml-20">
    <div class="sm:col-span-3">
      <div class="mt-1">
        <input type="text" name="first-name" id="first-name" autocomplete="given-name" value="A:" 
        class="pl-3 w-4/5 h-20 ml-5 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
        sm:text-sm sm:leading-6 pointer-events-none">
      </div>
    </div>

    <div class="sm:col-span-3">
      <div class="mt-1">
        <input type="text" name="last-name" id="last-name" autocomplete="family-name" value="B:" 
        class="pl-3 w-4/5 h-20 -ml-8 rounded-full border-0 py-1.5 text-gray-900 shadow-sm 
        ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
        focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
      </div>
    </div>

    <div class="sm:col-span-3">
      <div class="mt-1">
        <input type="text" name="first-name" id="first-name" autocomplete="given-name" value="C:" 
        class="pl-3 w-4/5 h-20 ml-5 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 
        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
        focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
      </div>
    </div>

    <div class="sm:col-span-3">
      <div class="mt-1">
        <input type="text" name="last-name" id="last-name" autocomplete="family-name" value="D:" 
        class="pl-3 w-4/5 h-20 -ml-8 rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 
        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
        focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none">
      </div>
    </div>
  </div>
</div>

  
  </div>
</template>
    
    <script>
    import { mapGetters, mapActions } from 'vuex';
    
    
    export default {
      name: 'HostPageView',
    
      computed:{
        ...mapGetters('price', ['getCurrentPrice', 'getPrices'])
      },
      methods: {
        ...mapActions('price', ['moveUp', 'moveDown']),
      },
    };
    </script>
    
    <style>
    
    </style>