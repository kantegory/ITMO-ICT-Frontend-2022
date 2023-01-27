<template>
  <el-menu
      :ellipsis="false"
      mode="horizontal"
  >

    <div class="flex-grow"/>

    <el-menu-item>
      <template #title>
        <el-switch
            v-model="isDark"
            active-text="Dark"
            inactive-text="Light"
            size="large"
        />
      </template>
    </el-menu-item>
    <el-sub-menu index="account">
      <template #title>
        <el-avatar :size="30">
          <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              alt="Аватар пользователя"
          />
        </el-avatar>
      </template>


      <el-menu-item
          index="account-signout"
          @click="userStore.signOut()"
      >
        <template #title>
          {{ t('auth.signOutPrompt') }}
        </template>
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useUsersStore} from "@/stores/users";
import { useDark } from '@vueuse/core'
import {ref} from "vue";


const {t} = useI18n()
const userStore = useUsersStore()
const isDark = ref(useDark())
// const toggleDark = useToggle(isDark)


</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>