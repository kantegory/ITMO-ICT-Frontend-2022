<template>
  <el-container v-loading="loading" style="height: 100%;">
    <el-container v-if="coursesStore.courseInfo !== null">
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ name: 'courseList' }">
            Курсы
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            {{ coursesStore.courseInfo.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="header">
          <h2>
            Курс "{{ coursesStore.courseInfo.name }}"
          </h2>
        </div>
      </el-header>

      <el-main>
        <course-descriptions :course="coursesStore.courseInfo"/>

        <el-tabs v-model="activeTabName">
          <el-tab-pane label="Пользователи" name="users">
            <course-users-list-table
                :course-users-list="coursesStore.courseInfo.users"
                :loading="false"
            />
            <div
                v-if="coursesStore.courseInfo.created_by.id === usersStore.userId"
            >
              <el-divider/>
              <el-button
                  type="primary"
                  @click="openInvitesModal = true"
              >
                Приглашения
              </el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Задания" name="tasks">
            <task-list-table
                :loading="false"
                :tasks-list="coursesStore.courseInfo.tasks"
            />
          </el-tab-pane>
          <el-tab-pane disabled label="Материалы" name="materials"></el-tab-pane>
          <el-tab-pane disabled label="FAQ" name="faq"></el-tab-pane>
          <el-tab-pane disabled label="Посещения" name="attendance"></el-tab-pane>
        </el-tabs>
      </el-main>
      <invite-list-modal
          :course-id="coursesStore.courseInfo.id"
          :invites-list="coursesStore.courseInfo.invites"
          :modal-status="openInvitesModal"
          @closeModal="openInvitesModal = false"
          @fetchCourseInfo="fetchCourseInfo()"
      />
    </el-container>
  </el-container>
  <el-backtop :bottom="100" :right="100"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {onBeforeRouteLeave, useRoute} from "vue-router";
import {useCoursesStore} from "@/stores/courses";
import TaskListTable from "@/pages/tasks/components/TaskListTable";
import CourseUsersListTable from "@/pages/courses/components/CourseUsersListTable";
import CourseDescriptions from "@/pages/courses/components/CourseDescriptions";
import InviteListModal from "@/pages/invites/InviteListModal";
import {useUsersStore} from "@/stores/users";

const loading = ref(false)
const openInvitesModal = ref(false)
const activeTabName = ref('users')
const coursesStore = useCoursesStore()
const route = useRoute()
const usersStore = useUsersStore()

const fetchCourseInfo = async () => {
  loading.value = true
  coursesStore.fetchCourseInfo(route.params.courseId).then(() => {
    loading.value = false
  })
}

onMounted(() => {
  if (coursesStore.courseInfo === null) {
    fetchCourseInfo()
  }
})

onBeforeRouteLeave(() => {
  coursesStore.resetCourseInfo()
})


</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>