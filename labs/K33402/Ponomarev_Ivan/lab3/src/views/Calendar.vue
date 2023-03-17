<template>
    <Head />
    <fullCalendar :options="{
      events: events
    }"/>
</template>

<script>

import FullCalendar from "@/components/FullCalendar.vue"
import Head from "@/components/Head.vue"
import eventsStore from "@/store/event_store";
import { mapActions, mapState } from "pinia";

export default {
  name: 'Calendar',
  components: {
    FullCalendar,
    Head
  },
  computed: {
    ...mapState(eventsStore, ['events']),
    getEvents(){
      return this.events
    }
  },
  methods: {
    ...mapActions(eventsStore,['getEvents'])
  
  },
  mounted() {
    this.getEvents()
  }
}
</script>