<template>
  <Header/>
  <div class="color-main text min-vh-100">
  <full-calendar :options="{
        events: events,
        eventColor: '#089969',
        height: 575,
        width: 575,
      }" />
  </div>
  <Footer/>
</template>


<script>
import {mapActions, mapState} from 'pinia'
import useEventsStore from "@/stores/event";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import FullCalendar from '../components/FullCalendar.vue'

export default {
  name: "CalendarView",
  components: {Footer, Header, FullCalendar},
  computed: {
    ...mapState(useEventsStore, ['events']),
  },
  methods: {
    ...mapActions(useEventsStore, ['fetchEvents']),

  },
  mounted() {
    this.fetchEvents()
  }
}

</script>
