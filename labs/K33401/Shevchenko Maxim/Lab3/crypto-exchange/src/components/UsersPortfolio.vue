<template>
  <div class="container py-5">
    <div class="row row-cols-1 g-4">
      <div class="col">
        <div v-for="possession in possessions" v-bind:key="possession" class="col-12">
          <div class="card shadow-sm my-3">
            <router-link :to="'/coin/' + possession.currency.id" class="btn btn-light card-bg-color text-left">
              <div class="card-body d-flex">
                <div class="my-auto text-secondary">
                  <h1>x{{possession.count}}</h1>
                </div>

                <div class="px-3">
                  <img :src="possession.currency.image" style="max-height:70px; max-width:70px;" class="img rounded-start"
                       :alt="possession.currency.name">
                </div>

                <div>
                  <h2 class="card-text-main">${{ parseFloat(possession.currency.price) }}</h2>

                  <p v-if="possession.currency.weekly_changes > 0" class="mb-0 card-text-main">
                    <svg width="21" height="14" fill="none">
                      <use xlink:href="../assets/sprite.svg#chart-up"></use>
                    </svg>
                    <span class="text-success me-1">{{ possession.currency.weekly_changes }}%</span> This week
                  </p>

                  <p v-else class="mb-0 card-text-main">
                    <svg width="21" height="14" fill="none">
                      <use xlink:href="../assets/sprite.svg#chart-down"></use>
                    </svg>
                    <span class="text-sdanger me-1">{{ possession.currency.weekly_changes }}%</span> This week
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
  </div>
</template>

<script>
export default {
  name: "UsersPortfolio",
  data() {
    return {
      possessions: []
    }
  },
  created() {
    this.loadPossessions()
  },
  methods: {
    loadPossessions() {
      this.axios
          .get('http://127.0.0.1:8000/possessions', {headers: {'Authorization': `Token ${localStorage.token}`}})
          .then((response) => {
            this.possessions = response.data
          })
    }
  }
}
</script>

<style scoped>

</style>