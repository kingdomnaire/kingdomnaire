<template>
    <div class="w-full shadow-md">
        <p class=" text-gray-100 ml-8 mt-4 pl-2">Select Players Answer</p>
        <div class="mt-4 w-1/2 ml-8 h-3/4 grid grid-cols-1 sm:grid-cols-6">
            <div class="grid w-20 col-span-2 sm:col-span-1">
                <button class="bg-rose-900 hover:bg-rose-950 text-white mb-3 py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"> A: </button>
                <button class="bg-rose-900 hover:bg-rose-950 text-white py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"> B: </button>
            </div>
            <div class="grid w-20 col-span-2 sm:col-span-1 ml-16">
                <button class="bg-rose-900 hover:bg-rose-950 text-white mb-3 py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"> C: </button>
                <button class="bg-rose-900 hover:bg-rose-950 text-white py-2 px-1 rounded-xl drop-shadow-md hover:drop-shadow-xl"> D: </button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AnswerBtn',
    data(){
        return{
            ans: 'answers will show here '
        }
    }
}
</script>

<style scoped>
.btnDiv2{
  padding: 5px;
  margin-left: 0%;
  margin-right: 27%;
  margin-top: 30%;
  width: 85vh;
  background-color: rgb(0, 119, 128);
  border-radius: 10px;
  z-index: 9999;
}

.btn {
 position: relative;
 font-size: 10px;
 text-transform: uppercase;
 text-decoration: none;
 display: inline-block;
 padding: 8px 50px;
 margin-left: 5px;
 margin-bottom: 5px;
 border-radius: 1em;
 transition: all .2s;
 border: none;
 font-family: inherit;
 font-weight: 500;
 color: black;
 background-color: white;
}

.btn:hover {
 transform: translateY(-3px);
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
 transform: translateY(-1px);
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
 content: "";
 display: inline-block;
 height: 100%;
 width: 100%;
 border-radius: 100px;
 position: absolute;
 top: 0;
 left: 0;
 z-index: -1;
 transition: all .4s;
}

.btn::after {
 background-color: #fff;
}

.btn:hover::after {
 transform: scaleX(1.4) scaleY(1.6);
 opacity: 0;
}

</style>