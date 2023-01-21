<template>
  <div class="row col-10 g-0 mb-3 border">
    <div class="col-md-4 d-flex align-items-center form-color">
      <img :src="event_id.photo" class="img-fluid " :alt="event_id.title">
    </div>
    <div class="col-md-8 d-flex flex-column justify-content-around form-color">
      <div class="card-header d-flex justify-content-between p-4">
        <a class="btn my-btn-outline-secondary btn-sm"  role="button">
          <svg class="icon m-1" width="20" height="20">
              <use xlink:href="#tag"></use>
            </svg>{{ event_id.category }}</a>
        <p class="card-text text">{{ event_id.date }} {{ event_id.time }}</p>
      </div>
      <div class="card-body text-center d-flex flex-column justify-content-around form-color" >
        <h5 class="card-title text">{{ event_id.title }}</h5>
        <div class="card-text text d-flex justify-content-around">
          <p class="card-location text">
            <svg class="icon m-1" width="20" height="20">
              <use xlink:href="#place"></use>
            </svg>{{ event_id.place }}</p>
          <p class="card-cost">{{ event_id.price }}</p>
        </div>
        <form class="flex-column justify-content-around">
          <RouterLink :to="`/events/${event_id.id}`" class="text-black nav-link">
            <a href="#" class="btn btn-success col-5 align-self-center mb-1" >Подробнее...</a>
          </RouterLink>
          <a href="#" class="btn btn-danger col-5 align-self-center mb-1" @click="removeEvent(id)">Отменить запись</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import useUserEventsStore from "@/stores/users_events";
import useUserStore from "@/stores/user";

export default {
  name: "UserEventCard",
  props: {
    id: {type: Number, required: true},
    event_id: {
      id: {type: Number, required: true},
      title: {type: String, required: true},
      price: {type: String, required: true},
      photo: {type: String, required: true},
      district: {type: String, required: true},
      place: {type: String, required: true},
      date: {type: String, required: true},
      time: {type: String, required: true},
    },

  },
  computed: {
    ...mapState(useUserEventsStore, ['userEvents']),
    ...mapState(useUserStore, ['token']),
  },
  methods: {
    ...mapActions(useUserEventsStore, ['fetchUsersEvents', 'removeUsersEvent']),
    removeEvent(id) {
      this.removeUsersEvent(id, this.token ).then(() => {
        this.fetchUsersEvents(this.token)
      })
    },
  },
}
</script>
