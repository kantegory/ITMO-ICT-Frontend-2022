<template>
    <main>
      <hr class="opacity-100 m-0 hr-jopa"/>
      <event-card
        heading="Проводы в Армию"
        imgSrc="https://s3.stc.all.kpcdn.net/woman/wp-content/uploads/2022/10/pexels-fauxels-3184183-960x540.jpg"
        placeDate="Санкт-Петербург · 21 сен. 2022 г. – 23 сен. 2022 г"
        tamada="Евгений Пригожин"
        address="Санкт-Петербург, р-н Красногвардейский, пр-т Энергетиков, 2к3"
        guestsNum="20"
        totalCost="8000₽"
      />
      <event-card
        heading="Годовщина Специальной Военной Операции"
        imgSrc="https://avatars.dzeninfra.ru/get-zen_doc/1860870/pub_5cc9bc8ececf8300b334590f_5cc9bce232381c00b27acaef/scale_1200"
        placeDate="Санкт-Петербург · 24 фев. 2023 г. – 03 мар. 2023 г."
        tamada="Виктор Корнеевич"
        address="Санкт-Петербург, р-н Василеостровский, Морской, ул. Вадима Шефнера, 14к1"
        guestsNum="30"
        totalCost="6800₽"
      />
    </main>
  </template>
  
  <script>
  import EventCard from "./EventCard.vue"
  export default {
    name: "EventsMain",
    components: {
      EventCard
    }
  }
  </script>
  
  <style>
  </style>