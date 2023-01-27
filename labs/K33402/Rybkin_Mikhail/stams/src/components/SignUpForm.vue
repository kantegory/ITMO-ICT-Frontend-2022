<template>
  <el-form
      ref="formDataRef"
      :hide-required-asterisk="true"
      :model="formData"
      :rules="rules"
      label-position="top"
      label-width="auto"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="formData.email" name="email" type="email"/>
    </el-form-item>
    <el-form-item :label="t('auth.fio')" prop="fio">
      <el-input v-model="formData.fio" name="name" type="text"/>
    </el-form-item>
    <el-form-item :label="t('auth.password')" prop="password">
      <el-input v-model="formData.password" show-password type="password"/>
    </el-form-item>
    <el-form-item :label="t('auth.repeatPassword')" prop="repeatPassword">
      <el-input v-model="formData.repeatPassword" show-password type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button
          block
          type="primary"
          @click="signUp">
        {{ t('auth.signUpPrompt') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>

import {computed, defineEmits, reactive, ref} from "vue";
import {useI18n} from "vue-i18n";
import {useUsersStore} from "@/stores/users";

const {t} = useI18n()
const userStore = useUsersStore()

const emit = defineEmits(['setLoading', 'resetLoading'])

const formDataRef = ref()
const formData = reactive({
  email: '',
  fio: '',
  password: '',
  repeatPassword: '',
})

const signUp = async () => {
  if (!formDataRef.value) return
  await formDataRef.value.validate(async (valid, fields) => {
    if (valid) {
      emit('setLoading')
      await userStore.signUp(formData)
      formData.value = {
        email: '',
        fio: '',
        password: '',
        repeatPassword: '',
      }
      emit('resetLoading')
    } else {
      console.log('error submit!', fields)
    }
  })
}

// TODO password validation
// const validatePass = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (formData.repeatPassword !== '') {
//       formData.value.validateField('repeatPassword', () => null)
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
  fio: [
    {required: true, message: computed(() => t('messages.formValidation.requiredNotFilled')), trigger: 'blur'},
  ],
  password: [
    {required: true, message: computed(() => t('messages.formValidation.requiredNotFilled')), trigger: 'blur'},
    {min: 8, message: computed(() => t('messages.formValidation.minLength', [8])), trigger: 'blur'},
    // { validator: validatePass, trigger: 'blur' },
  ],
  repeatPassword: [
    {required: true, message: computed(() => t('messages.formValidation.requiredNotFilled')), trigger: 'blur'},
    {min: 8, message: computed(() => t('messages.formValidation.minLength', [8])), trigger: 'blur'},
    // { validator: validatePass2, trigger: 'blur' }
  ],
})
</script>

<style scoped>

</style>