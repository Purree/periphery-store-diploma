<template>
    <el-dialog :center="true" :align-center="true" :close-on-click-modal="false" :close-on-press-escape="false"
               :show-close="false" v-model="isActive" width="100%">
        <template v-slot:default>
            <el-result
                class="dialog"
                icon="error"
                :title="$t('authorization.error.unableToDetermineUser')"
                :sub-title="$t('authorization.error.unableToDetermineUserDescription')"
            >
                <template #extra>
                    <!--            @TODO: Add real logout button-->
                    <el-button type="primary">{{ $t('authorization.logout') }}</el-button>
                </template>
            </el-result>
        </template>
    </el-dialog>
</template>

<script>
export default {
    name: 'UnableToAuthenticateDialog',
    computed: {
        isActive: {
            get() {
                return true
            },
            set(value) {
            }
        }
    }
}
</script>

<style scoped>
:deep(*) {
    word-break: break-word;
}
</style>
