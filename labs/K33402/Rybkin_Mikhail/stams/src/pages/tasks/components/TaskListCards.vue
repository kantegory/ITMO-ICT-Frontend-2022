<template>
  <el-container v-loading="loading">
    <div v-if="tasksList !== null && tasksList.length > 0"
         style="width: fit-content">
      <el-space
          wrap
      >
        <task-card
            v-for="task in tasksList"
            :key="task.id"
            :task="task"
            class="card-link"
            @click="redirectToInfo(task)"
        />
      </el-space>
    </div>
    <el-empty v-else description="Тут пока ничего нет" style="width: 100%"/>
  </el-container>
</template>

<script setup>
import TaskCard from "@/pages/tasks/components/TaskCard";
import {defineProps, toRefs} from "vue";
import {useRouter} from "vue-router";

const props = defineProps(['tasksList', 'loading'])
const {tasksList, loading} = toRefs(props)
const router = useRouter()

const redirectToInfo = (task) => {
  router.push({name: 'taskInfo', params: {taskId: task.id}})
}
</script>

<style scoped>
.card-link {
  cursor: pointer
}
</style>