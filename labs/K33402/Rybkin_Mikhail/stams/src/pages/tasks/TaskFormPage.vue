<template>
  <el-container v-loading="loading" class="">
    <el-header>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ name: 'taskList' }">
          Задания
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="route.name === 'taskEdit'" :to="{name: 'taskData', params: {taskId: 'blabla'}}">
          blabla
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ route.name === 'taskNew' ? 'Создать' : 'Изменить' }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="header">
        <h2>
          {{ route.name === 'taskNew' ? 'Создать задание' : 'Изменить задание' }}
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
          <el-form-item label="Описание">
            <el-input
                v-model="formData.description"
                :rows="6"
                type="textarea"
            />
          </el-form-item>
          <el-form-item label="Наказание за просрочку">
            <el-input
                v-model="formData.punishment"
                :rows="2"
                type="textarea"
            />
          </el-form-item>
          <el-form-item label="Начало сдачи">
            <el-date-picker
                v-model="formData.open_at"
                placeholder="Select date and time"
                type="datetime"
            />
          </el-form-item>
          <el-form-item label="Конец сдачи">
            <el-date-picker
                v-model="formData.deadline_at"
                :shortcuts="shortcuts"
                placeholder="Select date and time"
                type="datetime"
            />
          </el-form-item>
          <el-form-item label="Конец защиты">
            <el-date-picker
                v-model="formData.protection_deadline_at"
                :shortcuts="shortcuts"
                placeholder="Select date and time"
                type="datetime"
            />
          </el-form-item>
          <el-form-item label="Тип задания">
            <el-radio-group v-model="formData.kind" class="ml-4">
              <el-radio :label="1">Лабораторная</el-radio>
              <el-radio :label="2">Практическая</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Обязательное">
            <el-switch v-model="formData.is_mandatory"/>
          </el-form-item>
          <el-form-item label="Требует защиты">
            <el-switch v-model="formData.is_protectable"/>
          </el-form-item>
          <el-form-item label="Сдача онлайн">
            <el-switch v-model="formData.is_submittable"/>
          </el-form-item>
          <el-form-item label="Курс">
            <el-select
                v-model="formData.course_id"
                :loading="coursesLoading"
                :remote-method="fetchAdminCoursesWrapper"
                filterable
                placeholder="Please enter a keyword"
                remote
                remote-show-suffix
                reserve-keyword
            >
              <el-option
                  v-for="item in coursesOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
              />
            </el-select>
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
import {useTasksStore} from "@/stores/tasks";
import {fetchAdminCourses} from "@/queries/courses";
import {useUsersStore} from "@/stores/users";

const router = useRouter()
const route = useRoute()

const loading = ref(false)
const tasksStore = useTasksStore()

const submitForm = async () => {
  loading.value = true
  await tasksStore.upsertTask(formData)
  formData.value = {
    name: '',
    description: '',
    punishment: '',
    kind: 1,
    is_submittable: true,
    is_mandatory: true,
    is_protectable: false,
    open_at: null,
    deadline_at: null,
    protection_deadline_at: null,
    course_id: null
  }
  loading.value = false
  tasksStore.setListRefresh()
  await router.push({'name': "taskList"})
}

const formData = reactive({
  name: '',
  description: '',
  punishment: '',
  kind: 1,
  is_submittable: true,
  is_mandatory: true,
  is_protectable: false,
  open_at: null,
  deadline_at: null,
  protection_deadline_at: null,
  course_id: null
})

const shortcuts = [
  {
    text: 'Сегодня',
    value: new Date(),
  },
  {
    text: 'Через неделю',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
      date.setHours(23, 59)
      return date
    },
  },
  {
    text: 'Через две недели',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + 3600 * 1000 * 24 * 7 * 2)
      date.setHours(23, 59)
      return date
    },
  },
  {
    text: 'Через месяц',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + 3600 * 1000 * 24 * 31)
      date.setHours(23, 59, 59)
      return date
    },
  },
]

const coursesOptions = ref([])
const coursesLoading = ref(false)
const usersStore = useUsersStore();
const fetchAdminCoursesWrapper = (query) => {
  if (query) {
    coursesLoading.value = true
    fetchAdminCourses(query, usersStore.userId).then(({data}) => {
      coursesOptions.value = data
      coursesLoading.value = false
    })
  } else {
    coursesOptions.value = []
  }
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