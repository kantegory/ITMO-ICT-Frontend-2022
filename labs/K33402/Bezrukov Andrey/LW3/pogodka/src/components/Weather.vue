<template>
    <div>
    <div class="d-flex justify-content-center">
                    <h1 class="head-text mt-5">Search</h1>
                </div>
                <div class="container">
                    <div class="search-form form-inline d-flex justify-content-center">
                        <form
                        @submit.prevent="submitCity"
                        @submit="getWeather"
                        ref="form">
                        <input class="form-control" id='inputValue' type="text" placeholder="Input the city name" v-model="city"></form>
                        <button class="btn btn-primary" id="search" type="submit" v-on:click="getWeather">Search</button>
                        <button class="btn btn-primary" id="get-geo" type="submit" v-on:click="getLocation">Use your location
                        </button>
                    </div>
                </div>
                <div class="container">
                    <div class="container-city">
                        <div class='mt-3 d-flex justify-content-center' v-if="info.name">
                            <p class='head-text'>City: {{ info.name }}</p>
                        </div>
                    </div>
                    <div class="container-temp">
                        <div class='mt-2 d-flex justify-content-center' v-if="info.main.temp">
                            <p class='head-text'>Temperature: {{ info.main.temp }} °C</p>
                        </div>
                    </div>
                    <div class="container-feels_temp">
                        <div class='mt-2 d-flex justify-content-center' v-if="info.main.feels_like">
                            <p class='head-text'>Feels like: {{ info.main.feels_like }} °C</p>
                        </div>
                    </div>
                    <div class="container-desc">
                        <div class='mt-2 mb-3 d-flex justify-content-center' v-if="info.wind.speed">
                            <p class='head-text'>Wind speed: {{ info.wind.speed }} m/s</p>
                        </div>
                    </div>
                </div>
    </div>
    </template>

<script>
import axios from 'axios'
export default {
  name: 'Weather',
  data: () => ({
    city: '',
    savedCity: '',
    info: {
      main: {
        temp: '',
        feels_like: ''
      },
      wind: {
        speed: ''
      }
    },
    location: {
      coords: {
        latitude: '',
        longitude: ''
      }
    }
  }),
  methods: {
    submitCity () {
      localStorage.setItem('city', this.city)
      this.savedCity = this.city
      this.$refs.form.reset()
    },
    getWeather () {
      axios
        .get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=314864fa7ae959cda85ac9d534443060&lang=en&units=metric')
        .then(response => (this.info = response.data))
    },
    async getLocation () {
      navigator.geolocation.getCurrentPosition(pos => {
        this.location = pos
      })
      axios
        .get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.location.coords.latitude + '&lon=' + this.location.coords.longitude + '&appid=62f76307202d2bbb00f83a4de8ac7393&lang=en&units=metric')
        .then(response => (this.info = response.data))
    }
  }
}
</script>
