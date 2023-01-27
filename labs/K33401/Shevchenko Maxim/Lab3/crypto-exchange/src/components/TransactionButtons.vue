<template>
  <button class="btn btn-success" type="button" @click.prevent="buy">Покупка</button>
  <button class="btn btn-danger" type="button" @click.prevent="sell">Продажа</button>
</template>

<script>
export default {
  name: "TransactionButtons",
  data() {
    return {
      possession: ""
    }
  },
  props: {
    coin: null
  },
  created() {
    if (this.coin) {
      this.loadPossession()
    } else {
      const unwatch = this.$watch('coin', () => {
        this.loadPossession()
        unwatch()
      })
    }
  },
  methods: {
    loadPossession() {
      this.axios
          .get(`http://127.0.0.1:8000/possessions/coin/${this.coin.id}`, {headers: {'Authorization': `Token ${localStorage.token}`}}
          )
          .then((response) => {
            this.possession = response.data
          })
    },

    createPossession(count) {
      this.axios
          .post("http://127.0.0.1:8000/possessions/create/", {
            'currency': this.coin.id,
            'count': count
          }, {headers: {'Authorization': `Token ${localStorage.token}`}})
          .then((response) => {
            this.possession = response.data
            alert(`-$${parseFloat(this.coin.price)}: Покупка 1 ${this.coin.abbreviation}`)
          })
          .catch((err) => {
            alert(err)
          })
    }
    ,

    changePossession(count, type) {
      this.axios
          .patch(`http://127.0.0.1:8000/possessions/change_count/${this.possession.id}/`, {
            'count': count
          }, {headers: {'Authorization': `Token ${localStorage.token}`}})
          .then(() => {
            this.loadPossession()
            alert(`$${parseFloat(this.coin.price)}: ${type} 1 ${this.coin.abbreviation}`)
          })
          .catch((err) => {
            alert(err)
          })
    }
    ,

    buy() {
      if (this.possession) {
        this.changePossession(this.possession.count + 1, 'Покупка')
      } else {
        this.createPossession(1)
      }
    }
    ,

    sell() {
      if (this.possession) {
        const remainder = this.possession.count - 1
        if (remainder >= 0) {
          this.changePossession(remainder, 'Продажа')
        } else {
          alert("Кажется, у вас не хватает валюты")
        }
      } else {
        alert("Для начала купите валюту")
      }
    }
  }
}
</script>
