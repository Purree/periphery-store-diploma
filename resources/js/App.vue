<template>
    <el-config-provider :locale="locale">
        <unable-to-authenticate-dialog v-if="failedToLogin"></unable-to-authenticate-dialog>
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
import apiRequest from '@/helpers/apiRequest'
import { API_CURRENT_USER_URL } from '@/api/users'
import AuthenticationError from '@/errors/AuthenticationError'
import UnableToAuthenticateDialog from '@/components/authentication/UnableToAuthenticateDialog.vue'

export default {
    name: 'app',
    components: { UnableToAuthenticateDialog, AppLayout },
    mixins: [changeTheme, changeLanguage],
    data() {
        return {
            isLoaded: false,
            failedToLogin: false
        }
    },
    methods: {
        async checkIsLoggedIn() {
            if (!this.isLoggedIn) {
                return false
            }

            try {
                const response = await apiRequest(API_CURRENT_USER_URL)
                this.$store.commit('auth/setUser', response.data)
                return true
            } catch (error) {
                console.log(error.response)

                if (error.response.status === 401) {
                    return false
                }
                throw new AuthenticationError('Failed to authenticate user')
            }
        }
    },
    async mounted() {
        if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.changeTheme()
        }
        if (localStorage.getItem('language') === 'en' || (localStorage.getItem('language') !== 'ru' && navigator.language !== 'ru-RU')) {
            this.changeLanguage()
        }

        this.$store.commit('auth/setIsLoggedIn', localStorage.getItem('isLoggedIn') === 'true')

        try {
            if (!await this.checkIsLoggedIn()) {
                this.$store.commit('auth/setIsLoggedIn', false)
            }
        } catch (error) {
            if (!(error instanceof AuthenticationError)) {
                throw error
            }

            this.failedToLogin = true
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
