<template>
    <div class="avatar-rounded-button" ref="roundedButton"
         :class="{
                    'avatar-rounded-button-success': this.status === AvatarUploadStatusesEnum.SUCCESS,
                    'avatar-rounded-button-danger': this.status === AvatarUploadStatusesEnum.FAIL
                }">
        <slot v-if="!pending"></slot>
    </div>
</template>

<script>
import { AvatarUploadStatusesEnum } from '@/helpers/enums/AvatarUploadStatusesEnum'
import { ElLoading } from 'element-plus'

export default {
    name: 'AvatarUploadingRoundedButton',
    computed: {
        AvatarUploadStatusesEnum() {
            return AvatarUploadStatusesEnum
        }
    },
    data() {
        return {
            loader: null
        }
    },
    props: {
        status: {
            type: String,
            required: false,
            default: AvatarUploadStatusesEnum.LOADED
        },
        pending: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    watch: {
        pending(value) {
            if (value) {
                this.loader = ElLoading.service({
                    target: this.$refs.roundedButton,
                    customClass: 'avatar-uploader-loading',
                    background: 'transparent'
                })
            } else {
                this.loader.close()
            }
        }
    }
}
</script>

<style scoped>
.avatar-rounded-button {
    width: 55px;
    height: 55px;
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border-radius: var(--el-border-radius-circle);
    border: 5px solid var(--el-bg-color);
}

.avatar-rounded-button-success {
    background-color: var(--el-color-success);
}

.avatar-rounded-button-danger {
    background-color: var(--el-color-danger);
}

:deep(.avatar-uploader-loading) {
    border-radius: var(--el-border-radius-circle);
}

:deep(.avatar-uploader-loading .path) {
    stroke: var(--el-color-white);
    stroke-width: 4px;
}
</style>
