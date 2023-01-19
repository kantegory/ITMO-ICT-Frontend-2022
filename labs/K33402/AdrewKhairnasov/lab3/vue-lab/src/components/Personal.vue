<template>
  <section class="dataTable-wrapper justify-content-center" style="color: #03e9f4">
    <div class="table-head">
      <div class="head-row" style="height: 50px; width: 100%; display: flex; align-items: center">
        <div class="fw-normal" style="width: 25%;">Название
        </div>
        <div class="fw-normal" style="width: 15%;">Цена
        </div>
        <div class="fw-normal" style="width: 15%">Количество
        </div>
        <div class="fw-normal" style="width: 20%">Итого
        </div>
        <div class="fw-normal" style="width: 25%"><strong>Баланс:</strong>
          <p class="balance m-0">{{ balance() }}
          </p>
        </div>
      </div>
    </div>
    <wallet :coins="coins" @buy-event="buyCoin" @sell-event="sellCoin"/>
  </section>
</template>

<script>
import Wallet from "@/components/tables/Wallet.vue";
import {mapActions, mapState} from "pinia";
import useCoinsStore from "@/stores/coins";
import useUsersStore from "@/stores/users";

export default {
  components: {
    Wallet
  },
  data() {
    return {
      coins: [],
      sortName: '',
      sortOptions: [
        {value: 'name ASC', name: 'По названию (ASC)'},
        {value: 'name DESC', name: 'По названию (DESC)'},
        {value: 'current_price ASC', name: 'По цене (ASC)'},
        {value: 'current_price DESC', name: 'По цене (DESC)'},
        {value: 'amount ASC', name: 'По количеству (ASC)'},
        {value: 'amount DESC', name: 'По количеству (DESC)'},
      ]
    }
  },
  methods: {
    ...mapActions(useCoinsStore, ['getWalletById', "loadCoins", "loadUserCoins"]),
    ...mapActions(useUsersStore, ['commitChanges']),

    async getCoins() {
      let current = await this.getWalletById(this.user.id);
      const data = await this.loadUserCoins()
      for (let i = 0; i < current.coins.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (current.coins[i].id === data[j].id) {
            this.coins[i] = data[j]
            this.coins[i].amount = current.coins[i].amount
          }
        }
      }
    },

    balance() {
      let res = 0;
      for (let i = 0; i < this.coins.length; i++) {
        res += this.coins[i].amount * this.coins[i].current_price;
      }
      return res.toFixed(2)
    },

    async buyCoin(id, amount) {
      let newCoin = true
      for (let i = 0; i < this.user.coins.length; i++) {
        if (id === this.user.coins[i].id) {
          this.user.coins[i].amount += amount
          newCoin = false
        }
      }

      if (newCoin) {
        this.user.coins.push({id: id, amount: amount})
      }

      await this.commitChanges(this.user);
      await this.getCoins()
    },

    async sellCoin(id, amount) {
      let index;
      for (let i = 0; i < this.user.coins.length; i++) {
        if (id === this.user.coins[i].id) {
          this.user.coins[i].amount -= amount;
          index = i;
        }
      }

      let isDeleted = false;
      if (this.user.coins[index].amount === 0) {
        this.user.coins = this.user.coins.filter(coin => coin.id !== id);
        isDeleted = true;
      }

      await this.commitChanges(this.user);
      await this.getCoins()
      if (isDeleted) {
        location.reload()
      }
    }
  },
  computed: {
    ...mapState(useUsersStore, ['user'])
  },
  mounted() {
    this.getCoins()
  },
  watch: {
    async sortName(sortName) {
      const sortSplit = sortName.split(' ')
      const type = sortSplit[0]
      const order = sortSplit[1]
      if (type === 'name') {
        this.coins.sort((a, b) => a[type].localeCompare(b[type]))
      } else {
        this.coins.sort((a, b) => a[type] - b[type])
      }
      if (order === 'DESC') {
        this.coins.reverse()
      }
    }
  }
}
</script>
