<template>
    <Head />
    <Calendar />
</template>

<script>

import Calendar from "@/components/Calendar.vue"
import Head from "@/components/Head.vue"

export default {
  name: 'EventsView',
  components: {
    Calendar,
    Head
  }
}
</script>