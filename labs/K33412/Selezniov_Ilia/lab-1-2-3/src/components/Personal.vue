<template>
  <main class="container-fluid background-main">
    <section class="pt-5 pb-5">
      <div class="d-flex flex-column align-items-center pt-5 pb-5">
        <div class="d-flex flex-column align-items-center">
          <h1 class="h2 p-0 mb-2 text-color">Ваш личный кабинет</h1>
          <div class="row justify-content-center pt-5 pb-5">
            </div>
          </div>
        </div>
        <div class="row justify-content-center" id="container">
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

export default {
  name: 'PersonalBlock',
}
</script>