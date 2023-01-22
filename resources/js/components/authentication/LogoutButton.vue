<template>
    <el-button type="primary" :disabled="pending" :class="{'is-loading' : pending}" @click="usePending(logout)">
        {{ $t('authorization.logout') }}
    </el-button>
</template>

<script>
import usePending from '@/mixins/usePending'

export default {
    name: 'LogoutButton',
    emits: ['logout'],
    mixins: [usePending],
    data() {
        return {
            pending: false
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch('auth/logout')
            this.$emit('logout')
        }
    }
}
</script>

<style scoped>

</style>
