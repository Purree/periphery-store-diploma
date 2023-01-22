<template>
    <errors-alert :errors="errors"/>

    <input-row v-model="registrationData.email" :placeholder="$t('authorization.email')" type="email">
        {{ $t('authorization.email') }}
    </input-row>
    <input-row v-model="registrationData.name" :placeholder="$t('authorization.nickname')">
        {{ $t('authorization.nickname') }}
    </input-row>
    <input-row v-model="registrationData.password" show-password :placeholder="$t('authorization.password')"
               type="password">
        {{ $t('authorization.password') }}
    </input-row>
    <input-row v-model="registrationData.password_confirmation" show-password
               :placeholder="$t('authorization.confirmPassword')"
               type="password">
        {{ $t('authorization.confirmPassword') }}
    </input-row>

    <full-width-button :pending="registrationPending" type="primary"
                       @click="usePending(register, 'registrationPending')" class="fullwidth-button">
        {{ $t('authorization.register') }}
    </full-width-button>
</template>

<script>
import InputRow from '@/components/InputRow.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_REGISTRATION_URL } from '@/api/auth'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import { ElMessage } from 'element-plus'

export default {
    name: 'Register',
    components: {
        ErrorsAlert,
        FullWidthButton,
        InputRow
    },
    mixins: [usePending],
    data() {
        return {
            registrationPending: false,
            registrationData: {
                email: '',
                name: '',
                password: '',
                password_confirmation: ''
            },
            errors: {}
        }
    },
    methods: {
        async register() {
            try {
                await apiRequest(API_REGISTRATION_URL, {}, this.registrationData)
                ElMessage.success(this.$t('authorization.successfullyRegistered'))
                this.$router.push({ name: 'Login' })
            } catch (error) {
                this.errors = error.response.data.errors
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
