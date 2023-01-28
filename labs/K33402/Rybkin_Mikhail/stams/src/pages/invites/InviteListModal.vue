<template>
  <el-dialog
      v-model="modalStatus"
      align-center
      title="Invites"
      width="80%"
      @close="$emit('closeModal')"
  >
    <el-table
        v-loading="loading"
        :data="invitesList"
        stripe
        table-layout="auto"
    >
      <el-table-column label="Название" prop="name"/>
      <el-table-column label="Макс. польз." prop="max_users"/>
      <el-table-column label="Дата создания">
        <template #default="scope">
        <span>
          {{
            formatDate(
                scope.row.created_at
            )
          }}
        </span>
        </template>
      </el-table-column>
      <el-table-column label="Создатель" prop="created_by.fio"/>
      <el-table-column label="Отозвана" prop="revoked"/>
      <el-table-column label="Действия">
        <template #default="scope">
          <el-button type="primary" @click="copyInvite(scope.row.link)">
            <el-icon>
              <clipboard-document-icon/>
            </el-icon>
          </el-button>
          <el-popconfirm
              cancel-button-text="Не нужно"
              confirm-button-text="Да"
              title="Отозвать ссылку?"
              width="220"
              @confirm="revokeInvite(scope.row.id)"
          >
            <template #reference>
              <el-button disabled type="danger">
                <el-icon>
                  <x-circle-icon/>
                </el-icon>
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-button type="primary" @click="openInviteFormModal = true">
        Создать новое
      </el-button>
    </template>
    <invite-form-modal
        :course-id="courseId"
        :modal-status="openInviteFormModal"
        @closeModal="openInviteFormModal = false"
        @fetchCourseInfo="$emit('fetchCourseInfo')"
    />
  </el-dialog>
</template>

<script setup>
import {defineProps, ref, toRefs} from "vue";
import {ClipboardDocumentIcon, XCircleIcon} from "@heroicons/vue/24/outline";
import InviteFormModal from "@/pages/invites/InviteFormModal";
import {formatDate} from "@/helpers";
import {ElMessage} from "element-plus";


const props = defineProps(['invitesList', 'loading', 'modalStatus', 'courseId'])
const {invitesList, loading, modalStatus, courseId} = toRefs(props)
const openInviteFormModal = ref(false)

const revokeInvite = function (inviteId) {
  console.log(inviteId)
}

const copyInvite = function (inviteLink) {
  const link = `${location.protocol}//${location.host}/#/invite/${inviteLink}`
  navigator.clipboard.writeText(link).then(function () {
    ElMessage({
      message: 'Скопировано',
      type: 'success',
    })
  }, function () {
    ElMessage.error('Что-то пошло не так')
  });
}
</script>

<style scoped>

</style>