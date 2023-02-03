<template>
    <user-avatar-change></user-avatar-change>
    <div>
        <main-user-information-change></main-user-information-change>
    </div>
</template>

<script>
import MainUserInformationChange from '@/components/profile/MainUserInformationChange.vue'
import UserAvatarChange from '@/components/profile/UserAvatarChange.vue'

export default {
    name: 'Profile',
    components: {
        UserAvatarChange,
        MainUserInformationChange
    }
}
</script>
