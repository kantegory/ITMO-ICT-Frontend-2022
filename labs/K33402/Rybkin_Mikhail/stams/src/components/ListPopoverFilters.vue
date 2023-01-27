<template>
  <el-popover style="width: fit-content" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="FunnelIcon" disabled title="Фильтры"/>
    </template>

  </el-popover>

</template>

<script setup>
import {FunnelIcon} from "@heroicons/vue/24/solid";
</script>

<style scoped>

</style>