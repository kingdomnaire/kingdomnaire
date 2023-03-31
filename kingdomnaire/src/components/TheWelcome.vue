<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div >
      <div class="myDiv shadow p-3 mb-2 mt-3 bg-danger rounded  ">
        <h1 class="text-light font-weight-bold">Host panels</h1>

        <div class="QBox">
        <div style="width: 80%;">
              <div class="form-floating shadow  mt-2 mb-1 bg-info rounded">
                  <input type="email" readonly class="form-control-plaintext text-light font-weight-bold" id="floatingPlaintextInput" value=" who was the one who told you to start this project?">
                  
              </div>
        </div>
        <div>
              <div class="d-inline-flex" style="width: 80%;">
                  <div class="form-floating shadow mt-2 mb-1 bg-info rounded btWit">
                      <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="">
                      <label for="floatingPlaintextInput">A:</label>
                  </div>
                  <div class="form-floating shadow p-0 mt-2 mb-1 bg-info rounded">
                      <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="">
                      <label for="floatingPlaintextInput">B:</label>
                  </div>
              </div>
        </div>
          <div>
              <div class="d-inline-flex" style="width: 80%;">
                  <div class="form-floating shadow mt-1 mb-1 bg-info rounded btWit">
                      <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="" value="">
                      <label for="floatingPlaintextInput">C:</label>
                  </div>
                  <div class="form-floating shadow p-0 mt-1 mb-1 bg-info rounded">
                      <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="" value="">
                      <label for="floatingPlaintextInput">D:</label>
                  </div>
              </div>
          </div>
        </div>

        <div class="list-group priceBox">
              <a href="#" class="stone">15  ₦200,000</a>
              <a href="#" class="prizePadding">14  ₦100,000</a>
              <a href="#" class="prizePadding">13  ₦90,000</a>
              <a href="#" class="prizePadding">12  ₦80,000</a>
              <a href="#" class="prizePadding">11  ₦70,000</a>
              <a href="#" class="stone">10  ₦60,000</a>
              <a href="#" class="prizePadding">9   ₦50,000</a>
              <a href="#" class="prizePadding">8   ₦40,000</a>
              <a href="#" class="prizePadding">7   ₦30,000</a>
              <a href="#" class="prizePadding">6   ₦20,000</a>
              <a href="#" class="stone">5   ₦10,000</a>
              <a href="#" class="prizePadding">4   ₦9,000</a>
              <a href="#" class="prizePadding">3   ₦8,000</a>
              <a href="#" class="prizePadding">2   ₦7,000</a>
              <a href="#" class="prizePadding">1   ₦5,000</a>
        </div>

      </div>
  <WelcomeItem />
  </div>
</template>

<style>
.prizePadding{
  color: #fff;
  
}

a:link{
  color: white;
  padding: 0px 1px 0px 10px;
  text-align: left;
  text-decoration: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size:small;
  font-weight: bolder;
}

.stone {
  color:rgba(15, 128, 1, 0.753);
}

.myDiv{
  min-width: 600px;
  min-height: 350px;
  background-image: url(../assets/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;

}

.QBox{
  margin-top: 10%;
  width: 70%;
}

.priceBox{
  width: 30%;
  margin-left: 70%;
  margin-top: -50%;
  background-image: url(../assets/bg.jpg);
  background-position: left;
  background-repeat: no-repeat;
}
</style>