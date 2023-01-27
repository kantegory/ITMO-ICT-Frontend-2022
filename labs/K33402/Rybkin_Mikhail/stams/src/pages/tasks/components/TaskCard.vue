<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-space :spacer="spacer" direction="horizontal">
          <span>{{ task.name }}</span>
          <!--TODO translations-->
          <el-tooltip
              :content="task.is_mandatory ? 'Обязательное' : 'Не обязательное'"
              effect="dark"
              placement="top"
          >
            <el-icon
                :color="task.is_mandatory ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
                size="20px"
            >
              <exclamation-circle-icon/>
            </el-icon>
          </el-tooltip>
          <el-tooltip
              :content="task.is_protectable ? 'Требует защиты' : 'Не требует защиты'"
              effect="dark"
              placement="top"
          >
            <el-icon
                :color="task.is_protectable ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
                size="20px"
            >
              <shield-check-icon/>
            </el-icon>
          </el-tooltip>
        </el-space>
      </div>
    </template>
    <task-descriptions :task="task"/>
  </el-card>
</template>

<script setup>
import {ExclamationCircleIcon, ShieldCheckIcon} from "@heroicons/vue/20/solid";
import {defineProps, h, ref} from "vue";
import {ElDivider} from "element-plus";
import TaskDescriptions from "@/pages/tasks/components/TaskDescriptions";

const props = defineProps(['task'])
const task = ref(props.task)
const spacer = h(ElDivider, {direction: 'vertical'})

</script>

<style scoped>
.card-header {
  display: flex;
}

.warning {
  color: var(--el-color-danger)
}
</style>