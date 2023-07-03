<template>
    <div class="container h-[80vh] drop-shadow-md rounded-md mt-8 mr-20 pt-14 px-8 bg-blue-600 md:w-3/4 flex-wrap flex flex-col justify-center items-center">
  
      <div class="-mt-60">
        <h3 class="text-center text-xl font-bold my-4">Chat Here</h3>
        <div class="h-2/3 w-4/5  overflow-y-auto font-bold pb-5" :class="{ 'overflow-y-scroll': messages.length > 6 }">
          <div class="items-center justify-center float-right">
            <!-- Display messages here -->
            <div v-for="(message, index) in messages" :key="index" class="mb-2 items-center justify-center">
              {{ message }}
              <span @click="removeMessage(index)" class="text-red-500 cursor-pointer ml-2 hover:bg-gray-400 px-1 rounded-full">
                X
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <input v-model="newMessage" type="text" placeholder="Type your message" class="border border-blue-700 h-8 mr-2 text-blue-800 px-3">
          <button @click="addMessage" class="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageCon',
  
    data() {
      return {
        newMessage: '',
        messages: [],
      };
    },
    methods: {
      addMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push(this.newMessage);
          this.newMessage = '';
        }
      },
      removeMessage(index) {
        this.messages.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  </style>
  