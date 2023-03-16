<template>
    <section class="page-content">
      <app-header />
      <index-main />
      <app-footer />
    </section>
  </template>
  
  <script>
  import AppFooter from "../components/AppFooter.vue"
  import AppHeader from "../components/AppHeader"
  import IndexMain from "../components/IndexMain.vue"
  export default {
    name: "Index",
    components: {
      AppHeader,
      IndexMain,
      AppFooter
    }
  }
  </script>
  
  <style>

* {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content {
    flex: 1 0 auto;
  }
.footer {
    flex: 0 0 auto;
  }
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
}
main {
  flex: 1 1 auto;
}

  #app {
    height: 100%;
  }
  .page-content {
    height: 100%;
  }
  </style>