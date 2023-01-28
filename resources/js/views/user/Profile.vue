<template>
    <div class="userAvatarEditingContainer">
        <user-avatar :size="200"></user-avatar>
    </div>
    <div>
        <main-user-information-change></main-user-information-change>
    </div>
</template>

<script>
import UserAvatar from '@/components/profile/UserAvatar.vue'
import MainUserInformationChange from '@/components/profile/MainUserInformationChange.vue'

export default {
    name: 'Profile',
    components: { MainUserInformationChange, UserAvatar }
}
</script>

<style scoped>
.userAvatarEditingContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>
