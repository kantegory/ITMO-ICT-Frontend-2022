<template>
  <el-dialog
      v-model="openAuthModal"
      :center="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      align-center
      class="auth-modal"
      width="40%"
  >
    <template #header="{ titleId, titleClass }">
      <div class="auth-modal-header">
        <h4 :id="titleId" :class="titleClass">{{ t('auth.authorization') }}</h4>
        <el-switch
            v-model="$i18n.locale"
            active-text="🇬🇧"
            active-value="en"
            inactive-text="🇷🇺"
            inactive-value="ru"
            size="large"
        />
      </div>
    </template>
    <el-tabs v-model="activeTabName" class="auth-modal-body"
             v-loading="loading">
      <el-tab-pane :label="t('auth.signIn')" name="signIn">
        <div>
          <sign-in-form @set-loading="loading=true" @reset-loading="loading=false"/>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="t('auth.signUp')" name="signUp">
        <sign-up-form @set-loading="loading=true" @reset-loading="loading=false"/>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script setup>
import {defineProps, ref, toRefs} from 'vue'
import SignUpForm from "@/components/SignUpForm";
import SignInForm from "@/components/SignInForm";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const props = defineProps(['openAuthModal'])
const {openAuthModal} = toRefs(props)
const loading = ref(false)
const activeTabName = ref('signIn')


</script>

<style>
.auth-modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0;
}

.auth-modal-header h4 {
  margin: 0;
}

.auth-modal-body {
  flex: 1;
  padding: 0 30px 10px;
}

.auth-modal {
  --el-dialog-padding-primary: -10px !important;
}
</style>
