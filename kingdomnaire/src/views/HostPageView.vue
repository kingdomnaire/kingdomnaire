<template>
  <div class="bg-blue-950 h-screen">
    <div class=" text-gray-100 ml-3 font-bold text-xl text-center">Host panel</div>
  
  
        <div class="grid gap-2 max-sm:grid-cols-2 font-bold text-xl text-gray-100 float-right mr-48 mt-20
        max-sm:float-none max-sm:mr-0 max-sm:ml-10 max-sm:mt-10 sm:mr-14 sm:mt-8 sm:text-lg sm:gap-1">
          <div
            v-for="(price, index) in getPrices"
            :key="index"
            :class="{ stone: price.value == getCurrentPrice }"
            :style="{ 'background-color': price.color }"
            class="w-full sm:w-auto sm:float-none sm:mr-0 sm:mt-2"
          >
            {{ price.label }}
          </div>
      </div>
    
      <div class="mt-72 w-3/5 float-right max-sm:float-none max-sm:ml-0 max-sm:mt-4 max-sm:w-full max-sm:bg-blue-950
      max-md:float-none max-md:mt-14 max-md:ml-8 ">
        <div class="col-span-full mb-4 ml-10 w-full max-sm:w-5/6 max-md:w-full max-md:ml-0 max-sm:ml-9">
          <div class="mt-1">
            <textarea id="about" name="about" rows="3" 
            class="w-4/5 drop-shadow-2xl rounded-xl border-0 py-1.5 
            text-blue-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-md:text-sm sm:leading-6 
            pointer-events-none max-sm:w-full"></textarea>
          </div>
        </div>
        <div class="mt-3 grid grid-cols-6 gap-y-2 max-md:grid-cols-1 sm:ml-2 max-sm:mx-4">
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" value="A:" 
              class="pl-3 w-4/5 h-20 ml-5 rounded-full border-0 py-1.5 text-blue-800 shadow-sm ring-1 ring-inset 
              ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
              sm:text-sm sm:leading-6 pointer-events-none font-bold max-sm:h-16 max-sm:w-full max-sm:ml-0 
              max-md:w-full max-md:ml-0 max-md:h-14">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" value="B:" 
              class="pl-3 w-4/5 h-20 -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 text-blue-800 shadow-sm 
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none font-bold
              max-sm:h-16 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">
            </div>
          </div>
  
          <div class="sm:col-span-3 ">
            <div class="mt-1">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" value="C:" 
              class="pl-3 w-4/5 h-20 ml-5 rounded-full border-0 py-1.5 text-blue-800 shadow-sm ring-1 
              ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
              focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none font-bold max-sm:h-16
              max-sm:ml-0 max-sm:w-full max-md:w-full max-md:h-14 max-md:ml-0">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <div class="mt-1">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" value="D:" 
              class="pl-3 w-4/5 h-20 -ml-8 max-sm:ml-0 rounded-full border-0 py-1.5 shadow-sm ring-1 
              ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
              focus:ring-indigo-600 sm:text-sm sm:leading-6 pointer-events-none font-bold max-sm:mb-10 
              max-sm:w-full max-sm:h-16 text-blue-800 max-md:w-full max-md:h-14 max-md:ml-0">
            </div>
          </div>
        </div>
    </div>
    <div class="z-[9999] mt-20">
          <GameRules />
      </div>
  </div>
  </template>
  
<script>
  import GameRules from '@/components/GameRules.vue';
import { mapGetters, mapActions } from 'vuex';
  
  
  export default {
    name: "HostPageView",
    computed: {
        ...mapGetters("price", ["getCurrentPrice", "getPrices"])
    },
    methods: {
        ...mapActions("price", ["moveUp", "moveDown"]),
    },
    components: { GameRules }
};
  </script>