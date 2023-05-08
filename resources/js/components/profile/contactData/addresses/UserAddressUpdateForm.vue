<template>
    <el-form label-position="top" ref="form" :rules="validationRules" :model="userAddress">
        <el-form-item :label="$t('profile.contactInformation.addresses.address')" prop="address">
            <el-input v-model="userAddress.address"></el-input>
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
    name: 'UserAddressUpdateForm',
    components: { FullWidthButton },
    emits: ['update:userAddressForm', 'updateAddress'],
    data() {
        return {
            validationRules: {
                address: {
                    required: true
                }
            }
        }
    },
    methods: {
        async onSubmit() {
            await this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$emit('updateAddress', this.userAddress)
                }
            })
        }
    },
    props: {
        userAddressForm: {
            required: true,
            type: Object
        },
        pending: {
            required: true,
            type: Boolean
        }
    },
    computed: {
        userAddress: {
            get() {
                return this.userAddressForm
            },
            set(value) {
                this.$emit('update:userAddressForm', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
