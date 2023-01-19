<template>
  <header class="header">
    <nav class="navbar navbar-expand nav d-flex justify-content-end">
      <div
        class="d-flex container-fluid justify-content-start pt-1"
        v-if="this.$route.path === '/' || this.$route.path === '/user'"
      >
        <div class="logo-meetup mx-3 mt-2"></div>
        <form
          class="d-flex"
          @submit.prevent
          @submit="
            () => {
              setSearch();
              goToPage('calendar');
            }
          "
        >
          <input
            class="f-1 form-control"
            type="search"
            placeholder="Search for keywords"
            aria-label="Search"
            v-model="search.keywords"
          />
          <input
            class="form-control"
            type="search"
            placeholder="Enter location"
            v-model="search.location"
          />
          <button class="button3" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <a
        v-if="this.$route.path !== '/user'"
        class="text-decoration-none a-nav pt-1"
        href="organizer.html"
        @click="goToPage('')"
        @click.prevent
      >
        <span class="fw-bold pink">Start a new group</span>
      </a>
      <a
        v-if="this.$route.path !== '/user'"
        class="text-decoration-none a-nav pt-2"
        href="login.html"
        @click="goToPage('login')"
        @click.prevent
      >
        <span class="fw-bold black">Login</span>
      </a>
      <a
        v-if="this.$route.path !== '/user'"
        class="text-decoration-none a-nav pt-2"
        href="register.html"
        @click="goToPage('register')"
        @click.prevent
      >
        <span class="fw-bold black">Register</span>
      </a>

      <div
        style="width: 100%"
        class="d-flex justify-content-end"
        v-if="this.$route.path === '/user'"
      >
        <ion-icon
          style="font-size: 25px"
          class="text-decoration-none a-nav pt-1"
          name="chatbubble-outline"
        ></ion-icon>
        <ion-icon
          style="font-size: 25px"
          class="text-decoration-none a-nav pt-1"
          name="notifications-outline"
        ></ion-icon>
        <ion-icon
          style="font-size: 25px"
          class="text-decoration-none a-nav pt-1"
          name="person-circle-outline"
        ></ion-icon>
        <ion-icon
          style="font-size: 25px"
          class="text-decoration-none a-nav pt-1"
          name="chevron-down-outline"
        ></ion-icon>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: {
        keywords: "",
        location: "",
      },
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push(`./${page}`);
    },
    setSearch() {
      this.$store.commit("setSearch", this.search);
    },
  },
};
</script>

<style>
nav {
  background-color: white;
  width: 100%;
  box-shadow: 0 0.5rem 0.5rem lightgrey;
}
.a-nav {
  width: 8rem;
  text-align: center;
  font-size: 2vh;
}

.nav-search {
  border: solid 0.5px lightgray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  min-width: 24px;
  max-width: 15vw;
  height: 6vh;
}

.button3 {
  padding: 10px;
  font-size: 1.25rem;
  line-height: 1rem;
  height: 6vh;
  width: fit-content;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  color: #fff;
  fill: #fff;
  background-color: #eb3434;
  border: 1px solid #eb3434;
}

.button3:hover {
  opacity: 0.7;
}
</style>