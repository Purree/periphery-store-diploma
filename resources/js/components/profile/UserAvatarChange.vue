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
            <avatar-uploading-rounded-button :status="avatarUploadingStatus"
                                             :pending="this.avatarUploadingStatus === AvatarUploadStatusesEnum.UPLOADING"
                                             class="avatar-uploader-button">
                <font-awesome-icon v-if="avatarUploadingStatus === AvatarUploadStatusesEnum.LOADED"
                                   icon="plus"></font-awesome-icon>
                <font-awesome-icon v-if="avatarUploadingStatus === AvatarUploadStatusesEnum.SUCCESS"
                                   icon="check"></font-awesome-icon>
                <font-awesome-icon v-if="avatarUploadingStatus === AvatarUploadStatusesEnum.FAIL"
                                   icon="xmark"></font-awesome-icon>
            </avatar-uploading-rounded-button>
            <avatar-uploading-rounded-button @click.stop="usePending(deleteAvatar, 'avatarDeletionPending')"
                                             :status="AvatarUploadStatusesEnum.FAIL" class="avatar-delete-button"
                                             :pending="avatarDeletionPending" v-if="user.avatar">
                <font-awesome-icon type="danger"
                                   icon="trash">
                    {{
                        $t('profile.avatar.buttons.delete')
                    }}
                </font-awesome-icon>
            </avatar-uploading-rounded-button>
        </el-upload>
    </div>
    <errors-alert :errors="avatarDeletionErrors"></errors-alert>
</template>

<script>
import { AvatarUploadStatusesEnum } from '@/helpers/enums/AvatarUploadStatusesEnum'
import UserAvatar from '@/components/profile/UserAvatar.vue'
import { ElMessage } from 'element-plus'
import { mapState } from 'vuex'
import apiRequest from '@/helpers/apiRequest'
import { API_DELETE_USER_AVATAR_URL, API_UPDATE_USER_AVATAR_URL } from '@/api/users'
import getErrorsFromResponse from '@/helpers/errors'
import usePending from '@/mixins/usePending'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import AvatarUploadingRoundedButton from '@/components/profile/AvatarUploadingRoundedButton.vue'

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
        AvatarUploadingRoundedButton,
        ErrorsAlert,
        UserAvatar
    },
    data() {
        return {
            uploadedAvatarUrl: '',
            avatarUploadingStatus: AvatarUploadStatusesEnum.LOADED,
            avatarUploadingTimeout: null,
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

            if (this.avatarUploadingStatus === AvatarUploadStatusesEnum.SUCCESS || this.avatarUploadingStatus === AvatarUploadStatusesEnum.FAIL) {
                clearTimeout(this.avatarUploadingTimeout)
                this.avatarUploadingTimeout = setTimeout(() => {
                    this.avatarUploadingStatus = AvatarUploadStatusesEnum.LOADED
                }, 5000)
            }
        },
        onAvatarSuccessfulUpload(response, uploadFile) {
            if (!response) {
                return
            }

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
                ElMessage.error(this.$t('profile.avatar.errors.incorrectExtension'))
            }
            if (!isLargeThan2Megabit) {
                ElMessage.error(this.$t('profile.avatar.errors.incorrectSize'))
            }

            if (!isJPG || !isLargeThan2Megabit) {
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

    &:not(:has(.avatar-delete-button:hover)):not(.avatar-uploading) .avatar-uploader:hover *:not(.avatar-delete-button *) {
        opacity: 0.8;
    }
}

.avatar-delete-button:hover {
    opacity: 0.8 !important;
    cursor: pointer;
}

.avatar-uploading {
    &, :deep( .avatar-uploader .el-upload) {
        cursor: default !important;
    }
}

.avatar-uploader {
    position: relative;
}

.avatar-uploader-button {
    position: absolute;
    bottom: 0;
    right: 0;
}

.avatar-delete-button {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1 !important;
}
</style>
