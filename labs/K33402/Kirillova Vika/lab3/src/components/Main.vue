<template>
  <svg display="none">
    <symbol id="search-icon" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </symbol>
  </svg>

  <main class="container-fluid background-main">
    <section class="d-flex flex-column align-items-center pt-5">
      <h1 class="h1 mb-4 text-color">Current events</h1>
      <div class="d-flex justify-content-center m-0">
        <p class="fs-5 pe-3 text-color">Sort</p>
        <div class="dropdown me-3">
          <select class="form-select-sm event-type" aria-label=".form-select-lg example">
            <option value="all">Select the type of event</option>
            <option value="Master-class">Master class</option>
            <option value="Show">Show</option>
          </select>
        </div>
        <div class="dropdown me-3">
          <select class="form-select-sm subway-type" aria-label=".form-select-lg example">
            <option value="everything">Choose subway</option>
            <option value="Zvenigorodskaya">Zvenigorodskaya</option>
            <option value="Gorkovskaya">Gorkovskaya</option>
            <option value="Spasskaya">Spasskaya</option>
          </select>
        </div>
        <form class="search-form d-flex justify-content-end col-12 col-sm-2 col-lg-4 col-xl-6" @submit.prevent="filter">
          <button type="submit" id="search" class="btn btn-info btn-sm " style="background-color:#77d260; border: 1px solid #77d260;"><svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#search-icon"></use></svg>Search</button>
        </form>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-5">
        <div class="card me-4 card-colors background text-color mb-3" style="width: 18rem;" data-event-id="{{ id }}" v-for="card in filteredCards" :key="card.id">
          <card-note :name="card.name" :image="card.image" :event="card.event" :place="card.place" :id="card.id"></card-note>
        </div>
      </div>
    </section>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">You are recorded</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            We are waiting for you at our event in a good mood
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useCardsStore from "@/stores/cards.js"

import CardNote from "@/components/Card.vue"

export default {
  name: 'MainBlock',

  components: { CardNote },

  computed: {
    ...mapState(useCardsStore, ['cards']),

    filteredCards() {
      return this.cards
    }
  },

  methods: {
    ...mapActions(useCardsStore, ['loadCards', 'filterCards']),

    async filter() {
      const eventT = document.querySelector('.event-type')
      const cityT = document.querySelector('.subway-type')

      const url1 = eventT.value !== "all" ? `event=${eventT.value}&` : ""
      const url2 = cityT.value !== "everything" ? `place=${cityT.value}` : ""

      this.filterCards(url1 + url2);
    }
  },

  mounted() {
    this.loadCards();
  }
}
</script>
