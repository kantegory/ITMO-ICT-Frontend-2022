<template>
  <div class="coin-wrapper w-100" style="display: block; height: 450px; overflow-y: scroll">
    <div style="display: flex; height: 50px; margin-bottom: 10px"
         v-for="coin in coins" :key="coin.id">
      <div class="dlogo-item p-0" style="display: flex; width: 25%; align-items: center">
        <img :src="coin.image" alt="" style="width: 30px; height: 30px; margin-right: 15px" class="rounded-circle"/>
        <div class="">
          <p class="fw-bold m-0">{{ coin.name }}</p>
          <p class="text-muted m-0">{{ coin.symbol }}</p>
        </div>
      </div>
      <div class="d-flex align-items-center" style="width: 15%;">
        <p class="fw-normal mb-0">RUB {{ coin.current_price }}</p>
      </div>
      <div class="amount d-flex align-items-center" style="width: 15%;">
        {{ coin.amount }}
      </div>
      <div class="d-flex align-items-center" style="width: 20%;">
        <span class="total">
          RUB {{ (coin.current_price * coin.amount).toFixed(2) }}
        </span>
      </div>
      <div class="btn-wrap" style="display: flex; justify-content: space-around; width: 25%">
        <div class="d-flex justify-content-center w-50">
          <button type="button" class="btn btn-primary btn-link rounded-pill text-white text-decoration-none"
                  style="color: var(--text-color) !important;" value="${symbol}" @click="buyEvent(coin.id)">
            Купить
          </button>
        </div>
        <div class="d-flex justify-content-center w-50">
          <button type="button" class="btn btn-danger btn-link rounded-pill text-white text-decoration-none"
                  style="color: var(--text-color) !important;" value="${symbol}"
                  @click="sellEvent(coin.id, coin.amount)">
            Продать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    coins: {
      type: Array,
      required: true,
    }
  },
  emits: ['buyEvent', 'sellEvent'],
  data() {
    return {
      coin: {
        id: Number,
        name: String,
        symbol: String,
        image: String,
        current_price: Number,
        amount: Number,
      }
    }
  },
  methods: {
    buyEvent(id) {
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
    },
    sellEvent(id, currentAmount) {
      let amount;
      while (true) {
        amount = prompt("Сколько хотите продать?")
        if (!amount) {
          break
        } else if (isNaN(amount)) {
          alert("Количество должно быть числом")
        } else if (amount <= 0) {
          alert("Количество должно быть положительным")
        } else if (amount > currentAmount) {
          alert("У вас нет столько")
        } else if (amount == currentAmount) {
          if (confirm("Хотите продать все?")) {
            this.$emit('sellEvent', id, parseFloat(amount))
            break;
          }
        } else {
          this.$emit('sellEvent', id, parseFloat(amount))
          break;
        }
      }
    }
  },

}
</script>

<style>
.btn-primary:hover {
  color: white !important;
  border-radius: 3px;
  box-shadow: 0 0 5px blue,
  0 0 25px blue,
  0 0 50px blue,
  0 0 100px blue;
}

.btn-danger:hover {
  border-radius: 5px;
  box-shadow: 0 0 5px red,
  0 0 25px red,
  0 0 50px red,
  0 0 100px red;
}
</style>