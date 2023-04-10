<template>
    <div class="profile-container" v-if="isUserHasPermission(this.user, PermissionsEnum.change_own_data)">
        <div class="profile-title">
            {{ $t('profile.titles.personalInformation') }}
        </div>
        <el-divider />
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

<style scoped>
.profile-container {
    background: var(--el-bg-color);
    padding-inline: 20px;
    padding-top: 20px;
    padding-bottom: 1px;
    border-bottom-left-radius: var(--el-border-radius-round);
    border-bottom-right-radius: var(--el-border-radius-round);
}
.profile-title {
    text-align: center;
    font-size: var(--el-font-size-extra-large);
}
</style>
