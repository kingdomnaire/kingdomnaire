<template>
    <div class="mt-10">
      <div class="bg-gray-100 hover:bg-gray-300 text-blue-950 cursor-pointer text-bold 
      w-24 ml-40 text-center rounded" @click="toggleGameRule">Messages</div>
  
      <transition name="fade">
        <div v-if="showGameRule" class="modal-overlay">
          <div class="modal-content">
            <h3 class="text-center text-xl font-bold my-4">Chat Here</h3>
            <div class="h-1/2 overflow-y-auto font-bold pb-5">
              <div>
                
              </div>
            </div>
            <button class="modal-close" @click="toggleGameRule">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GameRules',
    data() {
      return {
        showGameRule: false
      };
    },
    methods: {
      toggleGameRule() {
        this.showGameRule = !this.showGameRule;
      }
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    width: 60%;
    max-width: 500px;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: start;
  }
  
  .modal-close {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #f3f3f3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .modal-close:hover {
    background-color: #e5e5e5;
  }
  </style>
  