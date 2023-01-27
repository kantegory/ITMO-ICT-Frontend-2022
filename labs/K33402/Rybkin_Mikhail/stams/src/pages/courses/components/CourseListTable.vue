<template>
  <el-table
      v-loading="loading"
      :data="coursesList"
      row-class-name="tableRow"
      stripe
      style="width: 100%"
      table-layout="auto"
      @row-click="redirectToInfo"
  >
    <el-table-column label="Название" prop="name"/>
    <el-table-column label="Описание" prop="short_description"/>
    <el-table-column label="Создатель" prop="created_by.fio"/>
    <el-table-column label="Дата начала">
      <template #default="scope">
        <span>
          {{
            formatDate(
                scope.row.start_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Дата конца">
      <template #default="scope">
        <span>
          {{
            formatDate(
                scope.row.end_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {formatDate} from "@/helpers";
import {useCoursesStore} from "@/stores/courses";
import {defineProps, toRefs} from "vue";
import {useRouter} from "vue-router";

const coursesStore = useCoursesStore()
const router = useRouter()

const props = defineProps(['coursesList', 'loading'])
const {coursesList, loading} = toRefs(props)

const redirectToInfo = (row) => {
  router.push({name: 'courseInfo', params: {courseId: row.id}})
}
</script>

<style>
.tableRow {
  cursor: pointer
}
</style>