<template>
    <el-form label-position="top" ref="form" :rules="validationRules" :model="userMobile">
        <el-form-item :label="$t('profile.contactInformation.mobiles.mobile')" prop="mobile">
            <el-input type="tel" pattern="/^\+7[0-9\s\-\+\(\)]{10}$/" v-model="userMobile.mobile" :minlength="12"
                      :maxlength="12"></el-input>
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
    name: 'UserMobileUpdateForm',
    components: { FullWidthButton },
    emits: ['update:userMobileForm', 'updateMobile'],
    data() {
        return {
            validationRules: {
                mobile: {
                    required: true,
                    length: 12,
                    pattern: /^\+7[0-9]{10}$/
                }
            }
        }
    },
    methods: {
        async onSubmit() {
            await this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$emit('updateMobile', this.userMobile)
                }
            })
        }
    },
    props: {
        userMobileForm: {
            required: true,
            type: Object
        },
        pending: {
            required: true,
            type: Boolean
        }
    },
    computed: {
        userMobile: {
            get() {
                return this.userMobileForm
            },
            set(value) {
                this.$emit('update:userMobileForm', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
