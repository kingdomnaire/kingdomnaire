<template>
  <div class="bg-gray-100 grid w-1/4 ml-100 -mt-20 justify-center h-32 rounded-xl shadow-2xl">
    <h4 class="text-green-900 font-bold">Question Category</h4>
    <button
      :class="['bg-green-600 mb-1 text-gray-100 rounded hover:bg-green-700', { 'bg-gray-800 hover:bg-slate-950': activeButton === 'easy' }]"
      type="button"
      @click="setActiveButton('easy')"
    >
      EASY
    </button>

    <button
      :class="['bg-green-600 mb-1 text-gray-100 rounded hover:bg-green-700', { 'bg-gray-800': activeButton === 'hard' }]"
      type="button"
      @click="setActiveButton('hard')"
    >
      HARD
    </button>

    <button
      :class="['bg-green-600 mb-1 text-gray-100 rounded hover:bg-green-700', { 'bg-gray-800': activeButton === 'extreme' }]"
      type="button"
      @click="setActiveButton('extreme')"
    >
      EXTREME
    </button>
  </div>
</template>

<script>
export default {
  name: 'QuestionCategory',
  data() {
    return {
      activeButton: '', // Holds the active button value
    };
  },
  methods: {
    setActiveButton(category) {
      this.activeButton = category;
    },
  },
};
</script>
