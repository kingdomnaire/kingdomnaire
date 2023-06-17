<template>
  <div class="container shadow-md rounded-md mt-14 ml-40 pt-14 px-8 bg-blue-600 w-full md:w-1/2 h-full flex-wrap flex flex-col justify-center">
    <FirstButton/>
    <QuestionBox/>
    <div class="grid grid-cols-3 w-full sm:grid-cols-6 gap-4">
      <div class="sm:col-span-3">
        <ControlBtn/>
      </div>
      <div class="sm:col-span-3 justify-center">
        <AnswerBtn />
      </div>
      <div class="sm:col-span-3">
        <LifeLine/>
      </div>
    </div>
    <GameMeter/>
  </div>
</template>

<script>
import AnswerBtn from './panel/AnswerBtn.vue';
import ControlBtn from './panel/ControlBtn.vue';
import FirstButton from './panel/FirstButton.vue';
import GameMeter from './panel/GameMeter.vue';
import LifeLine from './panel/LifeLine.vue';
import QuestionBox from './panel/QuestionBox.vue';

export default{
    components: {
    FirstButton,
    QuestionBox,
    AnswerBtn,
    ControlBtn,
    LifeLine,
    GameMeter
}
};


</script>

<style scoped>
</style>
