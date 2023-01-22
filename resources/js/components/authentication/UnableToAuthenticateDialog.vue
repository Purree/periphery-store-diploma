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
                    <logout-button @logout="$emit('logout')"/>
                </template>
            </el-result>
        </template>
    </el-dialog>
</template>

<script>
import LogoutButton from '@/components/authentication/LogoutButton.vue'

export default {
    name: 'UnableToAuthenticateDialog',
    emits: ['logout'],
    components: { LogoutButton },
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
