<template>
  <div class="bg-gray-100 grid w-20 ml-120 -mt-32 justify-center h-28 rounded-xl shadow-2xl">
    <h4 class="text-green-900 font-bold">Life Lines</h4>
    <button
      class="bg-green-600 mb-1 text-gray-100 rounded hover:bg-green-700"
      type="button"
      :class="{ 'bg-black text-gray-400': isButtonDisabled('caf') }"
      @click="disableButton('caf')"
      :disabled="isButtonDisabled('caf')"
    >
      CAF
    </button>

    <button
      class="bg-green-600 mb-1 text-gray-100 rounded hover:bg-green-700"
      type="button"
      :class="{ 'bg-black text-gray-400': isButtonDisabled('5050') }"
      @click="disableButton('5050')"
      :disabled="isButtonDisabled('5050')"
    >
      50:50
    </button>

    <button
      class="bg-green-600 mb-1 text-gray-100 rounded hover:bg-green-700"
      type="button"
      :class="{ 'bg-black text-gray-400': isButtonDisabled('ata') }"
      @click="disableButton('ata')"
      :disabled="isButtonDisabled('ata')"
    >
      ATA
    </button>
  </div>
</template>

<script>
export default {
  name: 'LifeLine',
  data() {
    return {
      disabledButtons: [],
    };
  },
  methods: {
    disableButton(buttonName) {
      this.disabledButtons.push(buttonName);
      localStorage.setItem('disabledButtons', JSON.stringify(this.disabledButtons));
    },
    isButtonDisabled(buttonName) {
      return this.disabledButtons.includes(buttonName);
    },
    loadDisabledButtonsFromLocalStorage() {
      const storedButtons = localStorage.getItem('disabledButtons');
      if (storedButtons) {
        this.disabledButtons = JSON.parse(storedButtons);
      }
    },
  },
  mounted() {
    this.loadDisabledButtonsFromLocalStorage();
  },
};
</script>
