<template>
    <div class="row">
      <div class="container-md event-item">
        <img src="../assets/event3.jpeg" alt="" />
        <h2>{{ eventItem.localName }}</h2>
        <p>Международное название: {{ eventItem.name}}, {{ eventItem.countryCode}}</p>
        <p>Дата мероприятия: {{ eventItem.date }}</p>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "SearchCard",
    props: {
      eventItem: Object
    }
  }
  </script>
  <style>
  .event-item {
    padding: 10px;
    border: 2px solid var(--accent-color);
    margin: 30px auto 0px;
    border-radius: 7px;
  }
  .event-item h2 {
    margin: 0;
  }
  .event-item img {
    width: initial;
  }
  </style>
  