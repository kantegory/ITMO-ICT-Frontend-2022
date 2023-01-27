<template>
  <el-container v-loading="loading" class="wrapper">
    <el-header>
      <main-header/>
    </el-header>
    <el-container v-if="usersStore.isLoggedIn && !loading">
      <el-aside v-if="route.meta.sidebar" width="200px">
        <main-sidebar/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <auth-modal :open-auth-modal="!usersStore.isLoggedIn && !loading"/>
  </el-container>
</template>

<script setup>
import AuthModal from "@/components/AuthModal"
import MainHeader from "@/components/MainHeader"
import {useUsersStore} from "@/stores/users";
import {onMounted, ref} from 'vue'
import MainSidebar from "@/components/MainSidebar";
import {useRoute} from "vue-router";

const usersStore = useUsersStore()
const route = useRoute()

const loading = ref(true)

onMounted(() => {
  usersStore.initializeAuth().then(() => {
    loading.value = false
  })
})
</script>

<style>
html, body, #app, .wrapper {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
