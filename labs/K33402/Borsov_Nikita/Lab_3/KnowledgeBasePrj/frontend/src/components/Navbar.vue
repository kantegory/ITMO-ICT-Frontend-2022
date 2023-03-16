<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light my-navbar">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <h1 class="banner__title"><span style="color: #03a8f3;">Sailet</span>Knowlegde</h1>
      </router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-1">
            <router-link
              :to="{ name: 'question-editor' }"
              :params="{ slug: undefined }"
              class="btn btn-danger">
              Create Topic
            </router-link>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-secondary" href="/accounts/logout/">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
.my-navbar {
  border-bottom: 1px solid #ddd;
}

.navbar-brand {
  font-weight: bold;
  font-size: 150%;
  font-family: Montserrat,Arial,sans-serif;
}
.btn-danger{
  background-color: #4ea9f4 !important;
  border-color: #4ea9f4 !important;
}
.btn-danger:hover {
  background-color: #ffffff !important;
  color: #4ea9f4 !important;
}
.banner__title {
    margin: 45px 0;
    font-weight: 600;
    text-align: center;
}

.navbar-brand:hover {
}

</style>