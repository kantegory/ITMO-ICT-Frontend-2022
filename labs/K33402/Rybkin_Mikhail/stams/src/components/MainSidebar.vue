<template>
  <el-menu
      :collapse="isCollapsed"
      :default-active="route.meta.sidebarIndex"
      :router="false"
      mode="vertical"
      style="height: 100%"
  >
    <el-menu-item
        v-for="route in routes"
        :key="route.path"
        :index="route.index"
        @click="redirectToPage(route.path)"
        :name="t(route.name)"
    >
      <el-icon>
        <component :is="route.icon"/>
      </el-icon>
      <template #title>
        {{ t(route.name) }}
      </template>
    </el-menu-item>

    <div class="flex-grow"/>

    <!--    <el-menu-item index="collapse-sidebar" @click="isCollapsed = !isCollapsed" >-->
    <!--      <el-icon>-->
    <!--        <box-icon :name="isCollapsed ? 'chevron-right' : 'chevron-left'"/>-->
    <!--      </el-icon>-->
    <!--    </el-menu-item>-->
  </el-menu>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import {CheckBadgeIcon, HomeIcon, RectangleStackIcon} from "@heroicons/vue/24/outline";

const {t} = useI18n()
const route = useRoute()
const router = useRouter()
const isCollapsed = ref(false)

const redirectToPage = (path) => {
  router.push({path: path})
}

const routes = [
  {
    name: 'sidebar.home',
    icon: HomeIcon,
    path: '/',
    index: 'home'
  },
  {
    name: 'sidebar.courses',
    icon: RectangleStackIcon,
    path: '/courses',
    index: 'courses'
  },
  {
    name: 'sidebar.tasks',
    icon: CheckBadgeIcon,
    path: '/tasks',
    index: 'tasks'
  },
]
</script>

<style scoped>

</style>