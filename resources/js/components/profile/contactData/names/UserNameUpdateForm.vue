<template>
    <el-form label-position="top" ref="form" :rules="validationRules" :model="userName">
        <el-form-item :label="$t('profile.contactInformation.names.firstName')" prop="firstName">
            <el-input v-model="userName.firstName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('profile.contactInformation.names.middleName')" prop="middleName">
            <el-input v-model="userName.middleName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('profile.contactInformation.names.lastName')" prop="lastName">
            <el-input v-model="userName.lastName"></el-input>
        </el-form-item>
        <full-width-button :pending="pending" type="primary" @click="onSubmit()">{{
                $t('general.save')
            }}
        </full-width-button>
    </el-form>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'

export default {
    name: 'UserNameUpdateForm',
    components: { FullWidthButton },
    emits: ['update:userNameForm', 'updateName'],
    data() {
        return {
            validationRules: {
                firstName: { required: true },
                middleName: { required: true },
                lastName: {}
            }
        }
    },
    methods: {
        async onSubmit() {
            await this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$emit('updateName', this.userName)
                }
            })
        }
    },
    props: {
        userNameForm: {
            required: true,
            type: Object
        },
        pending: {
            required: true,
            type: Boolean
        }
    },
    computed: {
        userName: {
            get() {
                return this.userNameForm
            },
            set(value) {
                this.$emit('update:userNameForm', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
