<template>
    <full-width-button v-bind="$attrs" @click="changeLanguage">{{
            $t('nav.buttons.additional_actions.change_language')
        }}
    </full-width-button>
</template>

<script>
import changeLanguage from '@/mixins/changeLanguage'
import FullWidthButton from '@/components/FullWidthButton.vue'

export default {
    name: 'ChangeLanguageButton',
    components: { FullWidthButton },
    mixins: [changeLanguage]
}
</script>
