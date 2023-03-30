<script>
export default{
    name: 'QuestionBox',
}
</script>

<template>
<div style="width: 60%;">
    <div class="form-floating shadow p-4 mt-2 mb-2 bg-white rounded">
        <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="">
        <label for="floatingPlaintextInput">Question Box</label>
    </div>
</div>
<div>
    <div class="d-inline-flex" style="width: 60%;">
        <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded btWit">
            <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="">
            <label for="floatingPlaintextInput">A:</label>
        </div>
        <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded">
            <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="">
            <label for="floatingPlaintextInput">B:</label>
        </div>
    </div>
</div>
<div>
    <div class="d-inline-flex" style="width: 60%;">
        <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded btWit">
            <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="" value="">
            <label for="floatingPlaintextInput">C:</label>
        </div>
        <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded">
            <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="" value="">
            <label for="floatingPlaintextInput">D:</label>
        </div>
    </div>
</div>



</template>

<style>
    .btWit{
    margin-right: 10px;
}
</style>