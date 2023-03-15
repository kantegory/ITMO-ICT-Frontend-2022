<template>
  <img :src="image" class="card-img-top" width="262" height="262" :alt="event" style="object-fit: cover;">
  <div class="card-body">
    <h3 class="card-title">{{ name }}</h3>
    <p class="card-text">{{ event }}</p>
    <p class="card-data">{{ place }}</p>
  <form action="" @submit.prevent="deleteCard(primaryId)">
    <button type="submit" class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Unsubscribed
    </button>
  </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useUserEventsStore from "@/stores/userEvents.js"

export default {
  name: 'PersonalCard',
  
  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
  },

  methods: {
    ...mapActions(useUserEventsStore, ['addUserEvents', 'deleteCardById']),

    async deleteCard(id) {
      this.deleteCardById(id)

      location.reload()
    }
  },

  props: {
    name: {
      type: String,
      required: true
    },
    event: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    primaryId: {
      type: Number,
      required: true
    },
  },
}

</script>