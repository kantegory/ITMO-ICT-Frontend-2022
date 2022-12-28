<template>
  <img :src="src" class="card-img-top" width="262" :alt="text" style="height: 11rem;">
  <div class="card-body">
    <h3 class="card-title">{{ name }}</h3>
    <p class="card-text">{{ text }}</p>
    <p class="card-data">{{ day }}</p>
  <form action="" @submit.prevent="deleteCard(primaryId)">
    <button type="submit" class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Отписаться от мероприятия
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
    text: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    src: {
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