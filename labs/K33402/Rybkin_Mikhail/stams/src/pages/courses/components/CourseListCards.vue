<template>
  <el-container v-loading="loading">
    <div v-if="coursesList !== null && coursesList.length > 0"
         style="width: fit-content">
      <el-space
          wrap
      >
        <course-card
            v-for="course in coursesList"
            :key="course.id"
            :course="course"
            class="card-link"
            @click="redirectToInfo(course)"
        />
      </el-space>
    </div>
    <el-empty v-else description="Тут пока ничего нет" style="width: 100%"/>
  </el-container>
</template>

<script setup>
import CourseCard from "@/pages/courses/components/CourseCard";
import {defineProps, toRefs} from "vue";
import {useRouter} from "vue-router";

const props = defineProps(['coursesList', 'loading'])
const {coursesList, loading} = toRefs(props)
const router = useRouter()

const redirectToInfo = (course) => {
  router.push({name: 'courseInfo', params: {courseId: course.id}})
}
</script>

<style scoped>
.card-link {
  cursor: pointer
}
</style>