<template>
    <el-menu-item-group class="header-additional-actions" :title="$t('nav.buttons.additional_actions.name')">
        <el-menu-item class="inactive-header-element">
            <change-theme-button/>
        </el-menu-item>
        <el-menu-item class="inactive-header-element">
            <change-language-button/>
        </el-menu-item>
        <el-menu-item v-show="checkIsLoggedIn()" class="inactive-header-element">
            <logout-button @logout="openLogoutMessage" type="danger"/>
        </el-menu-item>
    </el-menu-item-group>
</template>

<script>
import ChangeThemeButton from '@/components/changeTheme/ChangeThemeButton.vue'
import ChangeLanguageButton from '@/components/changeLanguage/ChangeLanguageButton.vue'
import LogoutButton from '@/components/authentication/LogoutButton.vue'
import auth from '@/mixins/auth'
import { ElMessage } from 'element-plus'

export default {
    name: 'AdditionalActions',
    mixins: [auth],
    components: {
        LogoutButton,
        ChangeLanguageButton,
        ChangeThemeButton
    },
    methods: {
        openLogoutMessage() {
            ElMessage.success(this.$t('authorization.successfullyLoggedOut'))
        }
    }
}
</script>

<style scoped lang="scss">
.header-additional-actions {
    min-width: 66px;
    text-align: center;
    & :deep(.el-menu-item-group__title) {
        padding-left: 0;
    }
}

.inactive-header-element {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
