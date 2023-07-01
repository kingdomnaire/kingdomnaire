<template>
    <div >
  
      <div class="bg-green-300 w-20 h-20 font-bold text-lg flex items-center justify-center rounded-full" @click="showBanIcon()">
        50:50
        <div class="overlay" v-if="showBan">
          <BanIcon/>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    
  }
  
  </style>
  
  <script>
  import BanIcon from '../icon/BanIcon.vue';
  
  export default {
    name: 'LifeLine',
    components: {

      BanIcon
    },
    data() {
      return {
        showBan:false
      };
    },
    methods: {
      showBanIcon() {
        // Reset all showBan values to false
        for (let key in this.showBan) {
          this.showBan[key] = false;
        }
        // Set the clicked icon's value to true
        this.showBan = true;
      }
    }
  };
  </script>
  