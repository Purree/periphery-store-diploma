<template>
    <full-width-button v-bind="$attrs" :disabled="pending" :class="{'is-loading' : pending}"
                       @click="usePending(logout)">
        {{ $t('authorization.logout') }}
    </full-width-button>
</template>

<script>
import usePending from '@/mixins/usePending'
import FullWidthButton from '@/components/FullWidthButton.vue'
import useErrorsCatch from '@/mixins/useErrorsCatch'

export default {
    name: 'LogoutButton',
    components: { FullWidthButton },
    emits: ['logout'],
    mixins: [usePending, useErrorsCatch],
    data() {
        return {
            pending: false
        }
    },
    methods: {
        async logout() {
            await this.useErrorsCatch(async() => {
                await this.$store.dispatch('auth/logout')
            })

            this.$emit('logout')
        }
    }
}
</script>

<style scoped>

</style>
