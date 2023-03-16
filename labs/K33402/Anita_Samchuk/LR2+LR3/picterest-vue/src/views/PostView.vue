<template>
  <div class="container-fluid">
    <NavbarMinimal></NavbarMinimal>
    <div v-if="photo" class="container">
      <section class="d-flex post-wrap mt-3">
        <img class="w-50 post-image" :src="photo ? photo.urls.regular : ''" />
        <div class="w-50 p-4 post-wrap">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-1">{{ photo ? photo.user.name : '' }}</h5>
            <button v-if="!alreadyLiked" @click="like" class="btn btn-primary btn-sm">Like</button>
            <button v-if="alreadyLiked" @click="unlike" class="btn btn-secondary btn-sm">Unlike</button>
          </div>
          <div>{{ date }}</div>
          <div class="mb-3">{{ photo ? photo.location.name : '' }}</div>
          <div>{{ photo ? photo.description : '' }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavbarMinimal from '@/components/NavbarMinimal'
import axios from 'axios'

export default {
  name: 'PostView',

  components: {
    NavbarMinimal
  },

  data () {
    return {
      alreadyLiked: false
    }
  },

  async beforeMount () {
    await this.$store.dispatch('loadPhoto', this.$route.params.id)
    await this.checkLike()
  },

  computed: {
    photo () {
      return this.$store.getters.postPhoto
    },

    date () {
      const photo = this.photo

      return new Date(photo.created_at).toDateString()
    }
  },

  methods: {
    async like () {
      try {
        const userId = JSON.parse(localStorage.getItem('user')).id

        const response = await axios.post(
          'http://localhost:3000/600/likedPhotos',
          {
            photo: this.photo.id,
            url: this.photo.urls.small,
            userId
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.accessToken
            }
          }
        )

        if (response.status === 201) {
          await this.checkLike()
        }
      } catch (e) {
        alert(e.response.data)
      }
    },

    async unlike () {
      try {
        const userId = JSON.parse(localStorage.getItem('user')).id

        const like = this.$store.getters.likedPhotos.find(
          photo => photo.photo === this.$route.params.id &&
            photo.userId === userId
        )

        const response = await axios.delete(
          'http://localhost:3000/likedPhotos/' + like.id,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.accessToken
            }
          }
        )

        if (response.status === 200) {
          await this.checkLike()
        }
      } catch (e) {
        alert(e.response.data)
      }
    },

    async checkLike () {
      await this.$store.dispatch('getLikedPhotos', { accessToken: localStorage.accessToken, userId: JSON.parse(localStorage.user).id })

      const likedPhotos = this.$store.getters.likedPhotos

      if (likedPhotos.find(photo => photo.photo === this.$route.params.id)) {
        this.alreadyLiked = true
        return
      }

      this.alreadyLiked = false
    }
  }
}
</script>

<style scoped></style>
