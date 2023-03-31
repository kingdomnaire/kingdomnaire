<template>
    <div class="btnDiv2 bg-danger rounded">
        <p class="text-light"> Answer</p>
        <div class="d-grid d-md-block mb-2">
            <button class="btn btn-primary btWit" type="button">A: {{ msg }}</button>
            <button class="btn btn-primary" type="button">B:{{ msg }} </button>
        </div>
        <div class="d-grid d-md-block mb-2">
            <button class="btn btn-primary btWit" type="button">C:{{ msg }} </button>
            <button class="btn btn-primary" type="button">D: {{ msg }} </button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AnswerBtn',
    props: {
        msg: String
    }
}
</script>

<style>
.btnDiv2{
  padding: 10px;
  margin-top: -22%;
  margin-left: 40%;
  margin-right: 27%;
}
</style>