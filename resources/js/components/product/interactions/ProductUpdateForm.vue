<template>
    <el-form label-position="top" :rules="validationRules" ref="form" :model="product">
        <errors-alert :errors="{...requestErrors, ...errors}"/>
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
        <el-form-item prop="previewImage" class="form-item">
            <template #label>
                {{ $t('product.updateProduct.previewImage') }}
                <el-popover
                    placement="top-start"
                    :title="$t('general.attention')"
                    trigger="hover"
                    :content="$tc('product.updateProduct.previewImageInfo', 512)"
                >
                    <template #reference>
                        <font-awesome-icon class="preview-image-info-popover-icon" icon="circle-info"/>
                    </template>
                </el-popover>
            </template>
            <template #default>
                <el-upload
                    class="form-item-input"
                    :drag="true"
                    :limit="1"
                    v-model:file-list="product.previewImage"
                    list-type="picture"
                    accept="image/png, image/gif, image/jpeg"
                    :auto-upload="false"/>
            </template>
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
        <el-form-item :label="$t('product.updateProduct.isAvailable')" prop="isAvailable" class="form-item">
            <el-switch
                class="form-item-input"
                :active-text="$t('product.updateProduct.available')"
                :inactive-text="$t('product.updateProduct.unavailable')"
                v-model="product.isAvailable"
                size="large"
            />
        </el-form-item>
        <full-width-button :pending="pending" @click="onSubmit()">{{ $t('general.save') }}</full-width-button>
    </el-form>
</template>

<script>
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'ProductUpdateForm',
    components: {
        FontAwesomeIcon,
        ErrorsAlert,
        FullWidthButton
    },
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
                isAvailable: false
            },
            validationRules: {
                title: { required: true },
                metaTitle: { required: true },
                description: { required: true },
                price: { type: 'number' },
                discount: { type: 'number' },
                quantity: { type: 'number' },
                isAvailable: { required: true }
            },
            errors: {}
        }
    },
    props: {
        pending: {
            required: false,
            type: Boolean,
            default: false
        },
        requestErrors: {
            required: false,
            type: Object,
            default: () => {
            }
        }
    },
    methods: {
        async onSubmit() {
            this.errors = {}

            await this.$refs.form.validate((valid, fields) => {
                if (valid) {
                    this.onFormValidation()
                } else {
                    this.errors = {
                        ...this.errors,
                        ...{ validation: [this.$t('profile.mainInformation.errors.validationMessage')] }
                    }
                }
            })
        },
        onFormValidation() {
            const product = Object.assign({}, this.product)
            product.previewImage = product.previewImage.length === 1 ? product.previewImage[0].raw : null
            product.isAvailable = product.isAvailable ? '1' : '0'

            const productFormData = new FormData()
            Object.keys(product).forEach((key) => {
                if (product[key] !== null) {
                    productFormData.append(key, product[key])
                }
            })

            this.$emit('updateProduct', productFormData)
        }
    }
}
</script>

<style scoped>
.form-item, .form-item-input {
    width: 100%;
}
.preview-image-info-popover-icon {
    color: var(--el-color-primary);
}
.preview-image-info-popover-icon:hover {
    cursor: pointer;
}
</style>
