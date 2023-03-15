<template>
  <main class="container-fluid background-main">
    <section class="pt-5 pb-5 row row-cols-2 justify-content-center">
      <div class="d-flex flex-column">
        <div class="pb-5" style="margin-top: 50px;">
          <h1 class="h2 p-0 mb-4 text-color">Who created the event</h1>
          <p class="p-0 m-0 text-color">Date of creation</p>
        </div>
        <div class="">
          <h2 class="text-color">Event information</h2>
          <p class="text-color">This event will be held at this time in this place there will be so-and-so</p>
        </div>
      </div>
      <img class="w-25 text-color" src="../assets/image/whoIAm.png" alt="???">
    </section>
  </main>
</template>

<script>
export default {
	name: 'EventBlock'
}
</script>
