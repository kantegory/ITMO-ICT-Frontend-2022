<template>
  
  <!-- HEADER -->
  <HeaderPage />
  <RouterView />
  <!-- FOOTER -->
  <FooterPage />

  <!-- MODALS -->
  <ModalAccountPage />
  <ModalRegistrationPage />
  <ModalFavoritesPage />
  
</template>

<script>
  import HeaderPage from '@/views/HeaderPage.vue';
  import FooterPage from '@/views/FooterPage.vue';
  import ModalAccountPage from '@/views/ModalAccountPage.vue';
  import ModalRegistrationPage from '@/views/ModalRegistrationPage.vue';
  import ModalFavoritesPage from '@/views/ModalFavoritesPage.vue';

  export default {
    name: 'App',
    components: {
      HeaderPage,
      FooterPage,
      ModalAccountPage,
      ModalRegistrationPage,
      ModalFavoritesPage,
    },
  };
</script>


<style>
</style>