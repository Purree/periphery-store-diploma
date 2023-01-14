<template>
    <el-switch v-bind="$attrs" v-model="languageBoolean" />
</template>

<script>
import { mapState } from 'vuex'
import changeLanguage from '@/mixins/changeLanguage'

export default {
    name: 'ChangeLanguageButton',
    mixins: [changeLanguage],
    computed: {
        ...mapState('language', ['language']),
        languageBoolean: {
            get() {
                return this.language === 'ru'
            },
            set(value) {
                this.changeLanguage(value ? 'ru' : 'en')
            }
        }
    }
}
</script>
