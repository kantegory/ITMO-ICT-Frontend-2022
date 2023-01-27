<template>
  <el-descriptions :column="1">
    <el-descriptions-item label="Описание">
        <span>
          {{ course.short_description ? course.short_description : '-' }}
        </span>
    </el-descriptions-item>
    <el-descriptions-item label="Дата начала">
        <span>
          {{
            formatDate(
                course.start_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
    </el-descriptions-item>
    <el-descriptions-item label="Дата конца">
        <span>
          {{
            formatDate(
                course.end_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
    </el-descriptions-item>
    <el-descriptions-item label="Создатель">
        <span>
          {{
          course.created_by.fio
          }}
        </span>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import {defineProps, ref} from "vue";
import {useCoursesStore} from "@/stores/courses";

import {formatDate} from "@/helpers";

const props = defineProps(['course'])
const course = ref(props.course)
const coursesStore = useCoursesStore()
</script>

<style scoped>

</style>