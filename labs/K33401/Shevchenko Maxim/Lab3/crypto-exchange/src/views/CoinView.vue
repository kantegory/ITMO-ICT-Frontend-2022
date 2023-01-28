<template>
  <main class="text-main">
    <section class="min-vh-100">
      <div class="container py-5">

        <div class="row row-cols-2">
          <div class="col-12 pb-3">
            <CoinChart :coinlib_id="coin.coinlib_id"/>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <TransactionButtons :coin="coin"/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CoinChart from "../components/CoinChart.vue";
import TransactionButtons from "../components/TransactionButtons.vue";

export default {
  name: "CoinView",
  data() {
    return {
      coin: ""
    }
  },
  components: {
    TransactionButtons,
    CoinChart
  },
  created() {
    this.loadCoin(this.$route.params.id)
  },
  methods: {
    loadCoin(id) {
      this.axios
          .get(`http://127.0.0.1:8000/coins/${id}/`)
          .then((response) => {
            this.coin = response.data
          })
    }
  }
}
</script>
