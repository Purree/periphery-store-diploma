<template>
    <AppLayout class="app-content">
        <router-view></router-view>
    </AppLayout>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'
import changeTheme from '@/mixins/changeTheme'

export default {
    name: 'app',
    components: { AppLayout },
    mixins: [changeTheme],
    mounted() {
        if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.changeTheme()
        }
    }
}
</script>

<style scoped>
.app-content {
    min-height: 100vh;
}
</style>
