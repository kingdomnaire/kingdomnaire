<template>
    <div class="">
      <div class="">
        <ControlPanel/>
      </div>
      <div class="">
        <HostPanel/>
        <GuestPanel/>
      </div>
    </div>
  </template>
  
  <script>
  import ControlPanel from '../components/ControlPanel.vue';
  import HostPanel from '../components/HostPanel.vue';
  import GuestPanel from '../components/GuestPanel.vue';
  
  export default {
    name: 'GameBoardView',
    components: {
      ControlPanel,
      HostPanel,
      GuestPanel
  }
  }
  </script>