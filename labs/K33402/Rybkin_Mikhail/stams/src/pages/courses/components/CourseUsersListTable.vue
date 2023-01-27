<template>
  <el-table
      v-loading="loading"
      :data="courseUsersList"
      stripe
      style="width: 100%"
      table-layout="auto"
  >
    <el-table-column label="ФИО">
      <template #default="scope">
        <el-space>
          <el-icon v-if="scope.row.user.id  === usersStore.userId" size="20">
            <user-circle-icon/>
          </el-icon>
          <span>
            {{
              scope.row.user.fio
            }}
          </span>
        </el-space>
      </template>
    </el-table-column>
    <el-table-column label="Дата добавления">
      <template #default="scope">
        <span>
          {{
            formatDate(
                scope.row.joined_at,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Статус">
      <template #default="scope">
        <span>
          {{

            flipObject(COURSE_STATUS)[scope.row.status]
          }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {defineProps, toRefs} from "vue";
import {useCoursesStore} from "@/stores/courses";
import {COURSE_STATUS, flipObject, formatDate} from "@/helpers";
import {useUsersStore} from "@/stores/users";
import {UserCircleIcon} from "@heroicons/vue/24/solid";

const props = defineProps(['courseUsersList', 'loading'])
const {courseUsersList, loading} = toRefs(props)
const coursesStore = useCoursesStore()
const usersStore = useUsersStore()
</script>

<style>
</style>