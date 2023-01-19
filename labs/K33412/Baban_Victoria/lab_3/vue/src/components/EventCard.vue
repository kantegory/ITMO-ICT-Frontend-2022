<template>
  <div class="col-4">
    <div class="card h-100" :event_id="id">
      <img :src="photo" class="card-img-top img-fluid" :alt="title">
      <div class="card-header d-flex justify-content-between align-content-center form-color">
        <a class="btn my-btn-outline-secondary btn-sm col-6">
          <svg class="icon m-1">
              <use xlink:href="#tag"></use>
            </svg>{{ category }}</a>
        <p class="card-text text col-4 text-center">{{ date }} {{time}}</p>
      </div>
      <div class="card-body text-center d-flex flex-column justify-content-around p-3 form-color">
        <h5 class="card-title text">{{ title }}</h5>
        <div class="card-text d-flex justify-content-around text">
          <p class="card-text text">
            <svg class="icon m-1">
              <use xlink:href="#place"></use>
            </svg>{{ place }}</p>
          <p class="card-text text-success">{{ price }}</p>
        </div>
        <div class="card-text d-flex justify-content-around ">
          <RouterLink :to="`/events/${id}`" class="text-black nav-link">
            <a href="#" class="btn  align-self-center btn-success"  >Подробнее...</a>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EventCard",

  props: {
      id: {type: Number, required: true},
      title: {type: String, required: true},
      price: {type: String, required: true},
      photo: {type: String, required: true},
      category: {type: String, required: true},
      district: {type: String, required: true},
      place: {type: String, required: true},
      type_event: {type: String, required: true},
      date: {type: String, required: true},
      time: {type: String, required: true},
      description: {type: String}
  },
}
</script>
