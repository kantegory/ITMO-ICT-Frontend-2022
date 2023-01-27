<template>
  <section class="text-main">
    <div class="d-flex justify-content-center pb-5">
      <h2>Найти валюту</h2>
    </div>

    <div class="container">
      <form class="d-flex" role="search" @submit.prevent="searchFilter">
        <input v-model="searchString" class="form-control me-2" type="search" placeholder="Поиск по названию"
               aria-label="Поиск по названию">
        <button class="btn button-outline" type="submit">Search</button>
      </form>
    </div>

    <div class="container pt-3">
      <div class="form-floating card-text-main">
        <select class="form-select" id="floatingSelect" aria-label="Выберите сортировку" @change.prevent="sort">
          <option selected>Выбрать</option>
          <option value="price">Цена по возрастанию</option>
          <option value="-price">Цена по убыванию</option>
          <option value="date_added">Дата по возрастанию</option>
          <option value="-date_added">Дата по убыванию</option>
        </select>
        <label for="floatingSelect">Сортировка</label>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div v-for="coin in coins" v-bind:key="coin" class="col-xl-3 col-xxl-6 col-sm-6">
          <div class="card shadow-sm my-3">
            <router-link :to="'/coin/' + coin.id" class="btn btn-light card-bg-color text-left">
              <div class="card-body d-flex">
                <div class="px-3">
                  <img :src="coin.image" style="max-height:70px; max-width:70px;" class="img rounded-start"
                       :alt="coin.name">
                </div>

                <div>
                  <h2 class="card-text-main">${{ parseFloat(coin.price) }}</h2>

                  <p v-if="coin.weekly_changes > 0" class="mb-0 card-text-main">
                    <svg width="21" height="14" fill="none">
                      <use xlink:href="../assets/sprite.svg#chart-up"></use>
                    </svg>
                    <span class="text-success me-1">{{coin.weekly_changes}}%</span> This week
                  </p>

                  <p v-else class="mb-0 card-text-main">
                    <svg width="21" height="14" fill="none">
                      <use xlink:href="../assets/sprite.svg#chart-down"></use>
                    </svg>
                    <span class="text-sdanger me-1">{{coin.weekly_changes}}%</span> This week
                  </p>
                </div>

                <div class="my-auto ms-auto">
                  <svg class="open-arrow">
                    <use xlink:href="../assets/sprite.svg#open-arrow"></use>
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CoinMarket",
  data() {
    return {
      coins: [],
      url: "http://127.0.0.1:8000/coins/",
      searchString: ''
    }
  },
  created() {
    this.loadCoins()
  },
  watch: {
    url() {
      this.loadCoins()
    }
  },
  methods: {
    loadCoins() {
      this.axios
          .get(this.url)
          .then((response) => {
            this.coins = response.data
          })
          .catch(() => {
            this.coins = []
          })
    },

    searchFilter() {
      this.addSearchParam("search", this.searchString)
    },

    sort(event) {
      this.addSearchParam("ordering", event.target.value)
    },

    addSearchParam(param, value) {
      let newUrl = new URL(this.url)
      newUrl.searchParams.set(param, value)
      this.url = newUrl.toString()
    }
  }
}
</script>
