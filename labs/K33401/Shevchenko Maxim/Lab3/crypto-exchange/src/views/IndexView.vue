<template>
  <main class="text-main">
    <section class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="container text-center py-4">
        <div class="row d-flex align-items-center justify-content-center py-vh-5">
          <div class="col-12 col-xl-10">
            <h1 class="display-huge mt-3 mb-3 lh-1">Добро пожаловать на нашу криптовалютную биржу!</h1>
          </div>
          <div class="col-12 col-xl-8">
            <p class="lead text-secondary">Тут вы можете безопасно и удобно покупать, продавать и обменивать
              свои любимые криптовалюты. Мы предлагаем широкий спектр цифровых активов, конкурентоспособные
              обменные курсы и удобную платформу, чтобы лишить вашу торговлю проблем. Независимо от того,
              являетесь ли вы новичком в мире криптовалют или опытным трейдером, мы здесь, чтобы поддержать
              вас на каждом этапе пути!</p>
          </div>
          <div class="col-12 text-center">
            <router-link to="/profile" class="btn btn-xl button-main">Начать
              <svg class="arrow">
                <use xlink:href="../assets/sprite.svg#right-arrow"></use>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>

  <CoinMarket/>
</template>

<script>
import CoinMarket from "../components/CoinMarket.vue";

export default {
  name: "IndexView",
  components: {
    CoinMarket
  }
}
</script>
