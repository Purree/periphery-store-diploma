<template>
    <el-form label-position="top" :rules="validationRules" ref="form" :model="product">
        <errors-alert :errors="errors"/>
        <el-form-item :label="$t('product.updateProduct.title')" prop="title" class="form-item">
            <el-input
                class="form-item-input"
                v-model="product.title"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.metaTitle')" prop="metaTitle" class="form-item">
            <el-input
                class="form-item-input"
                v-model="product.metaTitle"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.description')" prop="description" class="form-item">
            <el-input
                class="form-item-input"
                v-model="product.description"
                :autosize="{ minRows: 3 }"
                type="textarea"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.previewImage')" prop="previewImage" class="form-item">
            <el-upload
                class="form-item-input"
                :drag="true"
                :limit="1"
                v-model:file-list="product.previewImage"
                list-type="picture"
                accept="image/png, image/gif, image/jpeg"
                :auto-upload="false"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.price')" prop="price" class="form-item">
            <el-input-number
                class="form-item-input"
                v-model="product.price"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.discount')" prop="discount" class="form-item">
            <el-input-number
                :min="0"
                :max="100"
                class="form-item-input"
                v-model="product.discount"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.quantity')" prop="quantity" class="form-item">
            <el-input-number
                class="form-item-input"
                :min="0"
                v-model="product.quantity"/>
        </el-form-item>
        <el-form-item :label="$t('product.updateProduct.is_available')" prop="is_available" class="form-item">
            <el-switch
                class="form-item-input"
                :active-text="$t('product.updateProduct.available')"
                :inactive-text="$t('product.updateProduct.unavailable')"
                v-model="product.is_available"
                size="large"
            />
        </el-form-item>
        <full-width-button @click="onSubmit()">{{ $t('general.save') }}</full-width-button>
    </el-form>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'

export default {
    name: 'ProductUpdateForm',
    components: { ErrorsAlert, FullWidthButton },
    emits: ['updateProduct'],
    data() {
        return {
            product: {
                title: '',
                metaTitle: '',
                description: '',
                previewImage: [],
                price: -1,
                discount: 0,
                quantity: 0,
                is_available: false
            },
            validationRules: {
                title: { required: true },
                metaTitle: { required: true },
                description: { required: true },
                price: { type: 'number' },
                discount: { type: 'number' },
                quantity: { type: 'number' },
                is_available: { required: true }
            },
            errors: {}
        }
    },
    methods: {
        async onSubmit() {
            await this.$refs.form.validate((valid, fields) => {
                if (valid) {
                    this.$emit('updateProduct', this.product)
                } else {
                    this.errors = {
                        ...this.errors,
                        ...{ validation: [this.$t('profile.mainInformation.errors.validationMessage')] }
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.form-item, .form-item-input {
    width: 100%;
}
</style>
