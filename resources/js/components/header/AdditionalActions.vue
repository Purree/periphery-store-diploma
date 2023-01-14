<template>
    <el-menu-item-group class="header-additional-actions" title="Additional actions">
        <el-menu-item class="inactive-header-element change-theme-switch">
            <change-theme-button/>
        </el-menu-item>
        <el-menu-item class="inactive-header-element change-language-button">
            <change-language-button/>
        </el-menu-item>
    </el-menu-item-group>
</template>

<script>
import ChangeThemeButton from '@/components/changeTheme/ChangeThemeButton.vue'
import ChangeLanguageButton from '@/components/changeLanguage/ChangeLanguageButton.vue'

export default {
    name: 'AdditionalActions',
    components: {
        ChangeLanguageButton,
        ChangeThemeButton
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

.change-theme-switch {
    display: flex;
    align-items: center;
    justify-content: center;
}

.change-language-button {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
