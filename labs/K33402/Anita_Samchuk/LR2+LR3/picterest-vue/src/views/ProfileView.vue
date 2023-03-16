<template>
  <div class="container-fluid">
    <NavbarMinimal></NavbarMinimal>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <section v-if="user" class="settings mt-4">
            <h4 class="mb-4">Profile</h4>
            <div class="form-group row mb-3">
              <div class="col-6">
                <label class="label" for="first-name">First Name</label>
                <input id="first-name" type="text" class="form-control" v-model="user.first_name" placeholder="First Name" required>
              </div>
              <div class="col-6">
                <label class="label" for="last-name">Last Name</label>
                <input id="last-name" type="text" class="form-control" placeholder="Last Name" v-model="user.last_name" required>
              </div>
            </div>
            <div class="form-group mb-3">
              <label class="label" for="name">Username</label>
              <input id="name" type="text" class="form-control" v-model="user.username" placeholder="Username" required>
            </div>
            <div class="form-group mb-3">
              <label class="label" for="email">Email</label>
              <input id="email" type="text" class="form-control" v-model="user.email" placeholder="Email" required="">
            </div>
            <div class="form-group mb-3">
              <label class="label" for="description">Bio</label>
              <textarea id="description" type="text" class="form-control" v-model="user.bio" placeholder="Enter a Bio"></textarea>
            </div>
            <div class="form-group d-flex justify-content-end">
              <button @click="loadProfile" class="btn btn-secondary px-3 mx-2">Cancel</button>
              <button @click="updateProfile" class="btn btn-primary px-3">Save</button>
            </div>
          </section>
        </div>
        <div class="col-6">
          <h4 class="mt-4">Liked pictures</h4>
          <div class="pinterest-grid-profile">
            <img v-for="photo in likedPhotos" :key="photo.photo" class="main-image" :src="photo.url"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMinimal from '@/components/NavbarMinimal'
import axios from 'axios'

export default {
  name: 'ProfileView',

  data () {
    return {
      user: {
        first_name: null,
        last_name: null,
        bio: null,
        username: null,
        email: null
      }
    }
  },

  components: {
    NavbarMinimal
  },

  beforeMount () {
    if (!localStorage.getItem('accessToken')) {
      this.$router.push('/login')
    }

    this.loadProfile()
    this.$store.dispatch('getLikedPhotos', { accessToken: localStorage.accessToken, userId: JSON.parse(localStorage.user).id })
  },

  methods: {
    async loadProfile () {
      try {
        const userId = JSON.parse(localStorage.getItem('user')).id

        const response = await axios.get(
          'http://localhost:3000/users/' + userId,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.accessToken
            }
          }
        )

        if (response.status === 200) {
          for (const key in this.user) {
            this.user[key] = response.data[key] ?? null
          }
        }
      } catch (e) {
        alert(e.response.data)
      }
    },

    async updateProfile () {
      if (!this.user.username || !this.user.email) {
        alert('Email and username cannot be empty')
        return
      }

      try {
        const userId = JSON.parse(localStorage.getItem('user')).id

        const response = await axios.patch(
          'http://localhost:3000/users/' + userId,
          this.user,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.accessToken
            }
          }
        )

        if (response.status === 200) {
          this.loadProfile()
        }
      } catch (e) {
        alert(e.response.data)
      }
    }
  },

  computed: {
    likedPhotos () {
      return this.$store.getters.likedPhotos
    }
  }
}
</script>

<style scoped></style>
