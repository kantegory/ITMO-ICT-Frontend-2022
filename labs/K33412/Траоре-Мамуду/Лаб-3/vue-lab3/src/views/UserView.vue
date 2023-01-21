<template>
  <main>
    <div class="d-flex justify-content-center align-items-center">
      <img class="px-3 pt-5 pb-5" src="../assets/images/avatar.png">
      <div class="d-flex flex-column p-3">
        <h1 class="fw-bold pb-2">Traore Mamoudou</h1>
        <h3 class="fw-bold pb-3"> Member since September 2022</h3>
        <div style="color:grey" class="d-flex">
          <ion-icon class="px-1" name="location"></ion-icon>
          <span>St. Petersburg</span>
        </div>
        <div style="color:grey" class="d-flex">
          <ion-icon class="px-1" name="people"></ion-icon>
          <span>Attended 0 Events</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex">
      <div class="pa"></div>
      <div style="width:100%" class="d-flex pa2">
        <div class="d-flex align-items-center">
          <h6 class="b5">1</h6>
          <h6 class="fw-normal">Groups</h6>
        </div>
        <div class="m-3"></div>
        <div class=" d-flex align-items-center">
          <h6 class="b5">3</h6>
          <h6 class="fw-normal">Interests</h6>
        </div>
        <Button text="Edit Profile" classes="ms-auto" />
      </div>
      <div class="pa"></div>
    </div>
    <hr>
    <div class="d-flex">
      <div class="pa"></div>
      <div class="d-flex flex-column pa2">
        <h2 class=" mt-5 mb-3 fw-bold">Groups</h2>
        <div class="container">
          <div class="row row-cols-3">
            <div class="col">
              <div class="d-flex g-box align-items-center i-g">
                <img class="me-3" src="../assets/images/group1.jpg">
                <h5 style="color: black;" class="fw-bold">Piter International </h5>
              </div>
            </div>
            <div class="col">
              <div class="d-flex g-box align-items-center i-g">
                <img class=" me-3" src="../assets/images/group2.jpg">
                <h5 style="color: black;" class="fw-bold">Robonomics network Meetup Group </h5>
              </div>
            </div>
          </div>
        </div>
        <h2 class=" mt-5 mb-3 fw-bold">Interests</h2>
        <div class="d-flex">
          <div class="pe-5"></div>
          <span class="b6 me-2">Photography</span>
          <span class="b6 me-2">Web Design</span>
          <span class="b6 me-2">Python</span>

        </div>
        <div class="my-5"></div>
      </div>
      <div class="pa"></div>
    </div>
  </main>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: "UserView",
  components: {
    Button
  }
}
</script>

<style>
.b5 {
  margin-right: 0.3rem;
  color: white;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  background-color: #00455d;
}

.g-box {
  border-radius: 0.75rem;
  border: 0.1rem solid;
  width: fit-content;
  height: fit-content;
  color: rgb(158, 157, 157);
  padding: 0.5rem;
}

.hiddy {
  margin-left: 0.5rem;
}

@media only screen and (max-width : 600px) {
  .hiddy {
    font-size: 0;
    width: 0;
    margin: 0;
    padding: 0;
  }
}

.b6 {
  margin-right: 0.3rem;
  color: white;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  border-radius: 0.5rem;
  width: fit-content;
  height: fit-content;
  background-color: #0c7ca1;
}
</style>