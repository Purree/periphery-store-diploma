<template>
    <el-menu-item-group class="header-additional-actions" title="Additional actions">
        <el-menu-item class="inactive-header-element change-theme-switch">
            <change-theme-button/>
            <change-language-button/>
        </el-menu-item>
    </el-menu-item-group>
</template>

<script>
import ChangeThemeButton from '@/components/header/ChangeThemeButton.vue'
import ChangeLanguageButton from '@/components/header/ChangeLanguageButton.vue'

export default {
    name: 'AdditionalActions',
    components: {
        ChangeLanguageButton,
        ChangeThemeButton
    }
}
</script>

<style scoped>
.header-additional-actions {
    min-width: 66px;
}
</style>
