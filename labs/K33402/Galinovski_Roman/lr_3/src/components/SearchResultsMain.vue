<template>
    <main>
      <div class="container search-results">
        <search-card
          v-for="eventItem in eventItems"
          :key="eventItem.id"
          :eventItem="eventItem"
        />
      </div>
    </main>
  </template>
  
  <script>
  import SearchCard from "./SearchCard.vue"
  export default {
    name: "SearchResultsMain",
    props: ["eventItems"],
    components: {
      SearchCard
    }
  }
  </script>
  
  <style>
  </style>