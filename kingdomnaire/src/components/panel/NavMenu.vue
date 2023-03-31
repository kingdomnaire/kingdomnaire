<script>
import FirstButton from './FirstButton.vue';
import QuestionBox from './QuestionBox.vue';
import GameMeter from './GameMeter.vue';
import LifeLine from './LifeLine.vue';
import ControlBtn from './ControlBtn.vue';
import AnswerBtn from './AnswerBtn.vue';
import AddQuestion from './AddQuestion.vue';

export default {
    name: 'NavMenu',
    components: {
    FirstButton,
    QuestionBox,
    GameMeter,
    LifeLine,
    ControlBtn,
    AnswerBtn,
    AddQuestion
}
}
</script>


<template>
    <div>
        <nav>
  <div class="nav nav-tabs textCol" id="nav-tab" role="tablist">
    <button class="nav-link active " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Main</button>
    <button class="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add question</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">About game</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>About developer</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
    <h1 class="text-light">Control panel</h1>
    <FirstButton/>
    <QuestionBox/>
    <GameMeter/>
    <LifeLine/>
    <ControlBtn/>
    <AnswerBtn msg="jesus"/>
</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
    <AddQuestion/>
</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
    ...
</div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
</div>
</template>

<style>
  
</style>