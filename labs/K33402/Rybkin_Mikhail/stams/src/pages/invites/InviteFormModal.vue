<template>
  <el-dialog
      v-model="modalStatus"
      append-to-body
      title="Создать приглашение"
      width="20%"
  >
    <el-form
        v-loading="loading"
        label-position="top"
        label-width="auto"
    >
      <el-form-item label="Название">
        <el-input v-model="formData.name" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="Макс. пользователей">
        <el-input-number :max="100" :min="1" disabled/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('closeModal')">Отмена</el-button>
        <el-button type="primary" @click="createInvite(formData)">
          Создать
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {defineEmits, defineProps, reactive, ref, toRefs} from "vue";
import {useCoursesStore} from "@/stores/courses";

const props = defineProps(['modalStatus', 'courseId'])
const emit = defineEmits('closeModal', 'fetchCourseInfo')
const {modalStatus, courseId} = toRefs(props)
const loading = ref(false)
const coursesStore = useCoursesStore()

const formData = reactive({
  name: '',
  course_id: courseId
  // max_users: null
})

const createInvite = async () => {
  loading.value = true
  await coursesStore.createInvite(formData)
  formData.value = {
    name: '',
    course_id: null,
  }
  loading.value = false
  emit('closeModal')
  emit('fetchCourseInfo')
}

</script>

<style scoped>

</style>