<template>
    <div class="user-avatar-editing-container"
         :class="{'avatar-uploading': avatarUploadingStatus !== AvatarUploadStatusesEnum.LOADED}">
        <!-- @TODO Update action -->
        <el-upload
            class="avatar-uploader"
            name="avatar"
            action="/api/users////avatar"
            :show-file-list="false"
            :with-credentials="true"
            accept="image/jpeg"
            :on-change="onAvatarChange"
            :on-success="onAvatarSuccessfulUpload"
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
</template>

<script>
import { AvatarUploadStatusesEnum } from '@/helpers/enums/AvatarUploadStatusesEnum'
import UserAvatar from '@/components/profile/UserAvatar.vue'
import { ElLoading, ElMessage } from 'element-plus'

export default {
    name: 'UserAvatarChange',
    computed: {
        AvatarUploadStatusesEnum() {
            return AvatarUploadStatusesEnum
        }
    },
    components: {
        UserAvatar
    },
    data() {
        return {
            uploadedAvatarUrl: '',
            avatarUploadingPending: false,
            avatarUploadingStatus: AvatarUploadStatusesEnum.LOADED,
            avatarUploadingTimeout: null,
            uploadingLoading: null
        }
    },
    methods: {
        onAvatarChange(event) {
            console.log(event)
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

.user-avatar-editing-container:hover:not(.avatar-uploading) {
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
