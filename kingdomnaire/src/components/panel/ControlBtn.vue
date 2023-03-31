<template>
    <div>
        <div class="d-grid d-md-block mb-2">
            <button class="btn btn-primary btWit" type="button">New Guest</button>
            <button class="btn btn-primary" type="button">Walk Away</button>
        </div>
        <div class="d-grid d-md-block mb-2">
            <button class="btn btn-primary btWit" type="button">Quit Game</button>
            <button class="btn btn-primary" type="button">Reveal Ans</button>
        </div>
        <button class=" btn btn-primary genBtn" type="button">Generate New Question</button>
    </div>
</template>

<script>
export default{
    name: 'ControlBtn',
}
</script>

<style>

.btWit{
    margin-right: 10px;
}

.genBtn{
    padding: 4%;
}

</style>