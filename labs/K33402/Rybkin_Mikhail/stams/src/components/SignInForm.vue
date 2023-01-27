<template>
  <el-form
      :model="formData"
      :rules="rules"
      label-position="top"
      label-width="auto"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="formData.email" name="email" type="email"/>
    </el-form-item>
    <el-form-item :label="t('auth.password')" prop="password">
      <el-input v-model="formData.password" show-password type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button
          block
          type="primary"
          @click="signIn">
        {{ t('auth.signInPrompt') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {computed, defineEmits, reactive} from "vue";
import {useI18n} from "vue-i18n";
import {useUsersStore} from "@/stores/users";

const {t} = useI18n()
const userStore = useUsersStore()
const emit = defineEmits(['setLoading', 'resetLoading'])

const signIn = async () => {
  emit('setLoading')
  await userStore.signIn(formData)
  formData.value = {
    email: '',
    password: '',
  }
  emit('resetLoading')
}

const formData = reactive({
  email: '',
  password: '',
})

// TODO password validation
// const validatePass = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (formData.repeatePassword !== '') {
//       formData.value.validateField('repeatePassword', () => null)
//     }
//     callback()
//   }
// }
// const validatePass2 = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password again'))
//   } else if (value !== formData.password) {
//     callback(new Error("Two inputs don't match!"))
//   } else {
//     callback()
//   }
// }
const rules = reactive({
  email: [
    {required: true, message: computed(() => t('messages.formValidation.requiredNotFilled')), trigger: 'blur'},
    {type: 'email', message: computed(() => t('messages.formValidation.wrongTypeEmail')), trigger: 'blur'},
  ],
  password: [
    {required: true, message: computed(() => t('messages.formValidation.requiredNotFilled')), trigger: 'blur'},
    // { validator: validatePass, trigger: 'blur' },
  ],
})
</script>

<style scoped>

</style>