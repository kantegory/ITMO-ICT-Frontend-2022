<template>
  <el-container v-loading="loading" style="height: 100%;">
    <el-container v-if="coursesStore.inviteInfo !== null">
      <el-main>
        <h1>{{ coursesStore.inviteInfo.creator.fio }} приглашает вас на курс {{ coursesStore.inviteInfo.course.name }}
          ({{ coursesStore.inviteInfo.course.short_description }})</h1>
        <el-button @click="redirectToHomepage()">На главную</el-button>
        <el-button type="primary" @click="acceptInvite()">Принять</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";
import {useCoursesStore} from "@/stores/courses";
import {useUsersStore} from "@/stores/users";

const loading = ref(false)
const coursesStore = useCoursesStore()
const usersStore = useUsersStore()
const route = useRoute()
// const usersStore = useUsersStore()

const fetchInviteInfo = async () => {
  loading.value = true
  coursesStore.fetchInviteInfo(route.params.inviteLink).then(() => {
    console.log(coursesStore.inviteInfo)
    if (
        coursesStore.inviteInfo.courses_users.find(cu => cu.user_id === usersStore.userId) ||
        coursesStore.inviteInfo.course.created_by === usersStore.userId
    ) {
      router.push({'name': 'courseInfo', 'params': {'courseId': coursesStore.inviteInfo.course.id}})
    }
    loading.value = false
  })
}

onMounted(() => {
  if (coursesStore.inviteInfo === null) {
    fetchInviteInfo()
  }
})

onBeforeRouteLeave(() => {
  coursesStore.resetInviteInfo()
})

const router = useRouter()
const redirectToHomepage = async () => {
  await router.push({'name': 'homePage'})
}

const acceptInvite = async () => {
  loading.value = true
  await coursesStore.acceptInvite()
  await router.push({'name': 'courseInfo', 'params': {'courseId': coursesStore.inviteInfo.course.id}})
}


</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>