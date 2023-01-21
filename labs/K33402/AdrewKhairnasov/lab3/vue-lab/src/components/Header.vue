<template>
  <header>
    <nav>
      <ul class="nav-list d-flex">
        <li class="list-item">
          <a href="/main" class="list-elem">List</a>
        </li>
        <li class="list-item">
          <a href="/chart" class="list-elem">Charts</a>
        </li>
        <li class="list-item">
          <a href="/personal" class="list-elem">Personal</a>
        </li>
        <li class="list-item" id="logout"
            :style="[this.isLogged ? {'display' : 'block'} : {'display' : 'none'}]">
          <button style="background: none; border: 2px solid #03e9f4; width: 70px; height: 56px"
                  class="list-elem logout-box d-flex justify-content-center align-items-center"
                  @click="logout">
            <svg class="logout-icon" style="margin: 0; fill: #03e9f4">
              <use xlink:href="#logout"></use>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      isLogged: false
    }
  },
  methods: {
    logout() {
      if (confirm('Вы действительно хотите выйти?')) {
        localStorage.clear()
        if (this.$route.path === '/personal') {
          router.push('/')
        } else {
          window.location.reload()
        }
      }
    },
    checkAuth() {
      if (!this.isLogged) {
        router.push('/login')
      } else {
        router.push('/personal')
      }
    }
  },
  mounted() {
    localStorage.getItem('pinia_users') ? this.isLogged = true : this.isLogged = false
  }
}
</script>

<style>
.nav-list {
  display: grid;
  grid-template-columns: 100px 135px 30px;
  list-style: none;
  padding: 0;
}

.list-elem {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 20px;
  text-decoration: none;
  overflow: hidden;
  transition: .5s;
  margin-top: 20px;
  letter-spacing: 4px;
  border-style: double;
}

.list-elem:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.list-item {
  display: flex;
  align-items: baseline;
}

.logout-box:hover {
  background: #03e9f4 !important;
  color: #fff !important;
  border-radius: 3px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.logout-icon:hover {
  fill: white !important;
}
</style>