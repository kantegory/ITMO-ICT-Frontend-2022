<template>
  <el-popover style="width: fit-content" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="ArrowsUpDownIcon" title="Опции сортировки"/>
    </template>
    <el-space direction="vertical">
      <el-radio-group v-model="listSortKey" class="ml-4">
        <el-radio
            v-for="option in sortOptions"
            :key="option.value"
            :label="option.value"
        >
          {{option.name}}
        </el-radio>
      </el-radio-group>
      <div class="sort-switch-wrapper">
        <el-switch
            v-model="listSortOrder"
            :active-icon="ArrowUpIcon"
            :inactive-icon="ArrowDownIcon"
            active-value="asc"
            inactive-value="desc"
            size="large"
        />
      </div>
    </el-space>
  </el-popover>

</template>

<script setup>
import {defineProps, reactive, ref, watch} from "vue";
import {ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon} from "@heroicons/vue/24/solid";

const props = defineProps(['useStore', 'sortOptions', 'defaultOption', 'defaultOrder'])
const store = props.useStore()
const sortOptions = reactive(props.sortOptions)


const listSortKey = ref(props.defaultOption)
const listSortOrder = ref(props.defaultOrder)

function changeListSortKey() {
  store.setListSortKey(listSortKey.value)
}

function changeListSortOrder() {
  store.setListSortOrder(listSortOrder.value)
}

watch(listSortKey, changeListSortKey)
watch(listSortOrder, changeListSortOrder)

</script>

<style scoped>
.sort-switch-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>