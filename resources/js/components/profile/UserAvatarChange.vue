<template>
    <div class="user-avatar-editing-container"
         :class="{'avatar-uploading': avatarUploadingStatus !== AvatarUploadStatusesEnum.LOADED}">

        <el-upload
            class="avatar-uploader"
            name="photo"
            :show-file-list="false"
            :http-request="onAvatarUpload"
            accept="image/jpeg"
            :on-change="onAvatarChange"
            :on-success="onAvatarSuccessfulUpload"
            :on-error="onAvatarUploadError"
            :before-upload="beforeAvatarUpload"
        >
            <user-avatar :src="uploadedAvatarUrl" :size="200"></user-avatar>
            <div class="avatar-uploader-icon" ref="avatarUploaderIcon"
                 :class="{
                    'avatar-uploaded-success': this.avatarUploadingStatus === AvatarUploadStatusesEnum.SUCCESS,
                    'avatar-uploading-failed': this.avatarUploadingStatus === AvatarUploadStatusesEnum.FAIL
                }">
                <font-awesome-icon v-if="avatarUploadingStatus === AvatarUploadStatusesEnum.LOADED"
                                   icon="plus"></font-awesome-icon>
                <font-awesome-icon v-if="avatarUploadingStatus === AvatarUploadStatusesEnum.SUCCESS"
                                   icon="check"></font-awesome-icon>
                <font-awesome-icon v-if="avatarUploadingStatus === AvatarUploadStatusesEnum.FAIL"
                                   icon="xmark"></font-awesome-icon>
            </div>
        </el-upload>
    </div>
    <errors-alert :errors="avatarDeletionErrors"></errors-alert>
    <full-width-button :pending="avatarDeletionPending" class="avatar-delete-button" type="danger"
                       @click="usePending(deleteAvatar, 'avatarDeletionPending')">
        {{
            $t('updateUser.avatar.buttons.delete')
        }}
    </full-width-button>
</template>

<script>
import { AvatarUploadStatusesEnum } from '@/helpers/enums/AvatarUploadStatusesEnum'
import UserAvatar from '@/components/profile/UserAvatar.vue'
import { ElLoading, ElMessage } from 'element-plus'
import { mapState } from 'vuex'
import apiRequest from '@/helpers/apiRequest'
import { API_DELETE_USER_AVATAR_URL, API_UPDATE_USER_AVATAR_URL } from '@/api/users'
import getErrorsFromResponse from '@/helpers/errors'
import FullWidthButton from '@/components/FullWidthButton.vue'
import usePending from '@/mixins/usePending'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'

export default {
    name: 'UserAvatarChange',
    mixins: [usePending],
    computed: {
        AvatarUploadStatusesEnum() {
            return AvatarUploadStatusesEnum
        },
        ...mapState('auth', ['user'])
    },
    components: {
        ErrorsAlert,
        FullWidthButton,
        UserAvatar
    },
    data() {
        return {
            uploadedAvatarUrl: '',
            avatarUploadingPending: false,
            avatarUploadingStatus: AvatarUploadStatusesEnum.LOADED,
            avatarUploadingTimeout: null,
            uploadingLoading: null,
            avatarDeletionPending: false,
            avatarDeletionErrors: []
        }
    },
    methods: {
        async deleteAvatar() {
            try {
                await apiRequest(API_DELETE_USER_AVATAR_URL, { id: this.user.id })
                this.uploadedAvatarUrl = ''
                this.avatarDeletionErrors = []
                this.user.avatar = null
            } catch (error) {
                this.avatarDeletionErrors = getErrorsFromResponse(error)
            }
        },
        async onAvatarUpload(request) {
            const formData = new FormData()
            formData.append('photo', request.file)

            try {
                const response = await apiRequest(API_UPDATE_USER_AVATAR_URL, { id: this.user.id }, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                request.onSuccess(response.data, request.file)
            } catch (error) {
                request.onError(error)
            }
        },
        onAvatarChange(event) {
            this.avatarUploadingStatus =
                Object.values(AvatarUploadStatusesEnum).find((status) => status === event.status) || AvatarUploadStatusesEnum.LOADED

            if (this.avatarUploadingStatus === AvatarUploadStatusesEnum.UPLOADING) {
                this.uploadingLoading = ElLoading.service({
                    target: this.$refs.avatarUploaderIcon,
                    customClass: 'avatar-uploader-loading',
                    background: 'transparent'
                })
            } else {
                this.uploadingLoading.close()
            }

            if (this.avatarUploadingStatus === AvatarUploadStatusesEnum.SUCCESS || this.avatarUploadingStatus === AvatarUploadStatusesEnum.FAIL) {
                clearTimeout(this.avatarUploadingTimeout)
                this.avatarUploadingTimeout = setTimeout(() => {
                    this.avatarUploadingStatus = AvatarUploadStatusesEnum.LOADED
                }, 5000)
            }
        },
        onAvatarSuccessfulUpload(response, uploadFile) {
            this.uploadedAvatarUrl = URL.createObjectURL(uploadFile.raw)

            this.user.avatar = response.avatarPath
        },
        onAvatarUploadError(errors) {
            const errorsGroup = getErrorsFromResponse(errors)

            Object.values(errorsGroup).forEach((errors) => {
                errors.forEach((error) => {
                    ElMessage.error(error)
                })
            })
        },
        beforeAvatarUpload(rawFile) {
            const isJPG = rawFile.type === 'image/jpeg'
            const isLargeThan2Megabit = rawFile.size / 1024 / 1024 < 2

            if (!isJPG) {
                ElMessage.error(this.$t('updateUser.avatar.errors.incorrectExtension'))
            }
            if (!isLargeThan2Megabit) {
                ElMessage.error(this.$t('updateUser.avatar.errors.incorrectSize'))
            }

            if (!isJPG || !isLargeThan2Megabit) {
                this.uploadingLoading.close()
                this.avatarUploadingStatus = AvatarUploadStatusesEnum.LOADED
            }

            return isJPG && isLargeThan2Megabit
        }
    }
}
</script>

<style scoped lang="scss">
.user-avatar-editing-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.avatar-delete-button {
    margin-bottom: 20px;
}

.user-avatar-editing-container:not(.avatar-uploading) .avatar-uploader:hover {
    opacity: 0.8;
}

.avatar-uploading {
    &, :deep( .avatar-uploader .el-upload) {
        cursor: default !important;
    }
}

.avatar-uploader {
    position: relative;
}

:deep(.avatar-uploader-loading) {
    border-radius: 100px;
}

:deep(.avatar-uploader-loading .path) {
    stroke: var(--el-color-white);
    stroke-width: 4px;
}

.avatar-uploader-icon {
    position: absolute;
    width: 55px;
    height: 55px;
    bottom: 0;
    right: 0;
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border-radius: 100px;
    border: 5px solid var(--el-bg-color);
}

.avatar-uploaded-success {
    background-color: var(--el-color-success);
}

.avatar-uploading-failed {
    background-color: var(--el-color-danger);
}
</style>
