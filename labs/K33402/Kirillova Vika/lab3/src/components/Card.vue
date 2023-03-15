<template>
  <img :src="image" class="card-img-top" width="262" height="262" :alt="event" style="object-fit: cover;">
  <div class="card-body">
    <h3 class="card-name">{{ name }}</h3>
    <p class="card-text">{{ event }}</p>
    <p class="card-data">{{ place }}</p>
  <a href="#" class="btn btn-primary" @click="$router.push('/event')">Event page</a>
  <form action="" @submit.prevent="subscribe(id)">
    <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Subscribe<svg style="width: 16px; height: 16px; stroke: currentColor; fill: none;"><use xlink:href="#register-icon"></use></svg>
    </button>
  </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";

import useUserEventsStore from "@/stores/userEvents.js"

export default {
  name: 'CardNote',

  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
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
    id: {
      type: Number,
      required: true
    },
  },

  methods: {
    ...mapActions(useUserEventsStore, ['addUserEvents']),

    async subscribe(id) {
      const userEvents = {
        "userId": JSON.parse(localStorage.user).id,
        "cardId": id
      }
      await this.addUserEvents(userEvents);
    }
  }
}

</script>