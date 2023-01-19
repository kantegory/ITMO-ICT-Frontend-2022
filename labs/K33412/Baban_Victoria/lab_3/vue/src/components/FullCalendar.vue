<template>
  <div class="container py-3 color-main">
    <full-calendar :options="calendarOptions" />
  </div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import useEventsStore from "../stores/event";

const DEFAULT_OPTIONS = {
  plugins: [ dayGridPlugin, interactionPlugin ],
  initialView: 'dayGridMonth',
  editable: true,
  locale: "locale",

}
export default {
  components: {
    FullCalendar
  },
  props: {
    options: {
      type: Object,
      default: DEFAULT_OPTIONS
    }
  },
  computed: {
    calendarOptions() {
      return { ...DEFAULT_OPTIONS, ...this.options }
    }
  }
}
</script>

<style>
.fc-day {
  cursor: pointer;
}
</style>