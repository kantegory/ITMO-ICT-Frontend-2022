<template>
  <div class="container d-flex p-3 justify-content-center h2 text">Найди подходящее мероприятие</div>
  <div class="container d-grid gap-2 d-md-flex justify-content-center">
    <div class="row">
      <div class="form col-12 col-sm-6 col-lg-3 col-md-5 col-xl-3 ">
        <select class="form-select event-region form-color" aria-label=".form-select-lg example" id="district" v-model="district">
          <option value="" >Район</option>
          <option value="admiral">Адмиралтейский</option>
          <option value="vasileostrov">Василеостровский</option>
          <option value="vyborg">Выборгский</option>
          <option value="kalininsk">Калининский</option>
          <option value="kirov">Кировский</option>
          <option value="krasnogvard">Красногвардейский</option>
          <option value="krasnosel">Красносельский</option>
          <option value="kronshtad">Кронштадский</option>
          <option value="moskov">Московский</option>
          <option value="nevsk">Невский</option>
          <option value="petrograd">Петроградский</option>
          <option value="center">Центральный</option>
        </select>
      </div>
      <div class="form col-12 col-sm-6 col-lg-3 col-md-5 col-xl-3">
        <select class="form-select event-category form-color" aria-label=".form-select-lg example" id="category" v-model="category">
          <option value="">Категория</option>
          <option value="Театры" >Театры</option>
          <option value="Концерты" >Концерты</option>
          <option value="Игры" >Игры</option>
          <option value="Спорт и фитнес" >Спорт и фитнес</option>
          <option value="Исскуство и культура" >Исскуство и культура</option>
          <option value="Карьера и образование" >Карьера и образование</option>
        </select>
      </div>
      <div class="form col-12 col-sm-6 col-lg-3 col-md-5 col-xl-3">
        <select class="form-select type-event form-color" aria-label=".form-select-lg example" id="type-event" v-model="type_event">
          <option value="">Любой тип</option>
          <option value="offline">Очно</option>
          <option value="online">Онлайн</option>
        </select>
      </div>

      <form class="col-lg-3 mb-3 search-form">
        <button class="btn my-btn-outline-secondary search-btn" type="button" id="button-search" @click="filterEvents">
          <svg class="icon m-1">
            <use xlink:href="#search"></use>
          </svg>
          Поиск</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import useEventsStore from '@/stores/event'

export default {
  name: "Filter",
  data() {
    return {
      category: '',
      district: '',
      type_event: ''
    }
  },
  computed: {
    ...mapState(useEventsStore, ['events', 'categoryFilter', 'districtFilter', 'typeFilter']),
  },
  methods: {
    ...mapActions(useEventsStore, ['fetchEventsByCategoryDistrictType']),

    filterEvents() {
      this.fetchEventsByCategoryDistrictType(this.category, this.district, this.type_event)
    }
  }


}
</script>
