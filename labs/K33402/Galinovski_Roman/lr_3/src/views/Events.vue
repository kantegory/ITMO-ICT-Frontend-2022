<template>
    <section class="page-content">
      <app-header />
      <events-main />
      <app-footer />
    </section>
  </template>
  <script>
  import AppHeader from "../components/AppHeader"
  import EventsMain from "../components/EventsMain.vue"
  export default {
    name: "MyBookings",
    components: {
      AppHeader,
      EventsMain
    }
  }
  </script>
  
  <style>
  </style>