<template>
<div class="meterDiv shadow bg-success rounded">
    <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="inputGroup-sizing-sm">Correct</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="inputGroup-sizing-sm">Wrong</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="inputGroup-sizing-sm">Current</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
    </div>

    <div class="input-group input-group-sm mb-1">
        <span class="input-group-text" id="inputGroup-sizing-sm">Drop</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group input-group-sm ">
        <span class="input-group-text" id="inputGroup-sizing-sm">Q-Left</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
    </div>

</div>

</template>

<script>
export default{
    name: 'GameMeter',
}
</script>

<style>
.meterDiv{
    float: right;
  width: 200px;
  padding: 10px;
  margin-top: -350px;
}
</style>