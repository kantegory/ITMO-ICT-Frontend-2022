<template>
  <img :src="src" class="card-img-top" width="262" :alt="text" style="height: 11rem;">
  <div class="card-body">
    <h3 class="card-title">{{ name }}</h3>
    <p class="card-text">{{ text }}</p>
    <p class="card-data">{{ day }}</p>
  <a href="./event.html" class="btn btn-primary">На сайт мероприятия</a>
  <form action="" onsubmit="subscribe({{ id }})">
    <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <svg class="icon-main"><use xlink:href="#register-icon"></use></svg>
      Записаться
    </button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'CardNote',

  props: {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
  }
}

</script>