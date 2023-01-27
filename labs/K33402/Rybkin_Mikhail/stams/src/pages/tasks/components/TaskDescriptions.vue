<template>
  <el-descriptions :column="1">
    <el-descriptions-item label="Курс">
        <span>
          {{ task.course.name }}
        </span>
    </el-descriptions-item>
    <el-descriptions-item label="Дедлайн сдачи">
        <span :class="{'warning': checkDateBefore(task.deadline_at)}">
          {{
            formatDate(
                task.deadline_at,
                tasksStore.dateFormatMode === 'relative'
            )
          }}
        </span>
    </el-descriptions-item>
    <el-descriptions-item label="Дедлайн защиты">
        <span :class="{'warning': checkDateBefore(task.protection_deadline_at)}">
          {{
            formatDate(
                task.protection_deadline_at,
                tasksStore.dateFormatMode === 'relative'
            )
          }}
        </span>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import {defineProps, ref} from "vue";
import {useCoursesStore} from "@/stores/courses";

import {formatDate, checkDateBefore} from "@/helpers";

const props = defineProps(['task'])
const task = ref(props.task)
const tasksStore = useCoursesStore()

</script>

<style scoped>

</style>