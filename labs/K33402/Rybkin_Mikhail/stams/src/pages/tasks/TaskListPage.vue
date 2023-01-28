<template>
  <el-container>
    <el-header>
      <div class="header">
        <h2>Задания</h2>
        <el-space direction="horizontal">
          <list-popover-filters/>
          <list-popover-sort
              :sortOptions="sortOptions"
              :useStore="useTasksStore"
              defaultOption="deadline_at"
              defaultOrder="asc"
          />
          <list-popover-settings :useStore="useTasksStore"/>
          <el-button :icon="ArrowPathIcon" @click="fetchTasks()"/>
          <el-button type="primary" @click="redirectToTaskForm()">
            Создать
          </el-button>
        </el-space>
      </div>
    </el-header>

    <el-main>
      <task-list-cards
          v-if="tasksStore.listViewMode === 'cards'"
          :loading="loading"
          :tasks-list="tasksStore.processedTasksList"
      />
      <task-list-table
          v-else-if="tasksStore.listViewMode === 'table'"
          :loading="loading"
          :tasks-list="tasksStore.processedTasksList"
      />
    </el-main>
  </el-container>
  <el-backtop :bottom="100" :right="100"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useTasksStore} from "@/stores/tasks";
import TaskListCards from "@/pages/tasks/components/TaskListCards";
import TaskListTable from "@/pages/tasks/components/TaskListTable";
import {ArrowPathIcon} from "@heroicons/vue/24/solid";
import {useRouter} from "vue-router";
import ListPopoverSettings from "@/components/ListPopoverSettings";
import ListPopoverSort from "@/components/ListPopoverSort";
import ListPopoverFilters from "@/components/ListPopoverFilters";

const loading = ref(false)
const tasksStore = useTasksStore()
const router = useRouter()

const fetchTasks = async () => {
  loading.value = true
  tasksStore.fetchTasks().then(() => {
    loading.value = false
    tasksStore.resetListRefresh()
  })
}
const redirectToTaskForm = () => {
  router.push({name: 'taskNew'})
}

const sortOptions = [
  {
    name: 'Название',
    value: 'name'
  },
  {
    name: 'Дедлайн сдачи',
    value: 'deadline_at'
  },
  {
    name: 'Дедлайн защиты',
    value: 'protection_deadline_at'
  },
]

onMounted(() => {
  if (tasksStore.settings.refreshList) {
    fetchTasks()
  }
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