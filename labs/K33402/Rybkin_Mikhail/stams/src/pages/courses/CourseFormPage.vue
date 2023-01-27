<template>
  <el-container v-loading="loading" class="">
    <el-header>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ name: 'coursesList' }">
          Задания
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="route.name === 'courseEdit'" :to="{name: 'courseData', params: {taskId: 'blabla'}}">
          blabla
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ route.name === 'courseNew' ? 'Создать' : 'Изменить' }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="header">
        <h2>
          {{ route.name === 'courseNew' ? 'Создать курс' : 'Изменить курс' }}
        </h2>
      </div>
    </el-header>
    <el-main>
      <el-container>
        <el-form>
          <el-form-item label="Название">
            <el-input
                v-model="formData.name"
            />
          </el-form-item>
          <el-form-item label="Короткое описание">
            <el-input
                v-model="formData.short_description"
                maxlength="12"
            />
          </el-form-item>
          <el-form-item label="Дата начала">
            <el-date-picker
                v-model="formData.start_date"
                :shortcuts="shortcuts.start_date"
                format="DD.MM.YYYY"
                placeholder="Select date and time"
                type="date"
            />
          </el-form-item>
          <el-form-item label="Дата конца">
            <el-date-picker
                v-model="formData.end_date"
                :shortcuts="shortcuts.end_date"
                format="DD.MM.YYYY"
                placeholder="Select date and time"
                type="date"
            />
          </el-form-item>
          <el-button type="primary" @click="submitForm()">Создать</el-button>
        </el-form>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useCoursesStore} from "@/stores/courses";

const router = useRouter()
const route = useRoute()

const loading = ref(false)
const coursesStore = useCoursesStore()

const submitForm = async () => {
  loading.value = true
  await coursesStore.upsertCourse(formData)
  formData.value = {
    name: '',
    short_description: null,
    start_date: null,
    end_date: null,
  }
  loading.value = false
  coursesStore.setListRefresh()
  await router.push({'name': "courseList"})
}

const formData = reactive({
  name: '',
  short_description: null,
  start_date: null,
  end_date: null,
})

const shortcuts = {
  start_date: [
    {
      text: `01.09.${new Date().getFullYear()}`,
      value: () => {
        return `01 Sep ${new Date().getFullYear()}`
      },
    },
    {
      text: `01.02.${new Date().getFullYear() + 1}`,
      value: () => {
        return `01 Feb ${new Date().getFullYear() + 1}`
      },
    },
  ],
  end_date: [
    {
      text: `31.01.${new Date().getFullYear() + 1}`,
      value: () => {
        return `31 Jan ${new Date().getFullYear() + 1}`;
      },
    },
    {
      text: `30.06.${new Date().getFullYear()}`,
      value: () => {
        return `30 Jun ${new Date().getFullYear()}`
      },
    },
  ]
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

</style>