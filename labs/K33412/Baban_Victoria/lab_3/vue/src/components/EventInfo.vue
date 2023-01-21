<template>
  <section class="container col-8  justify-content-center py-3 min-vh-100 form-color">
    <div class="d-flex flex-row">
      <img :src="event.photo"  :alt="event.title" class="img-fluid" style="max-height: 300px; width: auto;">
      <div class="d-flex flex-column p-2 ">
        <h2 class="text-center">{{ event.title }}</h2>
        <dl class="row p-4">
          <dt class="col-sm-7">Дата проведения:</dt>
          <dd class="col-sm-5">{{ event.date }}</dd>
          <dt class="col-sm-7">Время проведения:</dt>
          <dd class="col-sm-5">{{ event.time }}</dd>
          <dt class="col-sm-7">Место проведения:</dt>
          <dd class="col-sm-5">{{ event.place }}</dd>
          <dt class="col-sm-7">Стоимость:</dt>
          <dd class="col-sm-5">{{ event.price }}</dd>
        </dl>
      </div>
    </div>
    <section class="py-3 px-1 mb-3">
      <div v-if="event.description">
        <h4 class="mb-2">Описание: </h4>
        <p>{{ event.description }}</p>
      </div>
      <div v-if="event.contact_number">
        <h4 class="mb-2">Контакты: </h4>
        <p>{{event.contact_number}}   {{event.contact_name}}</p>
      </div>
      <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-success d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addUserEvent">
        Записаться на мероприятие
      </button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Поздравляем!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Вы успешно записались на данное мероприятие!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="d-flex justify-content-center" v-if="event.map">
      <iframe :src="event.map" width="700" height="400" frameborder="0" title="map"></iframe>
    </div>

  </section>
</template>

<script>
import {mapState, mapActions} from "pinia"
import useEventsStore from "@/stores/event";
import useUserEventsStore from "@/stores/users_events";
import useUserStore from "@/stores/user";
export default {
  name: "EventInfo",

  computed: {
    ...mapState(useEventsStore, ['event', 'events']),
    ...mapState(useUserEventsStore, ['userEvents']),
    ...mapState(useUserStore, ['token']),

  },
  mounted() {
    this.fetchEvent(this.$route.params.id)
    this.$watch(
        () => this.$route.params,
        (toParams) => {
          this.fetchEvent(toParams.id)
        }
    )
  },

  methods: {
    ...mapActions(useEventsStore, ['fetchEvent']),
    ...mapActions(useUserEventsStore, ['fetchUsersEvents', 'addUsersEvents']),
    addUserEvent() {
      this.addUsersEvents(this.event.id, this.token ).then(() => {
        this.fetchUsersEvents(this.token)
      })
    },
  }
}
</script>

