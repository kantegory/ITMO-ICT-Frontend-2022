<template>
  {{ loading.value }}
  <el-table
      v-loading="loading"
      :data="tasksList"
      row-class-name="tableRow"
      stripe
      style="width: 100%"
      table-layout="auto"
      @row-click="redirectToInfo"
  >
    <el-table-column label="Название" prop="name"/>
    <el-table-column label="Предмет" prop="course.name"/>
    <el-table-column label="Обязательное">
      <template #default="scope">
        <el-tooltip
            :content="scope.row.is_mandatory ? 'Обязательное' : 'Не обязательное'"
            effect="dark"
            placement="top"
        >
          <el-icon
              :color="scope.row.is_mandatory ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
              size="20px"
          >
            <exclamation-circle-icon/>
          </el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column label="Защита">
      <template #default="scope">
        <el-tooltip
            :content="scope.row.is_protectable ? 'Требует защиты' : 'Не требует защиты'"
            effect="dark"
            placement="top"
        >
          <el-icon
              :color="scope.row.is_protectable ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
              size="20px"
          >
            <shield-check-icon/>
          </el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column label="Дедлайн сдачи">
      <template #default="scope">
        <span :class="{'warning': checkDateBefore(scope.row.deadline_at)}">
          {{
            formatDate(
                scope.row.deadline_at,
                tasksStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Дедлайн защиты">
      <template #default="scope">
        <span :class="{'warning': checkDateBefore(scope.row.protection_deadline_at)}">
          {{
            formatDate(
                scope.row.protection_deadline_at,
                tasksStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {useTasksStore} from "@/stores/tasks";
import {ExclamationCircleIcon, ShieldCheckIcon} from "@heroicons/vue/20/solid";
import {defineProps, toRefs} from "vue";
import {checkDateBefore, formatDate} from "@/helpers";
import {useRouter} from "vue-router";

const tasksStore = useTasksStore()
const props = defineProps(['tasksList', 'loading'])
const {tasksList, loading} = toRefs(props)
const router = useRouter()

const redirectToInfo = (row) => {
  router.push({name: 'taskInfo', params: {taskId: row.id}})
}
</script>

<style scoped>
.warning {
  color: var(--el-color-danger)
}
.tableRow {
  cursor: pointer
}
</style>