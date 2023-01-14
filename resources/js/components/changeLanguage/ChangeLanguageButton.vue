<template>
    <el-button v-bind="$attrs" @click="changeLanguage">Change language</el-button>
</template>

<script>
import changeLanguage from '@/mixins/changeLanguage'

export default {
    name: 'ChangeLanguageButton',
    mixins: [changeLanguage]
}
</script>
