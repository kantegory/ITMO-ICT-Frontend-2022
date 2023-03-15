<template>
  <main class="row mx-auto d-flex pt-5 container-fluid background-main">
    <section class="container row mx-auto">
      <div class="row d-flex justify-content-start col-md-5 col-lg-5 col-xl-3 col-12 col-sm-12">
        <img src="../assets/image/profile.jpg" alt="..." style="padding: 0">
      </div>
      <div class="row d-flex justify-content-start col-xl-6 col-lg-7 col-md-7 col-9 col-sm-12">
        <h1 class="text-color mt-1 custom-colored-h1">Kirillova Vika</h1>
        <h2 class="text-color mt-4 h5 custom-colored-h1">Member of the club since January 2022</h2>
        <h3 class="text-color mt-4 h4 custom-colored-h1">My telegram<a class="m-5" href="https://t.me/@kirillovavi">Telegram</a></h3>
      </div>
      <h3 class="text-color mt-5 h4 custom-colored-h1">My event list:</h3>
    </section>
    <section class="container d-flex justify-content-center mx-auto mb-5" id="container">
      <div class="d-flex justify-content-center" id="container" style="flex-wrap: wrap;">
        <div class="card me-4 card-colors background text-color mb-3" style="width: 18rem;" data-event-id="{{ id }}" v-for="card in personalCards" :key="card.id">
          <personal-card :name="card.name" :image="card.image" :event="card.event" :place="card.place" :primaryId="card.primaryId"></personal-card>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useCardsStore from "@/stores/cards.js"
import useUserEventsStore from "@/stores/userEvents.js"

import PersonalCard from "@/components/PersonalCard.vue"

export default {
  name: 'PersonalBlock',

  components: { PersonalCard },

  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
    ...mapState(useCardsStore, ['personalCards']),
  },

  methods: {
    ...mapActions(useUserEventsStore, ['getUserEventsById']),
    ...mapActions(useCardsStore, ['loadCardById', 'doClear']),

    async loadPage() {
      const response = await this.getUserEventsById(JSON.parse(localStorage.user).id);

      const result = Array.from(response.data);

      this.doClear();
      result.forEach((item) => {
        this.loadCardById(item.cardId, item.id)
      })
    }
  },

  mounted() {
    this.loadPage();
  }
}
</script>