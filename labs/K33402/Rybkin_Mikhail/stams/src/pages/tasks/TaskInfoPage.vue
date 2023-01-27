<template>
  <el-container v-loading="loading" style="height: 100%;">
    <el-container v-if="tasksStore.taskInfo !== null">
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ name: 'taskList' }">
            Задания
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            {{ tasksStore.taskInfo.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="header">
          <h2>
            Задание "{{ tasksStore.taskInfo.name }}"
          </h2>
        </div>
      </el-header>

      <el-main>
        <task-descriptions :task="tasksStore.taskInfo"/>

        <el-tabs v-model="activeTabName">
          <el-tab-pane label="Подробности" name="description">
            <el-descriptions :column="1">
              <el-descriptions-item label="Описание">
        <span>
          {{ tasksStore.taskInfo.description }}
        </span>
              </el-descriptions-item>
              <el-descriptions-item label="Наказание за просрочку">
        <span>
          {{ tasksStore.taskInfo.punishment }}
        </span>
              </el-descriptions-item>
            </el-descriptions>
          </el-tab-pane>
          <el-tab-pane disabled label="Вложения" name="attachments"></el-tab-pane>
          <el-tab-pane disabled label="Попытки сдачи" name="submissions"></el-tab-pane>
          <el-tab-pane disabled label="FAQ" name="faq"></el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
  <el-backtop :bottom="100" :right="100"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {onBeforeRouteLeave, useRoute} from "vue-router";
import {useTasksStore} from "@/stores/tasks";
import TaskDescriptions from "@/pages/tasks/components/TaskDescriptions";

const loading = ref(false)
const activeTabName = ref('description')
const tasksStore = useTasksStore()
const route = useRoute()

const fetchTaskInfo = async () => {
  loading.value = true
  tasksStore.fetchTaskInfo(route.params.taskId).then(() => {
    loading.value = false
  })
}

onMounted(() => {
  if (tasksStore.taskInfo === null) {
    fetchTaskInfo()
  }
})

onBeforeRouteLeave(() => {
  tasksStore.resetTaskInfo()
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