<template>
    <el-config-provider :locale="locale">
        <unable-to-authenticate-dialog @logout="failedToLogin = !failedToLogin"
                                       v-if="failedToLogin"></unable-to-authenticate-dialog>
        <AppLayout class="app-content" v-if="isLoaded">
            <router-view></router-view>
        </AppLayout>
        <div v-else v-loading.fullscreen.lock="!isLoaded"></div>
    </el-config-provider>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'
import changeTheme from '@/mixins/changeTheme'
import changeLanguage from '@/mixins/changeLanguage'
import { mapState } from 'vuex'
import UnableToAuthenticateDialog from '@/components/authentication/UnableToAuthenticateDialog.vue'

export default {
    name: 'app',
    components: {
        UnableToAuthenticateDialog,
        AppLayout
    },
    mixins: [changeTheme, changeLanguage],
    data() {
        return {
            isLoaded: false,
            failedToLogin: false
        }
    },
    async mounted() {
        if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.changeTheme()
        }
        if (localStorage.getItem('language') === 'en' || (localStorage.getItem('language') !== 'ru' && navigator.language !== 'ru-RU')) {
            this.changeLanguage()
        }

        try {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                await this.$store.dispatch('auth/changeStatusToLoggedIn')
            }
        } catch (error) {
            console.log(error.response)

            if (error.response.status !== 401) {
                this.failedToLogin = true
            }
        } finally {
            this.isLoaded = true
        }
    },
    computed: {
        ...mapState('language', ['locale']),
        ...mapState('auth', ['isLoggedIn'])
    }
}
</script>

<style scoped>
.app-content {
    min-height: 100vh;
}
</style>
