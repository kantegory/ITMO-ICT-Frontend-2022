<template>
<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <slot></slot>
</div>

<div class="container">
  <div class="card-header col-md-12">
    <form class="form-inline justify-content-center">
          <label for="event-name" class="mr-2">Название</label>
          <input @input="filters.name_input= $event.target.value" v-bind:value="filters.name_input"  type="text" id="event-name" class="custom-form form-control mr-2">
          <label for="event-location" class="mr-2">Локация</label>
          <input @input="filters.location_input = $event.target.value" v-bind:value="filters.location_input" type="text" id="event-location" class="custom-form form-control mr-2">
    </form>
  </div>
</div>

<div class="container">
  <div class="flex-container card-container">
      <div class="card mb-4 shadow-sm" v-for="card in filteredCards" :key="card.id">
          <div class="card-header custom_header_color">
              <h4 class="my-0 font-weight-normal">Test {{ card.id }}</h4>
          </div>
          <div class="card-body d-flex flex-column">
              <h4 class="card-title pricing-card-title">
                  <small class="text-muted">{{ card.title }}</small>
              </h4>
              <ul class="list-unstyled mt-3 mb-4">
                  <li>{{ card.body }}</li>
              </ul>
                  <button class="btn btn-lg btn-block btn-primary mt-auto" type="button" @click="$router.push(`/event/${card.id}`)">Узнать больше </button>
      </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            filters: {
                location_input: '',
                name_input: ''
            },
            cards_data: [],
        }
    },

    methods: {
        async fetchEvents() {
            try {
            const response = await axios.get(this.cards_data_link);
            this.cards_data = response.data;
            console.log(this.cards_data);
            } catch (e) {
                alert('Error')
            }
        }
    },

    mounted() {
        this.fetchEvents()
    },


    computed: {
        filteredCards() {
            return this.cards_data.filter(cards_data => cards_data.body.includes(this.filters.location_input))
                .filter(cards_data => cards_data.title.includes(this.filters.name_input));
        }
    },

    props: {
        cards_data_link: {
            type: String,
        }
    }


}
</script>

<style scoped>

</style>
