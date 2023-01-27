<template>
  <el-container>
    <el-header>
      <div class="header">
        <h2>Курсы</h2>
        <el-space direction="horizontal">
          <list-popover-filters/>
          <list-popover-sort
              :sortOptions="sortOptions"
              :useStore="useCoursesStore"
              defaultOption="name"
              defaultOrder="asc"
          />
          <list-popover-settings :useStore="useCoursesStore"/>
          <el-button :icon="ArrowPathIcon" @click="fetchCourses()" title="Обновить список"/>
          <el-button type="primary" @click="redirectToCourseForm()" title="Создать курс">
            Создать
          </el-button>
        </el-space>
      </div>
    </el-header>

    <el-main>
      <course-list-cards
          v-if="coursesStore.listViewMode === 'cards'"
          :courses-list="coursesStore.processedCoursesList"
          :loading="loading"
      />
      <course-list-table
          v-else-if="coursesStore.listViewMode === 'table'"
          :courses-list="coursesStore.processedCoursesList"
          :loading="loading"
      />
    </el-main>
  </el-container>
  <el-backtop :bottom="100" :right="100"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {ArrowPathIcon} from "@heroicons/vue/24/solid";
import {useRouter} from "vue-router";
import {useCoursesStore} from "@/stores/courses";
import ListPopoverFilters from "@/components/ListPopoverFilters";
import ListPopoverSort from "@/components/ListPopoverSort";
import ListPopoverSettings from "@/components/ListPopoverSettings";
import CourseListTable from "@/pages/courses/components/CourseListTable";
import CourseListCards from "@/pages/courses/components/CourseListCards";

const loading = ref(false)
const coursesStore = useCoursesStore()
const router = useRouter()

const fetchCourses = async () => {
  loading.value = true
  coursesStore.fetchCourses().then(() => {
    loading.value = false
    coursesStore.resetListRefresh()
  })
}
const redirectToCourseForm = () => {
  router.push({name: 'courseNew'})
}

const sortOptions = [
  {
    name: 'Название',
    value: 'name'
  },
  {
    name: 'Начало',
    value: 'start_date'
  },
  {
    name: 'Конец',
    value: 'end_date'
  },
]

onMounted(() => {
  if (coursesStore.settings.refreshList) {
    fetchCourses()
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