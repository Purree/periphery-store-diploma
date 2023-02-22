<template>
    <div>
        <errors-alert :errors="errors"></errors-alert>
        <el-alert v-if="userSuccessfullyUpdated" type="success" class="userSuccessfullyUpdatedAlert"
                  :title="$t('updateUser.mainInformation.successfullyUpdated')"></el-alert>

        <el-form @submit.prevent="usePending(updateUser, 'updateUserPending')" :rules="rules" :model="userInformation"
                 ref="mainUserInformationForm">
            <el-form-item :label="$t('authorization.nickname')" prop="name">
                <el-input v-model="userInformation.name"/>
            </el-form-item>

            <el-form-item class="mainUserInformationFormButtons">
                <full-width-button :disabled="this.userInformation.name === this.user.name"
                                   :pending="updateUserPending" type="primary"
                                   @click="usePending(updateUser, 'updateUserPending')">
                    {{ $t('updateUser.mainInformation.buttons.update') }}
                </full-width-button>
                <full-width-button @click="resetForm">
                    {{ $t('updateUser.mainInformation.buttons.cancel') }}
                </full-width-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_UPDATE_USER_URL } from '@/api/users'
import getErrorsFromResponse from '@/helpers/errors'

export default {
    name: 'MainUserInformationChange',
    components: {
        ErrorsAlert,
        FullWidthButton
    },
    mixins: [usePending],
    data() {
        return {
            errors: {},
            updateUserPending: false,
            userSuccessfullyUpdated: false,
            userInformation: {
                name: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: this.$t('updateUser.mainInformation.errors.nickname.required'),
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 30,
                        message: this.$t('updateUser.mainInformation.errors.nickname.length'),
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        async updateUser() {
            if (this.userInformation.name === this.user.name) {
                return
            }

            const isUserInformationValid = await this.$refs.mainUserInformationForm.validate((isValid) => isValid)

            if (!isUserInformationValid) {
                this.userSuccessfullyUpdated = false
                this.errors = {
                    ...this.errors,
                    ...{ validation: [this.$t('updateUser.mainInformation.errors.validationMessage')] }
                }
                return
            }

            try {
                const response = await apiRequest(API_UPDATE_USER_URL, { id: this.user.id }, this.userInformation)
                await this.$store.commit('auth/setUser', response.data)

                this.errors = {}
                this.showAlertAboutSuccessfulUpdate()
                this.resetForm()

                return response
            } catch (errors) {
                this.errors = getErrorsFromResponse(errors)
            }
        },
        showAlertAboutSuccessfulUpdate() {
            this.userSuccessfullyUpdated = true

            setTimeout(() => {
                this.userSuccessfullyUpdated = false
            }, 3000)
        },
        resetForm() {
            this.$refs.mainUserInformationForm.resetFields()
            this.errors = {}
            this.userInformation.name = this.user.name
        }
    },
    mounted() {
        this.resetForm()
    },
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>

<style scoped>
.mainUserInformationFormButtons {
    margin-top: 30px;
}

:deep(.mainUserInformationFormButtons > *) {
    display: flex;
    flex-wrap: nowrap;
}

.userSuccessfullyUpdatedAlert {
    margin-bottom: 10px;
}
</style>
