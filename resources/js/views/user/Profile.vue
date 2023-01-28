<template>
    <div>
        <user-avatar :size="200"></user-avatar>
    </div>
</template>

<script>
import UserAvatar from '@/components/profile/UserAvatar.vue'

export default {
    name: 'Profile',
    components: { UserAvatar }
}
</script>

<style scoped>

</style>
