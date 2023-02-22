<template>
    <div v-if="isUserHasPermission(this.user, PermissionsEnum.change_own_data)">
        <user-avatar-change></user-avatar-change>
        <div>
            <main-user-information-change></main-user-information-change>
        </div>
    </div>
</template>

<script>
import MainUserInformationChange from '@/components/profile/MainUserInformationChange.vue'
import UserAvatarChange from '@/components/profile/UserAvatarChange.vue'
import { isUserHasPermission } from '@/helpers/accessRights'
import { mapState } from 'vuex'
import PermissionsEnum from '@/helpers/enums/PermissionsEnum'

export default {
    name: 'Profile',
    methods: { isUserHasPermission },
    components: {
        UserAvatarChange,
        MainUserInformationChange
    },
    computed: {
        PermissionsEnum() {
            return PermissionsEnum
        },
        ...mapState('auth', ['user'])
    }
}
</script>
