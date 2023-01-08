<template>
    <AppLayout class="app-content">
        <router-view></router-view>
    </AppLayout>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'

export default {
    name: 'app',
    components: { AppLayout }
}
</script>

<style scoped>
.app-content {
    height: 100vh;
}
</style>
