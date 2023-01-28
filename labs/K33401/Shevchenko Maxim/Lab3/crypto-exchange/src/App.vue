<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-main border-bottom" tabindex="0">
      <div class="container d-flex justify-content-center">
        <router-link to="/" class="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center">
          <svg class="icon">
            <use xlink:href="../src/assets/sprite.svg#icon"></use>
          </svg>
          <span class="ms-md-1 mt-1 fw-bolder me-md-5">CryptoExchange</span>
        </router-link>

        <ul class="navbar-nav mx-auto list-group col-12 col-md-auto list-group-horizontal justify-content-center">
        </ul>

        <router-link to="/profile" class="btn button-outline">
          <small>Профиль</small>
        </router-link>
      </div>
    </nav>
  </header>

  <RouterView/>

  <footer class="border-top">
    <div class="container text-main d-flex justify-content-center py-3">
      <p class="px-3">support@company.com</p>
      <p class="px-3">(123) 456-7890</p>
    </div>
  </footer>
</template>
