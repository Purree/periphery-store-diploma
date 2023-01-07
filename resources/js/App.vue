<template>
    <AppLayout>
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
