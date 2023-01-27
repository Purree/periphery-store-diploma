<template>
    <errors-alert :errors="errors"/>

    <input-row v-model="loginData.email" :placeholder="$t('authorization.email')" type="email">
        {{ $t('authorization.email') }}
    </input-row>
    <input-row v-model="loginData.password" show-password
               :placeholder="$t('authorization.password')">
        {{ $t('authorization.password') }}
    </input-row>
    <el-checkbox v-model="loginData.remember">{{ $t('authorization.rememberMe') }}</el-checkbox>

    <full-width-button :pending="loginPending" type="primary"
                       @click="usePending(login, 'loginPending')" class="fullwidth-button">
        {{ $t('authorization.login') }}
    </full-width-button>
</template>

<script>
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import InputRow from '@/components/InputRow.vue'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_LOGIN_URL } from '@/api/auth'
import { ElMessage } from 'element-plus'
import getErrorsFromResponse from '@/helpers/errors'

export default {
    name: 'Login',
    mixins: [usePending],
    components: {
        ErrorsAlert,
        FullWidthButton,
        InputRow
    },
    data() {
        return {
            loginPending: false,
            loginData: {
                email: '',
                password: '',
                remember: false
            },
            errors: {}
        }
    },
    methods: {
        async login() {
            try {
                await apiRequest(API_LOGIN_URL, {}, this.loginData)
                await this.$store.dispatch('auth/login', this.loginData)
                ElMessage.success(this.$t('authorization.successfullyLoggedIn'))
                this.$router.push({ name: 'Home' })
            } catch (error) {
                this.errors = getErrorsFromResponse(error)
            }
        }
    }
}
</script>

<style scoped>
.fullwidth-button {
    margin-top: 15px;
}
</style>
