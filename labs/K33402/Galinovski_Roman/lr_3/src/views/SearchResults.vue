<template>
    <section class="page-content">
      <app-header />
      <search-results-main :eventItems="eventItems" />
      <app-footer />
    </section>
  </template>
  
  <script>
  import AppHeader from "../components/AppHeader"
  import SearchResultsMain from "../components/SearchResultsMain.vue"
  export default {
    name: "SearchResults",
    components: {
      AppHeader,
      SearchResultsMain
    },
    methods: {
      async getEventItems() {
        try {
          let country = this.$route.query.city
          if (!country) {
            country = "Франция"
          }
          const countrys = {
        "Россия" : "RU", 
        "США" : "US",
        "Украина" : "UA",
        "Франция" : "FR",
        "Великобритания" : "GB",
        "Китай" : "KN"
    };
          let arrivalDatetime = this.$route.query.arrivalDatetime.slice(0,4)
          if (!arrivalDatetime) {
            arrivalDatetime = "2023"
          }
          const response = await this.axios.get(
            `https://public-holiday.p.rapidapi.com/${arrivalDatetime}/${countrys[country]}`,
            {
              headers: {
                "x-rapidapi-host": "public-holiday.p.rapidapi.com",
                    "x-rapidapi-key": "bf273bf337msh8e47fa4ec451632p10ef49jsn9cd6618d6d02"
              }
            }
          )
          if (response.status !== 200) {
            throw new Error(response.error)
          }
          this.eventItems = response.data
          console.log(this.eventItems)
        } catch (e) {
          console.error("Error from Event's API: ", e)
        }
      },
    },
    beforeMount() {
      this.getEventItems()
    },
    data: () => ({
      eventItems: []
    })
  }
  </script>
  
  <style>
  </style>