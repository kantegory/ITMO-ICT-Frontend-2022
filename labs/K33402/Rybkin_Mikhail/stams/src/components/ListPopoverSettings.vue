<template>
  <el-popover style="width: fit-content" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="Cog6ToothIcon" title="Настройки списка"/>
    </template>
    <el-form
        label-position="top"
        label-width="auto"
    >
      <el-form-item label="View mode">
        <el-switch
            v-model="listViewMode"
            :active-icon="Squares2X2Icon"
            :inactive-icon="Bars3Icon"
            active-value="cards"
            inactive-value="table"
            size="large"
        />
      </el-form-item>
      <el-form-item label="Date format">
        <el-switch
            v-model="dateFormatMode"
            :active-icon="BoltIcon"
            :inactive-icon="CalendarDaysIcon"
            active-value="relative"
            inactive-value="absolute"
            size="large"
        />
      </el-form-item>
    </el-form>
  </el-popover>
</template>

<script setup>
import {defineProps, ref, watch} from "vue";
import {Bars3Icon, BoltIcon, CalendarDaysIcon, Cog6ToothIcon, Squares2X2Icon} from "@heroicons/vue/24/solid";

const props = defineProps(['useStore'])
const store = props.useStore()

const listViewMode = ref(false)
const dateFormatMode = ref('absolute')

function switchListViewMode() {
  store.setListViewMode(listViewMode.value)
}

function switchDateFormatMode() {
  store.setDateFormatMode(dateFormatMode.value)
}

watch(listViewMode, switchListViewMode)
watch(dateFormatMode, switchDateFormatMode)

</script>

<style scoped>

</style>