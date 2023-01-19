<template>
  <section class="dataTable-wrapper justify-content-center mx-auto" style="color: #03e9f4">
    <div class="table-head" style="padding-right: 20px">
      <search-input v-model="search" @send-search="findCoins"/>
      <div class="head-row d-flex border-light justify-content-between" style="height: 50px">
        <div class="fw-normal d-flex" style="width: 35%;">Название
          <sort-icon/>
        </div>
        <div class="fw-normal d-flex" style="width: 20%;">Цена
          <sort-icon/>
        </div>
        <div class="fw-normal d-flex" style="width: 15%">Изменение
          <sort-icon/>
        </div>
        <div class="fw-normal d-flex" style="width: 20%">Дата добавления
          <sort-icon/>
        </div>
        <div class="fw-normal" style="width: 10%">
          <select-sort v-model="sortName" :options="sortOptions"/>
        </div>
      </div>
    </div>
    <main-list :coins="coins" @buy-event="buyCoin"/>
  </section>
</template>

<script>
import useCoinsStore from "@/stores/coins";
import {mapActions, mapState} from "pinia";
import MainList from "@/components/tables/MainList.vue";
import useUsersStore from "@/stores/users";
import SelectSort from "@/components/my_components/mySort.vue";


export default {
  components: {
    SelectSort,
    MainList
  },
  data() {
    return {
      coins: [],
      page: 1,
      limit: 10,
      total: 3,
      search: '',
      sortName: '',
      sortOptions: [
        {value: 'name ASC', name: 'По названию (ASC)'},
        {value: 'name DESC', name: 'По названию (DESC)'},
        {value: 'current_price ASC', name: 'По цене (ASC)'},
        {value: 'current_price DESC', name: 'По цене (DESC)'},
        {value: 'price_change_percentage_24h ASC', name: 'По изменению (ASC)'},
        {value: 'price_change_percentage_24h DESC', name: 'По изменению (DESC)'},
        {value: 'atl_date ASC', name: 'По дате (ASC)'},
        {value: 'atl_date DESC', name: 'По дате (DESC)'},
      ]
    }
  },
  methods: {
    ...mapActions(useCoinsStore, ['loadCoins']),
    ...mapActions(useUsersStore, ['commitChanges']),
    async getCoins() {
      this.coins = await this.loadCoins(this.search, this.sortName);
    },
    buyCoin(id, amount) {
      let newCoin = true
      for (let i = 0; i < this.user.coins.length; i++) {
        if (id === this.user.coins[i].id) {
          this.user.coins[i].amount += amount;
          newCoin = false;
        }
      }
      if (newCoin) {
        this.user.coins.push({id: id, amount: amount});
      }

      this.commitChanges(this.user);
    },
    async findCoins() {
      this.coins = await this.loadCoins(this.search, this.sortName);
    },
  },
  computed: {
    ...mapState(useUsersStore, ['user'])
  },
  mounted() {
    this.getCoins();
  },
  watch: {
    async sortName(sortName) {
      this.coins = await this.loadCoins(this.search, sortName);
    }
  }
}
</script>


