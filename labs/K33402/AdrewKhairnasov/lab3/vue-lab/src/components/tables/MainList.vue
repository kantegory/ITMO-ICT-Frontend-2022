<template>
  <div class="coin-wrapper w-100" style="display: block; height: 450px; overflow-y: scroll; padding-top: 15px">
    <div class="" style="height: 60px ;display: block; padding: 0"
         v-for="coin in coins">
      <div class="d-flex flex-row justify-¡content-start">
        <div class="d-flex flex-row align-items-center logo-item" style="width: 35%;">
          <img :src="coin.image" alt="" style="width: 30px; height: 30px"
               class="rounded-circle"/>
          <div class="ms-2">
            <p class="fw-bold mb-0">{{ coin.name }}</p>
            <p class="text-muted mb-0">{{ coin.symbol }}</p>
          </div>
        </div>
        <div class="d-flex align-items-center" style="width: 20%">
          <p class="fw-normal mb-0">RUB {{ coin.current_price }}</p>
        </div>
        <div class="d-flex align-items-center" style="width: 15%"
             :class="[coin.price_change_percentage_24h >=0 ? 'text-success' : 'text-danger']">
          {{ coin.price_change_percentage_24h.toFixed(2) }} %
        </div>
        <div class="d-flex align-items-center" style="width: 20%">
          <span class="d-flex align-items-center start-date">{{ formatDate(coin.atl_date) }}</span>
        </div>
        <div class="d-flex align-items-center" style="width: 10%;">
          <button type="button" class="btn btn-link rounded-pill text-white text-decoration-none"
                  style="color: var(--text-color) !important; background: var(--bg-color)"
                  value="${symbol}"
                  @click="buyEvent(coin.id)">
            Купить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import router from "@/router";

export default {
  props: {
    coins: {
      type: Array,
      required: true,
    }
  },
  emits: ['buyEvent'],
  data() {
    return {
      coin: {
        id: Number,
        name: String,
        symbol: String,
        price_change_percentage_24h: Number,
        image: String,
        current_price: Number,
        atl_date: String,
      },
      isPositive: 'text-danger',
    }
  },
  methods: {
    buyEvent(id) {
      if (!localStorage.getItem('pinia_users')) {
        router.push('/');
      } else {
        let amount;
        while (true) {
          amount = prompt("Сколько хотите купить?")
          if (!amount) {
            break
          } else if (isNaN(amount)) {
            alert("Количество должно быть числом")
          } else if (amount <= 0) {
            alert("Количество должно быть положительным")
          } else {
            this.$emit('buyEvent', id, parseFloat(amount))
            break
          }
        }
      }
    },
    formatDate(value) {
      return moment(value).format('DD-MM-YYYY')
    },
  }
}
</script>

<style scoped>
.btn:hover {
  background: var(--button-hover) !important;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}
</style>