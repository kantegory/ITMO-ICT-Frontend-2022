<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-space :spacer="spacer" direction="horizontal">
          <span>{{ course.name }}</span>
        </el-space>
      </div>
    </template>
    <course-descriptions :course="course"/>
  </el-card>
</template>

<script setup>

import {defineProps, h, ref} from "vue";
import {ElDivider} from "element-plus";
import CourseDescriptions from "@/pages/courses/components/CourseDescriptions";

const props = defineProps(['course'])
const course = ref(props.course)
const spacer = h(ElDivider, {direction: 'vertical'})


</script>

<style scoped>
.card-header {
  display: flex;
}
</style>