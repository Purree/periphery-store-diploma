import { createI18n } from 'vue-i18n'
import messages from '@/lang/messages'

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    globalInjection: true,
    messages
})

export default i18n
