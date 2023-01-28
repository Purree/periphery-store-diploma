<template>
    <div>
        <errors-alert :errors="errors"></errors-alert>
        <el-form :rules="rules" :model="userInformation" ref="mainUserInformationForm">
            <el-form-item :label="$t('authorization.nickname')" prop="name">
                <el-input v-model="userInformation.name"/>
            </el-form-item>

            <el-form-item class="mainUserInformationFormButtons">
                <full-width-button type="primary" @click="submitForm(this.$refs.mainUserInformationForm)">
                    Create
                </full-width-button>
                <full-width-button @click="resetForm(this.$refs.mainUserInformationForm)">Reset</full-width-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'

export default {
    name: 'MainUserInformationChange',
    components: {
        ErrorsAlert,
        FullWidthButton
    },
    data() {
        return {
            errors: {},
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
        submitForm(form) {
            form.validate((valid) => {
                if (valid) {
                    alert('update user')
                } else {
                    this.errors = {
                        ...this.errors,
                        ...{ validation: [this.$t('updateUser.mainInformation.errors.validationMessage')] }
                    }
                }
            })
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
</style>
