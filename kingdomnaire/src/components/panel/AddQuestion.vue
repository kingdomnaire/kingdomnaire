<template>
    <div style="width: 60%;">
        <div class="form-floating mb-3 shadow rounded mt-4">
        <input type="email" class="form-control" id="floatingInput" placeholder="Question Box">
        <label for="floatingInput">Question Box</label>
        </div>
    </div>
    <div>
        <div class="d-inline-flex" style="width: 60%;">
            <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded btWit">
                <input type="email" class="form-control" id="floatingInput" placeholder="A:" value="">
                <label for="floatingInput">A:</label>
            </div>
            <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded">
                <input type="email" class="form-control" id="floatingInput" placeholder="B:" value="">
                <label for="floatingInput">B:</label>
            </div>
        </div>
    </div>
    <div>
        <div class="d-inline-flex" style="width: 60%;">
            <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded btWit">
                <input type="email" class="form-control" id="floatingInput" placeholder="C:" value="">
                <label for="floatingInput">C:</label>
            </div>
            <div class="form-floating shadow p-0 mt-2 mb-3 bg-white rounded">
                <input type="email" class="form-control" id="floatingInput" placeholder="D:" value="">
                <label for="floatingInput">D:</label>
            </div>
        </div>
    </div>
    <button class=" btn btn-success genBtn" type="button">Submit</button>
</template>

<script>
export default{
    name: 'AddQuestion'
}
</script>