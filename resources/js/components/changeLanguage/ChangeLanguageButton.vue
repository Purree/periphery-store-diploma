<template>
    <el-button v-bind="$attrs" @click="changeLanguage">{{ $t('nav.buttons.additional_actions.change_language') }}</el-button>
</template>

<script>
import changeLanguage from '@/mixins/changeLanguage'

export default {
    name: 'ChangeLanguageButton',
    mixins: [changeLanguage]
}
</script>
